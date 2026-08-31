/* ICT Grafik Laboratuvarı — dedektörler, ikinci bölüm
 * Likidite, yer değiştirme, konum (prim/iskonto), zaman ve projeksiyon katmanları.
 * `dedektorler.js`den SONRA yüklenir; aynı listeye eklenir.
 */
(function (global) {
  'use strict';

  const D = global.ICTDedektorler;
  const { DEDEKTORLER, RENK } = D;
  const { govdeUst, govdeAlt, yukariMum } = D.yardim;

  /* --- 7. Likidite: eşit tepe/dip ve baskın ------------------------------ */
  DEDEKTORLER.push({
    id: 'likidite',
    belge: 'liquidity-raid-displacement-market-structure-shift-mss',
    ad: 'Likidite havuzu ve baskın',
    grup: 'Likidite',
    kaynak: '§2 Sözlük · §16 Örüntü 2',
    secimNoktasi: 1,
    tanim: 'Eşit tepe/dipler stop yığılmasının varsayıldığı yerdir ("Şeker Diyarı"). Baskın (raid): ' +
      'fiyatın o seviyenin ötesine geçip oradaki stopları alması, ve seviyenin içine geri kapanması. ' +
      'Beklenen süpürme derinliği eski dibin 10–20 pip altı; 25 pip\'ten derinse stop koşusu değil ' +
      'gerçek düşüş sayılır ve kurulum iptal edilir.',
    uyari: 'Çıplak sweep, kullanıcının kendi ölçümünde %33 isabet / 2R\'de tam başabaş verdi — ' +
      'yani tek başına değeri yok. Değer, eklenen koşullarda: konum kapısı, derinlik bandı, ' +
      'ilk sahte dibin atlanması.',
    parametreler: [
      { id: 'minAdet', ad: 'Havuz için en az salınım', tip: 'sayi', varsayilan: 2, min: 1, max: 5, adim: 1 },
      { id: 'tolerans', ad: '"Eşit" toleransı (ATR katı)', tip: 'sayi', varsayilan: 0.12, min: 0.01, max: 1, adim: 0.01 },
      { id: 'maxDerinlik', ad: 'Geçersizlik derinliği (ATR katı)', tip: 'sayi', varsayilan: 0.8, min: 0.1, max: 3, adim: 0.1 },
      { id: 'geriKapanis', ad: 'Baskın mumu içeri kapanmalı', tip: 'onay', varsayilan: true },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      const tara = (tepeMi) => {
        const liste = (tepeMi ? ctx.sth : ctx.stl).slice();
        const alan = tepeMi ? 'h' : 'l';
        const kullanildi = new Set();
        for (let x = 0; x < liste.length; x++) {
          if (kullanildi.has(liste[x])) continue;
          const kume = [liste[x]];
          const ref = mumlar[liste[x]][alan];
          const tol = p.tolerans * ctx.atr[liste[x]];
          for (let y = x + 1; y < liste.length; y++) {
            if (Math.abs(mumlar[liste[y]][alan] - ref) <= tol) kume.push(liste[y]);
          }
          if (kume.length < p.minAdet) continue;
          kume.forEach(i => kullanildi.add(i));
          // Stoplar en uç noktanın ötesinde varsayılır.
          const seviye = tepeMi
            ? Math.max(...kume.map(i => mumlar[i].h))
            : Math.min(...kume.map(i => mumlar[i].l));
          const sonUye = kume[kume.length - 1];
          let raid = null, kirilim = null, derinlik = 0;
          for (let j = sonUye + 1; j < mumlar.length; j++) {
            const m = mumlar[j];
            const asti = tepeMi ? m.h > seviye : m.l < seviye;
            if (!asti) continue;
            // Seviyenin ÖTESİNE kapanış: bu bir stop koşusu değil, gerçek kırılım. Havuz biter.
            if (p.geriKapanis && (tepeMi ? m.c > seviye : m.c < seviye)) { kirilim = j; break; }
            raid = j;
            derinlik = tepeMi ? m.h - seviye : seviye - m.l;
            break;
          }
          const derinMi = raid !== null && derinlik > p.maxDerinlik * ctx.atr[raid];
          const durum = kirilim !== null ? 'kırıldı — havuz bitti'
            : raid === null ? 'el değmemiş'
              : (derinMi ? 'derin — iptal' : 'stop koşusu');
          const renk = kirilim !== null ? RENK.gri
            : raid === null ? RENK.turuncu
              : (derinMi ? RENK.gri : (tepeMi ? RENK.ayi : RENK.boga));
          const bitis = raid !== null ? raid : kirilim;
          const cizimler = [{
            tip: 'seviye', p: seviye, i1: kume[0], i2: bitis, renk, kalinlik: kirilim !== null ? 1 : 1.6,
            kesikli: kirilim !== null,
            etiket: (kume.length > 1 ? 'eşit ' : '') + (tepeMi ? 'tepe · alım stopları' : 'dip · satış stopları'),
            olcegeKat: true,
          }];
          kume.forEach(i => cizimler.push({ tip: 'isaret', i, p: mumlar[i][alan], yon: tepeMi ? 'yukari' : 'asagi', renk }));
          if (raid !== null) {
            cizimler.push({ tip: 'mum', i: raid, renk });
            cizimler.push({ tip: 'isaret', i: raid, p: mumlar[raid][alan], yon: tepeMi ? 'yukari' : 'asagi',
              renk, metin: 'baskın ' + ctx.mesafeYaz(derinlik) });
          }
          bulgular.push({
            baslik: (kume.length > 1 ? 'Eşit ' : 'Tekil ') + (tepeMi ? 'tepeler' : 'dipler') +
              ' (' + kume.length + ')',
            yon: tepeMi ? 'ayi' : 'boga', i: kume[0], iSon: bitis, durum,
            detay: [
              ['Seviye', seviye], ['Salınım sayısı', kume.length],
              ['Baskın mumu', raid === null ? '—' : raid],
              ['Kırılım mumu', kirilim === null ? '—' : kirilim],
              ['Süpürme derinliği', raid === null ? '—' : ctx.mesafeYaz(derinlik) + ' · ' + (derinlik / ctx.atr[raid]).toFixed(2) + '×ATR'],
              ['Durum', durum],
            ],
            cizimler,
          });
        }
      };
      tara(true); tara(false);
      return bulgular;
    },
  });

  /* --- 8. Yer değiştirme + yapı kayması ---------------------------------- */
  DEDEKTORLER.push({
    id: 'displacement',
    belge: 'oruntu-3-raid-displacement-mss-fvg',
    ad: 'Displacement → MSS → FVG',
    grup: 'Likidite',
    kaynak: '§2 Sözlük · §16 Örüntü 3',
    secimNoktasi: 2,
    tanim: 'Displacement: baskından sonra güçlü gövdelerle hızlı, tek taraflı ilerleme; arkasında FVG ' +
      'bırakır. MSS: bu hareketin yakın bir salınım tepe/dibini karşı yönde kırması. Modern modellerin ' +
      'çekirdek sırası: raid → displacement → MSS → FVG\'ye dönüş.',
    uyari: 'Sıra ZORUNLU. Tanımlanması gereken tek şey "hızlı" ve "yakın salınım" — ikisi de burada ' +
      'parametre. Bu tanım sonuca bakarak değiştirilmemeli; bir kez seç ve dönem boyunca sabit tut.',
    parametreler: [
      { id: 'maxMum', ad: 'Bacak uzunluğu (en fazla mum)', tip: 'sayi', varsayilan: 3, min: 1, max: 8, adim: 1 },
      { id: 'atrKati', ad: 'En küçük hareket (ATR katı)', tip: 'sayi', varsayilan: 1.5, min: 0.5, max: 6, adim: 0.1 },
      { id: 'govdeOrani', ad: 'Gövde / menzil oranı', tip: 'sayi', varsayilan: 0.5, min: 0.1, max: 1, adim: 0.05 },
      { id: 'mssZorunlu', ad: 'MSS zorunlu', tip: 'onay', varsayilan: true },
      { id: 'fvgGoster', ad: 'Bıraktığı FVG\'yi çiz', tip: 'onay', varsayilan: true },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      for (let s = 1; s < mumlar.length - 1; s++) {
        let bulundu = null;
        for (let uzunluk = 1; uzunluk <= p.maxMum && s + uzunluk - 1 < mumlar.length; uzunluk++) {
          const e = s + uzunluk - 1;
          const net = mumlar[e].c - mumlar[s].o;
          const yonBoga = net > 0;
          if (Math.abs(net) < p.atrKati * ctx.atr[e]) continue;
          let govdeToplam = 0, menzilToplam = 0, tutarli = true;
          for (let j = s; j <= e; j++) {
            const m = mumlar[j];
            if (yukariMum(m) !== yonBoga) tutarli = false;
            govdeToplam += Math.abs(m.c - m.o);
            menzilToplam += Math.max(1e-9, m.h - m.l);
          }
          if (!tutarli || govdeToplam / menzilToplam < p.govdeOrani) continue;
          bulundu = { s, e, yonBoga, net };
          break;
        }
        if (!bulundu) continue;
        const { e, yonBoga, net } = bulundu;

        // MSS: bacak, en yakın karşı salınımı kapanış bazında kırdı mı?
        const karsi = (yonBoga ? ctx.sth : ctx.stl).filter(v => v < s).pop();
        let mssSeviye = null;
        if (karsi != null) {
          const sv = yonBoga ? mumlar[karsi].h : mumlar[karsi].l;
          if (yonBoga ? mumlar[e].c > sv : mumlar[e].c < sv) mssSeviye = sv;
        }
        if (p.mssZorunlu && mssSeviye === null) continue;

        // Bacağın içinde bıraktığı FVG
        let fvg = null;
        for (let j = Math.max(1, s); j <= Math.min(e, mumlar.length - 2); j++) {
          const a = mumlar[j - 1], c = mumlar[j + 1];
          if (yonBoga && c.l > a.h) { fvg = { alt: a.h, ust: c.l, i: j - 1 }; break; }
          if (!yonBoga && c.h < a.l) { fvg = { alt: c.h, ust: a.l, i: j - 1 }; break; }
        }
        const renk = yonBoga ? RENK.boga : RENK.ayi;
        const cizimler = [{
          tip: 'cizgi', i1: s, p1: mumlar[s].o, i2: e, p2: mumlar[e].c, renk, kalinlik: 2, ok: true,
          etiket: 'DISP ' + (Math.abs(net) / ctx.atr[e]).toFixed(1) + '×ATR',
        }];
        if (mssSeviye !== null) {
          cizimler.push({ tip: 'seviye', p: mssSeviye, i1: karsi, i2: e, renk: RENK.mor, kesikli: true, etiket: 'MSS' });
        }
        if (fvg && p.fvgGoster) {
          let dolu = null;
          for (let j = e + 1; j < mumlar.length; j++) {
            if (yonBoga ? mumlar[j].l <= fvg.alt : mumlar[j].h >= fvg.ust) { dolu = j; break; }
          }
          fvg.dolu = dolu;
          cizimler.push({ tip: 'kutu', i1: fvg.i, i2: dolu, p1: fvg.alt, p2: fvg.ust, renk,
            dolguAlfa: 0.12, kesikli: true, etiket: 'bıraktığı FVG' });
        }
        bulgular.push({
          baslik: (yonBoga ? 'Yukarı' : 'Aşağı') + ' displacement' + (mssSeviye !== null ? ' + MSS' : ''),
          yon: yonBoga ? 'boga' : 'ayi', i: s, iSon: e,
          durum: mssSeviye !== null ? (fvg ? 'MSS + FVG' : 'MSS var, FVG yok') : 'MSS yok',
          detay: [
            ['Bacak', s + ' → ' + e + ' (' + (e - s + 1) + ' mum)'],
            ['Hareket', ctx.mesafeYaz(net) + ' · ' + (Math.abs(net) / ctx.atr[e]).toFixed(2) + '×ATR'],
            ['Kırılan yapı (MSS)', mssSeviye === null ? 'yok' : mssSeviye],
            ['Bıraktığı FVG', fvg ? (fvg.alt.toPrecision(6) + ' – ' + fvg.ust.toPrecision(6)) : 'yok'],
            ['FVG dolduğu mum', fvg ? (fvg.dolu == null ? 'dolmadı' : fvg.dolu) : '—'],
          ],
          cizimler,
        });
        s = e;   // örtüşen bacakları tekrar sayma
      }
      return bulgular;
    },
  });

  /* --- 9. Konum: dealing range, prim / iskonto --------------------------- */
  DEDEKTORLER.push({
    id: 'konum',
    belge: '12-adim-3-konum-prim-iskonto',
    ad: 'Prim / iskonto (dealing range)',
    grup: 'Konum',
    kaynak: '§12',
    secimNoktasi: 0,
    tanim: 'Gün içi modeller için son 20 işlem günü, swing için son 60 işlem günü GÖVDELERLE. ' +
      'Ortası denge (0,50), üstü prim, altı iskonto. Çekirdek yasak: alım yalnız dengede ya da altında, ' +
      'satış yalnız dengenin üstünde. 0,80 üstü yeni uzun yok; 0,20 altı yeni kısa yok.',
    uyari: 'Özyinelemeli çeyrekleme bu filtreyi ZAYIFLATIR — yeterli derinlikte her fiyat bir alt-aralığın ' +
      'iskontosunda kalır. En fazla 2 bölme. Pencere sabit olduğu için seçim noktası sıfır.',
    parametreler: [
      { id: 'gun', ad: 'Pencere (işlem günü)', tip: 'secim', varsayilan: '20', secenekler: [
        { d: '20', ad: '20 gün (gün içi)' }, { d: '40', ad: '40 gün' }, { d: '60', ad: '60 gün (swing)' }] },
      { id: 'uclar', ad: 'Uçlar', tip: 'secim', varsayilan: 'fitil', secenekler: [
        { d: 'fitil', ad: 'Fitiller' }, { d: 'govde', ad: 'Gövdeler (§12.1 swing)' }] },
      { id: 'bolme', ad: 'Çeyrek çizgileri', tip: 'onay', varsayilan: true },
    ],
    calistir(mumlar, p, ctx) {
      const n = +p.gun;
      const gunler = ctx.gunler.slice(-n);
      if (!gunler.length) return [];
      const bas = gunler[0].bas, son = gunler[gunler.length - 1].son;
      const uc = D.yardim.pencereUcNoktalari(mumlar, bas, son, p.uclar === 'govde');
      const yuksek = uc.yuksek, alcak = uc.alcak, boy = yuksek - alcak;
      if (boy <= 0) return [];
      const oran = v => alcak + boy * v;
      const guncel = mumlar[mumlar.length - 1].c;
      const konum = (guncel - alcak) / boy;
      const karar = konum > 0.8 ? 'derin prim — yeni uzun YOK'
        : konum > 0.5 ? 'prim — alım yasak, satış serbest'
          : konum < 0.2 ? 'en derin iskonto — yeni kısa YOK'
            : konum < 0.3 ? 'derin iskonto — yeni kısa yok'
              : 'iskonto — satış yasak, alım serbest';
      const cizimler = [
        { tip: 'kutu', i1: bas, i2: null, p1: oran(0.5), p2: yuksek, renk: RENK.ayi, dolguAlfa: 0.05, etiket: 'PRİM' },
        { tip: 'kutu', i1: bas, i2: null, p1: alcak, p2: oran(0.5), renk: RENK.boga, dolguAlfa: 0.05, etiket: 'İSKONTO' },
        { tip: 'seviye', p: yuksek, i1: bas, i2: null, renk: RENK.gri, etiket: '1,00', olcegeKat: true },
        { tip: 'seviye', p: oran(0.9), i1: bas, i2: null, renk: RENK.ayi, kesikli: true, etiket: '0,90 uzun yok' },
        { tip: 'seviye', p: oran(0.8), i1: bas, i2: null, renk: RENK.ayi, kesikli: true, etiket: '0,80 uzun yok' },
        { tip: 'seviye', p: oran(0.5), i1: bas, i2: null, renk: RENK.mor, kalinlik: 1.8, etiket: 'DENGE 0,50' },
        { tip: 'seviye', p: oran(0.3), i1: bas, i2: null, renk: RENK.boga, kesikli: true, etiket: '0,30 kısa yok' },
        { tip: 'seviye', p: oran(0.2), i1: bas, i2: null, renk: RENK.boga, kesikli: true, etiket: '0,20 kısa yok' },
        { tip: 'seviye', p: alcak, i1: bas, i2: null, renk: RENK.gri, etiket: '0,00', olcegeKat: true },
      ];
      if (p.bolme) {
        cizimler.push({ tip: 'seviye', p: oran(0.75), i1: bas, i2: null, renk: RENK.gri, kesikli: true, etiket: '0,75' });
        cizimler.push({ tip: 'seviye', p: oran(0.25), i1: bas, i2: null, renk: RENK.gri, kesikli: true, etiket: '0,25' });
      }
      return [{
        baslik: 'Dealing range — son ' + n + ' işlem günü',
        yon: konum > 0.5 ? 'ayi' : 'boga', i: bas, iSon: null,
        durum: karar,
        detay: [
          ['Pencere', gunler[0].tarih + ' → ' + gunler[gunler.length - 1].tarih],
          ['Tepe', yuksek], ['Dip', alcak], ['Denge', oran(0.5)],
          ['Aralık boyu', ctx.mesafeYaz(boy)],
          ['Güncel fiyat', guncel],
          ['Konum', konum.toFixed(3)],
          ['Karar', karar],
        ],
        cizimler,
      }];
    },
  });

  /* --- 10. OTE ----------------------------------------------------------- */
  DEDEKTORLER.push({
    id: 'ote',
    belge: 'ote-optimal-trade-entry',
    ad: 'OTE — optimal trade entry',
    grup: 'Konum',
    kaynak: '§2 Sözlük · §16 Örüntü 1',
    secimNoktasi: 1,
    tanim: 'Son impuls bacağına Fibonacci çekilir; %62–79 bandı derin geri çekilme alanıdır. ' +
      'Çoğu örnekte %70,5 kullanılır. Bazı planlar özellikle %62\'yi emir fiyatı yapar.',
    uyari: '%70,5 ne Fibonacci oranı ne de %61,8–%78,6\'nın tam ortası (o 70,2). 1,68 de Fibonacci ' +
      'değil (φ=1,618). Üçünü de SERBEST PARAMETRE say ve ayrı ayrı tara. Seçim noktası: hangi bacak.',
    parametreler: [
      { id: 'bacak', ad: 'Bacak', tip: 'secim', varsayilan: 'ara', secenekler: [
        { d: 'kisa', ad: 'Son kısa vadeli bacak' }, { d: 'ara', ad: 'Son ara vadeli bacak' }] },
      { id: 'adet', ad: 'Kaç bacak gösterilsin', tip: 'sayi', varsayilan: 1, min: 1, max: 6, adim: 1 },
    ],
    calistir(mumlar, p, ctx) {
      const tepeler = p.bacak === 'ara' ? ctx.ith : ctx.sth;
      const dipler = p.bacak === 'ara' ? ctx.itl : ctx.stl;
      const noktalar = tepeler.map(i => ({ i, tip: 't', fiyat: mumlar[i].h }))
        .concat(dipler.map(i => ({ i, tip: 'd', fiyat: mumlar[i].l })))
        .sort((a, b) => a.i - b.i);
      const bacaklar = [];
      for (let x = noktalar.length - 1; x > 0 && bacaklar.length < p.adet; x--) {
        const son = noktalar[x];
        let onceki = null;
        for (let y = x - 1; y >= 0; y--) { if (noktalar[y].tip !== son.tip) { onceki = noktalar[y]; break; } }
        if (!onceki) break;
        bacaklar.push({ bas: onceki, son });
        x = noktalar.indexOf(onceki) + 1;
      }
      return bacaklar.map(b => {
        const yonBoga = b.son.tip === 't';
        const boy = b.son.fiyat - b.bas.fiyat;
        const fib = r => b.son.fiyat - boy * r;
        const renk = yonBoga ? RENK.boga : RENK.ayi;
        return {
          baslik: 'OTE — ' + (yonBoga ? 'yükseliş' : 'düşüş') + ' bacağı',
          yon: yonBoga ? 'boga' : 'ayi', i: b.bas.i, iSon: null,
          durum: 'bacak ' + b.bas.i + ' → ' + b.son.i,
          detay: [
            ['Bacak dibi/tepesi', b.bas.fiyat], ['Bacak ucu', b.son.fiyat],
            ['%50', fib(0.5)], ['%62', fib(0.62)], ['%70,5', fib(0.705)], ['%79', fib(0.79)],
            ['Bacak boyu', ctx.mesafeYaz(boy)],
          ],
          cizimler: [
            { tip: 'cizgi', i1: b.bas.i, p1: b.bas.fiyat, i2: b.son.i, p2: b.son.fiyat, renk: RENK.gri, kesikli: true },
            { tip: 'kutu', i1: b.son.i, i2: null, p1: fib(0.62), p2: fib(0.79), renk, dolguAlfa: 0.14, etiket: 'OTE %62–79' },
            { tip: 'seviye', p: fib(0.705), i1: b.son.i, i2: null, renk, kesikli: true, etiket: '%70,5' },
            { tip: 'seviye', p: fib(0.5), i1: b.son.i, i2: null, renk: RENK.gri, kesikli: true, etiket: '%50' },
          ],
        };
      });
    },
  });

  /* --- 11. Seanslar / kill zone ------------------------------------------ */
  const SEANSLAR = [
    { id: 'londraKZ', ad: 'Londra kill zone', bas: 1 * 60, son: 5 * 60, renk: RENK.mavi, varsayilan: true },
    { id: 'nyKZ', ad: 'New York kill zone', bas: 7 * 60, son: 10 * 60, renk: RENK.mor, varsayilan: true },
    { id: 'londraKapanis', ad: 'Londra kapanış KZ', bas: 10 * 60, son: 12 * 60, renk: RENK.camgobegi, varsayilan: false },
    { id: 'asyaKZ', ad: 'Asya kill zone (JPY/AUD/NZD)', bas: 18 * 60, son: 21 * 60, renk: RENK.turuncu, varsayilan: false },
    { id: 'cbdr', ad: 'CBDR 14:00–20:00', bas: 14 * 60, son: 20 * 60, renk: RENK.gri, varsayilan: false },
    { id: 'asyaAralik', ad: 'Asya aralığı 20:00–00:00', bas: 20 * 60, son: 24 * 60, renk: RENK.turuncu, varsayilan: false },
    { id: 'ipdaGun', ad: 'IPDA gerçek günü 00:00–15:00', bas: 0, son: 15 * 60, renk: RENK.gri, varsayilan: false },
  ];

  DEDEKTORLER.push({
    id: 'seans',
    belge: '15-2-seans-tablosu-koordinat-sistemi-hipotez-degil',
    ad: 'Seanslar ve kill zone',
    grup: 'Zaman',
    kaynak: '§15.2',
    secimNoktasi: 0,
    tanim: 'Tüm saatler New York saatiyle. Londra KZ 01:00–05:00 · NY KZ 07:00–10:00 · Londra kapanış ' +
      '10:00–12:00 · Asya KZ 18:00–21:00 · CBDR 14:00–20:00 · Asya aralığı 20:00–00:00 · ' +
      'IPDA gerçek günü 00:00–15:00 · CME açılışı 08:20.',
    uyari: 'Bu bir koordinat sistemi, hipotez değil. Saatler sabit Türkiye saatine ÇEVRİLMEMELİ — ABD ile ' +
      'Türkiye\'nin yaz saati uygulaması aynı değil. Burada dönüşüm America/New_York üzerinden, ' +
      'yaz saati dahil, her mum için ayrı yapılıyor.',
    parametreler: SEANSLAR.map(s => ({ id: s.id, ad: s.ad, tip: 'onay', varsayilan: s.varsayilan }))
      .concat([{ id: 'cme', ad: 'CME açılışı 08:20 işareti', tip: 'onay', varsayilan: false }]),
    calistir(mumlar, p, ctx) {
      if (!ctx.gunIci) {
        return [{ baslik: 'Seanslar — bu zaman diliminde geçersiz', yon: 'notr', i: 0, iSon: null,
          durum: 'gün içi grafik gerekiyor',
          detay: [['Not', 'Seans pencereleri yalnız gün içi (≤ 4 saat) grafiklerde çizilir.']], cizimler: [] }];
      }
      const bulgular = [];
      for (const s of SEANSLAR) {
        if (!p[s.id]) continue;
        const bantlar = [];
        let acik = null;
        for (let i = 0; i < mumlar.length; i++) {
          const dk = ctx.ny[i].dakika;
          const icinde = dk >= s.bas && dk < s.son && ctx.ny[i].haftaGunu !== 'Sun';
          if (icinde && acik === null) acik = i;
          if (!icinde && acik !== null) { bantlar.push([acik, i - 1]); acik = null; }
        }
        if (acik !== null) bantlar.push([acik, mumlar.length - 1]);
        if (!bantlar.length) continue;
        bulgular.push({
          baslik: s.ad, yon: 'notr', i: bantlar[bantlar.length - 1][0], iSon: bantlar[bantlar.length - 1][1],
          durum: bantlar.length + ' pencere',
          detay: [['Pencere (NY)', dkYaz(s.bas) + ' – ' + dkYaz(s.son)], ['Grafikte', bantlar.length + ' kez']],
          cizimler: bantlar.map((b, ix) => ({
            tip: 'bant', i1: b[0], i2: b[1], renk: s.renk, dolguAlfa: 0.08,
            etiket: ix === bantlar.length - 1 ? s.ad : null,
          })),
        });
      }
      if (p.cme) {
        const isaretler = [];
        for (let i = 0; i < mumlar.length; i++) {
          const dk = ctx.ny[i].dakika;
          const oncekiDk = i > 0 ? ctx.ny[i - 1].dakika : -1;
          if (dk >= 500 && oncekiDk < 500 && ctx.ny[i].haftaGunu !== 'Sun') {
            isaretler.push({ tip: 'bant', i1: i, i2: i, renk: RENK.mor, dolguAlfa: 0.22, etiket: '08:20' });
          }
        }
        if (isaretler.length) {
          bulgular.push({ baslik: 'CME açılışı 08:20', yon: 'notr', i: isaretler[isaretler.length - 1].i1,
            iSon: null, durum: isaretler.length + ' gün',
            detay: [['Saat (NY)', '08:20']], cizimler: isaretler });
        }
      }
      return bulgular;
    },
  });

  function dkYaz(dk) {
    const s = Math.floor(dk / 60) % 24, d = dk % 60;
    return String(s).padStart(2, '0') + ':' + String(d).padStart(2, '0');
  }

  /* --- 12. Aralık projeksiyonu (CBDR / Asya / flout) --------------------- */
  DEDEKTORLER.push({
    id: 'projeksiyon',
    belge: '15-3-range-projeksiyonu-hangi-aralik-olculur',
    ad: 'Aralık projeksiyonu (CBDR / Asya / flout)',
    grup: 'Zaman',
    kaynak: '§15.3',
    secimNoktasi: 1,
    tanim: 'CBDR 14:00–20:00, Asya 20:00–00:00, flout 14:00–00:00 (NY). Aralık yüksekliği "birim"dir ve ' +
      'uçlardan 1 · 1,5 · 2 · 2,5 · 3 katıyla tekrarlanır. Beklenti: günün ekstremumu 1–3 birim içinde, ' +
      'ideal günde ≤ 2. Seçim sırası CBDR → Asya → flout. Aralık trend biçimindeyse kullanılmaz.',
    uyari: 'Bu katman 5–15 dakikalık grafiklerde anlamlı: 4 saatlik mumlar 14:00–20:00 penceresini ' +
      'çözemez, o yüzden büyük zaman dilimlerinde boş kalır. Ve buna kaynaklarda "standart sapma" deniyor — DEĞİL. İstatistiksel standart sapmayla ilgisi yok, ' +
      'geometrik bir projeksiyon. Ve CBDR ile flout saat olarak örtüştüğü için ikisi "konfluans" sayılamaz.',
    parametreler: [
      { id: 'kaynakAralik', ad: 'Aralık', tip: 'secim', varsayilan: 'cbdr', secenekler: [
        { d: 'cbdr', ad: 'CBDR 14:00–20:00' }, { d: 'asya', ad: 'Asya 20:00–00:00' }, { d: 'flout', ad: 'Flout 14:00–00:00' }] },
      { id: 'birim', ad: 'En çok kaç birim', tip: 'sayi', varsayilan: 3, min: 1, max: 5, adim: 0.5 },
      { id: 'gunSayisi', ad: 'Kaç gün geriye', tip: 'sayi', varsayilan: 3, min: 1, max: 20, adim: 1 },
      { id: 'trendEle', ad: 'Trend biçimli aralığı eleme', tip: 'onay', varsayilan: true },
    ],
    calistir(mumlar, p, ctx) {
      if (!ctx.gunIci) return [];
      const pencereler = { cbdr: [14 * 60, 20 * 60], asya: [20 * 60, 24 * 60], flout: [14 * 60, 24 * 60] };
      const [pb, ps] = pencereler[p.kaynakAralik];
      // Aralıklar akşam başlıyor: mumları NY "işlem gününe" göre değil, pencere sürekliliğine göre topla.
      const bloklar = [];
      let acik = null;
      for (let i = 0; i < mumlar.length; i++) {
        const dk = ctx.ny[i].dakika;
        const icinde = dk >= pb && dk < ps;
        if (icinde && acik === null) acik = i;
        if (!icinde && acik !== null) { bloklar.push([acik, i - 1]); acik = null; }
      }
      const secilen = bloklar.slice(-p.gunSayisi);
      const bulgular = [];
      for (const [b, s] of secilen) {
        if (s - b < 1) continue;
        const uc = D.yardim.pencereUcNoktalari(mumlar, b, s, false);
        const boy = uc.yuksek - uc.alcak;
        if (boy <= 0) continue;
        const net = Math.abs(mumlar[s].c - mumlar[b].o);
        const trendli = net / boy > 0.6;
        if (p.trendEle && trendli) continue;
        // Projeksiyon, aralığın bitiminden sonraki 15:00 NY'ye kadar çizilir.
        let bitis = mumlar.length - 1;
        for (let j = s + 1; j < mumlar.length; j++) {
          if (ctx.ny[j].dakika >= 15 * 60 && ctx.ny[j].dakika < 15 * 60 + 60) { bitis = j; break; }
        }
        const cizimler = [{
          tip: 'kutu', i1: b, i2: s, p1: uc.alcak, p2: uc.yuksek, renk: RENK.mavi, dolguAlfa: 0.14,
          etiket: p.kaynakAralik.toUpperCase() + ' ' + ctx.mesafeYaz(boy),
        }];
        for (let k = 1; k <= p.birim; k += 0.5) {
          cizimler.push({ tip: 'seviye', p: uc.yuksek + boy * k, i1: s, i2: bitis, renk: RENK.ayi, kesikli: true,
            etiket: '+' + k.toString().replace('.', ',') + ' birim', olcegeKat: k <= 2 });
          cizimler.push({ tip: 'seviye', p: uc.alcak - boy * k, i1: s, i2: bitis, renk: RENK.boga, kesikli: true,
            etiket: '−' + k.toString().replace('.', ',') + ' birim', olcegeKat: k <= 2 });
        }
        // Gerçekleşen: sonraki pencerede ekstremum kaç birim uzağa gitti?
        const sonrasi = D.yardim.pencereUcNoktalari(mumlar, s + 1, bitis, false);
        const ustBirim = (sonrasi.yuksek - uc.yuksek) / boy;
        const altBirim = (uc.alcak - sonrasi.alcak) / boy;
        bulgular.push({
          baslik: p.kaynakAralik.toUpperCase() + ' — ' + ctx.ny[b].tarih,
          yon: 'notr', i: b, iSon: bitis,
          durum: trendli ? 'trend biçimli (kullanma)' : 'konsolidasyon',
          detay: [
            ['Aralık', uc.alcak.toPrecision(6) + ' – ' + uc.yuksek.toPrecision(6)],
            ['Birim (yükseklik)', ctx.mesafeYaz(boy)],
            ['Sonraki ekstremum ↑', ustBirim.toFixed(2) + ' birim'],
            ['Sonraki ekstremum ↓', altBirim.toFixed(2) + ' birim'],
            ['Beklenti', '1–3 birim, ideal ≤ 2'],
          ],
          cizimler,
        });
      }
      return bulgular;
    },
  });

  /* --- 13. IPDA pencereleri ---------------------------------------------- */
  DEDEKTORLER.push({
    id: 'ipda',
    belge: 'ipda-veri-araligi-20-40-60-gun',
    ad: 'IPDA pencereleri (20 / 40 / 60 gün)',
    grup: 'Konum',
    kaynak: '§2 Sözlük · §12.4',
    secimNoktasi: 0,
    tanim: 'Son 20 işlem gününün en yüksek ve en düşük fiyatı işaretlenir; Pazar mumları sayılmaz. ' +
      'Uygun hedef bulunamazsa 40, sonra 60 güne genişletilir. Kutular her yeni günde bir gün ileri kayar. ' +
      'Düşme kuralı: son 20 günün dibi ihlal edilirse 40\'a değil, doğrudan 60 günlük pencereye geçilir.',
    uyari: 'Kaynağın kendi cümlesi: "20/40/60 gün sonra tepeyi çağırmaz — bu bir arama alanı, bir tahmin ' +
      'değil." Fiyatı açıklayan bir motor olarak değil, tarama penceresi olarak kullan.',
    parametreler: [
      { id: 'p20', ad: '20 gün', tip: 'onay', varsayilan: true },
      { id: 'p40', ad: '40 gün', tip: 'onay', varsayilan: false },
      { id: 'p60', ad: '60 gün', tip: 'onay', varsayilan: false },
    ],
    calistir(mumlar, p, ctx) {
      const renkler = { 20: RENK.mavi, 40: RENK.mor, 60: RENK.turuncu };
      const bulgular = [];
      for (const n of [20, 40, 60]) {
        if (!p['p' + n]) continue;
        const gunler = ctx.gunler.slice(-n);
        if (gunler.length < 2) continue;
        const bas = gunler[0].bas, son = mumlar.length - 1;
        const uc = D.yardim.pencereUcNoktalari(mumlar, bas, son, false);
        const guncel = mumlar[son].c;
        const ihlal = guncel < uc.alcak * 1.0000001 ? 'dip ihlal edildi — 60 güne geç' : '—';
        bulgular.push({
          baslik: n + ' işlem günü penceresi', yon: 'notr', i: bas, iSon: null,
          durum: gunler.length + ' gün bulundu',
          detay: [
            ['Tepe', uc.yuksek], ['Dip', uc.alcak],
            ['Pencere', gunler[0].tarih + ' → ' + gunler[gunler.length - 1].tarih],
            ['Tepe mumu', uc.iY], ['Dip mumu', uc.iA], ['Düşme kuralı', ihlal],
          ],
          cizimler: [
            { tip: 'seviye', p: uc.yuksek, i1: bas, i2: null, renk: renkler[n], kalinlik: 1.5, etiket: n + 'g tepe', olcegeKat: true },
            { tip: 'seviye', p: uc.alcak, i1: bas, i2: null, renk: renkler[n], kalinlik: 1.5, etiket: n + 'g dip', olcegeKat: true },
          ],
        });
      }
      return bulgular;
    },
  });

  /* --- 14. Düşük dirençli bölge ------------------------------------------ */
  DEDEKTORLER.push({
    id: 'dusukdirenc',
    belge: '13-9-direnc-sayimi-nerede-islem-alinmaz',
    ad: 'Düşük dirençli bölge',
    grup: 'Likidite',
    kaynak: '§13.9',
    secimNoktasi: 2,
    tanim: 'Mekanik sınırlar: (1) hızlı, tek yönlü, geri çekilmesiz bir bacak bul. (2) O bacağın kırdığı ' +
      'eski dip → bölgenin bir sınırı. (3) Sonraki toparlanmanın kırdığı kısa vadeli tepe → diğer sınır. ' +
      'Bölge içinde her geri çekilme yeni bir fırsat; bölge, kırılan o dibe geri yaklaşıldığında biter.',
    uyari: 'Serinin en iyi YASAKLAYICI kuralı — "şurada al" değil "şurada alma" diyor. Ama "çok/az" ölçüsü ' +
      'tanımlanmazsa yalnız başarılı örnekler sonradan "düşük dirençli" diye seçilir. Buradaki ölçü: ' +
      'yoldaki karşıt salınım sayısı — parametrede sabit, sonuca göre değiştirme.',
    parametreler: [
      { id: 'bacakAtr', ad: 'Bacak büyüklüğü (ATR katı)', tip: 'sayi', varsayilan: 2, min: 0.5, max: 8, adim: 0.5 },
      { id: 'maxMum', ad: 'Bacak uzunluğu (en fazla mum)', tip: 'sayi', varsayilan: 5, min: 2, max: 15, adim: 1 },
      { id: 'maxGeriCekilme', ad: 'İzin verilen geri çekilme (bacak oranı)', tip: 'sayi', varsayilan: 0.35, min: 0.05, max: 0.9, adim: 0.05 },
      { id: 'direncEsigi', ad: 'Yüksek direnç eşiği (karşıt salınım)', tip: 'sayi', varsayilan: 3, min: 1, max: 12, adim: 1 },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      for (let s = 1; s < mumlar.length - 2; s++) {
        for (let uzunluk = 2; uzunluk <= p.maxMum && s + uzunluk - 1 < mumlar.length; uzunluk++) {
          const e = s + uzunluk - 1;
          const net = mumlar[e].c - mumlar[s].o;
          const yonBoga = net > 0;
          if (Math.abs(net) < p.bacakAtr * ctx.atr[e]) continue;
          // Geri çekilmesiz mi? Ölçü: bacak içindeki en derin TEK MUMLUK geri alım.
          let enKotu = 0;
          for (let j = s + 1; j <= e; j++) {
            const iceri = yonBoga
              ? mumlar[j - 1].h - mumlar[j].l
              : mumlar[j].h - mumlar[j - 1].l;
            enKotu = Math.max(enKotu, Math.max(0, iceri));
          }
          if (enKotu / Math.abs(net) > p.maxGeriCekilme) continue;

          // Bacağın kırdığı eski salınım (bir sınır)
          const eskiListe = (yonBoga ? ctx.sth : ctx.stl).filter(v => v < s);
          const kirilan = eskiListe.reverse().find(v =>
            yonBoga ? mumlar[e].c > mumlar[v].h : mumlar[e].c < mumlar[v].l);
          if (kirilan == null) continue;
          const sinir1 = yonBoga ? mumlar[kirilan].h : mumlar[kirilan].l;

          // Sonraki toparlanmanın kırdığı kısa vadeli salınım (diğer sınır)
          const sonrakiListe = (yonBoga ? ctx.stl : ctx.sth).filter(v => v > e);
          let sinir2 = null, kirilan2 = null;
          for (const v of sonrakiListe) {
            for (let j = v + 1; j < Math.min(mumlar.length, v + 30); j++) {
              if (yonBoga ? mumlar[j].c < mumlar[v].l : mumlar[j].c > mumlar[v].h) {
                kirilan2 = v; sinir2 = yonBoga ? mumlar[v].l : mumlar[v].h; break;
              }
            }
            if (sinir2 !== null) break;
          }
          if (sinir2 === null) { sinir2 = yonBoga ? mumlar[e].c : mumlar[e].c; kirilan2 = e; }

          // Direnç sayımı: iki sınır arasında kaç karşıt salınım var?
          const alt = Math.min(sinir1, sinir2), ust = Math.max(sinir1, sinir2);
          const engel = ctx.sth.concat(ctx.stl).filter(v => v < s &&
            ((mumlar[v].h <= ust && mumlar[v].h >= alt) || (mumlar[v].l <= ust && mumlar[v].l >= alt))).length;
          const dusukMu = engel < p.direncEsigi;
          const renk = dusukMu ? (yonBoga ? RENK.boga : RENK.ayi) : RENK.gri;
          bulgular.push({
            baslik: (dusukMu ? 'Düşük' : 'YÜKSEK') + ' dirençli bölge — ' + (yonBoga ? 'yukarı' : 'aşağı'),
            yon: yonBoga ? 'boga' : 'ayi', i: s, iSon: kirilan2,
            durum: dusukMu ? 'işlem burada' : 'İŞLEM ALMA',
            detay: [
              ['Bacak', s + ' → ' + e],
              ['Bacak boyu', ctx.mesafeYaz(net) + ' · ' + (Math.abs(net) / ctx.atr[e]).toFixed(2) + '×ATR'],
              ['En büyük geri çekilme', (enKotu / Math.abs(net) * 100).toFixed(1) + '%'],
              ['Sınır 1 (kırılan yapı)', sinir1], ['Sınır 2', sinir2],
              ['Yoldaki karşıt salınım', engel + ' (eşik ' + p.direncEsigi + ')'],
              ['Karar', dusukMu ? 'düşük dirençli — işlem burada' : 'yüksek dirençli — İŞLEM ALMA'],
            ],
            cizimler: [
              { tip: 'kutu', i1: s, i2: kirilan2, p1: alt, p2: ust, renk, dolguAlfa: dusukMu ? 0.13 : 0.06,
                kesikli: !dusukMu, etiket: dusukMu ? 'düşük dirençli' : 'yüksek dirençli' },
              { tip: 'cizgi', i1: s, p1: mumlar[s].o, i2: e, p2: mumlar[e].c, renk, kalinlik: 1.6, ok: true },
              { tip: 'seviye', p: sinir1, i1: kirilan, i2: e, renk: RENK.turuncu, kesikli: true, etiket: 'kırılan yapı' },
            ],
          });
          s = e;
          break;
        }
      }
      return bulgular;
    },
  });
})(window);
