# ICT Transkript Eleme Yönergesi

> Bu dosya, bir aylık video transkriptlerini okuyup **eleme notları belgesi** üretmek için kullanılır.
> Amaç özet çıkarmak değil — özet istenseydi videoyu izlemekten farkı olmazdı.
> Amaç, ölçülebilir iddiaları anlatıdan, ikna malzemesinden ve geçmiş açıklamalarından **ayırmak**.

---

## 0. Görev

`transcripts/ict-<ay>-transkriptler.txt` dosyasını oku. **Tüm videoların transkripti bu tek dosyada, arka arkaya.**

İlk iş: dosyayı videolara böl. Videolar arası sınırlar genellikle şu işaretlerle belli olur — başlık satırları, bölüm numaraları, ya da açılış/kapanış kalıpları ("bu derste...", "bir sonraki videoda görüşürüz"). Kaç video bulduğunu **belgenin başında belirt**; belirsiz bir sınır varsa onu da not et.

Her videoyu önce **öğret**, sonra filtreden geçir, sonra §5'teki yapıda tek bir HTML dosyası üret:
`ict-<ay>-<yil>-notlar.html`

Belge Türkçe yazılır. Uzunluk sınırı yok — eksiksizlik, kısalıktan önemli.

### Ders bölümü — zorunlu, elemeden önce gelir

**Kullanıcı videoları izlemiyor ve izlemeyecek. Bu belge, video serisinin yerini tutacak.**

Bu, özet yazmaktan farklı bir iş. Amaç, kullanıcının videoyu izlemiş biri kadar konuya hâkim olması. Her video için şunlar yazılır:

**Kavramın tanımı, eksiksiz.** Bir kavram anlatılıyorsa tanımını tam ver — hangi mum, hangi seviye, hangi koşul. "Order block anlatılıyor" yetmez; order block'un o videoda nasıl tanımlandığı yazılır.

**Prosedür, adım adım.** Bir kurulum varsa numaralı adımlarla: tespit, geçerlilik koşulu, giriş, stop, hedef. Kullanıcı bunu okuyup grafiğe uygulayabilmeli.

**Örneğin çözümü.** Videoda bir grafik çözülüyorsa, o çözümü anlat: hangi enstrüman, hangi dönem, hangi seviyeler işaretlendi, fiyat ne yaptı, nerede girilip nerede çıkıldı. Görsel olmadan takip edilebilir olmalı — seviyeleri ve sırayı kelimelerle kur.

**Sayılar.** Videoda geçen her parametre, eşik, yüzde, pip değeri, saat, gün sayısı.

**Gerekçe.** Videonun kuralı neden böyle kurduğunu anlat — mekanizma iddiası neyse o. Bu, iddianın doğru olduğu anlamına gelmez; sonraki bölümlerde değerlendirilecek.

**Ders bölümü tarafsız yazılır.** Burada eleştiri yok, "bu zayıf" yok. Sadece anlatılanı, anlatıldığı gibi aktar. Değerlendirme sonraki bölümlerin işi — ve okuyucu ikisini ayrı görebilmeli.

Uzunluk: bir saatlik video için 800-1500 kelime normal. Kısa videolar daha az. Transkripti tekrar etme, ama **hiçbir kuralı, sayıyı veya adımı atlama.**

---

## 1. Filtre — her iddia bu üç sorudan geçer

**Soru 1: Bu, geçmiş için mi geleceğe dair mi?**

"Fiyat buraya geldi çünkü şurada likidite vardı" bir **geçmiş açıklamasıdır**. Değersizdir — her hareket sonradan bir kavramla açıklanabilir.

"Şu koşul oluştuğunda fiyat şuraya gitme eğilimindedir" **ileriye dönük bir iddiadır**. Yalnızca bu ayıklanır.

**Soru 2: Bunu, sonucu bilmeden yazabilir miyim?**

İddiayı, grafiğin devamını görmemiş birine verecek şekilde yaz.
- Yazılabilir: "önceki günün dibinin altına fitil, gövde üstünde kapanış"
- Yazılamaz: "kurumsal emirlerin bulunduğu anlamlı bölge" — "anlamlı"yı sonradan sen seçiyorsun

Yazılamıyorsa öğreti değil, yorum.

**Soru 3: Bu iddia yanlış olsaydı nasıl görünürdü?**

Yanlışlanabileceği bir durum yoksa, iddia hiçbir şey söylemiyor.
"Fiyat ya likiditeyi alıp döner ya devam eder" her sonucu kapsar.

---

## 2. Her video için çıkarılacak dört kategori

### 2.1 Yazılabilir iddialar
Sonucu bilmeden kodlanabilir olanlar. Her biri için:
- Adım adım prosedür (giriş, stop, hedef varsa hepsi)
- **Seçim noktası sayısı** — kaç yerde yorum gerekiyor?
- Hangi parametreler tanımsız bırakılmış?
- Ölçmek için hangi boşluğun kapatılması gerekiyor?

### 2.2 Yeniden adlandırmalar
Klasik teknik analizde karşılığı olan kavramlar. Tablo halinde: `videodaki | klasik karşılığı`.
Yeni bilgi taşıyıp taşımadığını belirt.

### 2.3 Geçmiş açıklamaları
Grafiğe bakarak "burada şu oldu" denen kısımlar. **Sayısını söyle, içeriğini anlatma** — içeriği zaten değersiz.

### 2.4 Yanlışlanamaz ifadeler
Her sonucu kapsayan cümleler. Bunları özellikle işaretle — en ikna edici görünenler bunlar oluyor.

Tanınacak kalıplar:
- **Totoloji:** "piyasa şu N durumdan birindedir" — N durum her ihtimali kapsıyorsa bilgi taşımaz
- **Kaçış kapısı:** "genelde şöyle olur ama X olursa olmaz" — X tanımsızsa kural yok
- **Başarısızlığın yeniden çerçevelenmesi:** "çalışmadıysa zaten kurulum değildi"
- **Kayıp senaryosunun sinyale çevrilmesi:** "stop olduysa ters yöne gir"
- **Zaman sınırsızlığı:** "eninde sonunda olur" — yeterince beklersen her şey olur
- **Ertelenen yeterlilik:** "8. ayda anlayacaksın"
- **Karakter saldırısı:** "buna itiraz edenler para kazanamayanlardır"
- **Bağımsız olmayan doğrulama:** aynı veriden türetilmiş iki seriyi teyit sayma

---

## 3. Ölçülebilirlik sınıflandırması

Her video sonunda üç sınıftan birine yerleştir:

| Sınıf | Kriter |
|---|---|
| **Ölçülebilir** | Tüm adımlar mekanik; tanımsız bileşen yok ya da kenarda (çekirdek ondan bağımsız test edilebilir) |
| **Kısmen** | Çekirdek mekanik ama merkezi bir bileşen tanımsız (ör. "üst zaman dilimi yönü") |
| **Ölçülemez** | Belirsiz bileşen kuralın merkezinde; ya da gerçek zamanda bilinmeyen bir girdi gerekiyor |

**Beş ayın kalibrasyonu — bu ölçütler tekrar tekrar işe yaradı:**

- **Seçim noktası sayısı belirleyici.** Sıfır seçim noktası olan kural (açılış fiyatı, 20 günlük tepe/dip, çifte tepe projeksiyonu) ölçülebilir; beş seçim noktası olan zincir (beş zaman dilimi arasında geçiş) ölçülemez — ne kadar ikna edici görünürse görünsün.

- **Belirsizlik merkezde mi kenarda mı?** Bir kural, belirsiz bileşeni merkezine aldığında ölçülemez olur. Kenarda bıraktığında çekirdeği hâlâ test edilebilir kalır.

- **Verinin cinsi.** Takvim ve saat tartışılmaz — "20 işlem günü önce" tek bir tarihtir. Ama "40 yıllık mevsimsel ortalama" bir hesaplama tercihidir ve gösterilmediğinde doğrulanamaz.

- **Gerçek zamanda bilinmeyen girdi.** Bir kural, tahmin edilmek istenen şeyi girdi olarak istiyorsa (ör. "dip oluştuktan sonra") ölçülemez — geçmişte hep doğru görünür, ileride hiçbir şey söylemez.

- **Yasaklayıcı kurallar daha test edilebilir.** "Şurada işlem alma", "şurada al"dan daha yanlışlanabilirdir.

---

## 4. Kaydedilecek tekrarlanan hatalar

Bu beş ayda tekrar eden ve her yeni ayda kontrol edilmesi gereken kalıplar:

**Hacim/fitil iddiası.** "Gövdeler kurumsal, fitiller perakende" — **yanlış**. Mum grafiği hacim dağılımı hakkında bilgi vermez, ve "kurumsal fiyat" diye ayrı bir fiyat yoktur. Geçtiği her yerde işaretle. Ama not düş: iddia yanlış olsa da üstüne kurulan kural yine ölçülebilir olabilir.

**Yön ön koşulunun tanımsızlığı.** Çok sayıda kural "üst zaman dilimi şu yönü gösteriyorsa" ile başlıyor ve o tanım verilmiyor. Her seferinde işaretle.

**Seviye taşıma.** "Yeni bir mum oluşursa seviyeyi oraya taşı" — bu, geriye dönük bakışta her zaman bir seviye bulunmasına yol açar.

**Ölçek küçülmesi.** Aylar ilerledikçe örnekler daha küçük zaman dilimlerine iniyor (5dk, 2 pip). Maliyet R cinsinden stop mesafesine bölündüğü için, küçük ölçekte sinyal maliyetin altında kalır. İşaretle.

**Kaçırılanların sayılmaması.** Sadece gerçekleşen kurulumlar anlatılıyor; kaçının gelmediği veya çalışmadığı kaydedilmiyor.

**Tek örnek, geriye dönük.** Neredeyse her videoda. Sayısını belirt.

**Anakronizm.** Bir kararın gerekçesi, karar anında bilinmeyen veriyle anlatılıyorsa işaretle.

---

## 5. Belge yapısı

```
ICT Mentorship — <Ay> <Yıl> (<N> Video)

[İçindekiler — her videoya ve bölüme atlama linkleri]

Bu ayın karakteri
[2-4 paragraf: bu ay neyi farklı yapıyor, hangi kategoriler var,
 önceki aylarla ilişkisi]

BÖLÜM I — DERSLER

Video N — <başlık>

  [DERS]
  Kavram tanımları, prosedürler, örneğin çözümü, sayılar, gerekçe.
  Tarafsız. 800-1500 kelime. Değerlendirme YOK.

  [ELEME]
  Yazılabilir kural(lar)
  Neden farklı / klasik karşılığı
  Ölçülebilirlik
  Yanlışlanamazlık
  Not — ne alınacak, ne alınmayacak

[her video için tekrar]

BÖLÜM II — AYIN BÜTÜNÜ

Ölçülebilirlik tablosu
[video | kavram | değerlendirme]
[sonunda sayım: Ölçülebilir: X · Kısmen: Y · Ölçülemez: Z]

Ayın yapısal özellikleri
Tekrarlanan sorunlar
Ayın iç çelişkileri
[tablo: konu | bir yerde | başka yerde]

BÖLÜM III — DEĞERLENDİRME

Ölçmeye değer N fikir, öncelik sırasıyla
Ölçmeye değmeyenler
Önceki aylarla toplam
Kapanış gözlemi
```

**Ders ile eleme görsel olarak ayrılmalı.** Okuyucu, hangi kısmın videonun anlattığı, hangi kısmın değerlendirme olduğunu bir bakışta görebilmeli. Farklı arka plan, kenar çizgisi ya da açık bir başlık — hangisi olursa olsun ayrım net olsun.

---

## 5b. HTML biçimi

Çıktı **tek dosyalık, kendi kendine yeten HTML** — dış bağımlılık yok, CSS gömülü.

**Okunabilirlik esas:**
- Gövde metni 17-19px, satır yüksekliği 1.6-1.7
- Metin sütunu 68-75 karakter genişliğinde (yaklaşık 720px), ortalanmış
- Sistem font yığını (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
- Yeterli boşluk — bölümler arası nefes payı

**Yapı:**
- Başta içindekiler, her videoya ve bölüme çalışan bağlantılar
- Her video ayrı bir `<section>`, kendi id'siyle
- Tablolar düzgün biçimlendirilmiş (kenarlık, satır boşluğu, başlık satırı vurgulu)
- Prosedür adımları numaralı liste
- Uzun belgede kaybolmamak için: her video bölümünün sonunda "başa dön" bağlantısı

**Ders ve eleme ayrımı:** ders bölümü açık renkli bir kutu ya da sol kenar çizgisiyle işaretlensin; eleme bölümü normal akışta kalsın. Ayrım göz seviyesinde anlaşılmalı, başlığı okumaya gerek kalmadan.

**Karanlık mod:** `prefers-color-scheme` ile hem açık hem koyu tema. Zorunlu değil ama uzun okuma için faydalı.

**Yapılmayacak:** animasyon, gereksiz renk, ikon, gradyan. Bu bir okuma belgesi — sadelik okunabilirliği artırır.

---

## 6. Ton ve yazım

**Doğrudan yaz.** "Bu video şunu iddia ediyor" değil, "iddia şu". Süsleme yok.

**Doğru olanı teslim et.** Serideki her şey yanlış değil. R:R matematiği, anti-martingale, disiplin tavsiyeleri doğru — ve doğru oldukları söylenmeli. Ama not düş: bunlar genellikle **ICT'ye özgü olmayan**, standart risk yönetimi bilgileri.

**Kuralı anlatıdan ayır.** Bir kuralın arkasındaki hikâye (bankalar, algoritma, kurumsal emir akışı) yanlış olabilir ama kural yine ölçülebilir olabilir. İkisini karıştırma. "Son 60 günün tepesi önemli mi" ölçülebilir bir sorudur; "merkezi bir motor oraya sürüklüyor" ölçülemez ve gereksiz bir katmandır.

**Sayıları kontrol et.** Videoda verilen her aritmetik iddiayı doğrula. Beş ayda birkaç kez hesap tutmadı (bileşik getiri projeksiyonları, tahsis kuralıyla getiri hedefi arasındaki tutarsızlık).

**Kaynak varsa belirt.** Seri zaman zaman kaynak veriyor (Larry Williams, Turtle sistemi). Bunlar dürüst hareketler ve kaydedilmeli.

---

## 7. Yapılmayacaklar

- **Transkriptten uzun alıntı yapma.** Telif nedeniyle kendi kelimelerinle özetle; gerekirse çok kısa alıntı yeter.
- **Videoyu savunma ya da toptan reddetme.** İş, ayırmak — ikisi de değil.
- **Ölçüm yapma.** Bu belge hipotez üretir, test etmez. "Ölçülürse şu çıkar" deme; "şu ölçülebilir" de.
- **Kavram listesi çıkarma.** Liste bir şey öğretmiyor. Her kavram için: kodlanabilir mi, kaç seçim noktası var, klasik karşılığı ne.

---

## 8. Bağlam — kullanıcının kendi ölçümleri

Belgede bu bağlantılar kurulabilir (kullanıcı bu ölçümleri kendisi yaptı):

- **Sweep ölçümü:** liquidity sweep tek başına ölçüldü — %33 isabet, 2R hedefte tam başabaş, ort. R belirsizlik bandının içinde.
- **Range projesi:** ön kayıtlı protokolle ETH range sistemi ölçüldü. Izgara Aşama 1'de RET verdi (27 hücrenin hiçbiri 100 işlem eşiğini geçemedi), proje kendi durdurma kriterleriyle kapatıldı, OOS'a hiç dokunulmadı.
- **Maliyet bulgusu:** gapsiz stoplar −1.088R çıktı. Komisyon + kayma R cinsinden stop mesafesine bölünüyor — **dar stop iki kere cezalandırır.**
- **Fat-tail sorunu:** sabit hedef sağ kuyruğu kesiyor.
- **Breakeven yasağı:** kazananı 0R'de kesip kaybedeni −1R'de bırakan yapı sıfır edge üretiyor.
- **Taban çizgisi:** rastgele giriş dağılımının %95 persentili bağlayıcı kriterdi; sistem 72.4'te kaldı.
- **Örneklem eşiği:** 100 kapanan işlem altında sonuç yorumlanmıyor.
- **Bağımsız doğrulama:** iki ayrı motor, biri diğerinin notlarını okumadan yazıldı.

Bir videodaki iddia bunlardan biriyle çelişiyor ya da örtüşüyorsa, bağlantıyı kur.

---

## 9. Önceki ayların özeti (bağlam için)

| Ay | Karakter | Ölçülebilir oran |
|---|---|---|
| 1 (Eyl 2016) | Kurulum kavramları; sekiz tanım, yedisinin klasik karşılığı var | Düşük |
| 2 (Eki 2016) | Para yönetimi; doğru ama metoda özgü değil | Düşük |
| 3 (Kas 2016) | En ölçülebilir fikirler kavram yığınıyla iç içe | Orta (4/8) |
| 4 (Ara 2016) | Tam tanımlar; yeni bilgi az, ölçülebilirlik ilk kez mümkün | 7/14 |
| 5 (Oca 2017) | Yeni kategoriler (zaman, büyüklük, fiyat dışı veri) + en zayıf blok (mevsimsellik) | 9/17 |

**Elli beş videoda hiç geçmeyen cümle:** *"Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."*
Beşinci ayın on dördüncü videosunda bunun resmî cevabı verildi: kanıt sunulmayacak.

**Tekrar eden örüntü:** doğru olan kısımlar herkesin bildiği kısımlar; özgün olan kısımlar ölçülmemiş kısımlar.

---

## 10. İlk adım

1. `transcripts/ict-<ay>-transkriptler.txt` dosyasını aç
2. **Videolara böl** — sınırları tespit et, kaç video olduğunu belirle
3. Bölme sonucunu kullanıcıya bildir (kaç video, sınırlar net mi) — belirsizlik varsa sor
5. Her videoyu sırayla işle: **önce ders, sonra eleme**
6. Belgeyi yazmadan önce hepsini bitir — video video not tut, sonunda Bölüm II ve III'ü o notlardan çıkar

Bölme adımını atlama. Yanlış bölünmüş bir transkript, iki videonun içeriğini birbirine karıştırır ve tüm belge bozulur.

**Ve ders bölümünü hafife alma.** Bu belge video serisinin yerini tutacak — eksik anlatılan bir kural, kullanıcının hiç öğrenemeyeceği bir kural demek.