# ICT Mentorship — Kasım 2016 (8 Video)
## Eleme Notları — Üçüncü Ay

---

## Bu ayın karakteri

Birinci ay kurulum kavramları verdi, ikinci ay para yönetimi anlattı. **Üçüncü ay ise serinin en ölçülebilir fikirlerini içeriyor** — ve aynı zamanda en açık iç çelişkisini.

İki farklı içerik türü yan yana duruyor:

**Kavram yığını videoları** (V1, V2, V7, V8): beş zaman dilimi, altı farklı kavram, geriye dönük çözümlemeler. Ölçülemez.

**Tek kurallı videolar** (V3, V4, V5, V6): tek bir referans noktası, mekanik tanım, yorum yok. Ölçülebilir.

Ve ortaya net bir örüntü çıkıyor: **kavram sayısı azaldıkça ölçülebilirlik artıyor.**

---

# BÖLÜM I — VİDEO VİDEO

## Video 1 — Zaman dilimi seçimi ve model tanımı

### Serinin en değerli itirafı

**"Sadece üç kurulum ticaret ediyorum."**

Yirmi dört videodan sonra, onca kavramın ardından — order block, breaker, mitigation block, FVG, killzone, premium/discount, SMT, IPTA — asıl kullanılan üç şey:

1. **Aralık içinde işlem** (açığa çıkmış aralığa dönüş, likidite boşluğunun doldurulması)
2. **Order block'tan alım/satım**
3. **Eski tepe/dip süpürmesi** (turtle soup)

Ve devamı: *"aslında tek bir taneye indirebilirim, ama aksiyon sevdiğim için üçünü de arıyorum."*

Bu, sistemin gerçek çekirdeğinin ne kadar küçük olduğunun kabulü. Senin zaten ölçtüğün şey üçüncüsüydü — sonuç sıfıra yakındı.

### Yazılabilir yapı — zaman dilimi eşlemesi

| Zaman dilimi | İşlem tarzı | Tutuş süresi |
|---|---|---|
| Aylık | Pozisyon ticareti | Aylar |
| Haftalık | Swing | 3 ayda 1-2 işlem |
| Günlük | Kısa vade | 1-5 gün |
| 4H ve altı | Gün içi | Aynı gün, 14:00 NY'ye kadar |

Çerçeveleme yöntemi: aylık grafikte hedef aralığı belirle (order block ↔ eşit dipler) → Fib ile çeyreklere böl → o seviyelerin yakınında alt zaman diliminde kurulum ara. Kodlanabilir bir prosedür.

### İyi olan taraf

**Zaman dilimi seçiminin kişisel olduğu vurgusu.** Sabır düzeyi, iş hayatı, psikolojik yapı — bunların işlem tarzını belirlemesi doğru. "Beni kopyalama" mesajı da öyle.

**Günlük grafiği başlangıç olarak önermesi.** Makul: hem üst zaman dilimi referanslarını hem yeterli işlem fırsatını içeriyor.

**Kendi sınırlarını kabul etmesi.** "Uzun vadeli işlemci değilim, sabrım yok, fikrimi çok değiştiriyorum." Dürüst.

### Ölçüm tarafında değişen bir şey yok

Örnek, EUR/USD'nin 2014-2015 çöküşü — **tek bir tarihsel hareket**, tamamen geriye dönük çözülmüş. 13 ay kurulum + 6 ay hareket, her dönüş noktası sonradan işaretlenmiş.

Kritik boşluk: *"pozisyonu ne zaman bırakırsın?"* → *"açıkça yanlış olduğunu görene kadar tut."* Neyin "açıkça yanlış" sayılacağı tanımsız. Aylık grafikte 13 ay pozisyon tutmak, bu tanım olmadan kodlanamaz.

### Ve serinin merkezi belirsizliği, açıkça ertelenmiş

**"Turtle soup mu yoksa order block mu olduğunu ayırt edeceğini öğreneceksin — ama şimdi değil."**

Video bu soruyu kendisi soruyor ve kendisi erteliyor. Ve bu ayrım **sistemin tamamının kaderini belirliyor:**

Fiyat bir order block'a geldiğinde iki zıt beklenti var:
- Order block olarak okursan: dönecek, gir
- Turtle soup olarak okursan: süpürecek, bekle

İkisi ters yönde işlem üretiyor ve hangisinin geçerli olduğunun kuralı yok. Üç ay sonunda hâlâ gelmemiş durumda.

### Not

Üç kurulum itirafı senin için pratik bir kazanım: iki ay boyunca elediğin onlarca kavram, kendi ağzından üçe iniyor. Ölçülecek şey üç tane — ve birini zaten ölçtün.

---

## Video 2 — Kurumsal emir akışı

**On sekiz videonun en uzun tek örnek çözümlemesi** ve serinin en net metodolojik sorununun en saf hali.

### Yazılabilir tanım — mitigation block

Ay içinde yeni olan tek kavram: kısa pozisyonların kapatıldığı bölge. Fiyat yükselirken satılan mumun aralığına geri döndüğünde, kısaların kapanıp ters yönde girildiği yer.

Tanımı order block'la neredeyse aynı — fark, hangi hikâyeyle anlatıldığı. Kodlanabilir ama ayırt edici bilgi taşımıyor.

### Yazılabilir prosedür — üç zaman dilimi haritalama

Aylık grafikte order block'ları ve eşit dipleri işaretle → aralara "kurumsal emir akışı yükseliş/düşüş" bölgeleri boya → haftalık ve günlüğe aynı seviyeleri taşı → alt zaman diliminde o seviyelerin yakınında kurulum ara.

Kodlanabilir ve üç ayın en somut çerçeveleme yöntemi.

### Ama asıl mesele başka

Video, 2008-2012 arası EUR/USD'yi baştan sona çözümlüyor — her dönüş noktasını bir kavramla açıklıyor: order block, breaker, mitigation block, propulsion candle, gövde/fitil ayrımı.

**Her dönüş için bir açıklama var, ama hiçbiri önceden söylenmiş değil.**

Bu, on sekiz videoda ulaşılan en net noktaya işaret ediyor: yeterince kavram varsa geçmişteki **her** hareket bunlardan biriyle açıklanabilir. Açıklamanın var olması sistemin çalıştığını göstermiyor; **kavram setinin yeterince esnek olduğunu** gösteriyor.

Test şu: aynı grafiğin sağ tarafı kapatılsaydı, hangi kavramın geçerli olacağını söyleyebilir miydik? Video bunu hiçbir noktada denemiyor.

### Hacim iddiası — dördüncü kez, ve genişletilmiş

Bu videoda iddia şuraya varıyor: **"fitiller perakende fiyatlama, gövdeler bankalar arası fiyatlama."**

Bu yanlış. Fitil ile gövde arasındaki fark, o periyotta fiyatın nereye gidip nereden döndüğüdür — kimin işlem yaptığıyla ilgisi yoktur. Bir mum, işlem hacminin nasıl dağıldığı hakkında hiçbir bilgi vermez, ve "kurumsal fiyat" ile "perakende fiyat" diye ayrı fiyatlar da yoktur.

Ve bu iddia masum değil: analiz **seçici** hale geliyor. Fitil hesaba katılınca sinyal yoksa "fitil perakende" denip yok sayılıyor; gövde uymuyorsa fitile bakılıyor. Videoda her ikisi de yapılıyor.

### Yapısal döngü

Anlatı: bankalar aşağıda alır → yukarı iter → tepede satar → düşüşte kısaları kapatır → dipte tekrar alır.

Her hareket bu döngünün bir parçası olarak anlatılabiliyor. Yukarı, aşağı, yatay — üçü de aynı hikâyeye sığıyor. Yanlışlanabilecek bir gözlem yok.

### Ölçülebilir olan tek şey

**"Aylık ve haftalık seviyeler, günlük grafikte daha güçlü tepki üretir."**

Test edilebilir: üst zaman dilimi order block'larına yapılan dokunuşlar, alt zaman dilimi order block'larından farklı sonuç veriyor mu? Mekanik olarak tanımlanabilir. Ve mekanizma makul — büyük fonların aylık/haftalık grafiklerle çalıştığı, emirlerin o seviyelerde kümelendiği fikri, piyasa mikroyapısıyla uyumlu.

### Senin projenle bağlantı

Sen aynı problemi yaşadın ve çözdün. `#027.4`'te *"defter motorun durumunu gözlemler, kendi kavramını üretmez"* ilkesini koymuştuk — çünkü `_pending_trail` motorda var olmayan bir durumu rapor ediyordu.

Burada aynı hata, tüm sistem ölçeğinde: **kavramlar, fiyatta var olmayan yapıları rapor ediyor.**

---

## Video 3 — Kurumsal destek (institutional sponsorship)

**Serinin en kolay test edilebilir kuralı burada.**

### Yazılabilir kural — açılış fiyatı kuralı

New York gece yarısı açılış fiyatını çiz. Yükseliş beklentisi varsa, fiyatın o seviyenin **altına indiği** her gün alım fırsatıdır.

Neden temiz:
- Seviye tanımı tartışmasız (belirli bir saatteki açılış fiyatı)
- Yorum gerektirmiyor
- Her gün yeni bir örnek üretiyor — **örneklem sorunu yok**
- Doğrudan sorgulanabilir: "açılışın altına inen günlerde, gün sonu açılışın üstünde kapanma oranı nedir?"

Buna bağlı ikinci yapı: **power three** — yükseliş gününde açılışa yakın al, kapanışta çık. Günlük mumun açılış/yüksek/düşük/kapanış yapısıyla ilgili, ölçülebilir.

### İkinci yazılabilir kural — kurumsal destek kriterleri

Uzun kurulum için üç koşul:

1. **Üst zaman diliminde belirgin hareket** (displacement) — o hareketin başladığı mum seviye olarak alınır
2. **İndirime dönüş** — fiyat o seviyeye geri gelir veya eski dibin altındaki stopları süpürür
3. **Yukarıda hedef likidite** — eski tepelerin üstündeki alım stopları

Ek şart: **hareketin hemen başlaması.** Yavaş, tereddütlü tepki geldiyse pozisyon küçültülür ya da kapatılır.

Bu son madde iyi ve uygulanabilir — ölçülebilir olması için "ne kadar sürede ne kadar hareket" tanımlanmalı.

### Serinin en dürüst risk tavsiyesi

**"Fikrine âşık olma. Beklediğin tepki gelmiyorsa çık. Sonra tekrar girebilirsin."**

Metottan bağımsız geçerli ve gerçekten iyi bir kural.

### Yapısal sorun

Kural: *"Yükseliş bekliyorsak, açılışın altı alım fırsatıdır."* Yükseliş beklentisi nereden geliyor? Üst zaman dilimi analizinden — yani hâlâ tanımsız girdiden.

**Ama iyi haber:** açılış fiyatı kuralını yön girdisi olmadan da ölçebilirsin. "Açılışın altına inen günlerde fiyat ne yapıyor" sorusunun cevabı, filtre olmadan da bilgi verir; filtre eklendiğinde ne kadar iyileştiğini görmek ikinci bir ölçüm olur.

### Yanlışlanamazlık — inceltilmiş hali

**"Bir sonraki günün açılışında olmadıysa, önceki oturumun order block'unu kullan."** Video örnek çözerken bunu yapıyor: bugünün order block'u tutmadıysa dünküne, olmazsa üç oturum öncesine bakılıyor.

Yeterince geriye gidilirse **her fiyat noktasının yakınında bir order block bulunur.**

**"Fiyat hedefe gitmiyorsa kurumsal destek yok demektir."** Kurulumun başarısızlığı, kurulumun yokluğuna dönüştürülüyor — sistem hiçbir zaman yanılmıyor.

**"Kiraz toplamıyorum" deniyor** ama tek bir örnek çözülüyor: USD/JPY'nin belirli bir yükseliş dönemi, sonuç bilinerek.

---

## Video 4 — Kurumsal emir akışıyla yeni kurulum bulma

**Serinin en mekanik kuralı** — yön tanımı ilk kez tamamen algoritmik.

### Yazılabilir kural — aylık aralık tanımı

1. Aylık grafikte **en son düşüş mumunu** bul
2. Ondan önceki (solundaki) **en son yükseliş mumunu** bul — dibi, düşüş mumunun tepesinden yüksek olmalı
3. Bu iki mum **aralığı tanımlar**
4. Fiyat düşüş mumunun tepesini kırdıysa → o mum **bullish order block**, alım bölgesi
5. Fiyat yükseliş mumunun dibini kırdıysa → o mum **bearish order block**, satış bölgesi
6. Seviyeleri haftalık ve günlüğe taşı, orada gir

**Bu, iki ay boyunca eksik olan yön tanımının mekanik hali.**

### Öncekilerle karşılaştırma

| Video | Yön nasıl belirleniyor? |
|---|---|
| 1. ay V4 | "Eğer piyasa yükselişteyse" — tanımsız |
| 3. ay V2 | Altı kavramla geçmiş çözümlemesi |
| 3. ay V3 | Üst zaman dilimi analizi — tanımsız |
| **3. ay V4** | **Son kırılan aylık mum — mekanik** |

Ek avantaj: aylık grafikte az sayıda mum var, dolayısıyla "hangi mum" sorusu belirsizleşmiyor. Alt zaman dilimlerinde onlarca order block adayı çıkıyordu; burada tanım gereği tek.

### Ölçülebilirlik

**Güçlü:** seviye tanımı tek anlamlı, yön kuralı mekanik, hedef de tanımlı (aralığın diğer ucu).

**Zayıf:** aylık grafik on yıllık veride ~120 mum verir. Muhtemelen yılda birkaç kurulum — **örneklem sorunu ciddi.** Ve giriş "alt zaman dilimine in" ile belirsizliğe dönüyor; ama seviye sabit kaldığı için basit bir giriş kuralı yeterli olur.

### Yanlışlanamazlık — zayıf ama var

Üç örnek, hepsi geriye dönük, üçü de "işe yaramış". Çalışmayan örnek yok.

Bir örnekte kendi belirsizliğini kabul ediyor: *"gövdeyi kırıyor ama şu an dağınık."* Dürüst bir an — ama aynı zamanda kuralın uygulamada net olmadığını gösteriyor.

Bir tanesinde hâlâ açık pozisyon var ("muhtemelen şuraya gidecek"). Sonuç bilinmiyor, takip eden kayıt da yok.

---

## Video 5 — Kurumsal piyasa yapısı (SMT ayrışması)

**Üç ayın en özgün fikri** — ve fiyat grafiğinin dışına ilk gerçek çıkış.

### Yazılabilir kural — korelasyon ayrışması

**Simetrik durum (teyit):**
- Dolar endeksi daha düşük dip + parite daha yüksek tepe → mevcut yön devam eder
- Dolar endeksi daha yüksek tepe + parite daha düşük dip → devam eder
- **Bu durumda dönüş aramak yasak**

**Ayrışma (uyarı):**
- Parite daha yüksek tepe yapar ama dolar endeksi daha düşük dip **yapmaz** → paritedeki tepe sahte, dolar güçleniyor
- Parite daha düşük dip yapar ama dolar endeksi daha yüksek tepe **yapmaz** → paritedeki dip sahte

Yasaklayıcı bileşen de var: simetrik durumda dönüş oynanmaz.

### Neden bu farklı

**İki bağımsız veri kaynağı karşılaştırılıyor.** Şimdiye kadarki her kavram tek bir fiyat serisinin dönüşümüydü — order block, FVG, denge noktası, hepsi aynı grafikten türüyordu. Burada **iki ayrı enstrümanın ilişkisine** bakılıyor, ve bu gerçekten yeni bilgi taşıyabilir.

**Mekanizma sağlam.** Dolar endeksi ile pariteler arasındaki ters ilişki gerçek ve ölçülmüş bir olgu — endeks zaten o paritelerden hesaplanıyor. İlişkinin geçici bozulması bilgi taşıyabilir.

**Klasik karşılığı var ama daha güçlü.** Klasik "intermarket divergence" ile aynı aile; farkı, göstergeler yerine doğrudan fiyat yapısı kullanılması.

### Ölçülebilirlik — çok güçlü

- Tanım tek anlamlı: iki seri, iki salınım noktası, karşılaştır
- Yorum yok — ya daha düşük dip yaptı ya yapmadı
- Örneklem bol: her salınım noktası bir gözlem
- Yasaklayıcı bileşen var

**Kapatılması gereken tek boşluk:** hangi salınım noktalarının karşılaştırılacağı. Pivot uzunluğuyla tanımlanırsa (senin `pivot_len` mantığın) kural tamamen kapanır.

**Kripto için doğrudan uyarlanabilir:** BTC ↔ ETH, ya da BTC ↔ toplam altcoin piyasa değeri. Elinde zaten dört enstrümanın verisi var.

### Yanlışlanamazlık — az ama var

İki örnek, ikisi de geriye dönük ve ikisi de çalışmış. Ayrışma oluşup fiyatın devam ettiği örnek yok.

*"2016'nın ikinci yarısında dolar boğasıyım"* — kayıt yok, ve dolar o dönemde zaten yükseldi.

**Anlatı katmanı gereksiz:** "dolar toplanıyor, sterlin dağıtılıyor, perakende kandırılıyor." Ayrışmanın kendisi ölçülebilir bir olgu; kimin ne yaptığına dair hikâye ölçülemez ve fikre bir şey katmıyor.

---

## Video 6 — Makroekonomiden mikro tekniğe (faiz/dolar)

Beşinci videonun fikrini genişletiyor ve **serinin en sağlam mekanizmasına** dayanıyor. Ama sunumunda ciddi sorun var.

### Yazılabilir kural — faiz/dolar ayrışması

SMT mantığı üç yeni seriye taşınıyor:

**30 yıllık tahvil ↔ dolar endeksi.** Tahvil düşerse faiz yükselir, dolar güçlenir. Ayrışma: tahvil daha yüksek tepe yaparken dolar daha düşük dip yapmıyorsa, dolar toplanıyor demektir.

**10 yıllık ↔ 30 yıllık tahvil.** İkisi arasındaki ayrışma, faiz yönünde değişimin habercisi sayılıyor.

Sonra dolar yönü tüm paritelere uygulanıyor.

### Mekanizma bu kez gerçekten sağlam

**Tahvil fiyatı ile faiz arasındaki ters ilişki tanım gereğidir**, ve **faiz farkları ile döviz kurları arasındaki ilişki iktisatta en iyi belgelenmiş bağlantılardan biri.** Bu, order block'un "bankalar burada aldı" hikâyesiyle aynı kategoride değil — ölçülmüş, mekanizması bilinen bir ilişki.

### Ölçülebilirlik

**Güçlü:** seriler kamuya açık, ilişki tanımlı, SMT karşılaştırması mekanik.

**Zayıf:** "üç-dört ayda bir yön değişir" iddiası tanımsız. Ve faiz farkı ile kur ilişkisi kısa vadede çok gürültülü; uzun vadede güçlü, günlük grafikte zayıf.

**Kripto için:** doğrudan uygulanmaz ama analoğu var — ABD faiz beklentileri ile risk iştahı arasındaki ilişki. Daha dolaylı ve ölçmesi daha zor.

### Sunum tarafında ciddi sorun

**"Trump'ın kazanacağını söylemiştim."** Kayıtsız yapılan üçüncü büyük iddia. Seçim gecesi doların düşüp sonra yükselmesi, anlatıya **sonradan** yerleştiriliyor.

**Seçim gecesi hareketi "manipülasyon, kandırmaca" ilan ediliyor.** Piyasanın beklenmedik bir sonuca tepki verip sonra yeniden fiyatlaması olağan bir süreç. Bunu "aslında hep planlanmıştı" diye anlatmak, geriye dönük açıklamanın en saf hali.

**"Brexit öncesi 1.20 hedefini söylemiştim."** Yine kayıt yok. Ve bu tür iddialar üç ayda giderek artıyor: %90 isabet, %59 aylık getiri, seçim tahmini, Brexit hedefi.

**"Kimseyle paylaşmayın, ben kimseden öğrenmedim."** Faiz-döviz ilişkisi iktisat literatüründe onlarca yıldır var, hiçbir şekilde gizli bir bilgi değil. Bunu keşif olarak sunmak, izleyicinin dışarıdan doğrulama yapmasını engelliyor.

### Seçim yanlılığı

Video, Eylül'deki iki ayrışmayı gösterip sonra **sekiz farklı pariteye** bakıp hepsinde uyumlu hareket buluyor.

Ama bu paritelerin hepsi dolar içeriyor — dolar hareket ettiğinde hepsi birlikte hareket eder. Sekiz "bağımsız doğrulama" değil, **tek bir gözlemin sekiz görüntüsü.** İkinci ayın "aynı örneği üç zaman diliminde gösterme" hatasının aynısı.

---

## Video 7 — Trend çizgisi hayaletleri

Serinin **en dürüst eleştirisi** ve aynı eleştirinin kendine uygulanmaması yan yana.

### Doğru olan eleştiri

- **Hangi dip ve tepeleri birleştireceğin öznel** — aynı grafikte farklı kişiler farklı çizgiler çizer
- **Fiyatın çizgiden haberi yok** — çizgi, geçmiş iki noktadan geleceğe yapılan projeksiyon
- **Üçüncü dokunuşta ne olacağını bilmenin gerekçesi yok**
- **Yayımlanmış, bağımsız doğrulanmış bir edge ölçümü yok**

Ve serinin en dürüst anı: *"24 yıldır bunu yapıyorum, trend çizgileriyle istatistiksel bir edge kuramadım."*

Bu, akademik literatürle de uyumlu.

### Yazılabilir kural — trend çizgisini ters oynamak

1. Üç dokunuşlu bir trend çizgisi oluştuğunu gör
2. Üst zaman dilimi ters yönü gösteriyorsa çizgiyi **tuzak** say
3. Yükselen destek çizgisinde: 2. ve 3. dokunuş arasındaki **tepeyi** hedefle → satış
4. Alçalan direnç çizgisinde: 2. ve 3. dokunuş arasındaki **dibi** hedefle → alım
5. 2. noktanın hemen ötesi, stopların bulunduğu yer

Mantık makul: yaygın bilinen bir formasyonun etrafında emir birikir. İkinci ayın "karşı taraf düşüncesi" fikrinin devamı.

### Ama kendi eleştirisi kendine uygulanmıyor

**Trend çizgisi öznel olduğu için reddediliyor, ama order block seçimi aynı derecede öznel ve reddedilmiyor.**

Videonun kendi sorusu — *"hangi dipleri birleştireceksin?"* — order block için de aynen geçerli: hangi mumu order block sayacaksın? Beş zaman diliminde onlarca aday var. Ve bu videoda tam olarak o oluyor: bir örnekte günlük, 30dk ve 15dk arasında geçiş yapılıyor.

**Öznellik itirazı doğru ama seçici uygulanıyor.**

### Döngüsellik

Kural: "trend çizgisi tuzaktır **eğer** üst zaman dilimi ters yönü gösteriyorsa." Üst zaman dilimi yönü nasıl belirleniyor? Order block'larla, likidite boşluklarıyla — yani öznelliği reddedilmemiş araçlarla.

### Not

**Bu videodaki eleştiri, senin filtrenin kendisi.** "Bir kuralın öznel bileşeni varsa ölçülemez" — üç aydır uyguladığımız şey.

**Pratik ders:** bir metot, başka bir metodu eleştirirken kullandığı ölçütü kendine de uyguluyor mu? Bu tek soru, çok sayıda içeriği hızlıca eleyebilir.

---

## Video 8 — Sahte tepe ve dip formasyonları

Yedinci videonun mantığının klasik formasyonlara uygulanması. Yeni kavram yok, ama **kural açıkça yazılabilir.**

### Yazılabilir kural — formasyonu ters oynamak

**Omuz-baş-omuz (klasik düşüş formasyonu), üst zaman dilimi yükseliş gösteriyorsa:**
- Boyun çizgisi kırılışını **satış** değil, eşit diplerin altındaki stopların süpürülmesi olarak oku
- Boyun çizgisinin altında **alım** yap
- Hedef: "baş"ın (en yüksek tepe) üstündeki alım stopları
- İlk kâr alma: sağ omuz seviyesi

**Ters omuz-baş-omuz, üst zaman dilimi düşüş gösteriyorsa:** tam tersi.

Formasyon tanımı klasik ve mekanik (üç ardışık tepe/dip + boyun çizgisi). Üst zaman dilimi yönü tanımlanırsa kural tamamen kodlanabilir.

### İyi olan taraf

**"Tepe ve dip yakalamaya çalışma."** Video bunu açıkça öneriyor ve kendi de kaçındığını söylüyor. Doğru bir tavsiye.

**Formasyonun ne zaman gerçek olduğu ayrımı:** omuz-baş-omuz gerçekten ara/uzun vadeli tepelerde oluşur; alt zaman dilimlerinde aranan versiyonu genelde gürültüdür. Bu, ölçülebilir bir iddia.

### Yanlışlanamazlık

**Yön ön koşulu yine tanımsız** — "üst zaman dilimi yükseliş gösteriyorsa" kuralın tamamını taşıyor.

**İki örnek, ikisi de geriye dönük**, ikisi de çalışmış. Ve ikinci örnekte "40-80 pip veya daha fazla" gibi belirsiz bir sonuç veriliyor; kesin bir çıkış kuralı yok.

**Gövde/fitil seçimi yine keyfî:** bir noktada "fitili kullanabilirsin ya da gövdeyi kullanabilirsin, ben gövdeyi öğretiyorum" deniyor. İki farklı seviye, iki farklı giriş.

### Not

Bu, üçüncü ayda **yedinci videonun mantığının tekrarı.** Yeni bilgi yok, ama formasyon tanımı klasik olduğu için ölçmesi yedinciden daha kolay.

**Test edilebilir hipotez:** klasik omuz-baş-omuz formasyonları, üst zaman dilimi yönüne göre ayrıştırıldığında ters yönde mi çalışıyor? Formasyon tespiti mekanik, yön tanımını sen koyarsın.

---

# BÖLÜM II — ÜÇÜNCÜ AYIN BÜTÜNÜ

## Ayın iki yüzü

| Kavram yığını videoları | Tek kurallı videolar |
|---|---|
| V1 — üç zaman dilimi + çoklu kavram | V3 — açılış fiyatı |
| V2 — altı kavramla dört yıl | V4 — aylık aralık |
| V7 — trend çizgisi + order block zinciri | V5 — SMT ayrışması |
| V8 — formasyon + yön ön koşulu | V6 — faiz/dolar ayrışması |
| **Ölçülemez** | **Ölçülebilir** |

Ve fark net: sağ sütundaki dördü de **tek bir referans noktası** kullanıyor — bir açılış fiyatı, iki aylık mum, iki seri. Sol sütundakiler ise beş zaman dilimi ve altı kavram arasında geçiş yapıyor.

**Örüntü: ölçülebilirlik, kavram sayısı azaldıkça artıyor.**

## Ölçmeye değer dört fikir — öncelik sırasıyla

**1. SMT ayrışması (V5)** — mekanik, bol örneklem, iki bağımsız seri, yasaklayıcı bileşen. Kripto için doğrudan uyarlanabilir: BTC ↔ ETH.

**2. Açılış fiyatı kuralı (V3)** — en kolay ölçülebilir. Sabit referans, her gün yeni örnek, yön filtresi olmadan bile anlamlı sonuç verir.

**3. Faiz/dolar ayrışması (V6)** — en sağlam mekanizma, ama gürültülü ve örneklem az. Yöntemi kripto için kullanılabilir.

**4. Aylık aralık kuralı (V4)** — mekanik ama örneklem çok az; çoklu enstrüman gerekir.

Dördü de "iki seriyi karşılaştır" ya da "sabit bir referans al" kategorisinde. Hiçbiri kavram yığınına dayanmıyor.

## Ayın tekrarlanan sorunları

**Hacim iddiası** — dördüncü ve beşinci kez tekrarlanıyor, bu kez "fitiller perakende, gövdeler kurumsal" haline genişletiliyor. Yanlış, ve analizi seçici hale getiriyor.

**Merkezi belirsizlik hâlâ açık** — aynı seviyede order block mu turtle soup mu okuyacağını belirleyen kural yok. V1'de soruluyor ve erteleniyor.

**Yön ön koşulu** — V3, V7 ve V8'in tamamı "üst zaman dilimi ters yönü gösteriyorsa" ile başlıyor. V4 bunu mekanikleştiriyor ama diğerleri ondan yararlanmıyor.

**Kayıtsız iddialar artıyor** — %90 isabet, %59 aylık getiri, seçim tahmini, Brexit hedefi. Üç ayda hiçbiri doğrulanmış değil.

**Tek örnek çözümlemesi** — her videoda bir veya iki örnek, hepsi geriye dönük, hiçbirinde çalışmayan bir vaka yok.

## Ve serinin en açık iç çelişkisi

**V7:** "Trend çizgileri öznel olduğu için ölçülemez, 24 yılda edge kuramadım."

**V2:** Aynı grafikte altı farklı kavramla beş zaman dilimi arasında geçiş yapılarak dört yıllık hareket açıklanıyor.

İkisi aynı ay içinde. Öznellik itirazı doğru — ama sadece başkasının aracına uygulanıyor.

---

# BÖLÜM III — DEĞERLENDİRME

## Üç ayın toplamı

**Birinci ay:** kurulum kavramları. Sekiz tanım, yedisinin klasik karşılığı var. Sistem olarak ölçülemez çünkü aralık, zaman dilimi ve yön seçimleri yoruma bırakılmış.

**İkinci ay:** para yönetimi ve risk. Söylenenlerin çoğu doğru — ve hiçbiri metoda özgü değil. Metoda özgü kısımlar (stop daraltma, getiri projeksiyonları) hatalı.

**Üçüncü ay:** en ölçülebilir fikirler burada, ama kavram yığını videolarıyla iç içe. Ve fiyat grafiğinin dışına ilk çıkış (SMT, faiz) bu ayda geliyor.

## Sistemin gerçek kapsamı — kendi ifadesiyle

V1'deki itiraf, üç ayın en kullanışlı bilgisi: **üç kurulum var.** Aralık içi işlem, order block, turtle soup. Geri kalan onlarca kavram bu üçünün etrafındaki anlatı katmanı.

Ve senin zaten ölçtüğün şey turtle soup'tu — %33 isabet, 2R hedefte tam başabaş.

## Yirmi dört videoda hâlâ geçmeyen cümle

> "Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."

Üç ay, yirmi dört video, sıfır istatistik.

## Kapanış gözlemi

Üçüncü ay, ölçülebilirlik açısından **en verimli ay** — dört gerçek test edilebilir fikir çıkıyor. Ve dördü de aynı özelliği paylaşıyor: **tek bir sabit referans, minimum kavram, mekanik tanım.**

Bu, üç ayın en kullanışlı çıkarımı: bir fikri ölçülebilir yapan şey, ne kadar derin olduğu değil, **kaç seçim noktası içerdiği.** Sıfır seçim noktası olan kural (açılış fiyatı) ölçülebilir; beş seçim noktası olan zincir (V2'nin çözümlemesi) ölçülemez — ne kadar ikna edici görünürse görünsün.
