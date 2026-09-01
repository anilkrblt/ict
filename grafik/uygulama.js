/* ICT Grafik Laboratuvarı — arayüz
 * Dedektörleri seçtir, parametrelerini aç, grafiğe çiz, bulguları listele.
 */
(function () {
  'use strict';

  const $ = s => document.querySelector(s);
  const { DEDEKTORLER } = window.ICTDedektorler;
  const GRUP_SIRA = ['Yapı', 'PD Array', 'Likidite', 'Konum', 'Zaman'];
  const LISTE_SINIRI = 400;

  const depo = {
    al(k, v) { try { const x = localStorage.getItem(k); return x === null ? v : JSON.parse(x); } catch (e) { return v; } },
    yaz(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };

  // ?k=fvg,orderblock&kaynak=binance&sembol=ETHUSDT&aralik=4h&adet=600&pip=0.0001
  const sorgu = new URLSearchParams(location.search);
  const sorguKatmanlar = (sorgu.get('k') || '').split(',').map(x => x.trim()).filter(Boolean);

  const durum = {
    mumlar: [], ctx: null,
    secili: new Set(sorguKatmanlar.length ? sorguKatmanlar : depo.al('ict.grafik.secili', ['fvg'])),
    par: depo.al('ict.grafik.par', {}),
    acik: new Set(),
    bulgular: [], seciliBulgu: null,
    suzAktif: sorgu.get('suz') === '1',
    analiz: [],           // dedektörlere giden mumlar (kapanmamış son mum hariç)
    canli: false, akis: null, araMs: 3600e3,
  };

  /* ---------- tema ---------- */
  function temaUygula(t) {
    document.documentElement.setAttribute('data-theme', t);
    if (typeof grafik === 'object' && grafik) grafik.ciz();
  }
  document.documentElement.setAttribute('data-theme', depo.al('ict.theme', 'auto'));
  $('#tema').onclick = () => {
    const sira = ['auto', 'light', 'dark'];
    const yeni = sira[(sira.indexOf(document.documentElement.getAttribute('data-theme')) + 1) % 3];
    depo.yaz('ict.theme', yeni);
    temaUygula(yeni);
    $('#tema').title = 'Tema: ' + yeni;
  };

  /* ---------- grafik ---------- */
  const grafik = new window.ICTGrafik($('#tuval'), { olay: olayGeldi });
  window.addEventListener('resize', () => grafik.ciz());

  function olayGeldi(tur, veri) {
    if (tur !== 'imlec') return;
    const kutu = $('#okuma');
    if (!veri) { kutu.innerHTML = '<span>Grafiğin üstüne gel — mum, saat ve o noktadaki katmanlar burada.</span>'; return; }
    const m = veri.mum;
    const ny = durum.ctx ? durum.ctx.ny[veri.i] : null;
    const yon = m.c >= m.o ? 'boga' : 'ayi';
    const renk = yon === 'boga' ? 'var(--boga)' : 'var(--ayi)';
    const isim = veri.bulgular.map(id => {
      const b = durum.bulgular.find(x => x.id === id);
      return b ? b.baslik : null;
    }).filter(Boolean);
    kutu.innerHTML =
      '<span>#' + veri.i + '</span>' +
      '<span>' + new Date(m.t).toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }) + '</span>' +
      (ny ? '<span class="ny">NY ' + String(ny.saat).padStart(2, '0') + ':' + String(ny.dk).padStart(2, '0') +
        ' ' + ny.haftaGunu + '</span>' : '') +
      '<span style="color:' + renk + '">A <b>' + grafik.fiyatYaz(m.o) + '</b> Y <b>' + grafik.fiyatYaz(m.h) +
      '</b> D <b>' + grafik.fiyatYaz(m.l) + '</b> K <b>' + grafik.fiyatYaz(m.c) + '</b></span>' +
      (isim.length ? '<span style="color:var(--accent)">▸ ' + isim.slice(0, 4).join(' · ') +
        (isim.length > 4 ? ' +' + (isim.length - 4) : '') + '</span>' : '');
  }

  /* ---------- parametreler ---------- */
  function parAl(det) {
    const p = Object.assign({}, durum.par[det.id]);
    for (const x of det.parametreler) if (p[x.id] === undefined) p[x.id] = x.varsayilan;
    return p;
  }

  function parYaz(detId, parId, deger) {
    durum.par[detId] = durum.par[detId] || {};
    durum.par[detId][parId] = deger;
    depo.yaz('ict.grafik.par', durum.par);
  }

  /* ---------- sol panel ---------- */
  function listeCiz() {
    const kap = $('#katmanListe');
    kap.innerHTML = '';
    for (const grup of GRUP_SIRA) {
      const uyeler = DEDEKTORLER.filter(d => d.grup === grup);
      if (!uyeler.length) continue;
      const b = document.createElement('div');
      b.className = 'grup-ad';
      b.textContent = grup;
      kap.appendChild(b);
      for (const det of uyeler) kap.appendChild(kartCiz(det));
    }
    $('#seciliSayac').textContent = durum.secili.size + '/' + DEDEKTORLER.length;
  }

  function kartCiz(det) {
    const kart = document.createElement('div');
    kart.className = 'kart';
    const acikMi = durum.acik.has(det.id);
    const sn = det.secimNoktasi;
    const snSinif = sn === 0 ? 'sn0' : (sn >= 2 ? 'sn2' : '');

    const ust = document.createElement('div');
    ust.className = 'kart-ust';
    ust.innerHTML =
      '<input type="checkbox" ' + (durum.secili.has(det.id) ? 'checked' : '') + '>' +
      '<span class="kart-ad"><b>' + det.ad + '</b>' +
      '<span class="kaynak">' + det.kaynak + '</span></span>' +
      '<span class="rozet ' + snSinif + '" title="Seçim noktası sayısı — kaç yerde yorum gerekiyor">' + sn + ' sn</span>' +
      '<button class="kart-ac" title="Tanım ve parametreler">' + (acikMi ? '▾' : '▸') + '</button>';
    kart.appendChild(ust);

    ust.querySelector('input').onchange = e => {
      if (e.target.checked) { durum.secili.add(det.id); durum.acik.add(det.id); }
      else durum.secili.delete(det.id);
      depo.yaz('ict.grafik.secili', [...durum.secili]);
      listeCiz(); yenile();
    };
    ust.querySelector('.kart-ad').onclick = () => { ust.querySelector('.kart-ac').click(); };
    ust.querySelector('.kart-ac').onclick = () => {
      if (durum.acik.has(det.id)) durum.acik.delete(det.id); else durum.acik.add(det.id);
      listeCiz();
    };

    if (acikMi) {
      const govde = document.createElement('div');
      govde.className = 'kart-govde';
      govde.innerHTML =
        '<p>' + det.tanim + '</p>' +
        '<p class="uyari"><b>Uyarı.</b> ' + det.uyari + '</p>' +
        (det.belge ? '<p class="belge-link"><a href="index.html#islem-claude/' + det.belge +
          '" target="_blank" rel="noopener">Belgede oku →</a></p>' : '');
      const par = document.createElement('div');
      par.className = 'parametreler';
      const p = parAl(det);
      for (const x of det.parametreler) par.appendChild(parSatir(det, x, p[x.id]));
      govde.appendChild(par);
      kart.appendChild(govde);
    }
    return kart;
  }

  function parSatir(det, x, deger) {
    const sat = document.createElement('div');
    sat.className = 'par';
    const kimlik = 'par-' + det.id + '-' + x.id;
    let alan;
    if (x.tip === 'onay') {
      alan = document.createElement('input');
      alan.type = 'checkbox'; alan.checked = !!deger;
      alan.onchange = () => { parYaz(det.id, x.id, alan.checked); yenile(); };
    } else if (x.tip === 'secim') {
      alan = document.createElement('select');
      for (const s of x.secenekler) {
        const o = document.createElement('option');
        o.value = s.d; o.textContent = s.ad; o.selected = String(deger) === String(s.d);
        alan.appendChild(o);
      }
      alan.onchange = () => { parYaz(det.id, x.id, alan.value); yenile(); };
    } else {
      alan = document.createElement('input');
      alan.type = 'number'; alan.value = deger;
      alan.min = x.min; alan.max = x.max; alan.step = x.adim;
      alan.onchange = () => {
        let v = parseFloat(alan.value);
        if (isNaN(v)) v = x.varsayilan;
        v = Math.max(x.min, Math.min(x.max, v));
        alan.value = v;
        parYaz(det.id, x.id, v); yenile();
      };
    }
    alan.id = kimlik;
    const et = document.createElement('label');
    et.htmlFor = kimlik; et.textContent = x.ad;
    if (x.tip === 'onay') { sat.appendChild(alan); sat.appendChild(et); et.style.flex = '1'; }
    else { sat.appendChild(et); sat.appendChild(alan); }
    return sat;
  }

  /* ---------- analiz penceresi ----------
   * §16: "MUM KAPANMIŞ olmalı". Binance hem geçmişte hem canlı akışta son mumu
   * kapanmadan verir; o mum çizilir ama dedektörlere girmez. */
  function analizMumlari() {
    return ($('#kapaliMum').checked && durum.mumlar.length > 3)
      ? durum.mumlar.slice(0, -1) : durum.mumlar;
  }

  function ctxKur() {
    durum.analiz = analizMumlari();
    durum.ctx = window.ICTDedektorler.baglamKur(durum.analiz, { pip: parseFloat($('#pip').value) || 0 });
    grafik.acikMumVar = durum.analiz.length < durum.mumlar.length;
  }

  /* ---------- çalıştırma ---------- */
  let zamanlayici = null;
  function yenile() {
    clearTimeout(zamanlayici);
    zamanlayici = setTimeout(calistir, 40);
  }

  function calistir() {
    if (!durum.analiz.length) return;
    const t0 = performance.now();
    const bulgular = [];
    const katmanlar = [];
    const sayimlar = [];
    for (const det of DEDEKTORLER) {
      if (!durum.secili.has(det.id)) continue;
      let liste;
      try {
        liste = det.calistir(durum.analiz, parAl(det), durum.ctx) || [];
      } catch (e) {
        console.error(det.id, e);
        durumYaz(det.ad + ' hata verdi: ' + e.message, true);
        continue;
      }
      liste.forEach((b, ix) => {
        b.id = det.id + '#' + ix;
        b.detId = det.id;
        b.detAd = det.ad;
        for (const c of b.cizimler) c.bulguId = b.id;
        bulgular.push(b);
      });
      sayimlar.push(det.ad + ': ' + liste.length);
    }
    durum.bulgular = bulgular;
    // Süzgeç yalnız listeyi değil GRAFİĞİ de daraltır — tükenmiş array çizilmez.
    for (const b of suzulmus()) for (const c of b.cizimler) katmanlar.push(c);
    grafik.katmanKur(katmanlar);
    bulguListeCiz();
    $('#ozet').textContent = sayimlar.length
      ? sayimlar.join(' · ') + ' · ' + Math.round(performance.now() - t0) + 'ms'
      : 'katman seçilmedi';
  }

  /* ---------- bulgu listesi ---------- */
  function suzulmus() {
    if (!durum.suzAktif) return durum.bulgular;
    return durum.bulgular.filter(b =>
      !/tükendi|test edildi|gövde aşıldı|iptal|kırıldı|ALMA/i.test(b.durum || ''));
  }

  function bulguListeCiz() {
    const kap = $('#bulguListe');
    kap.innerHTML = '';
    const liste = suzulmus().slice().sort((a, b) => (b.i || 0) - (a.i || 0));
    $('#bulguSayac').textContent = liste.length + (liste.length !== durum.bulgular.length ? ' / ' + durum.bulgular.length : '');
    if (!liste.length) {
      kap.innerHTML = '<div class="bos">' + (durum.secili.size
        ? 'Seçili öğretiler bu veride bulgu üretmedi. Parametreleri gevşetmeyi dene — ya da bu, kuralın bu grafikte çalışmadığını söylüyor olabilir.'
        : 'Soldan bir öğreti seç. Seçtiğin şey grafikte çizilecek.') + '</div>';
      return;
    }
    const parca = document.createDocumentFragment();
    for (const b of liste.slice(0, LISTE_SINIRI)) parca.appendChild(bulguCiz(b));
    if (liste.length > LISTE_SINIRI) {
      const not = document.createElement('div');
      not.className = 'bos';
      not.textContent = 'İlk ' + LISTE_SINIRI + ' bulgu listelendi; hepsi grafikte çizili.';
      parca.appendChild(not);
    }
    kap.appendChild(parca);
  }

  function bulguCiz(b) {
    const d = document.createElement('button');
    d.className = 'bulgu' + (durum.seciliBulgu === b.id ? ' secili' : '');
    const tukendi = /tükendi|test edildi|gövde aşıldı|kırıldı/i.test(b.durum || '');
    let ic =
      '<span class="bulgu-ust">' +
      '<span class="nokta ' + b.yon + '"></span>' +
      '<span class="bulgu-ad">' + b.baslik + '</span>' +
      '<span class="bulgu-ix">#' + b.i + '</span></span>' +
      '<span class="bulgu-durum' + (tukendi ? ' tukendi' : '') + '">' + (b.durum || '') + '</span>';
    if (durum.seciliBulgu === b.id) {
      ic += '<dl class="detay">' + b.detay.map(([ad, deger]) =>
        '<dt>' + ad + '</dt><dd>' + bicimle(deger) + '</dd>').join('') + '</dl>';
    }
    d.innerHTML = ic;
    d.onclick = () => {
      if (durum.seciliBulgu === b.id) { durum.seciliBulgu = null; grafik.vurgulu = null; }
      else {
        durum.seciliBulgu = b.id;
        grafik.vurgulu = b.id;
        grafik.odakla(b.i, b.iSon != null ? b.iSon : b.i);
      }
      grafik.ciz();
      bulguListeCiz();
    };
    return d;
  }

  function bicimle(v) {
    if (typeof v === 'number') return isFinite(v) ? grafik.fiyatYaz(v) : '—';
    return String(v);
  }

  /* ---------- veri ---------- */
  function durumYaz(metin, hataMi) {
    const e = $('#durum');
    e.textContent = metin;
    e.className = 'durum' + (hataMi ? ' hata' : '');
  }

  function veriKur(mumlar, etiket, gorunumuKoru) {
    durum.mumlar = mumlar;
    durum.araMs = window.ICTVeri.aralikMs($('#aralik').value);
    // Forex benzeri fiyat aralığında pip alanı boşsa 0,0001 öner — "10–20 pip" kuralları okunur olsun.
    if (!parseFloat($('#pip').value)) {
      const orta = mumlar[Math.floor(mumlar.length / 2)].c;
      if (orta > 0.2 && orta < 20) $('#pip').value = orta > 5 ? 0.01 : 0.0001;
    }
    ctxKur();
    grafik.veriKur(mumlar, gorunumuKoru);
    if (!gorunumuKoru) { durum.seciliBulgu = null; grafik.vurgulu = null; }
    fiyatRozetiYaz();
    const ilk = new Date(mumlar[0].t).toLocaleDateString('tr-TR');
    const son = new Date(mumlar[mumlar.length - 1].t).toLocaleDateString('tr-TR');
    durumYaz(etiket + ' · ' + mumlar.length + ' mum · ' + ilk + '–' + son);
    calistir();
  }

  async function yukle() {
    const kaynak = $('#kaynak').value;
    const aralik = $('#aralik').value;
    const adet = Math.max(60, Math.min(1000, parseInt($('#adet').value, 10) || 500));
    $('#yukle').disabled = true;
    try {
      if (kaynak === 'binance') {
        const sembol = sembolAl();
        durumYaz('Binance: ' + sembol + ' çekiliyor…');
        const mumlar = await window.ICTVeri.binanceCek(sembol, aralik, adet);
        veriKur(mumlar, 'Binance ' + sembol + ' ' + aralik);
        if (durum.canli) canliBasla();          // sembol/aralık değiştiyse akışı taşı
      } else if (kaynak === 'csv') {
        const dosya = $('#dosya').files[0];
        if (!dosya) { durumYaz('Önce bir CSV dosyası seç.', true); return; }
        const metin = await dosya.text();
        veriKur(window.ICTVeri.csvCozumle(metin, $('#kayma').value), dosya.name);
      } else {
        veriKur(window.ICTVeri.ornekVeri(adet, aralik), 'Örnek veri (sentetik)');
      }
    } catch (e) {
      durumYaz('Hata: ' + e.message, true);
      if (!durum.mumlar.length) veriKur(window.ICTVeri.ornekVeri(400, aralik), 'Örnek veri (yedek)');
    } finally {
      $('#yukle').disabled = false;
    }
  }

  /* ---------- canlı akış ---------- */

  // Tik başına yeniden çizim yerine kare başına: saniyede onlarca mesaj gelebiliyor.
  let cizimIstendi = false;
  function cizIste() {
    if (cizimIstendi) return;
    cizimIstendi = true;
    requestAnimationFrame(() => { cizimIstendi = false; grafik.ciz(); });
  }

  function fiyatRozetiYaz() {
    const e = $('#fiyatRozet');
    const m = durum.mumlar[durum.mumlar.length - 1];
    if (!m) { e.textContent = ''; return; }
    const yukari = m.c >= m.o;
    const fark = ((m.c - m.o) / m.o) * 100;
    e.className = 'fiyat-rozet ' + (yukari ? 'yukari' : 'asagi');
    e.textContent = grafik.fiyatYaz(m.c) + '  ' + (yukari ? '▲' : '▼') +
      Math.abs(fark).toFixed(2) + '%';
  }

  function canliDurumYaz(d, mesaj) {
    const dugme = $('#canli');
    const nabiz = dugme.querySelector('.nabiz');
    nabiz.hidden = !durum.canli;
    dugme.classList.toggle('aktif', durum.canli && d === 'bagli');
    dugme.classList.toggle('bekliyor', durum.canli && d === 'baglaniyor');
    dugme.classList.toggle('kopuk', durum.canli && (d === 'koptu' || d === 'hata'));
    if (!durum.canli) { dugme.title = 'Binance WebSocket akışı'; return; }
    const metinler = {
      baglaniyor: 'bağlanıyor…', bagli: 'akış açık',
      koptu: 'koptu — yeniden bağlanıyor', hata: 'hata: ' + (mesaj || ''),
    };
    dugme.title = 'Canlı — ' + (metinler[d] || d);
    if (d !== 'bagli') durumYaz('Canlı akış ' + (metinler[d] || d), d === 'hata');
  }

  // Akış koptuğunda birkaç mum atlanmış olabilir; boşluk görülürse geçmiş yeniden çekilir.
  let boslukDolduruluyor = false;
  async function boslukDoldur() {
    if (boslukDolduruluyor || $('#kaynak').value !== 'binance') return;
    boslukDolduruluyor = true;
    try {
      const mumlar = await window.ICTVeri.binanceCek(
        sembolAl(), $('#aralik').value,
        Math.max(60, Math.min(1000, parseInt($('#adet').value, 10) || 500)));
      veriKur(mumlar, 'Binance ' + sembolAl() + ' ' + $('#aralik').value + ' · yeniden hizalandı', true);
      calistir();
    } catch (e) {
      durumYaz('Yeniden hizalama başarısız: ' + e.message, true);
    } finally {
      boslukDolduruluyor = false;
    }
  }

  function canliOlay(olay) {
    if (olay.tip === 'durum') { canliDurumYaz(olay.durum, olay.mesaj); return; }
    const yeni = olay.mum;
    const son = durum.mumlar[durum.mumlar.length - 1];
    if (!son) return;
    if (yeni.t === son.t) {
      durum.mumlar[durum.mumlar.length - 1] = yeni;
    } else if (yeni.t > son.t) {
      // Beklenenden ileri bir mum: arada boşluk var, geçmişi yeniden çek.
      if (yeni.t > son.t + durum.araMs) { boslukDoldur(); return; }
      durum.mumlar.push(yeni);
      if (durum.mumlar.length > 2000) durum.mumlar.splice(0, durum.mumlar.length - 1500);
      if (grafik.sagdaMi()) grafik.sagaYapis();
    } else {
      return;   // geç kalmış mesaj
    }
    fiyatRozetiYaz();
    // Mum kapanmadan dedektör çalıştırılmaz — kural kapanmış mum ister (§16).
    if (olay.kapandi) { ctxKur(); calistir(); }
    else cizIste();
  }

  function canliBasla() {
    canliDurdur(true);
    if ($('#kaynak').value !== 'binance') return;
    durum.canli = true;
    $('#canli').setAttribute('aria-pressed', 'true');
    durum.akis = window.ICTVeri.binanceCanli(sembolAl(), $('#aralik').value, canliOlay);
  }

  function canliDurdur(sessiz) {
    if (durum.akis) { durum.akis.kapat(); durum.akis = null; }
    if (!sessiz) {
      durum.canli = false;
      $('#canli').setAttribute('aria-pressed', 'false');
      canliDurumYaz('kapali');
    }
  }

  window.addEventListener('beforeunload', () => canliDurdur());

  /* ---------- kurulum ---------- */
  function sembolAl() {
    return ($('#sembol').value === '__diger__'
      ? $('#sembolSerbest').value.trim().toUpperCase()
      : $('#sembol').value) || 'BTCUSDT';
  }

  const sembolSec = $('#sembol');
  for (const x of window.ICTVeri.SEMBOLLER) {
    const o = document.createElement('option');
    o.value = x.d; o.textContent = x.ad;
    sembolSec.appendChild(o);
  }
  const digerSecenek = document.createElement('option');
  digerSecenek.value = '__diger__'; digerSecenek.textContent = 'Diğer…';
  sembolSec.appendChild(digerSecenek);

  const aralikSec = $('#aralik');
  const istenenAralik = sorgu.get('aralik') || '1h';
  for (const a of window.ICTVeri.ARALIKLAR) {
    const o = document.createElement('option');
    o.value = a.id; o.textContent = a.ad; o.selected = a.id === istenenAralik;
    aralikSec.appendChild(o);
  }
  if (sorgu.get('kaynak')) $('#kaynak').value = sorgu.get('kaynak');
  if (sorgu.get('sembol')) {
    const istenen = sorgu.get('sembol').toUpperCase();
    const bilinen = window.ICTVeri.SEMBOLLER.some(x => x.d === istenen);
    $('#sembol').value = bilinen ? istenen : '__diger__';
    $('#sembolSerbest').value = istenen;
    $('#sembolSerbest').hidden = bilinen;
  }
  if (sorgu.get('adet')) $('#adet').value = sorgu.get('adet');
  if (sorgu.get('pip')) $('#pip').value = sorgu.get('pip');
  if (sorgu.get('kayma')) $('#kayma').value = sorgu.get('kayma');
  $('#suzAktif').checked = durum.suzAktif;
  $('#dosyaAlan').hidden = $('#kaynak').value !== 'csv';
  $('#sembolAlan').hidden = $('#kaynak').value !== 'binance';
  $('#kaynak').onchange = () => {
    const k = $('#kaynak').value;
    $('#dosyaAlan').hidden = k !== 'csv';
    $('#sembolAlan').hidden = k !== 'binance';
    $('#canli').disabled = k !== 'binance';
    // Kapanmamış son mum yalnız Binance verisinde var; CSV ve örnek veride hepsi kapalı.
    $('#kapaliMum').checked = k === 'binance';
    if (k !== 'binance') canliDurdur();
  };
  $('#sembol').onchange = () => {
    const diger = $('#sembol').value === '__diger__';
    $('#sembolSerbest').hidden = !diger;
    if (diger) $('#sembolSerbest').focus(); else yukle();
  };
  $('#sembolSerbest').addEventListener('keydown', e => { if (e.key === 'Enter') yukle(); });
  $('#canli').onclick = () => { if (durum.canli) canliDurdur(); else canliBasla(); };
  $('#kapaliMum').onchange = () => { ctxKur(); calistir(); };
  $('#yukle').onclick = yukle;
  $('#dosya').onchange = () => { if ($('#dosya').files[0]) yukle(); };
  $('#aralik').onchange = yukle;
  $('#pip').onchange = () => {
    if (durum.mumlar.length) { ctxKur(); calistir(); }
  };
  $('#suzAktif').onchange = e => { durum.suzAktif = e.target.checked; calistir(); };
  $('#etiketAc').onchange = e => { grafik.etiketGoster = e.target.checked; grafik.ciz(); };

  $('#canli').disabled = $('#kaynak').value !== 'binance';
  $('#kapaliMum').checked = $('#kaynak').value === 'binance';
  canliDurumYaz('kapali');

  listeCiz();
  yukle().then(() => { if (sorgu.get('canli') === '1') canliBasla(); });
})();
