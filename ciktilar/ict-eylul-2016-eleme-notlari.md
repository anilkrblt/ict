# ICT Mentorship — Eylül 2016
## Birinci ay · 8 video · Kurulumun unsurları, değerleme ve likidite

---

## Bu ayın karakteri

Serinin açılış ayı. Sekiz videoda **serinin tüm temel kavram seti** kuruluyor: order block, fair value gap, likidite boşluğu, likidite havuzu, denge/prim/indirim, turtle soup, optimal trade entry, ve iki tür likidite koşusu. Sonraki on bir ay bunların kombinasyonları olacak.

Ay bir düzen izliyor. Birinci video **haritayı** veriyor: piyasa dört durumdan birindedir ve her duruma bir araç eşlenir. İkinci ve üçüncü videolar **bakış açısı** kuruyor — grafik yok, anlatı ve çalışma disiplini var. Dördüncü, beşinci ve altıncı videolar **değerlemeyi** öğretiyor: bir aralığın neresindeyiz, orada alınır mı satılır mı. Yedinci video ayın tek gerçek yapısal fikrini veriyor: bir hedefe giden yol ne kadar kalabalıksa oraya varmak o kadar zordur. Sekizinci video **zamanı** ekliyor.

Ölçüm açısından ayın belirleyici özelliği şu: kavramların tanımları tek tek mekanik, ama **bir arada kullanılma biçimi ölçülemez.** En net örneği altıncı videoda — aynı grafiğe dört farklı aralık çiziliyor ve fiyat aynı anda hem primde hem indirimde çıkıyor.

Kullanılan filtre: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü.

---

## Bölme notu

Dosya **4.326 satır**, sekiz video. Sınırlar `1. video` … `8. video` işaretleriyle ayrılmış ve videolar kendilerini teyit ediyor: *"the first of eight"*, *"the second teaching of a series of eight"*, … *"the sixth installment of the eight teachings"*. **Belirsizlik yok.**

| Video | Satır | Konu |
|---|---|---|
| V1 | 1 – 503 | İşlem kurulumunun unsurları |
| V2 | 504 – 1127 | Piyasa etkinliği paradigması |
| V3 | 1128 – 1871 | Bakış açısı ve çalışma disiplini |
| V4 | 1872 – 2421 | Denge ve indirim (alım tarafı) |
| V5 | 2422 – 3024 | Denge ve prim (satış tarafı) |
| V6 | 3025 – 3334 | Adil değerleme (fair value) |
| V7 | 3335 – 4021 | Yüksek ve düşük dirençli likidite koşuları |
| V8 | 4022 – 4326 | Impuls hareketleri ve piyasa protraksiyonu |

---

## Bu belge nasıl okunur

Her video iki kutuda: **DERS** (videonun anlattığı, anlattığı gibi — tanımlar, prosedürler, sayılar, örnek çözümü) ve **ELEME** (ne ölçülebilir, ne geçmiş açıklaması, ne yanlışlanamaz).

Sonda **Bölüm IV** var: ayın tüm kavramlarının sözlüğü — tanım · nasıl bulunur · ne işe yarar.

---

# BÖLÜM I — Dersler ve eleme

## Video 1 — İşlem kurulumunun unsurları

::: ders
**DERS**

#### Videonun kurduğu yapı

Bir işlem kurulumunun iki bileşeni var:

1. **Bağlam / çerçeve** — piyasa şu an ne yapıyor
2. **Kurumsal emir akışı referans noktası** — o duruma karşılık gelen araç

Ve ikisi **birebir eşleniyor.** Videonun asıl katkısı bu eşleme.

#### Dört piyasa durumu ve dört araç

| Durum | Tanım | Kullanılacak araç |
|---|---|---|
| **Expansion** (genişleme) | Fiyat dengeden **hızla** uzaklaşır | **Order block** |
| **Retracement** (geri çekilme) | Fiyat yakın zamanda oluşan aralığın içine geri döner | **Fair value gap / likidite boşluğu** |
| **Reversal** (dönüş) | Fiyat mevcut yönün tersine döner | **Likidite havuzu / stop koşusu** |
| **Consolidation** (yatay) | Fiyat net bir aralıkta kalır, iki yöne de gitmeye istekli değildir | **Denge (equilibrium)** |

Videonun cümlesi: *"Piyasa bu dörtten yalnızca birinde olabilir."*

#### Her durumun anlamı — videonun gerekçeleri

**Expansion neden önemli.** Fiyat bir seviyeden hızla ayrılıyorsa, bu piyasa yapıcının **yeniden fiyatlama niyetini açık etmeye istekli** olduğunu gösteriyor. Yapılacak şey: fiyatı kovalama, order block'a geri dönmesini bekle.

**Retracement neden önemli.** Fiyat yakın aralığa geri dönüyorsa, bu **adil değerde işlem görmemiş seviyeleri yeniden fiyatlama** isteğini gösteriyor.

**Reversal neden önemli.** Fiyat yön değiştirdiğinde, piyasa yapıcının bir **stop kümesini süpürdüğü** ve yeni yönde anlamlı bir hareketin başlayacağı varsayılıyor.

**Consolidation neden önemli.** Fiyat yatay kalıyorsa, piyasa yapıcı **her iki tarafta emir birikmesine izin veriyor** demektir. Yakında yeni bir expansion beklenir.

#### Sıralama kuralı — videonun algoritma modeli

Video, bu dört durumun rastgele sıralanmadığını iddia ediyor:

```
Konsolidasyon → Expansion → (Retracement VEYA Reversal) → ...
```

Ve açıkça yasakladığı iki geçiş var:
- Konsolidasyon → **doğrudan** retracement olmaz *(hareket etmemiş ki geri çekilsin)*
- Konsolidasyon → **doğrudan** reversal olmaz *(önce konsolidasyondan çıkması gerekir)*

Videonun pratik talimatı: *"Bir konsolidasyon ya da bekleme düzeni gördüğünde, sonraki bacağın **patlayıcı bir hareket** olacağını düşün. Her zaman ilk expansion'ı bekle — kararı vermek için gereken tüm bilgi ondadır."*

#### Örneklerin çözümü

**Expansion → order block.** Grafikte net bir konsolidasyon var, belirgin bir tepe ve dip. **Denge noktası, tepe ile dibin tam ortası.** Fib aracını konsolidasyonun tepesinden dibine çek, orta noktayı bul. Videonun doğrulama önerisi: *"Fiyat o seviyeye alttan ve üstten kaç kez dokunuyor, ne kadar oyalanıyor — sayarak kendini test et."*

Sonra fiyat konsolidasyondan yukarı çıkıyor. **Hareketten hemen önceki düşüş mumu** bullish order block. Fiyat oraya geri döndüğünde alım yapılıyor — ve o seviyeden **100 pipin üstünde** bir genişleme geliyor.

**Retracement → likidite boşluğu.** Fiyat hızla aşağı iniyor. O hızlı hareket, fiyatın **her seviyede işlem görmediği** bir boşluk bırakıyor. Beklenti: fiyat geri gelip o boşluğu kapatacak, sonra asıl yönüne devam edecek.

**Reversal → likidite havuzu.** Örnek USD/CHF. Grafikte her eski tepenin üstü ve her eski dibin altı işaretleniyor — stopların olduğu yerler. Fiyat her seferinde o seviyelerin biraz ötesine gidip geri dönüyor. Videonun notu: *"Bu pariteyi işlem yapmayı sevmem, çok dalgalıdır — ama tam da bu yüzden turtle soup ve sahte kırılımlar burada çok iyi çalışır."*

**Consolidation → denge.** Aralık **gövdelerle** tanımlanıyor, fitillerle değil. Fiyat aralıktan çıkıyor, dengeye geri dönüyor, sonra tekrar açılıyor.

#### Videonun kapanış tavsiyesi

*"Hepsini bilmen gerekmiyor. Bunlardan **bir tanesi** senin ekmek kapın olacak. Bir tanesiyle bile tutarlı kâr edebilirsin."*

Ve ödev: *"Grafiğinin sol tarafına git, geçmişteki tüm örnekleri bu dört durum ve dört araca göre tek tek işaretle."*
:::

::: eleme
**ELEME**

#### Yazılabilir iddialar — 4 tane

**Denge noktası (equilibrium).** Konsolidasyon aralığının orta noktası. Önemli bir ayrıntı veriyor: aralık **gövdelerle** tanımlanır, fitillerle değil. İddia: fiyat aralıktan çıkar, dengeye geri döner, sonra tekrar açılır. Giriş, dönüşte yapılır.

**Order block.** Yükseliş için: impuls hareketten hemen önceki **son düşüş mumu**. Tanım net ve tek anlamlı. İddia: fiyat o muma dönünce alım gelir.

**Likidite boşluğu (liquidity void).** Hızlı hareketin bıraktığı, fiyatın her seviyede işlem görmediği aralık. İddia: fiyat geri dönüp boşluğu doldurur, sonra asıl yönüne devam eder.

**Likidite havuzu (liquidity pool).** Eski tepenin üstü, eski dibin altı. İddia: fiyat oraya uzanır, stopları alır, ters döner.

Dördüncüsü, daha önce kendi verinle ölçtüğün sweep. Sonuç sıfıra yakındı. Diğer üçü ölçülmedi.

#### Yeniden adlandırmalar

| Videodaki | Klasik karşılığı |
|---|---|
| Order block | Hareketin başladığı mumun bölgesi — arz/talep bölgesi |
| Liquidity void | Dengesizlik / boşluk; "gap doldurma" çok eski bir fikir |
| Liquidity pool | Stop avı, sahte kırılım, Wyckoff spring/upthrust |
| Equilibrium | %50 geri çekilme / aralık ortalaması |
| Expansion–retracement–reversal–consolidation | Trend–pullback–dönüş–yatay; Dow ve Wyckoff'un yüz yıllık şeması |

Yeni bilgi yok. Yeni olan tek şey, hangi durumda hangi aracın kullanılacağının **önceden** eşleştirilmesi.

#### Yanlışlanamaz kısımlar

**"Piyasa bu dört durumdan yalnızca birinde olabilir."** Her olasılığı kapsıyor, dolayısıyla sıfır bilgi taşıyor. Videonun omurgası bu cümle ve test edilemez.

**Sıralama kuralı da aynı sorunu taşıyor.** "Konsolidasyondan doğrudan retracement'a geçilmez" bir kısıt gibi duruyor, ama yatay bölgeden çıkan her hareket zaten tanım gereği expansion'dır. Kısıt bir şey yasaklamıyor — tanımların kendisi onu zorunlu kılıyor.

**Interbank algoritma anlatısı.** "Fiyatı bir yapay zekâ motoru üretiyor, stopları toplamak için programlanmış." Kanıt sunulmuyor ve sunulamaz. Elektronik piyasa yapıcılığın var olması ayrı şey; "stop avlamak için programlanmış merkezi bir motor" iddiası bambaşka bir şey.

**"Hangi tarafta daha çok para varsa oraya gider — ama bunu her zaman bilemeyiz."** İddia ve muafiyeti aynı cümlede. Sonrasında ne olursa açıklanabilir.

**"Çok uzağa açılırsa bir şey yapamayız, sonrakini bekleriz."** Kaçırılan her hareket için hazır gerekçe.

**"Tek bir kurulumla tutarlı kâr edebilirsin."** Hiçbir sayı yok.

#### Geçmiş açıklamaları

İki grafik örneğinin ikisi de geriye dönük. "Sürekli tekrar eder" deniyor ama kaç örnekte, hangi dönemde, ne oranda — hiçbiri yok. Ve izleyiciye açıkça **grafiğin sol tarafına bakıp örnekleri işaretlemesi** söyleniyor. Bu, hindsight çalışmasının tarifi.

#### Ölçülebilirlik

**Kısmen.** Dört aracın tanımları tek tek mekanik. Ama hangi konsolidasyonun, hangi impulsun, hangi eski tepenin seçileceği tanımsız — ve bu seçimler kuralın merkezinde.

#### Bu videodan alınacaklar

**Metodolojik olarak sağlam tek fikir:** aracı seçmeden önce rejimi belirle. "Elimde şu gösterge var, nereye uyarsa" yerine "piyasa şu an ne yapıyor, buna uygun araç hangisi." Bu sıralama doğru ve rejim-değişimli modellerin de yaptığı şey.

**İkinci sağlam şey:** konsolidasyonda işlem yok, bekle. Bir disiplin kuralı ve videodaki en dürüst cümlelerden biri.
:::

---

## Video 2 — Piyasa etkinliği paradigması

::: ders
**DERS**

Bu videoda grafik yok. Serinin dünya görüşü kuruluyor.

#### İki grup modeli

Videonun çizdiği şema: **büyük bir "bilgisiz para" (uninformed money) çemberi** ve içinde çok küçük bir **"akıllı para" (smart money)** çemberi.

- **Bilgisiz para:** perakende traderlar, sosyal medya, eğitmenler, forumlar. Kendilerini piyasanın **tahrik mili** sanıyorlar — arz-talep, trend çizgileri, hareketli ortalama kesişimleri fiyatı sürüklüyor sanıyorlar.
- **Akıllı para:** bankalar. Sessizce iş yapıyorlar, dikkat çekmiyorlar.

Videonun iddiası: **küçük çember gerçek tahrik mili, büyük çember sadece kayış.**

#### Videonun mekanizma modeli

*"Piyasalar verimli — ama spekülatörler için değil, akıllı para için. Bankalar fiyatı sürüklüyor, kabul etsen de etmesen de. Onlar likidite sağlayıcı; geri kalan herkes likidite."*

Ve fiyat oluşumu hakkındaki iddia: *"Artık açık artırma piyasası değil, hepsi yapay zekâ. Fiyatın %90'ı elektronik algoritmalarla dağıtılıyor, ve o algoritmaları insanlar programlıyor — dolayısıyla parmak izleri görülebilir."*

#### Günlük seans yapısı — videonun tek somut şablonu

Videonun asıl öğretici içeriği bu. Fiyat dağıtımı her gün aynı sırayla ilerliyor:

| Sıra | Zaman (New York) | Ne olur | Durum |
|---|---|---|---|
| 1 | Asya seansı | Dar aralık | **Konsolidasyon** |
| 2 | Gece yarısından hemen sonra | Ters yönde sahte hareket — **Judas swing** | **Manipülasyon** |
| 3 | Londra açılışı | Günün asıl dibi/tepesi oluşur, stoplar süpürülür | **Reversal** |
| 4 | Sabah 05:00'e kadar | Aralık genişler | **Expansion** |
| 5 | 05:00 – 08:00 | Duraklama | **Konsolidasyon** |
| 6 | 08:00 – 08:30 | Haber saati, geri çekilme | **Retracement** |
| 7 | New York seansı | Ya dönüş ya yeni genişleme | **Reversal / Expansion** |
| 8 | 10:00 – 11:00 | Londra kapanışı, dönüş | **Reversal** |
| 9 | Günün kalanı | Yatay | **Konsolidasyon** |

Videonun vurgusu: bu şablon **haftalık aralıkta da aynı.** Pazar açılışı konsolidasyon, Pazartesi expansion, Salı reversal, hafta ortası konsolidasyon, sonra retracement ya da reversal.

#### Sıralama kuralının tekrarı

Video bu videoda da aynı kuralı beş kez tekrarlıyor:

> *"Asla konsolidasyondan retracement'a gitmez. Asla konsolidasyondan reversal'a gitmez. Her zaman konsolidasyon → expansion. Expansion'dan sonra ya retracement ya reversal."*

#### Neden gün içi çalışılıyor

Videonun kendi gerekçesi: *"Uzun vadeli işlemi 12 ayda öğretemem, çünkü sadece bir yıllık veri görürsün. Gün içi çalışırsan yılların verisini 200 küsur güne sıkıştırırsın — ve aynı kavramlar üst zaman dilimlerinde de geçerli."*

#### Gizlilik talebi

Video açıkça istiyor: *"Bunu YouTube kanalında paylaşman için değil. Blogunda, Twitter'da, Instagram'da olmamalı. Çocuklarınla ve ailenle paylaşabilirsin — bir miras kur. Ama ana akım yapma."*
:::

::: eleme
**ELEME**

Birinci videodan keskin bir düşüş. Dört yazılabilir iddia yerine **bir tane** var; geri kalanı anlatı ve ikna.

#### Yazılabilir iddia — 1 tane

**Günlük seans yapısı.** Tek somut, kodlanabilir şey yukarıdaki dokuz aşamalı şablon.

Test edilebilir: saat dilimlerini sabitle, "günün dibi/tepesi Londra açılışı civarında mı oluştu" diye say. Forex için tanımlı; kripto için sorunlu, çünkü 7/24 ve seans yapısı çok daha zayıf.

Dikkat: forex'te seans etkileri **gerçekten var** — Londra açılışında hacim artar, bu ölçülmüş bir olgu. Test edilmesi gereken kısım iddianın kendisi değil, **bu kadar spesifik bir sıralamanın her gün tekrarlandığı** iddiası.

#### Bir totoloji: durum sıralaması

**"Konsolidasyon yalnızca expansion'a gider. Asla doğrudan retracement veya reversal'a geçmez."**

İlk bakışta test edilebilir bir kısıt gibi duruyor. Ama yatay bir bölgeden çıkan her hareket zaten tanım gereği "expansion"dır. Kısıt bir şey yasaklamıyor — tanımların kendisi onu zorunlu kılıyor.

Video boyunca en çok tekrarlanan kural bu (beş kez) ve tam olarak hiçbir şey söylemiyor. **En çok vurgulanan şeyin en boş şey olması**, tek başına dikkat çekici bir sinyal.

#### Yanlışlanamaz kısımlar

**Interbank algoritma anlatısı** burada zirveye çıkıyor: fiyat merkezi bir yapay zekâ tarafından, korku ve açgözlülüğü bilerek üretiliyor.

**"Bu süreç asla değişmeyecek, asla çalışmayı bırakmayacak."** Bir stratejinin asla bozulmayacağını iddia etmek tanım gereği yanlışlanamaz — ve gelecekte kaybettiğinde "sen yanlış uyguladın" denebilir.

**"700 kişi dünyayı değiştirmez."** Edge'in yayılmayla dağılması itirazına karşı kurulmuş bir savunma. Ama aynı anda ürün kitlesel olarak satılıyor.

**"Her gün pipine kadar tutturdum."** Sıfır kayıt, sıfır doğrulama.

#### İkna teknikleri — asıl öğrenilecek şey burada

Videonun büyük kısmı bilgi değil, grup psikolojisi:

- **İç/dış grup kurgusu.** "Aptal sürü" ve "sessiz kazananlar". Sen ikincisine geçebilirsin.
- **Ön itiraz kapatma.** Göstergeler, destek/direnç, arz-talep — hepsi baştan "facade" ilan ediliyor. İzleyicinin karşılaştırma yapabileceği zemin kaldırılıyor.
- **Geçmiş acıya bağlanma.** "Stopun alındı, sebebini anlayamadın." Ortak bir deneyim, metodun kanıtı olarak sunuluyor.
- **Kimlik değişimi talebi.** "Araçlarını, hocanı bırakman gerek." Metodun kabulü bilgi meselesi olmaktan çıkıp aidiyet meselesi haline geliyor.
- **Gizlilik talebi.** Paylaşma çağrısı, aynı zamanda dışarıdan gelecek eleştiriyi de engelliyor.
- **Vaadin ertelenmesi.** "8. ve 9. ayda anlayacaksın." Test edilebilir sonuç sürekli ileri atılıyor.

#### Ölçülebilirlik

**Kısmen.** Seans şablonu tamamen mekanik ve tek başına ölçülebilir. Videonun geri kalanında ölçülecek bir iddia yok.

#### Bu videonun ana dersi

İkinci videoyu eledikten sonra elinde birinciden **daha az** şey var, ama ikna edicilik çok daha yüksek. Bu ters ilişki — **bilgi azalırken ikna artıyor** — bir içeriği değerlendirirken bakılacak ana sinyaldir.
:::

---

## Video 3 — Bakış açısı ve çalışma disiplini

::: ders
**DERS**

#### İki bakış açısının karşılaştırması

Videonun kurduğu tablo:

| | Bilgisiz para | Akıllı para |
|---|---|---|
| Akıllı para var mı? | Yok sayar | Bilgisiz paranın varlığını **bilir** |
| Fiyatı ne hareket ettirir? | Göstergeler, aşırı alım/satım | **Emirlerin nerede olduğu** |
| Herkes ne? | Kendisi piyasadır | **Herkes likiditedir** |

Videonun sonucu: *"Likidite sağlayıcının bakış açısını benimsersen akıllı para bakış açısını benimsemiş olursun — ve o bakış açısında herkes likiditedir. Likidite, en son oluşan tepe ve diplerin üstündeki/altındaki alım stopları, satış stopları ve bekleyen emirlerdir."*

#### Göstergelere bakış

*"Göstergeleri, **bilgisiz traderların ne düşündüğünü** öğrenmek için kullanacağız."* Yani göstergeler sinyal kaynağı değil, duyarlılık ölçer olarak konumlanıyor.

#### Çalışma disiplini — videonun somut talimatı

Bu, ayın en doğrudan uygulanabilir bölümü.

**Grafik kurulumu — her zaman dilimi için görüntülenecek veri miktarı:**

| Zaman dilimi | Görünecek veri |
|---|---|
| Günlük | **9 – 12 ay** (daha fazlası değil) |
| 4 saatlik | **3 ay** |
| 1 saatlik | **en az 3 hafta** |
| 15 dakikalık | **3 – 4 gün** |

**Parite seçimi.** Tek bir parite seç. Videonun önerisi: **EUR/USD ve GBP/USD'den kaçın** — çünkü mentorship boyunca zaten onlar işlenecek. Farklı bir parite seç ki kendi bağımsız perspektifini kurabilesin.

**Her grafikte işaretlenecek beş şey:**

1. **Fiyatın bir seviyeden hızla uzaklaştığı yerler** — order block ve likidite boşluğu tespitinin ham hali
2. **Yeniden test edilmemiş tepe ve dipler** — oluşmuş ama fiyatın bir daha dönmediği seviyeler
3. **Temiz tepeler / temiz dipler (equal highs/lows)** — bir tepe oluşur, fiyat uzaklaşır, geri gelir ama yeni tepe yapamaz; birbirine yakın iki eşit seviye. Videonun tanımı: *"Ya tam eşit ya birazcık üstünde ya da altında kalır. Üstünde alım stopları birikir ve piyasa oraya dönüp onları çalıştırma eğilimindedir."*
4. **Haftalık tepe ve dibin hangi gün ve hangi kill zone'da oluştuğu** — Londra'da mı New York'ta mı
5. **Her günün tepesi ve dibi**, sıfır GMT'ye kadar çizilerek

**Grafikleri ayır.** Video net: **iki ayrı grafik tut.** Bir tanesi analiz grafiği (tüm seviyeler işaretli), bir tanesi işlem grafiği. *"Aksi halde grafiğin çok kalabalık olur, kafan karışır."*

#### Örnek — USD/CHF haftalık okuması

Video kendi grafiğinde bir haftayı çözüyor, ve amacı "önceki günün tepe/dibini işaretlemek neden işe yarar" sorusunu göstermek:

- **Çarşamba:** fiyat Salı'nın tepesine kadar çıkıyor, **0.9790** civarında onu kırıyor — ama devam etmiyor. Sonra satış geliyor ve **Salı'nın dibine** kadar iniyor, bir iki pip aşağı taşıyor, sonra yatay.
- **Perşembe:** Çarşamba'nın tepe-dip aralığına geri çekiliyor, aralık içinde kapanış yapıyor, sonra satış — Çarşamba'nın dibinin biraz altına iniyor, sonra yatay.
- **Cuma:** doğrudan yukarı, Perşembe'nin tepesini kırıp yeni bir tepe yapıyor. Haftanın tepesi Çarşamba'da oluşmuştu; Cuma o tepenin üstündeki stopların hepsini alıyor.

#### Videonun yasakları

**"Şu an fiyatı tahmin etmeye çalışma."** Videonun açık talimatı: *"Piyasanın sırada ne yapacağını çözmeye çalışma. Bu senin gelişim aşaman için değil ve sadece hüsrana yol açar."*

**"Analizine âşık olma."** *"Gerçek zamanlı fiyat aksiyonunu izlerken beklediğin koşullara uymayan bir şey görürsen, vites değiştirme ya da kenara çekilme esnekliğini kaybetmiş olursun."*
:::

::: eleme
**ELEME**

İçeriğin çoğu yine anlatı, ama ilk kez **somut bir çalışma yöntemi** var.

#### Yazılabilir iddialar — 5 tane

**Temiz tepe / temiz dip (equal highs/lows).** İddia: bu seviyelerin üstünde/altında emir birikir, fiyat oraya uzanma eğilimindedir. Sweep tanımıyla akraba ama farkı var: burada **iki eşit seviye** şart, tek pivot değil.

**Test edilmemiş tepe/dip.** Oluşmuş ama fiyatın bir daha dönmediği seviyeler. Tanımlanabilir, ama "ne kadar süre dönmemiş" belirsiz — bu boşluk doldurulmadan kodlanamaz.

**Hızlı hareketin bıraktığı seviye.** Order block ve likidite boşluğunun ham hali.

**Önceki günün tepe/dibi.** Çizip fiyatın tepkisine bakmak. Basit, ölçülebilir, ve klasik pivot noktası mantığının aynısı. **Ve videodaki USD/CHF örneği bunun için iyi bir çalışma:** üç ardışık günde de önceki günün seviyesi tepki üretmiş.

**Haftalık tepe/dip hangi gün ve hangi seansta oluşuyor.** Bir istatistik toplama önerisi ve gerçekten test edilebilir bir soru — elindeki veriyle bir saatte cevaplanır.

#### Çalışma disiplini — burada gerçek değer var

Dört zaman dilimi, her biri için belirli bir veri aralığı. Tek bir parite. Her gün seviyeleri işaretle, günlük tut, ve **analiz grafiği ile işlem grafiğini ayrı tut.**

Bunlar metottan bağımsız, sağlam alışkanlıklar. Özellikle ikisi:

- **"Şu an fiyatı tahmin etmeye çalışma."** Yeni başlayana verilecek en iyi tavsiyelerden biri — ve videonun kendi vaadiyle çelişiyor.
- **"Analizine âşık olma; gerçek zamanlı fiyat beklentine uymuyorsa kenara çekil."** Dürüst bir uyarı.

#### Yanlışlanamaz kısımlar

**"Kurumsal emir akışı dışında bir şeyle para kazandıysan, o tesadüftü."** Tüm alternatif yöntemleri baştan geçersiz ilan ediyor, hiçbir kanıt gerektirmiyor. Aynı mantıkla bu metotla kazanılan para da tesadüf olabilir — ama o ihtimal hiç dile getirilmiyor.

**"Bildiğin her şeyi unut, sıfırdan başla."** Karşılaştırma zeminini kaldırıyor. Bir metodun kendisini başka hiçbir şeyle kıyaslanamaz hale getirmesi, ikinci videodaki kimlik değişimi talebinin devamı.

**"%90 kaybediyor" istatistiği.** Yaygın bir rakam ama kaynağı belirsiz; broker açıklamalarındaki oranlar ülkeye ve döneme göre önemli ölçüde değişiyor.

**Merkez bankası anlatısı.** İsviçre Frangı örneği gerçek bir olay (2015'te tavanın kaldırılması), ama oradan "bankalar fiyatı istedikleri yere koyabilir" sonucu çıkmıyor. Bir merkez bankasının kendi para birimine müdahale edebilmesi ayrı; günlük fiyat hareketlerinin merkezi bir motor tarafından üretilmesi bambaşka bir iddia.

#### Ölçülebilirlik

**Ölçülebilir** — ama kurulum olarak değil, **veri toplama protokolü** olarak. Videonun beş işaretleme maddesinin dördü mekanik; ikincisi ("ne kadar süre test edilmemiş") bir eşik gerektiriyor ve o eşik kenarda.

#### Aklında tutulacak çelişki

"Not al, tahmin etme" tavsiyesi ile "8. ayda ne olacağını bileceksin" vaadi aynı seride, birkaç dakika arayla. İlerleyen videolarda hangisinin kazandığına bak.
:::

---

## Video 4 — Denge ve indirim (alım tarafı)

::: ders
**DERS**

Serinin en somut kurulumu. Baştan sona kodlanabilir.

#### Sorulan soru

*"Bir trader piyasanın yükseleceğine inanıyorsa, bu inancı ne çerçeveler?"*

Videonun cevabı: **hareket.** Alıcı olmak için, senden daha büyük cebi olan birinin fiyatı yukarı taşımaya istekli olması gerekir. Ve o istek, **impuls hareketinde** görünür.

#### Impuls fiyat hareketi (displacement)

**Tanım.** Belirgin, hızlı, tek yönlü bir fiyat bacağı. Videonun terimi: *"displacement"* — çok parası olan birinin piyasaya girip fiyatı taşıma konusunda güçlü bir inanç göstermesi.

**Videonun mekanizma anlatısı.** Bankalar dipte uzun pozisyon **biriktirir**, sonra fiyatın yükselmesine izin verir. Alıcı buldukça daha yüksekten teklif ederler. Pozisyonları fonlandığında, **çıkabilecekleri yer ararlar** — ve orası eski bir tepenin üstüdür, çünkü orada fon seviyesinde alım stopları vardır.

#### Salınım tepesi (swing high) — mekanik tanım

**Tanım.** Bir mumun **solunda daha düşük bir mum, sağında daha düşük bir mum.** Ortadaki en yüksek olan.

**Onay kuralı — dördüncü mum.** Video net bir sayım veriyor:

> *"Bir tepe oluştuğunda **dört muma** ihtiyacın var. Solda bir mum, ortada en yüksek olan, sağda daha düşük bir mum — bu salınım tepesidir. Sonra **dördüncü mumun** en yüksek mumdan daha aşağıda olması gerekiyor. Bu olduğunda fiyatın dengeye inmesini beklemeye başlarsın."*

#### Değerleme prosedürü — adım adım

1. **Impuls bacağını bul** — dipten tepeye belirgin, hızlı hareket
2. **Salınım tepesini bekle** ve **dördüncü mumun** aşağı hareket ettiğini gör
3. **Fibonacci'yi dipten tepeye çek**
4. **%50 = denge (equilibrium)** — adil piyasa değeri
5. **%50'nin altı = indirim (discount)**
6. Fiyat dengeye ya da altına gelene kadar **hiçbir şey yapma**
7. Gelince, **alt zaman dilimine in** ve alım fırsatı ara
8. **En yüksek olasılıklı bölge: %62 – %79 arası**, tatlı nokta **%70.5** — buna **optimal trade entry (OTE)** deniyor
9. **Stop:** impuls bacağının başladığı dibin altında
10. **Çıkış:** önceki bir tepenin üstünde — ama tepeye **tam ulaşmadan** önce

#### Videonun kilit kuralı

> *"En iyi alımlar dengede ya da altında gelir. Dengenin **üstünden** alamazsın. Bankalar prim seviyelerinden almaz — gelmezler, yapmazlar."*

Ve indirimin süresine dair iddia: *"Piyasa dengenin altında çok zaman geçirmez. Özellikle arkadaki bağlam boğaysa, oradan çok dinamik bir hareketle uzaklaşır."*

Videonun benzetmesi: *"Markette 10 dolarlık biftek 8.50'ye düşmüşse, bu bir indirimdir."*

#### Turtle soup entegrasyonu

Video, kayıp senaryosunu ayrıca ele alıyor:

> *"Dengenin altına inip Fibonacci seviyesini de patlatırsa ve stop yersen — **az önce patlattığı dibi bul** ve alım sinyalini orada bekle. O zaman gerçekten derin bir indirimden almış olursun."*

Ve gerekçe: *"Boğa piyasasında fiyat eski bir dibin altına iniyorsa, o genellikle bir stop koşusudur."*

#### Çıkış kuralı

> *"Piyasa yapıcılar ve akıllı para uzun pozisyonlarını **eski tepelerin üstünde** dağıtır. En eski tepe olmak zorunda değil. Bir tepe oluşturduklarında, sadece fiyatın geri çekilmesine izin verirler ki o tepenin üstünde stoplar birikebilsin — likiditeyi böyle mühendislerler."*

Ve önemli bir sınırlama: *"Herkesin çıkışı yakalamasını beklemiyorum. Piyasa sana iki şans verdi — ilkini kaçırdıysan ikincisi geldi. Üçüncüsünü beklemek açgözlülüktür."*

#### Örneklerin çözümü — USD/CHF günlük

Video bir günlük grafikte aynı prosedürü art arda uyguluyor:

**Birinci uygulama.** Impuls bacağı, salınım tepesi, dördüncü mum, denge. Fiyat dengeye iniyor, tepki veriyor, yükseliyor ve **eski bir tepeyi kırıyor.** Sonra tekrar satılıyor.

**İkinci uygulama.** Yeni tepe ile **aynı eski dip** kullanılarak Fib yeniden çiziliyor — çünkü o dip hâlâ kırılmamış. Fiyat dengeye ve altına iniyor, **%62–%79 OTE bölgesine** geliyor. Oradan dinamik bir hareketle uzaklaşıp **eşit tepeleri** temizliyor.

Sayı: **0.9550** civarından alım, **0.9850** civarındaki eşit tepelere kadar → **~300 pip.**

**Üçüncü uygulama.** Video bir kayıp gösteriyor: fiyat dengenin altına iniyor, sonra eski dibi de kırıyor ve stop alıyor. Ama o dip kırılması bir **turtle soup** — hemen dönüp yükseliyor. *"Bu senin işlemlerinde de olacak. Kayıp alacaksın."*

**Dördüncü uygulama — derin indirim + order block.** Fiyat impuls bacağının derin bir geri çekilmesine iniyor. **Dipteki ardışık iki düşüş mumu** var; bullish order block **üstteki mumun tepesinden** başlıyor. Fiyat oraya geliyor → alım. Çıkış: yukarıdaki bir **yükseliş mumunun dibi** = bearish order block. **~175 pip.**

**Beşinci uygulama — 1 saatlik grafik.** Video aynı prosedürü bir saatlikte tekrarlıyor ve şunu gösteriyor: kurulum zaman diliminden bağımsız. Bir örnekte çıkış tam olarak **97.68**'e denk geliyor — bir mumun açılışı 97.68, hedeflenen mumun tepesi de 97.68.

**Ve son bir gözlem:** *"Gün içi fiyat hareketi **10'lu kademelerde** hareket eder — bir tepenin 10 ya da 20 pip üstüne kadar uzanırlar. Stop koşuları böyle olur."*
:::

::: eleme
**ELEME**

Serinin en somutu. İlk kez baştan sona kodlanabilir bir kurulum var — ve o kurulumun tamamı klasik bir tekniğin yeniden adlandırılması.

#### Yazılabilir iddia — tam kurulum

Yukarıdaki 10 adım. Tanımlar net, adım sayısı sınırlı, sonucu bilmeden yazılabilir. Kodlanabilir.

**Ve dördüncü mum kuralı gerçekten değerli** — çünkü "geri çekilme başladı" kararını mekanikleştiriyor. Seride bu türden az sayıda kural var.

#### Ama bu ne?

**Klasik Fibonacci geri çekilme işlemi.** %61.8 ve %78.6 seviyeleri onlarca yıldır standart; %70.5 ikisinin ortası. Tek "yeni" katkı, dördüncü mum kuralı ve terminoloji: geri çekilme → "indirim", %50 → "denge", geri çekilme bölgesi → "optimal işlem girişi".

Videonun kendisi de bunu kabul ediyor: Fibonacci'de sihir yok, sadece aralığın neresinde olunduğunu görselleştiriyor. Bu doğru — ve tam olarak "yeniden adlandırma" tanımının kendisi.

#### Kritik eksik: yön

Kurulumun tamamı şu ön koşula bağlı: **"eğer piyasa yükseliş yönündeyse."**

Ama yönün nasıl belirleneceği bu videoda **yok** — ileriye erteleniyor. Ve kurulumun tüm çalışması o ön koşula bağlı: yön yanlışsa her indirim seviyesi düşmeye devam eder.

Yani ölçülebilir görünen kurulum, aslında ölçülemez bir girdiye dayanıyor. Sistemin ağırlık merkezi hâlâ tanımsız.

#### İkinci kritik eksik: Fib nereye çekilecek

Video bunu kendi örneğinde gösteriyor ama fark etmiyor: ikinci uygulamada **Fib yeniden çiziliyor** — yeni tepeye ama eski dibe. Gerekçe: *"o dip hâlâ kırılmadı."* Bu bir kural gibi duruyor ama tam değil: birden fazla kırılmamış dip varsa hangisi seçilecek?

#### Yanlışlanamazlık — burada incelmiş

**"%50'ye gelmezse işlem yok, sorun değil."** Kaçırılan hareketler sayılmıyor. Sadece gelen kurulumlar sayılırsa, seçici hafıza otomatik devreye girer ve performans ölçülemez hale gelir.

**"Dibi kırarsa turtle soup'tur, dön ve al."** Kayıp senaryosunu kazanç senaryosuna çeviren bir kural. Stop yendiğinde "aslında sinyal buydu" denebiliyor. Sistem her iki sonuçta da haklı çıkıyor — yanlışlanabilirlik tam burada kayboluyor.

**İki kayıp gösteriliyor** ve bu dürüst bir hareket. Ama kazançlar pip cinsinden sayılıyor (300, 400, 175), kayıplar sayılmıyor. Net sonuç hiç hesaplanmıyor.

**"Doğru çıkışı seçmediysen açgözlüsün."** Çıkış kuralı iki farklı örnekte iki farklı tepeye göre uygulanıyor. Hangisinin doğru olduğu sonradan belli oluyor — bu kural değil, yorum.

#### Ölçülebilirlik

**Kısmen.** Çekirdek (impuls tespiti, dördüncü mum, %50, %62-79, stop, hedef) tamamen mekanik. Ama **merkezde iki tanımsızlık var:** yön ön koşulu ve Fib'in çekileceği aralık. İkisi de kenarda değil, merkezde.

#### Senin range projenle doğrudan çelişki

Bu kurulum, kapattığın range sisteminin **tam tersi** bir konumlanma öneriyor.

| | Aralığın ortası | Kenarlar |
|---|---|---|
| **Senin sistemin** | Yasak bölge | İşlem burada |
| **Bu video** | Tek meşru alım bölgesi | Alım yasak |

İkisi de aynı yapıya bakıyor, tam zıt kural çıkarıyor, ve ikisi de kendi içinde mantıklı geliyor. Bu tek başına, kuralların ölçülmeden neden hiçbir şey ifade etmediğinin en net örneği.

#### Not

**Ölçmeye değer:** "10'lu kademe" iddiası. *"Fiyat bir tepenin 10 ya da 20 pip üstüne uzanır"* — tamamen mekanik, tek bir sorguyla ölçülür, ve sweep derinliği hakkında somut bir hipotez.
:::

---

## Video 5 — Denge ve prim (satış tarafı)

::: ders
**DERS**

Dördüncünün aynası, ve video bunu açıkça söylüyor: *"Burada anlatılan her şey, denge-indirim dersinde beklediğinin tam zıddı."*

#### Prim tanımı

**Prim (premium):** mevcut fiyat aralığının **%50'sinin üstü.** Fib, **tepeden dibe** çekilir; fiyat orta noktanın üstüne çıkarsa piyasa prime girmiştir.

Videonun vurgusu: *"Aşırı alım/aşırı satım göstergesine ihtiyacımız yok. Sadece hangi aralıkta işlem gördüğümüzü bilmemiz yeterli — %50'nin üstündeysek aşırı alım bölgesindeyiz."*

#### %50 tartışması

Video burada bir pozisyon alıyor: *"Başka disiplinler %50 geri çekilme seviyesinin iyi bir işlem seviyesi olduğunu söyler. **Katılmıyorum.** Bazen çalışacağını anlıyorum, ama ben **prim** seviyesinden satmak istiyorum."*

Yani %50 yeterli değil; **%62 – %79** aranıyor.

#### Prosedür — adım adım

1. **Impuls düşüş bacağını bul**
2. **Salınım dibini bekle.** Video burada **üç mum** diyor: *"Bir mum dip, solunda daha yüksek, sağında daha yüksek. Williams fraktalını kullanmıyorum çünkü o beş mum ister — bana üç yetiyor."*
3. Ve dördüncü mumun **yukarı** hareket etmesini bekle
4. **Fib'i tepeden dibe çek**
5. **%50 = denge.** Üstü prim.
6. Fiyatın **%62 – %79** bölgesine çıkmasını bekle
7. **Sat.** Stop, impuls bacağının tepesinin üstünde
8. **Çıkış: önceki bir salınım dibinin altında.** Video pratik bir ekleme yapıyor: *"O dibin **10 pip altını** hedefle."*

#### Turtle soup entegrasyonu — satış tarafı

Videonun en somut ek kuralı:

> *"Piyasa dengenin üstüne çıkıp %62–79 seviyelerini de geçerse, **eski bir tepeyi de kırıyorsa** — bu bir turtle soup satışıdır. Impuls bacağının tepesinin üstündeki stoplara uzanıyor. Prim bölgesinde eski bir tepenin üstünde stop koşusu: olasılıklar açısından çok, çok iyi."*

#### Fib'in nereye çekileceği — video bunu açıkça tartışıyor

Bu videoda seçim problemi açıkça görünür hale geliyor. Video birkaç kez aynı şeyi yapıyor: bir aralıkla ölçünce sinyal yok ya da stop var; **fib'i başka bir tepe-dip çiftine taşıyınca** mükemmel bir giriş çıkıyor.

Videonun kendi ifadesi: *"Bu tepeye değil bu tepeye çekiyorum çünkü **etrafında daha çok fiyat hareketi var.**"* Ve başka bir yerde: *"Eğer fib'ini bu tepeye bu dibe sabitlemeseydin bu optimal trade entry'yi hiç görmezdin."*

Videonun verdiği tek seçim ölçütü: *"Belirgin, temiz bir fiyat bacağı olmalı. Dağınık görünüyorsa, şüpheli görünüyorsa kullanma."*

#### Örneklerin çözümü — USD/CHF

Video art arda birkaç uygulama gösteriyor:

**Kaçırılan fırsatlar.** İlk iki impuls bacağında fiyat %50'nin üstüne hiç çıkmıyor — dolayısıyla işlem yok. *"Bazen piyasa bu senaryoyu sana vermez, o bacakları sensiz bırakırsın."*

**İlk gerçek kurulum.** Fiyat dengeyi geçiyor, OTE bölgesine giriyor, orada stop yiyor (fiyat biraz daha yükseliyor). Sonra impuls tepesinin üstündeki stopları alıp aşağı dönüyor.

**Kayıp serisi — dürüst gösterim.** Video arka arkaya üç stop gösteriyor: *"Bu senin işlemlerinde olacak, kaçınmaya çalışma."*

**Başarılı kurulum.** Prim bölgesinde satış, çıkış bir salınım dibinin altında. **0.98** civarından satış, **0.9694**'e kadar → **100 pipin üstü**, günlük grafikte.

**Bearish order block ile birleşim.** Bir uygulamada giriş, %62 seviyesine denk gelen bir **yükseliş mumunun dibine** oturuyor — yani bearish order block. *"Bu tek başına da bir satıştır."*

**Sayısal örnek.** Satış ~**0.98**, hedeflenen salınım dibi **0.9739**, çıkış o dibin 10 pip altı = **0.9729**. → **70 pip.**

**1 saatlik uygulama.** Aynı prosedür saatlikte: satış **0.9770**, salınım dibi 42 pip aşağıda, bir sonraki dip 60 pip aşağıda, 10 pip payla → **70 pip.**

#### Videonun yön hakkındaki iddiası — dördüncüyle çelişen kısım

> *"Güzel olan şu: **bir yön eğilimiyle işlem yapmana gerek yok.** İnsanlar hep 'bana günlük yön ver' diye soruyor. Bilmene gerek yok. Bilmene gerek yok, çünkü **aralığın içinde işlem yapmayı** bilmen gerekiyor — ve o aralıklar her zaman oradadır. Trend piyasasında da, konsolidasyonda da, dönüş piyasasında da."*

Ve konsolidasyon için özel tavsiye: *"Uzun süreli bir çekişme durumunda, yukarı aşağı gidip duran, tek yönde gerçek hareket olmayan bir piyasada — **turtle soup ya da prim/indirim işlemi senin ana aracındır.**"*
:::

::: eleme
**ELEME**

Dördüncünün aynası. Yeni bilgi az, ama **iki önemli itiraf** var.

#### Yazılabilir iddia — simetrik kurulum

Impuls düşüş bacağı → salınım dibi + dördüncü mum → Fib tepeden dibe → **%50 üstü = prim bölgesi** → giriş %62–79 → stop bacağın tepesi üstünde → çıkış önceki bir dibin **10 pip altında**.

**Ve çıkış kuralı burada dördüncüden daha iyi:** "dibin 10 pip altı" mekanik bir sayı; dördüncü videodaki "tepeye tam ulaşmadan çık" ifadesi değildi.

Ek not: dördüncüde salınım tespiti için **dört mum** deniyordu, burada **üç mum** deniyor. Aynı serinin iki videosunda tanım değişiyor — ölçülmemiş bir kuralın işareti. Ölçülmüş olsaydı hangisinin doğru olduğu bilinirdi.

#### Birinci itiraf: yön gerekmiyormuş

Dördüncü videonun tüm kurulumu "eğer piyasa yükselişteyse" ön koşuluna bağlıydı ve yön tanımı ileriye erteleniyordu. Burada tam tersi söyleniyor: yönü bilmene gerek yok, aralık içinde işlem yaparsın, aralıklar her zaman vardır.

Ya yön kritik bir girdi (4. video) ya da değil (5. video). İkisi birden olamaz — ve hangisinin doğru olduğu ölçülmediği için bilinmiyor.

#### İkinci itiraf: kayıplar

İlk kez arka arkaya stoplar gösteriliyor: bir kurulum stop, sonra tekrar, sonra tekrar. Ve dürüst bir cümle var — bu senin işlemlerinde de olacak, kaçınmaya çalışma.

Ama yine net sonuç yok. Kazançlar sayılıyor (100, 70, 42 pip), kayıplar sayılmıyor. Üç stop + bir 70 pip kazanç, tipik bir stop mesafesinde net negatiftir. Bu hesap hiç yapılmıyor.

#### Yeni yanlışlanamazlık kalıbı: Fib nereye çekilecek?

Bu video, öncekilerde örtük olanı açıkça gösteriyor: **Fibonacci'nin hangi tepe ve dibe çekileceği bir seçimdir.** Videoda birkaç kez şu oluyor — bir aralıkla ölçülünce sinyal yok ya da stop var; başka bir aralıkla ölçülünce mükemmel giriş çıkıyor.

Ve bunun kuralı yok. *"Etrafında daha çok fiyat hareketi olan"*, *"belirgin ve temiz görünen"*, *"en son oluşan"* gibi ifadeler kullanılıyor — hepsi sonradan seçilebilir kriterler.

Bu, metodun ölçülemez olmasının asıl sebebi. Bir kurulumun kodlanabilmesi için Fib'in nereye çekileceğinin de kodlanabilir olması gerekir. Burada o kısım yoruma bırakılmış, ve yoruma bırakılan kısım sonucu doğrudan belirliyor.

#### Ölçülebilirlik

**Ölçülemez.** Çekirdek adımlar mekanik ama merkezî bileşen — hangi tepe-dip çiftinin aralığı tanımlayacağı — tanımsız, ve sonucu doğrudan o belirliyor. Kenarda değil, merkezde.

**Ama kapatılabilir.** Bir kural koyarsan (ör. "son N mumun en yüksek tepesi ve en düşük dibi") tam mekanik olur. O zaman ölçtüğün şey, senin tanımın olur — videonun değil.
:::

---

## Video 6 — Adil değerleme (fair value)

::: ders
**DERS**

#### İki farklı "adil değer"

Video baştan ayırıyor:

1. **Denge (equilibrium)** — bir tepe ile dip arasındaki eşit uzaklık noktası. Geometrik.
2. **Piyasa yapıcının adil değeri** — akıllı paranın pozisyon **biriktirmek** ya da **dağıtmak** için makul bulduğu fiyat. İşlevsel.

Ve videonun asıl mesajı: *"Adil değer, perakendenin gördüğü adil değer değil. **Piyasa yapıcının** likidasyon ya da birikim yapabileceği yerdeki adil değerdir."*

#### Fair value gap — ilk net tanım

**Tanım.** Üç mumluk bir yapı:

- Ortada büyük, tek yönlü, hızlı bir mum
- **Birinci mumun tepesi ile üçüncü mumun dibi** arasında kalan, hiç ters yönlü hareket görmemiş aralık

Videonun ifadesi (düşüş yönü için): *"Bu yükseliş mumu ile şu yükseliş mumu arasındaki aralık. Neden önemli? Çünkü o dibin kırılışı ile bu mumun tepesi arasında **hiç yükseliş hareketi olmadı** — hepsi düz aşağıydı. Orada hiçbir şey doldurulmadı, açık kaldı. Bir gap gibi."*

**Ölçüm tercihi:** *"Ben **gövdelerle** tanımlamayı seviyorum."*

**İddia:** fiyat sonradan o boşluğu doldurmaya döner.

#### Likidite boşluğu ile farkı

Video ikisini ayrı ele alıyor:

| | Tanım |
|---|---|
| **Likidite boşluğu** | Büyük aralıklı, çok az fitilli, çok hızlı bir hareketin bıraktığı geniş alan. *"Hız ve büyük aralık — onu tanımlayan bu."* |
| **Fair value gap** | Üç mumluk kesin geometri: iki ters yönlü mum arasındaki dokunulmamış aralık |

#### Yön belirleme kuralı — videonun somut katkısı

Fiyat dengede ve iki yöne de gidebilir. Videonun cevabı:

> *"En son **piyasa yapısı** nerede kırıldı? Bir salınım tepesi mi kırıldı, bir salınım dibi mi? Kırılan taraf, en olası yönü verir."*

Bu, seride ilk kez verilen mekanik bir yön ölçütü.

#### Örneğin çözümü — AUD/USD, 24 Eylül 2016 haftası

Video bir haftalık hedefi ve nasıl kurulduğunu anlatıyor. Hedef: **0.7665.**

**1. Ana aralığı belirle.** Bir tepe ve bir dip. Fiyat şu an bu aralığın **alt üçte birinde** — yani derin indirim.

**2. Likidite boşluğunu bul.** Tepeden aşağı hızlı, geniş aralıklı, fitilsiz bir hareket var — bu bir likidite boşluğu. İçinde iki **fair value gap** var: aşağı hareketten önceki ve sonraki yükseliş mumlarının arasındaki aralıklar.

**3. Dengeyi bul.** Küçük bir konsolidasyonun tepe-dip ortası. Fiyat orada çok vakit geçiriyor.

**4. Yönü belirle.** *"Burada anlamlı bir salınım dibi yok, ama yukarıda kırılan bir salınım **tepesi** var."* → yön yukarı.

**5. Order block'u bul.** Kırılan salınım tepesine giden hareketten hemen önceki **düşüş mumu** = bullish order block. Ve fiyat oraya **tam denge noktasında** dönüyor — iki referans üst üste biniyor.

**6. Üç örtüşen gerekçe:**
- Ana aralığın alt üçte biri → derin indirim
- Küçük aralığın dengesi → adil değer
- Bullish order block → kurumsal alım bölgesi

**7. Hedefi belirle.** Yukarıda alım stopları var (eşit tepeler), ve doldurulmamış fair value gap var. Video: *"Asıl gitmek istediği yer o fair value gap. Ben **10 pip önce** çıkmak istiyorum."*

Sayı: aradaki mumun dibi **0.7675**; hedef **0.7665** olarak veriliyor. Fiyat o hafta o seviyeyi vuruyor.

#### Piyasa yapıcının döngüsü — videonun modeli

1. **Birikim (accumulation):** derin indirimde, dengede, order block'ta uzun pozisyon topla
2. **Yeniden birikim (re-accumulation):** konsolidasyonda ekle
3. **Dağıtım (distribution):** doldurulmamış boşluklarda ve eski tepelerin üstünde sat

Videonun vurgusu: *"Fiyat o boşluğun içinde ileri geri ne kadar çok gidip geliyor, o fitillere bak — **satıyorlar, satıyorlar, satıyorlar.** Aşağıda biriktirdikleri her şeyi."*

#### Kapanış formülü

> *"Piyasa **satış stoplarından alım stoplarına**, **alım stoplarından satış stoplarına** hareket eder. Ve **adil değerden indirime, indirimden prime, primden adil değere.** Bu üç referans noktası arasında gidip gelir. Şu an neredeyiz — indirimde mi, primde mi, adil değerde mi?"*
:::

::: eleme
**ELEME**

Bir yeni yazılabilir tanım, ve metodun ölçülemezliğini en açık gösteren an.

#### Yazılabilir iddia — Fair Value Gap

İlk kez net tanımlanıyor: art arda üç mumda, **birinci mumun tepesi ile üçüncü mumun dibi arasında kalan boşluk** — arada hiç ters yönlü hareket olmamış bir fiyat aralığı. Video gövdelerle ölçmeyi tercih ediyor.

İddia: fiyat sonradan o boşluğu doldurmaya döner.

Tanım mekanik ve kodlanabilir. Ama bunun **fiyat boşluğu doldurma** fikrinin yeni bir adı olduğunu bilerek not al. Hisse senetlerinde "gap fill", genel teknik analizde "dengesizlik" olarak onlarca yıldır var, akademik olarak da incelenmiş — sonuçlar karışık, tutarlı bir edge gösteren güçlü kanıt yok.

#### İkinci yazılabilir iddia — yön için yapı kırılımı

*"En son hangi taraf kırıldı — salınım tepesi mi dibi mi?"* Bu, **seride ilk kez verilen mekanik yön ölçütü**, ve dördüncü videonun tanımsız bıraktığı boşluğu kısmen dolduruyor.

Tamamen kodlanabilir ve tek başına ölçülebilir: *son kırılan yapı noktasının yönü, sonraki N mumun getirisini öngörüyor mu?*

#### Ölçülemezliğin en net anı

Bu videodaki bir bölüm, önceki beş videoda söylenenlerin en somut kanıtı:

Aynı grafikte, aynı anda, **dört farklı aralık** çiziliyor. Sonuç: fiyat aynı anda hem primde hem indirimde. Büyük aralığa göre derin indirim, küçük aralığa göre prim bölgesi.

Ardından şu deniyor: perakende yatırımcı burada satış görür, ama o yanlış — çünkü aslında alım bölgesi.

**Bu bir kural değil.** Hangi aralığın "gerçek" olduğunu seçme işlemi, ve o seçimin kuralı yok. Fiyatın nereye gittiği görüldükten sonra hangi aralığın doğru olduğu belli oluyor. Bir sistemin backtest edilemez olmasının tanımı tam olarak budur.

#### Geriye dönük "tahmin"

Video, o hafta 0.7665 hedefinin verildiğini ve tutturulduğunu söylüyor. Ama gösterilen her şey **sonuç bilindikten sonra** çizilmiş. Tahminin kaydı yok, kaç tahminden kaçının tuttuğu yok.

Bir tahminin değeri tek bir doğru örnekte değil, **tüm tahminlerin kaydında** ölçülür. Kayıt olmadığında bir isabet hiçbir şey kanıtlamaz.

**Ama bir şey kaydedilmeli:** hedefin türetilme yöntemi mekanik — doldurulmamış FVG'nin dibi, eksi 10 pip. O kural test edilebilir.

#### Anlatının kapanışı

Mekanizma açıklaması artık tam: bankalar dipte alır, yukarı iter, tepede perakendeye satar. Boşluklar onların ölçekli çıkış yaptığı yerlerdir.

Bu anlatı **her fiyat hareketini** açıklayabilir:

- Yukarı gitti → dağıtıyorlar
- Aşağı gitti → topluyorlar
- Yatay → kitap oluşturuyorlar

Hiçbir gözlem bu anlatıyı yanlışlayamaz. Yanlışlanamayan bir açıklama, açıklama değildir.

#### Ölçülebilirlik

**Ölçülemez** — videonun sunduğu haliyle. Aralık seçimi merkezde ve kuralsız.

**Ama iki bileşen ayrı ayrı ölçülebilir:** FVG tanımı (tamamen mekanik) ve yapı kırılımı yön ölçütü (tamamen mekanik). İkisi de üçüncü bileşenden — aralık seçiminden — bağımsız test edilebilir.
:::

---

## Video 7 — Yüksek ve düşük dirençli likidite koşuları

::: ders
**DERS**

#### Likiditenin tanımı

Video standart tanımla açıyor: *"Likidite, bir varlığın fiyatını dramatik biçimde etkilemeden ne kadar hızlı alınıp satılabildiğidir."*

Sonra ICT çevirisi: **likidite = alım emirleri ve satış emirleri.**

#### Likidite nerede birikir — mekanizma

Videonun akıl yürütmesi:

**Alım likiditesi (buy stops) eski tepelerin üstünde.** Neden: bir salınım tepesi oluştu ve fiyat aşağı gitti. Orada **kısa** pozisyon açan biri var, ve pozisyonu kârda. Fiyat geri dönerse kârı erir; **o tepenin üstünde** stop emri vardır. Piyasa o emir kümesine geri dönmeye ilgi duyar.

**Satış likiditesi (sell stops) eski diplerin altında.** Aynısının tersi: dipte **uzun** pozisyon açanlar var, stopları o dibin altında.

Videonun sonucu: *"Formasyon uğruna formasyon aramıyoruz. **Mevcut emirlerin nerede olduğuna** bakıyoruz."*

#### Ana fikir — direnç sayımı

Bu, ayın en özgün yapısal fikri.

**Soru:** fiyatın hedeflenen bir likidite kümesine ulaşması ne kadar kolay?

**Cevap:** aradaki yolda kaç eski tepe ve dip var.

| | Tanım | Ne yapılır |
|---|---|---|
| **Yüksek dirençli likidite koşusu** | Hedefe giden yolda çok sayıda eski tepe ve dip var | **İşlem alma.** En düşük olasılıklı koşul |
| **Düşük dirençli likidite koşusu** | Yolda çok az yapı var — hızlı, tek yönlü, geri çekilmesiz bir hareket bırakılmış | **İşlem burada.** En kolay koşul |

#### Yüksek dirençli koşu — videonun anlatımı

Fiyat bir tepeden düşmüş ve inişte **çok sayıda tepe ve dip** bırakmış. Şimdi o eski tepeye geri dönmek istiyor.

> *"Oraya varmak için çok fazla dirençle karşılaşması gerekiyor. Eski dipler standart direnç olarak, eski tepeler de alım stopu likiditesi olarak duruyor. Yukarı gidecek olsa bile, o tepede duracağını nereden bileceğiz? Bir kademe daha yukarı gidebilir, bir tane daha..."*

**Ve önemli bir ek:** bu tür seviyeler **iyi savunulur.** Videonun cümlesi: *"Bunu kıracak şey çok keskin bir ekonomik veri — tarım dışı istihdam ya da FOMC gibi. O tür bir volatilite enjeksiyonu olmadan bu eski tepeler genellikle iyi savunulur."*

#### Düşük dirençli koşu — sınırlarının mekanik tanımı

Videonun en değerli kısmı, çünkü bölgenin başlangıcı ve bitişi **kesin** tanımlanıyor:

1. Fiyat bir tepeden **hızla, tek yönlü, çok az geri çekilmeyle** düşer
2. Bu iniş sırasında bir **eski dibi kırar** — bu, bölgenin **üst sınırıdır**
3. İnişe devam eder, bir dip yapar, geri çekilir, daha yüksek bir dip yapar
4. Sonra bir **kısa vadeli tepeyi yukarı kırar** — bu, bölgenin **alt sınırıdır**
5. Bu iki sınır arasındaki alan **düşük dirençli** bölgedir

**Bölgenin içinde ne yapılır:**

> *"Her yeni kısa vadeli tepe oluştuğunda, onun üstünde alım stopu likiditesi oluşur. Geri çekilmeden sonra bir alım sinyali alırsan, o hareketin yukarı gitmesi için **çok az direnç** vardır."*

**Bölge nerede biter:**

> *"Kırılan o eski dibe geri yaklaştığında **yüksek dirençli koşu** başlar. Olasılıklar dik biçimde düşer."*

#### Ters yön — satış tarafı

Video aynısını simetrik veriyor: konsolidasyon → yukarı expansion → bir **kısa vadeli tepe** kırılır (bölgenin alt sınırı) → hızlı bir yükseliş → bir **eski dip** kırılır (bölgenin üst sınırı). Bu iki nokta arasında her geri çekilme yeni bir satış fırsatı; her kısa vadeli dibin altında satış stopu likiditesi var.

#### Rejim okuması — videonun pratik çıkarımı

Video bunu bir yön tespit yöntemine bağlıyor:

> *"Uzun vadeli bir tepe solunda duruyorsa ve piyasa her seferinde bir dibi **tereyağından kıl çeker gibi** kırıyorsa — eşit dipler kırılıyor, kısa vadeli dipler kırılıyor — eğilim ayı yönlüdür. **Her ralli yüksek dirençli, her düşüş düşük dirençli koşudur.**"*

Ve tersi: *"Piyasa bir dip yapmışsa ve her geri çekilme çok sert dirençle karşılaşıyorsa, dipler savunuluyor demektir. Odağını tepelere ver — her kısa vadeli tepe kolay kırılır."*

#### Videonun kapanış kuralı

> *"Bir seviyenin etrafında ne kadar çok fiyat hareketi varsa, o seviye **kurumsal fiyat modelinde savunuluyor** demektir. O seviyeden **uzağa** işlem yaptığında işin çok kolaylaşır."*
:::

::: eleme
**ELEME**

**Serinin en iyi videosu** — ve bunu söylerken önceki eleştirilerden geri adım atılmıyor. Fark net bir sebepten geliyor.

#### Neden bu farklı

Önceki videolar hep "şurada al" diyordu. Bu video ilk kez **"şurada alma"** diyor, ve gerekçesi yapısal.

İki bakımdan farklı:

**Sayılabilir.** Hedef ile mevcut fiyat arasındaki salınım noktalarını sayabilirsin. Yorum gerektirmiyor, bir sayı çıkıyor.

**Bir şeyi yasaklıyor.** "Bu koşulda long arama" diyor. Yanlışlanabilir bir kısıt — ölçtüğünde ya diğerinden kötü performans gösterir ya göstermez.

#### Yazılabilir tanımlar

**Direnç sayımı:** mevcut fiyat ile hedeflenen eski tepe/dip arasında kaç salınım noktası var. Az → düşük dirençli, çok → yüksek dirençli.

**Düşük dirençli bölgenin sınırları:** kırılan eski dip (üst sınır) ile kırılan kısa vadeli tepe (alt sınır) arasında kalan alan. Bu aralık içinde her geri çekilme yeni bir fırsat; aralığın dışına çıkınca koşullar zorlaşıyor.

**Ve bu tanım gerçekten kesin.** İki sınır da grafikte belli olan olaylara bağlı — "kırılan eski dip" ve "kırılan kısa vadeli tepe". Seçim yok.

Kritik fark: **hedef seçimi burada yoruma bağlı değil.** Eski tepe/dip zaten grafikte belli. Önceki videolardaki "hangi aralığı seçeceğim" problemi burada yok.

#### Klasik karşılığı

Fikir yeni değil: bir seviyeye giden yolda ne kadar çok işlem görmüş fiyat varsa, geçmek o kadar zordur. Hacim profili analizinde, Wyckoff'ta, ve "boşluklar hızlı geçilir, yoğun bölgeler yavaş" gözleminde aynı şey var.

Ama şu kabul edilmeli: bu, serideki diğer kavramlardan farklı olarak **gerçekten ölçülmüş bir olguya yakın.** Fiyatın az işlem gördüğü aralıkları hızlı geçmesi, mikroyapı literatüründe desteklenen bir gözlem.

#### Zayıf noktalar

**"Çok" ve "az" tanımsız.** Kaç salınım noktası yüksek dirençli sayılır? Kodlamak için bu eşiği sen koymak zorundasın — ve koyduğun an ölçtüğün şey senin eşiğin olur. **Ama bu kenarda bir tanımsızlık:** eşiği sabitleyip çekirdeği yine test edebilirsin.

**Kaçış kapısı:** "genelde zor, ama önemli bir haber gelirse geçer." Kural tutmadığında haber sebep gösterilebilir. **Ancak bu kaçış kapısı da ölçülebilir hale getirilebilir:** haber takvimini dışarıda bırakıp ölç.

**Yön varsayımı hâlâ dışarıda.** Düşük dirençli koşuyu tanımlamak için önce yapının yönünü bilmek gerekiyor. Ama altıncı videonun "son kırılan yapı" ölçütü bu boşluğu doldurabilir.

#### Ölçülebilirlik

**Ölçülebilir.** Tek tanımsız bileşen (direnç eşiği) kenarda ve varsayılan bir değerle sabitlenebilir. Çekirdek — bölge sınırları, likidite konumu, yasaklayıcı kural — tamamen mekanik.

**Ayın en test edilebilir fikri.**

#### Genel ders

Bir kural "nerede işlem al" yerine **"nerede işlem alma"** diyorsa, genellikle daha test edilebilirdir. Yasaklayıcı kurallar yanlışlanabilir; üretici kurallar sonradan yeniden yorumlanabilir.
:::

---

## Video 8 — Impuls hareketleri ve piyasa protraksiyonu

::: ders
**DERS**

#### İki kavramın ayrımı

**Impuls fiyat hareketi (impulse price swing).** Bir tepeden bir dibe, ya da bir dipten bir tepeye giden belirgin bacak. Zaman duyarlı **değil.**

**Piyasa protraksiyonu (market protraction).** Zaman duyarlı, **küçük** bir impuls hareketi. Belirli bir saatte oluşur ve **asıl yönün tersidir.**

Videonun formülasyonu: *"Aradaki fark, küçük impuls hareketine bir **zaman öğesi** uygulanmasıdır."*

#### Üç protraksiyon saati

Videonun verdiği tam liste (New York saati):

| Saat | Seans | Ne olur |
|---|---|---|
| **20:00** (0 GMT) | Asya | Küçük bir yukarı/aşağı hareket — video bunu **en az önemli** buluyor |
| **Gece yarısından sonra** | Londra öncesi | **Judas swing.** Ana protraksiyon |
| **07:00'den sonra** | New York öncesi | İkinci protraksiyon |

Videonun grafik talimatı: *"`Ctrl` + `Y` tuşuna basarsan 0 GMT için dikey çizgiler eklenir."*

#### Kuralın kendisi — ters yön kuralı

> *"Bu hareket o saatte gerçekleşirse: **yukarı giderse ters yönü düşün, aşağı giderse ters yönü düşün.** Piyasa yükseliyorken başlangıçta yukarı çıkarsa, bunu manipülasyon ya da protraksiyon olarak görürüz. **Amacı sadece manipülasyondur** — traderları piyasanın yanlış tarafına çekmek ya da likiditeye uzanmak."*

Ve zamanlama şartı üzerinde ısrar ediyor — üç kez üst üste tekrarlıyor: *"07:00'den **sonra** olması gerekiyor. 07:00'den sonra olması gerekiyor. 07:00'den sonra olması gerekiyor."*

#### Londra protraksiyonu — Judas swing

Videonun tanımı: *"Forex.com demo hesabında **4 GMT'den sonra**. Piyasa ayı yönlüyken bir yukarı hareket görürsek, bunu protraksiyon ya da **Judas swing** olarak görürüz — içine satış yapılacak sahte bir ralli."*

#### Örneklerin çözümü — gün gün

Video birkaç günü sırayla çözüyor. Her günün yapısı aynı:

**Gün A.** Gece yarısı mumundan hemen sonra fiyat **düşüyor** → protraksiyon. Aşağıdaki dipleri temizliyor, sonra yukarı dönüyor. New York'ta bir küçük ralli daha → ikinci protraksiyon. Sonra satış.

**Gün B.** Gece yarısından sonra fiyat **yükseliyor** → protraksiyon (Judas swing). Sonra aşağı dönüyor. 07:00'den sonra bir küçük ralli daha → protraksiyon. *"Bu, New York seansında alıcıları cezbedecek bir dip gibi görünür — ve sonra ters çevirirler."*

#### Diğer kavramlarla birleşim

Video kapanışta ayın kavramlarını üst üste koyuyor:

1. Bir **impuls düşüş bacağı** ölç (tepeden dibe)
2. Fiyat **dengenin üstüne** çıkıp **%62 geri çekilme** seviyesine gelsin → prim bölgesi
3. Bu, aynı zamanda bir **protraksiyon saatine** denk gelsin
4. **Sat.** Hedef: aşağıdaki eski diplerin altındaki satış stopları

Bir örnekte hedef **0.3255** seviyesi olarak veriliyor ve gerekçesi *"solda eski bir dip var."*

#### Videonun kapanış tavsiyesi

*"Seans işlemi ve seans alıştırmaları için bu kavramı bağlam olarak kullanabilirsin."*
:::

::: eleme
**ELEME**

#### Yazılabilir iddia — zaman bazlı sahte hareket

Günün üç belirli saatinde (New York gece yarısı, sabah 07:00, akşam 20:00) küçük bir impuls hareket olur ve **bu hareket asıl yönün tersidir.**

Kural açık: o saatlerden sonra fiyat yukarı giderse aşağıyı bekle, aşağı giderse yukarıyı.

**Serinin en kolay test edilebilir iddiası.** Saat sabit, yön kuralı sabit, yorum yok. Tek bir sorguyla ölçülür: o saat dilimlerindeki ilk hareketin yönü, sonraki birkaç saatteki yönle ters mi?

Forex için tasarlanmış; kriptoda 7/24 işlem var ama ölçmek yine mümkün.

#### Büyük sorun

"Küçük" impuls hareketin ne kadar küçük olduğu tanımsız. Ne kadar sürede, ne kadar hareket eder? "Asıl yön" nasıl belirleniyor?

Sonuç şu problem: **hareketin büyüklüğü tanımsızsa, gün içinde her iki yönde de küçük hareketler olur ve sonradan hangisinin "sahte" olduğu seçilebilir.** Videodaki örneklerde tam olarak bu yapılıyor — her günde ters yönde bir hareket bulunup işaretleniyor.

Yine de bu, tanımsızlıkların **en kolay kapatılabilenidir.** Bir eşik koyarsan (belirli bir zaman penceresinde, ATR'nin belirli bir katı) iddia gerçekten ölçülebilir hale gelir.

#### Ölçülebilirlik

**Kısmen.** Zaman bileşeni tartışılmaz — saat tek bir andır. Yön kuralı tanımlı. Tek eksik büyüklük eşiği, ve o kenarda: sabitleyip çekirdeği ölçebilirsin.

#### Not

**Ölçmeye değer, ve ucuz.** Elindeki veriyle bir saatte cevaplanır: *"00:00–01:00 New York arası ilk anlamlı hareketin yönü, 03:00–11:00 arası günlük yönle ters mi?"* İki sütunluk bir tablo.
:::

---

# BÖLÜM II — Sekiz videonun bütünü

## Ölçülebilirlik tablosu

| Video | Kavram | Değerlendirme |
|---|---|---|
| V1 | Dört durum ↔ dört araç eşlemesi | **Kısmen** (araç tanımları mekanik, seçim değil) |
| V2 | Günlük seans şablonu | **Ölçülebilir** |
| V3 | Çalışma protokolü (5 işaretleme maddesi) | **Ölçülebilir** |
| V4 | Denge/indirim + OTE kurulumu | **Ölçülemez** (yön ve aralık seçimi merkezde tanımsız) |
| V4 | Dördüncü mum kuralı, tek başına | **Ölçülebilir** |
| V5 | Denge/prim kurulumu | **Ölçülemez** (aynı sebep) |
| V6 | Fair value gap tanımı | **Ölçülebilir** |
| V6 | Yön için yapı kırılımı | **Ölçülebilir** |
| V6 | Fair valuation sistemi (bütün olarak) | **Ölçülemez** (aralık seçimi merkezde) |
| V7 | Yüksek/düşük dirençli likidite koşusu | **Ölçülebilir** |
| V8 | Zaman bazlı ters hareket | **Kısmen** |

**Sayım: Ölçülebilir 6 · Kısmen 2 · Ölçülemez 3**

Not: ayın **kurulum** olarak sunulan üç ana yapısının üçü de ölçülemez (V4, V5, V6). Ölçülebilir çıkanlar, o kurulumların **parçaları** ya da kurulumdan bağımsız gözlemler.

## Ölçülebilir çekirdek — 8 tanım

| Kavram | Klasik karşılığı |
|---|---|
| Liquidity sweep / turtle soup | Sahte kırılım, stop avı, Wyckoff spring |
| Order block | Hareketin başladığı mum bölgesi, arz/talep |
| Fair value gap | Fiyat boşluğu / dengesizlik, gap fill |
| Equal highs/lows | Çifte tepe/dip |
| Equilibrium (%50) | Aralık ortası, %50 geri çekilme |
| OTE (%62–79) | Klasik Fibonacci geri çekilme bölgesi |
| Yüksek/düşük dirençli likidite koşusu | Yapı yoğunluğu, hacim profili mantığı |
| Zaman bazlı sahte hareket | Seans etkileri |

Sekiz kavramın yedisinde net bir klasik karşılık var. **Görece özgün olan tek şey yedinci videodaki direnç sayımı** — hem sayılabilir, hem yasaklayıcı, hem de altındaki mekanizma makul.

## Sistemi ölçülemez kılan üç yapısal özellik

Bunlar kavramların kendisinde değil, **bir arada kullanılma biçiminde:**

**1. Aralık seçimi kuralsız.** Altıncı videoda aynı grafikte dört aralık çiziliyor; fiyat aynı anda hem primde hem indirimde. Hangisinin geçerli olduğu sonradan belli oluyor.

**2. Kayıp senaryosu sinyale çevrilebiliyor.** Stop yendiğinde "turtle soup"tur denip ters yönde giriş yapılıyor. Sistem her iki sonuçta da haklı çıkıyor.

**3. Kaçırılanlar sayılmıyor.** Sadece gerçekleşen kurulumlar anlatılıyor; kaç kurulumun gelmediği veya çalışmadığı hiç kaydedilmiyor.

Bu üçü birlikte, bir sistemin backtest edilemez hale gelmesinin tarifidir. Ve bu üç kalıbı tanımak, herhangi bir trading içeriğini değerlendirirken en çok işe yarayacak beceridir.

## Serideki çelişkiler

| Konu | Bir yerde | Başka yerde |
|---|---|---|
| Salınım tespiti | V4: dört mum | V5: üç mum |
| Yön bilgisi | V4: kritik ön koşul | V5: "gerek yok" |
| Yön tanımı | V4: "ileride öğreteceğim" | V6: son kırılan yapı |

Ve dördüncü bir çelişki, senin kendi projenle: denge noktası videolarda **giriş bölgesi**, senin sisteminde **yasak bölge**.

Ölçülmüş bir sistemde bu tutarsızlıklar fark edilirdi. Fark edilmemesi, hiç ölçülmediğinin en güçlü işareti.

## Sekiz videoda bir kez bile geçmeyen cümle

> "Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."

Sıfır istatistik, sıfır örneklem, sıfır kayıt. Kazançlar pip cinsinden sayılıyor (300, 400, 175, 100, 70), kayıplar sayılmıyor, net sonuç hiç hesaplanmıyor.

## İkna teknikleri kataloğu

Seri boyunca tekrarlanan yapılar — bunları tanımak, içeriği değerlendirmenin yarısıdır:

| Teknik | Nasıl işliyor |
|---|---|
| İç/dış grup kurgusu | "Aptal sürü" ve "sessiz kazananlar"; sen ikincisine geçebilirsin |
| Ön itiraz kapatma | Alternatif yöntemler baştan "facade" ilan edilir, karşılaştırma zemini kalkar |
| Geçmiş acıya bağlanma | "Stopun alındı, sebebini anlayamadın" — ortak deneyim, kanıt yerine geçer |
| Kimlik değişimi talebi | "Araçlarını, hocanı bırak" — kabul, bilgi değil aidiyet meselesi olur |
| Gizlilik talebi | Dışarıdan gelecek eleştiriyi de engeller |
| Vaadin ertelenmesi | "8. ayda anlayacaksın" — test edilebilir sonuç sürekli ileri atılır |
| Yanlışlanamaz mekanizma | Her hareketi açıklayabilen bir anlatı, hiçbir şey açıklamaz |
| Totolojinin vurgulanması | En çok tekrarlanan kural ("konsolidasyondan expansion'a"), en boş olanı |

---

# BÖLÜM III — Değerlendirme

## Ölçmeye değer dört fikir

**1. Direnç sayımı (Video 7).** Sayılabilir, yasaklayıcı, mekanizması makul. Ölçülebilir hale getirmek için tek eksik: "çok" ve "az" eşiğini sen tanımlamalısın.

Ama bir uyarı: bu fikir işlem sayısını **azaltır**. Senin range projen Aşama 1'de RET aldı çünkü sistem yeterince işlem üretmiyordu. Bu bir filtre, bir üretici değil — yani mevcut sisteme eklenecek bir şey değil, farklı bir sistemin çekirdeği olabilir.

**2. Zaman bazlı ters hareket (Video 8).** Serinin en kolay test edilebilir iddiası. Bir büyüklük eşiği tanımlarsan doğrudan ölçülür, ve elindeki veriyle bir saatte cevaplanır.

**3. Yapı kırılımı yön ölçütü (Video 6).** *"Son kırılan salınım noktasının yönü."* Tamamen mekanik, ve senin `htf_bias` tanımına (EMA200) doğrudan bir alternatif. Ekim ayının sekizinci videosu buna daha da somut bir versiyon getirecek.

**4. "10'lu kademe" iddiası (Video 4).** *"Fiyat bir tepenin 10 ya da 20 pip üstüne uzanır."* Sweep derinliği hakkında somut, sayısal, ucuz bir hipotez. Ve senin sweep ölçümünde bir derinlik eşiği eksikti.

Bunlara ek olarak, üçüncü videodaki **"haftalık tepe/dip hangi gün ve hangi seansta oluşuyor"** sorusu da bir saatte cevaplanabilir ve gerçek bilgi verir.

## Metottan bağımsız alınabilecek disiplin

- Aracı seçmeden önce rejimi belirle (V1)
- Konsolidasyonda işlem yok, bekle (V1)
- Çok zaman dilimli düzenli kayıt tutma, her zaman dilimi için sabit veri penceresi (V3)
- Analiz grafiği ile işlem grafiğini ayır (V3)
- Analizine âşık olma; beklentine uymuyorsa kenara çekil (V3)
- Yeni başlarken tahmin etmeye çalışma (V3)

Bunlar hangi yaklaşımı kullanırsan kullan geçerli.

## Asıl kazanım

Bu eleme işinin çıktısı, sekiz kavramlık bir liste değil. Çıktı, **filtrenin kendisi.**

Artık bir trading içeriğini üç soruyla eleyebiliyorsun: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü. Sekiz saatlik içeriği birkaç sayfaya indiren şey bu filtre — ve o filtre ICT'ye özel değil, her kaynağa uygulanır.

Bir de şu bağlantıyı kaybetme: **beş aylık range projesinde her belirsizliği bir karar maddesiyle kapatmak zorunda kaldın**, çünkü kapatmadan ölçemezdin. ATR'nin nasıl hesaplanacağından `stop_before` alanının hangi anı gösterdiğine kadar. Bu serideki hiçbir belirsizlik kapatılmıyor — ve kapatılmadığı için sistem her zaman haklı çıkabiliyor.

O iki deneyimin karşılaştırması, bu belgedeki her şeyden daha değerli.

---

# BÖLÜM IV — Kesinlikle bilmen gerekenler

Ayın tüm kavramları, tek yerde: **tanım · nasıl bulunur · ne işe yarar · dikkat.**

---

## 1. Dört piyasa durumu

**Tanım.** Videoya göre piyasa her an bu dörtten birindedir:

| Durum | Nasıl tanınır |
|---|---|
| **Consolidation** | Net bir aralıkta, iki yöne de gitmeye istekli değil |
| **Expansion** | Aralıktan hızlı, tek yönlü çıkış |
| **Retracement** | Yakın zamanda oluşan aralığın içine geri dönüş |
| **Reversal** | Mevcut yönün tersine dönüş |

**Sıralama kuralı.** Konsolidasyon → expansion → (retracement veya reversal). Konsolidasyondan doğrudan retracement ya da reversal'a geçilmez.

**Ne işe yarar.** Aracı seçmeden önce **rejimi** belirlemeni sağlıyor. "Elimde gösterge var, nereye uyarsa" yerine "piyasa ne yapıyor, buna uygun araç hangisi."

**Dikkat.** Sıralama kuralı bilgi taşımıyor — yatay bölgeden çıkan her hareket zaten tanım gereği expansion'dır. Değerli olan kısım araç eşlemesi, kural değil.

---

## 2. Order block

**Tanım.** Fiyatın hızla uzaklaştığı hareketten **hemen önceki son ters yönlü mum.**

- **Bullish:** yukarı impulstan önceki son **düşüş** mumu
- **Bearish:** aşağı impulstan önceki son **yükseliş** mumu

**Nasıl bulunur.**
1. Hızlı, tek yönlü bir bacak bul
2. Bacağın başladığı yere git
3. Bacağın yönüne ters olan son mumu işaretle
4. Eylül'ün ek notu: dipte **ardışık iki düşüş mumu** varsa, order block **üstteki mumun tepesinden** başlar

**Ne işe yarar.** Fiyat oraya döndüğünde giriş ararsın. Girişi seviye bazlı yapıyor, dolayısıyla stopu da tanımlıyor.

**Dikkat.** Eylül'de "hızla uzaklaştı" için eşik yok. Ekim'de geçerlilik koşulu eklenecek (sonraki bir mum içinden geçmeli), Aralık'ta büyüklük eşiği (gövdenin 2-3 katı hareket).

---

## 3. Fair value gap (FVG)

**Tanım (Eylül V6 — asıl tanım).** Üç mumluk yapı: ortada büyük ve tek yönlü bir mum; **birinci mumun tepesi ile üçüncü mumun dibi** arasında kalan, hiç ters yönlü hareket görmemiş aralık.

**Nasıl bulunur (düşüş yönü için).**
1. Büyük, tek yönlü bir **düşüş** mumu bul
2. Ondan **önceki** mumun **dibine** bak
3. Ondan **sonraki** mumun **tepesine** bak
4. Sonraki mumun tepesi, önceki mumun dibinin **altındaysa** aradaki alan bir FVG'dir
5. Video **gövdelerle** ölçmeyi tercih ediyor

Yükseliş yönü için tersi: önceki mumun tepesi ile sonraki mumun dibi arasındaki boşluk.

**Ne işe yarar.** Fiyatın geri dönüp o boşluğu "doldurması" bekleniyor — yani bir **hedef** ya da bir **giriş bölgesi**.

**Dikkat.** Ekim ayında bu terim **başka bir şey** için kullanılacak: order block mumunun açılış-tepe gövde aralığı. Aynı seride iki farklı tanım. Bağlamdan çıkarman gerekiyor — tek muma bağlıysa Ekim tanımı, üç muma bağlıysa Eylül tanımı.

---

## 4. Liquidity void (likidite boşluğu)

**Tanım.** Fiyatın **her seviyede işlem görmeden** hızla geçtiği geniş alan.

**Nasıl bulunur.** Videonun ölçütü üç maddeli:
1. **Büyük aralıklı mumlar**
2. **Çok az fitil**
3. **Çok hızlı hareket**

Bacağın başı ile sonu arasındaki alan boşluktur.

**FVG'den farkı.** FVG üç mumluk kesin bir geometri. Likidite boşluğu daha geniş ve daha gevşek — "hızlı hareketin bıraktığı bütün alan". Bir likidite boşluğunun **içinde** birden fazla FVG olabilir.

**Ne işe yarar.** İki şekilde: fiyatın geri dönüp doldurması beklenen bir **hedef**, ve piyasa yapıcının **dağıtım yaptığı** bölge olarak okunuyor.

---

## 5. Liquidity pool · buy stops · sell stops

**Tanım.** Stop emirlerinin kümelendiği bölgeler.

- **Buy stops:** eski **tepelerin üstünde**
- **Sell stops:** eski **diplerin altında**

**Neden orada — videonun mekanizması.** Bir tepe oluştu, fiyat düştü. Orada kısa pozisyon açan biri kârda. Fiyat geri dönerse kârı erir → **stopu o tepenin üstünde.** Aynı mantık dipler için tersine.

**Nasıl bulunur.**
1. **Eşit tepeler / eşit dipler** ara — en yoğun kümelenme orada
2. Belirgin tek bir salınım tepesi/dibi de yeterli
3. Videonun ek notu: fiyat bir tepenin **10 ya da 20 pip** üstüne uzanma eğiliminde

**Ne işe yarar.** **Hedeflerini işlemden önce** buradan belirliyorsun.

---

## 6. Equal highs / equal lows (temiz tepe / temiz dip)

**Tanım.** Bir tepe oluşur, fiyat uzaklaşır, geri gelir ama **yeni tepe yapamaz** — birbirine yakın iki eşit (ya da neredeyse eşit) seviye.

**Nasıl bulunur.**
1. Belirgin bir tepe (ya da dip) bul
2. Fiyatın oradan uzaklaşıp geri gelmesini ara
3. İkinci dokunuşun ilkini **aşamamış** olması gerekiyor — ya tam eşit, ya birazcık altında/üstünde

**Ne işe yarar.** En yoğun stop kümelenmesi burada. Videonun ifadesi: *"Fiyatın gitmek isteyeceği büyük bir hedef tahtası."*

**Dikkat.** "Yakın yakınlıkta" ve "birazcık" tanımsız. Kodlamak için bir tolerans eşiği koyman gerekiyor (ör. ATR'nin %10'u).

---

## 7. Turtle soup

**Tanım.** Eski bir dibin altına (ya da tepenin üstüne) kısa süreli kırılım ve ardından ters yöne dönüş. Sahte kırılım.

**Nasıl bulunur.**
1. Belirgin bir eski dip (ya da tepe) belirle
2. Fiyat onun altına insin — satış stopları alınsın
3. Fiyat hemen geri dönsün
4. **Ön koşul:** piyasanın alttaki eğilimi boğa olmalı (satış tarafı için ayı)

**Ne işe yarar.** Dönüş girişi için tetikleyici. Ve Eylül'ün özel kullanımı: **stop yediysen**, patlayan dibi bul ve alım sinyalini orada bekle.

**Dikkat.** Bu, kayıp senaryosunu sinyale çeviren bir kural — yanlışlanabilirliği yok eden bir yapı. Ve senin ölçümün: sweep tek başına %33 isabet, 2R'de tam başabaş.

---

## 8. Impuls fiyat hareketi (displacement)

**Tanım.** Belirgin, hızlı, tek yönlü bir fiyat bacağı — dipten tepeye ya da tepeden dibe.

**Nasıl bulunur.** Videonun tek ölçütü niteliksel: *"Belirgin, temiz bir fiyat bacağı. Dağınık görünüyorsa, şüpheli görünüyorsa kullanma."*

**Ne işe yarar.** Bütün değerleme işleminin **girdisi**. Fib bu bacağa çekilir, denge bu bacaktan hesaplanır, stop bu bacağın ucuna konur.

**Dikkat.** **Bu, serinin en kritik tanımsızlığı.** Hangi bacağın "belirgin" olduğu seçilir, ve o seçim sonucu belirler. Kendine bir kural koy (ör. "son 20 mumun en yüksek tepesi ve en düşük dibi") ve değiştirme.

---

## 9. Swing high / swing low (salınım noktası)

**Tanım.** Bir mumun her iki yanındaki mumların ondan daha düşük (tepe için) ya da daha yüksek (dip için) olması.

**Nasıl bulunur — ve dördüncü mum kuralı.**
1. **Üç mum:** sol daha düşük, orta en yüksek, sağ daha düşük → salınım tepesi
2. **Dördüncü mum** ortadaki en yüksek mumdan daha aşağıda olmalı
3. Bu olduğunda geri çekilme **onaylanmıştır**; artık dengeyi beklemeye başlarsın

**Not:** V4 dört mum diyor, V5 üç mum diyor. İkisinden birini seç ve sabit tut. Video Williams fraktalını (beş mum) kasten reddediyor: *"Bana üç yetiyor."*

**Ne işe yarar.** "Geri çekilme başladı" kararını mekanikleştiriyor. Fib'i ne zaman çekeceğini söylüyor.

---

## 10. Equilibrium · Discount · Premium

**Tanım.** Bir impuls bacağının **%50'si denge**, altı **indirim**, üstü **prim**.

**Nasıl bulunur.**
1. Impuls bacağını belirle
2. Fib'i **dipten tepeye** (alım için) ya da **tepeden dibe** (satış için) çek
3. %50 çizgisi = denge
4. Altı indirim, üstü prim

**Ne işe yarar.**
- **Alım** yalnızca dengede ya da altında. *"Bankalar prim seviyelerinden almaz."*
- **Satış** yalnızca dengenin üstünde
- Ve bir **göreli güç ölçümü** içeriyor: piyasa indirimde çok vakit geçirmemeli. Geçiriyorsa alttaki eğilim boğa değildir.

**Dikkat.** Aralık seçimi kuralsız. Altıncı videoda aynı grafikte dört aralık çiziliyor ve fiyat aynı anda hem primde hem indirimde çıkıyor. Kendi kuralını koymadan bu kavram ölçülemez.

---

## 11. Optimal Trade Entry (OTE)

**Tanım.** Fibonacci **%62 – %79** geri çekilme bölgesi. Tatlı nokta **%70.5.**

**Nasıl bulunur.** Denge hesabının devamı — fib zaten çizili, o üç seviyeye bak.

**Ne işe yarar.** Alım için "derin indirim", satış için "derin prim". Videonun iddiası: piyasa buralarda **çok az vakit geçirir** ve oradan dinamik biçimde uzaklaşır.

**Klasik karşılığı.** %61.8 ve %78.6 onlarca yıllık standart Fibonacci seviyeleri; %70.5 ikisinin ortası. Video da bunu kabul ediyor: *"Fibonacci'de sihir yok. Sadece dengenin nerede olduğunu görselleştirmeye yarıyor."*

---

## 12. Yüksek / düşük dirençli likidite koşusu

**Tanım.** Fiyatın hedeflenen bir likidite kümesine ulaşmasının ne kadar kolay olduğu.

| | Ne demek | Ne yapılır |
|---|---|---|
| **Yüksek dirençli** | Yolda çok sayıda eski tepe ve dip var | İşlem alma |
| **Düşük dirençli** | Yolda çok az yapı var | İşlem burada |

**Nasıl bulunur — düşük dirençli bölgenin sınırları.**
1. Hızlı, tek yönlü, geri çekilmesiz bir bacak bul
2. O bacağın kırdığı **eski dip** → bölgenin **üst sınırı**
3. Sonraki toparlanmanın kırdığı **kısa vadeli tepe** → bölgenin **alt sınırı**
4. Bu iki sınır arası = düşük dirençli bölge

**Bölge içinde ne yapılır.** Her geri çekilmede yeni bir alım fırsatı; her yeni kısa vadeli tepenin üstünde alım stopu likiditesi var, ve oraya ulaşmak kolay.

**Bölge nerede biter.** Kırılan o eski dibe geri yaklaşıldığında. Ondan sonrası yüksek dirençli.

**Ne işe yarar.** **Nerede işlem yapmayacağını** söylüyor — ayın en test edilebilir fikri, çünkü yasaklayıcı ve sayılabilir.

**Dikkat.** "Çok" ve "az" için eşik yok; sen koymalısın.

---

## 13. Rejim okuması — direnç asimetrisi

**Tanım.** Yönü, hangi tarafın kolay kırıldığına bakarak belirlemek.

**Nasıl bulunur.**
1. Son N salınım noktasına bak
2. Sor: **dipler kolay mı kırılıyor, tepeler mi?**
3. Dipler kolay kırılıyorsa → **ayı** eğilimi. Her ralli yüksek dirençli, her düşüş düşük dirençli
4. Tepeler kolay kırılıyorsa → **boğa** eğilimi. Tersi

**Ne işe yarar.** Yön eğilimini bir göstergeden değil, fiyatın kendi davranışından türetiyorsun.

**İlişkili kural (V6).** *"En son hangi yapı kırıldı — salınım tepesi mi dibi mi?"* Aynı fikrin tek olaya indirgenmiş hali.

---

## 14. Piyasa protraksiyonu (Judas swing)

**Tanım.** Belirli bir saatte oluşan, **asıl yönün tersi** olan küçük impuls hareketi.

**Üç saat (New York):**
- **20:00** (0 GMT) — Asya, en az önemlisi
- **Gece yarısından sonra** — Judas swing, ana protraksiyon
- **07:00'den sonra** — New York öncesi

**Nasıl kullanılır.**
1. O saatlerden birini bekle
2. İlk anlamlı hareketin yönünü not et
3. **Tersini bekle**

**Ne işe yarar.** Gün içi yön için zamana bağlı bir tetikleyici. **Serinin en kolay test edilebilir iddiası** — saat tartışılmaz, yön kuralı tanımlı.

**Dikkat.** "Küçük" hareketin büyüklüğü tanımsız. Bir eşik koymadan (ör. ATR'nin bir katı) sonradan hangi hareketin "sahte" olduğunu seçebilirsin — ve videodaki örneklerde tam olarak bu yapılıyor.

---

## 15. Günlük seans şablonu

Videonun her gün tekrarlandığını iddia ettiği sıra (New York saati):

| Saat | Ne olur |
|---|---|
| Asya seansı | Konsolidasyon |
| Gece yarısından sonra | Judas swing — ters yönde sahte hareket |
| Londra açılışı | Günün asıl dibi/tepesi, stop süpürme |
| → 05:00 | Genişleme |
| 05:00 – 08:00 | Konsolidasyon |
| 08:00 – 08:30 | Haber, geri çekilme |
| New York | Dönüş ya da yeni genişleme |
| 10:00 – 11:00 | Londra kapanışı, dönüş |
| Günün kalanı | Konsolidasyon |

**Ne işe yarar.** Gün içi işlem için zaman haritası. Ve ölçülebilir: *"Günün dibi/tepesi Londra açılışı civarında mı oluştu?"* diye sayabilirsin.

**Dikkat.** Forex için tasarlanmış. Seans etkileri forex'te gerçekten var (Londra açılışında hacim artar, bu ölçülmüş bir olgu) — ölçülmesi gereken, **bu kadar spesifik bir sıralamanın her gün tekrarlandığı** iddiası.

---

## 16. Çalışma protokolü — grafiklerin kurulumu

**Zaman dilimi başına görüntülenecek veri:**

| Zaman dilimi | Veri penceresi |
|---|---|
| Günlük | 9 – 12 ay |
| 4 saatlik | 3 ay |
| 1 saatlik | en az 3 hafta |
| 15 dakikalık | 3 – 4 gün |

**Her grafikte işaretlenecekler:**
1. Fiyatın bir seviyeden hızla uzaklaştığı yerler
2. Yeniden test edilmemiş tepe ve dipler
3. Temiz tepeler / temiz dipler
4. Haftalık tepe/dibin hangi gün ve hangi seansta oluştuğu
5. Her günün tepe ve dibi

**Kurallar:**
- **Tek bir parite** seç, ve mentorship'te işlenenlerden farklı olsun
- **İki ayrı grafik tut:** analiz grafiği ve işlem grafiği
- **Tahmin etmeye çalışma** — bu aşamada sadece kayıt tut
- **Analizine âşık olma:** gerçek zamanlı fiyat beklentine uymuyorsa kenara çekil

**Ne işe yarar.** Bu, ayın metottan tamamen bağımsız, doğrudan uygulanabilir tek bölümü. Hangi yaklaşımı kullanırsan kullan geçerli.

---

## Eylül'ün iki şablonu

Ay iki farklı yapı bırakıyor. İkisi de tek başına uygulanabilir.

### Şablon A — Değerleme kurulumu (V4, V5, V6)

1. **Impuls bacağını belirle** (senin sabit kuralınla — video bir kural vermiyor)
2. **Salınım noktasını bekle:** üç mum + dördüncü mumun ters yönde hareketi
3. **Fib'i çek** (alım için dipten tepeye)
4. **%50'ye ya da altına inmesini bekle** — o gelene kadar hiçbir şey yapma
5. **%62 – %79 arasında giriş ara** (OTE)
6. **Örtüşme ara:** o bölgede bir order block ya da FVG var mı
7. **Yön teyidi:** en son kırılan yapı noktası hangi yönde
8. **Stop:** impuls bacağının başladığı ucun ötesinde
9. **Hedef:** eski bir tepenin/dibin üstü/altı — **10 pip pay bırakarak**

**Ölçülebilirlik:** adım 1 ve 3 tanımsız. Kendi kuralını koyarsan tamamı kodlanabilir hale gelir.

### Şablon B — Likidite koşusu filtresi (V7)

1. **Hedefi belirle:** en yakın, henüz alınmamış likidite kümesi (eşit tepeler / eşit dipler)
2. **Aradaki salınım noktalarını say**
3. **Çok ise: işlem alma.** Az ise devam et
4. **Düşük dirençli bölgenin sınırlarını çiz:** kırılan eski dip (üst) ve kırılan kısa vadeli tepe (alt)
5. **Bölgenin içinde kal.** Her geri çekilmede giriş ara
6. **Sınıra yaklaşınca dur** — ondan sonrası yüksek dirençli

**Ölçülebilirlik:** tek eksik "çok/az" eşiği, ve o kenarda. **Ayın en test edilebilir şablonu.**

---

## Beklenti notu

Diğer ayların transkriptleri de aynı formatta elenebilir. Ama eğilimi baştan söylemek gerekir: ilk ay temel kavramları veriyor; sonraki aylar bunların kombinasyonları olacak. **Yeni ölçülebilir tanım oranı muhtemelen düşecek**, anlatı ve ikna oranı artacak.

Bu bir tahmin, kesinlik değil — ve yanlış çıkarsa da bilinmesi iyi olur.
