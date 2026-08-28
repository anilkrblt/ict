# ICT Mentorship — Ocak 2017
## Eleme Notları — Beşinci Ay (17 video)

> **Not:** Bu ay 18 video. On sekizincinin metni ulaşmadı; geldiğinde bu belgeye eklenecek.

---

## Bu ayın karakteri

Dört ay boyunca içerik **fiyat yapısı** üzerineydi: order block, FVG, breaker, sweep. Beşinci ay iki yeni yöne açılıyor.

**Birincisi: zaman.** İlk kez "ne zaman" ve "ne kadar" soruları soruluyor — 20/40/60 günlük pencereler, ADR bazlı büyüklük tahmini, Londra kill zone. Bunlar fiyat yapısından farklı bir kategori, ve **ölçülebilirlik açısından daha temiz**, çünkü takvim ve saat yoruma açık değil.

**İkincisi: fiyat dışı veri.** Açık pozisyon, faiz farkları, piyasalar arası ilişkiler. Bunlar da yeni bilgi kaynakları.

Ama ay aynı zamanda **en zayıf bloğunu** da içeriyor: üç video mevsimselliğe ayrılmış, ve mevsimsellik veri madenciliğine en açık alan.

Ve ayın açılış ile kapanış argümanı aynı: *"Bu kadar isabetliysem rastgelelik yoktur."* Bu argüman ilk seferde de geçerli değildi, on dördüncü videoda tekrarlandığında da.

---

# BÖLÜM I — VİDEO VİDEO

## Video 1 — Look back / cast forward

### Açılıştaki mantık hatası

Video şu akıl yürütmeyi kuruyor: *"Fiyat seviyelerini bazen pip'ine kadar tutturuyorum. Bu, piyasada sıfır rastgelelik olduğunu kanıtlar."*

**Geçerli bir çıkarım değil, iki sebepten:**

**Kayıt yok.** Kaç tahmin yapıldı, kaçı tuttu? Bu sayı olmadan tek bir isabet hiçbir şey göstermez.

**"Rastgele" ile "öngörülemez" karıştırılıyor.** Kimse piyasanın kelimenin tam anlamıyla rastgele olduğunu iddia etmiyor. Tartışma, fiyatların *öngörülebilir bir edge bırakacak kadar* öngörülemez olduğu üzerine. "Tamamen rastgele değilse tamamen kontrollü olmalı" bir ikilem safsatası.

Ve önemli: **videonun geri kalanı bu açılışa dayanmıyor.** Kural, anlatıdan bağımsız ölçülebilir.

### Yazılabilir kural

**Kalibrasyon:**
1. Son kapanmış takvim ayının ilk işlem gününe dikey çizgi koy
2. Soluna 60, 40, 20 **işlem günü** işaretle
3. O aralıkta yapı yükselişte mi düşüşte mi belirle
4. Belirgin bir ara vadeli tepe/dip varsa çizgiyi **oraya taşı**

**İleri projeksiyon:**
5. Aynı çizgiden sağa 20, 40, 60 işlem günü işaretle
6. Bir sonraki yapısal kayma, o 60 günlük pencerede beklenir

**İddia:** piyasa her 3-4 ayda bir yön değiştirir.

### Ölçülebilirlik

**Çok güçlü:** takvim ve işlem günü sayımı tartışmasız. Yorum yok, kavram yok.

**Ve ilk kez bir zaman penceresi var.** Dört ay boyunca eksik olan buydu — "eninde sonunda olur" yerine "60 işlem günü içinde" deniyor. Bu, iddiayı yanlışlanabilir yapıyor.

**Hipotez:** *belirgin yapısal kaymalar, 3-4 aylık aralıklarla mı kümeleniyor, yoksa rastgele mi dağılıyor?*

Kripto için doğrudan uygulanabilir.

### Sorun: kalibrasyon esnekliği

4. adım: *"belirgin bir tepe/dip varsa çizgiyi oraya taşı."* "Belirgin" tanımsız. Ve çizgiyi taşımak, sağdaki pencerenin yerini değiştirir — yani **hedef pencere geriye dönük bir seçimle ayarlanabiliyor.**

Video örnekte bunu açıkça yapıyor: "buradan da kalibre edebilirdim ama yapmayacağım."

### Yanlışlanamazlık

**"Dönüş, konsolidasyon veya geri çekilme olur."** Üç senaryo, dördüncü seçenek yok — **her sonucu kapsıyor.** Birinci ayın "piyasa dört durumdan birindedir" totolojisinin zaman versiyonu.

**"60. gün tam tepeye denk geldi."** Pencere 20-60 gün arası, yani 40 günlük bir aralık. O aralıkta bir tepe bulmak zor değil.

---

## Video 2 — Piyasa yapısı ve yön

**Beş ay boyunca defalarca sorulup ertelenen sorunun ilk gerçek cevabı** — ve cevap mekanik.

### Ertelenen soru

Üçüncü ayın birinci videosunda: *"Order block mu turtle soup mu olduğunu nasıl ayırt edeceksin?"* — cevap: "ileride öğreneceksin."

Burada başka bir biçimde soruluyor: *"Fiyat eski tepeyi geçtiğinde dönecek mi devam mı edecek?"* Ve bu kez cevap veriliyor.

### Yazılabilir kural

Salınım noktalarının ilerleyişine bak:

**Aşağı yönlü:** her yeni dip bir öncekinden daha düşük **ve** her ralli yeni tepe yapamıyor → piyasa **satış tarafı likiditesini** arıyor.

**Yukarı yönlü:** her tepe daha yüksek, her düşüş dip yapamıyor.

Kural: **aşağı tarafta zemin kazanılıyor, yukarı tarafta kazanılmıyorsa**, sonraki hedef aşağıdaki stoplar.

**Tetikleyici gözlem:** bir tarafın büyük likiditesi alındıktan sonra, ilk ters yöndeki kısa vadeli dip kırılışı → rejim değişiminin ilk işareti.

### Neden bu farklı

Beş ay boyunca "yön" şöyle tanımlanıyordu: "üst zaman dilimi analizi" (tanımsız), "aylık order block" (kısmen mekanik), "piyasa yükselişteyse" (döngüsel).

Burada yön, **fiyat yapısının kendisinden** türetiliyor: salınım noktaları ilerliyor mu ilerlemiyor mu. Sıfır yorum.

**Ara vadeli tepe/dip tanımı da veriliyor:** solunda ve sağında birer kısa vadeli tepe olan tepe. Senin pivot mantığınla birebir aynı yapı.

Kaynağını da söylüyor: Larry Williams'ın piyasa yapısı sınıflandırması.

### Ölçülebilirlik

**Güçlü:** salınım ilerleyişi tamamen mekanik, senin harness'ında pivot altyapısı zaten var.

**Hipotez:** *salınım yapısının yönü, sonraki süpürmenin hangi tarafta olacağını öngörüyor mu?*

**Bu, senin sweep sisteminin eksik parçası.** Sweep'i tek başına ölçtün, sonuç sıfıra yakındı. Bu kural sweep'e yön filtresi ekliyor — ve filtre mekanik.

**Zayıf:** "kaç salınım noktası" ve "zemin kazanma eşiği" tanımsız. Sen kapatırsın.

---

## Video 3 — Açık pozisyon (open interest)

**Fiyat grafiğinin dışına çıkan ikinci gerçek veri kaynağı** (birincisi faiz üçlüsüydü).

### Yazılabilir kural

**Açık pozisyon:** piyasada kapatılmamış toplam sözleşme sayısı. Fiyattan bağımsız bir ölçü.

**Konsolidasyon + açık pozisyon artıyor** → dağıtım. Sonrasında düşüş beklenir.

**Destek seviyesi + açık pozisyonda ani ve büyük düşüş (%15+)** → toplama. Kısa pozisyonlar kapatılıyor.

### Ölçülebilirlik

**Güçlü:** veri kamuya açık, günlük, uzun geçmişli, ve **fiyattan bağımsız.** %15 eşiği somut.

**Zayıf:** "%15 düşüş **ne kadar sürede**" tanımsız.

**Kripto için:** vadeli kripto piyasalarında açık pozisyon verisi mevcut ve ücretsiz. **Senin bağlamına doğrudan aktarılabilir** — üstelik funding oranı gibi ek bir katman da var.

**Hipotez:** *destek seviyelerindeki fiyat tepkileri, açık pozisyondaki ani düşüşle birlikte olduğunda farklı mı sonuçlanıyor?*

**Uyarı:** açık pozisyon literatürü karışık. Fiyat-hacim-açık pozisyon ilişkisi üzerine çok çalışma var, tutarlı güçlü bir öngörü gücü gösterilmiş değil. Videonun "bunu kimse anlamıyor" iddiası yanlış — bu, vadeli piyasa analizinde standart bir araç.

### En zayıf akıl yürütme: "algoritma" argümanı

**İddia:** bir program herkesin stopunu bilemez → standart bir referans kullanmalı → en mantıklısı son 20/40/60 günün uçları → demek ki fiyat oraya gidiyor.

**Neden geçersiz:** "bir şeyin nasıl yapılabileceğini hayal edebiliyorum" ile "o şey böyle yapılıyor" arasında geçiş yapıyor.

**Daha basit açıklama var:** eski tepe ve dipler, insanlar oraya emir koyduğu için önemlidir. Merkezi bir motora gerek yok. Herkes aynı grafiği görür — bu, mikroyapı literatüründe desteklenen bir gözlem.

**Ve bir tarihsel yanlışlık:** piyasa yapıcı, alış-satış kotasyonu veren ve spread'den kazanan taraftır — fiyatı sürüklemez, likidite sağlar.

**Ama kritik:** kural bu anlatıdan **bağımsız** ölçülebilir. "Son 60 günün tepesi önemli mi" sorusu, arkasındaki hikâye doğru olmasa da geçerli.

### Kayda değer bir itiraf

> *"20/40/60 gün, tam o günde dönüş olacağı anlamına gelmez. İlk derste bunu daha çok vurgulamalıydım — herkes öyle sandı."*

Bu dürüst ve önemli. Düzeltilmiş hâli: 20/40/60 bir **pencere**, bir tarih değil. İşlevi dönüş tarihini vermek değil, **likiditenin nerede olduğunu** göstermek.

### Bir alt kural — gözden kaçabilir ama ölçülebilir

> Son 60 günün hem tepesi hem dibi süpürülmüşse, fiyat o aralığın **dışındaki** bir sonraki tepe/dibe doğru büyük bir hareket yapar.

İki koşullu, mekanik, ve karşılaştırma grubu doğal: tek taraf süpürülmüş durumlar.

### Kaynak

Larry Williams'ın kitabı açıkça veriliyor — **seride ilk kez bir kaynak.** Vadeli piyasa mekaniği için gerçek bir referans.

---

## Video 4 — 20 günlük likidite havuzları

**Beş ayın en kolay kodlanabilir kuralı.**

### Yazılabilir kural

1. Bugünden geriye **60, 40, 20** işlem günü işaretle
2. Her aralığın **en yüksek** ve **en düşük** noktasını bul
3. Yüksek noktaların üstünde alım stopları, düşüklerin altında satış stopları
4. İleriye doğru da takip et — her 20 günde yeni bir tepe/dip

**Toplam pencere: 120 gün.**

Ve bu, üçüncü videodaki kalibrasyon sorununu **çözüyor.** "En belirgin kaymayı bul" adımı yok — sadece takvim ve maksimum/minimum. **Sıfır yorum.**

### Serinin en basit yön kuralı

**Alım stopları sürekli alınıyor, satış stopları nadiren → yön yukarı**
**Satış stopları sürekli alınıyor, alım stopları nadiren → yön aşağı**
**Örüntü değişirse → çeyreklik kayma**

Sayılabilir: son N tane 20 günlük tepe/dipten kaçı süpürüldü.

### Turtle referansı

Video, 20 günlük tepe/dip fikrinin kaynağını söylüyor: Richard Dennis'in Turtle traderları. Doğru — Turtle sistemi gerçekten 20 günlük Donchian kırılımıydı.

**Ve senin için özel bir bağlantı:** senin ITP sisteminde **Donchian kırılımı** bir giriş moduydu.

Videonun iddiası: Turtle kırılımlarının çoğu sahtedir → kırılımı almak yerine **ters oynamak.**

**Doğrudan test edilebilir:** *20 günlük kırılımlar devam mı ediyor yoksa geri mi dönüyor?*

### Ölçmeye değer üç soru

1. 20 günlük tepe/dip kırılımları ne oranda geri dönüyor?
2. Süpürme oranı asimetrisi, sonraki hareketin yönünü öngörüyor mu?
3. 60 günlük aralığın uçlarına yakınlık, tepki büyüklüğünü etkiliyor mu?

**Zayıf:** "sürekli" ve "nadiren" tanımsız.

---

## Video 5 — Piyasa nasıl döner: iki tip

**Beş ayın en büyük kavramsal sadeleştirmesi** — ve video bunu açıkça ilan ediyor.

> *"Ya breaker'dır ya failure swing'dir. Başka hiçbir şey olmaz."*

Beş ay boyunca onlarca kavram verildi. Burada hepsi **iki dönüş tipine** iniyor.

### Yazılabilir kural — iki dönüş tipi

**Breaker (stop süpürmeli):**
1. Fiyat bir seviyeye yaklaşır, kısa vadeli tepe yapar
2. Geri çekilir, kısa vadeli dip oluşturur
3. **Yeni bir yüksek tepe yapar** — stoplar süpürülür
4. Kırılır ve o kısa vadeli dibin altına iner → yapı kayması
5. **Giriş:** o dip seviyesine dönüşte satış (stop, yüksek tepenin üstü)

**Failure swing (stop süpürmesiz):**
1. Fiyat bir seviyeye yaklaşır, geri çekilir
2. Tekrar dener ama **önceki tepeyi geçemez**
3. Aradaki kısa vadeli dibin altına iner
4. **Giriş:** o dip seviyesine dönüşte satış

**Fark tek noktada:** breaker'da eski tepe geçiliyor, failure swing'de geçilemiyor.

### İşlevsel tasarım

- **Breaker** ideal girişi verir
- **Failure swing** kaçırılan durumlar için **yedek** giriş sağlar

Ve her ikisinde de **stoplar zaten süpürülmüş bölgeye konuyor.** Gerçekten iyi bir tasarım fikri.

### Tüketicilik iddiası — ve neden totolojik

Her dönüş noktasında önceki tepe ya geçilmiştir ya geçilmemiştir. Üçüncü seçenek yok. Sınıflandırma tüm dönüşleri kapsıyor — ama bu bir keşif değil, tanımın sonucu.

**Ama fark var:** o totoloji bir şey öngörmüyordu. Bu ikisi **farklı giriş kuralları** üretiyor, ve o kurallar test edilebilir.

### Ölçmeye değer kurulum

Senin sweep ölçümünle bağlantısı çok net. Sen sweep'i ölçtün — o, **breaker'ın ilk üç adımı.** Yapı kayması ve dönüşe giriş kısmını ölçmedin, failure swing'i hiç ölçmedin.

| Grup | Tanım |
|---|---|
| A | Sweep var, yapı kayması var (breaker) |
| B | Sweep yok, tepe geçilemedi, yapı kayması var (failure swing) |
| C | Sweep var, yapı kayması yok (senin ölçtüğün) |

Üç grubun ort. R'ı farklı mı? Tek koşuda cevaplanır.

**Hiç grafik örneği yok** — sadece şematik. Geriye dönük seçim sorunu ortadan kalkıyor.

---

## Video 6 — Tandem / ayrışma rejim testi

**Serinin en özgün yapısal fikri** — ve fikir yön değil, **rejim** hakkında.

### Yazılabilir kural

10 yıllık tahvil fiyatı ile dolar endeksini yan yana koy:

- **Ters yönde hareket ediyorlarsa** → **trend rejimi.** Uzun vadeli pozisyon için uygun.
- **Aynı yönde hareket ediyorlarsa** → **konsolidasyon rejimi.** Trend bekleme.

Mantığı sağlam: tahvil düşerse faiz yükselir, faiz yükselirse dolar güçlenir. Bu **ters ilişki normal durumdur.** Aynı yöne giderlerse ilişki bozulmuş demektir.

### Neden bu farklı

Beş ay boyunca her kural **yön** hakkındaydı. Bu, farklı bir soruyu soruyor: **şu an trend var mı yok mu?**

**Ve senin projenle doğrudan ilgili.** Senin range sistemin `RANGE_ACTIVE` / `NO_RANGE` ayrımını fiyat yapısından türetiyordu — beş koşullu bir tanım, ve Aşama 1'de RET aldı.

Buradaki fikir rejimi **iki serinin ilişkisinden** türetiyor. Tamamen farklı bir bilgi kaynağı.

### Ölçülebilirlik

**Güçlü:** iki seri kamuya açık, korelasyon hesabı standart, rejim tanımı ikili.

**Hipotez:** *korelasyonun işareti, sonraki dönemin trend/konsolidasyon karakterini öngörüyor mu?*

Ölçümü basit: yuvarlanan korelasyon, sonraki N günün trend gücüyle karşılaştır.

**Kripto analoğu:** BTC ↔ dolar endeksi, ya da BTC ↔ Nasdaq. Kripto-makro korelasyonu dönemsel olarak değişiyor, ve o değişim ölçülebilir.

### Mevsimsellik kısmı zayıf

Tahvil ve dolar için mevsimsel grafikler gösteriliyor ama **nasıl hesaplandığı belirtilmiyor.** Kaç yıllık ortalama, uçlar nasıl ele alınmış?

Ve mevsimsellik, finansal piyasalarda en kırılgan bulgu türlerinden — veri madenciliğine en açık alan.

**Videonun kendisi kabul ediyor:** "mevsimsellik çalışmazsa tersine bak." Yanlışlanamaz bir yapı.

---

## Video 7 — Tahvil / dolar SMT

Yeni kavram getirmiyor — SMT fikrinin üçüncü uygulaması. Ama **iki metodolojik ders** veriyor.

### Metodolojik sorun 1: "bu veriyi görmezden gel"

Video, seçim gecesinin oluşturduğu büyük fitili **"görmezden gel, sadece yapıya bak"** diyor.

Bu, veri seçiciliğinin doğrudan tarifi. O fitil gerçek bir fiyat hareketi. Analize dahil edilirse ayrışma tablosu değişiyor.

**Ölçüm açısından kritik:** bir kural, "rahatsız edici veri noktalarını atla" içeriyorsa **kodlanamaz.**

### Metodolojik sorun 2: karşıtı tanımlanmamış

Üç örnek veriliyor, üçü de "ayrışma" ilan ediliyor ama üçü **farklı yapıda:**

| Örnek | Tahvil | Dolar | Neden ayrışma? |
|---|---|---|---|
| 2015 | Daha düşük dipler | Daha düşük tepeler | Dolar yükselmedi |
| 2016 | Eşit dipler | Daha yüksek tepeler | Dolar fazla yükseldi |
| 2016 Kasım | Daha düşük tepe | Daha düşük dip | İkisi de ters |

**Simetrinin ne olduğu tanımlanmadığı için, her durum bozulma olarak okunabiliyor.**

Gerçekten simetrik bir durum nasıl görünürdü? Video göstermiyor — ve göstermediği için kural yanlışlanamaz.

**Ölçmek istersen ilk adım:** simetriyi tanımla, ayrışmayı onun olumsuzu olarak say.

### İyi olan taraf

**Zaman ufku itirafı dürüst:** *"üç ay diyorum ama genelde yarısı kadar tutuyorum."*

**Sonuç cümlesi ölçülü:** *"mükemmel değil, para kaybetme ihtimalini ortadan kaldırmaz, sadece olasılıkları lehine çevirir."* Üçüncü ayın "%90 isabetliyim" iddiasından çok daha makul.

---

## Video 8 — Faiz farkı (carry trade)

**Serinin en sağlam ekonomik temeli** — ve en açık geriye dönük gerekçelendirme örneği.

### Yazılabilir kural

1. Merkez bankası politika faizlerinin listesini al
2. **Yüksek faizli** bir para birimi seç
3. **Düşük faizli** bir para birimi seç
4. Eşleştir → işlem yapılacak parite
5. Yüksek faizliyi al, düşüğü sat

### Ekonomik zemin gerçek

**Carry trade**, akademik olarak en çok incelenmiş döviz stratejilerinden biri. Ve şu bilinen:

**Uzun vadede pozitif getiri üretmiş.** Bu, "forward premium puzzle" olarak bilinen ve teoriyle çelişen bir bulgu.

**Ama karakteri özel:** uzun süre küçük kazançlar, sonra ani ve büyük kayıplar. Risk iştahı bozulduğunda yüksek faizli para birimleri hızla değer kaybeder.

**Yani strateji gerçek, ama getirisi bir risk priminin karşılığı** — bedava öğle yemeği değil.

**Video bu risk boyutundan hiç bahsetmiyor.** 2008'de ve 2020'de carry pozisyonları haftalar içinde yılların kazancını sildi.

### Zamanlama kısmı geriye dönük

*"Faiz farkı yönü verir, teknikler zamanlamayı verir"* deniyor. Ama zamanlama iki örnekte de sonuç bilinerek anlatılıyor.

**Ve videonun kendi ifadesi kritik:** *"ödev olarak geriye git ve temellerin neden o hareketlerle uyumlu olduğunu geriye dönük gerekçelendir."*

Bu, kelimenin tam anlamıyla geriye dönük gerekçelendirme egzersizi. Öğrenme yöntemi olarak **tam tersi** yapılmalı.

### Anakronizm

Faiz oranları **sonradan düzeltilmiş** olarak sunuluyor: "işlem sırasında %0.50'ydi ama şimdi %0.75, o yüzden %0.75 gösteriyorum."

Bir kararın gerekçesi, karar anında bilinen bilgiyle kurulmalı. Senin `#013` ve kör veri sarmalayıcın tam bu problemi çözmek içindi.

### Ölçmek istersen ikisini ayır

**1. Saf carry:** faiz farkı yönünde pozisyon, teknik katman yok. Bu, bilinen sonucu tekrarlar ve **taban çizgin olur.**

**2. Carry + teknik zamanlama:** aynı yön, ama giriş bir sinyale bağlı.

İkincisi birincisini geçiyor mu? Ölçülecek soru bu.

**Kripto analoğu: funding oranı.** Perp piyasasında funding, bir tür faiz farkı işlevi görüyor. Ve `#014`'te funding'i maliyet modelinden çıkarmıştık — o veri hâlâ elinde.

---

## Video 9 — Piyasalar arası ilişkiler

**Hiç grafik yok, hiç örnek yok** — sadece ilişki listesi. Altı ayda ilk kez geriye dönük örnek seçme sorunu tamamen yok.

### Yazılabilir kural — ilişki matrisi

| İlişki | Yön |
|---|---|
| Tahvil ↔ Hisse | Pozitif |
| Tahvil ↔ Emtia | Negatif |
| Dolar ↔ Emtia | Negatif |
| Dolar ↔ Hisse/Tahvil | Pozitif |

**Spesifik eşleşmeler:** dolar↑ → altın↓ · altın↑ → AUD, NZD↑ · petrol↑ → USD/CAD↓ · Dow↑ → Nikkei↑ · Nikkei↓ → USD/JPY↓

**Gecikme uyarısı:** ilişkiler 6-12 ay gecikmeli olabilir.

### Klasik kaynağı

Bu, John Murphy'nin "Intermarket Analysis" çerçevesi. Video kaynak vermiyor ama fikir 1990'lardan beri standart.

### Kritik uyarı: bu ilişkiler sabit değil

**Bu, videonun hiç değinmediği ve senin bilmen gereken en önemli şey.**

**Tahvil-hisse korelasyonu rejime bağlı olarak işaret değiştirir:**

- **Enflasyonist dönemlerde** (1970'ler, 2022) ikisi birlikte düşer
- **Durgunluk korkusu dönemlerinde** tahvil yükselirken hisse düşer — korelasyon **negatif**
- **Normal dönemlerde** ilişki zayıf

Video bu değişkenliği "nadir istisna" olarak geçiştiriyor. Ama 2022'de tam olarak bu oldu.

**Doğru okuma:** bu ilişkiler var ama **koşullu.** Sabit kurallar değil, rejime bağlı eğilimler.

**Ve ilginç:** altıncı videonun rejim testi tam bu sorunu çözüyor. Bu video ilişkileri sabit kabul ediyor; altıncı video ilişkinin bozulmasını sinyal sayıyor. **İkincisi daha doğru.**

### 6-12 ay gecikme — en zayıf kısım

Böyle bir pencerede "önce bu oldu, sonra şu oldu" ilişkisi kurmak neredeyse her zaman mümkün. Ve gecikme tanımsız olduğu için, ilişki tutmadığında "henüz gecikme dolmadı" denebilir.

### Kripto için

**Analoğu var ve ölçülebilir:** BTC ↔ Nasdaq, BTC ↔ dolar endeksi, BTC ↔ altın. Bu korelasyonların dönemsel değiştiği biliniyor.

**Hipotez:** *kriptonun makro varlıklarla korelasyonu, rejim göstergesi olarak kullanılabilir mi?*

---

## Video 10 — Mevsimsellik: giriş

### Açılıştaki uyarı — ve gerçekten doğru

> *"Mevsimsellikler yalnızca geçmiş performansın yol haritasıdır. Geçmişte yaptığı, gelecekte yapacağını garanti etmez. Sadece bir teyit katmanı."*

**Altı ayın en doğru metodolojik cümlesi.** Ama videonun geri kalanı bu uyarıyı taşımıyor: "yüklü bir avantaj", "hazine haritası gibi."

### Yazılabilir kural

40 yıllık mevsimsellik grafiğinden yön al: CAD vadeli eylül–aralık düşüş → USD/CAD alım. Mart–haziran yükseliş → USD/CAD satım. Ham petrol mart–temmuz yükseliş.

### Mevsimsellik, veri madenciliğine en açık alan

**Sorun basit:** 40 yıllık veride, dört çeyrek × birçok enstrüman taradığında bazı dönemler **kaçınılmaz** biçimde güçlü görünür. Bu, gerçek örüntü değil, çoklu test probleminin sonucu.

Ve mevsimsellik bulgularının çoğu keşfedildikten sonra kaybolur — yayımlanan anomalilerin getirisi tipik olarak yarıya iner ya da yok olur.

**Ortalama alma sorunu:** 40 yıllık ortalama, birkaç aşırı yılın etkisiyle şekillenebilir. Video hesaplama yöntemini, dağılımı, kaç yılın uyduğunu hiç söylemiyor.

**Doğru ölçüm:** her yıl için ayrı sonuç, kaç yılda tuttu, medyan ne, dağılım ne kadar geniş.

### Videonun kendi örneği fikri çürütüyor

USD/CAD için dokuz yıl gösteriliyor ve **iki yılda çalışmadığı kabul ediliyor.**

Sonra: *"Bu iki yılda ana trend aşağıydı, o yüzden alım aramamalıydınız."*

**Bu, mevsimselliğin tek başına işe yaramadığını söylemek.** Ve trend yönü **sonradan** biliniyor.

### Petrol için not

Petrol ve doğalgazda mevsimsellik için **gerçek fiziksel mekanizma** var — sürüş sezonu, ısıtma sezonu, depolama döngüleri. Döviz mevsimselliğinden daha savunulabilir.

Ama bu mekanizmalar **herkes tarafından biliniyor** ve fiyata girmiş durumda.

---

## Video 11 — NZD mevsimsellik, on yıl

### Yazılabilir kural — sekiz pencere

**Düşüş beklenen:** şubat ortası–mart ortası, mayıs, ağustos ortası–ekim
**Yükseliş beklenen:** mart–nisan, haziran–temmuz, eylül–ekim, kasım sonu–aralık başı

### Ama sekiz pencere yılın tamamını kaplıyor

Topla: şubat-mart, mart-nisan, mayıs, haziran-temmuz, ağustos-ekim, eylül-ekim, kasım-aralık.

**Yılın her ayı bir pencerenin içinde.** Ve pencereler üst üste biniyor — ağustos-ekim düşüş beklenirken eylül-ekim yükseliş bekleniyor.

Fiyat ne yaparsa yapsın bir pencereye uyuyor. Birinci ayın totolojisinin takvim versiyonu.

### Videonun kendi verileri

| Yıl | Şubat-Mart | Mayıs |
|---|---|---|
| 2007 | Tuttu | Tuttu |
| 2008 | Tuttu (küresel kriz) | Tuttu |
| 2009 | Tuttu | **Tutmadı** |
| 2010 | **Düz** | Tuttu |
| 2011 | Tuttu | Tuttu |
| 2012 | Tuttu | Tuttu |
| 2013 | Tuttu | Tuttu |
| 2014 | **Konsolidasyon** | **Sadece geri çekilme** |
| 2015 | Zayıf | Tuttu |
| 2016 | **Düz** | **Sadece geri çekilme** |

**On yılda dört yıl açıkça tutmadı**, iki yıl belirsiz.

Ve video bunları saymıyor — her birini ayrı ayrı açıklıyor: "2008 kriz vardı", "2014 konsolidasyondaydı", "2016 boğa piyasasıydı."

**Bu, tam olarak bir kuralı ölçülemez kılan yapı.**

### Yön filtresi devrede ve tanımsız

Asıl kural: *"boğa piyasasındaysak alım pencerelerini kullan."* Ama "boğa mı ayı mı" tanımı yok — ve sonuçlar görüldükten sonra veriliyor.

**Mevsimsellik kendi başına hiçbir şey söylemiyor**, yön filtresine bağlı, ve o filtre tanımsız.

### Örneklem

19 yıl deniyor, 10 yıl gösteriliyor. Yılda bir gözlem → **örneklem 10.** Senin `#029`'unda 100 işlem eşiği vardı.

Ve "19 yıl ile 15 yıl uyuşuyor" argümanı geçersiz: **15 yıl, 19 yılın içinde.** İki örtüşen dönem bağımsız doğrulama değil.

---

## Video 12 — Eşleştirilmiş mevsimsellik

### Görünüşteki yöntem

Her parite için **iki mevsimsellik grafiği** yan yana — parite tarafı ve dolar endeksi tarafı. İkisi zıt yönde görünüyorsa "ideal" sayılıyor.

Yedi parite listesi veriliyor, altısında pencere mart-mayıs veya haziran-temmuz.

### Temel mantık hatası

**Bu "doğrulama" hiçbir şey doğrulamıyor.**

**Dolar endeksi, bu paritelerden hesaplanıyor.** Euro düşerken endeksin yükselmesi bir teyit değil — **aritmetik zorunluluk.**

Video bunu bağımsız iki gözlem gibi sunuyor. Ama iki grafik aynı verinin iki görüntüsü.

**Ölçüm açısından kritik:** bir hipotezi doğrulamak için **bağımsız** bir veri kaynağı gerekir.

### Ve pencereler örtüşüyor

Yedi paritenin altısı aynı iki dönemde. Bu, yedi bağımsız bulgu değil — **iki dolar dönemi**, yedi pariteye yansımış hali.

Asıl iddia tek: "dolar mart-nisan'da tepe, mayıs'ta dip yapar." Geri kalanı türev.

### Ölçmeye değer tek şey

*Dolar endeksinin mart-nisan tepe / mayıs dip eğilimi, rastgele seçilmiş bir pencereden farklı mı?*

Ve **doğru test:** ilk 20 yılda bulunan örüntü, son 20 yılda duruyor mu? Bu, senin in-sample / out-of-sample ayrımının aynısı — video bunu yapmıyor.

### Altı ayın en kullanışlı dersi

**Bir hipotezi kendi verisiyle doğrulayamazsın.**

Senin projende bunun tam tersini yaptın: **iki bağımsız motor**, ve `#013`'te implementer'ın notlarını okumadan yazılan ikinci motor. O ayrım tam bu problemi çözmek içindi.

---

## Video 13 — Sermaye yönetimi

Ton, ikinci aydan çok daha ölçülü — ve bir noktada senin `#018` kararınla **aynı tarafta.**

### Yazılabilir kurallar

**%30 tahsis:** hesabın yalnızca %30'u işlem için. 10.000 → 3.000 → %1 risk = 30 dolar. Yani gerçek risk **%0.3.**

| Konu | Değer |
|---|---|
| Yıllık maksimum drawdown | %15 ideal, %20-25 tolere edilebilir |
| Yıllık getiri hedefi | %18-25 |
| İşlem başına R:R | En az 3:1 |
| Yılda kurulum sayısı | **2, şanslıysa 3** |
| Günlük grafik stop | 200 pip normal (600 pip hedefle) |

### Senin kararınla uyum

> **"Stop'u başabaşa çekme dürtüsüne diren."**

Bu, ikinci ayın beşinci videosuyla **taban tabana zıt.** Ve senin `#018`'inle **aynı yönde** — kazananı 0R'de kesip kaybedeni −1R'de bırakan yapının sıfır edge ürettiğini konuşmuştuk.

**Seri kendi içinde çelişiyor, ama bu videonun tarafı doğru.**

### Diğer sağlam noktalar

**"Stop mesafesi zaman dilimiyle orantılı olmalı."** Ve doğrudan: dar stop kullanmak beceri göstergesi değil. İkinci ayın "20 pipten 8 pipe in" tavsiyesinin de reddi.

**"Yeterince el atarsan sonunda ıskalarsın — sayı oyunu."**

**Beklenti kalibrasyonu dürüst:** yılda iki kurulum. Ve %18-25 getiri hedefi, ikinci ayın "yılda %300" iddiasının onda biri.

### Ama hesap tutmuyor

Videonun kendi rakamları: 2 kurulum × 3R × %1 risk = **%6 yıllık.** Hedef %18-25.

Ve %30 tahsis kuralı devredeyse gerçek risk %0.3 → 2 kurulum × 3R = **%1.8 yıllık.**

İki kural bir arada tutarlı değil, ve video bunu fark etmiyor.

### Sorunlu tavsiye: "hedge"

Ters korelasyonlu bir paritede pozisyon açmak **hedge değil:**

**1. Ekonomik olarak aynı şey.** USD/JPY short + EUR/USD short, ikisi de dolar uzun pozisyonu.
**2. Toplam maruziyet artıyor.** İki pozisyon, iki maliyet, ve korelasyon tutmazsa iki kayıp.

### Fon yönetimi bölümü

Videonun yarısı başkasının parasını yönetmeye ayrılmış. Pratik değeri yok, ve sunulan yol haritası gerçek fon dünyasının çok basitleştirilmiş hali — düzenleyici gereklilikler, denetlenmiş performans kaydı, asgari sermaye hiç konuşulmuyor.

---

## Video 14 — Kapanış / kanıt sorusu

**Ölçülebilir içerik: sıfır.**

### En dürüst cümle

> *"Hiçbir zaman kişisel işlem sonuçlarımı gösteren bir hesap özeti göstermedim. Bir kez bile."*

Gerekçesi: hesap özeti ekran görüntüsü kanıt değil, kolayca kurgulanabilir. **Bu doğru.**

Ama şu soruyu doğuruyor: eğer hesap özeti kanıt değilse, kanıt ne?

Cevap literatürde belli: **denetlenmiş performans kaydı**, tarih damgalı ileriye dönük tahminler, üçüncü taraf doğrulaması. Video bunlardan hiçbirini sunmuyor ve sunmayacağını söylüyor.

**Cümle dürüst ama sonuç değişmiyor: beş ay, sıfır doğrulanabilir sonuç.**

### En zayıf akıl yürütme

> *"Bu kadar spesifik seviyeleri tutturuyorsam, ya içeriden bilgim var ya da algoritmayı çözdüm. İçeriden bilgi olsaydı hapse girerdim. Demek ki algoritmayı çözdüm."*

**Üçüncü seçenek var ve en olası olan o: kayıt tutulmadığı için isabet oranı bilinmiyor.**

Yeterince tahmin yaparsan bazıları tutar. Tutmayanlar anlatılmazsa, geriye kalan "olağanüstü isabet" izlenimi verir.

Ve dikkat: bu, birinci videodaki argümanın aynısı. **Beşinci ay bu argümanla açılıp bu argümanla kapanıyor.**

---

## Video 15 — ADR ve günlük hedef

**Serinin en somut sayısal katkısı** — ve yeni bir kategori: bir hareketin **ne kadar** gideceği.

### Yazılabilir kural

1. Son **5 günün** yüksek-düşük aralığı, ortalaması → kısa vadeli ADR
2. Son **20 günün** aynısı → uzun vadeli ADR
3. Yükseliş beklentisi: **günün dibinden ADR kadar yukarı** ölç
4. Düşüş beklentisi: **günün tepesinden ADR kadar aşağı** ölç
5. Bu, gün içi hedef bölgesi

**İki teyit kuralı:**
- ADR projeksiyonuna ulaşıldıysa → günün kalanında yeni pozisyon **açma**
- ADR'nin **%50'sinden fazlası** hızla tüketildiyse → gün için yön belirlenmiştir

### Neden bu farklı

Beş ay boyunca her kural **yön** hakkındaydı. Bu, **ne kadar** diyor.

**Ve senin sistemlerinde eksik olan bir katmandı.** Senin hedef kuralın konum tabanlıydı ("karşı kenar", "eski tepe"). ADR ise **büyüklük tabanlı** bir sınır koyuyor.

**Kritik:** eğer hedefin ADR'nin üstündeyse, gün içinde muhtemelen ulaşılamaz. Bu, R:R hesabını doğrudan etkiler — ulaşılamayacak bir hedef, R:R'ı yapay olarak şişirir.

### Ölçülebilirlik — çok güçlü

**Üç hipotez, hepsi senin verinde bugün ölçülebilir:**

1. Günlük hareketler ADR'yi ne oranda aşıyor?
2. ADR'ye ulaşıldıktan sonra o yönde devam olasılığı düşüyor mu?
3. ADR'nin %50'si hızla tüketildiğinde, gün o yönde mi kapanıyor?

**Kripto için doğrudan uygulanabilir** — sadece "gün" tanımını sabitle (UTC).

### Uyarı: ortalama, dağılım değildir

ADR bir ortalamadır; günlerin yaklaşık yarısı ondan büyük olur. Video bunu "genelde aşmaz" gibi kullanıyor.

**Doğru kullanım:** medyan ve persentilleri de çıkar. "Günlerin %80'i ADR'nin 1.5 katının altında" gibi bir bilgi, tek bir ortalamadan çok daha kullanışlı.

Ve oynaklık kümelendiği için, 5 günlük ADR aslında bir **oynaklık tahmini** — bu, fikri sağlamlaştırıyor.

### Somut kullanım

Senin R:R kapında (`min_rr = 2.0`), hedefin **ulaşılabilirliği** hiç kontrol edilmiyordu. ADR filtresi eklenirse — "hedef, ADR'nin şu katından uzaksa işlem yok" — R:R hesabı gerçekçileşir.

---

## Video 16 — Piramitleme

İlk kez **pozisyon ekleme mekaniği** tanımlanıyor.

### Yazılabilir kural

1. İlk pozisyon: order block'a dönüş
2. Fiyat lehte hareket eder, yeni bir order block oluşur
3. **Yeni order block'a dönüşte ikinci pozisyon** — aynı boyut
4. Stop, ikinci girişin altına çekilir
5. Üçüncü ekleme, aynı mantıkla
6. **Tüm pozisyonlar aynı anda kapatılır**

**Kritik kural:** stop hep **en son eklenen pozisyonun altında.**

### Senin ölçtüğün soruna doğrudan bağlanıyor

Hatırla: sweep sisteminde **fat-tail sorunu** vardı. Sabit 2R hedef sağ kuyruğu kesiyordu.

Piramitleme, bunun **tam tersi**: sağ kuyruğu kesmek yerine kuyruğun içine daha çok sermaye koymak.

**Ve senin `#018`'inle uyumlu:** breakeven'a çekmiyoruz, stop yeni girişin altına çekiliyor. Fark önemli — breakeven pozisyonu 0R'de kesme riski yaratıyordu; burada toplam pozisyon zaten kârda.

### Üç yaklaşımın karşılaştırması

| Yaklaşım | Sağ kuyruğa etkisi |
|---|---|
| Sabit hedef | Keser |
| Trailing (`#021`) | Korur ama boyut sabit |
| **Piramitleme** | **Korur ve boyut artar** |

Üçünün ort. R ve varyansını ölçmek, tek koşuda yapılabilir.

**Beklentim:** piramitleme ort. R'ı artırır ama **varyansı da artırır.** İkisi ayrı ölçülmeli.

### İki sorun

**1. Ölçek yine küçük.** 5 dakikalık grafikte 5 pip'lik order block'lar, 10 pip'lik stoplar. Maliyet R cinsinden stop mesafesine bölünüyor.

**2. Kaçış kapısı:** *"her order block'a dönmesi gerekmez, ama bazen döner."* Ekleme sıklığı ölçülemez hale geliyor.

**Ve kayıplarda piramitlemenin ne yaptığı hiç gösterilmiyor** — asıl risk tam orada.

---

## Video 17 — Londra kill zone

**Serinin en somut zaman kuralı.**

### Yazılabilir kural

Zaman penceresi: **NY saati 00:00–05:00** (asıl odak 02:00–05:00). Tercih edilen giriş: **02:00 civarı.**

**Yükseliş günü şablonu:**
1. Asya seansında konsolidasyon
2. **00:00–02:00 arasında dip oluşur** — günün dibi
3. 02:00'da Londra açılır, yükseliş başlar
4. 05:00'e kadar hareket devam eder
5. NY açılışında geri çekilme, sonra devam

**Kritik ek kural:** Londra seansı **05:00'te biter.** Sonrasında alım kurulumu arama.

### Ölçülebilirlik

**Saat tanımı tartışmasız.** Ve üç soru doğrudan test edilebilir:

1. Günün dibi/tepesi, 00:00–05:00 penceresinde ne oranda oluşuyor?
2. 02:00 civarındaki fiyat, günün ekstremumuna ne kadar yakın?
3. 05:00 sonrası girişler, öncesinden farklı sonuç veriyor mu?

**Rastgele karşılaştırma grubu kolay:** günün herhangi bir 5 saatlik penceresi.

**Forex için mekanizma gerçek** — Londra açılışında hacim artışı ölçülmüş bir olgu.

### Kripto için uyarı

Kripto 7/24 ve **seans yapısı forex'ten çok daha zayıf.** Yine de tamamen yok değil: Asya/ABD hacim farkı, funding saatleri, ABD borsa açılışıyla korelasyon.

**Ölçülebilir ama beklentiyi düşük tut.**

### Ay ortası kuralı

Ek iddia: **ayın 10-20'si arası** kurumsal siparişlerin en etkili olduğu dönem. Ölçmesi kolay ama literatürde güçlü destek yok, ve yılda 12 gözlem üretir.

### Kritik eksik

Günün dibi 00:00-02:00'de oluştuysa bu **geriye dönük olarak** bellidir. Gerçek zamanda, 02:00'da o dibin gerçekten günün dibi olduğunu bilmenin yolu verilmiyor.

Dördüncü ayın reclaimed block sorunuyla aynı yapı — ama daha hafif, çünkü zaman penceresi sabit.

---

# BÖLÜM II — BEŞİNCİ AYIN BÜTÜNÜ

## Ölçülebilirlik tablosu

| Video | Kavram | Değerlendirme |
|---|---|---|
| V1 | Look back / cast forward | Kısmen — kalibrasyon esnek |
| V2 | Salınım yapısı yön kuralı | **Ölçülebilir** — beş ayın boşluğunu kapatıyor |
| V3 | Açık pozisyon teyidi | **Ölçülebilir** — fiyat dışı veri |
| V4 | 20 günlük likidite havuzları | **Ölçülebilir** — sıfır seçim noktası |
| V5 | İki dönüş tipi (breaker / failure swing) | **Ölçülebilir** — en büyük sadeleştirme |
| V6 | Tandem/ayrışma rejim testi | **Ölçülebilir** — rejim, yön değil |
| V7 | Tahvil/dolar SMT | **Ölçülemez** — simetri tanımsız, veri atlama |
| V8 | Faiz farkı (carry) | **Ölçülebilir** — ama zamanlama katmanı geriye dönük |
| V9 | Piyasalar arası ilişkiler | Kısmen — doğru ama koşullu, ICT'ye özgü değil |
| V10 | Mevsimsellik girişi | **Ölçülemez** — hesaplama yöntemi yok |
| V11 | NZD mevsimsellik | **Ölçülemez** — pencereler yılı kaplıyor, örneklem 10 |
| V12 | Eşleştirilmiş mevsimsellik | **Ölçülemez** — bağımsız olmayan doğrulama |
| V13 | Sermaye yönetimi | Kısmen — doğru ilkeler, tutarsız hesap |
| V14 | Kapanış / kanıt | İçeriksiz |
| V15 | ADR günlük hedef | **Ölçülebilir** — yeni kategori: büyüklük |
| V16 | Piramitleme | **Ölçülebilir** — fat-tail sorununa üçüncü seçenek |
| V17 | Londra kill zone | **Ölçülebilir** — en somut zaman kuralı |

**Ölçülebilir: 9 · Kısmen: 3 · Ölçülemez: 4 · İçeriksiz: 1**

## Ayın üç yeni kategorisi

**1. Zaman.** İlk kez "ne zaman" soruluyor — 20/40/60 gün pencereleri, kill zone, ay ortası. Ve **takvim/saat yoruma açık değil**, dolayısıyla ölçülebilirlik yüksek.

**2. Büyüklük.** ADR ile "ne kadar" sorusu. Bu, senin R:R kapında eksik olan katman.

**3. Fiyat dışı veri.** Açık pozisyon, faiz farkları, piyasalar arası ilişkiler.

Üçü de fiyat yapısından farklı bilgi kaynakları — ve dört ay boyunca hiç yoktu.

## Ayın en zayıf bloğu: mevsimsellik

Üç video (V10, V11, V12) mevsimselliğe ayrılmış, ve üçü de aynı sorunları taşıyor:

- **Hesaplama yöntemi hiç verilmiyor** — ortalama mı medyan mı, dağılım ne?
- **Örneklem 10-19** — yılda bir gözlem
- **Pencereler yılın tamamını kaplıyor** (V11'de sekiz pencere)
- **Yön filtresi tanımsız** ve sonuçlar görüldükten sonra uygulanıyor
- **Bağımsız olmayan doğrulama** (V12'de dolar endeksi, paritelerden hesaplanıyor)

Ve **videonun kendi verileri fikri çürütüyor:** on yılda dört başarısızlık, ama sayı olarak toplanmıyor — her biri ayrı ayrı gerekçelendiriliyor.

## Ayın iç çelişkileri

| Konu | Bir yerde | Başka yerde |
|---|---|---|
| Breakeven'a çekme | 2. ay V5: çek | 5. ay V13: **çekme** |
| Stop mesafesi | 2. ay V2: daralt | 5. ay V13: zaman dilimiyle orantılı olsun |
| Yıllık getiri | 2. ay V3: %300 | 5. ay V13: %18-25 |
| İsabet oranı | 2. ay V4: %30-50 yeterli | 4. ay V6: %90+ isabetliyim |

Not: **beşinci ayın tarafı, üç konuda da doğru olan taraf** — ve senin `#018` kararınla uyumlu.

## Açılış ve kapanış argümanı

Ay, *"pip'ine kadar tutturuyorum, demek ki rastgelelik yok"* ile açılıyor (V1) ve *"ya içeriden bilgim var ya algoritmayı çözdüm"* ile kapanıyor (V14).

**İkisi de aynı hatayı yapıyor:** kayıt tutulmadığı için isabet oranı bilinmiyor, ve o üçüncü ihtimal hiç elenmiyor.

---

# BÖLÜM III — DEĞERLENDİRME

## Ölçmeye değer dokuz fikir, öncelik sırasıyla

**1. Salınım yapısı yön kuralı (V2).** Beş ayın en büyük boşluğunu kapatıyor, ve senin sweep ölçümüne doğrudan eklenebilir. Sweep tek başına sıfıra yakındı; bu, ona mekanik bir yön filtresi ekliyor.

**2. İki dönüş tipi (V5).** Breaker / failure swing ayrımı. Sen breaker'ın ilk üç adımını ölçtün, geri kalanını ve failure swing'i hiç ölçmedin. Üç grup, tek koşu.

**3. ADR günlük hedef (V15).** Yeni kategori, tamamen mekanik, kripto için doğrudan uygulanabilir. Ve `min_rr` kapına ulaşılabilirlik boyutu ekliyor.

**4. 20 günlük likidite havuzları (V4).** Sıfır seçim noktası, saf aritmetik. Ve Turtle kırılımlarının ters oynanması hipotezi — senin ITP sisteminde Donchian vardı.

**5. Londra kill zone (V17).** Ölçmesi en kolay çürütme testlerinden: günün ekstremumu saat bazında kümeleniyor mu, yoksa düzgün mü dağılıyor?

**6. Piramitleme (V16).** Fat-tail sorununa üçüncü seçenek. Sabit hedef / trailing / piramitleme karşılaştırması, tek koşuda.

**7. Rejim testi (V6).** Rejimi fiyattan değil iki serinin ilişkisinden türetmek. Senin `NO_RANGE` tanımına alternatif.

**8. Açık pozisyon teyidi (V3).** Fiyat dışı veri, kripto vadeli piyasada mevcut.

**9. Carry / funding (V8).** Saf carry taban çizgisi + teknik zamanlama katmanı; ikisi ayrı ölçülmeli. Kripto analoğu funding.

## Ölçmeye değmeyen dördü

**Mevsimsellik bloğu (V10, V11, V12)** — örneklem 10-19, pencereler yılı kaplıyor, yön filtresi tanımsız, doğrulama bağımsız değil.

**Tahvil/dolar SMT (V7)** — simetri tanımlanmamış, ve "bu veriyi görmezden gel" içeren bir kural kodlanamaz.

## Beş ayın toplamı

| Ay | Karakter |
|---|---|
| **1. ay** | Kurulum kavramları — sekiz tanım, yedisinin klasik karşılığı, sistem olarak ölçülemez |
| **2. ay** | Para yönetimi — doğru ama metoda özgü değil; metoda özgü kısımlar hatalı |
| **3. ay** | En ölçülebilir fikirler kavram yığınıyla iç içe |
| **4. ay** | Tam tanımlar — yeni bilgi az, ölçülebilirlik ilk kez mümkün |
| **5. ay** | Yeni kategoriler (zaman, büyüklük, fiyat dışı veri) + en zayıf blok (mevsimsellik) |

## Elli beş videoda hâlâ geçmeyen cümle

> "Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."

Beş ay, elli beş video, sıfır istatistik. Ve on dördüncü videoda bunun **resmî cevabı** veriliyor: kanıt sunulmayacak.

## Kapanış gözlemi

Dördüncü ayın sonunda şunu çıkarmıştık: *bir kural, belirsiz bir bileşeni merkezine aldığında ölçülemez hale geliyor; kenarda bıraktığında çekirdeği hâlâ test edilebilir kalıyor.*

Beşinci ay buna bir boyut daha ekliyor: **ölçülebilirlik, verinin cinsine de bağlı.**

Bu ayın en ölçülebilir kuralları takvim ve saat üzerine kurulu (V4, V15, V17). En ölçülemez olanları ise yorumlanmış grafik ortalamaları üzerine (V10, V11, V12).

**Fark şu:** takvim tartışılmaz. "20 işlem günü önce" tek bir tarih. Ama "40 yıllık mevsimsel ortalama" bir hesaplama tercihidir, ve o tercih gösterilmediğinde doğrulanamaz.

Bu, kalan yedi ayı elerken ek bir ölçüt: **kuralın dayandığı veri, tek bir doğru cevabı olan bir şey mi, yoksa bir hesaplama tercihi mi?**
