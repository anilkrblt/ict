/* ICT Grafik Laboratuvarı — dedektörler
 *
 * Her dedektör, `ciktilar/islem-claude.md` içindeki bir tanımın kod karşılığı.
 * `kaynak` alanı hangi bölümden geldiğini söyler; `uyari` alanı kaynağın kendi
 * çekincesini taşır. Amaç iddiayı doğrulamak değil — GÖRÜNÜR kılmak.
 *
 * Dedektör sözleşmesi:
 *   calistir(mumlar, p, ctx) -> [bulgu]
 *   bulgu = { baslik, yon:'boga'|'ayi'|'notr', i, iSon, durum,
 *             detay:[[ad,deger],...], cizimler:[katman,...] }
 */
(function (global) {
  'use strict';

  const RENK = {
    boga: '#2e7d5b', ayi: '#b5452f', mavi: '#3a6ea5', mor: '#7a5aa8',
    turuncu: '#c47a20', gri: '#8a8378', camgobegi: '#2f7f86',
  };

  /* ================= yardımcılar ================= */

  const govde = m => Math.abs(m.c - m.o);
  const govdeUst = m => Math.max(m.o, m.c);
  const govdeAlt = m => Math.min(m.o, m.c);
  const yukariMum = m => m.c >= m.o;
  const menzil = m => m.h - m.l;

  function atrHesapla(mumlar, n) {
    n = n || 14;
    const tr = [], atr = [];
    for (let i = 0; i < mumlar.length; i++) {
      const m = mumlar[i], o = mumlar[i - 1];
      tr.push(o ? Math.max(m.h - m.l, Math.abs(m.h - o.c), Math.abs(m.l - o.c)) : m.h - m.l);
      if (i < n) {
        const dilim = tr.slice(0, i + 1);
        atr.push(dilim.reduce((a, b) => a + b, 0) / dilim.length);
      } else {
        atr.push(atr[i - 1] + (tr[i] - atr[i - 1]) / n);
      }
    }
    return atr;
  }

  /* Kısa vadeli tepe/dip: solunda ve sağında `k` mum daha alçak/yüksek.
     Ara vadeli: solunda ve sağında birer kısa vadeli tepe/dip olan (§10 Yöntem B). */
  function salinimlar(mumlar, k) {
    k = k || 1;
    const sth = [], stl = [];
    for (let i = k; i < mumlar.length - k; i++) {
      let tepe = true, dip = true;
      for (let j = 1; j <= k; j++) {
        if (mumlar[i - j].h >= mumlar[i].h || mumlar[i + j].h >= mumlar[i].h) tepe = false;
        if (mumlar[i - j].l <= mumlar[i].l || mumlar[i + j].l <= mumlar[i].l) dip = false;
      }
      if (tepe) sth.push(i);
      if (dip) stl.push(i);
    }
    const ustKademe = (liste, alan, karsilastir) => {
      const cikti = [];
      for (let x = 1; x < liste.length - 1; x++) {
        const o = mumlar[liste[x]][alan];
        if (karsilastir(o, mumlar[liste[x - 1]][alan]) && karsilastir(o, mumlar[liste[x + 1]][alan])) {
          cikti.push(liste[x]);
        }
      }
      return cikti;
    };
    const ith = ustKademe(sth, 'h', (a, b) => a > b);
    const itl = ustKademe(stl, 'l', (a, b) => a < b);
    return { sth, stl, ith, itl };
  }

  const NY_BICIM = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York', hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', weekday: 'short',
  });

  function nyParcala(ms) {
    const p = NY_BICIM.formatToParts(new Date(ms));
    const al = t => (p.find(x => x.type === t) || {}).value;
    const saat = +al('hour') % 24;
    const dk = +al('minute');
    return {
      tarih: al('year') + '-' + al('month') + '-' + al('day'),
      saat, dk, dakika: saat * 60 + dk,
      haftaGunu: al('weekday'),
    };
  }

  /* Aynı NY takvim gününe düşen mumları grupla. Pazar mumları sayılmaz (§12.4). */
  function islemGunleri(ny) {
    const gunler = [];
    let mevcut = null;
    for (let i = 0; i < ny.length; i++) {
      if (ny[i].haftaGunu === 'Sun') continue;
      if (!mevcut || mevcut.tarih !== ny[i].tarih) {
        mevcut = { tarih: ny[i].tarih, bas: i, son: i };
        gunler.push(mevcut);
      } else {
        mevcut.son = i;
      }
    }
    return gunler;
  }

  function pencereUcNoktalari(mumlar, bas, son, govdeyle) {
    let yuksek = -Infinity, alcak = Infinity, iY = bas, iA = bas;
    for (let i = bas; i <= son; i++) {
      const m = mumlar[i];
      const y = govdeyle ? govdeUst(m) : m.h;
      const a = govdeyle ? govdeAlt(m) : m.l;
      if (y > yuksek) { yuksek = y; iY = i; }
      if (a < alcak) { alcak = a; iA = i; }
    }
    return { yuksek, alcak, iY, iA };
  }

  function baglamKur(mumlar, ayar) {
    const ny = mumlar.map(m => nyParcala(m.t));
    const s = salinimlar(mumlar, (ayar && ayar.salinimDerinlik) || 2);
    const araMs = mumlar.length > 1 ? mumlar[1].t - mumlar[0].t : 3600e3;
    return {
      mumlar, ny, atr: atrHesapla(mumlar, 14),
      sth: s.sth, stl: s.stl, ith: s.ith, itl: s.itl,
      gunler: islemGunleri(ny),
      araMs,
      gunIci: araMs < 24 * 3600e3,
      pip: (ayar && ayar.pip) || 0,
      mesafeYaz: function (d) {
        const mutlak = Math.abs(d);
        if (this.pip > 0) return (mutlak / this.pip).toFixed(1) + ' pip';
        return mutlak.toPrecision(4);
      },
    };
  }

  /* ================= dedektörler ================= */

  const DEDEKTORLER = [];

  /* --- 1. Salınım noktaları --------------------------------------------- */
  DEDEKTORLER.push({
    id: 'salinim',
    belge: '10-adim-1-yon',
    ad: 'Salınım noktaları',
    grup: 'Yapı',
    kaynak: '§10 Yöntem B',
    secimNoktasi: 0,
    tanim: 'Kısa vadeli tepe: solunda ve sağında daha alçak birer mum. Ara vadeli tepe: ' +
      'solunda ve sağında birer kısa vadeli tepe olan tepe — iki kademeli pivot. ' +
      'Diğer bütün array tanımları bu noktaların üstüne kuruluyor.',
    uyari: 'Kaynağın "beş ayın en iyi yön tanımı" dediği, ama beş ay boyunca kullanmadığı tanım. ' +
      'Tanım Larry Williams\'tan geliyor, ICT\'ye özgü değil.',
    parametreler: [
      { id: 'derinlik', ad: 'Pivot derinliği (mum)', tip: 'sayi', varsayilan: 1, min: 1, max: 5, adim: 1 },
      { id: 'kademe', ad: 'Kademe', tip: 'secim', varsayilan: 'kisa', secenekler: [
        { d: 'kisa', ad: 'Kısa vadeli' }, { d: 'ara', ad: 'Ara vadeli' }, { d: 'ikisi', ad: 'İkisi birden' }] },
    ],
    calistir(mumlar, p, ctx) {
      const s = salinimlar(mumlar, p.derinlik);
      const bulgular = [];
      const ekle = (i, tepeMi, ara) => {
        const m = mumlar[i];
        bulgular.push({
          baslik: (ara ? 'Ara vadeli ' : 'Kısa vadeli ') + (tepeMi ? 'tepe' : 'dip'),
          yon: tepeMi ? 'ayi' : 'boga', i, iSon: i, durum: ara ? 'ara vadeli' : 'kısa vadeli',
          detay: [['Fiyat', tepeMi ? m.h : m.l], ['İndeks', i]],
          cizimler: [{
            tip: 'isaret', i, p: tepeMi ? m.h : m.l, yon: tepeMi ? 'yukari' : 'asagi',
            renk: ara ? RENK.mor : RENK.gri, metin: (ara ? (tepeMi ? 'AVT' : 'AVD') : (tepeMi ? 'KVT' : 'KVD')),
          }],
        });
      };
      if (p.kademe === 'kisa' || p.kademe === 'ikisi') {
        s.sth.forEach(i => ekle(i, true, false));
        s.stl.forEach(i => ekle(i, false, false));
      }
      if (p.kademe === 'ara' || p.kademe === 'ikisi') {
        s.ith.forEach(i => ekle(i, true, true));
        s.itl.forEach(i => ekle(i, false, true));
      }
      return bulgular;
    },
  });

  /* --- 2. Fair Value Gap ------------------------------------------------ */
  DEDEKTORLER.push({
    id: 'fvg',
    belge: 'fair-value-gap-fvg',
    ad: 'Fair Value Gap',
    grup: 'PD Array',
    kaynak: '§2 Sözlük · §13.4',
    secimNoktasi: 1,
    tanim: 'Üç mumlu yapı: birinci ve üçüncü mumun fitilleri arasında işlem görmemiş alan kalır. ' +
      'Yükselişte 1. mumun tepesi ile 3. mumun dibi arası. Orta nokta = consequent encroachment (CE); ' +
      'kaynağa göre fiyatın orta noktaya erişmesi yeterli bir yeniden dengeleme sayılabilir.',
    uyari: 'Her FVG giriş değildir. Seçim noktası, "yeterince büyük boşluk" eşiğinde — eşiği sen koyuyorsun. ' +
      'Kısmen dolması tek başına geçersizlik değildir.',
    parametreler: [
      { id: 'minAtr', ad: 'En küçük boşluk (ATR katı)', tip: 'sayi', varsayilan: 0.15, min: 0, max: 2, adim: 0.05 },
      { id: 'tukenme', ad: 'Tükenme kuralı (§13.6)', tip: 'onay', varsayilan: true },
      { id: 'ce', ad: 'CE çizgisi', tip: 'onay', varsayilan: true },
      { id: 'sadeceAcik', ad: 'Yalnız dolmamışlar', tip: 'onay', varsayilan: false },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      for (let i = 1; i < mumlar.length - 1; i++) {
        const a = mumlar[i - 1], c = mumlar[i + 1];
        let ust, alt, yon;
        if (c.l > a.h) { alt = a.h; ust = c.l; yon = 'boga'; }
        else if (c.h < a.l) { alt = c.h; ust = a.l; yon = 'ayi'; }
        else continue;
        const boy = ust - alt;
        if (boy < p.minAtr * ctx.atr[i]) continue;
        const ce = (ust + alt) / 2;

        // Doluluk taraması: CE'ye değme ve tam doldurma ayrı ayrı işaretlenir.
        let ceIndeks = null, doluIndeks = null;
        for (let j = i + 2; j < mumlar.length; j++) {
          const m = mumlar[j];
          if (ceIndeks === null) {
            if (yon === 'boga' ? m.l <= ce : m.h >= ce) ceIndeks = j;
          }
          if (yon === 'boga' ? m.l <= alt : m.h >= ust) { doluIndeks = j; break; }
        }
        const durum = doluIndeks !== null ? 'tükendi' : (ceIndeks !== null ? 'CE dokunuldu' : 'açık');
        if (p.sadeceAcik && durum !== 'açık') continue;
        const bitis = (p.tukenme && doluIndeks !== null) ? doluIndeks : null;
        const renk = yon === 'boga' ? RENK.boga : RENK.ayi;
        const cizimler = [{
          tip: 'kutu', i1: i - 1, i2: bitis, p1: alt, p2: ust, renk,
          dolguAlfa: durum === 'tükendi' ? 0.07 : 0.16,
          kesikli: durum === 'tükendi',
          etiket: (yon === 'boga' ? 'FVG+' : 'FVG−'),
        }];
        if (p.ce) cizimler.push({ tip: 'seviye', p: ce, i1: i - 1, i2: bitis, renk, kesikli: true });
        bulgular.push({
          baslik: (yon === 'boga' ? 'Bullish' : 'Bearish') + ' FVG', yon, i: i - 1, iSon: bitis, durum,
          detay: [
            ['Üst', ust], ['Alt', alt], ['CE (orta)', ce],
            ['Boyut', ctx.mesafeYaz(boy) + ' · ' + (boy / ctx.atr[i]).toFixed(2) + '×ATR'],
            ['Durum', durum],
          ],
          cizimler,
        });
      }
      return bulgular;
    },
  });

  /* --- 3. Order block --------------------------------------------------- */
  DEDEKTORLER.push({
    id: 'orderblock',
    belge: '13-4-array-tanimlari-giris-ve-stop-kutusu',
    ad: 'Order block',
    grup: 'PD Array',
    kaynak: '§13.3 · §13.4 · §13.5',
    secimNoktasi: 2,
    tanim: 'Yönlü hareketten önceki son karşı renkli mum. Geçerlilik: sonraki bir mumun GÖVDESİ ' +
      'bloğun ötesine geçmeli. Güç: hareket, gövdenin en az 3 katı. Ardışık aynı renkli mumlar ' +
      'birleştirilir. Giriş = mumun açılışı, stop = gövdenin altı. Mean threshold = gövdenin orta noktası.',
    uyari: 'Hiyerarşide 5. sırada, ve ön koşulu ("destek seviyesine yakın") kaynağın kendi ' +
      'itirafıyla tanımsız — merkezde belirsizlik var. Breaker ve mitigation block daha yanlışlanabilir.',
    parametreler: [
      { id: 'impuls', ad: 'İmpuls penceresi (mum)', tip: 'sayi', varsayilan: 3, min: 1, max: 10, adim: 1 },
      { id: 'gucKati', ad: 'Güç eşiği (gövde katı)', tip: 'sayi', varsayilan: 3, min: 0.5, max: 10, adim: 0.5 },
      { id: 'birlestir', ad: 'Ardışık mumları birleştir', tip: 'onay', varsayilan: true },
      { id: 'tukenme', ad: 'Tükenme kuralı (§13.6)', tip: 'onay', varsayilan: true },
      { id: 'mt', ad: 'Mean threshold çizgisi', tip: 'onay', varsayilan: true },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      for (let i = 0; i < mumlar.length - 1; i++) {
        const m = mumlar[i], sonraki = mumlar[i + 1];
        const bogaOB = !yukariMum(m) && yukariMum(sonraki);   // impulstan önceki son düşüş mumu
        const ayiOB = yukariMum(m) && !yukariMum(sonraki);
        if (!bogaOB && !ayiOB) continue;
        const yon = bogaOB ? 'boga' : 'ayi';

        // Ardışık aynı renkli mumları birleştir (§13.5/3)
        let bas = i;
        if (p.birlestir) {
          while (bas > 0 && yukariMum(mumlar[bas - 1]) === yukariMum(m)) bas--;
          if (i - bas > 2) bas = i - 2;   // en fazla üç mum birleşsin
        }
        let kutuUst = -Infinity, kutuAlt = Infinity, fitilUst = -Infinity, fitilAlt = Infinity;
        for (let j = bas; j <= i; j++) {
          kutuUst = Math.max(kutuUst, govdeUst(mumlar[j]));
          kutuAlt = Math.min(kutuAlt, govdeAlt(mumlar[j]));
          fitilUst = Math.max(fitilUst, mumlar[j].h);
          fitilAlt = Math.min(fitilAlt, mumlar[j].l);
        }
        const govdeBoyu = kutuUst - kutuAlt;
        if (govdeBoyu <= 0) continue;

        // Geçerlilik: sonraki bir mumun gövdesi bloğun ötesine geçmeli.
        const pencereSon = Math.min(mumlar.length - 1, i + p.impuls);
        let gecerli = false, uc = bogaOB ? -Infinity : Infinity;
        for (let j = i + 1; j <= pencereSon; j++) {
          const g = mumlar[j];
          if (bogaOB) { if (g.c > kutuUst) gecerli = true; uc = Math.max(uc, g.h); }
          else { if (g.c < kutuAlt) gecerli = true; uc = Math.min(uc, g.l); }
        }
        if (!gecerli) continue;
        const hareket = bogaOB ? uc - kutuAlt : kutuUst - uc;
        const guc = hareket / govdeBoyu;
        if (guc < p.gucKati) continue;

        // Tükenme: fiyat bloğa geri döndüyse array kullanılmış sayılır.
        let dokunus = null;
        for (let j = pencereSon + 1; j < mumlar.length; j++) {
          if (bogaOB ? mumlar[j].l <= kutuUst : mumlar[j].h >= kutuAlt) { dokunus = j; break; }
        }
        const durum = dokunus !== null ? 'tükendi' : 'aktif';
        const bitis = (p.tukenme && dokunus !== null) ? dokunus : null;
        const renk = bogaOB ? RENK.boga : RENK.ayi;
        const mt = (kutuUst + kutuAlt) / 2;
        const cizimler = [
          { tip: 'kutu', i1: bas, i2: bitis, p1: kutuAlt, p2: kutuUst, renk,
            dolguAlfa: durum === 'tükendi' ? 0.06 : 0.18, kesikli: durum === 'tükendi',
            etiket: (bogaOB ? 'OB+' : 'OB−') + ' ' + guc.toFixed(1) + '×' },
          // Stop referansı: gövdenin değil, fitilin ötesi ayrıca gösterilir.
          { tip: 'seviye', p: bogaOB ? fitilAlt : fitilUst, i1: bas, i2: bitis, renk, kesikli: true },
        ];
        if (p.mt) cizimler.push({ tip: 'seviye', p: mt, i1: bas, i2: bitis, renk: RENK.gri, kesikli: true });
        bulgular.push({
          baslik: (bogaOB ? 'Bullish' : 'Bearish') + ' order block', yon, i: bas, iSon: bitis, durum,
          detay: [
            ['Giriş (açılış)', mumlar[bas].o],
            ['Gövde ' + (bogaOB ? 'altı' : 'üstü') + ' (stop)', bogaOB ? kutuAlt : kutuUst],
            ['Fitil ucu', bogaOB ? fitilAlt : fitilUst],
            ['Mean threshold', mt],
            ['Güç', guc.toFixed(2) + '× gövde'],
            ['Birleşen mum', (i - bas + 1)],
            ['Durum', durum],
          ],
          cizimler,
        });
      }
      return bulgular;
    },
  });

  /* --- 4. Breaker ------------------------------------------------------- */
  DEDEKTORLER.push({
    id: 'breaker',
    belge: '13-3-on-kosulu-mekanik-olani-tercih-et',
    ad: 'Breaker',
    grup: 'PD Array',
    kaynak: '§13.3 · §13.4',
    secimNoktasi: 1,
    tanim: 'Bullish: bir dip kırılır (stop süpürmesi) → fiyat döner ve iki dip arasındaki kısa vadeli ' +
      'TEPEYİ kırar (yapı kayması) → o tepedeki son yükseliş mumu breaker olur. Mum seçimi: ' +
      '"düşüşten önceki en yüksek olan". Giriş tam gövde aralığı, stop aralığın altı.',
    uyari: 'Hiyerarşide birinci sırada — ailenin en yanlışlanabilir üyesi, çünkü iki ön koşulu da ' +
      'mekanik: stop süpürmesi + yapı kayması. Üst zaman dilimi yön koşulu gerektirmiyor.',
    parametreler: [
      { id: 'yapiPencere', ad: 'Yapı penceresi (mum)', tip: 'sayi', varsayilan: 40, min: 5, max: 200, adim: 5 },
      { id: 'mumPencere', ad: 'Mum arama penceresi', tip: 'sayi', varsayilan: 3, min: 1, max: 10, adim: 1 },
      { id: 'kirilimPencere', ad: 'Kırılım penceresi (mum)', tip: 'sayi', varsayilan: 30, min: 3, max: 200, adim: 5 },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      const kullanilanMum = new Set();
      const tara = (bogaMi) => {
        const dipler = bogaMi ? ctx.stl : ctx.sth;
        const tepeler = bogaMi ? ctx.sth : ctx.stl;
        const alanD = bogaMi ? 'l' : 'h';
        const alanT = bogaMi ? 'h' : 'l';
        for (let x = 0; x < dipler.length; x++) {
          const a = dipler[x];
          for (let y = x + 1; y < dipler.length; y++) {
            const c = dipler[y];
            if (c - a > p.yapiPencere) break;
            // 1. adım: eski dip süpürülmüş olmalı
            const supuruldu = bogaMi ? mumlar[c][alanD] < mumlar[a][alanD] : mumlar[c][alanD] > mumlar[a][alanD];
            if (!supuruldu) continue;
            // 2. adım: aradaki kısa vadeli tepe (en uç olanı)
            const arada = tepeler.filter(t => t > a && t < c);
            if (!arada.length) continue;
            const b = arada.reduce((en, t) =>
              (bogaMi ? mumlar[t][alanT] > mumlar[en][alanT] : mumlar[t][alanT] < mumlar[en][alanT]) ? t : en, arada[0]);
            // 3. adım: o tepenin kapanış bazında kırılması = yapı kayması
            let d = null;
            for (let j = c + 1; j <= Math.min(mumlar.length - 1, c + p.kirilimPencere); j++) {
              if (bogaMi ? mumlar[j].c > mumlar[b].h : mumlar[j].c < mumlar[b].l) { d = j; break; }
            }
            if (d === null) continue;
            // 4. adım: breaker mumu — düşüşten (yükselişten) önceki en uç ters mum
            let secilen = b;
            for (let j = Math.max(0, b - p.mumPencere); j <= b; j++) {
              if (yukariMum(mumlar[j]) !== bogaMi) continue;
              if (bogaMi ? mumlar[j].h >= mumlar[secilen].h : mumlar[j].l <= mumlar[secilen].l) secilen = j;
            }
            if (kullanilanMum.has(secilen + ':' + bogaMi)) break;
            kullanilanMum.add(secilen + ':' + bogaMi);
            const bm = mumlar[secilen];
            const ust = govdeUst(bm), alt = govdeAlt(bm);
            let dokunus = null;
            for (let j = d + 1; j < mumlar.length; j++) {
              if (bogaMi ? mumlar[j].l <= ust : mumlar[j].h >= alt) { dokunus = j; break; }
            }
            const renk = bogaMi ? RENK.boga : RENK.ayi;
            bulgular.push({
              baslik: (bogaMi ? 'Bullish' : 'Bearish') + ' breaker',
              yon: bogaMi ? 'boga' : 'ayi', i: secilen, iSon: dokunus,
              durum: dokunus !== null ? 'test edildi' : 'bekliyor',
              detay: [
                ['Süpürülen dip/tepe', mumlar[a][alanD]],
                ['Süpürme mumu', c],
                ['Kırılan yapı', mumlar[b][alanT]],
                ['Yapı kayması mumu', d],
                ['Giriş aralığı', alt.toPrecision(6) + ' – ' + ust.toPrecision(6)],
                ['Stop', bogaMi ? alt : ust],
              ],
              cizimler: [
                { tip: 'kutu', i1: secilen, i2: dokunus, p1: alt, p2: ust, renk, dolguAlfa: 0.2, etiket: 'BRK' },
                { tip: 'seviye', p: mumlar[a][alanD], i1: a, i2: c, renk: RENK.turuncu, kesikli: true, etiket: 'süpürülen' },
                { tip: 'seviye', p: mumlar[b][alanT], i1: b, i2: d, renk: RENK.mor, kesikli: true, etiket: 'MSS' },
                { tip: 'isaret', i: c, p: mumlar[c][alanD], yon: bogaMi ? 'asagi' : 'yukari', renk: RENK.turuncu, metin: 'raid' },
              ],
            });
            break;   // bu dip için ilk geçerli kurulum yeter
          }
        }
      };
      tara(true); tara(false);
      return bulgular;
    },
  });

  /* --- 5. Mitigation block ---------------------------------------------- */
  DEDEKTORLER.push({
    id: 'mitigation',
    belge: 'order-block-breaker-rejection-block-mitigation-block',
    ad: 'Mitigation block',
    grup: 'PD Array',
    kaynak: '§2 Sözlük · §13.4',
    secimNoktasi: 1,
    tanim: 'A (dip) → B (tepe) → C (A\'nın altına kırılım) yapısından sonra, A\'nın içindeki son ters mum. ' +
      'Klasik karşılığı: kırılan destek dirence dönüşür. Breaker\'dan farkı: burada önceki salınım ' +
      'SÜPÜRÜLMEZ, yalnızca yapı kayması vardır.',
    uyari: 'Hiyerarşide 2. sırada. Ön koşulu tek: yapı kayması. Breaker\'ın iki koşuluna göre daha geniş, ' +
      'dolayısıyla daha az yanlışlanabilir.',
    parametreler: [
      { id: 'yapiPencere', ad: 'Yapı penceresi (mum)', tip: 'sayi', varsayilan: 40, min: 5, max: 200, adim: 5 },
      { id: 'mumPencere', ad: 'Mum arama penceresi', tip: 'sayi', varsayilan: 3, min: 1, max: 10, adim: 1 },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      const kullanilanMum = new Set();
      const tara = (bogaMi) => {
        // Boğa MB: A = tepe, B = dip, C = A'nın üstüne kırılım, blok = A'daki son düşüş mumu
        const aListe = bogaMi ? ctx.sth : ctx.stl;
        const bListe = bogaMi ? ctx.stl : ctx.sth;
        const alanA = bogaMi ? 'h' : 'l';
        for (let x = 0; x < aListe.length; x++) {
          const a = aListe[x];
          const b = bListe.find(v => v > a && v - a <= p.yapiPencere);
          if (b == null) continue;
          // Süpürme YOKSA mitigation; süpürme varsa o breaker'ın işi.
          const oncekiB = bListe.filter(v => v < a).pop();
          if (oncekiB != null) {
            const supuruldu = bogaMi ? mumlar[b].l < mumlar[oncekiB].l : mumlar[b].h > mumlar[oncekiB].h;
            if (supuruldu) continue;
          }
          let c = null;
          for (let j = b + 1; j <= Math.min(mumlar.length - 1, b + p.yapiPencere); j++) {
            if (bogaMi ? mumlar[j].c > mumlar[a].h : mumlar[j].c < mumlar[a].l) { c = j; break; }
          }
          if (c === null) continue;
          let secilen = null;
          for (let j = Math.max(0, a - p.mumPencere); j <= a; j++) {
            if (yukariMum(mumlar[j]) !== bogaMi) secilen = j;   // A'nın içindeki SON ters mum
          }
          if (secilen === null) continue;
          if (kullanilanMum.has(secilen + ':' + bogaMi)) continue;
          kullanilanMum.add(secilen + ':' + bogaMi);
          const bm = mumlar[secilen];
          const ust = govdeUst(bm), alt = govdeAlt(bm);
          let dokunus = null;
          for (let j = c + 1; j < mumlar.length; j++) {
            if (bogaMi ? mumlar[j].l <= ust : mumlar[j].h >= alt) { dokunus = j; break; }
          }
          const renk = bogaMi ? RENK.boga : RENK.ayi;
          bulgular.push({
            baslik: (bogaMi ? 'Bullish' : 'Bearish') + ' mitigation block',
            yon: bogaMi ? 'boga' : 'ayi', i: secilen, iSon: dokunus,
            durum: dokunus !== null ? 'test edildi' : 'bekliyor',
            detay: [
              ['A (' + (bogaMi ? 'tepe' : 'dip') + ')', mumlar[a][alanA]],
              ['B (' + (bogaMi ? 'dip' : 'tepe') + ')', bogaMi ? mumlar[b].l : mumlar[b].h],
              ['C (kırılım mumu)', c],
              ['Giriş aralığı', alt.toPrecision(6) + ' – ' + ust.toPrecision(6)],
              ['Stop', bogaMi ? bm.l : bm.h],
            ],
            cizimler: [
              { tip: 'kutu', i1: secilen, i2: dokunus, p1: alt, p2: ust, renk, dolguAlfa: 0.2, etiket: 'MB' },
              { tip: 'seviye', p: mumlar[a][alanA], i1: a, i2: c, renk: RENK.mavi, kesikli: true, etiket: 'A' },
              { tip: 'isaret', i: b, p: bogaMi ? mumlar[b].l : mumlar[b].h, yon: bogaMi ? 'asagi' : 'yukari', renk: RENK.mavi, metin: 'B' },
            ],
          });
        }
      };
      tara(true); tara(false);
      return bulgular;
    },
  });

  /* --- 6. Rejection block ------------------------------------------------ */
  DEDEKTORLER.push({
    id: 'rejection',
    belge: 'order-block-breaker-rejection-block-mitigation-block',
    ad: 'Rejection block',
    grup: 'PD Array',
    kaynak: '§2 Sözlük · §13.4',
    secimNoktasi: 1,
    tanim: 'Belirgin bir fitilin gövdeyle birleştiği alan; salınım ucunda. Sınırlar: fitil ucu ↔ en uç ' +
      'gövde noktası. Fiyat en uç GÖVDE noktasını aşarsa (fitili aşmasa da) dağıtım sinyali sayılır.',
    uyari: 'Ön koşulu mekanik (fitil oranı) — ama eşiği sen koyuyorsun. Hiyerarşide 3. sırada.',
    parametreler: [
      { id: 'oran', ad: 'Fitil / gövde oranı', tip: 'sayi', varsayilan: 2, min: 0.5, max: 10, adim: 0.5 },
      { id: 'minAtr', ad: 'En küçük fitil (ATR katı)', tip: 'sayi', varsayilan: 0.6, min: 0, max: 3, adim: 0.1 },
    ],
    calistir(mumlar, p, ctx) {
      const bulgular = [];
      const tara = (tepeMi) => {
        const liste = tepeMi ? ctx.sth : ctx.stl;
        for (const i of liste) {
          const m = mumlar[i];
          const fitil = tepeMi ? m.h - govdeUst(m) : govdeAlt(m) - m.l;
          const g = Math.max(govde(m), (ctx.atr[i] || 1) * 0.05);
          if (fitil < p.oran * g) continue;
          if (fitil < p.minAtr * ctx.atr[i]) continue;
          const ucGovde = tepeMi ? govdeUst(m) : govdeAlt(m);
          const ucFitil = tepeMi ? m.h : m.l;
          const renk = tepeMi ? RENK.ayi : RENK.boga;
          let ihlal = null;
          for (let j = i + 1; j < mumlar.length; j++) {
            if (tepeMi ? mumlar[j].c > ucGovde : mumlar[j].c < ucGovde) { ihlal = j; break; }
          }
          bulgular.push({
            baslik: (tepeMi ? 'Bearish' : 'Bullish') + ' rejection block',
            yon: tepeMi ? 'ayi' : 'boga', i, iSon: ihlal,
            durum: ihlal !== null ? 'gövde aşıldı' : 'bozulmadı',
            detay: [
              ['İç sınır (giriş)', ucGovde], ['Fitil ucu (stop ötesi)', ucFitil],
              ['Fitil', ctx.mesafeYaz(fitil)], ['Fitil / gövde', (fitil / g).toFixed(2) + '×'],
            ],
            cizimler: [
              { tip: 'kutu', i1: i, i2: ihlal, p1: ucGovde, p2: ucFitil, renk, dolguAlfa: 0.2, etiket: 'RB' },
            ],
          });
        }
      };
      tara(true); tara(false);
      return bulgular;
    },
  });

  global.ICTDedektorler = { DEDEKTORLER, RENK, baglamKur, salinimlar, atrHesapla, nyParcala,
    yardim: { govde, govdeUst, govdeAlt, yukariMum, menzil, pencereUcNoktalari } };
})(window);
