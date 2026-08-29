# ICT Mentorship — Haziran 2017
## Onuncu ay · 19 video · Dört varlık sınıfı: emtia, tahvil, endeks, hisse senedi · Eleme notları

Bu belge iki iş yapıyor. Önce her videoyu **öğretiyor** — kavramları, prosedürleri, sayıları ve videonun kendi gerekçesini, olduğu gibi ve değerlendirmesiz. Sonra her videoyu **eliyor** — hangi iddia sonucu bilinmeden yazılabilir, hangisi yazılamaz, hangi kural yanlışlanabilir.

## Bu ayın karakteri

Dokuz ay boyunca içerik döviz üzerineydi ve ölçülebilirlik, kuralın **grafiğe bakıp "hangisi" diye sorup sormadığına** bağlıydı. Haziran bambaşka bir yere gidiyor: ay, dört ayrı varlık sınıfına — emtia, tahvil, endeks, hisse senedi — ayrılmış **on dokuz video**, ve içeriğin neredeyse tamamı **dışarıdan doğrulanabilir veriye** dayanıyor.

CFTC'nin haftalık COT raporu. barchart.com'un spread grafiği. Açık pozisyon serileri. Sözleşme spesifikasyonları. Seans saatleri. Üç adı konmuş endeks arasındaki ayrışma. Investors Business Daily'nin temel tarama kriterleri. Bunların hiçbiri "bu bir order block mı" sorusuna bağlı değil — hepsi ya bir veri kaynağından okunuyor ya bir aritmetik işlemle çıkıyor.

Sonuç: **serinin en yüksek ölçülebilir oranı, ve farkla.** Ama bununla birlikte gelen ikinci bulgu daha ilginç:

**Bu ayın ölçülebilir içeriğinin neredeyse hiçbiri özgün değil — ve bu ay, ilk kez, videonun kendisi bunu söylüyor.**

- COT yöntemi: *"Everything I'm going to teach you here is pretty much **what I learned from Larry Williams** with a couple twists of my own."*
- Açık pozisyon kuralları: *"his open interest concepts are basically **widely known**"*
- Mevsimsellik grafikleri: *"credited to **Moore Research**, Steve Moore"*
- Hisse seçimi: *"I can't claim ownership of this... **William J. O'Neil** created it... **like 80% of this teaching is basically what you learn from reading O'Neil's book.**"*

Mart'ın sekizinci videosu COT yöntemi için *"kitaplarda yok, böyle bir şey dışarıda yok"* demişti. Haziran aynı yöntemi anlatırken kaynağı veriyor. **Aynı bilgi, dört ay arayla, iki farklı köken iddiası.**

Üçüncü bulgu aritmetikte, ve on ayda ilk: **bu ayda geçen her sayısal iddia doğru çıktı.** Sözleşme çarpanları, tick değerleri, kaldıraç hesabı, COT net pozisyon çıkarması, dolar cinsinden hareket büyüklükleri — hepsi. Şubat'ın bileşik getiri hatası, Mart'ın Fibonacci 1,68'i, Nisan'ın aritmetik olarak imkânsız yüzdeleri, Mayıs'ın hesaplanmamış 1:1 eşiği — bu ay karşılığı yok.

Dördüncüsü ve belki en dikkat çekici olanı: **daha önce öğretilmiş bir kavram ilk kez yanlış olduğu söylenerek geri çekiliyor.**

> *"Kanola ve pirinçteki açık pozisyon düşüşünü buğday, soya ve mısırın yükselmesi gerektiğinin destekleyici gerekçesi olarak **hatalı biçimde** atfediyordum, **ve bu doğru değil.** Aynı şeyi yulafla da yapıyordum... ve sana şunu söyleyebilirim: **o şeyleri o zaman öğreterek çok çok yanılmışım. Ne yaptığımı bilmiyordum.** Açık pozisyon **yalnızca o piyasayla** doğrudan ilişkilidir."*

Mayıs'ta bir yöntem beğenilmediği için terk edilmişti; burada bir kavram **yanlış olduğu için** geri alınıyor, ve gerekçesi veriliyor. On ayda bu ilk.

Zayıf taraf iki yerde. Birincisi: ayın on dokuzuncu videosu bir ders değil, bir **savunma** — "bu ayı neden izlettim" videosu — ve içinde tüm ayın en yanlışlanamaz cümlesi var: *"Eğer ben öğretmiyorsam önemli değildir; eğer öğretiyorsam önemlidir."* İkincisi: on üçüncü video endeksler için **sekiz günlük aralık profili** veriyor, ve sekizi birlikte her olası günü kapsıyor.

Kullanılan filtre önceki aylarla aynı: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsaydı nasıl görünürdü.

## Bölme notu

Transkript **on dokuz videoya** bölündü — önceki ayların iki katından fazla (68.920 kelime). Her sınır ayırıcı satır ve videonun kendi açılış cümlesindeki modül + ders numarasıyla iki kere doğrulanıyor (V10'un ayırıcısı `10. vieo` yazım hatalı, ama açılışı *"index trading concepts lesson one"* diyor). **Belirsiz sınır yok.**

Ay **dört modüle** ayrılmış:

| Modül | Videolar | Dersler | Kelime |
|---|---|---|---|
| **Emtia** | V1–V5 | 1–5 | 25.434 |
| **Tahvil** | V6–V9 | 1–4 | 12.600 |
| **Endeks** | V10–V14 | 1–5 | 12.356 |
| **Hisse senedi** | V15–V18 | 1–4 | 14.424 |
| **Kapanış** | V19 | — | 4.106 |

Her videoda aynı yasal uyarı tekrarlanıyor: *"CTA değilim, emtia işlem danışmanı olarak lisanslı değilim; burada tartışılan her şey yalnızca **kâğıt üzerinde işlem** kapsamında görülmeli."* On ayda ilk kez bir sorumluluk reddi veriliyor, ve her videoda tekrarlanıyor.

## BÖLÜM I — Dersler ve eleme

# EMTİA MODÜLÜ (V1–V5)

### Video 1 — COT verisi: ham veriden hedging programına

::: ders
**DERS**

#### Ham veri

**Kaynak: www.cftc.gov.** Aranan: **Futures Contract only, short format**, CME altında. Opsiyon pozisyonlarına bakılmıyor — *"onlarla hiç ilgilenmiyorum, sadece vadeli pozisyonlara bakıyorum."*

Ortadaki **commercial** sütununa bakılır: solda uzun, sağda kısa.

**Japon Yeni örneği:**

| Kalem | Sözleşme |
|---|---|
| Ticari uzun | **143.450** |
| Ticari kısa | **76.426** |
| **Net** | **67.024 uzun** |

Net pozisyon çıkarma ile bulunur; pozitifse net uzun, negatifse net kısa.

> *"Ama bu, mevcut hedging programları hakkında bize **hiçbir şey söylemiyor.** Daha derine bakıp sayıların arkasına geçmemiz gerekiyor."*

#### Grafik kaynağı ve okuma

**barchart.com**, günlük grafik, altta **net trader position line chart**, en az **bir yıllık** veri.

- **Kırmızı çizgi = ticariler (commercials)** — izlenecek tek çizgi
- Yeşil = büyük işlemciler — *"her zaman kırmızı çizginin tam tersi olacak, umursamıyoruz"*
- Mavi = küçük spekülatörler — *"sokak parası, daha az bilgili kalabalık"*

#### İki katman: program ve hedging

**Alım/satım programı (makro):** ticariler sıfır çizgisinin **üstündeyse** alım programı, **altındaysa** satış programı.

**Hedging programı (kısa vadeli):** program ne olursa olsun içinde alım da satım da olur. Videonun ifadesi:

> *"Uzun vadeli bir **satış programı**, içinde hâlâ **boğa hedging alım programları** barındırabilir."*

**Yöntem — ve ayın merkezi prosedürü:**

1. Ticarilerin net pozisyonunun **son 6 ay** ve **son 12 aydaki** en yüksek ve en düşük değerini bul
2. O aralığı **ikiye böl** → yeni bir baz çizgisi
3. Sıfır çizgisi yok sayılır; konum bu yeni baz çizgisine göre okunur
4. Ortaya çıkan yerel alım/satım patlamalarına video **"nodül" (nodule)** diyor

Videonun kendi keşif anlatısı: *"Fiyat işlem aralıklarında hareket edebiliyorsa **bu bilgi de edebilir.** Ve alım satım yapıyorlarsa **bunu gizleyemezler** — doğruysa, veriye aralık ya da zaman cinsinden bakarsam görmeliyim. IPDA'yı hatırla, benzer şeyleri buna uyguladım. Altı aylık, 12 aylık, üç aylık, dört yıllık, üç yıllık, iki yıllık, bir yıllık aralıklara baktım."*

#### Uçlar kuralı

> *"**Dört yıllık, iki yıllık ya da 12 aylık bir uca** ulaşırsak, genellikle devrede uzun vadeli bir **trend dönüşü** vardır, ve ticariler bunu kendi hareketleriyle de fiyatlar. O uçlara ulaşıldığında **kısa vadeli hedging programını ıskonto ederiz** (dikkate almayız)."*

Ve Larry Williams'a atıf: *"Williams 60'larda ve 70'lerde bunu çözmüştü — **ama yalnızca uçlarda.**"*

#### Üçlü harman

Videonun son formülü:

1. **Program:** ticariler sıfır çizgisinin üstünde mi altında mı
2. **Hedging programı:** son 6 ve 12 aylık aralıktaki konum
3. **Kurumsal emir akışı:** fiyat ne söylüyor — iskonto array'ler destekleniyor mu, prim array'ler kırılıyor mu

> *"En iyi koşullar, her iki net toplam bazının da kurumsal emir akışı ve PD array matris konfluanslarıyla **uyuştuğu** zamanlarda görülür."*

Ve kural yönlere ayrılıyor: kurumsal emir akışı boğaysa **iskonto PD array'leri** son 12 veya 6 aylık **net uzun** ticari okumalarıyla harmanlanır; ayıysa **prim PD array'leri** net kısa okumalarla.

#### Japon Yeni örneğinin çözümü

**Ocak 2016 – Kasım 2016:** ticariler sıfır çizgisinin **altında** — geleneksel okuma "sat" derdi. Ama fiyat aksiyonu boyunca **kurumsal emir akışı boğaydı**: düşüş mumları destek oluyordu, kısa vadeli dipler alındıktan sonra ralli geliyordu, prim array'ler kırılıyordu.

> *"İşte bu yüzden insanlar COT verisinden vazgeçiyor — 'işe yaramaz, hep geriye dönük' diyorlar. **Bu öğretide o inançsızlığı dağıtacağız.**"*

6 aylık aralık orta çizgisi uygulandığında, satış programının **içinde** üç ayrı alım nodülü ortaya çıkıyor: birincisi başlangıçta, ikincisi Nisan'ın son haftasında bir bullish order block'ta bir boşluğu doldururken, üçüncüsü Haziran'ın son haftasında bir kısa vadeli dip alındıktan sonra. Sonra fiyat **1.00** seviyesinde uzun vadeli dirençle karşılaşıyor, birkaç kez aşamıyor, yapıyı aşağı kırıyor — ve ticariler Kasım 2016'nın son haftasında sıfır çizgisinin üstüne, net uzuna geçiyor.

**Kasım 2016 – Haziran 2017:** ticariler artık alım programında. 6 aylık aralık uygulandığında nodüller **Ocak**, **Mart ortası** ve **Mayıs'ın son haftasında** — *"fiyatın en büyük ilerlemeleri gördüğü dönemler tam olarak bunlar."*

#### Nodüllerin geleceğe dair iddiası

> *"Hedging programında bu nodülleri yarattıklarında, **o seviyeler gelecekte anlamlıdır — bir PD array olarak kilit fiyat noktaları olacaklar.** Bunu grafiklerinde bulundur ve not et."*

#### Bilgi sınırı itirafı

> *"Arz-talep faktörlerinin ne olduğunu bilecek kadar akıllı değilim. **Bunu hiç iddia etmedim ve benden asla öğrenmeyeceksin çünkü şahsen bilmiyorum.** Ama ne yaptıklarını **grafiksel olarak görebiliyorum**, ve bunu benden gizleyemezler."*
:::

::: eleme
**ELEME**

#### Dört ayın sonunda yöntem tam olarak açıklandı — ve kaynağı da

Bu yöntem seride üçüncü kez geçiyor:

| Ay | Ne dendi |
|---|---|
| Şubat V7 | 12 aylık aralık orta çizgisi; **Larry Williams kaynak olarak veriliyor** |
| Mart V8 | *"İnternette bulamazsın, kitaplarda yok. **Böyle bir şey dışarıda yok.**"* |
| **Haziran V1** | *"Burada öğreteceğim her şey **Larry Williams'tan öğrendiğim şey**, birkaç kendi eklentimle."* |

Mart'ın özgünlük iddiası bu ay geri alınmış oluyor — söylenmeden. Ve Haziran'ın versiyonu doğru: bir aralığı normalize edip eşiğe göre okumak literatürde **Williams COT Index** olarak biliniyor.

**Haziran'ın gerçek eklentisi ise adlandırılabilir ve ölçülebilir:** Williams **uçları** kullanıyordu; bu yöntem aynı normalizasyonu **uç olmayan bölgede**, yerel bir salınım göstergesi olarak kullanıyor. Bu, test edilebilir bir fark.

#### Yazılabilir kurallar

**1. COT aralık orta çizgisi — 6 ay ve 12 ay.** Tamamen mekanik: `(mevcut − N dönem min) / (N dönem maks − N dönem min)`, eşik %50. Sıfır seçim noktası, haftalık kamuya açık veri, onlarca yıllık geçmiş.

Ölçülebilir hipotez: *ticari net pozisyonun 6 ve 12 aylık aralık orta noktasını kesmesi, ham sıfır çizgisinin vermediği bir bilgi veriyor mu?* Aynı veri, üç eşik (0, 6 aylık orta, 12 aylık orta) — tek koşu.

**2. Uçlar kuralı.** *"4 yıllık / 2 yıllık / 12 aylık uçta uzun vadeli trend dönüşü."* Bu, Williams'ın klasik kullanımı ve **ayrı ayrı ölçülebilir**: her pencere için persentil eşiği tanımlanıp sonraki N ayın getirisi ölçülür.

Ve ikisi arasında **yapısal bir gerilim var, ki bu da ölçülebilir bir soru:** uçlarda kısa vadeli hedging okuması *"ıskonto ediliyor"*. Yani iki kural çelişkiye düştüğünde hangisinin kazandığı **tanımlı** — bu iyi. Ölçülecek soru: *uçlarda gerçekten kısa vadeli sinyal bozuluyor mu?*

**3. Nodül seviyelerinin gelecekte PD array olması.** Doğrudan sınanabilir: COT nodüllerinin oluştuğu tarihlerdeki fiyat seviyeleri, sonraki dönemde rastgele seçilmiş seviyelerden daha sık destek/direnç oluyor mu? **Karşılaştırma grubu doğal**, ve Şubat V2'nin yuvarlak sayı kontrol grubuyla aynı aileden.

#### Zamanlama uyarısı — üçüncü kez ve hâlâ verilmiyor

COT verisi **Salı günkü pozisyonları gösterir ve Cuma günü yayınlanır** — üç günlük raporlama gecikmesi. Bu, Şubat V7 ve Mart V8 için de kaydedilmişti; Haziran verinin kaynağını ve çekilme yöntemini ayrıntılı anlatıyor ama **gecikmeyi bir kez bile anmıyor.**

Senin `#013`'ün ve kör veri sarmalayıcın tam bu problem için yazılmıştı. Ölçerken gecikme modellenmezse sonuç geçmişte hep iyi görünür.

#### Merkezi tanımsızlık: üçlü harmanın üçüncü ayağı

İlk iki ayak (program, hedging aralığı) tamamen mekanik. **Üçüncüsü — "kurumsal emir akışı" — on aydır tanımsız.**

Pratik sonuç ve iyi haber: **ilk iki ayak üçüncüsü olmadan da ölçülebilir.** *"Ticari net pozisyonun 6/12 aylık aralıktaki konumu, sonraki N haftanın getirisini öngörüyor mu?"* sorusu hiçbir fiyat yorumu gerektirmiyor.

#### Yanlışlanamazlık

**1. "Nodüller" görsel olarak tespit ediliyor.** Aralık ve orta çizgi mekanik, ama "nodül" — yerel bir yükseliş atağı — için eşik verilmiyor. Kaç hafta, ne büyüklükte bir hareket nodül sayılır? Kapatılabilir (ör. orta çizgiyi yukarı kesen her episod) ama video kapatmıyor.

**2. Her iki taraf da her koşulda işlem yapılabilir kılınıyor.** *"Sıfır çizgisinin üstünde ya da altında olsunlar, piyasanın her iki tarafı da işlem yapılabilir."* Bu, esnekliği artırıyor ama aynı zamanda **hiçbir COT okumasının "işlem yok" üretmemesi** anlamına geliyor. Filtre, aday havuzunu daraltmıyor.

**3. Tek enstrüman, geriye dönük, ve nodüller sonuç bilinerek işaretlenmiş.** JPY'nin 18 aylık bir kesiti. Kaç nodül oluştu, kaçı takip eden hareket üretti — sayı yok.

#### Doğru olan ve kaydedilmesi gereken

**Bilgi sınırı itirafı** (*"arz-talep faktörlerini bilecek kadar akıllı değilim, bunu hiç iddia etmedim"*) ve **kaynak atfı** (Williams). İkisi de Mart V8'in aynı konudaki tonuyla doğrudan çelişiyor, ve bu ayki hali daha savunulabilir.

#### Ölçülebilirlik

**Ölçülebilir.** Çekirdek (6/12 aylık aralık orta çizgisi, uçlar kuralı) tamamen mekanik ve kamuya açık veriden hesaplanıyor. Belirsizlik (emir akışı, nodül eşiği) kenarda ve çekirdek ondan bağımsız test edilebilir.

#### Not

**Öncelikli alınacak:** COT aralık orta çizgisi, üç eşik karşılaştırmalı (ham sıfır / 6 ay / 12 ay), **Salı-Cuma gecikmesi modellenmiş halde.**

**Alınacak:** uçlar kuralı ve orta çizgi kuralının çelişki bölgesi — hangisi kazanıyor?

**Alınacak:** nodül seviyelerinin gelecekteki destek/direnç davranışı, rastgele seviye taban çizgisine karşı.

**Kripto için dürüst değerlendirme:** COT'un doğrudan analoğu **yok** — hedger sınıfı yok. Şubat V7'de kaydedilen aynı sınır. Perp piyasalarında **açık pozisyon** var ve gecikmesiz; o taşınabiliyor, COT taşınmıyor.
:::

### Video 2 — Göreli güç analizi: liderlik ve sempatik hareket

::: ders
**DERS**

#### Emtia sepeti

Video takip ettiği evreni tam olarak veriyor:

| Grup | Enstrümanlar |
|---|---|
| Tahıllar (CBOT) | Mısır, buğday, soya |
| Canlı hayvan | Besi sığırı, yağlık domuz, canlı sığır |
| Gıda | Kakao, portakal suyu, kahve, şeker |
| Lif | Pamuk |
| Borçlanma | 30 yıllık tahvil, 10 yıllık not, 5 yıllık not |
| Para birimleri | AUD, CAD, JPY, GBP, CHF, EUR, NZD |
| Metaller | Altın, gümüş, yüksek dereceli bakır |
| Enerji | Ham petrol |

Dışarıda bırakılanlar ve gerekçesi: yulaf, kanola, kereste, portakal suyu (kısmen), paladyum ve platin — *"çok ince piyasalar"* ya da ilgi kaybı.

#### Temel çerçeve

> **"Dolar endeksi kral. Dolarn ne yaptığı diğer her şeyin tonunu belirler, özellikle emtialar söz konusu olduğunda."**

- Dolar endeksi **yükseliyorsa** → emtia fiyatları üzerinde baskı
- Dolar endeksi **düşüyorsa** → emtia fiyatlarına izin ve teşvik

#### Liderlik tespiti — ayın merkezi kuralı

**Kurumsal olarak desteklenen ralli (institutionally sponsored rally):**

> *"Aradığımız şey, **dolar endeksinin daha yüksek tepe yaptığı bir zamanda daha düşük dip yapmayı BAŞARAMAYAN** bir piyasa. Bu temelde bir **SMT ayrışması.**"*

Bu koşulu sağlayan emtia **liderlik enstrümanıdır** ve *"en güçlü yukarı yönlü hareket edenler"* olacaktır.

**Teyit karakteristikleri:**
- Kısa vadeli tepeler kırılıyor
- Düşüşler **sığ** nitelikte
- Yukarı salınımlar ve yükseliş kapanışlı mumlar, düşüş kapanışlılardan **tipik olarak çok daha büyük**

**Sempatik ralli (sympathetic rally):** daha düşük dip **yapan** ama sonra lider piyasaya sempati duyarak yükselen emtia.

> *"Bu piyasalar potansiyel olarak kârlı — ama amacımız en güçlü ralliler için **liderlik piyasalarına** odaklanmak. Sempatik olanlar tandem hareket eder ama **daha az derecede — hız ve büyüklük açısından, ve daha uyuşuk olacak.** Hedeflerine ulaşabilir ama o kadar güçlü, hızlı ve verimli değil."*

Video buna *"grubun altıncı kız kardeşi"* diyor.

**Aşağı yönlü ayna:** dolar endeksi boğa iken **daha yüksek tepe yapmayı başaramayan** emtia = aşağı yönlü lider.

**Grup içi seçim örneği:** canlı hayvan grubunda canlı sığır daha yüksek dip yaparken besi sığırı ve yağlık domuz yapmıyorsa, **canlı sığır liderdir** ve *"çok daha fazla büyüklük ve hızla"* hareket eder.

#### Sepetin tam taraması — 2016 yazından Haziran 2017'ye

Video dolar endeksinin **2016 yazından Ocak 2017'ye yükseldiğini**, sonra Ocak 2017'den kayıt tarihine kadar zayıfladığını belirleyip, sepetin tamamını tek tek geçiyor. Verilen kâr rakamları sözleşme başına:

| Piyasa | Değerlendirme | Hareket |
|---|---|---|
| Mısır | **Zayıf** | 360→390, 30 sent ≈ **1.500 USD** |
| Buğday | **Zayıf** | Konsolidasyon, ralli yok |
| **Soya** | **Tahıl lideri** — Ağustos/Eylül/Ekim'de daha düşük dip yapmayı başaramadı | ≈ **4.500 USD** |
| **Besi sığırı** | **Mutlak lider** — Ekim ortasından Aralık başına birikim, sonra Mart'ta ikinci alım fırsatı bir bullish order block'ta | **19.000 USD üstü** |
| Yağlık domuz | Güçlü | 68→81,5 sent ≈ **5.600 USD** |
| Canlı sığır | Güçlü | **12.000 USD** |
| Kakao | **Zayıf, dağıtım altında** — bol rekolte, arz sıkıntısı yok | — |
| Kahve | **Zayıf** | — |
| Şeker | **Karışık sinyal** — bir ayrışma yükseliş verdi ama sonra devam edemedi | — |
| Pamuk | **Güçlü, birikim altında** | **8.000 USD üstü** |
| Tahvil / notlar | **Zayıf, konsolidasyon** | — |
| AUD, JPY, CHF, EUR, NZD | **Liderlik** | AUD ve NZD ayrıca **faiz farkı** avantajlı |
| CAD, GBP | **Zayıf** | — |
| Altın | **Metal grubunun en iyisi** | — |
| Gümüş | Mütevazı güçlü; 1850'de düştü, 16 seviyesinde bullish order block | 168 puan ≈ **7.000 USD** |
| Bakır | **Çok güçlü** — Eylül/Ekim'de birikim, sonra patlama | — |
| Ham petrol | **Güçlü** — varil başına ~43 dolarda birikim | — |

#### Şeker örneği ve videonun kendi çerçevelemesi

> *"Sana gerçekçi terimlerle bu şeyleri göreceğin fırsatlar sunmak istiyorum — **ama aynı zamanda iyi bir hareket gibi başlayıp sonra başarısız olan şeyleri de göreceksin.** Ve gerçek ortamlar senin için işte böyle olacak."*

#### Kapanış

> *"Tüm emtiaları geçtik ve göreli güç analizini kullanarak liderlik enstrümanlarını süzdük. **Dikkat et ki hepsi yukarı gitmedi.** Ama fiyat hareketine bakarak — **hiçbir gösterge yok, hiçbir çan ve düdük yok** — büyük kurumlar devreye girip aldığında kalıbın neye benzediğini anlayarak yapabildik: o **başarısızlık salınımı**, kısa vadeli tepelerin kırılması, prim array'lerin direnç oluşturmaması, ve tüm iskonto array'lerin fiyatı desteklemesi."*

Tarama sonucu: tarım grubundan **beş** piyasa (soya, besi sığırı, canlı sığır, yağlık domuz, pamuk), finansallardan **borçlanma araçlarında hiçbir şey**, para birimlerinden **beş**, metallerden **üç**, enerjiden **bir**.
:::

::: eleme
**ELEME**

#### Serinin en test edilebilir SMT tanımı — ve nedeni

Dokuz ay boyunca SMT ayrışması şöyle tarif ediliyordu: *"pariteniz daha düşük dip yaparken endeks daha düşük tepe yapıyor mu"* — ve Aralık V1'den beri kaydedilen boşluk hep aynıydı: **"aynı anda" ne demek?**

Burada o boşluk **kısmen** kapanıyor, çünkü karşılaştırmanın iki tarafı da net: **dolar endeksinin salınım tepesi** ile **emtianın salınım dibi.** İkisi de pivot; ikisi de mekanik olarak tespit edilebilir.

Hâlâ eksik olan: karşılaştırma **penceresi.** Ama bu senin koyacağın bir parametre, ve iddia o olmadan da geçerli.

**Ölçülebilir hipotez, ve bu ayın en iyi tek fikri:**

> *Dolar endeksi yeni bir tepe yaparken daha düşük dip yapmayı başaramayan emtialar, sonraki dönemde başaranlardan daha iyi getiri üretiyor mu?*

Neden bu iyi bir test:
- **Karşılaştırma grubu videonun kendi kuralı tarafından tanımlanmış** — "lider" ve "sempatik" iki ayrı grup
- **Örneklem büyük:** ~20 enstrüman × yıllar
- **Çıktı bir sıralama testi:** liderler sempatiklerden daha çok mu kazandırıyor
- **Ve iddianın nicel bir versiyonu var:** *"daha fazla büyüklük ve hız"* — hem ortalama getiri hem ulaşma süresi ölçülebilir

#### Ve ayın kendi verisi bu testi kurmaya davet ediyor

Video sepetin tamamını taradı ve **hepsini** raporladı — kazananları da kaybedenleri de. Bu, on ayda ilk kez **bir örneklemin tümünün** gösterilmesi.

| Kategori | Sayı |
|---|---|
| Lider ilan edilen | ~14 |
| Zayıf ilan edilen | ~7 (mısır, buğday, kakao, kahve, CAD, GBP, borçlanma araçları) |
| Karışık / başarısız | 1 (şeker) |

**Ama önemli bir sınır var:** bu tarama **sonuç bilinerek** yapıldı. "Lider" etiketi, hareketin gerçekleştiği görüldükten sonra veriliyor. Gerçek test, ayrışmayı **oluştuğu anda** tespit edip sonrasını ölçmektir — ve bu, aynı veriyle yapılabilir.

#### Şeker örneği — kaydedilmesi gereken

Video **çalışmayan bir örneği** açıkça gösteriyor ve neden gösterdiğini söylüyor: *"iyi bir hareket gibi başlayıp sonra başarısız olan şeyleri de göreceksin."*

Şubat V5'te başlayan cins değişimi (kaybeden işlemlerin gösterilmesi) burada bir **başarısız kurulum sınıfı** olarak sürüyor. Sayılmıyor — ama gösteriliyor, ve gerekçesi metodolojik.

#### Doğru olan: dolar–emtia ilişkisi gerçek

*"Dolar endeksi kral"* iddiası, Ocak V9'da kaydedilen piyasalar arası ilişkiler çerçevesinin bir parçası ve **literatürde desteği var** — emtialar dolar cinsinden fiyatlandığı için mekanik bir bağ mevcut.

**Ama Ocak V9'da kaydedilen uyarı burada da geçerli:** bu ilişki **sabit değil, koşullu.** Dolar–emtia korelasyonu rejime bağlı olarak zayıflar ve zaman zaman işaret değiştirir. Video ilişkiyi sabit kabul ediyor.

**Ve ölçüm için doğrudan bir sonuç:** ayrışma testini yapmadan önce **dolar–emtia korelasyonunun o dönemdeki gücünü** ölçmelisin. Korelasyon zayıfsa "ayrışma" zaten gürültüdür.

#### Yanlışlanamazlık

**1. "Lider" ve "sempatik" ayrımı sonradan yapılabiliyor.** Bir emtia yükseldiyse ya lider ya sempatikti; yükselmediyse zaten zayıftı. **Üç kategori tüm sonuçları kapsıyor.**

Kapatması mümkün ve senin yapman gereken: ayrışma anını **önceden** tanımla (pivot karşılaştırması + pencere), sonra o anda liderlik atamasını yap, ve **sonrasını** ölç.

**2. "Sığ düşüşler", "çok daha büyük yükseliş mumları" — eşiksiz.** İkisi de sayısallaştırılabilir (geri çekilme derinliği / ATR; yükseliş-düşüş gövde oranı) ama video eşik vermiyor.

**3. Tek dönem.** Tüm tarama 2016 yazı – Haziran 2017 arası tek bir dolar döngüsünden. Örneklem: bir dolar yükselişi, bir dolar düşüşü.

#### Geçmiş açıklamaları

~20 enstrüman, her biri için bir grafik okuması, hepsi sonucu bilinerek. İçerikleri anlatılmadı. **Ama tümü raporlandığı için** geriye dönük seçim sorunu bu videoda diğerlerinden zayıf.

#### Ölçülebilirlik

**Ölçülebilir.** Ayrışma tanımı iki pivot karşılaştırması — mekanik. Liderlik/sempatik ayrımı sıralama testine çevrilebilir. Karşılaştırma grubu videonun kendi taramasında mevcut. Belirsiz bileşenler (pencere, "sığ") kenarda ve parametreye çevrilebilir.

#### Not

**Öncelikli alınacak:** liderlik sıralaması testi. *Ayrışma anında lider ilan edilen enstrümanlar, sempatiklerden daha yüksek sonraki getiri veriyor mu?* Bu, senin sweep ölçümüne bir **enstrüman seçim katmanı** ekliyor — sweep tek enstrümanda ölçülmüştü, hangi enstrümanda ölçüleceğine dair kural yoktu.

**Ve senin çoklu enstrüman sorununa doğrudan cevap:** range projende Aşama 1'de RET almanın sebebi işlem sayısıydı. Bu kural, **hangi enstrümanlarda işlem aranacağını** daraltarak değil, **taramayı genişleterek** çalışıyor — 20 enstrümanlık bir sepet, tek paritede alınamayan örneklemi verir.

**Önce ölçülecek:** dolar–emtia korelasyonunun rejime göre değişimi. Zayıf korelasyon döneminde ayrışma testi anlamsız.
:::

### Video 3 — Mevsimsel eğilimler

::: ders
**DERS**

#### Açılıştaki çekince

Video Ocak ayındakinden farklı bir yerden başlıyor:

> *"Öncelikle vurgulamak istiyorum: **panaceler yoktur, her şeyi bitiren şeyler yoktur** — ve mevsimsel eğilimler kesinlikle onlardan biri değil. Kişisel inancım arkasında geçerlilik olduğu yönünde... ama **tüm inancını mevsimsel eğilimlere yaslarsan para kaybedebilirsin.**"*

Konum: *"benim yorumumla mevsimsellik bir **yol haritası** ya da bir **hazine haritası** gibi — yılın o zamanında fiyat hareketinde normalde ne görülmesi gerektiğine dair beklenti veriyor."*

#### Yöntem — ve Ocak'ta olmayan filtre

Kaynak: **Steve Moore / Moore Research.** Her mevsimsellik grafiğinde **iki çizgi** var:

- **Kalın düz siyah çizgi: 40 yıllık** fiyat verisi
- **Kesikli kırmızı çizgi: 15 yıllık**

> *"Kısa vadeli bir görünümü 40 yıl gibi daha uzun bir örneklemle karşılaştırdığında, **eğer orada güçlü bir mevsimsel eğilim varsa, onu hem kısa vadeli 15 yıllık veride hem 40 yıllıkta görebilmemiz gerekir.** ... Mevsimsel eğilime baktığımızda aradığımız kriter, **ikisinin de aynı yönde** tepe ya da dip oluşturmak ve sürdürülmüş hareketler için uyuşması."*

#### Sözleşme ayı notu

Grafiğin üstündeki sarı kutular teslim aylarını gösteriyor. Soya için: Mart → Mayıs → Temmuz → Ağustos → Eylül → Kasım → Ocak. Kural: her zaman **yakın ay** (nearby) işlem görülür çünkü açık pozisyon oradadır. Pratik: barchart.com'da **açık pozisyonu ve hacmi en yüksek** olan sözleşme seçilir.

#### Videonun anti-kiraz-toplama tavrı — Ocak'tan en büyük fark

> *"Her slaytın sağ tarafında **hiçbir işaretleme yapmıyorum**, çünkü bu mevsimsel eğilimlerin mutlak olduğu izlenimini vermek ya da ima etmek istemiyorum. **Onları fazla kanıtlamaya çalışmıyorum. Sadece veriye bakmanı ve geçerliliği olup olmadığını kendin söylemeni öneriyorum.**"*

Ve: *"**Sadece burada gösterdiğim son beş yıllık veriyi kullanma — mümkün olduğunca geriye git** ve bu şeylerin gerçekten gerçekleşip gerçekleşmediğini gör."*

#### Tersine okuma kuralı

> *"Bullish olması gereken bir zamanda piyasa aslında **daha düşük** işlem görüyorsa bu sana ne söylüyor? Mevsimsel etkiler hiç devrede değil, **fiyat üzerinde hiçbir etkileri yok**, ve muhtemelen altta yatan bir şey var — büyük bir arz fazlası."*

Uygulama örneği (2017 mısır): *"Nisan/Mayıs'ta düşüş görmedik, aslında mısır yükseldi. Yani elimizde bir **uyuyan piyasa** olabilir — çünkü mevsimsel eğilimine uymuyor. Uymuyorsa bize ne söylüyor? **Altta yatan göreli güç.**"*

#### Mevsimsel pencereler

| Emtia | Kalıp |
|---|---|
| **Soya** | Şubat başı → Haziran/Temmuz tepe → Eylül/Ekim dip. **Üç işlem yönü**: Şubat–Haziran uzun, Haziran/Temmuz–Eylül/Ekim kısa, Eylül/Ekim'den yaz aylarına uzun |
| **Buğday (CBOT)** | Yılın ilk yarısı düşüş → Haziran sonu–Ağustos dip. En iyi alım zamanları **Temmuz/Ağustos** ve **Kasım**; ayı piyasada satış: yıl başından yaz aylarına |
| **Mısır (CBOT)** | **Mayıs/Haziran** tepe → **Eylül/Ekim** dip |
| **Besi sığırı** | **Nisan/Mayıs** dip (15 yıllıkta Şubat kadar erken) → **Ağustos/Eylül** tepe, sonra konsolidasyon |
| **Canlı sığır** | **Şubat/Mart** tepe → **Haziran** dip → yıl sonuna kadar yükseliş |
| **Yağlık domuz** | **Mart/Nisan** alım → **Mayıs/Haziran/Temmuz** tepe → **Eylül/Ekim** dip. *"Mükemmele en yakın olanı bu"* |
| **Kakao** | Mayıs sonu/Haziran başı dip → Ağustos sonu/Eylül tepe |
| **Portakal suyu** | **Eylül/Ekim** dip → Aralık'a ralli |
| **Kahve** | Alım **Haziran/Temmuz** (15 yıl: Haziran ortası; 40 yıl: Temmuz); satış **Nisan/Mayıs** |
| **Pamuk** | **Mayıs** satış (Nisan'a bakılır) |
| **Ham petrol** | Yıl başından ralli → **Eylül/Ekim** tepe |
| **Bakır** | Alım **Haziran** ve **Kasım**; satış **Eylül** ve **Nisan** |
| **Altın** | **Temmuz/Ağustos** dip. *"Bir alıcı piyasası — başka bir şey aramıyoruz."* Mekanizma: mücevher üretim döngüsü — Noel için madenden çıkarılıp işlenip piyasaya sürülmesi gerekiyor |
| **Gümüş** | Altınla aynı: **Temmuz/Ağustos** dip; satış noktası Şubat olabilir |

#### Başarısızlıkların sayılması

Video her emtiada tutmayan yılları **açıkça** not ediyor: buğday için 2013, 2014, 2016 ve 2017'de eğilim görülmedi; besi sığırı için *"2016'da mevsimselliğin hiçbir etkisi olmadı"*; canlı sığır için 2015'te *"Haziran/Temmuz döneminde hiç etkisi olmadı"*; kahve için *"2013'te pek oluşturmadı, 2015'te pek iyi iş çıkarmadı"*; pamuk için 2016 ve 2017'de düşüş görülmedi.

#### Geri çekilen bir öğreti — on ayda ilk

Videonun sonunda geçmişte öğrettiği bir kavram açıkça yanlış ilan ediliyor:

> *"90'ların başında buna geçerlik olduğunu düşünüyordum ve **o zaman öğretim materyalimde kullandım.** Yıllar içinde bunun **tamamen doğru olmadığını** öğrendim. Kanola ve pirinçteki açık pozisyon düşüşünü buğday, soya ve mısırın yükselmesi gerektiğinin destekleyici gerekçesi olarak **hatalı biçimde atfediyordum, ve bu doğru değil.** Aynı şeyi yulafla da yapıyordum... ve sana şunu söyleyebilirim: **o şeyleri o zaman öğreterek çok çok yanılmışım. Ne yaptığımı bilmiyordum.** Şimdi... biliyorum ki **açık pozisyon yalnızca o belirli piyasayla doğrudan ilişkilidir** — sonuçta o emtianın açık pozisyonu, paylaşılabilecek bir fikir değil."*

Ve: *"America Online'dayken her şeyi çözdüğümü sanıyordum ama aslında pek bir anlayışım yoktu."*

#### Pratik tavsiye ve harman

*"Her ay başında telefonuna o ay beklemen gereken tüm mevsimsel etkilerin bir listesini gir."*

Ve harman: mevsimsellik uymuyorsa *"ya uzun vadeli bir konsolidasyona giriyor — ki onunla para kazanamazsın — ya da ters yöne gidiyor, ki bu **çok anlamlı güç** demek."* O durumda **ticarilerin net uzun pozisyonu var mı** diye bakılır, hedging alım programına geçmeleri beklenir, ve iskonto array'ler test edilir.
:::

::: eleme
**ELEME**

#### Ocak'a göre üç gerçek metodolojik iyileşme

Ocak'ın mevsimsellik bloğu (V10, V11, V12) üç videonun üçünde de **ölçülemez** bulunmuştu. Haziran aynı konuyu ele alıyor ve üç noktada farklı davranıyor:

**1. Hesaplama yöntemi veriliyor.** Ocak'ta *"40 yıllık ortalama"* deniyor ama nasıl hesaplandığı hiç söylenmiyordu. Burada **iki ayrı örneklem** (40 yıl ve 15 yıl) ve aralarındaki **uyuşma şartı** bir filtre olarak konuyor.

Bu, gerçek bir **örneklem dışı benzeri kontrol**: aynı olgunun iki farklı uzunlukta pencerede görünmesi gerekiyor. Tam bir OOS değil (15 yıl 40 yılın içinde — Ocak V11'de kaydedilen "örtüşen dönemler bağımsız doğrulama değildir" sorunu burada da geçerli) ama **hiç filtre olmamasından belirgin biçimde iyi.**

**2. İşaretleme reddediliyor.** *"Sağ tarafta hiçbir işaretleme yapmıyorum çünkü mutlak oldukları izlenimini vermek istemiyorum. Onları fazla kanıtlamaya çalışmıyorum."* Ocak'ta grafikler işaretlenmiş ve tutan yıllar vurgulanmıştı.

**3. Başarısızlıklar tek tek açıklanmıyor, sadece sayılıyor.** Ocak V11'de on yılın dört başarısızlığı **ayrı ayrı gerekçelendiriliyordu** (*"2008 kriz vardı", "2014 konsolidasyondaydı"*) ve YONERGE'nin diliyle bu, *"tam olarak bir kuralı ölçülemez kılan yapı"* olarak kaydedilmişti. Burada başarısızlıklar sadece not ediliyor: *"2016'da hiçbir etkisi olmadı."*

#### Ama temel sorunlar duruyor

**1. Örneklem hâlâ yılda bir gözlem.** 40 yıllık veri, bir mevsimsel pencere için **40 gözlem** demek — ve gösterilen grafik beş yıl. Senin `#029`'undaki 100 işlem eşiğinin çok altında.

**2. Pencereler geniş.** "Haziran/Temmuz tepe", "Eylül/Ekim dip", "Şubat kadar erken olabilir" — her pencere birkaç haftalık. Ocak V11'de kaydedilen *"pencereler yılın tamamını kaplıyor"* sorunu burada daha hafif ama yok değil: soya için üç ayrı yön, buğday için dört ayrı pencere.

**3. Ve tersine okuma kuralı yanlışlanamaz.** *"Uymuyorsa ya konsolidasyona giriyor ya çok güçlü."* İki durum tüm sonuçları kapsıyor. Mevsimsellik tuttuysa doğrulanmış; tutmadıysa **"göreli güç"** bulgusuna dönüşüyor.

Bu, YONERGE §2.4'ün **başarısızlığın yeniden çerçevelenmesi** kalıbı, ve tam da mevsimselliği ölçülemez kılan şey: hiçbir sonuç iddiayı çürütemiyor.

**Ama ölçülebilir bir versiyonu var, ve o değerli:** *mevsimsel pencerede beklenenin tersine hareket eden enstrümanlar, pencere sonrasında beklenene uygun hareket edenlerden daha güçlü mü?* Bu, "göreli güç" iddiasının doğrudan testi, ve ikinci videonun liderlik testiyle **aynı ölçümdür.**

#### Geri çekilen öğreti — bu ayın en dikkat çekici tek bulgusu

On ayda ilk kez daha önce öğretilmiş bir kavram **yanlış olduğu söylenerek** geri alınıyor, ve gerekçesi doğru:

> *"Açık pozisyon yalnızca o belirli piyasayla doğrudan ilişkilidir — o emtianın açık pozisyonu, paylaşılabilecek bir fikir değil."*

**Ve bu gerekçe teknik olarak doğrudur.** Kanoladaki açık pozisyon, buğdaydaki katılım hakkında bilgi taşımaz. Video ayrıca **neden yanılmış olduğunu** da doğru teşhis ediyor: *"o zaman tüm tahıllar yükseliyordu çünkü tüm emtialar yükseliyordu — 90'larda genel bir kuraklık vardı."* Yani **ortak bir sebep**, sahte bir öncü ilişki gibi görünmüştü.

Bu, tam olarak **karıştırıcı değişken (confounding)** teşhisi, ve senin ölçüm metodolojinle aynı dilde. Kaydedilmesi gereken bir olgunluk işareti.

Karşılaştır:

| Ay | Hareket | Cinsi |
|---|---|---|
| Ocak V14 | *"Kanıt sunulmayacak"* | Ret |
| Nisan V8 | Ödev bir başarısızlık örneği istiyor | Yöntem |
| Mayıs V6 | *"Londra kapanışında artık işlem yapmıyorum"* | Tercih |
| **Haziran V3** | **"O şeyleri öğreterek çok çok yanılmışım"** | **Doğruluk** |

Dört ay, dört adım, hepsi aynı yöne.

#### Ölçülebilirlik

**Kısmen.** Yöntem ilk kez tanımlı (iki örneklem uyuşması) ve bu gerçek bir filtre; ama örneklem yılda bir gözlem, pencereler geniş, ve tersine okuma kuralı her sonucu açıklıyor.

#### Not

**Alınacak:** iki-örneklem uyuşma filtresi — ama **örtüşmeyen pencerelerle.** 15 yıl 40 yılın içindeyse bağımsız doğrulama değildir (Ocak V12'de kaydedildi). Doğru versiyonu: **ilk 20 yılda bulunan örüntü, son 20 yılda duruyor mu.**

**Alınacak, ve ikinci videonun testiyle birleştirilerek:** *mevsimsel beklentiye ters hareket, sonraki dönemde göreli güç öngörüyor mu?*

**Alınmayacak:** mevsimsel pencerelerin kendisi, tek başına. Yılda bir gözlem, senin örneklem eşiğinin iki mertebe altında.
:::

### Video 4 — Prim ve carrying charge piyasaları

::: ders
**DERS**

#### İki piyasa yapısı

Videonun tanımı, vadeli piyasa yapısının doğrudan okunması.

**Carrying charge piyasası (normal):** yakın ay sözleşmesi, ileri teslim aylarından **daha ucuz.**

Soya örneği:

| Sözleşme | Fiyat |
|---|---|
| Temmuz 2017 | 940 |
| Ağustos 2017 | 943 4/10 |
| Kasım 2017 | 945 |
| Ocak 2018 | 952 |

> *"Tipik bir carrying charge piyasası, süslü bir yanı yok. Böyle bir ortamda boğa piyasası bulamayacağımız anlamına gelmiyor — sadece **parabolik bir hareketin ya da emtianın hızlı, agresif yeniden fiyatlanmasının olasılığı, prim olsaydı olacağından çok daha düşük.**"*

**Prim piyasası:** yakın ay sözleşmesi, ileri aylardan **daha pahalı.**

Besi sığırı örneği:

| Sözleşme | Fiyat |
|---|---|
| Ağustos 2017 | **154,80** |
| Eylül 2017 | 154,125 |
| Ekim 2017 | 152,775 |
| Kasım 2017 | 151,275 |
| Ocak 2018 | 145'ler |

**Güçlü prim tespiti:** *"Yakın ayın bir sonraki aya göre primi var mı diye bakmakla yetinme — **bir sonraki ayın ötesine, sonraki birkaç aya git.**"*

#### Anlamı

> *"Bu, o emtia hakkında **temel olarak güçlü** bir şey olduğu anlamına geliyor: **talep yüksek ve arz kıt.**"*

Ve bir konum değişikliği: *"Beni arz-talepten konuşurken pek duymadın çünkü o işlem biçiminin, özellikle Forex'e ilişkin, yapman gereken gerçek şey olmadığını düşünüyorum. **Ama emtialarda gerçek arz-talep faktörleri var**, çünkü onlar gerçek, elle tutulur şeyler ve insanlar yemek zorunda."*

**Ticari boğa piyasası:** *"Ticariler — bu emtianın büyük baskın kullanıcıları — **şu anda teslim almak** isteyecekler çünkü ona sahip olmak zorundalar ve arzı kıt. İleride beklenen carrying charge yerine **şimdi prim fiyat ödemeye razılarsa**, temel olarak bir şeyler olduğunu ve teslimatı hemen almaları gerektiğini biliyorlar."*

#### Kritik terminoloji uyarısı

> *"Emtialarda **prim** dediğimde bu, yakın ayın bir sonraki aya göre spesifik fiyatlamasıdır. **Bunu prim ve iskonto PD array'leriyle KARIŞTIRMA.**"*

#### Spread grafiği — adım adım

1. barchart.com'da grafiği yükle
2. Chart type → **spread chart**
3. **First symbol:** emtia + **yakın ay** (pamuk Temmuz 2017)
4. **Second symbol:** aynı emtia + **bir sonraki ay** (pamuk Ekim 2017)
5. **Operatörü eksi (−) işaretine ayarla** — *"bu çok önemli, çünkü farkı verecek"*
6. Draw

Sonuç: yakın ay ile bir sonraki ay arasındaki **fark serisi.** Sıfır çizgisinin üstü = yakın ayın primi.

> *"İdeal olarak **spread ne kadar büyükse**, ticari boğa piyasası ya da parabolik hareket olasılığı o kadar güçlü."*

#### Sinyal — spread ayrışması

**Boğa ayrışması:** fiyat **daha düşük dipler** yaparken **spread artıyorsa** → alım sinyali.

> *"Bu bir göstergeye benziyor değil mi? **Ve öyle** — çünkü bu **fiyat.** Fiyat sana fiyat hakkında her şeyi söyleyecek; hiçbir sayı hesaplamaya, hiçbir akrobatik matematiğe gerek yok. Sadece yakın ayın bir sonraki aya göre spread'inin bir kaplaması."*

**Ayı ayrışması:** fiyat **daha yüksek tepe** yaparken **spread daha yüksek tepe yapamıyorsa** → stop'u çekme ya da kâr alma gerekçesi, ve yeni bir alım sinyali beklenir.

> *"Prim odaklı bir ralli güçlüyse, **fiyat yükselirken spread'in de artması gerekir.**"*

#### Pamuk örneğinin çözümü

- Pamuk **prim** piyasasında (yakın ay > bir sonraki ay)
- Mayıs'taki zirvede: **Temmuz sözleşmesi, Ekim'e göre 6,50 primle** işlem görüyordu
- Ocak'tan itibaren yükseliş, Mart–Nisan–Mayıs konsolidasyon — **ama prim korunuyor**
- Mayıs'ın ilk yarısında fiyat bir **bullish order block**'a iniyor
- **Mayıs düşüşünde her mum daha düşük dip yapıyor — ama spread çizgisi artıyor** = boğa ayrışması
- Ayrıca: Nisan'ın son iki işlem gününde oluşan **eşit diplerin (~77,80) altına iniş** = satış stopu koşusu
- Ve Nisan tepesi–Nisan dibi aralığının **iskonto** yarısında
- Ve **79,7 optimal trade entry** seviyesi civarı — *"Fibonacci koymadım ama gözle görebiliyorum ki muhtemelen olan bu"*

**Sonuç:** 77'den alım, 87'ye hareket = **10 sent.** Pamukta **1 sent = 500 USD** → **5.000 USD, bir haftadan kısa sürede, tek sözleşmede.**

#### Videonun kendi çerçevelemesi

> *"Açıkçası burada **geriye dönük bakma avantajımız var**, ve hepiniz biliyorsunuz ki uzun zamandır emtia işlemi yapmıyorum — öncelikle bir Forex işlemcisi oldum. Ama bu şeyler **her yıl orada.**"*

Ve: *"Eğer temellerin gerekli olup olmadığı konusunda şüphen varsa — **bence emtialar için gerekliler**, çünkü onlar gerçek, elle tutulur şeyler; dünyanın bakkalı."*
:::

::: eleme
**ELEME**

#### Ayın ve muhtemelen serinin en doğrulanabilir içeriği

Bu videonun anlattığı şey icat edilmiş bir kavram değil — **vadeli piyasa terim yapısının kendisi.** Yakın ayın ileri aylardan pahalı olması literatürde **backwardation**, ucuz olması **contango** olarak bilinir. Video bu kelimeleri kullanmıyor ama **tanımı birebir doğru veriyor**, ve ekonomik gerekçesi (kıt arz → şimdi teslim alma isteği) standart emtia ekonomisidir.

Neden bu, on ayın en sağlam içeriği:

| Bileşen | Durum |
|---|---|
| Prim/carrying charge tespiti | **Doğrudan fiyat karşılaştırması** — iki sayı |
| Spread serisi | **Gözlemlenebilir bir fiyat serisi** — yorum yok |
| Sinyal (ayrışma) | İki serinin pivot karşılaştırması — **mekanik** |
| Veri kaynağı | Kamuya açık, ücretsiz, onlarca yıllık geçmiş |
| Seçim noktası | **Sıfır** |

Karşılaştırma: Aralık'ın order block'unda *"destek seviyesine yakın"*, Şubat'ın aralık tanımında *"başlangıç noktası"* vardı. **Burada tanımlanacak hiçbir şey yok** — hangi sözleşme yakın ay olduğu açık pozisyondan belli, fark aritmetik.

#### Doğrudan ölçülebilir hipotezler

**1. Terim yapısı hipotezi:** *Backwardation'daki (prim) emtialar, contango'dakilerden daha yüksek sonraki getiri üretiyor mu?*

Bu, akademik olarak **çokça incelenmiş** bir sorudur ve literatürde **pozitif kanıt vardır** — emtia getirilerinde "roll yield" ve terim yapısı, belgelenmiş bir faktördür. Yani videonun temel iddiası **bilinen bir olguyla uyumlu**, ve bu on ayda ilk kez oluyor.

**2. Ayrışma hipotezi — ve asıl yeni olan bu:** *Fiyat daha düşük dip yaparken spread artıyorsa, sonraki getiri farklı mı?*

Bu, terim yapısının **seviyesi** yerine **değişimini** kullanıyor, ve bilgim dahilinde standart faktör literatüründen daha ince bir kullanım. Test kolay: iki seri, pivot karşılaştırması, sonraki N günün getirisi.

**3. Ve videonun kendi nicel iddiası:** *"Spread ne kadar büyükse parabolik hareket olasılığı o kadar güçlü."* → **spread büyüklüğü ile sonraki hareket büyüklüğü arasındaki ilişki** doğrudan ölçülebilir, ve bu bir korelasyon testi.

#### Kripto için değerlendirme — ve bu ay ilk kez taşınıyor

Dokuz ay boyunca fiyat dışı veri fikirleri (faiz üçlüsü, COT) kriptoya taşınamıyordu. **Bu taşınıyor.**

Kriptoda vadeli piyasa var ve **terim yapısı doğrudan gözlemlenebilir**: perp funding oranı, ve çeyreklik vadeli sözleşmelerin spot'a göre primi/iskontosu. Backwardation ve contango kriptoda **belgelenmiş ve ölçülen** olgular.

**Ve senin verinde zaten var:** `#014`'te funding'i maliyet modelinden çıkarmıştın — o seri hâlâ elinde. Bu video, aynı seriyi **maliyet** olarak değil **sinyal** olarak kullanmayı öneriyor.

**Ölçülebilir hipotez, doğrudan senin verinde:** *Funding oranının seviyesi ya da değişimi, sonraki getiriyi öngörüyor mu?* Ve ikinci versiyonu: *fiyat daha düşük dip yaparken funding artıyorsa (ya da temel primi genişliyorsa), bu bir ayrışma sinyali mi?*

Bu, bu ayın **senin projene doğrudan aktarılabilir tek fikri**, ve kaydedilmesi gereken bu.

#### Yanlışlanamazlık — bu videoda çok az

**1. Tek örnek, geriye dönük.** Pamuk, bir hafta, sonuç bilinerek. Kaç ayrışma oluştu, kaçı çalıştı — sayı yok. Video hindsight'ı açıkça kabul ediyor.

**2. "Spread ne kadar büyükse o kadar güçlü" eşiksiz.** 6,50 primin ne kadar büyük olduğu, tarihsel dağılıma göre söylenmiyor. Kapatılabilir: spread'in kendi tarihsel persentili.

**3. Ayrışma tanımı pencereye bağlı ve pencere verilmiyor.** İkinci videodaki aynı boşluk.

#### Aritmetik denetimi

Pamuk sözleşmesi 50.000 libre; 1 sent/lb = **500 USD.** 10 sent = **5.000 USD.** ✓ **Videonun rakamı doğru.**

#### Ölçülebilirlik

**Ölçülebilir.** Serinin en doğrulanabilir içeriği: gözlemlenebilir bir fiyat serisi, sıfır seçim noktası, kamuya açık veri, ve literatürde desteklenen bir mekanizma. Belirsizlik yalnızca eşiklerde ve pencerede — ikisi de senin koyacağın parametreler.

#### Not

**Öncelikli alınacak — ve bu ay için birinci sırada:** terim yapısı ve spread ayrışması, **kripto funding/temel primi versiyonuyla.** Senin `#014` verinde hazır, yeni veri toplamaya gerek yok, ve maliyet modelinden sinyal modeline geçiş tek satır.

**Ölçüm sırası:** (1) terim yapısı seviyesi ile sonraki getiri, (2) terim yapısı **değişimi** ile fiyat ayrışması, (3) spread büyüklüğü ile sonraki hareket büyüklüğü.

**Alınmayacak:** "ticari boğa piyasası" anlatısı. Kural ondan bağımsız çalışıyor — ve bu kez hikâye de doğru, ama yine de gerekli değil.
:::

### Video 5 — Açık pozisyon

::: ders
**DERS**

#### Kaynak ve atıf

Video kendi öğrenme zincirini anlatıyor: Ken Roberts'ın emtia kursu (*"para kazanmaya yetmezdi ama doymak bilmez bir istek geliştirdi"*), sonra **Larry Williams.**

> *"Onun açık pozisyon kavramları **temelde yaygın olarak bilinen** şeyler ve ben onun verdiği genel kılavuzların üstüne inşa ettim. Yani burada öğreteceğim her şey **temelde Larry Williams'tan öğrendiğim şey**, yol boyunca kaptığım birkaç kendi eklentimle."*

#### Tanım

**Açık pozisyon (open interest):** her işlem günü sonunda piyasa katılımcılarının elinde tuttuğu **toplam açık sözleşme sayısı.**

> *"**Hacim** bir fiyat trendinin arkasındaki baskıyı ya da yoğunluğu ölçerken, **açık pozisyon vadeli piyasaya para akışını ölçer.**"*

Her satıcı için bir alıcı olmak zorunda; ikisi birlikte **tek bir sözleşme** yaratıyor — bu yüzden toplam açık pozisyon için yalnızca bir tarafın toplamı gerekiyor, ikisinin toplamı değil.

**İki kullanım yolu:** (1) bir trendin veya fiyat hareketinin gücünü ölçmek, (2) büyük ticari işlemcilerin ayak izlerini takip etmek.

#### Trendlerde açık pozisyon — klasik tablo

| Fiyat | Açık pozisyon | İşaret | Gerekçe |
|---|---|---|---|
| **Yükseliş trendi** | **Artıyor** | **BOĞA** | Kısalar stop oluyor ama yerlerine yeni satıcılar geliyor; piyasa yükselmeye devam ettikçe uzunlar güçlenir, kısalar zayıflar |
| **Düşüş trendi** | **Artıyor** | **AYI** | Zayıf uzunlar stop oluyor ama yerlerine yeni alıcılar geliyor; kısalar güçlenir, uzunlar zayıflar |
| **Yükseliş trendi** | **Azalıyor** | **AYI** | Eski uzunlar — bu durumda akıllı para — kazançlarını bankaya yazıp likidite ediyor |
| **Düşüş trendi** | **Azalıyor** | **BOĞA** | Akıllı para (kısalar) kapatıyor ve kârlı kısaları likidite ediyor; **"kaybedenlerin arzı tükendiğinde düşüş trendi biter"** |

> *"Başka bir deyişle: **açık pozisyon büyük bir trendde artmaya devam ettiği sürece, devam etmesi için gerekli sponsorluğa sahip olacaktır.**"*

#### Konsolidasyonlarda açık pozisyon — videonun eklentisi

| Fiyat | Açık pozisyon | İşaret |
|---|---|---|
| **Konsolidasyon** | **Artıyor** | **AYI** |
| **Konsolidasyon** | **Azalıyor** | **BOĞA** |

Gerekçe: *"**Sokak parası uzun tarafı oynar.** Bir işlem aralığında artan açık pozisyon, ticari hedger'ların ve profesyonellerin **kısa tarafı** aldığını gösterir, ve bilgisiz spekülatörler aşağı yönlü kırılıma kurban gidecektir."*

Ve mekanizma açıklaması: *"Ticari hedger'lar en büyük likidite sağlayıcıysa ve emtiayı satışa sunuyorlarsa — **çok miktarda satmaya razılarsa, fiyatın yükseleceğine inanmıyorlar demektir**; aksi halde beklerlerdi. Yani artan açık pozisyon, ağır satıcı olma isteklerinin bir ölçüsü."*

Ters yön: *"Konsolidasyonda açık pozisyon düşüyorsa boğa işaretidir. Sebep: muhtemelen kısa olan ticari hedger'lar **kapatıyor.** Sokak parası kısa satacak ve aşağı yönlü kırılım bekleyecek."*

#### Konumla birleştirme — kuralı test edilebilir kılan kısım

> *"İdeal olarak fiyatta **uzun vadeli ya da üst zaman dilimi seviyelerine** bakmak istiyoruz. Fiyat üst zaman dilimi bazında kilit bir **destek** seviyesinde işlem görürken açık pozisyon düşerse — yani fiyat bir **iskonto array'inde** konsolide olurken — bu **boğadır** ve yukarı bir salınım bekleriz."*

Ve tersi: fiyat kilit bir **direnç** seviyesinde (prim array) konsolide olurken açık pozisyon **yükselirse** → **ayı**, aşağı salınım beklenir.

#### Mevsimsel açık pozisyon ortalaması

Veri kaynakları: **barchart.com** (toplam açık pozisyon ve hacim), ve daha iyi bir resim için **CRB Trader** ile **pricecharts.com** — *"emtia işlemcisi olacaksan bu kaynaklardan birini edin. Emtia işlemi yapmasam da hâlâ abone oluyorum ve Forex analizim için kullanıyorum."*

Bu kaynaklar **açık pozisyonun mevsimsel ortalamasını** çiziyor: **noktalı çizgi = çok yıllı ortalama**, **düz siyah çizgi = gerçek açık pozisyon.**

**Yöntem:**

> *"Gerçek açık pozisyon sayısı ile mevsimsel ortalama arasındaki **farka** bakıyorum — ticarilerin bir bütün olarak ne yaptığına dair daha iyi bir his ya da yoğunluk elde etmek için."*

- Siyah çizgi noktalı çizginin **üstünde**, ve bir **direnç** seviyesindeyiz → **ayı**
- Siyah çizgi noktalı çizginin **altına düşüyor**, ve bir **destek/iskonto array'indeyiz**, fiyat konsolidasyonda → *"son derece boğa"*

#### Sözleşme rollover itirazına cevap

> *"Açık pozisyon öğrettiğimde kaçınılmaz olarak biri diyecek ki 'gördüğün şey sözleşme rollover'ı ve vade sonu.' Bu genel olarak içine dahil evet — **ama tüm cevabın göstergesi değil.** İşlemciler hâlâ boğa ya da ayıysa, o sözleşme vadesi doldu diye işlem yapmayı bırakmayacaklar; pozisyonlarını kapatıp yakın aya **rollover** yapacaklar. **Yani açık pozisyon yine yansıyacak — hiçbir şeyi değiştirmeyecek, çünkü birebir yer değiştirme olacak.**"*

#### İki örneğin çözümü

**GBP/USD, 2010:**
- Aylık: 2009'dan ve 2010 başından iki bullish order block
- Haftalık, Eylül 2010: ticariler **net uzun**; fiyat 2010'un ilk çeyreğinden eski bir **bullish breaker**'a iniyor
- CRB Trader'da **153 seviyesi** = üst zaman dilimi destek / bullish order block
- Konsolidasyon sırasında **açık pozisyon dalış yapıp noktalı çizginin — mevsimsel ortalamanın — altına iniyor**
- *"Bu son derece boğa. Akıllı paranın ayak izleri açıkça görülüyor — **kısaları kapatıyorlar ve bunu gizleyemezler.**"*
- Sonuç: **iki aydan kısa sürede 800 puandan fazla** ralli

**EUR/USD, 2010:**
- Haftalık: ticariler sıfır çizgisinin üstünde; 2010 başındaki dipte **aşırı boğa okuma**
- Fiyat ralli yapıp **133**'ten **126**'ya geri çekiliyor — 126 bir bullish order block (son iki düşüş haftalık mumu)
- Günlük: 126 üst zaman dilimi desteğinde küçük bir konsolidasyon
- **Açık pozisyon yine mevsimsel ortalamanın altına dalıyor** — *"Eylül'de düşüyor evet [normal olduğu gibi], **ama gerçek açık pozisyonda ne kadar düştüğüne bak — bu tamamen farklı bir hikâye.**"*
- Sonuç: 126–127'den **142'lere**, **iki aydan kısa sürede 1500 puan**

#### Zaman dilimi konumlandırması ve frekans

> *"Bu açık pozisyon fikirleri **gün içi işlem değil** — **swing trading, pozisyon işlemciliği** için ya da işlemini o daha büyük hareketle senkronlamak için seçilmiş."*

> *"Her şeyi cevaplamıyor ve her gün ya da her hafta sana bir sinyal vermiyor — **yılda birkaç kez** bu hareketleri arayabiliriz."*
:::

::: eleme
**ELEME**

#### Doğru, atıflı, ve kamuya açık veriyle test edilebilir

Trend tablosu (fiyat × açık pozisyon → dört durum) **standart vadeli piyasa literatürüdür** — Murphy, Schwager ve benzeri her metinde var. Video bunu doğru veriyor **ve kaynağını söylüyor.** Mart V8'in *"böyle bir şey dışarıda yok"* tonundan tamamen farklı.

**Ölçülebilir hipotezler, ve dördü de tek koşuda:**

1. *Yükseliş trendinde artan açık pozisyon, azalan açık pozisyondan farklı sonraki getiri veriyor mu?* (Ve diğer üç kombinasyon.)
2. *Konsolidasyonda artan/azalan açık pozisyon, kırılım yönünü öngörüyor mu?* — **bu, videonun kendi eklentisi ve asıl test edilmesi gereken kısım**
3. *Açık pozisyonun mevsimsel ortalamadan sapması, ham seviyesinden daha çok bilgi taşıyor mu?* — **aynı veri, iki normalizasyon**
4. *Üst zaman dilimi destek/direnç konumuyla birleştirildiğinde sinyal güçleniyor mu?*

Üçüncüsü özellikle değerli çünkü **normalizasyon fikri COT'takiyle aynı** — ham seri yerine bir referansa göre konum. İkisi aynı testin iki uygulaması.

#### Rollover itirazına verilen cevap doğru — ve ölçülebilir

*"İşlemciler pozisyonlarını yakın aya rollover yapacak, birebir yer değiştirme olacak."*

Bu **kısmen doğru**: agregat açık pozisyon rollover sırasında gerçekten korunma eğilimindedir, ama tam değil — vade sonuna doğru sistematik bir düşüş vardır ve mevsimsel ortalama tam da bunu yakalar.

**Ve videonun çözümü bu itiraza doğru cevap veriyor:** ham açık pozisyon yerine **mevsimsel ortalamadan sapma** kullanmak, rollover kaynaklı düzenli dalgalanmayı zaten çıkarıyor. Bu, teknik olarak **mevsimsel düzeltme** yapmaktır ve doğru bir hamledir.

Ölçüm için: mevsimsel ortalama kendin hesaplanabilir (aynı takvim gününün çok yıllı ortalaması), yani CRB Trader aboneliği zorunlu değil.

#### Frekans itirafı — ve neden önemli

> *"Yılda birkaç kez bu hareketleri arayabiliriz."*

Bu, on ayda verilen **en dürüst frekans beyanı.** Ve ölçüm açısından doğrudan bir sonucu var: yılda birkaç sinyal × tek enstrüman = **senin 100 işlem eşiğine ulaşmak için onlarca yıl ya da onlarca enstrüman gerekir.**

Yani bu fikir, **çoklu enstrüman olmadan ölçülemez** — ve ikinci videonun 20 enstrümanlık sepeti tam da bunu sağlıyor. İki video birlikte okunduğunda örneklem sorunu çözülüyor.

#### Yanlışlanamazlık

**1. Dört durumlu tablo tüm kombinasyonları kapsıyor.** Fiyat ya yükselir ya düşer; açık pozisyon ya artar ya azalar. **Dört durum, dört yorum, beşinci seçenek yok.**

Bu, kendi başına bir kusur değil — bir sınıflandırma tüketici olabilir ve yine de bilgi taşıyabilir. **Bilgi taşıyıp taşımadığı ölçülebilir**, ve testi basit: dört grubun sonraki getiri dağılımları farklı mı?

**Ve şunu da not etmek gerekiyor:** literatürde bu tablonun öngörü gücü **karışık** bulunmuştur. Yani beklenti sıfır değil ama güçlü de değil — tam ölçülmesi gereken cinsten.

**2. Konsolidasyon tanımsız.** Kuralın yarısı (konsolidasyon satırları) videonun kendi eklentisi ve **"konsolidasyon" için eşik verilmiyor.** Nisan V3'ün CBDR penceresi ya da Mayıs V2'nin flout penceresi gibi sabit bir tanım burada yok.

Kapatılabilir: aralık/ATR oranı, ya da sabit bir N-bar penceresinde aralık genişliği.

**3. İki örnek, ikisi de 2010, ikisi de çalışmış.** Kaç kez açık pozisyon mevsimsel ortalamanın altına indi, kaçında bu tür bir hareket geldi — sayı yok.

#### Ölçülebilirlik

**Ölçülebilir.** Veri kamuya açık ve ücretsiz; tablo mekanik; mevsimsel normalizasyon hesaplanabilir; ve dört ayrı hipotez doğrudan çıkarılıyor. Belirsiz bileşen (konsolidasyon tanımı) kenarda ve vekile çevrilebilir.

#### Not

**Alınacak:** mevsimsel ortalamadan sapma normalizasyonu — **COT orta çizgisiyle aynı testin ikinci uygulaması olarak.** İkisi birlikte tek bir çalışmada: *ham seri mi, referansa göre konum mu daha çok bilgi taşıyor?*

**Alınacak:** konsolidasyon + açık pozisyon yönü kombinasyonu, kırılım yönü tahmini olarak. Bu, videonun kendi eklentisi ve dolayısıyla test edilmemiş olanı.

**Kripto notu:** açık pozisyon perp piyasalarında **doğrudan ve gecikmesiz** mevcut. COT taşınmıyor, bu taşınıyor. Ve dördüncü videonun funding/terim yapısı fikriyle **aynı veri kaynağından** okunuyor — ikisi birlikte ölçülebilir.
:::

# TAHVİL MODÜLÜ (V6–V9)

### Video 6 — Tahvil temelleri ve açılış aralığı

::: ders
**DERS**

#### Enstrüman

**30 yıllık ABD hazine tahvili vadeli sözleşmesi**, sembol **ZB**, CBOT'ta işlem görüyor.

| Kalem | Değer |
|---|---|
| Teslim ayları | **Mart (H), Haziran (M), Eylül (U), Aralık (Z)** |
| Sembol formatı | ZB + ay kodu + yılın son iki hanesi → **ZBU17** = Eylül 2017 |
| Minimum tick | **31,25 USD / sözleşme** |
| Tam handle | **32 tick = 1.000 USD / sözleşme** |

#### Seans yapısı

| Öğe | Zaman (NY) |
|---|---|
| **En yüksek hacim** | **08:00 – 09:30** |
| **Gerçek gün (true day)** | **08:00 – 15:00** |
| **Açılış aralığı** | **08:00 – 09:00** |

#### Merkezi iddia

> *"**08:00 ile 09:00 arasındaki açılış aralığı, tahvil piyasasının günün tepesini ya da dibini oluşturma eğilimindedir.** Bir stop koşusu ya da bir fair value kurulumu olabilir — yani bir bullish/bearish order block, ya da bir likidite boşluğuna inip bir fair value gap doldurma. Ayrıca **borsa açılışında süpürülecek likidite havuzlarının biriktiği yerdir.**"*

#### Açılış aralığının tanımlanması

- Öncelikle **gövdeler**, ama **fitiller de** dahil edilir
- Ve ek olarak: **08:00–09:00'ın hemen soluna düşen önceki tepe ve dipler**

Örnekte: gece yarısı ile 02:00 arasında oluşmuş, **154,19'un hemen altındaki eşit tepeler** aralık tanımına dahil ediliyor — *"ve dikkat et, o referans noktası daha sonra akşam Asya seansında stop süpürmesi için bir mesele haline geliyor."*

#### Sinyal zamanlaması

> *"Sinyallerin **08:20'de ya da sonrasında** oluşmasını severim. 08:00 kadar erken, bazen biraz daha önce de olabilir — tıpkı 07:00'deki New York seansı açılışı gibi — ama genellikle **08:00 ile 08:30 arası** görmeyi tercih ederim. Yani hedef zaman **08:20 ya da CME açılışı.**"*

Gerekçe: 08:20'de New York işlemcilerinin güçlü akını var, Londra işlemcileri hâlâ çalışıyor, ve Avrupalı işlemciler hazine piyasalarına katılmak istiyor.

#### Gerçek hacim — ve yeni olan bu

> *"Şimdi emtialarla çalışıyoruz, **gerçek hacimle alım-satım baskısının çok daha doğru bir tasvirine** sahibiz."*

**Kural: hacim fiyattan önce gelir (volume precedes price).**

- Fiyat **daha düşük dip** yapıyor ama o dip **daha düşük hacimle** geliyorsa → satış baskısı yok, bu bir **stop koşusu** → fiyat yükselir
- Fiyat **daha yüksek tepe** yapıyor ama hacim **azalıyorsa** → ralli zayıf, dönüş beklenir

> *"İdeal olarak en yüksek tepeye giden harekette hacim çubuğu **daha yüksek** olmalıydı."*

#### Üç örneğin çözümü (ZBU17, 15 dakikalık)

**Birinci:** 08:00–09:00 açılış aralığı; fiyat aralığın dibinin altına iniyor — **stop koşusu ve potansiyel dönüş.** Günün en yüksek hacmi 08:00–09:00 arasında. *"09:00 sonrası oluşan o daha düşük dip **daha düşük hacimle** görüldü — yani 08:00'den hemen sonra büyük alım vardı, ama daha düşük dip yapılırken büyük bir hacim akını olmadı. Bu bir **hacim ayrışması.**"* Fiyat yükseliyor ve açılış aralığı **tepesinde** destek buluyor.

**İkinci:** açılış aralığının **içinde** bir bullish order block (son iki düşüş mumu). Fiyat oraya iniyor, ralli yapıyor. Sonra 11:00 saatine doğru daha yüksek tepe yapıyor **ama hacim azalıyor** → **154,21**'de zayıflık; fiyat açılış aralığına geri düşüp konsolidasyona giriyor.

**Üçüncü:** açılış aralığı içinde bir bullish order block, iki test. Fiyat **154,26**'ya kadar çıkıp **açılış aralığı tepesinin üstüne** geçiyor — ama hafif hacimle, ayrışmayla. Stopları süpürüyor, daha yükseğe gidemiyor, aşağı işlem görüp **154,10**'daki fair value gap'i kapatıyor.

#### Gerçekçi beklentiler

> *"Bu piyasa genellikle **büyük bir günlük aralığa sahip değil.**"*

| Hedef | Değer |
|---|---|
| Gün içi işlem, makul | **5–8 tick** |
| İyi bir gün | **16 tick = 500 USD** |
| Büyük aralıklı gün | **32 tick = 1.000 USD** — *"her zaman olmuyor... normal olan bu değil"* |

#### Manipülasyon iddiası

> *"Tahvil piyasasının harika yanlarından biri: **tüm piyasaların en az manipüle edilenidir.** ... Manipülasyon eksikliği olduğu anlamına gelmiyor — sadece **diğer tüm varlık sınıflarıyla kıyaslandığında genellikle en azını tahvil piyasasında görürsün.**"*

#### Kaçınma kuralı

FOMC, faiz raporları ve tarım dışı istihdam öncesinde tahvil piyasasından uzak durulur. *"Likidite kurur, piyasa likiditenin olduğu yere **gap** yapacak, ve muhtemelen pozisyonuna karşı olacak."*

#### Dürüst sınırlamalar

> *"**Bu varlık sınıfını mükemmel yapan hiçbir şey yok.** Bazen stop'unu çalıştıracak mı? Evet. Bazen grafikte bir şey görüp gerçekleşmeyip ters yöne gitmesi olacak mı? Evet. Yukarı gitmeyip sadece yatay giden order block'lar görecek misin? Evet."*

Ve bir tercih beyanı: *"Forex bir gün erirse ya da Forex işlem yapamaz hale gelirsem, **hiç duraksamadan tahvil işlemine geri dönerdim.**"*
:::

::: eleme
**ELEME**

#### Sıfır seçim noktalı bir açılış aralığı kuralı

*"08:00–09:00 aralığı günün tepesini ya da dibini oluşturma eğilimindedir."*

Bu, Nisan V3'ün CBDR'siyle **aynı yapıda** ve aynı sebeple ölçülebilir: sabit saat penceresi, maks/min, ve yanlışlanabilir bir çıktı.

**Ölçülebilir hipotez:** *Günün ekstremumu 08:00–09:00 penceresinde ne oranda oluşuyor?*

**Ve taban çizgisi hesaplanabilir:** tahvil gerçek günü 08:00–15:00 = 7 saat. Düzgün dağılımda bir saatlik pencerenin beklenen payı **%14,3.** İddia bunun belirgin üstünde olduğu.

Bu, on ayda kaydedilen en temiz taban-çizgili testlerden biri, çünkü **gerçek günün kendisi de tanımlı** (08:00–15:00) — pencere payı belirsiz değil.

#### Ve bu ay ilk kez: gerçek hacim

Dokuz ay boyunca hacim hiç kullanılmadı, ve YONERGE §4'te *"mum grafiği hacim dağılımı hakkında bilgi vermez"* olarak işaretlenen yanlış iddia bunun yerine geçiyordu.

**Vadeli piyasada bu sorun yok:** merkezi takas nedeniyle **gerçek işlem hacmi mevcut ve tektir.** Video bunu doğru tespit ediyor: *"gerçek hacimle alım-satım baskısının çok daha doğru bir tasvirine sahibiz."*

**Ölçülebilir hipotez:** *Yeni bir ekstremum, önceki ekstremumdan daha düşük hacimle geldiğinde dönüş olasılığı artıyor mu?*

Bu, klasik teknik analizde **hacim ayrışması** olarak bilinen ve uzun süredir tartışılan bir olgu — literatürde karışık kanıt var. Ama **tanımı tamamen mekanik** (iki hacim çubuğunun karşılaştırması) ve senin ölçüm altyapına doğrudan eklenir.

**Kripto notu:** kriptoda borsa hacmi **tek bir sayı değil** — her borsa kendi hacmini raporluyor ve yıkama işlemi (wash trading) belgelenmiş bir sorun. Yani hacim ayrışması kriptoda taşınabilir ama **veri kalitesi sorunuyla birlikte**, ve vadeli piyasadaki temizliğe sahip değil. Bu sınır kaydedilmeli.

#### Ölçek gerçekçiliği — ve senin maliyet bulgunla ilişkisi

5–8 tick hedefi, 1 tick = 31,25 USD → **156–250 USD.** Ve komisyon vadeli işlemlerde sözleşme başına tipik olarak 2–5 USD gidiş-dönüş.

**Bu, on ayda kaydedilen en elverişli maliyet oranı.** Senin −1.088R bulgunda maliyet, R cinsinden stop mesafesine bölünüyordu; burada 5 tick'lik bir hedefe karşı 4 USD komisyon, hedefin **%2,5'i.** Forex'te 20 pip'lik stopa 1,5 pip maliyet **%7,5**'ti.

Yani vadeli piyasada aynı ölçek, **üç kat daha az maliyet baskısı** taşıyor — ve bu, ölçüm sonuçlarını doğrudan etkiler.

#### "En az manipüle edilen piyasa" — ölçülemez ama zararsız

Bu iddia için bir ölçü verilmiyor ve "manipülasyon" tanımlı değil. **Ama kural ondan bağımsız çalışıyor:** açılış aralığı testi, bu cümle silinse de aynen ölçülebilir.

Ve not: tahvil vadeli piyasası gerçekten yüksek likiditeli ve dar spreadli bir piyasadır — iddianın işaret ettiği şey doğru olabilir, sadece söylendiği biçimde ölçülemez.

#### Yanlışlanamazlık — bu videoda az

Videonun kendi sınırlama listesi (*"stop'unu çalıştıracak, gerçekleşmeyecek, yatay gidecek"*) bir kaçış kapısı değil, bir **beklenti kalibrasyonu**, ve doğru yönde.

Kalan tek boşluk: açılış aralığının tanımına *"soldaki önceki tepe ve dipler"* eklenmesi. Bu, aralığı **belirsiz biçimde genişletiyor** — ne kadar sola, hangi eşikte? Kapatılabilir (ör. Asya seansının tamamı) ama video kapatmıyor.

#### Ölçülebilirlik

**Ölçülebilir.** Sabit saat penceresi, tanımlı gerçek gün, hesaplanabilir taban çizgisi, ve gerçek hacim verisi. Belirsizlik yalnızca aralık genişletmesinde ve kenarda.

#### Not

**Alınacak:** açılış aralığı ekstremum testi, **%14,3 taban çizgisine karşı.** Nisan V3'ün CBDR ölçümüyle aynı kalıp, farklı enstrüman ve pencere — ikisi birlikte, aynı kodla.

**Alınacak:** hacim ayrışması testi. Dokuz ayda ilk kez hacim kullanılabilir bir veri olarak elde, ve vadeli piyasada temiz.
:::

### Video 7 — Bölünmüş seans kuralları

::: ders
**DERS**

#### Üç seans

| Seans | Zaman (NY) | Karakter |
|---|---|---|
| **Gece / Londra** | **02:00 – 05:00** | Yalnızca **referans** — stoplar, likidite boşlukları, fair value gap'ler |
| **New York AM** | **08:00 – 12:00** (11:00'de bitebilir) | En yüksek hacim; **gerçek günün tepesini ya da dibini oluşturma eğilimi** |
| **New York PM** | **12:00 – 15:00** | Devam, dönüş, ya da konsolidasyon |

**New York öğle arası: 11:00 – 13:00.**

Londra seansı hakkında açık tercih: *"Tahville Londra seansında işlem yapmak istemiyorum ve yapman gerektiğini de ima etmek istemiyorum. **Ona her zaman 02:00 ile 05:00 arasında referans veririz.**"*

#### AM seansının yapısal avantajı

> *"AM seansının **yerleşik bir avantajı** var çünkü genellikle günün en büyük hacmini görecek. Bu da demek oluyor ki genellikle **New York seansının — ya da tahviller için gerçek günün toplam aralığının — tepesini veya dibini oluşturacak.**"*

Ve kişisel kill zone: *"Yalnızca emtia işlemi yaparken **08:20'den 11:00'e** odaklanırdım — e-mini S&P, S&P vadeli büyük sözleşme, comdol'lar ve tahvil piyasası. **İş günüm buydu.** Sapkın olmak ya da şansımı zorlamak istediğimde PM seansında işlem yapardım."*

#### Gün tipleri

**Trend günleri:** tüm işlem günü tek yönlü olabilir — 08:00/08:20 civarı günün dibini yapar ve 15:00'e kadar tek yönlü yükselir. *"O iki seans birlikte tam günlük aralığı oluşturur."*

Trend günleri **PM seansından da başlayabilir:** geç öğleden sonra bir FOMC varsa, AM seansı konsolide olur, PM seansı trend ortamına girer, ve bu bir **"runner"** olarak sonraki seansa taşınabilir.

**Konsolidasyon günleri:** AM ve PM zıt yönlerde olabilir, ya da bir seans salınım üretirken diğeri sessiz kalır.

#### Pratik kural

> *"Günün aslan payının AM seansı tarafından tamamlandığını biliyorsak, **New York öğle arasından önce düz pozisyona geçebiliriz ve PM seansında hiç işlem yapmayabiliriz. İkinci porsiyon için geri gelme — kazandığınla mutlu ol ve kârda eve git.**"*
:::

::: eleme
**ELEME**

#### İki mekanik iddia

**1. AM seansı (08:00–12:00) gerçek günün ekstremumunu oluşturur.**

Altıncı videodaki 08:00–09:00 iddiasının daha geniş versiyonu, ve **taban çizgisi yine hesaplanabilir:** gerçek gün 7 saat; AM seansı 4 saat → düzgün dağılımda beklenen pay **%57.**

Yani bu iddia, altıncı videonunkinden **çok daha zayıf bir kaldıraç** iddia ediyor (4/7 = %57 tabana karşı) ve dolayısıyla **daha az bilgi taşıyor.** İki iddiayı birlikte ölçmek, hangisinin gerçek bilgi taşıdığını gösterir: dar pencere mi (08:00–09:00, %14,3 tabana karşı) yoksa geniş pencere mi (%57).

**Bu, bu ayın ölçüm tasarımı açısından en öğretici noktası:** aynı olgunun iki pencereli versiyonu var ve **dar olanı test etmeye değer olan.**

**2. "AM aslan payını yaptıysa PM'de işlem yapma" kuralı.**

Yasaklayıcı, ve **mekanik hale getirilebilir:** AM aralığının günlük aralığa oranı bir eşiği aşıyorsa PM'de yeni pozisyon yok. Nisan V1'in *"Londra ADR'nin %80'ini koyduysa New York'u atla"* kuralının tahvil versiyonu.

Ve iki kural birlikte ölçülebilir — aynı yapı, iki varlık sınıfı.

#### Yanlışlanamazlık

**"Trend günleri PM'den de başlayabilir."** İki gün tipi (trend / konsolidasyon) × iki başlangıç (AM / PM) = tüm günler kapsanıyor. Sınıflandırma tüketici ve **eşik yok.**

Ama beşinci videoda kaydedilen aynı not geçerli: tüketicilik kendi başına kusur değil; **eşik olmaması kusur.** "Trend günü" için bir aralık/ATR eşiği takılırsa sınıflandırma ölçülebilir hale gelir.

#### Ölçülebilirlik

**Ölçülebilir.** Üç seans penceresi saat tabanlı, iki iddia da taban çizgisi hesaplanabilir biçimde ölçülebilir, ve kaçınma kuralı yasaklayıcı ve sayısallaştırılabilir.

#### Not

**Alınacak:** dar pencere (08:00–09:00) ile geniş pencere (08:00–12:00) karşılaştırması. **Hangisi tabanına göre daha fazla kaldıraç veriyor?** Bu, sadece tahvil için değil, tüm zaman-penceresi iddiaları için genel bir ölçüm kalıbı.

**Alınacak:** AM/günlük aralık oranı eşiği, PM işlem kapısı olarak — Nisan V1'in %80 kuralıyla birlikte.
:::

### Video 8 — Konsolidasyon günleri

::: ders
**DERS**

Videonun kendi çerçevelemesi: *"**Belirli kurulumlar öğretmiyorum** — düşünce sürecini öğretiyorum, ve tahvil analizini büyük şemaya nasıl dahil edeceğimizi, ve bunu **Forex'e geri bağlamayı.**"*

#### Gece seansı hakkında bir uyarı

> *"Gece fiyat hareketi trend ortamı da olabilir, aralığa bağlı da. **Gece fiyat hareketine dair belirli bir öncü yok.** Londra'da olan şeyin New York işlem saatleri için gelecek tahmini anlamına geldiğini düşünme — çünkü piyasa gece hareket edip New York seansında **basitçe ölebilir.**"*

#### Konsolidasyon günlerinin öngörücüleri

**1. Haftanın ilerleyen günlerinde yüksek/orta etkili ABD raporları varsa** → bugün konsolidasyon fikri desteklenir.

Kayıt anındaki örnek: aynı gün 14:00'te FOMC vardı **ve** aynı sabah New York seansında bol miktarda yüksek etkili dolar bazlı haber vardı → *"bu, **işlem haftası başlamadan önce öngördüğümüz** yüksek oynaklıklı bir gün yarattı."* Buna karşılık, AM seansında yüksek etkili haber olmasa ve FOMC tek olay olsa, öncesinde konsolidasyon görülür, sabah seansına taşınır, ve oynaklık **PM seansında** patlar.

**2. Üst zaman dilimi prim ya da iskonto array'ine ulaşıldıktan sonra.** Üç sonuçtan biri: duraklama/konsolidasyon, geri çekilme, ya da dönüş. *"Kâr alma gelecek ve fiyattaki ilerlemede bir duraklama olacak."*

**3. Üst zaman dilimi fiyat salınımının dengesine (orta noktasına) ulaşıldığında.**

> *"Dengeye geri çekildiğimizde **her zaman anında bir tepki bekleme**, çünkü denge civarında kalabilir — çünkü üst zaman dilimi, büyük işlemcilerin o zaman diliminde çalışmasını gerektiriyor. **O seviyeyi bazen birden fazla kez çalışacaklar.**"*

**4. ABD banka tatilleri.** Tatil öncesi işlem günü sessiz olur, *"ve o konsolidasyon **piyasanın tamamında yankılanacak.**"*

**5. Tahvil ihale günleri.** *"İhaleden **önceki gün** bir konsolidasyon günü olabilir, ve **ihale gününün AM seansı** genellikle bir konsolidasyondur."*

#### Yapısal gözlem

> *"**Fiyat hareketine baktığımızda konsolidasyonlar açık ara en baskın husus olacak.** Piyasalar konsolidasyondan genişlemeye, genişlemeden konsolidasyona hareket eder; tüm bunların ortasında geri çekilmeler ve/veya dönüşler olacak."*

#### Konsolidasyon günlerinde işlem

- **AM seansı:** **5–10 tick** scalp (1 tick = 31,25 USD)
- **Açılış aralığı 12 tick veya daha azsa** → *"genellikle bir tür genişleme hareketi olacak"* — bir gece tepesini ya da dibini patlatabilir; *"o küçük açılış aralığı genellikle o **oynaklık sıkışmasına** izin verir, sonra kopar ve kurumsal emir akışına göre önceden belirlediğin yönde hareket eder"*
- **PM seansı, konsolidasyon günlerinde:** yalnızca **AM seansı henüz bir stop koşusu yapmadıysa** işlem yapılır — yani dokunulmamış bir likidite havuzu varsa. *"Stopları aldıktan sonra açgözlü olma — profesyonellerle birlikte stopları koş, kârını al ve kenara çekil."*
- **Tahvil ihale günlerinde AM seansında işlem yapma**
- **Faiz sürücüleri olduğunda (genelde 14:00) PM seansında işlem yapma** — *"oynaklık ne kadar iyi görünürse görünsün, güven bana, sadece kaçın"*

#### Piyasalar arası bağ

> *"Yıllar içinde öğrendim ki faiz piyasalarının ve tahvil piyasasının analize dahil edilmesi — **işte o eksik halka.** Tahvil piyasasında bir konsolidasyon dönemi olacağını biliyorsak, **aynı şeyin diğer varlık sınıflarında da olmasını makul biçimde beklemeliyiz.**"*
:::

::: eleme
**ELEME**

#### Beş öngörücünün dördü takvimden okunuyor

| Öngörücü | Tipi |
|---|---|
| Haftanın ilerleyen günlerinde yüksek etkili rapor | **Takvim** |
| ABD banka tatili öncesi | **Takvim** |
| Tahvil ihale günü ve öncesi | **Takvim** |
| Üst zaman dilimi array'ine ulaşılması | Yorum |
| Üst zaman dilimi dengesine ulaşılması | Aritmetik (aralık orta noktası) |

**Üçü tamamen takvimden**, ve üçü de **önceden bilinebilir** — FOMC takvimi, banka tatilleri ve hazine ihale takvimi aylar öncesinden yayınlanır.

Bu, Mart V2'de ve Nisan V6'da kaydedilen takvim maskesi fikrinin **genişletilmiş hali**, ve tahvil ihale takvimi yeni bir bileşen.

**Ölçülebilir hipotez:** *Tahvil ihale günlerinde ve öncesinde, günlük aralık/ADR oranı diğer günlerden düşük mü?* Saf sayım, tek koşu, ve takvim verisi kamuya açık.

#### 12 tick kuralı — ayın en somut oynaklık eşiği

*"Açılış aralığı 12 tick veya daha azsa genellikle bir genişleme hareketi olacak."*

Şubat V7'nin inside bar/NR7 kuralının, Mart V8'in *"küçük aralıklar büyük aralıkları doğurur"* ifadesinin ve Haziran V9'un devamı — ama **ilk kez mutlak bir sayı ile.**

12 tick = 12 × 31,25 = **375 USD** aralık genişliği. Ve tahvilin tipik günlük aralığı videonun kendi ifadesiyle 16–32 tick civarı, yani 12 tick **açılış saatinin** dar olması demek.

**Ölçülebilir hipotez:** *08:00–09:00 aralığı 12 tick veya daha az olan günlerde, günlük aralık diğer günlerden büyük mü?* Ve taban çizgisi: **oynaklık kümelenmesi nedeniyle bu ilişki rastgele bir modelde bile kısmen beklenir** — o yüzden test, oynaklık-eşleştirilmiş bir kontrole karşı yapılmalı. Ocak V10, Şubat V7, Mart V6 ve Nisan V3 için kaydedilen aynı metodolojik nokta.

#### "Gece seansının öncüsü yok" — ve Mayıs'la çelişki

> *"Gece fiyat hareketine dair **belirli bir öncü yok.** Londra'da olan şeyin New York için gelecek tahmini anlamına geldiğini düşünme."*

**Mayıs V5** ise şunu söylüyordu: *"New York, bir üst zaman dilimi array'inde açılmadıkça **her zaman** Londra'nın devamıdır."*

İki varlık sınıfı farklı — ama iddialar aynı yapıya dair ve zıt. **Ve ikisi de aynı testle çözülür:** *önceki seansın yönü, sonraki seansın yönünü öngörüyor mu?* Cevap enstrümana göre değişebilir, ki bu da kullanışlı bir bulgu olur.

#### PM işlem koşulu — mantıklı ve mekanik

*"PM'de yalnızca AM henüz bir stop koşusu yapmadıysa işlem yap."*

Bu, **dokunulmamış likidite** kavramının en sade hali, ve kodlanabilir: AM seansında önceki gün/gece ekstremumları süpürüldü mü? Süpürülmediyse PM'de aday var.

Ve Mart V4'ün **tükenme kuralıyla** aynı ailede: bir seviyeye bir kez dokunulduysa artık aday değil.

#### Yanlışlanamazlık

**1. "Üç sonuçtan biri: duraklama, geri çekilme, ya da dönüş."** Üst zaman dilimi array'ine ulaşıldıktan sonra fiyatın yapabileceği başka bir şey yok. **Tam kapsayıcı**, ve hangisinin olacağına dair kural verilmiyor.

**2. "Dengede birden fazla kez çalışacaklar."** Şubat V5'te kaydedilen *"seviyeler birden çok kez işlem görebilir"* kaçış kapısının aynısı, ve Mart V4'ün tükenme kuralıyla **doğrudan çelişiyor.** Beş aydır açık duran aynı soru: bir seviyeye ikinci dokunuş birinciden farklı mı? **Tek koşuda çözülür.**

#### Ölçülebilirlik

**Ölçülebilir.** Üç takvim tabanlı öngörücü, bir mutlak oynaklık eşiği (12 tick), ve bir mekanik PM kapısı. Belirsiz bileşenler ("hangi array", "hangi üç sonuç") kenarda.

#### Not

**Alınacak:** tahvil ihale takvimi maskesi — Mart V2 ve Nisan V6'nın takvim maskelerine eklenecek yeni bir bileşen, ve kamuya açık.

**Alınacak:** 12 tick açılış aralığı eşiği, **oynaklık-eşleştirilmiş taban çizgisine karşı.** Ve Şubat V7'nin NR7'siyle birlikte — ikisi aynı olgunun mutlak ve göreli versiyonları.
:::

### Video 9 — Trend günleri

::: ders
**DERS**

#### Oluşum karakteristikleri

> *"Trend günleri ya da büyük aralık genişleme günleri **tipik olarak küçük aralıklı günlerden veya bir dizi küçük aralıklı günden sonra** görülür. Günlük PD array matrisi tarafından **yönlü olarak sürülürler**, ve **likidite arayan hareketlerdir.**"*

#### Kurulumun üç bileşeni

1. **Oynaklık filtresi:** günlük grafikte aralıklar küçülüyor — önceki gün son birkaç güne göre küçük, ya da fiyat bir dizi işlem günü boyunca daralmış
2. **Konum:** yakın zamanda bir **iskonto array'ine** (yukarı için) ya da **prim array'ine** (aşağı için) işlem görülmüş
3. **Katalizör:** ekonomik takvim **08:30 NY**'de yüksek/orta etkili ABD raporları gösteriyor

→ İskontodan prime (ya da tersine) genişleme sahnesi kurulmuş oluyor.

#### FOMC kuralı — netleştirilmiş hali

> *"Kural şu ki genellikle FOMC'yi **bekliyoruz** — aktif olmaya çalışmıyoruz, FOMC öğleden sonra seansında işlem yapmak istemiyoruz. **Ama sabah seansında işlem yapabiliriz** eğer bir oynaklık sıkışması, küçük aralıklar varsa, bir iskonto ya da prim array'inden işlem gördüğümüzü biliyorsak... FOMC tipik olarak New York saatiyle 14:00'te. **Yani sabah seansında işlem yapabiliriz ama öğleden sonra işleminde olamayız.**"*

#### 14 Haziran 2017 örneğinin çözümü

- Tahvil piyasası, 08:00–08:30 açılışına giderken **daha düşük bir dip** yapıyor
- Aynı anda ekonomik takvimde 08:30 ABD haberleri **ve** o gün FOMC var
- **Ve tetikleyici:** *"tahvildeki o diplere **10 yıllık nota göre** bak — **daha aşağı gitmedi. İşte tetikleyicimiz bu**, profesyonel birikimi orada görüyoruz."*
- Video, canlı seansta **önceden** ilan ettiğini belirtiyor: *"14'ünde canlı seansta bir alım stopu koşusu ya da yukarı genişleme beklediğimizi **önceden ortaya koydum.** İki saatlik grafikte iskontodaydık ve daha sonra FOMC ile birçok dolar bazlı haber olayı vardı, o yüzden odağımızı öncelikle AM seansında tutmalıydık."*
- Sonuç: tahvilde büyük yükseliş; **aynı işlem gününün New York seansında EUR/USD yukarı fırladı**
- *"Ve o enerjinin öncüsü ve serbest kalması **doğrudan tahvil piyasasıyla ilgiliydi.**"*

**Zaman dilimi uyarısı:** *"Burada gösterilen grafik **merkez saatte**, yani bir saat erken — burada 07:00–07:30 olarak gördüğün şey benim saatimde, yani New York saatinde 08:00–08:30."*

#### Mekanizma gerekçesi

Sniper serisine atıfla: *"akıllı para devreye girdiğinde yarattıkları **yer değiştirme** — küçük hareketler yaratmazlar, fark edilir."*
:::

::: eleme
**ELEME**

#### Vade eğrisi ayrışması — Aralık V1'in somut hali

Bu videonun tetikleyicisi, **30 yıllık tahvil daha düşük dip yaparken 10 yıllık notun yapmaması.**

Bu, **Aralık V1'in "faiz üçlüsü"** fikrinin (30 yıl / 10 yıl / 5 yıl) tek bir işlem gününde uygulanması. Aralık'ta o fikir **ölçülebilir** bulunmuştu ve tek eksiği şuydu: *"'aynı anda' ne demek? Video 90 dakikalık grafikte 15–18 günlük bir pencereye bakıyor ama zaman hizalaması kuralı yok."*

**Burada o boşluk kapanıyor:** pencere **08:00–08:30 açılışı**, ve karşılaştırma o pencerede oluşan diplerin karşılaştırması. Yedi ay sonra, aynı fikir, tanımlı pencereyle.

**Ölçülebilir hipotez, doğrudan:** *ZB ile ZN'nin 08:00–09:00 penceresindeki ekstremumları ayrıştığında, günün kalanı ayrışmanın işaret ettiği yönde mi hareket ediyor?*

- **İki kamuya açık seri**, aynı borsada, aynı saatlerde
- **Sıfır seçim noktası** — pencere ve karşılaştırma tanımlı
- **Yüksek korelasyonlu iki seri** — ayrışmalar nadir olur, ve Aralık V1'de kaydedilen uyarı geçerli: *"nadir olduğu için 'özel bir şey oluyor' sezgisi makul görünür, ama örneklem sorunu doğurur"*
- **Beş yıllık not (ZF) eklendiğinde üç seri** olur ve Aralık'ın orijinal üçlüsü tamamlanır

#### Ve bu, ayın en kolay taşınabilir ikinci fikri

Kripto analoğu Aralık'ta önerilmişti: BTC / ETH / toplam altcoin, ya da BTC spot / perp / funding. **Ama vade eğrisi analoğu daha yakın:** kriptoda **farklı vadeli sözleşmeler** (çeyreklik, iki çeyreklik) mevcut, ve aralarındaki ayrışma tam olarak aynı yapıda ölçülebilir.

Ve dördüncü videonun terim yapısı fikriyle **aynı veriden** okunuyor — bir kez çekilen veri iki hipotezi birden besliyor.

#### "Küçük aralıklar trend gününü öncüler" — dördüncü kez

| Ay | İfade |
|---|---|
| Şubat V7 | Inside bar / NR7 / NR3 |
| Mart V8 | *"Küçük aralıklar büyük aralıkları doğurur, sessizken gir"* |
| Nisan V6 | *"ADR aşılmadıysa genişleme günü bekle"* |
| Haziran V8 | *"Açılış aralığı 12 tick veya daha azsa genişleme"* |
| **Haziran V9** | *"Trend günleri küçük aralıklı günlerden veya bir dizi küçük aralıklı günden sonra"* |

**Beş ay, beş ifade, tek olgu.** Ve hepsi aynı testle ölçülür: *daralma sonrası genişleme, oynaklık-eşleştirilmiş taban çizgisinden farklı mı?*

Bu, on ayın **en çok tekrarlanan** ölçülebilir fikri, ve tek bir çalışmayla beşinin de cevabı alınır.

#### Önceden ilan edilmiş çağrı — ve neyin eksik olduğu

*"14'ünde canlı seansta önceden ortaya koydum."*

Şubat V4'ün gümüş beyanı, Mart V8'in Twitter çağrısı ve Mayıs V1'in haftalık dip çağrısıyla aynı yapı: **ileriye dönük bir çağrı yapıldığı belirtiliyor, ama kaç çağrı yapıldığı ve kaçının tuttuğu söylenmiyor.**

On ayda dördüncü kez aynı not.

#### Ölçülebilirlik

**Ölçülebilir.** Üç bileşenin üçü de mekanik: oynaklık daralması (aralık/ATR), konum (PD array — tek belirsiz olan), ve takvim (08:30 haber). Ve vade eğrisi ayrışması tetikleyicisi tanımlı pencereyle veriliyor.

#### Not

**Öncelikli alınacak:** ZB/ZN vade eğrisi ayrışması, 08:00–09:00 penceresinde. **Aralık V1'in yedi aydır açık duran zaman hizalaması boşluğunu kapatıyor.**

**Alınacak:** daralma-genişleme testi, **beş ayın beş ifadesini tek çalışmada.**
:::

# ENDEKS MODÜLÜ (V10–V14)

### Video 10 — Endeks temelleri ve açılış aralığı

::: ders
**DERS**

#### Enstrüman

**E-mini S&P 500**, sembol **ES** — halk arasında *"spoos"* (1980'lerden kalma argo).

| Kalem | Değer |
|---|---|
| Teslim ayları | **Mart (H), Haziran (M), Eylül (U), Aralık (Z)** |
| Format | **ESU17** = Eylül 2017 |
| Tick değeri | **12,50 USD** |
| Tick büyüklüğü | **0,25 puan** |
| Bir puan | 4 tick = **50 USD** |
| Kaldıraç | **50 USD × endeks seviyesi** ≈ kayıt anında **122.000 USD** |

Takip edilen diğer iki endeks: **NASDAQ e-mini (NQ)** ve **Dow mini (YM)**.

#### Seans yapısı — üç endeks için aynı

| Öğe | Zaman (NY) |
|---|---|
| **En yüksek hacim** | **09:30 – 10:00** (ilk 30 dakika) |
| **Gerçek gün** | **09:30 – 16:00** |
| **Açılış aralığı** | **09:30 – 10:30** (bir saat) |

*"Piyasa 24 saat işlem görüyor ama gün içi işlem açısından öncelikle New York seansına odaklanacağız."*

#### Merkezi iddia

> *"**09:30 ile 10:30 arasındaki açılış aralığı, spoos piyasasının günün tepesini ya da dibini oluşturma eğilimindedir.** Bir stop koşusu ya da fair value kurulumu olabilir."*

#### Genişletilmiş açılış aralığı kuralı

> *"Açılış aralığı **geniş** olduğunda — küçük bir aralık değil, uzatılmış — genellikle günün ilerleyen saatlerinde tepenin ya da dibin ihlal edilmesini ararız. Boğa bir günse açılış aralığının **üst ucunun** ihlal edilmesini bekleriz; satış günü için tersi. **Açılış aralığındaki uzatılmış ya da geniş aralıklar bize geri dönülecek bir aralık ve karşı uçtaki stopları arama imkânı verir.**"*

Örnekte: sabahın ilerleyen saatlerinde açılış aralığının **altına koşu** = **turtle soup**, sonra ralli, ve açılış aralığının **tepesine** kadar geri dönüp oradaki stopları süpürme.

#### Hacim ayrışması — endekslerde

Dow örneği: günün dibi açılış aralığının içinde, **yüksek yeşil hacim çubuğuyla** oluşuyor. Sonra **21.265**'in altına ikinci bir deneme geliyor ama **daha düşük kırmızı hacim çubuğuyla.**

> *"Yeterli hacim yok, zayıf. Emtia bölümünde belirttiğimiz gibi — vadeli işlemlerde, tahvillerde ve normal emtialarda **hacim fiyattan önce gelir.** Daha düşük bir dip yapacaksak ya da eski bir dibi/tepeyi yeniden test edeceksek, bunun **daha yüksek hacimle** görülmesi gerekir. Değilse, hacim fiyattan önce geliyor demektir — göründüğü kadar güçlü değil."*

*"O fitil aşağı indiğinde cesur bir ayı mumuydu ve aksi halde görmesi çok korkutucu olurdu — ama o mum **kapandığında**, o mumun hacmi günün erken saatlerinde açılış aralığında yapılan gerçek dipteki hacme denk gelmedi."* → reddedildi, fiyat gün içinde yükseldi.

#### Zaman dilimi uyarısı

barchart.com grafikleri **merkez saatte** gösteriliyor — bir saat erken. Yani grafikte **08:30–09:30** olarak görünen şey aslında New York saatiyle **09:30–10:30.**

#### İleriye dönük not

> *"Tam spektrum 09:30'dan 10:30'a **60 dakikalık** bir açılış aralığı, ama **ilk 30 dakika** üzerine de inşa edeceğiz... **ilk saatin aralık tepesi/dibi ile ilk 30 dakikanın tepesi/dibi arasında çok spesifik bir ilişki var.**"*
:::

::: eleme
**ELEME**

#### Tahvil videosuyla aynı kalıp, farklı pencere — ve taban çizgisi yine hesaplanabilir

*"09:30–10:30 açılış aralığı günün ekstremumunu oluşturur."*

Gerçek gün 09:30–16:00 = **6,5 saat.** Bir saatlik pencere → düzgün dağılımda beklenen pay **%15,4.**

**Ölçülebilir hipotez:** *ES/NQ/YM'nin günlük ekstremumu 09:30–10:30 penceresinde ne oranda oluşuyor?*

Ve bu, Nisan V3 (CBDR), Haziran V6 (tahvil 08:00–09:00) ve bu videoyla birlikte **üçüncü** aynı-kalıp test. Üçü tek bir kodla, üç farklı enstrümanda çalışır.

#### Genişletilmiş aralık kuralı — ve neden iyi

*"Aralık genişse, karşı ucun ihlal edilmesini ara."*

Bu, **koşullu bir kural** ve iyi bir yapıya sahip: aralığın genişliği (ölçülebilir) bir sonraki davranışı (ölçülebilir) tahmin ediyor. Sekiz aydır kaydedilen "aralık daraldıysa genişleme bekle" ailesinin **tersinden versiyonu.**

**Ölçülebilir hipotez:** *Açılış aralığı geniş olan günlerde, aralık uçlarından biri gün içinde ihlal edilme olasılığı, dar aralıklı günlere göre farklı mı?*

Eksik olan tek şey **"geniş" eşiği** — ama o, aralık/ADR oranı olarak takılabilir.

#### Hacim ayrışması — ikinci enstrümanda tekrar

Altıncı videodaki kuralın endekslerde uygulanması. Aynı hipotez, farklı veri, ve endekslerde hacim **tahvilden bile temiz** (tek borsa, merkezi takas, yüksek hacim).

Ve senin ölçümüne doğrudan eklenir: senin sweep ölçümünde **hiçbir hacim bileşeni yoktu.** Bu, sweep'in alt gruplara ayrılması için ikinci bir eksen sağlıyor (birincisi Aralık V11'in derinlik eşiğiydi).

#### Yanlışlanamazlık — bu videoda çok az

Videonun tek zayıf noktası "geniş aralık" eşiğinin verilmemesi. Onun dışında iddia tek cümlelik, ölçülebilir, ve taban çizgisi hesaplanabilir.

**Ve bir dürüstlük notu:** zaman dilimi uyarısı (barchart merkez saatte) hem burada hem V9'da açıkça veriliyor. Küçük bir şey ama **ölçüm hijyeni açısından önemli**: bir saatlik kayma, saat tabanlı tüm iddiaları geçersiz kılardı, ve video bunu her seferinde belirtiyor.

#### Ölçülebilirlik

**Ölçülebilir.** Sabit pencere, tanımlı gerçek gün, hesaplanabilir taban çizgisi, ve gerçek hacim.

#### Not

**Alınacak:** üç enstrümanlı açılış aralığı testi — CBDR (forex), 08:00–09:00 (tahvil), 09:30–10:30 (endeks) — **tek kod, üç taban çizgisi.**

**Alınacak:** hacim ayrışması, sweep ölçümüne alt grup ekseni olarak.
:::

### Video 11 — AM trendi ve endeks SMT

::: ders
**DERS**

#### AM trendi

| Öğe | Zaman (NY) |
|---|---|
| **New York AM seansı** | **09:30 – 12:00** |
| **Gerçek gün tepesi/dibi oluşum penceresi** | **09:30 – 10:30** |
| AM trendinin bitişi | **10:30 – 11:00**, ama öğlene kadar sürebilir |

> *"Açılış 09:30 ile öğlen arasında **tipik olarak günlük bir trend ya da fiyat salınımı** vardır. Buna **AM trendi** ya da **sabah salınımı** diyoruz."*

AM trendi ya gecenin devamıdır ya da **09:30 açılışından itibaren doğrudan bir dönüştür.**

> *"**Bu sabah fiyat salınımının ne kadar tutarlı olduğunu öğrenmek için birçok günün gün içi fiyat hareketini incelemek istersin.**"*

#### Endeks SMT — ayın en tanımlı SMT kuralı

**Pencere: New York saatiyle 05:00 – 09:30** — dört buçuk saat. *"Bunu bir kill zone gibi düşün."*

**Karşılaştırılan:** üç endeks — **ES, NQ, YM** — arasındaki **göreli tepe ve dipler.**

**Kural:**

- **Kurumsal emir akışı BOĞA ise:** göreli **dipler** karşılaştırılır. Üçü de aşağı işlem görürken **biri daha düşük dip yapmayı başaramaz** → AM trendini işlemek için **boğa teyidi**
- **AYI ise:** göreli **tepeler** karşılaştırılır. Üçü de yukarı hareket ederken **biri daha yüksek tepe yapamaz** → **ayı teyidi**

#### Kritik netleştirme

> *"Her zaman gördüğün gibi tam olarak 05:00 saatinde belirli bir dip yapıp 09:30'da daha düşük dip yapmayı başaramaması gibi olmayacak. **Onları kale direği gibi, sınırlar gibi düşünme** — belirli olarak o tepeleri ve dipleri yaratmıyorlar. **05:00 ile 09:30 arasında göreli dipler ve göreli tepeler arayıp onları karşılaştıracaksın.**"*

Örneğin dipler saat 07:00'de ve 09:30'da oluşabilir; önemli olan **o pencere içindeki** göreli uçlar.

#### Örneğin çözümü

- **NASDAQ e-mini** (üst grafik, 15 dakikalık): New York AM seansının başında **daha düşük dip** yapıyor
- **Dow** (orta): aynı pencerede **daha yüksek dip**
- **S&P mini** (alt): **daha yüksek dip**

> *"Bu üç endekse bakarak **Dow vadelilerinde ve S&P 500'de büyük bir birikim** olduğunu görebilirsin, teknoloji sektörü o ayrışmadan ralli yaparken. Genel olarak tüm endeksler yukarı hareket etti."*

#### Mekanizma iddiası

> *"Çünkü **açgözlülük ve emirlerinin salt büyüklüğü** her zaman bu kalıbı yaratacak. Orada olacak — **anlamlı işlem fırsatları her zaman bu belirtiyi taşıyacak.**"*

#### Örneklem vurgusu

> *"**Bu yüzden büyük bir örneklem büyüklüğüne bakman önemli** — çünkü sana korelasyondaki o çatlağı gösterecek; oysa endeksler tandem hareket etmeliydi, üçü de aşağı inerken uyum içinde olmalıydı. Ama boğa iken biri başaramayacak."*

#### AM trendi için diğer örnekler

- Londra seansı sonrası, AM seansının hemen başında fiyat bir **bullish order block**'a (önceki düşüş kapanışlı mum) iniyor ve yukarı genişliyor; **tepe 10:30'da** oluşuyor
- Londra seansında oluşan aralığa inip bir **fair value gap** dolduruluyor — *"burada yalnızca fitiller gösteriliyordu; biz **gövdelerin geçmesini** görmeyi tercih ederiz, verimli işlem görmüş olması için"* — sonra yeniden fiyatlanıp bir bullish order block'tan yukarı koşuyor: **2394,50'den 2399,50'ye**
- Dow e-mini: Londra seansında aşağı inip **eşit dip stoplarını** temizliyor — o, **bullish breaker**; *"Londra seansındaki o son iki yükseliş kapanışlı mum, satışın katalizörü"* — ve maruziyeti azaltmak için AM seansı başında uzun gidiliyor
- NASDAQ e-mini: New York açılışında önceki bir dip süpürülüyor = **turtle soup**
:::

::: eleme
**ELEME**

#### On ayın en test edilebilir SMT tanımı

Aralık V1'den beri SMT ayrışması seride tekrar tekrar geçti ve her seferinde **aynı boşluk** kaydedildi: *"aynı anda ne demek?"*

Burada o boşluk **tam olarak** kapanıyor, ve karşılaştırma için gereken her şey tanımlı:

| Bileşen | Tanım |
|---|---|
| **Enstrümanlar** | ES, NQ, YM — üçü de adı konmuş, aynı borsa, aynı saatler |
| **Pencere** | **05:00 – 09:30 NY**, dört buçuk saat |
| **Karşılaştırılan** | Pencere içindeki **göreli** tepe/dipler |
| **Yön koşulu** | Boğaysa dipler, ayıysa tepeler |
| **Çıktı** | Biri ayrışıyor mu — ikili |

**Ve videonun "kale direği değil" uyarısı kritik ve doğru:** pencere sabit ama uçlar pencere içinde nerede oluşursa oluşsun karşılaştırılıyor. Bu, kuralı **daha esnek ama yine de mekanik** yapıyor — pivot tespiti standart.

**Ölçülebilir hipotez:** *05:00–09:30 penceresinde üç endeksten biri diğerlerinden ayrıştığında, 09:30–12:00 arasındaki AM trendinin yönü öngörülebiliyor mu?*

Neden bu, on ayın en iyi kurulmuş testi:
- Üç seri **kamuya açık, aynı saatlerde, yüksek korelasyonlu**
- Ayrışma **nadir olduğu için** her gün sinyal üretmiyor — filtre gerçekten filtreliyor
- **Taban çizgisi doğal:** ayrışma olmayan günlerin AM trendi
- **Ve tek enstrümanda işlem yapılıyor** (ES), yani sonuç tek bir getiri serisi

#### Ve videonun kendisi örneklem büyüklüğünü talep ediyor

> *"Bu yüzden büyük bir örneklem büyüklüğüne bakman önemli."*

Bu, on ayda **örneklem büyüklüğünün doğrudan istendiği ilk yer.** Senin `#029`'undaki 100 işlem eşiğinin sözel karşılığı.

Ve pratik olarak ulaşılabilir: günde bir gözlem × 250 işlem günü = yılda 250 gözlem, ayrışma oranı %20 bile olsa **yılda 50 sinyal.** Birkaç yıllık veriyle eşik rahat aşılır.

#### Ama bir şey ölçüm öncesi kontrol edilmeli

Üç endeks **çok yüksek korelasyonludur** — ES ve YM arasındaki günlük getiri korelasyonu tipik olarak 0,90 üstü. Aralık V1'de faiz üçlüsü için kaydedilen uyarı burada da geçerli:

> *"Üç seri **çok yüksek korelasyonlu.** Ayrışmaları nadir olur, ve nadir olduğu için 'özel bir şey oluyor' sezgisi makul görünür. Ama **örneklem sorunu doğurur.**"*

**Ve buna ek bir teknik nokta:** NQ'nun sektör bileşimi diğer ikisinden farklıdır (teknoloji ağırlıklı). Yani NQ'nun ayrışması, "akıllı para birikimi" yerine **sektör rotasyonu** olabilir — ve bu, ölçülebilir bir alternatif açıklama.

**Doğru test bunu ayırmalı:** ayrışmanın hangi endekste olduğuna göre sonuç değişiyor mu? NQ ayrıştığında ile YM ayrıştığında farklı mı?

#### Mekanizma iddiası — ölçülemez ve gereksiz

*"Açgözlülük ve emirlerinin salt büyüklüğü her zaman bu kalıbı yaratacak."*

Emir defterine erişimin yok. **Ama kural anlatıdan bağımsız çalışıyor** — on ayda tekrarlanan ayrımın bir örneği daha.

Ve *"anlamlı işlem fırsatları **her zaman** bu belirtiyi taşıyacak"* mutlak bir ifade: ayrışma olmadan gerçekleşen bir hareket varsa iddia yanlışlanır, ama iddia o durumu "anlamlı olmayan" diye dışarıda bırakabiliyor.

#### Ölçülebilirlik

**Ölçülebilir.** Üç adı konmuş enstrüman, sabit pencere, mekanik karşılaştırma, doğal taban çizgisi, ve videonun kendisi örneklem büyüklüğü talep ediyor.

#### Not

**Öncelikli alınacak — ve bu ay için ikinci sırada:** endeks SMT, 05:00–09:30 penceresinde.

**Ölçüm sırası:** (1) ayrışma sıklığı ve AM trend yönüyle ilişkisi, (2) **hangi endeksin ayrıştığına göre ayrıştır** — sektör rotasyonu alternatif açıklamasını elemek için, (3) üç serinin korelasyonunu dönemsel olarak ölç — korelasyon düştüğünde "ayrışma" bilgi taşımaz.

**Ve kripto analoğu doğrudan var:** BTC / ETH / bir büyük altcoin, ya da BTC spot / perp. Aralık V1'de önerilmişti; burada **pencere tanımı** ekleniyor ve fikir taşınabilir hale geliyor.
:::

### Video 12 — PM trendi

::: ders
**DERS**

| Öğe | Zaman (NY) |
|---|---|
| **New York PM seansı** | **13:00 – 16:00** |
| **Gerçek gün tepesi/dibi eğilimi** | **15:00 – 16:00** (son saat) |
| Hareketin başlaması | Tipik olarak **14:00**, 13:00 kadar erken olabilir |
| **New York öğle arası** | Nominal **12:00 – 13:00**; **11:00 kadar erken, 14:00 kadar geç olabilir** |

> *"13:00 ile 16:00 arasında tipik olarak günlük bir trend ya da fiyat salınımı görülür — buna **PM trendi** ya da **öğleden sonra salınımı** diyoruz."*

PM trendi AM trendinin **devamı** ya da kapanışa giden bir **gün içi dönüş** olabilir.

> *"Öğleden sonraki **ölçülmüş hareketler, AM seansında görülenden daha hızlı olma eğilimindedir.**"*

#### Öğle arasının uzunluğu — koşullu

> *"Sabahta hızlı bir piyasa varsa işlemciler muhtemelen **öğle arasında çalışacak** — o koşullarda kısa öğle arası dönemleri ya da kısa konsolidasyon/geri çekilme dönemleri görülür. Sabah seansı oldukça uyuşuksa **tam öğle arası 11:00'den 13:00'e hatta 14:00'e** kadar gidebilir."*

#### PM için endeks SMT

Aynı kural, farklı pencere: **12:00 – 15:00 NY** arasındaki göreli tepe ve dipler.

Örneğin çözümü: PM seansında **ES daha yüksek dip**, **YM daha yüksek dip**, ama **NQ daha düşük dip.**

> *"Bu, normalde beklenenin kırılması — simetrik mükemmel bir piyasa için NASDAQ'ın da daha yüksek dip yapmasını beklerdik, o teyit sayılırdı. Ama gördüğümüz şu: **Dow'da ve S&P'de birikim var, NASDAQ'ta yok.** NASDAQ üçünün uyuşuk kız kardeşiyken, Dow ve e-mini S&P daha düşük dip yapmayı **başaramayarak** göreli güç gösterdi."*

#### Tek enstrümanda işlem

> *"Bu ayrışmaları **e-mini S&P'de** işlem sinyali olarak kullanıyorum — ya da S&P işlem yaptığım zamanlarda bu referans noktalarını kullanırdım. Üçü arasında o **çatlağı** görürsem işlemim S&P'de alınacak; **Dow'u ya da NASDAQ vadelilerini işlem yapmaya çalışmıyorum.** Öncelikle o çatlağa odaklanıyorum, bana S&P'de yukarı mı aşağı mı hareket olacağını söylesin diye."*

#### Açılış aralığı – kapanış saati ilişkisi

> *"AM seansı öğretisinde belirttik ki tipik olarak o açılış aralığı ya da ilk saat işlemi günün tepesini ya da dibini yaratır. **Eğer öyleyse, işlem gününün son saati — 15:00'ten 16:00'ya — genellikle karşı ucu yaratacaktır.**"*

#### Örnekler

- ES: öğleden sonra seansı AM seansında oluşan bir order block'a iniyor, oradan yukarı fırlıyor ve **son işlem saatinde** günün tepesine gidiyor
- ES: AM seansındaki bullish order block'tan ralli, bir **rejection block**'a — *"çok hareket değil; endekslerin doğası gereği büyük aralıklı günler olacak ama genellikle böyle olmayacak"*; bu örnekte **~400 puan** (tick)
- ES: PM seansı başındaki büyük mum, AM seansının rejection block'unu ihlal ediyor, birikim aşaması, **~18 handle** ralli
- YM: eski bir tepenin reddi / turtle soup → öğleden sonra **dönüş**
- NQ: öğle arasında oluşan bir order block'a iniş → sabah seansındaki bir rejection block'a **~9 tam handle** yükseliş
:::

::: eleme
**ELEME**

#### Açılış aralığı – kapanış saati ilişkisi: ayın en zarif tek hipotezi

> *"İlk saat günün tepesini yaratıyorsa, **son saat genellikle dibi yaratır.**"*

Bu iddianın üç özelliği var:

**1. Tamamen mekanik.** Günün tepesinin ve dibinin hangi saatte oluştuğu iki sayıdır.
**2. Koşullu.** "İlk saat ekstremum yaptıysa" bir koşul, "son saat karşı ucu yapar" bir tahmin.
**3. Ve doğrudan yanlışlanabilir.**

**Ölçülebilir hipotez:** *Günün tepesi 09:30–10:30 penceresinde oluştuğunda, günün dibi 15:00–16:00 penceresinde ne oranda oluşuyor?*

Ve taban çizgisi: koşulsuz olarak dibin son saatte oluşma oranı. **Fark, iddianın taşıdığı bilgidir.**

Bu, on ayda kaydedilen **en ekonomik test**: iki sayı, bir koşullu olasılık, ve hiçbir yön varsayımı gerekmiyor.

#### PM SMT — AM'nin ikinci penceresi

12:00–15:00 penceresi, on birinci videodaki 05:00–09:30 penceresinin ikinci uygulaması. **Aynı kod, farklı saatler**, ve ikisi birlikte günün iki yarısını kapsıyor.

**Ve ölçüm için değerli bir soru üretiyor:** *iki pencereden hangisi daha çok bilgi taşıyor?* AM penceresi 4,5 saat ve seans açılışını içeriyor; PM penceresi 3 saat ve öğle arasını içeriyor. İkisinin ayrışma oranları ve sonraki getiri ilişkisi farklı olabilir.

#### "Öğleden sonra hareketleri daha hızlı" — sayılabilir

*"Öğleden sonraki ölçülmüş hareketler AM seansından daha hızlı olma eğiliminde."*

Doğrudan ölçülebilir: **birim zamandaki fiyat değişimi**, AM ve PM seansları için ayrı ayrı. Tek koşu, ve çıktı iki dağılım.

#### Yanlışlanamazlık

**1. Öğle arası uzunluğu sonradan belirleniyor.** *"Sabah hızlıysa kısa öğle arası; uyuşuksa 11:00–14:00."* Bu, öğle arasının **sonradan** tanımlanması demek — ve öğle arası, PM SMT penceresinin bir parçası.

Kapatılabilir: sabit 12:00–13:00 kullan, ve "hızlı sabah" için bir aralık/ADR eşiği takıp iki kolu ayrı ölç.

**2. PM trendi "devam ya da dönüş" olabiliyor.** İki seçenek tüm sonuçları kapsıyor, ve hangisinin olacağına dair kural bu videoda verilmiyor — o, on üçüncü videoda geliyor.

#### Ölçülebilirlik

**Ölçülebilir.** Üç iddia (PM ekstremum penceresi, açılış-kapanış ilişkisi, PM SMT) mekanik ve taban çizgileri hesaplanabilir.

#### Not

**Öncelikli alınacak:** açılış aralığı – kapanış saati koşullu ilişkisi. **İki sayı, tek koşullu olasılık, sıfır yön varsayımı.** Bu ayın en ucuz testi.

**Alınacak:** AM ve PM SMT pencerelerinin karşılaştırması.
:::

### Video 13 — Projekte edilen aralıklar ve hedefler

::: ders
**DERS**

Videonun çerçevelemesi: *"Bunlar son 20 yılı aşkın süredir endekslerin **iç hareketini** nasıl yorumladığım... **Bu fikirlerden bize hiçbir şekilde yardımcı olmayacak sapmalar olacak** — ama bunlar benim genel sınıflandırmalarım."*

#### Sekiz projekte edilen aralık

**1. İki seans yükseliş kapanışı (two session up close)**
- Günlük ve/veya 4 saatlik kurumsal emir akışı **boğa**
- **AM trendi:** bir iskonto array'ine dönüş, sonra ralli
- **Öğle arası:** sığ geri çekilmelerle konsolidasyon
- **PM trendi:** öğle arası **diplerini** (satış stopları) süpürür ya da bir fair value iskonto array'ine iner, sonra kapanışa doğru ralli yapar

Çekince: *"Günlük aralık aslında **öğle arasından hiç konsolide olmadan** geçebilir — bunu belirleyen, fiyatı yukarı gönderen katalizördü."*

**2. İki seans düşüş kapanışı** — tam aynası.

Bu iki profilin koşulu: *"Bir ara vadeli ya da uzun vadeli fiyat salınımının **ortasındaysak** — ve **4 saatlik ya da günlük karşıt array'lere henüz işlem görülmemişse** — bu senaryo açılmalı. Fiyatın aşağı genişlemesini çok kolay kılıyor."*

**3. AM rallisi, PM dönüşü**
- Emir akışı **boğa**, ama fiyat bir **4 saatlik/günlük prim PD array'inin altında**
- AM seansı boğa başlar, o üst zaman dilimi prim array'ine çarpar → **gün içi piyasa dönüşü**
- PM trendi öğle arası tepelerini ya da gün içi tepeyi süpürüp kapanışa doğru döner

Netleştirme: *"PM seansının AM seansına göre **daha yüksek** tepe yapması gerekmiyor — sadece öğle arası saatinde görülene göre daha yüksek bir tepe olabilir, ki bu AM seansı tepesine koşuda bir **başarısızlık salınımı** yaratır."*

**4. AM düşüşü, PM dönüşü** — aynası. Emir akışı **ayı** ama fiyat bir üst zaman dilimi **iskonto** array'inin **üstünde.**

**5. Konsolidasyon, AM rallisi, PM düşüşü**
- Kurumsal emir akışı **nötr ya da sana belirsiz**
- *"Bir işlem günü için emir akışının ne olduğunu sorguluyorsan ve günlük/4 saatlikte prim mi iskonto mu olduğumuz belirgin değilse, muhtemelen böyle bir senaryo görebiliriz — **özellikle 10:00 saatinde ya da öğleden sonra gerçek bir yüksek/orta etkili haber beklenmiyorsa.** Piyasa sürücülerinde bir boşluk varsa..."*
- AM: bir iskonto array'ine dönüş sonra ralli, ya da ilk saat/açılış aralığından sonra dengeden yukarı genişleyip **Londra alım stoplarını** ya da gün içi tepeleri süpürme
- PM: öğle arası tepelerini süpürüp günün satış stoplarına uzanır, ya da gün içi tepeyi süpürüp gün içi/Londra satış stoplarına uzanır

**Ve bu profil için canlı bir işlem örneği veriliyor:** *"Bu kaydın yapıldığı anda, **22 Haziran 2017** işlem günü için spoos piyasasında kullandığım gerçek projekte edilmiş aralık bu — **2437'den kısa sattım** ve fiyatın bir iskonto array'ine inmesini ya da piyasanın altındaki satış stoplarına uzanmasını aradım. **Bu, gerçek zamanlı bir işlem örneği için kullandığım gerçek projeksiyon.**"*

**6. Konsolidasyon, AM düşüşü, PM rallisi** — aynası.

**7–8.** Her iki konsolidasyon profilinin varyantı: *"PM trendi öğle arasından sonra **basitçe kapanışa doğru konsolide olabilir** — tüm hareketi sabah yapıp günün geri kalanında sönüp yatay gidebilir."*

#### Seçim kuralı — videonun en mekanik kısmı

> *"Hangisini yapacağını nasıl bilebiliriz — öğle arası tepelerini mi yoksa gün içi tepeyi mi süpürecek? **Bu, hangisinin bir prim array olduğuna bağlı.** AM seansının çarptığı bir üst zaman dilimi prim array'i varsa, muhtemelen oraya geri gitmeyecek çünkü **o seviyeyi zaten savundular** — sadece öğle arası tepelerini süpürmek isteyebilir. AM seansı bir üst zaman dilimi prim array'ine işlem görmediyse, öğleden sonra **gün içi tepeyi** süpürüp sonra dönebilir."*

Aşağı yönde aynası: AM dibi bir üst zaman dilimi iskonto array'ine indiyse PM yalnızca öğle arası dibini süpürür; inmediyse gün içi dibi süpürür.

#### Devam kuralı

> *"PM trendi **yeniden yükselebilir** — eğer AM seansının ralli yaptığı iskonto array'i bir **üst zaman dilimi** iskonto array'ine eşitse. PM seansında oraya geri inerse **o seviyeyi yeniden sermayelendirip** yukarı gönderebilirler. **Filtre şu: 4 saatlik ya da günlük veya daha üstü bir iskonto array'i değilse, içinden geçip aşağı gitmesi beklenir.**"*

#### Öğle arası ve seek-and-destroy notu

> *"Öğle arası hepsinde aynı — sığ geri çekilmelerle konsolidasyon. **Öğle arasının farklı olduğu tek zaman trend günleri** — iki seans yükseliş ya da düşüş kapanışı — çünkü o günlerde öğle arası gerçekten aktif olabilir."*

Ve: *"Piyasa trendle yukarı ya da aşağı gitmeye yatkın değilken bu, o klasik ileri geri çekişme senaryosu... **Bu seek and destroy değil, sadece konsolidasyon.** Tarım dışı istihdamda S&P'de seek and destroy koşulları **vardır**, ama genellikle bu tür gün **trend yokluğu ve haber yokluğu** durumunda gerçekleşir."*

#### Kapanış çerçevesi

> *"Endeksler **stop arar.** Üst zaman diliminde trend edebilirler, ama **gün içi bazda her şey likidite ve stopların nerede olduğuyla ilgili. Bu bir işlemci piyasası**, dolayısıyla ağırlıklı olarak stop avlayacaklar."*
:::

::: eleme
**ELEME**

#### Sekiz profil tüm günleri kapsıyor — ama seçim kuralı gerçek

Sekiz profil şu şekilde bölünüyor: iki trend günü (yukarı/aşağı), iki dönüş günü (AM ralli/AM düşüş), iki konsolidasyon günü, ve ikisinin "PM sadece konsolide olur" varyantları.

**Bir işlem gününün düşmeyeceği bir kategori pratik olarak yok.** Mart V2'nin on iki haftalık profili ve Mayıs V5'in sekiz dönüşüyle aynı yapı.

**Ama bu videoda kritik bir fark var, ve kaydedilmesi gerekiyor:**

> *"Hangisini yapacağını **hangisinin bir prim array olduğuna** bağlı olarak bilirsin. AM seansı bir üst zaman dilimi prim array'ine çarptıysa oraya geri gitmeyecek — **o seviyeyi zaten savundular.**"*

Bu, **profil seçimi için gerçek bir kural** ve daha önceki taksonomilerde yoktu. Mart V2'de tüm profillerin "nasıl önceden anlaşılır" kuralı **aynıydı** ve dolayısıyla ayırt edici değildi. Burada ayrım tek bir gözleme dayanıyor: **AM seansı bir üst zaman dilimi array'ine dokundu mu?**

Ve o gözlem **öğle arasında yapılabilir** — yani seçim, PM seansı başlamadan önce kesinleşiyor. Nisan V5'in 02:00 karar noktasıyla aynı yapısal avantaj.

**Ölçülebilir hipotez, ve iki kollu:**

> *AM seansının üst zaman dilimi bir array'e dokunup dokunmaması, PM seansının öğle arası ekstremumunu mu yoksa gün içi ekstremumunu mu süpüreceğini öngörüyor mu?*

Karşılaştırma grubu doğal (dokunan/dokunmayan günler), çıktı ikili, ve tek koşuda cevaplanır. **Tek belirsizlik "üst zaman dilimi array"in tanımı** — on aydır aynı boşluk, ve burada da merkezde.

#### "Zaten savundular" mantığı — Mart'ın tükenme kuralı, üçüncü kez

*"O seviyeyi zaten savundular, oraya geri gitmeyecek."*

Bu, **Mart V4/V5'in tükenme kuralının** endeks versiyonu. Ve **Şubat V5'in "seviyeler birden çok kez işlem görebilir"** iddiasıyla, ve **Haziran V8'in "dengede birden fazla kez çalışacaklar"** ifadesiyle çelişiyor.

Beş ay, dört ayrı yerde, aynı soru, iki zıt cevap:

| Kaynak | İddia |
|---|---|
| Şubat V5 | Seviyeler **birden çok kez** işlem görebilir — büyük emirler orada inşa edilir |
| Mart V4/V5 | Bir kez işlem gören array **tükenmiştir** |
| Haziran V8 | Dengede **birden fazla kez** çalışacaklar |
| **Haziran V13** | **"Zaten savundular"** — geri gitmeyecek |

**Bu, on ayın en çok tekrarlanan ve hiç çözülmeyen çelişkisi**, ve tek bir ölçümle kapanır: *bir PD array'e ikinci dokunuş, birincisinden farklı sonuç veriyor mu?*

Ve dört farklı yerde ortaya çıkması, ölçümün önceliğini artırıyor — bu tek soru, dört ayın kurallarının hangisinin geçerli olduğunu belirliyor.

#### Canlı işlem örneği — ve neyin eksik olduğu

*"22 Haziran 2017'de 2437'den kısa sattım, bu gerçek zamanlı bir işlem örneği."*

Bu, on ayda verilen **en spesifik tek işlem kaydı**: tarih, enstrüman, yön, fiyat. Ve kaydın kendisi videoda, kayıt sırasında.

**Ama sonuç verilmiyor.** İşlem tuttu mu, ne kadar hareket etti, nerede çıkıldı — hiçbiri yok. Ve o hafta kaç işlem yapıldı, kaçı bu kadar spesifik biçimde belgelendi — bilinmiyor.

Yani: **doğru cinsten bir kayıt, eksik bırakılmış.** Bir giriş fiyatı ve tarih, sonuç eklenirse tam bir gözlem olurdu.

#### Yanlışlanamazlık

**1. Sekiz profil + "PM sadece konsolide olabilir" varyantı = tam kapsam.**

**2. "Bu fikirlerden bize hiçbir şekilde yardımcı olmayacak sapmalar olacak."** Videonun kendi çekincesi dürüst, ama aynı zamanda uymayan günleri **sapma** olarak kategorize ediyor — ve sapma için eşik yok.

**3. Konsolidasyon profilinin tetikleyicisi öznel.** *"Emir akışının ne olduğunu **sorguluyorsan**, belirgin değilse."* Bu, **kullanıcının belirsizliğini** bir piyasa koşuluna çeviriyor — ikinci soruyu geçmiyor.

Kapatılabilir vekil videonun kendisinde var: *"10:00'da ya da öğleden sonra gerçek bir yüksek/orta etkili haber beklenmiyorsa"* — bu **takvimden** okunur ve tamamen mekaniktir.

#### Ölçülebilirlik

**Kısmen.** Profil seçim kuralı (AM üst zaman dilimi array'ine dokundu mu) gerçek ve karar PM öncesinde veriliyor — bu, önceki taksonomilere göre gerçek bir ilerleme. Ama sekiz profil tüm günleri kapsıyor, tetikleyicilerden biri öznel, ve "üst zaman dilimi array" on aydır tanımsız.

#### Not

**Alınacak:** AM dokunuş / PM hedef ilişkisi — iki kollu, PM öncesi karar verilebilir.

**Öncelikli alınacak (ve tüm seriye ait):** **ikinci dokunuş sorusu.** Dört ay, dört yer, iki zıt iddia. Tek koşu.

**Alınmayacak:** sekiz profilli taksonominin kendisi. Seçim kuralını çıkar, taksonomiyi bırak.
:::

### Video 14 — Endeks işlem kurulumları

::: ders
**DERS**

Video, on üçüncü videonun profillerini **giriş, tutma ve hedef** kurallarına çeviriyor. *"Oldukça basit, ki aradığın şey tam olarak bu olmalı."*

#### İki seans yükseliş kapanışı — tam prosedür

**Giriş sinyali:**
- AM trendi bir iskonto array'ine indiğinde **endeks SMT ayrışması** aranır — **dipler**, **Londra seansından 09:30'a** kadar karşılaştırılır

**Tutma — zaman, fiyat değil:**
- AM seansı yukarı genişleyecek; bir üst zaman dilimi PD array'i olabilir, **ama genellikle günün saatini beklemelisin: 10:30–11:00** (*"Forex'te anladığımız şekliyle Londra kapanışı"*)
- Öğle arasında konsolidasyon olabilir; **öğle arası diplerinin altına geri çekilme** ya da öğle arasında görülen bir fair value gap / bullish order block aranır
- **Öğle arasında oluşan dip** ve **13:00'ten hemen sonra oluşan dip**, diğer iki endeksle karşılaştırılır — *"burada hiçbir belirsizlik yok, **son derece spesifik**"*
- **Ayrışan endeks ES olmak zorunda değil:** *"NASDAQ aşağı gitmeyi başaramazsa, bu tek başına S&P'nin ralli yapması gerektiğini destekler."*

**Kapanışa doğru — ve videonun en vurguladığı kural:**

> *"E-mini S&P'ye bakıyorsak, boğalık devredeyse ve uzunsak ve saat sadece 14:00 ise, lehimize birkaç handle görmüşsek — **o kârları masadan almak konusunda agresif olma, çünkü günün saatinin fiyatta daha yüksek bir teslimat seviyesine ulaşmasına izin vermek istiyorsun. Kapanışa doğru ne kadar çok tutarsan, daha fazla aralık elde etme fırsatın o kadar artar.**"*

**Hedef:**
- AM ve PM seansı tepeleri **büyük olasılıkla bir 15 dakikalık ya da 60 dakikalık PD array** olacak
- İki seans yükseliş kapanışında ikisi de **prim** array
- **PM iki aşamalı olabilir:** 15/60 dakikalık PD array'e ulaşamayıp geri çekilebilir; o zaman **son saatte** ek bir yükseliş aranır

#### İki seans düşüş kapanışı

Aynası. **Tepeler** karşılaştırılır, Londra'dan 09:30'a. **10:30–11:00**'e kadar tutulur; 11:00'e yaklaştıkça öğle arasına doğru konsolidasyon ya da duraklama olasılığı artar.

Öğle arasında **tepeler** karşılaştırılır — öğle arası tepesi ve **öğle arasından sonra oluşan kısa vadeli tepe.**

> *"**13:00'ten itibaren hemen e-mini S&P'nin kısa vadeli tepesini avlayıp takip ediyoruz.** Fiyat ralli yapıyorsa, kısa satmak için fair value'ya dönüş gerekçeleri arıyoruz — bearish order block, fair value gap ya da likidite boşluğu — ya da **New York öğle arasının üstüne** bir hareket."*

**Tutma:** *"Yine günün saatine güvenmeliyiz. Sadece birkaç handle kâr alma — tut. Kapanışa doğru git, **en azından 15:00 tahvil kapanışına kadar tutmaya çalış**, ve yapabilirsen 16:00'ya kadar tutmak ideal."*

**Hedef:** AM ve PM gün içi dipleri, **15–60 dakikalık iskonto array**. PM iki aşamalı olabilir.

#### AM rallisi, PM dönüşü

- AM'de üç endeks karşılaştırılır, **dipler**; biri aşağı gitmeyi başaramaz → **ES'de alım zamanı**
- **11:00'e çok yakın ya da hemen sonrasına** kadar tutulur; öğlen öncesi çoğu zaman kâr alma geri çekilmesi görülür
- Öğleden sonra **satılacak bir ralli** aranır
- Tutma kararı: AM seansındaki ilk rallinin çıktığı **iskonto array'e geri dönülür** — o array bir **üst zaman dilimi** iskonto array'iyle harmanlanıyorsa kısa vadeli bir sıçrama, konsolidasyon ya da yeniden yükseliş beklenir
:::

::: eleme
**ELEME**

#### On birinci videonun SMT'si burada operasyonel hale geliyor

On birinci video ayrışmayı tanımlamıştı; bu video onu **bir işlem prosedürüne** çeviriyor, ve üç bileşen de mekanik:

| Bileşen | Tanım |
|---|---|
| **Giriş sinyali** | Endeks SMT ayrışması, tanımlı pencerede |
| **Tutma** | **Saat tabanlı** — 10:30–11:00, sonra 15:00–16:00 |
| **Hedef** | **15 veya 60 dakikalık** PD array |

**Ve tutma kuralının saat tabanlı olması ölçüm açısından önemli:** *"birkaç handle kâr alma konusunda agresif olma, günün saatinin daha yüksek teslimata ulaşmasına izin ver."*

Bu, senin ölçtüğün **fat-tail sorununa** dördüncü bir yapı öneriyor — ve öncekilerden farklı bir eksende:

| Yapı | Çıkış kuralı |
|---|---|
| Sabit hedef | Fiyat |
| Trailing (`#021`) | Fiyat |
| Piramitleme (Ocak V16) | Fiyat |
| Geri-ekleme (Şubat V8) | Fiyat |
| **Zaman tabanlı tutma (Haziran V14)** | **Saat** |

**Ölçülebilir hipotez, doğrudan:** *Aynı sinyal setinde, sabit R hedefiyle çıkmak ile belirli bir saate (15:00 ya da 16:00) kadar tutmak farklı ortalama R ve varyans veriyor mu?*

Bu, beş yapının tek koşuda karşılaştırılmasını sağlıyor, ve **zaman tabanlı çıkış** en kolay kodlananı.

#### "Ayrışan endeks işlem yapılan olmak zorunda değil"

> *"NASDAQ aşağı gitmeyi başaramazsa, bu tek başına S&P'nin ralli yapması gerektiğini destekler."*

Bu, ölçüm açısından **kritik bir netleştirme**: sinyal üç seriden herhangi birinde olabilir, işlem **her zaman ES'de** alınır. Yani:

- Sinyal alanı: 3 seri
- İşlem alanı: 1 seri
- **Çıktı: tek bir getiri serisi**

Bu, ölçümü basitleştiriyor ve on birinci videodaki sektör rotasyonu itirazını da ölçülebilir kılıyor: *ayrışmanın hangi endekste olduğuna göre ES'nin sonraki getirisi değişiyor mu?*

#### Öğle arası karşılaştırma noktaları — "hiçbir belirsizlik yok"

Video iki spesifik nokta veriyor: **öğle arasında oluşan dip** ve **13:00'ten hemen sonra oluşan dip.**

Ve kendi ifadesi: *"burada hiçbir belirsizlik yok, son derece spesifik."*

**Bu doğru** — iki zaman noktası, üç seri, altı gözlem, mekanik karşılaştırma. On ayda "belirsizlik yok" iddiasının **gerçekten karşılandığı** az sayıdaki yerden biri.

#### Yanlışlanamazlık

**1. Hedef "15 veya 60 dakikalık PD array" — tanımsız.** Giriş ve tutma mekanik ama çıkış seviyesi on aydır tanımsız olan PD array seçimine bağlı.

**Kapatılabilir ve ölçüm için gerekli:** hedefi zaman tabanlı yap (15:00 ya da 16:00 kapanışı) ve PD array katmanını çıkar. O haliyle prosedür **tamamen mekanik** olur, ve PD array katmanının katkısı ayrıca ölçülebilir.

**2. "PM iki aşamalı olabilir."** Hedefe ulaşılmadıysa "son saatte ek yükseliş" aranıyor. Bu, hedefe ulaşamamayı bir bekleme gerekçesine çeviriyor — ve kaç aşama olacağı tanımsız.

#### Ölçülebilirlik

**Ölçülebilir.** Giriş sinyali tanımlı pencerede mekanik, tutma kuralı saat tabanlı, ve işlem tek enstrümanda. Hedef belirsiz ama **çıkarılabilir** — zaman tabanlı çıkışla değiştirildiğinde prosedür uçtan uca mekanik olur.

#### Not

**Öncelikli alınacak:** endeks SMT girişi + **zaman tabanlı çıkış** (15:00 ya da 16:00). PD array hedefini ilk turda çıkar; ikinci turda ekleyip katkısını ölç.

**Alınacak:** zaman tabanlı tutma, beş çıkış yapısı karşılaştırmasının beşinci kolu olarak. Fat-tail bulgunun doğrudan devamı.
:::

# HİSSE SENEDİ MODÜLÜ (V15–V18)

### Video 15 — Mevsimsellik ve aylık salınımlar

::: ders
**DERS**

#### Kaynak ve evren

**Moore Research / Steve Moore** mevsimsellik grafikleri. Odak: **Dow Jones Sanayi Ortalaması** — 30 hisse.

> *"NASDAQ ve S&P 500'e bakıp çıldırabilirsin ama benim için en basit şey **Dow Jones'a bakmaktı.** Küçük bir örneklem — 30 hisse, 30 mavi çipli şirket... **Kişisel olarak mevsimsel eğilimin S&P 500'ünkine çok yakından yansıdığına inanıyorum**, ve S&P 500'ün borsanın ne yaptığına dair daha doğru bir tasvir olduğunu düşünüyorum."*

#### Yılın üç bölümü

| Dönem | Karakter |
|---|---|
| **Yılın ilk yarısı** | **Yüksek büyüklük dönemi** — çok oynaklık ama **yönlü olarak sürülen**, genellikle boğa |
| **Mayıs – Ekim** | **DÜŞÜK BÜYÜKLÜK DÖNEMİ** |
| **Son çeyrek** | Boğa — *"tatillerle dolu ve yıl sonu harcaması gelmek zorunda"* |

**Düşük büyüklük dönemi hakkında kural:**

> *"Mayıs'tan Ekim'e genellikle **çok daha az yönlü sürülen** piyasalar göreceksin. Kısa vadeli yön eğilimlerin ve fırsatların olmayacağı anlamına gelmiyor — sadece **işlem yapacaksan çok daha az kaldıraç kullan; opsiyon işlemi yapacaksan çok daha az aktivite yap. Bu dönemlerde bu kadar agresif olma.**"*

**Ve odak penceresi:** *"Öncelikle **Ekim'den yıl sonuna** ve **Şubat'tan Mayıs'a** işlemci olmaya odaklanmak istersin."*

#### Ay ay Dow Jones mevsimselliği

| Ay | Eğilim |
|---|---|
| Ocak | **Ayı** |
| Şubat | **Boğa** |
| Mart | Konsolidasyon |
| Nisan | **Boğa** |
| Mayıs | **Ayı** |
| Haziran | Konsolidasyon, ayı tonuyla biten |
| Temmuz | **Boğa**, yıl ortası tepesine kadar |
| Ağustos | Konsolidasyon |
| Eylül | İlk yarı boğa, **ikinci yarı ayı** |
| Ekim | Genellikle **son çeyreğin dibini** yapar (Eylül'ün ikinci yarısında da olabilir) |
| Kasım | **Boğa** |
| Aralık | **Noel Baba rallisi**, boğa |

**Düşük olasılıklı aylar açıkça belirtiliyor:** **Mart, Haziran, Ağustos** — *"tipik olarak yüksek olasılıklı koşullar açısından verimli olmayacak."*

#### Yöntem — üç örneklem

Veriler **20 yıllık, 15 yıllık ve beş yıllık** ortalamalarla sunuluyor.

> *"Konsolidasyonlara ve genişlemelere, trend olup olmadığına, yükselip yükselmediğine bakarsan, **ne yaptıkları açısından çok yakından korele** — mavi ve kırmızı çizgi. Bunu görürsek, bence bu, mevsimsel eğilimlerin sayı hesabının arkasındaki güveni artırıyor: **son 20 yılda Şubat'ta yükselme ortalaması varsa, 15 yıllık veride de aynı şeyi ortalayacak. İkisinde de yansıyor** — yani veriyi farklı zaman çerçevelerinde analiz etmek bana **tutarlılık açısından çok şey söylüyor.**"*

**Ve hemen ardından gelen çekince:**

> *"**Tutarlılık, yüksek olasılık ya da mükemmellik ya da fantezi ya da her şeyi bitiren, kesinlikle risksiz demek değil.** Tarihsel olarak konuşan olasılıklar demek — ve açıkça geçmişe bakarak hiçbir şey garanti edilmiyor."*

#### Karşı örneklerin peşinen kabulü

> *"Biraz hisse işlemi yapmış olan bazılarınız 'peki bu yılın ya da o yılın Ağustos'u ne olacak' diyecek — **her zaman mevsimsele uymayan bir sapma olacak, ve bu tamam, bu sorun değil. Burada boğa ya da ayı olarak önerilen ayların öyle olmayacağı, tam tersi olacağı birçok kez olacak.**"*

#### Ve yapısal bir gözlem — bu ayın en iyi metodolojik cümlelerinden biri

> *"Mevsimsel eğilim, hisselerin **satın alınıp tutulmasına** yönelik altta yatan eğilimi vurguladığı için, açıkça **en güçlü alım tarafı mevsimsel eğilimlerini** gösterecek. ... Ama **ayı aylar** — son 20 yılda borsa yükselirken bile **Mayıs gibi ayların genellikle ayı olduğunu, Eylül'ün ikinci yarısının genellikle ayı olduğunu, Ocak'ın da ayı olduğunu görüyorsak** — o aylar, altta yatan boğa piyasalarında bile ayıysa, **ayı piyasalarında agresif satış anlamına gelebilir.**"*

#### Örnek — Şubat

Üst grafik NASDAQ, orta e-mini S&P, alt Dow Jones. **2–3 Şubat'ta NASDAQ eşit bir dip yaparken S&P ve Dow o eşit dibe gitmedi ve daha yüksek dipler yaptı.**

> *"İşte aradığımız kriter bu — **aşağı gitme isteksizliği** görmek istiyoruz — ve işte S&P işlem içeriğinde baktığımız **endeks SMT'miz.**"*
:::

::: eleme
**ELEME**

#### Ocak'ın mevsimsellik bloğuna göre üç iyileşme, biri yeni

Haziran V3'te (emtia mevsimselliği) kaydedilen iki iyileşme burada da var: **hesaplama yöntemi veriliyor** (üç örneklem uyuşması) ve **başarısızlıklar peşinen kabul ediliyor.**

**Üçüncüsü ise yeni ve gerçekten önemli:**

> *"Mevsimsel eğilim satın al-tut eğilimini vurguladığı için **en güçlü alım tarafı eğilimlerini gösterecek.** Ama ayı aylar, boğa piyasalarında bile ayıysa..."*

**Bu, örneklem yanlılığının doğru teşhisidir.** Son 20 yıl (1997–2017) ağırlıklı olarak bir boğa piyasası dönemidir; dolayısıyla **her aylık ortalama yukarı yanlıdır.** O yanlılığa rağmen ayı çıkan aylar, yanlılığın işareti değil, **sinyalin işaretidir.**

Bu akıl yürütme Ocak'ın mevsimsellik bloğunda **hiç yoktu**, ve tam olarak orada eksik olan şeydi.

**Ve doğrudan bir ölçüm tasarımı öneriyor:** mevsimsel eğilimleri ölçerken **piyasa getirisinden arındır.** Her ayın ortalamasından dönemin genel getirisini çıkar; kalan artık, gerçek mevsimsel bileşendir. Bu, standart bir düzeltmedir ve videonun sözel olarak işaret ettiği şeydir.

#### Ama Ocak V11'in temel sorunu duruyor

**Örtüşen örneklemler bağımsız doğrulama değildir.** 5 yıl ⊂ 15 yıl ⊂ 20 yıl. Üçünün "uyuşması" büyük ölçüde **aynı verinin üç kez sayılmasıdır** — özellikle son beş yıl her üç ortalamada da var.

Ocak V12'de kaydedilen cümle burada da geçerli: *"**15 yıl, 19 yılın içinde. İki örtüşen dönem bağımsız doğrulama değildir.**"*

**Doğru versiyonu ve senin yapman gereken:** dönemi ikiye böl (ör. 1997–2007 ve 2007–2017), **ilkinde bulunan aylık örüntü ikincisinde duruyor mu** diye bak. Bu, senin in-sample / out-of-sample ayrımının aynısı.

#### Ve örneklem hâlâ küçük

20 yıllık veri, bir aylık pencere için **20 gözlem.** Senin `#029`'undaki 100 işlem eşiğinin beşte biri.

**Ama burada bir kaçış var, ve Haziran'ın kendi içeriğinden geliyor:** aynı mevsimsel iddia **30 Dow hissesine ayrı ayrı** uygulanabilir. 20 yıl × 30 hisse = 600 gözlem. Hisseler birbirleriyle korele olduğu için etkin örneklem daha küçük — ama tek endeksten çok daha büyük.

#### "Düşük büyüklük dönemi" — ölçülebilir ve klasik

**Mayıs–Ekim düşük büyüklük dönemi**, klasik teknik analizde **"sell in May and go away"** olarak bilinen ve akademik olarak **çokça incelenmiş** bir olgudur. Literatürde bulgu vardır ama tartışmalıdır, ve keşfedildikten sonra zayıflamıştır.

**Ölçülebilir hipotez:** *Mayıs–Ekim döneminin ortalama getirisi ve oynaklığı, Kasım–Nisan döneminden farklı mı?*

Ve videonun asıl iddiası getiri değil **büyüklük** hakkında: *"çok daha az yönlü sürülen."* Bu, **trend gücü ölçüsüyle** (ör. yönlü hareket / toplam hareket oranı) test edilir, ve getiri testinden farklı bir sorudur.

**Ve pratik sonucu doğrudan yasaklayıcı:** *"daha az kaldıraç kullan, daha az aktivite yap."* Takvim tabanlı bir risk ölçekleme kuralı, ve tek satır.

#### Yanlışlanamazlık

**1. Karşı örneklerin peşinen kabulü, hem dürüst hem koruyucu.** *"Her zaman uymayan bir sapma olacak, ve bu sorun değil"* — dürüst bir çekince, ama oran verilmediği için kural ne kadar sık başarısız olursa olsun geçerli kalıyor.

**Kapatması senin işin:** her ay için **kaç yılda tuttu** sayılır, ve o oran %50 taban çizgisine karşı değerlendirilir.

**2. Üç kategori (boğa/ayı/konsolidasyon) tüm ayları kapsıyor.** Bir ay üçünden birine düşmek zorunda.

#### Ölçülebilirlik

**Ölçülebilir.** Ay ay tablo tamamen takvim tabanlı, sıfır seçim noktası; düşük büyüklük dönemi yasaklayıcı ve tek satır; ve boğa-yanlılığı teşhisi doğru bir ölçüm tasarımı öneriyor. Örneklem küçük ama 30 hisseye genişletilebilir.

#### Not

**Alınacak:** ay ay getiri tablosu, **piyasa getirisinden arındırılmış** halde, ve **ayrık dönemlerle** (örtüşen değil).

**Alınacak:** Mayıs–Ekim risk ölçekleme kuralı — takvimden, tek satır, yasaklayıcı.

**Ve önce ölçülecek:** her ayın tarihsel isabet oranı, %50 tabana karşı. Video bunu vermiyor ve ödevin ilk adımı bu.
:::

### Video 16 — Alım izleme listesi kurma

::: ders
**DERS**

#### Evren

**Dow Jones 30 hisse listesi.** *"Aynı uygulamalar S&P 500 ve NASDAQ 100 için de yapılır ama gerekli değil — **ihtiyacın olan tüm hisse işlemlerini sadece Dow Jones 30 listesinden yapabilirsin.**"*

#### İki filtre

**Filtre 1:** Borsa ralli yapmaya hazır mı? — *"beklemen için teknik olarak sağlam mı"*

**Filtre 2:** Boğa aylarda **daha yüksek dip yapan** hisseler seçilir

#### İdeal pencereler

**Şubat – Mayıs** ve **Ekim – Ocak** — uzun swing kurulumları için.

#### Seçim kriterleri

- Çoğu endeks hissesi, ana piyasa yükseldiğinde yükselir — *"yüksek gelgitte tüm tekneler yükselir"*
- **Koşulumuzdan önce haftalıkta yukarı trend eden hisseler** ideal
- **"Güvenli" hisselerden kaçın: Verizon, GE, Coca-Cola**
- Güçlü hisselerde **belirgin boğa yapısı** olur
- **İskonto array'ler + endeks SMT**, mevsimsel boğa aylarda **ağır birikim** altındaki şirketleri işaret eder
- **Seçimi iki ile dört şirkete daralt**

#### Merkezi seçim kuralı

> *"Kurumlar tarafından agresif biçimde alınan **liderlik hisseleri**, boğa aylarda **üç ana borsa endeksi düşerken — ta ki endekslerden biri karşılaştırmalı olarak daha düşük dip yapmayı başaramayana kadar — aşağı düşmeyi başaramayan** hisseler olarak bulunacaktır."*

Yani prosedür iki katmanlı:

1. **Endeks SMT** genel piyasa dönüşünü işaret eder (üç endeksten biri daha düşük dip yapmıyor)
2. **Aynı anda**, o kavşakta, **daha yüksek dip yapan hisseler** aranır
3. *"O belirli hisse için gerçekleşmiyorsa, o hisse **elenir ve ilgilenilmez.**"*

#### Apple örneği

Ocak 2017'de **Dow Jones (yeşil düz çizgi) daha düşük dip yaparken AAPL aynı anda aşağı gitmeyi başaramadı.**

> *"Yani Ocak ayında **Apple, Dow Jones Sanayi Ortalaması düşerken aşağı gitmeye istekli değildi.** Yani Apple burada göreli güç gösteriyor, ve bu **yalnızca büyük kurumlar gelip alım programlarını desteklediğinde** olur. Yani **hisse başına 118–120 civarında** çok fazla birikim, çok fazla alım gerçekleşti."*

Sonuç: Şubat'tan Mayıs'a hisse fiyatında güzel bir değerlenme.
:::

::: eleme
**ELEME**

#### İki katmanlı seçim — ve neden ölçülebilir

Bu, on ayda kurulan en net **iki aşamalı** filtre:

| Katman | Sinyal | Ölçüm |
|---|---|---|
| **1. Piyasa** | Endeks SMT (ES/NQ/YM) | On birinci videodaki tanım |
| **2. Enstrüman** | Hisse, endeks düşerken düşmüyor | Aynı karşılaştırma, hisse vs endeks |

**Ve ikinci katman, ikinci videodaki emtia liderlik kuralının aynısıdır** — orada emtia vs dolar endeksi, burada hisse vs Dow. **Aynı test, üç varlık sınıfında üç kez.**

**Ölçülebilir hipotez:** *Endeks SMT sinyali anında daha yüksek dip yapan Dow 30 hisseleri, yapmayanlardan sonraki dönemde daha yüksek getiri üretiyor mu?*

Neden bu iyi bir test:
- **Evren sabit ve küçük:** 30 hisse, veri kolay
- **Sinyal anı tanımlı:** endeks SMT tarihi
- **Karşılaştırma grubu doğal:** aynı gün, aynı endekste, ayrışmayan hisseler
- **Ve örneklem çarpılıyor:** her SMT olayı 30 gözlem üretir

**Bu, bu ayın örneklem sorununu çözen tek yapısı.** Endeks SMT tek başına yılda ~50 gözlem verirken, hisse katmanı eklendiğinde **1.500 gözlem** oluyor — senin 100 işlem eşiğinin çok üstünde.

#### "Güvenli hisselerden kaçın" — sayısallaştırılabilir

Verizon, GE, Coca-Cola. Bunların ortak özelliği **düşük beta** ve **yüksek temettü** — yani düşük oynaklıklı savunma hisseleri.

**Kural, adı konmadan bir beta filtresidir**, ve mekanik hale getirilebilir: beta eşiği ya da tarihsel oynaklık eşiği. Video isim veriyor, sen ölçü verebilirsin.

**Ve bu, ölçülebilir bir alt hipotez:** *yüksek beta hisselerde SMT ayrışması, düşük beta hisselerde olduğundan daha çok bilgi mi taşıyor?* Cevap muhtemelen evet olur — ama **o zaman sinyalin ne kadarı ayrışmadan, ne kadarı sadece betadan geliyor?** Bu ayrım yapılmadan sonuç yanıltıcıdır.

#### Yanlışlanamazlık

**1. "Aynı kavşakta" tanımsız.** Endeks SMT ile hisse ayrışmasının aynı anda olması gerekiyor ama tolerans verilmiyor — aynı gün mü, aynı hafta mı?

**2. İki-dört şirkete daraltma öznel.** Kaç aday çıktı, hangi ölçüte göre dörde inildi — kural yok. Ve *"seçimi daralt"* adımı, sonradan **kazananların seçilmesine** açık.

**Kapatılabilir ve ölçüm için gerekli:** **tüm** ayrışan hisseleri al, daraltma yapma. Daraltmanın katkısı ancak daraltma kuralı tanımlıysa ölçülebilir.

**3. Tek hisse, tek dönem, çalışmış örnek.** Apple, Ocak–Mayıs 2017. Kaç hisse ayrıştı, kaçı çalıştı — sayı yok.

#### Ölçülebilirlik

**Ölçülebilir.** Evren sabit (Dow 30), sinyal iki katmanlı ve ikisi de mekanik, karşılaştırma grubu doğal, ve örneklem 30 kat çarpılıyor. Belirsizlik (hizalama toleransı, daraltma) kenarda ve ikisi de çıkarılabilir.

#### Not

**Öncelikli alınacak — ve bu ay için üçüncü sırada:** iki katmanlı SMT taraması, **daraltma adımı olmadan.** Endeks SMT × Dow 30 = yılda ~1.500 gözlem.

**Ve beta kontrolü zorunlu:** sinyalin ne kadarı ayrışmadan, ne kadarı hisse oynaklığından geliyor?
:::

### Video 17 — Satış izleme listesi kurma

::: ders
**DERS**

On altıncı videonun **tam aynası.** Video da bunu belirtiyor: aynı Dow 30 evreni, aynı iki filtre yapısı, ters yönde.

**İdeal pencereler:** **Ocak**, ve **Mayıs – Temmuz** — kısa swing kurulumları için. *"Öncelikle **Mayıs tepesinden Temmuz ayına** kadar odaklanacağız — yani Mayıs başından Ağustos'un ilkine kadarki tüm kuşatma."*

**Filtre 1:** Borsa düşmeye hazır olmalı
**Filtre 2:** Ayı aylarda **daha düşük tepe yapan** hisseler seçilir

**Seçim kriterleri:** haftalıkta aşağı trend eden hisseler ideal; aynı "güvenli" hisselerden kaçınılır; **prim array'ler + endeks SMT** ağır **dağıtım** altındaki şirketleri işaret eder; **iki ile dört şirkete** daraltılır.

**Merkezi kural:** *"Kurumlar tarafından agresif biçimde satılan liderlik hisseleri, ayı aylarda **üç ana endeks ralli yaparken — ta ki biri karşılaştırmalı olarak daha yüksek tepe yapmayı başaramayana kadar — yükselmeyi başaramayan** hisseler olarak bulunacaktır."*

**2015 Mayıs–Temmuz örneği:** NASDAQ daha yüksek tepe yaptı ama **Dow ve S&P yapamadı** → *"borsada dağıtımın klasik parmak izi."*

#### Ve bu videonun tek özgün katkısı — bir anti-kiraz-toplama kuralı

American Express örneğinde video duruyor:

> *"Burada bir mum var, onun hakkında bir argüman yapabilirdim ama yapmayacağım. **Sadece diyeceğiz ki ayrışma yoktu — çünkü kurallar şu: belirgin değilse, SMT'de ayrışma yoktur.**"*
:::

::: eleme
**ELEME**

#### Yeni bilgi taşımıyor — bir kural dışında

On altıncı videonun aynası; parametreler, evren, filtre yapısı, seçim sayısı aynı. Mayıs V7'de kaydedilen aynı desen: **her kavram iki videoya bölünüyor ve ikincisi birincisinin aynası.**

Ölçüm açısından: **ayrı bir hipotez üretmiyor**, on altıncı videonun simetrik yarısı.

**Ve buradan Mayıs'ta kaydedilen aynı soru çıkıyor:** *alım ve satım kolları gerçekten simetrik sonuç veriyor mu?* Hisse senetlerinde bu, boş bir soru değil — **hisse getirileri sola çarpıktır** (aşağı hareketler daha keskin, yukarı hareketler daha yavaş) ve **açığa satış kısıtları** yön asimetrisi yaratır. Video simetriyi varsayıyor.

#### Ama bir kural gerçekten önemli

> *"**Belirgin değilse, SMT'de ayrışma yoktur.**"*

Bu, on ayda kaydedilen **tek açık anti-kiraz-toplama kuralı**, ve önemli olan yönü: sinyal **bulmaya karşı** bir önyargı koyuyor. Video bir mumu tartışabileceğini söyleyip **tartışmamayı seçiyor.**

Karşılaştır: Şubat V2'nin *"kendini ikna ediyorsan geç"* kuralı da aynı yöndeydi ama orada **işlem** hakkındaydı; burada **sinyalin varlığı** hakkında — yani veri etiketlemesi hakkında.

**Ve ölçüm için doğrudan sonucu var:** "belirgin" hâlâ öznel, ama **vekili kolay**: ayrışmanın büyüklüğü için bir eşik (ör. dip farkı / ATR). O eşik takıldığında kural tam mekanik olur, ve **eşiğin kendisi taranabilir** — küçük ayrışmalar mı büyük ayrışmalar mı bilgi taşıyor?

Bu, Aralık V11'in **sweep derinlik eşiği** fikrinin SMT'ye uygulanmış hali.

#### Ölçülebilirlik

**Ölçülebilir** — on altıncı videoyla aynı gerekçeyle, ve ayrı bir değerlendirme gerektirmiyor.

#### Not

**Alınacak:** ayrışma büyüklüğü eşiği. *"Belirgin"i sayıya çevir ve tara* — bu, hem kuralı mekanikleştiriyor hem yeni bir hipotez üretiyor.

**Alınacak:** alım/satım simetri testi. Hisse getirilerinin çarpıklığı nedeniyle asimetri beklenir, ve ölçmek bedava.
:::

### Video 18 — Değerleme: CAN SLIM

::: ders
**DERS**

#### Kaynak — ve bu ayın en açık atfı

> *"Açıkçası bunun sahipliğini iddia edemem ama **William J. O'Neil'ın yarattığı** teoriye katılıyorum ve kullandığı kısaltma **CAN SLIM.**"*

> *"**Bu öğretinin yaklaşık %80'i temelde William O'Neil'ın 'How to Make Money in Stocks' kitabından öğrendiğin şey.** Bana göre yeterince söyleyemem — **sadece o kitabı oku.** Zamansız, çünkü bilgi bugün hâlâ geçerli."*

**Kaynak: Investors Business Daily (IBD)** — 90'ların sonundan beri kullanılıyor. *"Bir yatırımcı olarak repertuarında olması gereken bir kaynak."* Dört haftalık ücretsiz deneme öneriliyor (Eylül'ün ikinci haftasında).

Ve bir çıkar beyanı: *"**Hayır, onlarla iş ortaklığım yok. Hayır, onlar için satış yapmıyorum.** Gerçekten hizmetlerini kullanıyorum ve seviyorum."*

#### İş bölümü

> *"Kısaltmanın **M harfine kadar olan** ilk kısmı — **temel (fundamental)** dayanağımı oradan alıyorum. Ve son olan **teknik** dayanak, ki o benim kendi katkım. **William J. O'Neil'ın piyasayı zamanlama yaklaşımının yeterli olduğuna inanmıyorum**... Yani zamanlamamız var, mevsimselliklerimiz var ve temellerimiz var."*

#### CAN SLIM

| Harf | Anlam | Kriter |
|---|---|---|
| **C** | **Current earnings** (mevcut kazanç) | Son bildirilen çeyrekte kazanç büyümesi **en az %25**, daha büyüğü daha iyi. **Ve son üç çeyrekte hızlanma:** örneğin bir çeyrek %25, sonraki %50, en sonuncusu %90. *"Sadece istikrarlı büyüme yeterli değil — **artışın büyüdüğünü** görmek istersin."* |
| **A** | **Annual earnings** (yıllık kazanç) | **Son üç yılın her birinde en az %25** yıllık kazanç büyümesi. Ayrıca sektör grubundaki **en iyi marjlar** ve **en az %17 özkaynak kârlılığı (ROE)** |
| **N** | **New** (yeni faktör) | Yeni ürün, hizmet, liderlik, yönetim, yeni fiyat zirvesi, ya da sektörde yeni koşul. **"En büyük hisse kazananlarının %75'i son sekiz yıl içinde halka açılmış."** |
| **S** | **Supply and demand** (arz ve talep) | Hisse fiyatı **20 doların üstünde**; makul bir **dolaşımdaki hisse (float)**. Aynı koşullara sahip iki hisseden **daha az dolaşımdaki hisseye** sahip olan çok daha fazla yükselir |
| **L** | **Leader or laggard** (lider mi geride kalan mı) | En iyi kazanç büyümesi, en güçlü satışlar, üstün fiyat performansı, **lider sektör gruplarında.** *"**Yüksekten al, daha yükseğe sat** — bu aptallık gibi geliyor ama temelde bir **düşük dirençli likidite koşusu.**"* Ve: *"O'Neil'ın çalışmaları **güçlünün daha güçlü olduğunu** ortaya koydu" |
| **I** | **Institutional sponsorship** (kurumsal sponsorluk) | Yatırım fonları, emeklilik fonları ve bankalar **tüm işlem faaliyetinin %80'i kadarını** oluşturuyor. **En az 10 yatırım fonunun** sahip olduğu hisseler ideal, ve **iki-üç çeyrek artan kurumsal sponsorluk** |
| **M** | **Market direction** (piyasa yönü) | **Dört hisseden üçü piyasa trendini izliyor.** Yalnızca **teyit edilmiş bir yükseliş trendinde** alım yapılır, ve düzeltmelerde sermaye korunur |

#### Bir itiraz — dürüstçe işaretlenmiş

S maddesini okurken video duruyor: *"En temel ekonomik ilkelerden biri arz ve talep yasasıdır, ki en keskin biçimde borsada gösterilir. **Şimdi buna itiraz edeceğim, ama söylediklerine göre devam edeceğiz.**"*

#### Facebook anekdotu

> *"IPO çıktığında bazı arkadaşlarıma **hisse başına 20 civarına inmesini bekleyip alın ve 100'ün üstüne çıkmasını bekleyin** dediğimi hatırlıyorum — **yaklaşık üç buçuk yıl içinde tam olarak senaryoya göre gitti.**"*
:::

::: eleme
**ELEME**

#### On ayın en tam ödünç alınmış içeriği — ve bunu söylüyor

Bu videonun **%80'i** kendi ifadesiyle O'Neil'ın kitabından. Ve kalan %20 — zamanlama katmanı — zaten önceki videolarda anlatılan endeks SMT ve mevsimsellik.

**Ölçüm açısından bu bir kusur değil, tam tersine avantaj:** CAN SLIM, **onlarca yıldır bağımsız olarak test edilmiş** bir tarama kriteridir. Literatürde sonuçlar karışıktır — bazı çalışmalar momentum ve kalite faktörlerine indirgenebileceğini bulmuştur — ama **tanım kamuya açık, kriterler sayısal, ve test edilebilir.**

#### Yedi kriterin yedisi de sayısal

| Kriter | Ölçü |
|---|---|
| Çeyreklik kazanç büyümesi | **≥%25** ve **hızlanan** |
| Yıllık kazanç büyümesi | **≥%25 × 3 yıl** |
| ROE | **≥%17** |
| Hisse fiyatı | **>20 USD** |
| Fon sahipliği | **≥10 yatırım fonu** |
| Kurumsal sponsorluk trendi | **2–3 çeyrek artan** |
| Piyasa yönü | Teyit edilmiş yükseliş trendi |

**Sıfır seçim noktası.** Bir tarama sorgusudur, ve doğrudan kodlanabilir.

**Ve "hızlanma" kriteri özellikle iyi:** *"sadece istikrarlı büyüme yeterli değil, artışın büyüdüğünü görmek istersin."* Bu, seviye yerine **değişimin değişimini** kullanıyor — dördüncü videodaki spread ayrışması fikriyle aynı yapıda, ve daha ince bir ölçüdür.

#### Ama üç uyarı gerekli

**1. Bu, bir hisse tarama kriteri — senin sistemin fiyat tabanlı.** CAN SLIM'in ölçülmesi **temel veri** gerektiriyor (kazanç, ROE, fon sahipliği), ve senin mevcut altyapın fiyat/hacim üzerine kurulu. Bu, **yeni bir veri hattı** demek, ve bu ayın diğer fikirlerinden farklı bir maliyet taşıyor.

**2. Kripto için karşılığı yok.** Kazanç, ROE, yatırım fonu sahipliği — hiçbirinin kripto analoğu yok. Bu videonun içeriği **taşınmıyor.**

**3. Veri kaynağı ücretli ve tarihsel tarama zor.** IBD'nin sıralama sistemi tescilli. Ham kriterler (kazanç, ROE) başka kaynaklardan alınabilir ama **geriye dönük tarama için o tarihteki verinin o tarihte bilinen haliyle** gerekmesi ciddi bir zorluk — düzeltilmiş kazanç verisi kullanmak **anakronizmdir.**

Bu son nokta senin `#013`'ünle doğrudan ilgili ve Şubat V8'de faiz oranları için kaydedilen aynı sorun: *"faiz oranları sonradan düzeltilmiş olarak sunuluyor."* Kazanç verileri de düzeltilir.

#### Yanlışlanamazlık — bu videoda çok az

Kriterler sayısal ve tarama sonucu tartışılamaz. Tek gevşek nokta **M harfi** — "teyit edilmiş yükseliş trendi" tanımsız, ve o, on aydır tanımsız olan yön koşulunun aynısı.

**Facebook anekdotu** ise tek kayıtsız çağrı: *"20'ye inince alın, 100'ün üstüne çıkacak — tam senaryoya göre gitti."* Kaç böyle çağrı yapıldı, kaçı tuttu — on ayda beşinci kez aynı not.

#### Ölçülebilirlik

**Ölçülebilir.** Yedi kriterin yedisi sayısal ve kamuya açık tanımlı; bağımsız olarak onlarca yıldır test edilmiş. Ama **veri hattı maliyeti yüksek** ve **kriptoya taşınmıyor.**

#### Not

**Bu ay için en düşük öncelik — ama gerekçesi ilgi eksikliği değil:** ölçmesi için gereken veri (nokta-zamanlı temel veri) senin mevcut altyapında yok ve kriptoya karşılığı da yok.

**Kaydedilecek olan:** kriterin kendisi değil, **"hızlanma" fikri.** *Bir büyüklüğün seviyesi yerine artış hızının artması* — bu, dördüncü videodaki spread ayrışması ve on birinci videodaki SMT ile aynı aileden, ve **fiyat verisine uygulanabilir:** momentumun momentumu.
:::

# KAPANIŞ (V19)

### Video 19 — Neden bu ay

::: ders
**DERS**

Bu bir ders değil — ayın **gerekçesi.** Video açıkça bir soruyla başlıyor: *"Haziran'da gösterilen içerikten neden geçmeni sağladığımı düşünüyorsun?"*

Ve gelen tepkiyi kabul ediyor: *"Bazılarınızın **dolgu malzemesi** gibi hissettiğine inanıyorum, gerekli değilmiş, ihtiyaç yokmuş, 'ICT'ye sonra dönerim' gibi... **Bu ay boyunca aldığım onlarca e-postayı size anlatamam: 'Bu ayı atlayabilir miyim? Bunu dert etmesem olur mu? Bir sonraki ay için ödeyip bu gruba dahil olmasam olur mu?'**"*

#### Ayın gerçek konusu: risk on / risk off

> *"Dört varlık sınıfını — tahvil, döviz, emtia, hisse senedi — **bir bütün olarak, nasıl birbiriyle ilişkili olduklarına** bakmak. ... Aralarındaki **simetriyi** ara, çünkü çekmeye çalıştığım **ortak bir tema** var."*

**Mekanizma:**

| Durum | Tahvil | Hisse | Yabancı para | Dolar |
|---|---|---|---|---|
| **Risk off** | **Yükselir** (tahvile kaçış) | Düşer | Düşer | **Yükselir** |
| **Risk on** | **Düşer** | **Yükselir** | **Yükselir** | Düşer |

Ve emtialar: dolar yükselirken düşer, düşerken yükselir.

#### Merkezi operasyonel iddia

> *"Piyasalar birlikte iyi çalıştığında, tüm varlık sınıfları yapması gerekeni yaptığında... **büyük, tek yönlü, patlayıcı hareketler** elde edersin. **Dört varlık sınıfıyla o güzel geçme olmazsa, hareketlerin patlayıcı olabileceği fırsatları bulmakta çok zorlanacaksın.**"*

#### Sayma kuralı — ve videonun tek nicel yapısı

> *"**Dört varlık sınıfından sadece ikisinin** bir şey yaptığını ama diğer ikisinin yapması gerekeni yapmadığını görmeye başladığında ne olur? Bu çok simetrik bir piyasa mı? **Hayır.** Ama **üçüncüsü** de yapmaya başlarsa? İşte o şimdi çok ilginç, değil mi — çünkü bizi şu soruya getiriyor: belirsizdi, **ama şimdi üçüncü bir varlık sınıfı olması gerektiği gibi davranmaya başlıyor.** Yani o kaotik belirsizlikten çıkmaya başlıyoruz, dolayısıyla **akıllı paranın daha fazlası işe koşuluyor.**"*

#### Kendi performansına dair bir atıf

> *"**Yanıldığımı görebilirsin — iyi gitmediğim dönemler göz kamaştırıcı biçimde belirgin oldu**, ve bunun sebebi çok varlık sınıflı analiz: bu dört varlık sınıfı ne isterlerse onu yapıyor. **Aylardır piyasanın risk on mu risk off mu olduğunu belirlemenin çok zor olduğu bir dönemden geçiyoruz** — bazen öyle, bazen değil. Bazı varlık sınıfları yapması gerekeni yaparken diğerleri tamamen başka bir şey yapıyor."*

Ve: *"Burada olmayan bazı kişiler yoruldu, artık bununla uğraşmak istemiyorlar, onları yıprattı."*

#### İşlem yapılmayan bir günün gerekçesi

Kayıt günü **30 Haziran 2017, Cuma.** Bir üye e-posta atmış: söz verilen USD/CAD işlemi yapılmadan tatile mi çıkıldı?

> *"Hayır, bir USD/CAD **işlemi** yapacağıma söz vermedim — **piyasaya bakacağıma** söz verdim... Ama **dört varlık sınıfının tamamını kullanarak bu sabah bir işlem görmedim, ve bu sabah bir işlem yoktu.** Gelecek hafta geniş biçimde takip edilen büyük bir ABD tatilinden önce bir konsolidasyon günüydü."*

Ve: *"**Zaten haftalık hedefimi karşılamıştı** — çağırdığım dibe zaten inmişti ve biraz altına geçmişti. Karşılandıysa **ne işlem yapacağım? Hedefi vurdum diye ters yöne gideceği anlamına gelmiyor.**"*

#### Epistemik kapanış

> *"**Siyah-beyaz değil.** Piyasanın siyah-beyaz göründüğü, kolay göründüğü, bir yöne gideceğinin apaçık olduğu zamanlar olacak — **ve o zamanlar seni kandıracak, çünkü hep öyle olması gerektiğini düşüneceksin.**"*

> *"Onları bulamazsam — **net izler bırakmıyorlarsa — ellerimi cebimde tutuyorum. Bu bir mentor olarak iyi görünmüyor, bazen rock yıldızı bir işlemci olarak iyi görünmüyor. Ama 20 küsur yıldır ne yaptığımı sanıyorsun? Sadece oyunda kalmak.**"*

#### Ve ayın en yanlışlanamaz cümlesi

> *"**Dinle: ben öğretmiyorsam önemli değildir. Öğretiyorsam önemlidir.**"*

#### İleriye dönük

Ağustos'ta yukarıdan aşağı PDF şablonları gelecek. *"Bu ayı tekrar gözden geçir ve her varlık sınıfı için tartışma noktalarını süz, sonra aralarında **paralellikler** kurmaya çalış — çünkü bunu yapmaya başlarsan Ağustos'taki PDF dosyalarında seni nereye götürdüğümü göreceksin."*

Ve bir iş yükü notu: *"Bu ay sunumda **200 slayt** vardı."*
:::

::: eleme
**ELEME**

#### Sayma kuralı — bu videonun tek ölçülebilir çekirdeği

> *"İki varlık sınıfı uyumlu → simetrik değil. Üçüncüsü de katılırsa → belirsizlikten çıkıyoruz."*

Bu, **kademeli bir rejim ölçüsü**, ve mekanik hale getirilebilir:

1. Dört varlık sınıfı için risk-on/risk-off yönü tanımla (tahvil, hisse, dolar, emtia — her biri ikili)
2. Kaçının tek bir rejimle **tutarlı** olduğunu say → **0–4 arası bir tam sayı**
3. O sayı ile sonraki dönemin **trend gücü** ya da **hareket büyüklüğü** arasındaki ilişkiyi ölç

**Ölçülebilir hipotez:** *Dört varlık sınıfının risk rejimi uyum skoru, sonraki N günün yönlü hareket büyüklüğünü öngörüyor mu?*

Neden bu iyi:
- **Dört seri kamuya açık** ve günlük
- **Skor bir tam sayı** — yorum yok
- **Çıktı bir rejim ölçüsü**, yön tahmini değil
- **Ve videonun kendi iddiası kademeli:** 2 kötü, 3 iyi — yani skorla sonuç arasında **monoton bir ilişki** öngörülüyor, ve monotonluk test edilebilir

**Ve senin projenle doğrudan bağı var.** Range projende `RANGE_ACTIVE`/`NO_RANGE` ayrımı **beş koşullu bir fiyat yapısı tanımından** türetiliyordu ve Aşama 1'de RET aldı. Bu, aynı rejim sorusuna **tamamen farklı bir veri kaynağından** cevap veriyor:

| Kaynak | Rejim tanımı |
|---|---|
| Senin range sistemin | Fiyat yapısı, beş koşul |
| Ocak V6 | İki serinin korelasyon işareti |
| Şubat V7 / Mart V8 | Oynaklık daralması (NR7) |
| **Haziran V19** | **Dört varlık sınıfının uyum skoru** |

**Dördü aynı soruyu soruyor ve dördü de tek bir çalışmada karşılaştırılabilir:** hangi rejim tanımı, sonraki dönemin trend gücünü en iyi öngörüyor?

Bu, on ayda biriken rejim fikirlerinin **tamamlanmış hali**, ve bu belgenin ürettiği en büyük tek ölçüm önerisi olabilir.

#### Kendi performansına dair atıf — falsifiye edilebilir bir iddia

> *"İyi gitmediğim dönemler belirgin oldu, ve sebebi dört varlık sınıfının uyumsuz davranması."*

Bu, on ayda yapılan **en spesifik nedensel iddia**, ve prensipte yanlışlanabilir: *uyum skorunun düşük olduğu dönemler, gerçekten daha zor işlem dönemleri mi?*

**Ama iki eksiği var:**

1. **Performans kaydı yok.** "İyi gitmediğim dönemler" hangi dönemler, ne kadar kötü — sayı yok. İddianın bir tarafı ölçülebilir (uyum skoru), diğer tarafı yok (performans).
2. **Ve yapısı bir kaçış kapısı olarak da kullanılabilir:** kötü dönemler rejime atfediliyor, iyi dönemler yönteme. Bu, YONERGE §2.4'ün **başarısızlığın yeniden çerçevelenmesi** kalıbıdır.

**Ayrımı yapmak gerekiyor:** iddia **doğru olabilir** — rejim gerçekten performansı etkiliyor olabilir, ve bu ölçülebilir bir olgudur. Ama **kayıt olmadan bir açıklama değil, bir gerekçedir.**

Ve ölçüm senin tarafından yapılabilir: uyum skorunu hesapla, sonra **senin kendi sistemlerinin** o dönemlerdeki performansına bak. İddianın ikinci yarısı senin verinde var.

#### İşlem yapılmayan gün — doğru cinsten bir kayıt

*"Bu sabah bir işlem görmedim ve bir işlem yoktu. Tatil öncesi konsolidasyon günüydü. Zaten haftalık hedefimi karşılamıştım."*

Bu, **üç ayrı doğru unsuru** bir arada taşıyor:
- **Takvim gerekçesi** (tatil öncesi) — önceden bilinebilir
- **Hedef karşılanmış** — objektif
- **Ve "hedefi vurdum diye ters yöne gideceği anlamına gelmiyor"** — bir kaçış kapısının **reddi**

Nisan V6'nın *"en iyi kurallar seni piyasadan uzak tutanlardır"* ifadesinin somut uygulaması.

#### Ayın tek yanlışlanamaz cümlesi

> *"Ben öğretmiyorsam önemli değildir. Öğretiyorsam önemlidir."*

Bu, YONERGE §2.4'ün tanınacak kalıplarına doğrudan girer: **otorite iddiası**, ve içeriğe dair hiçbir bilgi taşımıyor. Bir şeyin önemli olup olmadığı, kimin öğrettiğinden bağımsız olarak ölçülebilir bir sorudur.

Ve dikkat çekici olan **bağlamı:** aynı videoda *"yanıldığımı görebilirsin"*, *"siyah-beyaz değil"*, *"ellerimi cebimde tutuyorum"* gibi on ayın en ölçülü ifadeleri var. Bu tek cümle onların arasında duruyor ve tonla uyuşmuyor.

#### Ayın gerekçesi — ve bunun kaydedilmesi

Bu video bir öğreti değil, **bir savunma.** Ve savunulan şey şu: dört varlık sınıfına bakmak, tek enstrümana bakmaktan daha iyi bir rejim okuması verir.

**Bu argüman doğru olabilir ve ölçülebilir** — yukarıdaki uyum skoru testi tam olarak onu sınıyor. Ama videonun kendisi **hiçbir ölçüm sunmuyor**; argüman deneyime ve otoriteye dayanıyor.

On ayın deseni burada bir kez daha görünüyor: **doğru olabilecek bir fikir, ölçülmemiş halde, deneyimle gerekçelendiriliyor.**

#### Ölçülebilirlik

**Kısmen.** Sayma kuralı (kaç varlık sınıfı uyumlu) tamamen mekanik ve dört kamuya açık seriden hesaplanabilir; ve bu, ayın en değerli tek ölçüm önerisini üretiyor. Ama video bir ders değil, bir gerekçe — ve kendi merkezi iddiası için hiçbir kayıt sunmuyor.

#### Not

**Öncelikli alınacak:** dört varlık sınıfı uyum skoru, **rejim ölçüsü olarak** — ve senin mevcut üç rejim tanımınla (fiyat yapısı, korelasyon işareti, oynaklık daralması) karşılaştırmalı.

**Alınacak, senin kendi verinle:** uyum skoru düşük dönemlerde **senin sistemlerinin** performansı gerçekten düşüyor mu? İddianın ölçülemeyen yarısı senin elinde.

**Alınmayacak:** *"Ben öğretmiyorsam önemli değildir."*
:::

## BÖLÜM II — Ayın bütünü

### Ölçülebilirlik tablosu

| Video | Modül | Kavram | Değerlendirme |
|---|---|---|---|
| V1 | Emtia | COT hedging programı | **Ölçülebilir** — 6/12 aylık aralık orta çizgisi mekanik; emir akışı ayağı kenarda |
| V2 | Emtia | Göreli güç / liderlik | **Ölçülebilir** — iki pivot karşılaştırması; karşılaştırma grubu videonun kendi taramasında |
| V3 | Emtia | Mevsimsellik | **Kısmen** — yöntem ilk kez tanımlı, ama örneklem yılda bir ve tersine okuma kuralı her sonucu açıklıyor |
| V4 | Emtia | Prim / carrying charge | **Ölçülebilir** — serinin en doğrulanabilir içeriği; gözlemlenebilir fiyat serisi, literatürde desteklenen mekanizma |
| V5 | Emtia | Açık pozisyon | **Ölçülebilir** — klasik tablo + mevsimsel normalizasyon; veri kamuya açık |
| V6 | Tahvil | Açılış aralığı (08:00–09:00) | **Ölçülebilir** — sabit pencere, %14,3 taban çizgisi, gerçek hacim |
| V7 | Tahvil | Bölünmüş seans kuralları | **Ölçülebilir** — üç seans saat tabanlı; iki iddia da taban çizgili |
| V8 | Tahvil | Konsolidasyon günleri | **Ölçülebilir** — beş öngörücünün üçü takvimden; 12 tick eşiği |
| V9 | Tahvil | Trend günleri | **Ölçülebilir** — ZB/ZN vade eğrisi ayrışması, tanımlı pencereyle |
| V10 | Endeks | Açılış aralığı (09:30–10:30) | **Ölçülebilir** — %15,4 taban çizgisi, hacim ayrışması |
| V11 | Endeks | AM trendi + **endeks SMT** | **Ölçülebilir** — on ayın en tanımlı SMT'si: üç enstrüman, sabit pencere |
| V12 | Endeks | PM trendi | **Ölçülebilir** — açılış-kapanış koşullu ilişkisi ayın en ucuz testi |
| V13 | Endeks | Sekiz projekte edilen aralık | **Kısmen** — seçim kuralı gerçek ve PM öncesi kararlaştırılıyor; ama sekiz profil tüm günleri kapsıyor |
| V14 | Endeks | Endeks işlem kurulumları | **Ölçülebilir** — SMT girişi + saat tabanlı tutma; hedef çıkarılabilir |
| V15 | Hisse | Mevsimsellik / aylık | **Ölçülebilir** — ay ay tablo takvimden; boğa-yanlılığı teşhisi doğru |
| V16 | Hisse | Alım izleme listesi | **Ölçülebilir** — iki katmanlı SMT; örneklem 30 kat çarpılıyor |
| V17 | Hisse | Satış izleme listesi | **Ölçülebilir** — V16'nın aynası; "belirgin değilse ayrışma yoktur" kuralı |
| V18 | Hisse | CAN SLIM | **Ölçülebilir** — yedi kriter de sayısal; ama tamamen ödünç ve veri hattı maliyeti yüksek |
| V19 | Kapanış | Risk on / risk off | **Kısmen** — sayma kuralı mekanik; ama ders değil gerekçe, ve kayıt yok |

**Ölçülebilir: 16 · Kısmen: 3 · Ölçülemez: 0**

**Serinin en yüksek oranı — 16/19 = %84.** Önceki en iyi Nisan'dı (7/8 = %88 oran ama 19 videoya karşı 8).

Sebep tek cümleyle söylenebilir: **bu ayın içeriği neredeyse tamamen dışarıdan doğrulanabilir veriye dayanıyor.** CFTC raporu, spread serisi, açık pozisyon, sözleşme spesifikasyonu, seans saatleri, üç adı konmuş endeks, ve bir kamuya açık tarama kriteri. Neredeyse hiçbiri "bu bir order block mı" sorusuna bağlı değil.

### Ayın yapısal özellikleri

**1. On ayın ilk sorumluluk reddi, ve her videoda tekrarlanıyor.** *"CTA değilim, lisanslı emtia işlem danışmanı değilim, burada tartışılan her şey yalnızca kâğıt üzerinde işlem kapsamında."*

**2. Kaynak atıfları ilk kez tam ve tutarlı.** COT → Larry Williams. Açık pozisyon → Larry Williams, *"yaygın olarak bilinen"*. Mevsimsellik → Steve Moore / Moore Research. Hisse seçimi → William J. O'Neil, *"bu öğretinin %80'i onun kitabı"*. Veri → CFTC, barchart.com, CRB Trader, pricecharts.com, Investors Business Daily.

Ve bir çıkar beyanı: *"Onlarla iş ortaklığım yok, onlar için satış yapmıyorum."*

**3. Ve bu, Mart'ın özgünlük iddiasını geri alıyor — söylenmeden.** Mart V8: *"kitaplarda yok, böyle bir şey dışarıda yok."* Haziran V1: *"Larry Williams'tan öğrendiğim şey."* Aynı yöntem, dört ay arayla, iki köken.

**4. On ayda ilk kez bir öğreti yanlış olduğu söylenerek geri çekiliyor.** Kanola/pirinç açık pozisyonunun tahıl kompleksine genellenmesi. Ve gerekçe teknik olarak doğru: *"açık pozisyon yalnızca o piyasayla ilgilidir."* Ve **neden yanıldığı da doğru teşhis ediliyor:** 90'lardaki genel kuraklık, ortak bir sebep olarak sahte bir öncü ilişki yaratmıştı — bu, **karıştırıcı değişken** teşhisidir.

**5. Gerçek hacim ilk kez kullanılıyor.** Dokuz ay boyunca YONERGE §4'te işaretlenen yanlış iddia (*"gövdeler kurumsal, fitiller perakende"*) hacmin yerini tutuyordu. Vadeli piyasada merkezi takas nedeniyle **gerçek hacim tek ve mevcut**, ve video bunu doğru tespit ediyor.

**6. Aralık V1'in yedi aydır açık boşluğu kapanıyor.** Faiz üçlüsü fikrinde eksik olan tek şey zaman hizalamasıydı; V9'da **08:00–09:00 açılış penceresi** ile veriliyor.

**7. Ve on birinci video SMT'yi tam olarak tanımlıyor:** üç adı konmuş enstrüman, **05:00–09:30 penceresi**, göreli uçların karşılaştırması. Aralık V1'den beri açık olan *"aynı anda ne demek"* sorusunun cevabı.

**8. Örneklem büyüklüğü ilk kez talep ediliyor.** V11: *"Bu yüzden büyük bir örneklem büyüklüğüne bakman önemli."* Senin `#029`'unun sözel karşılığı, on ayda ilk kez.

### Yeniden adlandırmalar

| Videodaki | Klasik karşılığı | Yeni bilgi taşıyor mu? |
|---|---|---|
| COT hedging programı / "nodül" | **Larry Williams COT Index** — video kaynağı veriyor | Hayır; **ama uç-dışı bölgede kullanımı Williams'tan farklı ve test edilebilir** |
| Prim / carrying charge | **Backwardation / contango** — standart vadeli piyasa terim yapısı | Hayır — ama tanım doğru ve mekanizma literatürde destekli |
| Spread ayrışması | Takvim spread'i ve terim yapısı değişimi | **Kısmen** — seviye yerine değişim kullanımı ince |
| Açık pozisyon dört durumu | Klasik fiyat/hacim/açık pozisyon tablosu (Murphy, Schwager) | Hayır — video *"yaygın olarak bilinen"* diyor |
| Kurumsal sponsorlu ralli / sempatik ralli | **Göreli güç analizi**; sektör liderliği | Hayır |
| Endeks SMT | Endeksler arası ayrışma; klasik "confirmation" analizi (Dow teorisi) | **Kısmen** — pencere tanımı ve üçlü karşılaştırma spesifik |
| Açılış aralığı (tüm varlık sınıfları) | **Opening range breakout** ailesi (Crabel, Fisher) | Hayır — ama pencereler spesifik |
| Risk on / risk off | Standart makro rejim terminolojisi | Hayır |
| CAN SLIM | **William J. O'Neil** — video kaynağı ve kitabı veriyor | Hayır, ve video bunu söylüyor |
| Mevsimsellik grafikleri | **Moore Research** — kaynak veriliyor | Hayır |
| "Volume precedes price" | Klasik hacim ayrışması | Hayır |

**Bu tablo bu ay için farklı okunmalı:** dokuz ay boyunca "yeniden adlandırma" bir eleştiriydi — klasik bir kavram yeni bir adla, kaynak verilmeden sunuluyordu. **Haziran'da kaynaklar veriliyor**, dolayısıyla tablo bir eleştiri değil, bir **haritalama.**

### Tekrarlanan sorunlar

**Yön ön koşulunun tanımsızlığı — onuncu ay.** V1'in üçüncü ayağı, V13'ün profil seçimi, V14'ün hedefi, V18'in M harfi. **Ocak V2** bu tanımı vermişti; Şubat'tan Haziran'a **beş ay üst üste** atıf yok.

**İkinci dokunuş sorusu — dört ayda dördüncü kez ve hâlâ açık.** Şubat V5 *"birden çok kez işlem görebilir"*; Mart V4/V5 *"tükenmiştir"*; Haziran V8 *"birden fazla kez çalışacaklar"*; Haziran V13 *"zaten savundular."* **İki zıt iddia, dört ayrı yerde, tek koşuyla çözülür.**

**COT raporlama gecikmesi — üçüncü kez ve hiç anılmıyor.** Salı pozisyonları, Cuma yayını. Şubat V7, Mart V8 ve Haziran V1'de aynı boşluk.

**Örtüşen örneklemler bağımsız doğrulama sayılıyor.** V3'te 15 yıl ⊂ 40 yıl; V15'te 5 ⊂ 15 ⊂ 20. Ocak V12'de kaydedilen aynı hata.

**Daralma-genişleme iddiası — beşinci ay.** Şubat V7 (NR7), Mart V8, Nisan V6, Haziran V8 (12 tick), Haziran V9. **Beş ifade, tek olgu, tek test.**

**Tek örnek, geriye dönük.** Neredeyse her videoda. **Ama iki istisna var ve kaydedilmeli:** V2 sepetin **tamamını** raporluyor (kazananları da kaybedenleri de), ve V3/V15 başarısız yılları tek tek gerekçelendirmeden not ediyor.

**Kayıtsız ileriye dönük çağrı — beşinci kez.** V1 (JPY 91.50 FVG), V3 (gümüş 27–28), V9 (14 Haziran alım stopu koşusu), V13 (**22 Haziran, ES 2437'den kısa** — en spesifik olanı, ama **sonucu verilmiyor**), V18 (Facebook 20→100).

**Ölçek — bu ay sorun değil.** Tahvilde 5–8 tick hedefe karşı ~4 USD komisyon = hedefin **%2,5'i.** Mayıs'ın 20 pip stopunda maliyet R'ın **%8–10'uydu.** Vadeli piyasa, aynı ölçekte **üç-dört kat daha az maliyet baskısı** taşıyor.

**Hacim/fitil iddiası — beş ay üst üste yok**, ve bu ay yerini **gerçek hacim** alıyor.

### Ayın iç çelişkileri

| Konu | Bir yerde | Başka yerde |
|---|---|---|
| **COT yönteminin kökeni** | **Mart V8: "kitaplarda yok, böyle bir şey dışarıda yok"** | **Haziran V1: "Larry Williams'tan öğrendiğim şey"** |
| **Seviyeye ikinci dokunuş** | Şubat V5, Haziran V8: **birden çok kez işlem görebilir** | Mart V4/V5, Haziran V13: **tükenmiştir / zaten savundular** |
| Önceki seansın öngörü gücü | Mayıs V5: **"New York her zaman Londra'nın devamıdır"** | Haziran V8: **"gece fiyat hareketine dair belirli bir öncü yok"** |
| Arz-talep | Dokuz ay: *"Forex'te arz-talep işlem biçimi yapman gereken şey değil"* | Haziran V4: **"emtialarda gerçek arz-talep faktörleri var"** |
| Temeller | Seri boyunca teknik odak | Haziran V4/V18: **"emtialar için temeller gerekli"**, CAN SLIM |
| İsabet iddiası | Nisan V6: **"günlük grafikte neredeyse %98 isabetliyim"** | Haziran V19: **"yanıldığımı görebilirsin, iyi gitmediğim dönemler göz kamaştırıcı biçimde belirgin"** |
| Otorite | V19: *"Ben öğretmiyorsam önemli değildir"* | Aynı video: *"siyah-beyaz değil"*, *"ellerimi cebimde tutuyorum"* |
| Mevsimsellik | Ocak V10–V12: **ölçülemez** (yöntem yok, başarısızlıklar tek tek gerekçelendirilmiş) | Haziran V3/V15: **yöntem verilmiş, başarısızlıklar sadece not edilmiş** |

### Aritmetik denetimi — on ayda ilk kez tam

| İddia | Denetim | Sonuç |
|---|---|---|
| Tahvil: 32 tick = 1.000 USD | 32 × 31,25 = **1.000** | **Doğru** |
| Tahvil: 16 tick = 500 USD | 16 × 31,25 = **500** | **Doğru** |
| ES: 4 tick = 1 puan = 50 USD | 4 × 12,50 = **50** | **Doğru** |
| ES kaldıraç ≈ 122.000 USD | 50 × ~2.440 = **122.000** | **Doğru** |
| JPY net pozisyon 67.024 | 143.450 − 76.426 = **67.024** | **Doğru** |
| Mısır 30 sent = 1.500 USD | 5.000 kile × 0,30 = **1.500** | **Doğru** |
| Soya ≈ 4.500 USD | 5.000 × 0,90 = **4.500** | **Doğru** |
| Pamuk 10 sent = 5.000 USD | 50.000 lb × 0,10 = **5.000** | **Doğru** |
| Besi sığırı > 19.000 USD | 50.000 lb × 0,38 = **19.000** | **Doğru** |
| Canlı sığır 12.000 USD | 40.000 lb × 0,30 = **12.000** | **Doğru** |
| Yağlık domuz ≈ 5.600 USD | 40.000 lb × 0,135 = **5.400** | **Doğru** (yuvarlama) |
| Gümüş > 7.000 USD | 5.000 oz × 1,40 = **7.000** | **Doğru** |
| Besi sığırı 1 handle = 500 USD | 50.000 lb × 0,01 = **500** | **Doğru** |
| SMT penceresi "dört buçuk saat" | 05:00–09:30 = **4,5 saat** | **Doğru** |
| CAN SLIM eşikleri | O'Neil'ın yayımlanmış kriterleriyle uyumlu | **Doğru** |

**On ayda ilk kez, bir ayda geçen her sayısal iddia doğru çıktı.**

Karşılaştırma: Şubat'ta üç hata (isabet eşiği, bileşik getiri, enstrüman etiketi); Mart'ta iki (Fibonacci 1,68, doğrulanamaz %76); Nisan'da bir aritmetik imkânsızlık (%77 > %76) ve dört kaynaksız yüzde; Mayıs'ta hesaplanmamış bir başabaş eşiği.

**Ve sebebi yapısal:** bu ayın sayıları **sözleşme spesifikasyonları** — icat edilmiş değil, borsa tarafından tanımlanmış. Hata yapmak için yer yok.

## BÖLÜM III — Değerlendirme

### Ölçmeye değer sekiz fikir, öncelik sırasıyla

**1. Terim yapısı ve spread ayrışması (V4) — kripto versiyonuyla.**
Serinin en doğrulanabilir içeriği: gözlemlenebilir fiyat serisi, sıfır seçim noktası, ve **literatürde desteklenen bir mekanizma** (backwardation/contango, roll yield).
**Ve senin verinde hazır:** `#014`'te funding oranını maliyet modelinden çıkarmıştın. Bu video, aynı seriyi **sinyal** olarak kullanmayı öneriyor.
**Ölçüm sırası:** (a) terim yapısı seviyesi → sonraki getiri, (b) terim yapısı **değişimi** + fiyat ayrışması, (c) spread büyüklüğü → sonraki hareket büyüklüğü.

**2. Endeks SMT, 05:00–09:30 penceresinde (V11, V14).**
On ayın en tanımlı SMT'si: üç adı konmuş enstrüman, sabit pencere, göreli uç karşılaştırması, doğal taban çizgisi, ve tek enstrümanda işlem.
**Ölçüm sırası:** (a) ayrışma sıklığı ve AM trend yönüyle ilişkisi, (b) **hangi endeksin ayrıştığına göre ayrıştır** — NQ'nun sektör bileşimi farklı olduğu için "sektör rotasyonu" alternatif açıklamasını elemek gerekiyor, (c) üç serinin korelasyonunu dönemsel ölç.
**Ve çıkışı saat tabanlı yap** (V14) — PD array hedefini ilk turda çıkar.

**3. İki katmanlı SMT taraması: endeks + Dow 30 (V16, V17).**
**Bu ayın örneklem sorununu çözen tek yapısı.** Endeks SMT tek başına yılda ~50 gözlem; hisse katmanı eklendiğinde **yılda ~1.500.** Senin 100 işlem eşiğinin çok üstünde.
**Zorunlu kontrol:** beta. Sinyalin ne kadarı ayrışmadan, ne kadarı hisse oynaklığından geliyor?
**Ve daraltma adımını çıkar** — "iki-dört şirkete daralt" tanımsız ve sonradan kazanan seçmeye açık.

**4. İkinci dokunuş sorusu — dört ayın açık çelişkisi.**
*Bir PD array'e ikinci ve üçüncü dokunuş, birincisinden farklı sonuç veriyor mu?*
Şubat V5 ve Haziran V8 "evet, birden çok kez"; Mart V4/V5 ve Haziran V13 "hayır, tükenmiştir." **Dört ay, dört yer, iki zıt cevap, tek koşu.**
Ve sonucu geniş: bu tek soru, dört ayın seviye kurallarının hangisinin geçerli olduğunu belirliyor.

**5. Açılış aralığı testi — üç enstrümanda tek kod (V6, V10, ve Nisan V3).**

| Enstrüman | Pencere | Gerçek gün | Taban çizgisi |
|---|---|---|---|
| Forex (CBDR, Nisan V3) | 14:00–20:00 | — | Rastgele 6 saatlik pencere |
| **Tahvil (ZB)** | **08:00–09:00** | 08:00–15:00 | **%14,3** |
| **Endeks (ES)** | **09:30–10:30** | 09:30–16:00 | **%15,4** |

Üçü aynı kalıp, üç farklı taban çizgisi, tek kod.
**Ve V7'nin geniş penceresi (08:00–12:00, taban %57) kontrol olarak eklenmeli** — dar pencerenin gerçekten bilgi taşıyıp taşımadığını o gösterir.

**6. Dört varlık sınıfı uyum skoru (V19) — ve üç rejim tanımıyla karşılaştırmalı.**
Dört seri, ikili yön, 0–4 arası bir tam sayı, ve sonraki dönemin trend gücüyle ilişkisi.
**Ve on ayda biriken rejim fikirlerinin tamamlanması:**

| Kaynak | Rejim tanımı |
|---|---|
| Senin range sistemin | Fiyat yapısı, beş koşul (Aşama 1'de RET) |
| Ocak V6 | İki serinin korelasyon işareti |
| Şubat V7 / Mart V8 | Oynaklık daralması (NR7) |
| **Haziran V19** | **Dört varlık sınıfı uyum skoru** |

Dördü tek çalışmada: hangi rejim tanımı, sonraki dönemin trend gücünü en iyi öngörüyor?

**7. Vade eğrisi ayrışması: ZB / ZN, 08:00–09:00 (V9).**
**Aralık V1'in yedi aydır açık duran zaman hizalaması boşluğunu kapatıyor.** İki kamuya açık seri, aynı borsa, aynı saatler, tanımlı pencere.
**Uyarı, ve Aralık'ta zaten kaydedilmişti:** iki seri çok yüksek korelasyonlu; ayrışmalar nadir olacak ve **örneklem sorunu doğuracak.** ZF (5 yıllık) eklenirse Aralık'ın orijinal üçlüsü tamamlanır.

**8. COT ve açık pozisyon normalizasyonu — aynı testin iki uygulaması (V1, V5).**
*Ham seri mi, referansa göre konum mu daha çok bilgi taşıyor?*
- COT: ham sıfır çizgisi / 6 aylık orta / 12 aylık orta
- Açık pozisyon: ham seviye / mevsimsel ortalamadan sapma

**Ve zorunlu:** COT'ta Salı-Cuma gecikmesi modellenmeli. Kripto notu: **COT taşınmıyor** (hedger sınıfı yok), **açık pozisyon taşınıyor** ve gecikmesiz.

**Ucuz olanlar:** açılış-kapanış saati koşullu ilişkisi (V12 — iki sayı, bir koşullu olasılık, sıfır yön varsayımı); daralma-genişleme testi (beş ayın beş ifadesi, tek çalışma); hacim ayrışması (sweep'e alt grup ekseni); tahvil ihale takvimi maskesi; Mayıs–Ekim risk ölçekleme kuralı (V15).

### Ölçmeye değmeyenler

**Emtia mevsimsel pencereleri, tek başına (V3).** Yılda bir gözlem; 40 yıl = 40 gözlem. Senin eşiğinin iki mertebe altında. **Ama tersine okuma kuralının ölçülebilir versiyonu** — mevsimsele ters hareket, göreli güç öngörüyor mu — ikinci videonun liderlik testiyle **aynı ölçümdür** ve o alınmalı.

**Sekiz projekte edilen aralık taksonomisi (V13).** Seçim kuralını çıkar (AM üst zaman dilimi array'ine dokundu mu — PM öncesi kararlaştırılabilir), taksonomiyi bırak.

**CAN SLIM (V18) — bu ay için.** Yedi kriter de sayısal ve bağımsız olarak test edilmiş; ama **nokta-zamanlı temel veri** gerektiriyor (düzeltilmiş kazanç kullanmak anakronizm olur, `#013`), ve **kriptoya taşınmıyor.** Alınacak olan kriterin kendisi değil, **"hızlanma" fikri:** seviye yerine artış hızının artması — ve o, fiyat verisine uygulanabilir.

**"Ben öğretmiyorsam önemli değildir" (V19).** İçeriğe dair hiçbir bilgi taşımıyor.

**Mekanizma anlatıları.** *"Açgözlülük ve emirlerin salt büyüklüğü her zaman bu kalıbı yaratacak"*, *"ticari boğa piyasası"*, *"akıllı paranın ayak izleri."* On ayda tekrarlanan ayrım: **kural anlatıdan bağımsız çalışıyor.**

### On ayın toplamı

| Ay | Karakter | Oran |
|---|---|---|
| **1 — Eylül 2016** | Kurulum kavramları; sekiz tanım, yedisinin klasik karşılığı | Düşük |
| **2 — Ekim 2016** | Para yönetimi; doğru ama metoda özgü değil | Düşük |
| **3 — Kasım 2016** | En ölçülebilir fikirler kavram yığınıyla iç içe | 4/8 |
| **4 — Aralık 2016** | Tam tanımlar; ölçülebilirlik ilk kez mümkün | 7/14 |
| **5 — Ocak 2017** | Yeni kategoriler + en zayıf blok (mevsimsellik) | 9/17 |
| **6 — Şubat 2017** | Birleştirme; akış bileşenlerinden daha az ölçülebilir | 2/8 |
| **7 — Mart 2017** | Zaman ayı; somut iddialar takvim ve saat üzerine | 3/8 |
| **8 — Nisan 2017** | Saatin ayı; serinin en mekanik gün içi içeriği | 7/8 |
| **9 — Mayıs 2017** | Ölçek küçüldü, R:R 1:1'e indi; ilk olumsuz sonuç bildirimi | 4/8 |
| **10 — Haziran 2017** | **Dört varlık sınıfı. Serinin en ölçülebilir ve en az özgün ayı — ve ilk kez ikisini de kendisi söylüyor** | **16/19** |

### Yüz on videoda ilk kez geri çekilen bir öğreti

On ay boyunca bu belgelerde kaydedilen cümle şuydu: *"Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."*

Mart bir yüzde verdi, Nisan üç tane daha — hepsi kaynaksız, ikisi aritmetik olarak bir arada duramıyor. Mayıs bir yöntemi beğenmediği için terk etti.

**Haziran farklı bir şey yapıyor:**

> *"O şeyleri o zaman öğreterek **çok çok yanılmışım. Ne yaptığımı bilmiyordum.**"*

Bu hâlâ bir istatistik değil. Ama **bir doğruluk düzeltmesi**, ve gerekçesi teknik olarak doğru — üstelik **neden yanıldığı** da doğru teşhis ediliyor: ortak bir sebep (90'ların kuraklığı), sahte bir öncü ilişki gibi görünmüştü.

Beş aylık ilerleme:

| Ay | Hareket | Cinsi |
|---|---|---|
| Ocak V14 | *"Kanıt sunulmayacak"* | Ret |
| Nisan V8 | Ödev bir başarısızlık örneği istiyor | Yöntem |
| Mayıs V6 | *"Londra kapanışında artık işlem yapmıyorum"* | Tercih |
| **Haziran V3** | **"Öğreterek çok çok yanılmışım"** | **Doğruluk** |
| **Haziran V11** | **"Büyük bir örneklem büyüklüğüne bakman önemli"** | **Metodoloji** |

Beş ay, beş adım, hepsi aynı yöne — ve hiçbiri bir istatistik değil.

### Kapanış gözlemi

Beş ayın kapanışlarında biriken ölçütler:

- **Aralık:** belirsizlik merkezdeyse ölçülemez, kenardaysa çekirdek test edilebilir kalır
- **Ocak:** ölçülebilirlik **verinin cinsine** bağlı — takvim tartışılmaz
- **Şubat:** birleşim belirsizliği ortalamıyor, **çarpıyor**
- **Mart:** ilk soru, girdinin bir **tarih mi yoksa bir yorum mu** olduğudur
- **Nisan:** mekanik olmak, **ölçülmüş olmak demek değil**
- **Mayıs:** bir kural mekanikleştikçe **aritmetiği bağlayıcı** hale gelir

**Haziran bu dizinin en net doğrulamasını veriyor, ve bir bedelini gösteriyor.**

Bu ay serinin en yüksek ölçülebilir oranını üretiyor — 16/19 — ve sebebi Mart'ın ölçütünün en uç uygulaması: **bu ayın girdilerinin neredeyse tamamı ya bir veri kaynağından okunuyor ya bir sözleşme spesifikasyonundan geliyor.** CFTC raporu bir yorum değil. Spread bir fiyat serisi. Tick değeri borsa tarafından tanımlı. Seans saati bir saat. Üç endeks arasındaki ayrışma iki pivot karşılaştırması.

**Ve bedel şu: bu ayın ölçülebilir içeriğinin neredeyse hiçbiri bu seriye ait değil.**

COT normalizasyonu Williams'ın. Açık pozisyon tablosu ders kitabı. Backwardation vadeli piyasa yapısı. CAN SLIM O'Neil'ın — ve video *"bu öğretinin %80'i"* diyor. Mevsimsellik Moore Research'ün. Risk on/risk off standart makro terminolojisi.

On ay boyunca kaydedilen örüntü şuydu: **doğru olan kısımlar herkesin bildiği kısımlar, özgün olan kısımlar ölçülmemiş kısımlar.** Haziran bu örüntüyü kırmıyor — **en saf halini gösteriyor.** Fark şu ki bu ay, seride ilk kez, **hangi kısmın kime ait olduğunu kendisi söylüyor.**

Ve buradan kalan iki ay için ek bir ölçüt çıkıyor, ve bu, ölçüm sırası hakkında:

> **Bir fikrin ölçmeye değer olup olmadığı, kime ait olduğundan bağımsızdır — ama kime ait olduğu, onu ölçmeden önce ne kadar okuman gerektiğini belirler.**

Bu ayın en iyi fikirlerinin (terim yapısı, açık pozisyon, göreli güç) **onlarca yıllık literatürü var**, ve o literatür taban çizgisini, bilinen sınırlarını ve tipik etki büyüklüğünü zaten söylüyor. Ölçmeye sıfırdan başlamak gerekmiyor — **başkalarının nerede durduğunu bilerek başlamak gerekiyor.**

Serinin özgün kısımları için böyle bir zemin yok, ve bu yüzden onlar sıfırdan ölçülmek zorunda. Haziran'ın gösterdiği şey, bu iki kategorinin **aynı belgede yan yana durabildiği** — ve hangisinin hangisi olduğunu bilmek, ölçüm bütçesinin nereye gideceğini belirliyor.

---

# BÖLÜM IV — Kesinlikle bilmen gerekenler

Haziran dört ayrı varlık sınıfını işliyor, ve her modülün kendi araçları var. Sözlük modül modül düzenlendi. Sonda dört modülün ortak iskeleti.

---

# A. EMTİA MODÜLÜ

## A1. COT — ham veriden hedging programına

### Veri nereden alınır

| Ne | Nereden | Nasıl |
|---|---|---|
| **Ham COT verisi** | **www.cftc.gov** | **Futures Contract only, short format**, CME altında |
| **Grafik** | **barchart.com** | Günlük grafik, altta **net trader position line chart**, en az **bir yıllık** veri |

**Opsiyon pozisyonlarına bakılmıyor:** *"onlarla hiç ilgilenmiyorum, sadece vadeli pozisyonlara bakıyorum."*

### Grafiği okuma

| Çizgi | Kim | İzlenir mi |
|---|---|---|
| **Kırmızı** | **Ticariler (commercials)** | **Evet — tek izlenecek çizgi** |
| Yeşil | Büyük işlemciler | *"Her zaman kırmızının tam tersi, umursamıyoruz"* |
| Mavi | Küçük spekülatörler | *"Sokak parası"* |

### Net pozisyon hesabı

Örnek (Japon Yeni):

| Kalem | Sözleşme |
|---|---|
| Ticari uzun | **143.450** |
| Ticari kısa | **76.426** |
| **Net** | **67.024 uzun** |

Pozitifse net uzun, negatifse net kısa.

**Ama:** *"Bu, mevcut hedging programları hakkında bize **hiçbir şey söylemiyor.** Daha derine bakmamız gerekiyor."*

### İki katman

| Katman | Ne |
|---|---|
| **Alım/satım programı** (makro) | Ticariler **sıfır çizgisinin üstünde** → alım programı; **altında** → satış programı |
| **Hedging programı** (kısa vadeli) | Program ne olursa olsun içinde alım da satım da olur |

> *"Uzun vadeli bir **satış programı**, içinde hâlâ **boğa hedging alım programları** barındırabilir."*

### Yöntem — dört adım (ayın merkezî prosedürü)

1. Ticarilerin net pozisyonunun **son 6 ay** ve **son 12 aydaki** en yüksek ve en düşük değerini bul
2. O aralığı **ikiye böl** → **yeni bir baz çizgisi**
3. **Sıfır çizgisi yok sayılır**; konum bu yeni baz çizgisine göre okunur
4. Ortaya çıkan yerel alım/satım patlamalarına **"nodül" (nodule)** denir

**Formül:** `(mevcut − N dönem min) / (N dönem maks − N dönem min)`, eşik **%50**. **Sıfır seçim noktası.**

### Uçlar kuralı

> *"**Dört yıllık, iki yıllık ya da 12 aylık bir uca** ulaşırsak, genellikle devrede uzun vadeli bir **trend dönüşü** vardır. O uçlara ulaşıldığında **kısa vadeli hedging programını ıskonto ederiz.**"*

**Kaynak:** *"Williams 60'larda ve 70'lerde bunu çözmüştü — **ama yalnızca uçlarda.**"*

**Haziran'ın gerçek eklentisi:** aynı normalizasyonu **uç olmayan bölgede**, yerel bir salınım göstergesi olarak kullanmak.

### Üçlü harman

1. **Program:** ticariler sıfır çizgisinin üstünde mi altında mı
2. **Hedging programı:** son 6 ve 12 aylık aralıktaki konum
3. **Kurumsal emir akışı:** fiyat ne söylüyor

Yön ayrımı: boğa emir akışında **iskonto PD array'ler** net uzun ticari okumalarla harmanlanır; ayıda **prim PD array'ler** net kısa okumalarla.

**Dikkat.** Üçüncü ayak (**"kurumsal emir akışı"**) on aydır tanımsız. **Ama ilk iki ayak üçüncüsü olmadan da ölçülebilir.**

**Ve zamanlama uyarısı — video hiç anmıyor:** COT verisi **Salı günkü pozisyonları gösterir ve Cuma yayımlanır** — **üç günlük gecikme.** Ölçerken modellemezsen sonuç geçmişte hep iyi görünür.

---

## A2. Liderlik ve sempatik hareket

### Emtia sepeti — takip edilen evren

| Grup | Enstrümanlar |
|---|---|
| Tahıllar | Mısır, buğday, soya |
| Canlı hayvan | Besi sığırı, yağlık domuz, canlı sığır |
| Gıda | Kakao, portakal suyu, kahve, şeker |
| Lif | Pamuk |
| Borçlanma | 30 yıl, 10 yıl, 5 yıl |
| Para birimleri | AUD, CAD, JPY, GBP, CHF, EUR, NZD |
| Metaller | Altın, gümüş, bakır |
| Enerji | Ham petrol |

**Dışarıda:** yulaf, kanola, kereste, paladyum, platin — *"çok ince piyasalar."*

### Temel çerçeve

> **"Dolar endeksi kral. Doların ne yaptığı diğer her şeyin tonunu belirler."**

### Liderlik tespiti — ayın merkezî kuralı

> *"Aradığımız şey, **dolar endeksinin daha yüksek tepe yaptığı bir zamanda daha düşük dip yapmayı BAŞARAMAYAN** bir piyasa. Bu temelde bir **SMT ayrışması.**"*

| | Lider piyasa | Sempatik piyasa |
|---|---|---|
| **Ne yapar** | Daha düşük dip **yapamaz** | Daha düşük dip **yapar**, sonra sempatiyle yükselir |
| **Karakter** | En güçlü, en hızlı | *"Daha uyuşuk"*, hedefe ulaşabilir ama zayıf |

**Teyit karakteristikleri:** kısa vadeli tepeler kırılıyor · düşüşler **sığ** · yükseliş mumları düşüşlerden **belirgin biçimde büyük**

**Neden ölçülebilir.** Tanım tamamen mekanik (iki seri, iki pivot, karşılaştır), ve **sıralama üretiyor** — hangi enstrüman lider. Karşılaştırma grubu doğal: lider seçilenlerin sonraki N günlük getirisi vs sempatik olanlarınki.

---

## A3. Prim ve carrying charge piyasaları

### İki yapı

| Yapı | Tanım | Anlamı |
|---|---|---|
| **Carrying charge** (normal) | Yakın ay **daha ucuz** | Normal. *"Parabolik hareket olasılığı çok daha düşük"* |
| **Prim** | Yakın ay **daha pahalı** | **Talep yüksek, arz kıt** |

**Güçlü prim tespiti:** *"Bir sonraki aya bakmakla yetinme — **sonraki birkaç aya** git."*

**Ticari boğa piyasası mantığı:**
> *"Ticariler **şu anda teslim almak** istiyorlar. İleride beklenen carrying charge yerine **şimdi prim ödemeye razılarsa**, temel olarak bir şeyler olduğunu biliyorlar."*

### Kritik terminoloji uyarısı

> *"Emtialarda **prim** dediğimde bu, yakın ayın bir sonraki aya göre spesifik fiyatlamasıdır. **Bunu prim ve iskonto PD array'leriyle KARIŞTIRMA.**"*

### Spread grafiği — barchart.com'da

1. Chart type → **spread chart**
2. **First symbol:** emtia + **yakın ay**
3. **Second symbol:** aynı emtia + **bir sonraki ay**
4. **Operatör: eksi (−)** — *"bu çok önemli, farkı verecek"*
5. Draw

**Sıfır çizgisinin üstü = yakın ayın primi.**

**Neden ölçülebilir.** Vade yapısı **kamuya açık ve tartışmasız** — bir fiyat farkı. Ve **fiyat grafiğinden tamamen bağımsız.** Bu, seride nadir.

---

## A4. Açık pozisyon (open interest)

### Tanım

Her işlem günü sonunda katılımcıların elinde tuttuğu **toplam açık sözleşme sayısı.**

> *"**Hacim** bir fiyat trendinin arkasındaki baskıyı ölçerken, **açık pozisyon vadeli piyasaya para akışını ölçer.**"*

### Trendlerde — klasik tablo

| Fiyat | Açık pozisyon | İşaret |
|---|---|---|
| **Yükseliş** | **Artıyor** | **BOĞA** |
| **Düşüş** | **Artıyor** | **AYI** |
| **Yükseliş** | **Azalıyor** | **AYI** — akıllı para likidite ediyor |
| **Düşüş** | **Azalıyor** | **BOĞA** — *"kaybedenlerin arzı tükendiğinde düşüş biter"* |

> *"**Açık pozisyon büyük bir trendde artmaya devam ettiği sürece, devam etmesi için gerekli sponsorluğa sahip olacaktır.**"*

### Konsolidasyonlarda — videonun eklentisi

| Fiyat | Açık pozisyon | İşaret |
|---|---|---|
| **Konsolidasyon** | **Artıyor** | **AYI** |
| **Konsolidasyon** | **Azalıyor** | **BOĞA** |

Gerekçe: *"**Sokak parası uzun tarafı oynar.** Artan açık pozisyon, ticarilerin **kısa tarafı** aldığını gösterir."*

### Konumla birleştirme — kuralı test edilebilir kılan kısım

| Fiyat nerede | Açık pozisyon | Sonuç |
|---|---|---|
| Üst zaman dilimi **destek / iskonto array** | **Düşüyor** | **BOĞA** |
| Üst zaman dilimi **direnç / prim array** | **Yükseliyor** | **AYI** |

**Veri kaynakları:** barchart.com (toplam), **CRB Trader** ve **pricecharts.com** (mevsimsel ortalamayla birlikte — noktalı çizgi çok yıllı ortalama, düz siyah çizgi gerçek).

**Kaynak atfı — dürüst:** *"Onun açık pozisyon kavramları **temelde yaygın olarak bilinen** şeyler. Burada öğreteceğim her şey **temelde Larry Williams'tan öğrendiğim şey.**"*

---

# B. TAHVİL MODÜLÜ

## B1. Enstrüman ve seans yapısı

| Kalem | Değer |
|---|---|
| **Enstrüman** | 30 yıllık ABD hazine tahvili vadelisi, **ZB**, CBOT |
| Teslim ayları | **Mart (H), Haziran (M), Eylül (U), Aralık (Z)** |
| Sembol | **ZBU17** = Eylül 2017 |
| **Minimum tick** | **31,25 USD / sözleşme** |
| **Tam handle** | **32 tick = 1.000 USD** |

**Seans yapısı (NY saati):**

| Öğe | Zaman |
|---|---|
| **En yüksek hacim** | **08:00 – 09:30** |
| **Gerçek gün** | **08:00 – 15:00** |
| **Açılış aralığı** | **08:00 – 09:00** |
| **Gece / Londra** | **02:00 – 05:00** — *yalnızca referans* |
| **New York AM** | **08:00 – 12:00** |
| **New York öğle arası** | **11:00 – 13:00** |
| **New York PM** | **12:00 – 15:00** |

## B2. Açılış aralığı kuralı

> *"**08:00 ile 09:00 arasındaki açılış aralığı, tahvil piyasasının günün tepesini ya da dibini oluşturma eğilimindedir.**"*

**Aralık nasıl tanımlanır:** öncelikle **gövdeler**, ama **fitiller de** dahil; ve **08:00'ın hemen soluna düşen önceki tepe/dipler.**

**Sinyal zamanlaması:** *"Sinyallerin **08:20'de ya da sonrasında** oluşmasını severim. Hedef zaman **08:20 ya da CME açılışı.**"*

**Neden ölçülebilir — ve taban çizgisi hesaplanabilir.** Gerçek gün 08:00–15:00 = **7 saat.** Düzgün dağılımda bir saatlik pencerenin beklenen payı **%14,3.** İddia bunun belirgin üstünde olduğu.

**Karşılaştır:** AM seansı (4 saat) için taban **%57** — yani o iddia **çok daha az bilgi taşıyor.** İkisini birlikte ölçmek, hangisinin gerçek olduğunu gösterir.

## B3. Hacim fiyattan önce gelir

**Yeni olan bu — gerçek hacim ilk kez elde.**

| Gözlem | Okuma |
|---|---|
| Fiyat **daha düşük dip** yapıyor, hacim **daha düşük** | Satış baskısı yok → **stop koşusu** → yükselir |
| Fiyat **daha yüksek tepe** yapıyor, hacim **azalıyor** | Ralli zayıf → **dönüş** beklenir |

> *"İdeal olarak en yüksek tepeye giden harekette hacim çubuğu **daha yüksek** olmalıydı."*

**Neden değerli.** On ay boyunca "hacim gövdelerde" gibi **yanlış** hacim iddiaları vardı. Burada **gerçek hacim** var (vadeli piyasa), ve kullanım biçimi klasik ve doğru.

## B4. Gerçekçi tahvil hedefleri

| Hedef | Değer |
|---|---|
| Gün içi, makul | **5 – 8 tick** |
| İyi bir gün | **16 tick = 500 USD** |
| Büyük aralıklı gün | **32 tick = 1.000 USD** — *"normal olan bu değil"* |
| Konsolidasyon günü scalp'ı | **5 – 10 tick** |

**Kaçınma:** FOMC, faiz raporları, NFP öncesi. *"Likidite kurur, piyasa **gap** yapacak, ve muhtemelen pozisyonuna karşı."*

**Ve tahvil ihale günlerinde AM seansında işlem yok.**

## B5. Konsolidasyon günü öngörücüleri — beşi, dördü takvimden

| # | Öngörücü | Tipi |
|---|---|---|
| **1** | Haftanın ilerleyen günlerinde yüksek/orta etkili ABD raporu | **Takvim** |
| **2** | Üst zaman dilimi prim/iskonto array'ine ulaşıldıktan sonra | Yorum |
| **3** | Üst zaman dilimi salınımının **dengesine** ulaşıldığında | Aritmetik |
| **4** | **ABD banka tatilleri** öncesi | **Takvim** |
| **5** | **Tahvil ihale günleri** ve öncesi | **Takvim** |

**Üçü tamamen takvimden okunuyor ve aylar öncesinden bilinebiliyor.** Bu, Mart ve Nisan'daki takvim maskesi fikrinin genişletilmiş hali; **tahvil ihale takvimi yeni bir bileşen.**

**Ve denge hakkında bir uyarı:** *"Dengeye geri çekildiğimizde **her zaman anında bir tepki bekleme** — o seviyeyi bazen **birden fazla kez** çalışacaklar."*

## B6. Trend günü kurulumunun üç bileşeni

1. **Oynaklık filtresi:** günlük aralıklar küçülüyor
2. **Konum:** yakın zamanda bir **iskonto** (yukarı) ya da **prim** (aşağı) array'ine işlem görülmüş
3. **Katalizör:** ekonomik takvim **08:30 NY**'de yüksek/orta etkili ABD raporu gösteriyor

Ve: *"Açılış aralığı **12 tick veya daha azsa** genellikle bir genişleme hareketi olacak."*

## B7. AM/PM kuralı

> *"Günün aslan payının AM seansı tarafından tamamlandığını biliyorsak, **New York öğle arasından önce düz pozisyona geçebiliriz ve PM'de hiç işlem yapmayabiliriz. İkinci porsiyon için geri gelme.**"*

**PM'de işlem yalnızca** AM seansı **henüz bir stop koşusu yapmadıysa** — yani dokunulmamış bir likidite havuzu varsa.

**Ve faiz sürücüsü (14:00) olan günlerde PM'de işlem yok** — *"oynaklık ne kadar iyi görünürse görünsün, güven bana, sadece kaçın."*

---

# C. ENDEKS MODÜLÜ

## C1. Enstrüman ve seans yapısı

| Kalem | Değer |
|---|---|
| **Enstrüman** | E-mini S&P 500, **ES** (*"spoos"*) |
| Format | **ESU17** = Eylül 2017 |
| **Tick değeri** | **12,50 USD** |
| **Tick büyüklüğü** | **0,25 puan** |
| **Bir puan** | 4 tick = **50 USD** |
| Kaldıraç | **50 USD × endeks seviyesi** |

Diğer iki takip edilen: **NASDAQ e-mini (NQ)**, **Dow mini (YM)**.

**Seans yapısı (NY saati) — üç endeks için aynı:**

| Öğe | Zaman |
|---|---|
| **En yüksek hacim** | **09:30 – 10:00** |
| **Gerçek gün** | **09:30 – 16:00** |
| **Açılış aralığı** | **09:30 – 10:30** |
| **AM seansı** | **09:30 – 12:00** |
| **Öğle arası** | Nominal **12:00 – 13:00**; **11:00 kadar erken, 14:00 kadar geç** |
| **PM seansı** | **13:00 – 16:00** |
| **PM ekstremum penceresi** | **15:00 – 16:00** |

**Zaman dilimi uyarısı:** barchart.com grafikleri **merkez saatte** — grafikte 08:30–09:30 görünen şey aslında NY **09:30–10:30.**

## C2. Açılış aralığı ve genişletilmiş aralık kuralı

> *"**09:30 – 10:30 açılış aralığı, günün tepesini ya da dibini oluşturma eğilimindedir.**"*

**Genişletilmiş aralık kuralı:**
> *"Açılış aralığı **geniş** olduğunda, günün ilerleyen saatlerinde tepenin ya da dibin **ihlal edilmesini** ararız. **Uzatılmış aralıklar bize geri dönülecek bir aralık ve karşı uçtaki stopları arama imkânı verir.**"*

## C3. Açılış aralığı – kapanış saati ilişkisi — ayın en zarif hipotezi

> *"İlk saat günün **tepesini** yaratıyorsa, **son saat (15:00–16:00) genellikle DİBİ yaratır.**"*

**Neden zarif:**
- İki sabit zaman penceresi
- Koşullu bir iddia (eğer A ise B)
- **Tamamen yanlışlanabilir** — ya oldu ya olmadı
- Taban çizgisi hesaplanabilir

## C4. Endeks SMT — ayın en tanımlı SMT kuralı

**Karşılaştırılan:** **ES, NQ, YM** arasındaki göreli tepe ve dipler.

| Seans | Pencere (NY) |
|---|---|
| **AM için** | **05:00 – 09:30** |
| **PM için** | **12:00 – 15:00** |

**Kural:**

| Emir akışı | Neye bakılır | Sinyal |
|---|---|---|
| **Boğa** | Göreli **dipler** | Üçü aşağı giderken **biri daha düşük dip yapamıyor** |
| **Ayı** | Göreli **tepeler** | Üçü yukarı giderken **biri daha yüksek tepe yapamıyor** |

**Kritik netleştirme:**
> *"**Onları kale direği gibi, sınırlar gibi düşünme** — belirli olarak o tepeleri ve dipleri yaratmıyorlar. **O pencere içindeki göreli dipler ve tepeleri** arayıp karşılaştıracaksın."*

**Tek enstrümanda işlem:**
> *"Bu ayrışmaları **e-mini S&P'de** işlem sinyali olarak kullanıyorum. **Dow'u ya da NASDAQ vadelilerini işlem yapmaya çalışmıyorum.**"*

**Ve ayrışan endeks ES olmak zorunda değil:** *"NASDAQ aşağı gitmeyi başaramazsa, bu tek başına S&P'nin ralli yapması gerektiğini destekler."*

**Neden bu, on ayın en tanımlı SMT'si.** Üç enstrüman **gerçekten farklı** (farklı sektör bileşimleri), pencere sabit, karşılaştırma aritmetik. Forex'teki dolar endeksi SMT'sinin bağımsızlık sorunu burada yok.

**Ve videonun kendi örneklem vurgusu:**
> *"**Bu yüzden büyük bir örneklem büyüklüğüne bakman önemli.**"*

## C5. AM ve PM trendleri

| Trend | Pencere | Karakter |
|---|---|---|
| **AM trendi** | 09:30 – 12:00 | Gecenin devamı ya da **09:30'dan doğrudan dönüş.** Bitişi 10:30–11:00 |
| **PM trendi** | 13:00 – 16:00 | AM'in devamı ya da **gün içi dönüş.** Başlangıç tipik **14:00** |

> *"Öğleden sonraki **ölçülmüş hareketler, AM seansında görülenden daha hızlı olma eğilimindedir.**"*

**Öğle arası uzunluğu koşullu:** sabah hızlıysa işlemciler öğle arasında çalışır → **kısa arada;** sabah uyuşuksa **11:00'den 14:00'e** kadar uzayabilir.

## C6. Sekiz projekte edilen aralık

| # | Profil | Koşul |
|---|---|---|
| **1** | **İki seans yükseliş kapanışı** | Emir akışı boğa, **karşıt array'lere henüz işlem görülmemiş** |
| **2** | **İki seans düşüş kapanışı** | Aynası |
| **3** | **AM rallisi, PM dönüşü** | Boğa **ama fiyat bir prim array'in altında** — AM oraya çarpar |
| **4** | **AM düşüşü, PM dönüşü** | Aynası |
| **5** | **Konsolidasyon, AM rallisi, PM düşüşü** | Emir akışı **nötr/belirsiz**, ve **haber yok** |
| **6** | **Konsolidasyon, AM düşüşü, PM rallisi** | Aynası |
| **7–8** | Varyant: **PM basitçe konsolide olur** | Tüm hareket sabah yapılmış |

### Seçim kuralı — videonun en mekanik kısmı

> *"Öğle arası tepelerini mi yoksa gün içi tepeyi mi süpürecek? **Bu, hangisinin bir prim array olduğuna bağlı.**
> AM seansının çarptığı bir üst zaman dilimi prim array'i **varsa** → oraya geri gitmeyecek (*"o seviyeyi zaten savundular"*), sadece **öğle arası tepelerini** süpürür.
> **Yoksa** → öğleden sonra **gün içi tepeyi** süpürüp döner."*

### Devam kuralı

> *"PM trendi **yeniden yükselebilir** — eğer AM'in ralli yaptığı iskonto array'i bir **üst zaman dilimi** iskonto array'ine eşitse. **Filtre şu: 4 saatlik/günlük veya daha üstü bir array değilse, içinden geçip aşağı gitmesi beklenir.**"*

### Kapanış çerçevesi

> *"Endeksler **stop arar.** Üst zaman diliminde trend edebilirler, ama **gün içi bazda her şey likidite ve stopların nerede olduğuyla ilgili. Bu bir işlemci piyasası.**"*

## C7. Endeks tutma kuralı — zaman, fiyat değil

> *"Saat sadece 14:00 ise ve lehimize birkaç handle görmüşsek — **o kârları masadan almak konusunda agresif olma**, çünkü günün saatinin daha yüksek bir teslimat seviyesine ulaşmasına izin vermek istiyorsun. **Kapanışa doğru ne kadar çok tutarsan, daha fazla aralık elde etme fırsatın o kadar artar.**"*

---

# D. HİSSE SENEDİ MODÜLÜ

## D1. Evren ve kaynak

| Kalem | Değer |
|---|---|
| **Evren** | **Dow Jones 30** — *"ihtiyacın olan tüm hisse işlemlerini sadece bu listeden yapabilirsin"* |
| **Mevsimsellik kaynağı** | **Moore Research / Steve Moore** |
| **Örneklemler** | **20 yıl, 15 yıl, 5 yıl** ortalamaları |

## D2. Yılın üç bölümü

| Dönem | Karakter |
|---|---|
| **Yılın ilk yarısı** | **Yüksek büyüklük** — çok oynaklık, **yönlü sürülen**, genelde boğa |
| **Mayıs – Ekim** | **DÜŞÜK BÜYÜKLÜK DÖNEMİ** |
| **Son çeyrek** | Boğa |

**Düşük büyüklük kuralı:**
> *"Mayıs'tan Ekim'e **çok daha az yönlü sürülen** piyasalar göreceksin. **İşlem yapacaksan çok daha az kaldıraç kullan; opsiyon yapacaksan çok daha az aktivite yap.**"*

**Odak pencereleri:** **Ekim – yıl sonu** ve **Şubat – Mayıs.**

## D3. Ay ay Dow mevsimselliği

| Ay | Eğilim |
|---|---|
| Ocak | **Ayı** |
| Şubat | **Boğa** |
| Mart | Konsolidasyon |
| Nisan | **Boğa** |
| Mayıs | **Ayı** |
| Haziran | Konsolidasyon, ayı biten |
| Temmuz | **Boğa** |
| Ağustos | Konsolidasyon |
| Eylül | İlk yarı boğa, **ikinci yarı ayı** |
| Ekim | **Son çeyreğin dibi** |
| Kasım | **Boğa** |
| Aralık | **Noel Baba rallisi** |

**Düşük olasılıklı aylar açıkça:** **Mart, Haziran, Ağustos.**

## D4. Ayı ayların asıl değeri — ayın en iyi metodolojik cümlesi

> *"Mevsimsel eğilim, hisselerin **satın alınıp tutulmasına** yönelik altta yatan eğilimi vurguladığı için en güçlü **alım tarafı** eğilimlerini gösterecek. Ama **ayı aylar** — son 20 yılda borsa yükselirken bile Mayıs'ın, Eylül'ün ikinci yarısının ve Ocak'ın genellikle ayı olduğunu görüyorsak — o aylar, **altta yatan boğa piyasalarında bile ayıysa, ayı piyasalarında agresif satış anlamına gelebilir.**"*

**Neden değerli.** Bu, mevsimsellik verisinin **yapısal yanlılığını** kendisi tespit ediyor: boğa dönemde ölçülmüş bir seride ayı görünen aylar, gerçekten güçlü bir sinyaldir.

**Ve Ocak'ta olmayan üç düzelme bu ayda var:**
1. **Anti-kiraz-toplama tavrı** — karşı örnekler peşinen kabul ediliyor
2. **Düşük olasılıklı aylar açıkça adlandırılıyor** (Mart, Haziran, Ağustos)
3. **Üç örneklem** karşılaştırılıyor (20/15/5 yıl)

**Ama bir bağımsızlık sorunu duruyor:** 15 ve 5 yıllık ortalamalar, 20 yıllığın **alt kümesi.** Uyuşmaları teyit değil, **tanım gereği beklenen.**

## D5. İzleme listesi kurma — iki filtre

| | **Alım listesi** | **Satış listesi** |
|---|---|---|
| **Filtre 1** | Borsa ralli yapmaya hazır mı? | Borsa düşmeye hazır mı? |
| **Filtre 2** | Boğa aylarda **daha yüksek dip** yapan hisseler | Ayı aylarda **daha düşük tepe** yapan hisseler |
| **Pencere** | **Şubat–Mayıs**, **Ekim–Ocak** | **Ocak**, **Mayıs–Temmuz** |
| **Daraltma** | **İki ile dört şirkete** | **İki ile dört şirkete** |

**Merkezi kural (satış tarafı):**
> *"Kurumlar tarafından agresif biçimde satılan liderlik hisseleri, ayı aylarda **üç ana endeks ralli yaparken — ta ki biri karşılaştırmalı olarak daha yüksek tepe yapmayı başaramayana kadar — yükselmeyi başaramayan** hisseler olarak bulunacaktır."*

## D6. Anti-kiraz-toplama kuralı — on ayda ilk

> *"Burada bir mum var, onun hakkında bir argüman yapabilirdim **ama yapmayacağım. Sadece diyeceğiz ki ayrışma yoktu — çünkü kurallar şu: BELİRGİN DEĞİLSE, SMT'DE AYRIŞMA YOKTUR.**"*

**Neden önemli.** On ayda kaydedilen **tek açık anti-kiraz-toplama kuralı**, ve önemli olan yönü: sinyal **bulmaya karşı** bir önyargı koyuyor.

**Ve ölçüm için doğrudan sonucu var:** "belirgin" hâlâ öznel, ama **vekili kolay** — ayrışmanın büyüklüğü için bir eşik (ör. dip farkı / ATR). O eşik takıldığında kural tam mekanik olur, **ve eşiğin kendisi taranabilir.**

---

# E. Dört modülün ortak iskeleti

On dokuz videonun tamamı aynı üç soruyu farklı varlık sınıflarında soruyor.

## E1. Ortak yapı

| Soru | Emtia | Tahvil | Endeks | Hisse |
|---|---|---|---|---|
| **1. Yön nereden?** | COT orta çizgisi + dolar endeksi | Faiz ortamı + üst zaman dilimi array | Endeks SMT | Mevsimsellik + endeks SMT |
| **2. Ne zaman?** | Mevsimsellik + açık pozisyon | **08:00–09:00** açılış aralığı | **09:30–10:30** açılış aralığı | Ay bazlı pencereler |
| **3. Teyit nereden?** | Prim/carrying charge, açık pozisyon | **Hacim ayrışması** | **Üç endeks ayrışması** | Daha yüksek dip / daha düşük tepe |

## E2. Ortak açılış aralığı fikri

Üç modülde de aynı yapı, farklı saatlerle:

| Varlık | Açılış aralığı | Gerçek gün | Taban çizgisi |
|---|---|---|---|
| **Tahvil** | **08:00 – 09:00** | 08:00 – 15:00 (7 saat) | **%14,3** |
| **Endeks** | **09:30 – 10:30** | 09:30 – 16:00 (6,5 saat) | **%15,4** |
| **Forex (CBDR, Nisan)** | 14:00 – 20:00 | 00:00 – 15:00 | — |

**Üçü de aynı hipotezi test ediyor:** *günün ekstremumu belirli bir saat penceresinde oluşuyor mu?* Ve üçünde de **taban çizgisi hesaplanabilir.**

## E3. Ortak ayrışma fikri

| Modül | Neyle neyi karşılaştırıyor | Bağımsızlık |
|---|---|---|
| Emtia (V2) | Emtia ↔ dolar endeksi | **İyi** |
| Tahvil (V6) | **Fiyat ↔ hacim** | **İyi** — farklı veri türü |
| Endeks (V11–V12) | ES ↔ NQ ↔ YM | **En iyi** — farklı sektör bileşimleri |
| Hisse (V15–V17) | Hisse ↔ üç endeks | **İyi** |

**Ve bu, ayın en değerli çıkarımı:** SMT fikri, **karşılaştırılan iki serinin gerçekten bağımsız olduğu** ölçüde bilgi taşıyor. Forex'te dolar endeksi paritelerden hesaplandığı için bu sorunluydu; **bu ayki dört uygulamada da sorun yok.**

## E4. Ölçmeye en değer beş çıktı

**1. Endeks SMT (C4).** Üç gerçekten bağımsız enstrüman, sabit pencere, aritmetik karşılaştırma. **Ayın birinci önceliği.**

**2. Açılış aralığı iddiaları (B2, C2).** Sabit pencere, hesaplanabilir taban çizgisi, ve **dar pencere versiyonu** (bir saat) test etmeye değer olan.

**3. COT orta çizgisi (A1).** Formül: `(mevcut − 12 ay min) / (12 ay maks − 12 ay min)`, eşik %50. **Sıfır seçim noktası**, kamuya açık haftalık veri, onlarca yıllık geçmiş. **Ve Salı–Cuma gecikmesi modellenmeli.**

**4. Hacim ayrışması (B3).** *"Yeni ekstremum daha düşük hacimle geliyorsa stop koşusudur."* Gerçek hacim, mekanik karşılaştırma.

**5. Prim / carrying charge yapısı (A3).** Vade yapısı tartışmasız, **fiyat grafiğinden tamamen bağımsız.**

## E5. Ve ayın kaydedilmesi gereken tek geri çekilmesi

Bu ayda **on ayda ilk kez bir öğreti geri alınıyor.** Mart V8'de COT yöntemi için *"internette bulamazsın, kitaplarda yok, böyle bir şey dışarıda yok"* deniyordu. Haziran V1 ve V5'te:

> *"Burada öğreteceğim her şey **Larry Williams'tan öğrendiğim şey**, birkaç kendi eklentimle."*
> *"Onun açık pozisyon kavramları **temelde yaygın olarak bilinen** şeyler."*

**Ve Haziran'ın versiyonu doğru:** bir aralığı normalize edip eşiğe göre okumak literatürde **Williams COT Index** olarak biliniyor.

**Haziran'ın gerçek eklentisi ise adlandırılabilir ve ölçülebilir:** Williams **uçları** kullanıyordu; bu yöntem aynı normalizasyonu **uç olmayan bölgede**, yerel bir salınım göstergesi olarak kullanıyor. **Bu, test edilebilir bir fark.**
