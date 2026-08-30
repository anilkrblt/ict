# ICT Charter Content — 13 Price Action Modeli
## 34 video · Türkçe eğitim rehberi · Kavramlar, kurallar, işlem planları ve doğrulama protokolü

Bu belge, `ict-charter-content-transkriptler.txt` içindeki **34 videonun tamamını** Türkçe bir öğrenme rotasına dönüştürür. Aynı modelin tanıtım, ek ders, örnek ve trade-plan videoları tek bölümde birleştirildi. Böylece kaynak sırası korunurken tekrarlar ayıklandı; metin baştan sona okunabilir ve daha sonra kontrol listesi olarak kullanılabilir hâle geldi.

Belgenin amacı bir sinyal listesi vermek değil, her modelin mantığını dört soruyla öğretmektir: **Fiyatın nereye çekildiği düşünülüyor? Kurulum nerede aranıyor? Giriş neyle tetikleniyor? Fikir hangi koşulda geçersiz oluyor?**

Otomatik transkriptte bozulan terimler bağlama göre düzeltildi. `IPA`, `IPTO` ve `iPod data range` ifadeleri **IPDA veri aralığı**; `coot` ifadesi **COT**; `opal trade entry` ifadesi **OTE**; `Juda/Judith swing` ifadesi **Judas Swing**; `fair value got` ifadesi **Fair Value Gap** olarak okunmalıdır.

> **Önemli:** Buradaki yüzde, pip ve getiri hedefleri kaynak videoların eğitim iddialarıdır; vaat veya kişisel yatırım tavsiyesi değildir. Kaldıraç kazancı da kaybı da büyütür. Strateji, maliyetler dâhil geçmiş veri ve ileriye dönük demo işlemlerle doğrulanmadan gerçek sermayeye uygulanmamalıdır.

## Bu belge nasıl çalışılmalı?

İlk okumada yalnız **Bölüm I** ile ilgilen. Terimleri öğrenmeden model kuralları birbirine benzer görünür. İkinci okumada kendi zaman ufkuna uyan **tek bir model** seç. Üçüncü okumada o modelin kontrol listesini, grafiği açmadan önce doldur. Son olarak **Bölüm IV** içindeki test ve risk protokolünü tamamlamadan canlı işlem düşünme.

Bir modeli öğrenmek, bütün ICT araçlarını aynı grafiğe doldurmak değildir. Serinin tekrar tekrar verdiği ana mesaj şudur: Kısa bir plan, az sayıda değişken ve aynı koşulları tekrar tekrar gözlemlemek; yüz sayfalık, her ihtimali açıklayan bir plandan daha kullanışlıdır.

## Kaynak haritası

| Videolar | Model | Ana konu | Kaynak satırları |
|---|---|---|---:|
| 1–3 | Model 1 | Intraday scalp · önceki günlük tepe/dip | 1–1545 |
| 4–5 | Model 2 | Kısa vadeli haftalık range | 1546–2713 |
| 6–7 | Model 3 | Swing trade · günlük likidite | 2714–4082 |
| 8–10 | Model 4 | Pozisyon trade · çeyrek/mevsimsellik | 4083–5326 |
| 11–14 | Model 5 | Seans içi volatilite genişlemesi | 5327–7079 |
| 15–20 | Model 6 | Evrensel buy-side model ve fraktallar | 7080–9233 |
| 21–23 | Model 7 | Evrensel sell-side model ve fraktallar | 9234–11187 |
| 24–25 | Model 8 | Haftalık 25 pip / aylık %6 hedefi | 11188–12272 |
| 26–27 | Model 9 | One Shot One Kill | 12273–13224 |
| 28–29 | Model 10 | External’dan external’a swing | 13225–13988 |
| 30–31 | Model 11 | 30 pip gün içi model | 13989–15074 |
| 32–33 | Model 12 | 20 pip scalp | 15075–16120 |
| 34 | Model 13 | 2022 modeli · index futures | 16121–16670 |

# BÖLÜM I — Önce dili öğren

## Bütün modellerin ortak mimarisi

Her model üç katmanda kurulur:

1. **Sahne, yani stage:** Üst zaman dilimindeki yön ve bağlam. Haftalık genişleme, aylık genişleme, bir likidite çekimi, COT hedging programı veya mevsimsel eğilim olabilir.
2. **Kurulum, yani setup:** İşlem aranan özel durum. Örneğin önceki günün dibine baskın, intraday volatilite genişlemesi, bir Order Block retesti ya da Market Maker profilinin belirli bacağı.
3. **Giriş deseni, yani pattern:** Emri tetikleyen alt zaman dilimi olayı. OTE, FVG’ye dönüş, Turtle Soup, breaker, Market Structure Shift veya Institutional Order Flow Entry Drill olabilir.

Bu ayrım önemlidir. Bir FVG görmek tek başına işlem değildir. FVG yalnız üçüncü katmandaki bir araçtır; üstte sahne ve kurulum yoksa bağlamdan kopuktur.

Trade planlarının ortak iş akışı da beş adımdır:

1. Hazırlık.
2. Fırsatı keşfetme.
3. İşlemi planlama.
4. Emri yürütme.
5. İşlemi yönetme.

## Temel sözlük

### Draw on liquidity — fiyatın çekildiği hedef

Model önce “long mu short mu?” diye sormaz. Önce **fiyatın sıradaki mantıklı hedefi neresi?** diye sorar. Eski bir tepenin üstündeki alış stopları, eski bir dibin altındaki satış stopları veya tamamlanmamış bir fiyat dengesizliği bu hedef olarak seçilir. Bu hedefe `draw on liquidity` denir.

Bu bir gözlem değil, test edilmesi gereken bir tahmindir. Hedefi işlemden önce tek bir fiyat seviyesiyle yazamıyorsan yönsel anlatı henüz yeterince net değildir.

### Dealing range, equilibrium, premium ve discount

Bir anlamlı swing low ile swing high arasındaki alan **dealing range**’dir. Aralığın yüzde 50 noktası **equilibrium** olur. Üst yarı **premium**, alt yarı **discount** kabul edilir.

Kaynak mantığına göre yükseliş beklentisinde discount’tan alıp premium hedeflenir; düşüş beklentisinde premiumdan satıp discount hedeflenir. “Ucuz” ve “pahalı” sözcükleri mutlak değer taşımaz; yalnız seçilen aralığa göredir. Aralığın iki ankrajı değişirse premium/discount sınıflaması da değişir. Bu nedenle ankrajlar işlemden önce sabitlenmelidir.

### IPDA veri aralığı

Kısa ve orta vadeli modellerde son **20 işlem gününün** en yüksek ve en düşük fiyatı işaretlenir; pazar mumları sayılmaz. Bu pencere içinde işe yarar hedef bulunamazsa bazı modeller 40, sonra 60 işlem gününe genişler. Model 9 ise günlük değil, **20 haftalık** bakış kullanır.

IPDA burada fiyatı açıklayan kanıtlanmış bir motor olarak değil, eski tepe, dip ve dengesizlikleri sistemli taramak için kullanılan bir bakış penceresi olarak ele alınmalıdır.

### Internal ve external range liquidity

**External Range Liquidity**, tanımlı dealing range’in dışındaki eski veya eşit tepeler/diplerdir. Kaynak, bunların ötesindeki stop emirlerini hedef varsayar.

**Internal Range Liquidity**, range’in içindeki FVG, liquidity void, Order Block, breaker ve equilibrium gibi yeniden fiyatlama alanlarıdır.

Bu ayrım giriş-hedef eşleşmesini kurar:

| Giriş | Hedef | Tipik kullanım |
|---|---|---|
| Internal | External | Trend yönünde continuation |
| External | Internal | Baskın sonrası range içine dönüş |
| External | Karşı external | Model 10 swing yapısı |

### Fair Value Gap — FVG

FVG, üç mumlu yapıda birinci ve üçüncü mumun fitilleri arasında işlem görmemiş alan kalmasıdır. Bullish FVG’de birinci mumun tepesi ile üçüncü mumun dibi; bearish FVG’de üçüncü mumun tepesi ile birinci mumun dibi arasında boşluk bulunur. Kaynak bunu fiyatın hızlı teslim edildiği bir dengesizlik olarak yorumlar.

FVG’nin orta noktası **Consequent Encroachment** olarak adlandırılır. Fiyatın mutlaka boşluğun tamamını doldurması gerekmez; orta noktaya erişmesi kaynak çerçevesinde yeterli bir yeniden dengeleme sayılabilir.

Her FVG giriş değildir. Yön, premium/discount konumu, seans, displacement ve hedefe kalan alanla birlikte değerlendirilir.

### Order Block, breaker ve rejection block

**Order Block**, yönlü hareketten önceki karşı renkli mum veya mum kümesi olarak kullanılır. Bullish senaryoda yükselişi başlatan son down-close mum; bearish senaryoda düşüşü başlatan son up-close mum referans alınır. Mum gövdesinin orta noktası **mean threshold**’dur.

**Breaker**, önce destek/direnç gibi çalışan fakat likidite baskını ve yapı değişiminden sonra rol değiştiren eski swing bölgesidir. **Rejection block** ise belirgin bir fitilin gövdeyle birleştiği fiyat alanını referans alır.

Bu isimler gerçek kurumsal emirlerin görüldüğü anlamına gelmez. Grafikten türetilen fiyat bölgeleridir; işe yarayıp yaramadıkları ayrı ölçülmelidir.

### Liquidity raid, displacement ve Market Structure Shift

**Liquidity raid**, fiyatın eski/eşit tepe veya dibin ötesine geçerek oradaki varsayılan stopları almasıdır. Baskın tek başına dönüş sinyali değildir.

**Displacement**, baskından sonra güçlü gövdelerle hızlı ve tek taraflı ilerlemedir. Genellikle arkasında FVG bırakır. **Market Structure Shift**, bu hareketin yakın bir swing tepe veya dibini karşı yönde kırmasıdır.

Model 13’ün özü bu sıradır: önce raid, sonra displacement ile yapı değişimi, sonra oluşan FVG’ye dönüş.

### OTE — Optimal Trade Entry

OTE, bir impulse swing’e Fibonacci çekilmesi uygulanarak bulunan derin retracement alanıdır. Kaynak genel olarak yüzde 62–79 bandını, çoğu örnekte yüzde 70,5 çevresini kullanır. Ancak bazı trade planları özellikle **yüzde 62 seviyesini** emir fiyatı yapar. Bu iki kullanım karıştırılmamalıdır.

Model 1’de özel yürütme kuralı long için yüzde 62’nin 5 pip üstü, short için yüzde 62’nin 5 pip altıdır. Dealing range çiziminde fitiller; OTE’nin “çekirdek hacim” ölçümünde bazı örneklerde mum gövdeleri kullanılır.

### Kill Zone ve saat dilimi

Kill Zone, setup’ın aranacağı New York yerel saat penceresidir. Saatler sabit Türkiye saatine çevrilmemelidir; ABD ile Türkiye’nin yaz saati uygulamaları aynı değildir. Grafiği **America/New_York** saat dilimine getir veya her işlem gününde dönüşümü doğrula.

Transkriptte broker grafik saatiyle verilen `04:00` ve `06:00` gibi etiketler doğrudan New York saati değildir. Metindeki açıklamaya göre bazı örneklerde 04:00 grafiği New York gece yarısına, 06:00 ise yaklaşık 02:00 New York’a karşılık gelir.

### Judas Swing ve Power of Three

**Power of Three**, bir range’in accumulation, manipulation ve distribution sırasıyla geliştiği anlatısıdır. **Judas Swing**, beklenen ana yönün tersine yapılan ilk yanıltıcı hareket olarak kullanılır. Bullish günde önce aşağı, bearish günde önce yukarı hareket beklenebilir.

Bu anlatı, sonucu gördükten sonra her grafiğe yapıştırılmamalıdır. Manipulation sayılacak hareketin seviyesi, saati ve invalidasyonu işlemden önce yazılmalıdır.

### COT, SMT, mevsimsellik ve çeyreklik kayma

**COT**, vadeli işlem piyasasındaki haftalık pozisyon raporudur. Modeller 3 ve 4 commercial kategorisinin son 12 veya 6 aylık net pozisyon aralığını farklı biçimde yorumlar. Bu yorum, standart COT okuması değil, seriye özgü bir dönüşümdür.

**SMT divergence**, korele iki piyasanın aynı anda beklenen yeni tepeyi veya dibi yapmamasıdır. DXY ile bir döviz paritesi karşılaştırılırken ters korelasyon dikkate alınmalıdır.

**Mevsimsellik**, geçmiş yılların ortalama takvim eğilimidir; giriş sinyali değil, aday piyasa seçme filtresidir. **Quarterly shift**, yaklaşık üç aylık aralıklarla önemli swing oluşabileceği varsayımıdır. İkisi de kesin zamanlama sağlamaz.

### Range projection ve “standard deviation”

Model 5 ve bazı trade planlarında “standard deviation” denilen şey istatistiksel standart sapma değildir. CBDR, Asian Range veya FLOUT high-low mesafesinin belirli katlarla yukarı/aşağı projeksiyonudur. Bu ayrım önemlidir: burada olasılık dağılımı hesaplanmıyor, geometrik range uzatması yapılıyor.

## Bir bakışta 13 model

| Model | Tutma süresi | Sahne | Ana giriş fikri | Kaynak hedefi |
|---:|---|---|---|---:|
| 1 | Dakika/saat | Günlük draw | NY 5dk OTE | 15–20 pip |
| 2 | 2–3 gün | Haftalık expansion | Salı/çarşamba 15dk OTE | 50–100 pip |
| 3 | Gün/hafta | Aylık + 12 aylık COT | 4s/15dk OTE | 100–300 pip |
| 4 | Hafta/ay | Quarter + sezon + COT + SMT | Günlük veya 4s/15dk | 500+ pip |
| 5 | Tek seans | Günlük draw | Kill Zone + range projection | 40–50 pip |
| 6 | Fraktal | Yukarı likidite çekimi | Buy-side delivery | Seçilen premium array |
| 7 | Fraktal | Aşağı likidite çekimi | Sell-side delivery | Seçilen discount array |
| 8 | Hafta | Haftalık expansion | 5dk entry drill | 25 pip |
| 9 | Hafta | Haftalık expansion | 15dk OTE / raid | 50–75 pip |
| 10 | Gün/hafta | Haftalık expansion | External raid | 50–75 pip |
| 11 | Gün içi | Haftalık + günlük draw | 60dk IRL, 15/5dk giriş | 30 pip |
| 12 | Tek seans | Günlük expansion | OB retesti → FVG dönüşü | 20 pip |
| 13 | Tek seans | Intraday likidite | Raid → MSS → FVG | Karşı PD Array |

# BÖLÜM II — Modeller 1–5

## Model 1 — Önceki günlük tepe/dip ile intraday scalp

::: ders
**DERS**

### Kimin için ve neyi hedefler?

Model 1, pozisyonu gece taşımak istemeyen, kararını hızlı verebilen ve uzun vadeli bir hareket beklemek yerine kısa bir New York seansı hareketi arayan trader içindir. Temel hedef işlem başına **15–20 pip**tir. Daha geniş örneklerde 25–30 piplik haftalık bir fırsat da anlatılır; fakat planın özü sık işlem değil, kısa ve seçkin bir fırsattır.

Sahne günlük grafikteki likidite çekimidir. Kurulum, eski bir günlük tepe veya dibin hedefte olmasıdır. Giriş deseni ise New York Kill Zone içindeki 5 dakikalık OTE’dir.

### Hazırlık ve yön

1. Ekonomik takvimde izlenen paritenin orta ve yüksek etkili haberlerini işaretle.
2. Pazar günlerini saymadan son 20 işlem gününün en yüksek ve en düşük fiyatını çiz.
3. Bu dealing range’in yüzde 50 noktasını belirle.
4. Yukarıda ve aşağıda henüz alınmamış eski günlük tepe/dipleri işaretle.
5. Günlük yapı bir sonraki hedefi yukarı gösteriyorsa yalnız long, aşağı gösteriyorsa yalnız short ara.

Bullish programda fiyat discount veya en fazla equilibrium tarafındayken, 20 günlük pencere içindeki eski bir günlük tepe hedeflenir. Fiyat zaten premiumdaysa yeni long açılmaz. Bearish programda bunun aynası uygulanır: premium veya equilibrium’dan short aranır; fiyat zaten discounttaysa yeni short açılmaz.

Buradaki “previous day high/low” yalnız dünün seviyesi değildir. Son 20 gün içindeki, o günün fiyatına göre mantıklı sıradaki eski günlük tepe veya dip de kullanılabilir. Pencerede uygun hedef kalmadıysa 40 güne genişlenebilir.

### Giriş prosedürü

Bullish işlem:

1. Günlük hedef yukarıda ve fiyat premiumda değildir.
2. London seansı yukarı yönlü enerji göstermişse New York’ta bu hareketin aşağı retracement’ını bekle.
3. 07:00–10:00 New York arasında 5 dakikalık bullish OTE oluşsun.
4. Limit emri, modelin özel kuralına göre yüzde 62 Fibonacci seviyesinin **5 pip üstüne** yerleştir.
5. Stopu OTE anchor low’unun veya New York seans dibinin **5 pip altına** koy.

Bearish işlemde her şey tersidir: Yukarı retracement, bearish OTE, yüzde 62’nin 5 pip altından sell limit ve anchor high’ın 5 pip üstünde stop.

Normal pencere 07:00–10:00 New York’tur. 10:30’da önemli veri gibi geç bir volatilite olayı varsa pencere 11:00’e uzayabilir. Pazartesi, salı ve çarşamba önceliklidir. Perşembe yalnız hedef likidite alınmadıysa ve kalan yol açık görünüyorsa, azaltılmış riskle düşünülebilir. Cuma yeni işlem yoktur.

### 2019 rafinesi: raid, displacement ve erken yapı okuması

Klasik swing teyidinde üç mumun tamamlanması beklenir. Rafine sürüm, premiumda eski bir tepe alındıktan sonra aşağı displacement’ın yakın dibi kırmasını ve fiyatın bearish breaker/Order Block’a dönmesini izler. Bu sayede üçüncü swing mumu tamamlanmadan short fikri oluşabilir. Bullish sürümde discounttaki dip alınır, yukarı displacement yakın tepeyi kırar ve bullish bölgeye dönüşte long aranır.

Bu agresif sürüm yalnız daha erken giriş sağlar; yanlış işlem ihtimalini ortadan kaldırmaz. Stop olursa “model birazdan döner” denilerek aynı gün yeniden giriş yapılmaz.

### Hedef ve yönetim

Kademeli çıkış mantığı şöyledir:

1. Fiyat OTE anchor high/low’a döndüğünde ilk küçük parça kapatılabilir.
2. 15 pipte ilk sabit hedef alınır.
3. 20 pipte ikinci hedef alınır.
4. Eski günlük tepe/dip, Fibonacci extension 2 veya simetrik swing uzatmasında kalan pozisyon kapanır.

İlk kâr alınmadan stop aceleyle başa başa çekilmez. Anchor hedefi görüldükten sonra 5–10 pip kâr kilitlenebilir. Nihai trade-plan sürümünde ortak yüzde 25/50/75 kuralı da kullanılır: beklenen hedefin yüzde 25’i gerçekleşince başlangıç riski yüzde 25, hedefin yüzde 50’sinde yüzde 50 azaltılır; yüzde 75 ilerlemede stop en az başa başa gelir.

### Model 1 kontrol listesi

- Ekonomik takvim işaretli mi?
- 20 günlük dealing range ve equilibrium sabit mi?
- Tek bir eski günlük tepe/dip hedefi işlemden önce yazıldı mı?
- Hedefe en az 15–20 pip alan var mı?
- Long discount/equilibrium’da, short premium/equilibrium’da mı?
- Gün cuma değil mi?
- Saat New York yerel saatiyle doğru mu?
- 5 dakikalık OTE, raid/displacement bağlamıyla uyumlu mu?
- Yüzde 62 giriş, 5 pip tampon, stop ve bütün çıkış emirleri hazır mı?
- Stop olursa aynı gün yeni deneme yapılmayacağı kabul edildi mi?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Modelin en mekanik kısmı gün, saat, yüzde 62 seviyesi, 5 pip tampon ve yeniden giriş yasağıdır. En belirsiz kısmı ise günlük yön ile “sıradaki mantıklı” tepe/dip seçimidir. Testten önce swing ve hedef önceliği için sabit tanım gerekir.

15–20 pip hedefte spread, komisyon ve kayma önemli bir R maliyetidir. Forex için söylenen 5 pip tampon başka enstrümana kopyalanmamalıdır. Başlangıçta bu modeli yalnız demo ortamında ve tek paritede çalışmak, çok sayıda piyasada fırsat kovalamaktan daha sağlıklıdır.
:::

## Model 2 — Haftalık range’in salı–perşembe bölümü

::: ders
**DERS**

### Kimin için ve neyi hedefler?

Model 2, haftalık genişlemenin tamamını değil, çoğunlukla salı veya çarşambadan perşembe New York açılışına kadar olan bölümünü hedefler. Amaç işlem başına **50–100 pip**tir. Pazartesi yön ve profil bilgisi toplamak için kullanılır; ana giriş salı, kurulum gelmezse çarşambadır.

Sahne haftalık yön, kurulum range expansion, giriş deseni 15 dakikalık OTE ve uygun PD Array’dir.

### Haftalık bias

Bullish haftada haftalık grafiğin üstündeki FVG, eski tepe veya buy-side liquidity hedeflenir. Bearish haftada alttaki FVG, eski dip veya sell-side liquidity hedeflenir. Son 20 işlem gününde uygun hedef yoksa 40, sonra 60 güne geçilir. Altmış günlük pencerede de temiz hedef yoksa piyasa değiştirilir veya işlem yapılmaz.

Ekonomik takvim haftalık profile bağlanır. Örneğin salı London saatinde güçlü veri varsa, bullish anlatıda Tuesday-low-of-week veya Wednesday-low-of-week profili düşünülür. Haber yön sinyali değil, önceden kurulmuş anlatıyı hareket ettirebilecek zaman filtresidir.

### Ana limit giriş

1. Salı gününün European Open referansını doğru New York saatine göre işaretle.
2. Bullishsen açılışın altında discount PD Array; bearishsen açılışın üstünde premium PD Array ara.
3. 15 dakikalık OTE ile FVG, Order Block veya başka seçili PD Array’in örtüşmesini bekle.
4. Seviye, Asian Range, CBDR veya FLOUT projeksiyonunda en fazla artı/eksi 3 birim içinde bulunmalı; hedeflenen yakınsama yaklaşık 5 pip toleranslıdır.
5. Long limit birleşim seviyesinin 5 pip üstü, short limit 5 pip altıdır.
6. Stop ilgili setup low/high’ının 25 pip ötesidir.

Salı kurulum oluşmazsa aynı işlem çarşamba European Open ile yeniden hazırlanabilir. Salı zaten büyük bir expansion teslim etmişse çarşamba geç kalmış giriş kovalanmaz.

### Alternatif strength entry

Bu yöntem dip veya tepe tahmin etmek yerine hareket başladıktan sonra emir doldurur.

Bullish senaryoda 02:00 New York sonrasında fiyatın Asian low veya European Open altına sarkması beklenir. Fiyat toparlanmaya başladığında Asian Range high’ın 1 pip üstüne buy-stop yerleştirilir. Bearish senaryoda önce Asian high/açılış üstüne hareket, ardından Asian Range low’un 1 pip altına sell-stop kullanılır.

Alternatif breakout girişinde kaynak stopu **50 pip**tir. Bu nedenle limit girişten daha fazla nominal mesafe taşır; aynı lot kullanılmaz, pozisyon büyüklüğü risk bütçesine göre küçültülür.

### Hedef ve zaman çıkışı

- Birinci kâr emri: 50 pip.
- İkinci kâr emri: 75 pip.
- 100 pip herhangi bir anda görülürse kalan pozisyon tamamen kapatılır.
- Hedefler gelmese bile perşembe New York açılışında kalan pozisyon kapanır.

Stop olursa aynı gün ve aynı fikirde yeniden giriş yoktur; model “one and done” çalışır. Fiyat önemli üst zaman dilimi hedefini tamamlayıp gerçek Market Structure Shift üretirse intraweek reversal düşünülebilir, fakat yalnız “hedefe geldi” diye ters işlem açılmaz.

### Model 2 kontrol listesi

- Haftalık mumun olası expansion yönü ve somut hedefi net mi?
- 20/40/60 günlük pencere doğru sırayla tarandı mı?
- Orta/yüksek etkili haber haftalık profile uyuyor mu?
- Gün salı veya ilk kurulum yoksa çarşamba mı?
- European Open broker saati değil, New York saatine göre doğru mu?
- Fiyat bullishte açılışın altında, bearishte üstünde mi?
- OTE + PD Array + en fazla 3 range projection birleşimi var mı?
- Limit giriş mi, strength entry mi kullanılacağı önceden seçildi mi?
- 50/75/100 pip emirleri ve perşembe zaman çıkışı hazır mı?
- Stop sonrası yeniden giriş yapılmayacak mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Modelin zaman çıkışı, hedefleri ve iki giriş yöntemi açıkça test edilebilir. Belirsizlik yine haftalık bias, PD Array seçimi ve hangi CBDR/Asian/FLOUT ölçümünün kullanılacağı noktalarındadır.

Trade-plan örnekleri **demo hesap** üzerinden anlatılır. Limit girişte 25, breakout girişte 50 pip stop kullanılması aynı parasal risk anlamına gelmez. Pozisyon büyüklüğü stop mesafesine göre yeniden hesaplanmadığında ikinci yöntem riski ikiye katlar.
:::

## Model 3 — Aylık genişleme içinde swing trade

::: ders
**DERS**

### Kimin için ve neyi hedefler?

Model 3, ekran başında sürekli kalamayan ve bir aylık hareketin içindeki birkaç günlük/haftalık swing’i taşımak isteyen trader içindir. Hedef sınıfı **100–300 pip**, beklenen sıklık çoğu piyasada ayda bir veya iki kurulumdur. Aylık mumun bias yönünde kapanması şart değildir; hedefe doğru yeterli expansion üretmesi yeterlidir.

Sahne 12 aylık commercial COT Hedging Program, kurulum günlük likidite havuzu, giriş deseni OTE’dir.

### COT ile sahneyi kurmak

1. İlgili vadeli kontratın commercial net pozisyonunu al.
2. Son 12 ayın en yüksek ve en düşük net pozisyonunu belirle.
3. Aralığı ikiye böl.
4. Güncel okuma orta noktanın üstündeyse model içi bullish, altındaysa bearish hedging programı kabul et.
5. Bu yönü aylık yapı, en güçlü mevsimsel eğilim ve günlük likidite hedefiyle karşılaştır.

Bu yorum standart COT analizi değildir. Ayrıca FX paritesi ile vadeli kontratın yönü ters olabilir. Örneğin Canadian Dollar futures bearish okunuyorsa USDCAD bullish yorumlanabilir.

### Setup ve giriş

Bullish senaryoda aylık açılış altına ilk ters hareket ve discount OTE aranır; bearish senaryoda aylık açılış üstündeki premium OTE aranır. Yeni ayın ilk işlem günündeki Asian açılış veya New York gece yarısı açılışı referans olabilir.

Nihai yürütme planı:

1. 20/40/60 günlük IPDA içinde 100–300 pip alan sunan günlük hedefi belirle.
2. Girişi tercihen pazartesi–çarşamba, çoğu şablonda salı European Open çevresinde ara.
3. Bullishte açılış altındaki 15 dakikalık discount PD Array; bearishte açılış üstündeki premium PD Array kullanılmalı.
4. Yüzde 62 OTE ile en fazla artı/eksi 3 intraday projection yaklaşık 5 pip içinde birleşsin.
5. Raid ve 15 dakikalık MSS/FVG ya da 5 dakikalık scalp modülü riski hassaslaştırabilir.
6. Standart plan stopu setup swing’inin 25 pip ötesidir.

Model 1 ve 2’nin aksine stop sonrası yeniden girişe izin verilir. Bunun nedeni, aylık tezin tek bir intraday stopla bozulmayabilmesidir. Ancak yeni deneme yalnız aylık yön, COT, sezon ve günlük hedef hâlâ geçerliyse alınır.

### Hedef ve yönetim

Ana hedefler eski günlük tepe/dip, günlük FVG ve buy-side/sell-side liquidity’dir. Kademeler kaynakta farklı örneklerle verilir:

- 50 pip ilk ödeme.
- 75 pip ikinci ödeme.
- Alternatifte 75 ve 130 pip.
- En az bir parçada 100 pip tutma amacı.
- 300 pipte kalan toplam pozisyonun yüzde 80’ini kapatma ve küçük runner bırakma.

Fibonacci uzatması kendi başına hedef değildir; external liquidity ile örtüştüğünde kullanılır. Hedefe 100 pip alan yoksa bu, Model 3 kurulumu değildir.

### Model 3 kontrol listesi

- Aylık expansion yönü tek cümleyle yazılabiliyor mu?
- 12 aylık commercial COT aralığı ve orta noktası hesaplandı mı?
- Futures/spot FX yön dönüşümü doğru mu?
- Mevsimsellik yalnız filtre olarak mı kullanılıyor?
- 20/40/60 günlük hedef en az 100 pip alan veriyor mu?
- Giriş haftanın ilk yarısında ve uygun Kill Zone’da mı?
- OTE, PD Array ve range projection birleşimi var mı?
- Stop 25 pip ötesinde ve toplam risk yüzde 1 veya altında mı?
- Kademeler emirden önce girildi mi?
- Yeniden girişten önce üst zaman dilimi tezi baştan doğrulanacak mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

COT kategorisi ve 12 aylık orta nokta mekanik olarak hesaplanabilir. Fakat bu dönüşümün yön avantajı sağladığı kaynakta örneklemle gösterilmez. Mevsimsellik ve aylık bias aynı veriye bakılarak sonradan uyumlu seçilirse geriye dönük uyarlama riski doğar.

Uzun hedefin parasal riski büyütmesine izin verilmemelidir. Stop mesafesi büyüdüğünde lot küçülür. Swing işlemin gece, hafta sonu ve gap riskini taşıdığı ayrıca hesaba katılmalıdır.
:::

## Model 4 — Çeyreklik ve mevsimsel pozisyon trade

::: ders
**DERS**

### Kimin için ve neyi hedefler?

Model 4, birkaç hafta ile iki ay veya daha uzun süre pozisyon taşıyabilen, seyrek ve büyük hareket arayan trader içindir. Fırsat sınıfı **500 pip ve üzeridir**. Sahne güçlü bir seasonal tendency ile çakışan quarterly shift; kurulum altı aylık COT Hedging Program ve SMT divergence; giriş/çıkış deseni external range liquidity’dir.

### Üçlü yön filtresi

Bearish pozisyon için şu üç bileşen birlikte aranır:

1. Yılın o döneminde aşağı eğilim gösteren güçlü bir seasonal pencere.
2. Son altı aylık commercial net pozisyon aralığında bearish hedge programı.
3. Günlük eski tepe baskınında korele parite veya DXY ile SMT divergence.

Bullish senaryoda seasonal yukarıdır, COT bullish okunur, eski dip süpürülür ve korele piyasa aynı yeni dibi teyit etmez. Her üç ayda her piyasada işlem aramak yerine, o çeyrekte en güçlü mevsimsel adaya odaklanılır.

### İki giriş yöntemi

**Basit günlük stop-entry:** Bearish senaryoda eski günlük tepe alınır ve SMT oluşur. Son up-close günlük mumun açılışına sell-stop konur; fiyat zayıflayıp bu açılışın altına geçtiğinde işlem açılır. Stop raid mumunun tepesinde veya örnekte 1 pip üstündedir. Bullish sürüm bunun aynasıdır.

**Rafine giriş:** Pazartesi–çarşamba European Open filtresi kullanılır. Bearishte açılış üstündeki 4 saatlik premium FVG, en fazla +3 projection ile; bullishte açılış altındaki discount FVG en fazla -3 ile birleşir. 15 dakikalık Institutional Order Flow Entry Drill tetikleyici olur. Limit fiyatına Forex için 5 pip tampon uygulanır; stop setup high/low’un 25 pip ötesidir.

Stop sonrası üst zaman dilimi tezi geçerliyse yeni kurulum beklenebilir.

### Pyramiding

Pozisyona ekleme yalnız doğru range yarısında yapılır. Short’a equilibrium veya premiumda; long’a equilibrium veya discountta eklenir. Hedef tarafına geçildikten sonra yeni pozisyon açılmaz. Eklemeler küçülen boyutta olmalıdır; dersteki örnek **5–3–1** dağılımıdır. Bütün girişlerin toplam riski başlangıçta belirlenen üst sınırı aşamaz.

### Hedef ve çıkış

- 100 pipte ilk ödeme.
- 250 pipte ikinci ödeme.
- 500 pipte kalan toplam pozisyonun en az yüzde 80’i kapanır.
- En çok yüzde 20 runner bırakılır.
- Ana hedef günlük/haftalık eski tepe veya dip, FVG ve external liquidity’dir.

İlk external liquidity alındıktan sonra yeni kısa vadeli dip/tepe etrafındaki `offset distribution` son çıkış için kullanılabilir. Büyük hedef uğruna ilk mantıklı likiditelerde hiç kâr almamak planın amacı değildir.

### Model 4 kontrol listesi

- Mevcut ay/çeyrek için önceden hazırlanmış seasonal aday listesi var mı?
- Altı aylık commercial COT aralığı hesaplandı mı?
- Günlük 20/40/60 günlük PD Array haritası hazır mı?
- Eski external tepe/dip raid edildi mi?
- Korele piyasa veya DXY gerçek SMT divergence gösteriyor mu?
- Hedef en az 500 piplik sınıfa uyuyor mu?
- Günlük stop-entry mi, 4s/15dk rafine giriş mi seçildi?
- Gap dâhil stop riski ve pozisyon büyüklüğü hesaplandı mı?
- Bütün eklemelerin toplam riski yüzde 1’i aşmıyor mu?
- 100/250/500 pip ve runner emirleri hazır mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Bu model en çok seçim noktası taşıyan modellerden biridir. “Güçlü sezon”, commercial yön, SMT çifti, raid ve PD Array seçimi ayrı ayrı tanımlanmadığında aynı grafik sonradan farklı biçimde açıklanabilir.

Mevsimsellik giriş değildir; COT gecikmeli haftalık veridir; SMT ise korelasyon rejimi değiştiğinde yanıltıcı olabilir. 500 pip ifadesi garanti değil, fırsat büyüklüğü etiketidir. Günlerce taşınan pozisyonda hafta sonu/gap riski nedeniyle kaynakta görülen geniş stop örnekleri lot küçültülmeden uygulanmamalıdır.
:::

## Model 5 — Seans içi volatilite expansion

::: ders
**DERS**

### Kimin için ve neyi hedefler?

Model 5, bütün günlük range’i değil, London veya New York seansındaki yönlü genişlemeyi almak isteyen day trader içindir. Nihai trade planı işlem başına **40–50 pip** hedefler. Sahne üst zaman dilimindeki likidite çekimi, kurulum intraday volatility expansion, giriş deseni seans swing’i ve Power of Three’dür.

Pazartesi ve cuma resmî planda elenir. Salı ve çarşamba ana günlerdir. Perşembe, salı ve çarşamba zaten iki büyük range teslim etmediyse kullanılabilir. İki güçlü günün ardından perşembe yeni işlem aramak yerine konsolidasyon/retracement riski kabul edilir.

### Önce günlük hedef

Son 20 işlem gününün dealing range’i çıkarılır. Bearish anlatıda önceki günlük veya hafta içi dip; bullish anlatıda önceki günlük veya hafta içi tepe hedeflenir. Setup ile hedef arasında en az 40–50 pip bulunmalıdır. Günlük mumun yönlü kapanması gerekmez; ilgili seansın hedef yönünde genişlemesi yeterlidir.

### Hangi range ölçülmeli?

Bu modelin ayırt edici bölümü intraday projeksiyon seçimidir:

| Ölçüm | New York saati | Kaynak koşulu |
|---|---|---|
| CBDR | 16:00–20:00 | Net konsolidasyon; yaklaşık 15 pipten geniş |
| Asian Range | 20:00–00:00 | Net konsolidasyon; ideal yaklaşık 20–40 pip |
| FLOUT | 16:00–00:00 | İlk ikisi uygun değilse; yarım-range katları |

Range trend biçimindeyse kullanılmaz. Ölçümler 15 dakikalık grafikte tutarlı biçimde yapılır. Fitillerden ve mum gövdelerinden ayrı projeksiyonlar çıkarılabilir. Önceki günün geçerli seviyeleri silinmez; bugünkü ve eski projeksiyonların yaklaşık **3–5 pip** içinde çakışması, gerçek bir session/günlük likidite seviyesi ve Kill Zone ile birleştiğinde aday bölge oluşturur.

“Standard deviation” burada istatistiksel standart sapma değildir. Seçilen range’in 1, 1,5, 2, 2,5 gibi geometrik katlarla projeksiyonudur. Etiket tek başına hedef veya giriş değildir.

### Setup ve giriş

Bearish işlem:

1. Haftalık/günlük draw aşağıda ve 40–50 pip alan vardır.
2. Seans önce bias’ın tersine premiuma doğru Judas Swing yapar.
3. Fiyat London veya New York Open’da 15 dakikalık premium bearish FVG/Order Block/OTE’ye gelir.
4. Bölge, seçilmiş range projection ve mümkünse European Open üstüyle örtüşür.
5. 5 dakikalık bearish Entry Drill, buy-stop raid veya displacement görülür.
6. Sell limit, yakınsama seviyesinin yaklaşık 5 pip altına yerleştirilir.

Bullish işlemde discount bölge, sell-stop raid ve 5 pip üstten buy limit kullanılır. Model OTE, Turtle Soup, FVG, breaker veya Order Block’tan birini giriş deseni olarak seçmeye izin verir; ama deviation tek başına sinyal değildir.

### Stop ve yönetim

Nihai planda short için ilgili premium/swing high’ın yaklaşık **15 pip üstü** açıkça verilir. Long tarafındaki otomatik metin bozuk olduğu için simetrik 15 pip kuralı orijinal slayt görülmeden kesin kabul edilmemelidir; yapısal swing invalidasyonu esas alınmalıdır.

Üç parça örneği:

1. İlk emir +40 pipte kapanır.
2. İkinci emir +50 pipte kapanır.
3. Üçüncü emir +50 pipte yüzde 80 azaltılır; küçük runner sonraki likiditeye bırakılır.

Bu modelde stop sonrası, günlük tez ve Kill Zone hâlâ geçerliyse ikinci bir temiz kurulum izlenebilir. Bu izin intikam işlemi değildir; yeniden giriş şartları ilk işlemden önce yazılmalıdır.

### Model 5 kontrol listesi

- 20 günlük dealing range ve tek günlük draw net mi?
- Hedef 40–50 pip alan veriyor mu?
- Gün salı/çarşamba veya gerçekten uygun perşembe mi?
- CBDR, Asian Range ve FLOUT seçim sırası uygulandı mı?
- Range koşulları ve New York saatleri doğru mu?
- En az iki günün projection + likidite yakınsaması var mı?
- 15 dakikalık PD Array doğru premium/discount tarafında mı?
- London/NY Kill Zone ve 5 dakikalık tetikleyici oluştu mu?
- Stop yapısal swing’in dışında mı?
- 40/50 pip ve runner planı girişten önce yazıldı mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Model 5’te range seçim protokolü sayısal görünse de “net konsolidasyon” ve birden çok ölçüm arasından seçim hâlâ özneldir. Testte hangi range’in seçileceği sonuç görülmeden belirlenmelidir.

Transkriptte geçen, çok doğru işlem yapan müşteriyi brokerın çıkarabileceği ve bu nedenle bilinçli kötü işlem açılması gerektiği yönündeki iddia uygulanabilir bir risk kuralı değildir ve bu rehbere dâhil edilmemiştir. Bilinçli zarar üretmek yerine regülasyon, sözleşme koşulları, fiyat karşılaştırması ve eksiksiz işlem kaydı esas alınmalıdır.
:::

# BÖLÜM III — Modeller 6–13

## Model 6 ve 7’den önce — Market Maker profillerini doğru oku

Modelin adı o anda alınacak işlemin yönü değildir. Market Maker Sell Model önce yukarı, sonra aşağı; Market Maker Buy Model önce aşağı, sonra yukarı bir teslimat şeması anlatır.

| Profil | İlk taraf | Terminus / dönüş | İkinci taraf |
|---|---|---|---|
| Market Maker Sell Model | Accumulation ve reaccumulation ile yukarı | Premium / buy-side liquidity | Distribution ve redistribution ile aşağı |
| Market Maker Buy Model | Distribution ve redistribution ile aşağı | Discount / sell-side liquidity | Accumulation ve reaccumulation ile yukarı |

Model 6 bu iki profilin **yukarı giden** taraflarını, Model 7 ise **aşağı giden** taraflarını öğretir. “Universal” sözcüğü her gün işlem demek değildir. Aynı şema haftalık, günlük, 4 saatlik veya intraday ölçekte görülebilir; işlemin vadesini sahnenin bulunduğu üst zaman dilimi belirler.

Örnek zaman dilimi zinciri haftalık sahne → günlük kurulum → 4 saatlik giriş veya günlük sahne → 4 saatlik kurulum → 1 saatlik/15 dakikalık giriş şeklindedir. Uzun vadeli pozisyon, giriş grafiğindeki her küçük salınım yüzünden yönetilmez.

## Model 6 — Buy-side low-resistance liquidity run

::: ders
**DERS**

### Ana soru

Model 6 yalnız yukarı yönlü teslimatı işler. Başlangıç sorusu şudur: **Mevcut fiyat ile yukarıdaki hangi premium PD Array veya buy-side liquidity arasında düşük dirençli bir yol var?** Hedef eski/eşit tepe, bearish Order Block, FVG, liquidity void veya üst zaman dilimi premium bölgesi olabilir.

Son 20, 40 ve 60 işlem günlük range ölçeğe göre taranır. Mevcut fiyat tercihen discounttadır. Seasonality, COT ve SMT yönü güçlendirebilir; tek başına şart veya sinyal değildir.

### Senaryo A — Sell Model’in yukarı tarafı

Daha büyük şema sonunda düşüş üretecek olsa bile fiyat önce premium Terminus’a çıkabilir.

1. Fiyat discount veya orijinal accumulation alanındadır.
2. Yukarıda işlemden önce belirlenmiş premium hedef bulunur.
3. İlk bullish impulse oluşur; en dipteki dönüşü yakalamak gerekmez.
4. Fiyat ilk bullish FVG, Order Block, liquidity void dolumu veya sell-stop raid alanına retrace eder.
5. Bu dönüş `stage-1 reaccumulation` long fırsatıdır.
6. Üst zaman diliminde yeterli yol varsa ikinci bir reaccumulation oluşabilir.
7. Buy-side/premium Terminus’a varınca long tarafı tamamlanır.

İlk reaccumulation’ın origin–Terminus yolunun yaklaşık yüzde 20–30’luk ilk bölümünde oluşabileceği anlatılır. Bu sabit Fibonacci kuralı değil, swing’in ne kadar ilerlediğini değerlendirme sezgisidir.

### Senaryo B — Buy Model’in yukarı tarafı

1. Premiumdaki orijinal dağıtımdan fiyat discounta iner.
2. Sell-side liquidity veya açık discount PD Array alınır.
3. Bullish Market Structure Shift beklenir.
4. Sol taraftaki eski distribution alanları sağ tarafa taşınır.
5. Bu alanların accumulation/reaccumulation olarak savunulması beklenir.
6. Stage-1 veya stage-2 retracement’ında long aranır.
7. Hedef eski tepeler ve Buy Model’in orijinal konsolidasyonudur.

Bu senaryoda dip tahmin edilmez. Sell-side hedef alındıktan sonra fiyatın bullish displacement ve yapı değişimiyle niyet göstermesi beklenir.

### Formal giriş ve yönetim

Bias’ın tersine kısa süreli aşağı manipulation, tercihen haber kaynaklı volatility injection ile oluşur. London veya New York Open’da stage-1/stage-2 reaccumulation içinde 15/5 dakikalık bullish FVG, en fazla -3 projection, sell-stop raid veya bullish Entry Drill aranır. Buy limit, kaynak planında PD Array/projection birleşiminin yaklaşık 5 pip üstündedir.

Stop ilgili swing low’un **20 pip altındadır**. İlk parça +20, ikinci parça +40 pipte kapanır. +60 pip görülürse toplam açık pozisyonun yüzde 80’i kapatılır, küçük runner hedef likiditeye bırakılır. Ortak yüzde 25/50/75 stop azaltma protokolü uygulanır.

### Pyramiding sınırı

Yeni ekleme ancak Terminus’a anlamlı mesafe kaldıysa ve gerçek bir ikinci reaccumulation oluştuysa yapılır. Fiyat yolun yarısından fazlasını kat etmişse veya hedefe yaklaşık 30 pipten az kalmışsa yeni stage icat edilmez. Üst zaman dilimlerinde iki aşama daha sık; 4 saatin altındaki yapılarda tek aşama daha olağan kabul edilir.

### Model 6 kontrol listesi

- Üst zaman dilimi premium hedefi tek fiyatla belli mi?
- Uygun 20/40/60 günlük dealing range çizildi mi?
- Mevcut fiyat discountta mı?
- Sell Model’in sol tarafı mı, Buy Model’in sağ tarafı mı işlem görüyor?
- Gerekliyse sell-side alındı ve bullish MSS oluştu mu?
- Stage-1 veya kanıtlı stage-2 reaccumulation var mı?
- Giriş FVG/OTE/OB ile zaman ve hedef bağlamında mı?
- Terminus’a yeni pozisyon için yeterli yol kaldı mı?
- 20 pip stop ile 20/40/60 pip yönetimi önceden yazıldı mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Model 6 bir hedef-yol haritasıdır; tek başına giriş sinyali değildir. “Low resistance” ölçüsü tanımlanmazsa yalnız başarılı örnekler sonradan düşük dirençli diye seçilebilir. Test için aradaki zıt swing sayısı, en büyük retracement veya hedefe kadar engel sayısı gibi önceden yazılmış bir ölçü gerekir.

Stage-2, pozisyon eklemek için sonradan adlandırılmamalıdır. Yeni girişin kendi stopu ve toplam risk bütçesi olmalı; ilk işlem kâra geçti diye sınırsız risk eklenmemelidir.
:::

## Model 7 — Sell-side low-resistance liquidity run

::: ders
**DERS**

### Ana soru

Model 7, Model 6’nın aynasıdır ve yalnız aşağı yönlü teslimatı işler: **Mevcut fiyat ile aşağıdaki hangi discount PD Array veya sell-side liquidity arasında düşük dirençli bir yol var?** Hedef old/equal low, bullish Order Block, bullish FVG veya başka bir discount bölgesi olabilir.

Sell-side hareketlerin daha hızlı, sert ve kaymalı gerçekleşebileceği vurgulanır. Bu, daha büyük lot gerekçesi değil; stop emrinde slippage ve gap riskinin daha ciddi olabileceği uyarısıdır.

### Senaryo A — Sell Model’in aşağı tarafı

1. Profilin buy-side curve’ü premium hedefi tamamlar.
2. Yukarıdaki buy-side liquidity alınır.
3. Sol taraftaki reaccumulation low’ları belirlenir.
4. Bunların en yükseği bearish displacement ile kırılır; rastgele küçük bir dip kırılması yeterli değildir.
5. Bu low’un altındaki stoplar alındıktan sonra fiyatın fair value’ya dönüşü beklenir.
6. İlgili down-close mum gövdeleri, bearish FVG, Order Block veya premium OTE short alanı olur.
7. Stage-1 distribution ya da stage-2 redistribution’dan işlem alınır.
8. İlk hedef orijinal konsolidasyon; güçlü dağıtımda daha aşağıdaki sell-side liquidity’dir.

Fiyat yalnız en yüksek değil, daha aşağıdaki ilk reaccumulation alanını da kuvvetle kırıyorsa daha geniş dağıtım ihtimali düşünülür.

### Senaryo B — Buy Model’in aşağı tarafı

1. Premiumda orijinal dağıtım/konsolidasyon vardır.
2. Buradan bearish displacement başlar.
3. Orijinal alana dönüş stage-1 distribution olabilir.
4. Daha aşağıda kurulan premium FVG/OTE/Order Block dönüşü stage-2 redistribution olabilir.
5. Fiyat discount ve sell-side Terminus’a çekilir.
6. Hedefe gelince short tarafı tamamlanır; burada modelin bullish sağ tarafı başlayabilir.

Bu ikinci senaryo “controlled demolition” olarak betimlenir: Daha büyük Buy Model’in dibe giden bacağıdır. Sell Model’in zaten bearish ortamda oluşan ikinci dağıtım bacağı ise daha sert devam hareketine dönüşebilir. Bu ayrım bir garanti değil, pozisyonu hangi hedefte kapatacağını belirleyen bağlamdır.

### Formal giriş ve yönetim

Bias’ın tersine yukarı Judas Swing, mümkünse haber zamanı beklenir. London/NY Open’da 15/5 dakikalık premium bearish FVG, en fazla +3 projection, buy-stop raid ve bearish Entry Drill örtüşür. Sell limit birleşim seviyesinin yaklaşık 5 pip altındadır.

Stop ilgili swing high’ın **20 pip üstüdür**. Kâr planı +20, +40 ve +60 pipte yüzde 80 kapatma şeklindedir. Sell-side Terminus’a ulaşıldığında kaynak, özellikle Buy Model’in düşüş tarafında shortların çoğunu veya tamamını kapatmayı önerir.

### Alt zaman dilimini okuma

Bir dakikalık grafikte çok sayıda mum modeli gizleyebilir. Gürültüyü tek tek mumlarla değil dealing range’lerle azalt:

1. Smart Money Reversal’ın solundaki accumulation/reaccumulation range’lerini işaretle.
2. Bu fiyat alanlarını sağ tarafa taşı.
3. Fiyatın range içinde mitigation yapıp altından displacement üretmesini izle.
4. Kırılma sonrası premium FVG dönüşünü short için kullan.
5. Fiyat eski accumulation range’lerinin üstüne yerleşirse sell profili varsayımını iptal et.

### Model 7 kontrol listesi

- Discount hedef ve 20/40/60 günlük range belli mi?
- Haftalık order flow gerçekten bearish mi?
- Sell Model’in sağ tarafı mı, Buy Model’in sol tarafı mı işlem görüyor?
- Buy-side/premium görevini tamamladı mı?
- Nitelikli reaccumulation low gerçekten kırıldı mı?
- Bearish displacement ve premium dönüş alanı var mı?
- Stage-1/2 etiketi sonuçtan önce kondu mu?
- London/NY zamanı ve haber takvimi uyuyor mu?
- Hedef orijinal konsolidasyon mu, daha aşağı external liquidity mi?
- 20 pip stop ve 20/40/60 çıkışları hazır mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

“Controlled demolition” ile “crash” ayrımı önceden ölçü tanımlanmadığında yanlışlanamaz hâle gelir. Kâr yönetimi bu etikete dayandırılacaksa trend kuvveti, volatility percentile veya kırılan üst zaman dilimi seviyeleri gibi sabit kriterler gerekir.

Sell-side hızında stop emri istenen fiyattan dolmayı garanti etmez. Backtestte mumun stopa dokunması kadar, gerçekçi slippage ve spread senaryosu da maliyete eklenmelidir.
:::

## Model 8 — Haftalık 25 pip ve aylık yüzde 6 hedefi

::: ders
**DERS**

### Amaç

Model 8, haftada tek sade fırsattan yaklaşık **25 pip** alarak disiplin geliştirmeyi hedefler. “Aylık yüzde 6”, bileşik olarak bir yılda yaklaşık iki kat özsermaye fikrinden gelir; yüzde 6’nın on iki kez bileşiği yaklaşık yüzde 101 artıştır. Ancak 25 pip ile yüzde getiri arasında otomatik bağ yoktur. Sonuç stop mesafesi, pozisyon büyüklüğü, kazanma oranı ve maliyete bağlıdır.

Sahne haftalık range expansion; kurulum pazartesi–çarşamba ankrajı; pattern FVG, liquidity void ve likidite koşusudur.

### Setup

1. Son 20 işlem gününün dealing range’ini çıkar.
2. Haftalık mumun kapanışını değil, hangi tarafta daha fazla genişleme üretme olasılığı olduğunu belirle.
3. Girişten sonraki 50–75 pip içinde somut likidite hedefi ara; bunun içinden 25 piplik mütevazı bölüm alınacaktır.
4. Bullish haftada pazartesi, salı veya çarşamba muhtemel dip; bearish haftada muhtemel tepe ankrajı oluşsun.
5. Fiyat ankrajdan uzaklaşırken bıraktığı FVG/void veya ilgili Order Block’a Kill Zone retracement’ı yapsın.
6. 5 dakikalık Institutional Order Flow Entry Drill ile long/short yürüt.

Model haftanın mutlak tepe veya dibinden giriş şartı koymaz. Çarşamba tepe yaptıysa perşembe retracement’ından short alınabilir; amaç en iyi fiyatı kanıtlamak değil, haftalık genişlemenin ortasındaki ulaşılabilir 25 pipi almaktır.

### Hedef ve stop

Basit planda işlem +25 pipte tamamen kapatılır. Gelişmiş kullanımda fiyat 25 pipten fazla ilerleyip retrace ettikten sonra 25 pip kâr kilitlenir; 40, 60, 80 pip veya external liquidity seviyelerinde parça alınabilir. Basit ve gelişmiş yönetim aynı işlemde doğaçlama karıştırılmaz.

Kaynak stopu **15 pip**tir. Stop aynı zamanda FVG/Order Block ve setup swing’inin arkasında olmalıdır. Sabit 15 pip yapısal invalidasyonu korumuyorsa bu setup standart modele uymaz.

### Model 8 kontrol listesi

- Haftalık yön ve somut likidite hedefi net mi?
- Son 20 günlük range çizildi mi?
- Hedefe en az 25 pip, tercihen 50–75 pip temiz yol var mı?
- Haber zamanı biliniyor mu?
- Pazartesi–çarşamba ankrajı oluştu mu?
- Giriş doğru premium/discount PD Array’de mi?
- 5 dakikalık teyit London/NY Kill Zone’da mı?
- 15 pip stop yapıyı koruyor mu?
- 25 pipte tam çıkış mı, kilitleme/runner mı kullanılacağı yazıldı mı?
- Hedef sonrası o hafta durulacak mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Aylık yüzde 6 bir performans hedefidir, setup özelliği değildir. Hedefi tutturmak için işlem zorlamak veya lot büyütmek modelin disiplin amacına ters düşer. 6% aylık bileşik hesabı matematiksel olarak doğru olsa da böyle bir getirinin sürdürülebileceğine ilişkin kaynakta istatistik sunulmaz.

Başlangıç için bu modelin yararı az kural ve haftalık işlem sınırıdır. Dezavantajı haftalık biasın hâlâ öznel kalmasıdır. Yüzde hedefini tamamen çıkarıp sonucu R cinsinden ölçmek daha temiz bir test verir.
:::

## Model 9 — One Shot One Kill

::: ders
**DERS**

### Amaç

Model 9, haftanın yüksek olasılıklı tepe veya dibine yakın tek ana girişle **50–75 pip** yakalamayı hedefler. Model 8’den daha seçicidir; ideal ankrajı kaçırınca fiyatı kovalamak yerine daha küçük hedefli modele geçilir.

IPDA penceresi burada son 20 **haftadır**. Haftalık grafik yön ve makro hedefi; günlük/4 saatlik grafik PD Array ve dealing range’i; 15 dakikalık grafik London/NY OTE girişini verir. Pazartesi bilgi günü olabilir; salı ve çarşamba önceliklidir.

### Modelin likidite anahtarı

İki geçerli eşleşme vardır:

1. **Internal’dan external’a:** FVG, void veya Order Block’tan gir; eski/eşit tepe-dip dışındaki stop havuzunda çık.
2. **External’dan internal’a:** Turtle Soup biçiminde eski tepe/dip baskınından gir; range içindeki FVG, OB, void veya equilibrium’da çık.

Bu anahtar, “nerede girdim?” sorusunu “nerede çıkmalıyım?” sorusuna bağlar. Aynı sınıftan rastgele iki seviye seçilmez.

### Setup ve giriş

Bearish işlemde haftalık draw aşağıdadır. Pazartesi–çarşamba bir tepe/likidite havuzu oluşur. Buy-side raid veya premium PD Array retracement’ı görülür. London/NY Kill Zone’da 15 dakikalık OTE ve seçilen PD Array birleştiğinde short alınır. Bullish senaryo tersidir.

Formal planda OTE/PD Array yakınsamasında market order kullanılabilir. Nominal stop **20 pip**tir ve raid edilen swing’in karşı tarafında bulunmalıdır. İdeal yapı yoksa OSOK zorlanmaz.

### Hedef ve stop yönetimi

Basit seçenek +50 pipte tamamını kapatmaktır. Alternatifte +50 pipte yüzde 80 kapatılır, kalan yüzde 20 75 pipe veya uzaktaki likiditeye taşınır.

Stop hemen başa başa çekilmez. Yaklaşık +25 pipte başlangıç riski yüzde 25 azaltılabilir; +37,5 pip civarında break-even düşünülebilir. Daha bağlamsal kural, stopu ancak daha düşük zaman dilimli scalp/day-trade modelinin kendi likidite hedefi gerçekleştiğinde taşımaktır. Çünkü o hedef sonrası retracement olasılığı artar.

### İleri seviye iki-emir yapısı

Derste toplam yüzde 2 riski iki ayrı yüzde 1’lik emre bölme örneği verilir. Birinci emir Model 8 mantığıyla yakın hedeflerde ödeme alır. İkinci emir OSOK mantığıyla 1 ve 1,5 range projection veya uzaktaki eşit tepe/dibe tutulur. Pyramiding yalnız equilibrium geçilmeden, kalan hedef mesafesi varken ve yeni redistribution/reaccumulation girişi oluştuğunda düşünülür.

Bu, yeni başlayan varsayılanı değildir. İlk model tek emir ve tek hedefle test edilmelidir.

### Model 9 kontrol listesi

- Son 20 haftalık dealing range çizildi mi?
- Weekly draw on liquidity tek yönde net mi?
- Hedefe 50–75 pip gerçek alan var mı?
- Giriş internal mı external mı; hedef karşı sınıftan mı?
- Pazartesi–çarşamba ankrajı/raid oluştu mu?
- 15 dakikalık OTE Kill Zone içinde mi?
- 20 pip stop yapının dışında mı?
- +50 tam çıkış mı, yüzde 80/20 planı mı seçildi?
- Alt zaman dilimi hedefi oluşmadan stop taşınmayacak mı?
- İdeal giriş kaçtıysa fiyat kovalanmayacak mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Haftanın tepe/dibini önceden seçmek Model 9’un merkezindeki en zor ve en öznel adımdır. “Salı çoğu zaman tepe/dip yapar” sözü test edilmemiş varsayım olarak tutulmalıdır.

İki emir aynı giriş ve aynı stopu taşıyorsa bunlar iki bağımsız işlem değil, toplam tek risk pozisyonudur. İlk emrin kârı ikinci emrin riskini psikolojik olarak görünmez yapmamalıdır. Bütün emirler ve eklemeler tek toplam risk bütçesinde hesaplanır.
:::

## Model 10 — External range’den karşı external range’e

::: ders
**DERS**

### Amaç ve yapı

Model 10, dış likidite baskınını giriş bağlamı, range’in karşı tarafındaki dış likiditeyi çıkış olarak kullanır. Hedef sınıfı haftada **50–75 pip**tir. Sahne haftalık range expansion; kurulum pazartesi, salı veya çarşamba ankrajı; pattern external range liquidity run’dır.

Son 20, 40 ve 60 işlem günlük IPDA pencereleri incelenir. Haftalık/4 saatlik grafik bağlam, 15 dakikalık grafik giriş verir. Economic calendar ve London/NY Kill Zone işlemin zamanını sınırlar.

### Bearish prosedür

1. Haftalık expansion yönünü aşağı olarak belirle.
2. Mevcut dealing range’in üstündeki eski tek tepe veya eşit tepeleri işaretle.
3. Fiyat bu buy-side liquidity’yi raid etsin.
4. Raid premiumda ve bearish Order Block, FVG veya liquidity void ile örtüşsün.
5. London/NY Kill Zone’da 15 dakikalık giriş tetikleyicisi oluşsun.
6. Raid edilen eski kısa vadeli tepenin **üstünde** short aç.
7. Karşı taraftaki eski dip veya sell-stop likiditesinin **altında** kâr al.

Bullish prosedür aynadır: Eski dip altında sell-side raid, discount PD Array, long giriş ve eski tepe üstünde çıkış. Çift tepe/dip zorunlu değildir; tek ve işlemden önce belirlenmiş swing de kullanılabilir.

### Hedef önceliği ve yönetim

Soldaki, uzun süredir dokunulmamış üst zaman dilimi tepesi/dibi; yeni oluşmuş küçük swing’den daha yüksek öncelik taşıyabilir. Ancak hedefin gerçekten 50–75 pip erişilebilir alan sunması gerekir.

Resmî planda iki emir kullanılır: İlki +50 pipte, ikincisi 50–75 pip aralığında kapanır. Alternatif üç kâr alma dağılımı yüzde 50, yüzde 25, yüzde 25 olabilir. Hedefin yüzde 50’sinde başlangıç riski yüzde 25 azaltılabilir; yüzde 75’inde stop break-even’a alınabilir.

Nominal stop **20 pip**tir. Stop raid ekstremi ve giriş PD Array’inin karşı tarafında olmalıdır. Bu yapısal koruma 20 pipe sığmıyorsa setup standart Model 10’a uymaz.

### Model 10 kontrol listesi

- 20/40/60 günlük range’ler sabit mi?
- Haftalık expansion yönü net mi?
- Bias’ın ters tarafındaki external liquidity gerçekten alındı mı?
- Raid doğru premium/discount yarısında ve bir PD Array’de mi?
- Giriş Kill Zone’da mı?
- Karşı external target 50–75 pip mesafede mi?
- Eski ve yeni hedef önceliği işlemden önce yazıldı mı?
- 20 pip stop raid ekstremini koruyor mu?
- İki-emir veya üç-parça planından yalnız biri seçildi mi?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Bu modelin en net cümlesi “bearishken eski tepenin üstünde sat, eski dibin altında kapat; bullishken tersini yap” kuralıdır. Fakat dealing range önceden sabitlenmezse aynı tepe bir ölçekte external, başka ölçekte internal olabilir.

Raid tek başına dönüş kanıtı değildir. Bias, konum, zaman ve displacement tetikleyicisi çıkarıldığında model sıradan biçimde her tepenin üstünde short, her dibin altında long açmaya dönüşür.
:::

## Model 11 — Internal girişten günlük external hedefe 30 pip

::: ders
**DERS**

### Amaç ve zaman dilimi zinciri

Model 11, gün içinde **30 pip** teslimatı hedefleyen “bread and butter” modelidir. Sık görünmesi onu başlangıç için kolay yapmaz; düşük R katı ve çok fırsat, daha fazla seçicilik gerektirir.

- Haftalık grafik: 50–100 piplik olası expansion yönü.
- Günlük grafik: hedeflenecek eski günlük tepe/dip.
- 60 dakika: retracement ve OTE sahnesi.
- 15 veya 5 dakika: giriş hassasiyeti.
- London veya New York Open: zaman filtresi.

Modelin ana eşleşmesi **internal range liquidity giriş → external range liquidity çıkış**tır.

### Setup ve giriş

Bearish işlem:

1. Haftalık expansion ve günlük draw aşağıdadır.
2. Aşağıdaki eski günlük dip veya session low hedef olarak yazılır.
3. 60 dakikalık fiyat swing’i premiuma retrace eder.
4. Premium OTE, bearish Order Block, FVG, SIBI veya liquidity void ile örtüşür.
5. London/NY Kill Zone’da 15/5 dakikalık bearish giriş tetiklenir.
6. Kaynak yürütmesinde short, 60 dakikalık swing’in yüzde 62 seviyesinin 5 pip altından planlanır.

Bullish işlemde discount retracement, bullish internal array ve yüzde 62’nin 5 pip üstünden long kullanılır. Hedef eski günlük veya seans tepesidir.

Hedef yalnız 20–30 pip uzaktaysa modelin genişleme alanı zayıftır. Kaynak, 30 pip hedefe rağmen üst zaman diliminde 50–100 piplik yol görmeyi tercih eder.

### Stop ve yönetim

Nominal stop **20 pip**tir. Basit planda tek emir +30 pipte tamamen kapanır.

- +15 pipte stop yaklaşık 5 pip daraltılabilir.
- +20 pipte stop break-even’a gelir.
- İleri kullanımda +30 pipte ana pozisyon kapanır, küçük runner günlük external liquidity’ye taşınabilir.

Hedef emri eski tepe/dibin tam noktasına bırakıldığında spread veya veri farkı dolumu engelleyebilir. Kaynak ana pozisyonu hedefe 10–15 pip kala kapatma örnekleri verir; bu tampon testte sabitlenmelidir.

### Contrarian kullanım

Haftalık yönün tersine işlem yalnız ilk expansion **Terminus’a ulaştıktan sonra** düşünülür. External hedef alınmalı, belirgin Smart Money Reversal/MSS oluşmalı ve yeni reaccumulation/redistribution internal girişi görülmelidir. Sırf fiyat hızlı düştü veya yükseldi diye karşı tarafa geçilmez. Yeni öğrenci modelin yalnız ana-bias sürümünü çalışmalıdır.

### Model 11 kontrol listesi

- 20 günlük range ve weekly draw çizildi mi?
- 30 pip hedef için yeterli runway var mı?
- Hedef eski günlük veya session external liquidity mi?
- 60 dakikalık retracement doğru premium/discount tarafında mı?
- OTE, FVG/OB/imbalance ile örtüşüyor mu?
- 15/5 dakikalık tetikleyici Kill Zone’da mı?
- 20 pip stop yapıyı koruyor mu?
- +15 ve +20 stop kuralları yazıldı mı?
- +30 tam çıkış mı, runner mı kullanılacağı belli mi?
- Contrarian düşünülüyorsa ilk Terminus gerçekten tamamlandı mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

30 pip hedef ve 20 pip stop brüt olarak 1,5R sunar; maliyet sonrası daha düşüktür. Kazanma oranı ayrıca ölçülmeden “sık oluşan bread and butter” ifadesi kârlılık kanıtı değildir.

Günlük dış hedef alınmasa bile +30 pip görülmüşse model kendi tanımına göre görevini tamamlamıştır. Sonucu “asıl hedef sonra geldi” diye yeniden sınıflandırmak test disiplinini bozar.
:::

## Model 12 — Order Block retesti sonrası FVG ile 20 pip scalp

::: ders
**DERS**

### Amaç ve modelin özel sırası

Model 12 tek seans içinde **20 pip** hedefler. Ana sahne günlük range expansion; 15 dakika kurulum alanı, 5 dakika giriş grafiğidir. London ve New York Open önceliklidir.

Bu model “Order Block veya FVG gördüm, girdim” değildir. Olay sırası zorunludur:

1. Üst zaman dilimi seviyesinde bir Order Block oluşur.
2. Fiyat bu Order Block’ı retest eder.
3. Retest sonrası belirgin expansion/displacement ve tercihen MSS oluşur.
4. Bu yeni expansion leg’inin içinde bir FVG meydana gelir.
5. Fiyat FVG’ye geri döner.
6. Geri dönüş Kill Zone içindeyse giriş alınır.
7. Karşı 15 dakikalık dış likidite veya 20 pip hedeflenir.

İlk Order Block’ın yanında FVG bulunması şart değildir. İşleme konu olan FVG, **Order Block retestinden sonraki displacement** içinde oluşmalıdır. Böylece ilk giriş kaçtıktan sonra daha doğrulanmış ikinci giriş aranır.

### Bullish ve bearish yürütme

Bullishte günlük/seans yönü yukarıdır. Bullish Order Block retesti yukarı displacement üretir. Expansion içindeki, parent swing’in discount yarısındaki FVG’ye dönüşte buy limit düşünülür. Hedef önceki gün/seans tepesi veya 20 pip koşudur.

Bearishte Order Block retesti aşağı displacement üretir. Premiumdaki bearish FVG’nin girişe yakın sınırına dönüşte sell limit düşünülür. Hedef önceki gün/seans dibi veya 20 pip koşudur.

Kaynak planı 5 dakikalık Entry Drill seviyesinde short için 5 pip aşağı, long için 5 pip yukarı tampon kullanır. Bu Forex’e özgü pip anlatımıdır.

### Stop ve yönetim

Resmî başlangıç stopu **20 pip**tir ve ilgili FVG/Order Block ile setup swing’inin karşı tarafında olmalıdır. FVG’nin kısmen veya tamamen dolması tek başına invalidasyon değildir; korunması gereken swing kırılırsa tez bozulur.

- +10 pipte başlangıç stop mesafesi 10 pip daraltılabilir.
- +15 pipte stop break-even’a gelir.
- Basit planda tek pozisyon +20 pipte kapanır.
- Alternatifte +20’de yüzde 80 kapanır, yüzde 20 runner sonraki PD Array’e bırakılır.

Kaynak 2–5 pip stopların spread ve normal fiyat hareketi tarafından kolayca alınabileceğini, öğretim planında yaklaşık 20 pipin daha gerçekçi olduğunu vurgular.

### Geçersizlik

Order Block retesti displacement üretmiyorsa; MSS yoksa; FVG yanlış premium/discount tarafındaysa; giriş dönüşü Kill Zone dışında kalıyorsa; hedefe 20 pip alan yoksa veya savunulması gereken swing kırılıyorsa işlem yoktur.

### Model 12 kontrol listesi

- Günlük/seans expansion yönü belli mi?
- 15 dakikada 20 piplik hedef alanı var mı?
- Önceki gün/seans dış likiditesi işaretli mi?
- Geçerli Order Block retest edildi mi?
- Retest sonrası displacement/MSS gerçekten oluştu mu?
- Seçilen FVG bu expansion leg’inin içinde mi?
- FVG doğru premium/discount yarısında mı?
- Dönüş London/NY Kill Zone’da mı?
- 20 pip stop setup yapısını koruyor mu?
- +10, +15 ve +20 yönetimi emirden önce hazır mı?
- İlk hedef sonrası aynı seans yeni işlem aranmayacak mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

20 pip hedefte işlem maliyeti ve stop dolumu sonucu belirgin etkiler. Çok küçük stop kullanarak kâğıt üzerindeki R’ı büyütmek, maliyeti R cinsinden de büyütür.

Model sıralı olduğu için diğer kısa vadeli modellere göre daha kolay operasyonelleştirilebilir. En kritik test kararı, “displacement” ve “MSS” için kaç mum/kaç tick şartı koyulacağıdır. Bu tanım sonuca bakarak değişmemelidir.
:::

## Model 13 — 2022 index futures modeli

::: ders
**DERS**

### Amaç ve zaman pencereleri

Son video, önceki 12 modelden sonra eklenen ve özellikle **index futures** için anlatılan Model 13’tür. Ana fikir intraday likidite baskını sonrası kısa vadeli yapı değişimini, oluşan FVG’ye dönüşte işlemektir.

Forex için genel pencere 07:00–10:00 New York; index futures AM penceresi **08:30–11:00 New York** olarak verilir. PM hazırlığı 12:00–13:00 lunch high/low’larını izler; işlem penceresi ağırlıkla **13:30–15:30 New York** arasındadır.

### AM bearish kurulum

1. Üst zaman dilimi anlatısı ve hedef aşağıdadır.
2. 08:30, 09:30, 10:00 veya 10:30 çevresinde eski/eşit tepe üzerindeki buy-side liquidity raid edilir.
3. 5 dakikadan 1 dakikaya kadar ilk uygun grafikte yakın swing low, hızlı bearish displacement ile kırılır.
4. Displacement bir bearish FVG bırakır; FVG tercihen parent dealing range equilibrium’unun üstündedir.
5. Fiyat FVG’ye döndüğünde, retracement yönünden ilk temas edilen alt sınıra sell limit yerleştirilir.
6. Stop, FVG’yi oluşturan dış mum/swing tepesinin arkasındadır.
7. Hedef, equilibrium altındaki en yakın discount PD Array; önceki session low, previous-day low, FVG veya bunların altındaki sell-side liquidity’dir.

### AM bullish kurulum

Eski/eşit dip altındaki sell-side raid edilir. Yakın 5–1 dakikalık swing high bullish displacement ile kırılır ve bullish FVG bırakır. FVG tercihen equilibrium’un altındadır. Geri dönüşte girişe yakın üst sınırdan buy limit düşünülür; stop outer swing low’un arkasındadır. Hedef premium PD Array, önceki session/day high veya buy-side liquidity’dir.

Beş dakikadan aşağı inerken **ilk FVG’yi üreten grafik** kullanılır; sonradan daha güzel görünen bir zaman dilimi seçilmez.

### PM kurulum

Bearish PM setup, AM session high veya lunch hour high üzerindeki buy-side raid’i; bullish PM setup, AM/lunch low altındaki sell-side raid’i kullanır. Sabah seansında relative equal highs/lows varsa bunlar 12:00–13:00 içindeki tek bir lunch swing’inden daha önceliklidir. Sonra aynı raid → displacement/MSS → FVG → retracement sırası uygulanır.

PM zaman işaretleri:

- 13:30: Lunch hacmi tamamlanır, volatilite dönebilir.
- 14:00: PM trendi ve AM stop baskını gelişebilir.
- 14:30: Gün seansının son iki saati başlar.
- 15:00: Son saat.
- 15:30: Market-on-close koşulları yaklaşır.

Bu saatlerin her biri işlem sinyali değildir; setup henüz oluşmadıysa yalnız yeni gözlem anıdır. 11:00 setup’ı özellikle perşembe/cuma reversal veya TGIF bağlamında daha anlamlı kabul edilir.

### Risk ve kâr alma

Kaynak işlem başına toplam özsermayenin en fazla yüzde 2’sini, tercihen yüzde 0,5–1’ini önerir. Sık setup nedeniyle daha az risk kullanılması gerektiğini vurgular. Tam kayıptan sonra sonraki risk yarıya iner; kaybın yarısı geri kazanılana kadar eski seviyeye dönülmez.

Short hedefleri equilibrium altındaki en yakın discount PD Array, önceki session/day low veya bunların altındaki FVG/likiditedir. Long hedefleri bunun aynasıdır. Birden çok seviye varsa partial kullanılabilir; fakat oranlar işlemden önce sabitlenmelidir.

### Model 13 kontrol listesi

- Enstrüman gerçekten index futures mı; kontrat/tick değeri biliniyor mu?
- AM veya PM penceresi New York saatine göre doğru mu?
- İşlemden önce somut karşı PD Array hedefi yazıldı mı?
- Önce buy-side/sell-side raid oluştu mu?
- Yakın swing displacement ile kırıldı mı?
- Displacement gerçek FVG bıraktı mı?
- FVG doğru equilibrium tarafında mı?
- 5’ten 1 dakikaya inerken ilk oluşan geçerli grafik seçildi mi?
- Limit, stop ve hedef aynı anda planlandı mı?
- Minimum kontratın parasal riski bütçeyi aşıyorsa işlem atlanacak mı?
- Seans başına tek seçkin setup sınırı var mı?
:::

::: eleme
**UYGULANABİLİRLİK KONTROLÜ**

Model 13, raid → MSS → FVG → retracement sırasını açık verdiği için serinin daha kodlanabilir modellerindendir. Yine de hangi swing’in “yakın”, hangi hareketin “hızlı displacement” ve hangi FVG’nin “ideal” olduğu tanımlanmalıdır.

Bir dakikalık grafikte spread, tick size, komisyon, sıra önceliği ve slippage teorik sonucu kolayca değiştirebilir. Backtest yalnız mum high/low’una bakmamalı; emir tipini ve gerçekçi dolum varsayımını da kaydetmelidir.
:::

# BÖLÜM IV — Bu öğretilere göre nasıl işlem almalıyız?

## Kısa cevap

**On üç modeli birlikte kullanmamalıyız.** İşlem ufkumuza ve piyasamıza uyan tek modeli seçmeli, belirsiz sözcüklerini ölçülebilir kurallara çevirmeli, maliyet dâhil yeterli örnek üzerinde test etmeli ve daha sonra ileriye dönük demo ortamında aynı kuralları değiştirmeden uygulamalıyız.

Gerçek zamanlı karar sırası şudur:

1. Önce tek bir yüksek zaman dilimi hedefi belirle.
2. Fiyatın doğru premium/discount tarafına gelmesini bekle.
3. Seçilen modelin zorunlu olay sırası tamamlanmadan emir verme.
4. Stopu yapısal geçersizliğe yerleştir.
5. Pozisyon büyüklüğünü stopa göre hesapla.
6. Hedefleri ve stop taşıma kuralını emri göndermeden yaz.
7. İşlemden sonra sonucu değil, kurala uyumu değerlendir.

Bu yedi adımın herhangi biri eksikse doğru eylem **işlem almamaktır**.

## Önce doğru modeli seç

| İhtiyaç | Uygun başlangıç adayı | Neden | Şimdilik uzak dur |
|---|---|---|---|
| Forex, yalnız New York, gece taşıma yok | Model 1 | Gün/saat/giriş/stop açık | 3–4 |
| Forex, haftada tek küçük hedef | Model 8 | 25 pip ve düşük işlem sıklığı | 9 pyramiding |
| Forex, tek seans day trade | Model 5 veya 12 | Seans ve setup sırası belirli | Aynı anda ikisini karıştırma |
| Haftalık swing | Model 10 | External→external kuralı sade | Model 4 |
| Index futures intraday | Model 13 | Raid→MSS→FVG sırası açık | 1–5 pip Forex tamponları |
| COT ve mevsimsellik araştırması | Model 3 | Daha az değişkenli swing | Model 4’ün üçlü filtresi |

Model 6 ve 7 giriş sistemi seçmekten çok, mevcut setup’ın büyük market-maker profilinin hangi tarafında olduğunu anlamak için kullanılmalıdır. Model 11 ve 12 sık oluşur; bu nedenle kolay değil, aşırı işlem riski yüksek modellerdir.

## Tek sayfalık kural kartını doldur

İşlemden önce aşağıdaki alanların tamamı tek bir iş kartında bulunmalıdır:

| Alan | Yazılacak bilgi |
|---|---|
| Piyasa ve kontrat | Örneğin EURUSD spot veya Micro E-mini Nasdaq futures |
| Model | Yalnız bir numara |
| Grafik saat dilimi | America/New_York |
| Sahne | Haftalık/günlük expansion tanımı |
| Dealing range | İki sabit ankraj ve equilibrium |
| Tek hedef | Tam fiyat seviyesi ve liquidity sınıfı |
| Kurulum | Raid, OB retesti, day-of-week vb. |
| Tetikleyici | OTE, MSS+FVG, IOFED vb. |
| Giriş | Emir tipi ve tam fiyat formülü |
| Stop | Yapısal geçersizlik ve fiyat |
| Hedefler | Fiyat, R ve kapatılacak yüzde |
| Zaman çıkışı | Seans/Perşembe/Cuma kuralı |
| Risk | Toplam parasal tutar; tüm emirler dâhil |
| Yeniden giriş | Var/yok ve nesnel şartı |
| İşlem yok | Kurulumu iptal eden maddeler |

“Weekly bias bearish, güzel FVG bulursam satarım” bir kural kartı değildir. “20 günlük range’in üst yarısında, önceden işaretli tepe raid edildikten ve 5 dakikalık swing low displacement ile kırıldıktan sonra ilk bearish FVG dönüşünde; stop raid high üstünde, hedef önceki gün low” gibi bir cümle test edilebilir bir başlangıçtır.

## Hafta sonu hazırlığı

1. Yalnız takip edeceğin bir veya iki piyasayı seç.
2. Orta ve yüksek etkili ekonomik olayları New York saatiyle işaretle.
3. Modelin istediği 20/40/60 günlük veya 20 haftalık range’i çıkar.
4. Üstte ve altta external liquidity ile önemli internal PD Array’leri işaretle.
5. Bir bullish, bir bearish senaryo yaz; fakat işlem gününde yalnız kanıtlanan tarafı kullan.
6. Her senaryoya tek hedef, invalidasyon ve minimum gerekli alan koy.
7. Setup yoksa hangi gün/saatte ekranı kapatacağını önceden belirle.

Buradaki amaç haftayı tahmin etmek değil, olası koşulları önceden tanımlamaktır. Pazar akşamı çizilmeyen bir seviye, çarşamba günü fiyat döndükten sonra “zaten hedefimdi” diye eklenmemelidir.

## İşlem günü protokolü

### Seans öncesi

1. Grafik saatini ve günün haberlerini yeniden doğrula.
2. Dealing range ankrajlarını değiştirmeden mevcut fiyatın premium/discount konumunu yaz.
3. Ana hedefin henüz alınmadığını kontrol et.
4. Giriş ile hedef arasında modelin istediği minimum alanı, spread ve komisyon sonrası ölç.
5. Stop mesafesi risk bütçesine sığmıyorsa setup’ı ele.

### Seans içinde

1. Kill Zone başlamadan giriş yapma; model açıkça başka pencere vermiyorsa bekle.
2. Bias’ın tersine manipulation/raid veya ilgili Order Block retestini izle.
3. Gerekli displacement ve yapı değişiminin tamamlanmasını bekle.
4. FVG/OTE/PD Array dönüşünde yalnız önceden seçilmiş emir tipini kullan.
5. Giriş, stop ve hedefi aynı anda bracket/OCO mantığıyla yerleştir; plansız çıplak pozisyon bırakma.
6. Emir dolmadıysa fiyatı kovalama.

### İşlemden sonra

1. Stop veya hedef geldiğinde emirleri değiştirme gerekçesini değil, önceden yazılan kuralı uygula.
2. Aynı seans için işlem sınırına ulaştıysan grafiği kapat.
3. Giriş öncesi ve çıkış sonrası ekran görüntüsü al.
4. Sonucu R cinsinden, maliyet sonrası kaydet.
5. “Kazandım/kaybettim” yerine “kurala uydum/uymadım” alanını ayrıca doldur.

## İki somut ama eğitim amaçlı uygulama şablonu

### Şablon A — Forex için Model 1

1. Hafta sonu EURUSD’nin son 20 işlem günlük range’ini çiz.
2. Günlük yapıda sıradaki eski tepeyi tek bullish hedef olarak seç.
3. Hedef alınmadığı ve fiyat premiuma geçmediği sürece pazartesi–çarşamba long ara.
4. 07:00–10:00 New York’ta London yükselişinin aşağı retracement’ını bekle.
5. 5 dakikalık bullish OTE ve mümkünse sell-side raid/displacement birleşsin.
6. Yüzde 62’nin 5 pip üstündeki limit fiyatını, anchor low’un 5 pip altındaki stopu ve 15/20 pip hedefleri önceden gir.
7. Stop olursa aynı gün bitir; 10:00 sonrası yeni işlem açma.

Bu bir güncel EURUSD sinyali değildir. Kuralların nasıl tek karta indirileceğini gösterir.

### Şablon B — Index futures için Model 13

1. AM seansından önce üst zaman dilimindeki tek premium veya discount hedefi belirle.
2. 08:30–11:00 New York arasında hedefin ters tarafındaki eski/eşit tepe veya dip raid’ini bekle.
3. 5 dakikadan 1 dakikaya sırayla in; yakın swing’in displacement ile kırıldığı ilk grafiği kullan.
4. Displacement içindeki ilk geçerli FVG’yi işaretle.
5. FVG doğru equilibrium tarafındaysa dönüşte limit emir düşün.
6. Stopu raid/displacement swing’inin arkasına, hedefi karşı PD Array’e koy.
7. Minimum micro kontratın stopa kadar parasal kaybı bütçeyi aşıyorsa işlem alma.
8. Hedef veya stop sonrası aynı AM seansında yeni setup arama.

Bu da güncel bir futures sinyali değil, olay sırasını operasyonel hâle getiren örnektir.

## Pozisyon büyüklüğü ve toplam risk

Önce parasal risk bütçesi hesaplanır:

`Risk bütçesi = hesap özsermayesi × işlem başına risk oranı`

Sonra pozisyon büyüklüğü hesaplanır:

`Adet = risk bütçesi ÷ (stop mesafesi × birim pip/tick değeri + tahmini işlem maliyeti)`

Sonuç her zaman aşağı yuvarlanır. Futures kontratları bölünemez; bir micro kontratın riski bile bütçeyi aşıyorsa yapılacak işlem kontrat açmak değil, setup’ı atlamaktır.

Kaynak planlar çoğunlukla yüzde 1, bazı ileri örneklerde toplam yüzde 2 risk gösterir. **Yüzde 2 bir hedef değil, agresif bir üst sınırdır.** Doğrulanmamış bir modelde gerçek para riski sıfır olmalıdır. Geçmiş ve ileriye dönük testten sonra canlı deneme seçilecekse, çok küçük kesirli risk ve kaybedilmesi yaşam giderlerini etkilemeyecek sermaye kullanılmalıdır.

Birden çok emir açmak toplam riski çoğaltmaz. İki emir varsa örneğin toplam yüzde 0,5 risk ikiye bölünür; her birine ayrı yüzde 0,5 verilmez. Korele paritelerde aynı dolar fikrini üç kez açmak da üç bağımsız işlem değildir.

Tam 1R kayıp sonrası kaynak protokolü bir sonraki risk oranını yarıya indirir. Azaltılmış riskte bir kayıp daha gelirse yeniden yarıya iner. Önceki kaybın yarısı geri kazanılınca bir üst seviyeye dönülebilir. Risk, kayıptan sonra büyütülmez; martingale kullanılmaz.

## Stop, break-even ve partial seçimi

Kaynakta iki ayrı stop yönetimi ailesi vardır:

| Aile | Kullanım | Kural |
|---|---|---|
| Yüzde 25/50/75 | Uzun hedefli planlar | Hedefin %25’inde risk %25, %50’sinde %50 azalır; %75’te BE |
| Sabit pip aşamaları | Model 11–12 | M11: +15/+20; M12: +10/+15 |

Bir işlemde iki aile karıştırılmaz. Break-even her zaman güvenli değildir: Kazananı 0R’de kesip kaybedeni -1R’de bırakan bir dağılım oluşturabilir. Stop yalnız kaynak modelin önceden yazılmış kilometre taşı gerçekleştiğinde taşınır.

Partial oranı da test değişkenidir. Yüzde 80/20, yüzde 50/25/25 veya tam çıkıştan biri seçilir. Sonuç iyi göründüğü için geçmişteki her işleme farklı oran uygulanmaz.

## Ne zaman kesinlikle işlem almamalıyız?

- Üst zaman diliminde tek bir likidite hedefi seçilemiyorsa.
- Dealing range ankrajları sonuç görülünce değişiyorsa.
- Hedefe modelin nominal hedefinden daha az alan kaldıysa.
- Setup’ın zorunlu raid, retest, displacement veya MSS sırası tamamlanmadıysa.
- Giriş ideal bölgeden uzaklaştıysa ve fiyat kovalanacaksa.
- Yapısal stop, risk bütçesine sığmıyorsa.
- Economic calendar bilinmiyor veya saat dönüşümü doğrulanmadıysa.
- Modelin seans/hafta hedefi zaten alındıysa.
- Aynı kaybı geri alma, sıkıntıyı giderme veya sosyal medyaya sonuç gösterme isteği varsa.
- İşlem maliyeti beklenen avantajın büyük bölümünü tüketiyorsa.
- Kural kartında “yorumuma göre”, “güçlü görünürse” gibi tanımsız merkezi ifadeler kalmışsa.

## Gerçek paradan önce doğrulama protokolü

### Aşama 1 — Kuralları dondur

Tek bir model seç. Swing, displacement, FVG, raid, bias ve hedef önceliğini sayısal veya açık evet/hayır ölçütleriyle tanımla. Giriş, stop, hedef, saat, haber filtresi ve yeniden giriş kuralını sonuç verisini görmeden yaz. Bu sürüme bir isim ve tarih ver.

### Aşama 2 — Geçmiş örneklem

En az **100 kapanmış işlem** toplamadan sonuç yorumlama. Her işlemde şu alanları kaydet:

- Tarih, piyasa, gün ve seans.
- Model sürümü.
- Long/short ve üst zaman dilimi hedefi.
- Giriş, stop, hedef ve planlanan R.
- Spread, komisyon, slippage ve finansman.
- Maksimum lehte hareket, maksimum aleyhte hareket.
- Net R sonucu.
- Kurala uyum veya ihlal.
- Setup’ın gelmediği günler.

Yalnız çalışan örnekleri sayma. Kurulum beklenip oluşmayan günler ile geçerli olup stop olan işlemler veri setinin parçasıdır.

### Aşama 3 — Ayrılmış veri

Kuralları geliştirirken kullanılan dönem ile son değerlendirme dönemini kronolojik ayır. Son bölümü kuralları değiştirmek için kullanma. Strateji yalnız geliştirme döneminde güzel, ayrılmış dönemde zayıfsa yeni sermaye gerekçesi yoktur.

### Aşama 4 — İleriye dönük demo

Kaynak dersler uzun süre kâğıt ve demo çalışma önerir. Takvim süresinden daha önemlisi, aynı kurallarla yeterli sayıda gerçek zamanlı karar vermektir. Emir dolumu, haber kayması ve psikolojik müdahaleler bu aşamada görünür.

### Aşama 5 — Karar ölçütü

Yalnız kazanma oranına bakma. Net beklentiyi hesapla:

`Beklenti = kazanma oranı × ortalama kazanç R − kaybetme oranı × ortalama kayıp R − ortalama maliyet R`

Canlı deneme ancak maliyet sonrası beklenti pozitif, ayrılmış veri ve demo sonucu aynı yönde, drawdown kabul edilebilir ve kurallar uygulayıcıdan bağımsız tekrar edilebilir olduğunda düşünülebilir. Bu koşullardan biri yoksa sonuç “daha fazla lot” değil, **işlem yok**tur.

## İşlem günlüğü şablonu

| Alan | Kayıt |
|---|---|
| Tarih / piyasa / seans |  |
| Model ve sürüm |  |
| HTF draw on liquidity |  |
| Dealing range ankrajları |  |
| Premium / discount |  |
| Kurulum sırası |  |
| Tetikleyici |  |
| Giriş / stop / hedef |  |
| Planlanan risk ve R |  |
| Gerçek dolum ve maliyet |  |
| Net sonuç, R |  |
| MFE / MAE |  |
| Kurala uyum |  |
| Ekran görüntüsü |  |
| Tek cümlelik ders |  |

## Sonuç — yarın ne yapmalıyız?

Yarın canlı piyasada on üç modeli taramak yerine şu işi yap:

1. İşlem yaptığın piyasaya göre **Model 1, 8, 10, 12 veya 13’ten birini** seç.
2. O modelin tek sayfalık kural kartını doldur.
3. Grafiği New York saatine getir ve bir geçmiş ayı bar-replay ile çalış.
4. Her geçerli ve geçersiz günü kaydet.
5. İlk 100 işlemi, kural değiştirmeden ve maliyet ekleyerek tamamla.
6. Sonuç pozitifse aynı modeli demo ortamında ileriye dönük uygula.
7. Canlı sermaye ancak bu iki aşama aynı davranışı gösterirse düşünülür.

Başlangıç için en önemli kazanç pip değildir. **Aynı koşulu, sonucu bilmeden aynı biçimde tanıyabilmektir.** Bunu yapamıyorsan yeni bir ICT kavramı eklemek yerine mevcut kuraldaki belirsizliği kapatmalısın.

## Risk için bağımsız okuma

ABD CFTC’nin yatırımcı uyarısı, kaldıraçlı OTC Forex’te kaldıraç nedeniyle bütün marjın ve bazı koşullarda daha fazlasının kaybedilebileceğini; yalnız kaybı karşılanabilir risk sermayesiyle işlem yapılmasını ve demo ortamında pratik yapılmasını hatırlatır. Bu kaynak ABD düzenlemesi bağlamındadır ama kaldıraç ve işlem maliyeti uyarıları geneldir: [CFTC — Forex işleminden önce bilinmesi gerekenler](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html) ve [CFTC — Forex dolandırıcılıklarına karşı rehber](https://www.cftc.gov/LearnAndProtect/forexfrauds).

Bu rehber, kaynak transkriptteki yöntemleri öğretir ve ölçülebilir hâle getirir; hiçbir piyasa, yön veya getiri için güncel tavsiye vermez.
