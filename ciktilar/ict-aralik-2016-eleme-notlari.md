# ICT Mentorship — Aralık 2016
## Dördüncü ay · 14 video · Tam tanımlar: order block ailesi, likidite ve boşluklar

---

## Bu ayın karakteri

Üç ay boyunca kavramlar **dağınık** verildi: order block birinci ayda ortaya çıktı ama tanımı eksikti, FVG altıncı videoda geçti ama nasıl hesaplanacağı belirsizdi, mitigation block üçüncü ayda bir hikâyeydi.

**Dördüncü ay, o tanımların tamamlandığı ay.** On dört videonun sekizi tek bir kurulumu baştan sona tanımlıyor: tanım, geçerlilik, giriş, stop, hedef. Ve bu ay **order block ailesinin tamamı** veriliyor — order block, mitigation block, breaker, rejection block, reclaimed block, propulsion block, vacuum block. Yedi varyant, hepsi ayrı tanımlı.

Bunun sonucu şu: **yeni bilgi az, ama ölçülebilirlik ilk kez mümkün.** Üç ay boyunca "bunu nasıl kodlarım" sorusunun cevabı yoktu; burada çoğu kurulum için var.

Ve ikinci bir gelişme: birinci video fiyat grafiğinin **tamamen dışına** çıkıyor — faiz piyasaları. Üçüncü aydaki SMT fikrinin olgunlaşmış hali.

Ayın en somut yeniliği ise **sayısal eşikler.** Üç ay boyunca hiçbir kurala rakam verilmemişti; bu ay üç tane geliyor: order block'un geçerlilik eşiği (gövde yüksekliğinin 2-3 katı), sweep derinlik bandı (10-20 pip, 25 pip üstü geçersiz), ve minimum kurulum büyüklüğü (40 pip altı işlem yok).

Kullanılan filtre önceki aylarla aynı: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü.

---

## Bölme notu

Dosya **5.645 satır**, on dört video. Sınırlar `1. video` … `14. video` işaretleriyle ayrılmış. Videoların kendi numaralandırması karışık — bazıları "teaching 3.3", "teaching 3.4", "teaching number five of eight" diyor. Sebebi videonun kendisinde açıklanıyor: **sekiz ana ders + Noel haftası için altı ek ders.** Toplam on dört. **Bölme belirsizliği yok.**

| Video | Satır | Konu |
|---|---|---|
| V1 | 1 – 563 | Faiz üçlüsü (interest rate triad) |
| V2 | 564 – 977 | İç ve dış aralık likiditesi |
| V3 | 978 – 1321 | Order block — tam tanım |
| V4 | 1322 – 1671 | Mitigation block |
| V5 | 1672 – 1937 | Breaker |
| V6 | 1938 – 2347 | Rejection block |
| V7 | 2348 – 2658 | Reclaimed block |
| V8 | 2659 – 2881 | Propulsion block |
| V9 | 2882 – 3289 | Vacuum block |
| V10 | 3290 – 3642 | Likidite boşlukları |
| V11 | 3643 – 4183 | Likidite havuzu baskınları |
| V12 | 4184 – 4644 | Fair value gap — tam tanım |
| V13 | 4645 – 5277 | Momentum ayrışması |
| V14 | 5278 – 5645 | Çifte tepe ve dip |

---

## Bu belge nasıl okunur

Her video iki kutuda: **DERS** (videonun anlattığı, anlattığı gibi) ve **ELEME** (değerlendirme). Sonda **Bölüm IV**: order block ailesinin tam sözlüğü — tanım · nasıl bulunur · ne işe yarar · birbirlerinden farkı.

---

# BÖLÜM I — Dersler ve eleme

## Video 1 — Faiz üçlüsü (interest rate triad)

::: ders
**DERS**

#### Açılış iddiası

> *"**Faiz oranları, piyasa hareketlerinin arkasındaki tek en etkili itici güçtür.**"*

Ve yöntem: kilit faiz piyasalarının teknik analizi, profesyonel para hareketinin kilidini açar.

#### Üç seri

| Seri | Ne temsil eder |
|---|---|
| **30 yıllık tahvil** | Uzun vadeli faiz kıyas noktası |
| **10 yıllık not** | Orta vadeli faiz |
| **5 yıllık not** | Kısa vadeli faiz |

Üçü de **vadeli işlem (futures)** piyasalarında işlem görüyor. Veri kaynağı: **barchart.com**, ücretsiz.

#### Genel kural — dayanak varlık ve bileşenler

Video önce bunu genel bir çerçeve olarak kuruyor:

**Ayı koşulları (dağıtım):** dayanak varlık **daha yüksek tepeler** yapıyor, ama benzer/korelasyonlu varlıklar **daha düşük tepeler** yapıyor.
→ *"Fiyatı yukarı gönderen yeni alım değil, **yoğun dağıtım.**"*

**Boğa koşulları (toplama):** dayanak varlık **daha düşük dipler** yapıyor, ama bileşenler **daha yüksek dipler** yapıyor.
→ *"Yoğun alıyorlarsa fiyatın düşmesine izin verilmez. Arz-talebin temeli budur — bir şeye yüksek talep varsa indirime girmez."*

**Dayanak varlık ne olabilir:** hisse için Dow Jones, döviz için dolar endeksi, emtia için CRB endeksi.

#### Faiz üçlüsüne uygulanması

**Normal durum:** üç faiz piyasası, **dolar endeksi önemli bir fiyat noktasındayken** her yeni tepeyi ve yeni dibi birlikte teyit etmeli.

**Ayrışma (failure swing):** üçünden **biri** kalıbı bozarsa — ör. ikisi daha düşük dip yaparken biri yapmazsa — bu bir **faiz kayması** sinyalidir.

Videonun ifadesi: *"Hangisinin başarısız dip yaptığı önemli değil. Sadece **biri** kalıbı bozmalı. Olduğunda, piyasada akıllı para katılımını görürsün."*

#### Asıl kullanım — doğrulama filtresi

Bu, videonun merkezî katkısı:

1. Fiyat, Eylül'de öğretilen bir odak noktasına gelir: **order block, likidite havuzu, likidite boşluğu, ya da fair value gap**
2. **O anda faiz üçlüsüne bak**
3. Ayrışma varsa → *"kurulumu inceltmeye başlaman için yeşil ışık"*
4. **Ayrışma yoksa → kurulumu geç, yeni bir tane ara**

Videonun kendi cümlesi: *"'Hangi order block'tan işlem yapacağıma nasıl karar veriyorsun' diye çok soruluyor. **Cevabı bu dersle verdim.**"*

#### Yön tablosu

| Dolar için beklenti | Faiz üçlüsünde aranan |
|---|---|
| **Boğa** (alım arıyorsun) | Üçü de daha yüksek tepe yapmalıyken **biri yapamıyor** |
| **Ayı** (satış arıyorsun) | Üçü de daha düşük dip yapmalıyken **biri yapamıyor** |

Ve zincir: *"Faiz piyasaları düşerse faizler yükselir; faizler yükselirse dolar endeksi yükselir; dolar yükselirse yabancı paralar düşer. **Her şey bir dişli gibi birbirine oturur.**"*

#### Örneğin çözümü — Aralık 2016 ilk haftası

**1. Dolar endeksi.** Fiyat **99.50** seviyesine iniyor. Bu seviye ne? **Kasım ortasında oluşmuş bir order block** — son düşüş mumu. 15 Kasım'da bir kez test edilmiş ve sıçramıştı; 8 Aralık'ta bir kez daha oraya iniyor. Dolar endeksi **daha düşük dip** yapıyor.

**2. Faiz üçlüsüne bakılıyor** — 90 dakikalık grafik, 15-18 günlük pencere, 5-8 Aralık arası:

| Seri | Ne yaptı |
|---|---|
| **30 yıllık tahvil** | **Daha düşük tepe** — ayrışma |
| **10 yıllık not** | Neredeyse değişmemiş, yatay |
| **5 yıllık not** | Net **daha yüksek tepe** |

**3. Okuma.** Dolar daha düşük dip yaparken, 30 yıllık tahvilin yapması gereken daha yüksek tepe **gelmemiş.** → faiz piyasasında kayma var → dolar order block'u geçerli.

**4. Sonuç.** Dolar 99.50'den sert yükseliyor, hafta boyunca devam ediyor.

**5. Yabancı para tarafı.** Dolar boğa olduğuna göre, EUR/USD'de satış aranıyor. Yukarıda alım stopları hafta başında işaretlenmişti; fiyat **1.0815 – 1.0820**'yi geçip stopları temizliyor ve **1.0865**'e kadar çıkıyor — orası eski bir dip. Satış oradan.

**Ve bir ek katman:** aynı dönemde GBP/USD daha yüksek tepe yapmayı **başaramıyor** — EUR/USD yaparken. Bu da ayrı bir SMT teyidi.

Videonun notu: *"Her zaman tek bir yerde ayrışma aramak yeterli değil. Bazen akıllı paranın ne yaptığını anlamak için **birkaç şeyi harmanlaman** gerekir."*

#### Eylem planı — videonun kendi özeti

> *"Fiyat, birinci ayda öğretilen bir odak noktasına geldiğinde **faiz üçlüsüne ve dolar endeksine bak.** Bu, akıllı paranın senin işlem fikrinin arkasında olduğunu doğrular. Büyük fonların hareket ettiğine dair belirgin bir işaret yoksa **o işlem fikrini geç** ve olan yenilerini ara."*
:::

::: eleme
**ELEME**

Üçüncü ayın SMT fikrini bir adım ileri götürüyor, ve bir de **kritik bir işlev** ekliyor.

#### Yazılabilir kural

Üç vadeli faiz futures'ı: **30 yıl, 10 yıl, 5 yıl.** Normal durumda üçü birlikte hareket eder.

Kural: **biri diğerlerine uymazsa** — biri daha yüksek tepe yaparken diğeri yapmıyorsa, ya da biri daha düşük dip yapmıyorsa — bu bir kayma sinyalidir.

Ve daha genel bir çerçeve: bir gösterge endeksi (Dow, dolar endeksi, CRB) ile bileşenleri arasındaki uyumsuzluk. Endeks yeni tepe yaparken bileşenler yapmıyorsa dağıtım; endeks yeni dip yaparken bileşenler yapmıyorsa toplama.

#### Asıl katkı: doğrulama filtresi

İki aydır eksik olan bir işlevi dolduruyor:

1. Fiyat bir order block / likidite havuzu / FVG'ye gelir
2. **O anda faiz üçlüsüne bak**
3. Ayrışma varsa → kurulum geçerli
4. Ayrışma yoksa → **kurulumu geç, başka bir tane ara**

Videonun kendi ifadesi: *"hangi order block'tan işlem yapacağımı nasıl anlıyorsun diye soruyorsunuz — cevabı bu."*

Bu, üçüncü ayın birinci videosunda ertelenen sorunun bir cevabı. Tam cevap değil — order block ile turtle soup ayrımını hâlâ çözmüyor — ama **hangi seviyelerin dikkate alınacağına** dair mekanik bir filtre öneriyor.

Ve yasaklayıcı: "ayrışma yoksa işlem yok."

#### Ölçülebilirlik

**Ölçülebilir.** Üç bağımsız seri, mekanik karşılaştırma, kamuya açık veri, yasaklayıcı bileşen. Test edilebilir hipotez net: *ayrışmanın olduğu order block'lar, olmayanlardan daha iyi sonuç veriyor mu?*

**Zayıf:** "aynı anda" ne demek? Video 90 dakikalık grafikte 15-18 günlük bir pencereye bakıyor ama zaman hizalaması kuralı yok. Kapatması kolay bir boşluk.

**Uyarı:** üç faiz vadesi **çok yüksek korelasyonlu** — aynı getiri eğrisinin üç noktası. Ayrışmaları nadir olur, ve nadir olduğu için "özel bir şey oluyor" sezgisi makul görünür. Ama örneklem sorunu doğurur.

#### Yanlışlanamazlık

**Tek örnek, o haftanın kendisi** — sonuç bilinerek anlatılıyor.

**Kuralı belirsizleştiren bir esneklik:** *"her zaman tek bir yerde ayrışma aramak yeterli değil, bazen birkaç şeyi harmanlaman gerekir."* Kaç seriye bakılacak?

**"Bazen uzun vadeli bir kayma kısa vadeyi bozar, buna izin vermelisin."** Kural tutmadığında hazır gerekçe.

#### Not

**SMT fikrinin en olgun hali.** Kripto için doğrudan analoğu var: BTC / ETH / toplam altcoin piyasa değeri, ya da BTC spot / perp / funding.

**Ve doğrulama filtresi fikri, senin projene uygulanabilir bir şablon:** sen `htf_bias`'ı EMA200 ile tanımlamıştın. Alternatif: ikinci bir seriden gelen teyit.

**Sınır:** filtre eklemek işlem sayısını azaltır, ve Aşama 1'de RET almanın sebebi zaten işlem sayısıydı. Çoklu enstrüman şart.
:::

---

## Video 2 — İç ve dış aralık likiditesi

::: ders
**DERS**

#### İki likidite türü — ayın merkezî kavramsal ayrımı

**Dış aralık likiditesi (external range liquidity):**
- Mevcut işlem aralığının **tepesinin üstündeki** alım likiditesi
- Mevcut aralığın **dibinin altındaki** satış likiditesi
- Bu koşular **düşük dirençli** ya da **yüksek dirençli** olabilir

**İç aralık likiditesi (internal range liquidity):** aralık korunacaksa, aralığın **içindeki** boşluklar dolar:
- **Likidite boşlukları** dolar
- **Fair value gap'ler** dolar
- **Order block'lar** yeni alım/satımla doldurulur

Videonun tanımı: *"**Gap riski**, piyasanın çok az ya da hiç işlem görmemiş bir seviyeye hızla yeniden fiyatlanmasıdır. Uzun pozisyondaysan ve altında büyük bir boşluk varsa, bu gap riskidir — genelde seni stop ettiren şey odur. **Biz onlara fırsat olarak bakıyoruz.**"*

#### Ana işlem şablonu — tek cümlede

> *"Ağırlıklı olarak girişlerim **iç aralık likiditesi** girişleridir, çıkışlarım **dış aralık likiditesi**ndedir. **Aralığın içinden alırım, dışına kırıldığında satarım.**"*

#### Fraktallık — ve bu ayrımın asıl gücü

Aynı hareket, farklı zaman dilimlerinde farklı sınıflanır:

> *"Günlük grafikte her yeni tepe, o zaman diliminde **dış** aralık likiditesine koşudur. Ama aylık grafikte hâlâ **iç** aralık likiditesidir — sadece daha büyük bir aylık aralığın içindesin."*

Ve bu, düşük dirençli koşunun tarifi: **aylık aralığın gitmek istediği yönde**, alt zaman diliminde her tepe kırılımı düşük dirençlidir.

#### Aralığın yeniden tanımlanması — mekanik kural

Video net bir güncelleme kuralı veriyor:

> *"Piyasa aşağı yönlü yeni bir işlem aralığı oluşturduğunda **önceki tepeyi ve yeni dibi işaretle.** Fiyat yukarı döndüğünde o aralığın içindesin."*

Yani her yeni tepe/dip kırılımında aralık yeniden tanımlanır: *"Bu aralık kırıldı — yeni aralık ne? Bu dip ve bu tepe. O da kırıldı — yeni aralık ne?"*

#### Minimum büyüklük eşiği — ayın en somut sayısı

Bu, seride ilk kez bir kurulumun **büyüklük nedeniyle reddedilmesi:**

> *"Saatlik ya da 15 dakikalık grafikte bir bullish order block'a dönüş var, ve order block ile aradaki tepe arasındaki mesafe **sadece 20 pip**. Bu, alacağım bir işlem mi? **Hayır.** Ama o mesafe **40 pip** olsaydı — o işlemi alırdım."*

Ve tercih: **75 – 80 pip ideal.**

Gerekçe: *"75-80 pip mükemmel, çünkü aralığı kırıp eski tepenin üstüne çıkmasa bile sana 50 pipini verir."*

#### Zaman dilimi ↔ hedef pip eşlemesi

| Hedeflediğin | Kullanacağın grafik |
|---|---|
| 40 pip | 15 dk |
| 50 pip ve üstü | 30 dk – 1 saat |
| 75 – 100 pip | 1 saat – 4 saat |
| 250 pip / iki hafta | 4 saat – günlük |

Videonun cümlesi: *"'Haftada 100 pip nasıl yaparım' diye soruyorlar. Kolay: **4 saatlik ya da 1 saatlik grafikte işlem yap, daha küçüğünde değil.** Tüm majörleri tara, her hafta 100 piplik bir salınım bulursun."*

#### "Aralığın kırılmasına ihtiyacın yok"

Videonun vurgulu noktası:

> *"100 piplik bir aralıkta alıyorsan, **75 pipini rahatlıkla alırsın** ve aralığın tamamına bile ihtiyacın olmaz. Ama bunu her 30 piplik salınımda giriş yaparak yapamazsın — çünkü şu an girmeye çalışıyorsun ve seni içeri sokacak herhangi bir şey arıyorsun."*

#### Örneğin çözümü — USD/JPY, aylıktan 15 dakikaya

**1. Aylık grafik.** Bir eski tepe ve bir eski konsolidasyon var. Fiyat eski tepenin üstüne süpürme yapıyor → dış aralık likiditesi.

Sonra geri çekilme başlıyor. Video aşağıdaki hedefleri işaretliyor:
- İki yükseliş mumu arasında bir **fair value gap** — kapanacak
- Aşağıda **eşit dipler** — satış stopları

Fiyat aşağı iniyor, eşit dipleri temizliyor. **Ve burada aralık yeniden tanımlanıyor:** artık aralık yeni dip ile eski tepe arası.

Yukarı hedefler, sırayla: **106.25** (bir yükseliş mumunun açılışı) → o kırılırsa **114.55 – 115.95** bandı → sonra **118.85 – 118.90** (bir mumun dibi).

**2. Haftalık.** FVG daha ince tanımlanıyor — fitiller kullanılarak sınırlar daraltılıyor.

**3. Günlük.** Her yeni tepe kırılımı, günlükte dış aralık likiditesi ama aylıkta hâlâ iç. Sonuç: hepsi **düşük dirençli koşu.**

**4. 4 saatlik.** Her tepe kolayca kırılıyor. Video: *"Her tepe sorunsuz kırıldı çünkü bir gündemi var — üst zaman dilimindeki belirli bir seviyeye ulaşmak istiyor."*

**5. 15 dakikalık — şablon burada.** Her seferinde aynı yapı:
- İmpuls yukarı hareket
- Geri çekilme, **son düşüş mumuna** (bullish order block) dönüş
- **İç aralık likiditesinden giriş**
- **Dış aralık likiditesine çıkış** (üstteki tepenin üstündeki alım stopları)

Videonun gözlemi: *"Uzun vadeli bir hedefe gitmek zorundalar, o yüzden **burada biraz alacaklar, burada biraz daha, zaman geçecek, tekrar inip daha da alacaklar** — pozisyonları 113.25 – 113.50 civarında ortalanmış olacak."*

**6. Saatlik — haftalık ritim.** Video haftaları tek tek işaretliyor: *"Pazartesi alım, Salı alım, Çarşamba alım, Perşembe alım..."* Her hafta **en az bir** kurulum.

#### Videonun kapanış özeti

> *"Aylık ya da haftalık grafiğe bak, piyasanın nereye gitmek istediğini belirle. Boğaysa alt zaman dilimlerinde (günlük, 4 saat, 1 saat) **bullish order block** ya da **turtle soup long** ara. Hedef, o zaman dilimlerindeki kısa vadeli tepeler."*
:::

::: eleme
**ELEME**

Serinin **en net kavramsal ayrımı** — ve ilk somut minimum eşik.

#### Yazılabilir tanım

- **Dış aralık likiditesi:** mevcut aralığın **tepesinin üstü** ve **dibinin altı**. Buradaki stoplar.
- **İç aralık likiditesi:** aralığın **içindeki** boşluklar — likidite boşlukları, FVG'ler, order block'lar.

İşlem şablonu tek cümlede: **iç aralıktan gir, dış aralıkta çık.**

Bu ayrım fraktallığı da çözüyor: günlük grafikte "dış aralık" olan bir kırılım, aylık aralığın içinde kalıyorsa hâlâ **iç** likiditedir. Üç ayın kavram yığınını **iki kutuya** indiriyor.

#### İlk somut eşik

> "Order block ile aradaki tepe arasındaki mesafe 20 pip ise o işlemi almam. 40 pip veya üstü olmalı — 75-80 ideal."

İlk kez bir kurulum, **büyüklük eşiğiyle** reddediliyor. Senin `min_rr` kapının kaba versiyonu ve aynı işi görüyor: geometri yetmiyorsa işlem yok.

Ve buna bağlı zaman dilimi eşlemesi: hedeflediğin pip aralığına göre grafik seç. 50+ pip → 30dk/1H, 250 pip → 4H/günlük.

**Bu eşik, ayın en pratik tek katkısı** — çünkü **maliyet problemine dolaylı bir cevap.** 40 pip minimum, 5 piplik spread'i R'nin %12'sine indiriyor; 20 pipte %25 olurdu.

#### İyi olan taraf

**"Aralığın kırılmasına ihtiyacın yok."** 100 piplik bir aralıkta 75 pip almak yeterli. Bu, ITP sisteminde gördüğün sabit hedef probleminin tersinden ele alınışı.

**Seçicilik vurgusu.** "Her 30 piplik hareketi oynarsan seçici olamazsın."

**Aralık güncelleme kuralı mekanik:** her kırılımda yeni tepe/dip ile yeniden tanımla. Kodlanabilir.

#### Zayıf

**Aralığın ilk tanımı hâlâ belirsiz.** "Hangi dip ve hangi tepe aralığı oluşturuyor?" sorusunun ilk cevabı yok — güncelleme kuralı var ama başlangıç noktası yok. Video örnekte bunu üç kez yeniden tanımlıyor.

Üçüncü ayın dört-aralık probleminin devamı. Ama kapatması kolay: senin pivot tabanlı tanımın uygulanabilir.

#### Yanlışlanamazlık

**"Düşük dirençli koşu" tanımı döngüsel:** üst zaman dilimi yönü doğruysa düşük direnç, yanlışsa yüksek — ve o yön tanımsız.

**Örnekler tek yönlü:** USD/JPY'nin 2016 sonu yükselişi, tek trend dönemi.

#### Ölçülebilirlik

**Kısmen.** İç/dış ayrımı ve 40 pip eşiği tamamen mekanik. Aralığın başlangıç tanımı ve yön ön koşulu tanımsız — ama ikisi de kenarda ve senin mevcut tanımlarınla doldurulabilir.
:::

---

## Video 3 — Order block, tam tanım

::: ders
**DERS**

Dört ay sonra order block'un ilk eksiksiz tanımı. Video baştan bir uyarı koyuyor: *"Buradaki her şeyi bearish order block için **tersine çevir** — zaman kazanmak için tek taraf anlatılıyor."*

#### Tanım — dört bileşenli

> **"Bullish order block, bir destek seviyesine yakın olan, açılış-kapanış aralığı en geniş olan, en düşük düşüş mumu ya da fiyat çubuğudur."**

Yani üç koşul birlikte:
1. **En düşük** düşüş mumu
2. **Açılış-kapanış aralığı en geniş** olanı
3. **Bir destek seviyesine yakın**

#### Destek seviyesi ne olabilir

Videonun listesi:
- Üst zaman dilimindeki **eski bir dip**
- Fiyatın yakın zamanda üstüne çıktığı **eski bir tepe**
- Basit destek/direnç fikirleri yeterli — *"ama üst zaman dilimi grafiklerinde: aylık, haftalık, günlük"*

#### Geçerlilik (validation)

> **"En düşük düşüş mumunun TEPESİ, sonradan oluşan bir mum tarafından kırıldığında order block geçerli olur."**

Videonun vurgusu: *"O ana kadar bunun order block olduğunu **bilmiyoruz.** Sadece 'olabilir' diyoruz. Kıran mum onu doğrular."*

Ve bir erken giriş imkânı: *"Kırılım gerçekleşen mumun kendisi geri dönüp o tepeye değerse, orada da girebilirsin — daha sonrasını beklemek zorunda değilsin."*

#### Geçerlilik eşiği — ilk kez veriliyor

Videonun kendi ifadesiyle **yeni bir ekleme:**

> *"Bu notlarınız için, ve **ilk kez ekliyorum:** order block'tan uzaklaşan hareketin, **order block gövdesinin yüksekliğinin 2 ila 3 katı** olmasını isterim. O zaman geri çekilmede yeni bir alım fırsatı beklemek makul olur."*

İlk kez order block'un **yeterince güçlü olup olmadığına** dair mekanik bir kriter var.

#### Giriş

**Giriş fiyatı:** düşüş mumunun **açılış** fiyatı (gövdenin tepesi).

**Limit emri kullanıyorsan: +5 pip ekle** — spread payı.

Ya da: *"Limit emrine güvenmek zorunda değilsin, mumun seviyesine değdiği anda piyasadan da girebilirsin."*

#### Mean threshold

> **"Gövdenin orta noktası — açılıştan kapanışa. Fitilleri kullanma, en yüksek ya da en düşük noktayı kullanma."**

Kural: *"En iyi order block'lar fiyatın gövdenin orta noktasının altına inmesini **hiç** görmez. Biraz delebilir ama **tercihen hiç oraya inmemeli.**"*

#### Stop

**Order block'un dibinin altı** — ve *"tercihen o mumun gövdesinin kapanışıyla oluşan dibin altı"*, fitilin değil.

Ve risk azaltma: *"Fiyat order block'tan uzaklaştıktan sonra, **gövdenin %50'sinin hemen altına** stopu yükseltmek de iyi bir yerdir."*

#### Hedef

**Eski bir tepenin üstündeki alım stopları** — yani dış aralık likiditesi.

Videonun formülasyonu: *"Bilinen bir aralığın **içinden**, bir order block'ta, iç aralık likiditesinden alıyoruz. Pozisyonumuzu, eski tepenin üstünde alım stopu olan **istekli alıcılara** satacağız."*

#### Yön filtresi — hangi order block kullanılır

Video net bir kural veriyor:

| Aylık / haftalık / günlük | Ne yaparsın |
|---|---|
| **Üçü de ayı** | 4 saat ve altında **yükselişleri sat.** Bearish order block, FVG, likidite boşluğu ya da stop baskını kullan. Hedef: günlük grafikteki bir dibin altındaki satış stopları |
| **Üçü de boğa** | 4 saat ve altında **düşüşleri al.** Bullish order block kullan. Hedef: günlük grafikteki bir tepenin üstündeki alım stopları |

**Ve kritik yasak:** boğa ortamındayken **bearish order block'tan satış yapılmaz.**

> *"Bu order block'a çıktığında kısa gitmeyeceğiz. Neden? Çünkü üst zaman dilimi yukarı gidiyor. **Kurumsal emir akışının önünde duruyor olursun.** Bearish order block'ları sadece **kâr almak** için kullan."*

İstisna: *"Günün saati kâr almaya uygunsa, bearish order block'ta çık ve Asya/Frankfurt/Londra geri çekilmesini bekle."*

#### Seviye taşıma kuralı

> *"Her yeni düşüş mumu oluştuğunda, o **yeni potansiyel bullish order block** olur. Açılışı öncekinden yüksekse **seviyeni yukarı taşı.**"*

Video örnekte bunu üç kez yapıyor.

#### Ardışık mumları birleştirme

> *"Herhangi bir zaman diliminde **arka arkaya iki düşüş mumu** varsa, ikisini birleştirip **tek bir tam order block** olarak al."*

#### Örneğin çözümü — dolar endeksi, aylıktan günlüğe

**Aylık grafik.**
- Yukarıda **eşit tepeler** var → alım stopları
- Fiyat aşağı inip eski bir dibi temizliyor, bir destek seviyesine geliyor
- Sonraki mum, o düşüş mumunun tepesini kırıyor → **geçerli**
- Order block açılışı: **94.58**
- Fiyat oraya dönüyor; o mumun dibi **94.06 – 94.07** → yaklaşık **50 pip** delme (aylık grafikte kabul edilebilir)
- Ay: **Ağustos 2016.** Sonrasında fiyat eşit tepelere kadar yükseliyor

**İkinci aylık order block.** Daha yüksek bir düşüş mumu: açılış **95.98.** Fiyat oraya da iniyor.

**Haftalık.** Aylık seviyeler haftalığa taşınıyor. Mayıs'taki order block haftalıkta inceltiliyor. Fiyat oraya dönüyor; **mean threshold sadece hafifçe deliniyor, gövdenin altına inmiyor.** Alım. Yukarı hedef: eski tepelerin üstü. Aralık: yaklaşık **290 – 300 pip.**

**2-3 kat kuralının uygulanması.** Bir order block'tan sonra video ölçüyor: *"Order block gövdesinin **iki-üç katı** yükseliş istiyorum. Buraya, buraya, buraya — tamam, geçerli salınım. Şimdi geri çekilme bekleyebiliriz."*

**Seviye taşıma örneği.** Yeni bir düşüş mumu, açılışı öncekinden yüksek: **95.85.** Fiyat oraya iniyor: o mumun dibi **95.87** — **2 pip** fark. Bir başka mumun tepesi **95.86** — **1 pip** fark.

**Günlük.** Haftalık seviyeler günlüğe taşınıyor. İki ardışık düşüş mumu tek order block olarak birleştiriliyor. Seçim haftası — video *"kenardaydım, işlem yapmadım"* diyor.

**Ve son bir örnek, canlı seansta önceden söylenmiş:** *"16 Aralık haftası öncesi analizinde bu düşüş mumuna odaklanmanızı söyledim. Ve **mean threshold**'unu hedeflememizi — çünkü order block'un tamamına ineceğini düşünmüyordum, bunu bir stop koşusu olarak görüyordum."* Fiyat tam olarak o mean threshold'a iniyor.

Uzun vadeli hedefler: **103, 103.50, sonra 104**, nihai olarak **105 – 107.**
:::

::: eleme
**ELEME**

Dört ay sonra order block'un **ilk eksiksiz tanımı.**

#### Yazılabilir kural

| Bileşen | Tanım |
|---|---|
| **Tanım** | Destek seviyesine yakın, açılış-kapanış aralığı en geniş olan en düşük düşüş mumu |
| **Geçerlilik** | O mumun tepesi, sonraki bir mum tarafından kırılır |
| **Geçerlilik eşiği** | Uzaklaşan hareket, gövde yüksekliğinin **2-3 katı** olmalı |
| **Giriş** | Fiyat o mumun **açılış fiyatına** döner (+5 pip spread payı) |
| **Mean threshold** | Gövdenin orta noktası — altına inmemeli |
| **Stop** | Gövdenin altı |
| **Hedef** | Eski tepenin üstündeki alım stopları |

**2-3 kat eşiği ilk kez veriliyor.** Video bunu "notlarınıza yazın, ilk kez ekliyorum" diyerek sunuyor, ve ilk kez order block'un **yeterince güçlü olup olmadığına** dair mekanik bir kriter var.

#### İkinci kural: seviye taşıma

Fiyat yeni bir düşüş mumu oluşturursa ve açılışı öncekinden yüksekse, order block **yukarı taşınır.** Video örnekte üç kez yapıyor.

Kodlanabilir, ama şu sorunu doğuruyor: her yeni düşüş mumu bir aday, yani **her zaman "en yakın" order block bulunur.**

#### Üçüncü kural: yön filtresi — ve bu iyi

**"Boğa ortamındayken bearish order block'tan satış yapma; onları sadece kâr almak için kullan."**

Bu, **yasaklayıcı** bir kural ve bu ayda ilk kez net biçimde konuyor. Ve mekanik hale getirilebilir: yön tanımı Kasım V4'ün aylık order block kuralından alınırsa zincir kapanır.

#### Zayıf noktalar

**"Destek seviyesine yakın"** — tanımın merkezinde duruyor ve tanımsız. Video "aylık/haftalık eski dip veya kırılmış tepe" diyor ama hangisini seçeceğinin kuralı yok.

**"En geniş açılış-kapanış aralığı"** — hangi pencerede en geniş? Tanımsız.

**Yön ön koşulu:** üç zaman diliminin hepsi aynı yönü göstermeli — ölçülebilir tanım yok.

#### Yanlışlanamazlık

**Yükseliş yönündeyken düşüş order block'ları yok sayılıyor.** Sistem tek yönde işlem üretiyor, karşı sinyaller tanım gereği görünmez.

**Örnek tek yönlü:** dolar endeksinin 2016 yükselişi. Trend dönerken ne olduğu gösterilmiyor.

**"Seçim döneminde kenardaydım"** — belirsizlik dönemleri örneklemden çıkarılıyor, geriye dönük bir seçim.

**Delme toleransı tanımsız:** aylık grafikte "50 pip delme kabul edilebilir" deniyor ama sınır yok.

#### Ölçülebilirlik

**Kısmen.** Geçerlilik, 2-3 kat eşiği, giriş, mean threshold, stop, hedef — hepsi mekanik. Ama **"destek seviyesine yakın"** merkezde ve tanımsız.

**Kapatılabilir:** o koşulu sabit bir kuralla değiştir (ör. "son 60 günün dibinin ±%0.5 bandı içinde") ve tanımın tamamı kodlanabilir hale gelir.

#### Not

**Ölçmeye değer somut hipotez:** *2-3 kat hareket şartını sağlayan order block'lar, sağlamayanlardan farklı sonuç veriyor mu?* İlk kez order block'lar arasında mekanik bir ayrım öneriliyor — ve karşılaştırma grubu doğal.

Ama "destek seviyesine yakın" tanımsız kaldığı sürece, tanım eksiksiz görünse de uygulamada seçim gerektirir.
:::

---

## Video 4 — Mitigation block

::: ders
**DERS**

#### Bağlam

Video, ayı senaryosuyla anlatıyor. Fiyat bir direnç seviyesine yükseliyor — bu bir eski tepe, eski dip, bearish order block ya da breaker olabilir.

#### Yapının adı: M formasyonu

> *"Bu formasyona bakarsan, dev bir **M** harfine benziyor."*

Ve içindeki üç nokta:

| Nokta | Ne |
|---|---|
| **A** | Kısa vadeli **dip** |
| **B** | A'dan sonraki kısa vadeli **tepe** |
| **C** | Fiyatın **A'nın altına kırılması** |

C, **piyasa yapısı kayması (market structure shift).** Videonun ifadesi: *"O dibin altına kırılım bize, piyasada fiyatı aşağı sürmeye istekli **büyük ölçekli katılımcılar** olduğunun teyidini veriyor."*

#### Kural — beş adım

1. Bir direnç seviyesine yükseliş gör
2. **M formasyonu** oluşsun: dip (A) → tepe (B) → A'nın altına kırılım (C)
3. C oluştuktan sonra **A seviyesine** odaklan
4. A'nın içindeki **son düşüş mumu** = mitigation block
5. Fiyat oraya döndüğünde **sat**

**Giriş:** o mumun **tüm gövde aralığı** — *"sadece dibi değil, mumun tamamı."*
**Stop:** mumun tepesinin üstü
**Hedef:** C'nin altındaki dip, ya da daha aşağıdaki destek seviyesi

#### Mekanizma — ilk kez açık ve makul

> *"A'dan B'ye olan salınımda alım yapanlar var. Ama fiyat C'ye kırıldığında **onlar su altında kaldı.** Fiyat A'ya döndüğünde, o pozisyonları **tasfiye etme ya da zararlarını azaltma** fırsatı bulurlar."*

Ve videonun adlandırması: **"buyer's remorse"** — alıcı pişmanlığı. *"O dipte alanlar lehlerine kısa bir hareket gördü, sonra dibin altına kırıldığını gördü. Fiyat o seviyeye döndüğünde aldıklarına pişmanlar, o yüzden çıkıyorlar."*

Ve akıllı para tarafı: *"Kurumsal seviyede de aynı — fiyatı manipüle edip aşağı sürdüklerinde, kendi ters pozisyonlarını da kapatmaları gerekiyor. Bu onlara o fırsatı veriyor."*

Videonun kapanış cümlesi: *"**Prim fiyatlar bilgisiz traderlar tarafından alınır, akıllı para tarafından satılır.** Hangi grupta olacaksın?"*

#### Klasik karşılığı — video kendisi söylüyor

> *"Burada olan şey, klasik **'kırılan destek dirence dönüşür'** ilkesidir."*

#### Örneğin çözümü

**Bağlam.** Bir **likidite boşluğu** var; onun **denge noktası (equilibrium)** hedef olarak işaretleniyor: **1.1148.**

**Birinci mitigation.** Fiyat bir eski tepeyi kırıp devam beklentisi yaratıyor, sonra bir **failure swing** yapıyor. O yapının dibi işaretleniyor. Fiyat oraya dönüyor — *"biraz aşıyor ama satış geliyor."* Aşağı kırılım.

**İkinci mitigation.** Yeni bir dip oluşuyor. Seviye oraya **taşınıyor.** Fiyat o son düşüş muma dönüyor — *"biraz aşıyor ama mumun gövdesinin içinde"* → satış. Aşağı.

**Üçüncü mitigation.** Aynısı tekrar. Ve hedef: **1.1148**, likidite boşluğunun mean threshold'u. Fiyat oraya iniyor.

**30 dakikalık grafikte sayılarla.**

| Kalem | Değer |
|---|---|
| Giriş (mitigation block) | **1.1262** |
| O mumun tepesi | **1.1289** |
| Stop | 1.1289'un üstü |
| Beklenen geri çekilme | ~20 pip |

Videonun notu: *"Gövdenin tamamı kullanılıyor, sadece dibi değil. **Mumun gövdesi asla ihlal edilmiyor — mitigation block'un ayırt edici özelliği bu.**"*
:::

::: eleme
**ELEME**

Üçüncü ayda yalnızca bir hikâyeydi; burada **mekanik bir prosedür.**

#### Yazılabilir kural

Üç referans noktası:

- **A:** kısa vadeli dip
- **B:** ondan sonraki kısa vadeli tepe
- **C:** A'nın altına kırılış → **piyasa yapısı kayması**

C oluştuktan sonra fiyat A seviyesine döndüğünde, A'nın içindeki **son düşüş mumu** satış bölgesidir.

**Giriş:** o mumun gövde aralığı (tamamı)
**Stop:** mumun tepesinin üstü
**Hedef:** C'nin altındaki dip veya daha aşağıdaki destek

**Mantık ilk kez açık:** A–B arasında alım yapanlar C'de zarara geçti. Fiyat A'ya döndüğünde çıkıyorlar — bu satış baskısı yaratıyor.

#### Order block'tan gerçek farkı

Üçüncü ayda "aynı şey, farklı hikâye" demiştim. **Bu video o değerlendirmeyi düzeltiyor.**

| | Order block | Mitigation block |
|---|---|---|
| Ön koşul | Yok | **Yapı kayması şart** |
| Neresi | Hareketin başladığı mum | **Kırılan dibin içindeki mum** |
| Sıralama | Serbest | A→B→C zorunlu |

Yapı kayması ön koşulu kavramı gerçekten ayırt edilebilir kılıyor. Ve o koşul mekanik.

#### Ölçülebilirlik

**Ölçülebilir.** Üç nokta da mekanik, sıralama zorunlu, giriş/stop/hedef tanımlı, ön koşul kendisi de mekanik, yasaklayıcı bileşen var.

**Ve önemli:** bu kuralda **"destek seviyesine yakın" gibi tanımsız bir bileşen yok.**

**Mekanizma da test edilebilir:** zarara geçen pozisyonların başabaşta kapanması, davranışsal finansta belgelenmiş bir örüntü (disposition effect). Order block'un "bankalar burada aldı" anlatısından daha somut bir zemin.

Ve videonun kendisi klasik karşılığını veriyor: **kırılan destek dirence dönüşür.** Dürüst.

#### Yanlışlanamazlık

**Seviye taşıma yine var:** "her yeni dip oluştuğunda seviyeyi oraya taşı." Sonuç: geriye dönük bakınca hep bir mitigation block bulunuyor.

**Zaman sınırı yok.** Sınırsız bir kurulum geçmişte her zaman bulunur.

**Aşımlar normalleştiriliyor:** "biraz aştı ama gövdenin içinde kaldı." Tolerans tanımsız — ve aynı videoda "gövde asla ihlal edilmez" de deniyor. İkisi çelişiyor.
:::

---

## Video 5 — Breaker

::: ders
**DERS**

#### Bullish breaker — prosedür

1. Fiyat düşer ve bir **kısa vadeli dip** oluşturur
2. O dip **kırılır** ve fiyat bir destek seviyesine iner → bu, potansiyel bir **turtle soup long** (satış stopları süpürüldü)
3. Fiyat yukarı döner ve **iki dip arasındaki kısa vadeli tepeyi kırar** → **piyasa yapısı kayması**
4. Fiyatın o kırılan **tepeye geri dönmesini** bekle
5. O tepenin içindeki **son yükseliş mumu** = bullish breaker → **al**

**Giriş:** mumun tam gövde aralığı
**Stop:** aralığın altı
**Hedef:** yukarıdaki likidite

Videonun mekanizma açıklaması: *"O tepede kısa gidenler var. Fiyat o seviyeye döndüğünde **pozisyonlarını kapatacaklar** ve belki yeni yükseliş bacağıyla senkronize olacaklar."*

#### Bearish breaker — tanım ve prosedür

Videonun kendi tanımı:

> *"Bearish breaker, **eski bir tepe ihlal edilmeden önceki en son salınım dibindeki** ayı yönlü (düşüş kapanışlı) mum aralığıdır. O dibi alanlar, sonradan aynı salınım dibinin ihlal edildiğini gördüklerinde, fiyat oraya döndüğünde **zararlarını azaltmaya** çalışacaklar."*

**Adımlar:**
1. Eski bir tepe kırılır ve reddedilir → alım stopları nötralize edildi
2. **İki tepe arasındaki salınım dibine** odaklan
3. O dip **kırılır** → yapı kayması
4. Fiyat o dibe geri döner → **bearish breaker** → sat

#### Teyit işaretleri — videonun listesi

**Bullish breaker için:**
- Eski bir **dibin altına** koşu → satıcılar sıkışmış
- **Hızlı yeniden fiyatlama yukarı** → teyit
- **İki dip arasındaki kısa vadeli tepenin kırılması** → yapı kayması yukarı
- Bundan sonraki her geri çekilme **yeni alım fırsatı**

**Bearish breaker için:** tam simetriği.

#### Mum seçim kuralı — ilk kez veriliyor

Video örnekte açıkça soruyor ve cevaplıyor:

> *"Neden bunu kullanıyorum, şunu değil? Çünkü **düşüşten önceki en yüksek olan bu.** Ve **tüm aralığı** kullanıyoruz."*

Bu, üç ay boyunca kuralsız bırakılan seçimin ilk mekanik cevabı.

#### Örneğin çözümü

**Bullish breaker.** Grafikte bir eski dip var. Fiyat onun altına iniyor, sonra **bir kez daha** deliyor, sonra ralli yapıyor. Video: *"Satış tarafında stoplar alındıktan sonra piyasa yapısı kaymış — yani büyük bir yeniden fiyatlama olmuş."*

Odak: **iki dip arasındaki kısa vadeli tepe**, ve oradaki **son yükseliş mumu.**

Video mum seçimini gerekçelendiriyor: *"Bunu kullanıyorum çünkü düşüşten önceki en yüksek olan."* Ve tüm aralık kullanılıyor.

Fiyat oraya dönüyor → alım. Ve mekanizma: *"Fiyatı aşağı sürüp o satış stoplarını almak için kullandıkları satış emirleri **şu an zararda.** Bizden daha derin cepleri var — fiyatın o seviyeye dönmesini bekleyecekler, o kısaları kapatıp yeni uzun ekleyecekler. **Patlayıcı hareketin sebebi bu.**"*

#### Videonun ödevi

*"Grafiklerini incele. Piyasanın bir dip yaptığı, sonra bir kez daha aşağı gittiği, ve iki dip arasındaki kısa vadeli tepeyi kırdığı yerleri bul. **Klasik destek fikirleri tam burada işe yarıyor** — ama fiyatın neden öyle davrandığına dair bir hikâyen olması gerekiyor."*
:::

::: eleme
**ELEME**

**Dört ayın en sıkı tanımlı kurulumu** — hiçbir adımında tanımsız bileşen yok.

#### Yazılabilir kural (bullish)

1. Eski bir dip **kırılır** (stoplar süpürülür)
2. Fiyat döner ve iki dip arasındaki **salınım tepesini kırar** → yapı kayması
3. Fiyat o salınım tepesine **geri döner**
4. O tepenin içindeki **son yükseliş mumu** = alım bölgesi

**Giriş:** mumun tam gövde aralığı
**Stop:** aralığın altı
**Hedef:** yukarıdaki likidite

Bearish tam simetriği.

#### Neden bu diğerlerinden temiz

| Kurulum | Tanımsız bileşen |
|---|---|
| Order block (V3) | "destek seviyesine yakın" |
| Mitigation block (V4) | Yok, ama üst zaman dilimi ön koşulu var |
| **Breaker (V5)** | **Yok** |

Her adım fiyat yapısından türüyor. **Üst zaman dilimi ön koşulu bile gerekmiyor** — kurulumun kendisi yön üretiyor.

Ve **iki koşullu:** hem stop süpürmesi hem yapı kayması. İkisi de olmadan breaker yok. Yanlışlanabilirliği doğrudan artırıyor.

#### Bir de dürüst bir mum seçimi kuralı

Video, "neden bu mum, öteki değil" sorusunu soruyor ve cevaplıyor: **düşüşten önceki en yüksek olan.** Üç ay boyunca bu seçim kuralsız bırakılıyordu.

#### Ölçülebilirlik

**Ölçülebilir — dört ayın ölçmeye en uygun kurulumu.** Senin harness'ında neredeyse hazır:

- Dip/tepe tespiti → pivot mantığın var
- Stop süpürmesi → sweep tanımın var
- Yapı kayması → pivot kırılımı
- Mum seçimi → tanımlı

**Karşılaştırma grubu net:** stop süpürmesi olup yapı kayması olmayan durumlar. İki koşulun katkısı ayrı ayrı ölçülebilir.

#### Yanlışlanamazlık — bu videoda az

**Mekanizma anlatısı var** ("satıcılar sıkıştı") ama **kural ondan bağımsız çalışıyor** — hikâyeyi silsen kural aynen kalır. Order block'ta durum böyle değildi.

**Zaman sınırı yok** — ölçmek için sen bir pencere koymalısın.

#### Not

**Ölçmeye değer somut hipotez:** *stop süpürmesi + yapı kayması birlikte olduğunda, tek başına stop süpürmesinden farklı bir sonuç çıkıyor mu?*

Bu, senin sweep ölçümünün doğrudan devamı. Sweep'i tek başına ölçtün, sonuç sıfıra yakındı. Breaker ikinci bir koşul ekliyor.

**Not:** ikinci koşul işlem sayısını azaltır. Sweep ölçümünde 4H'de örneklem zaten sınırdaydı; çoklu enstrüman gerekir.
:::

---

## Video 6 — Rejection block

::: ders
**DERS**

#### Açılıştaki gözlem

Video bir grafikle başlıyor ve soruyor: *"Büyük tepe ve diplerde ne görüyorsun?"*

Cevap: eski tepelerin üstünde iki büyük **sahte kırılım**, ardından sert dönüşler. Ve videonun uyarısı: *"Bunları geriye dönük göstermek kolay. Ama muhtemelen **önceden** oluşurken göremiyorsun — çünkü grafiklerde yeterince zaman geçirmedin."*

#### Temel fikir — sweep tanımını gevşetmek

Videonun asıl katkısı bu:

> *"**Bir failure swing için fiyatın daha yüksek tepe yapması gerekmiyor.** Mumların **gövdelerine** bakarak da anlaşılır."*

Yani: fitil bazlı sweep yerine **gövde bazlı** sweep.

#### Bearish rejection block — tanım

> *"Bearish rejection block, **uzun fitilli** bir ya da birden fazla mumla oluşmuş bir fiyat tepesidir; ve fiyat, o mum(lar)ın **gövdesinin üstüne** çıkıp alım tarafı likiditeyi süpürür — sonra düşer."*

**İdeal ortam:** *"büyük ya da ara vadeli düşüş trendleri."*

#### Bloğun sınırları — nasıl çizilir

Video net:

| Sınır | Ne |
|---|---|
| **Üst** | **En yüksek fitilin ucu** |
| **Alt** | Salınım tepesindeki **en yüksek açılış ya da kapanış** |

Ve bir netlik: *"En yüksek mumun **boğa mı ayı mı** kapandığı fark etmez. En yüksek fitili ve o salınım tepesindeki en yüksek açılış/kapanış fiyatını arıyorsun."*

Görselleştirme: *"Zihninde bunu **tek bir mum** gibi gör. Bu aralık senin satış bloğun — tıpkı bir bearish order block gibi işle."*

#### Tetik ve giriş

**Tetik:** fiyat bloğun **alt sınırına** (en yüksek gövde noktasına) döndüğünde.

**İki giriş seçeneği:**

1. **Agresif:** o fiyattan sat, stop belirgin biçimde üstte
2. **Zayıflıkta satış (stop emri):** fiyat en yüksek açılış/kapanışın **üstüne** çıkarsa ama **daha yüksek fitil tepesi yapmazsa**, o seviyenin altına **stop emriyle** sat

Videonun notu: *"Bu, giriş kalıbı olarak **stop emri kullandığım nadir zamanlardan biri.**"*

#### Bullish rejection block — simetriği

**İdeal ortam:** büyük ya da ara vadeli yükseliş trendleri.

**Tanım:** uzun **alt** fitilli bir dip; fiyat gövdenin **altına** inip satış tarafı likiditeyi süpürür, sonra yükselir.

| Sınır | Ne |
|---|---|
| **Alt** | **En düşük fitilin ucu** |
| **Üst** | Salınım dibindeki **en düşük açılış ya da kapanış** |

Fiyat bloğun **üst sınırına** (en düşük gövde noktasına) döndüğünde alım.

#### İkinci kullanım: kâr alma

Videonun ek notu:

> *"Kısaysan ve bu seviyelere geliyorsan, **kârını al.** Fiyatın fitillerin altına inmesini bekleme — asıl referans **gövdeler.**"*

#### Örneğin çözümü

Video bir bull flag görünümlü yapı gösteriyor ve soruyor: *"Klasik grafikçi bunu **devam formasyonu** görür. Ama gerçekten yukarı mı gidecek, yoksa altta **dağıtım** mı var?"*

Analiz: *"Yeni bir tepe yok — ya da var mı? **Formasyondaki en yüksek gövdeye** bak, ve onu geçen en son muma. Fiyat o en yüksek gövdenin üstüne çıkıyor. **İşte dağıtım orada.**"*

İkinci örnek: fitilli bir mum, en yüksek gövde referansı **açılış** fiyatı. Fiyat onu biraz aşıyor ama **daha yüksek fitil yapmıyor** → aşağıdaki satış stoplarına koşu.

#### Videonun ödevi

*"Grafiklerinde rejection block örneklerini ve sonrasındaki fiyat hareketlerini ara."*
:::

::: eleme
**ELEME**

**Gerçekten yeni bir fikir** — sweep tanımını gevşeten bir varyant.

#### Yazılabilir kural

**Temel fikir:** fiyat yeni bir tepe yapmak zorunda değil. Yeni bir **gövde** tepesi yapması yeterli.

1. Uzun fitilli bir veya birkaç mumdan oluşan salınım tepesi bul
2. **En yüksek fitil ucu** ile **en yüksek gövde noktası** arasındaki aralığı işaretle → blok
3. Fiyat, en yüksek gövde noktasının **üstüne** çıkarsa (fitili aşmasa bile) → dağıtım sinyali
4. Bloğun **alt sınırına** dönüşte satış

**Giriş varyantı:** gövde tepesini aştıysa ama fitili aşmadıysa, geri düşerken **stop emriyle** satış.

#### Neden bu farklı

Senin ölçtüğün sweep tanımı: **fitil, önceki fitili aşmalı.**
Bu video: **gövde, önceki gövdeyi aşması yeterli.**

Rejection block, sweep'in **daha gevşek** versiyonu — daha fazla sinyal üretir. Ve senin sweep ölçümünde 4H'de örneklem sınırdaydı.

#### Ölçülebilirlik

**Ölçülebilir.** Blok sınırları tamamen mekanik. Tetik açık.

**Karşılaştırma doğrudan kurulabilir:** aynı veride fitil bazlı ve gövde bazlı sweep yan yana ölçülebilir.

**Zayıf:** "uzun fitil" tanımsız. Fitil/gövde oranı mı, ATR katı mı? Ama bu kenarda — bir eşik sabitleyip çekirdeği ölçebilirsin.

#### Tekrarlanan hata

**"Gövdeler kurumsal, fitiller perakende."** Beşinci kez, ve burada tanımın **temeli** haline gelmiş.

İddia yanlış: mum grafiği hacim dağılımı hakkında bilgi vermez, "kurumsal fiyat" diye ayrı bir fiyat yoktur.

**Ama şunu ayır:** iddia yanlış olsa da **kural ölçülebilir kalıyor.** "Gövde bazlı sweep, fitil bazlı sweep'ten farklı sonuç veriyor mu?" sorusu, arkasındaki hikâye doğru olmasa da geçerli.

#### Not

**Ölçmeye değer hipotez, çok net:** senin harness'ında bu, tek parametre değişikliği — sweep tetiğinde `high` yerine `max(open, close)`.

Sweep ölçümünde sonuç %33 isabet, 2R'de tam başabaştı. Gövde bazlı tanım daha çok örnek üretir — örneklem sorununu hafifletir, ama isabeti düşürebilir de.
:::

---

## Video 7 — Reclaimed block

::: ders
**DERS**

#### Market maker buy model — eğri kavramı

Videonun çerçevesi: fiyat, **yükselmek için önce düşer.** Bu düşüş-yükseliş yapısına **"eğri" (curve)** deniyor.

| Eğrinin tarafı | Ne oluyor |
|---|---|
| **Satış tarafı** (dibin solu) | Piyasa yapıcı **erkenden alım biriktiriyor** |
| **Alım tarafı** (dibin sağı) | Fiyat yükseliyor, eski seviyeler yeniden kullanılıyor |

#### Neden kademeli alım

> *"Emirleri bizimkinden çok daha büyük. Tüm net pozisyonlarını **tek bir fiyattan** gerçekleştiremezler. Kademeli olarak yerleştirmeleri gerekiyor — ve bu **hedge** biçiminde olur."*

Sonuç: fiyat düşerken her küçük sıçrama, yeni bir birikim işareti sayılıyor.

#### Tanım

> **"Bullish reclaimed block, daha önce fiyat almak için kullanılmış bir mumdur; kısa vadeli bir sıçrama, eğrinin alım tarafında **küçük bir yer değiştirme** olduğunu teyit eder. Bu eski bloklar yeni uzun pozisyonlar için **yeniden alınır.**"*

#### Prosedür

1. Fiyat düşerken, **her küçük sıçramadan önceki son düşüş mumunu** işaretle
2. Bunlar "erken alım" bölgeleri
3. Dip oluşup fiyat yükselmeye başladığında (**eğrinin alım tarafı**), aynı mumlara dönüldüğünde **al**

#### Videonun kendi uyarısı — kritik

> *"Düşüş sırasında bu sıçramaları giriş noktası sanan traderlar **stop olur.** Çünkü aslında **piyasa yapıcının hedge güdüsüne dayanan bir girişe** binmiş oluyorlar."*

Yani: **aynı mum**, eğrinin solunda tuzak, sağında fırsat.

#### Market maker sell model — simetriği

Fiyat **düşmek için önce yükselir.** Alım tarafında (tepenin solu) her küçük düşüşten önceki **yükseliş mumu** işaretlenir — bunlar erken satış bölgeleri. Tepe oluşup fiyat düşmeye başlayınca, o mumlara dönüşte **sat.**

Videonun ifadesi: *"Fiyat aksiyonuna **röntgen** gibi bakmak — her yükseliş mumunda küçük bir yer değiştirme varsa, orada hedge yapılmış demektir."*

#### Örneğin çözümü

**Buy model.** 24 Kasım – 29 Kasım arası bir düşüş. Video iki düşüş mumu işaretliyor — ikisi de düşüş sırasında küçük bir sıçramadan önce oluşmuş. Dip oluştuktan sonra fiyat ikisine de dönüyor ve *"tam pipine"* tepki veriyor.

**Sell model.** Bir tepe formasyonu. Video, tepenin **solundaki** üç yükseliş mumunu işaretliyor. Tepe oluştuktan sonra fiyat üçüne de dönüyor, üçünde de satış geliyor.

Ve bir dürüst not: *"Bu yükseliş mumu, ücretsiz eğitimlerdeki haliyle bearish order block sayılırdı ve düşüş beklerdin. **Burada öyle olmuyor — kırıp geçiyor.** Ama sonra doruk tepeyi görüyoruz, ve **şimdi** fiyat oraya dönünce satış."*
:::

::: eleme
**ELEME**

**Dört ayın en zayıf kurulumu** — ve zayıflığın sebebi tek kelime: **eğri (curve).**

#### Yazılabilir görünen kural

1. Fiyat düşerken, her **kısa vadeli sıçramadan önceki son düşüş mumunu** işaretle
2. Bunlar "erken alım" bölgeleri
3. Dip oluşup fiyat yükselince, aynı mumlara dönüldüğünde **alım** yap

#### Ama merkezinde ölçülemez bir bileşen var

Kuralın tamamı şuna bağlı: **"eğrinin hangi tarafındasın?"** — yani dip oluştu mu.

Gerçek zamanda soru şu: fiyat düşerken, bu son dip mi yoksa daha aşağı gidecek mi? **Bunu bilseydin, zaten reclaimed block'a ihtiyacın olmazdı.**

Video bu sorunu açıkça kabul ediyor: *"düşüş sırasında bu mumları giriş sanan traderlar stop olur, çünkü onlar sadece hedge hareketiydi."*

Yani **aynı mum**, eğrinin solundaysa tuzak, sağındaysa fırsat. Ve hangisinin geçerli olduğu ancak dip oluştuktan sonra bilinir.

Ve videonun kendi örneği bunu doğruluyor: bir yükseliş mumunun *"normalde bearish order block sayılacağı ama burada kırıp geçtiği"*, sonra tepe oluşunca *"şimdi geçerli olduğu"* söyleniyor. Aynı seviye, iki farklı sonuç, ayrım sonradan yapılıyor.

#### Karşılaştırma

| Kurulum | Ön koşul | Mekanik mi? |
|---|---|---|
| Breaker (V5) | Stop süpürmesi + yapı kayması | **Evet** |
| Mitigation (V4) | Yapı kayması | **Evet** |
| Order block (V3) | "Destek seviyesine yakın" | Hayır |
| **Reclaimed (V7)** | **"Eğrinin sağ tarafı"** | **Hayır — dönüş noktası bilgisi gerekiyor** |

#### Ölçülebilirlik

**Ölçülemez.** Merkezî bileşen — dönüşün oluştuğu bilgisi — gerçek zamanda bilinmiyor, ve kural onsuz çalışmıyor.

Bu, yönergenin kalıcı hata listesindeki **"gerçek zamanda bilinmeyen girdi"** kaleminin saf örneği: geçmişte hep doğru görünür, ileride hiçbir şey söylemez.

#### Not

**Bu kurulumu ölçme listesine alma.** Ön koşulu, ölçmek istediğin şeyin kendisi.

**Ama bir şey öğretiyor:** bir kural geçmişte her zaman doğru görünüyorsa, muhtemelen gerçek zamanda bilinmeyen bir girdiye dayanıyordur.
:::

---

## Video 8 — Propulsion block

::: ders
**DERS**

#### Tanım

> **"Propulsion block, daha önce bir düşüş mumunun (bullish order block) içine inmiş ve daha yüksek fiyat hareketi için destek rolünü devralmış bir mumdur."**

Yani: **bir order block'un içine değen ikinci bir order block.**

#### Nasıl oluşur — adım adım

1. Bir **bullish order block** var (ve geçerli — sonraki bir mum tepesini kırmış)
2. Fiyat yukarı gidiyor
3. Sonra **yeni bir düşüş mumu** oluşuyor
4. **O yeni mum, eski order block'un aralığına değiyor**
5. Bu ikinci mum = **propulsion block**

Videonun ifadesi: *"Onu propulsion yapan şey, **zaten yukarı gitmeye eğilimli** bir order block'a geri inmiş olması. Sonra o ilkine dokunan **daha yüksek** bir order block oluşuyor — ve o yeni seviye **son derece hassas** olacak."*

#### Ayırt edici iddia — mean threshold

> *"Mean threshold'u **asla** kırılmamalı. Kırılmasına izin veriyoruz ama **büyük olasılıkla hiç olmayacak** — sadece mumun tepesine inip **anında patlayacak.** Belki bir iki pip altına iner."*

Ve ters yönde kullanım:

> *"İşte ipucu: **mean threshold'u kaybederse, muhtemelen iyi bir işlem değildir.** Yani ya **çok dar bir stop** kullanabilirsin, ya da yanlış tarafta olduğuna dair **anında geri bildirim** alırsın — ve kenara çekilmek, hatta çoğu zaman **ters yöne dönmek** daha mantıklı olur."*

#### Giriş ve stop

| Kalem | Değer |
|---|---|
| **Giriş** | Propulsion mumunun **tepesi** |
| **Stop** | **Mean threshold'un altı** (çok dar) |
| **Alternatif giriş (bearish)** | Mumun **dibi** — *"gövdeye kadar gelmesine gerek yok"* |

#### Ardışık mumları birleştirme

Video örnekte üç ardışık düşüş mumunu **tek bir order block** olarak alıyor: *"Arka arkaya üç düşüş mumu — hepsi birlikte tek bir bullish order block, çünkü hepsi aynı seviyeye ulaşmak için yapılmış aşağı hareket."*

#### Örneklerin çözümü

**Bullish propulsion.** Fiyat bir dipten yükselmiş; eğrinin alım tarafında üç ardışık düşüş mumu var → tek order block. Fiyat aşağı iniyor ama **dengeye ulaşmıyor.** Sonra bir mum, o üç mumun en yükseğini kırıyor → order block geçerli.

Bir sonraki mum yükseliyor, ondan sonraki açılıp **o order block'un içine iniyor ve düşüş kapanışı yapıyor** → **propulsion mumu.**

Sayı: o mumun **açılışı 133.45**, sonraki bir mumun **dibi 133.45** — tam dokunuş. Alım.

**Bearish propulsion.** Daha yüksek bir bearish order block var; fiyat oraya çıkıp kırılıyor. Sonra son yükseliş mumu (bearish order block) belirleniyor. Fiyat aşağı gidiyor, sonra o order block'a geri dönüyor → o mum **propulsion** oluyor.

Video mumu ikiye bölüyor → **mean threshold**'a tam dokunuş → anında aşağı. Satış.

Ve **ikinci bir giriş:** fiyat o mumun **dibinin altına** kırılıyor, sonra dibe geri dönüyor → orada da satış. Videonun notu: *"Gövdeye kadar çıkmasına gerek yok — propulsion mumunda **mumun altı** bile son derece hassastır."*

#### İsim gerekçesi

*"Adını bu yüzden verdim: fiyatı **hızla ve aniden itiyor.** Anında geri bildirim, çok az drawdown, anında tepki — kısa vadeli traderın aradığı tam olarak bu."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural

1. Geçerli bir bullish order block var
2. Fiyat yükseliyor, sonra yeni bir **düşüş mumu** oluşuyor
3. O yeni mum, **eski order block'un aralığına değiyor**
4. Bu ikinci mum = propulsion block

**Giriş:** mumun tepesi
**Stop:** mean threshold'un altı
**Ayırt edici iddia:** propulsion block'ta mean threshold neredeyse hiç kırılmaz

#### Ölçmeye değer kısmı

*İki order block'un üst üste bindiği yerler, tek başına duran order block'lardan farklı davranıyor mu?*

Kodlaması kolay — mevcut order block tespitine örtüşme kontrolü eklemek yeterli. Karşılaştırma grubu doğal.

**Pratik yan ürün:** mean threshold kırılırsa hemen çık. Dar stop için mekanik bir gerekçe — ama senin ölçtüğün gibi dar stop maliyeti R cinsinden artırır. **Bu ay V2'de verilen 40 pip minimum eşiği tam bu problemi hafifletiyor** — ikisini birlikte kullan.

#### Zayıf yanlar

**"Yükseliş bağlamı" ön koşulu** tanımsız.

**Ardışık mumları birleştirme kuralı belirsiz:** örnekte üç düşüş mumu "tek order block" sayılıyor. Kaç mum, hangi koşulda? Bu, order block sınırlarını genişletiyor, "değme" ihtimalini artırıyor.

**"Bir iki pip aşabilir"** — tolerans tanımsız.

#### Yanlışlanamazlık

**"Mean threshold kırılırsa muhtemelen iyi bir işlem değildi."** Kurulumun başarısızlığı, kurulumun yokluğuna çevriliyor.

**Ve devamı daha ilginç:** "kırılırsa ters yöne dönmeyi düşünebilirsin." İki sonuç da kullanılabiliyor.

#### Ölçülebilirlik

**Kısmen.** Örtüşme tespiti mekanik ve tek başına ölçülebilir; bağlam ön koşulu ve mum birleştirme kuralı tanımsız ama ikisi de sabitlenebilir.
:::

---

## Video 9 — Vacuum block

::: ders
**DERS**

#### Tanım

> **"Bullish vacuum block, bir volatilite olayı sonucu fiyat hareketinde oluşan bir gap'tir. Gap, olaya doğrudan bağlı bir **likidite boşluğu** nedeniyle oluşur."**

**Ne yaratır:**
- **Tarım dışı istihdam** (non-farm payroll)
- **FOMC** ve faizle ilgili olaylar
- **Vadeli piyasalarda seans açılışı**
- Öngörülmemiş jeopolitik olaylar — takvimde bile olmayabilir

Videonun ölçek notu: *"Tarım dışı istihdamda bazen **30, 50, 60 pip** gap olur — sayı açıklanmadan hemen önceki fiyattan."*

#### Neden "vakum"

> *"Önceki mumun kapanışı ile sonraki mumun açılışı arasında **hiç işlem yapılmamıştır.** Merkez bankası seviyesinde hızlı bir yeniden fiyatlama olur ve **hiçbir traderın orada işlem yapması mümkün değildir.** Bu bir likidite vakumu yaratır."*

#### Boşluk nasıl ele alınır — kilit fikir

Videonun yaklaşımı: boşluk, **bir mummuş gibi** işlenir.

> *"Grafikte mum ya da çubuk olmasa bile, fiyatın orada bir **başlangıcı ve sonu** vardı. Onu bir **aralık** olarak görüyoruz: **gap'in tepesi ve dibi.** Ve bir mum gibi düşünürsen — **mean threshold'u, açılışı ve kapanışı** vardır."*

#### İki senaryo — boşluk kapanır mı

**Senaryo A — kısmi kapanış.** Gap'in **içinde** bir bullish order block varsa (gap'ten önceki son düşüş mumu, ya da ardışık iki düşüş mumunun **yükseği**), fiyat oraya kadar iner ve durur.

- **Giriş:** o order block
- **Stop:** en düşük düşüş mumunun altı
- **Sonuç:** küçük bir gap açık kalır → sonradan bir **fair value gap** olarak kullanılır

**Senaryo B — tam kapanış.** Fiyat, gap'ten önceki **son yükseliş mumunun kapanışına** kadar iner. Videonun ifadesi: *"**Vakum bloğuna tam dönüş.** Bu aralığın %100'ü doldu. Bu, fiyatın mükemmel teslimatı — artık tamamen dengelenmiş."*

- **Giriş:** o seviye
- **Stop:** en düşük dibin altı
- **Sonra:** *"Fiyat bir daha o seviyenin altına inmemeli"*

#### Günün saati kuralı

Video hangi senaryonun beklendiğini zamana bağlıyor:

| Gap ne zaman oluştu | Beklenti |
|---|---|
| **08:30 haber saati / erken New York** | Gün içinde **tam kapanır** |
| **10:00 – 11:00 sonrası / geç New York** | Kısmen açık kalır, sonradan kapanır |

Ve: *"Londra'da böyle bir gap **çok nadir** — genelde New York seansında, 08:30 haber ambargosu kalktığında olur."*

#### Tükeniş gap'i uyarısı

> *"Piyasa günlerce ya da haftalardır ralli yapıyorsa ve **sonra** bu gap oluşursa, bu bir **tükeniş gap'i (exhaustion gap)** olabilir — kapitülasyonun görsel hali, trendin son momentum parçası."*

#### Geçersizlik kuralı

> *"Gap tamamen kapandıktan ve fiyat yükseldikten sonra, **bir daha o kapanış seviyesinin altına inmemeli.** İnerse işlem şüphelidir — kâr al, ve düzeltmeye başlarsa **tüm pozisyonu kapat.**"*

#### Breakaway gap ile ilişkisi

> *"Özetle, vacuum block **breakaway gap'ten** başka bir şey değil. Ve **her gap kapanmaz.** Gap'in içinde bir order block varsa, fiyat sadece oraya kadar iner ve küçük bir boşluk bırakır — o da **fair value gap** olarak sınıflanır."*

#### Ayı tarafı

*"Aşağı gap olursa, bazı yükseliş mumlarıyla dolmasını bekler ve aynı şekilde kısa gideriz."*
:::

::: eleme
**ELEME**

Klasik teknik analizin en eski fikirlerinden biri, yeni bir isimle — ama tanım gerçekten temiz.

#### Yazılabilir tanım

Bir haber veya seans açılışı sonrası oluşan **gerçek fiyat boşluğu**: önceki mumun kapanışı ile sonraki mumun açılışı arasında **hiç işlem görmemiş** aralık.

Ve tanımın temiz yanı: boşluk, sanki bir mummuş gibi ele alınıyor — açılışı, kapanışı, orta noktası var.

**İddia:** fiyat geri dönüp bu boşluğu kapatma eğilimindedir.

#### FVG ile farkı — ve bu fark önemli

FVG'de o aralıkta **işlem gerçekleşmiştir**, sadece grafikte üst üste binmemiştir.
Vacuum block ise **gerçek bir işlem boşluğu.**

Ayrım hem kavramsal olarak doğru hem ölçülebilir bir fark yaratıyor. Mekanizması da farklı: gerçek boşlukta emir defterinde hiç likidite yoktur.

**Kripto için not:** 7/24 işlem gördüğü için spot piyasada gerçek gap neredeyse hiç oluşmaz. Bu kavram forex ve vadeli piyasalara özgü — **senin verinde uygulanabilirliği çok sınırlı.**

#### Klasik karşılığı

Hisse senedi analizinde **"gap fill"** olarak onlarca yıldır var, ve akademik olarak incelenmiş — kapanma oranları yüksek çıkıyor ama tek başına edge oluşturduğuna dair güçlü kanıt yok.

Ve video bunu **kendisi de kabul ediyor:** *"vacuum block, breakaway gap'ten başka bir şey değil."*

#### Yanlışlanamazlık — saf hali

**Günün saati kuralı:** New York erken saatte gap olursa gün içinde kapanır; geç saatte olursa açık kalır ve sonra kapanır.

**Her iki sonucu da açıklıyor.** Kapandıysa erkendi, kapanmadıysa geçti. Eşik verilmiyor.

**"Tam kapanma olur, ya da order block'ta durur."** İki senaryo, aralarında seçim kuralı yok.

**Bu videoda hiç grafik örneği yok** — sadece şematik çizimler. Dört ayda ilk kez, ve aslında dürüst bir tercih: geriye dönük örnek seçme sorunu ortadan kalkıyor.

#### Ölçülebilirlik

**Kısmen.** Gap tanımı tartışmasız — bu, ayın en tek anlamlı tanımı. Ama iki senaryo arasındaki seçim kuralı yok ve günün saati eşiği tanımsız.

**Kapatılabilir:** senaryo seçimini "gap'in içinde geçerli bir order block var mı" kuralına indirge, saat eşiğini sabitle. O zaman tamamen mekanik.

**Ama senin verinde uygulama alanı yok** — kripto spotta gerçek gap oluşmuyor.
:::

---

## Video 10 — Likidite boşlukları

::: ders
**DERS**

#### Tanım

> **"Likidite boşluğu, piyasanın bir tarafındaki likiditenin **geniş, tek yönlü aralıklarla ya da mumlarla** sunulduğu bir fiyat teslimat aralığıdır. Fiyat tipik olarak bu gözenekli aralığı — bu **karşı taraf likiditesi boşluğunu** — yeniden ziyaret etmek ister."*

#### Nasıl oluşur — üç aşama

1. **Denge:** fiyat küçük bir konsolidasyonda, dengede
2. **Yer değiştirme (displacement):** fiyat konsolidasyondan agresif biçimde uzaklaşır. *"Bunu ancak akıllı para yapabilir — konsolidasyondan çıkaracak kadar derin cebi olan tek taraf onlar."*
3. **Boşluk:** iki-üç mumluk hızlı hareket, arkasında dolmamış bir aralık bırakır

Videonun tanımı: *"Aşağı yönlü böyle bir aralık, **alım tarafı likiditesinin yokluğudur.** Hepsi satış tarafında oldu, o iniş sırasında **çok az alım** yapıldı."*

#### Zaman sınırı — videonun açık itirafı

Bu, videonun en önemli cümlesi:

> *"Bu boşlukların ne kadar sürede dolacağını bilmenin bir yolu var mı? En çok sorulan sorulardan biri bu. **Aylarca açık kalabilirler, gün içinde bir seansta kapanabilirler.** Hepsi, boşluğu gördüğün andaki piyasa koşullarına bağlı."*

#### Örneğin çözümü — 15-19 Aralık 2016, USD/JPY

Video aynı hareketi **dört zaman diliminde** çözüyor.

**1 dakikalık.** Konsolidasyondan agresif düşüş. Boşluk: **104.50 – 104.76.** *"Bu aralığın tamamına geri dönmesini bekliyoruz."*

**5 dakikalık.** Aynı hareket **tek bir büyük mum** olarak görünüyor. Aşağıda **eşit dipler** var → satış stopları.

**Ve sıralama:** önce satış stopları alınıyor (**104.05 – 104.10** civarı), sonra fiyat yukarı koşup boşluğu kapatıyor. Yükseliş: yaklaşık **75 pip.**

Videonun okuması: *"104.76'yı almak istiyorlarsa, önce **104.05 civarında alım emirleri toplayacaklar** — işi kendilerine değer kılmak için."*

**15 dakikalık — ve asıl ders burada.**

Fiyat **iki kez** 104.76'ya çıkıyor:
- **16 Aralık** — ilk dokunuş
- **19 Aralık** — ikinci dokunuş, ilkinin biraz üstüne çıkıyor

Videonun açıklaması: *"Neden ilk seferinde satıldı? Çünkü **daha fazla satış fiyatladılar** — orada daha büyük bir pozisyon kurdular. Kurumsal seviyede fiyatlama **kademeli** olmak zorunda, ilk geçişte olmaz."*

**Ve ikinci dokunuştan sonra bir gap.** İki düşüş mumu var; ikincisi **aşağı boşluklu** açılıyor:

| Kalem | Değer |
|---|---|
| Birinci mumun kapanışı | **104.72** |
| İkinci mumun açılışı | **104.70** |
| Gap | **2 pip** |

**Giriş:** o gap'e limit satış emri → **104.70.**

Videonun gözlemi: *"Gap'i sadece **gövde** kapatıyor. Fitil gövdenin içine giriyor ama gövdeler tam olarak kapatıyor. **Çok az drawdown**, ve anında aşağı."*

**Sonuç.** Fiyat **104.04**'teki satış stoplarına iniyor (kâr alma), sonra bir bacak daha aşağı: **103.65.**

#### Videonun ek notu

*"Noel haftasında canlı seans olmayacak. Beş ek önceden kaydedilmiş ders verilecek: likidite havuzu baskınları, fair value gap'ler, likidite boşlukları, order block'lar, mitigation block'lar ve reclaimed order block'lar."*
:::

::: eleme
**ELEME**

**Kritik bir itiraf var** ve o itiraf, fikri büyük ölçüde etkisiz kılıyor.

#### Yazılabilir tanım

Konsolidasyondan çıkan, tek yönlü, uzun gövdeli hareketin bıraktığı aralık.

**İddia:** fiyat geri dönüp o aralığı "dengeler."

#### Zaman sınırı yok — ve bunu kendisi söylüyor

> *"Ne kadar süreceğine dair kural yok. Aylarca açık kalabilir, gün içinde kapanabilir."*

Dürüst bir itiraf — ama kuralı ölçülemez kılıyor.

Düşün: yeterince beklersen **her boşluk kapanır.** Zaman sınırı olmayan bir "kapanır" iddiası yanlışlanamaz.

Ölçmek istersen sen bir pencere koymak zorundasın — ve o an ölçtüğün şey videonun iddiası değil, senin tanımın olur.

#### Ölçülebilir olan kısım

**Soru:** *boşluklar hangi zaman penceresinde, hangi oranda kapanıyor?*

Cevabı "%90'ı 20 bar içinde" ise bir şey var; "%50'si 200 bar içinde" ise rastgeleden farksız.

#### Örnek çözümlemesi — ayın en sorunlu hali

Video tek bir hareketi dört zaman diliminde çözümlüyor:

1. Boşluk tanımlanıyor
2. Fiyat ilk kez geliyor → "yeterli değil, daha fazla satış fiyatlanıyor"
3. İkinci kez geliyor → "tamam, şimdi kapandı"
4. İki mum arasında minik gap → "işte giriş burası"

Her adım sonradan açıklanıyor. "Kaç kez dokunması gerekir" sorusunun kuralı yok.

**Ve 1 dakikalık grafikte 26 pip'lik bir aralık** likidite boşluğu ilan ediliyor. Sonra **2 pip'lik** bir gap giriş noktası oluyor. Aynı ayın ikinci videosu "40 pip altı işlem alma" diyordu — kendi eşiğiyle çelişiyor.

#### Önemli bir ayrım

**Bu boşluk, forex spot piyasada gerçek bir gap değil.** İki mum arasında gövdelerin örtüşmemesi, o aralıkta işlem olmadığı anlamına gelmez — sadece fiyatın hızlı geçtiği anlamına gelir. Dokuzuncu videodaki vacuum block gerçek boşluktu; bu değil.

#### Ölçülebilirlik

**Ölçülemez** — sunulan haliyle. Zaman sınırı yok, dokunuş sayısı kuralı yok, minimum genişlik yok.

**Ölçülebilir hale getirmek için üç şey eklemen gerekiyor:** zaman penceresi, minimum genişlik (ATR katı), ve "kapandı" tanımı (ilk dokunuş mu, tam kapsama mı). Üçünü de sen tanımlarsın — yani ölçtüğün şey senin kuralın olur.
:::

---

## Video 11 — Likidite havuzu baskınları

::: ders
**DERS**

#### Tanım

> **"Likidite, piyasadaki alıcıların ve satıcıların açık ilgisidir; ve belirli fiyat seviyelerindeki ya da yakınındaki taraflarla daha da tanımlanabilir."**

#### Emirlerin konumu — temel harita

| Konum | Kim var |
|---|---|
| **Piyasa fiyatının üstü** | Alım stopları. **Akıllı para burada satar** |
| **Piyasa fiyatının altı** | Satış stopları. **Akıllı para burada alır** |
| **Piyasa fiyatında** | Perakende — *"fiyata çok tepkisel, genelde piyasadan alıp satıyorlar"* |

Videonun ilkesi: *"Bunu anladığında **her zaman primden satar, indirimden alırsın.** Bu, perakendeye öğretilenin tam tersi — onlara kırılımdan al, bull flag'ten al öğretiliyor."*

#### Rol yapma tekniği — pratik araç

> *"Grafiğe bak ve sor: **Şu an kısa olsaydım, koruyucu alım stopum nerede olurdu? Uzun olsaydım, koruyucu satış stopum nerede olurdu?** Bunu yaparsan, diğer traderların stoplarının nerede olduğunu iyi okursun."*

Ve: *"Perakende traderların **%90'ı** diğer traderların ne yaptığının farkında bile değil. Sadece kendilerini düşünüyorlar."*

#### Boğa senaryosunun tam kuralı

**Tanım:** mevcut fiyatın altındaki dip, uzun traderların **takip stoplarını** ve kırılım satıcılarının **satış stoplarını** barındırır.

**Geçerlilik:** dip ihlal edilir → satış stopları **piyasa emrine** dönüşür → satış tarafı likidite piyasaya enjekte edilir → akıllı para alıcılarıyla eşleşir.

**Giriş tekniği:** *"Fiyat o dibin altına inmeden **önce**, dibin **hemen altına ya da dibin kendisine** bir alım limit emri koy. **Bir banka traderı gibi satış stoplarını satın alıyorsun.**"*

#### Sayısal parametreler — ayın en somut katkısı

Bu, dört ayın ilk sayısal risk parametreleri:

| Parametre | Değer |
|---|---|
| **Beklenen süpürme derinliği** (15-30 dk grafikte) | Eski dibin **10 – 20 pip** altı |
| **İdeal giriş** | Dibin **10 – 20 pip altında** |
| **İdeal stop** | **30 – 50 pip** |
| **Geçersizlik eşiği** | **25 pip'ten fazla inerse** — bu bir stop koşusu değil, **gerçek bir düşüş** |

Videonun gerekçesi: *"Dibin üstünden ya da tam dibinden almaya çalışıyorsan, muhtemelen sadece **girişi kaçırmaktan korkuyorsun.** Piyasanın dibin altına inmesini beklemek daha iyi — 10-20 pip altında, 30-50 pip stopla, seni oradan çıkarmak için **gerçekten büyük** bir hareket gerekir."*

#### Çıkış

**Karşı likidite havuzuna:** yukarıdaki eşit tepelerin üstündeki alım stopları.

Videonun özeti: *"Satış stoplarını uzun pozisyon için biriktiriyorsun, uzunlarını alım tarafı likiditeye dağıtıyorsun. **Yaptığın şey, piyasa yapıcıyla aynı rol.**"*

#### Örneklerin çözümü — dört örnek, sayılarla

**1. USD/CAD.**
- Günlük grafikte **gövdelerin** altına bakılıyor; önceki günün mumunun dibi: **1.3102**
- 15 dakikalıkta o seviye çiziliyor; fiyat altına iniyor
- Gün içinde daha düşük bir dip: **1.3095**
- Beklenti: **1.3085 – 1.3075**'e iniş
- **Giriş: 1.3090** limit
- Gerçekleşen dip: **1.3083** → **7 pip drawdown**
- Hedef: yukarıdaki salınım tepesi **1.3360** → vuruldu

**2. Dolar endeksi.**
- Gün içi bir dip oluşuyor, üstte iki alım stopu katmanı var
- **Giriş: 102.85 ya da 102.80**
- Gerçekleşen dip: **102.69** → rahat dolum
- Fiyat yükseliyor, eşit tepelerin üstündeki alım stoplarını alıyor, sonra bir katman daha

**3. USD/CHF.**
- Bir dip işaretleniyor, altına iniş bekleniyor
- Üç hedef katmanı: **1.0125, 1.0130, 1.0145**
- Fiyat dibin altına iniyor, sonra üç katmanı da temizliyor

**4. GBP/USD.**
- Canlı seansta önceden söylenmiş: *"Açılış fiyatının altına inip kısa vadeli dibin altındaki satış stoplarını süpürecek"*
- Sonra **1.2475** ve saatlik grafikte **1.2520** hedefleri
- Fiyat tam olarak bunu yapıyor

Videonun notu: *"Bunları canlı seansta gerçekleşmeden önce konuştuk — 16 Aralık 2016 kaydına bakabilirsiniz."*
:::

::: eleme
**ELEME**

**Dört ayın ilk sayısal parametreleri** — seride gerçekten yeni bir şey.

#### Yazılabilir kural, sayılarla

| Parametre | Değer |
|---|---|
| Süpürme derinliği beklentisi | Eski dibin 10-20 pip altı (15-30dk) |
| Giriş | Limit emri, dibin 10-20 pip altında |
| Stop | 30-50 pip |
| **Geçersizlik eşiği** | **Dibin 25 pip altına inerse → stop avı değil, gerçek düşüş — çık** |

Son madde önemli: **ilk kez sweep'in ne zaman sweep olmadığına dair sayısal bir kriter var.**

Senin sweep ölçümünde bu kriter yoktu. `minWick` vardı ama derinlik **üst sınırı** yoktu — çok derin bir delme de sweep sayılıyordu.

#### Ölçmeye değer hipotez, çok net

*Sweep derinliğinin bir üst sınırı, sonucu iyileştiriyor mu?*

Sığ süpürmeler ile derin süpürmeler farklı davranıyor mu? Sığ olanlar dönüyor, derin olanlar devam ediyor mu?

**Senin harness'ında tek parametre eklemesi.** Kripto için pip yerine ATR katı.

**Ve bu, sweep sisteminde %33 isabet almanın olası bir açıklaması olabilir:** derin süpürmeler örneklemin içindeyse, onlar aslında trend başlangıçlarıydı ve sistemi aşağı çekiyordu.

#### İkinci ölçülebilir ayrıntı — giriş yeri

Video, **dibin altına limit emri** koymayı öneriyor; dibin üstünden ya da tam dibinden girmeyi *"kaçırma korkusu"* diye reddediyor. Bu da ölçülebilir: *aynı sweep sinyalinde, dibin 10 pip altından giriş ile dokunuşta giriş arasında ort. R farkı var mı?*

#### Rol yapma tekniği

*"Şu an short olsaydım stop'um nerede olurdu?"* — basit ama işlevsel bir sezgi aracı, ve ölçülebilir bir gözleme dayanıyor: emirler belirli seviyelerde kümelenir.

#### Yanlışlanamazlık

**Dört örnek, hepsi geriye dönük, hepsi çalışmış, ve dördü de aynı haftadan.**

**Geriye dönük gerekçelendirme:** "Cuma günü olduğu için yeni tepe beklemiyorduk."

**Hedef seçimi hâlâ kuralsız:** bir örnekte üç ayrı "katmanlı buy stop bölgesi" hedef gösteriliyor.

#### Ölçülebilirlik

**Ölçülebilir.** Süpürme derinlik bandı, giriş konumu, stop mesafesi ve geçersizlik eşiği — hepsi sayı. Tanımsız kalan tek şey hedef seçimi, ve o kenarda (aralığın diğer ucu ile sabitlenebilir).

**Ayın en doğrudan uygulanabilir kuralı.**
:::

---

## Video 12 — Fair value gap, tam tanım

::: ders
**DERS**

#### Tanım

> **"Fair value gap, piyasanın **bir tarafındaki** likiditenin sunulduğu bir fiyat teslimat aralığıdır; ve tipik olarak alt zaman dilimlerinde aynı fiyat aralığında bir **likidite boşluğuyla** teyit edilir."**

Ve bir uç durum: *"Fiyat gerçekten gap yapıp gerçek bir işlem vakumu yaratabilir — o zaman gerçek bir fiyat gap'i oluşur."*

#### Hesaplanışı — üç mum, adım adım

Bu, dört ayın en net aritmetik tanımı. Düşüş yönü için:

**1. Orta mum:** büyük düşüş mumu — boşluğu yaratan.

**2. Sol mum:** ondan önceki mum. Videonun sorusu: bu mumda **alım tarafı likidite sunulmuş mu?**
- Mumun **dibinden kapanışına** kadar olan aralıkta fiyat yukarı hareket etmiş
- → **o aralık dışarıda kalır**
- Kullanılacak referans: sol mumun **dibi**

**3. Sağ mum:** orta mumdan sonraki mum.
- Mumun **açılışından tepesine** kadar alım tarafı likidite sunulmuş
- → **o aralık da dışarıda kalır**
- Kullanılacak referans: sağ mumun **tepesi**

**4. FVG = sol mumun dibi ile sağ mumun tepesi arasında kalan aralık.**

Videonun ifadesi: *"O düşüş mumunda **sadece satış tarafı** sunuldu. **Boya fırçası** benzetmesini hatırla — bu aralık gözenekli kaldı."*

#### Fraktal not — kavram karışıklığını çözen cümle

> *"Baktığın zaman diliminde gap oluşur. Daha küçük zaman dilimlerine indiğinde, **aynı yer çoğu zaman bir likidite boşluğu olarak görünür** — o açık aralığı oluşturan birden fazla mum vardır."*

Yani: **FVG ve likidite boşluğu, farklı ölçeklerde aynı şey.**

#### Örneğin çözümü — EUR/USD günlük

| Kalem | Değer |
|---|---|
| FVG üst sınırı | **1.0500** |
| FVG alt sınırı | **1.0475** |
| Genişlik | **~25 pip** |

Sol mumun dibi ile sağ mumun tepesi arasındaki bu aralık, günlük grafikte açık kalmış.

**4 saatlik grafik.** Aşağıda bir dip işaretleniyor. Fiyat onun altına iniyor → **turtle soup / sahte kırılım.** Videonun okuması: *"Neden yukarı gidip gap'i kapatmasını bekliyoruz? Çünkü **satış tarafı likidite zaten alındı** — eski dibin altına inerek."*

Yukarıda **eşit tepeler** var (alım stopları), ve onların hemen üstünde **FVG.**

Sonuç: fiyat yukarı gidiyor, alım stoplarını alıyor, FVG'yi kapatıyor. **100 pipin üstü, iki günde.**

Videonun bağlam notu: *"2016 sonu, tatiller — işlem aralıkta kalacak. Aralıkta sıkışmış bir piyasada **tam olarak bu tarzda işlem yapmalısın:** stopları ve fair value gap'leri ara."*

#### İkinci bölüm — kavramların üst üste binmesi

Video sonra **5 dakikalık** grafiğe iniyor ve aynı 104.75 seviyesini inceliyor. Amacı: **FVG, likidite boşluğu, likidite havuzu ve gap'in aynı anda nasıl çalıştığını** göstermek.

**15 dakikalıkta gap girişi.**

| Kalem | Değer |
|---|---|
| İlk dokunuş | 104.75 (FVG kapanışı) |
| İkinci dokunuş | **104.78** — önceki tepe 104.77'ydi, **1 pip** aşım |
| Sonraki mumun kapanışı | **104.72** |
| Ondan sonraki mumun açılışı | **104.70** |
| **Giriş** | **104.70** limit satış |

Videonun gözlemi: *"Bir sonraki yükseliş mumunun **kapanışı 104.72** — tam olarak o mumun gövde tepesi. Fitil gövdenin içine giriyor ama **gövdeler gap'i mükemmel kapatıyor.**"*

**Mikro seviyede zincir.** Video sonra mum mum ilerliyor:

| Adım | Sayı |
|---|---|
| Bir mumun tepesi | 104.78, kapanış 104.75 |
| Sonraki mumun açılışı | 104.74, tepesi 104.76 → **2 pip alım tarafı sunuldu** |
| Sonra aşağı gap | Açılış 104.63, tepe 104.74 |
| Bir sonraki referans | **104.55** — bir mumun dibinden kapanışına kadar alım sunulmuş |
| **İkinci giriş** | **104.55 ya da 104.50** |
| Hedef | **104.15 – 104.10** satış stopları |

Videonun ifadesi: *"Buradan buraya tüm hareket **verimli fiyatlandı** — hem alım hem satış tarafı sunuldu. Bu dibi kırdığımızda artık **tamamen satış tarafındayız.** Fiyat 104.55'e iki kez dönüyor, sat ve **alttaki satış stoplarını bekle.**"*

Sonuç: **103.65**'e kadar.
:::

::: eleme
**ELEME**

FVG **ilk kez düzgün tanımlanıyor** — birinci ayda verilen tanım eksikti.

#### Yazılabilir tanım

Üç mumluk yapı. Önemli olan, **hangi aralığın açık kaldığının** hesaplanma biçimi:

- **Sol mum:** dibinden kapanışına kadar yukarı hareket olmuş
- **Orta mum:** büyük düşüş mumu
- **Sağ mum:** açılışından tepesine kadar yukarı hareket olmuş

**FVG = sol mumun dibi ile sağ mumun tepesi arasındaki boşluk.**

**Ve ikinci bir netlik:** aynı yapı, alt zaman diliminde bakıldığında **likidite boşluğu** olarak görünür. Yani ikisi, farklı ölçeklerde aynı şey. Dört ayın kavram karışıklığını sadeleştiriyor.

#### Ölçülebilirlik

**Ölçülebilir — ölçek filtresiyle.** Tanım tamamen mekanik: üç mum, dört fiyat noktası, aritmetik.

**Ölçülebilir soru:** *FVG'ler hangi oranda, hangi zaman penceresinde doluyor?* Karşılaştırma grubu kolay: rastgele seçilmiş aynı genişlikte aralıklar.

#### Ama bir sorun büyüyor: ölçek

Videonun ikinci yarısı 5 dakikalık grafikte **2 pip'lik** boşluklardan bahsediyor ve orada giriş öneriyor.

Tipik EUR/USD spread'i 0.5-1 pip; kayma hesaba katılınca işlem maliyeti sinyalin büyüklüğüne yakın.

**Senin kendi ölçümünle doğrudan çelişiyor:** gapsiz stopların −1.088R çıkması, maliyetin R cinsinden ne kadar yer kapladığını göstermişti. 2 piplik bir sinyalde maliyet, sinyalin **tamamını** yiyebilir.

**Ve ayın kendi kuralıyla da çelişiyor:** V2, *"40 pip altında işlem alma"* diyordu. On video sonra 2 piplik bir gap giriş noktası oluyor.

#### Yanlışlanamazlık — saf hali

Videonun ikinci yarısı tek bir günü **mum mum** çözümlüyor ve her dönüşü "mükemmel teslimat" olarak açıklıyor.

**Yeterince küçük ölçeğe inersen, her fiyat noktasının yakınında bir boşluk vardır.** İki mum arasında 2 pip fark bulmak herhangi bir grafikte kolay.

Araç sonsuz sayıda aday üretiyor, ve hangisinin seçileceğinin kuralı yok.

**"Mükemmel teslimat" tanımsız:** 1 pip yaklaşma da "mükemmel", 3 pip aşma da.

#### Not

**Ölçmek istersen ölçek filtresi şart** — minimum FVG genişliği, örneğin ATR'nin belirli bir katı. Senin `min_width_atr` filtren aynı işi görüyordu.

Ve **ayın kendi 40 pip kuralını FVG'ye de uygula** — video uygulamıyor ama tutarlılık bunu gerektiriyor.
:::

---

## Video 13 — Momentum ayrışması

::: ders
**DERS**

#### Videonun gösterge tutumu

> *"Göstergeler hakkında pek ders vermem — matematiksel türevlerdir ve **geçmişi ölçerler.** Yeni traderken çok kullandım ve onlara çok yanlış umut bağladım."*

Ama bir kullanım alanı bırakıyor: *"**Perakende zihniyetli traderların ne düşündüğünü** anlamak için."*

#### İki ayrışma türü — doğru tanımlar

**Tip 1 (klasik):**
- **Ayı:** fiyat daha yüksek tepe yapar, gösterge yapmaz
- **Boğa:** fiyat daha düşük dip yapar, gösterge yapmaz

**Tip 2 (gizli / trend takip):**
- **Boğa:** fiyat **daha yüksek dip** yapar, gösterge **daha düşük dip** yapar
- Ayı simetriği

Video kaynak veriyor: *"Buna trend takip ayrışması denir. Kim keşfetti diye pek konuşulmaz ama **Nick Van Nice** onu trading topluluğuna açan kişidir. **George Lane** çok kredi alıyor — ve haksız yere: stochastic'in yaratıcısı da değil, ayrışmanın mucidi de."*

#### Retail'in dört durumu — ve videonun eklediği beşinci

*"Göstergeci mantığında dört durum var: aşırı alım mıyız, aşırı satım mıyız; aşırı alımdaysak ayı ayrışması var mı, aşırı satımdaysak boğa ayrışması var mı? Bu kadar kolay olsaydı herkes para kazanırdı."*

Ve videonun eklediği: *"**Beşinci bir durum var: gerçekten işlem yapılacak bir zaman mı?** Bazen piyasalar konsolidasyonda kalır ve hiçbir şey yapmamalısın."*

#### Ana kural — tip 1 ayrışmayı ters oku

**Prosedür:**
1. Fiyatta bir **tip 1 ayrışma** gör (perakende bunu satış sinyali sayacak)
2. Üst zaman dilimi **yükseliş** gösteriyorsa, bunu **tuzak** olarak oku
3. Fiyatın aşağı çekilmesini bekle — ama **belirli bir yere kadar**
4. O yer: bir **bullish order block** ya da eşit diplerin altındaki **satış stopları**
5. Orada **al**

**Ve somut, ölçülebilir bir asimetri:**

> *"**Göstergenin** önceki dibinin altına inmesini bekle. Ama **fiyatın** o dibin altına inmesini beklemiyoruz. Bu, **tip 2 gizli ayrışma** — trend takip niteliğinde."*

#### Örnek 1 — USD/CAD, saatlik, 10-11 Kasım

Fiyat biraz daha yüksek tepe yapıyor, stochastic yapmıyor → tip 1 ayı ayrışması. Perakende satacak.

Video ne yapıyor: *"Yukarıda **eşit tepeler** var ve o seviyelere çok yakınız — o stopları **almadan** bırakmazlar."*

Fiyat aşağı iniyor:
- Aşağıda **eşit dipler** var → satış stopları temizleniyor
- Bir **bullish order block**'a değiyor
- Bir aralığın **mean threshold**'una değiyor

Sonra: konsolidasyon, ardından yukarı ralli — ve **tip 2 gizli boğa ayrışması** oluşuyor (fiyat daha yüksek dip, stochastic daha düşük dip).

Videonun notu: *"Aşırı satım olması **gerekmiyor.** Sadece momentumun aşağı dönüp satış stoplarını almasını izliyoruz. Sonra piyasa **gerçekten gitmek istediği yere** koşuyor — göstergenin gösterdiği yere değil."*

#### Örnek 2 — USD/CHF, saatlik, sayılarla

Fiyat daha yüksek tepe, stochastic yapmıyor → tip 1 ayı ayrışması. Perakende iki hedef bekliyor: iki eski dip (klasik destek).

Video ne yapıyor:

| Kalem | Değer |
|---|---|
| Referans | Yükseliş hareketinden önceki **son düşüş mumu** |
| Beklenen dip | **0.9640 – 0.9645** |
| **Kesin kural** | *"O mumun gövdesinin **ortasının altına inmesini beklemiyoruz**"* |
| **Giriş** | **0.9645** |
| **Hedef** | **0.9708** |
| Yukarı hedefler | **0.9728** ve **0.9760** (eşit tepeler) |

**Gövde mi fitil mi sorusu — video kendisi soruyor ve cevaplıyor:**

> *"'Michael, tepeyi mi kullanayım gövdeyi mi?' **Gövdeyi kullan.** Neden? Buradaki koşul yüzünden: bir fitil var ve fiyat oradan zaten birkaç kez geçmiş. Ama **buradan** sadece yukarı hareket olmuş."*

**Sonuç:** o mumun dibi **0.9645** — tam dokunuş, sert tepki. Fiyat iki hedefi de geçiyor.

Ve devamı: video aynı grafikte **üç ardışık tip 1 ayı ayrışması** gösteriyor, üçünde de *"bu da tuzak"* diyor — her seferinde tip 2 gizli ayrışma oluşuyor ve fiyat yükseliyor. Dördüncüde nihayet satış geliyor.

#### Kapanış tavsiyesi

*"Öğrettiklerimi öğreniyorsan ve hâlâ gösterge açmak istiyorsan, **sadece bu temelle** aç: sana **perakende zihinlerin ne düşündüğünü** göstersin. Ve arka planda kurumsal emir akışının **tersini** gösterdiğini de görebiliyorsan, muhtemelen iyi bir işlemin var."*
:::

::: eleme
**ELEME**

Üçüncü ayın trend çizgisi videosunun aynı yapıda tekrarı — bu kez göstergeler için.

#### Yazılabilir kural

**Tip 1 ayrışma (klasik):** fiyat daha yüksek tepe yapar, gösterge yapmaz → perakende satış sinyali sayar.

**Tip 2 (gizli / trend takip):** fiyat daha yüksek dip yapar, gösterge daha düşük dip yapar → trend devam sinyali.

Kural: üst zaman dilimi yükseliş gösteriyorsa, **tip 1 ayrışmayı satış değil tuzak olarak oku.**

Ve somut bir beklenti: **gösterge önceki dibinin altına iner, ama fiyat inmez.** Ölçülebilir bir asimetri, ve tamamen mekanik.

#### Doğru olan eleştiri

- Göstergeler **geçmiş fiyatın matematiksel dönüşümü** — yeni bilgi taşımıyorlar
- Fiyat göstergeden habersiz
- Aşırı alım/satım + ayrışma dört durumu, tek başına karar için yetersiz
- **Beşinci durum:** bazen işlem yapılmamalı

Bu son madde, seride tekrar eden en sağlam disiplin fikri.

**Ve kaynak atfı dürüst:** Nick Van Nice / George Lane düzeltmesi doğru ve kaydedilmeli.

Not: bu doğru kısımlar **senin de bildiğin şeyler** — ATR/BB konuşmasında aynı noktaya gelmiştik.

#### Ve aynı çelişki, dördüncü kez

Trend çizgileri "öznel olduğu için" reddedilmişti. Burada göstergeler "geçmişin dönüşümü olduğu için" reddediliyor.

**Ama order block da geçmişin bir seçimi.** Hangi mum, hangi zaman dilimi — bunların hiçbiri fiyatın "farkında olduğu" şeyler değil.

Ve bu videoda tam olarak o oluyor: gösterge reddediliyor, sonra "fitil mi gövde mi" sorusu **duruma göre** cevaplanıyor: *"burada gövdeyi kullan, çünkü buradaki koşullar öyle."* Koşulun ne olduğu tanımlanmıyor.

#### Yanlışlanamazlık

**Örnekte tam olarak beklenen sorun görünüyor:** video üç ardışık tip 1 ayrışma gösteriyor, üçünde de "bu da tuzak" diyor — ve dördüncüsünde satış geliyor.

Kural "ayrışma tuzaktır" ama bazen değildir, ve hangisinin gerçek olduğunun kuralı yok. Video bunu kendisi gösteriyor ama sorun olarak adlandırmıyor.

**"Bu hareketi boş ver, şimdi onu konuşmuyoruz."** Uyumsuz kısımlar açıkça atlanıyor.

#### Ölçülebilirlik

**Kısmen.** Ayrışma tespiti mekanik (stochastic standart, pivot karşılaştırması standart), giriş ve hedef tanımlı. Yön ön koşulu tanımsız ama kenarda — Kasım V4 ile doldurulabilir.

#### Not

**Ölçmeye değer hipotez:** *tip 1 ayrışmalar, üst zaman dilimi yönüne göre ayrıştırıldığında ters mi çalışıyor?* Stochastic standart, ayrışma tespiti mekanik.

**Ama "karşı taraf düşüncesi" fikrinin sınırını da not et:** dört kez tekrarlandı — sahte bayrak (2. ay), trend çizgisi ve formasyon (3. ay), gösterge (bu ay). Bu, tek başına bir sistem değil, bir **filtre fikri.** Ve filtreler işlem sayısını azaltır.
:::

---

## Video 14 — Çifte tepe ve dip

::: ders
**DERS**

#### Videonun kendi keşif anlatısı

> *"Trader olarak yetişirken kurumsal ve perakende işlemden öğrendiklerimi harmanladım. Tepelerin üstünde ve diplerin altında **stop koşuları** olacağını biliyordum, ve fiyat aksiyonunun her yerinde **ölçülü hareket (measured move)** fikirleri olduğunu fark ettim."*

#### Ana kural — projeksiyon

Bu, dört ayın en mekanik prosedürü. Sıfır seçim noktası:

**Çifte tepe için:**
1. İki eşit (ya da neredeyse eşit) tepe bul
2. Aralarındaki **dibi** bul
3. **Aralık = tepe − dip**
4. Bu aralığı **tepeden yukarı yansıt** → hedef seviye

**Çifte dip için:** tam simetriği — aralığı dipten aşağı yansıt.

#### Kilit iddia

> *"Perakende bunu **direnç** sanıyor ve satış yapıyor, koruyucu alım stopunu tepelerin üstüne koyuyor. Ama **algoritma o kadar yukarı gidecek** — çünkü içerideki aralığı hatırlıyor."*

Ve: *"**Çifte tepe ve dipleri asla güvenilir bulmayız**, çünkü piyasa yapıcı ve bankalar arası algoritma o eski tepe ve diplerin **içinden geçip** likiditeyi arar."*

#### Aralığın uçları vs ortası

> *"**Aralığın uçları, yüksek olasılıklı işlemin bulunduğu yerdir. Ortası düşük olasılıklıdır.** Çifte tepe ve dipleri kullandığımızda, mevcut işlem aralığının **uçlarını** çerçeveliyoruz."*

#### Zaman dilimine göre süpürme derinliği

Video net bir ayrım yapıyor:

| Zaman dilimi | Beklenen süpürme |
|---|---|
| **Gün içi (15 dk)** | Eski tepenin/dibin **10 – 20 pip** ötesi |
| **Saatlik ve üstü** | 10-20 pip kademesi **kullanılamaz** — projeksiyon seviyesi kullanılır |

Yani: küçük ölçekte sabit pip kademesi, büyük ölçekte measured move projeksiyonu.

#### Örnek 1 — çifte tepe, tam kurulum

**Bağlam haritalanıyor:**
- Yukarıda bir **likidite boşluğu**: bir mumun açılışı **0.7742**, bir başkasının tepesi **0.7700** → aradaki aralık
- Aşağıda bir **fair value gap**
- Ve aşağıda bir **bullish order block** — yükseliş hareketinden önceki son düşüş mumunun açılışı

**Perakendenin planı:** çifte tepe = direnç → sat, stop tepelerin üstüne, hedef aşağıdaki eski dip.

**Videonun planı — iki aşamalı:**

1. **Önce aşağı.** Fiyat düşecek, **fair value gap**'i kapatacak ve muhtemelen **bullish order block**'a değecek. Sebep: *"Geride kısa kalanların koruyucu alım stoplarını **aşağı çekmelerini** istiyoruz."*
2. **Sonra yukarı.** Çifte tepenin üstündeki alım stopları temizlenecek, ve fiyat yukarıdaki **likidite boşluğuna** kadar gidecek.

**Gerçekleşen:** fiyat bullish order block'a iniyor, dönüyor, çifte tepeyi patlatıyor, ve **0.7742**'ye tam dokunuyor — o mumun tepesi 0.7742, hedeflenen mumun açılışı 0.7742. Sonra aşağıdaki likiditeye koşu.

#### Örnek 2 — projeksiyon hesabı

Fiyat bir **bullish order block**'ta (yükseliş hareketinden önceki son düşüş mumu). Yukarıda bir **çifte tepe.**

| Adım | İşlem |
|---|---|
| Tepe − iki tepe arasındaki dip | = aralık |
| Aralığı tepeden yukarı yansıt | **0.7445** |
| Gerçekleşen tepe | **0.7446** |
| Fark | **1 pip** |

Ve videonun eklediği detay: *"Tam o seviyede muhtemelen bir momentum ayrışması da var."* Gösterge açılıyor — gerçekten tip 1 ayı ayrışması var. Perakende orada satacak; algoritma ise 0.7445'e gidiyor.

#### Örnek 3 — çifte dip

Aynı prosedür ters: tepeden dibe olan aralık, dipten aşağı yansıtılıyor. Fiyat oraya iniyor, sonra **çifte tepe referans noktasına** kadar geri dönüyor.

#### Ölçek örneği

Bir saatlik grafikte aralık **48 pip** — yani projeksiyon 48 pip ötede. *"Saatlik grafikte 10-20 pip kademesi kullanamazsın; algoritma bu referans noktalarına **çifte tepe/dip projeksiyonuna** göre uzanır."*

#### Zaman uyarısı

> *"Çifte tepe burada oluştu ve projeksiyon seviyesi belirlendi. Fiyat **uzun süre** oraya gitmedi — ta ki sonunda çözene kadar. Bu yüzden Eylül'de neye odaklanman gerektiğini öğrettim: **bu kadar temiz seviyeleri işaretle.** Bugün bir işlemin olmayabilir ama **sonra** o bilgi sana içgörü verir."*

#### Ödev

*"Grafiklerini tara. Bu olgunun kaç kez tekrarlandığına şaşıracaksın — ve **tüm zaman dilimlerinde** var. 15 dakikada ya da saatlikte sınırlı kalma."*
:::

::: eleme
**ELEME**

**Dört ayın en spesifik ölçülebilir iddiası.**

#### Yazılabilir kural

Prosedür tamamen mekanik, hiçbir seçim noktası yok:

1. İki eşit tepe bul
2. Aralarındaki **dibi** bul
3. **Aralık = tepe − dip**
4. Bu aralığı tepeden **yukarı yansıt** → hedef seviye

Çifte dip için tam simetriği.

**İddia:** fiyat çifte tepeyi kırar, ve klasik traderların beklediği yerde durmaz — projeksiyon seviyesine kadar gider.

Bu, klasik **measured move** fikrinin aynısı, "tuzak" çerçevesine oturtulmuş: çifte tepe direnç değil, hedef.

#### Neden ölçülebilirlik açısından güçlü

| Kurulum | Seçim noktası |
|---|---|
| Order block | Hangi mum, hangi zaman dilimi |
| FVG | Hangi boşluk (küçük ölçekte sonsuz aday) |
| Reclaimed block | Dönüş noktası bilgisi gerekiyor |
| **Çifte tepe projeksiyonu** | **Yok — aritmetik** |

Tepe, dip, çıkarma, toplama. Ve hedef **tek bir sayı.**

**Yanlışlanabilirlik açısından dört ayın en iyisi.** Fiyat ya gitti ya gitmedi.

#### İkinci ölçülebilir ayrıntı — ölçeğe göre hedef

Video net bir ayrım yapıyor: **gün içi 10-20 pip kademesi, üst zaman diliminde projeksiyon.** Bu, "hedefi nereye koyacağım" sorusuna ölçeğe duyarlı bir cevap — ve ikisi ayrı ayrı test edilebilir.

#### Ölçmeye değer hipotez

*Çifte tepe kırıldıktan sonra, fiyat measured move seviyesine ne oranda ulaşıyor?*

Karşılaştırma grubu kolay: aynı büyüklükte rastgele bir projeksiyon.

**Kripto için doğrudan uygulanabilir** — pip yerine yüzde ya da ATR katı.

#### Ama bir sorun: "1 pip'e kadar tuttu"

Video iki örnekte "hedefe 1 pip farkla gitti" diyor. Bu, iddiayı **zayıflatıyor:**

Bir projeksiyon seviyesi, fiyatın **o civara** gelmesiyle tutmuş sayılır — tam üstüne gelmesi tesadüftür. "1 pip'e kadar" vurgusu, seçilmiş örneklerin işareti.

Doğru ölçüm: bir tolerans bandı tanımla (±%0.2), ve **tüm** çifte tepelerde ulaşma oranını say.

#### Yanlışlanamazlık

**"Zaman alabilir ama eninde sonunda ulaşır."** Video bunu açıkça söylüyor. Zaman sınırı olmayan bir hedef iddiası, onuncu videodaki likidite boşluğuyla aynı sorunu taşıyor.

**"Algoritma bu referans noktalarını biliyor."** Mekanizma anlatısı ölçülemez ve gereksiz — kural ondan bağımsız çalışıyor.

#### Ölçülebilirlik

**Ölçülebilir.** Sıfır seçim noktası, aritmetik hedef, doğal karşılaştırma grubu. Tek eksik zaman penceresi ve tolerans bandı — ikisi de sen tanımlarsın ve ikisi de kenarda.

**Dört ayın en yanlışlanabilir kuralı.**
:::

---

# BÖLÜM II — Dördüncü ayın bütünü

## Ölçülebilirlik tablosu

| Video | Kavram | Değerlendirme |
|---|---|---|
| V1 | Faiz üçlüsü | **Ölçülebilir** — fiyat dışı veri, en özgün |
| V2 | İç/dış aralık likiditesi + 40 pip eşiği | **Kısmen** — kavramsal sadeleştirme, aralık başlangıcı tanımsız |
| V3 | Order block (tam tanım) | **Kısmen** — "destek yakınlığı" tanımsız |
| V4 | Mitigation block | **Ölçülebilir** — yapı kayması mekanik |
| V5 | Breaker | **Ölçülebilir** — en temiz tanım |
| V6 | Rejection block | **Ölçülebilir** — sweep'in gövde bazlı varyantı |
| V7 | Reclaimed block | **Ölçülemez** — dönüş noktası girdisi gerekiyor |
| V8 | Propulsion block | **Kısmen** — örtüşme mekanik, bağlam değil |
| V9 | Vacuum block | **Kısmen** — temiz ama kripto için geçersiz |
| V10 | Likidite boşluğu | **Ölçülemez** — zaman sınırı yok |
| V11 | Sweep derinlik eşiği | **Ölçülebilir** — ilk sayısal kriter |
| V12 | FVG (tam tanım) | **Ölçülebilir** — ölçek filtresiyle |
| V13 | Momentum ayrışması | **Kısmen** — yön ön koşulu tanımsız |
| V14 | Çifte tepe projeksiyonu | **Ölçülebilir** — sıfır seçim noktası |

**Ölçülebilir: 7 · Kısmen: 5 · Ölçülemez: 2**

Bu, dört ayın en yüksek oranı.

## Order block ailesi — tek tabloda

Ayın asıl çıktısı bu. Yedi varyant, ve aralarındaki fark **ön koşulda:**

| Varyant | Ön koşul | Nerede | Mekanik mi? |
|---|---|---|---|
| **Order block** | "Destek seviyesine yakın" | İmpuls öncesi son ters mum | Hayır |
| **Breaker** | Stop süpürmesi **+** yapı kayması | Kırılan yapı noktasındaki mum | **Evet** |
| **Mitigation block** | Yapı kayması | Kırılan dibin içindeki mum | **Evet** |
| **Rejection block** | Uzun fitil | Fitil ucu ↔ gövde tepesi arası | **Evet** (eşik hariç) |
| **Propulsion block** | Bir order block'a değme | İkinci order block | **Evet** |
| **Reclaimed block** | "Eğrinin sağ tarafı" | Düşüş sırasındaki sıçrama mumu | **Hayır** |
| **Vacuum block** | Volatilite olayı | Gerçek gap aralığı | **Evet** (kriptoda yok) |

**Ve buradan çıkan tek cümlelik ders:** varyantları birbirinden ayıran şey mum tanımı değil, **ön koşul.** Ön koşul mekanikse kural ölçülebilir; değilse değil.

## Ayın üç yapısal özelliği

**1. Tam tanımlar geldi.** Üç ayın dağınık kavramları (order block, FVG, mitigation, breaker) burada eksiksiz yazıldı. Yeni bilgi az, ama ölçülebilirlik ilk kez mümkün.

**2. İlk sayısal eşikler geldi.** Üç tane, ve üçü de gerçekten kullanışlı:

| Eşik | Nerede | Ne işe yarıyor |
|---|---|---|
| **Gövde yüksekliğinin 2-3 katı** | V3 | Order block'un geçerlilik kriteri |
| **40 pip minimum** (75-80 ideal) | V2 | Kurulumun büyüklük kapısı |
| **10-20 pip süpürme, 25 pip üstü geçersiz** | V11 | Sweep derinlik bandı |

**3. Ölçek küçüldü — ve kendi eşiğiyle çelişti.** V2 "40 pip altında işlem alma" diyor; V10 ve V12 5 dakikalık grafikte 2 piplik boşluklardan giriş öneriyor. Maliyet açısından bu, senin ölçtüğün −1.088R sorununu ciddi biçimde büyütür.

## Tekrarlanan sorunlar

**Yön ön koşulu, dört ayda kaçıncı kez tanımsız.** V3, V6, V8, V13 — hepsi "üst zaman dilimi şu yönü gösteriyorsa" ile başlıyor. Yalnızca üçüncü ayın dördüncü videosu (aylık aralık kuralı) buna mekanik cevap veriyordu, ve **bu ay ondan hiç yararlanılmıyor.**

**Seviye taşıma kuralı** (V3, V4) örneklemi belirsizleştiriyor: her yeni mum bir aday olunca, geriye dönük bakışta hep bir seviye bulunur.

**Zaman sınırsızlık** (V4, V5, V10, V14): "eninde sonunda olur" tipi iddialar yanlışlanamaz.

**"Gövde kurumsal, fitil perakende"** — beşinci kez, ve V6'da tanımın temeli haline gelmiş. Yanlış bir iddia, ama üstüne kurulan kural yine de ölçülebilir.

**Tolerans tanımsızlığı** — V3 "50 pip delme normal", V4 "biraz aştı ama gövdenin içinde", V8 "bir iki pip aşabilir", V14 "1 pip'e kadar tuttu". Dört farklı yerde dört farklı tolerans, hiçbiri tanımlı değil.

**Tek örnek, geriye dönük** — on dört videoda değişmeyen tek şey. V9 istisna: hiç grafik örneği yok, sadece şema.

## Ayın iç çelişkileri

| Konu | Bir yerde | Başka yerde |
|---|---|---|
| Minimum kurulum büyüklüğü | V2: 40 pip altı işlem yok | V10, V12: 2 piplik gap girişi |
| Mitigation gövdesi | V4: "gövde asla ihlal edilmez" | V4: "biraz aştı ama sorun değil" |
| Gösterge kullanımı | V13: göstergeler geçmişin dönüşümü, reddedilir | V14: momentum ayrışması hedef doğrulaması için kullanılıyor |
| Süpürme derinliği | V11: 25 pip üstü geçersiz | V3: aylıkta 50 pip delme normal |

Dördüncüsü aslında çelişki değil — zaman dilimi farkı. Ama video bunu açıklamıyor, ve bir kural olarak yazılmadığı sürece keyfi görünüyor.

---

# BÖLÜM III — Değerlendirme

## Ölçmeye değer yedi fikir, öncelik sırasıyla

**1. Breaker (V5).** Dört ayın en temiz tanımı, tanımsız bileşen yok, senin harness'ında neredeyse hazır. Hipotez: *stop süpürmesi + yapı kayması, tek başına sweep'ten farklı sonuç veriyor mu?*

**2. Sweep derinlik eşiği (V11).** Tek parametre eklemesi, ve senin mevcut ölçümünü doğrudan iyileştirebilir. Hipotez: *derinlik üst sınırı sonucu iyileştiriyor mu?*

**3. Rejection block (V6).** Sweep'in gövde bazlı varyantı — `high` yerine `max(open, close)`. Örneklem sorununu hafifletebilir.

**4. Çifte tepe projeksiyonu (V14).** Sıfır seçim noktası, hedef tek bir sayı, kripto için doğrudan uygulanabilir. Tolerans bandı ve zaman penceresi sen tanımlarsın.

**5. Mitigation block (V4).** Yapı kayması ön koşulu mekanik, mekanizması davranışsal finansta belgelenmiş.

**6. FVG doluluk oranı (V12).** Tanım tartışmasız, ama **ölçek filtresi şart.**

**7. Faiz üçlüsü / çoklu seri ayrışması (V1).** Fiyat dışı veri — kripto analoğu: BTC/ETH/altcoin, ya da spot/perp/funding.

**Ve bunların üstüne V2'nin 40 pip eşiğini bir kapı olarak koy** — kendi başına bir hipotez değil, ama diğer altısının maliyet tarafını düzelten bir filtre.

## Ölçmeye değmeyen ikisi

**Reclaimed block (V7)** — ön koşulu, ölçmek istediğin şeyin kendisi.

**Likidite boşluğu, zaman sınırı olmadan (V10)** — sınırsız bir "kapanır" iddiası yanlışlanamaz.

## Dört ayın toplamı

| Ay | Karakter | Ölçülebilir / Kısmen / Ölçülemez |
|---|---|---|
| **1. ay** | Kurulum kavramları — sekiz tanım, yedisinin klasik karşılığı var | 6 / 2 / 3 |
| **2. ay** | Para yönetimi — doğru ama metoda özgü değil | 7 / 1 / 2 |
| **3. ay** | En ölçülebilir fikirler kavram yığınıyla iç içe; yön tanımı ilk kez mekanikleşiyor | 6 / 4 / 1 |
| **4. ay** | Tam tanımlar — yeni bilgi az, ölçülebilirlik ilk kez mümkün | **7 / 5 / 2** |

## Otuz sekiz videoda hâlâ geçmeyen cümle

> "Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."

Dört ay, otuz sekiz video, sıfır istatistik.

## Kapanış gözlemi

Üçüncü ayın sonunda şu çıkarımı yapmıştık: *bir fikri ölçülebilir yapan şey derinliği değil, kaç seçim noktası içerdiği.*

Dördüncü ay bunu doğruluyor ve keskinleştiriyor. Ayın en ölçülebilir dört kuralına bak:

- **Breaker:** dip, tepe, mum — üç eleman
- **Sweep derinlik eşiği:** bir sayı
- **Rejection block:** iki fiyat noktası
- **Çifte tepe projeksiyonu:** aritmetik

Ve en ölçülemez ikisi:

- **Reclaimed block:** dönüş noktası bilgisi gerektiriyor
- **Likidite boşluğu:** zaman sınırı yok

**Fark, karmaşıklıkta değil — belirsizliğin nerede bırakıldığında.** Bir kural, belirsiz bir bileşeni merkezine aldığında ölçülemez hale geliyor; kenarda bıraktığında (örneğin "üst zaman dilimi yönü") çekirdeği hâlâ test edilebilir kalıyor.

Bu ayrım, kalan sekiz ayı elerken de ana ölçüt olacak.

---

# BÖLÜM IV — Kesinlikle bilmen gerekenler

Aralık'ın asıl çıktısı **order block ailesinin tam sözlüğü.** Yedi varyant, ve aralarındaki farkın ne olduğu.

---

## 0. Ailenin ortak iskeleti

Yedi varyantın hepsi aynı üç soruya cevap veriyor:

1. **Hangi mum?** — bir ters yönlü mum (boğa için düşüş, ayı için yükseliş)
2. **Ne zaman geçerli olur?** — bir **ön koşul** sağlandığında
3. **Nereden girilir?** — mumun gövde aralığından

**Aralarındaki tek gerçek fark, ikinci maddededir.** Ön koşul mekanikse kural ölçülebilir; değilse değil.

---

## 1. Order block — temel form

**Tanım.** Bir **destek seviyesine yakın**, **açılış-kapanış aralığı en geniş** olan, **en düşük** düşüş mumu. (Bearish için: dirence yakın, en geniş gövdeli, en yüksek yükseliş mumu.)

**Nasıl bulunur.**
1. Üst zaman diliminde bir destek seviyesi belirle (eski dip, kırılmış eski tepe)
2. Fiyat oraya insin
3. O bölgedeki **en düşük ve en geniş gövdeli** düşüş mumunu bul
4. **Geçerlilik:** sonraki bir mum o mumun **tepesini kırmalı**
5. **Güç eşiği:** uzaklaşan hareket, mumun **gövde yüksekliğinin 2-3 katı** olmalı

**Giriş / stop / hedef.**

| Kalem | Değer |
|---|---|
| **Giriş** | Mumun **açılış** fiyatı (+5 pip spread payı) |
| **Mean threshold** | Gövdenin orta noktası — kapanış bazında ihlal edilmemeli |
| **Stop** | Gövdenin altı (fitil değil) |
| **Stop yükseltme** | Fiyat uzaklaştıktan sonra mean threshold'un hemen altına |
| **Hedef** | Eski tepenin üstündeki alım stopları |

**Ek kurallar.**
- **Ardışık iki düşüş mumu** varsa ikisi birlikte **tek order block**
- **Seviye taşıma:** yeni bir düşüş mumu daha yüksek açılışla oluşursa seviyeyi yukarı taşı
- **Yön filtresi:** boğa ortamında bearish order block'tan **satma** — onları sadece **kâr almak** için kullan

**Dikkat.** "Destek seviyesine yakın" merkezî ve tanımsız. Kendi kuralını koy (ör. "son 60 günün dibinin ±%0.5 bandı") ve sabit tut.

---

## 2. Breaker — en temiz varyant

**Tanım (bullish).** Eski bir **dip ihlal edilmeden önceki** en son salınım tepesindeki **yükseliş** mumu.

**Nasıl bulunur — dört adım:**
1. Bir kısa vadeli **dip kırılır** (satış stopları süpürülür)
2. Fiyat döner ve **iki dip arasındaki kısa vadeli tepeyi kırar** → yapı kayması
3. Fiyat o tepeye **geri döner**
4. O tepenin içindeki **son yükseliş mumu** = breaker → **al**

**Mum seçim kuralı:** *"Düşüşten önceki **en yüksek** olan."* Ve **tüm gövde aralığı** kullanılır.

| Kalem | Değer |
|---|---|
| **Giriş** | Mumun tam gövde aralığı |
| **Stop** | Aralığın altı |
| **Hedef** | Yukarıdaki likidite |

**Bearish:** eski bir **tepe** kırılır → iki tepe arasındaki **dip** kırılır → fiyat o dibe döner → oradaki **son düşüş mumu.**

**Ne işe yarar.** Ailenin **en yanlışlanabilir** üyesi: **iki koşul** gerektiriyor (stop süpürmesi + yapı kayması), ve ikisi de mekanik.

**Ve önemli:** üst zaman dilimi yön ön koşulu **gerekmiyor** — kurulumun kendisi yön üretiyor.

---

## 3. Mitigation block

**Tanım.** Fiyatın **A → B → C** yapısını tamamladıktan sonra, **A'nın içindeki** ters yönlü mum.

| Nokta | Ne |
|---|---|
| **A** | Kısa vadeli dip (ayı senaryosunda) |
| **B** | A'dan sonraki kısa vadeli tepe |
| **C** | A'nın **altına kırılım** = yapı kayması |

**Nasıl bulunur.**
1. Bir dirence yükseliş gör — **M formasyonu** oluşsun
2. A'nın altına kırılım (C) gerçekleşsin
3. **A seviyesine** odaklan
4. A'nın içindeki **son düşüş mumu** = mitigation block
5. Fiyat oraya döndüğünde **sat**

| Kalem | Değer |
|---|---|
| **Giriş** | Mumun **tüm gövde aralığı** |
| **Stop** | Mumun tepesinin üstü |
| **Hedef** | C'nin altındaki dip, ya da daha aşağıdaki destek |

**Mekanizma — ve bu ailedeki en sağlam olanı.** A-B arasında alanlar C'de zarara geçti. Fiyat A'ya döndüğünde çıkıyorlar. Videonun adı: **"buyer's remorse".** Davranışsal finansta **disposition effect** olarak belgelenmiş.

**Klasik karşılığı — video kendisi söylüyor:** *"kırılan destek dirence dönüşür."*

**Order block'tan farkı:** **yapı kayması ön koşulu var**, ve o koşul mekanik.

---

## 4. Rejection block — sweep'in gövde versiyonu

**Temel fikir.** Fiyatın yeni bir **tepe** yapması gerekmiyor. Yeni bir **gövde tepesi** yapması yeterli.

**Bloğun sınırları (bearish):**

| Sınır | Ne |
|---|---|
| **Üst** | **En yüksek fitilin ucu** |
| **Alt** | Salınım tepesindeki **en yüksek açılış ya da kapanış** |

**Nasıl bulunur.**
1. **Uzun fitilli** bir ya da birkaç mumdan oluşan salınım tepesi bul
2. En yüksek fitil ucunu ve en yüksek gövde noktasını işaretle → bu aralık **blok**
3. Fiyat, **en yüksek gövde noktasının üstüne** çıksın (fitili aşmasa da olur) → dağıtım sinyali
4. Bloğun **alt sınırına** dönüşte **sat**

**İki giriş seçeneği:**
- **Agresif:** alt sınırda sat, stop üstte
- **Zayıflıkta satış:** gövde tepesini aştı ama fitili aşmadıysa, geri düşerken **stop emriyle** sat

**İkinci kullanım.** Kâr alma. *"Kısaysan bu seviyelere gelince kârını al — fitillerin altına inmesini bekleme."*

**Bullish:** simetriği — uzun **alt** fitil, en düşük gövde noktası, fiyat onun **altına** insin, üst sınıra dönüşte **al.**

**Ne işe yarar — ve ölçüm açısından değeri.** Klasik sweep tanımı fitil bazlıydı; bu gövde bazlı. **Daha fazla sinyal üretir** — örneklem sorununu hafifletir.

**Dikkat.** "Uzun fitil" tanımsız. Bir oran koy (ör. fitil/gövde ≥ 1.5) ve sabit tut. Ve gerekçesi ("gövdede hacim var") yanlış — kuralı tut, gerekçeyi at.

---

## 5. Propulsion block

**Tanım.** **Bir order block'un içine değen** ikinci bir order block.

**Nasıl bulunur.**
1. Geçerli bir bullish order block var
2. Fiyat yükseliyor
3. Yeni bir **düşüş mumu** oluşuyor
4. **O mum, eski order block'un aralığına değiyor**
5. Bu ikinci mum = propulsion block

| Kalem | Değer |
|---|---|
| **Giriş** | Propulsion mumunun **tepesi** |
| **Alternatif (bearish)** | Mumun **dibi** — gövdeye kadar gelmesi gerekmez |
| **Stop** | **Mean threshold'un altı** — çok dar |

**Ayırt edici iddia.** *"Mean threshold'u neredeyse hiç kırılmaz. Sadece tepesine değip anında patlar."*

**Ve ters kullanım:** mean threshold kırılırsa → **anında geri bildirim**, çık ya da ters yöne dön.

**Ne işe yarar.** İki order block'un üst üste bindiği yerlerin daha hassas olduğu iddiası — ve tek başına test edilebilir.

**Dikkat.** Dar stop, maliyeti R cinsinden büyütür. **V2'nin 40 pip minimum kuralıyla birlikte kullan** — yoksa spread sinyali yer.

---

## 6. Reclaimed block — ÖLÇME

**Tanım.** Düşüş sırasında, her **küçük sıçramadan önceki son düşüş mumu.** Dip oluştuktan sonra bu mumlara dönüldüğünde alım.

**Neden ölçme.** Kural, **"eğrinin hangi tarafındasın"** bilgisine bağlı — yani dibin oluşup oluşmadığına. O bilgi **gerçek zamanda yok.**

Videonun kendi itirafı: *"Düşüş sırasında bu mumları giriş sanan traderlar stop olur."*

**Aynı mum**, eğrinin solunda tuzak, sağında fırsat. Ayrım ancak sonradan yapılabiliyor.

**Ama bir şey öğretiyor:** *bir kural geçmişte her zaman doğru görünüyorsa, muhtemelen gerçek zamanda bilinmeyen bir girdiye dayanıyordur.* Bu, kalan sekiz ayı elerken de kullanacağın bir test.

---

## 7. Vacuum block

**Tanım.** Bir volatilite olayı (haber, seans açılışı) sonrası oluşan **gerçek fiyat boşluğu** — önceki mumun kapanışı ile sonraki mumun açılışı arasında **hiç işlem görmemiş** aralık.

**Nasıl ele alınır.** Boşluk, **bir mummuş gibi:** açılışı, kapanışı, mean threshold'u var.

**İki senaryo:**

| Senaryo | Koşul | Giriş |
|---|---|---|
| **Kısmi kapanış** | Gap'in içinde bir order block var | O order block |
| **Tam kapanış** | Yok | Gap'ten önceki son mumun kapanışı |

**Günün saati kuralı:** erken New York (08:30) → gün içinde tam kapanır. Geç (10:00-11:00 sonrası) → kısmen açık kalır.

**Geçersizlik:** gap tam kapandıktan ve fiyat yükseldikten sonra o seviyenin **altına inmemeli.** İnerse kâr al ve çık.

**Kripto için not.** 7/24 işlem gördüğü için spot piyasada **gerçek gap neredeyse hiç oluşmaz.** Bu kavram forex ve vadeli piyasalara özgü.

**Klasik karşılığı.** **Breakaway gap** — video kendisi de söylüyor.

---

## 8. Fair value gap (FVG) — tam hesap

**Tanım.** Üç mumluk yapıda, **sadece bir taraf likiditenin** sunulduğu aralık.

**Hesabı (düşüş yönü):**
1. **Orta mum:** büyük düşüş mumu
2. **Sol mumun DİBİ** — çünkü o mumda dipten kapanışa alım sunulmuş
3. **Sağ mumun TEPESİ** — çünkü o mumda açılıştan tepeye alım sunulmuş
4. **FVG = sol mumun dibi ↔ sağ mumun tepesi**

Yükseliş yönü için tersi: sol mumun tepesi ↔ sağ mumun dibi.

**Fraktal not — kavram karışıklığını çözen cümle.** Bir zaman diliminde **FVG** olan yer, alt zaman diliminde **likidite boşluğu** olarak görünür. **İkisi aynı şeyin farklı ölçekleridir.**

**Vacuum block'tan farkı.** FVG'de o aralıkta **işlem oldu** — sadece grafikte üst üste binmedi. Vacuum block'ta **hiç işlem olmadı.**

**Ne işe yarar.** Hedef ya da giriş bölgesi.

**Dikkat — ve bu kritik.** Video 5 dakikalık grafikte **2 piplik** FVG'lerden giriş öneriyor. **Ölçek filtresi olmadan kullanma:** minimum genişlik koy (ATR'nin belirli bir katı), ve **aynı ayın 40 pip kuralını** buna da uygula.

---

## 9. İç ve dış aralık likiditesi — ayın merkezî ayrımı

**Tanım.**

| Tür | Nerede |
|---|---|
| **Dış aralık likiditesi** | Aralığın **tepesinin üstü** ve **dibinin altı** — stop kümeleri |
| **İç aralık likiditesi** | Aralığın **içindeki** boşluklar — FVG, likidite boşluğu, order block |

**Ana şablon, tek cümlede:**
> **İç aralıktan gir, dış aralıkta çık.**

**Aralık güncelleme kuralı.** Her kırılımda yeniden tanımla: *"Bu aralık kırıldı — yeni aralık ne? Bu dip ve bu tepe."*

**Fraktallık.** Günlükte "dış aralık" olan bir kırılım, aylık aralığın içindeyse hâlâ **iç** likiditedir. Ve bu, düşük dirençli koşunun tarifi: **aylık aralığın gitmek istediği yönde**, alt zaman dilimindeki her tepe kırılımı kolaydır.

**Ne işe yarar.** Dört ayın kavram yığınını **iki kutuya** indiriyor. Bir seviye gördüğünde tek soru: iç mi dış mı?

---

## 10. Sayısal eşikler — ayın en pratik üç kuralı

Bu üçü, dört ayda verilen **tek somut rakamlar.** Ezberle.

### a) Order block güç eşiği

> **Uzaklaşan hareket, order block gövdesinin yüksekliğinin 2-3 katı olmalı.**

Sağlamıyorsa o order block yeterince güçlü değil.

### b) Minimum kurulum büyüklüğü

| Mesafe | Karar |
|---|---|
| **20 pip** | **İşlem yok** |
| **40 pip** | Alınabilir |
| **75 – 80 pip** | **İdeal** |

Ölçülen: order block girişi ile aradaki tepe (hedef) arasındaki mesafe.

**Zaman dilimi eşlemesi:**

| Hedeflenen | Grafik |
|---|---|
| 40 pip | 15 dk |
| 50+ pip | 30 dk – 1 saat |
| 75 – 100 pip | 1 saat – 4 saat |
| 250 pip / 2 hafta | 4 saat – günlük |

### c) Sweep derinlik bandı

| Parametre | Değer |
|---|---|
| Beklenen süpürme (15-30 dk) | Eski dibin **10 – 20 pip** altı |
| Giriş | Limit emri, dibin **10 – 20 pip altında** |
| Stop | **30 – 50 pip** |
| **Geçersizlik** | **25 pip'ten derin inerse → stop koşusu değil, gerçek düşüş** |

Üst zaman dilimlerinde 10-20 pip kademesi **kullanılmaz** — orada **çifte tepe/dip projeksiyonu** kullanılır.

---

## 11. Çifte tepe / dip projeksiyonu

**Prosedür — ayın en mekanik kuralı:**
1. İki eşit (ya da neredeyse eşit) tepe bul
2. Aralarındaki **dibi** bul
3. **Aralık = tepe − dip**
4. Aralığı **tepeden yukarı yansıt** → hedef

Çifte dip için: aralığı **dipten aşağı yansıt.**

**Kilit iddia.** Perakende çifte tepeyi **direnç** görüp satar. Sen onu **hedef** görürsün — fiyat kırar ve projeksiyon seviyesine gider.

**Ne işe yarar.** **Sıfır seçim noktası olan tek hedef kuralı.** Tepe, dip, çıkarma, toplama. Ve hedef **tek bir sayı** — yani ya tuttu ya tutmadı.

**Kullanım kuralı.** *"Aralığın uçları yüksek olasılıklıdır, ortası düşük."* Çifte tepe/dip, aralığın **uçlarını** çerçeveler.

**Dikkat.** "Eninde sonunda ulaşır" — zaman sınırı yok. Sen bir pencere koy. Ve tolerans bandı koy (±%0.2), yoksa "1 pip'e kadar tuttu" örnekleri seçilmiş örnek olur.

---

## 12. Faiz üçlüsü — doğrulama filtresi

**Seriler:** 30 yıllık tahvil, 10 yıllık not, 5 yıllık not (hepsi futures). Kaynak: **barchart.com**, ücretsiz.

**Normal durum:** dolar endeksi önemli bir seviyedeyken üçü de aynı yapıyı üretmeli.

**Ayrışma:** **biri** kalıbı bozarsa (ör. ikisi daha düşük dip yaparken biri yapmazsa) → faiz kayması.

**Nasıl kullanılır — bu ayın en işlevsel prosedürü:**
1. Fiyat bir **order block / likidite havuzu / FVG / likidite boşluğuna** gelir
2. **O anda faiz üçlüsüne bak**
3. **Ayrışma var** → kurulum geçerli, incelt
4. **Ayrışma yok** → **kurulumu geç**, yeni bir tane ara

**Yön tablosu:**

| Dolar için | Faiz üçlüsünde aranan |
|---|---|
| Boğa | Üçü de daha yüksek tepe yapmalıyken **biri yapamıyor** |
| Ayı | Üçü de daha düşük dip yapmalıyken **biri yapamıyor** |

**Neden değerli.** İki aydır eksik olan işlevi dolduruyor: **hangi order block'un dikkate alınacağı.** Ve **yasaklayıcı** — "ayrışma yoksa işlem yok."

**Dikkat.** Üç faiz vadesi **çok yüksek korelasyonlu** (aynı getiri eğrisinin üç noktası). Ayrışmalar nadir olur → örneklem sorunu.

**Kripto analoğu:** BTC / ETH / toplam altcoin piyasa değeri, ya da BTC spot / perp / funding.

---

## Aralık'ın karar ağacı

Ayın on dört videosu, tek bir akış şemasına indirgenebilir. Bu, dört ayın en somut çıktısı:

**1. Bağlamı kur.**
- Aylık order block'la yönü belirle (Kasım V4 kuralı)
- Mevcut **aralığı** çiz: tepe ve dip
- İç ve dış likiditeyi işaretle

**2. Seviye seç.**
- İç aralık likiditesinde bir aday bul: order block, breaker, mitigation block, rejection block, FVG
- **Ön koşulu mekanik olanları tercih et:** breaker > mitigation > rejection > order block
- **Reclaimed block'u kullanma**

**3. Büyüklük kapısı.**
- Giriş ile hedef arası **40 pip'ten az mı?** → **işlem yok**
- 75-80 pip mi? → ideal

**4. Doğrula.**
- **Faiz üçlüsünde ayrışma var mı?** Yoksa geç.
- Kasım V5'in **SMT ayrışması** ne diyor?

**5. Gir.**
- Sweep tabanlı kurulumsa: dibin **10-20 pip altına** limit emri
- Order block tabanlıysa: açılış **+5 pip**
- Stop: **30-50 pip** ya da yapının ötesi
- **25 pip'ten derin süpürme → iptal**

**6. Yönet.**
- Mean threshold kırılırsa → çık
- Tepki **anında ve dinamik** değilse → riski azalt ya da çık (Kasım V3)
- 3R'de yarı kapat (Ekim V3)

**7. Çık.**
- Dış aralık likiditesi: eski tepenin **gövdesinin** üstü
- Ya da **çifte tepe projeksiyonu**
- Ya da doldurulmamış **FVG**, 10 pip pay bırakarak

**Bu şablonda tanımsız kalan tek şey adım 1'in aralık başlangıcı.** Onu da senin pivot tanımınla sabitlersen, **dört ayın tamamı tek bir kodlanabilir sisteme** iniyor.
