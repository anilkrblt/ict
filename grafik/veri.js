/* ICT Grafik Laboratuvarı — veri katmanı
 *
 * Mum verisi üç kaynaktan gelebilir:
 *   1. Binance genel API (anahtar gerekmiyor, tarayıcıdan doğrudan çağrılır)
 *   2. CSV dosyası (TradingView / MT4 / genel dışa aktarımlar)
 *   3. Sentetik örnek veri (çevrimdışı çalışmak ve dedektörleri denemek için)
 *
 * Mum biçimi her yerde aynı:  {t: ms, o, h, l, c, v}
 */
(function (global) {
  'use strict';

  const ARALIKLAR = [
    { id: '5m',  ad: '5 dakika',  ms: 5 * 60e3 },
    { id: '15m', ad: '15 dakika', ms: 15 * 60e3 },
    { id: '1h',  ad: '1 saat',    ms: 60 * 60e3 },
    { id: '4h',  ad: '4 saat',    ms: 4 * 60 * 60e3 },
    { id: '1d',  ad: 'Günlük',    ms: 24 * 60 * 60e3 },
    { id: '1w',  ad: 'Haftalık',  ms: 7 * 24 * 60 * 60e3 },
  ];

  function aralikMs(id) {
    const a = ARALIKLAR.find(x => x.id === id);
    return a ? a.ms : 60 * 60e3;
  }

  /* ---------- Binance ---------- */

  async function binanceCek(sembol, aralik, adet) {
    const url = 'https://api.binance.com/api/v3/klines?symbol=' +
      encodeURIComponent(sembol.toUpperCase()) +
      '&interval=' + encodeURIComponent(aralik) +
      '&limit=' + Math.min(1000, adet || 500);
    const yanit = await fetch(url);
    if (!yanit.ok) {
      let mesaj = 'Binance ' + yanit.status;
      try { const j = await yanit.json(); if (j && j.msg) mesaj += ' — ' + j.msg; } catch (e) {}
      throw new Error(mesaj);
    }
    const ham = await yanit.json();
    return ham.map(k => ({
      t: k[0], o: +k[1], h: +k[2], l: +k[3], c: +k[4], v: +k[5],
    }));
  }

  /* ---------- CSV ---------- */

  const BASLIK_ESLESME = {
    zaman: ['time', 'date', 'datetime', 'timestamp', 'tarih', 'zaman', 'open time', 'opentime', 'local time'],
    o: ['open', 'o', 'acilis', 'açılış'],
    h: ['high', 'h', 'yuksek', 'yüksek', 'max'],
    l: ['low', 'l', 'dusuk', 'düşük', 'min'],
    c: ['close', 'c', 'kapanis', 'kapanış', 'last', 'price'],
    v: ['volume', 'vol', 'v', 'hacim', 'tickvol', 'tick volume'],
  };

  // Ayraç ÖNCE belirlenir: aksi halde Türkçe ondalık virgülü ("1,0850") sütun sanılır.
  function ayracBul(satirlar) {
    const adaylar = [';', '\t', ','];
    let enIyi = ',', enIyiSayi = 0;
    for (const a of adaylar) {
      const sayilar = satirlar.slice(0, 5).map(s => s.split(a).length);
      const azami = Math.min.apply(null, sayilar);
      if (azami > enIyiSayi) { enIyiSayi = azami; enIyi = a; }
    }
    return enIyi;
  }

  function satirBol(satir, ayrac) {
    const parcalar = [];
    let mevcut = '', tirnak = false;
    for (let i = 0; i < satir.length; i++) {
      const ch = satir[i];
      if (ch === '"') { tirnak = !tirnak; continue; }
      if (!tirnak && ch === ayrac) { parcalar.push(mevcut); mevcut = ''; continue; }
      mevcut += ch;
    }
    parcalar.push(mevcut);
    return parcalar.map(s => s.trim());
  }

  function sayiCozumle(metin, ayrac) {
    let s = String(metin).trim();
    // Ayraç virgül değilse, virgül ondalık ayırıcıdır (1,0850). Değilse binlik (1,234.5).
    if (ayrac !== ',') s = s.replace(/\s/g, '').replace(',', '.');
    else s = s.replace(/\s/g, '');
    return parseFloat(s);
  }

  function zamanCozumle(metin, ikinciAlan) {
    if (metin == null) return NaN;
    const s = String(metin).trim();
    if (/^\d{10}$/.test(s)) return +s * 1000;          // saniye
    if (/^\d{13}$/.test(s)) return +s;                  // milisaniye
    // MT4 biçimi: 2024.03.15 ve ayrı sütunda 09:30
    let d = s.replace(/\./g, '-');
    if (ikinciAlan && /^\d{1,2}:\d{2}/.test(ikinciAlan)) d += ' ' + ikinciAlan;
    // "2024-03-15 09:30:00" -> ISO'ya yakınlaştır.
    // Saat dilimi işareti yoksa UTC varsayılır: yerel makine saatine göre kayma olmasın.
    let iso = d.replace(' ', 'T');
    if (!/[Zz]|[+-]\d{2}:?\d{2}$/.test(iso) && /T\d/.test(iso)) iso += 'Z';
    let ms = Date.parse(iso);
    if (isNaN(ms)) ms = Date.parse(d);
    return ms;
  }

  function csvCozumle(metin, kaymaSaat) {
    const satirlar = metin.split(/\r?\n/).filter(s => s.trim().length);
    if (!satirlar.length) throw new Error('Dosya boş.');
    const ayrac = ayracBul(satirlar);
    const kayma = (parseFloat(kaymaSaat) || 0) * 3600e3;

    let basliklar = satirBol(satirlar[0], ayrac).map(s => s.toLowerCase());
    let basSatir = 1;
    const sayisalMi = basliklar.every(b => b === '' || !isNaN(parseFloat(b)));
    let sut = {};
    if (sayisalMi) {
      // Başlık yok: zaman,o,h,l,c[,v] sırası varsayılır.
      basSatir = 0;
      sut = { zaman: 0, o: 1, h: 2, l: 3, c: 4, v: 5, zaman2: -1 };
    } else {
      for (const anahtar of Object.keys(BASLIK_ESLESME)) {
        sut[anahtar] = basliklar.findIndex(b => BASLIK_ESLESME[anahtar].includes(b));
      }
      // MT4: ayrı tarih ve saat sütunu
      sut.zaman2 = basliklar.findIndex(b => b === 'time' || b === 'saat');
      if (sut.zaman2 === sut.zaman) sut.zaman2 = -1;
      if (sut.zaman < 0) sut.zaman = 0;
      const eksik = ['o', 'h', 'l', 'c'].filter(k => sut[k] < 0);
      if (eksik.length) {
        throw new Error('Sütun bulunamadı: ' + eksik.join(', ') +
          '. Beklenen başlıklar: time, open, high, low, close.');
      }
    }

    const mumlar = [];
    for (let i = basSatir; i < satirlar.length; i++) {
      const p = satirBol(satirlar[i], ayrac);
      if (p.length < 5) continue;
      const t = zamanCozumle(p[sut.zaman], sut.zaman2 >= 0 ? p[sut.zaman2] : null);
      const o = sayiCozumle(p[sut.o], ayrac);
      const h = sayiCozumle(p[sut.h], ayrac);
      const l = sayiCozumle(p[sut.l], ayrac);
      const c = sayiCozumle(p[sut.c], ayrac);
      const v = sut.v >= 0 ? sayiCozumle(p[sut.v], ayrac) : 0;
      if (isNaN(t) || isNaN(o) || isNaN(h) || isNaN(l) || isNaN(c)) continue;
      mumlar.push({ t: t + kayma, o, h, l, c, v: isNaN(v) ? 0 : v });
    }
    if (mumlar.length < 5) throw new Error('Okunabilir mum sayısı 5\'ten az. Sütunları kontrol et.');
    mumlar.sort((a, b) => a.t - b.t);
    return mumlar;
  }

  /* ---------- Sentetik örnek veri ---------- */

  // Sabit tohum: her açılışta aynı grafik gelir, dedektör çıktısı tekrarlanabilir olur.
  function sahteRastgele(tohum) {
    let s = tohum >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  function ornekVeri(adet, aralikId, tohum) {
    adet = adet || 400;
    const ms = aralikMs(aralikId || '1h');
    const rnd = sahteRastgele(tohum || 20240315);
    const mumlar = [];
    let fiyat = 100;
    let egim = 0;
    // Grafiğin son mumu şu ana yakın olsun ki seans/kill zone katmanı anlamlı görünsün.
    const bitis = Math.floor(Date.now() / ms) * ms;
    for (let i = adet - 1; i >= 0; i--) {
      const t = bitis - i * ms;
      if (i % 37 === 0) egim = (rnd() - 0.45) * 0.35;      // rejim değişimi
      const oynaklik = 0.4 + rnd() * 0.5;
      const o = fiyat;
      let c = o + egim + (rnd() - 0.5) * oynaklik * 3;
      // Ara sıra belirgin bir yer değiştirme (displacement) — FVG üretsin diye.
      if (rnd() > 0.94) c = o + (egim >= 0 ? 1 : -1) * oynaklik * (4 + rnd() * 5);
      const govdeUst = Math.max(o, c), govdeAlt = Math.min(o, c);
      const h = govdeUst + rnd() * oynaklik * 1.8;
      const l = govdeAlt - rnd() * oynaklik * 1.8;
      mumlar.push({ t, o: +o.toFixed(3), h: +h.toFixed(3), l: +l.toFixed(3), c: +c.toFixed(3), v: Math.round(rnd() * 1000) });
      fiyat = c;
    }
    return mumlar;
  }

  global.ICTVeri = { ARALIKLAR, aralikMs, binanceCek, csvCozumle, ornekVeri };
})(window);
