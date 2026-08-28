# ICT Mentorship — Aralık 2016 (14 Video)
## Eleme Notları — Dördüncü Ay

---

## Bu ayın karakteri

Üç ay boyunca kavramlar **dağınık** verildi: order block birinci ayda ortaya çıktı ama tanımı eksikti, FVG altıncı videoda geçti ama nasıl hesaplanacağı belirsizdi, mitigation block üçüncü ayda bir hikâyeydi.

**Dördüncü ay, o tanımların tamamlandığı ay.** On dört videonun sekizi tek bir kurulumu baştan sona tanımlıyor: tanım, geçerlilik, giriş, stop, hedef.

Bunun sonucu şu: **yeni bilgi az, ama ölçülebilirlik ilk kez mümkün.** Üç ay boyunca "bunu nasıl kodlarım" sorusunun cevabı yoktu; burada çoğu kurulum için var.

Ve ikinci bir gelişme: birinci video fiyat grafiğinin **tamamen dışına** çıkıyor — faiz piyasaları. Üçüncü aydaki SMT fikrinin olgunlaşmış hali.

Kullanılan filtre önceki aylarla aynı: ileriye dönük mü, sonucu bilmeden yazılabilir mi, yanlış olsa nasıl görünürdü.

---

# BÖLÜM I — VİDEO VİDEO

## Video 1 — Faiz üçlüsü (interest rate triad)

Üçüncü ayın SMT fikrini bir adım ileri götürüyor, ve bir de **kritik bir işlev** ekliyor.

### Yazılabilir kural

Üç vadeli faiz futures'ı: **30 yıl, 10 yıl, 5 yıl.** Normal durumda üçü birlikte hareket eder.

Kural: **biri diğerlerine uymazsa** — biri daha yüksek tepe yaparken diğeri yapmıyorsa, ya da biri daha düşük dip yapmıyorsa — bu bir kayma sinyalidir.

Ve daha genel bir çerçeve: bir gösterge endeksi (Dow, dolar endeksi, CRB) ile bileşenleri arasındaki uyumsuzluk. Endeks yeni tepe yaparken bileşenler yapmıyorsa dağıtım; endeks yeni dip yaparken bileşenler yapmıyorsa toplama.

### Asıl katkı: doğrulama filtresi

İki aydır eksik olan bir işlevi dolduruyor:

1. Fiyat bir order block / likidite havuzu / FVG'ye gelir
2. **O anda faiz üçlüsüne bak**
3. Ayrışma varsa → kurulum geçerli
4. Ayrışma yoksa → **kurulumu geç, başka bir tane ara**

Videonun kendi ifadesi: *"hangi order block'tan işlem yapacağımı nasıl anlıyorsun diye soruyorsunuz — cevabı bu."*

Bu, üçüncü ayın birinci videosunda ertelenen sorunun bir cevabı. Tam cevap değil — order block ile turtle soup ayrımını hâlâ çözmüyor — ama **hangi seviyelerin dikkate alınacağına** dair mekanik bir filtre öneriyor.

Ve yasaklayıcı: "ayrışma yoksa işlem yok."

### Ölçülebilirlik

**Güçlü:** üç bağımsız seri, mekanik karşılaştırma, kamuya açık veri, yasaklayıcı bileşen. Test edilebilir hipotez net: *ayrışmanın olduğu order block'lar, olmayanlardan daha iyi sonuç veriyor mu?*

**Zayıf:** "aynı anda" ne demek? Video 90 dakikalık grafikte 15-18 günlük bir pencereye bakıyor ama zaman hizalaması kuralı yok. Kapatması kolay bir boşluk.

**Uyarı:** üç faiz vadesi **çok yüksek korelasyonlu** — aynı getiri eğrisinin üç noktası. Ayrışmaları nadir olur, ve nadir olduğu için "özel bir şey oluyor" sezgisi makul görünür. Ama örneklem sorunu doğurur.

### Yanlışlanamazlık

**Tek örnek, o haftanın kendisi** — sonuç bilinerek anlatılıyor.

**Kuralı belirsizleştiren bir esneklik:** *"her zaman tek bir yerde ayrışma aramak yeterli değil, bazen birkaç şeyi harmanlaman gerekir."* Kaç seriye bakılacak?

**"Bazen uzun vadeli bir kayma kısa vadeyi bozar, buna izin vermelisin."** Kural tutmadığında hazır gerekçe.

### Not

**SMT fikrinin en olgun hali.** Kripto için doğrudan analoğu var: BTC / ETH / toplam altcoin piyasa değeri, ya da BTC spot / perp / funding.

**Ve doğrulama filtresi fikri, senin projene uygulanabilir bir şablon:** sen `htf_bias`'ı EMA200 ile tanımlamıştın. Alternatif: ikinci bir seriden gelen teyit.

**Sınır:** filtre eklemek işlem sayısını azaltır, ve Aşama 1'de RET almanın sebebi zaten işlem sayısıydı. Çoklu enstrüman şart.

---

## Video 2 — İç ve dış aralık likiditesi

Serinin **en net kavramsal ayrımı** — ve ilk somut minimum eşik.

### Yazılabilir tanım

- **Dış aralık likiditesi:** mevcut aralığın **tepesinin üstü** ve **dibinin altı**. Buradaki stoplar.
- **İç aralık likiditesi:** aralığın **içindeki** boşluklar — likidite boşlukları, FVG'ler, order block'lar.

İşlem şablonu tek cümlede: **iç aralıktan gir, dış aralıkta çık.**

Bu ayrım fraktallığı da çözüyor: günlük grafikte "dış aralık" olan bir kırılım, aylık aralığın içinde kalıyorsa hâlâ **iç** likiditedir. Üç ayın kavram yığınını **iki kutuya** indiriyor.

### İlk somut eşik

> "Order block ile aradaki tepe arasındaki mesafe 20 pip ise o işlemi almam. 40 pip veya üstü olmalı — 75-80 ideal."

İlk kez bir kurulum, **büyüklük eşiğiyle** reddediliyor. Senin `min_rr` kapının kaba versiyonu ve aynı işi görüyor: geometri yetmiyorsa işlem yok.

Ve buna bağlı zaman dilimi eşlemesi: hedeflediğin pip aralığına göre grafik seç. 50+ pip → 30dk/1H, 250 pip → 4H/günlük.

### İyi olan taraf

**"Aralığın kırılmasına ihtiyacın yok."** 100 piplik bir aralıkta 75 pip almak yeterli. Bu, ITP sisteminde gördüğün sabit hedef probleminin tersinden ele alınışı.

**Seçicilik vurgusu.** "Her 30 piplik hareketi oynarsan seçici olamazsın."

### Zayıf

**Aralığın kendisi hâlâ tanımsız.** "Hangi dip ve hangi tepe aralığı oluşturuyor?" sorusunun kuralı yok — video örnekte bunu üç kez yeniden tanımlıyor.

Üçüncü ayın dört-aralık probleminin devamı. Ama kapatması kolay: senin pivot tabanlı tanımın uygulanabilir.

### Yanlışlanamazlık

**"Düşük dirençli koşu" tanımı döngüsel:** üst zaman dilimi yönü doğruysa düşük direnç, yanlışsa yüksek — ve o yön tanımsız.

**Örnekler tek yönlü:** USD/JPY'nin 2016 sonu yükselişi, tek trend dönemi.

---

## Video 3 — Order block, tam tanım

Dört ay sonra order block'un **ilk eksiksiz tanımı.**

### Yazılabilir kural

| Bileşen | Tanım |
|---|---|
| **Tanım** | Destek seviyesine yakın, açılış-kapanış aralığı en geniş olan en düşük düşüş mumu |
| **Geçerlilik** | O mumun tepesi, sonraki bir mum tarafından kırılır |
| **Giriş** | Fiyat o mumun **açılış fiyatına** döner (+5 pip spread payı) |
| **Mean threshold** | Gövdenin orta noktası — altına inmemeli |
| **Stop** | Gövdenin altı |
| **Hedef** | Eski tepenin üstündeki alım stopları |

**Ve yeni bir eşik:** order block geçerli sayılması için, oradan uzaklaşan hareket **gövde yüksekliğinin 2-3 katı** olmalı. Video bunu "notlarınıza yazın, ilk kez ekliyorum" diyerek veriyor.

İlk kez order block'un **yeterince güçlü olup olmadığına** dair mekanik bir kriter var.

### İkinci kural: seviye taşıma

Fiyat yeni bir düşüş mumu oluşturursa ve açılışı öncekinden yüksekse, order block **yukarı taşınır.** Video örnekte üç kez yapıyor.

Kodlanabilir, ama şu sorunu doğuruyor: her yeni düşüş mumu bir aday, yani **her zaman "en yakın" order block bulunur.**

### Zayıf noktalar

**"Destek seviyesine yakın"** — tanımın merkezinde duruyor ve tanımsız. Video "aylık/haftalık eski dip veya kırılmış tepe" diyor ama hangisini seçeceğinin kuralı yok.

**Yön ön koşulu:** üç zaman diliminin hepsi aynı yönü göstermeli — ölçülebilir tanım yok.

### Yanlışlanamazlık

**Yükseliş yönündeyken düşüş order block'ları yok sayılıyor.** Sistem tek yönde işlem üretiyor, karşı sinyaller tanım gereği görünmez.

**Örnek tek yönlü:** dolar endeksinin 2016 yükselişi. Trend dönerken ne olduğu gösterilmiyor.

**"Seçim döneminde kenardaydım"** — belirsizlik dönemleri örneklemden çıkarılıyor, geriye dönük bir seçim.

### Not

**Ölçmeye değer somut hipotez:** *2-3 kat hareket şartını sağlayan order block'lar, sağlamayanlardan farklı sonuç veriyor mu?* İlk kez order block'lar arasında mekanik bir ayrım öneriliyor.

Ama "destek seviyesine yakın" tanımsız kaldığı sürece, tanım eksiksiz görünse de uygulamada seçim gerektirir.

---

## Video 4 — Mitigation block

Üçüncü ayda yalnızca bir hikâyeydi; burada **mekanik bir prosedür.**

### Yazılabilir kural

Üç referans noktası:

- **A:** kısa vadeli dip
- **B:** ondan sonraki kısa vadeli tepe
- **C:** A'nın altına kırılış → **piyasa yapısı kayması**

C oluştuktan sonra fiyat A seviyesine döndüğünde, A'nın içindeki **son düşüş mumu** satış bölgesidir.

**Giriş:** o mumun gövde aralığı (tamamı)
**Stop:** mumun tepesinin üstü
**Hedef:** C'nin altındaki dip veya daha aşağıdaki destek

**Mantık ilk kez açık:** A–B arasında alım yapanlar C'de zarara geçti. Fiyat A'ya döndüğünde çıkıyorlar — bu satış baskısı yaratıyor.

### Order block'tan gerçek farkı

Üçüncü ayda "aynı şey, farklı hikâye" demiştim. **Bu video o değerlendirmeyi düzeltiyor.**

| | Order block | Mitigation block |
|---|---|---|
| Ön koşul | Yok | **Yapı kayması şart** |
| Neresi | Hareketin başladığı mum | **Kırılan dibin içindeki mum** |
| Sıralama | Serbest | A→B→C zorunlu |

Yapı kayması ön koşulu kavramı gerçekten ayırt edilebilir kılıyor. Ve o koşul mekanik.

### Ölçülebilirlik

**Güçlü:** üç nokta da mekanik, sıralama zorunlu, giriş/stop/hedef tanımlı, ön koşul kendisi de mekanik, yasaklayıcı bileşen var.

**Ve önemli:** bu kuralda **"destek seviyesine yakın" gibi tanımsız bir bileşen yok.**

**Mekanizma da test edilebilir:** zarara geçen pozisyonların başabaşta kapanması, davranışsal finansta belgelenmiş bir örüntü. Order block'un "bankalar burada aldı" anlatısından daha somut bir zemin.

### Yanlışlanamazlık

**Seviye taşıma yine var:** "her yeni dip oluştuğunda seviyeyi oraya taşı." Sonuç: geriye dönük bakınca hep bir mitigation block bulunuyor.

**Zaman sınırı yok.** Sınırsız bir kurulum geçmişte her zaman bulunur.

**Aşımlar normalleştiriliyor:** "biraz aştı ama gövdenin içinde kaldı." Tolerans tanımsız.

---

## Video 5 — Breaker

**Dört ayın en sıkı tanımlı kurulumu** — hiçbir adımında tanımsız bileşen yok.

### Yazılabilir kural (bullish)

1. Eski bir dip **kırılır** (stoplar süpürülür)
2. Fiyat döner ve iki dip arasındaki **salınım tepesini kırar** → yapı kayması
3. Fiyat o salınım tepesine **geri döner**
4. O tepenin içindeki **son yükseliş mumu** = alım bölgesi

**Giriş:** mumun tam gövde aralığı
**Stop:** aralığın altı
**Hedef:** yukarıdaki likidite

Bearish tam simetriği.

### Neden bu diğerlerinden temiz

| Kurulum | Tanımsız bileşen |
|---|---|
| Order block (V3) | "destek seviyesine yakın" |
| Mitigation block (V4) | Yok, ama üst zaman dilimi ön koşulu var |
| **Breaker (V5)** | **Yok** |

Her adım fiyat yapısından türüyor. **Üst zaman dilimi ön koşulu bile gerekmiyor** — kurulumun kendisi yön üretiyor.

Ve **iki koşullu:** hem stop süpürmesi hem yapı kayması. İkisi de olmadan breaker yok. Yanlışlanabilirliği doğrudan artırıyor.

### Bir de dürüst bir mum seçimi kuralı

Video, "neden bu mum, öteki değil" sorusunu soruyor ve cevaplıyor: **düşüşten önceki en yüksek olan.** Üç ay boyunca bu seçim kuralsız bırakılıyordu.

### Ölçülebilirlik

**Dört ayın ölçmeye en uygun kurulumu.** Senin harness'ında neredeyse hazır:

- Dip/tepe tespiti → pivot mantığın var
- Stop süpürmesi → sweep tanımın var
- Yapı kayması → pivot kırılımı
- Mum seçimi → tanımlı

**Karşılaştırma grubu net:** stop süpürmesi olup yapı kayması olmayan durumlar. İki koşulun katkısı ayrı ayrı ölçülebilir.

### Yanlışlanamazlık — bu videoda az

**Mekanizma anlatısı var** ("satıcılar sıkıştı") ama **kural ondan bağımsız çalışıyor** — hikâyeyi silsen kural aynen kalır. Order block'ta durum böyle değildi.

**Zaman sınırı yok** — ölçmek için sen bir pencere koymalısın.

### Not

**Ölçmeye değer somut hipotez:** *stop süpürmesi + yapı kayması birlikte olduğunda, tek başına stop süpürmesinden farklı bir sonuç çıkıyor mu?*

Bu, senin sweep ölçümünün doğrudan devamı. Sweep'i tek başına ölçtün, sonuç sıfıra yakındı. Breaker ikinci bir koşul ekliyor.

**Not:** ikinci koşul işlem sayısını azaltır. Sweep ölçümünde 4H'de örneklem zaten sınırdaydı; çoklu enstrüman gerekir.

---

## Video 6 — Rejection block

**Gerçekten yeni bir fikir** — sweep tanımını gevşeten bir varyant.

### Yazılabilir kural

**Temel fikir:** fiyat yeni bir tepe yapmak zorunda değil. Yeni bir **gövde** tepesi yapması yeterli.

1. Uzun fitilli bir veya birkaç mumdan oluşan salınım tepesi bul
2. **En yüksek fitil ucu** ile **en yüksek gövde noktası** arasındaki aralığı işaretle → blok
3. Fiyat, en yüksek gövde noktasının **üstüne** çıkarsa (fitili aşmasa bile) → dağıtım sinyali
4. Bloğun **alt sınırına** dönüşte satış

**Giriş varyantı:** gövde tepesini aştıysa ama fitili aşmadıysa, geri düşerken **stop emriyle** satış.

### Neden bu farklı

Senin ölçtüğün sweep tanımı: **fitil, önceki fitili aşmalı.**
Bu video: **gövde, önceki gövdeyi aşması yeterli.**

Rejection block, sweep'in **daha gevşek** versiyonu — daha fazla sinyal üretir. Ve senin sweep ölçümünde 4H'de örneklem sınırdaydı.

### Ölçülebilirlik

**Güçlü:** blok sınırları tamamen mekanik. Tetik açık.

**Karşılaştırma doğrudan kurulabilir:** aynı veride fitil bazlı ve gövde bazlı sweep yan yana ölçülebilir.

**Zayıf:** "uzun fitil" tanımsız. Fitil/gövde oranı mı, ATR katı mı?

### Tekrarlanan hata

**"Gövdeler kurumsal, fitiller perakende."** Beşinci kez, ve burada tanımın **temeli** haline gelmiş.

İddia yanlış: mum grafiği hacim dağılımı hakkında bilgi vermez, "kurumsal fiyat" diye ayrı bir fiyat yoktur.

**Ama şunu ayır:** iddia yanlış olsa da **kural ölçülebilir kalıyor.** "Gövde bazlı sweep, fitil bazlı sweep'ten farklı sonuç veriyor mu?" sorusu, arkasındaki hikâye doğru olmasa da geçerli.

### Not

**Ölçmeye değer hipotez, çok net:** senin harness'ında bu, tek parametre değişikliği — sweep tetiğinde `high` yerine `max(open, close)`.

Sweep ölçümünde sonuç %33 isabet, 2R'de tam başabaştı. Gövde bazlı tanım daha çok örnek üretir — örneklem sorununu hafifletir, ama isabeti düşürebilir de.

---

## Video 7 — Reclaimed block

**Dört ayın en zayıf kurulumu** — ve zayıflığın sebebi tek kelime: **eğri (curve).**

### Yazılabilir görünen kural

1. Fiyat düşerken, her **kısa vadeli sıçramadan önceki son düşüş mumunu** işaretle
2. Bunlar "erken alım" bölgeleri
3. Dip oluşup fiyat yükselince, aynı mumlara dönüldüğünde **alım** yap

### Ama merkezinde ölçülemez bir bileşen var

Kuralın tamamı şuna bağlı: **"eğrinin hangi tarafındasın?"** — yani dip oluştu mu.

Gerçek zamanda soru şu: fiyat düşerken, bu son dip mi yoksa daha aşağı gidecek mi? **Bunu bilseydin, zaten reclaimed block'a ihtiyacın olmazdı.**

Video bu sorunu açıkça kabul ediyor: *"düşüş sırasında bu mumları giriş sanan traderlar stop olur, çünkü onlar sadece hedge hareketiydi."*

Yani **aynı mum**, eğrinin solundaysa tuzak, sağındaysa fırsat. Ve hangisinin geçerli olduğu ancak dip oluştuktan sonra bilinir.

### Karşılaştırma

| Kurulum | Ön koşul | Mekanik mi? |
|---|---|---|
| Breaker (V5) | Stop süpürmesi + yapı kayması | **Evet** |
| Mitigation (V4) | Yapı kayması | **Evet** |
| Order block (V3) | "Destek seviyesine yakın" | Hayır |
| **Reclaimed (V7)** | **"Eğrinin sağ tarafı"** | **Hayır — dönüş noktası bilgisi gerekiyor** |

### Not

**Bu kurulumu ölçme listesine alma.** Ön koşulu, ölçmek istediğin şeyin kendisi.

**Ama bir şey öğretiyor:** bir kural geçmişte her zaman doğru görünüyorsa, muhtemelen gerçek zamanda bilinmeyen bir girdiye dayanıyordur.

---

## Video 8 — Propulsion block

### Yazılabilir kural

1. Geçerli bir bullish order block var
2. Fiyat yükseliyor, sonra yeni bir **düşüş mumu** oluşuyor
3. O yeni mum, **eski order block'un aralığına değiyor**
4. Bu ikinci mum = propulsion block

**Giriş:** mumun tepesi
**Stop:** mean threshold'un altı
**Ayırt edici iddia:** propulsion block'ta mean threshold neredeyse hiç kırılmaz

### Ölçmeye değer kısmı

*İki order block'un üst üste bindiği yerler, tek başına duran order block'lardan farklı davranıyor mu?*

Kodlaması kolay — mevcut order block tespitine örtüşme kontrolü eklemek yeterli. Karşılaştırma grubu doğal.

**Pratik yan ürün:** mean threshold kırılırsa hemen çık. Dar stop için mekanik bir gerekçe — ama senin ölçtüğün gibi dar stop maliyeti R cinsinden artırır.

### Zayıf yanlar

**"Yükseliş bağlamı" ön koşulu** tanımsız.

**Ardışık mumları birleştirme kuralı belirsiz:** örnekte üç düşüş mumu "tek order block" sayılıyor. Kaç mum, hangi koşulda? Bu, order block sınırlarını genişletiyor, "değme" ihtimalini artırıyor.

**"Bir iki pip aşabilir"** — tolerans tanımsız.

### Yanlışlanamazlık

**"Mean threshold kırılırsa muhtemelen iyi bir işlem değildi."** Kurulumun başarısızlığı, kurulumun yokluğuna çevriliyor.

**Ve devamı daha ilginç:** "kırılırsa ters yöne dönmeyi düşünebilirsin." İki sonuç da kullanılabiliyor.

---

## Video 9 — Vacuum block

Klasik teknik analizin en eski fikirlerinden biri, yeni bir isimle — ama tanım gerçekten temiz.

### Yazılabilir tanım

Bir haber veya seans açılışı sonrası oluşan **gerçek fiyat boşluğu**: önceki mumun kapanışı ile sonraki mumun açılışı arasında **hiç işlem görmemiş** aralık.

Ve tanımın temiz yanı: boşluk, sanki bir mummuş gibi ele alınıyor — açılışı, kapanışı, orta noktası var.

**İddia:** fiyat geri dönüp bu boşluğu kapatma eğilimindedir.

### FVG ile farkı — ve bu fark önemli

FVG'de o aralıkta **işlem gerçekleşmiştir**, sadece grafikte üst üste binmemiştir.
Vacuum block ise **gerçek bir işlem boşluğu.**

Ayrım hem kavramsal olarak doğru hem ölçülebilir bir fark yaratıyor. Mekanizması da farklı: gerçek boşlukta emir defterinde hiç likidite yoktur.

**Kripto için not:** 7/24 işlem gördüğü için spot piyasada gerçek gap neredeyse hiç oluşmaz. Bu kavram forex ve vadeli piyasalara özgü — **senin verinde uygulanabilirliği çok sınırlı.**

### Klasik karşılığı

Hisse senedi analizinde **"gap fill"** olarak onlarca yıldır var, ve akademik olarak incelenmiş — kapanma oranları yüksek çıkıyor ama tek başına edge oluşturduğuna dair güçlü kanıt yok.

### Yanlışlanamazlık — saf hali

**Günün saati kuralı:** New York erken saatte gap olursa gün içinde kapanır; geç saatte olursa açık kalır ve sonra kapanır.

**Her iki sonucu da açıklıyor.** Kapandıysa erkendi, kapanmadıysa geçti. Eşik verilmiyor.

**"Tam kapanma olur, ya da order block'ta durur."** İki senaryo, aralarında seçim kuralı yok.

**Bu videoda hiç grafik örneği yok** — sadece şematik çizimler. Dört ayda ilk kez, ve aslında dürüst bir tercih: geriye dönük örnek seçme sorunu ortadan kalkıyor.

---

## Video 10 — Likidite boşlukları

**Kritik bir itiraf var** ve o itiraf, fikri büyük ölçüde etkisiz kılıyor.

### Yazılabilir tanım

Konsolidasyondan çıkan, tek yönlü, uzun gövdeli hareketin bıraktığı aralık.

**İddia:** fiyat geri dönüp o aralığı "dengeler."

### Zaman sınırı yok — ve bunu kendisi söylüyor

> *"Ne kadar süreceğine dair kural yok. Aylarca açık kalabilir, gün içinde kapanabilir."*

Dürüst bir itiraf — ama kuralı ölçülemez kılıyor.

Düşün: yeterince beklersen **her boşluk kapanır.** Zaman sınırı olmayan bir "kapanır" iddiası yanlışlanamaz.

Ölçmek istersen sen bir pencere koymak zorundasın — ve o an ölçtüğün şey videonun iddiası değil, senin tanımın olur.

### Ölçülebilir olan kısım

**Soru:** *boşluklar hangi zaman penceresinde, hangi oranda kapanıyor?*

Cevabı "%90'ı 20 bar içinde" ise bir şey var; "%50'si 200 bar içinde" ise rastgeleden farksız.

### Örnek çözümlemesi — ayın en sorunlu hali

Video tek bir hareketi dört zaman diliminde çözümlüyor:

1. Boşluk tanımlanıyor
2. Fiyat ilk kez geliyor → "yeterli değil, daha fazla satış fiyatlanıyor"
3. İkinci kez geliyor → "tamam, şimdi kapandı"
4. İki mum arasında minik gap → "işte giriş burası"

Her adım sonradan açıklanıyor. "Kaç kez dokunması gerekir" sorusunun kuralı yok.

**Ve 1 dakikalık grafikte 26 pip'lik bir aralık** likidite boşluğu ilan ediliyor.

### Önemli bir ayrım

**Bu boşluk, forex spot piyasada gerçek bir gap değil.** İki mum arasında gövdelerin örtüşmemesi, o aralıkta işlem olmadığı anlamına gelmez — sadece fiyatın hızlı geçtiği anlamına gelir. Dokuzuncu videodaki vacuum block gerçek boşluktu; bu değil.

---

## Video 11 — Likidite havuzu baskınları

**Dört ayın ilk sayısal parametreleri** — seride gerçekten yeni bir şey.

### Yazılabilir kural, sayılarla

| Parametre | Değer |
|---|---|
| Süpürme derinliği beklentisi | Eski dibin 10-20 pip altı (15-30dk) |
| Giriş | Limit emri, dibin 10-20 pip altında |
| Stop | 30-50 pip |
| **Geçersizlik eşiği** | **Dibin 25 pip altına inerse → stop avı değil, gerçek düşüş — çık** |

Son madde önemli: **ilk kez sweep'in ne zaman sweep olmadığına dair sayısal bir kriter var.**

Senin sweep ölçümünde bu kriter yoktu. `minWick` vardı ama derinlik **üst sınırı** yoktu — çok derin bir delme de sweep sayılıyordu.

### Ölçmeye değer hipotez, çok net

*Sweep derinliğinin bir üst sınırı, sonucu iyileştiriyor mu?*

Sığ süpürmeler ile derin süpürmeler farklı davranıyor mu? Sığ olanlar dönüyor, derin olanlar devam ediyor mu?

**Senin harness'ında tek parametre eklemesi.** Kripto için pip yerine ATR katı.

**Ve bu, sweep sisteminde %33 isabet almanın olası bir açıklaması olabilir:** derin süpürmeler örneklemin içindeyse, onlar aslında trend başlangıçlarıydı ve sistemi aşağı çekiyordu.

### Rol yapma tekniği

*"Şu an short olsaydım stop'um nerede olurdu?"* — basit ama işlevsel bir sezgi aracı, ve ölçülebilir bir gözleme dayanıyor: emirler belirli seviyelerde kümelenir.

### Yanlışlanamazlık

**Dört örnek, hepsi geriye dönük, hepsi çalışmış, ve dördü de aynı haftadan.**

**Geriye dönük gerekçelendirme:** "Cuma günü olduğu için yeni tepe beklemiyorduk."

**Hedef seçimi hâlâ kuralsız:** bir örnekte üç ayrı "katmanlı buy stop bölgesi" hedef gösteriliyor.

---

## Video 12 — Fair value gap, tam tanım

FVG **ilk kez düzgün tanımlanıyor** — birinci ayda verilen tanım eksikti.

### Yazılabilir tanım

Üç mumluk yapı. Önemli olan, **hangi aralığın açık kaldığının** hesaplanma biçimi:

- **Sol mum:** dibinden kapanışına kadar yukarı hareket olmuş
- **Orta mum:** büyük düşüş mumu
- **Sağ mum:** açılışından tepesine kadar yukarı hareket olmuş

**FVG = sol mumun dibi ile sağ mumun tepesi arasındaki boşluk.**

**Ve ikinci bir netlik:** aynı yapı, alt zaman diliminde bakıldığında **likidite boşluğu** olarak görünür. Yani ikisi, farklı ölçeklerde aynı şey. Dört ayın kavram karışıklığını sadeleştiriyor.

### Ölçülebilirlik

**Tanım tamamen mekanik** — üç mum, dört fiyat noktası, aritmetik.

**Ölçülebilir soru:** *FVG'ler hangi oranda, hangi zaman penceresinde doluyor?* Karşılaştırma grubu kolay: rastgele seçilmiş aynı genişlikte aralıklar.

### Ama bir sorun büyüyor: ölçek

Videonun ikinci yarısı 5 dakikalık grafikte **2 pip'lik** boşluklardan bahsediyor ve orada giriş öneriyor.

Tipik EUR/USD spread'i 0.5-1 pip; kayma hesaba katılınca işlem maliyeti sinyalin büyüklüğüne yakın.

**Senin kendi ölçümünle doğrudan çelişiyor:** gapsiz stopların −1.088R çıkması, maliyetin R cinsinden ne kadar yer kapladığını göstermişti. 2 piplik bir sinyalde maliyet, sinyalin **tamamını** yiyebilir.

### Yanlışlanamazlık — saf hali

Videonun ikinci yarısı tek bir günü **mum mum** çözümlüyor ve her dönüşü "mükemmel teslimat" olarak açıklıyor.

**Yeterince küçük ölçeğe inersen, her fiyat noktasının yakınında bir boşluk vardır.** İki mum arasında 2 pip fark bulmak herhangi bir grafikte kolay.

Araç sonsuz sayıda aday üretiyor, ve hangisinin seçileceğinin kuralı yok.

**"Mükemmel teslimat" tanımsız:** 1 pip yaklaşma da "mükemmel", 3 pip aşma da.

### Not

**Ölçmek istersen ölçek filtresi şart** — minimum FVG genişliği, örneğin ATR'nin belirli bir katı. Senin `min_width_atr` filtren aynı işi görüyordu.

---

## Video 13 — Momentum ayrışması

Üçüncü ayın trend çizgisi videosunun aynı yapıda tekrarı — bu kez göstergeler için.

### Yazılabilir kural

**Tip 1 ayrışma (klasik):** fiyat daha yüksek tepe yapar, gösterge yapmaz → perakende satış sinyali sayar.

**Tip 2 (gizli / trend takip):** fiyat daha yüksek dip yapar, gösterge daha düşük dip yapar → trend devam sinyali.

Kural: üst zaman dilimi yükseliş gösteriyorsa, **tip 1 ayrışmayı satış değil tuzak olarak oku.**

Ve somut bir beklenti: **gösterge önceki dibinin altına iner, ama fiyat inmez.** Ölçülebilir bir asimetri.

### Doğru olan eleştiri

- Göstergeler **geçmiş fiyatın matematiksel dönüşümü** — yeni bilgi taşımıyorlar
- Fiyat göstergeden habersiz
- Aşırı alım/satım + ayrışma dört durumu, tek başına karar için yetersiz
- **Beşinci durum:** bazen işlem yapılmamalı

Bu son madde, seride tekrar eden en sağlam disiplin fikri.

Not: bu doğru kısımlar **senin de bildiğin şeyler** — ATR/BB konuşmasında aynı noktaya gelmiştik.

### Ve aynı çelişki, dördüncü kez

Trend çizgileri "öznel olduğu için" reddedilmişti. Burada göstergeler "geçmişin dönüşümü olduğu için" reddediliyor.

**Ama order block da geçmişin bir seçimi.** Hangi mum, hangi zaman dilimi — bunların hiçbiri fiyatın "farkında olduğu" şeyler değil.

Ve bu videoda tam olarak o oluyor: gösterge reddediliyor, sonra "fitil mi gövde mi" sorusu **duruma göre** cevaplanıyor: *"burada gövdeyi kullan, çünkü buradaki koşullar öyle."* Koşulun ne olduğu tanımlanmıyor.

### Yanlışlanamazlık

**Örnekte tam olarak beklenen sorun görünüyor:** video üç ardışık tip 1 ayrışma gösteriyor, üçünde de "bu da tuzak" diyor — ve dördüncüsünde satış geliyor.

Kural "ayrışma tuzaktır" ama bazen değildir, ve hangisinin gerçek olduğunun kuralı yok. Video bunu kendisi gösteriyor ama sorun olarak adlandırmıyor.

**"Bu hareketi boş ver, şimdi onu konuşmuyoruz."** Uyumsuz kısımlar açıkça atlanıyor.

### Not

**Ölçmeye değer hipotez:** *tip 1 ayrışmalar, üst zaman dilimi yönüne göre ayrıştırıldığında ters mi çalışıyor?* Stochastic standart, ayrışma tespiti mekanik.

**Ama "karşı taraf düşüncesi" fikrinin sınırını da not et:** üç kez tekrarlandı — trend çizgisi, formasyon, gösterge. Bu, tek başına bir sistem değil, bir **filtre fikri.** Ve filtreler işlem sayısını azaltır.

---

## Video 14 — Çifte tepe ve dip

**Dört ayın en spesifik ölçülebilir iddiası.**

### Yazılabilir kural

Prosedür tamamen mekanik, hiçbir seçim noktası yok:

1. İki eşit tepe bul
2. Aralarındaki **dibi** bul
3. **Aralık = tepe − dip**
4. Bu aralığı tepeden **yukarı yansıt** → hedef seviye

Çifte dip için tam simetriği.

**İddia:** fiyat çifte tepeyi kırar, ve klasik traderların beklediği yerde durmaz — projeksiyon seviyesine kadar gider.

Bu, klasik **measured move** fikrinin aynısı, "tuzak" çerçevesine oturtulmuş: çifte tepe direnç değil, hedef.

### Neden ölçülebilirlik açısından güçlü

| Kurulum | Seçim noktası |
|---|---|
| Order block | Hangi mum, hangi zaman dilimi |
| FVG | Hangi boşluk (küçük ölçekte sonsuz aday) |
| Reclaimed block | Dönüş noktası bilgisi gerekiyor |
| **Çifte tepe projeksiyonu** | **Yok — aritmetik** |

Tepe, dip, çıkarma, toplama. Ve hedef **tek bir sayı.**

**Yanlışlanabilirlik açısından dört ayın en iyisi.** Fiyat ya gitti ya gitmedi.

### Ölçmeye değer hipotez

*Çifte tepe kırıldıktan sonra, fiyat measured move seviyesine ne oranda ulaşıyor?*

Karşılaştırma grubu kolay: aynı büyüklükte rastgele bir projeksiyon.

**Kripto için doğrudan uygulanabilir** — pip yerine yüzde ya da ATR katı.

### Ama bir sorun: "1 pip'e kadar tuttu"

Video iki örnekte "hedefe 1 pip farkla gitti" diyor. Bu, iddiayı **zayıflatıyor:**

Bir projeksiyon seviyesi, fiyatın **o civara** gelmesiyle tutmuş sayılır — tam üstüne gelmesi tesadüftür. "1 pip'e kadar" vurgusu, seçilmiş örneklerin işareti.

Doğru ölçüm: bir tolerans bandı tanımla (±%0.2), ve **tüm** çifte tepelerde ulaşma oranını say.

### Yanlışlanamazlık

**"Zaman alabilir ama eninde sonunda ulaşır."** Video bunu açıkça söylüyor. Zaman sınırı olmayan bir hedef iddiası, onuncu videodaki likidite boşluğuyla aynı sorunu taşıyor.

**"Algoritma bu referans noktalarını biliyor."** Mekanizma anlatısı ölçülemez ve gereksiz — kural ondan bağımsız çalışıyor.

---

# BÖLÜM II — DÖRDÜNCÜ AYIN BÜTÜNÜ

## Ölçülebilirlik tablosu

| Video | Kavram | Değerlendirme |
|---|---|---|
| V1 | Faiz üçlüsü | **Ölçülebilir** — fiyat dışı veri, en özgün |
| V2 | İç/dış aralık likiditesi | Kısmen — kavramsal sadeleştirme |
| V3 | Order block (tam tanım) | Kısmen — "destek yakınlığı" tanımsız |
| V4 | Mitigation block | **Ölçülebilir** — yapı kayması mekanik |
| V5 | Breaker | **Ölçülebilir** — en temiz tanım |
| V6 | Rejection block | **Ölçülebilir** — sweep'in gövde bazlı varyantı |
| V7 | Reclaimed block | **Ölçülemez** — dönüş noktası girdisi gerekiyor |
| V8 | Propulsion block | Kısmen — örtüşme mekanik, bağlam değil |
| V9 | Vacuum block | Kısmen — temiz ama kripto için geçersiz |
| V10 | Likidite boşluğu | **Ölçülemez** — zaman sınırı yok |
| V11 | Sweep derinlik eşiği | **Ölçülebilir** — ilk sayısal kriter |
| V12 | FVG (tam tanım) | **Ölçülebilir** — ölçek filtresiyle |
| V13 | Momentum ayrışması | Kısmen — yön ön koşulu tanımsız |
| V14 | Çifte tepe projeksiyonu | **Ölçülebilir** — sıfır seçim noktası |

**Ölçülebilir: 7 · Kısmen: 5 · Ölçülemez: 2**

Bu, dört ayın en yüksek oranı.

## Ayın üç yapısal özelliği

**1. Tam tanımlar geldi.** Üç ayın dağınık kavramları (order block, FVG, mitigation, breaker) burada eksiksiz yazıldı. Yeni bilgi az, ama ölçülebilirlik ilk kez mümkün.

**2. "Karşı taraf düşüncesi" üç kez tekrarlandı** — trend çizgisi (3. ay), formasyon (2. ay), gösterge (V13). Aynı yapı: yaygın bilinen aracı ters oynamak. Bu, tek başına bir sistem değil, bir **filtre fikri.**

**3. Ölçek küçüldü.** Birinci ay günlük grafikte başlamıştı; bu ay 5 dakikada 2 piplik FVG'ler geldi. Maliyet açısından bu, senin ölçtüğün −1.088R sorununu ciddi biçimde büyütür.

## Tekrarlanan sorunlar

**Yön ön koşulu, dört ayda kaçıncı kez tanımsız.** V3, V6, V8, V13 — hepsi "üst zaman dilimi şu yönü gösteriyorsa" ile başlıyor. Yalnızca üçüncü ayın dördüncü videosu (aylık aralık kuralı) buna mekanik cevap veriyordu, ve bu ay ondan hiç yararlanılmıyor.

**Seviye taşıma kuralı** (V3, V4) örneklemi belirsizleştiriyor: her yeni mum bir aday olunca, geriye dönük bakışta hep bir seviye bulunur.

**Zaman sınırsızlık** (V4, V5, V10, V14): "eninde sonunda olur" tipi iddialar yanlışlanamaz.

**"Gövde kurumsal, fitil perakende"** — beşinci kez, ve V6'da tanımın temeli haline gelmiş. Yanlış bir iddia, ama üstüne kurulan kural yine de ölçülebilir.

**Tek örnek, geriye dönük** — on dört videoda değişmeyen tek şey. V9 istisna: hiç grafik örneği yok, sadece şema.

---

# BÖLÜM III — DEĞERLENDİRME

## Ölçmeye değer yedi fikir, öncelik sırasıyla

**1. Breaker (V5).** Dört ayın en temiz tanımı, tanımsız bileşen yok, senin harness'ında neredeyse hazır. Hipotez: *stop süpürmesi + yapı kayması, tek başına sweep'ten farklı sonuç veriyor mu?*

**2. Sweep derinlik eşiği (V11).** Tek parametre eklemesi, ve senin mevcut ölçümünü doğrudan iyileştirebilir. Hipotez: *derinlik üst sınırı sonucu iyileştiriyor mu?*

**3. Rejection block (V6).** Sweep'in gövde bazlı varyantı — `high` yerine `max(open, close)`. Örneklem sorununu hafifletebilir.

**4. Çifte tepe projeksiyonu (V14).** Sıfır seçim noktası, hedef tek bir sayı, kripto için doğrudan uygulanabilir. Tolerans bandı ve zaman penceresi sen tanımlarsın.

**5. Mitigation block (V4).** Yapı kayması ön koşulu mekanik, mekanizması davranışsal finansta belgelenmiş.

**6. FVG doluluk oranı (V12).** Tanım tartışmasız, ama **ölçek filtresi şart.**

**7. Faiz üçlüsü / çoklu seri ayrışması (V1).** Fiyat dışı veri — kripto analoğu: BTC/ETH/altcoin, ya da spot/perp/funding.

## Ölçmeye değmeyen ikisi

**Reclaimed block (V7)** — ön koşulu, ölçmek istediğin şeyin kendisi.

**Likidite boşluğu, zaman sınırı olmadan (V10)** — sınırsız bir "kapanır" iddiası yanlışlanamaz.

## Dört ayın toplamı

| Ay | Karakter |
|---|---|
| **1. ay** | Kurulum kavramları — sekiz tanım, yedisinin klasik karşılığı var, sistem olarak ölçülemez |
| **2. ay** | Para yönetimi — doğru ama metoda özgü değil; metoda özgü kısımlar hatalı |
| **3. ay** | En ölçülebilir fikirler (SMT, açılış fiyatı, aylık aralık) kavram yığınıyla iç içe |
| **4. ay** | Tam tanımlar — yeni bilgi az, ölçülebilirlik ilk kez mümkün |

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
