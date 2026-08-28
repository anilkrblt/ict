# ICT Mentorship — Eylül 2016 (8 Video)
## Eleme Notları

---

## Bu belge nedir

Sekiz videoluk bir eğitim serisinin transkriptleri, üç soruluk bir filtreden geçirildi. Amaç videoyu özetlemek değil — özet istenseydi izlemekten farkı olmazdı. Amaç, içindeki **ölçülebilir iddiaları** anlatıdan, ikna malzemesinden ve geçmiş açıklamalarından ayırmak.

### Kullanılan filtre

Her iddia şu üç sorudan geçirildi:

**1. Bu, geçmiş için mi geleceğe dair mi?**
"Fiyat buraya geldi çünkü şurada likidite vardı" bir geçmiş açıklamasıdır. Değersizdir, çünkü her hareket sonradan bir kavramla açıklanabilir. "Şu koşul oluştuğunda fiyat şuraya gitme eğilimindedir" ise ileriye dönük bir iddiadır. Yalnızca ikincisi ayıklanmaya değer.

**2. Bunu, sonucu bilmeden yazabilir miyim?**
İddiayı, grafiğin devamını görmemiş birine verecek şekilde yaz. "Önceki günün dibinin altına fitil, gövde üstünde kapanış" yazılabilir. "Kurumsal emirlerin bulunduğu anlamlı bölge" yazılamaz — çünkü "anlamlı"yı sonradan sen seçiyorsun.

**3. Bu iddia yanlış olsaydı nasıl görünürdü?**
Yanlışlanabileceği bir durum yoksa, iddia hiçbir şey söylemiyor demektir. "Fiyat ya likiditeyi alıp döner ya devam eder" gibi ifadeler her sonucu kapsar.

Bu filtre ICT'ye özel değil; herhangi bir trading içeriğine uygulanır. Uygulandığında geriye çok az şey kalır — filtre sert olduğu için değil, içeriğin çoğu gerçekten geçmiş açıklaması olduğu için.

---

# BÖLÜM I — VİDEO VİDEO

## Video 1 — Bir işlem kurulumunun unsurları

Serinin en somut girişi. Dört piyasa durumu ve her birine eşlenmiş bir araç sunuluyor: genişleme (expansion) → order block, geri çekilme (retracement) → likidite boşluğu, dönüş (reversal) → likidite havuzu, yatay (consolidation) → denge noktası.

### Yazılabilir iddialar — 4 tane

**Denge noktası (equilibrium).** Konsolidasyon aralığının orta noktası. Önemli bir ayrıntı veriyor: aralık **gövdelerle** tanımlanır, fitillerle değil. İddia: fiyat aralıktan çıkar, dengeye geri döner, sonra tekrar açılır. Giriş, dönüşte yapılır.

**Order block.** Yükseliş için: impuls hareketten hemen önceki **son düşüş mumu**. Tanım net ve tek anlamlı. İddia: fiyat o muma dönünce alım gelir.

**Likidite boşluğu (liquidity void).** Hızlı hareketin bıraktığı, fiyatın her seviyede işlem görmediği aralık. İddia: fiyat geri dönüp boşluğu doldurur, sonra asıl yönüne devam eder.

**Likidite havuzu (liquidity pool).** Eski tepenin üstü, eski dibin altı. İddia: fiyat oraya uzanır, stopları alır, ters döner.

Dördüncüsü, daha önce kendi verinle ölçtüğün sweep. Sonuç sıfıra yakındı. Diğer üçü ölçülmedi.

### Yeniden adlandırmalar

| Videodaki | Klasik karşılığı |
|---|---|
| Order block | Hareketin başladığı mumun bölgesi — arz/talep bölgesi |
| Liquidity void | Dengesizlik / boşluk; "gap doldurma" çok eski bir fikir |
| Liquidity pool | Stop avı, sahte kırılım, Wyckoff spring/upthrust |
| Equilibrium | %50 geri çekilme / aralık ortalaması |
| Expansion–retracement–reversal–consolidation | Trend–pullback–dönüş–yatay; Dow ve Wyckoff'un yüz yıllık şeması |

Yeni bilgi yok. Yeni olan tek şey, hangi durumda hangi aracın kullanılacağının **önceden** eşleştirilmesi.

### Yanlışlanamaz kısımlar

**"Piyasa bu dört durumdan yalnızca birinde olabilir."** Her olasılığı kapsıyor, dolayısıyla sıfır bilgi taşıyor. Videonun omurgası bu cümle ve test edilemez.

**Interbank algoritma anlatısı.** "Fiyatı bir yapay zekâ motoru üretiyor, stopları toplamak için programlanmış." Kanıt sunulmuyor ve sunulamaz. Elektronik piyasa yapıcılığın var olması ayrı şey; "stop avlamak için programlanmış merkezi bir motor" iddiası bambaşka bir şey.

**"Hangi tarafta daha çok para varsa oraya gider — ama bunu her zaman bilemeyiz."** İddia ve muafiyeti aynı cümlede. Sonrasında ne olursa açıklanabilir.

**"Çok uzağa açılırsa bir şey yapamayız, sonrakini bekleriz."** Kaçırılan her hareket için hazır gerekçe.

**"Tek bir kurulumla tutarlı kâr edebilirsin."** Hiçbir sayı yok.

### Geçmiş açıklamaları

İki grafik örneğinin ikisi de geriye dönük. "Sürekli tekrar eder" deniyor ama kaç örnekte, hangi dönemde, ne oranda — hiçbiri yok. Ve izleyiciye açıkça **grafiğin sol tarafına bakıp örnekleri işaretlemesi** söyleniyor. Bu, hindsight çalışmasının tarifi.

### Bu videodan alınacaklar

**Metodolojik olarak sağlam tek fikir:** aracı seçmeden önce rejimi belirle. "Elimde şu gösterge var, nereye uyarsa" yerine "piyasa şu an ne yapıyor, buna uygun araç hangisi." Bu sıralama doğru ve rejim-değişimli modellerin de yaptığı şey.

**İkinci sağlam şey:** konsolidasyonda işlem yok, bekle. Bir disiplin kuralı ve videodaki en dürüst cümlelerden biri.

---

## Video 2 — Piyasa etkinliği paradigması

Birinci videodan keskin bir düşüş. Dört yazılabilir iddia yerine **bir tane** var; geri kalanı anlatı ve ikna.

### Yazılabilir iddia — 1 tane

**Günlük seans yapısı.** Tek somut, kodlanabilir şey: Asya seansı yatay geçer → New York gece yarısından sonra ters yönde sahte bir hareket olur (günün dip/tepesini yapar) → Londra açılışında asıl yön başlar → sabah 5-8 arası duraklama → 8:00-8:30 haber saatinde geri çekilme → New York'ta son hareket → 10-11 arası dönüş → gün sonu yatay.

Test edilebilir: saat dilimlerini sabitle, "günün dibi/tepesi Londra açılışı civarında mı oluştu" diye say. Forex için tanımlı; kripto için sorunlu, çünkü 7/24 ve seans yapısı çok daha zayıf.

Dikkat: forex'te seans etkileri **gerçekten var** — Londra açılışında hacim artar, bu ölçülmüş bir olgu. Test edilmesi gereken kısım iddianın kendisi değil, **bu kadar spesifik bir sıralamanın her gün tekrarlandığı** iddiası.

### Bir totoloji: durum sıralaması

**"Konsolidasyon yalnızca expansion'a gider. Asla doğrudan retracement veya reversal'a geçmez."**

İlk bakışta test edilebilir bir kısıt gibi duruyor. Ama yatay bir bölgeden çıkan her hareket zaten tanım gereği "expansion"dır. Kısıt bir şey yasaklamıyor — tanımların kendisi onu zorunlu kılıyor.

Video boyunca en çok tekrarlanan kural bu (dört-beş kez) ve tam olarak hiçbir şey söylemiyor. **En çok vurgulanan şeyin en boş şey olması**, tek başına dikkat çekici bir sinyal.

### Yanlışlanamaz kısımlar

**Interbank algoritma anlatısı** burada zirveye çıkıyor: fiyat merkezi bir yapay zekâ tarafından, korku ve açgözlülüğü bilerek üretiliyor.

**"Bu süreç asla değişmeyecek, asla çalışmayı bırakmayacak."** Bir stratejinin asla bozulmayacağını iddia etmek tanım gereği yanlışlanamaz — ve gelecekte kaybettiğinde "sen yanlış uyguladın" denebilir.

**"700 kişi dünyayı değiştirmez."** Edge'in yayılmayla dağılması itirazına karşı kurulmuş bir savunma. Ama aynı anda ürün kitlesel olarak satılıyor.

**"Her gün pipine kadar tutturdum."** Sıfır kayıt, sıfır doğrulama.

### İkna teknikleri — asıl öğrenilecek şey burada

Videonun büyük kısmı bilgi değil, grup psikolojisi:

- **İç/dış grup kurgusu.** "Aptal sürü" ve "sessiz kazananlar". Sen ikincisine geçebilirsin.
- **Ön itiraz kapatma.** Göstergeler, destek/direnç, arz-talep — hepsi baştan "facade" ilan ediliyor. İzleyicinin karşılaştırma yapabileceği zemin kaldırılıyor.
- **Geçmiş acıya bağlanma.** "Stopun alındı, sebebini anlayamadın." Ortak bir deneyim, metodun kanıtı olarak sunuluyor.
- **Kimlik değişimi talebi.** "Araçlarını, hocanı bırakman gerek." Metodun kabulü bilgi meselesi olmaktan çıkıp aidiyet meselesi haline geliyor.
- **Gizlilik talebi.** Paylaşma çağrısı, aynı zamanda dışarıdan gelecek eleştiriyi de engelliyor.
- **Vaadin ertelenmesi.** "8. ve 9. ayda anlayacaksın." Test edilebilir sonuç sürekli ileri atılıyor.

### Bu videonun ana dersi

İkinci videoyu eledikten sonra elinde birinciden **daha az** şey var, ama ikna edicilik çok daha yüksek. Bu ters ilişki — **bilgi azalırken ikna artıyor** — bir içeriği değerlendirirken bakılacak ana sinyaldir.

---

## Video 3 — Bakış açısı ve çalışma disiplini

İçeriğin çoğu yine anlatı, ama ilk kez **somut bir çalışma yöntemi** var.

### Yazılabilir iddialar — 5 tane

**Temiz tepe / temiz dip (equal highs/lows).** Bir tepe oluşur, fiyat uzaklaşır, geri gelir ama yeni tepe yapamaz — birbirine yakın iki eşit seviye. İddia: bu seviyelerin üstünde/altında emir birikir, fiyat oraya uzanma eğilimindedir. Sweep tanımıyla akraba ama farkı var: burada **iki eşit seviye** şart, tek pivot değil.

**Test edilmemiş tepe/dip.** Oluşmuş ama fiyatın bir daha dönmediği seviyeler. Tanımlanabilir, ama "ne kadar süre dönmemiş" belirsiz — bu boşluk doldurulmadan kodlanamaz.

**Hızlı hareketin bıraktığı seviye.** Order block ve likidite boşluğunun ham hali.

**Önceki günün tepe/dibi.** Çizip fiyatın tepkisine bakmak. Basit, ölçülebilir, ve klasik pivot noktası mantığının aynısı.

**Haftalık tepe/dip hangi gün ve hangi seansta oluşuyor.** Bir istatistik toplama önerisi ve gerçekten test edilebilir bir soru.

### Çalışma disiplini — burada gerçek değer var

Dört zaman dilimi, her biri için belirli bir veri aralığı: günlük 9-12 ay, 4H 3 ay, 1H 3 hafta, 15dk 3-4 gün. Tek bir parite. Her gün seviyeleri işaretle, günlük tut, ve **analiz grafiği ile işlem grafiğini ayrı tut.**

Bunlar metottan bağımsız, sağlam alışkanlıklar. Özellikle ikisi:

- **"Şu an fiyatı tahmin etmeye çalışma."** Yeni başlayana verilecek en iyi tavsiyelerden biri — ve videonun kendi vaadiyle çelişiyor.
- **"Analizine âşık olma; gerçek zamanlı fiyat beklentine uymuyorsa kenara çekil."** Dürüst bir uyarı.

### Yanlışlanamaz kısımlar

**"Kurumsal emir akışı dışında bir şeyle para kazandıysan, o tesadüftü."** Tüm alternatif yöntemleri baştan geçersiz ilan ediyor, hiçbir kanıt gerektirmiyor. Aynı mantıkla bu metotla kazanılan para da tesadüf olabilir — ama o ihtimal hiç dile getirilmiyor.

**"Bildiğin her şeyi unut, sıfırdan başla."** Karşılaştırma zeminini kaldırıyor. Bir metodun kendisini başka hiçbir şeyle kıyaslanamaz hale getirmesi, ikinci videodaki kimlik değişimi talebinin devamı.

**"%90 kaybediyor" istatistiği.** Yaygın bir rakam ama kaynağı belirsiz; broker açıklamalarındaki oranlar ülkeye ve döneme göre önemli ölçüde değişiyor.

**Merkez bankası anlatısı.** İsviçre Frangı örneği gerçek bir olay (2015'te tavanın kaldırılması), ama oradan "bankalar fiyatı istedikleri yere koyabilir" sonucu çıkmıyor. Bir merkez bankasının kendi para birimine müdahale edebilmesi ayrı; günlük fiyat hareketlerinin merkezi bir motor tarafından üretilmesi bambaşka bir iddia.

### Aklında tutulacak çelişki

"Not al, tahmin etme" tavsiyesi ile "8. ayda ne olacağını bileceksin" vaadi aynı seride, birkaç dakika arayla. İlerleyen videolarda hangisinin kazandığına bak.

---

## Video 4 — Denge ve indirim (alım tarafı)

Serinin en somutu. İlk kez baştan sona kodlanabilir bir kurulum var — ve o kurulumun tamamı klasik bir tekniğin yeniden adlandırılması.

### Yazılabilir iddia — tam kurulum

1. **Impuls hareketi** — belirgin bir yükseliş bacağı (dipten tepeye)
2. **Salınım tepesi teyidi** — bir mumun her iki yanındaki mumlar daha düşük; ardından **dördüncü mum** tepenin altında kapanmalı. Geri çekilmenin başladığının onayı.
3. **Fibonacci** dipten tepeye çekilir; **%50 = denge (equilibrium)**
4. **%50 altı = indirim bölgesi.** Alım ancak buradan yapılır — asla üstünden.
5. **Optimal giriş: %62–79 arası**, ideal nokta %70.5
6. **Stop:** impuls bacağının başladığı dibin altında
7. **Çıkış:** önceki bir tepenin üstünde, ama tepeye tam ulaşmadan önce

Tanımlar net, adım sayısı sınırlı, sonucu bilmeden yazılabilir. Kodlanabilir.

### Ama bu ne?

**Klasik Fibonacci geri çekilme işlemi.** %61.8 ve %78.6 seviyeleri onlarca yıldır standart; %70.5 ikisinin ortası. Tek "yeni" katkı, dördüncü mum kuralı ve terminoloji: geri çekilme → "indirim", %50 → "denge", geri çekilme bölgesi → "optimal işlem girişi".

Videonun kendisi de bunu kabul ediyor: Fibonacci'de sihir yok, sadece aralığın neresinde olunduğunu görselleştiriyor. Bu doğru — ve tam olarak "yeniden adlandırma" tanımının kendisi.

### Kritik eksik: yön

Kurulumun tamamı şu ön koşula bağlı: **"eğer piyasa yükseliş yönündeyse."**

Ama yönün nasıl belirleneceği bu videoda **yok** — ileriye erteleniyor. Ve kurulumun tüm çalışması o ön koşula bağlı: yön yanlışsa her indirim seviyesi düşmeye devam eder.

Yani ölçülebilir görünen kurulum, aslında ölçülemez bir girdiye dayanıyor. Sistemin ağırlık merkezi hâlâ tanımsız.

### Yanlışlanamazlık — burada incelmiş

**"%50'ye gelmezse işlem yok, sorun değil."** Kaçırılan hareketler sayılmıyor. Sadece gelen kurulumlar sayılırsa, seçici hafıza otomatik devreye girer ve performans ölçülemez hale gelir.

**"Dibi kırarsa turtle soup'tur, dön ve al."** Kayıp senaryosunu kazanç senaryosuna çeviren bir kural. Stop yendiğinde "aslında sinyal buydu" denebiliyor. Sistem her iki sonuçta da haklı çıkıyor — yanlışlanabilirlik tam burada kayboluyor.

**İki kayıp gösteriliyor** ve bu dürüst bir hareket. Ama kazançlar pip cinsinden sayılıyor (300, 400, 175), kayıplar sayılmıyor. Net sonuç hiç hesaplanmıyor.

**"Doğru çıkışı seçmediysen açgözlüsün."** Çıkış kuralı iki farklı örnekte iki farklı tepeye göre uygulanıyor. Hangisinin doğru olduğu sonradan belli oluyor — bu kural değil, yorum.

### Senin range projenle doğrudan çelişki

Bu kurulum, kapattığın range sisteminin **tam tersi** bir konumlanma öneriyor.

| | Aralığın ortası | Kenarlar |
|---|---|---|
| **Senin sistemin** | Yasak bölge | İşlem burada |
| **Bu video** | Tek meşru alım bölgesi | Alım yasak |

İkisi de aynı yapıya bakıyor, tam zıt kural çıkarıyor, ve ikisi de kendi içinde mantıklı geliyor. Bu tek başına, kuralların ölçülmeden neden hiçbir şey ifade etmediğinin en net örneği.

---

## Video 5 — Denge ve prim (satış tarafı)

Dördüncünün aynası. Yeni bilgi az, ama **iki önemli itiraf** var.

### Yazılabilir iddia — simetrik kurulum

Impuls düşüş bacağı → salınım dibi + dördüncü mum → Fib tepeden dibe → **%50 üstü = prim bölgesi** → giriş %62–79 → stop bacağın tepesi üstünde → çıkış önceki bir dibin altında.

Ek not: dördüncüde salınım tespiti için **dört mum** deniyordu, burada **üç mum** deniyor. Aynı serinin iki videosunda tanım değişiyor — ölçülmemiş bir kuralın işareti. Ölçülmüş olsaydı hangisinin doğru olduğu bilinirdi.

### Birinci itiraf: yön gerekmiyormuş

Dördüncü videonun tüm kurulumu "eğer piyasa yükselişteyse" ön koşuluna bağlıydı ve yön tanımı ileriye erteleniyordu. Burada tam tersi söyleniyor: yönü bilmene gerek yok, aralık içinde işlem yaparsın, aralıklar her zaman vardır.

Ya yön kritik bir girdi (4. video) ya da değil (5. video). İkisi birden olamaz — ve hangisinin doğru olduğu ölçülmediği için bilinmiyor.

### İkinci itiraf: kayıplar

İlk kez arka arkaya stoplar gösteriliyor: bir kurulum stop, sonra tekrar, sonra tekrar. Ve dürüst bir cümle var — bu senin işlemlerinde de olacak, kaçınmaya çalışma.

Ama yine net sonuç yok. Kazançlar sayılıyor (100, 70, 42 pip), kayıplar sayılmıyor. Üç stop + bir 70 pip kazanç, tipik bir stop mesafesinde net negatiftir. Bu hesap hiç yapılmıyor.

### Yeni yanlışlanamazlık kalıbı: Fib nereye çekilecek?

Bu video, öncekilerde örtük olanı açıkça gösteriyor: **Fibonacci'nin hangi tepe ve dibe çekileceği bir seçimdir.** Videoda birkaç kez şu oluyor — bir aralıkla ölçülünce sinyal yok ya da stop var; başka bir aralıkla ölçülünce mükemmel giriş çıkıyor.

Ve bunun kuralı yok. "Daha net görünen", "çevresinde daha çok fiyat hareketi olan", "en son oluşan" gibi ifadeler kullanılıyor — hepsi sonradan seçilebilir kriterler.

Bu, metodun ölçülemez olmasının asıl sebebi. Bir kurulumun kodlanabilmesi için Fib'in nereye çekileceğinin de kodlanabilir olması gerekir. Burada o kısım yoruma bırakılmış, ve yoruma bırakılan kısım sonucu doğrudan belirliyor.

---

## Video 6 — Adil değerleme (fair value)

Bir yeni yazılabilir tanım, ve metodun ölçülemezliğini en açık gösteren an.

### Yazılabilir iddia — Fair Value Gap

İlk kez net tanımlanıyor. Düşüş için: art arda üç mumda, **birinci mumun dibi ile üçüncü mumun tepesi arasında kalan boşluk** — arada hiç yukarı hareket olmamış bir fiyat aralığı. Video gövdelerle ölçmeyi tercih ediyor.

İddia: fiyat sonradan o boşluğu doldurmaya döner.

Tanım mekanik ve kodlanabilir. Ama bunun **fiyat boşluğu doldurma** fikrinin yeni bir adı olduğunu bilerek not al. Hisse senetlerinde "gap fill", genel teknik analizde "dengesizlik" olarak onlarca yıldır var, akademik olarak da incelenmiş — sonuçlar karışık, tutarlı bir edge gösteren güçlü kanıt yok.

### Ölçülemezliğin en net anı

Bu videodaki bir bölüm, önceki beş videoda söylenenlerin en somut kanıtı:

Aynı grafikte, aynı anda, **dört farklı aralık** çiziliyor. Sonuç: fiyat aynı anda hem primde hem indirimde. Büyük aralığa göre derin indirim, küçük aralığa göre prim bölgesi.

Ardından şu deniyor: perakende yatırımcı burada satış görür, ama o yanlış — çünkü aslında alım bölgesi.

**Bu bir kural değil.** Hangi aralığın "gerçek" olduğunu seçme işlemi, ve o seçimin kuralı yok. Fiyatın nereye gittiği görüldükten sonra hangi aralığın doğru olduğu belli oluyor. Bir sistemin backtest edilemez olmasının tanımı tam olarak budur.

### Geriye dönük "tahmin"

Video, o hafta bir hedef seviyesi verildiğini ve tutturulduğunu söylüyor. Ama gösterilen her şey **sonuç bilindikten sonra** çizilmiş. Tahminin kaydı yok, kaç tahminden kaçının tuttuğu yok.

Bir tahminin değeri tek bir doğru örnekte değil, **tüm tahminlerin kaydında** ölçülür. Kayıt olmadığında bir isabet hiçbir şey kanıtlamaz.

### Anlatının kapanışı

Mekanizma açıklaması artık tam: bankalar dipte alır, yukarı iter, tepede perakendeye satar. Boşluklar onların ölçekli çıkış yaptığı yerlerdir.

Bu anlatı **her fiyat hareketini** açıklayabilir:

- Yukarı gitti → dağıtıyorlar
- Aşağı gitti → topluyorlar
- Yatay → kitap oluşturuyorlar

Hiçbir gözlem bu anlatıyı yanlışlayamaz. Yanlışlanamayan bir açıklama, açıklama değildir.

---

## Video 7 — Yüksek ve düşük dirençli likidite koşuları

**Serinin en iyi videosu** — ve bunu söylerken önceki eleştirilerden geri adım atılmıyor. Fark net bir sebepten geliyor.

### Neden bu farklı

Önceki videolar hep "şurada al" diyordu. Bu video ilk kez **"şurada alma"** diyor, ve gerekçesi yapısal.

Fikir: bir seviyeye giden yolda ne kadar çok eski tepe ve dip varsa, oraya ulaşmak o kadar zordur. Yolda az yapı varsa kolaydır. Buna "yüksek dirençli" ve "düşük dirençli" likidite koşusu deniyor.

İki bakımdan farklı:

**Sayılabilir.** Hedef ile mevcut fiyat arasındaki salınım noktalarını sayabilirsin. Yorum gerektirmiyor, bir sayı çıkıyor.

**Bir şeyi yasaklıyor.** "Bu koşulda long arama" diyor. Yanlışlanabilir bir kısıt — ölçtüğünde ya diğerinden kötü performans gösterir ya göstermez.

### Yazılabilir tanımlar

**Direnç sayımı:** mevcut fiyat ile hedeflenen eski tepe/dip arasında kaç salınım noktası var. Az → düşük dirençli, çok → yüksek dirençli.

**Düşük dirençli bölgenin sınırları:** kırılan eski dip (üst sınır) ile kırılan kısa vadeli tepe (alt sınır) arasında kalan alan. Bu aralık içinde her geri çekilme yeni bir fırsat; aralığın dışına çıkınca koşullar zorlaşıyor.

Kritik fark: **hedef seçimi burada yoruma bağlı değil.** Eski tepe/dip zaten grafikte belli. Önceki videolardaki "hangi aralığı seçeceğim" problemi burada yok.

### Klasik karşılığı

Fikir yeni değil: bir seviyeye giden yolda ne kadar çok işlem görmüş fiyat varsa, geçmek o kadar zordur. Hacim profili analizinde, Wyckoff'ta, ve "boşluklar hızlı geçilir, yoğun bölgeler yavaş" gözleminde aynı şey var.

Ama şu kabul edilmeli: bu, serideki diğer kavramlardan farklı olarak **gerçekten ölçülmüş bir olguya yakın.** Fiyatın az işlem gördüğü aralıkları hızlı geçmesi, mikroyapı literatüründe desteklenen bir gözlem.

### Zayıf noktalar

**"Çok" ve "az" tanımsız.** Kaç salınım noktası yüksek dirençli sayılır? Kodlamak için bu eşiği sen koymak zorundasın — ve koyduğun an ölçtüğün şey senin eşiğin olur.

**Kaçış kapısı:** "genelde zor, ama önemli bir haber gelirse geçer." Kural tutmadığında haber sebep gösterilebilir.

**Yön varsayımı hâlâ dışarıda.** Düşük dirençli koşuyu tanımlamak için önce yapının yönünü bilmek gerekiyor, ve o tanım yine kesin değil.

### Genel ders

Bir kural "nerede işlem al" yerine **"nerede işlem alma"** diyorsa, genellikle daha test edilebilirdir. Yasaklayıcı kurallar yanlışlanabilir; üretici kurallar sonradan yeniden yorumlanabilir.

---

## Video 8 — Impuls hareketleri ve piyasa protraksiyonu

### Yazılabilir iddia — zaman bazlı sahte hareket

Günün üç belirli saatinde (New York gece yarısı, sabah 07:00, akşam 20:00) küçük bir impuls hareket olur ve **bu hareket asıl yönün tersidir.**

Kural açık: o saatlerden sonra fiyat yukarı giderse aşağıyı bekle, aşağı giderse yukarıyı.

**Serinin en kolay test edilebilir iddiası.** Saat sabit, yön kuralı sabit, yorum yok. Tek bir sorguyla ölçülür: o saat dilimlerindeki ilk hareketin yönü, sonraki birkaç saatteki yönle ters mi?

Forex için tasarlanmış; kriptoda 7/24 işlem var ama ölçmek yine mümkün.

### Büyük sorun

"Küçük" impuls hareketin ne kadar küçük olduğu tanımsız. Ne kadar sürede, ne kadar hareket eder? "Asıl yön" nasıl belirleniyor?

Sonuç şu problem: **hareketin büyüklüğü tanımsızsa, gün içinde her iki yönde de küçük hareketler olur ve sonradan hangisinin "sahte" olduğu seçilebilir.** Videodaki örneklerde tam olarak bu yapılıyor — her günde ters yönde bir hareket bulunup işaretleniyor.

Yine de bu, tanımsızlıkların **en kolay kapatılabilenidir.** Bir eşik koyarsan (belirli bir zaman penceresinde, ATR'nin belirli bir katı) iddia gerçekten ölçülebilir hale gelir.

---

# BÖLÜM II — SEKİZ VİDEONUN BÜTÜNÜ

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

| Konu | 4. video | 5. video |
|---|---|---|
| Salınım tespiti | Dört mum | Üç mum |
| Yön bilgisi | Kritik ön koşul | "Gerek yok" |

Ve üçüncü bir çelişki, senin kendi projenle: denge noktası videolarda **giriş bölgesi**, senin sisteminde **yasak bölge**.

Ölçülmüş bir sistemde bu tutarsızlıklar fark edilirdi. Fark edilmemesi, hiç ölçülmediğinin en güçlü işareti.

## Sekiz videoda bir kez bile geçmeyen cümle

> "Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."

Sıfır istatistik, sıfır örneklem, sıfır kayıt. Kazançlar pip cinsinden sayılıyor, kayıplar sayılmıyor, net sonuç hiç hesaplanmıyor.

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

---

# BÖLÜM III — DEĞERLENDİRME

## Ölçmeye değer iki fikir

**1. Direnç sayımı (Video 7).** Sayılabilir, yasaklayıcı, mekanizması makul. Ölçülebilir hale getirmek için tek eksik: "çok" ve "az" eşiğini sen tanımlamalısın.

Ama bir uyarı: bu fikir işlem sayısını **azaltır**. Senin range projen Aşama 1'de RET aldı çünkü sistem yeterince işlem üretmiyordu. Bu bir filtre, bir üretici değil — yani mevcut sisteme eklenecek bir şey değil, farklı bir sistemin çekirdeği olabilir.

**2. Zaman bazlı ters hareket (Video 8).** Serinin en kolay test edilebilir iddiası. Bir büyüklük eşiği tanımlarsan doğrudan ölçülür.

Bunlara ek olarak, üçüncü videodaki **"haftalık tepe/dip hangi gün ve hangi seansta oluşuyor"** sorusu da elindeki veriyle bir saatte cevaplanabilir ve gerçek bilgi verir.

## Metottan bağımsız alınabilecek disiplin

- Aracı seçmeden önce rejimi belirle (Video 1)
- Konsolidasyonda işlem yok, bekle (Video 1)
- Çok zaman dilimli düzenli kayıt tutma (Video 3)
- Analiz grafiği ile işlem grafiğini ayır (Video 3)
- Analizine âşık olma; beklentine uymuyorsa kenara çekil (Video 3)
- Yeni başlarken tahmin etmeye çalışma (Video 3)

Bunlar hangi yaklaşımı kullanırsan kullan geçerli.

## Asıl kazanım

Bu eleme işinin çıktısı, sekiz kavramlık bir liste değil. Çıktı, **filtrenin kendisi.**

Artık bir trading içeriğini üç soruyla eleyebiliyorsun: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü. Sekiz saatlik içeriği birkaç sayfaya indiren şey bu filtre — ve o filtre ICT'ye özel değil, her kaynağa uygulanır.

Bir de şu bağlantıyı kaybetme: **beş aylık range projesinde her belirsizliği bir karar maddesiyle kapatmak zorunda kaldın**, çünkü kapatmadan ölçemezdin. ATR'nin nasıl hesaplanacağından `stop_before` alanının hangi anı gösterdiğine kadar. Bu serideki hiçbir belirsizlik kapatılmıyor — ve kapatılmadığı için sistem her zaman haklı çıkabiliyor.

O iki deneyimin karşılaştırması, bu belgedeki her şeyden daha değerli.

## Beklenti notu

Diğer ayların transkriptleri de aynı formatta elenebilir. Ama eğilimi baştan söylemek gerekir: ilk ay temel kavramları veriyor; sonraki aylar bunların kombinasyonları olacak. **Yeni ölçülebilir tanım oranı muhtemelen düşecek**, anlatı ve ikna oranı artacak.

Bu bir tahmin, kesinlik değil — ve yanlış çıkarsa da bilinmesi iyi olur.
