/* ICT Grafik Laboratuvarı — grafik motoru
 *
 * Bağımlılık yok: canvas üstüne mum grafiği, kaydırma/yakınlaştırma ve
 * dedektörlerin ürettiği katmanlar (kutu, seviye, çizgi, işaret, bant).
 *
 * Katman biçimleri:
 *   {tip:'kutu',    i1, i2|null, p1, p2, renk, etiket, kesikli}
 *   {tip:'seviye',  p, i1, i2|null, renk, etiket, kesikli, kalinlik}
 *   {tip:'cizgi',   i1, p1, i2, p2, renk, etiket, kesikli, kalinlik, ok}
 *   {tip:'isaret',  i, p, renk, metin, yon:'yukari'|'asagi'}
 *   {tip:'bant',    i1, i2, renk, etiket}          (dikey seans bandı)
 *   {tip:'mum',     i, renk}                        (mum vurgusu)
 * Hepsinde ortak: bulguId (fare üstüne gelince eşleştirmek için)
 */
(function (global) {
  'use strict';

  const PAD = { ust: 14, sag: 68, alt: 26, sol: 8 };

  function Grafik(tuval, secenekler) {
    this.tuval = tuval;
    this.ctx = tuval.getContext('2d');
    this.mumlar = [];
    this.katmanlar = [];
    this.i0 = 0;            // soldaki mum indeksi (ondalıklı olabilir)
    this.adet = 160;        // görünür mum sayısı
    this.fare = null;       // {x, y}
    this.vurgulu = null;    // bulguId
    this.etiketGoster = true;
    this.sonFiyatGoster = true;
    this.acikMumVar = false;   // son mum kapanmadıysa: çizilir ama analiz edilmez
    this.olay = secenekler && secenekler.olay || function () {};
    this.basamak = 2;
    this._bagla();
  }

  Grafik.prototype.veriKur = function (mumlar, gorunumuKoru) {
    const yapisik = gorunumuKoru && this.mumlar.length ? this.sagdaMi() : false;
    this.mumlar = mumlar || [];
    this.basamak = this._basamakBul();
    if (!gorunumuKoru) {
      this.adet = Math.min(160, Math.max(30, this.mumlar.length));
      this.i0 = Math.max(0, this.mumlar.length - this.adet);
    } else if (yapisik) {
      this.sagaYapis();
    }
    this.ciz();
  };

  Grafik.prototype._basamakBul = function () {
    if (!this.mumlar.length) return 2;
    const orta = this.mumlar[Math.floor(this.mumlar.length / 2)].c;
    if (orta >= 1000) return 2;
    if (orta >= 10) return 3;
    if (orta >= 1) return 4;
    return 6;
  };

  Grafik.prototype.fiyatYaz = function (p) {
    if (p == null || !isFinite(p)) return '—';
    return p.toFixed(this.basamak);
  };

  Grafik.prototype.katmanKur = function (katmanlar) {
    this.katmanlar = katmanlar || [];
    this.ciz();
  };

  /* ---------- ölçek ---------- */

  Grafik.prototype._olcu = function () {
    const g = this.tuval.getBoundingClientRect();
    const w = g.width, h = g.height;
    return {
      w, h,
      x0: PAD.sol, x1: w - PAD.sag,
      y0: PAD.ust, y1: h - PAD.alt,
      gw: Math.max(1, w - PAD.sol - PAD.sag),
      gh: Math.max(1, h - PAD.ust - PAD.alt),
    };
  };

  Grafik.prototype._gorunur = function () {
    const bas = Math.max(0, Math.floor(this.i0));
    const son = Math.min(this.mumlar.length - 1, Math.ceil(this.i0 + this.adet));
    return { bas, son };
  };

  Grafik.prototype._fiyatAraligi = function () {
    const { bas, son } = this._gorunur();
    let min = Infinity, max = -Infinity;
    for (let i = bas; i <= son; i++) {
      const m = this.mumlar[i];
      if (!m) continue;
      if (m.l < min) min = m.l;
      if (m.h > max) max = m.h;
    }
    if (!isFinite(min) || !isFinite(max)) { min = 0; max = 1; }
    const acik = max - min || Math.abs(max) * 0.01 || 1;
    // Ölçeğe katılmak isteyen katmanlar aralığı genişletebilir — ama sınırlı.
    const alt = min - acik * 0.6, ust = max + acik * 0.6;
    for (const k of this.katmanlar) {
      if (!k.olcegeKat) continue;
      if (k.i2 != null && (k.i2 < bas || (k.i1 != null && k.i1 > son))) continue;
      const noktalar = [k.p, k.p1, k.p2].filter(v => v != null && isFinite(v));
      for (const p of noktalar) {
        if (p > alt && p < min) min = p;
        if (p < ust && p > max) max = p;
      }
    }
    const bosluk = (max - min) * 0.08 || 1;
    return { min: min - bosluk, max: max + bosluk };
  };

  Grafik.prototype._donusum = function () {
    const o = this._olcu();
    const fa = this._fiyatAraligi();
    const mumGen = o.gw / this.adet;
    const self = this;
    return {
      olcu: o, fa: fa, mumGen: mumGen,
      x: function (i) { return o.x0 + (i - self.i0 + 0.5) * mumGen; },
      i: function (x) { return (x - o.x0) / mumGen + self.i0 - 0.5; },
      y: function (p) { return o.y0 + (fa.max - p) / (fa.max - fa.min) * o.gh; },
      p: function (y) { return fa.max - (y - o.y0) / o.gh * (fa.max - fa.min); },
    };
  };

  /* ---------- etkileşim ---------- */

  Grafik.prototype._bagla = function () {
    const self = this;
    let surukleniyor = false, sonX = 0, basladi = 0;

    this.tuval.addEventListener('mousedown', function (e) {
      surukleniyor = true; sonX = e.clientX; basladi = self.i0;
      self.tuval.style.cursor = 'grabbing';
    });
    window.addEventListener('mouseup', function () {
      surukleniyor = false; self.tuval.style.cursor = '';
    });
    window.addEventListener('mousemove', function (e) {
      if (!surukleniyor) return;
      const d = self._donusum();
      self.i0 = basladi - (e.clientX - sonX) / d.mumGen;
      self._sinirla();
      self.ciz();
    });
    this.tuval.addEventListener('mousemove', function (e) {
      const g = self.tuval.getBoundingClientRect();
      self.fare = { x: e.clientX - g.left, y: e.clientY - g.top };
      self.ciz();
      self.olay('imlec', self.imlecBilgisi());
    });
    this.tuval.addEventListener('mouseleave', function () {
      self.fare = null; self.ciz(); self.olay('imlec', null);
    });
    this.tuval.addEventListener('wheel', function (e) {
      e.preventDefault();
      const g = self.tuval.getBoundingClientRect();
      const d = self._donusum();
      const imlecIndeks = d.i(e.clientX - g.left);
      const kat = e.deltaY > 0 ? 1.15 : 1 / 1.15;
      const yeni = Math.max(15, Math.min(self.mumlar.length || 500, Math.round(self.adet * kat)));
      const oran = (imlecIndeks - self.i0) / self.adet;
      self.adet = yeni;
      self.i0 = imlecIndeks - oran * yeni;
      self._sinirla();
      self.ciz();
    }, { passive: false });
    this.tuval.addEventListener('dblclick', function () { self.tumunuGoster(); });
  };

  Grafik.prototype._sinirla = function () {
    const n = this.mumlar.length;
    if (!n) { this.i0 = 0; return; }
    this.adet = Math.max(15, Math.min(n + 40, this.adet));
    this.i0 = Math.max(-10, Math.min(n - this.adet * 0.35, this.i0));
  };

  Grafik.prototype.tumunuGoster = function () {
    this.adet = Math.max(30, this.mumlar.length);
    this.i0 = 0;
    this.ciz();
  };

  Grafik.prototype.odakla = function (i1, i2) {
    const merkez = (i1 + (i2 == null ? i1 : i2)) / 2;
    const genislik = Math.max(45, ((i2 == null ? i1 : i2) - i1) * 3);
    this.adet = Math.min(Math.max(genislik, 45), Math.max(45, this.mumlar.length));
    this.i0 = merkez - this.adet / 2;
    this._sinirla();
    this.ciz();
  };

  Grafik.prototype.imlecBilgisi = function () {
    if (!this.fare || !this.mumlar.length) return null;
    const d = this._donusum();
    const i = Math.round(d.i(this.fare.x));
    const m = this.mumlar[i];
    if (!m) return null;
    return { i, mum: m, fiyat: d.p(this.fare.y), bulgular: this.imlecAltindakiler(i, d.p(this.fare.y)) };
  };

  // Fare bir katmanın üstündeyse o katmanın bulgu kimliğini döndür.
  Grafik.prototype.imlecAltindakiler = function (i, fiyat) {
    const bulunan = [];
    const d = this._donusum();
    const tolerans = Math.abs(d.p(0) - d.p(6));
    for (const k of this.katmanlar) {
      if (!k.bulguId) continue;
      const i1 = k.i1 != null ? k.i1 : k.i;
      const i2 = k.i2 != null ? k.i2 : (k.i1 != null ? k.i1 : k.i);
      const sagUcu = k.i2 === null ? this.mumlar.length : i2;
      if (i < i1 - 0.5 || i > sagUcu + 0.5) continue;
      let deger = false;
      if (k.tip === 'kutu') {
        deger = fiyat >= Math.min(k.p1, k.p2) && fiyat <= Math.max(k.p1, k.p2);
      } else if (k.tip === 'seviye') {
        deger = Math.abs(fiyat - k.p) < tolerans;
      } else if (k.tip === 'bant') {
        deger = true;
      } else if (k.tip === 'isaret' || k.tip === 'mum') {
        deger = Math.abs(fiyat - (k.p != null ? k.p : fiyat)) < tolerans * 3;
      }
      if (deger && bulunan.indexOf(k.bulguId) < 0) bulunan.push(k.bulguId);
    }
    return bulunan;
  };

  /* ---------- çizim ---------- */

  function renkAlfa(renk, a) {
    // '#rrggbb' -> 'rgba(...)'
    if (renk[0] !== '#') return renk;
    const r = parseInt(renk.slice(1, 3), 16), g = parseInt(renk.slice(3, 5), 16), b = parseInt(renk.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  Grafik.prototype._stil = function () {
    const s = getComputedStyle(this.tuval);
    return {
      zemin: s.getPropertyValue('--gz-zemin').trim() || '#ffffff',
      izgara: s.getPropertyValue('--gz-izgara').trim() || '#eceae6',
      metin: s.getPropertyValue('--gz-metin').trim() || '#6b6660',
      metinGuclu: s.getPropertyValue('--gz-metin-guclu').trim() || '#1c1a17',
      yukari: s.getPropertyValue('--gz-yukari').trim() || '#2e7d5b',
      asagi: s.getPropertyValue('--gz-asagi').trim() || '#b5452f',
      capraz: s.getPropertyValue('--gz-capraz').trim() || '#9a948b',
    };
  };

  Grafik.prototype.ciz = function () {
    const tuval = this.tuval, ctx = this.ctx;
    const dpr = window.devicePixelRatio || 1;
    const g = tuval.getBoundingClientRect();
    if (tuval.width !== Math.round(g.width * dpr) || tuval.height !== Math.round(g.height * dpr)) {
      tuval.width = Math.round(g.width * dpr);
      tuval.height = Math.round(g.height * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const stil = this._stil();
    ctx.clearRect(0, 0, g.width, g.height);
    ctx.fillStyle = stil.zemin;
    ctx.fillRect(0, 0, g.width, g.height);
    if (!this.mumlar.length) {
      ctx.fillStyle = stil.metin;
      ctx.font = '13px ui-sans-serif, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Veri yok', g.width / 2, g.height / 2);
      return;
    }

    const d = this._donusum();
    this._izgaraCiz(ctx, d, stil);
    this._katmanCiz(ctx, d, stil, ['bant']);
    this._katmanCiz(ctx, d, stil, ['kutu']);
    this._mumlarCiz(ctx, d, stil);
    this._katmanCiz(ctx, d, stil, ['seviye', 'cizgi', 'isaret', 'mum']);
    this._sonFiyatCiz(ctx, d, stil);
    this._eksenCiz(ctx, d, stil);
    this._imlecCiz(ctx, d, stil);
  };

  Grafik.prototype._izgaraCiz = function (ctx, d, stil) {
    const o = d.olcu;
    ctx.strokeStyle = stil.izgara;
    ctx.lineWidth = 1;
    const adimlar = this._fiyatAdimlari(d.fa);
    ctx.beginPath();
    for (const p of adimlar) {
      const y = Math.round(d.y(p)) + 0.5;
      ctx.moveTo(o.x0, y); ctx.lineTo(o.x1, y);
    }
    ctx.stroke();
  };

  Grafik.prototype._fiyatAdimlari = function (fa) {
    const acik = fa.max - fa.min;
    const kaba = acik / 6;
    const us = Math.pow(10, Math.floor(Math.log10(kaba)));
    const aday = [1, 2, 2.5, 5, 10].map(k => k * us);
    const adim = aday.find(a => a >= kaba) || us * 10;
    const bas = Math.ceil(fa.min / adim) * adim;
    const liste = [];
    for (let p = bas; p <= fa.max; p += adim) liste.push(p);
    return liste;
  };

  Grafik.prototype._mumlarCiz = function (ctx, d, stil) {
    const { bas, son } = this._gorunur();
    const gen = Math.max(1, Math.min(d.mumGen * 0.68, 22));
    const yariGen = gen / 2;
    const ince = d.mumGen < 3;
    for (let i = bas; i <= son; i++) {
      const m = this.mumlar[i];
      if (!m) continue;
      const x = d.x(i);
      const yukari = m.c >= m.o;
      const renk = yukari ? stil.yukari : stil.asagi;
      ctx.strokeStyle = renk;
      ctx.fillStyle = renk;
      ctx.lineWidth = Math.min(1.4, Math.max(0.8, d.mumGen * 0.12));
      const xr = Math.round(x) + 0.5;
      ctx.beginPath();
      ctx.moveTo(xr, Math.round(d.y(m.h)));
      ctx.lineTo(xr, Math.round(d.y(m.l)));
      ctx.stroke();
      if (!ince) {
        const yU = d.y(Math.max(m.o, m.c)), yA = d.y(Math.min(m.o, m.c));
        const h = Math.max(1, yA - yU);
        if (yukari) {
          ctx.fillStyle = stil.zemin;
          ctx.fillRect(x - yariGen, yU, gen, h);
          ctx.strokeRect(Math.round(x - yariGen) + 0.5, Math.round(yU) + 0.5, Math.round(gen), Math.round(h));
        } else {
          ctx.fillRect(x - yariGen, yU, gen, h);
        }
      }
    }
  };

  Grafik.prototype._katmanCiz = function (ctx, d, stil, tipler) {
    const o = d.olcu;
    const n = this.mumlar.length;
    ctx.save();
    ctx.beginPath();
    ctx.rect(o.x0, o.y0, o.gw, o.gh);
    ctx.clip();
    const etiketler = [];
    for (const k of this.katmanlar) {
      if (tipler.indexOf(k.tip) < 0) continue;
      const vurgu = this.vurgulu && k.bulguId === this.vurgulu;
      const sonik = this.vurgulu && !vurgu;
      const alfaKat = sonik ? 0.28 : 1;
      const renk = k.renk || stil.metin;
      if (k.tip === 'bant') {
        const x1 = d.x(k.i1) - d.mumGen / 2, x2 = d.x(k.i2 == null ? n : k.i2) + d.mumGen / 2;
        if (x2 < o.x0 || x1 > o.x1) continue;
        ctx.fillStyle = renkAlfa(renk, (k.dolguAlfa != null ? k.dolguAlfa : 0.07) * alfaKat);
        ctx.fillRect(x1, o.y0, x2 - x1, o.gh);
        if (k.etiket && this.etiketGoster && x2 - x1 > 26) {
          etiketler.push({ x: x1 + 3, y: o.y0 + 11, metin: k.etiket, renk: renk, alfa: alfaKat, kucuk: true });
        }
      } else if (k.tip === 'kutu') {
        const x1 = d.x(k.i1) - d.mumGen * 0.45;
        const x2 = d.x(k.i2 == null ? n - 1 : k.i2) + d.mumGen * 0.45;
        const y1 = d.y(Math.max(k.p1, k.p2)), y2 = d.y(Math.min(k.p1, k.p2));
        if (x2 < o.x0 || x1 > o.x1) continue;
        ctx.fillStyle = renkAlfa(renk, (k.dolguAlfa != null ? k.dolguAlfa : 0.16) * alfaKat);
        ctx.fillRect(x1, y1, Math.max(2, x2 - x1), Math.max(1.5, y2 - y1));
        ctx.strokeStyle = renkAlfa(renk, (vurgu ? 1 : 0.75) * alfaKat);
        ctx.lineWidth = vurgu ? 2 : 1;
        ctx.setLineDash(k.kesikli ? [4, 3] : []);
        ctx.strokeRect(Math.round(x1) + 0.5, Math.round(y1) + 0.5, Math.round(Math.max(2, x2 - x1)), Math.round(Math.max(1.5, y2 - y1)));
        ctx.setLineDash([]);
        if (k.etiket && this.etiketGoster) {
          etiketler.push({ x: Math.max(o.x0 + 2, x1 + 3), y: y1 - 4, metin: k.etiket, renk: renk, alfa: alfaKat });
        }
      } else if (k.tip === 'seviye' || k.tip === 'cizgi') {
        const yatay = k.tip === 'seviye';
        const x1 = d.x(k.i1 != null ? k.i1 : 0);
        const x2 = d.x(k.i2 == null ? n - 1 : k.i2);
        const y1 = d.y(yatay ? k.p : k.p1);
        const y2 = d.y(yatay ? k.p : k.p2);
        if (Math.max(x1, x2) < o.x0 || Math.min(x1, x2) > o.x1) continue;
        ctx.strokeStyle = renkAlfa(renk, (vurgu ? 1 : 0.85) * alfaKat);
        ctx.lineWidth = k.kalinlik || (vurgu ? 2 : 1.2);
        ctx.setLineDash(k.kesikli ? [5, 4] : []);
        ctx.beginPath();
        ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.setLineDash([]);
        if (k.ok) {
          const aci = Math.atan2(y2 - y1, x2 - x1);
          ctx.beginPath();
          ctx.moveTo(x2, y2);
          ctx.lineTo(x2 - 9 * Math.cos(aci - 0.4), y2 - 9 * Math.sin(aci - 0.4));
          ctx.lineTo(x2 - 9 * Math.cos(aci + 0.4), y2 - 9 * Math.sin(aci + 0.4));
          ctx.closePath();
          ctx.fillStyle = renkAlfa(renk, alfaKat);
          ctx.fill();
        }
        if (k.etiket && this.etiketGoster) {
          etiketler.push({ x: Math.min(o.x1 - 4, Math.max(x1, x2)) , y: y2 - 4, metin: k.etiket, renk: renk, alfa: alfaKat, saga: true });
        }
      } else if (k.tip === 'isaret') {
        const x = d.x(k.i), y = d.y(k.p);
        if (x < o.x0 - 20 || x > o.x1 + 20) continue;
        const yon = k.yon === 'asagi' ? 1 : -1;
        ctx.fillStyle = renkAlfa(renk, alfaKat);
        ctx.beginPath();
        ctx.moveTo(x, y + yon * 4);
        ctx.lineTo(x - 5, y + yon * 12);
        ctx.lineTo(x + 5, y + yon * 12);
        ctx.closePath();
        ctx.fill();
        if (k.metin && this.etiketGoster) {
          etiketler.push({ x: x + 7, y: y + yon * 12, metin: k.metin, renk: renk, alfa: alfaKat, kucuk: true });
        }
      } else if (k.tip === 'mum') {
        const x = d.x(k.i);
        const m = this.mumlar[k.i];
        if (!m || x < o.x0 - 10 || x > o.x1 + 10) continue;
        ctx.strokeStyle = renkAlfa(renk, alfaKat);
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 2]);
        const gen = Math.max(4, d.mumGen * 0.9);
        ctx.strokeRect(x - gen / 2, d.y(m.h) - 2, gen, d.y(m.l) - d.y(m.h) + 4);
        ctx.setLineDash([]);
      }
    }
    // Etiketler en üstte, üst üste binmeyi azaltmak için kaba bir ayıklama ile.
    const kullanilan = [];
    ctx.textBaseline = 'alphabetic';
    for (const e of etiketler) {
      ctx.font = (e.kucuk ? '9.5px ' : '10.5px ') + 'ui-sans-serif, system-ui, sans-serif';
      const gen = ctx.measureText(e.metin).width;
      let x = e.saga ? e.x - gen - 4 : e.x;
      const y = Math.max(o.y0 + 9, Math.min(o.y1 - 2, e.y));
      const cakisma = kullanilan.some(u => Math.abs(u.y - y) < 11 && x < u.x + u.gen + 4 && x + gen + 4 > u.x);
      if (cakisma) continue;
      kullanilan.push({ x, y, gen });
      ctx.fillStyle = renkAlfa(stil.zemin === '#ffffff' ? '#ffffff' : stil.zemin, 0.82 * e.alfa);
      ctx.fillRect(x - 2, y - 9, gen + 4, 11);
      ctx.fillStyle = renkAlfa(e.renk, e.alfa);
      ctx.textAlign = 'left';
      ctx.fillText(e.metin, x, y);
    }
    ctx.restore();
  };

  Grafik.prototype._eksenCiz = function (ctx, d, stil) {
    const o = d.olcu;
    ctx.fillStyle = stil.metin;
    ctx.font = '10.5px ui-monospace, SFMono-Regular, Menlo, monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    for (const p of this._fiyatAdimlari(d.fa)) {
      ctx.fillText(this.fiyatYaz(p), o.x1 + 6, d.y(p));
    }
    // Zaman ekseni
    const { bas, son } = this._gorunur();
    const gorunurAdet = son - bas + 1;
    const adim = Math.max(1, Math.round(gorunurAdet / 7));
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    let oncekiGun = null;
    for (let i = bas; i <= son; i += adim) {
      const m = this.mumlar[i];
      if (!m) continue;
      const tarih = new Date(m.t);
      const gun = tarih.toISOString().slice(0, 10);
      const uzun = gun !== oncekiGun;
      oncekiGun = gun;
      const metin = uzun
        ? tarih.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short' })
        : tarih.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
      ctx.fillText(metin, d.x(i), o.y1 + 6);
    }
  };

  /* Son fiyat çizgisi ve sağ kenardaki etiket. Canlı akışta anlık kapanışı gösterir;
     son mum kapanmamışsa o mum ayrıca işaretlenir — çünkü analiz onu saymaz (§16). */
  Grafik.prototype._sonFiyatCiz = function (ctx, d, stil) {
    if (!this.sonFiyatGoster || !this.mumlar.length) return;
    const o = d.olcu;
    const sonIx = this.mumlar.length - 1;
    const m = this.mumlar[sonIx];
    const y = d.y(m.c);
    if (y < o.y0 || y > o.y1) return;
    const renk = m.c >= m.o ? stil.yukari : stil.asagi;
    ctx.save();
    if (this.acikMumVar) {
      const x = d.x(sonIx);
      const gen = Math.max(3, d.mumGen * 0.9);
      ctx.fillStyle = renkAlfa(renk, 0.1);
      ctx.fillRect(x - gen / 2, o.y0, gen, o.gh);
    }
    ctx.strokeStyle = renkAlfa(renk, 0.7);
    ctx.setLineDash([2, 3]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(o.x0, Math.round(y) + 0.5);
    ctx.lineTo(o.x1, Math.round(y) + 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
    const metin = this.fiyatYaz(m.c);
    ctx.font = '10.5px ui-monospace, SFMono-Regular, Menlo, monospace';
    const gen = ctx.measureText(metin).width;
    ctx.fillStyle = renk;
    ctx.fillRect(o.x1 + 2, y - 8, gen + 8, 16);
    ctx.fillStyle = stil.zemin;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(metin, o.x1 + 6, y);
    ctx.restore();
  };

  /* Görünüm sağ kenara yapışıksa yeni mum geldiğinde orada kalsın. */
  Grafik.prototype.sagdaMi = function () {
    return this.i0 + this.adet >= this.mumlar.length - 2;
  };

  Grafik.prototype.sagaYapis = function () {
    this.i0 = this.mumlar.length - this.adet;
    this._sinirla();
  };

  Grafik.prototype._imlecCiz = function (ctx, d, stil) {
    if (!this.fare) return;
    const o = d.olcu;
    if (this.fare.x < o.x0 || this.fare.x > o.x1 || this.fare.y < o.y0 || this.fare.y > o.y1) return;
    const i = Math.round(d.i(this.fare.x));
    const x = d.x(i);
    ctx.save();
    ctx.strokeStyle = stil.capraz;
    ctx.setLineDash([3, 3]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(Math.round(x) + 0.5, o.y0); ctx.lineTo(Math.round(x) + 0.5, o.y1);
    ctx.moveTo(o.x0, Math.round(this.fare.y) + 0.5); ctx.lineTo(o.x1, Math.round(this.fare.y) + 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
    // Sağdaki fiyat etiketi
    const metin = this.fiyatYaz(d.p(this.fare.y));
    ctx.font = '10.5px ui-monospace, SFMono-Regular, Menlo, monospace';
    const gen = ctx.measureText(metin).width;
    ctx.fillStyle = stil.metinGuclu;
    ctx.fillRect(o.x1 + 2, this.fare.y - 8, gen + 8, 16);
    ctx.fillStyle = stil.zemin;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(metin, o.x1 + 6, this.fare.y);
    ctx.restore();
  };

  global.ICTGrafik = Grafik;
})(window);
