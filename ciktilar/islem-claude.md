# İşlem Alma Protokolü
## İki kaynağın elemesinden geçen kurallar, tek bir karar algoritmasında

---

## Bu dosya ne, ne değil

Bu belge iki kaynaktan türetildi:

- **`ict-*-eleme-notlari.md`** — on iki aylık mentorship, 115 video, video video okundu
- **`ict-charter-content-egitim-rehberi.md`** — 34 videoluk Charter Content, 13 model

Her iki kaynakta da her iddia üç sorudan geçirilmişti: **ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü.** Bu dosyaya yalnızca o filtreden geçenler alındı. Elenenler §23'te adıyla listelendi — atlanmadılar, reddedildiler.

**Baştan söylenmesi gereken tek şey:** *"Bunu şu kadar örnekte ölçtük, şu oranda çalıştı"* cümlesi 115 videoda bir kez bile geçmiyor. Charter rehberi de aynı boşluğu işaretliyor. Yani buradaki kuralların hiçbirinin isabet oranı bilinmiyor.

Bu belge bir kâr protokolü değil, bir **ölçülebilir protokol**. Farkı şu: burada yazan her adım, sonucu bilmeden uygulanabilir ve kaydı tutulabilir.

## Nasıl okunur

**İlk okuma:** yalnız Bölüm I. Terimleri öğrenmeden kurallar birbirine benzer görünür.
**İkinci okuma:** Bölüm II — kendi zaman ufkuna uyan **tek bir model** seç ve kural kartını doldur.
**Üçüncü okuma:** Bölüm III — algoritmayı o modele göre daralt.
**Son:** Bölüm IV'teki doğrulama protokolünü tamamlamadan canlı işlem düşünme.

**Kullanım sırası — atlanamaz:**

1. §8'deki karar maddelerini doldur
2. §22'deki çelişkiler için birer karar ver ve yaz
3. §21'deki kayıt yapısını kur
4. **Kâğıt üzerinde en az 100 kapanan işlem** biriktir
5. Maliyet sonrası beklentiyi taban çizgisine karşı ölç
6. **Ancak o zaman** canlıya çıkıp çıkmayacağına karar ver

---

# BÖLÜM I — Önce dil ve çerçeve

## 1. Üç katman: sahne, kurulum, tetik

Her model üç katmanda kurulur. Bu ayrım, belgenin geri kalanını anlaşılır kılan tek şey.

| Katman | Ne demek | Nerede kurulur |
|---|---|---|
| **1. Sahne (stage)** | Üst zaman dilimindeki yön ve bağlam | Aylık / haftalık genişleme, bir likidite çekimi, COT programı |
| **2. Kurulum (setup)** | İşlemin arandığı özel durum | Eski dibe baskın, order block retesti, volatilite genişlemesi |
| **3. Tetik (pattern)** | Emri başlatan alt zaman dilimi olayı | OTE, FVG'ye dönüş, turtle soup, breaker, yapı kırılımı |

**Bunun pratik sonucu tek cümle:** bir FVG görmek tek başına işlem değildir. FVG yalnız üçüncü katmandaki bir araçtır. Üstte sahne ve kurulum yoksa bağlamdan kopuktur.

Aynı ayrım, bu belgedeki sekiz kapının neden bu sırada olduğunu da açıklıyor: ilk kapılar sahneyi, ortadakiler kurulumu, son ikisi tetiği kuruyor.

## 2. Sözlük — bu belgede geçen terimler

Tanımlar kaynakların kendi tanımlarıdır. **Her birinin sonunda bir uyarı var** — çünkü bir kavramın adı, işe yaradığı anlamına gelmez.

### Draw on liquidity — fiyatın çekildiği hedef

Model önce *"long mu short mu?"* diye sormaz. Önce **"fiyatın sıradaki mantıklı hedefi neresi?"** diye sorar. Eski bir tepenin üstündeki alım stopları, eski bir dibin altındaki satış stopları, ya da doldurulmamış bir dengesizlik bu hedef olur.

**Uyarı:** bu bir gözlem değil, test edilmesi gereken bir tahmindir. **Hedefi işlemden önce tek bir fiyat seviyesiyle yazamıyorsan, yönsel anlatın henüz yeterince net değildir.**

### Dealing range · equilibrium · premium · discount

Anlamlı bir dip ile tepe arasındaki alan **dealing range**'dir. %50 noktası **equilibrium** (denge). Üst yarı **premium** (prim), alt yarı **discount** (iskonto).

Kural: yükseliş beklentisinde iskontodan al, prim hedefle. Düşüş beklentisinde primden sat, iskonto hedefle.

**Uyarı:** "ucuz" ve "pahalı" mutlak değil, **seçilen aralığa göredir.** Aralığın iki ucu değişirse sınıflama da değişir. Bu yüzden uçlar **işlemden önce** sabitlenir.

### IPDA veri aralığı — 20 / 40 / 60 gün

Son **20 işlem gününün** en yüksek ve en düşük fiyatı işaretlenir. **Pazar mumları sayılmaz.** Uygun hedef bulunamazsa 40, sonra 60 güne genişletilir. Bazı modeller (Model 9) günlük değil **20 haftalık** bakış kullanır.

**Uyarı:** bunu fiyatı açıklayan kanıtlanmış bir motor olarak değil, eski tepe/dip ve dengesizlikleri **sistemli taramak için bir bakış penceresi** olarak kullan. Kaynağın kendi cümlesi: *"20/40/60 gün sonra tepeyi çağırmaz — bu bir arama alanı, bir tahmin değil."*

### Internal ve external range liquidity

**External (dış):** aralığın **dışındaki** eski ya da eşit tepeler/dipler. Ötelerindeki stoplar hedef sayılır.
**Internal (iç):** aralığın **içindeki** yeniden fiyatlama alanları — FVG, likidite boşluğu, order block, breaker, denge.

Bu ayrım giriş ile hedefi birbirine bağlar:

| Giriş | Hedef | Tipik kullanım |
|---|---|---|
| **İç** | **Dış** | Trend yönünde devam (Model 11) |
| **Dış** | **İç** | Baskın sonrası aralığa dönüş (turtle soup) |
| **Dış** | **Karşı dış** | Aralığın bir ucundan öbür ucuna (Model 10) |

Tek cümlelik hali: **iç aralıktan gir, dış aralıkta çık.**

### Fair Value Gap (FVG)

Üç mumlu yapı. Birinci ve üçüncü mumun fitilleri arasında **işlem görmemiş alan** kalır. Yükselişte: birinci mumun tepesi ile üçüncü mumun dibi arası. Düşüşte tersi.

FVG'nin **orta noktası** ayrı bir isim taşır: **consequent encroachment.** Fiyatın boşluğun tamamını doldurması gerekmez; **orta noktaya erişmesi yeterli bir yeniden dengeleme sayılabilir.**

**Uyarı:** her FVG giriş değildir. Yön, prim/iskonto konumu, seans, displacement ve hedefe kalan alanla birlikte değerlendirilir. Ve **alt zaman diliminde aynı yer likidite boşluğu olarak görünür** — ikisi aynı şeyin farklı ölçekleri.

### Order block · breaker · rejection block · mitigation block

**Order block:** yönlü hareketten önceki **son karşı renkli mum.** Yükseliş için: yukarı impulstan önceki son düşüş mumu. Gövdenin orta noktası **mean threshold.**

**Breaker:** önce destek/direnç gibi çalışan, sonra **likidite baskını + yapı değişimiyle** rol değiştiren eski salınım bölgesi.

**Rejection block:** belirgin bir fitilin gövdeyle birleştiği alan. Sınırlar: fitil ucu ↔ en uç gövde noktası.

**Mitigation block:** A (dip) → B (tepe) → C (A'nın altına kırılım) yapısından sonra, **A'nın içindeki son ters mum.** Klasik karşılığı: *kırılan destek dirence dönüşür.*

**Uyarı:** bu isimler gerçek kurumsal emirlerin görüldüğü anlamına gelmez. **Grafikten türetilen fiyat bölgeleridir; işe yarayıp yaramadıkları ayrı ölçülmelidir.**

### Liquidity raid · displacement · Market Structure Shift (MSS)

**Raid (baskın):** fiyatın eski/eşit tepe ya da dibin ötesine geçip oradaki varsayılan stopları alması. **Tek başına dönüş sinyali değildir.**

**Displacement:** baskından sonra güçlü gövdelerle hızlı, tek taraflı ilerleme. Genellikle arkasında FVG bırakır.

**MSS (yapı değişimi):** bu hareketin yakın bir salınım tepe ya da dibini **karşı yönde kırması.**

**Bu üçlünün sırası, modern modellerin çekirdeğidir:** önce raid, sonra displacement ile yapı değişimi, sonra oluşan FVG'ye dönüş.

### OTE — Optimal Trade Entry

Bir impuls bacağına Fibonacci çekilir; **%62–79 bandı** derin geri çekilme alanıdır. Çoğu örnekte **%70,5** kullanılır.

**Ama dikkat — iki farklı kullanım var ve karıştırılmamalı:** bazı işlem planları özellikle **%62 seviyesini emir fiyatı** yapar (long için %62'nin 5 pip üstü, short için 5 pip altı). Diğerleri %70,5 bandını kullanır. **Hangisini kullandığını yaz.**

### Kill zone ve saat dilimi

Kill zone, kurulumun aranacağı **New York yerel saati** penceresidir.

**Uyarı — ve bu pratik olarak önemli:** saatler sabit Türkiye saatine çevrilmemeli. ABD ile Türkiye'nin yaz saati uygulamaları aynı değil. **Grafiği `America/New_York` saat dilimine getir** ya da her işlem günü dönüşümü doğrula. Broker grafiğindeki `04:00` etiketi doğrudan New York saati değildir.

### Judas swing ve Power of Three

**Power of Three:** bir aralığın birikim → manipülasyon → dağıtım sırasıyla geliştiği anlatısı. Pratik hali: **açılış aralığın bir ucuna yakın, kapanış diğer ucuna yakın.**

**Judas swing:** beklenen ana yönün **tersine** yapılan ilk yanıltıcı hareket. Boğa günde önce aşağı, ayı günde önce yukarı.

**Uyarı:** bu anlatı, sonucu gördükten sonra her grafiğe yapıştırılmamalı. **Manipülasyon sayılacak hareketin seviyesi, saati ve geçersizliği işlemden önce yazılmalı.**

### COT · SMT · mevsimsellik · çeyreklik kayma

**COT:** vadeli piyasadaki haftalık pozisyon raporu. Modeller, **ticari (commercial)** kategorinin son 6 ya da 12 aylık net pozisyon aralığının **orta noktasını** eşik olarak kullanır. Bu, standart COT okuması değil, seriye özgü bir dönüşümdür — ve literatürde **Williams COT Index** olarak zaten var.

**SMT ayrışması:** korele iki piyasanın aynı anda beklenen yeni tepeyi ya da dibi yapmaması.

**Mevsimsellik:** geçmiş yılların ortalama takvim eğilimi. **Giriş sinyali değil, aday piyasa seçme filtresi.**

**Çeyreklik kayma:** yaklaşık üç aylık aralıklarla önemli bir salınım oluşabileceği varsayımı.

**Uyarı:** son ikisi kesin zamanlama sağlamaz. Ve COT verisi **Salı pozisyonlarını gösterir, Cuma yayınlanır** — üç günlük gecikme, üç ayrı yerde kullanılıyor, hiçbirinde anılmıyor.

### Range projection — ve bir terim düzeltmesi

Model 5 ve bazı planlarda **"standart sapma"** denilen şey **istatistiksel standart sapma değildir.** CBDR, Asya aralığı ya da flout'un tepe-dip mesafesinin belirli katlarla yukarı/aşağı **geometrik projeksiyonudur.**

**Neden önemli:** standart sapma, sapmaların karekök ortalamasıdır; aralığın yarısı bu değildir (küçük örneklemde kabaca 1,5–3σ'ya karşılık gelir, ve oran sabit değildir). Yani **"1 standart sapma" denince akla gelen %68 burada geçerli değil.**

**Bu belgede buna "yarım aralık" ya da "birim" denecek.** Hesap aynı kalır, isim doğru olur.

**Aynı aileden ikinci düzeltme:** **1,68 bir Fibonacci oranı değildir** (φ = 1,618; fark 0,062). 1,272 = √φ doğru, 1,618 doğru, 0,786 = √0,618 doğru. **%70,5** ise ne Fibonacci ne de %61,8–%78,6'nın tam ortası (o 70,2). Üçünü de **serbest parametre** olarak ele al ve ayrı ayrı tara.

## 3. Elemenin dört ölçütü

Her ay bir ölçüt ekledi. Dördü birlikte, herhangi bir işlem fikrini elemeye yeter.

| # | Ölçüt | Soru |
|---|---|---|
| **1** | **Seçim noktası sayısı** | Kaç yerde yorum gerekiyor? Sıfır ya da bir ise ölçülebilir; beş ise ölçülemez — ne kadar ikna edici görünürse görünsün |
| **2** | **Belirsizliğin konumu** | Belirsiz bileşen kuralın **merkezinde** mi **kenarında** mı? Merkezdeyse ölçülemez; kenardaysa çekirdek hâlâ test edilebilir |
| **3** | **Verinin cinsi** | Girdi tek bir doğru cevabı olan bir şey mi (takvim, saat, açılış fiyatı), yoksa bir **hesaplama tercihi** mi? |
| **4** | **Gerçek zamanda bilinen girdi** | Kural, tahmin edilmek istenen şeyi girdi olarak istiyor mu? *("dip oluştuktan sonra")* Geçmişte hep doğru görünür, ileride hiçbir şey söylemez |

**Beşinci, pratik ölçüt — ve iki kaynağın en kullanışlı tek cümlesi:**

> *"En iyi kurallar seni piyasadan uzak tutanlardır. Piyasaya girmek için sebep sıkıntısı yok; piyasadan ne zaman uzak duracağın hakkında çok az şey yazılmış."*

Bu yüzden aşağıdaki algoritmanın ağırlığı **kapılarda**, tetiklerde değil.

**Altıncı ölçüt, birleşim hakkında:** *belirsizlik birleşimde ortalanmaz, çarpılır.* İki mekanik kuralı zincirlemek iki kez mekanik yapmaz — aradaki tanımsız yüklem ikisini birden bozar. **Bileşenleri çıkar, iş akışını test etme.**

## 4. Mimarî — sekiz kapı

```
ÖLÇEK → HAZIRLIK → YÖN → REJİM → KONUM → SEVİYE → BÜYÜKLÜK → ZAMAN → TETİK
```

**Dört yapısal kural, dördü de bağlayıcı:**

**a) Her kapı "hayır" diyebilir, ve "hayır" işlemi bitirir.** Bir sonraki kapıya "belki" ile geçilmez.

**b) Kapıların çoğu, günlerin çoğunda "hayır" demeli.** *"Bir piyasada boğaysak bu her gün almamız gerektiği anlamına gelmez."* Ölçüm tasarımı için doğrudan sonucu var: **her gün bir işlem üreten bir kural yanlış kurulmuştur.**

**c) Eksik bileşen kurulumu geçersiz kılmaz, sadece seçeneği azaltır.** *"Ya grafiktedirler ya değildirler. Herhangi birinin yokluğu geçerliliği ne artırır ne azaltır."* Bu, filtre yığınının panzehiri. **Ama tanımlı bir kapının "hayır"ı farklıdır — o durur.**

**d) Kapılar çeliştiğinde üst zaman dilimi kazanır.** Çelişki netleşmiyorsa işlem alınmaz.

## 5. Ölçek ve maliyet — neden en başta

Bu bölüm kaynakların kendisinden değil, **senin ölçümünden** geliyor, ve aşağıdaki her parametreyi belirliyor.

**Komisyon + kayma, R cinsinden stop mesafesine bölünür. Dar stop iki kere cezalandırır:** hem stop yeme olasılığını artırır, hem maliyeti R cinsinden büyütür. Senin ölçtüğün: gapsiz stoplar **−1,088R.**

| Stop mesafesi | Maliyetin R'a oranı | 1:1 hedefte başabaş isabet |
|---|---|---|
| **15 pip** (Model 8) | ~%10–12 | **%55+** |
| **20 pip** (Model 6/9/10/11/12) | ~%8–10 | **%54,4** |
| **25 pip** (Model 2/3/4) | ~%6–7 | %53 |
| **50 pip** (Model 2 breakout) | ~%3–4 | %52 |
| **70 pip** (swing) | ~%2,5 | %51 |

**Ölçek tabanı kuralı:** *"1 saatlik grafiğin altına inersen artık gün içi işlem ya da scalping yapıyorsundur."* Bu keyfi değil, maliyet aritmetiğinin sonucu.

**Ve iki kaynağın kendi ölçek geçmişi bu sorunu doğruluyor:**

| Kaynak | Ölçek | Değerlendirme |
|---|---|---|
| Mentorship Aralık | 5 dakikalıkta **2 pip'lik** FVG girişi | Maliyet sinyalin tamamını yiyebilir |
| Mentorship Şubat–Mart | 50–70 pip stop, 200–585 pip hedef | **En elverişli** |
| Mentorship Mayıs | **20/20 sabit** scalp | Maliyet sonrası %54,4 isabet gerekiyor |
| Charter Model 12 | **20 pip stop, 20 pip hedef** | Aynı sorun; rehber bunu kendisi işaretliyor |

Charter rehberinin kendi cümlesi: *"Çok küçük stop kullanarak kâğıt üzerindeki R'ı büyütmek, maliyeti R cinsinden de büyütür."* Ve *"2–5 pip stoplar spread ve normal fiyat hareketi tarafından kolayca alınır."*

**Vadeli piyasa farkı:** tahvilde 5 tick hedefe karşı ~4 USD komisyon = hedefin **%2,5'i.** Forex'te 20 pip stopa 1,5 pip maliyet = **%7,5.** Aynı ölçek, vadeli piyasada **üç kat daha az maliyet baskısı** taşır.

---

# BÖLÜM II — Karar öncesi

## 6. Model menüsü — hangisini seçmeli

**En önemli kural burada:** on üç modeli birlikte kullanma. İşlem ufkuna ve piyasana uyan **tek bir modeli** seç.

### 6.1 On üç model, bir bakışta

| Model | Tutuş | Sahne | Ana tetik | Hedef | Stop |
|---:|---|---|---|---:|---:|
| **1** | Dakika/saat | Günlük likidite çekimi | NY 5dk OTE (%62 + 5 pip) | 15–20 pip | 5 pip (anchor altı) |
| **2** | 2–3 gün | Haftalık genişleme | Salı/Çarşamba 15dk OTE | 50–100 pip | 25 pip (limit) / **50 pip (breakout)** |
| **3** | Gün/hafta | Aylık + 12 aylık COT | 4s/15dk OTE | 100–300 pip | 25 pip |
| **4** | Hafta/ay | Çeyrek + sezon + COT + SMT | Günlük stop-entry ya da 4s/15dk | 500+ pip | 25 pip / raid ötesi |
| **5** | Tek seans | Günlük likidite çekimi | Kill zone + range projeksiyonu | 40–50 pip | ~15 pip (yapısal) |
| **6** | Fraktal | Yukarı likidite çekimi | Stage-1/2 yeniden birikim | Seçilen prim array | 20 pip |
| **7** | Fraktal | Aşağı likidite çekimi | Stage-1/2 yeniden dağıtım | Seçilen iskonto array | 20 pip |
| **8** | Hafta | Haftalık genişleme | 5dk giriş drill'i | **25 pip** | **15 pip** |
| **9** | Hafta | Haftalık genişleme (20 **hafta**lık pencere) | 15dk OTE / raid | 50–75 pip | 20 pip |
| **10** | Gün/hafta | Haftalık genişleme | **Dış likidite baskını** | 50–75 pip | 20 pip |
| **11** | Gün içi | Haftalık + günlük çekim | 60dk iç array, 15/5dk giriş | **30 pip** | 20 pip |
| **12** | Tek seans | Günlük genişleme | **OB retesti → displacement → FVG** | **20 pip** | 20 pip |
| **13** | Tek seans | Gün içi likidite | **Raid → MSS → FVG** | Karşı PD array | Displacement swing'i ötesi |

### 6.2 Hangisiyle başlamalı

| Durumun | Uygun aday | Neden | Şimdilik uzak dur |
|---|---|---|---|
| Forex, yalnız New York, gece taşıma yok | **Model 1** | Gün/saat/giriş/stop açık | 3–4 |
| Forex, haftada tek küçük hedef | **Model 8** | 25 pip, düşük işlem sıklığı | 9'un piramitlemesi |
| Forex, tek seans gün içi | **Model 5 veya 12** | Seans ve olay sırası belirli | İkisini karıştırma |
| Haftalık swing | **Model 10** | Dış→karşı dış kuralı sade | Model 4 |
| Index futures gün içi | **Model 13** | Raid→MSS→FVG sırası açık | Forex'in 1–5 pip tamponları |
| COT ve mevsimsellik araştırması | **Model 3** | Daha az değişkenli swing | Model 4'ün üçlü filtresi |

**Üç not:**

- **Model 6 ve 7 bir giriş sistemi değildir.** Mevcut kurulumun büyük market-maker profilinin hangi tarafında olduğunu anlamak için kullanılır.
- **Model 11 ve 12 sık oluşur.** Bu onları kolay değil, **aşırı işlem riski yüksek** yapar.
- **Ölçek profilleri (mentorship'ten):**

| | Swing | Kısa vade | Gün içi | Scalp |
|---|---|---|---|---|
| **Çerçeveleme** | Aylık + haftalık | Aylık + haftalık | Günlük + 4 saatlik | Günlük |
| **Giriş grafiği** | 4 saatlik | **1 saatlik (taban)** | 5 dakikalık | 5 dakikalık |
| **Sıklık** | 4–6 haftada 1–2 | Haftada 1 | Günde ~2 | Günde 2–3 |
| **R:R tabanı** | **3:1** | 3:1 | 2:1 | **1:1** |
| **Risk** | %1–1,5 | %1 | %1 | **%0,5–1** |
| **Kaldıraç** | **3:1** — *"kontrol edilecek, maksimize edilmeyecek"* | | | |

**Scalp kolonu hakkında zorunlu uyarı:** 1:1 hedef, maliyet sonrası **%54,4 isabet** gerektirir. Mentorship Şubat *"3:1'den az kullanma"* diyordu (%25 eşiği). Üç ay içinde gereken isabet **iki katından fazlasına** çıkıyor ve seri bunu hiç hesaplamıyor.

### 6.3 Model başına gün filtresi ve yeniden giriş — bunlar aynı değil

| Model | Uygun günler | Stop sonrası yeniden giriş |
|---|---|---|
| **1** | Pzt–Çar öncelikli · Perşembe azaltılmış riskle · **Cuma yok** | **Yok** — aynı gün yeni deneme yapılmaz |
| **2** | Salı ana, Çarşamba yedek · **Perşembe NY açılışında zaman çıkışı** | **Yok** — *"one and done"* |
| **3** | Pzt–Çar | **Var** — ama aylık yön, COT, sezon ve günlük hedef hâlâ geçerliyse |
| **5** | Salı–Çarşamba ana · Perşembe koşullu · **Pazartesi ve Cuma elenir** | **Var** — ikinci temiz kurulum, şartları önceden yazılmışsa |
| **8** | Pzt–Çar ankrajı | Hedef alındıysa **o hafta durulur** |
| **12** | — | İlk hedef sonrası **aynı seans yeni işlem yok** |
| **13** | AM **08:30–11:00** · PM **13:30–15:30** | **Seans başına tek seçkin kurulum** |

**Ve mentorship'in genel kuralı, hepsinin üstünde:** *aynı fikre en fazla 1 kez yeniden gir, yarı boyutla.* İki ardışık başarısızlıktan sonra **o fikir kapanır** (§19.2).

## 7. Kural kartı — işlemden önce doldurulacak tek sayfa

**Ne işe yarar:** bir işlem fikrini, sonucu bilinmeden yazılabilir hale getirir. Aşağıdaki alanların **tamamı** dolu değilse işlem yoktur.

| Alan | Yazılacak |
|---|---|
| **Piyasa ve kontrat** | Örn. EURUSD spot, ya da Micro E-mini Nasdaq |
| **Model** | Yalnız **bir** numara |
| **Grafik saat dilimi** | `America/New_York` |
| **Sahne** | Haftalık/günlük genişleme tanımı |
| **Dealing range** | İki sabit uç + denge |
| **Tek hedef** | **Tam fiyat seviyesi** ve likidite sınıfı (iç/dış) |
| **Kurulum** | Raid, OB retesti, haftanın günü vb. |
| **Tetikleyici** | OTE, MSS+FVG, giriş drill'i vb. |
| **Giriş** | Emir tipi ve **tam fiyat formülü** |
| **Stop** | Yapısal geçersizlik ve fiyat |
| **Hedefler** | Fiyat, R, ve kapatılacak yüzde |
| **Zaman çıkışı** | Seans / Perşembe / Cuma kuralı |
| **Risk** | Toplam parasal tutar — **tüm emirler dâhil** |
| **Yeniden giriş** | Var/yok ve **nesnel** şartı |
| **İşlem yok** | Kurulumu iptal eden maddeler |

**Fark şurada:**

*"Haftalık yön ayı, güzel bir FVG bulursam satarım"* — bu bir kural kartı **değildir.**

*"20 günlük aralığın üst yarısında, önceden işaretli tepe raid edildikten ve 5 dakikalık salınım dibi displacement ile kırıldıktan sonra ilk bearish FVG dönüşünde; stop raid tepesinin üstünde, hedef önceki günün dibi"* — bu **test edilebilir bir başlangıçtır.**

## 8. Karar maddeleri — kapatılması zorunlu tanımlar

İki kaynağın da kapanış cümlesi aynı yere çıkıyor:

> *"Net, kesin, kural tabanlı fikirler eksik — **ve bunu kasıtlı yaptım.**"*

Bu, ölçmenin imkânsız olduğu anlamına gelmiyor. Şunu gerektiriyor: **her tanımsız bileşen için bir karar maddesi, ve o kararın kaydı.** O an ölçtüğün şey kaynağın modeli değil, **senin modelin** olur — bunu bilerek yap.

| Bileşen | Kaynaklardaki hali | **Senin kararın (varsayılan öneri)** |
|---|---|---|
| **Pivot / salınım** | 4 mum vs 3 mum (çelişkili) | Her iki yanında **5 mum** |
| **Ara vadeli tepe/dip** | Solunda ve sağında birer kısa vadeli tepe | **İki kademeli pivot** (kaynak: Larry Williams) |
| **İmpuls bacağı** | *"belirgin, temiz"* — en kritik tanımsızlık | **Son 20 mumun en yüksek tepesi ve en düşük dibi** |
| **Dealing range** | Charter: son 20 gün · Mart V5: **son 60 gün, gövdelerle** | Modele göre: gün içi **20 gün**, swing **60 gün gövde** |
| **Çeyrekleme derinliği** | Sınırsız özyineleme | **En fazla 2 bölme.** Sınırsızsa her fiyat bir çeyreğin iskontosunda kalır |
| **Gövde mi fitil mi** | Karışık | **Gövde.** Gerekçe: *fitiller broker spread'ine göre değişir; gövde yeniden üretilebilir* |
| **Displacement** | *"hızlı, güçlü gövdelerle"* | **Kaç mumda kaç ATR** — sayı koy, sonuca bakarak değiştirme |
| **MSS** | *"yakın salınımı kırdı"* | **Pivot uzunluğu 5 olan en yakın salınım** |
| **"Yakın" salınım** | Tanımsız | **Son N mum içindeki** |
| **Eşit tepe/dip toleransı** | *"neredeyse eşit"* | **ATR'nin %10'u** |
| **Order block güç eşiği** | Gövdenin **2–3 katı** hareket | **3 katı** |
| **Uzun fitil** | *"uzun"* | **Fitil / gövde ≥ 1,5** |
| **Sweep derinliği** | 10–20 pip beklenen, **>25 pip geçersiz** | **Beklenen 0,15–0,3 ATR, >0,4 ATR iptal** |
| **"Anında tepki"** | *"uyuşuksa çık"* | **3 mumda 0,5R gelmezse kapat** |
| **"Seviyede oyalanma"** | *"uzun kalırsa olasılık düşer"* | **Array'de 3 mumdan fazla kalırsa iptal** |
| **ADR** | *"beş günlük"* | **ATR(5), günlük** |
| **Konsolidasyon** | Tanımsız (beş ayda beş kez) | **Son 10 mumun aralığı < 1,5 × ADR** |
| **"Net konsolidasyon"** (CBDR/Asya) | Tanımsız | **Aralık / ADR < 0,3** |
| **Durgun piyasa** | *"son üç ayda az hareket etmiş"* | **Son 60 günün aralığı/ATR, tarihsel dağılımın alt %25'inde** |
| **"Geniş" açılış aralığı** | Tanımsız | **Aralık / ADR > 0,4** |
| **"Düşük dirençli yol"** | Tanımsız | **Giriş ile hedef arasındaki karşıt salınım sayısı ≤ 1** |
| **"Net, engelsiz yol"** | Öznel | Aynı ölçü |
| **OTE hangi seviye** | %62 (emir) vs %70,5 (band) | **Birini seç ve yaz** |
| **Hedefe tampon** | *"10–15 pip kala"* | **Sabit bir sayı seç** (ör. 10 pip) |
| **Minimum stop mesafesi** | Yok | **Maliyet ≤ R'ın %3'ü** olacak mesafe |
| **Maksimum yeniden giriş** | Modele göre değişir | §6.3'teki tabloyu kullan |
| **"Mega trade" eşiği** | Yalnız tahvil için sayısal | **ATR'nin N katı** — tek dolar eşiği enstrümanlar arası işe yaramaz |

**Kural:** bu tabloyu bir kez yaz, ölçüm dönemi boyunca **değiştirme.** Değiştirirsen tarihiyle kaydet ve öncesi/sonrası ayrı raporla.

## 9. Hazırlık protokolü

**Ne işe yarar:** işlem gününde karar verecek hiçbir şey kalmasın diye.

### 9.1 Grafik kurulumu

| Zaman dilimi | Görüntülenecek veri |
|---|---|
| Günlük | **9 – 12 ay** |
| 4 saatlik | **3 ay** |
| 1 saatlik | **en az 3 hafta** |
| 15 dakikalık | **3 – 4 gün** |

- **Tek bir parite ya da küçük bir sepet** seç. *"20 parite işlem yapmak istememenin sebebi bu — iki pariten varsa bu tür şeylerle gerçekten uyum sağlarsın."*
- **İki ayrı grafik tut:** analiz grafiği (tüm seviyeler işaretli) ve işlem grafiği
- **Saat dilimi `America/New_York`** — bunu her hafta doğrula

### 9.2 Hafta sonu hazırlığı — yedi adım

1. Yalnız takip edeceğin **bir veya iki piyasayı** seç
2. Orta ve yüksek etkili ekonomik olayları **New York saatiyle** işaretle
3. Modelin istediği **20/40/60 günlük** ya da **20 haftalık** aralığı çıkar
4. Üstte ve altta **dış likiditeyi**, içeride önemli **iç array'leri** işaretle
5. **Bir boğa, bir ayı senaryo** yaz — ama işlem gününde yalnız **kanıtlananı** kullan
6. Her senaryoya **tek hedef, geçersizlik ve minimum gerekli alan** koy
7. Kurulum yoksa **hangi gün/saatte ekranı kapatacağını** önceden belirle

**Amaç haftayı tahmin etmek değil, olası koşulları önceden tanımlamak.** Pazar akşamı çizilmeyen bir seviye, Çarşamba fiyat döndükten sonra *"zaten hedefimdi"* diye eklenmez.

### 9.3 Her grafikte işaretlenecekler

1. Fiyatın bir seviyeden **hızla uzaklaştığı** yerler
2. **Yeniden test edilmemiş** tepe ve dipler
3. **Eşit tepeler / eşit dipler** (gövdelerle)
4. **Haftalık tepe/dibin hangi gün ve hangi kill zone'da** oluştuğu
5. Her günün tepe ve dibi
6. **Son üç aylık mumun** açılış/yüksek/düşük/kapanışı, alt zaman dilimlerine taşınmış

### 9.4 Rutin takvimi

| Ne zaman | Ne yapılır |
|---|---|
| **Ayın son işlem günü** | Aylık katman: yön, aralık, PD array matrisi |
| **Hafta sonu** | Haftalık katman: göreli güç, COT, duyarlılık, senaryolar |
| **Her akşam** | Günlük katman: CBDR, ekonomik takvim, kaçınma listesi |
| **Gece yarısı (00:00 NY)** | Asya aralığı, açılış fiyatı, profil kararı |

### 9.5 Disiplin — metottan bağımsız geçerli

- **Tahmin etmeye çalışma; bu aşamada sadece kayıt tut**
- **Analizine âşık olma:** gerçek zamanlı fiyat beklentine uymuyorsa kenara çekil
- **Grafikleri her gün yazdır, tarihle.** Hafta sonu geri dön: gözlem ne zaman yapıldı, seviyeye ulaşması ne kadar sürdü, tepki neydi
- *"Kaybedenlerimin hemen olmasını tercih ederim"* — tepki hızı kuralının gerekçesi
- *"Bir dizi iyi kazanç serisi, sana gerçekte olduğundan iyi olduğunu düşündürür"* — 100 işlem eşiğinin sözel hali

---

# BÖLÜM III — Algoritma

## 10. ADIM 1 — Yön

**Ne işe yarar:** *"long mu short mu"* sorusunu kapatır. Beş ay boyunca kaynaklar bunu *"üst zaman dilimi şu yönü gösteriyorsa"* diye geçiştirdi. **Dört mekanik tanım üretildi.** Birini seç.

### Yöntem A — Aylık order block aralığı · en az seçim noktalı

1. Aylık grafikte **en son düşüş mumunu** bul, tepesini not et
2. Solunda, **dibi o tepeden yüksek olan** en yakın **yükseliş mumunu** bul
3. Bu iki mum aralığı tanımlar

| Ne kırıldı | Yön |
|---|---|
| Düşüş mumunun **tepesi** | **Boğa** — o mum alım bölgesi |
| Yükseliş mumunun **dibi** | **Ayı** — o mum satış bölgesi |

Hedef: **aralığın diğer ucu.** Sıfır seçim noktası.
**Örneklem uyarısı:** aylık grafik 10 yılda ~120 mum verir. Ölçmek için **çoklu enstrüman şart.**

### Yöntem B — Ardışık ara vadeli tepe/dip · en bol örneklemli

**Ara vadeli tepe:** solunda ve sağında birer kısa vadeli tepe olan tepe (iki kademeli pivot).

- Ardışık ara vadeli tepeler **düşüyor** + dipler kolayca kırılıyor → **ayı**
- Tersi → **boğa**

Her pivotta bir gözlem. **Beş ayın en iyi yön tanımı — ve beş ay boyunca kullanılmayan tanım.** Şubat, Mart, Nisan, Mayıs onun yerine tanımsız yüklem kullanıyor.

### Yöntem C — Hangi taraf süpürülüyor

1. Ardışık konsolidasyon aralıklarını işaretle
2. Her biri için: fiyat hangi tarafa taştı, ve taştıktan sonra nereye gitti?
3. Sürekli **alt tarafa taşıp yukarı** gidiyorsa → **boğa rejimi**

**Rejim değişimi sinyali:** *"Son 60 günün tepesinin üstündeyken alım stopları alınmaya devam ediyorsa boğa; **satış stopları alınmaya başlarsa** çeyreklik kayma."*

### Yöntem D — Son ters yönlü mumun kırılması · en granüler

> *"Yükseliş dizisindeki **son yükseliş mumunun dibi kırıldığında** yön aşağı dönmüş sayılır."*

Mum bazlı, sıfır seçim noktası. Alt zaman diliminde yön için en ucuz tanım.

### Belirsizlik durumunda varsayılan

> **9–18 aylık trend net değilse ya da konsolidasyondaysa: son üç-dört ayın yönünün TERSİNE dönmesini bekle.**

Aylık grafikte **18 mum geriye** bak — hareketli ortalama yok, gerçek mumlar. Taban çizgisi %50.
**9–18 bir aralık, tek sayı değil:** 9/12/15/18'i ayrı ayrı tara. Sonuç lookback'e duyarlıysa, o duyarlılık kendisi bir bulgudur.

### Yön kapanınca devreye giren iki kural

**Geçerlilik iptali:** *"Fiyat kısa vadeli tepeyi kırdığında, o dibe bir daha inmeyi **beklemeyiz.**"* Kurulumun ne zaman geçersiz olduğunu söyleyen nadir kural.

**Yön filtresi yasağı:** **Boğa ortamındayken bearish order block'tan SATMA.** Onları yalnızca **kâr almak** için kullan. *"Kurumsal emir akışının önünde duruyor olursun."*

**Ve genel yasak:** yönü anlatıdan türetme. *"Merkezi bir motor oraya sürüklüyor"* ölçülemez ve gereksiz bir katman. *"Son 60 günün tepesi önemli mi"* ölçülebilir bir soru. **Kuralı tut, hikâyeyi at.**

## 11. ADIM 2 — Rejim ve oynaklık kapısı

**Ne işe yarar:** hangi tür kurulumun aranacağını söyler — ve çoğu zaman "hiçbiri" der.

### 11.1 Piyasa seçimi

- **Durgun piyasadan kaçın:** son üç ayda az hareket etmiş
- **"Favori pariteden kaçın"** — büyük hareketler her yıl piyasalar arasında dönüyor; her üç ayda bir yeni fırsat
- **Aranan profil:** trend, ya da **konsolidasyondan yeni çıkmış**
- **Kaçınılan:** geniş bir aralıkta sıkışmış

### 11.2 Tandem / ayrışma testi

İki bağımsız, kamuya açık seri (klasik: 10 yıllık ABD tahvili ↔ dolar endeksi; kripto: BTC ↔ dolar endeksi).

| İki seri | Rejim | Ne aranır |
|---|---|---|
| **Ters yönde** | **Trend** | Uzun vadeli pozisyon, devam kurulumları |
| **Aynı yönde (tandem)** | **Konsolidasyon** | Pozisyon **arama.** Yalnız stop koşuları ve aralık içi işlem |

Yasaklayıcı bileşeni var, ölçmesi ucuz. Yuvarlanan korelasyonun işareti olarak kur.

### 11.3 Oynaklık kapısı — iki uç

| Koşul | Sonuç |
|---|---|
| **Inside bar + NR7 + son 3 günün en küçük aralığı** | **Sahne kurulu** — genişleme beklenir. *Yön hakkında hiçbir şey söylemez* |
| Önceki gün **> 2 × ADR(5)** aralık yaptı | **Ertesi gün işlem yok** |
| Günlükte **3 ardışık yükseliş kapanışı** | O gün **uzun alma** |
| Günlükte **3 ardışık düşüş kapanışı** | O gün **kısa alma** |
| Pazartesi/Salı aralığı **> 1,5 × ADR(5)** | **Hafta içi dönüş** profili ara — devam bekleme |
| **Londra, ADR'nin %80'ini koydu** | **New York'u atla** |
| Günlük aralık yakın zamanda **ADR'yi aşmadı** | **Genişleme günü bekleniyor** — ideal koşul |
| **ADR zaten dolmuş** | İşlem yok — hedefe yer kalmamış |

**NR7 hakkında kaynağın kendi dürüst cümlesi:** *"Bu sana zamanlama vermiyor. Sadece sahneyi veriyor. Ve piyasalar küçük aralıklarda gidiyor diye yönü bildiğin anlamına gelmez."*

**Ölçüm uyarısı:** oynaklık kümelendiği için daralma sonrası genişleme, koşulsuz ortalamaya karşı ölçülürse **neredeyse kesin pozitif** çıkar — ama bu edge değil, oynaklık kümelenmesinin kendisidir. **Oynaklık-eşleştirilmiş taban çizgisine karşı ölç.**

### 11.4 Fiyat dışı teyit (varsa)

| Kaynak | Kural | Gecikme |
|---|---|---|
| **COT aralık orta çizgisi** | `(mevcut − N ay min) / (N ay maks − N ay min)`, eşik **%50**. N = 6 veya 12 ay | **Salı pozisyonu, Cuma yayını** |
| **COT uçları** | 12 ay / 2 yıl / 4 yıllık uçta **uzun vadeli dönüş**; uçlarda kısa vadeli okuma **ıskonto edilir** | Aynı |
| **Açık pozisyon** | Fiyat **iskonto array'inde** + açık pozisyon **%15+ düşüyor** → son derece boğa. Prim array'inde + %15+ artıyor → son derece ayı | Ertesi gün |
| **SMT ayrışması** | İki korelasyonlu seride pivot karşılaştırması. **Simetri** → dönüş arama; **ayrışma** → ters yönde kurulum ara | — |
| **Hacim ayrışması** | Yeni ekstremum **daha düşük hacimle** geliyorsa → stop koşusu, dönüş bekle | Yalnız vadeli/perp |
| **Faiz farkı (carry)** | Yüksek faizli ↔ düşük faizli eşleştir | Merkez bankası takvimi |

**Açık pozisyonun eylemsizlik maddesi — iki kaynakta da eşi yok, ve tam da bu yüzden değerli:**

> *"Yukarıdaki iki koşulun arasındaki durumlarda açık pozisyon analizimde **DİKKATE ALINMAZ.** Ya bu iki kriterden birini karşılamalı ya da ona hiç başvurmayacağım."*

**Carry hakkında kaynakların anmadığı asıl risk:** carry getirileri **sola çarpıktır** — uzun sakin dönemler, ani ve büyük çöküşlerle kesilir. Ortalama R yeterli değil; **en kötü %5'lik dilimi ayrıca raporla.**

**SMT bağımsızlık uyarısı:** dolar endeksi paritelerden hesaplandığı için forex'te *"sekiz parite teyit ediyor"* **tek gözlemin sekiz görüntüsüdür.** Gerçekten bağımsız çiftler: ES↔NQ↔YM, 5Y↔10Y↔30Y, fiyat↔hacim, BTC↔ETH.

**En tanımlı SMT:** üç adı konmuş endeks (ES, NQ, YM), **05:00–09:30 NY penceresi**, o pencere içindeki **göreli** tepe/dipler. *"Kale direği gibi düşünme — pencere içinde nerede oluşursa oluşsun karşılaştır."* PM için **12:00–15:00.**

### Bu kapının çıktısı

```
TREND     → devam kurulumları, karşıt array hedefi
ARALIK    → sweep ve denge hedefi, pozisyon yok
İŞLEM YOK → kaçınma koşullarından biri aktif
```

## 12. ADIM 3 — Konum (prim / iskonto)

**Ne işe yarar:** *"burası alım için pahalı mı ucuz mu"* sorusunu bir sayıya indirir.

### 12.1 Aralığı kur

**Gün içi modeller için:** son **20 işlem günü** (Pazar mumları hariç).
**Swing için:** son **60 işlem günü, gövdelerle** — *"en yüksek açılış ya da kapanış, hangisi olduğu umurumda değil."*
**Model 9 için:** son **20 hafta.**

Sonra: ortası **denge**, üstü prim, altı iskonto. Çeyrekler için üst ve alt yarının ortaları. **En fazla 2 bölme.**

Bu tanımın değeri şurada: *"başlangıç noktası"* ve *"ara vadeli tepe"* gibi iki tanımsız yüklem yerine **sabit bir pencere** kullanıyor. Seçim noktası sıfır.

### 12.2 Sayısallaştırma ve yasaklar

| Seviye | Anlam | Kural |
|---|---|---|
| **0,90** | Derin prim | **Yeni uzun yok** |
| **0,80** | Prim | **Yeni uzun yok** |
| **0,50** | Denge | Üstü prim, altı iskonto |
| **0,30** | Derin iskonto | **Yeni kısa yok** |
| **0,20** | En derin iskonto | *"20'den azını görmeyi sevmiyorum"* |

**Çekirdek yasak:** **alım yalnızca dengede ya da altında; satış yalnızca dengenin üstünde.**

**Ve senin ölçümünle bağlantı:** sweep ölçümünde girişin aralıktaki konumuna dair **hiçbir kapı yoktu.** %33 isabet / 2R'de tam başabaş sonucu, içinde iki farklı popülasyon barındırıyor olabilir. Tek parametrelik ekleme, ve yasaklayıcı.

**Uyarı:** özyinelemeli çeyrekleme bu filtreyi **zayıflatır** — yeterli derinlikte her fiyat bir alt-aralığın iskontosunda kalır. Derinlik sabitlenmezse filtre hiçbir girişi yasaklamaz.

### 12.3 Ne kadar geri çekilir — üç sıralı durum

Kaynakların *"fiyat nereye kadar iner"* sorusuna verdiği tek mekanik cevap. **Kaç zaman dilimi düzeltmedeyse, o kadar üst zaman diliminin array'ine inmesi beklenir.**

| Durum | Aylık | Haftalık | Günlük | Ne yaparsın |
|---|---|---|---|---|
| **1** | Boğa | Boğa | Boğa | **4 saatlik** iskonto array'inden al |
| **2** | Boğa | Boğa | Düzeltmede | **Haftalık** iskonto array'ine inmesini bekle |
| **3** | Boğa | Düzeltmede | Düzeltmede | **Aylık** iskonto array'ine inmesini bekle |

### 12.4 IPDA pencereleri — takvim tartışılmaz

**Kurulum:**
1. Bir önceki **tam kapanmış takvim ayının ilk gününe** çizgi (kalibrasyon kuralı mekanik)
2. **20, 40, 60 işlem günü ileri ve geri** işaretle
3. Kutular **her yeni günde bir gün ileri kayar**
4. **Pazar mumları sayılmaz** — platformunda varsa telafi et

| Geriye bakışta | İleriye bakışta |
|---|---|
| Satış/alım stopları nerede | Bir sonraki kurulum penceresi |
| FVG ve gap'ler nerede | |
| Likidite boşlukları, konsolidasyonlar nerede | |

**Tükenme tetikleyicisi:** 20 günlük array'ler tükendiyse 40'a, sonra 60'a çık.
**Düşme kuralı:** son 20 günün dibi ihlal edilirse **40'a değil**, doğrudan 60 günlük pencerede bir sonraki daha düşük dibe git.
**Gün içi için:** *"Çoğu zaman son 20 günde çalışacaksın."*

## 13. ADIM 4 — Seviye seçimi

**Ne işe yarar:** *"bu grafikte onlarca aday var, hangisi?"* sorusunu kapatır.

### 13.1 Bağlayıcı tarama sırası

Fiyattan **dışa doğru** aranır. Sıra bağlayıcıdır: *"Başka bir sırada değiller."*

| Sıra | İskonto (alım için, aşağı) | Prim (satış ve hedef için, yukarı) |
|---|---|---|
| **1** | Bullish **mitigation block** | Bearish **mitigation block** |
| **2** | Bullish **breaker** | Bearish **breaker** |
| **3** | **Likidite boşluğu** | **Likidite boşluğu** |
| **4** | **Fair value gap** | **Fair value gap** |
| **5** | Bullish **order block** | Bearish **order block** |
| **6** | **Rejection block** | **Rejection block** |
| **7** | **Eski dip / tarihsel dip** | **Eski tepe / tarihsel tepe** |

**Çakışma kuralı:** en **yakın** olanı seç — ve **breaker varsa o, diğer her şeyin önüne geçer.**
**Kapsam gözlemi:** *"Nadiren hepsi elimizde olur. Üç ya da dört tanelik bir seçim olabilir, hatta iki tane kadar az."*

### 13.2 Kontrol listesi — "bariz olanı seç" adımını kaldırır

Kaynak bir yerde *"sadece bariz olanları not ediyorum"* diyor, iki cümle sonra *"belirsiz mi? Hayır, kesin"* diyor. **İkisi bir arada duramaz.**

**Ama düzeltme kaynağın kendi örneğinin içinde:** bulunmayan array'ler tek tek **eleniyor.** O eleme listesini kurala çevir:

| Array | Var mı? |
|---|---|
| Mitigation block | ☐ |
| Breaker | ☐ |
| Likidite boşluğu | ☐ |
| Fair value gap | ☐ |
| Order block | ☐ |
| Rejection block | ☐ |
| Eski tepe/dip | ☐ |

**Her seferinde yedisini de işaretle.** "Bariz" adımı ortadan kalkar, seçim tamamen mekanik olur. **Bu, en ucuz ve en yüksek getirili düzeltme.**

### 13.3 Ön koşulu mekanik olanı tercih et

Tek cümlelik ders: **varyantları ayıran şey mum tanımı değil, ön koşul.**

| Varyant | Ön koşul | Mekanik mi | Tercih |
|---|---|---|---|
| **Breaker** | Stop süpürmesi **+** yapı kayması | **Evet — iki koşul** | **1** |
| **Mitigation block** | Yapı kayması (A→B→C) | **Evet** | **2** |
| **Rejection block** | Uzun fitil (oran eşiğiyle) | **Evet** | **3** |
| **Propulsion block** | Bir order block'a değme | Evet — ama dar stop | 4 |
| **Order block** | *"destek seviyesine yakın"* | **Hayır — merkezde tanımsız** | 5 |
| **Vacuum block** | Gerçek gap | Evet — **kriptoda yok** | 6 |
| **Reclaimed block** | *"eğrinin sağ tarafı"* | **Hayır — gerçek zamanda bilinmeyen girdi** | **Kullanma** |

**Breaker neden birinci:** ailenin **en yanlışlanabilir** üyesi. İki koşul, ikisi de mekanik. Ve **üst zaman dilimi yön ön koşulu gerektirmiyor** — kurulumun kendisi yön üretiyor.

**Dar versiyonu:** breaker'a **başarısız ilk deneme** koşulu eklenir (fiyat seviyeye yaklaşıp döner, ikinci denemede ulaşır, sonra yapı kayması). Daha dar, daha yanlışlanabilir. Stop gerekçesi: *"Stop koşusu **zaten yapıldı.** Fiyatın oraya geri dönmesi için sebep yok."*

**Reclaimed block neden yasak:** ön koşulu, ölçmek istediğin şeyin kendisi. Kaynağın kendi itirafı: *"Düşüş sırasında bu mumları giriş sanan traderlar stop olur."*

### 13.4 Array tanımları — giriş ve stop kutusu

| Array | Tanım | Giriş | Stop |
|---|---|---|---|
| **Bullish breaker** | Bir dip kırılır → fiyat döner, iki dip arasındaki kısa vadeli **tepeyi** kırar → o tepedeki **son yükseliş mumu.** Mum seçimi: *"düşüşten önceki en yüksek olan"* | Tam gövde aralığı | Aralığın altı |
| **Mitigation block** | A → B → C yapısından sonra **A'nın içindeki son ters mum** | Tam gövde aralığı | Mumun ötesi |
| **Rejection block** | Uzun fitilli salınım ucu. Fiyat en uç **gövde** noktasını aşarsa (fitili aşmasa da) dağıtım sinyali | Bloğun iç sınırı | Fitil ucunun ötesi |
| **Order block** | İmpulstan önceki son ters mum. **Geçerlilik:** sonraki bir mum gövdesinden geçmeli. **Güç:** hareket gövdenin 3 katı. Ardışık iki mum varsa **birleştir** | Mumun **açılışı** + spread payı | **Gövdenin altı** |
| **FVG** | Üç mum: sol mumun dibi ↔ sağ mumun tepesi (düşüş yönü), tersi yükseliş. Orta nokta = **consequent encroachment** | Boşluğun içi ya da orta noktası | Orta mumun ötesi |
| **Propulsion block** | Bir order block'un aralığına **değen** ikinci order block | Mumun tepesi | Mean threshold altı — **çok dar, 40 pip kapısıyla birlikte** |

**Mean threshold** = gövdenin orta noktası. Netleşmiş tanım: **üç mumun gövde aralıkları içindeki en yüksek tepe ve en düşük dip, onun ortası.**

**Bu bir geçerlilik ölçütüdür, stop seviyesi değil.** Kapanış bazında ihlal edilirse kurulum bozulmuştur — ama stopu oraya koymak stop yedirir.

**FVG geçerlilik koşulu:** o aralık daha önce **ters yönde işlem gördüyse** FVG değildir. Ve **FVG'nin kısmen dolması tek başına geçersizlik değildir** — korunması gereken salınım kırılırsa tez bozulur.

### 13.5 Mum seçim kuralları — seçim noktalarını kapatan üç kural

1. **Breaker:** *"düşüşten önceki en yüksek olan"*, ve **tüm gövde aralığı**
2. **Kapsanma:** gövdesi **çok küçük ve öncekinin içine kapsanmış** mumu kullanma — daha kalın gövdeliyi kullan
3. **Ardışık mumlar:** **gövdeleri birleştir**, tek order block say

### 13.6 Tükenme kuralı — ve iki kaynağın çözülmemiş çelişkisi

> **Bir PD array zaten işlem görmüşse tükenmiştir. Artık aday değildir.**

Bu, yedi ayın en büyük ölçüm sorununu çözüyor: geriye dönük bakınca **her fiyat noktasının yakınında bir order block bulunuyordu.**

**Ama kaynaklar dört ayrı yerde bu soruya iki zıt cevap veriyor:**

| Kaynak | İddia |
|---|---|
| Şubat V5 | Seviyeler **birden çok kez** işlem görebilir |
| Mart V4/V5 | Bir kez işlem gören array **tükenmiştir** |
| Haziran V8 | Dengede **birden fazla kez** çalışacaklar |
| Haziran V13 | *"Zaten savundular"* — geri gitmeyecek |

**Tek bir ölçümle kapanır:** *bir PD array'e ikinci dokunuş, birincisinden farklı sonuç veriyor mu?*

**Karar maddesi:** birini seç, kaydet, dönem boyunca değiştirme. **Öneri: tükenme kuralı** — aday havuzunu daraltıyor.

### 13.7 Seviye bir fiyattır, bölge değil

> *"Bunlar bölge değil, belirli fiyat seviyeleri — düşüş mumlarının açılışları ve tepeleri."*

**Yuvarlama kuralı:**

| Array'in yeri | Yuvarlama |
|---|---|
| **Prim** (fiyatın üstünde) | **AŞAĞI** — en yakın 0 ya da 5 seviyesine |
| **İskonto** (fiyatın altında) | **YUKARI** — en yakın 0 ya da 5 seviyesine |

*"Ona doğru asla yukarı yuvarlamak istemem — alçakta asılı meyveyi istiyorum."*

**Ve ölçülebilir bir bedeli var:** doluluk oranı ↑, R başına kazanç ↓. **Yuvarlama miktarını tara** (0/1/2/5 pip).

**Kurumsal seviyeler:** 00, 20, 30, 50, 70, 80. Sıfır seçim noktalı bir seviye kaynağı — **ve asıl değeri kontrol grubu olması:** yuvarlak sayılar tek başına tepki üretiyorsa, yuvarlak sayıya yakın bir order block'un *"çalışması"* order block lehine kanıt değildir.

### 13.8 Konfluans sayımı

**Bir fiyat noktasında örtüşen array sayısı bir tam sayıdır**, ve sonuçla ilişkisi ölçülebilir.

- **Yuvalanma:** günlük düzeltmedeyken sadece **haftalık iskonto array'iyle örtüşen** günlük array'leri al
- **Projeksiyon yakınsaması:** seçilen seviye, Asya aralığı / CBDR / flout projeksiyonunda **en fazla ±3 birim** içinde ve **~5 pip toleransla** çakışmalı
- **Ve önceki günlerin geçerli seviyeleri silinmez:** bugünkü ve eski projeksiyonların **3–5 pip** içinde çakışması aday bölge oluşturur
- **Uyarı:** bu bir filtre, ve filtreler işlem sayısını azaltır. **Çoklu enstrüman şart**

### 13.9 Direnç sayımı — nerede işlem ALINMAZ

**Serinin en iyi yasaklayıcı kuralı.** Sayılabilir, ve *"şurada al"* değil *"şurada alma"* diyor.

**Soru:** fiyatın hedefe ulaşması ne kadar kolay? **Cevap:** aradaki yolda kaç eski tepe ve dip var.

| | Tanım | Ne yapılır |
|---|---|---|
| **Yüksek dirençli** | Yolda **çok** eski tepe/dip var | **İŞLEM ALMA** |
| **Düşük dirençli** | Yolda **çok az** yapı var | **İşlem burada** |

**Düşük dirençli bölgenin sınırları — mekanik:**

1. Hızlı, tek yönlü, geri çekilmesiz bir bacak bul
2. O bacağın **kırdığı eski dip** → bölgenin **üst sınırı**
3. Sonraki toparlanmanın **kırdığı kısa vadeli tepe** → bölgenin **alt sınırı**
4. Bu iki sınır arası = **düşük dirençli bölge**

**Bölge içinde:** her geri çekilmede yeni bir fırsat.
**Bölge nerede biter:** kırılan o eski dibe geri yaklaşıldığında.

**Rejim okuması:** dipler kolay kırılıyorsa **ayı** — her ralli yüksek dirençli. Tepeler kolay kırılıyorsa tersi.

**"Çok/az" ölçüsü tanımlanmazsa** yalnız başarılı örnekler sonradan *"düşük dirençli"* diye seçilir. **Ölçü koy:** aradaki karşıt salınım sayısı, en büyük geri çekilme, ya da hedefe kadar engel sayısı — **hangisini seçtiğini yaz.**

**Uyarı:** bu bir **filtre**, bir üretici değil. İşlem sayısını azaltır.

## 14. ADIM 5 — Büyüklük, maliyet ve portföy kapısı

**Ne işe yarar:** matematiği tutmayan kurulumları, tetik oluşmadan eler.

### 14.1 Mesafe kapısı

Ölçülen: **giriş ile ilk hedef arasındaki mesafe.**

| Mesafe | Karar |
|---|---|
| **20 pip** | **İşlem yok** |
| **< 40 pip** | **İşlem yok** — *"40 pip'ten azsa scalp'tır"* |
| **40 pip** | Alınabilir |
| **50 – 60 pip** | Gün içi için sağlıklı |
| **75 – 80 pip** | **İdeal** |

**Model bazlı minimum alan:**

| Model | Hedef | Minimum gerekli alan |
|---|---|---|
| 12 | 20 pip | 20 pip |
| 8 | 25 pip | 25 pip, tercihen 50–75 pip temiz yol |
| 11 | 30 pip | **50–100 pip üst zaman dilimi yolu** — hedef 20–30 pip uzaktaysa alan zayıf |
| 5 | 40–50 pip | 40–50 pip |
| 9 / 10 | 50–75 pip | 50–75 pip |
| 3 | 100–300 pip | **100 pip yoksa bu Model 3 değildir** |

**Zaman dilimi eşlemesi:** 40 pip → 15dk · 50+ → 30dk–1s · 75–100 → 1s–4s · 250 pip → 4s–günlük.

**Ek koşul:** **ADR henüz doldurulmamış olmalı** — hedefin gerçekleşmesi için günde yer kalmış olmalı.

### 14.2 Maliyet kapısı

**Kural:** maliyet, R'ın **%3'ünü** aşıyorsa işlem yok. Bu, minimum stop mesafeni tanımlar.

**Ve spread beyanı:** *"Gün içi bakış açısından interbank fiyatlamasından **10 ila 15 pip'lik** bir aralığa bakabiliriz... Eski bir dibe yaklaştığında stopunu almak için spread'i açabilirler, ve senin lehine olduğunda o spread'in sana yardım etmesine izin vermezler."* — maliyet modelinin **asimetrik** olması gerektiğinin kabulü.

### 14.3 R:R tabanı ve başabaş isabet

| R:R | Başabaş isabet (maliyetsiz) | Maliyet dahil |
|---|---|---|
| **1:1** | %50 | **~%54** |
| **1,5:1** (Model 11) | %40 | ~%43 |
| **2:1** | %33 | ~%36 |
| **3:1** | **%25** | ~%27 |
| **5:1** | ~%17 | ~%18 |

**Taban: 3:1** (swing/kısa vade). Kaynakların kendi rakamları burada **hatalı**: bir yerde %34, başka yerde %30 deniyor; **doğrusu %25.** İki farklı yer, iki farklı rakam, aynı iddia için — rakam hesaplanmamış.

**Çerçeveleme geometrisi:** *"Hedefi üst zaman diliminde belirle, girişi alt zaman diliminde yap."* Bu bir piyasa iddiası değil, **geometri** — ve R'ı hedefi küçültmeden yükseltmenin tek meşru yolu. **Ama bir noktadan sonra maliyeti içeri alır** (§5).

### 14.4 Pozisyon büyüklüğü — maliyet dahil

```
Risk bütçesi = hesap özsermayesi × işlem başına risk oranı

Adet = risk bütçesi ÷ (stop mesafesi × birim pip/tick değeri + tahmini işlem maliyeti)
```

**Sonuç her zaman aşağı yuvarlanır.** Vadeli kontratlar bölünemez; **bir micro kontratın riski bile bütçeyi aşıyorsa yapılacak şey kontrat açmak değil, kurulumu atlamaktır.**

| Kalem | Değer |
|---|---|
| İşlem başına risk | **%1** · agresif üst sınır %2 · scalp %0,5–1 |
| Kaldıraç | **3:1** |
| Kayıptan sonra | **Riski yarıya indir** |

**Kayıp sonrası protokol:**

| Kayıp | Sonraki risk | Ne zaman geri dönülür |
|---|---|---|
| Tam 1R | **Yarısı** | Kaybın **yarısı** geri kazanılınca |
| Yeni kayıp | Tekrar yarısı | Aynı kural |

**Martingale yok.** Risk kayıptan sonra **büyütülmez.**

### 14.5 Portföy kapısı — kolayca atlanan kural

> *"Kurulum filtreyi geçse bile işlem ancak **risk ve özkaynak yönetimi izin veriyorsa** açılır. Kurulum var diye para yönetimi kuralları çiğnenmez: **ya bir şey kapatılır ya işlem geçilir.**"*

**Üç alt kural:**

1. **Birden çok emir toplam riski çoğaltmaz.** İki emir varsa toplam %1 risk **ikiye bölünür**; her birine ayrı %1 verilmez.
2. **Korele paritelerde aynı fikri üç kez açmak üç bağımsız işlem değildir.** *"Yakından korele oldukları için Yeni Zelanda'nın üzerini çizeriz."*
3. **Fırsat maliyeti karşılaştırması:** *"EUR/USD'de fırsat var ama zaten USD/CHF'de kısasın — hangisi daha olası kârlı? Paranla daha çok hız hangisinde?"*

**Karar maddesi:** toplam eşzamanlı açık risk üst sınırını yaz (ör. **%3**). Aşılıyorsa yeni işlem yok.

## 15. ADIM 6 — Zaman kapısı

**En kullanışlı tek ilke:**

> *"Zamanda esnek, fiyatta spesifik olacaksın. **Esneklik zamanda, fiyatta değil.** Fiyat bizim seviyemize gelmek zorunda."*

Ölçüm açısından sonucu doğrudan: bir kural **fiyatta tolerans** istiyorsa ("bölge", "civarı") kodlanamaz; **zamanda pencere** istiyorsa kodlanabilir kalır.

### 15.1 Haftanın günü

| Kural | İçerik |
|---|---|
| **Pazartesi–Çarşamba** | Haftanın tepesi/dibi genellikle burada oluşur. O aralıkta oluşan tepe hafta içi kırılırsa → prim array'ine agresif genişleme |
| **Referans** | Pazartesi açılışından Çarşamba kapanışına en yüksek tepe / en düşük dip |
| **%30–50 kuralı** | Haftalık aralığın %30–50'si **Çarşamba Londra kapanışına** kadar tamamlanır |
| **Yasaklayıcı türevi** | **Çarşamba Londra kapanışından sonra yeni pozisyon yok** |
| **Perşembe** | Genelde ideal ama **dönebiliyor** — haftalık aralık genellikle Perşembe New York'ta sınırlanır |
| **Cuma** | Model 1 ve 5'te **yeni işlem yok** |
| **Pazartesi kontrolü** | Gece yarısı Asya aralığına bak; büyükse **haftanın tepesi/dibi Pazartesi** oluşabilir |

**Ve kaynakların yüzdeleri bir arada duramıyor:**

| İddia | Taban |
|---|---|
| Tepe **veya** dip Pzt–Çar arasında: **%76** | **%60** (3/5 gün) |
| Boğa haftada dip Salı Londra'da: **%77** | **%20** (1/5 gün) |
| Ayı haftada tepe Salı Londra'da: **%70** | %20 |

**Salı, {Pzt, Sal, Çar} kümesinin alt kümesidir.** Bir alt kümenin olasılığı üst kümesininkini geçemez — **%77 > %76 olamaz.** Rakamlar hesaplanmamış.

**Ve bu ölçmesi en kolay iddia:** haftalık ekstremumun gün dağılımı saf bir sayım. **Üç ayın günün-günü kurallarının tamamı bu tek sayıya dayanıyor.**

### 15.2 Seans tablosu — koordinat sistemi, hipotez değil

**Tüm saatler New York saatiyle.**

| Öğe | Pencere |
|---|---|
| **CBDR** | **14:00 – 20:00** (bazı planlarda 16:00–20:00) |
| **Asya aralığı** | **20:00 – 00:00** |
| **Flout** (CBDR + Asya) | **14:00 – 00:00** (bazı planlarda 16:00–00:00) |
| **Londra kill zone** | **01:00 – 05:00** |
| Londra öğle arası | 05:00 – 07:00 |
| **New York kill zone** | **07:00 – 10:00** |
| **CME açılışı** | **08:20** |
| Londra kapanış KZ | 10:00 – 12:00 |
| **IPDA gerçek günü** | **00:00 – 15:00** |
| Asya kill zone (JPY/AUD/NZD) | **18:00 – 21:00** |

**Neden 15:00 günü bitiriyor:** tahviller kapanıyor; **14:00–15:00 arası FOMC ile ilgili her hareketi kapsar.**

**Ctrl+Y uyarısı:** o dikey çizgiler **perakende** 24 saatlik günü gösterir — günü onlara göre çerçeveleme.

**Diğer varlık sınıflarında karşılığı:**

| Varlık | Açılış aralığı | Gerçek gün | Taban çizgisi |
|---|---|---|---|
| **Tahvil (ZB)** | **08:00 – 09:00** | 08:00 – 15:00 (7 saat) | **%14,3** |
| **Endeks (ES/NQ/YM)** | **09:30 – 10:30** | 09:30 – 16:00 (6,5 saat) | **%15,4** |
| **Index futures AM** (Model 13) | **08:30 – 11:00** | — | — |
| **Index futures PM** (Model 13) | **13:30 – 15:30** | — | — |
| **Forex (CBDR)** | 14:00 – 20:00 | 00:00 – 15:00 | — |

**Ve en zarif tek hipotez:** *"İlk saat günün tepesini yaratıyorsa, **son saat genellikle dibi yaratır.**"* İki sayı, bir koşullu olasılık, sıfır yön varsayımı.

**Model 13'ün PM saat işaretleri:** 13:30 öğle hacmi biter · 14:00 PM trendi ve AM stop baskını · 14:30 son iki saat · 15:00 son saat · 15:30 kapanış koşulları. **Bunların hiçbiri tek başına sinyal değil** — kurulum yoksa yalnız yeni gözlem anıdır.

### 15.3 Range projeksiyonu — hangi aralık ölçülür

| Ölçüm | Pencere (NY) | Kabul koşulu |
|---|---|---|
| **CBDR** | 14:00/16:00 – 20:00 | Net konsolidasyon; **< 40 pip**, ideal 20–30 |
| **Asya aralığı** | 20:00 – 00:00 | Net konsolidasyon; ideal **20–40 pip** |
| **Flout** | 14:00/16:00 – 00:00 | İlk ikisi uygun değilse; **yarım aralık** birim |

**Seçim sırası:** CBDR → Asya → flout. **Aralık trend biçimindeyse kullanılmaz.**

**Birim (yanlışlıkla "standart sapma" denen şey):** aralık yüksekliği, uçlardan tekrarlanır (1, 1,5, 2, 2,5, 3).
**Beklenti:** günün ekstremumu **1–3 birim** içinde; ideal günde **≤ 2.**
**20–30 pip idealinin gerekçesi:** *"ADR tipik olarak 100 pip ise, bunun üçte biri ~33 pip."*

**Karşı uç projeksiyonu:** Londra'daki protraksiyon **kaç birim kullandıysa**, **CBDR + kullanılan birimlerin toplam aralığı** karşı uca yansıtılır. Girdisi gün içinde belirleniyor — **gerçek zamanda bilinmeyen girdi gerektirmiyor.** Zaman kapağı: 10:00–12:00, nihayetinde **14:00.**

**Flout uyarısı:** kaç birim kullanılacağının kuralı **yok** — kendi sınırını koy (ör. en fazla 4). Ve CBDR ile **saat olarak örtüştüğü için** ikisi "konfluans" sayılamaz; **önce korelasyonlarını ölç.**

**Tek başına yeterli değil:** *"Sadece bir ya da iki birim ekleyip 'burada short'a giriyorum' demiyorum — bir prim array arıyorum."*

### 15.4 Kaçınma listesi — on iki koşul

**İki kaynağın en yoğun yasaklayıcı kural seti, ve onu takvim ya da aritmetik.**

| # | İşlem yok — çünkü |
|---|---|
| 1 | Önceki gün **> 2 × ADR(5)** aralık yaptı |
| 2 | Günlükte **3 ardışık yükseliş kapanışı** → uzun alma |
| 3 | Günlükte **3 ardışık düşüş kapanışı** → kısa alma |
| 4 | **FOMC whipsaw'ından sonra** — *"CBDR'yi mahveder ve Asya'ya taşar"* |
| 5 | **NFP günü** (ayın ilk Cuma'sı) |
| 6 | **Uzun hafta sonu / tatile giden gün** |
| 7 | O parite için **birden fazla** yüksek/orta etkili haber. **İdeal: tek bir haber** |
| 8 | Londra sırasında **hiç haber yok** — joker gün |
| 9 | **CBDR > 50 pip** |
| 10 | **Asya aralığı > 40 pip** |
| 11 | 20:00'den itibaren **sürekli ralli/düşüş** |
| 12 | CBDR ve/veya Asya aralığı **konsolide olmuyor** |

**Ek:** Temmuz–Ağustos ve FOMC/NFP beklenen haftalar — *"seek and destroy"* ortamı: *"Bu koşullarda **hiç işlem yapmamak** daha iyi. Doğru bilme şansın 50/50 bile değil."*

**Ve maliyet tarafı ölçülmek zorunda:** filtrelenmiş günlerde kaçırılan hareket, filtrenin maliyetidir. **Her iki kolu da say** — kaynak bunu bir yerde kabul edip (*"bazı günler ben de kaçırıyorum"*) başka yerde reddediyor (*"kuralları uygulamadan kazandıysan bilmek istemiyorum"*).

### 15.5 Sabit referans fiyatlar

| Referans | Kullanım |
|---|---|
| **0 GMT / NY gece yarısı açılışı** | Boğada: fiyatın **altına** inmesi alım fırsatı |
| **Pazartesi gece yarısı açılışı** | Tüm hafta taşınır |
| **Pazar/haftalık açılış** | Saatliğe çiz, **Perşembe'ye kadar uzat.** Ayı haftada: fiyat her gün altında kaldığı sürece kısa ara — **karşıt bir PD array'e çarpılana kadar** |
| **Perşembe dönüş teyidi** | Ayı hafta + fiyat Perşembe Pazar açılışının **üstüne** çıkarsa → büyük hafta içi dönüş |
| **European Open** | Model 2/3/4'te salı/çarşamba referansı — **New York saatine göre doğrula** |

**Neden bunlar ucuz:** seviye tartışmasız, yorum yok, **her gün/hafta yeni bir gözlem.**
**Tehlikeli kısmı:** *"birkaç seans öncesini de kullanabilirsin."* **Sabit pencere koy: sadece bugün ve dün.**

### 15.6 Gün içi profil kararı — 02:00'de kesinleşir

**Sekiz ayın en önemli yapısal iyileşmesi:** profil ayrımı **gerçek zamanda** kesinleşiyor.

> *"Anahtar **02:00 New York.** Klasik protraksiyon için **00:00**'a bakıyoruz. Gece yarısından sonra o hareketi görmezsek, **02:00** senaryosunu ararız."*

| | **Normal protraksiyon** | **Gecikmeli protraksiyon** |
|---|---|---|
| **SATIŞ günü** | Profil 1 | Profil 2 |
| **ALIM günü** | Profil 3 | Profil 4 |

**Normal profil filtre zinciri:**
1. **CBDR < 40 pip** — *"40'tan büyük gördüğün anda bu profil değildir"*
2. **Asya aralığı 20–30 pip**
3. **Fiyat 00:00'dan sonra 02:00'ye doğru karşı yönde hareket etmeli**
4. Protraksiyon = CBDR'nin **1–2 birimi**
5. Günün ekstremumu tipik olarak **02:00–04:00**

**Telafi kuralı:** CBDR geniş olabilir — **ama ancak Asya aralığı 20–30 pip'e inerse.**

**Eşik tutarsızlığı bir avantaja çevrilebilir:** CBDR için iki sayı (40/50), Asya için üç (20–30 / ≤20 / >40). **Eşik belirsizliği iddiayı çürütmüyor; hangi eşiğin işlediğini ölçmen gereken bir soruya çeviriyor.** 20/30/40/50'yi ayrı ayrı tara.

## 16. ADIM 7 — Tetik ve giriş

**Ne işe yarar:** emri başlatan olayı tanımlar. Buraya gelene kadar sahne ve kurulum zaten kurulmuş olmalı.

**Ve bir kapsam beyanı:** on iki ayda öğretilen onlarca kavramın karşısında, **kendi ifadesiyle kullanılan kurulum sayısı iki.**

> *"Sana işlem yaptığım **iki kurulumu** öğreteceğim. Başka bir şey yapmıyorum, başka örüntü aramıyorum."*
>
> *"ICT Stinger'ları görebiliyorum, reflection pattern'leri görebiliyorum... hepsini görebiliyorum **ve geçmelerine izin veriyorum.**"*

Aşağıdaki beş örüntü de aynı iki fikrin varyantları. **Hepsini birden kullanma — modelinin istediğini seç.**

### Örüntü 1 — OTE / iç aralık likiditesi

**Koşul:** üst zaman dilimi **boğa** (ayı tarafı tam ayna).

| # | Adım |
|---|---|
| **1** | Fiyat, üst zaman dilimi **iskonto array'inden** sekiyor |
| **2** | Bir **impuls salınımı**, salınım dibine yakın bir **FVG** yaratıyor |
| **3** | Piyasa yapısında bir **kısa vadeli dip** oluşuyor ve yükselmeyi başaramıyor |
| **4** | **Eşit tepeler** ya da daha yüksek tepe oluşuyor (hedef likiditesi) |
| **5** | Fiyat **FVG'ye VE kısa vadeli dibin altına** düşüyor |
| **6** | Satış stopları tetikleniyor → giriş |

**Dört teyidin örtüşmesi aranır:** fib'in **%62 / %70,5 / %79** bölgesi, **FVG**, **satış stoplarının olduğu kısa vadeli dip**, ve **bullish order block** — aynı yerde.

**Zorunlu bileşen:** kısa vadeli dip. *"Arada bir kısa vadeli dip olmazsa o kadar yüksek olasılıklı değil."*

**Model 1'in özel yürütmesi:** limit, **%62'nin 5 pip üstüne** (short için 5 pip altına). Stop, OTE anchor dibinin ya da New York seans dibinin **5 pip altına.**

### Örüntü 2 — Turtle soup / dış aralık likiditesi

| # | Adım |
|---|---|
| **1** | Fiyat, beklenen iskonto array'inin **ÖNÜNDE** sekiyor — **sahte dip** |
| **2** | **O sahte dipten SATIN ALINMIYOR** |
| **3** | Fiyat daha sonra beklenen array'e iniyor ve **satış stoplarını süpürüyor** |
| **4** | **Orada alınıyor** |

**Adım 2 bu kurulumun tamamı.** Klasik turtle soup *"dibin altına in, al"* der; bu versiyon **ilk sahte dibi atlıyor** — kurulumu daraltıyor ve **yanlışlanabilirliği artırıyor.**

**Kaynak açıkça veriliyor:** *Street Smarts* (Linda Raschke / Larry Connors).

**Sweep parametreleri:**

| Parametre | Değer |
|---|---|
| Beklenen süpürme derinliği | Eski dibin **10–20 pip** altı |
| Giriş | Limit, dibin **10–20 pip ALTINDA** — dibin üstünden değil |
| **Geçersizlik** | **25 pip'ten derin → stop koşusu değil, gerçek düşüş. İptal** |
| Stop | 30–50 pip |

> *"Dibin üstünden ya da tam dibinden almaya çalışıyorsan, muhtemelen sadece **girişi kaçırmaktan korkuyorsun.**"*

**Ve senin ölçümün:** sweep **tek başına** %33 isabet, 2R'de tam başabaş. Bu örüntünün değeri **eklenen koşullarda** — konum kapısı, ilk sahte dibin atlanması, derinlik bandı, eşit tepe ayrımı — çıplak sweep'te değil.

**Eşit tepe ayrımı:** *"Eşit tepeler **Şeker Diyarı** — onun 10 ya da 20 pip üstüne yapılan herhangi bir baskın o alım stoplarını toplar."* Sweep ölçümüne alt grup parametresi olarak ekle.

### Örüntü 3 — Raid → Displacement → MSS → FVG

**Modern modellerin çekirdek sırası (Model 13).** Sıra **zorunludur.**

**Ayı kurulumu:**

1. Üst zaman dilimi anlatısı ve hedef **aşağıda**
2. **Buy-side raid:** eski/eşit tepe üzerindeki stoplar alınır
3. **Displacement:** 5 dakikadan 1 dakikaya, ilk uygun grafikte **yakın salınım dibi hızlı bearish hareketle kırılır**
4. Bu hareket bir **bearish FVG** bırakır — tercihen aralığın **denge noktasının üstünde**
5. Fiyat FVG'ye döndüğünde, **retracement yönünden ilk temas edilen sınıra** sell limit
6. **Stop:** FVG'yi oluşturan dış mumun/salınımın arkasında
7. **Hedef:** dengenin altındaki en yakın iskonto array — önceki seans dibi, önceki gün dibi, FVG ya da altındaki likidite

**Boğa kurulumu tam ayna.**

**İki kritik kural:**

- **5 dakikadan aşağı inerken, ilk FVG'yi üreten grafiği kullan.** Sonradan daha güzel görünen bir zaman dilimi seçilmez.
- **AM penceresi 08:30–11:00 NY** (index futures) · **PM 13:30–15:30.** PM'de AM seansı ya da öğle arası tepesi/dibi raid edilir.

**Neden bu örüntü ölçülebilir:** dört olay da sıralı ve gözlemlenebilir. **Tanımlanması gereken tek şey:** *"hızlı displacement"* ve *"yakın salınım"* için kaç mum / kaç ATR (§8'de sabitlendi). **Bu tanım sonuca bakarak değişmemeli.**

### Örüntü 4 — Order block retesti → displacement → FVG

**Model 12'nin zorunlu olay sırası.** Bu, *"order block gördüm, girdim"* değildir.

1. Üst zaman diliminde bir **order block** oluşur
2. Fiyat bu order block'ı **retest eder**
3. Retest sonrası **belirgin displacement** ve tercihen **MSS** oluşur
4. **Bu yeni bacağın içinde** bir FVG meydana gelir
5. Fiyat o FVG'ye geri döner
6. Dönüş **kill zone içindeyse** giriş alınır

**Kritik ayrıntı:** ilk order block'ın yanında FVG bulunması şart değil. İşleme konu olan FVG, **order block retestinden sonraki displacement içinde** oluşmalı. Böylece ilk giriş kaçtıktan sonra **daha doğrulanmış ikinci giriş** aranır.

**Geçersizlik:** retest displacement üretmiyorsa · MSS yoksa · FVG yanlış prim/iskonto tarafındaysa · dönüş kill zone dışındaysa · hedefe 20 pip alan yoksa · korunması gereken salınım kırılıyorsa → **işlem yok.**

### Örüntü 5 — Salınım kırılımı onay tetikleyicisi

**Sıfır seçim noktalı, ve Örüntü 1–2'den yapısal olarak farklı:** seviye arayışı değil, **tetikleyici olay.**

1. Fiyat dönmeye başlayınca **HEMEN GİRME**
2. Bir **salınım tepesinin (dibinin) oluşmasını** bekle
3. O salınımın **KIRILMASINI** bekle
4. Kırılımdan önceki **son ters yönlü muma** dön
5. Orada gir; **stop yapının ucunun ötesinde**

**Neden kaydedilmeli:** aynı videoda örnek 1 (beş zaman dilimi zinciri) **beş seçim noktası** içeriyor ve ölçülemez; örnek 2 (bu) **sıfır** içeriyor. Fark: biri **seviye arayışı**, diğeri **tetikleyici olay.**

**Ölçülebilir karşılaştırma:** *seviyeye limit koymak ile salınım kırılımını beklemek, aynı sinyal setinde farklı ortalama R veriyor mu?*

### Yedek giriş — breaker

Turtle soup girişini kaçırdıysan: fiyatın kısa vadeli tepeyi geçmesini bekle → o tepe artık **bullish breaker.** Fiyat oraya döndüğünde gir.

**Gerekçe mekanik:** *"O daha düşük dipteki stop koşusundan sonra fiyatın oraya geri dönmemesi gerekir. Zaten oraya indi ve işini yaptı."*

### Emir türü eşlemesi — sıfır seçim noktalı kural

| PD array tipi | Emir |
|---|---|
| **Breaker / mitigation block** | **Stop emri** |
| **Likidite boşluğu / FVG** | **Stop emri** |
| **Order block / rejection block / eski dip-tepe** | **Limit emri** |

**İlke:** içinden **geçilmesi** beklenen array'lerde stop, **tepki** beklenen array'lerde limit.

**Emrin tam yeri:**

| | Alım | Satış |
|---|---|---|
| **Stop emri** | Düşüş mumunun **açılışı** | Yükseliş mumunun **açılışı** |
| **Limit emri** | Düşüş mumunun **kapanışı** | Yükseliş mumunun **kapanışı** |

**Mutlak ön koşul: mum KAPANMIŞ olmalı.** Oluşurken geçersiz.
**Dolum olmazsa:** yeni bir ters mum bekle, emri onun açılışına taşı. **Fiyatı kovalama.**

**Maliyet asimetrisi modellenmek zorunda:** limit kayma ödemez ama **doldurulmayabilir**; stop her zaman dolar ama **kaymayı öder.**

**Scalp istisnası:** *"Tüm scalping'ini **piyasa emirleriyle** yap. Limit emirlerini **çıkışların** için sakla."*

**Ve bir alt soru:** *limit dolumlarının kaçı ertesi günün ilk mumunda gerçekleşiyor?* Düşüş mumunun kapanışı, ertesi günün açılışına çok yakındır — bu bir giriş tekniğinden çok bir **açılış fiyatı girişi** olabilir.

### Alternatif giriş modu — strength entry (kırılımda giriş)

Dip/tepe tahmin etmek yerine **hareket başladıktan sonra** emir doldurur.

**Boğa:** 02:00 NY sonrası fiyat Asya dibinin ya da European Open'ın altına sarkar. Toparlanmaya başlayınca **Asya aralığı tepesinin 1 pip üstüne buy-stop.**
**Ayı:** önce Asya tepesi/açılış üstüne hareket, sonra **Asya dibinin 1 pip altına sell-stop.**

**Uyarı — ve bu atlanıyor:** kaynak bu girişte stopu **50 pip** veriyor; limit girişte **25 pip.** **Aynı lot kullanılmaz.** Pozisyon büyüklüğü stop mesafesine göre yeniden hesaplanmazsa **ikinci yöntem riski ikiye katlar.**

### Kademeli giriş — belirsizlik altında

> *"Pazartesi **çok küçük bir kısmını** sat; Salı daha yüksek tepe yapmazsa yüksek seviyede küçük bir parçan olur, yaparsa **tam pozisyonla zararda olmazsın.**"*

**Ölçülebilir soru:** tek seferde tam pozisyon vs üç güne yayılmış kademeli giriş — ortalama R ve varyans nasıl değişiyor?

### Alternatif model — 0 GMT (Londra'ya kalkmadan)

**En kısa tam kurulum.**

**Ön koşul:** **önceki işlem gününde** fiyat bir günlük PD array'e saygı göstermiş olmalı.

| Kalem | Alım | Satış |
|---|---|---|
| **Giriş** | 0 GMT açılışı, **VEYA 10–20 pip ALTINA limit** | 0 GMT açılışı, **VEYA 10–20 pip ÜSTÜNE limit** |
| **Stop** | **ADR(5)**, girişten **çıkarılmış** | ADR(5), girişe **eklenmiş** |
| **Hedef** | Üst zaman dilimi **prim** array | Üst zaman dilimi **iskonto** array |

**Bölünmüş giriş:** **yarısını 0 GMT'de** hemen içeri koy, **diğer yarısını 20 pip'lik limite.**

**Ve doğrudan sınanabilir bir alt iddia:** *"Fiyatın 0 GMT açılışından **70 pip yukarı** gitmeden aşağı kapanma ihtimali çok düşük."* → *aşağı kapanan günlerde açılıştan yukarı maksimum hareketin dağılımı nedir?* **Bu ölçüm kuralın gerçek stop-out oranını verir.**

### Gün içi tetikler — sekiz alım kurulumu

Hepsi Londra kill zone'unda, boğa yön eğilimiyle. **Satış tarafıyla on altı şablon — ve tek tek ölçülmeli, bir arada değil.**

| # | Kurulum |
|---|---|
| **1** | **Asya aralığının altı + 5 pip** |
| **2** | Önceki günün **New York seansındaki kısa vadeli dibin altındaki FVG** |
| **3** | Kısa vadeli bir dibin **altında duran bullish order block** |
| **4** | **CBDR/Asya aralığının 1 birim altı + iskonto array örtüşmesi**, 00:00–02:00 protraksiyonu içinde |
| **5** | Kısa vadeli bir dibin altında **tamamlanan likidite boşluğu doldurması** |
| **6** | Gece yarısı sonrası ralli olduysa: **02:00–04:00'te, 15/5 dakikalık order block'a ilk geri çekilme** |
| **7** | **Asya aralığının 1–2 birimi + iskonto array** |
| **8** | Kısa vadeli bir dip **iki kez süpürüldüyse ama yukarı protraksiyon olmadıysa** → turtle soup |

**Ve iki motor modeli — hangi girişin kullanılacağını belirler:**

| | **Offset accumulation** | **Re-accumulation** |
|---|---|---|
| **Ne olur** | Eski bir dibin **altına** yeniden fiyatlanır | Bir **fair value array'ine** aşağı yeniden fiyatlanır |
| **Kim tetiklenir** | **Satış stopları** — karşı taraf yaratılır | **Zayıf uzunlar** sıkıştırılır |
| **Giriş** | Stop koşusunun **altında** | Array'in **içinde** (OTE) |

### Kodlanamaz ama not düşülecek

**"Kendini ikna ediyorsan geç"** ve **"net, engelsiz yol"** — ikisi de sonucu görmemiş birine verilebilecek tanımlar değil.

**Ama ikincisinin vekili var ve kapatılabilir:** *"üstünde ne olduğu kolay görülmeli"* aslında **araya giren karşıt array sayısı** demek. §8'de ≤1 olarak sabitlendi.

Birincisini bir **öz-denetim notu** olarak tut, kural olarak değil — ve **uyguladığın işlemleri bu gerekçeyle kayıt dışı bırakma.**

## 17. ADIM 8 — Stop

**Ne işe yarar:** tezin yanlış olduğunu söyleyen fiyatı önceden belirler.

**Temel ilke:** stop **yapısal geçersizliğe** konur, sabit bir pip sayısına değil. Sabit pip yalnız o yapıyı koruyorsa kullanılır. *"Sabit 15 pip yapısal geçersizliği korumuyorsa, bu kurulum standart modele uymaz."*

| Model / kurulum | Stop |
|---|---|
| **Model 1** (OTE) | Anchor dibinin / seans dibinin **5 pip** altı |
| **Model 2** limit | Kurulum dibinin **25 pip** ötesi |
| **Model 2** strength entry | **50 pip** — *aynı lot kullanılmaz* |
| **Model 3 / 4** | **25 pip** ötesi |
| **Model 5** | Yapısal salınımın ~**15 pip** ötesi |
| **Model 6 / 7** | Salınımın **20 pip** ötesi |
| **Model 8** | **15 pip** — ve FVG/OB ile salınımın arkasında |
| **Model 9 / 10 / 11 / 12** | **20 pip** — ve raid ekstremi / array'in karşı tarafında |
| **Model 13** | FVG'yi oluşturan **dış mumun/salınımın arkasında** |
| **Order block** | Gövdenin altı (fitil değil) |
| **Sweep / turtle soup** | Kullanılan dibin **30 pip** altı |
| **CBDR + array örtüşmesi** | Girişin **30 pip** altı |
| **0 GMT kuralı** | **ADR(5)** |
| **Tanımlanmayan** | **ADR(5)'in %50'si** |

**Dört yasak:**

1. **Stopu mean threshold'un hemen altına koyma.** O bir geçerlilik ölçütü, stop seviyesi değil.
2. **Stop mesafesini R'ı büyütmek için daraltma.** R'ı küçültmek getiriyi büyütmez — maliyeti R cinsinden büyütür.
3. **Minimum mesafenin altına inme** (§14.2).
4. **Sabit pip ile ADR-ölçekli stopu karıştırma.** Kaynaklar ikisini de kullanıyor ve **aralarında seçim kuralı vermiyor.** Birini seç, ve ikisini **maliyet dahil** yan yana ölç.

## 18. ADIM 9 — Hedef ve yönetim

### 18.1 Hedef kaynakları

| Kaynak | Nasıl |
|---|---|
| **Karşıt PD array** | §13.1'deki listeyi **1'den 7'ye** doğru sırayla hedefle |
| **Beş katmanlı likidite haritası** | 1) Son yön kaymasının ötesi 2) Haftalık/aylık tepe-dip 3) **Son üç ayın tepesi/dibi** 4) Altı aylık 5) On iki aylık |
| **Çifte tepe/dip projeksiyonu** | İki eşit tepe + aradaki dip → aralığı tepeden yukarı yansıt. **Sıfır seçim noktalı tek hedef kuralı** |
| **Ölçülü hareket** | İlk bacağın boyunu, geri çekilmenin bittiği noktadan ekle |
| **Fib uzantısı** | **1,27 / 1,68 / %100 simetrik salınım.** **1,68 Fibonacci değildir — serbest parametre olarak tara** |
| **ADR projeksiyonu** | ADR(5) tepesi; kırılırsa ADR aralığına fib, **%127 / %162** |
| **Range projeksiyonu** | CBDR / Asya / flout biriminin katları |

**Üç bağlayıcı kural:**

**a) Hedef, girişten daha KÜÇÜK bir zaman diliminde olmalı** — işlemin zaman kutusuna sığması için:

| Giriş nereden | Hedef nerede |
|---|---|
| Aylık | Haftalık / günlük karşıt array |
| Haftalık | Günlük / 4 saatlik karşıt array |
| Günlük | 4 saatlik karşıt array |

**b) İlk hedef her zaman yeniden dengeleme:**

> *"Derin bir indirimden alıp **sadece dengeye** kadar hedeflesen bile, çok sayıda böyle işlem bulursun."*
>
> *"Konsolidasyonun karşı ucunu **beklemiyoruz — bunu bilmiyoruz.** Dengeye dönüş hareketini alıyoruz."*

**c) Giriş sınıfı hedefi belirler** (§2'deki tablo): iç aralıktan girdiysen dış aralıkta çık; dış aralıktan girdiysen iç aralıkta ya da karşı dış aralıkta çık. **Aynı sınıftan rastgele iki seviye seçilmez.**

**10 pip kuralı:** projeksiyonlar mutlaklık değil. **10 pip önce çık.** *"Son 25–30 pip'i masada bırakmayı umursamıyorum."* Hedef emrini eski tepe/dibin tam noktasına bırakırsan spread dolumu engelleyebilir.

**Ve tek başına yeterli değil:** *"%127'nin 60 dakikalık ya da 15 dakikalık bir prim array ile **hizalanmasını** arıyorum. Kendi başlarına hiçbir şey değiller."*

### 18.2 Kâr alma — model başına

| Model | Kademeler |
|---|---|
| **1** | Anchor'a dönüşte küçük parça · **+15** · **+20** · kalan: eski günlük tepe/dip |
| **2** | **+50** · **+75** · **+100'de tamamı** · **Perşembe NY açılışında zaman çıkışı** |
| **3** | +50 · +75 (ya da 75/130) · en az bir parça 100 pip · **+300'de %80 kapat** |
| **4** | **+100** · **+250** · **+500'de en az %80** · en çok %20 runner |
| **5** | **+40** · **+50** · üçüncüde %80 azalt, küçük runner |
| **6 / 7** | **+20** · **+40** · **+60'ta %80** |
| **8** | **+25'te tamamı** (basit) ya da 25 kilitle, 40/60/80'de parça |
| **9** | **+50'de tamamı** ya da +50'de %80, kalan %20 → 75 pip |
| **10** | **+50** · **50–75 arası** · alternatif %50/%25/%25 |
| **11** | **+30'da tamamı** ya da +30'da ana pozisyon, küçük runner |
| **12** | **+20'de tamamı** ya da +20'de %80, %20 runner |
| **Gün içi genel** | **20–30 pip'te her zaman bir şeyler al** · **ADR projeksiyonunun %60–80'inde her zaman al** |

**Zaman kademeleri (gün içi):** 05:00 NY · 07:00 New York açılışından önceki kısa vadeli tepede · 10:00–11:00 arası.

**Son parça neden bırakılır:**

> *"O küçük parçayı bırakıp maksimum potansiyeline kadar tutarsan, çoğu zaman tüm pozisyonu ilk hedefte kapatsaydın kazanacağın kadarını **tek başına o parça** kazandırır."*

**Ve bu senin fat-tail bulgunla uyumlu:** sabit hedef sağ kuyruğu kesiyor. **Ölçerken aynı girişleri sabit hedefle ve açık hedefle yan yana koy.**

**On bir kademeli yapı fazla:** kaynağın kendi sorusu — *"sadece iki lot yaptım, bu kadarını nasıl alırım?"* — cevapsız. **Üçe indir:** (a) ilk sabit hedef, (b) ADR/ana hedef %60–80, (c) kalan.

**Ve partial oranı da bir test değişkenidir.** %80/20, %50/25/25 ya da tam çıkıştan **birini seç.** Sonuç iyi göründüğü için geçmişteki her işleme farklı oran uygulanmaz.

### 18.3 Stop taşıma — iki aile, karıştırılmaz

| Aile | Kullanım | Kural |
|---|---|---|
| **%25/50/75** | Uzun hedefli planlar | Hedefin **%25'inde** risk %25 azalır · **%50'sinde** %50 azalır · **%75'te** başabaş |
| **Sabit pip aşamaları** | Model 11–12 | M11: **+15** stop daralt, **+20** başabaş · M12: **+10** daralt, **+15** başabaş |

**Bir işlemde iki aile karıştırılmaz.**

### 18.4 Başabaş — yasak, iki istisnayla

> **"Uzun vadeli işlemde başabaş, düşünülebilecek en kötü şeydir."**

**Ve senin ölçümün aynısını söylüyor:** kazananı 0R'de kesip kaybedeni −1R'de bırakan yapı **sıfır edge** üretir.

**İki savunulabilir istisna:**

1. **Pozisyonun %20–30'u zaten realize edildikten sonra** stop başabaşa çekilirse, "başabaş" olan işlem pozitif kapanır
2. **Alt zaman dilimi hedefi gerçekleştiğinde** — çünkü o hedeften sonra geri çekilme olasılığı artar

**Gün içinde:** günlük aralığın **%40–50'si tamamlanana kadar** stopa dokunma. *"Çift geçiş alabilirsin: geri gelip seni vururlar ve tüm hareketi kaçırırsın."*

**Ve bunun ölçülebilir gerekçesi:** *ters yönlü hareket, nihai aralığın **orta noktası** civarında kümelenir.* Bu bir **dağılım iddiası**, yön iddiası değil — ve doğrudan ölçülür: *kazanan işlemlerin MAE'si %50 civarında mı kümeleniyor?*

### 18.5 Trailing stop — 40/20 gün

| Hedefin ne kadarı yapıldı | Stop (uzun için) |
|---|---|
| **%0 – %50** | Son **40 işlem gününün** en düşük dibinin altı |
| **%75+** | Son **20 işlem gününün** en düşük dibinin altı |

**Gerekçe mekanik:** piyasa muhtemelen 40 gün geriye gidip o dibi aramayacak. **%75'te daralmasının sebebi:** nihai hedefe yaklaştın ve oraya hiç ulaşmayabilir.

### 18.6 Piramitleme — üç kısıt

1. **Yalnız doğru aralık yarısında.** Short'a dengede ya da primde; long'a dengede ya da iskontoda eklenir. **Hedef tarafına geçildikten sonra yeni pozisyon açılmaz.**
2. **Eklemeler küçülen boyutta.** Örnek dağılım: **5–3–1.**
3. **Hedefe yeterli yol kalmış olmalı.** Fiyat yolun yarısından fazlasını kat ettiyse ya da hedefe ~30 pipten az kaldıysa **yeni aşama icat edilmez.**

**Ve mutlak sınır:** bütün girişlerin **toplam riski** başlangıçta belirlenen üst sınırı aşamaz.

### 18.7 Sürekli teyit ve erken çıkış

**Tepki hızı:** **3 mumda 0,5R'ye ulaşmadıysa kapat.** *"Uyuşuksa o bölgede kurumsal emir yoktur."*

**Seviyede geçirilen süre — yeni bir boyut:**

> *"Fiyat o iskonto array'inin yakınında ne kadar uzun kalırsa, **olasılıklar keskin biçimde düşer.**"*

Tüm önceki filtreler **konum**, **zaman penceresi** ya da **büyüklük** üzerineydi. Bu, **seviyede kalış süresi** üzerine — tamamen mekanik, yön gerektirmiyor, ve **mevcut ölçüm çıktılarından geriye dönük hesaplanabilir.**

**Prim/iskonto asimetri teyidi — pozisyondayken sürekli kontrol:**

| Boğa işlemde | Ayı işlemde |
|---|---|
| **Her düşüş mumu destek sağlıyor** | Her yükseliş mumu direnç sağlıyor |
| Salınım tepeleri kırılıyor, sonrasında **daha yüksek tepeler** | Salınım dipleri kırılıyor |
| **Bearish order block'lar fiyatı TUTAMIYOR** | Bullish order block'lar tutamıyor |

**New York devam/dönüş kuralı:**

> **"New York seansı üst zaman diliminde bir prim ya da iskonto array'de AÇILMADIKÇA, New York HER ZAMAN Londra'da görülenin devamı olarak beklenir."**

İki ikili soru, sıfır seçim noktası, her işlem günü bir gözlem. **Taban çizgisi %50.**

**Londra kapanışı %20 geri çekilmesi:** ADR(5) **%25–33 aşılmışsa**, 10:00–öğlen arasında günlük aralığın **~%20'si** geri çekilir. **Ve iki kaynaktaki tek olumsuz sonuç bildirimi buraya ait:** *"Artık Londra kapanışında işlem yapmıyorum — yeterince pip alamıyordum."* **Kurulum tam parametreleriyle verildiği için, anlatıcının kendi olumsuz sonucunu doğrulayabileceğin tek yer burası.**

## 19. ADIM 10 — İptal ve başarısızlık

### 19.1 Geçersizlik koşulları — biri bile oluşursa çık

| Koşul |
|---|
| **Mean threshold kapanış bazında ihlal edildi** |
| Sweep **25 pip'ten (0,4 ATR) derin** indi |
| Array'de **3 mumdan fazla oyalandı** |
| **3 mumda 0,5R gelmedi** |
| İşlem yönüne **karşıt bir PD array'e** çarpıldı |
| **Propulsion block'ta mean threshold kırıldı** |
| **Korunması gereken salınım kırıldı** (FVG'nin dolması tek başına yeterli değil) |
| **Zaman kapağı:** gün içi 14:00 NY · haftalık Çarşamba Londra kapanışı · Model 2 Perşembe NY açılışı |

### 19.2 İki başarısızlık kuralı — terminal olumsuz durum

> **Aylık/haftalık yön içinde bir sinyal alıp stop olursan sorun değil. Aynı yönde SONRAKİ sinyal de başarısız olursa, muhtemelen bir kaymaya yakınsın — yön varsayımını yeniden değerlendir.**

**Bu, kaynakların başka hiçbir yerinde olmayan bir şeyi sağlıyor: bir terminal olumsuz durum.**

Altı kapının altısında da başarısızlık yolu aynıydı: *"daha alt zaman dilimine in."* Yöntem hiçbir noktada *"bu fikir yanlıştı"* demiyor — **bu kural diyor.**

### 19.3 Stop yedikten sonra

| Adım | Kural |
|---|---|
| **1** | **Riski yarıya indir** |
| **2** | Bir sonraki PD array'e geç |
| **3** | **Pozisyon boyutu: %50** |
| **4** | Yeniden giriş **modele göre** — §6.3'teki tablo |
| **5** | İki başarısızlıktan sonra **o fikir kapanır** |

**Ve kâr hedefi düşürülebilir:** *"Kaybettiğinin %60'ını alabiliyorsan %60'a razı ol."*

**Adım 4–5 neden var:** sınırsız yeniden giriş kaynaklarda **üç ayrı biçimde** öğretiliyor. Üçünün de ortak sonucu: **kuralın kaç işlem ürettiği söylenemez.** Bir kural kaç işlem ürettiğini söyleyemiyorsa ölçülemez.

### 19.4 Kesinlikle işlem alınmayacak durumlar

- Üst zaman diliminde **tek bir likidite hedefi seçilemiyorsa**
- **Dealing range uçları sonuç görülünce değişiyorsa**
- Hedefe modelin nominal hedefinden **daha az alan kaldıysa**
- Kurulumun zorunlu **raid / retest / displacement / MSS sırası** tamamlanmadıysa
- Giriş ideal bölgeden uzaklaştıysa ve **fiyat kovalanacaksa**
- **Yapısal stop risk bütçesine sığmıyorsa**
- Ekonomik takvim bilinmiyor ya da **saat dönüşümü doğrulanmadıysa**
- Modelin **seans/hafta hedefi zaten alındıysa**
- **Aynı kaybı geri alma** ya da sonuç gösterme isteği varsa
- **İşlem maliyeti beklenen avantajın büyük bölümünü tüketiyorsa**
- Kural kartında **"yorumuma göre", "güçlü görünürse"** gibi tanımsız merkezi ifadeler kaldıysa

---

# BÖLÜM IV — Ölçüm, eleme ve karar

## 20. EK MODÜL — Perakendenin formasyonlarını ters oynamak

**Ne işe yarar:** ana algoritmadan bağımsız, tek tek ölçülebilir dört filtre. Dördü de aynı iskelet: **klasik formasyon (mekanik tespit) + üst zaman dilimi konum filtresi → ters oyna.**

| Formasyon | Ters çalıştığı yer | Referans noktası | Hedef |
|---|---|---|---|
| **Bull flag** | Üst TF **prim** bölgesi | Bayrağın ucu | Sahte bayrağın yarattığı likidite boşluğu |
| **Bear flag** | Üst TF **iskonto** bölgesi | Aynı | Aynı |
| **Trend çizgisi** | Üst TF ters yön | **2. ve 3. dokunuş arasındaki tepe/dip** | **2. noktanın hemen ötesi** |
| **Omuz-baş-omuz** | Üst TF ters yön | Boyun çizgisi kırılımı = **stop koşusu** | **"Baş"ın ötesi**; ilk kâr **sağ omuz** |
| **Momentum ayrışması** | Üst TF ters yön | Tip 1 ayrışma = tuzak | Bullish OB ya da eşit diplerin altındaki stoplar |

**Neden bu aile ölçülebilir:**

- **Formasyon tespiti mekanik** — omuz-baş-omuz'un **standart, yayımlanmış tanımı var**, kütüphaneden alınabilir
- **Prim/iskonto konumu %50 ile mekanik**
- **Tanımsız hiçbir bileşen gerekmiyor**
- Trend çizgisi kuralı **çizginin öznelliğine bağımlı değil** — asıl referans "2. ve 3. dokunuş arasındaki tepe/dip", o grafikte belli bir yapı noktası

**Momentum ayrışmasının somut asimetrisi:** **gösterge** önceki dibinin altına iner, **fiyat** inmez → gizli ayrışma, trend devam. Tek satır, mekanik.

**Ek test edilebilir iddia:** *"Gerçek omuz-baş-omuz sadece ara/uzun vadeli tepelerde oluşur."* → **formasyonun ölçeği (kaç mum) ile başarı oranı arasında ilişki var mı?**

**Ve bir sınır:** "karşı taraf düşüncesi" dört kez tekrarlandı ve **tek başına bir sistem değil, bir filtre fikri.** Filtreler işlem sayısını azaltır.

## 21. Kayıt ve doğrulama protokolü

**Bu bölüm, protokolü kaynaklardan ayıran tek şey.**

### 21.1 Beş aşamalı doğrulama

#### Aşama 1 — Kuralları dondur

Tek bir model seç. Salınım, displacement, FVG, raid, yön ve hedef önceliğini **sayısal ya da açık evet/hayır ölçütleriyle** tanımla. Giriş, stop, hedef, saat, haber filtresi ve yeniden giriş kuralını **sonuç verisini görmeden** yaz. **Bu sürüme bir isim ve tarih ver.**

#### Aşama 2 — Geçmiş örneklem

**En az 100 kapanmış işlem toplamadan sonuç yorumlama.** Her işlemde kaydedilecekler:

| Alan | Not |
|---|---|
| Tarih, piyasa, gün, seans | |
| **Model sürümü** | Aşama 1'de verdiğin isim |
| Long/short ve üst zaman dilimi hedefi | |
| **Yön kaynağı** | Hangi yöntem (A/B/C/D) |
| **Konum** | Aralıktaki fib değeri (0,00–1,00) |
| **Array tipi ve sırası** | 1–7 |
| **İlk dokunuş mu** | Tükenme kuralı için |
| **Konfluans sayısı** | Örtüşen array sayısı (tam sayı) |
| **Araya giren karşıt array sayısı** | "Net yol" vekili |
| **Seviyede geçirilen bar sayısı** | |
| Giriş, stop, hedef, **planlanan R** | |
| **Spread, komisyon, kayma, finansman** | |
| **MFE ve MAE** | |
| **Net R sonucu** | |
| **Kurala uyum / ihlal** | |
| **Kurulumun gelmediği günler** | |

**Yalnız çalışan örnekleri sayma.** Kurulum beklenip oluşmayan günler ile geçerli olup stop olan işlemler **veri setinin parçasıdır.**

**Kaynakların ödevleri bunu gösteriyor:**

| Ödev | İstenen |
|---|---|
| *"Beş örnek bul, en az 5:1 versin"* | Yalnız tutan |
| *"Son iki yıla git, çerçevenin sağlam swing'leri süzüp süzmediğine bak"* | Yalnız süzülen |
| *"Bu profillerin nasıl açıldığını gör"* | Yalnız oluşan |
| ***"Biri çalışmasın"*** | **Bir başarısızlık dahil — sekiz ayda ilk** |

#### Aşama 3 — Ayrılmış veri

Kuralları geliştirirken kullandığın dönem ile son değerlendirme dönemini **kronolojik ayır.** Son bölümü kuralları değiştirmek için kullanma. **Strateji yalnız geliştirme döneminde güzel, ayrılmış dönemde zayıfsa yeni sermaye gerekçesi yoktur.**

#### Aşama 4 — İleriye dönük demo

Takvim süresinden önemlisi, **aynı kurallarla yeterli sayıda gerçek zamanlı karar vermektir.** Emir dolumu, haber kayması ve psikolojik müdahaleler bu aşamada görünür.

#### Aşama 5 — Karar ölçütü

**Yalnız kazanma oranına bakma. Net beklentiyi hesapla:**

```
Beklenti = kazanma oranı × ortalama kazanç R
         − kaybetme oranı × ortalama kayıp R
         − ortalama maliyet R
```

**Canlı deneme ancak dördü birden sağlanırsa düşünülebilir:**

1. Maliyet sonrası beklenti **pozitif**
2. Ayrılmış veri ve demo sonucu **aynı yönde**
3. Drawdown **kabul edilebilir**
4. Kurallar **uygulayıcıdan bağımsız tekrar edilebilir**

**Bu koşullardan biri yoksa sonuç "daha fazla lot" değil, işlem yoktur.**

### 21.2 Durdurma kriterleri — önceden yaz

| Kriter | Değer |
|---|---|
| **Minimum örneklem** | **100 kapanan işlem** |
| **Taban çizgisi** | **Rastgele giriş dağılımının %95 persentili.** Geçemiyorsa RET |
| **Ort. R** | Güven aralığıyla — nokta tahmin yeterli değil |
| **Kuyruk** | En kötü %5'lik dilim **ayrıca** raporlanır |
| **Bağımlılık** | **Ort. R'ın ne kadarı en iyi %5'lik işlemden geliyor?** |

**Ve OOS'a dokunma.** Range projesinde Aşama 1'de RET aldığında OOS'a hiç dokunmadın — o disiplin burada da geçerli.

### 21.3 Taban çizgileri — testi kuran şey bunlar

Kaynakların her zaman/dağılım iddiasının hesaplanabilir bir tabanı var. **Koşulsuz ortalamaya karşı ölçmek neredeyse her zaman yanıltıcı pozitif verir.**

| İddia | Taban çizgisi |
|---|---|
| Haftalık ekstremum Pzt–Çar arasında (%76) | **%60** (3/5 gün) |
| Haftalık dip Salı Londra'da (%77) | **%20** (1/5 gün) |
| Günlük ekstremum bir 4 saatlik pencerede | **%16,7** (4/24 saat) |
| Tahvil ekstremumu 08:00–09:00'da | **%14,3** (1/7 saat) |
| Endeks ekstremumu 09:30–10:30'da | **%15,4** (1/6,5 saat) |
| Tahvil ekstremumu AM seansında | **%57** (4/7 saat) — *zayıf kaldıraç* |
| Üç ardışık kapanıştan sonra dördüncü | **%50** |
| New York, Londra'nın devamı | **%50** |
| Haftalık aralığın %30–50'si Çarşamba'ya kadar | **Rastgele yürüyüşte √(3/5) ≈ %77** — iddia tabandan *düşük* olabilir |
| CBDR / açılış aralığı projeksiyonu | **Rastgele bir aynı uzunlukta pencere** |
| NR7 sonrası genişleme | **Oynaklık-eşleştirilmiş kontrol** |
| Pivot / yuvarlak sayı seviyeleri | **Rastgele yerleştirilmiş aynı sayıda seviye** |
| "Dört seviye doldurulur" | **Rastgele seviye ızgarası** — pivot mesafesi zaten aralığın fonksiyonu |
| Power three (açılış aralığın ucuna yakın) | **Rastgele yürüyüş simülasyonu** — kısmen tanım gereği doğru |
| Göreli güç çaprazı | **21 çaprazın sıralaması**, ve **ATR normalize** |

**Dar pencere / geniş pencere dersi:** aynı olgunun iki pencereli versiyonu varsa, **dar olanı test etmeye değer olandır** — tabanına göre daha fazla kaldıraç iddia ediyor.

### 21.4 Kapıları tek tek ekle

**Hepsini birden ölçme.** Her aşamada işlem sayısı ve ort. R kaydedilir:

| Aşama | Ne eklenir |
|---|---|
| **Taban** | Array girişi, filtresiz |
| **+1** | Konum kapısı (prim/iskonto) |
| **+2** | Mesafe ve maliyet kapısı |
| **+3** | Zaman kapısı (gün + kill zone) |
| **+4** | Tükenme kuralı |
| **+5** | Rejim kapısı (tandem/NR7/ADR) |
| **+6** | Konfluans / yuvalanma |
| **+7** | Fiyat dışı teyit (COT / açık pozisyon / SMT) |

**Filtreler işlem sayısını öldürür.** Range projende Aşama 1'de RET almanın sebebi tam buydu. **Çoklu enstrüman şart.**

### 21.5 Gecikme modellenmek zorunda

| Veri | Gecikme |
|---|---|
| **COT** | Salı pozisyonu, **Cuma yayını** — 3 gün. *Üç ayrı yerde kullanılıyor, hiçbirinde anılmıyor* |
| **Açık pozisyon** | Ertesi gün |
| **Faiz / makro** | Açıklama anı |

Modellenmezse sonuç **geçmişte hep iyi görünür, ileride hiçbir şey söylemez.**

### 21.6 Normalizasyon — pip değil

*"845 pip, Euro'daki birkaç yüz pip'e karşı"* — **bu karşılaştırma yapılamaz.** JPY çaprazında pip = 0,01 ve fiyat ~87; EUR/USD'de pip = 0,0001 ve fiyat ~1,15.

Ve yüzde de doğru birim değil: **bir çapraz, tanım gereği iki major'ın toplamıdır ve mekanik olarak daha oynaktır.** Daha büyük hareket, daha büyük **avantaj** değildir — aynı R için stop da orantılı geniş olmak zorundadır.

**Kural: her karşılaştırma ATR normalize edilmiş olmalı.** Bu, *"mega trade"* eşiği için de geçerli — tek bir dolar eşiği enstrümanlar arası işe yaramaz.

### 21.7 Backtest hijyeni

- **Mumun stopa dokunması yeterli değil** — gerçekçi **kayma ve spread** senaryosu maliyete eklenir
- **Emir tipi kaydedilir** — limit dolmayabilir, stop kayma öder
- **1 dakikalık grafikte** spread, tick büyüklüğü, sıra önceliği ve kayma teorik sonucu kolayca değiştirir
- **Sonucu yeniden sınıflandırma:** *"asıl hedef sonra geldi"* denemez. Model kendi tanımına göre hedefine ulaştıysa görevini tamamlamıştır

### 21.8 İşlem günlüğü şablonu

| Alan | Kayıt |
|---|---|
| Tarih / piyasa / seans | |
| Model ve sürüm | |
| Üst zaman dilimi hedefi | |
| Dealing range uçları | |
| Prim / iskonto | |
| Kurulum sırası | |
| Tetikleyici | |
| Giriş / stop / hedef | |
| Planlanan risk ve R | |
| Gerçek dolum ve maliyet | |
| Net sonuç, R | |
| MFE / MAE | |
| **Kurala uyum** | |
| Ekran görüntüsü | |
| Tek cümlelik ders | |

**Son satırdan önceki satır en önemlisi:** *"kazandım/kaybettim"* yerine **"kurala uydum/uymadım"** ayrı bir alan olarak doldurulur.

## 22. Çözülmemiş çelişkiler — karar vermen gerekenler

Bunlar hata değil; **kaynaklar kendi içlerinde iki farklı cevap veriyor** ve hangisinin doğru olduğu ölçülmedi. Her biri için bir karar yaz ve dönem boyunca değiştirme.

| # | Soru | A tarafı | B tarafı | Nasıl çözülür |
|---|---|---|---|---|
| **1** | **Bir array'e ikinci dokunuş** | *"birden çok kez işlem görebilir"* | **tükenmiştir** | *İlk vs ikinci dokunuş — ort. R farkı var mı?* **Dört yerde geçiyor, tek koşuda çözülür** |
| **2** | **Stop mesafesi** | Dar stop riski azaltır | Dar stop stop yedirir | Aynı kurulum, farklı mesafeler — ort. R nerede tepe yapıyor? |
| **3** | **Başabaş** | İkinci hedeften sonra çek | **Asla çekme** / **ilk kâr alındıktan sonra** | Üçünü ölç; ilk kâr sonrası hali savunulabilir olan |
| **4** | **Salınım tespiti** | 4 mum | 3 mum | Birini seç, sabitle |
| **5** | **Yön gerekli mi** | Kritik ön koşul | *"gerek yok, aralıkta işlem yap"* | Yön filtreli/filtresiz iki kol |
| **6** | **R:R tabanı** | 3:1'den az kullanma | **1:1 sabit** (scalp) | Gereken isabet %25 vs %54,4 — **aynı sistem olamaz** |
| **7** | **Yılda kaç kurulum** | 2, şanslıysan 3 | 6 · ya da 4–6 haftada 1–2 | Kendi kaydından say |
| **8** | **İsabet eşiği (3:1)** | %34 | %30 | **İkisi de yanlış — doğrusu %25** |
| **9** | **Gösterge kullanımı** | Reddediliyor | Williams %R kullanılıyor | Kullanacaksan parametreyi tara |
| **10** | **OTE hangi seviye** | **%62** (emir fiyatı) | **%70,5** (band) | **Birini seç ve yaz** |
| **11** | **Minimum kurulum büyüklüğü** | 40 pip altı yok | **2 piplik** gap girişi | Kapıyı tut, örneği at |
| **12** | **Süpürme derinliği** | >25 pip geçersiz | Aylıkta 50 pip delme normal | Zaman dilimine göre ölçekle (ATR oranı) |
| **13** | **Fitil mi gövde mi** | Stop fitilin üstüne | Gövde | **Gövde** — gerekçe: broker spread'i |
| **14** | **Fib uzantısı** | 127 / **162** | 127 / **168** | 1,272 ve 1,618 meşru; **1,68 değil.** Üçünü ayrı tara |
| **15** | **Swing süresi** | 2 hafta+ | Örnekler **3 gün ve 11 gün** | Örnekler kendi tanımının altında — tanımı sabitle |
| **16** | **CBDR eşiği** | < 40 | > 50 ise geç | **Tara: 20/30/40/50** |
| **17** | **Asya aralığı eşiği** | 20–30 | ≤20 · >40 sorunlu | Aynı — tara |
| **18** | **Stop sonrası yeniden giriş** | Model 1/2: **yok** | Model 3/5: **var, koşullu** | Model başına ayrı parametre (§6.3) |
| **19** | **Dealing range penceresi** | Charter: 20 gün | Mentorship: 60 gün gövde | Modele göre — ama **bir kez seç** |

**Ve en büyük tek boşluk:** dokuz/on üç adımlık prosedürlerin hiçbirinde **adımlar çeliştiğinde hangisinin kazandığı** söylenmiyor. Bir kontrol listesi, ancak **çelişki kuralı varsa** bir prosedürdür.

**Karar maddesi:** çelişki halinde §4(d) — **üst zaman dilimi kazanır; netleşmiyorsa işlem yok.**

## 23. ALINMAYANLAR — ve neden

| Ne | Neden elendi |
|---|---|
| **Mevsimsellik** | Hesaplama yöntemi gösterilmiyor, örneklem 19–40 gözlem, ve 15 yıllık ortalama 40 yıllığın **alt kümesi** — uyuşmaları tanım gereği beklenir. *Ayrı bir aç/kapa parametresi olarak ölç* |
| **Reclaimed block** | Ön koşulu, ölçmek istediğin şeyin kendisi |
| **Likidite boşluğu, zaman sınırı olmadan** | *"Eninde sonunda kapanır"* yanlışlanamaz |
| **Yedi ölçütlü kontrol listesi** | Minimum sayı yok, hiçbir madde zorunlu değil |
| **Yedi bileşenli karar ağacı** | Yedi girdiden beşi tanımsız; filtre yığını işlem sayısını öldürür |
| **Fraktal geri düşüş döngüsü** | Her başarısızlık bir sonraki seviyeye geçiş talimatına dönüşüyor. **Yanlışlanamaz** |
| **Sınırsız yeniden giriş** | Kuralın kaç işlem ürettiği söylenemez |
| **Sınırsız özyinelemeli çeyrekleme** | Yeterli derinlikte her fiyat bir alt-aralığın iskontosunda kalır |
| **Haber başlığı / manşet taraması** | Yazılamaz; eşik yok, seçim sonucu bilen tarafından yapılıyor. *(Fiyat vekili var: "hareket zaten bir süredir devam ediyor")* |
| **Sepet daraltma ("sekizden üçe")** | Daraltma kuralı yok |
| **On iki haftalık profil taksonomisi** | Ayırt etme kuralı bütün profillerde aynı; ancak hafta bittikten sonra sınıflandırılabiliyor. Ve kaynağın beyanı: *"haftalık profilleri öngörmek için sistematik bir yaklaşım yaratamadım"* |
| **Sekiz gün içi / sekiz dönüş taksonomisi**, bir arada | Tüm günleri kapsıyor. **Seçim kuralını çıkar, taksonomiyi bırak** |
| **"Analizinde başarısız olursan tersine çevir"** | Tanımlı tetikleyici yok — her sonucu kurala uygun kılıyor |
| **"Kârda olsan bile yürümüyormuş gibiyse çık"** | Tetikleyici öznel; sıfır-edge yapısını üretme riski taşıyor |
| **Piyasalar arası konfluans (8 dolar paritesi)** | Hepsi aynı doları içeriyor — **tek gözlemin sekiz görüntüsü** |
| **"6–12 ay gecikme" kuralı** | İlişkinin tutmadığı hiçbir an bırakmıyor |
| **Sabit 1:1 scalp** | Maliyet sonrası %54,4 isabet gerektiriyor, sağ kuyruğu kesiyor |
| **Zaman dilimi daraltarak stop küçültme** | R:R'ın payını düzeltip paydasını görmezden geliyor |
| **Getiri projeksiyonları** | Kayıpsız varsayımla kurulmuş. ">%100" iddiası kendi %30 isabet varsayımıyla **%24,5** çıkıyor. **"Aylık %6" bir performans hedefidir, kurulum özelliği değil** |
| **"Piyasa dört durumdan birindedir"** | Totoloji |
| **"İki tür salınım noktası"** | Totoloji — ya geçti ya geçemedi |
| **Vacuum block** | Kriptoda gerçek gap oluşmaz |
| **Hacim/fitil gerekçesi** | *"Gövdeler kurumsal, fitiller perakende"* **yanlıştır.** **Kural tutuldu, gerekçe atıldı** — yerine doğru gerekçe kondu: fitiller broker spread'ine göre değişir |
| **"Kuralları uygulamadan kazandıysan bilmek istemiyorum"** | Filtrenin fırsat maliyeti, değerinin yarısıdır. **Her iki kolu da say** |
| **Kayıtsız yüzdeler** | %76, %77, %70, %98 — dördü de örneklemsiz, yöntemsiz, taban çizgisiz. Ve **%77 > %76 olamaz** |
| **"Broker seni çıkarır, bilinçli kötü işlem aç"** | Uygulanabilir bir risk kuralı değil. Yerine: regülasyon, sözleşme koşulları, fiyat karşılaştırması ve eksiksiz işlem kaydı |

**Bir tanesi ayrı duruyor: "kendini ikna ediyorsan geç."** Kodlanamaz — *"belirgin"* öznel. **Ama doğru yönde bir önyargı koyuyor: sinyal bulmaya karşı.** Öz-denetim notu olarak tut, kural olarak değil.

## 24. Tek sayfa — akış

```
ADIM 0   MODEL seç (§6) · Kural kartını doldur (§7)
         Karar maddelerini doldur (§8) · Çelişkilere karar ver (§22)
         Hazırlık protokolünü kur (§9)
         ↓
ADIM 1   YÖN: aylık OB | ardışık ara vadeli tepe/dip
                | süpürülen taraf | son ters mumun kırılması ...... §10
         Belirsizse: son 3–4 ayın TERSİ
         ├── Karşıt array'den işlem ─────────────────────► YASAK
         ↓
ADIM 2   REJİM: tandem/ayrışma → TREND | ARALIK ............... §11
         NR7? >2×ADR günü? 3 ardışık kapanış? Piyasa durgun mu?
         Londra ADR'nin %80'ini koydu mu? ADR zaten doldu mu?
         ├── İŞLEM YOK ──────────────────────────────────► DUR
         ↓
ADIM 3   KONUM: dealing range, fib değeri .................... §12
         ├── Alım için > 0,50 ───────────────────────────► DUR
         ├── > 0,80 (alım) / < 0,20 (satış) ─────────────► DUR
         Üç sıralı durum · 20/40/60 pencereleri
         ↓
ADIM 4   SEVİYE: 7 array'i TEK TEK kontrol et ................ §13
         Hiyerarşi 1→7 · en yakını · breaker öncelikli
         Tükenmişleri ele · kapsanmış mumu ele
         Direnç sayımı: yol kalabalık mı?
         ├── Aday yok / yüksek dirençli ─────────────────► DUR
         ↓
ADIM 5   BÜYÜKLÜK: giriş↔hedef mesafesi ...................... §14
         ├── Modelin minimum alanı yok ──────────────────► DUR
         ├── Maliyet > R'ın %3'ü ────────────────────────► DUR
         ├── R:R tabanın altında ────────────────────────► DUR
         ├── Yapısal stop bütçeye sığmıyor ──────────────► DUR
         ├── Toplam açık risk sınırı aşılıyor ───────────► DUR
         ↓
ADIM 6   ZAMAN: kill zone içinde mi? Doğru gün mü? .......... §15
         12 kaçınma koşulundan biri aktif mi?
         CBDR < 40? Asya 20–30? 00:00→02:00 protraksiyonu?
         ├── Herhangi biri hayır ────────────────────────► DUR
         ↓
ADIM 7   TETİK: modelinin örüntüsü ........................... §16
         1) OTE  2) Turtle soup  3) Raid→MSS→FVG
         4) OB retesti→displacement→FVG  5) Salınım kırılımı
         Emir türü array'e göre · MUM KAPANMIŞ olmalı
         ├── Olay sırası tamamlanmadı ───────────────────► DUR
         ├── Giriş kaçtı, fiyat kovalanacak ─────────────► DUR
         ↓
ADIM 8   STOP: yapısal geçersizliğe ......................... §17
         ↓
ADIM 9   HEDEF: önce denge/ilk kademe, sonra karşıt array ... §18
         Hedef girişten KÜÇÜK bir TF'de · 10 pip önce çık
         İlk kâr → ANCAK SONRA başabaş
         %25/50/75 VEYA sabit pip aşamaları — ikisi birden değil
         3 mumda 0,5R yoksa çık · array'de 3 mumdan fazla ise çık
         ↓
ADIM 10  İPTAL: 8 geçersizlik koşulu ........................ §19
         Stop yedin → yarı risk · yeniden giriş modele göre
         İKİ ardışık başarısızlık → YÖN VARSAYIMI KAPANIR
         ↓
KAYIT    Alınan VE alınmayan her sinyal ..................... §21
         100 işlem → ayrılmış veri → demo → beklenti → karar
```

## 25. Kapanış — bu protokolün dürüst sınırı

Buradaki her kural iki kaynağın elemesinden geçti. Ama **hiçbiri ölçülmedi.**

**1. Doğru olan kısımlar, herkesin bildiği kısımlar.** R:R matematiği, anti-martingale, pozisyon boyutlama, kademeli çıkış, kaldıraç disiplini — hepsi doğru, hepsi **ICT'ye özgü değil.** Ve ölçülebilir bulunan parçaların çoğu da öyle: COT orta çizgisi **Williams COT Index**'tir, NR7 **Crabel'ın dar aralık filtresidir**, turtle soup **Street Smarts**'tan gelir, ara vadeli tepe/dip tanımı **Larry Williams**'tandır, ölçülü hareket ve Fibonacci geri çekilmesi onlarca yıllıktır.

**2. Özgün olan kısımlar, ölçülmemiş kısımlar.** Ve ölçülebilir hale getirilenler bile — breaker, tükenme kuralı, CBDR, Pazartesi–Çarşamba, endeks SMT, direnç sayımı, raid→MSS→FVG — **hâlâ hipotez.** §21 olmadan bu belge, ölçülmemiş bir sistemin daha derli toplu hali olur.

**3. Sistem kasten kodlanamaz bırakıldı.** İki kaynağın da kapanışı bunu açıkça söylüyor. Yani buradaki her karar maddesi **senin kararın** — ve ölçtüğünde ölçtüğün şey kaynağın modeli değil, seninki. Bu bir kusur değil, doğru etiketlenmesi gereken bir gerçek.

**4. Ve kaydedilmesi gereken bir eğri var.** On iki ay boyunca ton değişti: *"piyasalar %100 mühendislik ürünü, rastgele olsaydı bu kadar kesin olamazdım"* iddiasından, *"her zaman haklı değilim, insanım"* ve *"kârlı olmak için haklı olmak zorunda değilsin"* ifadesine.

Aynı seride: ilk kez kaybeden işlemler gösterildi · anlatıcı kendi yanılgısını örnek olarak kullandı · ilk kez bir **başarısızlık** örneği ödev olarak istendi · ilk kez bir yöntem **işe yaramadığı için terk edildiği söylenerek** anlatıldı. Charter rehberi ise doğrudan bir **doğrulama protokolü** ve **kural kartı** getiriyor — yani sorunun kendisi kaynağın içinde de kabul edilmiş.

**Bu eğri, içeriğin kendisinden daha bilgilendirici.**

**Ve asıl kazanım, bu yirmi beş bölüm değil — filtrenin kendisi.** Üç soru (ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü) ve dört ölçüt (§3) her kaynağa uygulanır.

**Başlangıç için en önemli kazanç pip değildir. Aynı koşulu, sonucu bilmeden, aynı biçimde tanıyabilmektir.** Bunu yapamıyorsan yeni bir kavram eklemek yerine **mevcut kuraldaki belirsizliği kapat.**
