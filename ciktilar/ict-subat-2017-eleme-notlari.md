# ICT Mentorship — Şubat 2017
## Altıncı ay · 8 video · Swing trading modülü · Eleme notları

Bu belge iki iş yapıyor. Önce her videoyu **öğretiyor** — kavramları, prosedürleri, sayıları ve videonun kendi gerekçesini, olduğu gibi ve değerlendirmesiz. Sonra her videoyu **eliyor** — hangi iddia sonucu bilinmeden yazılabilir, hangisi yazılamaz, hangi kural yanlışlanabilir. İki bölüm görsel olarak ayrı: ders gri kutuda, eleme normal akışta.

## Bu ayın karakteri

Beş ay boyunca seri **parça** verdi. Order block, FVG, breaker, mitigation block, sweep, salınım yapısı, ADR, kill zone — her biri kendi videosunda tanımlandı, ve her biri tek başına kodlanabilir bir nesneydi. Şubat ilk kez parçaları birleştirip **bir yöntem** kuruyor: piyasa seçiminden giriş emri tipine, kademeli kâr almadan stop'un ne zaman taşınacağına kadar uçtan uca bir akış.

Bu, serinin karakterinde gerçek bir değişim. Sekizinci video bir **akış şeması**: altı kapı, her kapıda evet/hayır sorusu, ve her hayır cevabının tanımlı bir sonucu. Altmış üç videoda ilk kez "bu koşul yoksa işlem yok" cümlesi bir yerde değil, *sistematik olarak* kuruluyor. Sekizinci videonun giriş tekniği tablosu — hangi PD array'de limit, hangisinde stop emri — ayın en temiz kuralı, ve sıfır seçim noktası içeriyor.

Ama birleştirmenin bir bedeli var, ve bu ayın ana bulgusu o: **bileşenler tek tek daha mekanik hale gelirken, birleşim daha az ölçülebilir oluyor.** Çünkü akış, tanımsız yüklemleri topluyor. "Trend var mı" (V1, V7), "aylık boğa mı" (V4), "aylık ayı mı" (V5) — dördü de zincirin içinde, dördü de tanımsız. Ocak ayının ikinci videosu bu tanımı *mekanik olarak* vermişti (salınım noktalarının ilerleyişi); Şubat o tanıma bir kez bile atıf yapmıyor.

İkinci gelişme olumlu ve kaydedilmeli: **ölçek büyüdü.** Aralık ayında 5 dakikalık grafikte 2 pip'lik boşluklar konuşuluyordu; Şubat tamamen aylık/haftalık/günlük/4 saatlik üzerinde çalışıyor, stoplar 50–70 pip, hedefler 200–585 pip. Senin −1.088R maliyet bulgunun bu aya itirazı Aralık'takinden çok daha zayıf. Dört aydır işaretlenen "ölçek küçülmesi" örüntüsü bu ay *tersine döndü*.

Üçüncüsü de olumlu: **kaybeden işlemler ilk kez gösteriliyor.** Beşinci videoda beş-altı kez bir seviye işaretlenip "bu uygulansaydı zarar olurdu", "burada stop olurdun" deniyor. Altmış üç videoda ilk kez. Sayılmıyorlar — oran verilmiyor — ama gösteriliyorlar, ve bu cins bir ilerleme.

Zayıf taraf iki yerde. Birincisi: sekizinci videonun **ilk ve zorunlu kapısı mevsimsellik** — Ocak ayının en zayıf bloğu (örneklem 10–19, pencereler yılı kaplıyor, hesaplama yöntemi verilmemiş). En kırılgan bileşen, zincirin başına ve zorunlu konumuna yerleştirilmiş. Video bunu kendisi de yumuşatıyor: "istersen bu kısmı atlayabilirsin." Atlanabilen bir kapı, kapı değildir. İkincisi: **her başarısızlık yolunun çıkışı aynı** — "o zaman kısa vadeli işlem ya da gün içi işlem yap." Yöntem hiçbir noktada "bu fikir yanlıştı" durumuna girmiyor; sadece "başka bir şey oyna" diyor.

Ve altıncı ayın kendine özgü bir ilki var: bu ay **geriye dönük doğrulama iki kez ödev olarak veriliyor** — altıncı videoda "beş örnek bul, en az 5:1 versin", sekizincide "son iki yıla geri git ve bu çerçevenin sağlam swing'leri süzüp süzmediğine bak". Serinin bir test prosedürü *önerdiği* ilk ay. Sonuç yine yok, ve testi yapması istenen taraf izleyici.

Kullanılan filtre önceki aylarla aynı: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsaydı nasıl görünürdü.

## Bölme notu

Transkript dosyası **sekiz videoya** bölündü. Her sınır iki bağımsız işaretle doğrulanıyor: dosyadaki ayırıcı satır (`1.video`, `2. video`, … — beşincisi `5. vşdeo` yazım hatasıyla) ve videonun kendi açılış cümlesindeki ders numarası ("this is lesson five of February 2017's ICT mentorship"). İkisi sekiz videoda da örtüşüyor. **Belirsiz sınır yok.**

| Video | Konu | Satır | Kelime |
|---|---|---|---|
| V1 | İdeal swing trading koşulları | 1–553 | 3.223 |
| V2 | Başarılı swing trading'in unsurları | 554–1153 | 4.081 |
| V3 | Klasik swing yaklaşımı, PD array matrisi | 1154–1535 | 6.553 |
| V4 | Boğa piyasası kurulumları | 1536–1911 | 6.313 |
| V5 | Ayı piyasası kurulumları | 1912–2202 | 3.990 |
| V6 | Riski azaltmak, ödülü büyütmek | 2203–2495 | 4.897 |
| V7 | Patlayıcı hareket için sekiz ölçüt | 2496–3223 | 4.789 |
| V8 | "Milyon dolarlık" swing kurulumu | 3224–3586 | 5.703 |

Videolar bir **modül** oluşturuyor ve sırayla okunacak şekilde tasarlanmış: V1–V2 piyasa seçimi ve ön koşullar, V3 çerçeve, V4–V5 boğa ve ayı uygulamaları, V6 risk, V7 filtreler, V8 birleşik model. V8, V1–V7'nin hepsine geri atıf yapıyor.

## BÖLÜM I — Dersler ve eleme

### Video 1 — İdeal swing trading koşulları

::: ders
**DERS**

#### Swing trading'in tanımı

Swing trading, videonun tanımıyla, "piyasadaki öngörülebilir fiyat hareketlerini yüksek tutarlılıkla işlemleme disiplini". Boğa koşullarında alınır, ayı koşullarında açığa satılır. Orta vadeli bir işlem biçimi ve **işlem süresi iki hafta veya daha uzun**. Amaç, büyük katılımcıların bir piyasaya girmesinin ve fiyatta belirgin bir yer değiştirme (displacement) yaratmasının etkisinden yararlanmak. İşlem süresi iki hafta ve üzeri olduğu için potansiyel ödül büyük: **200–500 pip** büyüklüğünde hedefler bu tür kurulumlar için mümkün.

#### Piyasa seçimi

Her piyasa swing trading için uygun değil. Video özellikle **"favori pariteden kaçının"** diyor. Gerekçe: büyük hareketler her yıl piyasalar arasında dönüyor; standart bir swing trading piyasası ya da paritesi yok. **Her üç ayda bir yeni bir fırsat oluşuyor**, ve bir zamanlar büyük hareket eden bir parite bu sefer büyük hareket edenin kendisi olmayabilir. Onun için araştırmak, en son ne olduğunun arkasına bakmak gerekiyor.

Eleme kuralı: **son üç ayda az hareket etmiş veya hiç hareket etmemiş, durgun piyasalardan kaçın.**

#### Piyasa profilleri

Videonun temel sınıflandırması. Piyasalar bir profilden diğerine geçer, ve bu her zaman diliminde geçerlidir. Aylık ve haftalık grafiklerde çalıştığın piyasanın **mevcut profilini** ara. Üç profil var:

**Aranan profil trend.** Gerekçe şu: swing trading'in amacı büyük mesafe kat etmesi muhtemel hareketlerde konumlanmaksa, trend halindeki piyasalara bakmak gerekir. Bir piyasa belirgin bir işlem aralığına hapsolmuşsa, bu yönlü bir kurulum için yüksek olasılık göstermez.

Videonun mekanizma iddiası: **trend = büyük akış.** Yüksek zaman dilimlerinde bir piyasayı bir yöne iten şey büyük katılım. Aylık ve haftalık grafiklerde trend eden piyasalar, o varlığı kurumsal ölçekte alan ya da satan katılımcıların işareti. Tersi de aynı mantıkla okunuyor: piyasa küçük bir konsolidasyona sıkışmışsa bu **kurumsal ilginin yokluğunun** göstergesi. Yukarı kıramıyorsa alım yok demektir; aşağı kıramıyorsa satış yok demektir; dolayısıyla nötr bir durumda kalır. Ne yukarı ne aşağı gidebiliyor, o yüzden aralıkta kalıyor.

İkinci kabul edilebilir koşul: piyasa bir konsolidasyon alanını **zaten terk etmişse.** Konsolidasyondan çıkmışsa, büyük oyuncuların piyasayı o bekleme düzeninden çıkardığının işareti sayılıyor, ve muhtemelen yüksek zaman diliminde daha büyük bir seviyeye / PDA'ya doğru hareket edecektir.

#### Zaman dilimi katmanlaması

Aylık ve haftalık grafikler çok uzun vadeli olduğu için kurulum **aylık, haftalık ve günlükte aranır**, ama işlem **4 saatlik grafikte açılır**. Mantık: 4 saatlikte giriş ararken aylık/haftalık grafik piyasanın işlem süresince trend halinde hareket edeceğine dair büyük bir olasılık payı veriyor.

Para birimleri için pratik: aylık ve haftalık bazda piyasayı tarayıp hangi piyasaların yukarı, hangilerinin aşağı trend ettiğini, hangilerinin konsolidasyon ya da bekleme düzeninde olduğunu hızla belirleyebilirsin. **Geniş işlem aralıklarındaki piyasalardan kaçın** — orada olmasının bir sebebi var.

#### Yön tercihi ve tepe/dip seçmeme

Video açık bir davranış kuralı koyuyor: **yön konusunda hata yapmaya razı ol; fiyatta tepe ve dip seçme dürtüsünden kaçın.** Mevcut uzun vadeli trend profilinin fiyat hareketini etkilemesi, uzun vadeli bir dönüşten çok daha olası. Uzun vadeli trende odaklan, piyasanın gelgiti işlemi çoğu zaman kazanana taşır.

Gerekçe: aylık grafikte açıkça görülüyorsa, muhtemelen en az bir ay daha hareket edecektir. İşlemde en az iki hafta süre aradığımıza göre, olasılıklar önceki ayın yönünün devamını görmemiz lehine. Ve bu, zaten konsolidasyonun dışına çıkma isteği göstermiş piyasalarda geçerli.

Bunun bir yan faydası olarak sunuluyor: uzun vadeli trende odaklanmak, **piyasanın hangi tarafında olacağını çözme zorunluluğunu ortadan kaldırıyor.** Aylık ve haftalık alıcı olman gerektiğini söylüyorsa, uzun tarafta swing trader olmaya odaklanırsın.

#### İki başarısızlık kuralı

Videonun tek geri besleme kuralı, ve açıkça formüle ediliyor. Aylık/haftalık boğa koşulunda günlük ya da 4 saatlikte bir alım sinyali alırsın ve stop olursun — sorun değil. **Sonraki sinyali de alırsın ve o da başarısız olursa**, bu sana şunu söylüyor: muhtemelen uzun vadeli ya da orta vadeli bir kaymaya yakınsın, mevcut boğa eğilimi zayıflıyor ya da trend yorulmuş olabilir.

Video bunu bir "anında geri bildirim" mekanizması olarak sunuyor, ve buna bağlı bir psikoloji notu düşüyor: zarar almaktan korkmamak gerekiyor çünkü zaten olacak; ama aylık/haftalık yön eğilimi içinde işlem yapmak çok daha mantıklı.

#### Örneklerin çözümü

**EUR/USD, aylık.** Grafikte birden çok profil var; odak, yaklaşık **Şubat 2015 sonundan** (grafiğin altındaki zaman ayrımı için **1 Mart 2015** kullanılıyor) bugüne kadarki bölüm. Bu bölümün profili: **konsolidasyon** — piyasa ne yukarı ne aşağı gitmeye istekli, aralığa sıkışmış. Aylık grafik bunu gösteriyorsa alım-satım için yüksek olasılıklı bir piyasa değil.

Haftalık grafik aynı konsolidasyonu gösteriyor. Video bir itirazı önceden karşılıyor: "birkaç yüz pip var, aralık içinde hâlâ yön var" — bu doğru, ama sorun aralığın *dışına* çıkmakta kolaylık olmaması. Bu tür bir düzen aralık içinde ileri geri işlem yapılarak oynanabilir; ama swing trading için aranan en iyi senaryo bu belirtiye sahip *olmayan* piyasa.

**NZD/USD, aylık.** EUR/USD'den ne farkı var? Piyasa yukarı gitmeye çalışıyor: **daha yüksek dipler ve daha yüksek tepeler** yapıyor, geri yukarı hareket ediyor, ve **0.7490 seviyesine kadar bir likidite boşluğunu kapatarak** orada kapanmış. Aylık bazda yukarı gitme isteği gösteriyor. Profil: trend. Haftalık grafik aynı ardışık daha yüksek tepe / daha yüksek dip yapısını gösteriyor. Bu ortamda yüksek zaman dilimi, bu pariteyi almaya istekli alıcılar olduğunu gösteriyor.

**USD/JPY, aylık.** Küçük bir konsolidasyon bölümü, ve fiyat o konsolidasyonu **ani biçimde** terk ediyor. Haftalık grafikte aynı konsolidasyondan sonra birkaç yüz pip yukarı hareket görülüyor. Konsolidasyonu terk etme isteği swing işlemleri için çok güçlü bir işaret; bu durumda uzun tarafta swing aranır.

**NZD/USD haftalık, üç aylık aralıklara bölünmüş.** Video haftalık grafiği dikey çizgilerle bölüyor; her çizgi yeni bir ayı temsil ediyor. Grafiğin altındaki turuncu ve beyaz kareler ardışık ayları gösteriyor: ilk beyaz kare birinci ay, turuncu ikinci ay, sonraki beyaz üçüncü ay. Amaç, fiyatın **üç aylık aralıklarla** ne yaptığını göstermek. Sonuç olarak sunulan gözlem: fiyat yaklaşık **her üç-dört ayda bir** alım fırsatı vermiş — her turuncu bölgede bir miktar geri çekilme, ve hemen sonraki ayda ya da o ayın içinde bir alım fırsatı. Her değişen üç ayda yeni bir alım fırsatı, ve fiyat sürekli daha yükseğe basmış.

**Günlük grafik ve ödev.** Aynı fiyat bölgesi aylık aralıklara bölünmüş; her dikey çizgi yeni bir ay. Görülen düzen: yukarı ralli → konsolidasyon ya da geri çekilme → yeni bir alım fırsatı. Video birkaç örneği tek tek işaretliyor (fiyat geri geliyor, geri çekiliyor, alım fırsatı veriyor) ve bunların her birini izleyiciden **ayrı ayrı incelemesini** istiyor. Salı sabahı canlı seansta tek tek gözden geçirilecek.

Ödevin kendisi bir kural içeriyor: bir alım fırsatı için fiyatın geri gelmesi gereken seviye **iskonto (discount)** seviyesidir. İskontoya geri gelirse ve bir **PDA**'ya dönerse. Aralık cinsinden bakış, satış stoplarının nerede olduğu — bu fikirlerin her referans noktasında kullanılması isteniyor. Ve şu soru soruluyor: bu paritede bir swing trader perspektifinden kaç fırsat sunuldu, ve kaçı birkaç yüz pip'lik hareket verdi? Küçük hareketler değil, birkaç yüz pip. Bazıları oluşum olarak daha uzun vadeli — onlar Ocak ayında bitirilen uzun vadeli pozisyon işlemciliği zihniyeti için ideal senaryolar olurdu; hangi diplerin bu fikirler için de iyi olacağını sınıflandırması isteniyor.

#### Kapanış kuralı

Video kendi kapsamını açıkça daraltıyor: swing trading'de **yüksek olasılıklı yönlü işlemler** aranıyor. Aralık içi işlem aranmıyor, ve **konsolidasyon içinde kalmak için turtle soup aranmıyor.** Güçlü yönlü oyunlar aranıyor. Kullanılan swing trading modeli yönlü zihniyete sıkı sıkıya bağlı: aylık/haftalık yukarı diyorsa tüm araçlar alıcı zihniyetiyle hizalanır; aylık/haftalık ayı ise tüm araçlar bir satış senaryosu üretmek için dizilir.

:::

::: eleme
**ELEME**

#### Yazılabilir kurallar

**1. Durgunluk filtresi.** "Son üç ayda az hareket etmiş piyasalardan kaçın." Bu, sonucu bilinmeden yazılabilir: son 60–65 işlem gününün aralığı / ATR oranı, ya da o aralığın uzun vadeli dağılımdaki persentili. Video bir eşik vermiyor — eşik senin koyacağın parametre.

**2. Yürütme katmanlaması.** Analiz aylık/haftalık/günlük, giriş 4 saatlik. Sıfır seçim noktası, doğrudan kodlanabilir.

**3. İki başarısızlık kuralı.** "Aynı yönde iki ardışık sinyal stop olursa, yön varsayımını yeniden değerlendir." Bu **yasaklayıcı** ve mekanik — sinyal tanımı verildiği anda tam olarak kodlanabilir. Ayın en yanlışlanabilir tek kuralı bu olabilir.

**4. Üç aylık rotasyon iddiası.** "Her üç ayda bir yeni bir fırsat oluşur", "büyük hareketler her yıl piyasalar arasında döner". Bu ileriye dönük bir iddia ve doğrudan sayılabilir bir soruya çevrilebilir.

#### Merkezi tanımsızlık

Videonun asıl işi piyasa seçmek, ve o seçimin çekirdek yüklemi — **"trend ediyor mu"** — hiçbir yerde tanımlanmıyor. Kaç salınım noktası, hangi geriye bakış penceresi, hangi eşik? "Durgun" ve "hareketsiz" de tanımsız. "Konsolidasyonu terk etti" için hangi konsolidasyon, ne kadar geriye?

**Ve bu, Ocak ayının ikinci videosunun çözdüğü sorunun aynısı.** Orada yön, salınım noktalarının ilerleyişinden mekanik olarak türetiliyordu — sıfır yorum, ve senin pivot altyapınla birebir uyumlu. Şubat o tanımı bir kez bile kullanmıyor. Bu, altıncı ayda ilk kez kaydedilen bir kayıp değil, ama ilk kez *çözümün elde olduğu* bir kayıp.

Sonuç: çekirdek mekanik olabilir, ama merkezî bir bileşen tanımsız. Yön tanımını sen doldurursan (ör. Ocak V2'nin salınım kuralı) geri kalan test edilebilir kalıyor.

#### Yanlışlanamazlık

**Üç profil her durumu kapsıyor.** Konsolidasyon, trend, dönüş — dördüncü bir seçenek yok. Bir piyasa her zaman bu üçünden biriyle etiketlenebilir, ve etiket sonradan seçilebilir. Birinci ayın "piyasa dört durumdan birindedir" totolojisinin profil versiyonu. Bilgi taşıyan kısım sınıflandırma değil, sınıflandırmanın *eşiği* — ve eşik verilmiyor.

**Döngüsel gerekçe.** "Trend = kurumsal ilgi var; aralık = kurumsal ilgi yok." Kurumsal ilginin bağımsız bir ölçüsü verilmiyor; tek kanıt fiyatın kendisi. Yani "trend ediyor çünkü kurumlar alıyor, kurumlar alıyor çünkü trend ediyor." **Ama not: kuralı bu anlatıdan ayır.** "Son üç ayda çok hareket etmiş piyasalar sonraki üç ayda daha iyi sonuç veriyor mu" sorusu, arkasındaki hikâye doğru olmasa da geçerli ve ölçülebilir bir sorudur.

**Zaman sınırı belirsizliği.** "En az iki hafta" bir alt sınır ama üst sınır yok. Beşinci videoda ölçülen iki örnek 3 gün ve 11 gün sürüyor — ikisi de bu tanımın *altında*. Birinci videonun tanımı ile beşinci videonun örnekleri uyuşmuyor.

#### Geçmiş açıklamaları

Üç parite profil okuması (EUR/USD, NZD/USD, USD/JPY) ve NZD/USD üzerinde yaklaşık yedi işaretli alım fırsatı. Hepsi sonucu bilinerek anlatılıyor, hepsi tek yönlü bir dönemden (2016 NZD yükselişi). İçerikleri anlatılmadı — geriye dönük açıklama olarak değersizler.

Ve klasik seçim sorunu burada saf haliyle var: EUR/USD "kötü örnek" olarak, NZD/USD "iyi örnek" olarak **sonuç bilinerek** seçilmiş. Kaç piyasa tarandı, kaçı yanlış sınıflandırıldı — kayıt yok.

#### Ölçülebilirlik

**Kısmen.** Çekirdek (durgunluk filtresi, katmanlama, iki-başarısızlık kuralı) mekanik; merkezî bileşen ("trend ediyor mu") tanımsız ama dışarıdan doldurulabilir.

#### Not — ne alınacak, ne alınmayacak

**Alınacak:** iki-başarısızlık kuralı. Yasaklayıcı, mekanik, ve senin herhangi bir sisteminin üstüne ek bir parametre olarak eklenebilir. Hipotez: *aynı yönde iki ardışık stop sonrası üçüncü sinyalin sonucu, ilk sinyalden farklı mı?*

**Alınacak:** üç aylık rotasyon. Ölçülebilir soru: *bir enstrümanın son üç aydaki normalize hareket büyüklüğü, sonraki üç aydaki büyüklüğü öngörüyor mu?* Bu bir **rejim** sorusu, yön sorusu değil — ve Ocak V6'nın tandem/ayrışma rejim testiyle aynı soruya iki farklı yoldan giriyor. Senin range projende `RANGE_ACTIVE`/`NO_RANGE` ayrımı fiyat yapısından türetiliyordu ve Aşama 1'de RET aldı; bu, aynı ayrımın çok daha basit bir alternatifi.

**Alınmayacak:** üç profilli sınıflandırmanın kendisi, eşiksiz haliyle. Sınıflandırma bilgi taşımıyor; eşik taşıyor, ve eşik verilmiyor.

:::

### Video 2 — Başarılı swing trading'in unsurları

::: ders
**DERS**

#### Yedi ölçüt

Videonun omurgası, bir swing işleminin geçerliliğini destekleyen yedi maddelik bir liste:

Videonun kendi çerçevelemesi: bu geniş bir genel bakış ve her ölçüt değil; ama **bu listeden ne kadar çok maddeyi biriktirebilirsem, işlemin tutma olasılığı o kadar yüksek.** Listenin her maddesinin lehine olmadığı zamanlar olacak ama işlem yine de geçerli olabilir. Bu belirtilere sahip işlemlere sadık kalınırsa swing trading kolaylaşır, isabet "çarpıcı" olur, en iyi senaryolar seçilmiş olur.

#### Kurumsal sponsorluk = SMT ayrışması

Alım tarafında: göreli güç analizinde işlemi destekleyecek işaretler var mı? Örnek — EUR/USD'yi **daha düşük bir dipte** alıyorsan, dolar endeksi **daha düşük bir tepe** mi yapıyor? Dolar endeksinin daha yüksek tepe yapmayı başaramaması dolarda zayıflıktır; senin paritendeki daha düşük dip ise yukarı hareketten önce satış stoplarını süpürmedir.

Satış tarafında: USD/CHF'yi **daha düşük bir tepede** açığa satıyorsan, dolar endeksi **daha yüksek tepe** mi yapıyor? Video bunu doğrudan "kurumsal sponsorluğu ölçmek için SMT ayrışması fikri" olarak adlandırıyor.

#### Banka toplama ve dağıtımının okunması

Fiyat hareketini inceleyerek yapılıyor, ve iki taraflı bir kontrol listesi olarak veriliyor.

**Fiyat yükselirken:** tüm düşüş mumları destek haline geliyor ve sonrasında daha yüksek fiyatlar görülüyor mu? Salınım tepeleri kırılıyor ve kırıldıktan sonra daha yüksek tepeler görülüyor mu?

**Düşen / ayı piyasalarında:** yükseliş mumları direnç haline geliyor ve sonrasında daha düşük fiyatlar görülüyor mu? Salınım dipleri kırılıyor ve sonucunda daha düşük fiyatlar mı geliyor?

Videonun kendi sadeleştirmesi: yükselişte daha yüksek tepe ve daha yüksek dipler görüyor muyuz, direnç seviyeleri kırılıyor ve yeni destek seviyeleri bulunuyor mu?

**Mekanizma iddiası:** banka toplaması, **her düşüş mumunun yeni alımı desteklemesi** üzerinden aranıyor — çünkü yeni alım, piyasa geri çekildiğinde ve aşağı gittiğinde gerçekleşecektir. Bu, onlara *iskontodan* alma fırsatı verir. Prim fiyatlarından almazlar; algoritma onlara daha düşük bir fiyattan alma fırsatı verdiğinde almak zorundadırlar. Düşen piyasalarda ise **yükseliş mumlarına odaklanılmaz değil** — çünkü piyasanın ralli yapması onlara kısa vadeli bir prim sunar; oraya daha çok satarlar, yeni kısa pozisyonlar açar ya da mevcut ayı modeline ekleme yaparlar. Özet formül: **toplama düşüş mumlarında ölçülür, dağıtım yükseliş mumlarında direnç olarak ölçülür.**

#### Temiz fiyat hareketi ve belirgin seviyeler

Aranan piyasa: fiyat hareketi net, seviyeler ayırt edilebilir olmalı — mevcut fiyatın üstünde ve altında, hangi varlık sınıfı olursa olsun. PD array'ler belirgin ve kolay tanımlanabilir olmalı.

**Üstte aranacaklar:** likidite boşlukları, mitigation block'lar, breaker'lar, fair value gap'ler, rejection block'lar, eski tepeler veya dipler. **Altta aranacaklar:** mitigation block'lar, breaker'lar, likidite boşlukları, fair value gap'ler, bullish order block'lar, rejection block'lar, eski dipler veya eski tepeler.

Kural: mevcut fiyat hareketine göre bu array'ler ne kadar belirgin, ayırt edilebilir ve açıksa, işlem o kadar iyi olacak.

#### Dengesizlik ve fiyatın çekilmesi

Son haftalarda veya aylarda işlem görmemiş, **dengesizlik (imbalance) halinde bırakılmış** fiyat — aylık ve haftalık bazda — fiyat üzerinde yüksek bir çekim yaratır. Fiyat ya adil değere geri döner ya da yeni bir dengesizlik seviyesi arar.

Fiyat **dengede (equilibrium)** ise, bir dengesizliğe hareket etme fırsatı aranır. Tercihen bir konsolidasyondan çıkması ve ardından bir dengesizlik seviyesine gitmesi istenir. Yukarı hareket ederse prime gider; konsolidasyonu aşağı kırarsa derin bir iskontoya gider. **Alım tarafındaki dengesizlik derin iskonto, satış tarafındaki dengesizlik prim demek.**

#### "Kendini ikna ediyorsan geç" kuralı

Video bunu yirmi yılı aşkın deneyimden çıkarılan en zor ders olarak sunuyor: **grafiklerinde en temiz fiyat hareketini talep et.** Fiyat hareketi ne kadar belirginse sonuç o kadar elverişli.

Uygulama kuralı doğrudan: grafiği incelemek zorunda kalıyorsan, ileri geri tartışıyorsan, "bu bir order block mu yoksa likidite noktası mı" diye kendi kendinle tartışıyorsan — **kendini ikna etmen gerekiyorsa muhtemelen iyi bir işlem değil, geç.** İşlemin grafikten kelimenin tam anlamıyla fırladığı durumlar en yüksek olasılıklı olanlar, ve aynı zamanda alınması en kolay olanlar.

#### Kurumsal seviyeler

Fiyat kurumsal seviyelere saygı gösteriyor mu? Verilen liste: **büyük rakam seviyeleri (00), orta rakam 50 seviyeleri, 80 seviyesi, 20 seviyesi**, ve küçük yuvarlak sayılar **30 ve 70**.

#### Kural tabanlı filtreleme

Her disiplinde — sadece swing trading'de değil — kural tabanlı kavramsal yöntemler gerekiyor ve **her işlem kural tabanlı bir filtreleme sürecinden geçmeli.** Kurallar iki özelliği taşımalı:

#### Risk ve özkaynak kapısı

Kurulum filtreyi geçse bile işlem ancak **risk ve özkaynak yönetimi izin veriyorsa** açılır. Zaten bir ya da iki açık işlem olabilir ve risk parametrelerin daha fazla tahsis edilmiş maruziyete izin vermeyebilir. Belirli bir yüzdeden fazla risk üstlenilemez.

Kurulum var diye para yönetimi kuralları çiğnenmez. İki seçenek var: yeni işlemin mevcutlardan daha geçerli olup olmadığını tartmak, ya da daha iyi bir ödeme potansiyeli sunup sunmadığına bakmak. Videonun örneği: altında uzunsun ve 1240 seviyesini bekliyorsun; ama soya fasulyesi piyasasına bakıyorsun ve tam bir dolar yükseleceğini düşünüyorsun. O zaman soya muhtemelen daha iyi bir ödeme olacak, çünkü daha hızlı patlayabilir ve **paranla daha çok hız** elde edersin. Aynısı döviz için: EUR/USD'de bir fırsat görüyorsun ama zaten USD/CHF'de kısasın — hangisinin daha olası kârlı sonucu var? Daha iyi bir kurulum görüp mevcut işlemi kesmek istiyorsan yol budur. Ama iyi bir kurulum diye yeni bir işlem alınıp diğerlerindeki açık risk korunamaz: **ya bir şey kapatılır ya işlem geçilir.**

#### Ödül/risk aritmetiği

Videonun verdiği sayılar: kurulumları **3:1** ödül/risk ile sınırlamak, net kârlı olmak için **%34 kadar düşük bir isabetin** yeterli olmasına izin verir. Video bunu "çılgınca kârlı değil, marjinal kârlı" diye niteliyor — **%66 oranında yanılıyorken para kazanıyorsun** demek.

Kurulumları **5 kat** risk ödülüyle çerçevelersen kârlı olma olasılığı daha yüksek olur ve zararlara çok daha kolay dayanılır. Ve en çok hareket potansiyeli olan kurulumlar daha iyi ödül/risk oranları sunar.

#### Ödev: sahte işlem planı

Videonun asıl talebi bu ve baştan uyarılıyor: bu ay "en düşük teslimat" olarak görülecek ders, çünkü ödevi olan ders bu. Amaç, öğrencinin mevcut anlayışının nerede olduğunu ölçmek ve üçüncü dersten önce bir kayıt bırakmak.

Yazılı olarak hazırlanacak maddeler:

**Teslim koşulları:** Çarşamba gününe kadar kâğıda dökülmüş olmalı; ideal olarak forumda paylaşılmalı (çekingen olanlar e-posta ile yollayabilir ama cevap aylar sürebilir). Üçüncü ders **Cuma 20:00'de** yayınlanacak; ödev ondan önce bitirilmeli — gerekçe açıkça belirtiliyor: "kopya çekmeni ve o büyük sıçramayı kaçırmanı istemiyorum."

Videonun gerekçesi: bu, süreç odaklı düşünmeyi inşa ediyor. Bir karar verdiğinde neden verdiğini hep bileceksin; duygulara, ICT'ye, televizyondaki yorumculara, Twitter'a ya da forumlara tepki vermeyeceksin; yalnızca fiyattan aldığın bilgiye göre karar vereceksin. Stop olduğunda neden stop olduğunu tam olarak bileceksin, ve o durumdan doğan yeni bir fırsat varsa onu da bileceksin ya da kenara çekilmeyi bileceksin.

Ve bir ön bilgi: *"swing trading için yaptığım kurulumlar — sadece iki tane, çok fazla değil."*

:::

::: eleme
**ELEME**

#### Merkezi sorun: minimumu olmayan kontrol listesi

Bu videonun ana ürünü yedi maddelik ölçüt listesi, ve **listenin hiçbir maddesi zorunlu değil.** Video bunu iki kez açıkça söylüyor: COT "gerekli veya zorunlu değil", mevsimsellik "zorunlu değil", ve genel olarak "listenin her maddesi lehine olmadığında bile işlem geçerli olabilir".

Minimum sayı yok, ağırlık yok, hangi kombinasyonun yeterli olduğuna dair kural yok. Bunun sonucu şu: **gerçekleşen her işlem, sonradan yeterli sayıda ölçütü karşılamış sayılabilir.** Yedi maddeden ikisi varsa "iki tane vardı, yeterliydi"; işlem tutmadıysa "yeterince biriktirememişiz" denebilir. İki sonucu da açıklıyor.

Bu, kaçış kapısının en temiz biçimi: kural gibi görünen bir yapı, ama içinde işlem alıp almamayı belirleyen hiçbir eşik yok. **Sayı verilmediği sürece bu bir kural değil, bir dikkat listesidir.**

Kapatması kolay ve senin yapabileceğin bir şey: yedi ölçütü ikili değişkenlere çevir, bir eşik koy (ör. en az 4/7), ve *ölçütlerin sayısı sonucu öngörüyor mu* sorusunu sor. Ama o an ölçtüğün şey videonun iddiası değil, senin koyduğun eşik olur.

#### Yazılabilir olan iki parça

**1. Kurumsal seviyeler.** 00 / 20 / 50 / 80 / 30 / 70. Tamamen mekanik, sıfır seçim noktası, ve doğrudan test edilebilir: *fiyat tepkileri yuvarlak sayıların çevresinde kümeleniyor mu, yoksa düzgün mü dağılıyor?* Bu, mikroyapı literatüründe belgelenmiş bir olgu (emirlerin yuvarlak sayılarda kümelenmesi), yani beklenti sıfır değil.

**Ve asıl değeri farklı bir yerde:** bu bir **kontrol grubu**. Eğer yuvarlak sayılar tek başına tepki üretiyorsa, yuvarlak sayıya yakın bir order block'un "çalışması" order block'un lehine kanıt değildir. Senin ölçtüğün her seviye tabanlı kuralın taban çizgisi bu olabilir.

**2. SMT ayrışması, sabit hizalama penceresiyle.** "Parite daha düşük dip yaparken endeks daha düşük tepe yapıyor mu" mekanik bir karşılaştırma. Aralık ayının birinci videosunda aynı fikir vardı ve aynı boşluk kalmıştı: **"aynı anda" ne demek?** Şubat da bu boşluğu doldurmuyor. Pencereyi sen tanımlarsın; o an ölçtüğün şey senin tanımın olur ama soru geçerli kalır.

#### Yazılamayan: "kendini ikna ediyorsan geç"

Bu, ayın **ikinci soruyu en açık biçimde geçemeyen** ifadesi. "Grafikten fırlıyorsa al, tartışıyorsan geçme" — sonucu görmemiş birine verilebilecek bir tanım değil. Neyin "fırladığı" ancak sonradan belirlenir, ve tam olarak sonradan belirlendiği için *her* kazanan işlem "fırlamıştı", *her* kaybeden işlem "aslında tartışıyordum" olarak sınıflandırılabilir.

Bunun pratik zararı gerçek: bu cümle, kural tabanlı filtreleme bölümüyle **aynı videoda** duruyor. Bir yandan "kurallar statik olmalı, istisna yok" deniyor, öte yandan tüm kurallardan bağımsız çalışan bir sezgi vetosu tanımlanıyor. İkisi bir arada bir sistem oluşturmuyor.

#### Yeniden adlandırma

"Banka toplaması / dağıtımı"nın operasyonel tanımı — daha yüksek tepeler ve daha yüksek dipler, düşüş mumları destek oluyor, direnç kırılıyor — **klasik trend tanımının kendisidir.** Dow teorisinden beri standart. Yeni bilgi taşımıyor; taşıdığı şey, aynı gözleme bir *fail* atfetmek. Not: gözlem doğru, atıf ölçülemez, ve **kural atıftan bağımsız çalışıyor** — hikâyeyi silsen tanım aynen kalır.

#### Doğru olan taraf — ve ICT'ye özgü olmayan

Kural tabanlı filtreleme bölümü doğru ve iyi ifade edilmiş: kurallar statik olmalı, kurulum filtreyi geçemezse işlem geçilir, ve **kendi mentorunun beğenisi bile kuralı bozamaz.** Bu son madde entelektüel olarak dürüst bir hareket ve kaydedilmeli.

Risk kapısı da doğru: yeni kurulum var diye toplam maruziyet artırılamaz; ya bir pozisyon kapatılır ya işlem geçilir. Fırsat maliyeti ve "paranın hızı" düşüncesi de doğru.

**Ama bunların hiçbiri ICT'ye özgü değil.** Standart işlem planı ve risk yönetimi bilgisi. İkinci ayda kaydedilen örüntü aynen sürüyor: doğru olan kısımlar herkesin bildiği kısımlar.

#### Aritmetik — hesap tutmuyor

"3:1 ödül/riskte %34 isabet net kârlı olmaya izin verir." **Başabaş eşiği %34 değil, %25.** 3R kazanç ve 1R zararla: `p×3 = (1−p)×1 → p = 0.25`.

%34'te işlem başına beklenti `0.34×3 − 0.66 = +0.36R`. Yani ifade "yanlış" değil — %34 gerçekten kârlı — ama **eşik olarak sunulması yanlış**, ve "marjinal kârlı" nitelemesi de yanlış: işlem başına +0.36R marjinal değil.

Ayrıca **maliyet hesaba katılmıyor.** Senin ölçtüğün gibi, komisyon ve kayma R cinsinden stop mesafesine bölünüyor; gapsiz stoplar −1.088R çıkmıştı. Sıfır maliyetli aritmetik eşiği olduğundan düşük gösterir.

Ve not: altıncı video **aynı iddia için farklı bir sayı veriyor (%30)**. İki sayı da doğru eşiğin (%25) üstünde, ama aynı ayın içinde iki farklı rakam verilmesi, rakamın hesaplanmadığını gösteriyor.

#### Geçmiş açıklamaları

**Sıfır.** Bu videoda hiç grafik örneği yok — video kendisi de "bu videoda çok grafik yok, hepsi teori" diyor. Altı ayda bu tür bir tercih dördüncü kez görülüyor (Aralık V9, Ocak V5, Ocak V9) ve her seferinde aynı dürüst sonucu doğuruyor: **geriye dönük örnek seçme sorunu ortadan kalkıyor.**

#### Ölçülebilirlik

**Ölçülemez.** Videonun çekirdek ürünü minimum sayısı olmayan bir kontrol listesi; belirsizlik tam merkezde. İki bileşen (yuvarlak sayı seviyeleri, sabit pencereli SMT) ayrı ayrı ölçülebilir, ama video onları bir kural haline getirmiyor.

#### Not

**Alınacak:** yuvarlak sayı seviyeleri — kontrol grubu olarak. Ve statik kural disiplini, ki zaten senin ön kayıtlı protokol yaklaşımınla aynı şey.

**Alınmayacak:** yedi ölçüt listesi, eşiksiz haliyle. Ve "kendini ikna ediyorsan geç" vetosu — kodlanamaz, ve kodlanamadığı için ölçülen sistemle uygulanan sistem arasında kapatılamaz bir fark yaratır.

:::

### Video 3 — Klasik swing yaklaşımı ve PD array matrisi

::: ders
**DERS**

#### Temel önerme

Piyasa koşulları tanımlanırken fiyatın hem yükselişte hem düşüşte *neye ulaşabileceği* düşünülür; videonun ifadesiyle bu, olası piyasa yönünü belirlemenin temelidir.

Merkezi iddia: **en son işlem görülen ya da üzerinde işlem gerçekleşen PD array'ler, karşı taraftaki PD array spektrumunun aranacağını gösterir.**

#### PD array matrisi — tarama sırası

Mevcut fiyata göre önce içinde bulunulan aralık tanımlanır. Sonra fiyatın üstü ve altı **bu sırayla** taranır. Video bu array'lerin mevcut fiyat hareketinde bulunmayabileceğini belirtiyor — bu, bakılacak spektrum.

| Sıra | Üstte (prim spektrumu) | Altta (iskonto spektrumu) |
|---|---|---|
| 1 | En yakın bearish mitigation block | En yakın bullish mitigation block |
| 2 | Henüz işlem görülmemiş bearish breaker'lar | Henüz işlem görülmemiş bullish breaker'lar |
| 3 | Likidite boşlukları — fiyatın hızla aşağı çekildiği, yalnızca satış tarafı teslimatı bırakan geniş aralıklar | Likidite boşlukları — fiyatın hızla ralli yaptığı, yalnızca alış tarafı teslimatı bırakan geniş aralıklar |
| 4 | Fair value gap'ler | Fair value gap'ler |
| 5 | En yakın bearish order block | En yakın bullish order block |
| 6 | Kısa vadeli tepelerde fitili olan mumlar → **gövdelerin üstünde** likidite duruyor (rejection block) | Fitili olan mumların **gövdelerinin altında** likidite (rejection block) |
| 7 | Eski dip veya tarihsel tepe | Eski tepe veya tarihsel dip |

Fiyatın üstündeki her array **prim spektrumu**, altındaki her array **iskonto spektrumu**. Aynı tarama **aylık, haftalık, günlük ve 4 saatlik** için aynı şekilde yapılır.

#### Yer değiştirme (displacement) okuması

Aranan: piyasanın **hangi tarafı en son yer değiştirme gösterdi.** Fiyat hangi seviyelerden agresif biçimde uzaklaştı? Hız var mıydı? Akıllı paranın büyük bir itişi olduğunu gösteren geniş aralıklar var mıydı? Videonun gerekçesi: o kurum topluca bizden daha fazla paraya sahip ve bu onun işi; yüksek zaman diliminde fiyatı itiyorsa, o yönün en azından aynı yönde işlem yapılabilir olma olasılığı yüksektir.

#### Yüksek zaman dilimi sıralaması — satış programı

**İdeal satış koşulu:** aylık, haftalık, günlük ve 4 saatlik, hepsi prim PD array'lerinden uzaklaşan fiyatla hizalı.

#### Alım programı — tersi

Aylık iskonto array'lerinden uzaklaşıp yukarıdaki prim array'lere ulaşmaya çalışıyor; haftalıkta fiyat iskonto array'lerinde hassasiyet buluyor ve alım programına giriyor; günlük iskonto array'lerinde destek buluyor ve yükseliyor; 4 saatlikte alım fırsatları için iskonto array'lerinde hassasiyet aranıyor.

Videonun vurgusu: swing trading'de **en kolay ve en olası yönlü kurulumlar, aylık/haftalık/günlük/4 saatliğin dördü de hizalıyken** ortaya çıkar. Aylık boğa, haftalık boğa, günlük boğa iken 4 saatlik bir iskontoya inip örneğin bir bullish order block'ta destek buluyorsa, bu yüksek olasılıklı bir koşuldur — çünkü üç üst zaman dilimi seninle senkronda ve zaten mevcut bir yükseliş piyasası var.

4 saatlikte aranabilecekler tek tek sayılıyor: bullish order block'lar, eski bir dibin altından alım yaparak satış stoplarını toplamak ("tıpkı bir piyasa yapıcının yapacağı gibi"), bir likidite boşluğuna geri inmek, optimal trade entry, bir fair value gap'e geri dönmek. Hepsi aylık/haftalık/günlüğün zaten boğa olduğu düşüncesiyle destekleniyor.

#### Kurulum aşamaları — koşul, sahne, uygulama

Video süreci üç aşamaya ayırıyor.

**1. Koşul.** Piyasa yüksek zaman diliminde yukarı gitmeye önceden eğilimli olmalı. Bu, şu analizlerle varılır: mevsimsellik, faiz odaklı analiz (video bunun "her zaman işin içinde" olduğunu söylüyor), COT raporu — büyük ticari işlemciler İsviçre frangında net uzun mu, hedging programlarının trendi uzun vadeli alım gösteriyor mu, ya da kısa pozisyonlarını agresif biçimde azaltıyorlar mı — ve piyasalar arası analiz (SMT ayrışması, piyasa yapısı).

Kritik nitelendirme: **"her şeyin uyuşmasına gerek yok, makro ölçekte az sayıda şeyin uyuşması yeterli."** Ve videoya göre en yüksek olasılıklı tekil unsur faiz oranlarıdır. Verilen somut örnek: Yeni Zelanda doları ve Avustralya doları, forex'te işlem gören diğer tüm para birimleri ve ülkeler arasında en yüksek faize sahip; getiri daha yüksek olduğu için o para birimlerini almak satmaktan daha olası.

**2. Sahne.** Piyasa önce **ralli yapmalı** — bir yer değiştirme, bir *impuls fiyat salınımı* olmalı. Bu, fiyatı belirli bir seviyeden uzaklaştıran ilk fiyat salınımıdır. Bu ralli sırasında "halk, daha az bilgili işlemciler, tepkisel işlemciler" üst üste biner — **biz bunu yapmayız, bekleriz.**

Beklerken, ralli sırasında direnç sunabilecek koşullar aranır: prim array'leri — bearish order block, breaker, mitigation block, boşluk, fair value gap, eski tepe, eski dip. Piyasanın tepe yapmaya başlaması ve nihayetinde bir geri çekilme vermesi beklenir. Geri çekilme zamanlanmaya çalışılmaz.

**3. Uygulama ve genişleme.** Geri çekilme gerçekleştiğinde, o geri çekilme sırasında boğa alım fırsatları için hassasiyet beklenen **belirli fiyat seviyeleri** aranır. Sonrasında gelen *genişleme salınımı* (expansion swing), kâr edilmeye çalışılan kısımdır — fiyatın bir üst zaman dilimi direnç seviyesine uzandığı bölüm.

#### Aralığın tanımı ve iskonto matrisinin haritalanması

Aralık iki işaretle tanımlanır: **başlangıç noktası (point of origin)** ve geri çekilmeden önceki **ara vadeli tepe**. O tepeden başlangıç noktasına kadar olan her şey **iskonto PD array matrisidir.**

Bu aralığın içinde, impuls salınımının başlangıç noktasından ara vadeli tepeye kadar, matris sırasıyla taranır: mitigation block var mı, bullish breaker var mı, likidite boşluğu var mı, fair value gap var mı, bullish order block var mı, uzun fitilli mumlar var mı (gövdelerinin altında likidite aranabilsin diye), nihai dip nerede, destek bulunabilecek tarihsel bir tepe var mı. Amaç, **hangi seviyelerin güçlü alım olasılığı taşıdığını ya da kurumsal emir akışının devreye girip fiyatı tekrar yukarı göndereceği yerleri** haritalamak.

#### Swing işlem prosedürü — boğa, adım adım

#### Ödül/risk ve kademeli çıkış

İdeal senaryo: girişin ile **tüm zaman dilimlerindeki en yakın prim array** arasındaki aralığın **en az üç katı**, tercihen daha fazlasını sunan kurulumlar.

Aylık bir seviyeyi hedefliyorsan 4 saatlikte giriş yapsan da o aylık seviyeyi hedefliyorsun — ama her şeyi o seviye için tutmuyorsun: **4 saatlik prim array'lerinde bir kısmını, günlükte bir kısmını, haftalıkta bir kısmını al.** Aylık ve haftalık prim aralığına yaklaştıkça pozisyonun çok küçük bir bölümü kalmalı ve kâr yol boyunca alınmış olmalı.

#### Kurulum başarısızlığı protokolü

Videonun en somut prosedürlerinden biri.

**Teyit kuralı:** fiyat lehine hareket ederken alt zaman dilimi 4 saatlik prim array'lerinin *yol verdiğini ya da başarısız olduğunu* hep doğrula, ve yeni iskonto array'lerinin fiyatı desteklediğini gör. Somut olarak: bearish breaker'lar ve bearish mitigation block'lar fiyatı geri tutmamalı, doğrudan içlerinden geçilmeli; potansiyel bearish order block sayılabilecek yükseliş mumlarından geçilmeli; eski tepelerden geçilirken derin geri çekilmelerle geri gelinmemeli, geçilip yukarı genişlenmeli. Bu, güçlü bir işlem ve arkanda kurumsal emir akışı olduğunun açık göstergesi.

#### Fraktallık

Videonun yapısal argümanı. Aylık grafikte: impuls salınımı → geri çekilme → genişleme salınımı → geri çekilme → impuls salınımı → geri çekilme → genişleme salınımı, hepsi daha yüksek tepe ve daha yüksek dipler yaparak. Bu, herkesin standartlarına göre boğa sayılacak klasik bir trend.

Ama haftalık bir impuls salınımının içine bakılırsa, **günlük grafikte daha küçük bir impuls salınımı, derin bir geri çekilme ve ikincil bir genişleme salınımı** görülür — haftalıkta bu bazen görünmez. Sonraki genişleme salınımının içinde de aynısı görülür. Günlük genişleme salınımının içinde 4 saatlik impuls/geri çekilme/genişleme vardır. **Fiyat fraktaldir**, ve bu her fiyat salınımı için, aylıktan 4 saatliğe kadar tüm spektrumda geçerlidir.

Bunun pratik sonucu doğrudan veriliyor: **bu salınımların her birinde iskonto array'leri vardır. Herhangi birinde alım yapıp başarısız olursan, bir sonraki üst zaman dilimi iskonto array'ine iner ve orada aynı fikirleri ararsın** — aylık/haftalık makro yükselişle senkronda kalmak için.

#### Mekanizma iddiası

> Fiyat geri çekilip algoritma bu iskonto array'lerine döndüğünde, piyasa fiyatının altındaki likiditeyi arayacak; bu, banka seviyesindeki işlemcilerin o seviyeleri emirlerle doldurmasına izin verecek, ve sonra piyasa hareket edecek.

#### Ayı tarafı — tam simetrik

Piyasa yüksek zaman diliminde aşağı gitmeye eğilimli. Koşullar aynı terimlerle: mevsimsel eğilim (video bunu "tek başına değil, bir yol haritası olarak" kullanıyor), faiz oranları makro düzeyde güçlü bir belirleyici, COT'ta ticari pozisyonların ağır net kısa olması ya da son altı-dokuz aydır hedging yapmaları, ve piyasalar arası analizin desteği (kurumsal piyasa yapısı, SMT ayrışması).

Piyasa düşer ve bir başlangıç noktasından uzaklaşır — bu impuls fiyat salınımıdır. Videonun eklediği not: o hareket beklenmiş de olabilir, sürpriz de olmuş olabilir, fark etmez. Geri çekilme gelir; sonra genişleme salınımı beklenir.

Aralık, **başlangıç noktası ile geri çekilmeye yol açan kısa vadeli dip** arasında tanımlanır ve bu **prim PD array matrisidir**: bearish order block'lar, bearish likidite boşlukları, bearish breaker'lar, bearish mitigation block'lar, bearish fair value gap'ler, üstünden satılacak eski tepeler, ve rejection block'lar — uzun fitilli mumlar, ayı iken **gövdelerinin hemen üstünden** satılır.

Prosedür aynen aktarılır: 9–18 aylık profil, aylık prim array'leri (en son hangi başlangıç noktasından uzaklaşıldı — bearish order block mıydı, eski bir tepe miydi, direnç görevi gören tarihsel bir dip miydi), aylık prim'ler direnç veriyorsa aylık iskonto array'lerini belirle, haftalığa aktar, haftalıkta aynısı, günlüğe aktar, günlükte aynısı, 4 saatliğe aktar. Sonra **her 4 saatlik prim array'inden satış**: bearish order block, bearish breaker, mitigation block, bir fair value gap'e geri işlem, eski bir tepenin üstünden satış, ya da tepede çok kısa fitili olan bir mumun tepesinden geçiş. Rejection block için not: fiyat çoğu zaman fitillerin üstüne çıkmaz, sadece gövdelerin üstüne çıkıp orada başarısız olur.

Kâr alma günlük, haftalık, aylık **iskonto** array'lerinde kademeli. Ve uyarı: aylık ve haftalık iskonto aralığına yaklaştıkça fiyatın daha aşağı gitme olasılığı azalır — o noktada en küçük pozisyon parçasıyla olmalısın, en büyüğüyle değil; fiyat geri çekilir ya da tümden dönerse çok açık kâr geri verilir.

Ödül/risk: girişle tüm zaman dilimlerindeki en yakın iskonto array'i arasındaki aralığın **en az üç katı**, tercihen daha fazlası. Videonun kendi ifadesi: "aramızda kalsın, 5:1 gibi şeyler ara."

**Başarısızlık protokolü (ayı):** 4 saatlik prim array'indeki satış başarısız olursa — belki bir mitigation block sandığın yerden satmıştın ve doğrudan içinden geçti — bir sonraki **daha yüksek fiyatlı** prim array'ine gidilir ve orada tekrar satılır; her birini teker teker alırsın. 4 saatlikte prim array'i kalmadıysa günlük/haftalık/aylık prim array'lerine gidilir. Yeni girişte **%50 pozisyon büyüklüğü**. Ve: *"kaybettiğinin %60'ını alabiliyorsan %60'a razı ol — en azından zararı hafifletiyorsun."*

Teyit kuralı (ayı): bullish order block'ların ve düşüş mumlarının kırıldığını gör, her destek seviyesinin kırıldığını gör, eski yükseliş mumlarında yeni direnç seviyeleri bulunduğunu gör. Bunu görmeye devam ettiğin sürece kurumsal sponsorluk senin tarafında.

#### İleriye yönelik notlar

Video, akış şeması formatında farklı senaryoları tam olarak anlatan **PDF dosyalarının Ağustos'ta verileceğini** söylüyor. Ayrıca boğa senaryosundaki kırmızı geri çekilme bölgesinde **karşı trend swing işlemi** yapılabileceği belirtiliyor ama bu ay öğretilmiyor — o da Ağustos PDF'lerinde.

:::

::: eleme
**ELEME**

#### Yazılabilir olan

Prosedürün **iskeleti** gerçekten kodlanabilir ve bu kaydedilmeli: yedi array tipinin sabit bir tarama sırası, aralığın iki uçla (başlangıç noktası + ara vadeli tepe) tanımlanması, prim/iskonto ayrımının o aralığa göre yapılması, seviyelerin aylıktan 4 saatliğe aktarılması, ve %50 küçültmeli yeniden giriş protokolü.

**%50 küçültme kuralını özellikle ayır.** Zarardan sonra pozisyon büyüklüğünü *yarıya indirmek* — martingale'in tersi yönü, ve doğru yön. Seri boyunca verilen az sayıda para yönetimi kuralından doğru olanlardan biri, mekanik, ve "kaybettiğini bir sonraki işlemde geri alma" uyarısı da doğru. Bu kısım ICT'ye özgü değil ama doğru, ve doğru olduğu söylenmeli.

#### Seçim noktası sayımı

Aralık ve Ocak'ta kurulan ölçüt netti: *bir fikri ölçülebilir yapan şey derinliği değil, kaç seçim noktası içerdiği.* Bu videoyu o ölçütle sayalım.

| # | Seçim noktası | Video ne diyor |
|---|---|---|
| 1 | Başlangıç noktası hangisi? | "Fiyatın uzaklaştığı yer" — yer değiştirme tanımsız (hız yok, eşik yok) |
| 2 | Ara vadeli tepe hangisi? | "Geri çekilmeden önceki" — hangi geri çekilme? |
| 3 | Zaman dilimi "alım programında" mı? | "İskonto array'lerinden uzaklaşıyor" — tanımsız |
| 4 | Hangi array'ler "aktif"? | Tanımsız |
| 5 | Aynı anda birden çok array varsa hangisi? | Sıra veriliyor — ama altıncı videoda **farklı** veriliyor |
| 6 | Yeniden giriş ne zaman durur? | "Array kalmadığında" — hiçbir zaman kalmaz |

Altı seçim noktası. Karşılaştırma için: Aralık'ın çifte tepe projeksiyonunda sıfır, breaker'da üç mekanik eleman vardı. Ocak'ta beş zaman dilimi arası geçiş zinciri "ne kadar ikna edici görünürse görünsün" ölçülemez sayılmıştı. Bu prosedür o zincirden daha uzun.

#### Yanlışlanamazlık — asıl sorun burada

**1. Fraktal geri düşüş, terminal durumu ortadan kaldırıyor.** Bu, videonun en önemli yapısal özelliği ve açıkça söyleniyor: bir salınımda alım başarısız olursa bir sonraki üst zaman dilimi iskonto array'ine inersin. Ve fiyat fraktal olduğuna göre **her zaman bir alt array vardır.**

Sonuç: **bu prosedürün "fikir yanlıştı" diyebileceği hiçbir durum yok.** Her başarısızlık bir sonraki seviyeye geçiş talimatına dönüşüyor. Yanlışlanabileceği bir durum olmayan bir iddia hiçbir şey söylemiyor — YONERGE'nin üçüncü sorusunu doğrudan geçemiyor.

Not: %50 küçültme kuralı bunun *zararını* sınırlıyor (dört ardışık zarar 1 + 0.5 + 0.25 + 0.125 = 1.875R eder, 4R değil). Yani yapı ekonomik olarak savunulabilir. Ama **ölçülebilirlik sorunu ekonomik değil, mantıksal:** kaç işlem üretildiğini söyleyemezsin, çünkü durma koşulu tanımlı değil.

**2. "Tüm 4 saatlik iskonto array'lerinden al."** Yedi array tipi × bir aralıkta çok sayıda aday × dört zaman dilimi. Bu seçicilik değil, doygunluk. İkinci videonun "en iyi senaryoları seçiyorsun" vaadiyle doğrudan çelişiyor.

**3. Tarama sırası tutarsız.** Bu videoda tek bir sıra veriliyor (mitigation → breaker → boşluk → FVG → order block → rejection → eski tepe/dip). Altıncı videoda ise "prim array'leri için listede aşağıdan yukarı, iskonto array'leri için yukarıdan aşağı" deniyor. Aynı ay içinde iki farklı okuma. Bir kural aynı ayda iki farklı sırayla veriliyorsa sıra bağlayıcı değildir.

#### Ölçülebilir olan tek çekirdek: prim/iskonto ayrımı

Prosedürün tümü ölçülemez olsa da, içindeki **tek bir fikir tamamen mekanik:** tanımlı bir aralıkta orta noktanın altı iskonto, üstü primdir; alımlar iskontodan, satışlar primden yapılır.

Aralık iki uçla tanımlandığı anda bu **sıfır seçim noktalı aritmetiktir.** Ve dördüncü video buna sayısal karşılıklar veriyor (0.20 / 0.30 / 0.50 / 0.80 / 0.90). Test edilebilir hipotez net: *tanımlı bir salınım aralığında dengenin altından alınan girişler, üstünden alınanlardan farklı sonuç veriyor mu?*

**Ve bu senin ölçümüne doğrudan eklenir.** Sweep sistemini ölçtüğünde girişin *aralıktaki konumuna* dair hiçbir kapı yoktu. Bu, tek parametrelik bir filtre ekler ve yasaklayıcıdır ("dengenin üstünde uzun pozisyon yok") — yasaklayıcı kurallar daha test edilebilir.

#### Yeniden adlandırmalar

| Videodaki | Klasik karşılığı | Yeni bilgi? |
|---|---|---|
| Impuls / geri çekilme / genişleme salınımı | Trend ayağı + düzeltme; Elliott'un impuls-düzeltme ayrımı | Yok |
| Prim / iskonto spektrumu | Aralığın orta noktası; %50 geri çekilme seviyesi | Kısmen — kesirli eşiklerin biçimlendirilmesi (V4) kullanışlı |
| Denge (equilibrium) | Orta nokta | Yok |
| PD array matrisi | Konfluans tabanlı destek/direnç haritalaması | Yok — sıra yeni, içerik standart |
| "Fiyat fraktaldir" | Ölçek değişmezliği / çoklu zaman dilimi analizi | Yok |

#### Geçmiş açıklamaları

**Sıfır grafik örneği.** Video tamamen şematik. İkinci videoyla birlikte, ayın iki videosunda hiç geriye dönük örnek yok — ve bu, geriye dönük seçim sorununu ortadan kaldıran dürüst bir tercih. Kaydedilmeli.

#### Ölçülebilirlik

**Ölçülemez.** Prosedürün merkezinde durma koşulu olmayan bir yeniden giriş döngüsü var; altı seçim noktası tanımsız; ve tarama sırası ayın içinde tutarsız. Prim/iskonto ayrımı ayrı ve ölçülebilir bir çekirdek olarak çıkarılabilir — ama o, videonun kendisi değil.

#### Not

**Alınacak:** prim/iskonto konum filtresi (V4'ün sayısal biçimiyle). Ve %50 küçültmeli yeniden giriş — büyüklük kuralı olarak doğru, ancak *durma koşulu senin tarafından eklenmek şartıyla* (ör. aralık başına en fazla üç giriş).

**Alınmayacak:** "her başarısızlıkta bir sonraki array" döngüsünün kendisi. Bu, geçmişte her zaman bir seviye bulunmasına ve gerçek zamanda hiç durmamasına yol açar — Aralık'ta işaretlenen *seviye taşıma* hatasının zaman dilimleri arası versiyonu, ve daha güçlüsü.

:::

### Video 4 — Boğa piyasası kurulumları — aylık/haftalık/günlük sıralı

::: ders
**DERS**

#### Zaman dilimi başına koşul

Her zaman diliminde aranan şey aynı: **alım tetiklemiş bir iskonto array'i**, ve bunun kanıtı fiyatın yükselmesi. Yani ayırt edilebilir bir iskonto array'inden **yer değiştirme (displacement)** aranıyor. Bu array bir bullish order block olabilir, eski bir dip, eski bir tepe olabilir, bir fair value gap'te ya da boşlukta kapanış sonrası tepki vermiş olabilir, ya da bir breaker'dan sekmiş olabilir.

Aynı kontrol haftalık ve günlükte tekrarlanıyor. Genel teyit ifadesi: **"tüm zaman dilimlerinde düşüş mumları fiyata yeni destek sağlıyor ve çok az ya da hiç zayıflık görülmüyor."**

#### Üç sıralı durum

Videonun ürünü bu üç durumlu karar tablosu.

**Durum 1 — Aylık boğa, haftalık boğa, günlük boğa.** Yani üç zaman diliminde de yer değiştirme / ralli / impuls salınımı görülüyor.

**Durum 2 — Aylık boğa, haftalık boğa, günlük düzeltmede.** Günlükte yukarı impuls yok, aşağı işlem görüyor.

**Durum 3 — Aylık boğa, haftalık düzeltmede, günlük düzeltmede.**

#### Gümüş örneğinin çözümü

**Açıklama.** Video baştan bir beyan yapıyor: gümüşün boğa olacağını 2015'ten beri, ve 2016'daki geri çekilmeden sonra **1600 seviyesi civarında** boğa beklediğini kamuya açık olarak söylemişti. Bu yüzden fiyat hareketini gizlemeden anlatacağını belirtiyor.

**Aylık grafik.** Son on yıl civarına bakılıyor: 2009–2011'de büyük bir yükseliş, sonra fiyat tamamen geri iniyor ve o bölgedeki küçük bir boşluğa kapanıyor — dibin oluşma nedeni olarak gösterilen tarihsel referans noktası bu. **Nisan 2016'da** bir salınım tepesi kırılıyor, büyük bir yer değiştirme yukarı. 2015'te büyük bir hareket, 2016'ya taşınıyor, fiyat geri iniyor, konsolide oluyor, bir genişleme daha yapıp aynı tepelere kadar çıkıyor.

**Aralık:** o dipten o tepeye. Aylıkta piyasa yapısı kırılmış, **1400 seviyesinden** büyük bir yer değiştirme var, ve bir salınım tepesi daha alınmış. Sonuç: **aylık boğa.** Profil trend — küçük bir konsolidasyonda oturmuyor. "2015'ten beri gümüşe büyük para akıyor."

**Seviyeler:** son büyük düşüş mumunun gerçek tepesi **15.56**. Videonun kuralı: fiyat senin seviyenin üstündeyse **en yakın yuvarlak sayıya** bak — burada **1560** — ve **1550**'ye kadar inebileceğini bekle. *"Piyasa fiyatı seviyenin üstündeyse muhafazakâr ol, tam o seviyenin vurulmasını bekleme."* 1580 de kullanılabilirdi. Dip için 1400 alınıyor, çünkü fiyat oradan tepki vermiş.

**Haftalık grafik.** 1400'den uzaklaşma ve 1560 seviyesi görülüyor. Buna ek olarak haftalıkta ayrı bir seviye var: büyük bir fiyat sıçramasından hemen önceki **iki düşüş mumu**. Seviye mumun **tepesinden** başlıyor; muhafazakâr fiyat noktası olarak mumun **açılışı** da kullanılabilir. Bu, aynı zamanda gerideki mumların gövdelerinin altında kalıyor.

**Sıralı durum devreye giriyor.** Aylık kısa vadeli bir tepeyi kırıp ralli yaparken haftalık aşağı işlem görmeye başlıyor. Kural: aylık boğa iken haftalık geri çekilirken, **fiyatın aylıkta ayırt edilmiş bir seviyeye geri inmesi beklenir.** Fiyat haftalık bir bullish order block'a (son iki düşüş mumu) iniyor, agresif tepki veriyor, ve o tepeyi yapana kadar yükseliyor.

Sonra aylık düzeltmeye giriyor. Video not düşüyor: *aylığın düzeltmesi altta yatan boğalığın değiştiği anlamına gelmez.* Haftalık da aşağı gidiyor — yani **aylık boğa, haftalık ayı, günlük ayı** (Durum 3). Kural gereği fiyatın **aylık bir iskonto array'ine** inmesi beklenir: 1560 seviyesi. **Fiyat 1560'a iniyor, dip tam 1560'ta oluşuyor**, ve ralli yapıyor. Aynı harekette şunlar da oluyor: eski bir dibin altına ve mum gövdelerinin altındaki bir rejection block'un içine iniyor, bir kısa vadeli dip daha alıyor (satış tarafı likiditesi), ve daha önce açık kalmış bir boşluğu kapatıyor.

**Günlük grafik.** Fiyat sürekli aşağı işlem görüyor, aylık bullish order block'a çarpana kadar. Videonun kaydı: *"boğa için beklediğimiz tepkiyi görmüyoruz ama daha düşük fiyatlar görmeye devam ettik — burada alıcı olabilirsin."* Aylık boğa, haftalık ve günlük ayı iken, aylık seviyeye inen en iyi fırsat beklenir.

Sonra fiyat aylık seviyeye inerken aynı zamanda **haftalık bir bullish order block'un içinde** de kalıyor — yani aylık ve haftalık uyumlu. Bu durumda günlük düzeltmedeyken, haftalık ve/veya aylık yuvalanmış order block'tan alım yapılır, ve **fiyat günlükte düşüş mumlarına her indiğinde alıcı olunabilir.**

**Seviye işaretleme kuralı — ve bu önemli:** fiyat daha yüksek tepeler yaparken **her düşüş mumu** not edilir, **ve mumların açılışları da** not edilir. Videonun vurgusu: *"bunlar bölge değil, belirli fiyat seviyeleri — düşüş mumlarının açılışları ve tepeleri."*

**4 saatlik yürütme.** Tüm günlük düşüş mumu tepeleri ve açılışları aktarılıyor, sonra aynısı 4 saatlikte yapılıyor. Video sırayla yürüyor: bir düşüş mumu — fiyat çarpıyor, ralli yapıyor. İki düşüş mumu — **fitil değil gövdeler kullanılıyor** — çarpıyor, ralli yapıyor. Bir düşüş mumu daha — çarpıyor, uzaklaşıyor, yeni tepe yapıyor. Bir sonraki — ralli yapıp yeni tepe yapıyor; sonra oraya geri iniyor ama satış tarafı likiditesi daha geride olduğu için stop'a değmiyor ("işlemi o fikirlerin etrafında çerçevelemelisin; bunlar swing işlemleri, gün içi değil").

Bir seviyede ralli oluyor ama **yeni tepe yapılamıyor** — o zaman beklenir, fiyatın **günlük** seviyeye geri inmesi beklenir. Video hassasiyeti işaret ediyor: fiyat 4 saatlik bullish order block'un içinden geçip onu ihlal ediyor, ama sadece **günlük** seviyeye kadar iniyor ve oradan patlıyor.

Fiyat ralli yapıp bir tepeyi kırdığında: **"kırdı, demek ki gerçek alım var"** — teyit. Sonra 4 saatlik mumlara geri dönülüyor. Küçük bir bullish order block, son düşüş mumu — fiyat geliyor, çarpıyor, ralli yapıp daha yüksek tepe yapıyor. Ardından kural: **kırılan tepeden önceki düşüş mumu aranır.** Bulunan mum aynı zamanda **günlük bazda da bir order block**; fiyat oraya iniyor ve sıçrıyor. Video bunun Cuma günkü hareket olduğunu ve **1800 seviyesi** beklentisinin katalizörü olduğunu söylüyor.

**Hedefler ve geçersizlik.** Yukarıda bir **likidite boşluğu** var; fiyat oraya çıkıp kapatıyor — **ilk hedef buydu.** Boşluğun bir kısmı hâlâ üstte. Ama bir **breaker** da var: daha yüksek bir tepeden hemen önceki bir düşüş mumu, o tepe reddedilmiş ve aşağı kırılmış. O aralığın dibi **1797**'ye geliyor — 1800 çizgisinin çizilme sebebi bu. Video: önce buraya kadar yükselmesi beklenir; günlük yukarı gitmeye istekliyse 1920'ler ve 2200'ler gündeme gelir, ama sonraki seviye aylık ve haftalık prim array'lerinden bulunur.

**Gerçekleşen sayılar:** fiyat **1566** dibine indi; **1600 seviyesi "esasen alım noktası"**; vadeli metal piyasasında Cuma günü gün içi tepe **1802** civarında. 1600'den alıcı olan biri için "**on bin dolarlık** kâr potansiyeli". Video not düşüyor: bu metalin o seviyeye çıkması **birkaç ay sürdü** — "ama swing trading budur, gecelik değil, gün içi değil; zaman ufku iki hafta veya daha uzun, tercihen iki haftadan bir aya kadar."

#### Fibonacci genişletme aracı (MT4)

Videonun aralığı prim/iskonto olarak sayısallaştırma yöntemi.

| Seviye | Anlamı | Kural |
|---|---|---|
| 0.90 | Derin / çok pahalı prim | Bu seviyelerde **yeni uzun pozisyon istenmiyor** |
| 0.80 | Prim | Bu seviyelerde **yeni uzun pozisyon istenmiyor** |
| 0.50 | **Denge (equilibrium)** | Üstü prim, altı iskonto |
| 0.30 | Derin iskonto | Bu seviyelerde **yeni kısa pozisyon alınmıyor** |
| 0.20 | En derin iskonto | "20'den azını görmeyi sevmiyorum" |

Video bu aracın zorunlu olmadığını, sadece grafiksel olarak göstermek için kullandığını belirtiyor: "zamanla çizmene gerek kalmayacak, prim ve iskonto spektrumlarının nerede olduğunu bileceksin."

#### Prim/iskonto asimetrisi iddiası

Video haftalık ve günlük grafiklerde şunu gösteriyor: aralığın **prim tarafındaki bullish order block'lar, iskonto tarafındakiler kadar elverişli değil** — küçük sıçramalar yaptırıyorlar ama güçlü değiller. Buna karşılık aralığın **iskonto tarafındaki bearish order block'lar fiyatı tutamıyor**; algoritma içlerinden geçip gidiyor.

Aranan teyit tam olarak bu: **bearish order block'ların / düşüş hareketlerinden önceki yükseliş mumlarının potansiyel direnç noktaları olarak yol vermesi, ve her düşüş mumunun destek sağlaması.**

Mekanizma iddiası: *"algoritma fiyatın bir iskontoya inmesine izin veriyor ki kurumsal bazdaki işlemciler uzun pozisyonlarını üst üste yığabilsinler; sonra fiyat genişleyip prime gidiyor."*

#### Kapanış notu

Video swing işlemlerini tanımı gereği **"çok kural tabanlı, belirsiz değil"** olarak niteliyor, ve gün içi işlemlerin aksine — orada gürültülü zaman diliminde birçok şey ileri geri döner. Aylık/haftalık/günlük seviyelere bakıldığında bunlardan çok fazla yok; bu yüzden herkes kurumsal bazda aynı seviyeyi bekliyor ve seviyeler o yüzden bu kadar hassas. *"Hepsi üşüştüğünde, bu piyasayı koşturan köpekler onlar; bizim tek istediğimiz sırtlarındaki pire olup o hareketin parçası olmak."*

:::

::: eleme
**ELEME**

#### Yazılabilir kurallar — ve bu ayın en iyileri burada

**1. Fib prim/iskonto filtresi.** Aralık iki uçla tanımlandığı anda 0.20 / 0.30 / 0.50 / 0.80 / 0.90 **saf aritmetik**. Sıfır seçim noktası. Ve kural **yasaklayıcı** biçimde ifade ediliyor: 0.80'in üstünde yeni uzun yok, 0.20'nin altında yeni kısa yok. Aralık ayının kalibrasyonu bunu açıkça söylüyordu — yasaklayıcı kurallar, "şurada al"dan daha yanlışlanabilir.

**Ayın en ölçülebilir tek fikri bu.** Test edilebilir hipotez: *tanımlı bir salınım aralığında dengenin altından alınan girişler, üstünden alınanlardan farklı ortalama R veriyor mu?* Karşılaştırma grubu doğal ve tek koşuda cevaplanır.

**2. Yuvalanma (nesting) kuralı.** "Günlük düzeltmedeyken sadece haftalık iskonto array'iyle örtüşen günlük array'leri al." Bu mekanik bir **örtüşme testi** ve bir *kısıtlama* — işlem sayısını azaltıyor. Aralık ayının propulsion block sorusunun (iki order block'un üst üste bindiği yerler farklı mı davranıyor?) zaman dilimleri arası genellemesi, ve kodlaması aynı derecede kolay.

**3. İki geçersizlik kuralı.** Ayın tek "işlem alma" koşulları:

Üç bileşenin üçü de neredeyse mekanik (daha yüksek tepe = pivot karşılaştırması; reddedilme = kapanış konumu; yapı kırılımı = pivot kırılımı). Tanımı sıkılaştırması gereken tek şey "reddedilme". Ve **yasaklayıcı olduğu için doğrudan test edilebilir:** bu koşulu sağlayan durumlarda alım yapmamak sonucu iyileştiriyor mu?

**4. "Bölge değil, seviye."** Girişin düşüş mumunun açılışı ve tepesi olarak sabitlenmesi bir seçim noktasını kaldırıyor. Aralık ayında order block'un "bölge mi seviye mi" olduğu belirsizdi; burada net.

**5. Yuvarlak sayı muhafazakârlığı.** 15.56 → 1560 kullan, 1550'ye kadar inebileceğini bekle. Mekanik ve tolerans yönü doğru (girişi zorlaştırıyor, kolaylaştırmıyor).

#### Merkezi tanımsızlık — beşinci kez, ve bu kez çözüm elde

Üç durumlu tablonun tamamı **"aylık boğa mı", "haftalık düzeltmede mi", "günlük düzeltmede mi"** yüklemlerine dayanıyor. Üçü de tanımsız. Video "daha yüksek tepe ve daha yüksek dipler" diyor ama kaç salınım noktası, hangi pencere, hangi pivot tanımı — yok.

**Ocak ayının ikinci videosu bu tanımı mekanik olarak vermişti:** salınım noktalarının ilerleyişi, ve ara vadeli tepe/dip tanımı (solunda ve sağında birer kısa vadeli tepe olan tepe) — senin pivot mantığınla birebir aynı yapı. Kaynağı da veriliyordu (Larry Williams). Şubat o tanıma **bir kez bile atıf yapmıyor**, ve onun yerine tanımsız bir yüklem kullanıyor.

Bu, YONERGE §4'teki "yön ön koşulunun tanımsızlığı" hatasının bu aydaki hali — ama bir farkla: dört ay boyunca tanım *yoktu*; bu ay tanım *var ve kullanılmıyor*.

**Pratik sonuç senin için:** Ocak V2'nin salınım kuralını yüklem olarak takarsan, bu üç durumlu tablo **tamamen mekanik hale gelir.** Boşluk gerçekten kapatılabilir bir boşluk, ve kapatan parça aynı serinin içinde.

#### Yanlışlanamazlık

**1. Beklenen tepkinin yokluğu geçersizlik saymıyor.** Videonun kendi cümlesi: *"boğa için beklediğimiz tepkiyi görmüyoruz ama daha düşük fiyatlar görmeye devam ettik — burada alıcı olabilirsin."* Kuralın öngördüğü tepki gelmediğinde kural iptal edilmiyor, giriş yine yapılıyor. Bu, kuralın bir tahmin olmaktan çıkıp bir konum tarifine dönüşmesi demek.

**2. Seviye taşıma, açık haliyle.** *"1560 seviyesini koruyabiliriz ama işleri temiz tutmak için ilerledikçe ayarlayacağım."* Ve daha genel olarak: her düşüş mumu ve her açılış işaretleniyor. Aralık ayında işaretlenen hatanın aynısı, ve sonucu aynı: **geriye dönük bakıldığında her zaman yakında bir seviye bulunur.**

**3. "Fiyat gelene kadar bekle" hedefi.** "Birkaç ay sürdü ama swing trading budur." Zaman sınırı yok. Aralık V10 ve V14'teki zaman sınırsızlığı sorunu — ama not: birinci video **iki hafta ile bir ay** aralığını veriyor, yani bir üst sınır var. Video o sınırı burada uygulamıyor.

**4. Ön açıklama, kanıt değil.** Videonun "bunu önceden söylemiştim" beyanı **etik olarak dürüst bir hareket ve öyle kaydedilmeli** — sessizce geriye dönük bir örnek anlatmaktan farklı. Ama kanıtsal olarak hiçbir şeyi değiştirmiyor: kaç böyle çağrı yapıldı, kaçı tuttu? Sayı yok. Beyan, seçilmiş örnek sorununu çözmüyor; sadece seçimin ne zaman yapıldığını değiştiriyor.

#### Doğru olan taraf

**Ölçek büyüdü ve bu önemli.** Bu videoda hiçbir yerde 5 dakikalık grafik ya da 2 pip'lik seviye yok. Gümüş örneği aylık/haftalık/günlük/4 saatlik, hareketler dolar cinsinden. Aralık ayında işaretlenen "ölçek küçülmesi" örüntüsü bu ay **tersine dönmüş**, ve senin −1.088R maliyet bulgunun bu ölçekte itirazı çok daha zayıf.

**Prim/iskonto asimetrisi iddiası test edilebilir bir iddia** — ve ilginç olanı, iddianın kendisi anlatıdan bağımsız çalışıyor. "Algoritma izin veriyor" hikâyesini silsen bile *"aynı array tipi, aralıktaki konumuna göre farklı sonuç veriyor mu"* sorusu geçerli kalıyor.

#### Aritmetik denetimi

Gümüş vadeli sözleşmesi 5.000 ons. 1600'den 1800'e = ons başına 2.00 dolar × 5.000 = **10.000 dolar.** Videonun rakamı doğru.

#### Geçmiş açıklamaları

Tek enstrüman (gümüş), aylıktan 4 saatliğe kadar yaklaşık on beş işaretli tepki. Hepsi sonucu bilinerek. Ve kaçırılan ya da çalışmayan kurulumların sayısı verilmiyor — bu videoda tek bir başarısız giriş bile gösterilmiyor.

#### Ölçülebilirlik

**Kısmen.** Üç durumlu karar tablosu, yuvalanma kuralı ve iki geçersizlik kuralı mekanik; ama tablonun üç yüklemi de tanımsız. Ocak V2'nin salınım tanımı takılırsa **Ölçülebilir** hale gelir — ve bu videoda ayrıca **bağımsız olarak ölçülebilir** bir bileşen var: fib prim/iskonto filtresi.

#### Not

**Öncelikli alınacak:** fib prim/iskonto filtresi. Senin sweep ölçümüne tek parametre olarak eklenir ve yasaklayıcıdır. Sweep tek başına %33 isabet, 2R'de tam başabaş vermişti; girişin aralıktaki konumuna göre ayrıştırılması, o sonucun içinde iki farklı popülasyon olup olmadığını gösterir.

**Alınacak:** yuvalanma örtüşme testi ve iki geçersizlik kuralı — ikisi de filtre, ikisi de işlem sayısını azaltıyor. **Uyarı:** filtre eklemek işlem sayısını düşürür ve senin range projende Aşama 1'de RET almanın sebebi zaten işlem sayısıydı (27 hücrenin hiçbiri 100 işlem eşiğini geçemedi). Bu filtreler ancak çoklu enstrümanla ölçülebilir.

**Alınmayacak:** "beklenen tepki gelmese de al" muafiyeti. Bu tek cümle, kuralın yanlışlanabilirliğini ortadan kaldırıyor.

:::

### Video 5 — Ayı piyasası kurulumları

::: ders
**DERS**

#### Zaman dilimi başına koşul

Dördüncü videonun tam aynası. Aylık grafikte **satış tetiklemiş bir prim array'i** aranıyor, kanıtı fiyatın düşmesi. Haftalıkta prim array'leri satış tetikleme yeteneği gösteriyor, kanıtı yine fiyatın düşmesi. Günlükte aynısı. Üç zaman diliminde de bir prim array'i fiyatı aşağı sürüklüyor ya da fiyata direniyor.

Genel teyit ifadesi: **tüm zaman dilimlerinde yükseliş mumları fiyata yeni direnç sağlıyor ve çok az ya da hiç güç görülmüyor.**

#### Üç sıralı durum

**Durum 1 — Üç zaman dilimi de ayı.**

**Durum 2 — Aylık ayı, haftalık ayı, günlük boğa** (günlükte düzeltme sürüyor).

**Durum 3 — Aylık ayı, haftalık boğa, günlük boğa.**

#### EUR/USD örneğinin çözümü

**Aylık grafik.** **18 aylık** veri işaretleniyor. Bu 18 ayın içindeki tüm prim PD array'leri çiziliyor: **her yükseliş mumunun dibi** not ediliyor, ve **her yükseliş mumunun açılışı** da not ediliyor.

**Haftalık grafik.** Aylık seviyeler aktarılıyor, sonra haftalık seviyeler ekleniyor: yükseliş mumlarının dipleri bearish order block'ları işaretliyor (kırmızı trend çizgileriyle). Ardından **bir düşüş hareketinden önceki tüm yükseliş mumlarının mean threshold'ları** — yani bearish order block'ların orta noktaları — işaretleniyor. Birden çok mum söz konusuysa **her iki gövde birleştiriliyor.** Bir durumda bir tepeden bir dibe aralık kullanılıyor — **sadece gövdeler, fitiller değil** — ve onun mean threshold'u alınıyor.

**Günlük grafik — çizgi kodları.** Kalın mavi çizgiler aylık bearish order block'ların **açılışları**; ince mavi çizgiler aylık **dipler**; kırmızı kesikli çizgiler haftalık bearish order block'ların **mean threshold**'ları.

**Fiyatın izlediği yol, sırayla:**

**Aşağı hareketin mantığı:** fiyat her aşağı hareket ettiğinde bir **iskonto PD array'i arıyor** — bullish order block, fiyatın altında bir boşluk ya da gap, mum gövdelerinin altında bir rejection block, eski bir dip. Bunlar aşağı yönlü hedef olarak aranan şeyler.

**Ve bir kayıp örneği bilerek ekleniyor.** Video bir noktada duruyor: *"burada bir kez daha kısa pozisyon almaya karar verdiğini ve stop olduğunu söyleyelim — böylece seçilmiş örnek tartışması olmasın."*

#### 4 saatlik yürütme

Tüm aylık/haftalık/günlük seviyeler 4 saatliğe aktarılıyor. Fiyat, aşağı işlem görmeye başlamadan önceki en yüksek tepeden geliyor; tepe ile dip arasında büyük bir aralık var. Fibonacci genişletmesiyle bakıldığında fiyat **dengenin üstünde, prim bölgesinde** — yani satış tarafında.

**Mitigation block örneği.** Bir bölgede hiç düşüş mumu yok, sadece uçtan uca aralıklar — likidite boşluğu. Ama tek bir küçük düşüş mumu var; fiyat oradan geçiyor, sonra ona geri dönüyor. Videonun okuması: *"burada bir geçiş oldu; fiyatı bu seviyelere kadar itmek için kullandıkları ve zarara geçecek olan uzun pozisyonların bir kısmını çıkarma fırsatı buydu — o uzunları burada mitigate ettiler."* Bu seviye 4 saatlik mitigation block olarak işaretleniyor.

**Bearish order block taraması.** Video düşüş hareketlerinden önceki tüm yükseliş mumlarını tek tek işaretliyor. Bazıları birden çok ardışık mum — *"bu üç mum birlikte, düşüşten hemen önceki tek bir yukarı hareket, potansiyel bir bearish order block."*

**Ve kaybeden işlemler açıkça gösteriliyor.** Video birkaç kez duruyor:

Videonun kendi özeti: **"kârlı olan birçok potansiyel giriş var, ama seni stop ettirecek ve zararla sonuçlanacak birkaç tane de var."**

**Mum seçim kuralı — yeni.** Bir yükseliş mumunun gövdesi **çok küçükse ve bir önceki yükseliş mumunun içine kapsanmışsa** (encapsulated), o mum order block olarak kullanılmaz — **daha büyük, daha kalın gövdeli mum kullanılır.**

**Konsolidasyon kuralı.** Fiyat aylık bir seviyeye inip oradan bir kez daha yukarı çıkıp tekrar inince aralığa bağlı konsolidasyon oluşuyor. Kural: **konsolidasyondaysan stopların nerede olduğunu aralığın dışında ara** — üstte ve altta. Fiyat eski tepenin üstüne çıkıyor; eski tepe bir prim PD array'i, ve üstündeki sahte kırılım satış fırsatı.

**Ölçülen iki işlem.** Video iki hareketi rakamlarıyla veriyor:

| İşlem | Hedefe mesafe | Hareketin aralığı | Tarih | Süre |
|---|---|---|---|---|
| Eşit diplerin altına inmek için | 245 pip | 289 pip | 13–16 Şubat 2012 | 3 gün |
| İki yükseliş mumundan kısa | — | 536 pip | 21 Mayıs – 1 Haziran 2012 | 11 gün |

Birincisi için videonun kendi notu: *"tam olarak swing işlemi değil ama iyi bir ödeme yaptı — sadece zaman kriterine uymadı."*

**Aranan teyit.** Video tekrarlıyor: *"tüm yükseliş mumlarının direnç sağladığına dikkat et — aradığımız bu. Tüm yeşil mumlar temelde direnç seviyeleri olmalı. Fiyat onlara geri çıktığında direnç görevi görmeliler — daha sonra kırılsalar bile, kurumsal sponsorluk için aradığımız direnç ölçüsünü yine de sağlıyorlar."*

#### Sıklık, hassasiyet ve yüksek zaman dilimi toleransı

Videonun kapanış gözlemleri:

:::

::: eleme
**ELEME**

#### Bu ayın en önemli metodolojik ilerlemesi burada

**Altmış üç videoda ilk kez kaybeden işlemler gösteriliyor.** Beş-altı kez bir seviye işaretlenip "bu uygulansaydı zarar olurdu" deniyor, ve bir kez de açıkça "seçilmiş örnek tartışması olmasın diye burada stop olduğunu varsayalım" deniyor.

Bu, YONERGE §4'teki "kaçırılanların sayılmaması" hatasında **cins olarak** bir düzelme. Beş ay boyunca sadece gerçekleşen kurulumlar anlatılıyordu; burada başarısız olanlar da gösteriliyor.

**Ama derece olarak düzelme yok:** gösteriliyorlar, sayılmıyorlar. Videonun tek nicel ifadesi *"kârlı olan birçok giriş var, birkaç tane de kaybeden"* ve *"hepsi kârlı değil ama büyük çoğunluğu kârlı."* Oran yok. Altmış üçüncü videoda hâlâ geçmeyen cümle aynı: *"bunu şu kadar örnekte ölçtük, şu oranda çalıştı."*

Yine de kaydedilmeli: gösterilen kaybeden işlemler, bu videoyu kendisinden önceki tüm örnek çözümlemelerinden daha dürüst kılıyor.

#### Yazılabilir kurallar

**1. Mum kapsanma (encapsulation) kuralı.** "Gövdesi bir önceki mumun içine kapsanmış küçük gövdeli mumu order block olarak kullanma, daha büyük gövdeliyi kullan." Tamamen mekanik: `high/low` ya da `max/min(open,close)` içerme testi. Aralık ayının breaker videosu "düşüşten önceki en yüksek olan" kuralını vermişti; bu, ikinci bir mum seçim kriteri, ve bir seçim noktasını daha kapatıyor.

**2. Konsolidasyonda stop konumu kuralı.** "Aralıktaysan stopları aralığın dışında ara." Mekanik ve doğru bir gözlem — Ocak V4'ün 20 günlük likidite havuzları fikriyle aynı yapıda.

**3. Sıklık/tepki takası gözlemi.** "Yüksek zaman dilimi seviyeleri daha seyrek ama daha güçlü tepki verir." Bu, doğrudan ölçülebilir bir iddia: *seviye tepkilerinin büyüklüğü, seviyeyi üreten zaman diliminin fonksiyonu mu?* Karşılaştırma grubu doğal, ve bu senin ölçtüğün her seviye tabanlı kural için geçerli bir soru.

**4. Konfluans iddiası.** "Ne kadar çok seviye birleşirse tepki o kadar hassas." Sayılabilir: bir fiyat noktasında örtüşen array sayısı bir tam sayıdır, ve sonuçla ilişkisi ölçülebilir. Dördüncü videodaki yuvalanma kuralının genellemesi.

#### Yanlışlanamazlık — ve bu ayın en güçlü kaçış kapısı

Üç ifade bir araya geldiğinde kurulum **sayılamaz** hale geliyor:

Birlikte okunduğunda şu anlama geliyorlar: **seviye, genişliği belirtilmemiş bir bant; giriş sayısı sınırsız; ve her stop bir sonraki girişin gerekçesi.**

Bu, üçüncü videodaki fraktal geri düşüş döngüsünün aynı zaman dilimindeki versiyonu, ve pratik sonucu daha ağır: **bu kuralın kaç işlem ürettiğini söyleyemezsin.** Ölçmek istersen sen bir sınır koymak zorundasın (seviye başına en fazla N giriş, bant genişliği = mean threshold'a kadar), ve o an ölçtüğün şey videonun iddiası değil, senin tanımın olur.

Ve mekanizma gerekçesi ("büyük emirler birden çok geçiş gerektirir") ölçülemez bir katman: emir defterine erişimin yok, ve **kural o gerekçe olmadan da çalışıyor.** "Aynı seviyeye ikinci ve üçüncü dokunuş, birinciden farklı sonuç veriyor mu?" ölçülebilir bir sorudur; "orada büyük emirler inşa ediliyor" ölçülemez ve gereksiz bir katmandır.

#### Kendi tanımıyla çelişki: swing işlemi ne kadar sürer?

Birinci video swing trading'i **"iki hafta veya daha uzun"** diye tanımlıyor; dördüncü video **"tercihen iki haftadan bir aya"** diyor. Bu videonun ölçtüğü iki işlem **3 gün** ve **11 gün** sürüyor — ikisi de tanımın altında.

Video birincisini kabul ediyor (*"zaman kriterine uymadı"*) ama ikincisini kabul etmiyor, ve ikisini de "swing trade" örneği olarak sunuyor. Bir yöntemin örnekleri kendi giriş kriterini karşılamıyorsa, ölçülecek şey belirsizleşir: 3 günlük işlemler örnekleme dahil mi, değil mi?

#### Merkezi tanımsızlık

Dördüncü videoyla aynı: üç sıralı durumun üç yüklemi de ("aylık ayı", "haftalık boğa", "günlük boğa") tanımsız. Aynı çözüm mevcut ve aynı biçimde kullanılmıyor.

#### Gövde/fitil konvansiyonu — bir not

Bu ay boyunca gövde/fitil ayrımı sürekli kullanılıyor: order block aralığı için "sadece gövdeler, fitiller değil", rejection block için "gövdelerin üstünden", inside bar için "gövdeye bak, fitile değil". **Ama YONERGE §4'te işaretlenen yanlış iddia — "gövdeler kurumsal, fitiller perakende" — bu ay hiçbir videoda tekrarlanmıyor.**

Yani konvansiyon sürüyor, yanlış gerekçe sürmüyor. Bu, dürüst kaydedilmesi gereken bir gözlem: iddia bu ay yok, ama üstüne kurulan ölçüm konvansiyonu var — ve konvansiyon zaten gerekçesinden bağımsız olarak ölçülebilirdi.

#### Geçmiş açıklamaları

Tek enstrüman (EUR/USD, 2012 dönemi), 4 saatlikte otuza yakın işaretli tepki, üstüne günlük/haftalık/aylık katmanları. Hepsi sonucu bilinerek. İçerikleri anlatılmadı.

Fark: bu videoda işaretli tepkilerin bir kısmı **başarısız** olanlar. Bu, geriye dönük seçim sorununu ortadan kaldırmıyor ama etkisini azaltıyor.

#### Ölçülebilirlik

**Kısmen.** Dördüncü videoyla aynı gerekçe: karar tablosu mekanik, üç yüklem tanımsız. Ayrıca bu videoda kendine özgü bir ölçülemezlik kaynağı var — sınırsız yeniden giriş ve tanımsız bant genişliği, ki bu birlikte işlem sayısını belirsiz kılıyor.

#### Not

**Alınacak:** mum kapsanma kuralı — bir seçim noktasını kapatıyor ve senin order block tespitine tek satır olarak eklenir.

**Alınacak:** konfluans sayımı. "Bir fiyat noktasında örtüşen array sayısı" bir tam sayı; sonuçla ilişkisi tek koşuda ölçülür. Ve bu, dördüncü videonun yuvalanma kuralıyla aynı hipotezin sürekli versiyonu.

**Alınmayacak:** aynı seviyeye sınırsız yeniden giriş. Ölçmek için sen bir üst sınır koymalısın, ve o sınır videonun değil senin parametrendir.

**Metodolojik ders — kendi projene:** bu video, kaybeden işlemleri *göstermenin* onları *saymaktan* farklı olduğunu net biçimde ortaya koyuyor. Senin ön kayıtlı protokolünde bu ayrım zaten kurulmuştu: 27 hücrenin hiçbiri 100 işlem eşiğini geçemedi ve proje kendi durdurma kriterleriyle kapatıldı. Gösterme değil, sayma karar verdirdi.

:::

### Video 6 — Riski azaltmak, ödülü büyütmek

::: ders
**DERS**

#### Temel çerçeveleme kuralı

Videonun tek yapısal fikri şu: **işlemi yüksek zaman dilimi seviyelerinde çerçevele, girişi düşük zaman diliminde yap.**

Swing işlemlerinde **yalnızca aylık ve haftalık seviyeler** çerçeveleme için kullanılır. Prim tarafında satılacaklar: bearish order block'lar, yukarı işlem görülecek bearish likidite boşlukları (optimal trade entry), bearish fair value gap'ler, üstünden sahte kırılımla satılacak eski tepeler, uzun fitilli mumların **gövdelerinin üstü** (rejection block), eski tepeler ve eski dipler. İskonto tarafında tersi: mitigation block'lar, breaker'lar, bullish order block'lar, altta boşluklar, eski dipler ve tepeler, ve uzun fitilli mumların **gövdelerinin altındaki** satış stopları.

Video kendi anlatımının sınırını da belirtiyor: örneklerde order block kullanıyor çünkü her senaryoyu videoya koymak videoların uzunluğunu saçmalaştırır — ama aranan şey PD array matrisinin tamamı, ve **matriste bir sıra izlenir: prim PD array'leri için listede aşağıdan yukarı, iskonto PD array'leri için yukarıdan aşağı.**

Sonuç: aylık ve haftalık grafiklerdeki array'ler işlemin **bağlamını** veriyor. Aylık/haftalık ayı bir seviye görülüyorsa, hedef olarak aylık iskonto array'leri aranır ve **listedeki ilk olanı** hedef alınır — bir mitigation block, bir bullish breaker, ya da altta bir likidite boşluğu olabilir. Yani hem işlem hem hedef aylıkta çerçevelenir; bu da devasa aralıklar demek.

#### Neden 4 saatlik giriş

Yüksek zaman dilimi PD array'lerinde çerçeveleyip 4 saatlikte girmek **daha dar stop'lara izin verir.** Videonun karşılaştırması: Ocak ayındaki pozisyon işlemciliği yönteminde işlem tamamen günlük grafikte çerçeveleniyordu; burada 4 saatlik, aynı hedefle daha küçük bir risk aralığı veriyor.

Verilen tipik aralık büyüklükleri:

Ve pratik not: masa başında olmayan biri için 4 saatlikten daha küçüğü gerekli değil. Kurulumlar çoğu zaman günün kapanışı civarında oluşuyor; işlemleri bir gün ya da bir gece önceden çerçeveleyebilirsin.

**Giriş teknikleri bu videoda yeniden anlatılmıyor:** Ocak ayındaki pozisyon işlemciliği içeriğine yönlendiriliyor — limit emriyle alım, stop emriyle alım, stop emriyle satış. Aynı giriş kalıpları 4 saatlik swing işlemlerinde de geçerli ve riski azaltmaya yardımcı oluyor.

#### Ödül/risk ve isabet oranı

**Kural: 3:1'den az ödül/risk kullanma.** Videonun kendi ifadesi: bu kriterle sadece 3:1 olan işlem bulmakta bile zorlanacaksın, çoğu zaman 5:1 olacak, 10:1 duyulmamış değil, bazen 10, 12, hatta 15:1.

Ve buna bağlanan isabet argümanı: **"3:1 ödül/riskle işlem yaparken kârlı olmak için yalnızca %30 oranında isabetli olman gerekir."** Yani **%70 oranında yanılabilirsin** ve yine net pozitif, kârlı olursun. 5:1 ve 10:1'e çıkıldığında ne kadar çok yanılabileceğin daha da artar.

#### Kaldıraç

Videonun ifadesi: **"kaldıraç swing trading'de senin kutsal kâsen"** — kontrol edilecek, maksimize edilmeyecek.

| Ortam | Kaldıraç |
|---|---|
| ABD forex, yasal üst sınır | 50:1 |
| Vadeli işlemler / emtia, genel | yaklaşık 10:1 |
| Bazı yurtdışı brokerlar | 100:1, 200:1, 400:1 |
| **Videonun önerisi** | **3:1** |

Somut örnek: **10.000 dolarlık hesapla yalnızca 3 mini lot** işlem yaparsın. Video bunun beklenmedik geleceğini kabul ediyor: "bunu öğrenmeye gelmedim mi dersin — hayır, kârlı olmayı ve düşük riskli/yüksek ödüllü yönetimi öğrenmeye geldin."

**Prime brokerage.** Pozisyonlar iki milyon dolar seviyesine ulaştığında prime brokerage düşünülmeli. Prime brokerage kaldıraç vermez — **mevduatın neyse maksimumun odur.** Ve pratikte ondan da az kullanılır: bir milyon dolar mevduatla çoğu zaman yarım milyon dolarla işlem yapılır. Video bunun verimsiz göründüğünü ama yedi haneli rakamlarda çok iyi gittiğini, ve o noktada hiç risk alınmak istenmediğini söylüyor.

#### Neden yüksek zaman dilimi seviyeleri

Videonun mekanizma iddiası: **"akıllı para 5 dakikalık order block'u göremez."** Algoritma fiyatın o seviyelere inmesine izin veriyor ve limit emirleri sayesinde bir tepki alıyorsun — ama o tepkiler aslında bir **yüksek zaman dilimi fiyat seviyesine** göre şekillenmiş: günlük, haftalık ya da aylık.

Ve emirler tek bir fiyata konmuyor: **seviyelerin hemen üstüne ya da altına katmanlanıyor.** Verilen örnek: orta rakam 50 seviyesinde boğa bekleniyorsa, bir bullish order block **60 seviyesinde** — yani orta rakamın 10 pip üstünde — oluşabilir; ama bir bütün olarak **50'de ortalama alıyorlar.**

#### R katsayısı ve profesyonel çerçeve

R katsayısı, o işleme atfettiğin riske göre ödülün. 5R hedefliyorsan bir dolar riske karşılık beş dolar arıyorsun demek. Videonun tanımı: **profesyoneller çok az para riske edip, hesaba konan toplam riske göre devasa fiyat hareketleri alırlar.**

Ve sayısal iddia: **yüksek zaman dilimi seviyeleri 200–500 pip aralık sunar, ve 10R'ye kadar kazanç verebilir.**

#### Sıklık

**Her dört ila altı haftada bir ile iki swing işlemi.** Video bunu "yaklaşık bir buçuk ay" olarak ifade ediyor: genel olarak bir, belki iki swing işlemi, ikincisi genelde o dönemin başında oluşuyor. Frekans "dört ila altı haftada bir" ve bu güvenli bir varsayım; günlük grafikteki zaman ölçeğine bakıldığında ortalama bu.

Sonucu: işlemlere hazırlanmak için çok zaman var, her beş dakikada grafik başında olmak gerekmiyor, her gün orada olmak da gerekmiyor, bir günü kaçırabilirsin.

#### Fon yönetimi ve getiri beklentisi

Videoya göre sektör standardı olarak kabul edilen yıllık getiri **%20–30**; "bunu tutturabiliyorsan harikasın." Ve 10 milyon dolar yönetip %30 gösterirsen 10 milyonda kalmazsın — büyük yatırımcılar kapını çalar.

Videonun mantığı: düşük risk iş modelini müşteriye satar; düşük drawdown gösterip yine de tutarlı getiri sağlamak fon yöneticilerinin yaşam tarzının sebebi. Müşteriler onların her gün gün içi işlem yapan biri gibi çalıştığını varsayar; gerçekte çok az iş yaparlar.

#### Bileşik getiri projeksiyonu

Videonun somut hesabı, kendi verdiği parametrelerle:

| Parametre | Değer |
|---|---|
| İşlem başına risk | %1,5 |
| Kaldıraç | 3:1 |
| Ortalama stop | 50 pip |
| Kurulum başına ödül | 10R |
| Yılda işlem sayısı | 6 |

Videonun yürüttüğü akıl: %1,5 risk edip 10R alırsan **tek işlemde %15'e varan getiri** elde edersin. Yılda altı böyle işlemle **"özkaynağını her yıl fazlasıyla ikiye katlıyorsun."**

Vurgulanan taraf: bu, ayda ikiye katlamak değil, haftada %25 değil, gün içinde %15 değil — **çok muhafazakâr, çok düşük frekans.** Frekans düşük olduğu için drawdown fırsatı da çok düşük ve risk zaten %1,5'te önceden tanımlı.

#### EUR/USD örneğinin çözümü

**Aylık çerçeveleme.** **Nisan 2011**'de oluşan bir tepe. Eski bir aylık tepe kullanılıyor, yani aralığın tepesindeyiz — **Ekim 2009**'daki eski bir tepeye göre çok derin bir primde.

Bearish order block tanımlanıyor: **Ekim 2009'un son yükseliş mumu.** Ve o mumun **mean threshold**'u da tanımlanıyor. Seviye zamanda ileri uzatılıyor ve **Mart–Nisan 2011**'de o seviyelere ulaşılıyor.

**İlk iskonto PD array'i.** Girişin solunda kalan bir düşüş mumunun tepesi — yani eski bir tepe. Videonun hatırlatması: **eski bir tepe potansiyel bir iskonto PD array'i olabilir.** Seviye: **142.80.**

**4 saatlik giriş.** Mayıs'a doğru fiyat o seviyeye çıkıyor. Mean threshold ve bearish order block işaretleniyor; mean threshold **148.65.**

Kurulumun kurulması:

Videonun hesabı: **70 pip riske edip 585 pip kazanmak = yaklaşık 8:1.** Ve %1,5 risk varsayımıyla **tek işlemde %12,5'e varan getiri.** Videonun notu: "risk miktarı ödüle kıyasla çok küçük; işlem aylık seviyede çerçeveleniyor ve kâr alma hedefi de aylık seviyede çerçeveleniyor." Tepe fiyatı 149.20 civarı olarak veriliyor.

#### Ödev

**Birinci ödev — belirli bir kurulum.** Düşüş hareketinden hemen önceki son yükseliş mumunun (bullish order block'un) **açılış fiyatı, yuvarlanmış hali: 141.55.** İstenen:

Videonun verdiği ödül tahmini: aşağı yönlü hedef olarak **135** düşünülürse, 141.55'ten giriş **650 pip'in üstünde.** **60 pip'lik bir stop** ile çerçevelenirse **10:1** bulunur.

Teslim: tek grafik olarak, forumdaki Şubat soru-cevap bölümüne. Ve uyarı: **önce forumu okuyup başkalarının cevabını kopyalama** — yanlış cevap yok, amaç etkileşim ve geri bildirim.

**İkinci ödev — tarama.** Hafta sonunun kalanında başka bir paritede beş örnek bul. Nerede olduğu ve yılın hangi zamanı olduğu fark etmez. **Yalnızca aylık ve/veya haftalık PD array'i** kullanarak (prim ya da iskonto) swing işlemleri çerçevele ve **en az 5:1 ödül/risk** veren senaryolar bul. Video sayıyı bir cümle sonra değiştiriyor: *"aslında dört bul — iki alım, iki satış."*

Ve videonun kendi kabulü: *"tabii ki geriye dönük bakma avantajın var, bunu söylemeye gerek yok — ama çalışma böyle yapılır."*

:::

::: eleme
**ELEME**

#### Doğru olan taraf — ve önemli olan

**1. Çerçeveleme kuralı mekanik olarak doğru.** "Hedefi yüksek zaman diliminde belirle, girişi düşük zaman diliminde yap" — aynı hedefle daha küçük bir stop, dolayısıyla daha yüksek R. Bu bir piyasa iddiası değil, **geometri**, ve doğru. Ödül/risk oranını hedefi küçültmeden yükseltmenin tek meşru yolu bu.

**Ama senin ölçümünle bir kayıt düşülmeli:** dar stop maliyeti R cinsinden artırır — komisyon ve kayma stop mesafesine bölünür, ve gapsiz stopların −1.088R çıkmıştı. Bu videoda stop 50–70 pip; 1 pip'lik spread + kayma bu ölçekte stopun %2–4'ü. Yani **maliyet itirazı bu videoda zayıf**, ve bu Aralık ayına göre gerçek bir iyileşme. Kural aynı kalıyor: R yükseltmek için stop daraltmak, bir noktadan sonra maliyeti içeri alır.

**2. Kaldıraç tavsiyesi doğru**, ve seride nadir bir netlikte: 3:1, 50:1 değil. 10.000 dolar → 3 mini lot. **Hesap doğru:** 3 mini = 30.000 birim; 50 pip = 150 dolar = 10.000 doların %1,5'i. Videonun risk, kaldıraç ve stop parametreleri **birbirleriyle tutarlı.**

**3. Düşük frekans / düşük drawdown / sabır** vurgusu doğru. **4. R:R ile isabet oranının takas edilebilir olduğu** fikri doğru ve doğru çerçeve.

Hepsi doğru — ve hepsi **ICT'ye özgü değil.** Standart risk yönetimi. İkinci ayda kaydedilen örüntü altıncı ayda da aynen geçerli.

#### Aritmetik denetimi — üç bulgu

**Bulgu 1: isabet eşiği yanlış, ve ay içinde tutarsız.**

3R kazanç / 1R zararla başabaş: `p×3 = (1−p) → p = %25`. Video **%30** diyor; ikinci video aynı iddia için **%34** diyor. Doğru eşik **%25.**

İki sayı da doğru eşiğin üstünde, yani ikisi de *kârlı*. Ama eşik olarak sunulmaları yanlış, ve aynı ayda aynı iddia için iki farklı rakam verilmesi rakamın hesaplanmadığını gösteriyor. Ayrıca **hiçbiri maliyeti içermiyor.**

**Bulgu 2: örnek hesapları doğru.** 585 ÷ 70 = 8,36 → "8:1" doğru. 8,36 × %1,5 = %12,5 → doğru. Ödev: (141,55 − 135) × 100 = 655 pip → "650'nin üstünde" doğru; 655 ÷ 60 = 10,9 → "10:1" doğru. **Bu hesaplar tutuyor ve öyle kaydedilmeli.**

**Bulgu 3: özkaynağı ikiye katlama iddiası, kendi isabet varsayımıyla çelişiyor.** Bu, ayın asıl aritmetik sorunu.

| Varsayım | Yıllık sonuç |
|---|---|
| 6 işlem × 10R × %1,5, **altısı da kazanıyor**, basit toplam | %90 |
| 6 işlem × 10R × %1,5, **altısı da kazanıyor**, bileşik | **%131** — "ikiye katlama" ancak burada |
| Videonun kendi **%30 isabet** varsayımıyla (2 kazanç, 4 zarar) | **%24,5** |

"Özkaynağını fazlasıyla ikiye katlıyorsun" ifadesi **altı işlemin altısının da kazanmasını gerektiriyor** — yani %100 isabet. Ve aynı video, aynı öğretide, **%30 isabetin yeterli olduğunu** söylüyor.

İki iddia birlikte tutarlı değil. Getiri projeksiyonu ve isabet iddiası **uyumsuz varsayımlar altında hesaplanıp yan yana sunuluyor**, ve video bunu fark etmiyor.

**Ve dürüst versiyonu şu:** videonun kendi parametreleriyle, kendi isabet varsayımıyla sonuç **%24,5**. Bu, Ocak ayının on üçüncü videosunun **%18–25** yıllık hedefiyle neredeyse tam olarak örtüşüyor. Yani sayılar doğru hesaplandığında iki ay aynı sonucu veriyor; **">%100" rakamı yalnızca zararların yok sayılmasından geliyor.**

#### Frekans tutarsızlığı

"Dört ila altı haftada bir ile iki işlem" → yılda **8,7 ile 26** fırsat. "Yılda altı işlem" bu aralığın **altında.** Video bunu seçicilikle açıklayabilirdi ("sadece en iyilerini al") ama açıklamıyor, ve iki sayı birlikte kullanılıyor.

Ocak ayının on üçüncü videosu ise **"yılda 2, şanslıysan 3"** diyordu. Bir ay içinde 2–3'ten 6'ya, ve 8,7–26 fırsata. Beklenti kalibrasyonu her ay yeniden yapılıyor.

#### Ödev sayısı tutarsız

Aynı paragrafta önce **"beş örnek bul"**, sonra **"aslında dört bul — iki alım, iki satış"** deniyor. Küçük bir tutarsızlık ama gösterdiği şey aynı: sayılar okunmuyor.

#### Yanlışlanamazlık

**1. "3:1 kolay, 10:1'ler zor değil — inan bana oradalar."** Sayı yok. Kaç kurulum tarandı, kaçı 3:1 verdi, kaçı vermedi? Bu, ayın en doğrudan ölçülebilir iddiası ve hiç ölçülmemiş. Ve ölçülmediği için ters yönde de okunabilir: eğer 3:1 gerçekten "zor bulunuyorsa", o zaman kurulum sayısı yılda altıdan da az demektir.

**2. Ödevin yapısı geriye dönük gerekçelendirme.** "Geriye git ve en az 5:1 veren beş senaryo bul." Bu tanımı gereği **sonucu bilinen** örneklerin taranması. Aradığın şeyi bulacağını garanti eden bir arama.

Video bunu kabul ediyor ("geriye dönük bakma avantajın var") ama düzeltmiyor. **Doğru versiyonu şu olurdu:** geriye git, kurulumu *giriş anında* tanımla, ve *sonra* sonucun ne olduğuna bak — bulunanları değil, tanıma uyan **hepsini** say. Fark, senin ön kayıtlı protokolünle geriye dönük tarama arasındaki farkın aynısı.

**3. Fon yönetimi bölümü ölçülemez ve doğrulanamaz.** "10 milyonda %30 gösterirsen kapını çalarlar" — düzenleyici gereklilikler, denetlenmiş performans kaydı, asgari sermaye hiç konuşulmuyor. Ocak ayının on üçüncü videosunda aynı bölüm vardı ve aynı eksiklerle.

#### Yeniden adlandırma

"R katsayısı" ve "risk birimi cinsinden ödül", standart pozisyon boyutlandırma terminolojisi — Van Tharp'tan beri yaygın. Yeni bilgi taşımıyor, ve video zaten yeni olduğunu iddia etmiyor.

#### Ölçek — bu ayın olumlu farkı

Bu video 50–70 pip stop ve 200–585 pip hedeflerle çalışıyor. Aralık ayında 5 dakikalık grafikte 2 pip'lik FVG'lerden giriş öneriliyordu. **Ölçek küçülmesi örüntüsü bu ay tersine dönmüş** ve senin maliyet bulgunun bağlayıcılığı buna göre azalmış. Bu, YONERGE §4'te izlenmesi istenen kalıplardan **iyileşen tek tanesi.**

#### Geçmiş açıklamaları

İki örnek (EUR/USD 2011 kurulumu ve ödev kurulumu), ikisi de sonucu bilinerek, ikisi de aynı paritenin aynı döneminden. İçerikleri anlatılmadı.

#### Ölçülebilirlik

**Kısmen.** Ocak V13 sermaye yönetimi videosuyla aynı yapı: ilkeler doğru, pozisyon boyutlandırma hesabı tutarlı, ama getiri projeksiyonu kendi isabet varsayımıyla çelişiyor ve frekans rakamları oturmuyor. Video bir piyasa hipotezi üretmiyor — bir hesap üretiyor, ve hesabın bir kısmı tutmuyor.

#### Not

**Alınacak:** çerçeveleme geometrisi — hedefi üst zaman diliminde, girişi alt zaman diliminde sabitle. Bu senin `min_rr` kapına doğrudan uygulanır ve Ocak V15'in ADR fikriyle birleşir: ADR hedefin *ulaşılabilirliğini* sınırlarken, bu kural aynı hedef için stopu küçültüyor. İkisi birlikte, R:R hesabını hem gerçekçileştirir hem yükseltir.

**Alınacak:** 3:1 minimum kapısı — zaten senin sisteminde `min_rr = 2.0` olarak vardı. Ölçülebilir soru: *kapı 2.0'dan 3.0'a çıkarıldığında ortalama R ve işlem sayısı nasıl değişiyor?* Fat-tail sorununla doğrudan ilgili: yüksek R kapısı sağ kuyruğu koruyabilir ama işlem sayısını düşürür, ve senin 100 işlem eşiğin bağlayıcı.

**Alınmayacak:** bileşik getiri projeksiyonu. %100 isabet varsayıyor ve video bunu söylemiyor.

**Alınmayacak:** ödevin arama biçimi. "Geriye git ve 5:1 verenleri bul" bir ölçüm değil, bir doğrulama arayışı.

:::

### Video 7 — Patlayıcı hareket eden piyasaları seçmenin sekiz ölçütü

::: ders
**DERS**

Video, "patlayıcı" (explosive) — yani dinamik biçimde tek yönlü hareket eden — swing işlemleri için en yüksek olasılığı sunduğu düşünülen sekiz özelliği sıralıyor.

#### 1. Ana piyasa analizi — dört varlık sınıfı

Dört ana varlık sınıfı: **faiz piyasaları, hisse senetleri, emtialar, para birimleri.** Aranan: hepsinin trend etmeye çalışıyor olması — konsolidasyonda tutulmuyorlar, birbirleriyle çelişmiyorlar.

**Asgari koşul: dörtten en az ikisi trend ediyor olmalı.** Hepsinin trend etmesi gerekmiyor; dördün yarısı yeterli. Trend eden bir-iki varlık sınıfı varsa, diğerlerinin geride kaldığı ve sonunda onların da trend ortamına gireceği varsayılıyor.

**Ve bir gruplama kuralı var:** emtialar ve hisse senetleri bir grup, para birimleri ve faiz oranları bir grup. **Her gruptan birer tanesi trend ortamında olmalı.** Emtia piyasası konsolidasyondaysa hisse senetleri trend etmeli, ya da tersi; faiz oranları ve para birimlerinden de biri trend etmeli.

Videonun gerekçesi: bu, algoritmaların fiyatı hareket ettirmek için kullanacağı modelleri çerçeveliyor — sadece dövizde değil, tüm varlık sınıflarında; gerçek arz-talep faktörlerine odaklı emtialar hariç.

#### 2. Piyasalar arası analiz konfluansları

Fikir: bir varlık sınıfında boğaysan, diğer varlık sınıflarında destekleyici fikirler var mı?

**Boğa dolar bekleniyorsa:**

**Ayı dolar bekleniyorsa tersi:** emtialar yukarı gitmekte çok az direnç görmeli, güçlü destek seviyeleri olmalı, tepeler kırılmalı, diplerde çok az kırılma olmalı. Emtialarda dipler alınırsa **turtle soup senaryosu** beklenir — sahte kırılım ve ardından daha yüksek fiyatlar. Yabancı para birimleri destekte olmalı, daha düşük dip yapmaya istekli olmamalı; yaparlarsa hızla reddedilmeli, ve tepeleri kolayca geçilmeli.

Videonun vurgusu: sadece CRB endeksine değil, **birçok sektöre** bakılmalı — tahıl piyasaları örnek veriliyor: soya, buğday, mısır.

#### 3. COT hedging programı hizalaması

Videonun bu ayki en somut yeni prosedürü.

**Gerekçe:** hedging genellikle son 12 aylık veriye dayalı bir planla yapılır. Emtia fiyatı geçen Mart neydi, geçen Ocak, geçen Ağustos, geçen Aralık neydi? 12 aylık bir aralığa bakmak, gelecek 12 ay için normal ya da makul beklenebilecek olanı çerçevelemelerini sağlar. Bu yüzden çoğu zaman uzun vadeli net kısa pozisyonda görünürler.

**Ticari işlemciler kim:** bir emtianın en büyük üreticileri ya da sağlayıcıları. Üretebilirler, yetiştirebilirler, sunabilirler; bir para birimi söz konusuysa bu bir bankadır — banka için para birimi kendi emtiasıdır.

**Kaynak ve veri:** Larry Williams, COT raporlarının kamuya açılmasıyla ilgili erken çalışmanın büyük kısmını yapmış. Veri kaynağı olarak **barchart.com** veriliyor.

**Örneğin okunması:** kırmızı çizgi (ticariler) **Ocak 2016'dan bugüne sıfır çizgisinin altında** — standart tanımlara göre bu ayı okunur ("ve bu benim için bir hayal kırıklığıydı"). Ama 12 aylık aralığa bakıldığında: en yüksek pozisyon **Ocak 2016**'da (yine de net sıfır çizgisinin altındaydı, yani nötr ya da hafif ayı), en düşük **Temmuz 2016**'da. Bu ikisinin ortası yeni sıfır çizgisi. **Aralık 2016'da kırmızı çizgi bu yeni çizginin üstüne çıkıyor** — yani Aralık'ta agresif biçimde alıyorlar, Ocak'a girerken ve şu anda da alıyorlar. Standart sıfır çizgisine göre hâlâ net kısa görünseler bile.

**Ayı koşulu:** yeni çizginin üstündeysek ve piyasa aşağı trend ediyorsa bu güçlü bir satışı desteklemez — fikirle çelişir. Kırmızı çizginin yeni sıfır çizgisinin altına geri inmesi beklenir.

#### 4. Açık pozisyon (open interest)

Videonun ifadesiyle akıllı paranın ne yaptığına dair bir "röntgen görüntüsü". Mor çizgi, herhangi bir piyasadaki toplam açık pozisyonu gösteren kümülatif çizgi, ve **yalnızca emtia/vadeli veriden** elde edilebiliyor — spot piyasada yok.

| Koşul | Okuma |
|---|---|
| **Açık pozisyon %10–15 veya daha fazla düşerse** | Ticari **kısa kapatma** (short covering). Likidite sunmak istememeleri ya da fiyatların önemli ölçüde yükseleceğini düşünmeleri; aksi halde açık pozisyonlarını korurlardı. |
| **Açık pozisyon %10–15 veya daha fazla artarsa**, ve aynı anda ticariler net satışlarını artırıyorsa (kırmızı çizgi aşağı) | **Ayı** — ticari kısa satış. |

**Teyit kuralı:** açık pozisyondaki düşüş, ticarilerin kırmızı çizgisinin **sıfır çizgisine doğru yükselmesiyle** aynı anda görülürse teyit edilmiş sayılır — bu, kısa pozisyonlarını azalttıklarının onayı. Aksi halde kırmızı çizgi ya düz kalır ya aşağı gider.

**Örnek sayıları:** Kasım'dan Aralık'a açık pozisyonda büyük bir düşüş — **500.000 sözleşmenin üstünden 400.000'e**, yani **100.000'den fazla kısa sözleşme kapatılmış.** Aynı anda kırmızı çizgi yükseliyor. Videonun sonucu: bu, işlemin boğa senaryosu olduğunun ve patlayıcı fiyat hareketi beklenmesi gerektiğinin teyidi.

#### 5. Mevsimsel eğilim

Piyasaların yukarı ya da aşağı işlem görme olasılığının yüksek olduğu zamanlar. İşlem fikrinle hizalıysa patlayıcı hareket olasılığını artırır. Örnek olarak **Aralık'tan Ocak'a** ralli eğilimi ve **Ocak'tan Şubat'a** devam eden güçlü eğilim gösteriliyor.

Video burada bir sayım yapıyor: ana piyasa analizi + açık pozisyon + hedging programı + piyasalar arası analiz + mevsimsellik = **"lehimize beş şey"**, ve bu, patlayıcı fiyat hareketinin güçlü bir olasılıkla geleceğini gösteriyor.

#### 6. Oynaklık filtreleri

Basit bir daralma fikri: fiyat büyük bir aralıktan küçük bir aralığa geçiyor. Evrensel — aylık, haftalık, günlük ya da herhangi bir zaman dilimine uygulanabilir.

**Tanım — inside candle / inside bar:**

Kavramsal olarak bu bir **oynaklık daralması**. İddia: **bir sonraki mumun ya da ondan sonrakinin büyük aralıklı bir mum olma olasılığı yüksek** — özellikle yukarı ya da aşağı gitmeye hazır bir koşul varsa. Destek sunacak bir seviyede işlem görüyorsa ve şimdiye kadarki tüm faktörler hizalıysa ve yön boğa seçilmişse, bir sonraki mum patlayıcı bir yükseliş mumu olmalı — ya da hemen ondan sonraki.

**Kritik nitelendirme — videonun kendi ifadesi:** *"Bu sana zamanlama vermiyor. Sadece sahneyi veriyor: evet, burada büyük olasılıkla patlayıcı bir fiyat hareketi olacak."* Ve daralmanın kendisinin yön hakkında bilgi vermediği de açıkça söyleniyor: *"piyasalar küçük aralıklarda gidiyor diye yönü bildiğin anlamına gelmez."*

**Ek filtreler:** **son yedi günün en küçük aralığı** ve **son üç günün en küçük aralığı.** Video üçünü de kullanıyor: son üç gün, son yedi gün, ve herhangi bir inside bar. Kullanılan benzetme: yayın kurulması ve bırakılması.

#### 7. Büyük haber başlıkları — ters yönde

Kural: **pozisyonunun tersine haber başlığı istiyorsun.**

**Gerekçe:** bu tür haberler perakende zihniyetli işlemcilerde piyasa duyarlılığı inşa eder — altın almak istemezler, satmak isterler, çünkü haber medyasının ya da televizyondaki yorumcuların akıllı insanlar olduğunu ve dolayısıyla işlemci olduğunu düşünürler. Videonun argümanı: işlemci olsalardı ne yaptıklarını bilirlerdi ve olanı anlatmak için sunucu koltuğunda oturmaz, evde canlı işlem yaparlardı. *"Duyarlılığın en zayıf olduğu anda tam önlerine geçiyoruz."*

**Kaynaklar:** vadeli işlemler için **Futures** dergisine abonelik (her ay bir-iki piyasayı ele alıp ne kadar iyi ya da kötü hareket ettiğini anlatıyorlar); internette **MarketWatch, CNBC** — çok yorumcu ve çok takipçisi olan her yer.

#### 8. Piyasa duyarlılığı — Williams %R

Video burada bir gösterge kullandığını açıkça belirtiyor: *"evet, doğru duydun, bir gösterge kullanıyorum."*

| Parametre | Değer |
|---|---|
| Gösterge | Williams %R |
| Periyot | **15** |
| Zaman dilimi | Günlük |
| Bölme seviyesi | **50** |
| 50 ve altı | Aşırı satım — alım bölgesi |
| 50 üstü | Aşırı alım — satım bölgesi |

Videonun değerlendirmesi: Williams %R, genel aşırı alım/aşırı satım için kendi görüşüne göre en isabetli gösterge.

**50 seviyesindeki karar kuralı:** 50 seviyesindeysek ve **aşırı satım bölgesinden yeni çıkmışsak**, potansiyel bir alımı yine de değerlendiririm. Yakın zamanda **aşırı alım koşulundan çıkıp** 50 civarında dolaşıyorsak, satış tarafını tercih ederim. Yani dengedeysek ya da 50 seviyesindeysek, **en son hangisinden çıktıysak o duyarlılığı seçiyorum.**

Video bu sekiz ölçütün mentorship'te daha sonra "mega işlemler" konusunda tekrar ele alınacağını, ve sekizinci derste bunların bir kısmının modele dahil edileceğini belirtiyor.

:::

::: eleme
**ELEME**

#### Sekiz ölçüt temiz biçimde ikiye ayrılıyor

Bu videonun asıl özelliği şu: sekiz maddeden **dördü tamamen mekanik, ikisi kodlanamaz, ikisi tanımsız bir yüklem içeriyor.** Ve mekanik olan dördü, ayın en özgün katkısı.

| # | Ölçüt | Durum |
|---|---|---|
| 3 | COT 12 aylık aralık orta çizgisi | **Mekanik** — sıfır seçim noktası |
| 4 | Açık pozisyon %10–15 eşiği | **Mekanik** — pencere tanımı hariç |
| 6 | Inside bar / son 3 gün / son 7 günün en küçük aralığı | **Mekanik** — sıfır seçim noktası |
| 8 | Williams %R(15), 50 bölmesi | **Mekanik** — "en son hangisinden çıktı" hariç |
| 1 | Dört varlık sınıfından ikisi trend ediyor | **"Trend" tanımsız** |
| 2 | Piyasalar arası konfluans | **Kısmen bağımsız değil** — aşağıda |
| 5 | Mevsimsel eğilim | **Ocak'ta zaten ölçülemez bulundu** |
| 7 | Haber başlıkları, ters yönde | **Kodlanamaz** |

#### COT orta çizgisi — ayın en iyi yeni fikri

Prosedür tamamen mekanik: 12 aylık pencerede ticari net pozisyonun maksimumu ve minimumu, ortası eşik. Sıfır yorum, haftalık ve kamuya açık veri, onlarca yıllık geçmiş.

**Yanlışlanabilir hipotez net:** *ticari net pozisyonun 12 aylık aralık orta noktasını yukarı kesmesi, ham sıfır çizgisinin vermediği bir bilgi veriyor mu?* Karşılaştırma grubu doğal — aynı veri, iki farklı eşik.

**Ama bu fikir yeni değil, ve bunu bilmek işine yarar.** Aralığı normalize edip eşiğe göre okumak, literatürde **Larry Williams COT Index** olarak biliniyor: `(mevcut − N dönem min) / (N dönem maks − N dönem min)`, tipik olarak 26 ya da 52 hafta, ve standart eşikler 20/80. Videonun versiyonu aynı yapının 12 aylık ve **50 eşikli** varyantı.

Video Williams'ı COT çalışmaları için kaynak gösteriyor ama endeksin kendisini adlandırmıyor. Sonuç: **fikir özgün değil, ama kaynak dürüstçe belirtilmiş ve eşik seçimi senin test edebileceğin bir parametre.** İlk ölçüm doğrudan burada: 12 ay/50 eşiği mi, 52 hafta/20-80 mi daha iyi ayırıyor?

**Ve kritik bir zamanlama uyarısı.** COT verisi **Salı günkü pozisyonları gösterir ve Cuma günü yayınlanır** — üç günlük bir raporlama gecikmesi var. Video'nun Aralık ayı okumasını Aralık'taki karar anında kullanması **anakronizmdir**: o pozisyon verisi o anda henüz açıklanmamıştı.

Bu, senin `#013`'ünün ve kör veri sarmalayıcının tam olarak çözmek için yazıldığı problem. Ölçerken gecikmeyi modellemezsen, sonuç geçmişte hep iyi görünür ve ileride hiçbir şey söylemez.

#### Oynaklık daralması — ve videonun en dürüst cümlesi

Inside bar tanımı tamamen mekanik: daha düşük tepe ve daha yüksek dip, gövde bazlı. "Son yedi günün en küçük aralığı" ise **klasik teknik analizde NR7** olarak biliniyor (Toby Crabel, 1990); "son üç günün en küçük aralığı" NR4/NR3 ailesinden. Yani fikir yeni değil, ama **tanım temiz ve doğrudan kodlanabilir.**

**Ve videonun bu bölümdeki nitelendirmesi ayın en epistemik olarak dikkatli cümlesi:** *"bu sana zamanlama vermiyor, sadece sahneyi veriyor"* ve *"küçük aralıklarda gidiyor diye yönü bildiğin anlamına gelmez."* İddia **büyüklük** hakkında, **yön** hakkında değil — ve bu, altı ayda bu netlikte ikinci kez oluyor (birincisi Ocak V10'un mevsimsellik uyarısıydı).

**Doğru testin nasıl kurulacağı:** oynaklık kümelendiği için, daralmayı takip eden genişleme *koşulsuz ortalamaya karşı* ölçülürse sonuç neredeyse kesin olarak pozitif çıkar — ama bu bir edge değil, oynaklık kümelenmesinin kendisidir. Anlamlı test, **oynaklık-eşleştirilmiş bir taban çizgisine karşı** yapılmalı: aynı oynaklık rejimindeki NR7 olmayan günlerle karşılaştır. Ayrım, testin tamamı.

**Ve senin projenle bağı doğrudan:** bu bir **rejim kapısı**, yön sinyali değil. Senin range sistemin `RANGE_ACTIVE`/`NO_RANGE` ayrımını beş koşullu bir tanımla fiyat yapısından türetiyordu ve Aşama 1'de RET aldı. NR7 tek koşullu, tek satırlık bir alternatif.

#### Piyasalar arası konfluans — kısmen bağımsız olmayan doğrulama

Ocak ayının on ikinci videosunda kaydedilen hata buydu: dolar endeksi, o pariteler *üzerinden hesaplanıyor*, dolayısıyla euro düşerken endeksin yükselmesi teyit değil, aritmetik zorunluluktur.

Burada aynı hata **kısmen** tekrarlanıyor, ve ayrımı doğru yapmak gerekiyor:

Yani ölçüt tamamen geçersiz değil — **ama içindeki en yakın iki gözlem teyit sayılamaz.** Ölçmek istersen listeyi ikiye ayır: endeks bileşenleri (bilgi taşımaz) ve endeks dışı seriler (taşıyabilir).

#### Haber başlığı ölçütü — yazılamaz

Bu, ikinci soruyu geçemeyen ikinci ifade (birincisi V2'nin "kendini ikna ediyorsan geç" kuralıydı). "Zayıflığı anlatan başlık" tanımlı değil, kaynak listesi bir kurala bağlı değil, eşik yok, ve **seçim sonradan yapılıyor.** Herhangi bir günde herhangi bir piyasa için hem boğa hem ayı başlık bulunabilir; hangisinin sayılacağı sonucu bilen tarafından seçiliyor.

Ve videonun buna eklediği argüman — televizyondaki yorumcuların işlemci olmadığı — doğru olabilir ama ölçütü kurtarmıyor: karşı taraf düşüncesi bir **filtre fikri**, ve filtre ancak tanımlıysa ölçülür.

#### Gösterge çelişkisi — ve videonun bunu fark edip çözmemesi

Aralık ayının on üçüncü videosu göstergeleri şu gerekçeyle reddediyordu: **göstergeler geçmiş fiyatın matematiksel dönüşümüdür, yeni bilgi taşımazlar.** Burada Williams %R benimseniyor.

Video çelişkiyi fark ediyor (*"evet, doğru duydun, bir gösterge kullanıyorum"*) ama **çözmüyor.** Ve çözülmemiş olması bir tarafı da yanlış çıkarıyor: ya Aralık'taki gerekçe (göstergeler yeni bilgi taşımaz) yanlıştı, ya da bu kullanım gerekçesiz.

Not: **gerekçe zaten order block için de geçerliydi.** Bir order block da geçmişin bir seçimidir. Aralık'ta kaydedilen çelişki altıncı ayda aynen sürüyor, sadece yönü değişmiş.

**Ve ikinci bir teknik nokta:** Williams %R'ın standart kullanımı −20/−80 eşikleriyle aşırı alım/aşırı satımdır. **50 seviyesinden bölmek onu aşırı alım/satım göstergesi olmaktan çıkarıp bir momentum-yön okuması yapar.** Video bunu "aşırı alım / aşırı satım" diye adlandırmaya devam ediyor. Adlandırma yanlış, ama kural yine de mekanik ve ölçülebilir — sadece ölçtüğün şey duyarlılık değil, kısa vadeli momentum konumu.

**Tek tanımsız kalan parça:** "50'deysek en son hangisinden çıktıysak onu seçerim." Ne kadar yakın zamanda? Bu kapatılabilir bir boşluk (ör. son N bar içinde) ama video kapatmıyor.

#### Mevsimsellik — Ocak'ın bulgusu aynen geçerli

Ocak ayının üç videosu (V10, V11, V12) mevsimselliğe ayrılmıştı ve üçü de ölçülemez bulunmuştu: hesaplama yöntemi verilmiyor, örneklem 10–19, pencereler yılın tamamını kaplıyor, yön filtresi tanımsız, doğrulama bağımsız değil. Burada mevsimsellik bir ölçüt olarak yeniden kullanılıyor ve **o eksiklerin hiçbiri kapatılmıyor.**

#### "Beş şey lehimize" — sayım sorunu

Video sekiz ölçüt sayıp ortada "lehimize beş şey var" diyor. Ama **kaç ölçütün gerekli olduğu hiçbir yerde söylenmiyor** — ikinci videodaki yedi maddelik listeyle aynı yapısal sorun. Sekizinci video bunu kısmen düzeltiyor (orada altı kapı zorunlu), ama bu videoda eşik yok.

#### Geçmiş açıklamaları

COT grafiği, açık pozisyon grafiği ve mevsimsellik grafiği üzerinden yaklaşık altı okuma, artı dört emtia okuması. Hepsi tek bir dönemden (Kasım 2016 – Ocak 2017) ve hepsi sonucu bilinerek. İçerikleri anlatılmadı.

#### Ölçülebilirlik

**Ölçülebilir.** Videonun çekirdek iddiası — *"bu koşullar patlayıcı hareketlerin önünde gelir"* — tanımsız iki ölçüt (haber başlıkları, "trend ediyor mu") **çıkarıldığında bile** test edilebilir kalıyor. Belirsizlik kenarda; çekirdek ondan bağımsız ölçülebilir. Ve dört mekanik ölçütün her biri ayrıca tek başına ölçülebilir.

#### Not

**Öncelikli alınacak:** COT 12 aylık orta çizgisi. Fiyat dışı veri — Aralık V1'in faiz üçlüsü ve Ocak V3'ün açık pozisyonundan sonra bu kategorideki üçüncü fikir, ve en mekanik olanı. **Raporlama gecikmesi modellenmek zorunda.**

**Kripto için dürüst değerlendirme:** kriptoda COT'un doğrudan analoğu **yok** — hedger sınıfı yok. En yakınları borsaların yayınladığı uzun/kısa hesap oranları ve büyük hesap pozisyon oranları, ama bunlar *hedger* pozisyonu değil, ve analoji zayıf. Buna karşılık **açık pozisyon verisi perp piyasalarında doğrudan var** ve gecikmesiz — dördüncü ölçüt kriptoya COT'tan çok daha iyi taşınıyor.

**Alınacak:** NR7 / inside bar rejim kapısı. Tek satır, sıfır seçim noktası, ve senin range projendeki rejim tanımına doğrudan alternatif. **Oynaklık-eşleştirilmiş taban çizgisi olmadan ölçme.**

**Alınacak, düşük öncelikle:** Williams %R(15) 50 bölmesi — mekanik, ama bir momentum filtresinden fazlası değil, ve senin zaten bildiğin kategoride.

**Alınmayacak:** haber başlığı ölçütü ve mevsimsellik ölçütü.

:::

### Video 8 — "Milyon dolarlık" swing kurulumu — birleşik model

::: ders
**DERS**

#### Adın açıklaması

Video baştan netleştiriyor: bundan bir milyon dolar kazanacağın iddia edilmiyor. Anlamı, **teknik araçları içinde bulduğu en iyi koşul** olması ve en fazla çalışmayı ve odaklanmayı hak etmesi.

#### Modelin sırası

#### Kapı 1 — Mevsimsel eğilim

**Soru:** Şu anda alım için bir mevsimsel eğilim var mı, ya da yakında olacak mı?

Videonun ifadesi kesin: *"İlk kural mevsimsel eğilim olmadan swing işlemi yapamam. Mevsimsel eğilim yoksa işlem yapmam."* Her yıl, her takvim ayı bir sürü salınım olacak — ama mevsimsel eğilimle hizalanmıyorsa alınmıyor.

Gerekçe: bunu "milyon dolarlık kurulum" yapan şey, kendini defalarca, ara sıra değil **tutarlı biçimde** tekrarladığına dair tarihsel kanıta zaten dayanıyor olması.

**Ve videonun kendi tavizi:** *"bu bölümü şablondan çıkarmak ve mevsimsel eğilim dışındaki her şeye bakmak istersen, buyur."*

#### Kapı 2 — Ana piyasa analizi

**Soru A:** Faiz piyasaları ve/veya para birimi piyasaları (temelde dolar endeksi) trend ediyor mu?

**Soru B:** Emtia ve/veya hisse senedi piyasaları trend ediyor mu?

İkisinin de **evet** olması gerekiyor — **her gruptan birer tane.** Faiz + hisse olabilir, emtia + faiz olabilir, para birimi + emtia olabilir.

**Hayır** → "şimdilik kısa vadeli ya da gün içi işlemleri değerlendir, swing koşullarını bekle."

Videonun bu noktadaki notu önemli: *"Henüz kısa vadeli işlem ve gün içi işlem konuşmadık, ama bu bana bir bağlam veriyor. Swing için koşullar olgun değilse 'artık işlem yapamam' demiyorum — daha alt zaman dilimine iniyorum. Çerçeve olmadan swing işlemi görüşünü zorlayamam."*

#### Kapı 3 — COT hedging programı (boğa versiyonu)

**Soru:** Ticari işlemciler şu anda alıyor mu satıyor mu?

Alım demek, son **12 ayın** oluşturduğu **sıfır bazı çizgisinin üstünde** olmak demek.

Videonun açıklaması: aranan şey ticarilerin **kısa pozisyonlarını azaltması.** Standart net-işlemci pozisyon grafiğinde sıfır çizgisinin altındalarsa net kısa demektir — ama net kısa olmaları bilginin kullanılamayacağı anlamına gelmez. Son 12 ayın en yüksek ve en düşük net pozisyonunu alıp ikiye bölerek yeni bir aralık elde ederiz. **Standart sıfır çizgisinin altında bile olsalar alım tarafına geçmişlerse** ilerlenir.

#### Kapı 4 — Korelasyon analizi

**Soru:** Dolar endeksi, ABD doları için ayı fiyat hareketini destekliyor mu?

Yani yabancı para birimlerinde ya da metalde boğaysak, dolar endeksinin aşağı gitmeye çalışması ya da ayı fiyatların sırada olduğunu göstermesi aranıyor — **metale ya da yabancı para birimine karşı SMT ayrışması.**

#### Kapı 5 — Emtia filtresi

**Soru:** Emtialar yukarı ralli yapıyor, eski tepeleri kırıyor, eski dipleri reddediyor mu? Yani destek buluyor ve direnç seviyelerini parçalıyor mu?

Dolar endeksi ayı iken emtiaların boğa olması **normal bir piyasalar arası koşuldur.**

#### Kapı 6 — Açık pozisyon filtresi

**Soru:** Açık pozisyon düşüyor mu, ya da **%10–15 veya daha fazla** düştü mü? Bu, ticari kısa kapatmayı gösterir.

Veri kaynağı: **barchart.com**. Web adresleri PDF notlarında verilecek.

**Evet** → top-down analize geç. **Hayır** → bekle.

#### Ayı versiyonu — aynı kapılar, ters yönde

| Kapı | Boğa koşulu | Ayı koşulu |
|---|---|---|
| COT | Ticariler alıyor / yeni çizginin üstünde | Ticariler satıyor ya da net kısa pozisyon tutuyor |
| Korelasyon | Dolar endeksi ayı fiyat hareketini destekliyor | Dolar endeksi boğa fiyat hareketini destekliyor |
| Emtia | Emtialar yükseliyor, eski tepeleri kırıyor, eski dipleri reddediyor | Emtialar düşüyor, eski dipleri kırıyor, eski tepeleri reddediyor |
| Açık pozisyon | **%10–15+ düşüş** = ticari kısa kapatma | **%10–15+ artış** = ticari kısa satış |

#### Kapı 7 — Top-down analiz

#### Alım kurulumu

#### Giriş tekniği eşlemesi — ayın en mekanik kuralı

| PD array tipi | Alım tarafı | Satış tarafı |
|---|---|---|
| Breaker veya mitigation block | **Stop emriyle al** | **Stop emriyle sat** |
| Likidite boşluğu veya fair value gap | **Stop emriyle al** | **Stop emriyle sat** |
| Order block, rejection block, eski dip/tepe | **Limit emriyle al** (eski dibin altında) | **Limit emriyle sat** (eski tepenin üstünde) |

Limit ve stop emirleri için Ocak ayı pozisyon işlemciliği giriş tekniklerine yönlendiriliyor — **Ocak çalışma notları, sayfa 128, 129, 141 ve 142.**

#### İşlem yönetimi

Alım için sırayla (satış tam simetriği):

#### Altın örneğinin çözümü

**Kapı 1 — Mevsimsellik.** Aralık'tan Ocak'a altında güçlü ralli eğilimi, ve Ocak'tan Şubat'a devam ediyor. Grafiğin **altındaki takvim aylarına** bakılıyor — üstteki sarı yuvarlatılmış kareler **sözleşme teslim ayları** ve onlar kullanılmıyor. Sonuç: altın için **Aralık'tan Şubat ortası / Mart başına** güçlü ralli eğilimi.

**Kapı 2 — Ana piyasa analizi.** Tahvil piyasaları trend ediyor, dolar endeksi trend ediyor, **CRB endeksi Aralık'a girerken düz**, hisse senedi piyasası trend ediyor. Sonuç: swing için elverişli koşul.

**Kapı 3 — COT.** Son 12 aya bakıldığında aralığın tepesi **Ocak 2016**'da, dibi **Temmuz**'da. **Aralık 2016**'ya girerken kırmızı çizgi (ticariler) 12 aylık aralığın yeşil gölgeli bölgesinde yukarı çıkıyor — **alım koşulu:** agresif biçimde hedge edip almışlar ve kısalarını azaltmışlar.

**Duyarlılık.** Aynı anda Williams %R aşırı satım durumunda — yani **duyarlılık aşırı ayı**, ticariler kısalarını azaltırken.

**Kapı 6 — Açık pozisyon.** Mor çizgi agresif biçimde düşmüş; ticariler kısalarını azaltırken kırmızı çizgi yükseliyor.

**Kapı 4 — Dolar endeksi / SMT.** Aralık ortasından Ocak'a, **altın büyük bir destek seviyesinde daha düşük dipler yapmayı başaramıyor** ve dolar endeksi yukarı gitmeye istekli görünüyor. Aranan ayrışma bu.

**Kapı 5 — Emtia filtresi.** Kasım–Aralık–Ocak örneklemesi:

Sonuç: emtialar bir bütün olarak boğa.

**Seviyelerin kurulması.**

| Seviye | Kaynağı |
|---|---|
| **1142** | Aylık mumdaki tepe — bullish order block, **Kasım 2015**'teki yukarı hareketten hemen önceki son düşüş mumu, 2016'ya büyük yer değiştirmeyle giriyor. Fiyat oradan **1370** civarına kadar çıkmış. |
| **1250** | Haftalık **17 Ekim 2016** mumundan alınan hedef. |
| **1200** | Eski bir dip — **1 Mayıs 2016** / Mayıs mumu. |

Videonun notu: *"1130'a bakmıyoruz çünkü gerçek dibi asla yakalayamazsın — onu yapacağını sanma."* Aylık order block seviyesi **1142** alınıyor.

**Aralık ve denge.** 1142'deki aylık order block'tan (PD array) yukarı, haftalık PD array olan **1255–1260** primine kadar. İskonto **1142–1150**; alım **1145–1150** seviyelerinden. Aralık ölçülüp yukarı projekte edildiğinde **denge fiyat noktası 1200.**

**Stop koşusu beklentisi — modelin asıl tahmini.** Video şunu kaydediyor: denge fiyat noktasından itibaren **yalnızca bir gerçek anlamlı stop koşusu** oldu, ve o da **denge yukarı yönde kırıldıktan sonra** gerçekleşti. *"İşte bu, işleminde stop koşusu beklediğin an. Bu yüzden stop'unu agresif biçimde yukarı çekmemelisin — aralığını bilmelisin: 1255–1260, ve onu önceden ölçüyoruz."*

**Çeyrek haritalaması.** Denge 1200'de olduğuna göre, 1200 ile 1145 (ya da aylıktaki gerçek order block'u kullanmak istersen 1142) arasındaki aralık ikiye bölünerek yeni bir denge noktası bulunur; bu alt bölme sürdürülebilir ve büyük fiyat salınımının içindeki daha küçük salınımlar görülmeye başlanır — **çünkü fiyat fraktaldır.**

**Beklenen sıra:**

**Gerçekleşen.** Stop koşusu **1195–1190** seviyesinin altındaki satış stoplarını aldı. Fiyat geri gelip **1183** civarındaki orta noktaya indi, ve aynı zamanda **1175–1180** civarında bir order block'a (yukarı hareketten hemen önceki son düşüş mumu) girdi — dip bu yüzden oluştu. Artık o order block'ta bir **günlük PD array** var.

**Fibonacci projeksiyonu.** Bu fiyat salınımı ölçülüp projeksiyon yapılıyor: Fibonacci **tepeden dibe** çekiliyor, **127 ve 162** uzantıları kullanılıyor. Sonuç: **1260** — Fibonacci, haftalık PD array'ler ve aylık PD array'lerin **konfluansı.**

**İkinci stop koşusu.** Genel salınımın orta noktasında oluşan tepe — **1220** civarı — alındıktan sonra. Videonun tarifi: orta nokta kırıldıktan sonra genellikle geri gelip "açık riski olmasını istemeyen korkmuş boğaları" silerler; sonra fiyat denge noktasını tekrar geçer, yeni bir kısa vadeli tepe yapar, geri geldiğinde geri çekilmede orta nokta / denge tepesini yeniden test etmeye çalışır — ve çoğu zaman görülen son stop koşusu budur. Bu, **1220** civarında gerçekleşiyor.

**Sonuç:** *"1220 / 1218 / 1217 seviyesini swing alımı olarak çağırdık; 1220'den 1260'a kadar hareket etti — bu, gümüş için kontrat başına 4.000 dolar."*

#### Modelin kendi değerlendirmesi ve ileriye dönük plan

Videonun kendi özeti: bunu "milyon dolarlık" yapan şey **sistematik olması** — piyasa adım adım parçalanıyor, koşullar varsa bir sonraki analiz aşamasına geçme izni veriliyor, yoksa ellerin üstünde oturuluyor. Ne zaman stop alınacağı ve taşınacağı, ne zaman rahat bırakılacağı, ne zaman stop emriyle ne zaman limit emriyle alınıp satılacağı belli.

Ve açık bir uyarı: *"grafiğime takıp bir şey çıkarabileceğim bir sistem verin diyenler olacak — bu öyle değil, çalışma gerektirir."* İzleyiciden sesli anlatım sırasında notları grafiklere eklemesi isteniyor; grafiklerde bu yüzden boş alan bırakılmış.

**Bölge değil seviye vurgusu tekrarlanıyor:** *"bölgelere bakmıyoruz, belirli fiyat seviyelerine bakıyoruz."*

**Aşırı işlem imkânsızlığı iddiası:** model işlemleri yalnızca mevsimsel olarak hareket etmeye hazır olanlarla sınırladığı için potansiyel kurulum sayısını azaltıyor — *"aşırı işlem yapman kelimenin tam anlamıyla imkânsız."*

**Ve kişisel bir kayıt:** *"Swing işlemleri yalnızca 4–6 haftada bir kuruluyor. Ben 4–6 hafta bekleyip işlem alamam, daha sık bir şey yapmam gerekiyor. İşlemlerimin çoğunluğu kısa vadeli ve gün içi — bu yüzden orada iyiyim, çünkü işlemlerimin çoğu orada."*

**Doğrulama önerisi:** *"Sözüme güvenme — çerçeveyi kullan ve son iki yıla geri git, bu fikirlerin sağlam swing işlemlerini süzüp süzmediğine bak, hem uzun hem kısa."*

**Gizlilik ricası:** *"Bunu genel bilgi haline getirmemeni rica ediyorum."*

**Program:** Mart'ta kısa vadeli işlem, Nisan'da gün içi işlem, Mayıs'ta scalping. Mart boyunca kısa vadeli işlem öğrenilirken sürekli swing ve uzun vadeli pozisyon fikirleri de aranacak.

:::

::: eleme
**ELEME**

#### Bu videonun yapısal katkısı gerçek ve kaydedilmeli

Altmış üç videoda ilk kez seri, **sıralı kapılardan oluşan ve her kapının tanımlı bir başarısızlık eylemi olan** bir yapı sunuyor. "Tercih edilir" ya da "olasılığı artırır" değil — **"bu koşul yoksa swing işlemi yok."**

Ve altı kapıdan dördü mekanik: COT orta çizgisi, açık pozisyon %10–15 eşiği, dolar endeksi SMT ayrışması (hizalama penceresi hariç), emtia filtresi ("eski tepeleri kırıyor, eski dipleri reddediyor" kodlanabilir). Yönetim kuralları tamamen sayısal. Giriş eşlemesi sıfır seçim noktalı.

**Bu, ayın ve muhtemelen serinin en kodlanabilir yapısı.** Ve önemlisi: kural setinin kendisi anlatıdan bağımsız çalışıyor — "algoritma", "akıllı para", "kurumsal emir akışı" katmanlarını silsen prosedür aynen kalır.

#### Giriş tekniği eşlemesi — ayın en temiz kuralı

Limit / stop ayrımı yalnızca mekanik değil, **ilkeli**: içinden geçilmesi beklenen array'lerde (breaker, mitigation block, boşluk, FVG) stop emri — yani hareketin teyidi bekleniyor; tepki verilmesi beklenen array'lerde (order block, rejection block, eski dip) limit emri — yani seviyeye önceden emir konuyor.

**Doğrudan ölçülebilir ve A/B testine uygun:** *aynı sinyal setinde, limit girişi ile stop girişi farklı ortalama R veriyor mu?* Tek koşuda cevaplanır.

**Ve senin maliyet bulgunla doğrudan ilgili:** iki kolun maliyet profili aynı değil. Limit emri kayma ödemez ama doldurulmayabilir (kaçırılan işlem yanlılığı); stop emri her zaman dolar ama kaymayı öder. Ölçerken bu asimetri modellenmezse karşılaştırma anlamsızlaşır — ve senin −1.088R bulgun tam olarak bu tarafın ne kadar ağır bastığını gösteriyor.

#### %50 stop koşusu — ayın en ilginç yanlışlanabilir hipotezi

Videonun tahmini: **ters yönlü hareket, nihai aralığın orta noktası civarında kümelenir.** Bu, bir yön iddiası değil, bir **dağılım iddiası** — ve bu cins iddialar daha nadir ve daha iyi.

Ölçülebilir soru net: *kazanan bir işlemin maksimum ters yönlü hareketi (MAE), hareketin nihai aralığına göre nerede yoğunlaşıyor — %50 civarında mı, yoksa düzgün mü dağılıyor?* Kontrol grubu doğal ve tek koşuda cevaplanır.

**Ve karar açısından değeri yüksek:** senin `#021` trailing çalışman ve fat-tail bulgunla doğrudan kesişiyor. Ters hareket gerçekten orta noktada kümeleniyorsa, videonun "acele stop çekme" kuralı doğru bir tasarımdır ve dar trailing sağ kuyruğu iki kez keser. Kümelenmiyorsa kural gereksiz. **Her iki yönde de ölçülebilir ve her iki cevap da kullanışlı.**

#### Başabaş kuralı — Ocak'la çelişki, ama bu sefer doğru versiyon

Ocak V13: *"stop'u başabaşa çekme dürtüsüne diren."* Şubat V8: *"ilk kâr alındıktan sonra başabaşa taşı, asla önce değil."*

Görünüşte çelişki, ama **Şubat'ın versiyonu Ocak'ınkinin düzeltilmiş hali** ve bunu açıkça söylemek gerekiyor. Senin `#018`'inde sıfır edge üreten yapı şuydu: kazananı 0R'de kesip kaybedeni −1R'de bırakmak. Burada başabaşa taşındığında pozisyonun **%20–30'u zaten +2,5R civarında realize edilmiş** — yani "başabaş" olan işlem aslında pozitif kapanıyor. Beklenti sıfırlanmıyor.

**Bu, tasarım olarak doğru ve serinin bu konudaki en iyi versiyonu.** Ekim'in "hemen çek"i ve Ocak'ın "hiç çekme"si arasında, koşula bağlı ve savunulabilir bir orta yol.

#### Merkezi sorun: en kırılgan kapı, ilk ve zorunlu konumda

Kapı 1 mevsimsellik. Ocak ayının üç videosu mevsimselliğe ayrılmıştı ve **üçü de ölçülemez** bulunmuştu: hesaplama yöntemi hiç verilmiyor, örneklem 10–19, pencereler yılın tamamını kaplıyor, yön filtresi tanımsız ve sonuçlar görüldükten sonra uygulanıyor.

Şubat o bileşeni **zincirin başına ve zorunlu konumuna** koyuyor. Yapısal sonuç: en zayıf bileşenin belirsizliği aşağı doğru tüm zincire yayılıyor, çünkü hiçbir işlem o kapıdan geçmeden başlamıyor.

**Ve video kapıyı kendisi zayıflatıyor:** "istersen bu bölümü şablondan çıkar." Atlanabilir bir zorunluluk, zorunluluk değildir. Ama bu taviz aynı zamanda **bir çıkış yolu sunuyor**, ve ölçüm açısından işine yarıyor: kapıyı ayrı bir açma/kapama parametresi yaparsan, kalan beş kapı tam mekanik bir sistem oluşturur ve mevsimselliğin katkısı *ayrıca* ölçülür. Temiz bir karşılaştırma.

#### Terminal olumsuz durumun yokluğu

Altı kapının **altısında da** başarısızlık yolu aynı: *"şimdilik kısa vadeli ya da gün içi işlem yap, swing koşullarını bekle."*

Yani model hiçbir noktada **"bu fikir yanlıştı"** demiyor — **"başka bir şey oyna"** diyor. Üçüncü videodaki fraktal geri düşüşle ("başarısız olursan bir sonraki array") ve dokuzuncu yönetim kuralıyla ("stop olursan gerekçeleri değerlendir, hâlâ geçerliyse tekrar gir") birleştiğinde şu ortaya çıkıyor: **yöntemin negatif bir sonlanma durumu yok.**

Bu, ölçmeyi imkânsız kılmıyor — kapılar mekanik olduğu için sistem kodlanabilir ve kaç sinyal ürettiği sayılabilir. Ama **yöntemin kendi kendini yanlışlayamayacağını** gösteriyor: uygulayıcı için hiçbir çıktı "durdur" demiyor.

#### Yanlışlanamazlık

**1. Tek geriye dönük örnek, ve her kapı geçiyor.** Altın örneğinde altı kapının altısı da sonucu bilinerek "evet" veriyor. Bir kapının *başarısız olduğu* ve işlemin doğru biçimde atlandığı tek bir örnek gösterilmiyor. Ve sekiz kapının kaç kez birlikte tetiklendiğine dair hiçbir sayı yok.

**2. "Aşırı işlem yapman imkânsız" iddiası sayısız.** Kaç kez tetikledi? Model altı kapılıysa ve mevsimsellik zorunluysa, yılda kaç sinyal üretir? Video hiçbir yerde söylemiyor.

**3. "1220 / 1218 / 1217 seviyesini çağırdık."** Tek bir çağrı için üç fiyat, ve kaydın kendisi bu video. Ocak V1 ve V14'te işaretlenen sorunun aynısı: kayıt tutulmadığı için isabet oranı bilinmiyor.

#### Aritmetik ve etiket denetimi

**Bulgu: enstrüman etiketi yanlış, sayı doğru.** Örneğin tamamı **altın** üzerine, ama kâr *"gümüş için kontrat başına 4.000 dolar"* olarak veriliyor.

| Hesap | Sonuç |
|---|---|
| Altın: (1260 − 1220) × 100 ons | **4.000 dolar** ✓ videonun rakamı |
| Gümüş olsaydı: 40 × 5.000 ons | 200.000 dolar ✗ |

Yani **4.000 dolar altın için doğru; "gümüş" kelimesi hatalı.** Küçük bir dil sürçmesi olabilir — ama sözleşme büyüklüğü bir aritmetik iddianın parçası, ve iki metalin sözleşmesi 50 kat farklı.

**Ve ikinci bir tutarsızlık:** yedinci videoda aynı açık pozisyon düşüşü *"500.000'in üstünden 400.000'e, 100.000'den fazla sözleşme"* olarak veriliyor; burada *"100 sözleşmenin üstünde"* deniyor. Yedinci videonun rakamı %20'lik bir düşüşe karşılık geliyor ve kendi %10–15 eşiğiyle tutarlı; sekizincideki rakam üç mertebe küçük.

#### Yeni bileşen: IPDA veri aralıkları

20 / 40 / 60 günlük geriye bakış — bu **Ocak V4'ün 20 günlük likidite havuzları** fikri, buraya top-down prosedürünün içine yerleştirilmiş. Ocak'ta o kural **Ölçülebilir** bulunmuştu: sıfır seçim noktası, saf takvim ve maksimum/minimum.

**Ve burada bir ekleme var:** "20 günlük geriye bakıştaki array'ler tükendiyse 40'a, sonra 60'a çık." Bu, tükenmeyi bir **tetikleyici** haline getiriyor ve mekanik: 20 günlük aralığın hem tepesi hem dibi süpürüldüyse pencereyi genişlet. Ocak V3'te geçen alt kuralla (her iki taraf da süpürülmüşse fiyat aralığın dışındaki bir sonraki uca doğru büyük bir hareket yapar) aynı yapıda, ve ikisi birlikte test edilebilir.

**Ama "tükendi" tanımı verilmiyor:** her array'e dokunuldu mu, çoğuna mı? Kapatması kolay bir boşluk.

#### Doğrulama önerisi — serinin bir ilki, ve eksik tarafı

Video izleyiciye *"son iki yıla geri git ve bu çerçevenin sağlam swing'leri süzüp süzmediğine bak"* diyor. Altıncı videoda da benzer bir tarama ödevi var.

**Altmış üç videoda ilk kez bir test prosedürü öneriliyor.** Bu kaydedilmeli. Ama iki eksik var:

#### Kendi kendini çürüten bir kayıt

Video, sekiz videoluk bir modülün sonunda şunu söylüyor: *"işlemlerimin çoğunluğu kısa vadeli ve gün içi — bu yüzden orada iyiyim, çünkü işlemlerimin çoğu orada."*

Yani **modülün öğrettiği yöntem, öğretenin ağırlıklı olarak kullandığı yöntem değil.** Bu, dürüst bir itiraf ve öyle kaydedilmeli. Ama aynı zamanda altıncı videonun "yılda altı işlem yeter, daha fazlasına ihtiyacın yok" argümanıyla doğrudan çelişiyor.

#### Geçmiş açıklamaları

Tek enstrüman (altın), kapı kapı yaklaşık on iki işaretli seviye ve okuma, artı dört emtia okuması. Hepsi tek bir dönemden ve hepsi sonucu bilinerek. İçerikleri anlatılmadı.

#### Ölçülebilirlik

**Ölçülebilir.** Kapı 2–6, top-down prosedürü, giriş eşlemesi ve işlem yönetiminin tamamı mekanik ve bugün kodlanabilir. Kapı 1 (mevsimsellik) ölçülemez, ama videonun kendi izniyle ayrılabilir — ve ayrıldığında çekirdek bağımsız olarak test edilebilir kalıyor. Bu, YONERGE'nin "belirsizlik kenarda" ölçütünü karşılıyor, ancak **ayırmanın senin tarafından yapılması şartıyla.**

#### Not

**Alınacak, birinci öncelikte:** giriş tekniği eşlemesi (limit / stop). Tek koşuda A/B testi, ve senin maliyet modelinle doğrudan bağlantılı.

**Alınacak:** %50 stop koşusu hipotezi. Dağılım iddiası, yanlışlanabilir, ve trailing/breakeven kararlarını doğrudan etkiliyor.

**Alınacak:** işlem yönetimi kural seti (1/3, 1/4, %20–30 kademe, %50'de geri ekleme, %75–80'de tam çıkış, 4 saatlik dip trailing). Tamamen sayısal, ve senin fat-tail sorununa üçüncü bir yapı sunuyor — Ocak V16'nın piramitlemesinin daha muhafazakâr versiyonu: yeni sermaye eklemiyor, **alınmış olanı geri ekliyor.** Sabit hedef / trailing / piramitleme / geri-ekleme dördü tek koşuda karşılaştırılabilir.

**Alınacak:** IPDA 20/40/60 tükenme tetikleyicisi — Ocak V4'ün doğrudan devamı, "tükendi" tanımı senin tarafından kapatılmak şartıyla.

**Ayrı ölçülecek, birlikte değil:** mevsimsellik kapısı. Açma/kapama parametresi olarak, katkısı ayrıca ölçülsün.

**Alınmayacak:** "stop olursan gerekçeleri değerlendir, hâlâ geçerliyse tekrar gir" kuralı, sınır konmadan. Kaç kez tekrar girileceği tanımsız kaldığı sürece kuralın ürettiği işlem sayısı belirsizdir.

:::

## BÖLÜM II — Ayın bütünü

### Ölçülebilirlik tablosu

| Video | Kavram | Değerlendirme |
|---|---|---|
| V1 | Piyasa profili seçimi | **Kısmen** — "trend ediyor mu" tanımsız; durgunluk filtresi ve iki-başarısızlık kuralı mekanik |
| V2 | Yedi ölçütlü kontrol listesi | **Ölçülemez** — minimum sayı yok, hiçbir madde zorunlu değil |
| V3 | PD array matrisi ve aktarma prosedürü | **Ölçülemez** — altı seçim noktası; durma koşulu olmayan yeniden giriş döngüsü |
| V4 | Boğa sıralı karar tablosu | **Kısmen** — tablo mekanik, üç yüklem tanımsız; fib prim/iskonto filtresi ayrıca ölçülebilir |
| V5 | Ayı sıralı karar tablosu | **Kısmen** — aynı gerekçe; ek olarak sınırsız yeniden giriş işlem sayısını belirsizleştiriyor |
| V6 | Risk, kaldıraç, getiri projeksiyonu | **Kısmen** — ilkeler ve boyutlandırma doğru, getiri hesabı kendi isabet varsayımıyla çelişiyor |
| V7 | Patlayıcı hareket ölçütleri | **Ölçülebilir** — dört ölçüt tam mekanik; belirsizlik kenarda, çekirdek bağımsız test edilebilir |
| V8 | Birleşik kapı modeli | **Ölçülebilir** — kapı 2–6, giriş eşlemesi ve yönetim mekanik; mevsimsellik kapısı ayrılmak şartıyla |

**Ölçülebilir: 2 · Kısmen: 4 · Ölçülemez: 2**

Bu, dördüncü (7/14) ve beşinci (9/17) aylardan **belirgin biçimde daha düşük bir oran** — ve düşüşün sebebi içeriğin zayıflaması değil. Aralık ve Ocak *ayrık kavramlar* veriyordu; her biri tek başına kodlanabiliyordu. Şubat aynı kavramları bir *iş akışına* diziyor, ve akış tanımsız yüklemleri topluyor. Bu, ayın ana yapısal bulgusu ve kapanış gözleminin konusu.

### Ayın yapısal özellikleri

**1. İlk gerçek kapı yapısı.** Sekizinci video altı sıralı kapı, her birinde evet/hayır sorusu ve tanımlı bir başarısızlık eylemi sunuyor. Altmış üç videoda ilk kez "bu koşul yoksa işlem yok" tek tek değil, **sistematik olarak** kuruluyor. Ve giriş tekniği eşlemesi (hangi array'de limit, hangisinde stop) ayın sıfır seçim noktalı tek kuralı.

**2. Ölçek büyüdü — dört aylık trend tersine döndü.** Aralık'ta 5 dakikalık grafikte 2 pip'lik FVG'ler vardı; Şubat tamamen aylık/haftalık/günlük/4 saatlik üzerinde çalışıyor. Stoplar 50–70 pip, hedefler 200–585 pip. Senin −1.088R maliyet bulgunun bu ölçekte bağlayıcılığı çok daha düşük. YONERGE §4'te izlenmesi istenen "ölçek küçülmesi" kalıbı bu ay **geçerli değil**, ve bu iyileşme kaydedilmeli.

**3. Kaybeden işlemler ilk kez gösteriliyor.** Beşinci videoda beş-altı kez "bu uygulansaydı zarar olurdu" deniyor, ve bir kez "seçilmiş örnek tartışması olmasın diye burada stop olduğunu varsayalım" deniyor. Cins olarak ilerleme; derece olarak değil — **gösteriliyorlar, sayılmıyorlar.**

**4. Fiyat dışı veri kategorisi olgunlaştı.** COT 12 aylık orta çizgisi ve açık pozisyon %10–15 eşiği, Aralık V1'in faiz üçlüsü ve Ocak V3'ün açık pozisyonundan sonra bu kategorinin en mekanik hali. Ve bu ay ilk kez bir **karar kapısı** olarak, bir yorum katmanı olarak değil.

**5. Geriye dönük doğrulama ilk kez ödev olarak veriliyor.** Altıncı videoda "beş örnek bul, en az 5:1 versin"; sekizincide "son iki yıla geri git ve çerçevenin sağlam swing'leri süzüp süzmediğine bak." Serinin bir test prosedürü *önerdiği* ilk ay. Ama sonuç bildirilmiyor, ve aramanın biçimi doğrulama arayışı — süzülenlere bakılıyor, süzülmeyenler sayılmıyor.

**6. Merkezi tanımsızlık, çözümü elde olduğu halde.** Dört video ("trend ediyor mu", "aylık boğa mı", "aylık ayı mı", "varlık sınıfı trend ediyor mu") aynı tanımsız yükleme dayanıyor. **Ocak V2 bu tanımı mekanik olarak vermişti** — salınım noktalarının ilerleyişi, ara vadeli tepe/dip tanımı, kaynağı (Larry Williams) dahil. Şubat bir kez bile atıf yapmıyor. Beş ay boyunca tanım *yoktu*; bu ay tanım *var ve kullanılmıyor*.

### Yeniden adlandırmalar

| Videodaki | Klasik karşılığı | Yeni bilgi taşıyor mu? |
|---|---|---|
| Piyasa profili (konsolidasyon / trend / dönüş) | Trend–aralık sınıflandırması, Dow teorisi | Hayır |
| Impuls / geri çekilme / genişleme salınımı | Trend ayağı + düzeltme | Hayır |
| Banka toplaması / dağıtımı okuması | Daha yüksek tepe / daha yüksek dip — klasik trend tanımı | Hayır; gözlem doğru, atıf ölçülemez |
| Prim / iskonto spektrumu, denge | Aralığın orta noktası, %50 geri çekilme | Kısmen — **0.20/0.30/0.80/0.90 eşikleri kullanışlı bir biçimlendirme** |
| PD array matrisi | Konfluans tabanlı destek/direnç haritalaması | Hayır — sıra yeni, içerik standart |
| Oynaklık filtresi: "son 7 günün en küçük aralığı" | **NR7** (Toby Crabel, 1990); "son 3 gün" NR4/NR3 ailesi | Hayır — ama tanım temiz ve doğrudan kodlanabilir |
| COT 12 aylık aralık orta çizgisi | **Larry Williams COT Index** — `(mevcut − min) / (maks − min)`, tipik 26/52 hafta, eşik 20/80 | Hayır — **ama kaynak dürüstçe belirtilmiş**; 12 ay / 50 eşiği test edilebilir bir parametre varyantı |
| Rejection block | Uzun fitil reddi / pin bar, giriş gövde ucunda | Hayır (Aralık V6) |
| Mean threshold | Mum gövdesinin orta noktası | Hayır |
| Kurumsal seviyeler (00/20/50/80/30/70) | Yuvarlak sayı kümelenmesi — mikroyapı literatüründe belgeli | Hayır — ama iyi bir **kontrol grubu** |
| Williams %R, 50 bölmesi | Standardı −20/−80 aşırı alım/satım; 50 bölmesi bunu **momentum-yön okuması** yapar | Hayır — ve adlandırma yanlış, kural yine de mekanik |
| R katsayısı | Standart pozisyon boyutlandırma terminolojisi (Van Tharp) | Hayır |
| "Milyon dolarlık swing kurulumu" | Bir işlem planı / kontrol listesi sistemi | Hayır — yeni olan tek şey isim |

### Tekrarlanan sorunlar

**Yön ön koşulunun tanımsızlığı — altıncı ay, dört video.** V1, V4, V5, V7. Her seferinde **merkezde**, kenarda değil. Ve bu ay ilk kez çözüm aynı serinin içinde mevcut (Ocak V2) ve kullanılmıyor.

**Seviye taşıma.** V4'te açıkça: *"1560 seviyesini koruyabiliriz ama ilerledikçe ayarlayacağım."* Ve her düşüş mumunun ve her açılışın işaretlenmesi. Sonuç aynı: geriye dönük bakışta her zaman yakında bir seviye bulunur.

**Sınırsız yeniden giriş — bu ay üç ayrı biçimde.** V3'te zaman dilimleri arası (fraktal geri düşüş), V5'te aynı seviyeye ("büyük emirler birden çok geçiş gerektirir"), V8'de yönetim kuralı olarak ("stop olursan gerekçeler hâlâ geçerliyse tekrar gir"). Üçünün de ortak sonucu: **kuralın kaç işlem ürettiği söylenemez.** Bu, Aralık'ta işaretlenen seviye taşıma hatasının büyümüş hali.

**Terminal olumsuz durumun yokluğu.** V8'de altı kapının altısında da başarısızlık yolu aynı: "kısa vadeli ya da gün içi işlem yap." Yöntem hiçbir noktada "bu fikir yanlıştı" demiyor.

**Kaçırılanların sayılmaması — kısmen düzelmiş.** V5 kaybeden işlemleri gösteriyor ama saymıyor. Altmış üçüncü videoda hâlâ geçmeyen cümle aynı.

**Tek örnek, geriye dönük.** Altı videoda var (V1, V4, V5, V6, V7, V8), toplam yaklaşık 75–80 işaretli geriye dönük açıklama. İçerikleri anlatılmadı — geriye dönük açıklama olarak değersizler. **İki videoda hiç grafik örneği yok** (V2, V3) ve bu, geriye dönük seçim sorununu ortadan kaldıran dürüst bir tercih.

**Anakronizm — bu ay somut ve adı konabilir.** COT verisi **Salı günkü pozisyonları gösterir, Cuma günü yayınlanır** — üç günlük raporlama gecikmesi. V7 ve V8, Aralık COT ve açık pozisyon okumasını Aralık'taki karar anında mevcutmuş gibi kullanıyor. Senin `#013`'ün ve kör veri sarmalayıcın tam bu problem için yazılmıştı. Ölçerken gecikme modellenmezse sonuç geçmişte hep iyi görünür, ileride hiçbir şey söylemez.

**Hacim/fitil iddiası — bu ay yok.** Gövde/fitil ayrımı ölçüm konvansiyonu olarak sürekli kullanılıyor (order block aralığında, rejection block'ta, inside bar tanımında), **ama "gövdeler kurumsal, fitiller perakende" iddiası bu ayın hiçbir videosunda tekrarlanmıyor.** Konvansiyon sürüyor, yanlış gerekçe sürmüyor — ve konvansiyon zaten gerekçesinden bağımsız ölçülebilirdi.

### Ayın iç çelişkileri

| Konu | Bir yerde | Başka yerde |
|---|---|---|
| 3R'de başabaş isabet | V2: **%34** | V6: **%30** — doğrusu **%25** |
| Yıllık getiri hedefi | Ocak V13: **%18–25** | V6: **özkaynağı ikiye katlama (>%100)** |
| Yılda kurulum sayısı | Ocak V13: **2, şanslıysan 3** | V6: **6**; V6/V8: **4–6 haftada bir-iki** (yılda 8,7–26) |
| Başabaşa stop taşıma | Ocak V13: **direnç göster, çekme** | V8: **ilk kâr alındıktan sonra çek, asla önce değil** — ve bu versiyon doğru |
| Gösterge kullanımı | Aralık V13: **göstergeler geçmiş fiyatın dönüşümü, yeni bilgi taşımaz** | V7: **Williams %R(15) kullanıyorum** — çelişki fark ediliyor, çözülmüyor |
| Swing işlemi süresi | V1: **iki hafta veya daha uzun**; V4: tercihen iki hafta–bir ay | V5'in ölçülen örnekleri: **3 gün** ve **11 gün** |
| PD array tarama sırası | V3: tek bir sıra (mitigation → breaker → boşluk → FVG → order block → rejection → eski uç) | V6: **prim için aşağıdan yukarı, iskonto için yukarıdan aşağı** |
| Ödev sayısı | V6: **"beş örnek bul"** | V6, aynı paragraf: **"aslında dört bul — iki alım, iki satış"** |
| Yöntemin kendi kullanımı | V6/V8: **yılda altı işlem yeter, daha fazlasına ihtiyacın yok** | V8: **"işlemlerimin çoğunluğu kısa vadeli ve gün içi — bu yüzden orada iyiyim"** |
| Seçicilik | V2: **en iyi senaryoları seçiyorsun, kiraz topluyorsun** | V3: **tüm 4 saatlik iskonto array'lerinden al** |
| Kural tabanlılık | V2: **kurallar statik, istisna yok**; V4: **"swing işlemleri tanımı gereği belirsiz değil"** | V2: **"kendini ikna etmen gerekiyorsa geç"** — tüm kurallardan bağımsız sezgi vetosu |
| Açık pozisyon düşüşünün büyüklüğü | V7: **500.000'in üstünden 400.000'e — 100.000'den fazla sözleşme** | V8: **"100 sözleşmenin üstünde"** — üç mertebe fark |

### Aritmetik denetimi

YONERGE §6 gereği bu ayda geçen her aritmetik iddia doğrulandı.

| İddia | Denetim | Sonuç |
|---|---|---|
| V2: 3R'de %34 isabet net kârlı | Başabaş `p = 1/(1+3) = %25`. %34'te beklenti `+0.36R` | **Eşik yanlış** (%25), ve "marjinal kârlı" nitelemesi de yanlış |
| V6: 3R'de %30 isabet yeterli | Aynı; %30'da beklenti `+0.20R` | **Eşik yanlış**, ve V2'yle tutarsız |
| V6: 585 pip / 70 pip stop ≈ 8:1 | `585 ÷ 70 = 8,36` | **Doğru** |
| V6: 8R × %1,5 risk = %12,5 getiri | `8,36 × 1,5 = 12,54` | **Doğru** |
| V6: 141,55 → 135 = 650+ pip; 60 pip stopla 10:1 | `655 pip; 655 ÷ 60 = 10,9` | **Doğru** |
| V6: 10.000 dolar hesap → 3 mini, %1,5 risk, 50 pip stop | 3 mini = 30.000 birim; 50 pip = 150 dolar = **%1,5** | **Doğru ve iç tutarlı** |
| V6: yılda 6 × 10R × %1,5 → **özkaynağı ikiye katlar** | Altısı da kazanırsa: basit %90, bileşik **%131**. Videonun kendi %30 isabetiyle (2K/4Z): **%24,5** | **İddia %100 isabet varsayıyor** — ve aynı video %30'un yeterli olduğunu söylüyor |
| V6: 4–6 haftada bir-iki işlem vs. yılda 6 | 4 haftada bir → 13/yıl; 6 haftada bir → 8,7/yıl; ikişer alınırsa 26'ya kadar | **"Yılda 6" bu aralığın altında** |
| V4: 1600'den 1800'e gümüş = 10.000 dolar | Gümüş kontratı 5.000 ons; `2,00 × 5.000 = 10.000` | **Doğru** |
| V8: 1220'den 1260'a = "gümüş için kontrat başına 4.000 dolar" | Altın kontratı 100 ons: `40 × 100 = 4.000` ✓. Gümüş olsaydı: `40 × 5.000 = 200.000` | **Sayı altın için doğru, enstrüman etiketi yanlış** — örneğin tamamı altın |

**Özet:** örnek işlemlerin hesapları ve pozisyon boyutlandırma tutuyor — bu kaydedilmeli. Tutmayan üç şey var: **isabet eşiği** (iki farklı yanlış rakam), **yıllık getiri projeksiyonu** (kendi isabet varsayımıyla uyumsuz), ve **bir enstrüman etiketi**.

Ve dikkate değer olan şu: **videonun kendi parametreleri kendi isabet varsayımıyla doğru hesaplandığında sonuç %24,5 çıkıyor** — Ocak V13'ün %18–25 hedefiyle neredeyse tam örtüşüyor. İki ay aslında aynı şeyi söylüyor; ">%100" rakamı yalnızca zararların yok sayılmasından doğuyor.

## BÖLÜM III — Değerlendirme

### Ölçmeye değer sekiz fikir, öncelik sırasıyla

**1. Prim/iskonto konum filtresi (V3–V4).** Tanımlı bir salınım aralığında 0.20 / 0.30 / 0.50 / 0.80 / 0.90 eşikleri. Aralık iki uçla sabitlendiği anda **saf aritmetik, sıfır seçim noktası**, ve kural yasaklayıcı biçimde ifade edilebiliyor ("dengenin üstünde yeni uzun yok").

Hipotez: *tanımlı bir aralıkta dengenin altından alınan girişler, üstünden alınanlardan farklı ortalama R veriyor mu?* Senin sweep ölçümünde girişin **aralıktaki konumuna dair hiçbir kapı yoktu** — %33 isabet ve 2R'de tam başabaş sonucu, içinde iki farklı popülasyon barındırıyor olabilir. Tek parametre eklemesi.

**2. Giriş tekniği eşlemesi — limit / stop (V8).** Ayın sıfır seçim noktalı tek kuralı, ve ilkeli: içinden geçilmesi beklenen array'lerde stop, tepki beklenen array'lerde limit. Doğrudan A/B testi: *aynı sinyal setinde limit girişi ile stop girişi farklı ortalama R veriyor mu?*

**Maliyet asimetrisi modellenmek zorunda:** limit kayma ödemez ama doldurulmayabilir (kaçırılan işlem yanlılığı); stop her zaman dolar ama kaymayı öder. Senin −1.088R bulgun bu tarafın ağırlığını gösteriyor — asimetri modellenmezse karşılaştırma anlamsız.

**3. COT 12 aylık aralık orta çizgisi (V7–V8).** Fiyat dışı veri, haftalık, kamuya açık, onlarca yıllık geçmiş, tamamen mekanik. Aralık V1 (faiz üçlüsü) ve Ocak V3'ten (açık pozisyon) sonra bu kategorinin en olgun hali.

Hipotez: *ticari net pozisyonun 12 aylık aralık orta noktasını kesmesi, ham sıfır çizgisinin vermediği bir bilgi veriyor mu?* Aynı veri, iki eşik — temiz karşılaştırma. Ve fikir literatürde **Larry Williams COT Index** olarak zaten var (26/52 hafta, eşik 20/80), yani ikinci ölçüm hazır: hangi pencere, hangi eşik?

**Zorunlu:** Salı pozisyonu / Cuma yayını gecikmesi modellenecek. **Kripto için dürüst değerlendirme:** doğrudan analoğu **yok** — hedger sınıfı yok. Borsaların uzun/kısa hesap oranları hedger pozisyonu değil; analoji zayıf, zorlanmamalı.

**4. Oynaklık daralması — inside bar / NR7 / NR3 (V7).** Tamamen mekanik, sıfır seçim noktası, tek satır. Ve videonun kendi nitelendirmesi doğru: **büyüklük hakkında bilgi verir, yön hakkında değil.**

Hipotez: *daralmayı takip eden barın aralığı, taban çizgisinden büyük mü?* **Testin tamamı taban çizgisinin seçiminde:** koşulsuz ortalamaya karşı ölçersen sonuç neredeyse kesin pozitif çıkar — ama bu edge değil, oynaklık kümelenmesinin kendisidir. Anlamlı test **oynaklık-eşleştirilmiş** bir kontrole karşı.

Ve bu bir **rejim kapısı**: senin range sistemin `RANGE_ACTIVE`/`NO_RANGE` ayrımını beş koşullu bir tanımla türetiyordu ve Aşama 1'de RET aldı. NR7 tek koşullu alternatif. Ocak V6'nın tandem/ayrışma rejim testiyle birlikte üç farklı rejim tanımı elinde olur.

**5. %50 stop koşusu (V8).** Bir **dağılım** iddiası, yön iddiası değil — ve bu cins daha nadir ve daha iyi.

Hipotez: *kazanan işlemlerin maksimum ters yönlü hareketi (MAE), nihai aralığa göre %50 civarında mı kümeleniyor, yoksa düzgün mü dağılıyor?* Kontrol grubu doğal, tek koşuda cevaplanır, ve **her iki cevap da kullanışlı:** kümeleniyorsa "acele trailing yapma" kuralı doğru bir tasarımdır ve dar trailing sağ kuyruğu iki kez keser; kümelenmiyorsa kural gereksiz. Senin `#021` trailing çalışman ve fat-tail bulgunla doğrudan kesişiyor.

**6. Yuvalanma ve konfluans sayımı (V4–V5).** "Bir fiyat noktasında örtüşen PD array sayısı" bir tam sayıdır ve sonuçla ilişkisi ölçülebilir. Aralık V8'in propulsion block sorusunun (üst üste binen order block'lar farklı mı davranıyor?) hem zaman dilimleri arası hem sürekli versiyonu.

**Uyarı:** bu bir filtre ve filtreler işlem sayısını azaltır. Senin range projende Aşama 1'de RET almanın sebebi zaten işlem sayısıydı — 27 hücrenin hiçbiri 100 işlem eşiğini geçemedi. **Çoklu enstrüman şart.**

**7. İşlem yönetimi kural seti (V8).** 1/3'e kadar stop sabit; hedefin 1/4'ünde %20–30 kademe; başabaş yalnızca ilk kârdan sonra; %50'de alınanı geri ekleme; %75–80'de tam çıkış; 4 saatlik dip trailing. Tamamen sayısal ve kodlanabilir.

**Fat-tail sorununa dördüncü bir yapı:** Ocak V16'nın piramitlemesinin muhafazakâr versiyonu — yeni sermaye eklemiyor, alınmış olanı geri ekliyor. Sabit hedef / trailing (`#021`) / piramitleme / geri-ekleme, dördü tek koşuda karşılaştırılabilir; ortalama R ve varyans **ayrı ayrı** ölçülmeli.

Ve başabaş kuralı senin `#018`'inle uyumlu: pozisyonun %20–30'u zaten realize edildiği için "başabaş" olan işlem pozitif kapanıyor. Beklenti sıfırlanmıyor — Ekim'in "hemen çek"i ve Ocak'ın "hiç çekme"si arasındaki savunulabilir orta yol.

**8. Kolay ve ucuz olanlar.** Sırasıyla:

### Ölçmeye değmeyenler

**Yedi ölçütlü kontrol listesi (V2)** — minimum sayı yok, hiçbir madde zorunlu değil. Gerçekleşen her işlem sonradan yeterli sayıda ölçütü karşılamış sayılabilir. Eşik verilmediği sürece bu bir kural değil.

**"Kendini ikna ediyorsan geç" vetosu (V2)** — sonucu görmemiş birine verilebilecek bir tanım değil. Ve kodlanamadığı için, ölçülen sistemle uygulanan sistem arasında kapatılamaz bir fark yaratır.

**Fraktal geri düşüş döngüsü (V3)** — her başarısızlık bir sonraki seviyeye geçiş talimatına dönüşüyor, ve fiyat fraktal olduğuna göre her zaman bir alt array vardır. Yanlışlanabileceği bir durum yok.

**Aynı seviyeye sınırsız yeniden giriş (V5)** — "büyük emirler birden çok geçiş gerektirir" + "hassasiyet aramıyoruz" + "stop olmayı bekle ama bir sonrakini al" birlikte, seviyeyi genişliği belirtilmemiş bir banda ve giriş sayısını belirsize çeviriyor.

**Haber başlığı ölçütü (V7)** — tanımsız, kaynak kuralı yok, eşik yok, ve seçim sonucu bilen tarafından yapılıyor.

**Mevsimsellik kapısı (V8)** — Ocak ayının üç videosu bu bloğu ölçülemez bulmuştu (örneklem 10–19, pencereler yılı kaplıyor, hesaplama yöntemi verilmemiş, yön filtresi tanımsız). Şubat o eksikleri kapatmadan onu zincirin **ilk ve zorunlu** kapısı yapıyor. **Ayrı bir açma/kapama parametresi olarak ölçülsün, sistemin içinde değil.**

### Altı ayın toplamı

| Ay | Karakter | Ölçülebilir oran |
|---|---|---|
| **1 — Eylül 2016** | Kurulum kavramları; sekiz tanım, yedisinin klasik karşılığı var | Düşük |
| **2 — Ekim 2016** | Para yönetimi; doğru ama metoda özgü değil, metoda özgü kısımlar hatalı | Düşük |
| **3 — Kasım 2016** | En ölçülebilir fikirler kavram yığınıyla iç içe | 4/8 |
| **4 — Aralık 2016** | Tam tanımlar; yeni bilgi az, ölçülebilirlik ilk kez mümkün | 7/14 |
| **5 — Ocak 2017** | Yeni kategoriler (zaman, büyüklük, fiyat dışı veri) + en zayıf blok (mevsimsellik) | 9/17 |
| **6 — Şubat 2017** | **Birleştirme ayı: parçalar bir iş akışına diziliyor. İlk kapı yapısı, ilk giriş emri eşlemesi, ilk kaybeden işlem gösterimi — ve ilk kez akışın kendisi bileşenlerinden daha az ölçülebilir** | **2/8** |

### Altmış üç videoda hâlâ geçmeyen cümle

> "Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."

Altı ay, altmış üç video, sıfır istatistik. Ocak'ın on dördüncü videosunda bunun resmî cevabı verilmişti: kanıt sunulmayacak.

**Ama bu ay bir şey değişti, ve kaydedilmeli:** altıncı ay, serinin bir **test prosedürü önerdiği** ilk ay. Altıncı videoda "beş örnek bul, en az 5:1 versin"; sekizincide "son iki yıla geri git ve çerçevenin sağlam swing'leri süzüp süzmediğine bak."

İki eksikle. **Sonuç bildirilmiyor** — kendisi yaptıysa çıktısı yok. Ve **aramanın biçimi doğrulama arayışı:** "süzülenlere bak" demek, süzülmeyenleri saymamak demek. Doğru versiyonu — çerçeveyi giriş anında uygula, tetiklenen her sinyali kaydet, tümünün dağılımına bak — senin ön kayıtlı protokolünün kendisi. Ve o ayrım senin range projende belirleyici olmuştu: 27 hücrenin hiçbiri 100 işlem eşiğini geçemedi, proje kendi durdurma kriterleriyle kapandı, OOS'a hiç dokunulmadı.

### Kapanış gözlemi

Aralık ayının sonunda şu çıkarım yapılmıştı: *bir kural, belirsiz bir bileşeni merkezine aldığında ölçülemez hale gelir; kenarda bıraktığında çekirdeği hâlâ test edilebilir kalır.*

Ocak buna bir boyut ekledi: *ölçülebilirlik verinin cinsine de bağlı — takvim tartışılmaz, "40 yıllık ortalama" bir hesaplama tercihidir.*

**Şubat üçüncü bir boyut ekliyor: ölçülebilirlik, bir kuralın kaç tanımsız yüklemi birleştirdiğine bağlı — ve birleşim belirsizliği ortalamıyor, çarpıyor.**

Kanıtı ayın kendi içinde. Şubat'ın *bileşenleri* serinin ürettiği en mekanik parçalar: giriş emri eşlemesinde sıfır seçim noktası var, fib prim/iskonto eşiklerinde sıfır, NR7'de sıfır, COT orta çizgisinde sıfır. Bu dört kural, Aralık'ın çifte tepe projeksiyonuyla aynı sınıfta.

Ama Şubat'ın *yöntemi* — sekiz videonun birlikte öğrettiği akış — altı aylık serinin en düşük ölçülebilir oranını veriyor. Çünkü akış, altı kapıyı zincirliyor ve o kapılardan üçü tanımsız bir yükleme dayanıyor: "trend ediyor mu", "aylık boğa mı", "mevsimsel eğilim var mı". Zincirdeki her tanımsız halka, ondan sonraki her şeyin belirsizliğini taşıyor.

Ve bu, ayın en kullanışlı pratik sonucunu doğuruyor — hangi işi yapacağına dair:

> **Bileşenleri çıkar, iş akışını test etme.**

Şubat'ın parçalarının her biri tek başına, tek koşuda, mevcut altyapınla ölçülebilir. Birleşimi ise ancak sen üç tanımsız yüklemi doldurduktan sonra ölçülebilir — ve o an ölçtüğün şey videonun modeli değil, senin modelin olur.

Bir de kaydedilmesi gereken bir asimetri var. Altı ay boyunca serinin tekrar eden örüntüsü şuydu: *doğru olan kısımlar herkesin bildiği kısımlar, özgün olan kısımlar ölçülmemiş kısımlar.* Şubat bunu kısmen kırıyor — COT orta çizgisi ve NR7 gibi *doğrulanabilir* araçlar getiriyor, ama ikisi de **zaten literatürde var** (Williams COT Index, Crabel'ın dar aralık filtreleri). Yani örüntü kırılmadı, sadece yer değiştirdi: **bu ayın ölçülebilir kısımları, ICT'ye özgü olmayan kısımlar.**

Özgün olan tek şey birleştirmenin kendisi — ve ölçülemez olan da o.

---

# BÖLÜM IV — Kesinlikle bilmen gerekenler

Şubat'ın kavramları: **tanım · nasıl bulunur · ne işe yarar.** Sonda ayın tam swing modeli.

---

## 1. Swing trading — tanım ve sınırlar

**Tanım (videonun kendi ifadesi).** *"Piyasadaki öngörülebilir fiyat hareketlerini yüksek tutarlılıkla işlemleme disiplini."*

| Kalem | Değer |
|---|---|
| **Tutuş süresi** | **İki hafta veya daha uzun** (tercihen iki hafta – bir ay) |
| **Hedef büyüklüğü** | **200 – 500 pip** |
| **Sıklık** | **Her 4–6 haftada 1–2 işlem** |
| **Giriş grafiği** | **4 saatlik** |
| **Çerçeveleme grafiği** | **Aylık ve haftalık** |

**Piyasa seçimi:**
- **"Favori pariteden kaçın."** Büyük hareketler her yıl piyasalar arasında dönüyor
- **Her üç ayda bir** yeni fırsat oluşuyor
- **Eleme kuralı:** son üç ayda az hareket etmiş ya da hiç hareket etmemiş durgun piyasalardan kaçın

**Piyasa profilleri — aranan:**

| Profil | Ne demek | Swing için |
|---|---|---|
| **Trend** | Aylık/haftalıkta yönlü | **Aranan** |
| **Konsolidasyondan yeni çıkmış** | Büyük oyuncular bekleme düzeninden çıkarmış | **Aranan** |
| **Geniş aralıkta sıkışmış** | Kurumsal ilgi yok | **Kaçınılacak** |

---

## 2. PD array matrisi — tarama sırası

**Ayın merkezî organizasyon aracı.** Mevcut fiyatın üstü ve altı **bu sırayla** taranır:

| Sıra | Üstte (prim spektrumu) | Altta (iskonto spektrumu) |
|---|---|---|
| 1 | En yakın **bearish mitigation block** | En yakın **bullish mitigation block** |
| 2 | İşlem görmemiş **bearish breaker** | İşlem görmemiş **bullish breaker** |
| 3 | **Likidite boşluğu** | **Likidite boşluğu** |
| 4 | **Fair value gap** | **Fair value gap** |
| 5 | En yakın **bearish order block** | En yakın **bullish order block** |
| 6 | **Rejection block** — fitilli mumların **gövdelerinin üstü** | **Rejection block** — **gövdelerin altı** |
| 7 | **Eski dip veya tarihsel tepe** | **Eski tepe veya tarihsel dip** |

**Nasıl kullanılır.**
- **Giriş:** bulunduğun bölgeye göre karşı listeden bir seviye seç
- **Hedef:** karşı taraftaki listeyi **1'den 7'ye doğru** sırayla hedefle
- **Tarama sırası:** prim array'leri için listede **aşağıdan yukarı**, iskonto array'leri için **yukarıdan aşağı**

**Ve aynı tarama dört zaman diliminde:** aylık, haftalık, günlük, 4 saatlik.

**Ocak V14'ün hiyerarşisiyle farkı:** Ocak listeyi veriyordu, Şubat **tarama yönünü** ekliyor ve dört zaman dilimine uyguluyor.

---

## 3. Üç sıralı durum — ayın en mekanik karar tablosu

**Boğa tarafı:**

| Durum | Aylık | Haftalık | Günlük | Ne yaparsın |
|---|---|---|---|---|
| **1** | Boğa | Boğa | Boğa | 4 saatlik iskonto array'lerinden al |
| **2** | Boğa | Boğa | **Düzeltmede** | **Haftalık** iskonto array'ine inmesini bekle |
| **3** | Boğa | **Düzeltmede** | **Düzeltmede** | **Aylık** iskonto array'ine inmesini bekle |

**Ayı tarafı — tam simetriği:**

| Durum | Aylık | Haftalık | Günlük |
|---|---|---|---|
| **1** | Ayı | Ayı | Ayı |
| **2** | Ayı | Ayı | **Boğa (düzeltme)** |
| **3** | Ayı | **Boğa** | **Boğa** |

**Ne işe yarar.** *"Fiyat nereye kadar inecek?"* sorusuna **mekanik** cevap veriyor. Kaç zaman dilimi düzeltmedeyse, o kadar üst zaman diliminin array'ine inmesi bekleniyor.

**Bu, altı ayın en temiz "ne kadar geri çekilir" kuralı.** Sıfır seçim noktası içeriyor — sadece "kaç zaman dilimi düzeltmede" sayılıyor.

---

## 4. Kurulum aşamaları — koşul, sahne, uygulama

Videonun üç aşamalı çerçevesi:

**1. KOŞUL.** Piyasa üst zaman diliminde zaten o yöne eğilimli olmalı. Kaynaklar: mevsimsellik, faiz, COT, piyasalar arası analiz.
> *"Her şeyin uyuşmasına gerek yok — makro ölçekte az sayıda şeyin uyuşması yeterli."*
Ve en güçlü tekil unsur: **faiz oranları.**

**2. SAHNE.** Piyasa önce **ralli yapmalı** — bir **impuls fiyat salınımı.** Bu ralliye **binmezsin, beklersin.** Ralli sırasında karşı taraftaki prim array'lerini haritalarsın ve geri çekilmeyi beklersin.
> *"Geri çekilmeyi zamanlamaya çalışma."*

**3. UYGULAMA.** Geri çekilme geldiğinde, önceden haritaladığın iskonto array'lerinden gir. Kâr edilecek kısım sonraki **genişleme salınımı (expansion swing).**

**Aralık tanımı:** **başlangıç noktası (point of origin)** ile geri çekilmeden önceki **ara vadeli tepe** arası. O aralığın tamamı **iskonto PD array matrisidir.**

---

## 5. Prim / iskonto sayısallaştırması — Fibonacci genişletme

Videonun aralığı sayıya çevirme yöntemi (MT4 Fibonacci expansion aracı):

| Seviye | Anlam | Kural |
|---|---|---|
| **0.90** | Derin prim | **Yeni uzun alma** |
| **0.80** | Prim | **Yeni uzun alma** |
| **0.50** | **Denge (equilibrium)** | Üstü prim, altı iskonto |
| **0.30** | Derin iskonto | **Yeni kısa alma** |
| **0.20** | En derin iskonto | *"20'den azını görmeyi sevmiyorum"* |

**Ne işe yarar.** "Prim mi iskonto mu" sorusunu **bir sayıya** indiriyor. Ve iki yasak koyuyor — yasaklayıcı kurallar daha test edilebilirdir.

**Video kendisi de zorunlu görmüyor:** *"zamanla çizmene gerek kalmayacak."*

---

## 6. Prim/iskonto asimetrisi — teyit kuralı

**Ayın en somut teyit ölçütü.** Bir yönde işlemdeysen aranan:

| Boğa işlemde | Ayı işlemde |
|---|---|
| **Her düşüş mumu destek sağlıyor** | **Her yükseliş mumu direnç sağlıyor** |
| Salınım tepeleri kırılıyor, sonrasında daha yüksek tepeler | Salınım dipleri kırılıyor, sonrasında daha düşük dipler |
| **Bearish order block'lar fiyatı tutamıyor** — içlerinden geçiliyor | **Bullish order block'lar tutamıyor** |
| Aralığın prim tarafındaki boğa array'leri zayıf | Aralığın iskonto tarafındaki ayı array'leri zayıf |

**Videonun formülü:** *"Toplama düşüş mumlarında ölçülür, dağıtım yükseliş mumlarında direnç olarak ölçülür."*

**Ne işe yarar.** İşlemin **arkasında kurumsal akış olup olmadığının** sürekli bir kontrolü. Ve tamamen mekanik: mum mum sayılabilir.

---

## 7. "Kendini ikna ediyorsan geç"

**Kural.** Grafiği incelemek zorunda kalıyorsan, ileri geri tartışıyorsan, *"bu order block mu likidite noktası mı"* diye kendinle tartışıyorsan → **geç.**

> *"İşlemin grafikten kelimenin tam anlamıyla fırladığı durumlar en yüksek olasılıklı olanlar, ve aynı zamanda alınması en kolay olanlar."*

**Ne işe yarar.** Bir **öz-denetim** kuralı, ve metottan bağımsız geçerli.

**Dikkat.** Ölçülebilir değil — "belirgin" öznel. Ama **doğru yönde bir önyargı koyuyor:** sinyal bulmaya karşı. Ve Haziran V17'deki *"belirgin değilse SMT'de ayrışma yoktur"* kuralıyla aynı aileden.

---

## 8. Ödül/risk ve kaldıraç

**R:R kuralı:** **3:1'den az kullanma.** Ve gerçekte çoğu zaman 5:1, bazen 10:1 – 15:1.

**Başabaş isabet tablosu (videonun kendi sayıları):**

| R:R | Başabaş isabet | Yanılabileceğin oran |
|---|---|---|
| **3:1** | **%25 – 34** | %66 – 75 |
| **5:1** | ~%17 | %83 |
| **10:1** | ~%9 | %91 |

**Kaldıraç — ayın en muhafazakâr sayısı:**

| Ortam | Kaldıraç |
|---|---|
| ABD forex yasal üst sınır | 50:1 |
| Vadeli/emtia | ~10:1 |
| Yurtdışı brokerlar | 100:1 – 400:1 |
| **Videonun önerisi** | **3:1** |

Somut: **10.000 $ hesapla yalnızca 3 mini lot.**

> *"Kaldıraç swing trading'de senin kutsal kâsen"* — **kontrol edilecek, maksimize edilmeyecek.**

**Getiri beklentisi:** yıllık **%20 – 30** (fon sektörü standardı).

---

## 9. Giriş tekniği eşlemesi — ayın en mekanik kuralı

**Hangi PD array'e hangi emir türü konur:**

| PD array tipi | Alım | Satış |
|---|---|---|
| **Breaker / mitigation block** | **Stop emri** | **Stop emri** |
| **Likidite boşluğu / FVG** | **Stop emri** | **Stop emri** |
| **Order block / rejection block / eski dip-tepe** | **Limit emri** (eski dibin **altında**) | **Limit emri** (eski tepenin **üstünde**) |

**Ne işe yarar.** Ocak V16/V17'de "stop mu limit mi — sana kalmış" deniyordu. **Burada karar array türüne bağlanıyor** ve seçim ortadan kalkıyor.

**Emrin tam yeri için:** Ocak'ın giriş teknikleri — ters mumun **açılışına** stop, **kapanışına** limit.

---

## 10. Kurulum başarısızlığı protokolü

**Ayın en somut risk prosedürü.**

Bir PD array'de giriş yaptın ve fiyat içinden geçti (kurulum başarısız):

1. **Bir sonraki PD array'e** git — boğada bir alt, ayıda bir üst
2. Orada **tekrar gir**
3. **Pozisyon büyüklüğü: %50** (öncekinin yarısı)
4. 4 saatlikte array kalmadıysa **günlük → haftalık → aylık** array'lere çık
5. Kâr hedefi düşürülebilir: *"kaybettiğinin %60'ını alabiliyorsan %60'a razı ol"*

**Ne işe yarar.** Ekim V5'in "kayıptan sonra riski yarıya indir" kuralının **seviye tabanlı** versiyonu. Ve ikisi birleşiyor: yeni giriş **hem daha iyi seviyede hem yarı boyutta.**

---

## 11. Sekiz "patlayıcı hareket" ölçütü

Videonun listesi, ve **ikiye ayrılıyor:**

### Ölçülebilir olanlar (beş)

| # | Ölçüt | Eşik |
|---|---|---|
| **1** | **Ana piyasa analizi** — dört varlık sınıfı (faiz, hisse, emtia, döviz) | **Her gruptan birer tane trend etmeli.** Grup A: emtia + hisse. Grup B: döviz + faiz |
| **3** | **COT orta çizgisi** | Son **12 ayın** en yüksek ve en düşük net pozisyonunun **ortası** = yeni sıfır çizgisi. Ticariler üstündeyse boğa |
| **4** | **Açık pozisyon** | **%10 – 15+ düşüş** = ticari kısa kapatma → boğa. **%10 – 15+ artış** + ticari satış → ayı |
| **6** | **Oynaklık daralması** | **Inside bar** + **son 7 günün en küçük aralığı** + **son 3 günün en küçük aralığı** |
| **8** | **Williams %R**, periyot **15**, günlük, bölme **50** | 50 altı alım bölgesi, üstü satım. **50'deysen en son hangisinden çıktıysan onu seç** |

### Ölçülemez olanlar (üç)

| # | Ölçüt | Sorun |
|---|---|---|
| **2** | Piyasalar arası konfluans | Aynı doları içeren seriler — bağımsız değil |
| **5** | Mevsimsel eğilim | Ocak'ın bulgusu geçerli: veri doğrulanamaz |
| **7** | Haber başlıkları — ters yönde | Yazılamaz; "büyük başlık" tanımsız |

**Videonun kendi en dürüst cümlesi (ölçüt 6 için):**
> *"Bu sana **zamanlama vermiyor.** Sadece sahneyi veriyor. Ve piyasalar küçük aralıklarda gidiyor diye **yönü bildiğin anlamına gelmez.**"*

---

## 12. COT orta çizgisi — ayın en iyi yeni fikri

**Sorun.** Ticari işlemciler genelde **sürekli net kısa** görünür (hedging yaptıkları için). Standart sıfır çizgisi bu yüzden çoğu zaman bilgi taşımaz.

**Çözüm — dört adım:**
1. Son **12 ayın** ticari net pozisyonunun **en yüksek** değerini bul
2. **En düşük** değerini bul
3. **Ortasını al** → **yeni sıfır çizgisi**
4. Ticariler bu çizginin **üstündeyse alıyor**, altındaysa satıyor

**Ne işe yarar.** Standart sıfır çizgisinin altında bile olsalar, **hedging programlarındaki değişimi** yakalıyorsun.

**Neden ölçülebilir.**
- Formül: `(mevcut − 12 ay min) / (12 ay maks − 12 ay min)`, eşik **%50**
- **Sıfır seçim noktası**
- Veri **haftalık, kamuya açık, onlarca yıllık geçmişi var**
- Kaynak: **barchart.com**

**Kaynak:** Larry Williams — video kendisi belirtiyor.

**Dikkat.** COT raporu **Salı günkü pozisyonları gösterir ve Cuma yayımlanır** — üç günlük gecikme. Video bunu anmıyor. Ölçerken modellemezsen sonuç geçmişte hep iyi görünür.

---

## 13. Oynaklık daralması (inside bar)

**Tanım.** Bir mumun tamamı, bir önceki mumun aralığının **içinde** kalıyor — tepesi daha düşük, dibi daha yüksek.

**Üç filtre birlikte kullanılıyor:**
1. **Inside bar** (herhangi bir zaman diliminde)
2. **Son 7 günün en küçük aralığı**
3. **Son 3 günün en küçük aralığı**

**İddia:** bir sonraki ya da ondan sonraki mumun **büyük aralıklı** olma olasılığı yüksek.

**Ne işe yarar.** **Zamanlama değil, sahne.** Videonun kendi ifadesiyle: bir kurulum zaten hizalıysa, daralma o kurulumun **ne zaman patlayacağına** dair bir işaret.

**Neden ölçülebilir.** Üçü de tamamen aritmetik, sıfır seçim noktası. Ve hipotez net: *"inside bar'ı takip eden mumun gerçekleşmiş aralığı, ortalamadan büyük mü?"*

**Ve klasik karşılığı var:** bu, **NR7 / NR4** kalıbının aynısı (Toby Crabel, *Street Smarts*) — akademik ve pratik literatürde incelenmiş, ve oynaklık kümelenmesi gerçek bir olgu.

---

## 14. Kurumsal seviyeler (yuvarlak sayılar)

**Videonun listesi:**

| Seviye | Örnek |
|---|---|
| **Büyük rakam (00)** | 1.2000 |
| **Orta rakam (50)** | 1.2050 |
| **80** | 1.2080 |
| **20** | 1.2020 |
| **30 ve 70** | 1.2030, 1.2070 |

**Emir katmanlama kuralı:** emirler tek fiyata konmuyor. Örnek — 50 seviyesinde boğa bekleniyorsa bir order block **60'ta** oluşabilir, ama bütün olarak **50'de ortalama** alınıyor.

**Ve seviyeye yaklaşma kuralı:** *"Piyasa fiyatı seviyenin üstündeyse **muhafazakâr ol**, tam o seviyenin vurulmasını bekleme."* Gümüş örneğinde 15.56 yerine 15.60, hatta 15.50 kullanılıyor.

**Ne işe yarar.** **Sıfır seçim noktalı** bir seviye kaynağı — ve doğal karşılaştırma grubuyla ölçülebilir: yuvarlak sayılar vs rastgele seviyeler.

---

## 15. Seviye işaretleme kuralı — bölge değil, fiyat

Video bunu iki kez vurguluyor:

> **"Bunlar bölge değil, belirli fiyat seviyeleri — düşüş mumlarının açılışları ve tepeleri."**

**Prosedür (boğa için):**
1. Fiyat daha yüksek tepeler yaparken **her düşüş mumunu** not et
2. Mumun **tepesini** ve **açılışını** ayrı ayrı işaretle
3. Aynısını aylık → haftalık → günlük → 4 saatlik sırasıyla yap
4. Üst zaman dilimi seviyelerini alt grafiklere **taşı**

**Mum seçim kuralları:**
- Ardışık mumlar varsa **gövdeleri birleştir**
- **Fitil değil gövde** kullanılır
- **Bir mumun gövdesi çok küçükse ve öncekinin içine kapsanmışsa (encapsulated), o mumu kullanma** — daha kalın gövdeli olanı kullan

**Ne işe yarar.** "Bölge" belirsizdir, "fiyat" değildir. Bu kural, order block'un ölçülebilirliğini doğrudan artırıyor.

---

## Şubat'ın tam swing modeli — yedi kapı

Ayın kapanış videosu, sekiz videoyu tek prosedüre bağlıyor. **Her kapı "hayır" derse durulur.**

### Kapılar

| # | Kapı | Boğa koşulu | Ölçülebilir mi |
|---|---|---|---|
| **1** | **Mevsimsel eğilim** | Alım için bir eğilim var mı? | **Hayır** — ve zorunlu kapı |
| **2** | **Ana piyasa analizi** | Grup A'dan (emtia/hisse) **ve** Grup B'den (döviz/faiz) birer tanesi trend ediyor mu? | **Evet** |
| **3** | **COT** | Ticariler **12 aylık orta çizginin üstünde** mi? | **Evet** |
| **4** | **Korelasyon (SMT)** | Dolar endeksi ters yönü destekliyor mu? | **Evet** |
| **5** | **Emtia filtresi** | Emtialar yükseliyor, tepeleri kırıyor, dipleri reddediyor mu? | **Evet** |
| **6** | **Açık pozisyon** | **%10–15+ düşmüş** mü? | **Evet** |
| **7** | **Top-down analiz** | Aylık → haftalık → günlük → 4 saatlik PD array'ler | **Kısmen** |

**Ayı versiyonu:** aynı kapılar, ters koşullarla.

### Kapı 2'nin "hayır" cevabı — ve bu iyi

> *"Swing için koşullar olgun değilse **'artık işlem yapamam' demiyorum** — daha alt zaman dilimine iniyorum."*

Bu, filtre yığınının işlem sayısını öldürme problemine verilen tek cevap: **kurulum yoksa ölçek değiştir.**

### Giriş ve yönetim

**8. Giriş:** PD array türüne göre stop ya da limit (madde 9)
**9. Stop:** yapının ötesi
**10. Kâr alma:** her zaman diliminin karşı array'inde **kademeli** — 4 saatlikte bir kısım, günlükte bir kısım, haftalıkta bir kısım
**11. Aylık/haftalık hedefe yaklaşırken pozisyonun en küçük kısmıyla ol**
**12. Kurulum başarısız olursa:** bir sonraki array, **%50 boyutla**

### Bu modelin ölçülebilirlik durumu

**Kapı 2–7 tamamen mekanik.** Kapı 1 (mevsimsellik) doğrulanamaz — **ve zorunlu ilk kapı konumunda.**

**Videonun kendi tavizi bu sorunu çözüyor:**
> *"Bu bölümü şablondan çıkarmak ve mevsimsel eğilim dışındaki her şeye bakmak istersen, **buyur.**"*

**Kapı 1'i çıkarınca, geriye altı kapılı tamamen kodlanabilir bir model kalıyor** — ve o model, altı ayın en eksiksiz çıktısı.

### Ölçüm önerisi

Kapıları **tek tek ekleyerek** ölç, hepsini birden değil:

| Aşama | Ne eklenir |
|---|---|
| Taban | Top-down PD array girişi (kapı 7), filtresiz |
| +1 | COT orta çizgisi (kapı 3) |
| +2 | Açık pozisyon (kapı 6) |
| +3 | SMT (kapı 4) |
| +4 | Ana piyasa trend testi (kapı 2) |
| +5 | Oynaklık daralması (V7 ölçüt 6) |

Her aşamada işlem sayısı ve ort. R kaydedilir. **Hangi kapının gerçekten katkı yaptığı ancak böyle görülür** — ve senin Aşama 1 RET'inin sebebi de tam olarak filtrelerin işlem sayısını öldürmesiydi.
