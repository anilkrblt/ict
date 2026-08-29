# ICT Mentorship — Ekim 2016
## İkinci ay · 8 video · Para yönetimi, risk çerçeveleme ve piyasa yapıcı tuzakları

---

## Bu ayın karakteri

Birinci ay **kurulum** öğretiyordu: order block, fair value gap, liquidity sweep, denge/prim/indirim. İkinci ay farklı bir yerde duruyor — sekiz videonun beşi **para yönetimi, risk ve psikoloji** üzerine, ve ilk beşi **tek bir işlem örneğini** farklı açılardan çözüyor.

O tek örnek şu: AUD/USD, günlük grafikte **0.7512** seviyesinde bir bullish order block. Birinci video onu günlük+1 saatlikte çerçeveliyor, ikinci video aynı fikri 15 dakika ve 5 dakikaya indirip stopu 20 pipten 8 pipe düşürüyor, üçüncü video o dar stop üzerinden getiri projeksiyonu çıkarıyor, dördüncü video kayıpları hesaba katıyor, beşinci video "ilk girişte stop yediysen ne yaparsın" sorusunu aynı grafikte cevaplıyor. **Beş videoyu birlikte okursan tek bir eksiksiz işlem şablonu elde edersin** — bu ayın en kullanışlı çıktısı bu, ve Bölüm IV'te adım adım yazıldı.

Altıncı video bambaşka: hiç grafik yok, serinin **karar ağacı** veriliyor — üç perspektif, on bileşen, yedi uyuşma şartı. Yedinci ve sekizinci videolar iki "piyasa yapıcı tuzağı" öğretiyor: sahte bayrak ve sahte kırılım.

Ve şu sonuç doğuyor: **ayın en faydalı kısmı, metodun kendisiyle ilgisi olmayan kısmı.** R:R matematiği, sabit yüzde risk, anti-martingale — hepsi standart risk yönetimi literatüründe var ve ICT'ye özgü hiçbir yanları yok. Doğru oldukları için değerliler, özgün oldukları için değil.

---

## Bölme notu

Dosya **4.568 satır**, sekiz video. Sınırlar `1. video` … `8. video` işaretleriyle ayrılmış ve her videonun açılışı kendini teyit ediyor: *"teaching one of eight of the second month"*, *"module 2 of month two"*, … *"this is the eighth and final teaching for the second month"*. **Belirsizlik yok.**

| Video | Satır | Konu |
|---|---|---|
| V1 | 1 – 830 | Küçük hesabı yüksek risk almadan büyütmek |
| V2 | 831 – 1070 | Düşük riskli kurulum çerçeveleme |
| V3 | 1071 – 1543 | Ayda %10 nasıl yapılır |
| V4 | 1544 – 2067 | Kayıplar neden kârlılığı engellemez |
| V5 | 2068 – 2523 | Kayıpları etkili biçimde telafi etmek |
| V6 | 2524 – 3161 | Yüksek ödüllü kurulumların sırları |
| V7 | 3162 – 3983 | Sahte bayrak tuzağı |
| V8 | 3984 – 4568 | Sahte kırılım tuzağı |

---

## Bu belge nasıl okunur

Her video iki kutuda veriliyor:

**DERS** — videonun anlattığı şey, anlattığı gibi. Tanımlar, adım adım prosedürler, sayılar, örneğin çözümü, videonun gerekçesi. Burada eleştiri yok. Videoyu izlemiş biri kadar konuya hâkim olman için yazıldı.

**ELEME** — o anlatılanın hangi kısmı ileriye dönük ve ölçülebilir, hangi kısmı geçmiş açıklaması, hangi kısmı yanlışlanamaz. Değerlendirme burada.

Sonda **Bölüm IV** var: ayın tüm kavramlarının sözlüğü (tanım · nasıl bulunur · ne işe yarar) ve beş videonun birleşiminden çıkan tek uygulanabilir işlem şablonu.

Kullanılan filtre birinci ayla aynı: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü.

---

# BÖLÜM I — Dersler ve eleme

## Video 1 — Küçük hesabı yüksek risk almadan büyütmek

::: ders
**DERS**

#### Kaçınılacak dört şey

Video, olumlu tavsiyeden önce bir "yapma" listesiyle açılıyor:

1. **Büyük kazanç için acele etme** — ne pip sayısında ne yüzde getiride. Pip sayısı internette gösterilen bir kupa; önemli olan yüzde getiri.
2. **Büyük getiri umuduyla büyük riske açılma.** Yeni traderın "çok para koymam ve çok risk almam gerek" varsayımı yanlış; o varsayımın tek sebebi hızlı para kazanma isteği.
3. **Küçük riskli işlemlerin hesabı büyütmeyeceğini varsayma.** Bileşik faiz anlaşıldığında paranın büyümesi uzun sürmüyor, ve başlangıç tutarı önemli değil — *"100 dolarla bile başlayabilirsin."*
4. **Kötü planlama uğruna sermayeni harcama.** Servet için büyük risk gerekmiyor; gereken şey tutarlı parametreler.

#### Risk parametresi

**İşlem başına %2, ideali yeni trader için daha da az.** Video bunu bir üst sınır olarak koyuyor: *"ortalamada %2'den fazla olmasın."*

#### Riskin ödülden önce gelmesi — ve girişteki duygu

Videonun psikoloji tespiti: **işleme seni açgözlülük sokar, girdikten sonra o açgözlülük korkuya dönüşür.** *"İşlemi açarken korkmuyoruz — kaçırma korkusu dışında. Ama işlem başladığı anda 'ya kazanamazsam' başlıyor."* Bunun çaresi, tetiğe basmadan **önce** riski hesaplamak.

Videonun kapanış cümlesi bu bölüm için: *"Kimse kâr alarak batmaz. Herkes fazla risk alarak batar."*

#### İsabet ↔ ödeme oranı tablosu — ayın çekirdek matematiği

Video, "yüksek isabet gerekli mi" sorusunu bir tabloyla kapatıyor. Her satır, **başabaş** için gereken en düşük ödeme oranını veriyor:

| İsabet oranı | Başabaş için gereken R:R |
|---|---|
| %75 | 0.33 : 1 |
| %60 | 0.67 : 1 |
| %50 | 1 : 1 |
| %40 | 1.5 : 1 |
| %33 | 2 : 1 |
| %25 | 3 : 1 |

Videonun okuması: *"%25 isabetle, 1 dolara 3 dolar ödeyen işlemler ararsan, işlemlerin %75'inde yanılıp yine de net kârda olursun."* Ve isabet %50'ye çıkarsa, oran 3:1'de sabit kalsa bile 3:1 ödeyen işlem sayısı ikiye katlanır.

#### Kendi kaydı

Video bir performans kaydı veriyor:

| Kalem | Değer |
|---|---|
| Haftalık pip hedefi | 50 – 75 pip |
| Ortalama kazanan işlem | 51.80 pip |
| İşlem sayısı (ay) | 10 |
| Toplam | 518 pip |
| Getiri (IFX kitabı, Ekim) | %50'nin üstü |

Ve buna bir sınır koyuyor: *"Bu benim tatlı noktam. Bunun üstüne çıkmaya çalıştığım her seferde King Kong hissi geliyor — o da Empire State'ten düştü."*

#### Ayın hedef formülü: aylık %6

Videonun asıl önerisi 50 değil **%6**. Gerekçe: aylık %6 bileşik, **yılda parayı ikiye katlar.**

Gereken üç şey:

| Bileşen | Değer |
|---|---|
| Haftada işlem sayısı | 1 |
| İşlem başına risk | %1.5 |
| Ödeme oranı | 1 : 1 |
| Stop | 20 pip |
| Hedef | 20 pip |

Hesap: haftada bir kez %1.5 → ayda %6. 1.000 dolarlık hesapta işlem başına risk **15 dolar.** Videonun sorusu: *"15 dolar kaybettin diye eve gidip ailene mi çıkışacaksın? Hayır. Çıkışacaksan bu iş sana göre değil."*

Ve uzun vade: 1.000 dolar 12 ayda 2.000 doları geçiyor; aynı oran 10 yıl sürerse **1 milyon doları aşıyor.**

#### Kurulum örneği — AUD/USD, adım adım

Bu örnek Ekim ayının omurgası; V2, V3 ve V5 aynı grafiği kullanıyor.

**1. Günlük grafik — bağlamı kur.**
Fiyatın bir seviyeden hızla uzaklaştığı yeri bul. Yukarı hareket için: **hareketten hemen önceki son düşüş mumu** = bullish order block. Videonun kullandığı seviye **0.7512.**

**2. Order block'un hangi kısmı kullanılır.**
Videonun ifadesi: *"o düşüş mumunun **açılışından tepesine** kadar olan gövdeye bakıyoruz — ve o **fair value gap** fiyatıdır."* (Bu, eylül ayındaki üç mumluk FVG tanımından farklı bir kullanım; Bölüm IV'te ayrıca ele alındı.)

**3. 1 saatliğe in — tetikleyiciyi bul.**
Grafikte eski bir dip var. Eski dibin altında **satış stopları** birikmiş olacağını biliyoruz. Fiyat o dibin altına iniyor, stopları alıyor, ve **tam olarak günlükte işaretlediğimiz 0.7512 seviyesine** çarpıyor.

Videonun terimi: *"artık turtle soup koşullarındayız"* — eski dibin altına kırılım + üst zaman dilimi seviyesi.

**4. Hedefleri işlemden ÖNCE haritala.**
Yukarıda eşit tepeler var; onların üstünde **alım stopları** var. İkinci bir alım stopu kümesi daha yukarıda. Videonun vurgusu: *"Girmeden önce nereden çıkacağını bilmen gerekiyor."*

**5. Girişi tanımla.**
Fiyat düşüş mumunun içinden yukarı geçtiğinde order block geçerli oluyor. Giriş, o mumun **açılış fiyatı + 5 pip spread payı** = **0.7542**, limit emri.

**6. Stopu tanımla.**
20 pip → **0.7522.** Videonun gerekçesi kritik: bu, düşüş mumunun **ortasının altına** düşüyor. *"Fiyat zaten aşağı inip stopları almaya istekli olduğunu gösterdi. Yukarı gidecekse, o mumun ortasının altına geri gelmemeli."*

**7. Çıkışı kademelendir.**
Video tek bir çıkış vermiyor, kademeleri gösteriyor:

| Kademe | Ne olur |
|---|---|
| 1R (20 pip) | %1.5 realize edilebilir — ya da yarısı kapatılır (%0.75) |
| 2R | Kalan yarı %1.5'te; **stop başabaşa çekilir** |
| 3R | İlk alım stopu kümesi temizlenir; bir dilim daha alınabilir |
| 4R | İkinci alım stopu kümesine yaklaşılır |
| 5R | Alım stopları süpürülür |

Videonun hesabı: yarısı 1R'de alınıp kalan 5R'ye kadar tutulursa, tek işlemde **%4'ün üstü.**

#### Videonun gerekçesi

*"Bu bir 5'e 1 kurulumu, ve **günlük grafikte** çerçevelendi. Kurumsal sponsorluk verir çünkü bankalar günlük seviyelerden işlem yapar."* Kural bu mekanizma iddiası üzerine kuruluyor.
:::

::: eleme
**ELEME**

#### Doğru olan kısım

**İsabet ↔ ödeme oranı tablosu matematiksel olarak doğru.** Her satırı kontrol ettim: %25 × 3 = 0.75 = %75 × 1. %33 × 2 ≈ 0.67. %40 × 1.5 = 0.60. Hepsi tutuyor.

Bunu zaten biliyorsun — sweep sisteminde %33 isabet + 2R hedefin tam başabaş olduğunu birlikte hesaplamıştık. Video aynı ilişkiyi kuruyor.

**Riskin ödülden önce gelmesi.** Doğru ve önemli.

**Sabit yüzde risk.** İşlem başına %1.5-2, sabit lot değil. Senin `#018`'de kilitlediğin kuralın aynısı.

**Girişte açgözlülük → girdikten sonra korku** gözlemi doğru ve pratik.

#### Aritmetik sorunu

Video şu zinciri kuruyor: haftada bir 1:1 işlem × %1.5 risk = ayda ~%6 = yılda paranın iki katı = **10 yılda 1.000 dolardan 1 milyon dolar.**

Aritmetiği kontrol ettim: aylık %6 bileşik, 120 ay = **1.088 kat.** Hesap doğru.

**Ama varsayım imkânsız.** Bu, 520 hafta boyunca **tek bir kayıp haftası olmadan** her hafta kazançlı bir işlem gerektiriyor. Video zaten kendisi kayıpların olacağını söylüyor — yani kendi hesabı, kendi uyarısıyla çelişiyor.

Gerçekçi hesap: %1.5 risk, 1:1 ödeme, %55 isabet → beklenen değer haftada ~%0.15, yılda ~%8. On yılda paranın iki katı biraz üstü. Milyon yok.

Ve daha temel bir sorun: bu büyüklükte bir getiri sürdürülebilir olsaydı sermaye o stratejiye akar ve getiri erirdi. On yıl boyunca aylık %6, dünyanın en iyi fon yöneticilerinin uzun vadede ulaştığı seviyenin çok üstünde.

#### Yazılabilir kural

Kurulum örneği tamamen kodlanabilir — **ve bu ayın en temiz mekanik tanımı.** Sıfır seçim noktası olan kısımlar: order block'un tanımı (impuls öncesi son düşüş mumu), giriş (açılış + 5 pip), stop (gövde ortasının altı), hedef (eşit tepelerin üstü).

**Ölçülebilir yeni tek şey:** stopun order block mumunun **ortasının altına** konması. Birinci ayda yoktu, ve bu bir mean threshold tanımı — test edilebilir bir kural, çünkü "yukarı gidecekse ortanın altına inmemeli" ileriye dönük bir iddia.

**Ama bir seçim noktası var:** "hangi düşüş mumu" sorusu, "fiyatın hızla uzaklaştığı yer" tanımıyla cevaplanıyor ve "hızla" için eşik verilmiyor. Aralık ayında bu boşluk kapanacak (gövde yüksekliğinin 2-3 katı hareket şartı) — Ekim'de açık.

#### Terim karışıklığı — kaydedilmesi gereken

Order block'un gövde aralığı (**açılış → tepe**) burada **"fair value gap"** olarak adlandırılıyor. Birinci ayın altıncı videosundaki FVG tanımı (üç mumluk boşluk) bambaşkaydı. Aynı terim, aynı serinin iki ayı içinde iki farklı şeye işaret ediyor. Tanım kayması listesine ekle — Bölüm IV'te ikisi de ayrı ayrı tanımlandı.

#### Ölçüm sorunu

Örnek işlem 5R'ye kadar gidiyor, ölçekli çıkışlarla %4'ün üstünde getiri gösteriliyor. Ama:

- Tek örnek, geriye dönük seçilmiş
- Kaç kurulumun çalışmadığı yok
- Aylık %50 getiri iddiası için kayıt yok
- 10 işlem / 518 pip deniyor ama kaçı kazanç kaçı kayıp ayrılmıyor

#### Not

Bu videonun para yönetimi kısmı, **birinci ayın sekiz videosunun tamamından daha faydalı** — ve bu kısımda ICT'ye özgü hiçbir şey yok.

Ve şunu fark et: senin ölçtüğün her sistemde sorun R:R matematiğinde değildi. Sweep %33 isabetle 2R'de tam başabaştı — matematik doğruydu, edge yoktu. Bu video R:R matematiğini iyi anlatıyor ama **edge'in nereden geleceği** sorusuna hiç değinmiyor.
:::

---

## Video 2 — Düşük riskli kurulum çerçeveleme

::: ders
**DERS**

#### Neden üst zaman dilimi

Video, kurulumun **neden** üst zaman diliminde seçildiğini dört gerekçeyle veriyor:

1. Büyük kurumlar ve bankalar piyasayı **günlük, haftalık, aylık** bazda analiz eder — yön eğilimi, kurumsal emir akışı ve destek/direnç fikri oradan gelir.
2. Üst zaman dilimi kurulumları **yavaş oluşur**, planlamak için zaman bırakır. *"İşi olan, gün içi işlem yapamayan biri de bu kurulumları kullanabilir."*
3. Üst zaman dilimi fiyat üzerinde daha fazla etkiye sahip.
4. Üst zaman dilimi koşulları **alt zaman diliminde inceltilebilir.**

#### Riski düşürmenin mantığı — dört adım

1. Üst zaman diliminde seviyeyi belirle
2. O seviyeyi alt zaman dilimi grafiğine **taşı** (transpose)
3. Alt zaman diliminde aynı fikrin daha küçük bir versiyonunu bul
4. Stop artık daha yakın olur → pip cinsinden maruziyet düşer

Videonun uyarısı önemli: *"Eski dibin altına inmesi tek başına dönüş beklemek için yeterli değil. Neden o dibin altında alım gelmesini bekliyoruz? Çünkü günlük grafikteki 0.7512 eski bir bullish order block — bankalar orada daha önce almıştı."*

#### Aynı kurulumun üç ölçekte çözümü

Aynı AUD/USD grafiği, aynı 0.7512 günlük seviyesi. Değişen tek şey **giriş grafiği.**

**1 saatlik (V1'deki hali).**

| Kalem | Değer |
|---|---|
| Giriş | 0.7542 |
| Stop | 0.7522 (gövde ortasının altı) |
| Risk | 20 pip |

**15 dakikalık.**
Eski dip kırılıyor, fiyat 0.7512'ye iniyor. O seviyenin hemen üstündeki **düşüş mumu** bullish order block oluyor — ve **geçerli sayılmasının sebebi, sonraki bir mumun onun içinden yukarı geçmesi.**

| Kalem | Değer |
|---|---|
| Giriş bölgesi | O mumun **orta noktasından tepesine** kadar |
| Giriş | 0.7520 |
| Stop | 0.7507 |
| Risk | Video "17 pip" diyor |

**5 dakikalık.**
0.7512'ye çarpan bir başka düşüş mumu var; o da sonraki mum tarafından yukarı kırılıyor. İki seçenek veriliyor:

- O mumun **açılış/tepesinden orta noktasına** kadar olan bölgeden al, ya da
- Daha basiti: **0.7512 + spread = 0.7515**

| Kalem | Değer |
|---|---|
| Giriş | 0.7515 |
| Stop | 0.7507 |
| Risk | **8 pip** |

#### Bunun asıl sonucu — videonun vurgusu

Hedefler değişmiyor, sadece giriş seviyeye yaklaşıyor. Sonuç:

**5 dakikalık girişten (0.7515) bakınca, 1 saatlik girişin seviyesi (0.7542) zaten 3R'lik bir noktadır.** 27 pip / 8 pip stop ≈ 3.4R. Yani 1 saatlik kurulumun *başlangıcı*, 5 dakikalık kurulumun *üçüncü hedefidir*.

Ve 3R (24 pip), 5 dakikalık grafikteki ilk alım stopu kümesine ulaşılmadan önce geliyor.

#### Videonun kapanış uyarısı

*"Ama bu, ultra kısa stoplarla dalabileceğin anlamına gelmiyor. Fiyat aksiyonunu ve o seviyelerde neden tepki vermesi gerektiğini anlamıyorsan bunu yapamazsın."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — iç içe order block

1. Günlük grafikte order block seviyesini belirle
2. 1H'ye in: eski dip kırılıyor, fiyat seviyeye geliyor → 20 pip stop
3. 15dk'ya in: aynı bölgede daha küçük bir order block → video "17 pip" diyor
4. 5dk'ya in: daha da küçük bir order block → 8 pip stop

Her adımda giriş seviyeye yaklaşıyor, stop daralıyor, hedefler sabit kalıyor. Yeni kavram yok — birinci ayın order block'u farklı ölçeklerde tekrarlanıyor.

**Ve bir mekanik ekleme var, kaydedilmeli:** order block'un geçerli sayılması için **sonraki bir mumun onun içinden geçmesi** gerekiyor. Bu, Eylül'de olmayan bir onay koşulu ve tamamen kodlanabilir.

#### Aritmetik kontrolü

15 dakikalık kurulumda giriş 0.7520, stop 0.7507 veriliyor ve stop **"17 pip"** deniyor. 0.7520 − 0.7507 = **13 pip.** Dört piplik tutarsızlık — muhtemelen girişi 0.7524'ten kastediyor. Küçük ama kaydedilmeli, çünkü R hesabının paydası bu.

5 dakikalık kurulum tutuyor: 0.7515 − 0.7507 = 8 pip ✓. 3R = 24 pip ✓. 1H girişine olan mesafe 27 pip ≈ 3.4R ✓.

#### Mantık hatası

Video diyor ki: stop 20'den 8 pipe indi, hedefler aynı, **R:R üçe katlandı.**

Bu, R:R hesabının **payını** düzeltip **paydasını** görmezden geliyor. Stop daraldığında iki şey birden olur:

- Kazanç durumunda getiri R cinsinden büyür ✓ (video bunu söylüyor)
- **Stop yeme olasılığı artar** ✗ (video buna hiç değinmiyor)

8 piplik bir stop, normal piyasa gürültüsünün içinde kalır. Aynı kurulum 20 pipte hayatta kalırken 8 pipte vurulur.

**Ve maliyet.** Bunu senin projende ölçtük: komisyon + kayma, stop mesafesine bölünüyor. 20 pip stopta maliyet R'nin küçük bir kısmıydı; 8 pipte oran **iki buçuk katına** çıkar. Video 5 pip spread'den söz ediyor — 8 piplik stopta bu, riskin %60'ı demek.

Yani "riski düşürdüm" denen hamle, R cinsinden maliyeti ciddi biçimde artırıyor.

> Senin kendi bulgun: *dar stop iki kere cezalandırır — hem daha sık stop, hem her stopta daha çok R kaybı.* Bu video tam tersini iddia ediyor.

#### Yanlışlanamazlık — yeni bir biçim

"Eski dibin kırılması tek başına dönüş beklemek için yeterli değil; üst zaman dilimindeki seviye gerekli."

Doğru bir uyarı gibi görünüyor ama pratikte şu işe yarıyor: kurulum çalışmazsa "üst zaman dilimi teyidi yoktu" denebilir, çalışırsa "işte üst zaman dilimi" denir. Teyidin ne olduğu ölçülebilir biçimde tanımlanmadıkça bu kural değil, sonradan uygulanabilir bir açıklama.

**Ama burada bir istisna var:** bu videoda teyit **tanımlı** — günlük grafikteki 0.7512 order block'u. O tanım verildiği sürece kural mekanik. Sorun, hangi günlük order block'un seçileceğinin kuralsız olması.

#### Ölçüm

Aynı tek örnek, birinci videodan devam ediyor. Üç zaman diliminde gösteriliyor ama **üç kanıt değil, aynı örneğin üç görüntüsü.**

Sorulmayan kritik soru: 8 pip stopla girilen bu kurulumun kaçı hayatta kalır?

#### Not

**İkinci ayın ilk iki videosu birbiriyle çelişiyor.** Birinci video "riski küçük tut, kaybı hesaba kat, matematiği anla" diyordu. İkinci video aynı matematiğin yarısını kullanıp diğer yarısını atlıyor.

**Ölçmeye değer soru:** aynı kurulum, farklı stop mesafeleriyle — ort. R nerede tepe yapıyor? Senin `stop_buf_atr` taraman tam bunu ölçecekti; Aşama 1'de RET geldiği için cevabı alamadın.
:::

---

## Video 3 — Ayda %10 nasıl yapılır

::: ders
**DERS**

#### Aynı kurulum, şimdi getiri tarafından

Video önce özet geçiyor: 0.7512 günlükte belirlendi, 1 saatlikte üstteki alım stopları haritalandı, 15 ve 5 dakikada risk inceltildi. Yeni bilgi: **0.7512'den yukarıdaki likidite havuzuna kadar potansiyel aralık yaklaşık 100 pip** — yani 0.7612.

#### Ölçekli çıkış prosedürü

| Adım | Kural |
|---|---|
| 1 | İşlem **%2 riskle** açılır |
| 2 | **3R'de pozisyonun yarısı** kapatılır → %1 × 3R = **%3 realize kâr** |
| 3 | Kalan %1'lik yarı, üst zaman dilimi likidite havuzlarına bırakılır |
| 4 | İkinci hedeflerden sonra **stop başabaşa** çekilir |

Videonun vurgusu: 3R'ye ulaşmak için **alım stoplarının patlaması bile gerekmiyor** — 5 dakikalık grafikteki hedef, o havuzun altında kalıyor.

#### Aynı işlemin R merdiveni

5 dakikalık çerçeveyle (8-10 pip stop) ölçüldüğünde:

| Nereye kadar | Kaç R |
|---|---|
| 5 dakikalık alım stopu havuzu | ~3R |
| 15 dakikalık alım stopu havuzu | **9R** |
| 1 saatlik havuz | **15R** |

#### Getiri hesapları

Video 1.000 dolarlık hesap ve 10 pip stop varsayıyor.

**İlk yarı, tek başına.** 3R'de %1'lik yarı kapatılıyor → 30 pip → **%3.** Haftada bir yaparsan ayda **%10'un üstü.**

**İkinci yarı, 100 piplik aralığın yarısını alırsa.** Kalan %1, 10 pip stopla 50 pip = 5R = **%5 / hafta.** Dört hafta bileşik: **%21'in üstü.**

**İkinci yarı, aralığın tamamını alırsa.** 100 pip = 10R = %10 / hafta. Dört hafta bileşik: **%46.**

**Ve 1 saatlik versiyonda kalırsan.** 20 pip stop, ilk kâr 30 pipte (1.5R), sonra 50 pip daha (2.5R) → haftada %2.5 → ayda **%10'un üstü.**

Kapanış: *"Ayda %10 bileşik, yılda %300'ün üstü. Hangi fon yöneticisi elini kaldırıp bunu senin için yapacağını söyler?"*

#### Videonun kısmi kâr savunması

Video bu konuda uzun duruyor ve üç gerekçe veriyor:

1. *"İşlemin ödeyip ödemeyeceğini bilmiyorsun. Ödeme fırsatı verdiğinde kendine öde."*
2. *"Çok büyük açık kârın olduğu halde hiçbir şey almayıp geri geldiğini ve zarara döndüğünü kaç kez gördün? Ben gördüm."*
3. Psikolojik: *"Bir parça et almış olursun — zamanının, enerjinin ve odağının karşılığı."*

Ve şu ekleniyor: *"İkinci yarı her zaman ilkinden daha çok kazandırır."*

#### Beklenti ayarı

Video birkaç kez aynı soruyu soruyor: *"Belirlediğin aralığın her pipini alacağını mı sanıyorsun? Israr edersen hüsrana uğrarsın. Yarısını alsan mutsuz olur muydun? Neden?"*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — ölçekli çıkış

- İşlem %2 riskle açılır
- **3R'de yarısı kapatılır** (→ %3 realize kâr)
- Kalan yarı üst zaman dilimi hedeflerine bırakılır
- İkinci hedeflerden sonra stop başabaşa çekilir

Kodlanabilir ve senin harness'ında ölçülebilir. Ama not: **breakeven'a çekme** kuralı burada var, ve senin `#018`'de bunu kasten yasaklamıştık — kazananı 0R'de kesip kaybedeni −1R'de bırakan yapı sıfır edge üretiyordu.

#### Matematik

Aritmetiği tek tek kontrol ettim; **hepsi tutuyor.**

| Senaryo | İddia | Doğrulama |
|---|---|---|
| 3R kısmi çıkış, haftada bir | %10+ | %3 × 4 hafta bileşik = %12.5 ✓ |
| İkinci yarı 50 pip | %21+ | 1.05⁴ = 1.2155 ✓ |
| İkinci yarı 100 pip | %46 | 1.10⁴ = 1.4641 ✓ |
| 1H versiyonu | %10+ | 1.025⁴ = 1.1038 ✓ |
| Ayda %10 bileşik | yılda %300 | 1.10¹² = 3.14× ✓ |

**Ama üç ağır varsayım gizli:**

**1. Kayıp yok.** Hesabın hiçbir yerinde kaybeden işlem yok. Video kayıpların olacağını söylüyor ama hesaba katmıyor.

**2. Her hafta bir kurulum garantili.** 100 pip hareket eden, günlük order block'a oturan, 8-10 pip stopla girilebilen bir kurulum — her hafta. Sıklık hiç ölçülmemiş.

**3. İsabet oranı hiç konuşulmuyor.** Birinci videodaki kendi tablosuna göre 3R'de başabaş isabet %25. Kurulum bunun altındaysa, ne kadar ölçekli çıkarsan çık para kaybediyorsun. O sayı verilmiyor.

**Yıllık %300'e dair:** sürdürülebilir olsaydı sermaye o stratejiye akar ve getiri erirdi. Video "hangi fon yöneticisi bunu yapar" diye soruyor; cevabı: hiçbiri, çünkü sürdürülebilir değil.

#### Yeni yanlışlanamazlık kalıbı

**"Kısmi kâr almaya karşı çıkanlar tutarlı para kazanmayan kişilerdir."**

Bu, kurala değil itiraz edenin karakterine yapılan bir savunma. Kısmi çıkışın edge'i artırıp artırmadığı **ölçülebilir bir sorudur** — ölçüm yerine "itiraz eden kaybediyordur" deniyor.

Ve kısmi çıkış matematiksel olarak nötr değildir: **sağ kuyruğu keser.** Senin ITP sisteminde tam bu sorunu bulmuştuk. Kısmi çıkış bunun yumuşak versiyonu ve etkisi ölçülmeden bilinemez.

**"İkinci yarı her zaman ilkinden daha çok kazandırır."** — Bu **yanlış.** İkinci yarı hedefe ulaşırsa daha çok kazandırır; ulaşmazsa (breakeven stopa dönerse) hiç kazandırmaz. "Her zaman" ifadesi, hedefe ulaşmayan durumları örneklemden çıkarıyor.

**"Beklediğin kadar gitmezse üzülme, açgözlülüktür."** Kaçırılan getiri için hazır gerekçe, ve performansı sorgulamayı duygusal bir kusur haline getiriyor.

#### Ölçüm

Üç videodur **aynı işlem** anlatılıyor. Farklı zaman dilimlerinde, farklı çıkış senaryolarıyla, ama tek örnek. Ve şimdi o tek örnekten yıllık %300 projeksiyonu çıkarılıyor — bir örnekten dağılım çıkarmak, yapılabilecek en zayıf istatistiksel çıkarım.

#### Not

**İkinci ayın ilk üç videosu, birinci aydan farklı bir tür risk taşıyor.** Birinci ay ölçülemez kurulumlar öğretiyordu; burada ölçülmemiş bir kurulumdan, kayıpsız varsayımla, yıllık %300 projeksiyonu çıkarılıyor.

**Ölçmeye değer soru:** kısmi çıkış (3R'de yarı) ile tam pozisyon tutmayı karşılaştır. Beklentim: kısmi çıkış ort. R'ı düşürür ama getiri eğrisini yumuşatır. İkisi farklı şeyler, ayrılmalı.

**Ve şu karışıklığı not et:** "küçük risk para kazandırır, büyük risk değil" cümlesi iki farklı şeyi karıştırıyor — pozisyon boyutu (doğru, küçük tut) ile stop mesafesi (yanlış, dar stop maliyeti artırır).
:::

---

## Video 4 — Kayıplar neden kârlılığı engellemez

::: ders
**DERS**

#### Korku temelli karar vermenin dört sonucu

Video bir tanı listesiyle açılıyor:

1. Kayıp alamayan traderın yönettiği sermaye **uzun vadede kâr edemez**
2. Kayıp **kaçınılmaz**
3. Korku temelli karar, odağı **olumsuza** kilitler
4. Korku temelli karar, **işlem felci** üretir — verimli uygulama yapılamaz

Ve karşıt çerçeve: **profesyonel sermaye yöneticisi kayıpları "işin maliyeti" sayar.**

#### Çerçevelenen işlem

Tablo hesapları, aynı bullish order block şablonuna dayandırılıyor: fiyat önceki kurumsal alım bölgesine (rallinin öncesindeki düşüş mumu) dönüyor, mumun **tepesi ile açılışı arası** destek bölgesi, ortası **mean threshold** — kapanış bazında ihlal edilmemeli. **20 pip stop**, eski tepe 20 pip yukarıda → 3:1 ve 5:1 kolayca çerçeveleniyor.

#### Ana tablo — 5.000 dolarlık hesap, ayda 10 işlem

Videonun tüm iddiası bu tabloda. Her satır aynı örneklem büyüklüğünü (10 işlem) kullanıyor:

| İsabet | R:R | Risk/işlem | Ort. kazanç | Ort. kayıp | Kazanç alt toplam | Kayıp alt toplam | Net | Getiri |
|---|---|---|---|---|---|---|---|---|
| %30 | 3:1 | %1 | 150 $ | 50 $ | 450 $ | 350 $ | +100 $ | **+%2** |
| %30 | 5:1 | %1 | 250 $ | 50 $ | 750 $ | 350 $ | +400 $ | **+%8** |
| %30 | 5:1 | %2 | 500 $ | 100 $ | 1.500 $ | 700 $ | +800 $ | **+%16** |
| %40 | 5:1 | %2 | 500 $ | 100 $ | 2.000 $ | 600 $ | +1.400 $ | **+%28** |
| %50 | 5:1 | %2 | 500 $ | 100 $ | 2.500 $ | 500 $ | +2.000 $ | **+%40** |
| %50 | 5:1 | %1 | 250 $ | 50 $ | 1.250 $ | 250 $ | +1.000 $ | **+%20** |

Videonun her satır için okuması:

- **1. satır:** *"Kimse buna heyecanlanmaz."* Ama ayda %2, yönetilen fonlar için astronomik bir getiri.
- **3. satır:** video burada net kârı **750 dolar / %15** diye okuyor; tablodaki sayılarla 800 dolar / %16 çıkıyor.
- **Son satır:** *"Bu, herkesin hayalini kurduğu getiri oranı. Ayda %20, sadece %1 riskle, ve işlemlerinin yarısında yanılarak."*

#### Videonun ana argümanı

*"Şu an %90, %98, %100 isabet istiyordun. Çok düşük isabetle bile çılgın getiriler yapabilirsin. Yüksek isabete ihtiyacın yok — **ihtiyacın olan şey, ödül/risk oranını lehine çerçevelemek.**"*

Ve dikkat: video kasten %60, %70, %80 satırlarını göstermiyor. *"Hiçbiri gerekli değil."*

#### Pozisyon boyutu formülü

Video tabloları uygulanabilir kılan tek formülü veriyor:

```
Pip başına değer = (Hesap × Risk yüzdesi) ÷ Stop mesafesi (pip)
```

Örnek: 5.000 dolar × %1 = 50 dolar. 20 pip stop → 50 ÷ 20 = **pip başına 2.50 dolar.**

#### Gerçekçilik notu

Video sonunda bir kalibrasyon yapıyor: büyük fonlar ayda **%1-2** hedefler; yılda %20-28 eder; *"ve orada milyonlarca dolar var, birinin bunu onlar için yapmasını isteyen."*
:::

::: eleme
**ELEME**

#### Doğru olan kısım

Hesapları tek tek kontrol ettim; **biri hariç hepsi tutuyor.**

İlk satır önemli: **%30 isabet, 3:1 ödemede ancak kıl payı pozitif** — çünkü başabaş noktası %25. Video bunu açıkça kabul ediyor ve "kimse heyecanlanmaz" diyor. Dürüst.

**Kayıplar ilk kez hesaba dahil ediliyor.** Üç videodur eksik olan buydu.

**"Kayıp işin maliyetidir"** çerçevesi doğru ve psikolojik olarak sağlam.

**Pozisyon boyutu formülü doğru ve eksiksiz** — bu, ayın en doğrudan uygulanabilir tek satırı.

**Ve gerçekçi bir cümle:** fon yöneticileri ayda %1-2 hedefler, yılda %20-28'e denk gelir, bu zaten iyi bir getiridir. Üçüncü videodaki "yılda %300" iddiasıyla arasındaki mesafe kayda değer.

#### Aritmetik hatası

Üçüncü satır: 1.500 − 700 = **800 dolar**, yani **%16.** Video **750 dolar / %15** diyor. Elli dolarlık hata, yönü kendi lehine değil — yani kasıt değil, dikkatsizlik. Ama beş ayda kaydedilen aritmetik hataların ilki.

#### Ama içeride büyük bir varsayım var

Tüm tablo şuna dayanıyor: **her işlem 5:1 çerçevelenebiliyor.**

**Sorun 1 — hedef büyüdükçe isabet düşer.** 5R hedef 3R'den uzaktır; fiyatın oraya ulaşma olasılığı daha küçüktür. Video isabeti %30'da sabit tutup ödemeyi 3'ten 5'e çıkarıyor. İki değişken bağımsız değil.

> Bunu senin verinde ölçmüştük: sweep sisteminde `rTarget` büyüdükçe isabet düşüyordu. İkisini ayrı ayrı seçemezsin.

**Sorun 2 — kaç kurulumun 5:1 çerçevelenebildiği söylenmiyor.** "Ayda 10 işlem, hepsi 5:1" varsayımı ölçülmemiş. Senin range sisteminde 4H'de 49 işlem çıkmıştı, 100 eşiğinin altında.

#### Kritik eksik: edge nereden geliyor?

Tablonun tamamı doğru ama şunu varsayıyor: **isabet %30-50 arasında.**

Rastgele giriş de bir isabet oranı üretir. 5:1 hedefli rastgele bir giriş, kabaca %17 isabet eder (maliyet öncesi başabaş). Asıl soru: bu kurulum rastgeleden **daha iyi** mi?

Video bu soruyu hiç sormuyor. Tablolar "eğer isabetin %30 ise" ile başlıyor — ama o "eğer" tam olarak ölçülmesi gereken şey.

> Senin taban çizgin bu yüzden vardı: rastgele giriş dağılımının %95 persentili. Sistemin 72.4'te kalmıştı.

#### Yeni yanlışlanamazlık kalıbı

**"Zamanla, fiyat hareketini anladıkça isabetin kendiliğinden artacak."** Ölçülemez ve ertelenebilir bir vaat. İsabet artmazsa "henüz yeterince anlamamışsın" denebilir.

#### Not

**Ayın en dürüst videosu** ve buradaki hesaplar senin sweep analizinde birlikte yaptığımızın aynısı.

**Ama matematik hiçbir zaman sorun değildi.** Senin dört sisteminde de R:R aritmetiği doğruydu. Sorun her seferinde şuydu: isabet, başabaş noktasının etrafında salınıyordu.

**Ölçmeye değer soru:** `rTarget` 2/3/5 ile aynı kurulumu koştur, ort. R'ın nerede tepe yaptığına bak. Bu, videonun "5:1 daha iyidir" varsayımını doğrudan test eder.
:::

---

## Video 5 — Kayıpları etkili biçimde telafi etmek

::: ders
**DERS**

#### Senaryo

Aynı AUD/USD grafiği. Bullish order block işaretlendi, mean threshold belirlendi, long girildi. **Ama stop mean threshold'un hemen altına konmuştu ve fiyat oraya değip stopu aldı.** Videonun kurduğu durum bu: %2 tam kayıp.

Videonun tanısı: *"Kurulum tamamen bozulmadı. Sadece stop yerinde isabetsizdik."*

#### Yeniden giriş prosedürü — beş adım

1. **Yeni bir düşüş mumu oluşur.** Stop yedikten sonra fiyat aşağıda yeni bir düşüş mumu bırakır.
2. **Sonraki bir mum o düşüş mumunun üstüne çıkar.** Videonun cümlesi: *"Bunu yaptığı anda, o düşüş mumuna herhangi bir yeni dönüş, alım fırsatı olarak **yetkilendirilir**."* — Bu, order block'un geçerlilik koşulu.
3. **Fiyat o muma geri döner.** Giriş, mumun **tepesi / açılışı.**
4. **Stop, order block'un ALTINA konur** — mean threshold'un altına değil. Video burada bilinçli olarak **daha geniş** stop öneriyor: *"Bu sefer aleyhimize biraz daha hareket payı bırakacağız. Ultra dar stop konusunda gergin olmayacağız."*
5. **Pozisyon boyutu, ilk kaybın YARISI.**

#### Risk yarılama kuralı

| İlk kayıp | İkinci giriş | Üçüncü giriş |
|---|---|---|
| %2 | %1 | %0.5 |
| %1 | %0.5 | %0.25 |

Videonun gerekçesi — bu ayın en sağlam tek cümlesi:

> *"Bu ilk kaybın, on kayıplık bir serinin başlangıcı olmadığını nereden biliyorsun? Sana da olabilir, bana da, herkese olabilir. %2'de devam eder ya da riski artırırsan, iyi paranın üstüne kötü para atıyorsun."*

Ve: *"Sermaye korunması bu oyunun bir numaralı kuralıdır."*

#### Telafi matematiği

İlk kayıp %2, ikinci giriş %1 riskle:

| Nokta | Durum |
|---|---|
| **R1** | İlk kaybın **yarısı** geri alındı (%1) |
| **R2** | Kayıp **tamamen telafi edildi** (%2) |
| **R3** | Artık yeni net kâr bölgesi |

Videonun vurgusu: **R2'ye ulaşmak için üstteki alım stoplarının alınması bile gerekmiyor.**

Üçüncü denemede bile (%0.5 risk) aynı hareket R4'e ulaşırsa ilk %2 telafi ediliyor — video bunu açıkça hesaplıyor.

#### Telafi noktasında ne yapılır — gelişim aşamasına göre

Video burada iki farklı talimat veriyor:

**Yeni trader (birinci aşama):** R2'ye ulaşınca **işlemi kapat, kenara çekil.**

> *"Bazen sadece başabaşa dönüp rahatlamak iyidir. Özellikle haftanın sonundaysan — perşembe ya da cumaysa ve kaybını geri alma fırsatı verilmişse, al ve haftayı düz kapat. **Hafta sonuna net kayıpla girme.**"*

**Gelişmiş trader (ikinci aşama):** kapatma, **stopu telafi noktasına çek** — artık açık kârın telafi ettiği kaybın altına düşemezsin. Sonra piyasaya koşacak yer bırak.

**Her iki aşamada da:** R3 videonun tercih ettiği kâr alma noktası.

#### Videonun psikolojik uyarısı

*"Yeni bir trader olarak bir sonraki işlemde kazanma olasılığın çok düşük — çünkü kaybı hemen geri alma telaşındasın. Onu bir sonraki işlemde geri almak zorunda değilsin."*

Ve kendi geçmişine dair bir not: *"Bu prensibi yıllar önce internette anlattığımda insanlar 'kayıptan sonra neden riskimi azaltayım, bu aptalca' dediler."*
:::

::: eleme
**ELEME**

#### İyi kural: kayıptan sonra riski yarıya indir

%2 riskle stop yedin → sonraki denemede %1 → yine stop → %0.5.

**Anti-martingale ve gerçekten sağlam.** Gerekçesi de doğru: *bu kaybın on kayıplık bir serinin başı olmadığını bilmiyorsun.* Kayıp serisi geldiğinde riski artıran hesabı bitirir; azaltan hayatta kalır.

Psikolojik yanı da doğru: kaybı hemen geri alma dürtüsü, en pahalı dürtülerden biri.

**Ve ayın en dürüst cümlelerinden:** sermaye korumasını birinci kural ilan etmesi doğru.

#### Kötü kural: aynı fikre tekrar girmek

Prosedür: stop yedin → aynı bölgede yeni bir order block oluştu → tekrar gir.

Sorun, "kurulum hâlâ geçerli" tanımında. Videonun cevabı: fiyat yeni bir mumdan yukarı hareket etti, o mum yeni order block oldu.

**Bu, fiyatın dönmesini kurulumun geçerliliğinin kanıtı sayıyor.** Fiyat dönmezse yeni order block oluşmaz, dolayısıyla ikinci giriş de olmaz — kural sadece işe yaradığı durumlarda tetikleniyor. Geriye dönük bakınca strateji **her zaman** çalışmış görünür.

Somut risk: bu yapı, düşen bir piyasada arka arkaya girişe izin veriyor. Risk her seferinde yarılanıyor (iyi), ama toplam maruziyet birikiyor: %2 + %1 + %0.5 = **%3.5**, tek bir yanlış yön varsayımından.

#### Bir çelişki: stop mesafesi

Video, ilk stopun "çok dar" olduğunu söylüyor ve ikinci girişte **daha geniş** stop öneriyor — order block'un altına, ortasına değil.

**Bu, ikinci videonun tam tersi.** Orada 20 pipten 8 pipe inmek "riski azaltmak" olarak sunuluyordu. İkincisi doğru — ama serinin kendi içinde çelişmesi, yine ölçülmemişliğin işareti.

Ve dikkat: bu çelişki **kaydedilmeye değer bir ipucu** taşıyor. V2 dar stopu satarken, V5 dar stopun kaybettirdiğini itiraf ediyor — yani seri, dar stop maliyetini fark ediyor ama kavramsallaştırmıyor.

#### Yanlışlanamazlık

**"Stop yemen, kurulumun yanlış olduğu anlamına gelmez; stopun yanlış yerdeydi."** Bu cümle, kurulumun hiçbir zaman yanlış olmamasını mümkün kılıyor. Çalışırsa doğrudur, çalışmazsa stop yanlıştı.

**"Zararı kapattığında hafta sonuna kadar bekleme, düz kapat."** Makul disiplin ama keyfî — haftanın günü ile edge arasında bağ kurulmuyor.

#### Senin projenle bağlantı

**Breakeven'a çekme kuralı burada da var** ve senin `#018`'de kasten yasakladığın şeyle aynı. Ölçülmeden bilinemez; video bunu güvenlik önlemi olarak sunuyor ama beklenen değere etkisini konuşmuyor.

#### Not

**Alınacak:** kayıptan sonra riski yarıya indirme. Metottan bağımsız geçerli.

**Alınmayacak:** aynı fikre tekrar girme prosedürü. Tetikleyicisi "fiyat döndü" olduğu için geriye dönük bakışta hep haklı görünür.
:::

---

## Video 6 — Yüksek ödüllü kurulumların sırları

::: ders
**DERS**

Bu videoda grafik yok. Serinin **karar ağacı** veriliyor.

#### Videonun ön uyarısı

*"Burada işlem sinyalleri yok, formasyon yok, stop yerleşimi yok. Bu, ayrıntılara girmeden önceki son hazırlık."* Ve: *"Bu videoyu izlerken televizyon izleme, çocuklar yanında olmasın — grafik yok, oturup dinlemen gerekiyor."*

#### Karar hiyerarşisi

Video, işlem kararının sıralı katmanlarını veriyor:

1. **Sabır**
2. **İşlem ortamının tanımı** — koşullar şu an işleme uygun mu
3. **İşlem parametresi** — seni alıcı ya da satıcı yapan şey ne
4. **Uygulama kriteri** — girişi ne tetikler, neyi geçersiz kılar
5. **Neden çalışmalı** — işlemi geçerli kılan şeyin anlaşılması

Ve kuralın kuralı: **karar süreci ikili (binary) olmalı.** *"X yap ya da Y yap. Siyah ya da beyaz. Akış şeması formatında olmalı, bir adımdan diğerine geçmeli."*

Gerekçe: *"Bu ikili düşünce yapın yoksa, duygusal, psikolojik ve dürtüsel işlemin sızacağı büyük bir boşluk oluşur."*

#### Üç perspektif, on bileşen

Videonun merkezi yapısı. Yüksek ödüllü kurulum = **üç perspektifin de aynı yöne işaret etmesi.**

**A) BÜYÜK RESİM — dört alan, en az İKİSİ uyuşmalı**

| Alan | Ne bakılır |
|---|---|
| Makro analiz | Enflasyonist mi deflasyonist mi piyasa? Para birimine ve hisselere doğrudan etkisi var |
| Faiz analizi | Faizler yüksek mi düşük mü, trend var mı, **beklenmedik değişim** oldu mu, ve **iki piyasa arasındaki faiz farkı** (carry) |
| Piyasalar arası analiz | **CRB emtia endeksi ↔ dolar endeksi.** Genelde ters ilişki: dolar yukarı → emtia aşağı |
| Mevsimsellik | O varlık sınıfı için boğa ya da ayı mevsimsel eğilim |

Videonun örnek zinciri: *"CRB emtianın genelde yükseldiği bir döneme giriyorsa, bu dolar üzerinde aşağı yönlü baskı yaratır. Dolar aşağı baskı altındaysa, faizleri yükselen para birimlerinde kolay alım sinyalleri görebiliriz — getiri kovalama."*

**B) ORTA VADE — üç alan, en az İKİSİ uyuşmalı**

| Alan | Ne bakılır |
|---|---|
| Yukarıdan aşağı analiz | Aylık, haftalık, günlük grafiklerde: kilit seviyeler, ara ve uzun vadeli tepe/dipler, order block'lar |
| COT verisi | CFTC haftalık raporu. **Ticari** traderlar (commercials) izlenir; küçük spekülatörler değil. **Son 12 ay ve son 4 yıldaki uçlar** aranır |
| Piyasa duyarlılığı | Market Vane, barchart.com forum konsensüsü. Aşırı boğa ya da aşırı ayı okuması |

Videonun iki önemli notu:

- **Yukarıdan aşağı analiz için üç zaman diliminin ÜÇÜ birden gerekmiyor — biri yeterli.** Aylık *veya* haftalık *veya* günlükten bir fikir, bu bileşeni tamamlar.
- *"Aslında aylık, haftalık, günlük grafik olmadan da işlem yapabilirsin — COT ve duyarlılıkla orta vade perspektifini çerçeveleyebilirsin."*
- **En az önemlisi duyarlılık.**

**C) KISA VADE — üç alan, ÜÇÜ birden gerekli (her birinden en az bir tane)**

| Alan | Ne bakılır |
|---|---|
| Korelasyon analizi | **Dolar endeksi SMT** ve **korelasyonlu parite SMT** |
| Zaman-fiyat teorisi | Çeyreklik etki, aylık etki, haftalık aralık, günlük aralık, **günün saati** |
| IPDA | Kurumsal emir akışı, likidite, piyasa verimliliği paradigması |

**Dolar endeksi SMT'nin tanımı:** dolar endeksi daha yüksek tepe yaparken GBP/USD daha düşük dip yapmayı **başaramıyorsa**, bu bir "çatlayan korelasyon"dur.

**Korelasyonlu parite SMT:** EUR/USD ve GBP/USD normalde aynı yönde hareket eder. Etmiyorlarsa piyasa **asimetrik** demektir ve seçici olunması gerekir.

**Zaman-fiyat teorisi bileşenleri:**
- **Çeyreklik etki:** her ~3-4 ayda üst zaman diliminde bir kayma. Piyasa yükseliyorsa sonraki üç ayda konsolidasyon ya da dönüş beklenir. Video takvim aylarına birebir bağlamıyor, **3-4 aylık esneklik** bırakıyor.
- **Haftalık aralık:** videonun kendi tanımı — *"Ben büyük ölçüde **haftalık aralık traderıyım.** Haftanın açılacak aralığının aslan payını yakalamaya çalışırım."* "One shot one kill" bu demek.
- **Günlük aralık:** "power three" — açılış, tepe, dip, kapanışın günlük muma nasıl dönüştüğü.

#### Toplam: yedi bileşen

```
Büyük resim:  4 alandan 2'si  →  2
Orta vade:    3 alandan 2'si  →  2
Kısa vade:    3 alanın 3'ü    →  3
                        TOPLAM  7
```

Videonun cümlesi: *"Yüksek ödüllü kurulum için yedi şeyin uyuşması gerekir. Bu, giriş değil, uygulama değil — sadece işlemi yüksek ödüllü kılan çerçeve. Girişi ayrıca beklemen gerekiyor."*

#### Piyasa verimliliği paradigması

Videonun mekanizma iddiası, ve arz-talep öğretisinden ayrıldığı nokta:

> *"Arz-talep, sana 'akıllı paranın emirleri burada' diye öğretir. Hayır — onlar her zaman kendi emirlerine dönmüyor. **Mevcut emirlerin nerede olduğunu arıyorlar**, çünkü kendi işlemlerine karşı taraf üretmeleri gerekiyor. Eski tepeleri alım stopları için, eski dipleri satış stopları için tarıyorlar. Bu, kendi defterlerine zorunlu bir likidite enjeksiyonu."*

#### Zamanlama ve iş bölümü

- **Büyük resim ve orta vade:** hafta başında (ya da hafta sonu) belirlenir, hafta ortasında nadiren değişir
- **Kısa vade:** gün gün değişir — günlük rutin bu

#### Videonun kendi performans iddiası

*"Eylül'de %90'ın üzerinde isabetliydim, neredeyse %100 tutturduk."* Ve: *"IFX kitabımda Ekim için şu ana kadar %59 gösterdim."*

#### Kayıpların nereden geldiğine dair iddia

Video ölçülebilir bir tahmin veriyor:

> *"Kayıplarının çoğu orta ve uzun vadeli perspektiften gelmeyecek. **Kayıplarının büyük çoğunluğu kısa vadeli perspektiften gelecek** — ya bir şeyi zorladın ya piyasa geçiş halinde."*
:::

::: eleme
**ELEME**

#### Serinin en sağlam metodolojik fikri

**"Süreç odaklı düşün, tepkisel değil."** Ve daha önemlisi: karar sürecinin **akış şeması** olması, **ikili (binary)** olması, her adımda net bir "şunu yap ya da yapma" bulunması.

Bu tam olarak senin `PROTOCOL.md`'de yaptığın şey — "kural yazılıysa ihlal edilebilir, kaldırılmışsa edilemez" ilkesiyle aynı aileden.

**Fiyat sinyali aramadan önce bağlam kur.** Sıralama doğru. Ve şu cümle dürüst: *"girişler ve stop yerleşimi şu an senin en az önemsemen gereken şey."*

**Öz-farkındalık:** kayıpların çoğunun kısa vadeli perspektiften geleceği söyleniyor. **Bu ölçülebilir ve makul bir iddia** — ve seride nadir görülen, kendi yönteminin zayıf noktasını önceden işaretleyen bir cümle.

#### Ama yapısal sorun büyük

Yedi bileşenin uyuşması bir **filtre yığını** — ve senin projende bu tam olarak öldürücü olan şeydi.

> `#009`'da ızgarayı aşamalara bölmüştük çünkü 7 boyutlu 1458 hücre "plato araması için seyrek değil, yanıltıcı"ydı. Ve Aşama 1'de RET aldın: 27 hücrenin hiçbiri 100 işlem eşiğini geçemedi.

Burada yedi bileşenin **aynı anda** uyuşmasını bekleyen bir sistem var. İşlem sayısını dramatik biçimde azaltır. Kaç kurulum kalır? Söylenmiyor.

Ve daha kötüsü: **bileşenlerin çoğu ölçülemez.** "Makro analiz bullish mi" sorusunun mekanik cevabı yok. "Piyasa duyarlılığı aşırı mı" — video kendisi "cumartesi günleri birkaç kaynağa bakıp ortalama alıyorum" diyor. Kodlanabilir bir tanım değil.

Sonuç: **yedi bileşenli sistem, hiçbiri ölçülmemiş yedi girdiden oluşuyor.**

#### Ölçülebilir olan bileşenler

**COT — seride ilk kez fiyat grafiği dışına** çıkan bir veri kaynağı. CFTC haftalık raporu gerçek, kamuya açık, geçmişi uzun, tanımı net.

Literatür karışık — ticari kullanıcı pozisyonlarının öngörü gücü olduğuna dair bazı bulgular var ama tutarlı ve güçlü bir edge gösteren kanıt sınırlı. Yine de **ölçülebilir bir hipotez**, ve bu seride nadir.

**Dolar endeksi ↔ emtia ters ilişkisi** de gerçek ve ölçülmüş bir olgudur (mükemmel değil ama var).

**SMT tanımı da mekanik:** "A daha yüksek tepe yaptı, B daha düşük dip yapamadı" — sonucu bilmeden yazılabilir. Ama "daha yüksek tepe" için pencere uzunluğu verilmiyor; o boşluk kapatılırsa tamamen kodlanabilir.

#### Yanlışlanamazlık ve bir tutarsızlık

**"Eylül'de %90+ isabet, neredeyse %100 tutturduk."** Sıfır kayıt.

**"Ekim'de IFX kitabımda %59 gösterdim."** Yine kayıt yok, ve birinci videodaki %50 iddiasının üstüne çıkıyor.

**Asıl tutarsızlık:** dördüncü video *"isabet %30-50 yeterli, yüksek isabete ihtiyacın yok"* diyordu. Bu video *"%90+ isabetliyim"* diyor. İkisi aynı ayda, aynı seride.

**"Bunu şimdi anlatamam, 12 ay sürer."** Test edilebilir sonucun sürekli ertelenmesi — birinci ayda vardı, burada kurumsallaşmış.

**"Kimse gerçek bir işlem planı satmaz, ben satıyorum."** Ürünü rakipsiz ilan eden bir çerçeve; içerik iddiası değil.

#### Not

**Metodolojik fikir doğru, uygulaması ölçülemez.** Akış şemasının düğümleri ölçülebilir tanımlar içermezse, şema sadece kararı erteler.

**Yedi bileşenli filtre yığını, senin RET sonucunun teorik açıklaması gibi.** Sen beş koşullu bir range tanımı + üç kapı ile 49 işlem üretebildin. Yedi bileşenle kaç işlem kalır?

**Ölçmeye değer iki şey: COT verisi ve SMT tanımı.** İkisi de fiyat yorumundan bağımsız hesaplanabilir.
:::

---

## Video 7 — Sahte bayrak tuzağı

::: ders
**DERS**

#### Klasik bayrak formasyonu — önce doğru tanım

**Bull flag (boğa bayrağı):**
1. Keskin bir yükseliş bacağı — buna **bayrak direği** denir
2. Küçük bir konsolidasyon — yatay ya da hafif aşağı eğimli; buna **bayrak** denir
3. İlk bacağa **eşit** ikinci bir yükseliş bacağı

Hedef hesabı: bayrak direğinin boyunu ölç, konsolidasyondan çıkışa **ekle**. Bu bir **ölçülü hareket** (measured move).

**Bear flag (ayı bayrağı):** aynısının tersi. Keskin düşüş → yatay ya da hafif yukarı eğimli konsolidasyon → eşit ikinci düşüş bacağı. Direğin boyu, kırılım tepesinden **çıkarılır.**

Video kişisel bir kaynak veriyor: teknik analize girişi **Kent Roberts**'ın "World's Most Powerful Money Manual" kitabıyla olmuş; ilk tahıl, canlı sığır ve domuz işlemleri bu formasyonla yapılmış — *"1 saatlik stochastics uyuşmazlığıyla birlikte kullandığımda iyi çalışıyordu. Sorun, üst zaman dilimini ya da prim/indirim durumunu hiç hesaba katmamamdı."*

#### Sahte bayrak — kural

| Formasyon | Ne zaman ters çalışır |
|---|---|
| **Bull flag** | Olgunlaşmış boğa trendinde, ya da **üst zaman dilimi PRİM (dağıtım) bölgesinde** |
| **Bear flag** | Olgunlaşmış ayı trendinde, ya da **üst zaman dilimi İNDİRİM (toplama) bölgesinde** |

Videonun formülasyonu: *"Fiyat, formasyona göre hareket etmez"* — ve buna kendi araçlarını da dahil ediyor: *"order block olsun, mitigation block olsun, breaker olsun, ya da omuz-baş-omuz gibi klasik formasyon olsun."*

#### Örnek 1 — sahte bull flag, adım adım çözüm (AUD)

**Görünen:** 15 dakikalık grafikte kusursuz bir bull flag. Kırılım gerçekleşiyor. Ama kırılımın yaptığı tek şey, **önceki bir konsolidasyonun tepesinin biraz üstüne çıkmak.**

Videonun çözümü, üst zaman diliminden aşağı iniyor:

**1. Günlük grafik.** Fib aracı, salınım tepesinden dibe çekiliyor. Sonuç: fiyat **dağıtım / prim** bölgesinde. Ayrıca fiyat, günlükte büyük bir yükseliş mumunun içinde — **bearish order block.**

**2. 4 saatlik.** Yukarı hareket bir **likidite boşluğu** bırakmış, sonra aşağı hareket bir tane daha bırakmış. Aradaki bölge bir bearish order block olarak okunuyor; **mean threshold** o bölgenin ortası.

**3. 1 saatlik → 15 dakikalık.** Bir mumun açılışı ile başka bir mumun kapanışı arasında bir boşluk var — inceleme oraya odaklanıyor.

**4. 5 dakikalık — kesin seviye.** Düşüş hareketinden önce iki yükseliş mumu var. O iki mumun **gövde dibi ile gövde tepesi** arası ölçülüyor; ortası **denge (equilibrium)** noktası. Bu seviye aynı zamanda son yükseliş mumunun dibine denk geliyor.

Sayılar: bir mumun dibi **0.7714**, diğerinin tepesi **0.7714** — yani boşluk tam olarak kapanmış.

**5. Giriş kuralı.**

| Kalem | Değer |
|---|---|
| Tetikleyici | Sahte bayrak yukarı çıkıp **aşağı dönmeye başlaması** (turtle soup) |
| Giriş | Bearish order block'a **ilk dönüş.** Açılış 0.7697, tepe 0.7697 |
| Stop | Sahte bayrağın **tepesinin (fitilin) üstü** |
| İlk hedef | Sahte bayrağın yarattığı **likidite boşluğunun kapanması** |

#### Örnek 2 — sahte bear flag, adım adım çözüm (AUD)

**Görünen:** düşüş trendinde keskin bir düşüş, sonra hafif yukarı eğimli konsolidasyon. Klasik projeksiyon **0.7355**'i işaret ediyor. Ama piyasa sadece **0.7442**'ye kadar iniyor.

**1. Günlük grafik — gövde/fitil ayrımı.** Aşağıda uzun fitiller var. Video fitilleri yok sayıp **gövdelerin** diplerine bakıyor. O bölgeye **bir buçuk aydır ilk kez** dönülüyor. Videonun okuması: bu iniş, gövdelerin altındaki stopları bir kez daha almaktan ibaret.

**2. Giriş prosedürü — beş adım.** (Bu, ayın en mekanik giriş kuralı.)

1. Fiyat yükselmeye başlayınca **hemen alma**
2. Bir **salınım tepesinin (swing high) oluşmasını** bekle
3. O salınım tepesinin **yukarı kırılmasını** bekle
4. Kırılımdan önceki **son düşüş mumuna** dön
5. Orada al; stop **bayrağın dibinin altına**

Giriş: **0.7470.**

**3. Hedefler, sırayla.**

| Sıra | Hedef |
|---|---|
| 1 | Düşüş mumlarının aralığının doldurulması / son yükseliş mumunun gövdesi |
| 2 | Eşit tepelerin üstündeki alım stopları — **0.7568** ve **0.7573** (ikisi de süpürüldü) |
| 3 | Yukarıdaki bir başka bearish order block |
| 4 | Bir sonraki eşit tepeler kümesi |

**4. Üçüncü tekrar.** Video aynı grafikte biraz ileride bir örnek daha buluyor: fiyat düşüp hafif yukarı konsolidasyon yapıyor (bear flag görünümü), **daha düşük bir dip** bile yapıyor, sonra bir salınım tepesi kırılıyor → son düşüş mumundan alım.

#### Videonun asıl çıkarımı — karşı taraf düşüncesi

> *"Fiyat aksiyonuna baktığımda, **diğer traderların piyasanın karşı tarafını neden göreceğini** arıyorum. Sadece beni işleme sokacak şeyi aramıyorum; piyasanın bana, perakende zihinli traderların klasik formasyonlar ve göstergelerle olayı nasıl göreceğini söylemesini de arıyorum."*

Yani bu, üst zaman dilimi kurumsal emir akışının **üstüne eklenen bir duyarlılık oyunu.**

#### Turtle soup bağlantısı

Video ikisini birleştiriyor: yukarı ralli → konsolidasyon → **kısa vadeli marjinal yeni tepe** → çöküş. Bu, turtle soup'un ta kendisi. Aynısı aşağı yönde: düşüş → konsolidasyon → **eski diplerin biraz altına inen kısa vadeli dip** → dönüş.

#### Ödev

*"Eski verilerine dön. Bull flag ve bear flag gibi görünüp ters çalışan bölgeleri bul."*
:::

::: eleme
**ELEME**

#### Yazılabilir iddia — koşullu formasyon reddi

Kural: bull flag / bear flag klasik devam formasyonlarıdır, **ama üst zaman diliminde prim bölgesindeyken bull flag, indirim bölgesindeyken bear flag ters çalışır.**

Fikrin kendisi test edilebilir: **flag formasyonları, üst zaman dilimi konumuna göre ayrıştırıldığında farklı davranıyor mu?**

Ve **flag tespiti mekaniktir** (impuls bacağı + konsolidasyon + eğim), **prim/indirim konumu da %50 seviyesiyle mekaniktir.** İkisini birleştirmek için tanımsız hiçbir bileşen gerekmiyor. Bu, ayın en temiz test edilebilir hipotezi.

#### İkinci yazılabilir iddia — salınım tepesi kırılımı ile giriş

Örnek 2'nin beş adımlı giriş prosedürü **tamamen mekanik ve sıfır seçim noktası içeriyor:**

1. Salınım tepesi oluştu mu
2. Yukarı kırıldı mı
3. Kırılımdan önceki son düşüş mumu hangisi
4. Fiyat oraya döndü mü
5. Stop bayrağın dibinin altında

Bu, videonun kendi çözümünden çıkarılabilecek en değerli parça, ve **serinin ilk tam mekanik giriş tetikleyicisi.** Not: yasaklayıcı değil üretici bir kural, ama tanımsız bileşen taşımıyor.

#### İyi olan taraf

**Karşı taraf düşüncesi.** "Diğer traderlar ne görüyor?" sorusu, seride şimdiye kadarki en olgun fikir. Bir formasyonun yaygın bilinmesi, etrafında emir birikmesi demektir — ölçülebilir bir mekanizma.

**Formasyonun tek başına yetmediğini kabul etmesi.** *"Fiyat formasyona göre hareket etmez"* cümlesi doğru, ve kendi araçlarını (order block, breaker, mitigation block) da o listeye dahil ediyor. Seride nadir bir dürüstlük.

**Kaynak vermesi.** Kent Roberts atfı dürüst bir hareket ve kaydedilmeli.

**Yasaklayıcı çerçeve.** "Prim bölgesinde bull flag alma" kuralı, üretici kurallardan daha test edilebilir.

#### Ama örnek 1'in uygulaması çöküyor

Örnek 1 çözülürken **beş zaman dilimi** arasında geçiş yapılıyor: günlük → 4H → 1H → 15dk → 5dk. Her seviyede yeni bir tanım devreye giriyor: bearish order block, likidite boşluğu, mean threshold, iki mumun gövde aralığından hesaplanan equilibrium.

Sonuçta girişin dayandığı seviye, **5dk grafikte iki mumun gövde ortası.** Buraya ulaşan seçimlerin hiçbirinin kuralı yok:

- Hangi zaman diliminde durulacak?
- Hangi mum order block sayılacak?
- Hangi boşluk dikkate alınacak?
- Fitiller mi gövdeler mi?

Bu, birinci ayın altıncı videosundaki **dört-aralık probleminin** daha karmaşık hali. Sonucu bildikten sonra bu zincir kurulabilir; öncesinde kurulamaz.

**Karşılaştır:** örnek 2 sıfır seçim noktasıyla çözülüyor, örnek 1 beşle. Aynı videoda, aynı kavram setiyle. Fark, örnek 2'nin bir **tetikleyici olay** (salınım tepesi kırılımı) kullanması, örnek 1'in bir **seviye arayışı** yapması.

#### Fitil/gövde tutarsızlığı

İki örnekte de "fitilleri yok say, gövdelere bak" deniyor. Ama:

- Birinci örnekte stop, **fitilin** üstüne konuyor
- İkinci örnekte hacmin "fitillerin içinde" olduğu söylenip sonra gövdeler kullanılıyor

Ve şu iddia yanlış: **hacmin nerede yoğunlaştığı mum grafiğinden bilinemez.** Mum, hacim dağılımını göstermez. Ölçülmemiş bir varsayım olgu gibi sunuluyor.

#### Yanlışlanamazlık

**"Turtle soup" burada da devrede.** Flag kırılırsa "devam etti", kırılıp geri dönerse "turtle soup'tu". İki sonuç da açıklanabiliyor.

**"Ne kadar duraklayacağını bilemeyiz, umursamıyoruz da."** Zamanlama belirsizliğinin muafiyet olarak kullanılması.

**Örnekler geriye dönük.** Üç örnek, üçü de sonuç bilinerek çözülmüş, sıfır istatistik. Kaç bayrağın gerçekten devam ettiği söylenmiyor — yani "sahte bayrak" oranı bilinmiyor.

#### Ölçülebilirlik

**Kısmen.** Kuralın çekirdeği (flag + prim/indirim ayrımı) tamamen mekanik ve tek başına test edilebilir; örnek 2'nin giriş prosedürü de öyle. Ama videonun örnek 1'de gösterdiği beş zaman dilimli zincir ölçülemez, ve video o zinciri asıl yöntem olarak sunuyor.

#### Not

**Ölçmeye değer iki hipotez:**

1. Klasik flag formasyonları, üst zaman dilimi prim/indirim konumuna göre ayrıştırıldığında performans farkı gösteriyor mu?
2. "Salınım tepesi kırılımı → son ters mum → giriş" tetikleyicisi, salt seviye dokunuşundan daha iyi sonuç veriyor mu?

**Ama videodaki örnek 1'in uygulaması ölçülemez.** Ölçmek isteseydin, videonun zincirini değil kendi tanımladığın basit versiyonu ölçerdin.

**"Karşı taraf düşüncesi" fikrini ayrı kaydet.** Yaygın bilinen bir formasyonun etrafında emir birikmesi gerçek bir mekanizma. Bu, "grafiği okumak" değil — piyasada kimin ne yaptığına dair bir hipotez, ve o kategori daha ölçülebilir.
:::

---

## Video 8 — Sahte kırılım tuzağı

::: ders
**DERS**

#### İki simetrik kural

| Durum | Ne zaman oluşur | Ne yapılır |
|---|---|---|
| **Konsolidasyonun ÜSTÜNE sahte kırılım** | Piyasa temelde **ayı** yönlüyken | Yukarı kırılımı sahte say, satış ara |
| **Konsolidasyonun ALTINA sahte kırılım** | Piyasa temelde **boğa** yönlüyken | Aşağı kırılımı sahte say, alım ara |

Video her ikisinin de **dengede (equilibrium)** ortaya çıktığını söylüyor. Ve zaman kazanmak için sadece boğa tarafını anlatıyor: *"Her şeyi ters çevirirsen ayı tarafını elde edersin."*

#### Kırılım traderının konumu

Video önce karşı tarafı tarif ediyor. Piyasa bir işlem aralığına giriyor. Kırılım traderları aralığı **emirlerle parantez içine alıyor:**

- Eski tepenin üstünde **alım stopları** (uzun kırılımcılar + kısa pozisyonların stopları)
- Eski dibin altında **satış stopları** (kısa kırılımcılar + uzun pozisyonların stopları)

Videonun tanısı: *"Ne olduğuna dair hiçbir fikirleri yok. Uzun vadeli trend takipçileri gibi piyasayı parantezliyorlar, çok kayıp almaya aldırmıyorlar, büyük bir hareket yakalamayı umuyorlar."*

#### Boğa modelinin döngüsü — adım adım

1. Piyasa bir işlem aralığına girer
2. **Aralığın altına iner, satış stoplarını alır**
3. O satış stopları, akıllı paranın **uzun pozisyonlarına karşı taraf** olarak kullanılır
4. Fiyat, eski tepenin üstündeki **alım stoplarına doğru genişler**
5. O alım stopları, akıllı paranın **uzun pozisyonlarından çıkışına** karşı taraf olur — orada kısmen satarlar
6. Piyasa yeni bir konsolidasyona girer
7. **Adım 2'ye dön**

Videonun mekanizma cümlesi: *"Akıllı para uzunken kârını nasıl alır? Alıcıların olduğu bir yerde çıkması gerekir. Alıcılar her zaman tepelerin üstündedir — ya kırılım alımı ya da kısa pozisyon stopları olarak. Likidite oradadır."*

#### Örneğin çözümü — USD/JPY tipi, 108-109 bandı

Video adım adım ilerliyor:

| Aşama | Ne oldu |
|---|---|
| 1 | **108.55**'in altındaki satış stopları alındı |
| 2 | Fiyat **109.00**'un üstüne ralli yaptı, biraz geri çekildi |
| 3 | **109.15** vuruldu; üstte eşit tepeler var |
| 4 | Yeni konsolidasyon; **108.95**'in altındaki satış stopları alındı |
| 5 | Hedef **109.40** — mumların **gövdelerinin** biraz üstünde süpürüldü |
| 6 | Daha büyük aralık; **108.85 – 108.90**'da alım |
| 7 | **109.45 – 109.50**'deki alım stopları vuruldu |

Videonun burada koyduğu ek kural: **hedef, fitillerin değil gövdelerin üstüdür.** Gerekçesi: *"Hacmin çoğu gövdelerde görülür, dolayısıyla likidite gövdelerin üstünde durur."*

Ve emir yığılması gözlemi: *"Her seferinde biraz daha yukarıdan alıyorlar. Emirlerini kademe kademe içeri sokuyorlar ve hâlâ kâr alma fırsatı bırakıyorlar."*

#### İkinci katman — ölçülü hareket

Video aynı grafikte ikinci bir hesap yapıyor:

| Ölçüm | Başlangıç | Projeksiyon | Sonuç |
|---|---|---|---|
| İlk sahte kırılımdan sonraki bacak | 108.75 | **109.25** | Vuruldu |
| Büyük konsolidasyondan sonraki stop koşusu | 108.85 | **109.80** | Vuruldu |
| Devamı | — | **109.90** | Günlükteki bearish order block'a bağlı |

Yani: **ilk impuls bacağının boyu, ikinci bacağın hedefini veriyor.**

#### Rejimi belirleme kuralı — videonun en somut katkısı

Bu, seride ilk kez yön tanımının mekanikleşmesi:

> *"Gerçekten boğa piyasasında mıyız — bunu görmenin en kolay yolu: **piyasa konsolidasyona girdiğinde hangi tarafa uzanıyor, ve ondan sonra nereye gidiyor.** Her seferinde satış stoplarını alıp yukarı koşuyorsa, boğa modeli çalışıyor demektir."*

Ve buna karşı klasik yaklaşımı reddediyor: *"Ders kitabındaki gibi kolay değil — bir trend çizgisi çizip yukarı eğimli olduğunda her dokunuşta alacaksın. Emirlerin nerede duracağına bakman gerekiyor."*

#### Piyasa yapıcıya bakış

Videonun tonu birinci aya göre belirgin biçimde değişiyor:

> *"Piyasa yapıcıları şeytanlaştırabiliriz, 'bunu bana yaptılar' diyebiliriz. Ama onlar **işlerini yapıyorlar — likidite sağlıyorlar.** Biz onları yenmeye çalışmıyoruz, zekâlarını alt etmeye çalışmıyoruz. Tek yaptığımız, onların güdüsüyle aynı hizaya geçmek."*

#### Uygulama talimatı

*"Piyasa konsolidasyona girdiğinde, eski bir konsolidasyon alanının altına her inişi **sahte kırılım** olarak bekle. Sonra uzun pozisyon toplamayı bekle. Toplayabildiklerinde fiyatı yukarı yeniden fiyatlar, eski tepelerin üstündeki alım stoplarına koşarlar."*
:::

::: eleme
**ELEME**

#### Yazılabilir iddia — sahte kırılım rejimi

Yükseliş rejiminde, fiyat bir konsolidasyonun **altına** kırılırsa bu sahte kırılımdır; fiyat döner ve konsolidasyonun **üstündeki** seviyeleri hedefler. Düşüş rejiminde tam tersi.

**Ve rejimin nasıl belirleneceği de söyleniyor** — bu önemli, çünkü seride ilk kez yön tanımı somut: **hangi tarafın süpürüldüğüne bak.** Konsolidasyonların altı defalarca süpürülüp fiyat yukarı gidiyorsa rejim yükseliş yönlü.

Bu döngüsel değil, çünkü **geçmiş olaylardan bugünün beklentisini** kuruyor: son üç konsolidasyonda alt taraf süpürüldüyse, dördüncüsünde de alt tarafın süpürülmesini bekle.

#### İkinci yazılabilir iddia — ölçülü hareket

Kırılım sonrası hareketin, önceki bacakla eşit uzunlukta olacağı. İki örnekte gösteriliyor. Klasik "measured move", kodlanabilir, ve **hedef seçimini tamamen mekanikleştiriyor** — bu ayın hedef tanımı sorununa verilen tek somut cevap.

#### Üçüncü yazılabilir ayrıntı — gövdelerin üstü

"Hedef, eski tepenin fitili değil **gövdesidir**" kuralı mekanik ve test edilebilir bir ayrım. **Arkasındaki gerekçe (hacim gövdelerde) yanlış, ama kural yine de ölçülebilir.** İkisini ayır: "gövde tepesi mi fitil tepesi mi daha iyi hedef" boş bir soru değil, ve cevabı ölçülebilir.

#### Ve gerçek bir mekanizma

**"Piyasa likiditeyi arar."** Konsolidasyonun etrafında stop emirleri birikir; fiyat oraya gider çünkü orada karşı taraf vardır. Bu komplo anlatısı değil — **piyasa mikroyapısında desteklenen bir gözlem.** Emirlerin belirli seviyelerde kümelenmesi ve fiyatın o kümelere çekilmesi ölçülmüş bir olgudur.

Videonun bunu *"market maker işini yapıyor, düşmanın değil"* diye çerçevelemesi, birinci aydaki komplo tonundan belirgin bir iyileşme.

#### Senin projenle çarpıcı çakışma

| | Senin sistemin | Bu video |
|---|---|---|
| Kenar kırılımı | `BREAKOUT_PENDING` → teyit ararız | Baştan sahte kabul et |
| Sweep sonrası | Fade tezini güçlendirir | Yön kaynağı |
| Rejim | Ayrı bir HTF filtresi (EMA200) | Süpürme tarafından türetilir |

Buradan gerçekten ölçmeye değer bir hipotez çıkıyor: **rejim, HTF EMA'sından değil, hangi kenarın süpürüldüğünden türetilseydi ne olurdu?**

Senin `htf_bias` tanımın EMA200'e dayanıyordu. Bu video mekanik bir alternatif öneriyor ve o tanım sistemin kendi gözlemlerinden türüyor.

#### Yanlışlanamazlık

**"Rejim yükseliş yönlü" tanımı geriye dönük kuruluyor.** Süpürme yönü değişirse "rejim değişti" denir. **Kaç süpürmeden sonra rejim değişmiş sayılır? Tanımsız** — ve bu boşluk kapatılmadan kural ölçülemez. Kapatılabilir de: "son N konsolidasyonun k tanesinde alt taraf süpürüldü" gibi bir eşik, kuralı tam mekanik yapar.

**Hacim iddiası yine yanlış:** "hacmin çoğu gövdelerde." İkinci kez tekrarlanıyor, ikisinde de olgu gibi sunuluyor.

**Tek örnek, geriye dönük.** Sekiz konsolidasyon, hepsi aynı yönde çalışmış bir dönemden. Rejimin ters döndüğü bir dönem gösterilmiyor — yani "kaç sahte kırılım gerçek kırılım çıktı" sorusu cevapsız.

#### Ölçülebilirlik

**Ölçülebilir.** Çekirdek — konsolidasyon tespiti, kenar kırılımı, rejim yönü, ölçülü hareket hedefi — tamamen mekanik. Tek tanımsız bileşen rejim değişimi eşiği ve o **kenarda**: eşik varsayılan bir değerde sabitlenip çekirdek yine test edilebilir.

#### Not

**Ayın en ölçülebilir videosu.** İddia net, rejim tanımı mekanik, mekanizma makul, hedef tanımı verilmiş.

**Senin için asıl değeri:** kapattığın projeye alternatif bir rejim tanımı öneriyor. Sistemin RET aldığında sorun "işlem sayısı yetersiz"ti; farklı bir rejim tanımı işlem sayısını değiştirmez ama **hangi tarafın oynanacağını** değiştirir — ve senin sistemin kırılım tarafında fade'den fazla işlem üretiyordu (26/21).

Bu video diyor ki: o kırılımların çoğu sahteydi, ters yönde oynanmalıydı. Ölçülebilir bir iddia — ama tek başına yeni bir proje demek, mevcut olana yama değil.
:::

---

# BÖLÜM II — İkinci ayın bütünü

## Ölçülebilirlik tablosu

| Video | Kavram | Değerlendirme |
|---|---|---|
| V1 | R:R ↔ isabet ilişkisi + order block girişi | **Ölçülebilir** |
| V2 | İç içe zaman dilimi ile stop daraltma | **Ölçülebilir** (ama iddiası yanlış) |
| V3 | 3R'de kısmi çıkış | **Ölçülebilir** |
| V4 | Beklenen değer tablosu + pozisyon boyutu | **Ölçülebilir** |
| V5 | Kayıp sonrası risk yarılama | **Ölçülebilir** |
| V5 | Aynı fikre tekrar giriş | **Ölçülemez** (tetikleyici sonucu varsayıyor) |
| V6 | Yedi bileşenli karar ağacı | **Ölçülemez** (yedi girdiden beşi tanımsız) |
| V6 | COT + SMT bileşenleri tek başına | **Ölçülebilir** |
| V7 | Prim/indirim koşullu flag reddi | **Kısmen** (çekirdek mekanik, videonun uygulaması değil) |
| V8 | Sahte kırılım rejimi + ölçülü hareket | **Ölçülebilir** |

**Sayım: Ölçülebilir 7 · Kısmen 1 · Ölçülemez 2**

Not: bu sayım kavram başına, video başına değil. Birinci aya göre belirgin bir sıçrama var — ama sebebi metodun gelişmesi değil, ayın yarısının **metottan bağımsız risk yönetimi** olması.

## Ölçülebilir çekirdek

| Kavram | Kaynak | Klasik karşılığı | Yeni bilgi? |
|---|---|---|---|
| R:R ↔ isabet ilişkisi | V1, V4 | Standart beklenen değer hesabı | Hayır |
| Sabit yüzde risk | V1 | Standart pozisyon boyutlama | Hayır |
| Pip başına değer formülü | V4 | Standart | Hayır |
| Order block ortasının altına stop | V1 | Yapısal stop yerleşimi | Kısmen — eşik tanımı yeni |
| Order block geçerlilik koşulu (mum içinden geçmeli) | V2, V5 | Bölgenin "onaylanması" | Evet, Eylül'de yoktu |
| İç içe zaman dilimi ile stop daraltma | V2 | Ölçek inceltme | Hayır (ve hatalı) |
| 3R'de kısmi çıkış | V3 | Ölçekli çıkış | Hayır |
| Kayıptan sonra riski yarıya indir | V5 | Anti-martingale | Hayır |
| COT verisi | V6 | CFTC taahhüt raporu | Hayır |
| SMT / çatlayan korelasyon | V6 | Piyasalar arası uyuşmazlık | Kısmen |
| Koşullu flag reddi | V7 | Formasyon + bağlam filtresi | Evet |
| Salınım tepesi kırılımı ile giriş | V7 | Yapı kırılımı + geri test | Hayır |
| Sahte kırılım rejimi | V8 | Sahte kırılım / Wyckoff spring | Kısmen — rejim tanımı yeni |
| Ölçülü hareket | V8 | Measured move | Hayır |

## Ayın iç çelişkileri

| Konu | Bir video | Başka bir video |
|---|---|---|
| Stop mesafesi | V2: dar stop riski azaltır | V5: dar stop stop yedirir, geniş kullan |
| İsabet beklentisi | V4: %30-50 yeterli | V6: %90+ isabetliyim |
| Getiri hedefi | V3: yılda %300 | V4: ayda %1-2 zaten iyi |
| FVG tanımı | V1: order block gövde aralığı | (1. ay V6): üç mumluk boşluk |
| Fitil/gövde | V7 örnek 1: stop fitilin üstüne | V7-V8: "fitilleri yok say" |

Beş çelişki, hepsi aynı ay içinde. Bu, ölçülmemiş bir sistemin doğal işareti — ölçülmüş olsaydı hangisinin doğru olduğu bilinirdi.

## Tekrarlanan ölçüm sorunları

**Tek örnek, beş video.** İlk beş video aynı AUD/USD kurulumunu anlatıyor. Farklı zaman dilimleri, farklı çıkış senaryoları, farklı kayıp senaryoları — ama tek örnek. Ve o tek örnekten yıllık getiri projeksiyonu çıkarılıyor.

**Kayıpsız projeksiyon.** V1 ve V3'te kayıp hiç hesaba katılmıyor. V4'te düzeltiliyor ama V6'da yine "%90+ isabet" iddiasına dönülüyor.

**Kaç kurulum oluştuğu hiç ölçülmüyor.** "Haftada bir tane" varsayımı, tüm getiri hesaplarını taşıyor.

**Kaçırılanlar ve çalışmayanlar sayılmıyor.** V7'de üç sahte bayrak gösteriliyor — kaç bayrağın gerçekten devam ettiği söylenmiyor. V8'de sekiz sahte kırılım gösteriliyor — kaç kırılımın gerçek olduğu söylenmiyor. Bu iki oran olmadan kurallar sayısal olarak boş.

**Ve hiç sorulmayan soru:** isabet oranı nereden geliyor? Tüm tablolar "eğer isabetin %30 ise" ile başlıyor. O "eğer", ölçülmesi gereken tek şey.

## İkna kalıpları — bu aya özgü olanlar

| Kalıp | Nasıl işliyor |
|---|---|
| Bileşik faiz vaadi | Matematiksel olarak doğru ama kayıpsız varsayımla kurulmuş |
| İtirazcının karakterine saldırı | "Kısmi çıkışa karşı çıkanlar para kazanamayanlardır" |
| Duygusal yeniden çerçeveleme | Beklentiyi sorgulamak "açgözlülük" ilan ediliyor |
| Kurulumun dokunulmazlığı | "Kurulum yanlış değildi, stopun yanlış yerdeydi" |
| Ertelenen yeterlilik | "Zamanla isabetin kendiliğinden artacak" |
| Ürünün rakipsizliği | "Kimse gerçek bir işlem planı satmaz, ben satıyorum" |

## Aritmetik kontrolü

Yönergenin gereği olarak videodaki her sayısal iddiayı doğruladım.

| Nerede | İddia | Sonuç |
|---|---|---|
| V1 | İsabet ↔ başabaş R:R tablosu | ✓ Altı satırın altısı doğru |
| V1 | %6/ay bileşik = yılda 2 kat | ✓ 1.06¹² = 2.01 |
| V1 | %6/ay, 10 yıl = 1.000 $ → 1 M $ | ✓ 1.06¹²⁰ = 1.088 kat |
| V2 | 15dk stop "17 pip" | ✗ 0.7520 − 0.7507 = **13 pip** |
| V2 | 5dk stop 8 pip, 3R = 24 pip | ✓ |
| V3 | 50 pip ikinci yarı → ayda %21+ | ✓ 1.05⁴ = 1.2155 |
| V3 | 100 pip ikinci yarı → ayda %46 | ✓ 1.10⁴ = 1.4641 |
| V3 | %10/ay bileşik = yılda 3 kat | ✓ 1.10¹² = 3.14 |
| V4 | %30 / 3:1 / %1 → +%2 | ✓ 450 − 350 = 100 |
| V4 | %30 / 5:1 / %2 → +%15 | ✗ 1.500 − 700 = **800 $ = %16** |
| V4 | %40 / 5:1 / %2 → +%28 | ✓ |
| V4 | %50 / 5:1 / %2 → +%40 | ✓ |
| V4 | %50 / 5:1 / %1 → +%20 | ✓ |
| V4 | %2/ay bileşik = yılda %20-28 | ✓ 1.02¹² = 1.268 |

**İki hata, ikisi de küçük ve ikisi de kendi lehine değil.** Yani dikkatsizlik, kasıt değil. Ama R hesabının paydası (V2) ve getiri tablosu (V4) — ikisi de sunumun merkezinde.

---

# BÖLÜM III — Değerlendirme

## Alınacak beş şey

**1. R:R ↔ isabet matematiği (V1, V4).** Doğru ve zaten biliyordun; teyit değeri var. Ve pozisyon boyutu formülü (V4) doğrudan uygulanabilir.

**2. Kayıptan sonra riski yarıya indirme (V5).** Anti-martingale, metottan bağımsız geçerli.

**3. Süreç odaklı, ikili karar akışı (V6).** Metodolojik olarak doğru — ve senin protokolünün ilkesiyle aynı.

**4. Sahte kırılım rejim tanımı (V8).** Rejimi fiyat göstergesinden değil, **süpürme tarafından** türetme fikri. Ayın en özgün ölçülebilir katkısı.

**5. Ölçülü hareket hedefi (V8).** Hedef seçimini mekanikleştiriyor. Klasik ama bu seride ilk kez somut bir hedef kuralı veriliyor.

İlk üçünün ortak özelliği: **ICT'ye özgü olmamaları.** Son ikisi metoda özgü ve ölçülebilir — ay bu ikisiyle birinci aydan ayrılıyor.

## Alınmayacak üç şey

**1. Zaman dilimi daraltarak stop küçültme (V2).** R:R'ın payını düzeltip paydasını görmezden geliyor, ve maliyeti R cinsinden artırıyor. Ve videonun kendisi V5'te bunun tersini söylüyor.

**2. Getiri projeksiyonları (V1, V3).** Kayıpsız varsayımla kurulmuş, sürdürülebilirlik testinden geçmiyor.

**3. Aynı fikre tekrar girme prosedürü (V5).** Tetikleyicisi "fiyat döndü" olduğu için geriye dönük bakışta hep haklı görünür. Risk yarılama kısmını al, tekrar giriş tetikleyicisini alma.

## Ölçmeye değer altı soru, öncelik sırasıyla

Hepsi senin mevcut harness'ında test edilebilir.

**1. Alternatif rejim tanımı (V8).** Rejim, EMA200 yerine "hangi kenar süpürülüyor" ile tanımlansaydı ne olurdu? Ayın en değerli katkısı, ve senin kapattığın projeye doğrudan bağlanıyor.

**2. Stop mesafesi ↔ ort. R (V2 vs V5).** Aynı kurulum, farklı stop mesafeleri — ort. R nerede tepe yapıyor? Videonun kendi iç çelişkisini çözer.

**3. Hedef büyüklüğü ↔ isabet (V4).** `rTarget` 2/3/5 — isabet nasıl düşüyor, ort. R nerede optimum? "5:1 daha iyidir" varsayımını test eder.

**4. Prim/indirim koşullu flag testi (V7).** Flag tespiti mekanik, prim/indirim %50 ile mekanik. Tanımsız bileşen yok — bedava bir test.

**5. Kısmi çıkış ↔ tam pozisyon (V3).** 3R'de yarı kapatmak ort. R'ı düşürüyor mu, eğriyi yumuşatıyor mu? İkisi ayrı sorular.

**6. Gövde tepesi mi fitil tepesi mi (V8).** Hedef seviyesi olarak hangisi daha iyi? Gerekçesi yanlış olsa da soru geçerli, ve tek satırlık bir değişiklikle ölçülür.

## İki ayın karşılaştırması

**Birinci ay:** kurulum kavramları. Sekiz tanım, yedisinin klasik karşılığı var. Sistem olarak ölçülemez çünkü aralık, zaman dilimi ve yön seçimleri yoruma bırakılmış.

**İkinci ay:** para yönetimi ve risk. Söylenenlerin çoğu doğru — ve hiçbiri metoda özgü değil. Metoda özgü kısımların bir bölümü hatalı (V2'nin stop daraltması, V3'ün projeksiyonları), bir bölümü ise **ilk kez gerçekten ölçülebilir** (V8'in rejim tanımı, V7'nin koşullu flag reddi).

**Ortak eksik, iki ayda da aynı:** *"bunu şu kadar örnekte ölçtük, şu oranda çalıştı"* cümlesi on altı videoda bir kez bile geçmiyor.

## Kapanış gözlemi

İkinci ay, birinci aydan **daha faydalı ama daha az özgün.** Risk yönetimi tavsiyeleri sağlam çünkü standart; metoda özgü katkıların çoğu zayıf çünkü ölçülmemiş.

Ve bir örüntü netleşiyor: **doğru olan kısımlar herkesin bildiği kısımlar, özgün olan kısımlar ölçülmemiş kısımlar.** Bu, seriyi değerlendirirken en çok işine yarayacak ayrım — ve muhtemelen kalan on aya da uygulanacak.

Ama bir istisna kaydedilmeli: **sekizinci video bu örüntüyü kırıyor.** Rejimi süpürme tarafından türetme fikri hem özgün hem ölçülebilir. Bu ayın tek gerçek yeni katkısı o.

---

# BÖLÜM IV — Kesinlikle bilmen gerekenler

Bu bölüm ayın tüm kavramlarını tek yerde topluyor. Her kavram için: **tanım · nasıl bulunur · ne işe yarar · dikkat.** Grafiğin başına oturduğunda buraya bakman yeterli olmalı.

---

## 1. Order block

**Tanım.** Fiyatın hızla uzaklaştığı hareketten **hemen önceki son ters yönlü mum.**

- **Bullish order block** (alım): yukarı impulstan hemen önceki **son düşüş mumu**
- **Bearish order block** (satış): aşağı impulstan hemen önceki **son yükseliş mumu**

**Nasıl bulunur.**
1. Grafikte fiyatın hızla ve kesintisiz uzaklaştığı bir bacak bul
2. O bacağın başladığı yere geri git
3. Bacağın yönüne **ters** olan son mumu işaretle
4. **Geçerlilik koşulu:** sonraki bir mum o mumun gövdesinin içinden geçip **öbür tarafına çıkmalı.** Çıkmadıysa order block henüz "yetkilendirilmemiştir"

**Hangi kısmı kullanılır.** Bullish için mumun **açılışından tepesine** kadar olan aralık. Giriş bu aralığa yapılır.

**Ne işe yarar.** Fiyat o aralığa geri döndüğünde alım (bullish) ya da satım (bearish) fırsatı arıyorsun. Girişini seviye bazlı hale getiriyor, yani stopun nerede olacağını da tanımlıyor.

**Dikkat.** "Fiyatın hızla uzaklaştığı" için Ekim'de eşik yok — bu bir seçim noktası. Aralık 2016'da eşik geliyor: hareket, order block mumunun **gövde yüksekliğinin 2-3 katı** olmalı. O ana kadar kendi eşiğini koy.

---

## 2. Mean threshold

**Tanım.** Order block mumunun **gövdesinin orta noktası.** (Fitiller dahil değil.)

**Nasıl bulunur.** (Açılış + Kapanış) ÷ 2.

**Ne işe yarar.** İki işi var:

1. **Geçerlilik sınırı.** Bullish order block'ta fiyat mean threshold'un altına **kapanış bazında** inmemeli. İnerse kurulum bozulmuş sayılır.
2. **Daha agresif giriş noktası.** Girişi mumun tepesi yerine ortasından yapmak, stopu daraltır.

**Dikkat.** V5'in dersi tam bu: **stopu mean threshold'un hemen altına koyma.** Video bunun stop yedirdiğini kendi örneğinde gösteriyor ve ikinci girişte stopu **order block'un tamamının altına** taşıyor. Mean threshold bir *geçerlilik ölçütü*, bir *stop seviyesi* değil.

---

## 3. Fair value gap (FVG) — DİKKAT: iki farklı tanım

Bu terim seride **iki ayrı şeye** işaret ediyor. İkisini de bilmen gerekiyor, çünkü hangisinin kastedildiği bağlamdan çıkıyor.

### 3a. Üç mumluk FVG (Eylül 2016 tanımı — yaygın olan)

**Tanım.** Üç ardışık mumda, **birinci mumun fitili ile üçüncü mumun fitilinin birbirine değmediği** boşluk. Ortadaki mum büyük ve tek yönlü.

**Nasıl bulunur.**
1. Büyük, tek yönlü bir mum bul (ortadaki mum)
2. Ondan **önceki** mumun tepesine bak (yükseliş için)
3. Ondan **sonraki** mumun dibine bak
4. Sonraki mumun dibi, önceki mumun tepesinin **üstündeyse** aradaki alan bir FVG'dir

**Ne işe yarar.** Fiyatın "adil olmayan" bir fiyatlama yaptığı bölge sayılıyor; fiyatın oraya dönüp boşluğu doldurması bekleniyor.

### 3b. Order block gövde aralığı (Ekim 2016 V1 tanımı)

**Tanım.** Bullish order block mumunun **açılışından tepesine** kadar olan gövde aralığı. Video buna doğrudan "fair value gap price" diyor.

**Nasıl bulunur.** Order block'u bul, gövdesinin açılış-tepe aralığını işaretle.

**Ne işe yarar.** Giriş bölgesi olarak kullanılıyor — "en olası destek".

**Dikkat.** Bu ikisi **aynı şey değil** ve seri bunu hiçbir yerde açıkça belirtmiyor. Bir videoda "FVG" duyduğunda hangisini kastettiğini bağlamdan çıkarman gerekiyor: tek muma bağlıysa 3b, üç muma bağlıysa 3a.

---

## 4. Liquidity void (likidite boşluğu)

**Tanım.** Fiyatın **her seviyede işlem görmeden** hızla geçtiği aralık. Genelde bir dizi ardışık, aynı yönlü, fitilsiz muma karşılık gelir.

**Nasıl bulunur.** Grafikte fiyatın dikey gibi hareket ettiği, geri çekilmesiz bacakları ara. Bacağın başı ile sonu arasındaki alan boşluktur.

**Ne işe yarar.** İki şekilde:
1. **Hedef olarak** — fiyatın geri dönüp boşluğu "doldurması" bekleniyor
2. **Bearish order block'un yerini bulmak için** — V7'de iki likidite boşluğunun arasındaki bölge order block olarak okunuyor

**FVG'den farkı.** FVG üç mumluk kesin bir geometri; likidite boşluğu daha gevşek, "hızlı hareketin bıraktığı alan" anlamında.

---

## 5. Liquidity pool (likidite havuzu) · buy stops · sell stops

**Tanım.** Stop emirlerinin **kümelendiği** fiyat bölgeleri.

- **Buy stops (alım stopları):** eski **tepelerin üstünde.** Kısa pozisyonların stopları + kırılım alıcılarının emirleri
- **Sell stops (satış stopları):** eski **diplerin altında.** Uzun pozisyonların stopları + kırılım satıcılarının emirleri

**Nasıl bulunur.**
1. **Eşit tepeler / eşit dipler** ara — en yoğun kümelenme orada
2. Belirgin bir salınım tepesi ya da dibi de yeterli
3. **Fitil değil gövde kullan** — V8'in kuralı: hedef, mumların gövdelerinin üstü

**Ne işe yarar.** **Hedeflerini işlemden önce buradan belirliyorsun.** V1'in vurgusu: "girmeden önce nereden çıkacağını bil."

**Dikkat.** "Gövdede daha çok hacim var" gerekçesi **yanlış** — mum grafiği hacim dağılımı hakkında bilgi vermez. Ama gövde/fitil ayrımı yine de test edilebilir bir kural; gerekçeyi atıp kuralı tut.

---

## 6. Turtle soup

**Tanım.** Eski bir dibin **altına** (ya da tepenin üstüne) kısa süreli kırılım, ardından ters yöne dönüş. Yani sahte kırılım.

**Nasıl bulunur.**
1. Belirgin bir eski dip (ya da tepe) belirle
2. Fiyat onun altına insin — satış stopları alınsın
3. Fiyat aynı mum ya da hemen sonrasında geri dönsün
4. **Üst zaman dilimi teyidi:** o dip, üst zaman diliminde anlamlı bir seviyeye (order block, destek) denk geliyor mu

**Ne işe yarar.** Dönüş girişi için tetikleyici. V1'de "turtle soup koşulları" tam olarak bu: eski dip altına kırılım + günlük order block.

**Dikkat.** Tek başına kullanma. Videonun kendi uyarısı: *"Eski dibin altına inmesi tek başına dönüş beklemek için yeterli değil."* Ve senin kendi ölçümün bunu doğruladı — sweep tek başına %33 isabet, 2R'de tam başabaş.

---

## 7. Premium · Discount · Equilibrium

**Tanım.** Bir fiyat aralığının üst yarısı **prim**, alt yarısı **indirim**, ortası **denge**.

**Nasıl bulunur.**
1. Belirgin bir salınım tepesi ve dibi seç
2. Fib aracını tepeden dibe çek (ya da basitçe ortalamayı al)
3. **%50 çizgisi = equilibrium**
4. Üstü prim, altı indirim

**Ne işe yarar.**
- **Alım** için indirim bölgesi aranır
- **Satım** için prim bölgesi aranır
- **V7'nin kuralı:** prim bölgesindeki bull flag ters çalışır; indirim bölgesindeki bear flag ters çalışır

**Dikkat.** Hangi tepe ve hangi dip seçileceği tanımsız — bu, serinin en yaygın seçim noktası. Kendin bir kural koy (ör. "son 20 mumun tepesi ve dibi") ve ona sadık kal.

---

## 8. R ve R:R (risk çarpanı)

**Tanım.** **1R = girişten stopa olan mesafe.** Kâr ve zarar hep bu birimle ölçülür.

**Nasıl hesaplanır.**
- Giriş 0.7515, stop 0.7507 → **1R = 8 pip**
- Fiyat 0.7539'a gelirse → 24 pip → **3R**
- 3:1 R:R = hedef, stop mesafesinin üç katı uzaklıkta

**Başabaş tablosu — ezberlenmesi gereken:**

| İsabet | Başabaş R:R |
|---|---|
| %75 | 0.33 : 1 |
| %50 | 1 : 1 |
| %40 | 1.5 : 1 |
| %33 | 2 : 1 |
| %25 | 3 : 1 |

**Ne işe yarar.** Farklı stop mesafelerindeki işlemleri **karşılaştırılabilir** kılıyor. Ve sistemin çalışıp çalışmadığını tek sayıyla söylüyor: **ortalama R > 0 mu?**

**Dikkat.** R'yi küçültmek (dar stop) getiriyi büyütmez — sadece maliyeti (spread + komisyon + kayma) R cinsinden büyütür. Ayın en önemli tuzağı bu.

---

## 9. Pozisyon boyutlama

**Formül:**

```
Pip başına değer = (Hesap × Risk yüzdesi) ÷ Stop mesafesi (pip)
```

**Örnek.** 5.000 $ hesap, %1 risk, 20 pip stop:
5.000 × 0.01 = 50 $ → 50 ÷ 20 = **pip başına 2.50 $**

**Kurallar.**
- İşlem başına **%1-2**, asla daha fazla değil
- **Sabit lot değil, sabit yüzde.** Hesap büyüdükçe lot büyür, küçüldükçe küçülür
- Kayıptan sonra **yarıya indir** (bkz. madde 11)

**Ne işe yarar.** Bir kayıp serisinin hesabı bitirmesini engelliyor. Ve tüm R hesabının uygulanabilir olmasını sağlıyor — R'yi bilip lot hesaplayamıyorsan R işe yaramaz.

---

## 10. Ölçekli çıkış (scaling out)

**Prosedür (V3):**
1. İşlemi **%2 riskle** aç
2. **3R'de yarısını kapat** → %1 × 3R = %3 realize
3. Kalan %1'i üst zaman dilimi hedefine bırak
4. İkinci hedeften sonra **stopu başabaşa** çek

**Ne işe yarar.** Getiri eğrisini yumuşatıyor; işlemin geri dönüp zarara dönmesini engelliyor.

**Dikkat — bu bedava değil.** Kısmi çıkış **sağ kuyruğu keser**: büyük kazananları küçültür. Ortalama R'yi düşürür ama volatiliteyi de düşürür. İkisi ayrı şeydir ve hangisini istediğine sen karar vermelisin. Ve breakeven'a çekme, kazananı 0R'de kesip kaybedeni −1R'de bırakır — ölçülmeden uygulanmamalı.

---

## 11. Anti-martingale (kayıp sonrası risk yarılama)

**Kural.** Stop yedin → sonraki işlemde riski **yarıya indir.**

| Kayıp | Sonraki risk |
|---|---|
| %2 | %1 |
| %1 | %0.5 |
| %0.5 | %0.25 |

**Gerekçe.** *"Bu kaybın, on kayıplık bir serinin başlangıcı olmadığını nereden biliyorsun?"*

**Telafi matematiği.** %2 kaybettin, %1 riskle girdin:
- **R2'de** kayıp tamamen telafi edilir
- **R3'te** yeni net kâra geçilir

**Ne işe yarar.** Kayıp serisinde hesabın hayatta kalmasını sağlıyor. Martingale (kayıptan sonra riski artırma) hesabı bitirir; bu tersidir.

**Ayın en sağlam kuralı, ve metottan tamamen bağımsız.** Hangi sistemi kullanırsan kullan geçerli.

---

## 12. Bull flag · Bear flag · ve sahte olanları

**Bull flag tanımı.**
1. Keskin yükseliş bacağı (**bayrak direği**)
2. Küçük konsolidasyon, yatay ya da hafif aşağı eğimli (**bayrak**)
3. Direğe **eşit** ikinci yükseliş bacağı

**Hedef.** Direğin boyunu ölç, konsolidasyondan çıkışa ekle.

**Bear flag.** Aynısı ters: keskin düşüş → hafif yukarı eğimli konsolidasyon → eşit ikinci düşüş.

**Sahte olduğu ne zaman anlaşılır:**

| Formasyon | Ters çalıştığı yer |
|---|---|
| Bull flag | Üst zaman dilimi **prim** bölgesi / olgun boğa trendi |
| Bear flag | Üst zaman dilimi **indirim** bölgesi / olgun ayı trendi |

**Sahte bayrakta giriş prosedürü (V7 örnek 2 — ayın en mekanik girişi):**
1. Fiyat ters yöne dönmeye başlayınca **hemen girme**
2. Bir **salınım tepesinin (ya da dibinin) oluşmasını** bekle
3. O salınımın **kırılmasını** bekle
4. Kırılımdan önceki **son ters yönlü muma** dön
5. Orada gir; **stop bayrağın ucunun ötesine**

**Ne işe yarar.** Kalabalığın gördüğü formasyonun ters tarafında konumlanıyorsun — "karşı taraf düşüncesi".

---

## 13. Sahte kırılım (false breakout) ve rejim tespiti

**Tanım.** Fiyatın bir konsolidasyon aralığının dışına çıkıp hemen geri dönmesi.

**Kural:**

| Rejim | Hangi kırılım sahtedir |
|---|---|
| **Boğa** | Aralığın **altına** inişler |
| **Ayı** | Aralığın **üstüne** çıkışlar |

**Rejim nasıl belirlenir — V8'in en değerli katkısı.**
1. Grafikte ardışık konsolidasyon aralıklarını işaretle
2. Her aralık için sor: **fiyat hangi tarafa taştı?**
3. Ve sor: **taştıktan sonra nereye gitti?**
4. Sürekli **alt tarafa taşıp yukarı gidiyorsa** → boğa rejimi
5. Sürekli **üst tarafa taşıp aşağı gidiyorsa** → ayı rejimi

**Ne işe yarar.** Yön eğilimini bir göstergeden değil, **fiyatın kendi davranışından** türetiyorsun. Ve döngüsel değil: geçmiş konsolidasyonlardan bugünün beklentisini kuruyor.

**İşlem prosedürü (boğa rejiminde):**
1. Konsolidasyonun altına iniş bekle
2. Satış stopları alınsın
3. Dönüş sinyalini bekle (order block'a dönüş)
4. Al; hedef, aralığın üstündeki alım stopları — **gövdelerin üstü**

**Dikkat.** "Kaç konsolidasyondan sonra rejim değişmiş sayılır" tanımsız. Kendin bir eşik koy (ör. "son 3'ün 2'si").

---

## 14. Measured move (ölçülü hareket)

**Tanım.** İkinci impuls bacağının, birinci bacakla **eşit uzunlukta** olacağı beklentisi.

**Nasıl hesaplanır.**
1. İlk bacağın boyunu ölç (dip → tepe)
2. Geri çekilmenin bittiği noktayı bul
3. Aynı boyu oradan **ekle** → projeksiyon

**Örnek (V8).** 108.75'ten başlayan bacak → projeksiyon **109.25.** İkinci ölçüm: 108.85'ten → **109.80.**

**Ne işe yarar.** **Hedef seçimini mekanikleştiriyor.** Bu ayın "hedefi nereye koyacağım" sorusuna verdiği tek somut cevap. Likidite havuzlarıyla birlikte kullanıldığında iki bağımsız hedef kaynağın olur.

---

## 15. SMT divergence · çatlayan korelasyon

**Tanım.** Normalde birlikte hareket eden iki enstrümanın **aynı hareketi yapmayı başaramaması.**

**İki türü:**

**a) Dolar endeksi SMT.** Dolar endeksi **daha yüksek tepe** yaparken, GBP/USD **daha düşük dip** yapmayı başaramıyorsa → çatlayan korelasyon.

**b) Korelasyonlu parite SMT.** EUR/USD ve GBP/USD normalde aynı yöne gider. Biri yeni dip yaparken diğeri yapmıyorsa → uyuşmazlık.

**Nasıl bulunur.**
1. İki korelasyonlu enstrümanı yan yana aç
2. Birinde belirgin bir yeni tepe (ya da dip) bul
3. Diğerinde aynı zaman aralığına bak
4. Karşılık gelen tepe/dip **oluşmadıysa** SMT var

**Ne işe yarar.** Piyasanın **asimetrik** olduğunu gösteriyor — yani tek yönlü, güçlü bir akış var. V6'da kısa vadeli perspektifin üç bileşeninden biri.

**Dikkat.** "Daha yüksek tepe" için pencere uzunluğu verilmiyor. Kendin tanımla (ör. "son 20 mum") — o zaman tamamen mekanik olur.

---

## 16. COT (Commitment of Traders)

**Tanım.** CFTC'nin haftalık yayımladığı, vadeli piyasalardaki büyük pozisyon sahiplerinin net pozisyonlarını gösteren rapor.

**Kim izlenir.**
- **Commercials (ticariler)** — asıl izlenecek grup. Hedge yapan gerçek ticari kullanıcılar
- Large speculators — genelde ticarilerin tam tersi
- Small specs — video "sokak parası" diyor, izlenmiyor

**Nasıl kullanılır (Ekim'deki hali).** **Son 12 ay** ve **son 4 yıldaki** uçlar aranır. Ticariler sıfır çizgisine göre aşırı yüksek ya da aşırı düşük okuma verirse, hedging programlarında bir değişim ve muhtemel uzun vadeli tepe/dip işareti sayılır.

**Ne işe yarar.** **Fiyat grafiğinden bağımsız, kamuya açık, uzun geçmişli tek veri kaynağı** — bu seride nadir. Ölçülebilir bir hipotez üretiyor.

**Dikkat.** Rapor **Salı günkü pozisyonları gösterir ve Cuma yayımlanır** — üç günlük gecikme. Ölçerken bunu modellemezsen sonuç geçmişte hep iyi görünür. (Video bu gecikmeyi hiç anmıyor.)

---

## 17. IPDA · Piyasa verimliliği paradigması

**Tanım.** Videonun fiyat oluşumu hakkındaki modeli: fiyatı bir algoritma dağıtır ve o algoritmanın tek amacı **likiditeye ulaşmaktır.**

**Pratik çevirisi (anlatıdan bağımsız kullanılabilir kısım):**
> Fiyat, stop emirlerinin kümelendiği yerlere çekilir. Çünkü büyük emirlerin gerçekleşmesi için karşı taraf gerekir ve karşı taraf orada birikir.

**Nasıl kullanılır.**
1. Grafikte likidite kümelerini işaretle (eşit tepeler/dipler)
2. Sor: **en yakın, henüz alınmamış likidite hangisi?**
3. Oraya giden yolda en az direnç hangi tarafta?
4. Cevap, yön eğilimini verir

**Arz-talep öğretisinden farkı — videonun kendi vurgusu.** Arz-talep, "akıllı paranın emirleri şurada" der. Bu model, "akıllı para **başkalarının** emirlerinin nerede olduğunu arıyor" der.

**Dikkat.** Anlatı katmanı (merkezi bir motor, banka algoritması) ölçülemez ve gereksiz. **Ama altındaki gözlem ölçülmüştür:** emirler belirli seviyelerde kümelenir ve fiyat o kümelere çekilir. Anlatıyı at, gözlemi tut.

---

## 18. Top-down analysis (yukarıdan aşağı analiz)

**Prosedür.**
1. **Aylık grafik** — kilit seviyeler, uzun vadeli tepe/dipler, order block'lar
2. **Haftalık grafik** — aynısı, daha ince
3. **Günlük grafik** — işlem seviyesinin belirlendiği yer
4. **4 saatlik / 1 saatlik** — giriş çerçevesi
5. **15 dk / 5 dk** — girişin inceltilmesi

**Kural (V6).** Orta vade perspektifi için bu üç zaman diliminin **üçü birden gerekmiyor — biri yeterli.**

**Ne işe yarar.** Seviyeyi üstte belirleyip altta uyguluyorsun. Stop küçülüyor, ama seviyenin arkasındaki gerekçe üst zaman diliminden geliyor.

**Dikkat.** Bu, V2'nin tuzağının kaynağı. Alt zaman dilimine inmek stopu küçültür ama **stop yeme olasılığını artırır ve maliyeti R cinsinden büyütür.** Nereye kadar ineceğine bir sınır koy.

---

## Ekim ayının tek uygulanabilir şablonu

İlk beş video aynı işlemi anlatıyor. Birleştirilmiş hali:

**HAZIRLIK**
1. **Günlük grafikte** bir bullish order block belirle (impuls öncesi son düşüş mumu)
2. O seviyeyi tüm alt zaman dilimlerine **çiz**
3. Yukarıda **eşit tepeleri** bul → hedefler bunlar, gövdelerinin üstü
4. Toplam potansiyel aralığı ölç (örnekte 100 pip)

**GİRİŞ**
5. Fiyatın o seviyeye inmesini bekle; yolda **eski bir dibin altına** insin (turtle soup)
6. Giriş zaman dilimini seç (1H / 15dk / 5dk). **Ne kadar aşağı inersen stop daralır ama maliyet R cinsinden büyür** — bunu bilerek seç
7. Seçtiğin zaman diliminde, seviyenin üstündeki **düşüş mumunu** bul
8. **Geçerlilik:** sonraki bir mum onun içinden yukarı geçmiş olmalı
9. Giriş: o mumun **açılışı + spread payı**

**RİSK**
10. Stop: **order block'un altı.** (Mean threshold'un hemen altı değil — V5 bunun stop yedirdiğini gösteriyor)
11. Pozisyon boyutu: `(Hesap × %1-2) ÷ stop pip`

**YÖNETİM**
12. **3R'de yarısını kapat**
13. Kalan yarıyı üst zaman dilimi likidite havuzuna bırak
14. İkinci hedeften sonra stopu başabaşa çek

**STOP YEDİYSEN**
15. Yeni bir düşüş mumu oluşmasını bekle
16. Sonraki bir mumun onun üstüne çıkmasını bekle
17. Fiyat o muma dönünce, **riski yarıya indirerek** tekrar gir
18. Stop bu sefer order block'un tamamının altında
19. **R2'de kayıp telafi edilir** — yeni traderın orada çıkması öneriliyor

**FİLTRE (V7 ve V8'den)**
20. Girişin **prim bölgesinde bir bull flag** ise, ters oku
21. Rejimi kontrol et: son konsolidasyonlarda **hangi kenar süpürülüyor?** Alt kenar süpürülüp yukarı gidiliyorsa boğa rejimi — alım tarafında kal

**Bu şablonun ölçülebilirlik durumu:** 1–19 arası adımların hepsi mekanik, tek seçim noktası adım 1 (hangi günlük order block). 20–21 de mekanik ama eşikleri sen tanımlamalısın. **Yani bu şablon, tek bir boşluk kapatıldığında tam olarak kodlanabilir** — ve bu, birinci ayın hiçbir kurulumu için doğru değildi.
