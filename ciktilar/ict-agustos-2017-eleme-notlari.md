# ICT Mentorship — Ağustos 2017
## On ikinci ve son ay · 4 video · Yukarıdan aşağı analiz şablonları · Eleme notları

Bu belge iki iş yapıyor. Önce her videoyu **öğretiyor** — kavramları, prosedürleri, sayıları ve videonun kendi gerekçesini, olduğu gibi ve değerlendirmesiz. Sonra her videoyu **eliyor** — hangi iddia sonucu bilinmeden yazılabilir, hangisi yazılamaz, hangi kural yanlışlanabilir.

## Bu ayın karakteri

On iki ayın son ayı, ve on bir ay boyunca vaat edilen şey: **yukarıdan aşağı analiz şablonları.** Dört video, dört zaman dilimi geçişi.

| Video | Geçiş | Çıktı |
|---|---|---|
| **V1** | Aylık → haftalık | Aylık yön eğilimi |
| **V2** | Haftalık → günlük | Haftalık yön eğilimi |
| **V3** | Günlük → 4 saatlik | Günlük yön eğilimi |
| **V4** | 4 saatlik → 5 dakikalık | Kurulum, giriş, hedef |

Ve ayın kendi tanımı açık: *"Bu benim kişisel yaklaşımım... **12 aydır sana bir sürü bilgi verdim ve o bilginin çoğu senin kendine uyarlaman için esnek olacak.** ... Bu, tam olarak fiyatı nasıl yorumladığım ve doğru olduğumda piyasaları nasıl çağırabildiğim."*

**Temmuz'un kapanış ölçütü tam olarak bu ayı sınıyordu:**

> *Bir kayıt, ancak eşik kayıttan önce konursa ölçüm olur.*

Ağustos, on iki ayın prosedürünü tek yerde topladığı için, sorunun cevabı doğrudan görülebiliyor: **eşikler şablonun içinde mi, yoksa sonunda mı?**

**Cevap ikili, ve ikisi de bu ayda açıkça söyleniyor.**

**Birincisi:** ayda **gerçek eşikler var**, ve biri on iki ayın en iyi tanımlı kuralı:

> *"Fiyat daha yüksek zaman dilimi iskonto array'inde işlem görürken **açık pozisyonun yaklaşık %15 veya daha fazla düşmesini** görmek isterim — bu son derece boğa. ... **Bu iki kriterin arasındaki durumlarda açık pozisyon analizimde hiç dikkate alınmaz. Ya bu iki kriterden birini karşılamalı ya da ona hiç başvurmayacağım.**"*

Eşik var (%15), yön var (düşüş/artış), bağlam koşulu var (iskonto/prim array), **ve eylemsizlik kuralı var** (aradaysa kullanma). On iki ayda bu netlikte ikinci bir kural yok.

**İkincisi, ve bu ayın — belki tüm serinin — en önemli cümlesi:**

> *"Tüm o eğitim videolarını izleyen insanlar hayal kırıklığına uğruyor çünkü **net, kesin, kural tabanlı fikirler eksik — ve bunu kasıtlı yaptım.** O eğitimler, **başka birinin benim yapabildiğimi tekrarlayıp tekrarlayamayacağını görmek için** dışarıda duruyor. **Hiç kimse yapamadı. Bu mentorlukta bile yapamadılar.**"*

Ve ayrıca:

> *"**Benim yaptıklarımın tamamını asla otomatikleştiremeyeceksin, olmayacak** — ve bence şimdiye kadar öğrettiğim hiç kimse de yapamadı. Gerçekten çok eğitimli insanlarla konuştum, **kantitatif analistlerle konuştum, algoritmacılarla konuştum, ve inan bana denediler.**"*

**Bu, yöntemin ölçülebilirliği hakkında kaynağın kendi ifadesidir**, ve on iki ay boyunca bu belgelerin ürettiği bulgunun doğrudan teyididir. Belgeler *"bu kural mekanik değil, bu eşik yok, bu tanım öznel"* diye kaydetti; son video **bunun kasıtlı olduğunu ve kimsenin tekrarlayamadığını** söylüyor.

**Üçüncüsü, ve aynı yönde:** ikinci videoda bir gösterge parametresi seçiliyor, ve seçme yöntemi sesli olarak söyleniyor:

> *"Şimdi göstergeyi 14'e değiştireceğiz. **Ve bu, biçim uydurmaya (form fitting) benziyor, biliyorum** ama birazdan ne yaptığımı göreceksin."*

> *"Yapacağım şey: **hangisinin geçmişteki önemli tepe ve diplerle en doğru şekilde örtüştüğüne** bakacağım."*

Parametre, **geçmiş sonuçlara bakılarak** seçiliyor, ve gerekçe seçimden **sonra** veriliyor. Temmuz'un kapanış ölçütünün tam ihlali, ve bu ay onu bir örnek üzerinde gösteriyor.

**Dördüncüsü:** on iki ayda ilk kez bir işlem **önceden ilan edilmiş bir stop ile** anlatılıyor. Dördüncü videonun altın örneğinde giriş **1278**, stop **1274** — ve tarih veriliyor (23 Ağustos canlı seansı). **Ama hedef verilmiyor** (*"herhangi bir prim array"*), dolayısıyla R hesaplanamıyor.

Beşincisi, aritmetikte: **merkez bankası faiz oranlarının tamamı doğru** (RBA %1,50, Fed %1,00→%1,25, ECB %0,00, BoE %0,25, BoC %0,75, tarihleriyle birlikte), Fibonacci uzantıları bu ay **doğru** (1,272 = √1,618; 1,618 = φ) — Mart'ın "1,68" hatasının aksine. **Ama bir terim yanlış kullanılıyor ve sonucu var:** *"standart sapma"* diye adlandırılan büyüklük, aslında **aralığın yarısıdır**, ve o ikisi aynı şey değildir.

## Bölme notu

Dosya **1.947 satır**, dört video. Sınırlar `1. video` … `4. video` işaretleriyle ayrılmış ve videoların kendi içinde teyit ediliyor: *"long-term top-down analysis"*, *"this is second of four teachings... weekly to daily"*, *"lesson three... daily to four hour"*, *"the last structure the teaching of the ICT mentorship... four hours to five minutes"*. **Çift teyitli, belirsizlik yok.**

| Video | Satır | Konu |
|---|---|---|
| V1 | 1 – 522 | Aylıktan haftalığa · uzun vadeli şablon |
| V2 | 523 – 994 | Haftalıktan günlüğe · ara vadeli şablon |
| V3 | 995 – 1316 | Günlükten 4 saatliğe · kısa vadeli şablon |
| V4 | 1317 – 1947 | 4 saatlikten 5 dakikalığa · kurulumlar ve kapanış |

---

# BÖLÜM I — Videolar

### Video 1 — Aylıktan haftalığa

::: ders
**DERS**

#### Ne zaman yapılır

> *"Her ayın **son işlem gününde**, piyasa kapanır kapanmaz veriyi gözden geçiriyorum... Ayda **bir kez**. Aylık zaman diliminde ayda sadece bir mum oluşuyor."*

#### Dokuz adım, bu sırayla

**1. Mevsimsel eğilimler.**

> *"Zaman ve fiyat — **fiyat ve zaman değil. Önce zaman, sonra fiyat.**"*

İçinde bulunulan ve gelecek ayın mevsimsel eğilimleri. *"Steve Moore emtia ve dövizlerde kesinlikle en iyisi."* Ve tahvil için Mayıs–Haziran, hisse için sonbahar.

> *"Mevsimsel eğilimler, **fiyatın nerede olduğunu bilmeme gerek kalmadan** en iyi potansiyel büyük hareket edenleri planlamama yardım ediyor."*

**2. Çeyreklik kayma.**

**9–18 aylık trend** referans alınıyor: *"Hareketli ortalamalarla ilgisi yok — sadece aylık grafikte **18 mum geriye** giden gerçek mumlara bakıyorum."*

Ve bir varsayılan kural: *"**9–18 aylık trend net değilse ya da konsolidasyondaysa**, benim kişisel yaklaşımım **son üç-dört ayın yönünün tersine dönmesini** beklemek."*

**3. Küresel faiz oranları.**

Kaynak: **investing.com/central-banks**. Yöntem: *"**Yüksek faizli bir ülkeyi düşük faizli bir ülkeyle eşleştirmeye** çalışıyorum ve böylece bir Forex paritesi oluşturuyorum, temel eğilimi böyle benimsiyorum."*

Ve hisse için karşılığı: *"Tahvil piyasası düşüyorsa faizler yükseliyor demektir ve **hisselerin boğa piyasasını sürdürmesi zorlaşır.** Tahvil fiyatları ralli yapıyorsa faizler düşüyor demektir ve **bu genellikle hisselerde boğa piyasasını destekler.**"*

> *"**Faiz oranları tüm varlık sınıflarında bir numaralı sürücüdür.** Faizleri anlamıyorsan, şimdiye kadar verdiğim hiçbir piyasa analizi kavramından bir şey elde edemeyeceksin."*

**4. Piyasa profili.** Üç soru, bu sırayla:

| Soru | Evet ise | Hayır ise |
|---|---|---|
| **Konsolidasyonda mıyız?** | Kırılım öncesi genişleme kanıtı ara | Trend uca ulaşıyor olabilir → geri çekilme muhtemel |
| **Trendde miyiz?** | **Devam işlemleri** ara, tepe/dip seçmekten kaçın | Konsolidasyona döner, yönlü kırılım işaretleri ara |
| **Geri çekilmede miyiz?** | Geri çekilme sonrası devam ara | Konsolidasyon mu trend mi belirle |

**Ve konsolidasyonla başlamanın gerekçesi:** *"Önce trendde mi diye sormuyorum — **konsolidasyonda mıyız diye bakıyorum, çünkü asıl hikâyeyi o anlatıyor. Konsolidasyon bir sonraki hareketin başlangıcıdır.**"*

**5. Piyasalar arası analiz.** Pozitif ve negatif korele piyasalar. *"Boğa dolar bekliyorsam **altında zayıf fiyat** ararım."*

Ve bir istisna: *"Şu anki gibi koşullarda bu değişiyor — **Kuzey Kore** ile ilgili potansiyel savaş senaryolarımız var, bu **kaliteye kaçış** için bir katalizör olabilir, ve o zaman altın **normal dışı bir şeyle** sürüldüğü için işlemini desteklemez."*

**6. Piyasa yapısı + SMT.** Son tepeler ve dipler sınıflandırılıyor; uzun/ara/kısa vadeli tepe-dip hiyerarşisi; ve dolar endeksi ya da korele pariteyle SMT ayrışması.

**Ve bir yasak, çok net:**

> *"Piyasa yapısı ve SMT arkamdayken, mevsimsel eğilimler arkamdayken ve faizler lehimdeyken **o hareketlere karşı işlem yapmak istemem. Tüm bunlar bir aradaysa asla o yönü kesmek istemem — sadece boğa senaryosunda alıcı, ayı senaryosunda satıcı olmak isterim ve bundan asla sapmam, bir scalp'ta bile.**"*

**7. PD array matrisi.** Seçilen fiyat aralığı prim ve iskonto olarak bölünüyor.

> *"**Her fiyat aralığında her olası prim ve/veya iskonto array'i olmayacak — sadece o aralıkta bariz olanları not ediyorum.**"*

**8. Anahtar fiyat seviyeleri — ayın tek mekanik yuvarlama kuralı.**

| Array'in yeri | Yuvarlama |
|---|---|
| **Prim array** (fiyatın üstünde) | **Aşağı yuvarla** — en yakın 0 ya da 5 seviyesine |
| **İskonto array** (fiyatın altında) | **Yukarı yuvarla** — en yakın 0 ya da 5 seviyesine |

> *"**Ona doğru asla yukarı yuvarlamak istemem — alçakta asılı meyveyi istiyorum.**"*

**9. Aylık yön eğilimi**, ve haftalığa aktarım.

#### Enflasyon / deflasyon kontrolü

> *"Enflasyona bakmanın en kolay yolu **emtia fiyatlarını takip etmek.** Emtiaların çoğunluğu daha düşük fiyat yapıyorsa **deflasyonist** koşuldayız; emtia fiyatları yükseliyorsa **enflasyonist** koşuldayız."*

#### Öngörü ufku ve bir dürüstlük beyanı

> *"**Üç aylık fiyat hareketini öngörmeye çalışıyorum**, dört aya kadar gidebilir... **Doğru olmayabilirim, haklı olmayabilirim.** Ama grafiğe çizilmek üzere olan aylık mumun **sadece yarısını** doğru alabilirsem, bu çoğu zaman o ay kârlı olmam için yeterli. **Kârlı olmak için haklı olmak zorunda değilsin.**"*

Ve: *"**Her zaman haklı değilim. Her zaman haklı olamam. İnsanım ve yanlış şeyler yapacağım.**"*

#### Örnek — Avustralya doları, Haziran 2017

**Mevsimsel:** Ocak dibi, Mart dibi → Mayıs'a ralli, **Haziran–Temmuz yaz dibi** → Ağustos'a ralli, sonra Ekim'e zayıflık. Haziran, boğa penceresi.

**Çeyreklik kayma:** son üç ay düşüş. 18 mum geriye bakıldığında piyasa **konsolidasyonda.** Kural gereği: konsolidasyonda + son üç-dört ay düşüş → **tersine dönme beklenir.**

**Faiz:** RBA **%1,50** (son değişiklik 2 Ağustos 2016, −25 bp; sonraki toplantı 5 Eylül). Fed **%1,25** (14 Haziran 2017'de +25 bp; öncesinde **%1,00**). *"Hangisinin faizi daha yüksekti? Avustralya. **Temel olarak getiri çekiciliği Avustralya'da dolardan daha iyi.**"*

**Piyasalar arası:** dolar endeksi aylıkta konsolidasyondan yukarı kırıldı, **eşit tepelerin üstünde başarısız kırılım**, aralığın içine geri döndü ve orta noktayı geçti → aşağı beklentisi.

**SMT:** Aralık 2015 ve Aralık 2016 dipleri karşılaştırılıyor — **AUD daha yüksek dip**, dolar endeksi **daha yüksek tepe.** Ayrışma var.

**PD array'ler:** aralık, son tepe ve son diple tanımlanıyor. İskonto tarafında **üç** array bulunuyor ve bulunmayanlar da tek tek eleniyor:

| Array | Var mı? |
|---|---|
| Boğa order block (73.80 açılış) | **Var** |
| Rejection block (72.16 kapanış) | **Var** |
| Dibin altındaki likidite havuzu | **Var** |
| Likidite boşluğu | **Yok** |
| Vakum gap | **Yok** |
| Breaker | **Yok** |
| Eski tepe | **Yok** |

> *"Zor mu? **Hayır.** İnsanlar bunu olması gerekenden çok daha zor hale getiriyor... **Belirsiz mi? Hayır, kesin — sana tam olarak ne aradığını söylüyor.**"*

**Yuvarlama:** 73.80 zaten bir sıfır seviyesi, yuvarlama gerekmiyor. *"73.82 olsaydı **73.85'e** yuvarlardık, çünkü üstünde ve ona doğru işlem görüyoruz."*

**Sonuç:** Haziran açılışı order block'a indi, hedef aralık tepesinin üstündeki alım stopları. *"Haziran ve Temmuz ayları **uzun pozisyon için oldukça güzel ödüller** verdi."*

**Ve bir ek teyit:** *"Aussie **S&P ile çok iyi hareket eder** — S&P yükseliyorsa, ki yükseldiğini biliyoruz, bu da bu pariteyi destekler."*
:::

::: eleme
**ELEME**

#### Bu, on iki ayın prosedürü — ve ilk kez bir sıra var

On bir ay boyunca bu belgelerde tekrarlanan bir gözlem vardı: kavramlar veriliyor ama **hangisinin ne zaman kullanılacağı** söylenmiyor. Bu video onu veriyor: **dokuz adım, sabit sırada, ayda bir kez.**

**Ve sıranın kendisi bir iddiadır ve ölçülebilir:** *adımların sırası sonucu değiştiriyor mu?* Örneğin faiz farkı adımı en başa alınsa ya da tamamen çıkarılsa, çıkan yön eğilimi değişir mi? Bu, doğrudan bir **ablasyon tasarımıdır** ve dokuz adım dokuz koşu demektir.

#### Faiz farkı adımı tamamen mekanik — ve adı konmamış bir carry trade

*"Yüksek faizli ülkeyi düşük faizliyle eşleştir, Forex paritesi oluştur."*

**Bu, kelimenin tam anlamıyla carry trade'dir** — finansın en çok çalışılmış anomalilerinden biri. Ve iki şey literatürde nettir:

1. **Ortalama getirisi pozitiftir** — yüksek faizli para birimleri, faiz paritesinin öngördüğü kadar değer kaybetmez (forward premium puzzle)
2. **Ve sol kuyruğu ağırdır** — carry trade getirileri **negatif çarpık**tır; uzun sakin dönemler, ani ve büyük çöküşlerle kesilir

**İkincisinden video hiç söz etmiyor.** *"Getiri çekiciliği daha iyi"* deniyor ve orada bırakılıyor.

**Ve bu, senin `#014`'ünle doğrudan aynı konu:** fat-tail bulgun, sabit hedefin **sağ** kuyruğu kestiğini gösteriyordu. Carry trade'in sorunu **sol** kuyruk — ve ikisi aynı dağılım sorusunun iki tarafı.

**Ölçülebilir hipotez, ve ucuz:** *merkez bankası faiz farkına göre sıralanmış parite sepetinin getiri dağılımı nasıl?* Ortalama, çarpıklık, ve en kötü %5'lik dilim. Veri kamuya açık, hesap birkaç satır.

**Ve önemli bir uyarı:** faiz farkı **çok yavaş değişen** bir değişkendir — merkez bankaları yılda birkaç kez toplanır. Yani bu adım, aylık analizde **neredeyse sabit** kalır ve dolayısıyla aylar arası varyasyonun çok azını açıklar. Bir filtre olarak değeri, **ne kadar sık değiştiğine** bağlıdır ve o ölçülebilir.

#### Yuvarlama kuralı — ayın ikinci mekanik kuralı, ve ölçülebilir bir bedeli var

Prim array'ler aşağı, iskonto array'ler yukarı yuvarlanıyor. Yani **her yuvarlama, seviyeyi mevcut fiyata yaklaştırıyor.**

**Bunun iki yönlü ve tam olarak ölçülebilir bir sonucu var:**

| Etki | Yön |
|---|---|
| Giriş emri daha erken doluyor | **Doluluk oranı artar** |
| Ama daha kötü fiyattan doluyor | **R başına kazanç azalır** |
| Hedef daha erken vuruluyor | **Hedef isabet oranı artar** |
| Ama daha az alınıyor | **R azalır** |

**Bu, tam olarak senin ölçüm altyapının cevaplayabileceği bir soru**, ve yuvarlama miktarı taranabilir: 0, 1, 2, 5 pip. Video *"alçakta asılı meyve"* diyor — yani doluluk oranını R'a tercih ediyor. **Tercih meşru; ölçülmemiş olması ise ayrı bir şey.**

Ve dikkat: `#029`'daki 100 işlem eşiği burada devreye giriyor — yuvarlama etkisi küçük olduğu için **ayırt edilmesi büyük örneklem gerektirir.**

#### Piyasa profili — üç soru, sıfır tanım

*"Konsolidasyonda mıyız? Trendde miyiz? Geri çekilmede miyiz?"*

Üç soru da evet/hayır, ve **hiçbirinin cevap ölçütü verilmiyor.** Konsolidasyon nedir — kaç mumluk, ne kadar dar bir aralık? Trend nedir — kaç ardışık daha yüksek dip?

**Ve bu, on iki ayda beşinci kez aynı boşluk.** Şubat V7 (NR7), Mart V8, Nisan V6, Haziran V8 (12 tick), Haziran V9 — hepsi daralma-genişleme hakkında, hiçbiri tanım vermiyor.

**Ama bu ay bir fark var, ve lehte:** üç soru **sıralı** ve **birbirini dışlıyor.** Yani bir kez tanım konduğunda, üçü birlikte **tam bir sınıflandırma** oluşturuyor — her ay tam olarak bir sınıfa düşüyor. Bu, ölçülebilir bir yapıdır.

**Ve senin range projenle doğrudan aynı:** `RANGE_ACTIVE`/`NO_RANGE` ayrımın beş koşullu bir tanımdan geliyordu ve Aşama 1'de RET aldı. **Bu video aynı sınıflandırmayı üç soruyla yapıyor ve tanımları vermiyor.** Senin tanımların var; onları bu üçlüye takmak tek bir işlem.

#### "Sadece bariz olanları not ediyorum" — ölçümün merkezindeki sorun

> *"Her fiyat aralığında her olası array olmayacak — **sadece bariz olanları not ediyorum.**"*

Ve hemen ardından: *"Belirsiz mi? **Hayır, kesin.**"*

**İki cümle bir arada duramaz.** "Bariz olanı seç" bir kural değil, bir yargıdır. Ve aynı videonun AUD örneğinde **iyi bir şey** yapılıyor — bulunmayan array'ler tek tek eleniyor (likidite boşluğu yok, vakum gap yok, breaker yok, eski tepe yok). **O eleme listesi kuralın kendisidir**, ve verilirse "bariz" gereksizleşir.

**Yani düzeltme videonun kendi örneğinin içinde:** yedi array tipini **her seferinde tek tek** kontrol et, var/yok diye işaretle, ve "bariz" adımını çıkar. O zaman PD array seçimi tamamen mekanik olur.

**Bu, bu ayın en ucuz ve en yüksek getirili düzeltmesi** — çünkü PD array matrisi dört videonun dördünde de merkezde.

#### 9–18 ay: bir sayı değil, bir aralık

*"9–18 mum geriye bak... **kalibre etmen gerekebilir, biraz daha sola gidebilir.**"*

9 ile 18 arası ikiye katlanma demek. Ve "kalibre et" ifadesiyle üst sınır da açık.

**Ölçülebilir versiyonu tek bir sayı gerektiriyor**, ve o sayı **taranabilir**: 9, 12, 15, 18 ay için ayrı ayrı çalıştır, sonuç lookback'e ne kadar duyarlı? Duyarlıysa, o duyarlılığın kendisi bir bulgudur — parametre seçimi sonucu belirliyorsa yöntem kırılgandır.

#### Tersine dönme varsayılanı — ve neden ölçülebilir

> *"9–18 aylık trend net değilse ya da konsolidasyondaysa, **son üç-dört ayın yönünün tersine dönmesini beklerim.**"*

Bu, tanımsız bir durum için **açık bir varsayılan** ve bir yön öngörüsü. On iki ayda bunun gibi çok az kural var: *"bilmiyorsam şunu yaparım."*

**Ölçülebilir hipotez:** *uzun vadeli trend belirsizken, son üç-dört ayın yönü sonraki ay tersine dönüyor mu?* Bu, klasik **kısa vadeli ortalamaya dönüş** iddiasıdır ve aylık veride literatürde incelenmiştir — sonuçlar dönem ve varlık sınıfına göre değişir.

**Taban çizgisi %50**, ve tek koşu.

#### Kuzey Kore istisnası — bir kaçış kapısı, ve dürüstçe işaretlenmiş

> *"Şu anki gibi koşullarda bu değişiyor — potansiyel savaş senaryoları... **altın normal dışı bir şeyle sürüldüğü için işlemini desteklemez.**"*

Bu, YONERGE §2.4'ün **koşulun sonradan eklenmesi** kalıbı: piyasalar arası teyit kuralı, teyit gelmediğinde askıya alınıyor.

**Ama iki şey kaydedilmeli.** Birincisi: **jeopolitik risk dönemlerinde altının korelasyonunun değiştiği doğrudur** ve bu ölçülebilir bir olgudur. İkincisi: **kural, öngörülü değil geriye dönüktür** — "bu dönem istisnaydı" ancak sonradan söylenebilir.

**Kapatması ölçülebilir ve standart:** korelasyonu **kayan pencerede** hesapla. Korelasyon eşiğin altına düştüğünde teyit adımını otomatik olarak devre dışı bırak. O zaman istisna bir yargı değil, bir kural olur — ve **eşiğin kendisi taranabilir.**

#### Aritmetik denetimi — merkez bankası verilerinin tamamı doğru

| İddia | Denetim | Sonuç |
|---|---|---|
| RBA %1,50; son değişiklik **2 Ağustos 2016, −25 bp** | RBA 2 Ağustos 2016'da %1,75 → **%1,50** | **Doğru** |
| Fed %1,25; **14 Haziran 2017'de +25 bp** | Fed 14 Haziran 2017'de %0,75–1,00 → **%1,00–1,25** | **Doğru** |
| Haziran öncesi Fed **%1,00** | Üst bant %1,00 | **Doğru** |
| ECB **%0,00**; son değişiklik **Mart 2016, −5 bp** | ECB Mart 2016'da %0,05 → **%0,00** | **Doğru** |
| BoE **%0,25**; **4 Ağustos 2016, −25 bp** | BoE 4 Ağustos 2016'da %0,50 → **%0,25** | **Doğru** |
| BoC **%0,75** | Temmuz 2017'de %0,50 → **%0,75** | **Doğru** |
| **AUD %1,50 > USD %1,00** (Haziran öncesi) ve **> %1,25** (sonrası) | Her iki karşılaştırma da doğru | **Doğru** |
| 73.82 → **73.85** yuvarlaması (iskonto array, yukarı) | Kuralla tutarlı | **Doğru** |

**Altı merkez bankası, altı oran, altı tarih, altı değişim miktarı — hepsi doğru.**

#### Yanlışlanamazlık

**1. Öngörü ufku üç ay ama başarı ölçütü "mumun yarısı".** *"Aylık mumun yarısını doğru alabilirsem çoğu zaman kârlı olmam için yeterli."*

**Bu, aslında ölçülebilir bir ifade** — ve iyi bir ifade, çünkü bir eşik içeriyor. Ama "mumun yarısı"nın neye göre ölçüleceği (açılıştan mı, aralığın ortasından mı) belirtilmiyor.

**2. "Kârlı olmak için haklı olmak zorunda değilsin" — doğru ama tamamlanmamış.** Doğru: düşük isabet oranı, yüksek R:R ile kârlı olabilir. **Ve on ikinci ayda ilk kez bir R:R verilmiyor.** Mayıs'ta 1:1'e inen oranın burada karşılığı yok.

**3. "Asla o yönü kesmem, bir scalp'ta bile" — yasaklayıcı ve iyi.** Tüm koşullar hizalandığında karşı yönde işlem yasak. Nisan V6'nın *"en iyi kurallar seni piyasadan uzak tutanlardır"* ifadesinin en katı hali.

**4. Tek örnek, geriye dönük.** AUD, Haziran 2017, sonucu bilinerek. Ve dokuz adımın dokuzu da aynı sonuca işaret ediyor — **hiçbir adım çelişmiyor.** Bu, seçilmiş bir örneğin imzasıdır; gerçek uygulamada adımların çelişmesi beklenir ve **çeliştiğinde ne yapılacağı söylenmiyor.**

**Ve bu, ölçüm için asıl soru:** *dokuz adım kaç kez hemfikir?* Hemfikir olmadıklarında hangisi kazanıyor? Video bir hiyerarşi vermiyor.

#### Ölçülebilirlik

**Kısmen.** Faiz farkı adımı tamamen mekanik ve kamuya açık veriden; yuvarlama kuralı mekanik ve bedeli ölçülebilir; 9–18 ay penceresi taranabilir; tersine dönme varsayılanı test edilebilir.

**Ama iki merkezi adım tanımsız:** piyasa profili sınıflandırması (üç soru, sıfır ölçüt) ve PD array seçimi (*"bariz olanları"*). İkisi de zincirin ortasında ve ikisi de çıktıyı belirliyor.

**Ve dokuz adım arasında bir öncelik sırası yok** — çeliştiklerinde ne olacağı söylenmiyor.

#### Not

**Alınacak:** faiz farkı sıralaması, **getiri dağılımıyla birlikte** — ortalama değil, çarpıklık ve sol kuyruk. Carry trade'in bilinen sorunu tam olarak orada.

**Alınacak:** yuvarlama kuralının bedeli. Doluluk oranı ↑ vs R ↓, ve yuvarlama miktarı taranarak.

**Alınacak, ve bu ayın en ucuz düzeltmesi:** PD array kontrol listesi. Videonun kendi AUD örneği yedi array tipini tek tek eliyor — **o listeyi kurala çevir ve "bariz" adımını çıkar.**

**Alınmayacak, tanım konmadan:** üç soruluk piyasa profili. Senin range projendeki tanımlar takıldığında alınabilir hale geliyor.

**Ve önce ölçülecek:** dokuz adım kaç kez hemfikir, ve hemfikir olmadıklarında hangisi kazanıyor? Bir kontrol listesi, ancak çelişki kuralı varsa bir prosedürdür.
:::

### Video 2 — Haftalıktan günlüğe

::: ders
**DERS**

#### Aylıktan farkı

> *"Bunun çoğu esasen aylık grafikte gördüğümüzün **birebir aynısı.**"*

Ama üç adım **yeni** ve aylıkta yok: **göreli güç**, **COT**, **piyasa duyarlılığı.**

> *"Aylıkta üç farklı şey vardı, haftalıkta da üç farklı şey var... **Artık başkalarının görüşlerine bakmaya başlıyoruz** — sadece tekniklere değil — ve onları göreli güç analiziyle teknik güç ve zayıflığa karşı tartıyoruz."*

#### 1. Göreli güç

> *"Göreli güçle başlamamın sebebi: **aylıktan net bir tablo alamamış olabilirim.** Aylık grafikler bana iyi konuşmuyorsa, gereksiz hayal kırıklığından kaçınmak için göreli güç analizi yaparım."*

| Varlık | Yöntem |
|---|---|
| **Hisse** | IBD'ye göre **ilk 30 endüstri grubundaki** güçlü hisseler |
| **Emtia** | Kendi vadeli grubunda **daha yüksek dip** yapan piyasalar |
| **Döviz** | Dolar endeksi zayıfken **daha düşük dip yapmayı başaramayan** dövizler |

> *"**Liderlik ve geride kalanları arıyorum** — en güçlüsünü ve en zayıfını bilmek istiyorum."*

#### 2. COT — "ICT hedging program"

**Standart okuma:** net trader pozisyon grafiğinde sıfır çizgisinin üstü alım, altı satım.

**Ve videonun getirdiği değişiklik:**

> *"**Son 12 aya bak, ticari hedger'ların net pozisyonlarının en yüksek okumasını ve en düşük okumasını bul** — sadece ticariler, büyük spekülatörler değil — **ve o aralığı görsel olarak ikiye böl.** 12 aylık aralığın **orta noktasının üstündeyse boğa, altındaysa ayı** sayarım."*

Ve gerekçe:

> *"Bu, beni bir işlemci olarak rahatsız eden şeylerden biriydi — **COT verisi işe yaramıyor gibiydi. Yanlış yapıyordum çünkü tam olarak kitabın söylediğini yapıyordum. Bu yüzden değiştirdim ve Larry Williams'ın 'sadece şuna bak, şuna bak' dediğini attım.**"*

> *"**COT verisi ve ICT hedging program — bunu başka hiçbir yerde bulamazsın, burada öğrendin.**"*

Ve ek sıralamalar: **iki yıllık ve dört yıllık uçlar**; ve **grup içi görece büyüklük** — *"soya piyasasında diğer tahıllara kıyasla astronomik bir net uzun pozisyon varsa, bu genellikle büyük bir hareket gördüklerinin göstergesidir."*

**Mantık:** *"Ticariler tepe ve dipleri yaparlar. Uçlarda **büyük fonlar hep kıçlarına tekmeyi yerler**, ama aradaki bölümde haklıdırlar. **Biz ticarilerin uçlarını alıp, ortadaki bölümde büyük fonların yönünde işlem yaparız.**"*

#### 3. Piyasa duyarlılığı — üç kaynak

**a) Manşetler.** IBD, Barron's, Wall Street Journal, Bloomberg.

> *"**Büyük hikâyeyi soldurmayı (fade) seviyorum.** ... **Büyük tanımlayıcı sıfatlar** içeren manşetler ya da hikâyeler görmek isterim — duygusal olarak yüklü bir şey. **Ne kadar duygusal yüklü ve ne kadar sık tekrarlanırsa**, o kadar bir duyarlılık fikri inşa eder."*

**b) Forumlar.** *"Perakende düşüncesi için forumları tarıyorum... **Teknikler benim öğrettiğim gibi hizalandığında ve duyarlılık fikri beklediğimizin %100 tersini söylediğinde inanılmaz oluyor.**"*

**c) Williams %R — haftalık grafikte.**

> *"Ve evet, **gösterge** kelimesini söyledim. Haftalık grafikte **20, 14 ve 10 periyotlu** %R kullanıyorum. **Üçü birden uygulanmıyor** — bunlar kullanmayı sevdiğim üç ayar."*

Eşikler: *"**İdeal uzun giriş 80'de ayarlı, ideal kısa giriş 20'de.**"*

**Ve seçim yöntemi:**

> *"Yapacağım şey: **hangisinin geçmişteki önemli tepe ve diplerle en doğru şekilde örtüştüğüne** bakacağım. Hiçbir şey mükemmel olmayacak."*

#### 4–9. Aylıkla aynı

Piyasa profili (aynı üç soru), piyasalar arası analiz, piyasa yapısı + **kurumsal emir akışı**, PD array matrisi, anahtar seviyeler (aynı yuvarlama kuralı), haftalık yön eğilimi.

**Kurumsal emir akışının tanımı burada net:**

| Boğa piyasa yapısı | Ayı piyasa yapısı |
|---|---|
| **Düşüş kapanışlı mumlar fiyatı destekliyor** | **Yükseliş kapanışlı mumlar fiyata direnç oluyor** |
| **Yükseliş kapanışlı mumlar kırılıyor** | **Düşüş kapanışlı mumlar kırılıyor** |

#### AUD örneğinin devamı

**Göreli güç:** *"Aussie'nin diplerine ve aynı anda dolar endeksine bakıyoruz — **iki piyasa arasında gerçekten bir eşitsizlik yoktu.** Aussie yukarı çağırıyordu, dolar da zayıf görünüyordu... **korelasyonda çatlak görmedik, her şey sağlıklı görünüyor.**"*

**COT:** Haziran'da 12 ay geriye gidiliyor (Haziran 2016), o dönemin en yüksek ve en düşük ticari net okuması bulunuyor, aralık ikiye bölünüyor.

> *"Haziran'da tam burada **modifiye ICT hedging program çizgisinin üstünde** olduklarını görebilirsin... **standart COT grafiğinde sıfır çizgisinin üstünde çok mütevazı bir alım** görünüyor — ama benim gösterdiğim şekilde baktığında **çok daha kitlesel bir alım.**"*

**Duyarlılık — üç manşet:**

| Kaynak | Tarih | Başlık |
|---|---|---|
| **Bloomberg** | 15 Mayıs 2017 | *"Avustralya dolarının görünümü kararıyor"* |
| **DailyFX** | — | *"Avustralya doları kendini aşırı uzamış bulabilir"* — temel görünüm **ayı** |
| — | 30 Mayıs 2017 | *"Aussie dolar yönsüz"* |

> *"Hiçbiri yükseleceğini söylemiyordu. **Duyarlılık ayıydı; teknik olarak boğaydı** çünkü aşağıda uç bir okuma vardı."*

**%R kalibrasyonu:** 20 periyot denendi — *"20'ler kararsız."* **14 periyot** denendi — *"güzel bir okuma, güzel bir okuma, güzel bir okuma."*

> *"**Ve bu biçim uydurmaya benziyor, biliyorum**, ama birazdan ne yaptığımı göreceksin."*

10 periyot için: *"muhtemelen yine çok iyi yapardı ama... **en küçüğü her zaman iyi okuma verir ve bu bazen bence biraz fazla şekerlenmiş.** 14 periyot bence optimal olurdu çünkü **biraz daha zaman filtresi** veriyor."*

**Profil:** dipten ralli, sonra geri çekilme → konsolidasyon, ama *"artık konsolidasyonun bize yukarı kırılacağı ipuçlarını verdiğini biliyoruz"* → **impuls / geri çekilme / genişleme** dizisi.

> *"**Genişleme salınımı, impuls salınımından biraz daha fazla gitme eğilimindedir** — bu yüzden hedefler için genelde Fibonacci uzantılarımızı üstüne bindiririz."*

**Ve haftalıkta order block'un rafine edilmesi:** aylık order block 73.80; haftalıkta bir mumun tepesi 73.57, sonraki mumun dibi 73.29 → *"dengelemenin fazlasıyla altına iniyor, yani **bir denge noktamız var, order block'u bu seviyeye rafine edebiliriz.**"*

#### Kapanış

> *"Notice — çok fazla **günün saati** tipi analiz yapmadık. **Bu zaman dilimlerinde gerekli değil.** Günlüğe girdiğimizde günün saati hakkında çok daha rafine bilgi alacaksın."*

Ve bir kabul: *"**Aslında Mart'ta arıyordum, yanılmıştım** — burada biraz geri çekilme oldu ama bir alım fırsatına indi."*
:::

::: eleme
**ELEME**

#### "ICT hedging program", Larry Williams'ın COT Index'idir

Videonun tanımı, adım adım:

1. Son **12 ay** için ticari net pozisyonun **en yüksek** ve **en düşük** okumasını al
2. Aralığı **ikiye böl**
3. Orta noktanın **üstü boğa**, **altı ayı**

**Larry Williams'ın COT Index'inin tanımı:**

> (Mevcut net − N dönemin en düşük neti) ÷ (N dönemin en yükseği − en düşüğü) × 100, ve **50 orta çizgi.**

**Bunlar aynı hesaptır.** Videonun "orta noktanın üstünde" dediği yer, Williams endeksinin **50'nin üstünde** olduğu yerdir. Tek fark, birinin yüzdeye normalize edilmesi.

**Ve bu, on iki ayda üçüncü ve en keskin köken çelişkisi:**

| Ay | İfade |
|---|---|
| **Mart V8** | *"Kitaplarda yok, dışarıda böyle bir şey yok"* |
| **Haziran V1** | *"Larry Williams'tan öğrendiğim şey — birkaç kendi dokunuşumla"* |
| **Ağustos V2** | *"**Bunu başka hiçbir yerde bulamazsın, burada öğrendin**"* ve *"**Larry Williams'ın dediğini attım**"* |

**Aynı yöntem, beş ay içinde, üç farklı köken iddiası** — ve üçüncüsü ikincisiyle doğrudan çelişiyor.

**Ölçüm açısından bu bir kusur değil, avantaj:** Williams COT Index'in kamuya açık tanımı var, **onlarca yıldır bağımsız olarak test edilmiş**, ve tipik bulguları biliniyor — emtialarda daha güçlü, dövizlerde daha zayıf, ve tek başına yön sinyali olarak kullanıldığında zayıf.

**Yani ölçmeye sıfırdan başlamak gerekmiyor** — bu, Haziran'ın kapanış ölçütünün doğrudan uygulanmasıdır: *bir fikrin kime ait olduğu, onu ölçmeden önce ne kadar okuman gerektiğini belirler.*

**Ve videonun getirdiği tek gerçek katkı ölçülebilir:** *12 aylık aralığın orta noktası mı, ham sıfır çizgisi mi daha çok bilgi taşıyor?* Bu, **iki koşuluk bir ablasyondur** ve videonun kendi iddiası tam olarak budur. Haziran V1'de aynı soru kaydedilmişti; burada tekrar ediyor ve **hâlâ ölçülmemiş.**

**Ve gecikme sorunu — dördüncü kez, ve hâlâ anılmıyor.** COT verisi **Salı** pozisyonlarını gösterir ve **Cuma** yayınlanır. Şubat V7, Mart V8, Haziran V1 ve Ağustos V2 — dört yerde aynı boşluk. Geriye dönük ölçümde **üç günlük gecikme modellenmezse sonuç anakronizmdir.**

#### Ve %R parametresi geçmişe bakılarak seçiliyor — sesli olarak

> *"Hangisinin **geçmişteki önemli tepe ve diplerle en doğru şekilde örtüştüğüne** bakacağım."*
> *"**Bu biçim uydurmaya benziyor, biliyorum.**"*

**Bu, Temmuz'un kapanış ölçütünün en net ihlalidir ve bu ay bir örnek üzerinde gösteriliyor.**

Prosedür şu: üç parametre (20, 14, 10), her biri geçmiş grafikte deneniyor, geçmiş dip ve tepelerle en iyi örtüşen seçiliyor. **Bu, örneklem içi optimizasyondur** — ve geriye dönük testte sistematik olarak **iyimser** sonuç verir.

**Ve savunma sonradan geliyor:** *"14 optimal olurdu çünkü biraz daha zaman filtresi veriyor, biraz daha düzeltiyor."* Bu gerekçe, **seçim yapıldıktan sonra** veriliyor — ve doğru olabilir, ama seçimi açıklamıyor: eğer daha fazla düzeltme iyiyse, neden 20 değil?

**Düzeltmesi tektir ve senin `#013`'ünün kendisidir:** parametreyi **veriye bakmadan** seç, ya da bir kısımda seçip **başka bir kısımda** test et. İn-sample / out-of-sample ayrımı olmadan bu adım sonuç üretemez.

**Ve dürüstlük tarafı da kaydedilmeli:** video biçim uydurduğunu **kendisi söylüyor**, ve bu, on iki ayda bu netlikte tek örnek. Sorunu görmüyor değil — görüyor ve devam ediyor.

#### Duyarlılık: üç manşet gösteriliyor, sayı verilmiyor

Üç ayı manşet gösteriliyor, ardından fiyat yükseliyor.

**Eksik olan tek şey sayıdır:** aynı pencerede **kaç** AUD manşeti vardı, kaçı ayı, kaçı boğa? Üç ayı manşet, ancak toplamın içindeki payı bilinirse bilgi taşır.

**Ve bunun ölçülebilir versiyonu var, ama pahalı:** duyarlılık göstergeleri (yayın hacmi, ton skoru, anket verisi) metin verisi ve arşiv gerektiriyor — Temmuz V1'de kaydedilen aynı maliyet.

**Ucuz vekili ise burada, ve videonun kendi içinde:** *"ne kadar sık tekrarlanırsa"* — yani **frekans.** Manşet sayısı, tonundan bağımsız olarak sayılabilir. Ve daha da ucuzu: fiyatın kendisi. Uç duyarlılık, uç fiyat hareketinin ardından gelir; **momentum uzunluğu**, duyarlılığın fiyat tabanlı vekilidir.

#### Ve %R'ın kendisi zaten bir duyarlılık vekili — üçlü sayım sorunu

Video üç duyarlılık kaynağı sayıyor: manşetler, forumlar, %R. **Ama üçü bağımsız değil.**

- Manşetler fiyat hareketini **takip eder** — kötü haber düşüşten sonra yazılır
- Forum düşüncesi fiyat hareketini **takip eder**
- %R **fiyattan hesaplanır** — tanım gereği

Yani üç "bağımsız teyit", büyük ölçüde **aynı fiyat serisinin üç görüntüsüdür.**

**Ve bu, Ocak V12 ve Haziran V15'te kaydedilen aynı hata:** *örtüşen kaynaklar bağımsız doğrulama değildir.* Orada 5 ⊂ 15 ⊂ 20 yıllık ortalamalardı; burada üç duyarlılık kaynağı.

**Ölçülebilir, ve ucuz:** üç kaynağın birbiriyle korelasyonu. Yüksekse, "üç teyit" bir teyittir.

#### "Korelasyonda çatlak görmedik" — ve aynı değişkenin iki okunuşu

Bu videoda göreli güç adımının sonucu şu: **ayrışma yok, her şey sağlıklı, hareket destekleniyor.**

Temmuz V4'te ise ayrışmanın **yokluğu** bir "boş yıl" işaretiydi — 2013'te üç faiz enstrümanı da daha düşük dip yaptı ve *"kesinlikle sıfır mega trade"* denildi.

**Yani aynı gözlem — ayrışma yok — bir yerde teyit, başka yerde kurulumun yokluğu.**

**İki durumun farklı olduğu doğru:** birinde ayrışma **giriş sinyali**, diğerinde **trend teyidi.** Ama hangi durumda hangi rolü oynadığını belirleyen bir kural verilmiyor. **Ve bir değişken her iki halinde de destekleyici okunabiliyorsa, yanlışlanamaz.**

**Kapatması net ve bu ay için zorunlu:** ayrışmanın rolü **önceden** sabitlenmeli. Ya giriş sinyalidir (yoksa işlem yok), ya teyittir (yoksa işlem yine olabilir). İkisi aynı anda olamaz.

#### Ticari / büyük fon mantığı — doğru, ama ölçülmesi zor

> *"Ticariler tepe ve dipleri yapar; büyük fonlar aradaki bölümde haklıdır."*

**Bu, COT literatüründe bilinen bir gözlemin ifadesidir** ve prensipte ölçülebilir: *ticari net pozisyonun uç okumaları, sonraki dönüş noktalarını öngörüyor mu?*

**Ama iki zorluk var ve ikisi de temel:**
1. **"Uç" tanımlı** (12 aylık aralığın uç dilimleri) ama **"dönüş noktası" değil** — ne kadar büyük bir dönüş?
2. **Gözlem sıklığı düşük:** haftalık veri, ve uç okumalar yılda birkaç kez. On yıl = birkaç düzine gözlem, `#029` eşiğinin altında.

**Çözüm, Temmuz'da kaydedilenle aynı:** çok sayıda piyasada aynı anda ölç. COT tüm vadeli piyasalar için yayınlanıyor — 20 emtia × 10 yıl, örneklemi yeterli hale getirir.

#### Ölçülebilirlik

**Kısmen.** COT hedging endeksi tamamen mekanik, kamuya açık veriden hesaplanabilir, ve zaten test edilmiş bir yöntemin (Williams COT Index) aynısı; göreli güç adımı Haziran ve Temmuz'da zaten ölçülebilir bulundu; kurumsal emir akışı tanımı (düşüş/yükseliş kapanışlı mum) mekanik.

**Ama duyarlılık adımı ölçülemez halde**, ve içindeki tek sayısal bileşenin parametresi **geçmişe bakılarak seçiliyor** — video bunu söylüyor. Ve o adım zincirin ortasında, yön eğilimini besliyor.

#### Not

**Alınacak:** COT 12 aylık aralık orta noktası, **ham sıfır çizgisine karşı ablasyon olarak.** Videonun kendi iddiası budur, ve iki koşu.

**Zorunlu:** COT'un **Salı–Cuma gecikmesi** modellenmeli. Dört ayda dördüncü kez aynı not.

**Alınacak:** kurumsal emir akışı tanımı — *"düşüş kapanışlı mumlar destekliyor, yükseliş kapanışlı mumlar kırılıyor."* İki mum, mekanik, ve on iki ayda ilk kez tam tanımlı.

**Alınmayacak:** üç kaynaklı duyarlılık okuması. Kaynaklar bağımsız değil, sayım yok, ve tek sayısal bileşenin parametresi örneklem içinde seçilmiş.

**Ve kaydedilecek:** *"Bunu başka hiçbir yerde bulamazsın"* ile *"Larry Williams'tan öğrendim"* aynı yöntem için, iki ay arayla. **Bu, ölçüm sırasını değiştiriyor** — yöntemin literatürü var, ve o literatür taban çizgisini zaten söylüyor.
:::

### Video 3 — Günlükten 4 saatliğe

::: ders
**DERS**

Bu video **hiç grafik göstermiyor** — tamamen prosedür. Ve gerekçesi açıkça veriliyor:

> *"Sana hiçbir grafik vermedim, hiçbir el tutma yapmadım — ve sebebi şu: **PDF'ler, içeriğin her ayından geçmemiş hiç kimse için hiçbir şey yapmayacak.**"*

#### 1. Ticari hedging (COT) — ve günlük ölçekte kullanımı

Aynı yöntem: son **12 ay**, ticari net pozisyonun en yüksek ve en düşük okuması, aralık ikiye bölünüyor.

**Ve bir alternatif:**

> *"Eğer o aralık **çok darsa** ya da 12 aya bakarak ayırt edemiyorsam **altı aya inerim**, ve bu bana **çeyrekten çeyreğe** bir etki verir."*

**Ve dinamik pencere:** *"Bugün neredeyse oradan **12 ay geriye** git — her zaman fiyata şu an nerede bakıyorsan oradan."*

**Ve bir sonuç kuralı:** *"Orta noktanın **altındaysam**, **iskonto array'lere** odaklanacağım ve piyasanın yukarı genişleyip bir prim ölçüsüne uzanacağı senaryolar arayacağım."*

#### 2. Açık pozisyon — ayın en tanımlı kuralı

> *"Fiyat **daha yüksek zaman dilimi iskonto array'inde** işlem görürken açık pozisyonun **yaklaşık %15 veya daha fazla düşmesini** görmek isterim — **bu son derece boğa**, özellikle aylık ve haftalık da boğaysa."*

> *"Fiyat **daha yüksek zaman dilimi prim array'inde** işlem görürken açık pozisyonun **yaklaşık %15 veya daha fazla artmasını** görmek isterim — bu gerçekleşirse **son derece ayı**, aylık ve haftalık da düşük fiyat çağırıyorsa daha da fazla."*

**Ve eylemsizlik kuralı:**

> *"**Yukarıdaki iki koşulun arasındaki durumlarda, benim kişisel işlem tarzım için açık pozisyon analizimde dikkate alınmaz. Ya bu iki kriterden birini karşılamalı ya da ona hiç başvurmayacağım.**"*

Ve bir zaman dilimi sınırı: *"Günlüğe inene kadar açık pozisyonla gerçekten ilgilenmiyorum. **Gençken yapardım ve gerçekten takıntı haline getirirdim**, ama şimdi sadece günlükten itibaren düşünüyorum."*

#### 3. Kurumsal emir akışı — günlük

| Aylık/haftalık **ayı** ise | Aylık/haftalık **boğa** ise |
|---|---|
| Günlük, **yükseliş kapanışlı mumlarda direnç** bulmalı | Günlük, **düşüş kapanışlı mumlarda destek** bulmalı |
| Ve **düşüş kapanışlı mumları kırmalı** | Ve **yükseliş kapanışlı mumları kırmalı** |

> *"**Günlük emir akışı, bilinmesi gereken en önemlisi.** Başka hiçbir zaman dilimine bakmıyorsan... **en azından tüm analizine günlük grafikte başla**, çünkü günlük grafiğin kurumsal olarak neyi ima ettiğini bilmiyorsan **Rus ruleti oynuyorsun.**"*

#### 4. Haftalık profil — ve iki sayı

**Haftalık aralığın oluşumu:**

| Boğa | Ayı |
|---|---|
| Pazartesi dip oluşabilir | **Salı haftanın tepesini** yapar |
| Salı'nın ikinci yarısı + Çarşamba + Perşembe'nin ilk yarısı → **haftanın tepesi** | **Perşembe New York açılışı haftanın dibini** yapar |
| Cuma geri çekilme | Cuma ve Pazartesi konsolidasyon |

> *"**Haftalık aralık tipik olarak Salı ile Perşembe arasında oluşur** — haftalık aralığın büyük kısmı budur."*

**Ve öngörü güveni için iki sayı:**

> *"Genellikle **Pazartesi'yi arkamda bıraktığımda**, daha yüksek zaman dilimini doğru aldıysam haftalık profilin ne olacağını belirleyebilme olasılığım **yaklaşık %60.** Salı'da yanılırsam **%70'e** çıkıyor, ve Çarşamba, Perşembe, Cuma kaldığında **%70** ile genelde Cuma patlamadan önce bir şey bulabiliyorum."*

**Ve açık bir sınır beyanı:**

> *"**Haftalık profilleri öngörmek için hiçbir zaman sistematik bir yaklaşım yaratamadım.**"*

> *"Bu derecede hassasiyet bekleme — **haftalık profilleri her hafta çağırmayı bilmiyorum.** Ekonomik takvime göre ne olabileceğine dair kabaca bir fikrim var."*

#### 5. Haftalık açılış fiyatı — iki referans

> *"Ana odaklandığım şey **haftalık açılış fiyatı, Pazar günü.** Ama aynı zamanda **Pazartesi gece yarısı açılış fiyatına** da bakıyorum ve o Pazartesi gece yarısı açılışını **tüm hafta boyunca, her gün** taşıyorum."*

> *"**Pazar'da başlayan işlemin tüm ilk kısmını göz ardı ediyorum** ve tam olarak **ABD'de Pazartesi başladığında, gece yarısında** o açılış fiyatına bakıyorum."*

**Kullanımı:** *"Boğaysam, fiyatın o fiyatların **altına** inip bir iskonto array araması tercihim. Ayıysam, fiyatın o iki fiyatın **üstüne** çıkmasını isterim."*

**Ve pratik yöntem:** *"En kolay yolu **saatlik grafik** açmak ve Pazartesi gece yarısında saatliğin açılış fiyatı ne ise onu almak."*

#### 6. Piyasalar arası + SMT

> *"Günlükten dört saatliğe SMT'yi kullanmaya başlıyorum çünkü **etkinliğinin kalbi orada.**"*

#### 7. Piyasa yapısı — breaker'lar

> *"Günlük zaman diliminde **breaker'ları** her şeyden çok arıyorum, çünkü nerede olduklarını bilmek sana **bir sonraki ara vadeli fiyat salınımının nerede oluşacağını** haber verebilir."*

> *"Fiyatın **boğa breaker'dan ayı breaker'a** nasıl işlem gördüğüne bak — **o iki referans noktası arasında genellikle çok hareket var. Ortadaki et — işlem fırsatlarının büyük kısmı orada.**"*

Ve bir öğrenme önerisi: *"**Sadece eğitim tekerlekleri amacıyla** oradan başlarsan, çoğu zaman kurumsal emir akışının doğru tarafında işlem yaptığını göreceksin."*

#### 8–9. PD array matrisi ve anahtar seviyeler

Aynı yuvarlama kuralı, dördüncü kez.

#### Ve günlük yön eğiliminin ne anlama geldiği

> *"Bize çok soruluyor: günlük yön eğilimini nasıl biliyorsun? ... Doğal varsayım şu: boğaysam **her gün alıyorum** — ve **perakende düşünce tam burada devreye giriyor.**"*

> *"**Bir piyasada boğaysak bu her gün almamız gerektiği anlamına gelmez.** Bir iskonto array'e, **günün belirli bir saatinde** gelmesi gerekiyor... Boğaysak iskonto array'lere işlem görülmesini bekliyoruz, sonra icra. Ayıysak prim array'lerin **günün belirli bir saatinde** etiketlenmesini bekliyoruz. **Zaman ve fiyat buluşuyor, ve olduğunda — bum — icra ediyoruz.**"*
:::

::: eleme
**ELEME**

#### Açık pozisyon kuralı — on iki ayın en iyi tanımlı kuralı

Dört bileşeni birden var, ve on iki ayda bu dördü bir arada başka hiçbir yerde yok:

| Bileşen | Değer |
|---|---|
| **Eşik** | **%15** |
| **Yön** | Düşüş (boğa) / artış (ayı) |
| **Bağlam koşulu** | Fiyat, daha yüksek zaman dilimi **iskonto / prim array'inde** olmalı |
| **Eylemsizlik kuralı** | **Arada kalırsa hiç kullanma** |

**Dördüncüsü en önemlisi**, ve on iki ayda başka bir örneği yok: *"ya bu iki kriterden birini karşılamalı ya da ona hiç başvurmayacağım."* Bu, göstergenin **her durumda bir şey söylemesini engelliyor** — yani yanlışlanamazlığın en yaygın kaynağını kapatıyor.

**Ölçülebilir hipotez:** *Fiyat daha yüksek zaman dilimi iskonto array'indeyken açık pozisyon %15 veya daha fazla düştüyse, sonraki dönemin getirisi, aynı koşulda ama açık pozisyon düşüşü olmayan durumlardan farklı mı?*

Neden bu iyi bir test:
- **İki koşul da mekanik** — biri yüzde, diğeri PD array (tanımlanabilir)
- **Karşılaştırma grubu doğal** — aynı array koşulu, açık pozisyon koşulu yok
- **Veri kamuya açık ve günlük** — CFTC / borsa açık pozisyon serileri
- **Ve eşik taranabilir:** %5, %10, %15, %20 — kural %15'e ne kadar duyarlı?

**Ve bu son nokta önemli:** %15 nereden geliyor? Video söylemiyor. Eğer sonuç %10 ile %20 arasında keskin biçimde değişiyorsa, sayı seçilmiş demektir; değişmiyorsa kural sağlamdır. **İkisi de tek koşuda öğrenilir.**

**Kripto notu:** açık pozisyon **taşınıyor** ve gecikmesiz — Haziran V5'te kaydedilmişti. **Bu kural doğrudan uygulanabilir**, ve bu ayın kriptoya taşınan tek kuralı.

#### %60 → %70 — kaynaksız, ve içsel olarak tuhaf

> *"Pazartesi'den sonra **%60**, Salı'da yanılırsam **%70**, Çarşamba–Cuma kaldığında **%70.**"*

Üç sayı, sıfır kaynak. **Ve bir tuhaflık var:** ikinci ve üçüncü sayı aynı. Salı'da yanıldıktan sonra güven %70'e çıkıyor, ve bir gün daha geçtikten sonra hâlâ %70.

**Bilgi arttıkça güvenin artması beklenir; sabit kalması bir işaret değil, bir tahmindir.**

**Ve daha temel bir sorun:** "haftalık profili belirleyebilme olasılığı" ölçülemez, çünkü **haftalık profil listesi tanımlı ama profil sayısı verilmemiş.** Kaç profil var? Mart'ın içeriğine gönderme yapılıyor. Eğer N profil varsa, rastgele tahminin taban çizgisi **1/N**'dir.

**Ve profil sayısı biliniyorsa taban çizgisi hesaplanır ve iddia test edilebilir.** Bu, Mart'ın içeriğine geri döndüğünde çözülür ve bu belgenin ödevidir.

#### Ve videonun kendi ifadesi bu adımı eliyor

> *"**Haftalık profilleri öngörmek için hiçbir zaman sistematik bir yaklaşım yaratamadım.**"*

Bu, adımın **video tarafından** ölçülemez ilan edilmesidir. Ve YONERGE §0'ın gereği burada net: bu ifade **ders bölümünde tam olarak** kaydedilmeli, çünkü videonun kendi sınır beyanıdır.

**Ölçüm için sonucu tek cümle:** haftalık profil adımı **çıkarılabilir.** Zincirin geri kalanı (COT, açık pozisyon, emir akışı, açılış fiyatı, SMT, breaker, PD array) o adım olmadan da çalışıyor, ve adımın katkısı **ancak çıkarılıp test edilerek** bilinir.

#### Pazartesi gece yarısı açılışı — ayın en ucuz ölçümü

> *"Pazartesi gece yarısı New York saati açılış fiyatını al ve **tüm hafta boyunca taşı.**"*

**Bu, tamamen mekanik:** tek bir zaman damgası, tek bir fiyat, sıfır yorum.

**Ve iddiası basit ve doğrudan test edilebilir:** *haftanın geri kalanında fiyatın bu referansın üstünde mi altında mı olduğu, haftanın yönü hakkında bilgi taşıyor mu?*

**Ve iki referans karşılaştırmalı test edilebilir:** Pazar açılışı vs Pazartesi gece yarısı. Video ikisini de kullanıyor ve hangisinin daha iyi olduğunu söylemiyor. **İki koşu, tek fark.**

**Taban çizgisi belirgin ve dikkat gerektiriyor:** herhangi bir referans fiyatın üstünde/altında olmak, **fiyatın kendisiyle otomatik olarak korelasyonludur** — yükselen bir haftada fiyat çoğu referansın üstünde olur. Yani test, **haftanın yönü koşullandırıldıktan sonra** bilgi taşıyıp taşımadığına bakmalı. Aksi halde ölçülen şey sadece "fiyat yükseldiyse yükselmiştir" olur.

Bu, Nisan V3 ve Haziran V6/V10'da kaydedilen aynı açılış aralığı sorunu, ve aynı düzeltmeyle çözülüyor.

#### Salı–Perşembe iddiası — taban çizgisi hesaplanabilir

> *"Haftalık aralık tipik olarak Salı ile Perşembe arasında oluşur."*

**Ölçülebilir ve ucuz.** Ve taban çizgisi doğrudan hesaplanır: haftanın tepesi ve dibi beş güne düzgün dağılsaydı,

- **P(tepe Salı–Perşembe'de) = 3/5 = %60**
- **P(dip Salı–Perşembe'de) = 3/5 = %60**
- **P(ikisi de) ≈ %36** (bağımsızlık varsayımıyla; gerçekte bağımlı olduğu için biraz farklı)

**Yani iddia, ancak gözlenen oran bu sayıların belirgin biçimde üstündeyse bilgi taşır.**

Ve ayrı olarak ayı senaryosu **çok daha spesifik**: *"Salı haftanın tepesi, Perşembe New York açılışı haftanın dibi."* Bu, tek bir gün ve tek bir seans belirtiyor — **taban çizgisi %20 (tek gün)**, ve çok daha keskin bir test.

**Bu, Mart ve Nisan'da kaydedilen aynı ailedendir** ve orada kaydedilen aritmetik imkânsızlık uyarısı burada da geçerli: **alt küme, üst kümesinden büyük olamaz.**

#### Breaker'lar arası işlem — ve neden bu iyi bir çerçeve

> *"Boğa breaker'dan ayı breaker'a — o iki nokta arasında ortadaki et."*

**Bu, bir aralık tanımıdır** ve iki ucu da geçmiş fiyat yapısından türetiliyor. Yani **her an hesaplanabilir** ve gelecek bilgisi içermiyor.

**Ölçülebilir hipotez:** *Fiyat, boğa breaker ile ayı breaker arasındayken, dışındayken olduğundan farklı davranıyor mu?*

Bu, senin **range projendeki** soruyla aynı yapıda — `RANGE_ACTIVE`/`NO_RANGE` ayrımı. Ve Ağustos V1'in üç soruluk profili, Ocak V6'nın korelasyon işareti, Şubat/Mart'ın oynaklık daralması, Haziran V19'un dört varlık sınıfı uyum skoru ile birlikte **beşinci rejim tanımı.**

**Beşi tek çalışmada karşılaştırılabilir**, ve Haziran'da kaydedilen soru burada tamamlanıyor: *hangi rejim tanımı, sonraki dönemin davranışını en iyi öngörüyor?*

#### "Boğaysak her gün almıyoruz" — ve neden bu ölçüm için kritik

> *"Bir piyasada boğaysak bu her gün almamız gerektiği anlamına gelmez. **Zaman ve fiyat buluşmalı.**"*

**Bu, on iki ayda tekrarlanan en tutarlı fikirdir**, ve ölçüm açısından doğrudan bir sonuç taşıyor: **yön eğilimi bir işlem sinyali değil, bir filtredir.**

Yani ölçüm iki katmanlı olmalı:
1. **Filtre katmanı:** günlük yön eğilimi — kaç gün boğa, kaç gün ayı
2. **Tetik katmanı:** iskonto/prim array + saat koşulu

**Ve ikisinin katkısı ayrı ayrı ölçülebilir.** Filtre tek başına bilgi taşıyor mu? Tetik tek başına? İkisi birlikte?

**Bu ayrım, Şubat'ta kaydedilen bileşim sorununun çözümüdür** — *"birleşim belirsizliği çarpıyor"* — ve çözümü de aynıydı: **bileşenleri ayrı ölç, iş akışını test etme.**

#### Yanlışlanamazlık

**1. Haftalık profil adımı — video tarafından ölçülemez ilan edilmiş.** Yukarıda.

**2. COT için "aralık çok darsa altı aya in" — bir kaçış kapısı.** "Çok dar" tanımsız. Pencere uzunluğunun **sonuca bakılarak** seçilebilmesi, %R parametresiyle aynı sorundur.

**Kapatması ucuz:** pencereyi sabitle (12 ay), ya da her iki pencereyi de ayrı ayrı test et ve hangisinin daha iyi olduğunu **veriyle** belirle — göze bakarak değil.

**3. "Yaklaşık %15" — "yaklaşık" bir eşiği yumuşatıyor.** Ama eşiğin varlığı yokluğundan çok daha iyi, ve taranarak sertleştirilebilir.

**4. Hiç grafik yok, hiç örnek yok.** Bu video tamamen prosedür. **Ve bu, bir kusur değil bu belge için avantaj:** iddialar örneklerle desteklenmiyor, dolayısıyla **seçilmiş örnek sorunu da yok.** Prosedür, olduğu gibi test edilebilir.

#### Ölçülebilirlik

**Ölçülebilir.** Açık pozisyon kuralı on iki ayın en tam tanımlısı (eşik + yön + bağlam + eylemsizlik); Pazartesi gece yarısı açılışı tek bir zaman damgası; Salı–Perşembe iddiasının taban çizgisi doğrudan hesaplanabilir; kurumsal emir akışı iki mumla tanımlı; breaker aralığı geçmiş yapıdan hesaplanıyor.

**Ve ölçülemez tek adım (haftalık profil) video tarafından öyle ilan ediliyor ve zincirden çıkarılabiliyor.**

#### Not

**Bu ayın birinci öncelikli ölçümü, ve krıptoya taşınan tek kuralı:** açık pozisyon %15 kuralı, **eşiği taranarak** (%5/%10/%15/%20) ve **bağlam koşuluyla birlikte.**

**Bu ayın en ucuz ölçümü:** Pazartesi gece yarısı NY açılış fiyatı, **Pazar açılışına karşı**, ve **haftanın yönü koşullandırılmış** halde.

**Ucuz ve gecikmiş:** Salı–Perşembe haftalık aralık iddiası, **%60 / %36 taban çizgilerine** karşı. Ve ayı senaryosunun keskin versiyonu (**Salı tepe, Perşembe NY açılışı dip**) **%20 tabana** karşı.

**Çıkarılacak:** haftalık profil öngörüsü. Video sistematikleştirilemediğini söylüyor, ve zincir onsuz çalışıyor.

**Ve kaydedilecek:** eylemsizlik kuralı. *"Ya bu iki kriterden birini karşılamalı ya da hiç başvurmayacağım."* **On iki ayda bu cümlenin başka bir örneği yok**, ve bir göstergenin nasıl yazılması gerektiğinin tanımıdır.
:::

### Video 4 — Dört saatlikten beş dakikalığa · kurulumlar ve kapanış

::: ders
**DERS**

#### Zaman dilimi seçimi

> *"Dört saatlikten aşağı **hangi zaman dilimine ineceğine sen karar vermelisin.** 60 dakika inilecek düzgün bir zaman dilimi ama yine de biraz daha rafine edilmesi gerekecek. **Ben kişisel olarak dört saatlikten 30 dakikaya ya da 15'e inmeyi seviyorum**, sonra beş dakikada daha da rafine ediyorum."*

> *"Girişleri beş dakikada alabiliyorsam harika, ama genelde kurulumları **en az 15 dakikada** teyit etmeyi arıyorum."*

**Ve seçim ölçütü veriliyor:**

> *"Dört saatlikten indiğimizde yaptığımız şey **fair value gap üreten bir zaman dilimi aramak — anahtar bu.** Bir saatlikte fair value gap görmeyebilirsin ama 15 dakikada var olabilir."*

#### 1. Haftanın günü

> *"Daha yüksek zaman diliminden **ayıysam, Pazartesi, Salı ve Çarşamba günleri short arıyorum. Boğaysam aynı günlerde long arıyorum.**"*

> *"Pazartesi–Salı–Çarşamba etkisi beklerken **gerçekleşmezse, Perşembe ve Cuma senaryolarına** bakıyorum."*

#### 2. True day — 03:00–10:00 New York

> *"**Günlük hacmin büyük kısmı sabah 03:00 ile 10:00 New York saati arasında olacak.** Ya bu pencerenin **önünde** ya da **ilk yarısında** kendimi doğru konumlandırmak istiyorum."*

> *"**New York açılışından sonra beklentilerimi düşürmeli** ve gün içi daha küçük hedeflerle yetinmeliyim."*

#### 3. Kill zone'lar ve çıkış penceresi

| Yön | Londra açılışı | Başarısızsa |
|---|---|---|
| **Boğa** | **Günün dibini** hedefle | **New York açılışında** yeniden konumlan |
| **Ayı** | **Günün tepesini** hedefle | **New York açılışında** yeniden konumlan |

**Ve çıkış penceresi net:**

> *"Gün içi pozisyonlarımın büyük kısmını ya da tamamını **sabah 10:00 – 11:00 New York saati penceresinde** kapatmaya bakıyorum — kâr alma ya da Londra kapanışının başlangıcı."*

#### 4. Central Bank Dealers Range sapmaları

| Yön | Kullanılan sapmalar | Örtüşmesi gereken |
|---|---|---|
| **Boğa** | **−1, −2, −3** standart sapma | **15–60 dakikalık iskonto array** |
| **Ayı** | **+1, +2, +3** standart sapma | **15–60 dakikalık prim array** |

> *"**Sadece bir ya da iki sapma ekleyip 'tamam burada short'a giriyorum' demiyorum** — bir prim array arıyorum. **Harmanlama meselesi.**"*

#### 5. Asya aralığı

| Yön | Kabul edilebilir | Tercih edilen |
|---|---|---|
| **Boğa** | Asya aralığı **tepesinin altında** long | Asya aralığı **dibinin altında** long |
| **Ayı** | Asya aralığı **dibinin üstünde** short | Asya aralığı **tepesinin üstünde** short |

**Ve yeniden test kuralı:** *"Boğaysam **Asya aralığı tepesinin destek olarak yeniden test edilmesini** bekliyorum — giriş için ya da açık pozisyona ekleme için."*

#### 6. Flout — tanımı tam olarak veriliyor

> *"Bazılarınız bunun için can atıyordunuz ve muhtemelen **PhD seviyesinde bir sunum** bekliyordunuz ama o kadar zor değil."*

**Tanım:**

> *"Flout, **Central Bank Dealers Range ve Asya aralığının birleşimidir** — o bütün zaman penceresi, **en yüksek tepe ve en düşük dip**, hem fitiller hem gövdeler cinsinden. **O aralığı ikiye böl — bu bir standart sapma yapar.**"*

**Sayısal örnek:**

> *"CBDR açılışından Asya aralığı kapanışına, New York saatiyle gece yarısına kadar, en yüksek tepe ve en düşük dip **40 pip** diyelim. **Aralığın yarısı 20. 20 pip flout için standart sapmadır.** Merkez noktadan bir yukarı — bu bir standart sapma, iki, üç, dört, ve böyle devam."*

> *"**Aralığın yarısı standart sapmayı oluşturuyor — tepe-dip tam aralığı değil.**"*

**Ve bir sınır beyanı:**

> *"Flout **birçok standart sapma** olabilir — **CBDR ya da Asya aralığı için olduğu gibi kural tabanlı bir fikir yok.** Asya aralığı bir ya da iki standart sapma yukarı gidip günün tepesini yaratabilir... **flout ise günlük aralık büyüdükçe eklenmeye devam etmesi gereken** bir şey."*

#### 7. Gün içi profiller

| Durum | Beklenti |
|---|---|
| **Ayı**, ve 4 saatlik **henüz iskonto array'e** inmedi | New York açılışı **düşmeye devam eder** |
| **Boğa**, ve 4 saatlik **henüz prim array'e** çıkmadı | New York açılışı **yükselmeye devam eder** |
| **4 saatlik prim array'e ulaştı** | New York'ta **dönüş** muhtemel |
| **4 saatlik iskonto array'e indi** | New York'ta **dönüş** muhtemel |

> *"Bu olmadığı ya da henüz olmadığı sürece, **Londra ve New York yön açısından hemfikir olacak.**"*

#### 8. Ortalama günlük aralık projeksiyonu

**Beş günlük ADR** kullanılıyor.

> *"Boğaysam piyasanın **ortalama günlük aralık tepesine** işlem görmesini bekliyorum. Bu tepe kırılırsa, **ortalama günlük aralığın tepe ve dibine Fibonacci** koyup **%127 ve %162 uzantılarını** hedef olarak kullanıyorum."*

**Ve tek başlarına yeterli olmadıkları vurgulanıyor:**

> *"**Kendi başlarına hiçbir şey değiller** — %127'nin 60 dakikalık ya da 15 dakikalık bir prim array ile hizalanmasını arıyorum."*

**Ve 10 pip kuralı:**

> *"Bunları harmanladığında **çoğu zaman günün tepe ve dibinin 10 pip içinde** olacaksın. **Bu yüzden 10 pip önce çıkmak istiyorum**, çünkü projeksiyonlarımda yanılabilirim."*

> *"Son birkaç pip için tutar mıyım? **Hayır.** Bunu her yaptığımda ya beni hayal kırıklığına uğrattı ya da yetersiz kaldı."*

> *"**Son 25–30 pip'i masada bırakmayı umursamıyorum, umurumda değil** — yeter ki tutarlı aralık genişlemeleri alayım."*

Ve: *"**Projeksiyonlar mutlaklık değildir. Standart sapmalar yardımcıdır, garanti etmezler. Panacea değiller.**"*

#### 9. İki kurulum — ve sadece iki

> *"**Teknik bir işlemci olarak sadece bir kuruluma ya da bir örüntüye ihtiyacımız var.** ... Sana işlem yaptığım **iki kurulumu** öğreteceğim. **Başka bir şey yapmıyorum, başka örüntü aramıyorum.**"*

> *"**ICT Stinger'ları görebiliyorum, reflection pattern'leri görebiliyorum**... hepsini görebiliyorum **ve geçmelerine izin veriyorum.**"*

**Boğa örüntü 1 — Optimal Trade Entry / iç aralık likiditesi**

Koşul: **daha yüksek zaman dilimi boğa.**

1. Fiyat, daha yüksek zaman dilimi **iskonto array'inden** sekiyor
2. Bir **impuls salınımı**, salınım dibine yakın bir **fair value gap** yaratıyor
3. Piyasa yapısında bir **kısa vadeli dip** oluşuyor ve yükselmeyi başaramıyor
4. **Eşit tepeler ya da daha yüksek tepe** oluştuktan sonra
5. Fiyat **fair value gap'e** ve **kısa vadeli dibin altına** düşüyor
6. **Satış stopları tetikleniyor**, akıllı para offset birikimle long girişleri o stoplara eşleştiriyor

**Ve dört teyit sayılıyor:**

> *"Dip'ten impuls salınımına fib çekiyorsun, **%62 / %70,5 / %79** geri çekilme seviyeleri **fair value gap** ile, **satış stoplarının bulunduğu kısa vadeli dip** ile, ve **boğa order block** ile örtüşüyor — **dört şey lehine.** Daha yüksek zaman dilimi boğalığıyla birlikte **kesin bir şey.**"*

Ve bir çekince: *"**Garanti değil, yukarı gitmesi garanti edilmiyor** — ama kendi analizimde, kendi çalışmamda **bunun diğer her şeyden daha çok işe yarayan kriter olduğunu** öğrendim."*

Ve bir sınırlama: *"Birçok kez ralli yapıp geri çekilir ve **arada bir kısa vadeli dip olmaz — o zaman o kadar yüksek olasılıklı değil.**"*

**Boğa örüntü 2 — Turtle soup / dış aralık likiditesi**

1. Fiyat, **beklenen** daha yüksek zaman dilimi iskonto array'inin **önünde** sekiyor — sahte dip
2. **O sahte dipten satın alınmıyor**
3. Fiyat daha sonra beklenen iskonto array'e iniyor ve **satış stoplarını süpürüyor**
4. **Orada alınıyor**

> *"Fiyat gelmesini istediğim iskonto array'in **hemen üstünde durup oyalanırsa ya da biraz yukarı hareket ederse — sahte dip, yapay dip — onu almam.** Bekleyeceğim, **erken boğaları öldürmeye inip inmeyeceklerini** göreceğim."*

**Ve kaynağı açıkça veriliyor:**

> *"**Street Smarts** kitabına baktığında, bu örüntü için ilhamı oradan aldım — **orada böyle anlatılmıyor**, sadece 'işte bir dip, dibin altına iniyor, orada al' diyor, **ve bu bence biraz miyop.**"*

> *"**Linda Raschke'nin** yaptığı işlere bak — bu örüntüyü **Larry Connors** ile birlikte kitabında öğretiyor... **kitapta paylaşılanın dışında daha fazla ayrıntı kurmadı.**"*

**Boğa örüntü 3 — breaker, ikinci şans**

> *"Diyelim ki turtle soup girişini **alamadım** — bu yüzden sana **endişelenme, pişman olma, kendini dövme** diyorum. Fiyatın kısa vadeli tepeyi geçmesini bekliyorum ve **o kısa vadeli tepe artık boğa breaker oluyor.** Fiyat breaker'a geri döndüğünde onu giriş olarak kullanıyorum."*

**Ve gerekçe:**

> *"Çünkü **o daha düşük dipteki stop koşusundan sonra fiyatın oraya geri dönmemesi gerekir** — yani genellikle order block'a kadar bir geri çekilme olmayacak. **Zaten oraya indi ve işini yaptı.**"*

**Ve piramitleme:** *"Dip uçta turtle soup long'da 20 lot aldıysam, **breaker'da 10 daha ekleyebilirim.**"*

**Ayı tarafı** üç örüntünün tam aynası olarak veriliyor.

#### Ve üç kural cümlesi

> *"**Fiyatta bu üç şeyi görmezsem hiçbir şey yapmam. Hiçbir şey yapmam. Fiyatta göremiyorsam dokunmam, nokta. Bana fiyatta bu kadar net görünmüyorsa işlem yapmam.**"*

> *"**Bir alım programım var, bir satım programım var, ve bir yanılırsam programım var.**"*

#### Kapanış — ve tarif reddi

> *"Biliyorum ne istediğini: **ortalama günlük aralık artı CBDR'ın üç standart sapması artı Asya aralığının beşi artı flout'un on dördü.** İşte istediğin bu. **Ben de istedim.** Ama kariyerimin başında öğrendim ki **bunun için bir tarif yok.**"*

> *"Herkes kavramlarımı takıp otomatikleştirebileceğini sanıyor — **yapamayacaklar. Çok fazla değişken var. Düşünmek zorundasın.**"*

> *"**Benim yaptıklarımın tamamını asla otomatikleştiremeyeceksin, olmayacak** — ve bence şimdiye kadar öğrettiğim hiç kimse de yapamadı. **Kantitatif analistlerle konuştum, algoritmacılarla konuştum, inan bana denediler.**"*

> *"Tüm o eğitim videolarını izleyen insanlar hayal kırıklığına uğruyor çünkü **net, kesin, kural tabanlı fikirler eksik — ve bunu kasıtlı yaptım.** O eğitimler, **başka birinin benim yapabildiğimi tekrarlayıp tekrarlayamayacağını görmek için** dışarıda duruyor. **Hiç kimse yapamadı. Bu mentorlukta bile yapamadılar.**"*

#### Spread beyanı

> *"Demo ya da canlı hesabımızın **biraz çarpık fiyatlaması** olacağını bilerek... gün içi bakış açısından **interbank fiyatlamasından 10 ila 15 pip'lik bir aralığa** bakabiliriz."*

> *"Spread'in üstüne bir spread daha — **bu işi zorlaştırıyor**, ve onlar spread'i kendi lehlerine çalıştırabilirler. **Eski bir dibe ya da tepeye yaklaştığında stopunu almak için açabilirler**... ve senin lehine olduğunda o spread'in sana yardım etmesine izin vermezler."*

#### Altın örneği — 23 Ağustos 2017

Dört saatlik grafik. Yön: **boğa.** Ama *"iskonto array almamız için piyasanın daha aşağı işlem görmesi gerekiyor."*

Saatliğe iniliyor:

| Unsur | Seviye |
|---|---|
| **Fair value gap** (yalnız alım tarafı teslim edilmiş) | **1278 – 1280** — *"iki handle"* |
| Bir sonraki aşağı iskonto array (salınım tepesi) | **1276** |
| Ondan sonraki salınım tepesi | **tepesi 1275** |
| **Giriş** | **1278** |
| **Stop** | **1274** — *"1275 ve altında olmalı"* |
| **Hedef** | *"**Herhangi bir prim array** — ama piyasa aşağı işlem görmeye başladıktan sonra bakmalıyız"* |

**Ve OTE hesabı:** dipten tepeye fib, **%62 – %79** bandı, *"tatlı nokta"* **%70,5.**

> *"%70,5 örtüşmesiyle gerçek giriş bu diyeceğiz — çünkü **gap'in biraz ötesine yayılabilir** — ya da %79 kullanabiliriz ve o gap'i kapatır."*

**Sonuç:** *"Long 1278'de, koruyucu stop 1274 — **hiç vurulmadı.** İskonto array alındı, bu diplerin altındaki satış stoplarından alım yapıldı, ve fiyat hemen yukarı ralli yaptı."*

**Ve kaçıranlar için:** *"Bu fırsatı kaçırdıysanız — ki çoğunuz muhtemelen kaçırdı — **artık long olmak için breaker'ı kullanabiliriz.**"*

**Ve bir öğrenci iddiası:** *"Canlı seansta seni yönlendirdiğimde **hemen hemen %80'iniz kurulumun nerede olacağını doğrudan hedeflediniz.**"*

#### Son sözler

> *"Sana her şeyi verdim. **2018'de ya da gelecekte gizli bir öğreti yok. Benim tarafımdan yazılan, içermediği bir şey olan bir kitap yok.** Söz verdiğim gibi, **tekniklerde bildiğim ve yaptığım her şey.**"*

> *"Bunun **doğru olduğunda gerçekten çok doğru** olduğunu göreceksin; **yanlış olduğunda yanlıştır, söyleyecek bir şey yok, ne ise o.** Sana baştan söyledim: **mükemmel olamam, sen de asla mükemmel olamayacaksın.**"*

> *"**Ara sıra haklı olman ve yanlış olduğundan daha çok haklı olman gerekiyor.**"*
:::

::: eleme
**ELEME**

#### "Standart sapma" yanlış terim — ve sonucu var

> *"O aralığı ikiye böl — **bu bir standart sapma yapar.** 40 pip aralık, **yarısı 20 — 20 pip standart sapmadır.**"*

**Standart sapma, ortalamadan sapmaların karekök ortalamasıdır. Aralığın yarısı bu değildir.**

İkisinin ilişkisi örneklem büyüklüğüne bağlıdır. Normal dağılımdan çekilmiş N gözlemin **aralığı**, N büyüdükçe büyür — küçük örneklemlerde ~2–3σ, birkaç yüz gözlemde ~5–6σ. Yani **"aralığın yarısı" tipik olarak 1σ değil, kabaca 1,5–3σ'ya karşılık gelir**, ve oran sabit değildir.

**Bu bir isim hatası, ve büyüklüğün kendisi tamamen tanımlı ve ölçülebilir.** Ama iki pratik sonucu var:

1. **Normal dağılım sezgileri yanlış çalışır.** "1 standart sapma" denince akla %68 gelir; burada geçerli değil.
2. **Karşılaştırılabilirlik bozulur.** Aynı isim iki farklı büyüklük için kullanılınca (CBDR "standart sapması" ve flout "standart sapması" farklı pencerelerin yarım aralıkları), aralarındaki ilişki tanımsız kalır.

**Düzeltmesi tek satır ve hiçbir şey kaybettirmiyor:** büyüklüğe **"yarım aralık"** de. O zaman hesap aynı kalır, isim doğru olur, ve **istatistiksel özellikleri ölçülebilir hale gelir.**

**Ve Mart V4'ün "1,68 Fibonacci değildir" bulgusuyla aynı ailedendir:** tanımlı bir terimin tanımı dışında kullanılması. **Ama bu ay Fibonacci sayıları doğru** — 1,272 = √1,618 ve 1,618 = φ, ikisi de meşru türetmeler. %79 ≈ √0,618 = 0,786 da doğru. **Sadece %70,5** ne bir Fibonacci oranı ne de %61,8 ile %78,6'nın tam ortası (o 70,2); yaklaşık bir ara değer.

#### Flout'un kural tabanı yok — ve video söylüyor

> *"Flout birçok standart sapma olabilir — **CBDR ya da Asya aralığı için olduğu gibi kural tabanlı bir fikir yok.**"*

Yani flout'un **büyüklüğü tanımlı** (yarım aralık) ama **kaç tanesinin kullanılacağı tanımsız.** Ve hedef, kaç tane kullanıldığına bağlı.

**Bu, hedefi ölçülemez kılıyor** — ve altın örneği bunu doğruluyor: giriş ve stop veriliyor, **hedef verilmiyor** (*"herhangi bir prim array"*).

**Ve sonucu doğrudan senin ölçüm çerçevende:** **R hesaplanamıyor.** Risk tanımlı (1278 − 1274 = 4,00 USD/ons, 100 onsluk sözleşmede **400 USD**), getiri tanımsız. **Bir işlem, R'ı olmadan bir gözlem değildir.**

**Ve bu, `#014`'ünün konusu:** sabit hedefin sağ kuyruğu kestiğini ölçmüştün. Burada hedef sabit bile değil — **tanımsız.** İkisi farklı sorunlar ama aynı yeri işaret ediyor: **çıkış kuralı, giriş kuralından daha az tanımlıysa sistem ölçülemez.**

#### Ama giriş tarafı ölçülebilir, ve tam tanımlı

Altın örneğinin **giriş** tarafı, on iki ayda kaydedilen en eksiksiz kurulumdur:

| Unsur | Değer | Türü |
|---|---|---|
| Yön koşulu | 4 saatlik boğa | Daha yüksek zaman diliminden |
| Array | Fair value gap **1278–1280** | Fiyat yapısından, mekanik |
| Giriş | **1278** | Sayı |
| Stop | **1274** | Sayı, ve gerekçesi verilmiş (bir sonraki array'in altı) |
| Tarih | **23 Ağustos 2017** | Önceden ilan edilmiş |
| Sonuç | **Stop vurulmadı** | Raporlanmış |

**On iki ayda ilk kez giriş, stop ve tarih birlikte veriliyor.** Temmuz V4 on yıllık bir kayıt sunuyordu ama **stopsuz**; burada stop var ama **tek işlem.**

**İkisi birleştiğinde ölçüm mümkün olur**, ve bu, bu belge serisinin ürettiği son ve en somut ödevdir: **Temmuz'un on yıllık penceresini, Ağustos'un stop kuralıyla yeniden çalıştır.**

#### İki örüntü — ve neden ölçülebilir

**Örüntü 1 (OTE / iç aralık likiditesi)** altı adımlı ve her adım fiyat yapısından:

1. Daha yüksek zaman dilimi iskonto array'i — **tanımlı**
2. İmpuls salınımı + fair value gap — **tanımlı** (üç mumlu boşluk)
3. Kısa vadeli dip oluşumu — **tanımlı** (iki yanında daha yüksek dip)
4. Eşit tepeler / daha yüksek tepe — **tanımlı**
5. Fiyatın gap'e ve dibin altına dönmesi — **tanımlı**
6. Giriş — **%62 / %70,5 / %79 bandı**, sayı

**Örüntü 2 (turtle soup / dış aralık likiditesi)** dört adımlı ve daha da basit:

1. Beklenen iskonto array'in **önünde** sahte dip
2. **O dipten alınmıyor** — açık bir eylemsizlik kuralı
3. Fiyat array'e inip stopları süpürüyor
4. Giriş

**Ve ikinci adım kritik:** *"onu almam, bekleyeceğim."* Bu, **açık bir işlem yapmama kuralıdır** ve V3'teki açık pozisyon eylemsizlik kuralıyla aynı ailedendir. On iki ayda bu tip kural az.

**Örüntü 3** ise ikisinin **kaçırılması durumu** için, ve o da tanımlı: kısa vadeli tepe kırıldıktan sonra breaker'a dönüş.

**Ölçülebilir hipotez, ve bu ayın ikinci önceliği:** *Bu iki örüntü, aynı yön koşulu altında, örüntü koşulu olmadan yapılan girişlerden farklı sonuç veriyor mu?*

Neden bu iyi bir test:
- **Yalnızca iki örüntü var** — video açıkça söylüyor, ve bu, arama uzayını kapatıyor
- **Her adım geçmiş fiyattan hesaplanabilir** — gelecek bilgisi yok
- **Karşılaştırma grubu doğal** — aynı yön koşulu, örüntü koşulu yok
- **Ve iki örüntü birbirinin alternatifi**, dolayısıyla ayrı ayrı ve birlikte ölçülebilir

**Ve bir kritik uyarı:** *"arada kısa vadeli dip olmazsa o kadar yüksek olasılıklı değil"* deniyor ama **ne kadar daha düşük olduğu söylenmiyor.** Bu, kolayca bir kaçış kapısına dönüşür: örüntü çalışmazsa *"tam örüntü değildi"* denebilir.

**Kapatması net ve gerekli:** kısa vadeli dip koşulu **ikili bir değişken** olarak kaydedilmeli ve **iki alt grup ayrı ayrı** ölçülmeli. O zaman "daha az yüksek olasılıklı" bir iddia değil, bir sayı olur.

#### Zaman pencereleri — hepsi mekanik ve hepsi ölçülebilir

| Pencere | Saat (NY) | Kullanım |
|---|---|---|
| **True day** | **03:00 – 10:00** | Hacmin büyük kısmı; konumlanma penceresi |
| **Londra açılışı kill zone** | (önceki aylardan) | Günün tepesi/dibi hedefi |
| **New York açılışı kill zone** | (önceki aylardan) | İkinci şans |
| **Çıkış penceresi** | **10:00 – 11:00** | Gün içi pozisyonların kapanışı |
| **CBDR + Asya** | CBDR açılışı → **gece yarısı** | Flout aralığı |

**Beşi de takvim/saat tabanlı, sıfır yorum, ve hepsi tek bir kodla test edilebilir.** Bu, Mart'ın ölçütünün en temiz uygulaması: *girdi bir tarih mi yoksa bir yorum mu?*

**Ve New York açılışından sonra beklentiyi düşürme kuralı ölçülebilir:** *03:00–10:00 penceresinde başlayan hareketlerin büyüklüğü, 10:00 sonrası başlayanlardan farklı mı?* Bu, Nisan'ın gün içi içeriğiyle aynı yapıda ve tek koşu.

#### 10 pip kuralı — ve neden bu iyi

> *"Çoğu zaman günün tepe ve dibinin 10 pip içinde olacaksın. **Bu yüzden 10 pip önce çıkmak istiyorum.**"*
> *"**Son 25–30 pip'i masada bırakmayı umursamıyorum.**"*

**Bu, açık ve sayısal bir çıkış kuralı**, ve doğrudan ölçülebilir bir takas içeriyor:

| 10 pip önce çık | 10 pip sonra çık |
|---|---|
| Hedef isabet oranı **artar** | Hedefe ulaşan işlemde kazanç **artar** |
| İşlem başına R **azalır** | Hedefe hiç ulaşmama riski **artar** |

**Ve bu, tam olarak senin `#014` bulgunun tersi yönde bir soru:** orada sabit hedefin **sağ kuyruğu kestiğini** ölçmüştün. Burada video **kuyruğu bilerek kesiyor** ve gerekçesini veriyor. **Aynı takasın iki tarafı, ve ikisi de aynı koşuda ölçülüyor.**

**Ve tampon taranabilir:** 0, 5, 10, 20 pip. Hangi tampon en yüksek beklenen değeri veriyor?

#### Spread iddiası — 10–15 pip, ve ölçülmesi gereken

> *"Gün içi bakış açısından **interbank fiyatlamasından 10 ila 15 pip'lik bir aralığa** bakabiliriz."*

**Bu sayı, 2017'de major pariteler için tipik perakende spread'inden çok büyüktür** — EUR/USD'de kote spread genellikle 1–2 pip düzeyindeydi. Yani iddia, **kote spread'i değil**, uçlardaki kayma ve stop avını tarif ediyor olmalı: *"eski bir dibe yaklaştığında stopunu almak için açabilirler."*

**O halde iddia, farklı bir büyüklük hakkındadır ve doğrudan ölçülebilir:** *stop emirlerinin gerçekleşme fiyatı ile kote fiyat arasındaki fark, uçlara yakın anlarda büyüyor mu?*

**Ve senin bunu zaten ölçtün.** `#014`'te gapless stop maliyetini **−1,088R** olarak buldun. **Video aynı büyüklüğü sözel olarak tahmin ediyor; senin sayın var.**

**Bu, on iki ayın en net karşılaştırmasıdır:** aynı soru, biri tahmin edilmiş, diğeri ölçülmüş. Ve tahmin edilenin doğru olup olmadığı bilinemez, çünkü hangi büyüklük olduğu tanımlanmamış.

#### %80 öğrenci iddiası — kayıtsız

> *"Hemen hemen **%80'iniz** kurulumun nerede olacağını doğrudan hedeflediniz."*

Kaç kişi katıldı, kaç kişi yanıt verdi, yanıt nasıl sayıldı — hiçbiri yok. Ve yanıt verenler, doğru cevabı bilenlerle sistematik olarak örtüşür (yanlış olduğunu düşünen yazmaz).

**On iki ayda beşinci kez aynı not**, ve bu ay tek.

#### Ve ayın — belki serinin — en önemli cümlesi

> *"Net, kesin, **kural tabanlı fikirler eksik — ve bunu kasıtlı yaptım.** ... **Hiç kimse yapamadı. Bu mentorlukta bile yapamadılar.**"*

> *"**Benim yaptıklarımın tamamını asla otomatikleştiremeyeceksin.** ... Kantitatif analistlerle konuştum, algoritmacılarla konuştum, **inan bana denediler.**"*

**Bu, yöntemin ölçülebilirliği hakkında kaynağın kendi ifadesidir**, ve üç ayrı şey söylüyor:

1. **Kural eksikliği kasıtlı** — bir eksiklik değil, bir tasarım tercihi
2. **Kimse tekrarlayamadı** — replikasyon denendi ve başarısız oldu
3. **Otomatikleştirilemez** — ve deneyenler nitelikli insanlardı

**İkinci madde, bilimsel anlamda bir sonuçtur ve olumsuz bir sonuçtur.** Bir yöntem tarif edildiği haliyle tekrarlanamıyorsa, tarif eksiktir. Video bunu **kabul ediyor** ve **eksikliğin kasıtlı olduğunu** söylüyor.

**Ve üçüncü madde, bu belgenin on iki aylık bulgusunun teyididir** — ama bir çekinceyle: *"tamamı"* otomatikleştirilemez demek, **hiçbiri** otomatikleştirilemez demek değildir.

**Bu belgenin on iki ayda çıkardığı şey tam olarak bu ayrımdır.** Sistem bir bütün olarak test edilemez. **Ama bileşenleri edilebilir**, ve bu belge boyunca çıkarılan onlarca hipotez o bileşenlerdir: sabit saat pencereleri, açık pozisyon eşiği, COT normalizasyonu, mevsimsel takvimler, endeks SMT, terim yapısı, dört varlık sınıfı uyum skoru, Pazartesi gece yarısı açılışı, iki örüntünün geometrik tanımı.

**Şubat'ta kaydedilen cümle bunun erken hâliydi:** *"Bileşenleri çıkar, iş akışını test etme."* Ağustos, aynı sonucu ters taraftan söylüyor: **iş akışı test edilemez, ve bu kasıtlı.**

#### Yanlışlanamazlık

**1. "Fiyatta bu kadar net görünmüyorsa işlem yapmam" — hem koruyucu hem yanlışlanamaz.** *"Net"* tanımsız, ve her başarısız örnek *"yeterince net değildi"* diye açıklanabilir.

**Ama Temmuz V17'de kaydedilen aynı kuralın yönü lehte:** *"belirgin değilse ayrışma yoktur"* — sinyal **bulmaya karşı** bir önyargı. Ve kapatması aynı: **"net"i bir eşiğe çevir** (gap büyüklüğü / ATR, ayrışma büyüklüğü / ATR), ve eşiği tara.

**2. "Doğru olduğunda gerçekten doğru, yanlış olduğunda yanlış."** Bilgi taşımıyor, ve on iki ayda tekrarlanan aynı yapıda bir kapanış.

**3. Hedef tanımsız.** Yukarıda. **Bu, ayın en ciddi ölçüm engelidir** ve girişin tam tanımlı olması onu telafi etmiyor.

#### Ölçülebilirlik

**Ölçülebilir.** Beş zaman penceresi saat tabanlı; CBDR / Asya / flout yarım aralık hesabı tamamen aritmetik; ADR beş günlük ortalama; %127 ve %162 doğru türetilmiş; iki örüntünün altı ve dört adımı da fiyat yapısından hesaplanabilir; 10 pip tamponu bir sayı; ve altın örneği giriş, stop ve tarih veriyor.

**Ama hedef tanımsız** (*"herhangi bir prim array"*, ve flout için kural yok), dolayısıyla **R hesaplanamıyor** — ve bu, girişin ne kadar iyi tanımlı olduğundan bağımsız olarak sistemin bütününü ölçülemez kılıyor.

**Aralık'ın ölçütüyle:** belirsizlik bu kez **çıkışta** — yani kenarda değil, ama girişten ayrılabilir bir yerde. **Giriş kuralları kendi başlarına ölçülebilir**, sabit bir çıkış kuralı takılarak.

#### Not

**Bu ayın ikinci öncelikli ölçümü:** iki örüntünün giriş kuralı, **sabit bir çıkış kuralıyla.** Video hedef vermiyor; sen ver — sabit R, ADR tepesi, ya da saat tabanlı çıkış — ve **hangisinin en iyi olduğunu ölç.** Bu, hem videonun boşluğunu kapatıyor hem `#014`'ün fat-tail sorusunu tekrar soruyor.

**Alınacak:** beş zaman penceresi. **03:00–10:00** true day, **10:00–11:00** çıkış, CBDR + Asya birleşimi. Sıfır yorum, tek kod.

**Alınacak:** 10 pip tamponu, **taranarak.** Kuyruğu bilerek kesmenin bedeli, senin `#014`'ünün doğrudan tersi ve aynı koşuda ölçülüyor.

**Alınacak, isim düzeltilerek:** *"standart sapma"* değil, **"yarım aralık."* Hesap aynı, isim doğru, ve istatistiksel özellikleri artık ölçülebilir.

**Zorunlu:** kısa vadeli dip koşulu **ikili değişken** olarak kaydedilmeli. *"O kadar yüksek olasılıklı değil"* bir sayıya çevrilmezse kaçış kapısı olur.

**Alınmayacak:** flout'un kaç sapmasının kullanılacağı. Video kural olmadığını söylüyor, ve kural olmadan hedef hesaplanamaz.
:::

## BÖLÜM II — Ayın bütünü

### Ölçülebilirlik tablosu

| Video | Geçiş | Değerlendirme |
|---|---|---|
| V1 | Aylık → haftalık | **Kısmen** — faiz farkı ve yuvarlama kuralı mekanik; ama **piyasa profili sınıflandırması ve PD array seçimi tanımsız, ikisi de zincirin ortasında** |
| V2 | Haftalık → günlük | **Kısmen** — COT endeksi tamamen mekanik (ve Williams COT Index ile aynı); ama **duyarlılık adımı ölçülemez ve tek sayısal bileşeninin parametresi örneklem içinde seçiliyor** |
| V3 | Günlük → 4 saatlik | **Ölçülebilir** — **açık pozisyon %15 kuralı on iki ayın en tam tanımlısı** (eşik + yön + bağlam + eylemsizlik); Pazartesi gece yarısı açılışı tek zaman damgası; Salı–Perşembe iddiasının tabanı hesaplanabilir |
| V4 | 4 saatlik → 5 dakikalık | **Ölçülebilir** — beş zaman penceresi saat tabanlı, iki örüntü geometrik olarak tanımlı, giriş+stop+tarih verilmiş; **ama hedef tanımsız** |

**Ölçülebilir: 2 · Kısmen: 2 · Ölçülemez: 0**

### Ayın yapısal özellikleri

**1. On iki ayda ilk kez bir sıra var.**

Dokuz adım (aylık), dokuz adım (haftalık), dokuz adım (günlük), on adım (gün içi). Kavramlar on bir aydır veriliyordu; **hangisinin ne zaman kullanılacağı ilk kez burada.**

**Ve sıranın kendisi bir iddiadır ve ablasyonla test edilebilir:** her adım çıkarıldığında sonuç değişiyor mu?

**2. Şablon dört kez tekrarlanıyor ve çekirdek aynı.**

| Adım | Aylık | Haftalık | Günlük | Gün içi |
|---|---|---|---|---|
| Zaman girdisi | Mevsimsellik + çeyrek | — | Haftalık profil | **Haftanın günü + saat** |
| Temel girdi | **Faiz farkı** | **COT** | **COT + açık pozisyon** | — |
| Duyarlılık | — | **Manşet + forum + %R** | — | — |
| Profil | Üç soru | Üç soru | — | Gün içi profiller |
| Piyasalar arası | ✓ | ✓ | ✓ (SMT) | — |
| Yapı | ✓ + SMT | ✓ + emir akışı | ✓ + **breaker** | — |
| **PD array matrisi** | ✓ | ✓ | ✓ | ✓ |
| **Yuvarlama (5/0)** | ✓ | ✓ | ✓ | ✓ |
| Çıktı | Aylık eğilim | Haftalık eğilim | Günlük eğilim | **Kurulum + giriş** |

**PD array matrisi ve yuvarlama kuralı dördünde de var** — şablonun tek değişmeyen omurgası.

**3. Ve tam olarak burada ölçüm sorunu yoğunlaşıyor.** PD array seçimi *"bariz olanları not ederim"* olarak tanımlı, ve dört zaman diliminde de merkezde. **Bir adım dört kez tekrarlanıyorsa, o adımdaki belirsizlik de dört kez çarpılıyor** — Şubat'ın kapanış gözleminin tam uygulaması.

**Ama düzeltmesi de dört kez işe yarıyor**, ve videonun kendi AUD örneğinin içinde: yedi array tipini **her seferinde tek tek** kontrol et (order block, rejection block, likidite havuzu, likidite boşluğu, vakum gap, breaker, eski tepe/dip), var/yok işaretle. **O eleme listesi kuralın kendisi.**

**4. Gerçek eşikler var — ve sayılabilir.**

| Eşik | Video | Cinsi |
|---|---|---|
| **Açık pozisyon ≥ %15** (+ eylemsizlik kuralı) | V3 | **Karar eşiği** — ayın en iyisi |
| Yuvarlama: en yakın 5 / 0 seviyesi | V1–V4 | Mekanik kural |
| COT: 12 aylık aralık orta noktası | V2, V3 | Mekanik hesap |
| True day **03:00–10:00** NY | V4 | Saat |
| Çıkış penceresi **10:00–11:00** NY | V4 | Saat |
| **Pazartesi gece yarısı** NY açılışı | V3 | Zaman damgası |
| Haftalık aralık **Salı–Perşembe** | V3 | Takvim |
| Flout = **yarım aralık** | V4 | Aritmetik (adı yanlış) |
| ADR **5 günlük**; **%127 / %162** | V4 | Aritmetik |
| OTE **%62 / %70,5 / %79** | V4 | Sayı |
| **10 pip** çıkış tamponu | V4 | Sayı |
| 9–18 ay geriye bakış | V1 | **Aralık, sayı değil** |
| 3–4 aylık çeyreklik pencere | V1 | **Aralık, sayı değil** |
| %R periyodu 20 / 14 / 10 | V2 | **Örneklem içinde seçiliyor** |
| Haftalık profil güveni **%60 / %70** | V3 | **Kaynaksız** |
| Interbank sapması **10–15 pip** | V4 | **Kaynaksız, büyüklük tanımsız** |
| Öğrenci isabet oranı **%80** | V4 | **Kaynaksız** |

**Onu mekanik, ikisi aralık, dördü kaynaksız ya da örneklem içinde seçilmiş.**

**5. Ve ayın kendi cevabı, Temmuz'un sorusuna.**

> *"Net, kesin, kural tabanlı fikirler eksik — **ve bunu kasıtlı yaptım.** ... **Hiç kimse yapamadı. Bu mentorlukta bile yapamadılar.**"*

**Eşikler şablonun içinde mi? Kısmen. Ve eksikliğin kasıtlı olduğu söyleniyor.**

### Yeniden adlandırmalar

| Videodaki | Klasik karşılığı | Yeni bilgi taşıyor mu? |
|---|---|---|
| **ICT hedging program** | **Larry Williams COT Index** — aynı hesap, aynı orta çizgi | **Hayır** — ve video bu ay *"başka hiçbir yerde bulamazsın"* diyor |
| Faiz farkı eşleştirmesi | **Carry trade** — literatürün en çok incelenmiş anomalilerinden | Hayır |
| Turtle soup | **Linda Raschke & Larry Connors, Street Smarts** — video kaynağı veriyor | Hayır, ve video söylüyor |
| Optimal Trade Entry | **Fibonacci geri çekilme girişi** (%62–%79) | **Kısmen** — dört koşulun birlikte istenmesi spesifik |
| Breaker | **Kırılmış destek/direncin rol değiştirmesi** — klasik | Hayır |
| Fair value gap | **Boşluk / dengesizlik**; üç mumlu boşluk tanımı | **Kısmen** — tanım spesifik |
| Kurumsal emir akışı | **Mum gövdesi tabanlı destek/direnç** | Hayır |
| "Standart sapma" (CBDR/Asya/flout) | **Yarım aralık** — standart sapma değil | **Hayır, ve adı yanlış** |
| Piyasa profili (üç soru) | **Trend / aralık / geri çekilme** sınıflandırması — klasik | Hayır |
| Kill zone | **Seans pencereleri** | Hayır |
| Power three | **Açılış–manipülasyon–genişleme**; Wyckoff'un birikim/dağıtım şeması | Hayır |
| Judas swing | **Sahte kırılım / stop koşusu** | Hayır |

**Ve bu ay için tabloyu okurken:** on iki ayın sonunda **Larry Williams, Linda Raschke, Larry Connors, William J. O'Neil, Steve Moore, Investors Business Daily** adları geçmiş durumda — çoğu Haziran'dan sonra. **Ama bu ayın ikinci videosu Williams'ı geri alıyor:** *"Larry Williams'ın dediğini attım... bunu başka hiçbir yerde bulamazsın."*

### Tekrarlanan sorunlar

**Yön ön koşulunun tanımsızlığı — on ikinci ay, ve bu ay çözülüyor.** Dört videonun tamamı *"daha yüksek zaman dilimi boğa/ayı"* koşuluyla başlıyor, **ve o koşulun nasıl belirleneceği ilk kez adım adım veriliyor** — bu ayın ana katkısı budur. Ama koşulun kendisi (dokuz adımın bileşimi) hâlâ ölçülemez halde.

**Örtüşen kaynaklar bağımsız doğrulama sayılıyor — dördüncü kez.** Ocak V12 (5 ⊂ 15 ⊂ 20 yıl), Haziran V15 (aynı), Temmuz V1 (dolar + prim + göreli güç), **Ağustos V2 (manşet + forum + %R, üçü de fiyattan türeyen)**.

**COT raporlama gecikmesi — dördüncü kez ve hiç anılmıyor.** Salı pozisyonları, Cuma yayını. Şubat V7, Mart V8, Haziran V1, Ağustos V2/V3.

**Daralma-genişleme iddiası — altıncı ay.** Şubat V7, Mart V8, Nisan V6, Haziran V8, Haziran V9, **Ağustos V1/V2 (üç soruluk profil)**. Altı ifade, tek olgu, tek test — ve bu ay ilk kez **tam bir sınıflandırma** olarak sunuluyor, dolayısıyla en test edilebilir hali.

**Tek örnek, geriye dönük.** AUD (V1, V2) ve altın (V4). **Ama altın örneğinde bir fark var ve kaydedilmeli: giriş, stop ve tarih önceden verilmiş.**

**Kayıtsız iddia — bu ay dört tane.** %60/%70 haftalık profil güveni, %80 öğrenci isabeti, 10–15 pip interbank sapması, ve %15 açık pozisyon eşiğinin kaynağı.

**Ölçek — bu ay belirsiz.** Hedef tanımsız olduğu için R hesaplanamıyor, dolayısıyla maliyetin R'a oranı da hesaplanamıyor. **Ama altın örneğinde risk tanımlı: 4,00 USD/ons × 100 ons = 400 USD/sözleşme.** GC'de komisyon ~4 USD → riskin **%1'i.** Mayıs'ın 20 pip stopunda maliyet R'ın %8–10'uydu.

### Ayın iç çelişkileri

| Konu | Bir yerde | Başka yerde |
|---|---|---|
| **COT yönteminin kökeni** | **Haziran V1: "Larry Williams'tan öğrendiğim şey"** | **Ağustos V2: "Larry Williams'ın dediğini attım... bunu başka hiçbir yerde bulamazsın"** |
| **PD array seçimi** | *"Sadece bariz olanları not ediyorum"* | Aynı video: **"Belirsiz mi? Hayır, kesin — sana tam olarak ne aradığını söylüyor"** |
| **Ayrışmanın rolü** | Ağustos V2: **ayrışma yok = "her şey sağlıklı", teyit** | Temmuz V4: **ayrışma yok = "boş yıl", kurulum yok** |
| **Kural tabanlılık** | Dört video boyunca adım adım prosedür | V4: **"kural tabanlı fikirler eksik, ve bunu kasıtlı yaptım"** |
| **Otomatikleştirilebilirlik** | Şablonlar sıralı ve sayılabilir adımlardan oluşuyor | V4: **"asla otomatikleştiremeyeceksin"** |
| **Parametre seçimi** | V2: *"biçim uydurmaya benziyor, biliyorum"* | Aynı yerde: *"14 optimal olurdu çünkü daha çok zaman filtresi veriyor"* — **gerekçe seçimden sonra** |
| Göstergeler | On bir ay: göstergesiz teknik yaklaşım | V2: **"Ve evet, gösterge kelimesini söyledim"** — Williams %R |
| İsabet | V1: *"Her zaman haklı değilim, insanım"* | V4: **"Doğru olduğunda gerçekten çok doğru"** |
| Altın | V1: piyasalar arası teyit aracı | V1, aynı yerde: **"şu anki koşullarda işlemini desteklemez"** (Kuzey Kore) |

### Aritmetik denetimi

| İddia | Denetim | Sonuç |
|---|---|---|
| RBA %1,50; 2 Ağustos 2016, −25 bp | %1,75 → %1,50 | **Doğru** |
| Fed %1,25; 14 Haziran 2017, +25 bp | %1,00 → %1,25 (üst bant) | **Doğru** |
| Haziran öncesi Fed %1,00 | Üst bant | **Doğru** |
| ECB %0,00; Mart 2016, −5 bp | %0,05 → %0,00 | **Doğru** |
| BoE %0,25; 4 Ağustos 2016, −25 bp | %0,50 → %0,25 | **Doğru** |
| BoC %0,75 | Temmuz 2017'de %0,50 → %0,75 | **Doğru** |
| AUD %1,50 > USD %1,00 / %1,25 | Her iki karşılaştırma | **Doğru** |
| Yuvarlama: 73,82 → 73,85 (iskonto, yukarı) | Kuralla tutarlı | **Doğru** |
| Flout: 40 pip aralık → yarısı 20 | 40 / 2 = **20** | **Aritmetik doğru** |
| **Flout: "yarım aralık = bir standart sapma"** | **Standart sapma, aralığın yarısı değildir** | **YANLIŞ TERİM** — hesap tanımlı, adı yanlış |
| **%127 uzantı** | √1,618 = **1,2720** | **Doğru** |
| **%162 uzantı** | φ = **1,6180** | **Doğru** |
| **%79 geri çekilme** | √0,618 = **0,7862** | **Doğru** |
| **%62 geri çekilme** | 1/φ = **0,6180** | **Doğru** |
| **%70,5 geri çekilme** | %61,8 ve %78,6'nın ortası = **%70,2**; ve kendisi Fibonacci türevi değil | **Yaklaşık ara değer** — türetimi yok |
| Altın FVG 1278–1280 = *"iki handle"* | 1280 − 1278 = **2** | **Doğru** |
| Altın stop: *"1275 ve altı"* → 1274 | Kuralla tutarlı | **Doğru** |
| Altın risk: 1278 − 1274 | 4,00 USD/ons × 100 ons = **400 USD/sözleşme** | **Doğru** |
| Haftalık profil güveni **%60 → %70 → %70** | Kaynak yok; **ikinci ve üçüncü aynı** | **Doğrulanamaz** |
| Interbank sapması **10–15 pip** | 2017'de major kote spread'i ~1–2 pip; **farklı büyüklükten söz ediliyor** | **Tanımsız büyüklük** |
| Öğrenci isabeti **%80** | Kaynak yok | **Doğrulanamaz** |

**Merkez bankası verilerinin altısı da doğru; Fibonacci türetimlerinin dördü doğru** (Mart'ın "1,68" hatasının aksine). **Bir terim yanlış kullanılıyor** ve bir oran (%70,5) türetimsiz. **Üç iddia kaynaksız.**

## BÖLÜM III — Değerlendirme

### Ölçmeye değer altı fikir, öncelik sırasıyla

**1. Açık pozisyon %15 kuralı (V3) — ve kriptoya taşınan tek kural.**

On iki ayın en tam tanımlı kuralı: **eşik + yön + bağlam koşulu + eylemsizlik kuralı.** Dördü bir arada başka hiçbir yerde yok.

**Ölçüm sırası:**
1. Kural, olduğu gibi — %15, iskonto/prim array koşuluyla
2. **Eşik taranarak** — %5 / %10 / %15 / %20. Sonuç %15'e duyarlıysa sayı seçilmiş demektir
3. **Bağlam koşulu kaldırılarak** — array koşulu katkı sağlıyor mu, yoksa açık pozisyon tek başına mı yeterli?

**Ve kripto notu:** açık pozisyon kriptoda **gecikmesiz** mevcut (COT değil). Bu ayın kriptoya doğrudan taşınan tek kuralı, ve `#014`'teki funding verinle aynı hattan geliyor.

**2. İki örüntünün giriş kuralı — sabit bir çıkış kuralıyla (V4).**

Video sadece iki örüntü olduğunu söylüyor, ve bu **arama uzayını kapatıyor.** Her adım geçmiş fiyattan hesaplanabilir, karşılaştırma grubu doğal (aynı yön koşulu, örüntü koşulu yok).

**Ve videonun boşluğunu sen kapatıyorsun:** hedef verilmiyor. Sabit bir çıkış kuralı tak — **sabit R, ADR tepesi, ya da saat tabanlı** — ve üçünü karşılaştır.

**Bu, `#014`'ün fat-tail sorusunu tekrar soruyor**, ve bu kez videonun kendi 10 pip tamponuyla birlikte: **kuyruğu bilerek kesmenin bedeli nedir?**

**Zorunlu:** kısa vadeli dip koşulu **ikili değişken** olarak kaydedilmeli. *"O kadar yüksek olasılıklı değil"* bir sayıya çevrilmezse kaçış kapısı olur.

**3. Beş zaman penceresi (V4) — ve on iki ayın saat tabanlı içeriğinin tamamı.**

| Pencere | Saat (NY) |
|---|---|
| True day | **03:00 – 10:00** |
| Çıkış | **10:00 – 11:00** |
| Pazartesi haftalık referansı | **00:00** |
| CBDR + Asya | CBDR açılışı → 00:00 |
| Haftalık aralık | **Salı – Perşembe** |

**Beşi de saat/takvim, sıfır yorum, tek kod.** Ve on iki ayın diğer saat tabanlı içeriğiyle birlikte tek çalışmada test edilebilir: Nisan'ın gün içi pencereleri, Haziran V6/V10'un açılış aralıkları, Mart'ın haftalık profilleri.

**Taban çizgileri hesaplanabilir ve verilmeli:** Salı–Perşembe tepe için **%60**, tepe+dip için **≈%36**, tek gün için **%20.**

**4. COT: 12 aylık orta nokta, ham sıfır çizgisine karşı (V2, V3).**

**İki koşuluk ablasyon**, ve videonun kendi merkezi iddiası. Haziran V1'de kaydedilmişti, burada tekrar ediyor, hâlâ ölçülmemiş.

**Ve Williams COT Index'in literatürü var** — taban çizgisini, bilinen sınırlarını ve tipik etki büyüklüğünü zaten söylüyor. Haziran'ın kapanış ölçütü: **sıfırdan başlama, başkalarının nerede durduğunu bilerek başla.**

**Zorunlu:** Salı–Cuma gecikmesi modellenmeli. Dört ayda dördüncü kez.

**Ve örneklem sorunu çözülebilir:** COT tüm vadeli piyasalar için yayınlanıyor. 20 emtia × 10 yıl, `#029` eşiğinin üstüne çıkarıyor.

**5. Faiz farkı sıralaması — getiri dağılımıyla (V1).**

Tamamen mekanik, kamuya açık veri, ve adı konmamış bir carry trade.

**Ölçülmesi gereken ortalama değil, dağılım:** carry trade getirileri **negatif çarpıktır** — uzun sakin dönemler, ani çöküşler. Video bunu hiç anmıyor.

**Ve senin `#014`'ünle aynı sorunun diğer tarafı:** orada sabit hedef **sağ** kuyruğu kesiyordu; burada sorun **sol** kuyruk. **Aynı dağılım sorusunun iki yüzü, ve aynı koşuda ölçülüyor.**

**Uyarı:** faiz farkı çok yavaş değişir. Aylık analizde neredeyse sabittir, dolayısıyla aylar arası varyasyonun çok azını açıklar — **ve ne kadar sık değiştiği ölçülebilir ve ölçülmeli.**

**6. PD array kontrol listesi (V1–V4) — ayın en ucuz ve en yüksek getirili düzeltmesi.**

*"Bariz olanları not ederim"* adımı, dört zaman diliminde de merkezde. **Ve düzeltmesi videonun kendi AUD örneğinin içinde:** yedi array tipi tek tek elenmişti.

**Kurala çevir:** her aralıkta yedi tipi sırayla kontrol et, var/yok işaretle, "bariz" adımını çıkar. **O anda PD array seçimi tamamen mekanik olur, ve şablonun omurgası ölçülebilir hale gelir.**

**Ucuz olanlar:** yuvarlama kuralının bedeli (doluluk ↑ vs R ↓, yuvarlama miktarı taranarak); Pazartesi gece yarısı açılışı vs Pazar açılışı (iki koşu, tek fark); 10 pip tamponunun taranması; breaker aralığının rejim ölçüsü olarak diğer dört tanımla karşılaştırılması; tersine dönme varsayılanının %50 tabana karşı testi.

### Ölçmeye değmeyenler

**Üç kaynaklı duyarlılık okuması (V2).** Kaynaklar bağımsız değil (üçü de fiyattan türüyor), manşet sayımı yok, ve tek sayısal bileşenin parametresi **örneklem içinde seçiliyor** — video bunu kendisi söylüyor. **Alınacak olan fiyat tabanlı vekili:** momentum uzunluğu.

**Haftalık profil öngörüsü (V3).** Video sistematikleştirilemediğini açıkça söylüyor, ve zincir onsuz çalışıyor. **Çıkarılabilir ve çıkarılmalı.**

**Flout'un kaç sapmasının kullanılacağı (V4).** Kural yok, video söylüyor, ve kural olmadan hedef hesaplanamaz.

**Dokuz adımlı iş akışının bütünü (V1–V3).** Şubat'ta kaydedilen ve Ağustos'ta kaynağın kendisi tarafından teyit edilen sonuç: **bileşenleri çıkar, iş akışını test etme.**

**"Fiyatta bu kadar net görünmüyorsa işlem yapmam" (V4).** *"Net"* tanımsız. **Ama bir eşiğe çevrilebilir** (gap büyüklüğü / ATR), ve o zaman alınabilir.

### On iki ayın toplamı

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
| **10 — Haziran 2017** | Dört varlık sınıfı; en ölçülebilir ve en az özgün ay | 16/19 |
| **11 — Temmuz 2017** | Tek kavram, dört varlık sınıfı; **serinin ilk tam kaydı** | 3/4 |
| **12 — Ağustos 2017** | **Prosedür. İlk kez bir sıra var — ve kaynağın kendisi kural eksikliğinin kasıtlı olduğunu söylüyor** | **2/4** |

**Toplam: 110 video.**

### Yüz on videonun sonunda kaynağın kendi ifadesi

On iki ay boyunca bu belgelerde kaydedilen bulgu şuydu: **kavramlar tanımlı, kurallar değil.** Eşik yok, örneklem yok, taban çizgisi yok, ve bir kural başarısız olduğunda ikinci bir kural devreye giriyor.

**Son video bunu doğruluyor, ve daha ileri gidiyor:**

> *"Net, kesin, kural tabanlı fikirler eksik — **ve bunu kasıtlı yaptım.** O eğitimler **başka birinin benim yapabildiğimi tekrarlayıp tekrarlayamayacağını görmek için** dışarıda duruyor. **Hiç kimse yapamadı. Bu mentorlukta bile yapamadılar.**"*

> *"**Benim yaptıklarımın tamamını asla otomatikleştiremeyeceksin.** ... Kantitatif analistlerle konuştum, algoritmacılarla konuştum, **inan bana denediler.**"*

**Bu üç ifade birlikte, bilimsel anlamda bir olumsuz sonuç bildirimidir:**

1. Yöntem tarif edildiği haliyle **tekrarlanamadı**
2. Tekrarlama **denendi**, ve deneyenler nitelikliydi
3. Tarifin eksikliği **kasıtlı**

**Ve dördüncü bir ifade eksik, ve eksikliği belirleyici:** *tekrarlanamadıysa, orijinalin çalıştığı nereden biliniyor?*

On iki ay boyunca aranan sayı buydu: kaç kez denendi, kaçı çalıştı. Temmuz'un dördüncü videosu bir kayda en çok yaklaşan şeydi — on yıl, sırayla, başarısızlıklar dahil — ama stopsuz ve eşiği en sonda konmuş. Ağustos'un dördüncü videosu bir stop veriyor ama tek işlem için, ve hedefsiz.

**İkisi hiçbir zaman aynı yerde bir araya gelmiyor.**

### On iki ayda biriken ölçütler

- **Aralık:** belirsizlik merkezdeyse ölçülemez, kenardaysa çekirdek test edilebilir kalır
- **Ocak:** ölçülebilirlik **verinin cinsine** bağlı — takvim tartışılmaz
- **Şubat:** birleşim belirsizliği ortalamıyor, **çarpıyor**
- **Mart:** ilk soru, girdinin bir **tarih mi yoksa bir yorum mu** olduğudur
- **Nisan:** mekanik olmak, **ölçülmüş olmak demek değil**
- **Mayıs:** bir kural mekanikleştikçe **aritmetiği bağlayıcı** hale gelir
- **Haziran:** bir fikrin kime ait olduğu, **onu ölçmeden önce ne kadar okuman gerektiğini** belirler
- **Temmuz:** bir kayıt, ancak **eşik kayıttan önce konursa** ölçüm olur

**Ve Ağustos'un ölçütü, dizinin sonucu.**

Bu ay, on iki ayın tüm parçalarını tek bir sıraya diziyor. Otuz yedi adım, dört zaman dilimi, ve bir çıktı. Adımların bir kısmı tam mekanik — saat pencereleri, yuvarlama kuralı, açık pozisyon eşiği, COT orta noktası, Pazartesi gece yarısı açılışı. Bir kısmı tanımsız — *"bariz array'ler"*, *"konsolidasyonda mıyız"*, *"net görünüyorsa"*.

**Ve mekanik olanlarla tanımsız olanlar aynı zincirde.**

Bu, on ikinci ayın gösterdiği şey: **bir prosedürün ölçülebilirliği, en zayıf adımıyla belirlenir — ama bileşenlerinin ölçülebilirliği belirlenmez.**

Zincir bir bütün olarak test edilemez, çünkü tanımsız bir adım her sonucu üretebilir. **Ama zincirin içindeki her tanımlı adım, zincirden ayrılıp tek başına test edilebilir**, ve bu belge serisi boyunca çıkarılan onlarca hipotez tam olarak o adımlardır.

> **Ölçüt: bir sistemi ölçemiyor olmak, onun içindeki hiçbir şeyi ölçememek demek değildir. Ayrılabilir olanı ayır, ölç, ve sonucu sisteme değil parçaya yaz.**

Ve bu ölçütün pratik sonucu, on iki ayın en somut ödevidir ve tek cümledir:

**Bu belgelerde biriken hipotezleri, sistemin bir parçası olarak değil, kendi başlarına ölç.**

Sabit saat pencereleri kendi başlarına. Açık pozisyon eşiği kendi başına. COT normalizasyonu kendi başına. Mevsimsel takvimler, endeks SMT, terim yapısı, dört varlık sınıfı uyum skoru, iki örüntünün geometrisi, Pazartesi gece yarısı açılışı — **her biri tek başına, kendi taban çizgisine karşı, eşiği önceden konmuş.**

Bir kısmı sıfır çıkacak. Bir kısmı zaten literatürde var ve okumakla başlamak gerekiyor. Bir kısmı senin `#014`, `#018`, `#029` ve `#013` bulgularınla doğrudan aynı sorunun farklı yüzü.

**Ve hangisinin hangisi olduğu, ancak ölçüldükten sonra bilinir — ki bu belgenin on iki ay boyunca yaptığı tek şey, o ölçümün hangi soruları soracağını yazmaktı.**
