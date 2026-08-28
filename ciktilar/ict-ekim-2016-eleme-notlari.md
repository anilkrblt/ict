# ICT Mentorship — Ekim 2016 (8 Video)
## Eleme Notları — İkinci Ay

---

## Bu ayın karakteri

Birinci ay **kurulum** öğretiyordu: order block, fair value gap, liquidity sweep, denge/prim/indirim. İkinci ay farklı bir yerde duruyor — sekiz videonun beşi **para yönetimi, risk ve psikoloji** üzerine.

Ve bu, ilginç bir sonuç doğuruyor: **ayın en faydalı kısmı, metodun kendisiyle ilgisi olmayan kısmı.** R:R matematiği, sabit yüzde risk, anti-martingale — hepsi standart risk yönetimi literatüründe var ve ICT'ye özgü hiçbir yanları yok. Doğru oldukları için değerliler, özgün oldukları için değil.

Kullanılan filtre birinci ayla aynı: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü.

---

# BÖLÜM I — VİDEO VİDEO

## Video 1 — Küçük hesapları yüksek risk almadan büyütmek

Serinin şimdiye kadarki en sağlam kısmı — ama içinde ciddi bir varsayım sorunu var.

### Doğru olan kısım

**İsabet oranı ↔ ödeme oranı ilişkisi.** Verilen tablo matematiksel olarak doğru:

| İsabet | Başabaş için gereken R:R |
|---|---|
| %75 | ~0.33 : 1 |
| %50 | 1 : 1 |
| %40 | 1.5 : 1 |
| %33 | 2 : 1 |
| %25 | 3 : 1 |

Bunu zaten biliyorsun — sweep sisteminde %33 isabet + 2R hedefin tam başabaş olduğunu birlikte hesaplamıştık. Video aynı ilişkiyi kuruyor.

**Riskin ödülden önce gelmesi.** "Kimse kâr alarak batmaz, herkes fazla risk alarak batar." Doğru ve önemli.

**Sabit yüzde risk.** İşlem başına %1.5-2, sabit lot değil. Senin `#018`'de kilitlediğin kuralın aynısı.

**Büyük getiri kovalamamak.** Bileşik büyümenin zamanla çalıştığı vurgusu doğru — ayın en dürüst tavsiyelerinden biri.

### Aritmetik sorunu

Video şu zinciri kuruyor: haftada bir 1:1 işlem × %1.5 risk = ayda ~%6 = yılda paranın iki katı = **10 yılda 1.000 dolardan 1 milyon dolar.**

Aritmetiği kontrol ettim: aylık %6 bileşik, 120 ay ≈ **1.100 kat.** Yani hesap doğru.

**Ama varsayım imkânsız.** Bu, 520 hafta boyunca **tek bir kayıp haftası olmadan** her hafta kazançlı bir işlem gerektiriyor. Video zaten kendisi kayıpların olacağını söylüyor — yani kendi hesabı, kendi uyarısıyla çelişiyor.

Gerçekçi hesap: %1.5 risk, 1:1 ödeme, %55 isabet → beklenen değer haftada ~%0.15, yılda ~%8. On yılda paranın iki katı biraz üstü. Milyon yok.

Ve daha temel bir sorun: bu büyüklükte bir getiri sürdürülebilir olsaydı sermaye o stratejiye akar ve getiri erirdi. On yıl boyunca aylık %6, dünyanın en iyi fon yöneticilerinin uzun vadede ulaştığı seviyenin çok üstünde.

### Kurulum örneği

Yeni kavram yok, birinci ayın araçları birleştiriliyor: günlük grafikte order block belirle → 1H'ye in → eski dibin altına sweep → order block'un gövde aralığına dönüş → giriş → stop mumun **ortasının altında** → hedefler eski tepelerdeki emir birikimleri.

**Ölçülebilir yeni tek şey:** stopun order block mumunun ortasının altına konması. Birinci ayda yoktu.

**Terim karışıklığı:** order block'un gövde aralığı burada "fair value gap" olarak adlandırılıyor. Birinci ayın altıncı videosundaki FVG tanımı (üç mumluk boşluk) bambaşkaydı. Tanım kayması listesine ekle.

### Ölçüm sorunu

Örnek işlem 5R'ye kadar gidiyor, ölçekli çıkışlarla %4'ün üstünde getiri gösteriliyor. Ama:

- Tek örnek, geriye dönük seçilmiş
- Kaç kurulumun çalışmadığı yok
- Aylık %50 getiri iddiası için kayıt yok
- 10 işlem / 518 pip deniyor ama kaçı kazanç kaçı kayıp ayrılmıyor

### Not

Bu videonun para yönetimi kısmı, **birinci ayın sekiz videosunun tamamından daha faydalı** — ve bu kısımda ICT'ye özgü hiçbir şey yok.

Ve şunu fark et: senin ölçtüğün her sistemde sorun R:R matematiğinde değildi. Sweep %33 isabetle 2R'de tam başabaştı — matematik doğruydu, edge yoktu. Bu video R:R matematiğini iyi anlatıyor ama **edge'in nereden geleceği** sorusuna hiç değinmiyor.

---

## Video 2 — Düşük riskli kurulum çerçeveleme

Videonun tamamı tek bir teknik: **aynı fikri daha küçük zaman diliminde bularak stop mesafesini daraltmak.** Ve içinde ayın en tehlikeli mantık hatası var.

### Yazılabilir kural — iç içe order block

1. Günlük grafikte order block seviyesini belirle
2. 1H'ye in: eski dip kırılıyor, fiyat seviyeye geliyor → 20 pip stop
3. 15dk'ya in: aynı bölgede daha küçük bir order block → 17 pip stop
4. 5dk'ya in: daha da küçük bir order block → 8 pip stop

Her adımda giriş seviyeye yaklaşıyor, stop daralıyor, hedefler sabit kalıyor. Yeni kavram yok — birinci ayın order block'u farklı ölçeklerde tekrarlanıyor.

### Mantık hatası

Video diyor ki: stop 20'den 8 pipe indi, hedefler aynı, **R:R üçe katlandı.**

Bu, R:R hesabının **payını** düzeltip **paydasını** görmezden geliyor. Stop daraldığında iki şey birden olur:

- Kazanç durumunda getiri R cinsinden büyür ✓ (video bunu söylüyor)
- **Stop yeme olasılığı artar** ✗ (video buna hiç değinmiyor)

8 piplik bir stop, normal piyasa gürültüsünün içinde kalır. Aynı kurulum 20 pipte hayatta kalırken 8 pipte vurulur.

**Ve maliyet.** Bunu senin projende ölçtük: komisyon + kayma, stop mesafesine bölünüyor. 20 pip stopta maliyet R'nin küçük bir kısmıydı; 8 pipte oran **iki buçuk katına** çıkar. Video 5 pip spread'den söz ediyor — 8 piplik stopta bu, riskin %60'ı demek.

Yani "riski düşürdüm" denen hamle, R cinsinden maliyeti ciddi biçimde artırıyor.

> Senin kendi bulgun: *dar stop iki kere cezalandırır — hem daha sık stop, hem her stopta daha çok R kaybı.* Bu video tam tersini iddia ediyor.

### Yanlışlanamazlık — yeni bir biçim

"Eski dibin kırılması tek başına dönüş beklemek için yeterli değil; üst zaman dilimindeki seviye gerekli."

Doğru bir uyarı gibi görünüyor ama pratikte şu işe yarıyor: kurulum çalışmazsa "üst zaman dilimi teyidi yoktu" denebilir, çalışırsa "işte üst zaman dilimi" denir. Teyidin ne olduğu ölçülebilir biçimde tanımlanmadıkça bu kural değil, sonradan uygulanabilir bir açıklama.

### Ölçüm

Aynı tek örnek, birinci videodan devam ediyor. Üç zaman diliminde gösteriliyor ama **üç kanıt değil, aynı örneğin üç görüntüsü.**

Sorulmayan kritik soru: 8 pip stopla girilen bu kurulumun kaçı hayatta kalır?

### Not

**İkinci ayın ilk iki videosu birbiriyle çelişiyor.** Birinci video "riski küçük tut, kaybı hesaba kat, matematiği anla" diyordu. İkinci video aynı matematiğin yarısını kullanıp diğer yarısını atlıyor.

**Ölçmeye değer soru:** aynı kurulum, farklı stop mesafeleriyle — ort. R nerede tepe yapıyor? Senin `stop_buf_atr` taraman tam bunu ölçecekti; Aşama 1'de RET geldiği için cevabı alamadın.

---

## Video 3 — Ayda %10 nasıl yapılır

Ayın yönünü net gösteriyor: **kurulum öğretimi bitti, getiri projeksiyonu başladı.** Birinci videodaki matematik sorunu burada çok daha büyük ölçekte tekrarlanıyor.

### Yazılabilir kural — ölçekli çıkış

- İşlem %2 riskle açılır
- **3R'de yarısı kapatılır** (→ %3 realize kâr)
- Kalan yarı üst zaman dilimi hedeflerine bırakılır
- İkinci hedeflerden sonra stop başabaşa çekilir

Kodlanabilir ve senin harness'ında ölçülebilir. Ama not: **breakeven'a çekme** kuralı burada var, ve senin `#018`'de bunu kasten yasaklamıştık — kazananı 0R'de kesip kaybedeni −1R'de bırakan yapı sıfır edge üretiyordu.

### Matematik

| Senaryo | İddia edilen aylık getiri |
|---|---|
| Sadece 3R kısmi çıkış, haftada bir | %10+ |
| İkinci yarı 50 pip giderse | %21+ |
| İkinci yarı 100 pip giderse | %46 |
| Ayda %10 bileşik | **yılda %300** |

Aritmetik doğru. Üç ağır varsayım gizli:

**1. Kayıp yok.** Hesabın hiçbir yerinde kaybeden işlem yok. Video kayıpların olacağını söylüyor ama hesaba katmıyor.

**2. Her hafta bir kurulum garantili.** 100 pip hareket eden, günlük order block'a oturan, 8-10 pip stopla girilebilen bir kurulum — her hafta. Sıklık hiç ölçülmemiş.

**3. İsabet oranı hiç konuşulmuyor.** Birinci videodaki kendi tablosuna göre 3R'de başabaş isabet %25. Kurulum bunun altındaysa, ne kadar ölçekli çıkarsan çık para kaybediyorsun. O sayı verilmiyor.

**Yıllık %300'e dair:** sürdürülebilir olsaydı sermaye o stratejiye akar ve getiri erirdi. Video "hangi fon yöneticisi bunu yapar" diye soruyor; cevabı: hiçbiri, çünkü sürdürülebilir değil.

### Yeni yanlışlanamazlık kalıbı

**"Kısmi kâr almaya karşı çıkanlar tutarlı para kazanmayan kişilerdir."**

Bu, kurala değil itiraz edenin karakterine yapılan bir savunma. Kısmi çıkışın edge'i artırıp artırmadığı **ölçülebilir bir sorudur** — ölçüm yerine "itiraz eden kaybediyordur" deniyor.

Ve kısmi çıkış matematiksel olarak nötr değildir: **sağ kuyruğu keser.** Senin ITP sisteminde tam bu sorunu bulmuştuk. Kısmi çıkış bunun yumuşak versiyonu ve etkisi ölçülmeden bilinemez.

**"Beklediğin kadar gitmezse üzülme, açgözlülüktür."** Kaçırılan getiri için hazır gerekçe, ve performansı sorgulamayı duygusal bir kusur haline getiriyor.

### Ölçüm

Üç videodur **aynı işlem** anlatılıyor. Farklı zaman dilimlerinde, farklı çıkış senaryolarıyla, ama tek örnek. Ve şimdi o tek örnekten yıllık %300 projeksiyonu çıkarılıyor — bir örnekten dağılım çıkarmak, yapılabilecek en zayıf istatistiksel çıkarım.

### Not

**İkinci ayın ilk üç videosu, birinci aydan farklı bir tür risk taşıyor.** Birinci ay ölçülemez kurulumlar öğretiyordu; burada ölçülmemiş bir kurulumdan, kayıpsız varsayımla, yıllık %300 projeksiyonu çıkarılıyor.

**Ölçmeye değer soru:** kısmi çıkış (3R'de yarı) ile tam pozisyon tutmayı karşılaştır. Beklentim: kısmi çıkış ort. R'ı düşürür ama getiri eğrisini yumuşatır. İkisi farklı şeyler, ayrılmalı.

**Ve şu karışıklığı not et:** "küçük risk para kazandırır, büyük risk değil" cümlesi iki farklı şeyi karıştırıyor — pozisyon boyutu (doğru, küçük tut) ile stop mesafesi (yanlış, dar stop maliyeti artırır).

---

## Video 4 — Kayıplar neden kârlılığı engellemez

Üçüncüdeki abartılı projeksiyondan geri çekiliyor ve **matematiği doğru yapıyor.** Hesapları tek tek kontrol ettim; hepsi tutuyor.

### Doğru olan kısım

| İsabet | R:R | Risk/işlem | 10 işlemde net |
|---|---|---|---|
| %30 | 3:1 | %1 | +%2 |
| %30 | 5:1 | %1 | +%8 |
| %30 | 5:1 | %2 | +%15 |
| %40 | 5:1 | %2 | +%28 |
| %50 | 5:1 | %2 | +%40 |
| %50 | 5:1 | %1 | +%20 |

İlk satır önemli: **%30 isabet, 3:1 ödemede ancak kıl payı pozitif** — çünkü başabaş noktası %25. Video bunu açıkça kabul ediyor ve "kimse heyecanlanmaz" diyor. Dürüst.

**Kayıplar ilk kez hesaba dahil ediliyor.** Üç videodur eksik olan buydu.

**"Kayıp işin maliyetidir"** çerçevesi doğru ve psikolojik olarak sağlam.

**Ve gerçekçi bir cümle:** fon yöneticileri ayda %1-2 hedefler, yılda %20-28'e denk gelir, bu zaten iyi bir getiridir. Üçüncü videodaki "yılda %300" iddiasıyla arasındaki mesafe kayda değer.

### Ama içeride büyük bir varsayım var

Tüm tablo şuna dayanıyor: **her işlem 5:1 çerçevelenebiliyor.**

**Sorun 1 — hedef büyüdükçe isabet düşer.** 5R hedef 3R'den uzaktır; fiyatın oraya ulaşma olasılığı daha küçüktür. Video isabeti %30'da sabit tutup ödemeyi 3'ten 5'e çıkarıyor. İki değişken bağımsız değil.

> Bunu senin verinde ölçmüştük: sweep sisteminde `rTarget` büyüdükçe isabet düşüyordu. İkisini ayrı ayrı seçemezsin.

**Sorun 2 — kaç kurulumun 5:1 çerçevelenebildiği söylenmiyor.** "Ayda 10 işlem, hepsi 5:1" varsayımı ölçülmemiş. Senin range sisteminde 4H'de 49 işlem çıkmıştı, 100 eşiğinin altında.

### Kritik eksik: edge nereden geliyor?

Tablonun tamamı doğru ama şunu varsayıyor: **isabet %30-50 arasında.**

Rastgele giriş de bir isabet oranı üretir. 5:1 hedefli rastgele bir giriş, kabaca %17 isabet eder (maliyet öncesi başabaş). Asıl soru: bu kurulum rastgeleden **daha iyi** mi?

Video bu soruyu hiç sormuyor. Tablolar "eğer isabetin %30 ise" ile başlıyor — ama o "eğer" tam olarak ölçülmesi gereken şey.

> Senin taban çizgin bu yüzden vardı: rastgele giriş dağılımının %95 persentili. Sistemin 72.4'te kalmıştı.

### Yeni yanlışlanamazlık kalıbı

**"Zamanla, fiyat hareketini anladıkça isabetin kendiliğinden artacak."** Ölçülemez ve ertelenebilir bir vaat. İsabet artmazsa "henüz yeterince anlamamışsın" denebilir.

### Not

**Ayın en dürüst videosu** ve buradaki hesaplar senin sweep analizinde birlikte yaptığımızın aynısı.

**Ama matematik hiçbir zaman sorun değildi.** Senin dört sisteminde de R:R aritmetiği doğruydu. Sorun her seferinde şuydu: isabet, başabaş noktasının etrafında salınıyordu.

**Ölçmeye değer soru:** `rTarget` 2/3/5 ile aynı kurulumu koştur, ort. R'ın nerede tepe yaptığına bak. Bu, videonun "5:1 daha iyidir" varsayımını doğrudan test eder.

---

## Video 5 — Kayıpları etkili biçimde telafi etmek

İyi bir kural ve kötü bir kural yan yana duruyor, ve ikisi birbirine karıştırılmış.

### İyi kural: kayıptan sonra riski yarıya indir

%2 riskle stop yedin → sonraki denemede %1 → yine stop → %0.5.

**Anti-martingale ve gerçekten sağlam.** Gerekçesi de doğru: *bu kaybın on kayıplık bir serinin başı olmadığını bilmiyorsun.* Kayıp serisi geldiğinde riski artıran hesabı bitirir; azaltan hayatta kalır.

Psikolojik yanı da doğru: kaybı hemen geri alma dürtüsü, en pahalı dürtülerden biri.

**Ve ayın en dürüst cümlelerinden:** "kayıp aldıysan bir şeyi yanlış yapıyorsun demektir." Sermaye korumasını birinci kural ilan etmesi doğru.

### Kötü kural: aynı fikre tekrar girmek

Prosedür: stop yedin → aynı bölgede yeni bir order block oluştu → tekrar gir.

Sorun, "kurulum hâlâ geçerli" tanımında. Videonun cevabı: fiyat yeni bir mumdan yukarı hareket etti, o mum yeni order block oldu.

**Bu, fiyatın dönmesini kurulumun geçerliliğinin kanıtı sayıyor.** Fiyat dönmezse yeni order block oluşmaz, dolayısıyla ikinci giriş de olmaz — kural sadece işe yaradığı durumlarda tetikleniyor. Geriye dönük bakınca strateji **her zaman** çalışmış görünür.

Somut risk: bu yapı, düşen bir piyasada arka arkaya girişe izin veriyor. Risk her seferinde yarılanıyor (iyi), ama toplam maruziyet birikiyor: %2 + %1 + %0.5 = **%3.5**, tek bir yanlış yön varsayımından.

### Bir çelişki: stop mesafesi

Video, ilk stopun "çok dar" olduğunu söylüyor ve ikinci girişte **daha geniş** stop öneriyor — order block'un altına, ortasına değil.

**Bu, ikinci videonun tam tersi.** Orada 20 pipten 8 pipe inmek "riski azaltmak" olarak sunuluyordu. İkincisi doğru — ama serinin kendi içinde çelişmesi, yine ölçülmemişliğin işareti.

### Yanlışlanamazlık

**"Stop yemen, kurulumun yanlış olduğu anlamına gelmez; stopun yanlış yerdeydi."** Bu cümle, kurulumun hiçbir zaman yanlış olmamasını mümkün kılıyor. Çalışırsa doğrudur, çalışmazsa stop yanlıştı.

**"Zararı kapattığında hafta sonuna kadar bekleme, düz kapat."** Makul disiplin ama keyfî — haftanın günü ile edge arasında bağ kurulmuyor.

### Senin projenle bağlantı

**Breakeven'a çekme kuralı burada da var** ve senin `#018`'de kasten yasakladığın şeyle aynı. Ölçülmeden bilinemez; video bunu güvenlik önlemi olarak sunuyor ama beklenen değere etkisini konuşmuyor.

### Not

**Alınacak:** kayıptan sonra riski yarıya indirme. Metottan bağımsız geçerli.

**Alınmayacak:** aynı fikre tekrar girme prosedürü. Tetikleyicisi "fiyat döndü" olduğu için geriye dönük bakışta hep haklı görünür.

---

## Video 6 — Yüksek ödüllü kurulumların sırları

Serinin yapısal merkezi — ilk kez **tüm karar sürecinin haritası** veriliyor. İçinde hem en sağlam metodolojik fikir hem de en büyük yapısal sorun var.

### Yazılabilir yapı — üç perspektif, on bileşen

**Büyük resim** (4 alan, **en az 2'si** uyuşmalı):
- Makro analiz (enflasyon / deflasyon)
- Faiz analizi (yön, trend, beklenmedik değişim, faiz farkları)
- Piyasalar arası analiz (CRB emtia endeksi ↔ dolar endeksi, ters ilişki)
- Mevsimsellik

**Orta vade** (3 alan, **en az 2'si** uyuşmalı):
- Yukarıdan aşağı analiz (aylık / haftalık / günlük)
- COT verisi (CFTC taahhüt raporu — ticari kullanıcılar 12 ay ve 4 yıl uçlarında)
- Piyasa duyarlılığı

**Kısa vade** (3 alan, **üçü birden** gerekli):
- Korelasyon analizi (dolar endeksi SMT, korelasyonlu parite SMT)
- Zaman-fiyat teorisi (çeyreklik / aylık / haftalık / günlük döngüler + günün saati)
- IPTA (kurumsal emir akışı, likidite)

**Yüksek ödüllü kurulum = 2 + 2 + 3 = yedi bileşenin uyuşması.**

### Serinin en sağlam metodolojik fikri

**"Süreç odaklı düşün, tepkisel değil."** Ve daha önemlisi: karar sürecinin **akış şeması** olması, **ikili (binary)** olması, her adımda net bir "şunu yap ya da yapma" bulunması.

Bu tam olarak senin `PROTOCOL.md`'de yaptığın şey — "kural yazılıysa ihlal edilebilir, kaldırılmışsa edilemez" ilkesiyle aynı aileden.

**Fiyat sinyali aramadan önce bağlam kur.** Sıralama doğru. Ve şu cümle dürüst: *"girişler ve stop yerleşimi şu an senin en az önemsemen gereken şey."*

**Öz-farkındalık:** kayıpların çoğunun kısa vadeli perspektiften geleceği, üst zaman dilimi işlemlerinin daha iyi hizmet edeceği söyleniyor. Ölçülebilir ve makul bir iddia.

### Ama yapısal sorun büyük

Yedi bileşenin uyuşması bir **filtre yığını** — ve senin projende bu tam olarak öldürücü olan şeydi.

> `#009`'da ızgarayı aşamalara bölmüştük çünkü 7 boyutlu 1458 hücre "plato araması için seyrek değil, yanıltıcı"ydı. Ve Aşama 1'de RET aldın: 27 hücrenin hiçbiri 100 işlem eşiğini geçemedi.

Burada yedi bileşenin **aynı anda** uyuşmasını bekleyen bir sistem var. İşlem sayısını dramatik biçimde azaltır. Kaç kurulum kalır? Söylenmiyor.

Ve daha kötüsü: **bileşenlerin çoğu ölçülemez.** "Makro analiz bullish mi" sorusunun mekanik cevabı yok. "Piyasa duyarlılığı aşırı mı" — video kendisi "cumartesi günleri birkaç kaynağa bakıp ortalama alıyorum" diyor. Kodlanabilir bir tanım değil.

Sonuç: **yedi bileşenli sistem, hiçbiri ölçülmemiş yedi girdiden oluşuyor.**

### Ölçülebilir olan tek bileşen: COT

Seride **ilk kez fiyat grafiği dışına** çıkan bir veri kaynağı. CFTC haftalık raporu gerçek, kamuya açık, geçmişi uzun, tanımı net.

Literatür karışık — ticari kullanıcı pozisyonlarının öngörü gücü olduğuna dair bazı bulgular var ama tutarlı ve güçlü bir edge gösteren kanıt sınırlı. Yine de **ölçülebilir bir hipotez**, ve bu seride nadir.

Dolar endeksi ↔ emtia ters ilişkisi de gerçek ve ölçülmüş bir olgudur (mükemmel değil ama var).

### Yanlışlanamazlık ve bir tutarsızlık

**"Eylül'de %90+ isabet, neredeyse %100 tutturduk."** Sıfır kayıt.

**"Ekim'de IFX kitabımda %59 gösterdim."** Yine kayıt yok, ve birinci videodaki %50 iddiasının üstüne çıkıyor.

**Asıl tutarsızlık:** dördüncü video *"isabet %30-50 yeterli, yüksek isabete ihtiyacın yok"* diyordu. Bu video *"%90+ isabetliyim"* diyor. İkisi aynı ayda, aynı seride.

**"Bunu şimdi anlatamam, 12 ay sürer."** Test edilebilir sonucun sürekli ertelenmesi — birinci ayda vardı, burada kurumsallaşmış.

**"Kimse gerçek bir işlem planı satmaz, ben satıyorum."** Ürünü rakipsiz ilan eden bir çerçeve; içerik iddiası değil.

### Not

**Metodolojik fikir doğru, uygulaması ölçülemez.** Akış şemasının düğümleri ölçülebilir tanımlar içermezse, şema sadece kararı erteler.

**Yedi bileşenli filtre yığını, senin RET sonucunun teorik açıklaması gibi.** Sen beş koşullu bir range tanımı + üç kapı ile 49 işlem üretebildin. Yedi bileşenle kaç işlem kalır?

**Ölçmeye değer tek şey: COT verisi.** Fiyat grafiğinden bağımsız, ölçülebilir tek yeni girdi.

---

## Video 7 — Sahte bayrak tuzağı (false flag)

Klasik bir formasyonun **ne zaman çalışmadığını** anlatıyor. Yaklaşım olarak birinci ayın yedinci videosuna benziyor — yasaklayıcı, yani daha test edilebilir. Ama uygulama tarafı çöküyor.

### Yazılabilir iddia — koşullu formasyon reddi

Kural: bull flag / bear flag klasik devam formasyonlarıdır, **ama üst zaman diliminde prim bölgesindeyken bull flag, indirim bölgesindeyken bear flag ters çalışır.**

1. Alt zaman diliminde flag formasyonu gör
2. Üst zaman dilimine çık, prim/indirim konumunu belirle
3. Konum tersse formasyonu **devam** değil **tuzak** olarak oku
4. Salınım noktasının ters yönde kırılmasını bekle
5. Son ters mumun (order block) test edilmesinde gir
6. Stop flag'in ucunun ötesi

Fikrin kendisi test edilebilir: **flag formasyonları, üst zaman dilimi konumuna göre ayrıştırıldığında farklı davranıyor mu?**

### İyi olan taraf

**Karşı taraf düşüncesi.** "Diğer traderlar ne görüyor?" sorusu, seride şimdiye kadarki en olgun fikir. Bir formasyonun yaygın bilinmesi, etrafında emir birikmesi demektir — ölçülebilir bir mekanizma.

**Formasyonun tek başına yetmediğini kabul etmesi.** *"Fiyat formasyona göre hareket etmez"* cümlesi doğru, ve kendi araçlarını (order block, breaker) da o listeye dahil ediyor. Seride nadir bir dürüstlük.

**Yasaklayıcı çerçeve.** Üretici kurallardan daha test edilebilir.

### Ama uygulama tarafı çöküyor

Örnek çözülürken **beş zaman dilimi** arasında geçiş yapılıyor: günlük → 4H → 1H → 15dk → 5dk. Her seviyede yeni bir tanım devreye giriyor: bearish order block, likidite boşluğu, mean threshold, iki mumun gövde aralığından hesaplanan equilibrium.

Sonuçta girişin dayandığı seviye, **5dk grafikte iki mumun gövde ortası.** Buraya ulaşan seçimlerin hiçbirinin kuralı yok:

- Hangi zaman diliminde durulacak?
- Hangi mum order block sayılacak?
- Hangi boşluk dikkate alınacak?
- Fitiller mi gövdeler mi?

Bu, birinci ayın altıncı videosundaki **dört-aralık probleminin** daha karmaşık hali. Sonucu bildikten sonra bu zincir kurulabilir; öncesinde kurulamaz.

### Fitil/gövde tutarsızlığı

İki örnekte de "fitilleri yok say, gövdelere bak" deniyor. Ama:

- Birinci örnekte stop, **fitilin** üstüne konuyor
- İkinci örnekte hacmin "fitillerin içinde" olduğu söylenip sonra gövdeler kullanılıyor

Ve şu iddia yanlış: **hacmin nerede yoğunlaştığı mum grafiğinden bilinemez.** Mum, hacim dağılımını göstermez. Ölçülmemiş bir varsayım olgu gibi sunuluyor.

### Yanlışlanamazlık

**"Turtle soup" burada da devrede.** Flag kırılırsa "devam etti", kırılıp geri dönerse "turtle soup'tu". İki sonuç da açıklanabiliyor.

**"Ne kadar duraklayacağını bilemeyiz, umursamıyoruz da."** Zamanlama belirsizliğinin muafiyet olarak kullanılması.

**Örnekler geriye dönük.** İki örnek, ikisi de sonuç bilinerek çözülmüş, sıfır istatistik.

### Not

**Test edilebilir ve iyi bir hipotez var:** klasik flag formasyonları, üst zaman dilimi konumuna göre ayrıştırıldığında performans farkı gösteriyor mu? Senin harness'ında ölçülebilir — flag tespiti mekaniktir (impuls + konsolidasyon + eğim), prim/indirim konumu da %50 seviyesiyle mekaniktir.

**Ama videodaki uygulama ölçülemez.** Ölçmek isteseydin, videonun zincirini değil kendi tanımladığın basit versiyonu ölçerdin.

**"Karşı taraf düşüncesi" fikrini ayrı kaydet.** Yaygın bilinen bir formasyonun etrafında emir birikmesi gerçek bir mekanizma. Bu, "grafiği okumak" değil — piyasada kimin ne yaptığına dair bir hipotez, ve o kategori daha ölçülebilir.

---

## Video 8 — Sahte kırılım tuzağı

**Ayın en net ölçülebilir iddiası** — ve senin kapattığın projeyle doğrudan aynı yapıyı ele alıyor.

### Yazılabilir iddia — sahte kırılım rejimi

Yükseliş rejiminde, fiyat bir konsolidasyonun **altına** kırılırsa bu sahte kırılımdır; fiyat döner ve konsolidasyonun **üstündeki** seviyeleri hedefler. Düşüş rejiminde tam tersi.

**Ve rejimin nasıl belirleneceği de söyleniyor** — bu önemli, çünkü seride ilk kez yön tanımı somut: **hangi tarafın süpürüldüğüne bak.** Konsolidasyonların altı defalarca süpürülüp fiyat yukarı gidiyorsa rejim yükseliş yönlü.

Bu döngüsel değil, çünkü **geçmiş olaylardan bugünün beklentisini** kuruyor: son üç konsolidasyonda alt taraf süpürüldüyse, dördüncüsünde de alt tarafın süpürülmesini bekle.

### İkinci yazılabilir iddia — ölçülü hareket

Kırılım sonrası hareketin, önceki bacakla eşit uzunlukta olacağı. İki örnekte gösteriliyor. Klasik "measured move", kodlanabilir.

### Ve gerçek bir mekanizma

**"Piyasa likiditeyi arar."** Konsolidasyonun etrafında stop emirleri birikir; fiyat oraya gider çünkü orada karşı taraf vardır. Bu komplo anlatısı değil — **piyasa mikroyapısında desteklenen bir gözlem.** Emirlerin belirli seviyelerde kümelenmesi ve fiyatın o kümelere çekilmesi ölçülmüş bir olgu.

Videonun bunu *"market maker işini yapıyor, düşmanın değil"* diye çerçevelemesi, birinci aydaki komplo tonundan belirgin bir iyileşme.

### Senin projenle çarpıcı çakışma

| | Senin sistemin | Bu video |
|---|---|---|
| Kenar kırılımı | `BREAKOUT_PENDING` → teyit ararız | Baştan sahte kabul et |
| Sweep sonrası | Fade tezini güçlendirir | Yön kaynağı |
| Rejim | Ayrı bir HTF filtresi (EMA200) | Süpürme tarafından türetilir |

Buradan gerçekten ölçmeye değer bir hipotez çıkıyor: **rejim, HTF EMA'sından değil, hangi kenarın süpürüldüğünden türetilseydi ne olurdu?**

Senin `htf_bias` tanımın EMA200'e dayanıyordu. Bu video mekanik bir alternatif öneriyor ve o tanım sistemin kendi gözlemlerinden türüyor.

### Yanlışlanamazlık

**"Rejim yükseliş yönlü" tanımı geriye dönük kuruluyor.** Süpürme yönü değişirse "rejim değişti" denir. Kaç süpürmeden sonra rejim değişmiş sayılır? Tanımsız — ve bu boşluk kapatılmadan kural ölçülemez.

**Hacim iddiası yine yanlış:** "hacmin çoğu gövdelerde." İkinci kez tekrarlanıyor, ikisinde de olgu gibi sunuluyor.

**Tek örnek, geriye dönük.** Sekiz konsolidasyon, hepsi aynı yönde çalışmış bir dönemden. Rejimin ters döndüğü bir dönem gösterilmiyor.

### Not

**Ayın en ölçülebilir videosu.** İddia net, rejim tanımı mekanik, mekanizma makul.

**Senin için asıl değeri:** kapattığın projeye alternatif bir rejim tanımı öneriyor. Sistemin RET aldığında sorun "işlem sayısı yetersiz"ti; farklı bir rejim tanımı işlem sayısını değiştirmez ama **hangi tarafın oynanacağını** değiştirir — ve senin sistemin kırılım tarafında fade'den fazla işlem üretiyordu (26/21).

Bu video diyor ki: o kırılımların çoğu sahteydi, ters yönde oynanmalıydı. Ölçülebilir bir iddia — ama tek başına yeni bir proje demek, mevcut olana yama değil.

---

# BÖLÜM II — İKİNCİ AYIN BÜTÜNÜ

## Ölçülebilir çekirdek

| Kavram | Kaynak | Klasik karşılığı |
|---|---|---|
| R:R ↔ isabet ilişkisi | V1, V4 | Standart beklenen değer hesabı |
| Sabit yüzde risk | V1 | Standart pozisyon boyutlama |
| Order block ortasının altına stop | V1 | Yapısal stop yerleşimi |
| İç içe zaman dilimi ile stop daraltma | V2 | (hatalı — aşağı bak) |
| 3R'de kısmi çıkış | V3 | Ölçekli çıkış |
| Kayıptan sonra riski yarıya indir | V5 | Anti-martingale |
| COT verisi | V6 | CFTC taahhüt raporu |
| Koşullu flag reddi | V7 | Formasyon + bağlam filtresi |
| Sahte kırılım rejimi | V8 | Sahte kırılım / Wyckoff spring |
| Ölçülü hareket | V8 | Measured move |

## Ayın iç çelişkileri

| Konu | Bir video | Başka bir video |
|---|---|---|
| Stop mesafesi | V2: dar stop riski azaltır | V5: dar stop stop yedirir |
| İsabet beklentisi | V4: %30-50 yeterli | V6: %90+ isabetliyim |
| Getiri hedefi | V3: yılda %300 | V4: ayda %1-2 zaten iyi |
| FVG tanımı | V1: order block gövde aralığı | (1. ay V6): üç mumluk boşluk |

Dört çelişki, hepsi aynı ay içinde. Bu, ölçülmemiş bir sistemin doğal işareti — ölçülmüş olsaydı hangisinin doğru olduğu bilinirdi.

## Tekrarlanan ölçüm sorunları

**Tek örnek, üç video.** İlk üç video aynı işlemi anlatıyor. Farklı zaman dilimleri, farklı çıkış senaryoları, ama tek örnek — ve o tek örnekten yıllık getiri projeksiyonu çıkarılıyor.

**Kayıpsız projeksiyon.** V1 ve V3'te kayıp hiç hesaba katılmıyor. V4'te düzeltiliyor ama V6'da yine "%90+ isabet" iddiasına dönülüyor.

**Kaç kurulum oluştuğu hiç ölçülmüyor.** "Haftada bir tane" varsayımı, tüm getiri hesaplarını taşıyor.

**Ve hiç sorulmayan soru:** isabet oranı nereden geliyor? Tüm tablolar "eğer isabetin %30 ise" ile başlıyor. O "eğer", ölçülmesi gereken tek şey.

## İkna kalıpları — bu aya özgü olanlar

| Kalıp | Nasıl işliyor |
|---|---|
| Bileşik faiz vaadi | Matematiksel olarak doğru ama kayıpsız varsayımla kurulmuş |
| İtirazcının karakterine saldırı | "Kısmi çıkışa karşı çıkanlar para kazanamayanlardır" |
| Duygusal yeniden çerçeveleme | Beklentiyi sorgulamak "açgözlülük" ilan ediliyor |
| Kurulumun dokunulmazlığı | "Kurulum yanlış değildi, stopun yanlış yerdeydi" |
| Ertelenen yeterlilik | "Zamanla isabetin kendiliğinden artacak" |

---

# BÖLÜM III — DEĞERLENDİRME

## Alınacak üç şey

**1. R:R ↔ isabet matematiği (V1, V4).** Doğru ve zaten biliyordun; teyit değeri var.

**2. Kayıptan sonra riski yarıya indirme (V5).** Anti-martingale, metottan bağımsız geçerli.

**3. Süreç odaklı, ikili karar akışı (V6).** Metodolojik olarak doğru — ve senin protokolünün ilkesiyle aynı.

Üçünün de ortak özelliği: **ICT'ye özgü olmamaları.**

## Alınmayacak üç şey

**1. Zaman dilimi daraltarak stop küçültme (V2).** R:R'ın payını düzeltip paydasını görmezden geliyor, ve maliyeti R cinsinden artırıyor.

**2. Getiri projeksiyonları (V1, V3).** Kayıpsız varsayımla kurulmuş, sürdürülebilirlik testinden geçmiyor.

**3. Aynı fikre tekrar girme prosedürü (V5).** Tetikleyicisi "fiyat döndü" olduğu için geriye dönük bakışta hep haklı görünür.

## Ölçmeye değer dört soru

Hepsi senin mevcut harness'ında test edilebilir:

**1. Stop mesafesi ↔ ort. R.** Aynı kurulum, farklı stop mesafeleri — ort. R nerede tepe yapıyor? V2'nin iddiasını doğrudan test eder.

**2. Hedef büyüklüğü ↔ isabet.** `rTarget` 2/3/5 — isabet nasıl düşüyor, ort. R nerede optimum? V4'ün "5:1 daha iyidir" varsayımını test eder.

**3. Kısmi çıkış ↔ tam pozisyon.** 3R'de yarı kapatmak ort. R'ı düşürüyor mu, eğriyi yumuşatıyor mu? İkisi ayrı sorular.

**4. Alternatif rejim tanımı.** Rejim, EMA200 yerine "hangi kenar süpürülüyor" ile tanımlansaydı ne olurdu? V8'in en değerli katkısı.

## İki ayın karşılaştırması

**Birinci ay:** kurulum kavramları. Sekiz tanım, yedisinin klasik karşılığı var. Sistem olarak ölçülemez çünkü aralık, zaman dilimi ve yön seçimleri yoruma bırakılmış.

**İkinci ay:** para yönetimi ve risk. Söylenenlerin çoğu doğru — ve hiçbiri metoda özgü değil. Metoda özgü kısımlar (V2'nin stop daraltması, V3'ün projeksiyonları) ise hatalı.

**Ortak eksik, iki ayda da aynı:** *"bunu şu kadar örnekte ölçtük, şu oranda çalıştı"* cümlesi on altı videoda bir kez bile geçmiyor.

## Kapanış gözlemi

İkinci ay, birinci aydan **daha faydalı ama daha az özgün.** Risk yönetimi tavsiyeleri sağlam çünkü standart; metoda özgü katkılar zayıf çünkü ölçülmemiş.

Ve bir örüntü netleşiyor: **doğru olan kısımlar herkesin bildiği kısımlar, özgün olan kısımlar ölçülmemiş kısımlar.** Bu, seriyi değerlendirirken en çok işine yarayacak ayrım — ve muhtemelen kalan on aya da uygulanacak.
