# ICT Mentorship — Ocak 2017
## Beşinci ay · 18 video · Uzun vadeli analiz: veri aralıkları, faiz, mevsimsellik, PD array hiyerarşisi

---

## Düzeltme notu

**Bu belgenin önceki sürümü 17 video sayıyordu ve 14–17. videoların konuları yanlıştı.** Transkript dosyası o sürüm yazılırken elde yoktu. Doğrusu:

| Video | Önceki belgede | **Transkriptte (doğru)** |
|---|---|---|
| 14 | "Kapanış / kanıt sorusu" | **Üst zaman dilimi PD array'lerinin tanımı** |
| 15 | "ADR ve günlük hedef" | **İşlem koşulları ve kurulum ilerleyişi (1.200 pip örneği)** |
| 16 | "Piramitleme" | **Stop emriyle giriş teknikleri** |
| 17 | "Londra kill zone" | **Limit emriyle giriş teknikleri** |
| 18 | *(yoktu)* | **Pozisyon işlem yönetimi** |

Ayrıca 3. videonun konusu "açık pozisyon" değil, **AUD üzerinden IPDA veri aralığı örneği** — açık pozisyon o videonun ve 4. videonun içinde bir alt başlık olarak geçiyor.

---

## Bu ayın karakteri

Ocak, serinin **tek tematik ayı.** On sekiz videonun tamamı tek bir soruya cevap veriyor: *uzun vadeli (üç aylık) bir pozisyonu nasıl kurar, doğrular, girer ve yönetirsin?*

Ve yapı sekiz modüle bölünmüş:

| Modül | Videolar | Konu |
|---|---|---|
| **1** | V1 – V5 | Makro analiz: çeyreklik kaymalar, IPDA veri aralıkları, open float, kurumsal salınım noktaları |
| **2** | V6 – V8 | Faiz: 10 yıllık getiri, işlem koşullarının doğrulanması, faiz farkları |
| **3** | V9 | Piyasalar arası analiz |
| **4** | V10 – V12 | Mevsimsellik: boğa, ayı, eşleştirilmiş |
| **5** | V13 | Sermaye yönetimi |
| **6** | V14 – V15 | PD array hiyerarşisi ve kurulum ilerleyişi |
| **7** | V16 – V17 | Giriş teknikleri: stop ve limit |
| **8** | V18 | Pozisyon yönetimi |

**Üç yeni kategori geliyor** — ve üçü de fiyat grafiğinin dışında:

1. **Zaman** — çeyreklik kayma ve 20/40/60 günlük veri aralıkları
2. **Büyüklük** — open float: hangi tarafta ne kadar emir birikmiş
3. **Fiyat dışı veri** — merkez bankası faizleri, mevsimsel eğilimler, açık pozisyon, piyasalar arası ilişkiler

Ve ayın sonunda ilk kez **tam bir işlem sistemi** çıkıyor: V18'in prosedürü, dokuz adımda mevsimsellikten stop yönetimine kadar her şeyi bağlıyor.

Ama ayın en zayıf bloğu da burada: **mevsimsellik.** Üç video, kırk yıllık ortalamalara dayanıyor ve o ortalamaların nasıl hesaplandığı hiç gösterilmiyor.

---

## Bölme notu

Dosya **9.104 satır, 90.466 kelime** — serinin en uzun ayı. Sınırlar `1. video` … `18. video` işaretleriyle ayrılmış, **ve videolar kendi ders numaralarını söylüyor:** *"lesson 1.1"*, *"lesson 1.2"* … *"lesson eight"*. Numaralandırma 1.1–1.5, 2.1–2.3, 3, 4.1–4.3, 5, 6.1–6.2, 7.1–7.2, 8 → **toplam 18.** Belirsizlik yok.

| Video | Ders no | Satır | Konu |
|---|---|---|---|
| V1 | 1.1 | 1 – 525 | Çeyreklik kaymalar ve IPDA veri aralıkları |
| V2 | 1.2 | 526 – 1138 | Çeyreklik kayma ve open float |
| V3 | 1.3 | 1139 – 2343 | IPDA veri aralığı örneği (AUD) |
| V4 | 1.4 | 2344 – 3029 | Open float likidite havuzlarının tanımı (CAD) |
| V5 | 1.5 | 3030 – 3360 | Kurumsal salınım noktalarının tanımı |
| V6 | 2.1 | 3361 – 3845 | Üst zaman diliminde 10 yıllık getiri |
| V7 | 2.2 | 3846 – 4071 | 10 yıllık getiriyle işlem koşullarının doğrulanması |
| V8 | 2.3 | 4072 – 4587 | Faiz farkları |
| V9 | 3 | 4588 – 5136 | Piyasalar arası analiz |
| V10 | 4.1 | 5137 – 5641 | Boğa mevsimselliği |
| V11 | 4.2 | 5642 – 5988 | Ayı mevsimselliği (NZD) |
| V12 | 4.3 | 5989 – 6347 | İdeal mevsimsellik — eşleştirilmiş |
| V13 | 5 | 6348 – 6685 | Sermaye yönetimi |
| V14 | 6.1 | 6686 – 7009 | Üst zaman dilimi PD array'lerinin tanımı |
| V15 | 6.2 | 7010 – 7760 | İşlem koşulları ve kurulum ilerleyişi |
| V16 | 7.1 | 7761 – 8112 | Stop emriyle giriş |
| V17 | 7.2 | 8113 – 8436 | Limit emriyle giriş |
| V18 | 8 | 8437 – 9104 | Pozisyon işlem yönetimi |

---

## Bu belge nasıl okunur

Her video iki kutuda: **DERS** (videonun anlattığı) ve **ELEME** (değerlendirme). Sonda **Bölüm IV**: ayın kavram sözlüğü ve V18'in dokuz adımlık tam sistemi.

---

# BÖLÜM I — Dersler ve eleme

## Video 1 — Çeyreklik kaymalar ve IPDA veri aralıkları

::: ders
**DERS**

#### Açılış tezi

> *"Benim inancım şu: piyasalar **%100 mühendislik ürünü.** Forex'te pipine kadar kontrol ediliyorlar. Yıl içinde defalarca belirli fiyat seviyelerini pipine kadar çağırabiliyorsam, bu bana piyasada **sıfır rastgelelik** olduğunu kanıtlar — rastgele olsaydı bu kadar kesin olamazdım."*

#### Çeyreklik piyasa kayması

**Kural:** her **üç ila dört ayda** bir piyasa yapısı kayması olur. Ve bu evrensel — sadece forex değil, tüm varlık sınıfları.

**Gerekçe:** *"Piyasanın **yeni ilgi üretmesi** gerekiyor. Yeni bir aciliyet hissi olmalı. Kaçırılan fırsat, çoğu insanın gözünde kaybedilmiş fırsattır."*

**Ne şekilde gelir:** ya bir **dönüş**, ya **uzatılmış bir konsolidasyon.** Video: *"Piyasa güçlü bir yükseliş trendindeyse pek geri çekilme görmezsin ama **konsolidasyon** görürsün — ya da günlükte kısa vadeli bir dibin altına inip sonra yukarı."*

**Pratik sonucu:** *"Uzun vadeli pozisyon traderıysan, pozisyonu sonsuza kadar tutmak zorunda değilsin. **Bir kısmını al, geri çekilmeyi bekle, sonra geri koy.**"*

#### IPDA veri aralıkları — ayın merkezî kavramı

**Tanım.** Algoritmanın referans aldığı zaman pencereleri:

| Pencere | Ne için |
|---|---|
| **20 gün** geriye + 20 gün ileriye | Yakın vadeli tepe/dip → **gün içi ve kısa vade** için likidite |
| **40 gün** geriye + 40 gün ileriye | Kısa vadeli tepe/dip |
| **60 gün** geriye + 60 gün ileriye | Ara vadeli tepe/dip → **open float sınırı** |

**Nasıl kurulur — adım adım:**

1. Grafikte **son üç ayın en belirgin piyasa yapısı kaymasını** bul
2. O kaymanın gerçekleştiği **ayın ilk gününe** dikey çizgi çek
3. O çizgiden **20, 40, 60 işlem günü ileriye** say ve işaretle
4. Aynı çizgiden **20, 40, 60 işlem günü geriye** say ve işaretle

**Kalibrasyon kuralı — mekanik.** Videonun kendi sorusu ve cevabı:

> *"14 Kasım 2016'da olsan, dikey çizgini hangi aya kalibre ederdin? **1 Ekim 2016** dediysen doğru. Başka bir şey dediysen yanlış. **Bir önceki tam kapanmış takvim ayına** dönersin — ilk işlem gününden son işlem gününe kadar tam işlem görmüş aya."*

#### Geriye ve ileriye bakışın işlevi

**Geriye bakış (son 20/40/60 gün):**
- Satış stopları nerede?
- Alım stopları nerede?
- Fair value gap'ler ve fiyat gap'leri nerede?
- Likidite boşlukları nerede?
- Denge noktaları (konsolidasyonlar) nerede?

**İleriye bakış:** bir sonraki kurulumun **ne zaman** oluşabileceği.

Videonun cümlesi: *"**Likiditeyi bulmak için geriye, bir sonraki kurulumu bulmak için ileriye bakarsın.**"*

#### Yatay gün tespiti — bu ayın en pratik yan ürünü

> *"Son 20, 40 ve 60 günün konsolidasyonuna bak, aralığı ikiye böl — orası denge. Bugün fiyat orada takılıyorsa ve hareket etmeye çalışmıyorsa, muhtemelen **Z günü** olacak: biraz yukarı, biraz aşağı, aralığın ortasında asılı. Onu bozacak tek şey **yüksek etkili haber.**"*

#### Dayanak varlık (benchmark) ↔ altta yatan (underlying)

Videonun ikinci çerçevesi. **Benchmark:** dolar endeksi (döviz için), Dow (hisse için), CRB (emtia için). **Underlying:** işlem yaptığın enstrüman.

**Alım programı (smart money accumulation) — dört durum:**

| # | Benchmark | Underlying | Okuma |
|---|---|---|---|
| 1 | Daha **düşük dip** | Daha **yüksek dip** | Underlying'de güçlü alım baskısı |
| 2 | Daha **düşük tepe** | Daha **düşük dip** | Underlying satış stoplarını topluyor → **turtle soup long** |
| 3 | Daha **yüksek tepe** | Daha **yüksek dip** | Benchmark alım stoplarını alıyor → **turtle soup sell** benchmark'ta |

**Satış programı (distribution) — simetriği:**

| # | Benchmark | Underlying | Okuma |
|---|---|---|---|
| 1 | Daha **yüksek tepe** | Daha **düşük tepe** | Underlying'de yoğun dağıtım |
| 2 | Daha **yüksek dip** | Daha **yüksek tepe** | Underlying alım stoplarını alıyor → turtle soup sell |
| 3 | Daha **düşük dip** | Daha **düşük tepe** | Benchmark satış stoplarını topluyor, underlying zayıf |

#### Örneğin çözümü — dolar endeksi / EUR/USD, 2016

Video bir yıllık dolar endeksini alıp Ocak'tan Ocak'a **her üç ayda** ve ayrıca **her dört ayda** dikey çizgilerle bölüyor, ve ikisinin de piyasa yapısını okumaya yettiğini gösteriyor.

Sonra EUR/USD'ye geçiyor:
- Dolar endeksi **daha yüksek tepeler** yapıyor — boğa görünüyor
- Ama EUR/USD **daha düşük dipler yapmıyor** → toplama
- Ve dolardaki yükseliş, aslında bir **likidite boşluğunu kapatma** hareketi

Sonuç: **60 günlük ileri projeksiyon, tam tepeyi işaretliyor.**

Ve ikinci bir örnek: **seçim günü.** Video *"o dikey çizgiden tam 60 gün ileride"* diyor ve o günün EUR/USD'de tepeyi yaptığını gösteriyor — açılışta yukarı, sonra sert satış.
:::

::: eleme
**ELEME**

#### Yazılabilir kural — 20/40/60 günlük veri aralıkları

Prosedür tamamen mekanik:
1. Son üç ayın en belirgin yapı kaymasını bul
2. O ayın **ilk gününe** dikey çizgi
3. 20, 40, 60 işlem günü ileri ve geri işaretle
4. Her pencerede tepe, dip, boşluk ve konsolidasyonu kaydet

**Ve kalibrasyon kuralı mekanik:** "bir önceki tam kapanmış takvim ayı." Tek anlamlı.

**Takvim ve gün sayısı tartışılmaz.** "20 işlem günü önce" tek bir tarihtir — yorum yok. Bu, ayın en ölçülebilir bileşeni.

#### Ama merkezde bir seçim var

**"En belirgin yapı kayması"** tanımsız. Video bunu kendisi de kabul ediyor: *"Grafiğe bakıp 'burada bir şey oluyor' diyorsan **çok fazla tahmin** yapıyorsun. En bariz olana geri dön."*

"Bariz" bir eşik değil. Ve bu seçim, tüm çerçevenin başlangıç noktası — yani merkezde.

**Kapatılabilir:** kaymayı mekanikleştir (ör. "son N mumun en yüksek tepesini/dibini kıran ilk hareket") ve prosedürün tamamı kodlanabilir hale gelir.

#### Videonun kendi sınırlaması — dürüst

> *"Bazılarınız bunun 20, 40, 60 gün sonra tepeyi ve dibi **çağıracağını** sanıyor. **Öyle değil.** Bazen olur ama işi o değil."*

Bu, iddiayı doğru yere koyuyor: pencereler bir tahmin aracı değil, bir **arama alanı.** Ve o haliyle test edilebilir.

#### Ama sonra kendi sınırlamasını ihlal ediyor

Örnekte tam olarak reddettiği şeyi yapıyor: **60 günlük projeksiyon "tam tepeyi işaretledi"** deniyor, ve seçim günü için *"tam 60 gün ileride"* vurgusu yapılıyor.

İki örnek, ikisi de geriye dönük, ikisi de "tam tutmuş". Kaç projeksiyonun tutmadığı söylenmiyor.

#### Yanlışlanamazlık

**"Piyasalar %100 mühendislik ürünü."** Kanıt olarak sunulan şey: *"seviyeleri pipine kadar çağırabiliyorum."* Kayıt yok, isabet oranı yok.

**"Ya dönüş olur ya konsolidasyon."** Çeyreklik kaymanın iki biçimi veriliyor ve ikisi tüm olasılıkları kapsıyor. Fiyat yükselse de düşse de yatay kalsa da kural tutmuş sayılır.

Bu, yönergenin **totoloji** kaleminin saf örneği.

#### Ölçülebilirlik

**Kısmen.** Veri aralıklarının kendisi (20/40/60 gün, takvim kalibrasyonu) tamamen mekanik ve tek başına test edilebilir. Ama başlangıç noktası ("en belirgin kayma") tanımsız ve merkezde.

**İki ayrı ölçülebilir hipotez çıkıyor:**
1. *Son 20/40/60 günün tepe ve dipleri, rastgele seçilmiş seviyelerden daha sık tepki üretiyor mu?* — **Başlangıç noktası gerektirmiyor**, doğrudan ölçülür.
2. *Yapı kayması sonrası 20/40/60. günlerde anormal volatilite var mı?*

Birincisi bu ayın en ucuz testi.

#### Not

**Ve bu, senin sweep ölçümüne doğrudan bağlanıyor:** "son 20 günün dibi" mekanik bir seviye tanımı. Senin `pivot_len` tabanlı tanımına alternatif — ve karşılaştırması bedava.
:::

---

## Video 2 — Çeyreklik kayma ve open float

::: ders
**DERS**

#### Tanım

> **"Open float, mevcut piyasa fiyatının üstündeki ve altındaki açık pozisyondur."**

Dört tür emir içeriyor:
- Eski tepelerin üstünde: **uzun girmek için** alım stopları
- Eski tepelerin üstünde: **kısaları korumak için** alım stopları
- Eski diplerin altında: **kısa girmek için** satış stopları
- Eski diplerin altında: **uzunları korumak için** satış stopları

#### Alım tarafı likiditesi — beş katman

Videonun tam listesi, yakından uzağa:

1. **Son ayı kaymasının üstündeki** koruyucu alım stopları
2. **Kısa vadeli tepelerin** üstü — haftalık ya da aylık tepe
3. **Son üç ayın en yüksek tepesinin** üstü ← **bu ayın odağı**
4. **Mevcut altı aylık tepenin** üstü
5. **Mevcut on iki aylık tepenin** üstü

Satış tarafı için tam simetriği.

Videonun notu — ve bu pratik: *"'12 aylık tepeye ulaşmak 12 ay sürer' diye düşünüyordum, ne kadar dar görüşlüymüşüm. O aralığın içinde **uzun süre yakın** kalabilirsin — oraya ulaşmak uzun sürmez."*

**Ve ayın odağı:** *"Asıl odaklanacağımız, **son üç aylık tepenin üstündeki** alım stopları — çünkü çeyreklik kaymaya bakıyoruz. **Her üç ayda o tepenin nerede olduğunu not et.**"*

#### Ana kural — hangi taraf hedefleniyor

Bu, videonun asıl katkısı ve serinin en çok sorulan sorusuna cevabı.

**Prosedür:**
1. Ardışık **ara vadeli tepe ve dipleri** izle
2. Sor: her yeni tepe **daha düşük** mü?
3. Sor: her yeni dip **daha düşük** mü?
4. **Dipler kolayca kırılıyor ve tepeler yeni zemin kazanamıyorsa** → piyasa **satış tarafı likiditeyi** arıyor

Videonun ifadesi: *"Her düşüşte biraz daha çok yol alıyor, ama **her ralli yeni tepe yapmayı başaramıyor.** Kısa vadeli bir tepeyi alsa bile yukarıda yeni zemin kazanmıyor. **Her ralli dağıtılıyor.**"*

#### Ara vadeli tepe/dip — mekanik tanım

> *"Ara vadeli tepe, solunda ve sağında birer **kısa vadeli tepe** olan tepedir. **Omuz-baş-omuz** gibi düşün — ortadaki baş, aslında uzun vadeli tepedir."*

Video kaynak veriyor: *"Bu piyasa yapısını **Larry Williams**'ı çalışırken öğrendim."*

#### Örneğin çözümü — EUR/USD günlük, 2015-2016

Video bir yıllık hareketi baştan sona okuyor:

| Aşama | Ne oldu |
|---|---|
| **1.0534** dibi | Aralık 2015. Aşağıda büyük fon satış stopları |
| Yapı kayması yukarı | Boğa moduna geçiş |
| Rally | Ekim'den kalan likidite boşluğu kapanıyor |
| **1.0750**'lere geri çekilme | Order block |
| **1.0860** | İkinci geri çekilme |
| **1.1500** | Alım stopları alınıyor — Mayıs 2016 tepesi |

**Ve tam burada dönüş sinyali:**

> *"1.0534'ten 1.1500'e kadar **hiç satış stopu alınmadı.** 1.15'te alım stopları temizlendikten sonra piyasa kırıldı ve bir kısa vadeli dibi ihlal etti. **İşte ilk ipucun bu** — muhtemelen artık satış tarafı çalışılacak."*

Sonra ölçüt uygulanıyor: her ralli bir kısa vadeli tepeyi alıyor ama **eski tepeye ulaşamıyor**; her düşüş **yeni ve daha derin** dip yapıyor.

| Seviye | Ne oldu |
|---|---|
| **1.1400** | Yeni tepe denemesi başarısız |
| **1.1295** | Seçim rallisinin tepesi, hemen reddedildi |
| **1.0910** | İki kez altına inildi |
| **1.0850**'ler | Devam |

Sonuç: Aralık 2016'da 1.0534'ün altındaki dış likidite süpürüldü.

Ve zaman ölçeği: *"Aralık 2015 dibinden Mayıs 2016 tepesine **yaklaşık altı ay.** Sonra o tepeden Aralık 2016 dibine **yine yaklaşık altı ay.**"*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — yön tespiti

Bu, serinin en çok sorulan sorusuna verilen en somut cevap: *"Piyasa alım stoplarını mı satış stoplarını mı hedefliyor?"*

**Ölçüt:**
- Ardışık ara vadeli **tepeler düşüyor** ve
- Ardışık **dipler kolayca kırılıyor**
- → satış tarafı likidite hedefleniyor

**Ve tamamen mekanik.** Ara vadeli tepe tanımı verilmiş (solunda ve sağında birer kısa vadeli tepe = üç seviyeli pivot), karşılaştırma aritmetik.

Bu, Eylül V7'nin "yüksek/düşük dirençli likidite koşusu" fikrinin **sayılabilir hale getirilmiş** versiyonu — ve daha iyisi, çünkü eşik gerektirmiyor: sadece "daha yüksek mi daha düşük mü" soruluyor.

#### İkinci yazılabilir kural — beş katmanlı likidite haritası

Son ayı/boğa kayması, haftalık tepe, aylık tepe, 3 aylık tepe, 6 aylık tepe, 12 aylık tepe. **Hepsi mekanik seviyeler**, hiçbiri yorum gerektirmiyor.

Ve bu, hedef seçimi problemine ilk kez **sıralı** bir cevap: en yakından en uzağa.

#### Kaynak atfı

**Larry Williams** — piyasa yapısı tanımının kaynağı olarak veriliyor. Dürüst ve kaydedilmeli.

#### Zayıf noktalar

**Tek örnek, geriye dönük.** EUR/USD'nin 2016 çöküşü, sonuç bilinerek anlatılıyor.

**"Kaç tepe/dip sayılacak" tanımsız.** Üç mü, beş mi? Video sayı vermiyor.

**"Retail traderın stopu neden bu kadar uzun kalsın" itirazına verilen cevap** — *"onlar retail'e karşı işlem yapmıyor, büyük fonlara karşı yapıyor"* — kanıtsız ve ölçülemez. Ama **kural bu anlatıdan bağımsız çalışıyor.**

#### Ölçülebilirlik

**Ölçülebilir.** Yön ölçütü tamamen mekanik ve tek başına test edilebilir: *"ardışık N ara vadeli tepe düşüyorsa, sonraki M mumun getirisi negatif mi?"*

Tek eksik N ve M, ikisi de kenarda.

#### Not

**Bu, beş ayda verilen en iyi yön tanımı.** Kasım V4'ün aylık order block kuralı da mekanikti ama örneklemi çok azdı. Bu, günlük grafikte çalışıyor ve **her yeni pivotta bir gözlem** üretiyor.

**Ve senin `htf_bias` tanımına doğrudan alternatif.** EMA200 yerine "son üç ara vadeli tepe düşüyor mu" — tek satırlık bir değişiklik, ve karşılaştırması bedava.
:::

---

## Video 3 — IPDA veri aralığı örneği (AUD)

::: ders
**DERS**

#### Ön uyarı — videonun en çok tekrarladığı ders

Bu video, teknik içerikten çok **bekleme disiplini** üzerine.

> *"Günlük girdilerimizdeki grafikleri sadece tıklayıp 'al burada, sat burada' diye bir neon tabela arama. **Dikkatini çektiğim şeye odaklan**, sonra fiyatın o seviyelere nasıl gittiğini izle."*

Ve somut bir talimat: *"Grafikleri her gün yazdır, bir klasöre koy, tarihle. Hafta sonu geri dön ve bak: **gözlem ne zaman yapıldı, seviyelere ulaşması ne kadar sürdü, ulaştıktan sonra tepki neydi.**"*

Gerekçe: *"Geçmişe dönük bir örnekle öğrenmek ile **beklemeyi yaşamak** arasında büyük bir fark var. Bu, traderları öldüren kısım."*

#### Futures ve forex birlikte okunmalı

> *"Forex traderıysan **altta yatan vadeli sözleşmeye** hiç bakmadın, ya da futures traderıysan forex'e. **İkisine de bakman gerekiyor.** Çünkü forex sana **hacim vermiyor** — vadeli sözleşmeden alabileceğin doğru hacmi vermiyor."*

Ve **açık pozisyon (open interest)** de sadece vadeli piyasada var.

#### IPDA veri aralığının işlevi — netleştirme

Videonun kendi düzeltmesi:

> *"Bazılarınız bunun **20, 40, 60 gün sonra tepeyi ve dibi çağıracağını** sanıyor. **İşi o değil.** Sorulan soru şu: 'Alacağım bir order block ya da satacağım bir order block ararken, hangisini hedef alacaklarını nasıl bilirim?'"*

**Cevap:** algoritma son 20/40/60 günün likiditesini arıyor. O pencerelerde ne varsa, hedef odur.

#### Zaman ufku — ve dürüst bir sınır

> *"Üç aylık bir zaman ufkuna bakıyorum. Ondan ötesine bakmayı sevmiyorum. Çoğu zaman **dört ila altı hafta** içinde çok isabetli oluyorum — bu, üç aylık döngünün **yarı ömrü.**"*

#### Örneğin çözümü — Avustralya doları, Aralık 2016 – Ocak 2017

**1. Vadeli sözleşme grafiği.** Mart 2017 kontratı, günlük.

**2. Çeyreklik kaymayı bul.** Kasım 2016'da net bir yapı kayması var: eşit tepeler delinip alım stopları alınmış, sonra aşağı kırılım. *"Herkes aynı odada olsaydı ve 'son üç-altı ayın en bariz kayması bu mu' diye sorsam, herkes elini kaldırırdı."*

**3. Kasım 1'e dikey çizgi çek**, 20/40/60 gün ileri say.

**4. Destek seviyesini bul.** Haftalık grafikte **71.50** — uzun süredir görülen en düşük seviye, daha önce oradan sıçranmış.

**5. Açık pozisyona bak.** Aralık'ta açık pozisyonda **sert bir düşüş** var. Videonun okuması:

> *"Açık pozisyon **yalnızca** akıllı paranın ağır kısa kalmak istemediğinin kanıtı olarak düşer. **Merkez bankası kalan kısa pozisyonundan kurtuluyor.** Kasım ilk haftası – Aralık ortası arası satış programlarını tamamladılar. Artık **alıcılar için hazırlar** — yukarıda maruziyetleri yok."*

Ve kâr hesabı: *"Kitaplarını **77.50'den 71.50'ye**, 600 pip yaptılar."*

**6. 20 günlük ileri projeksiyon** tepeyi işaretliyor; **40 günlük** bir düşüş mumuna denk geliyor.

**7. Order block'u bul.** O düşüş mumu, sonraki mum tarafından kırılıyor → bullish order block. Tepesi: **0.7350.**

**8. Giriş ve doğrulama.**

| Kalem | Değer |
|---|---|
| Order block tepesi | **0.7355** |
| Gerçekleşen dip | **0.7352** — **3 pip** altı |
| Kapatılan FVG | **0.7380 – 0.7434** (Aralık 2016'dan) |
| Mean threshold | Geçildi |

**9. Hedefler.**

| Seviye | Gerekçe |
|---|---|
| **0.7525** | Eşit tepelerin üstü — alım stopları |
| **0.7570 – 0.7580** | Haftalık grafik referansı |
| **0.7650** | Güçlü giderse |

Videonun "eşit tepe" tanımı üzerine notu: *"Mükemmel eşit mum tepesi arama. **Gövdelere bak** — neredeyse aynılar. Bu, benim görüşüme göre eşit bir seviye."*

#### Ve perakende ile karşıtlık

Video aynı grafikte perakendenin ne göreceğini anlatıyor: *"Bir çifte tepe, %50 Fib seviyesi, ABCD hareketi — 0.70'lere iniş bekleyeceklerdi. **Biz o mumu alım gerekçesi olarak haritaladık.**"*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — açık pozisyon filtresi

Bu videonun en somut yeni katkısı:

**Destek seviyesinde + açık pozisyonda ani ve büyük düşüş** → akıllı para kısa pozisyonlarını kapatmış, yukarı bekle.

**Ölçülebilirlik açısından güçlü:**
- Veri **kamuya açık**, günlük, uzun geçmişli
- **Fiyattan bağımsız** — bu, seride nadir
- Yön kuralı tanımlı

**Zayıf:** "ani ve büyük" için eşik yok. Video başka bir yerde **%15** diyor ama burada vermiyor. Ve "ne kadar sürede" tanımsız.

**Kripto için:** vadeli kripto piyasalarında açık pozisyon verisi mevcut ve ücretsiz. **Senin bağlamına doğrudan aktarılabilir** — üstelik funding oranı gibi ek bir katman da var.

**Uyarı:** açık pozisyon literatürü karışık. Fiyat-hacim-açık pozisyon ilişkisi üzerine çok çalışma var, tutarlı güçlü bir öngörü gücü gösterilmiş değil.

#### İkinci yazılabilir ayrıntı — futures/forex ayrımı

*"Forex hacim vermiyor, vadeli sözleşme veriyor."* **Bu doğru ve önemli.** Spot forex'te merkezi bir borsa olmadığı için hacim broker'a özgü; vadeli piyasada gerçek. Aynı şey açık pozisyon için de geçerli.

Ve kriptoda durum forex'ten iyi: spot hacim borsaya özgü ama perpetual futures'ta açık pozisyon ve funding **gerçek ve kamuya açık.**

#### En zayıf akıl yürütme: "algoritma" argümanı

**İddia:** bir program herkesin stopunu bilemez → standart bir referans kullanmalı → en mantıklısı son 20/40/60 günün uçları → demek ki fiyat oraya gidiyor.

**Neden geçersiz:** "bir şeyin nasıl yapılabileceğini hayal edebiliyorum" ile "o şey böyle yapılıyor" arasında geçiş yapıyor.

**Daha basit açıklama var:** eski tepe ve dipler, insanlar oraya emir koyduğu için önemlidir. Merkezi bir motora gerek yok. Herkes aynı grafiği görür — bu, mikroyapı literatüründe desteklenen bir gözlem.

**Ama kritik:** kural bu anlatıdan **bağımsız** ölçülebilir. "Son 60 günün tepesi önemli mi" sorusu, arkasındaki hikâye doğru olmasa da geçerli.

#### Kayda değer bir itiraf

> *"20/40/60 gün, tam o günde dönüş olacağı anlamına gelmez. İlk derste bunu daha çok vurgulamalıydım — herkes öyle sandı."*

Ve ikinci itiraf: *"Aslında sabırlı bir insan değilim, çok sabırsızım. Uzun vadeli pozisyon işlemi bu yüzden yapmıyorum."*

#### Bekleme disiplini — ayın en iyi metodolojik tavsiyesi

*"Grafikleri her gün yazdır, tarihle, hafta sonu geri dön: gözlem ne zaman yapıldı, ulaşması ne kadar sürdü."*

Bu, **kendi tahminlerinin kaydını tutma** talimatı. İronik olarak, videonun kendisi bu kaydı hiç sunmuyor — ama tavsiye doğru ve metottan bağımsız geçerli.

#### Ölçülebilirlik

**Kısmen.** Açık pozisyon filtresi ölçülebilir (eşik gerektiriyor ama o kenarda). Order block girişi ve hedefler mekanik. Ama çeyreklik kaymanın tespiti hâlâ tanımsız.
:::

---

## Video 4 — Open float likidite havuzlarının tanımı (CAD)

::: ders
**DERS**

#### Open float'ın tam tanımı

> **"Open float, son 60 işlem gününü geriye ve 60 işlem gününü ileriye alarak — toplam 120 işlem günü — o aralıktaki en yüksek tepe ile en düşük dibi bulmaktır."**

**Prosedür:**
1. Bir takvim ayının **ilk gününü** referans al
2. **60 işlem günü geriye** bak: en yüksek tepe ve en düşük dip nerede
3. **60 işlem günü ileriye** bak: aynı soru
4. Bu 120 günlük pencerenin **en yüksek tepesi ve en düşük dibi** = büyük fon likidite havuzları

**Ve alt kademeler:**

| Pencere | Ne verir | Kime yarar |
|---|---|---|
| **20 gün** | Yakın vadeli tepe/dip | Gün içi scalp ve day trade |
| **40 gün** | Kısa vadeli tepe/dip | Kısa vadeli işlem |
| **60 gün** | Ara vadeli tepe/dip | Open float sınırı |

Videonun uyarısı: *"Sadece son 60 günün en yüksek tepesine bakma. **Son 20 günün** tepe/dibi nerede, **son 40 günün** nerede, **son 60 günün** nerede — üçünü ayrı ayrı işaretle."*

#### Turtle sistemi bağlantısı — kaynak veriliyor

Videonun kendi anlatısı:

> *"Sevdiğim en güçlü formasyonlardan biri **turtle soup** — eski tepenin üstünde ve eski dibin altında sahte kırılım. Bu formasyonu **Street Smarts** kitabından öğrendim ama yazarlara saygıdan burada öğretmiyorum."*

Ve orijinal kaynak: *"**Richard Dennis** farklı hayatlardan insanları topladı ve onlara uzun vadeli bir işlem modeli öğretti: **20 günlük tepenin üstünde al, 20 günlük dibin altında sat**, uzun vadeli trendleri tut. Çok kaybeden işlemleri vardı ama kazananları devasaydı."*

**Ve buradan çıkan edge iddiası:** *"Sistem 20 periyotluk tepe kırılımından alıma dayandığı için, **o kırılım çoğu zaman sahteydi — ve bu kendi başına bize bir edge veriyor.**"*

#### Yön tespiti — açık ve mekanik

> *"Alım stopları sürekli vuruluyor ve satış stopları nadiren vuruluyorsa, bu sana kurumsal emir akışının **boğa** olduğunu söylüyor. Tersi ise **ayı.**"*

**Ve rejim değişimi sinyali:**

> *"Son 60 günün tepesinin **üstündeysen** ve alım stopları alınmaya devam ediyorsa devam. Ama **satış stopları alınmaya başlarsa** muhtemelen bir çeyreklik kayma yapıyoruz."*

Ve simetriği: son 60 günün dibinin altındaysan (derin indirim) ve alım stopları alınmaya başlarsa, yine kayma.

#### Örneğin çözümü — Kanada doları, ay ay

Video **beş ardışık ayı** aynı prosedürle işliyor: Ağustos, Eylül, Ekim, Kasım, Aralık 2016.

Her ay için:
1. Ayın ilk gününe çizgi
2. 60 gün geriye: en yüksek tepe ve en düşük dip
3. 60 gün ileriye: aynısı
4. Sonuç kaydedilir: **hangi taraf alındı?**

| Ay | Sonuç |
|---|---|
| Ağustos 2016 | Temmuz sonu tepeleri alındı |
| Eylül | Alım stopları alındı |
| Ekim | İlk 20 günde **gövdelerin altındaki** satış stopları bir kez denendi, reddedildi |
| Kasım | Alım stopları alındı |
| Aralık | Kasım tepesi patlatıldı, sonra Ocak'ta daha düşük dip |
| Ocak 2017 | **En düşük dip ihlal edildi** — artık satış tarafı çalışılıyor |

Sonuç: aylarca alım stopları alınmış → boğa. Sonra satış stopları alınmaya başlamış → **çeyreklik kayma.**

#### USD/CAD tarafı — gövde kuralıyla

Video forex tarafına geçiyor ve her seferinde **gövdeleri** referans alıyor:
- **1.3050** civarındaki gövdelerin altına fitil → satış stopları alındı, hızlı dönüş
- Yukarıda gövdelerin üstüne fitil → alım stopları alındı, reddedildi
- Aşağıda tekrar gövdelerin altı → satış tarafı süpürüldü

#### Açık pozisyon katmanı — sayıyla

Video CAD vadeli sözleşmesine dönüyor:

| Kalem | Değer |
|---|---|
| Kasım rallisi | **0.7380 → 0.7640** |
| Geri çekilme | Kasım gövde dibine |
| İkinci iniş | **0.7380**'in altındaki satış stopları |
| **Açık pozisyon** | O anda **çok düşük** |
| Sonuç | **0.7380 → 0.7680**, ~300 pip |

Ve eşik: *"Anlamlı bir kurumsal destek göstergesi için **%15'lik bir azalma** yeterli."*

Videonun mantığı: *"Açık pozisyon düşerken fiyat da bir destek seviyesine iniyorsa, bize söyledikleri şu: **alıcılara satış tarafı likidite sunmaya istekli değiller.** Yüksek açık pozisyon, bankanın riski taşıdığının işaretidir; düşük açık pozisyon, o riski bıraktığının."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — 20 günlük likidite havuzları

**Her 20 işlem gününde yeni bir likidite havuzu oluşur** — alım tarafında ve satış tarafında. Prosedür tamamen mekanik: tarih al, geriye ve ileriye say, tepe ve dip kaydet.

**Ve bu, seride verilen en tartışmasız seviye tanımı.** Takvim ve gün sayısı yorum kabul etmiyor.

#### İkinci yazılabilir kural — yön tespiti

*"Alım stopları vuruluyor, satış stopları vurulmuyorsa → boğa."* Tamamen sayılabilir, ve **rejim değişimi sinyali de tanımlı:** ters tarafın alınmaya başlaması.

Bu, Kasım V4 ve Ocak V2'nin yanına üçüncü bir mekanik yön tanımı ekliyor. Ve **üçü de birbirinden bağımsız test edilebilir.**

#### Kaynak atfı — dürüst

**Richard Dennis / Turtle sistemi** ve **Street Smarts** kitabı açıkça kaynak gösteriliyor. Ve turtle soup'un edge iddiası da bu kaynaktan türetiliyor: *"20 günlük kırılım çoğu zaman sahteydi."*

**Bu, ölçülebilir bir tarihsel iddia.** Turtle sisteminin isabet oranı yayımlanmış: düşük isabet, yüksek ödeme. Yani "kırılımların çoğu sahte" doğru — ama sistem yine de kârlıydı, çünkü az sayıdaki gerçek kırılım çok kazandırıyordu.

**Videonun atladığı şey tam bu:** sahte kırılımı oynamak, gerçek kırılımın büyük kazancını **karşı tarafta** yaşamak demek. Bu bir simetri, ve ölçülmeden hangi tarafın daha iyi olduğu bilinemez.

#### Ölçülebilirlik

**Ölçülebilir.** 20/40/60 günlük havuz tanımı sıfır seçim noktası içeriyor. Yön tespiti sayılabilir. Açık pozisyon eşiği (%15) verilmiş.

**Ayın en mekanik videosu.**

#### Yanlışlanamazlık

**Beş ay gösteriliyor, hepsi geriye dönük**, ve hepsi aynı yorumla okunuyor.

**"%15'lik azalma yeterli"** — eşik verilmiş ama neye göre? Bir önceki güne mi, haftaya mı, zirveye mi? Tanımsız ama kapatılabilir.

**Hedef seçimi hâlâ katmanlı:** 20, 40, 60 günlük havuzlardan hangisinin hedefleneceği söylenmiyor. Üçü de aday, ve sonradan hangisinin "doğru" olduğu belli oluyor.

#### Not

**Ölçmeye değer, ve önceliği yüksek.** Üç ayrı hipotez çıkıyor:

1. *Son 20/40/60 günün tepe ve dipleri, rastgele seviyelerden daha sık tepki üretiyor mu?*
2. *"Hangi taraf süpürülüyor" ölçütü, sonraki N günün getirisini öngörüyor mu?*
3. *Açık pozisyonda %15+ düşüş + destek seviyesi kombinasyonu, tek başına destekten farklı sonuç veriyor mu?*

Üçü de kripto verisine doğrudan aktarılabilir. Üçüncüsü için perpetual futures açık pozisyonu kullanılır.
:::

---

## Video 5 — Kurumsal salınım noktalarının tanımı

::: ders
**DERS**

Bu videoda grafik yok — tamamen kavramsal.

#### Klasik salınım noktası tanımı

> *"Salınım tepesi: solunda daha düşük bir tepe, sağında daha düşük bir tepe olan tepe. Üç mumluk basit bir kalıp. Bunu mentorum **Larry Williams**'tan öğrendim."*

#### Ama kurumsal salınım noktası farklı

Videonun tezi:

> **"Kurumsal işlem açısından piyasada yalnızca İKİ tür salınım noktası vardır: bir stop koşusu ya da bir failure swing. Başka bir şey yok."**

#### Tür 1: Breaker salınımı — videonun "en güçlü kalıp" dediği

**Ayı senaryosu, adım adım:**

1. Fiyat bir eski direnç bölgesine yükselir — bearish order block, breaker, mitigation block, eski dip ya da eski tepe olabilir
2. **Birkaç pip kala durur** ve aşağı dönmeye başlar → perakende burada kırılım bekler
3. Ama piyasa **bir kez daha yukarı** çıkar, o kısa vadeli tepeyi kırar
4. Ve **asıl seviyeye** ulaşır — order block'a, ya da kalan boşluğu kapatır
5. Sonra aşağı kırılır ve **aradaki kısa vadeli dibi** ihlal eder → yapı kayması

**Videonun vurgusu:** *"Bu benim görüşüme göre en güçlü, en dinamik, en önemli fiyat kalıbı — kavramsal olarak öğrenmen gereken."*

**Giriş tetikleyicisi:**

> *"O kısa vadeli dip kırıldığında **tetiğin oluşur.** Fiyat o seviyeye geri gelirse satıcı olabilirsin."*

**Ve neden bu giriş güvenli:**

> *"Güzel olan şu: **stop koşusu zaten yapıldı.** Buradaki traderlar zaten stop oldular. Yani fiyatın oraya geri dönmesi için bir sebep yok. Stop'unu o tepenin üstüne ya da tam o tepeye koyabilirsin."*

**Boğa senaryosu:** tam simetriği — fiyat bir desteğe iner, biraz kala döner, sonra bir kez daha aşağı inip kısa vadeli dibi kırar, asıl seviyeye ulaşır, sonra yukarı dönüp aradaki kısa vadeli tepeyi kırar.

#### Tür 2: Failure swing

Fiyat seviyeye ulaşamaz ve döner. Video bu türü daha az işliyor — asıl vurgu breaker'da.

#### Ön koşul — video net

> *"Eylül'de öğrettiğimiz kurumsal referans noktaları **grafiğinde zaten olmalı.** Order block'lar, breaker'lar, mitigation block'lar, likidite boşlukları, fair value gap'ler. Onlar çizili değilse bu formasyonlardan yararlanamazsın — **sürpriz olursun.**"*

#### Videonun ödevi

*"Grafiklerinden örnekler çıkar: bir kısa vadeli tepenin kısa süreliğine geçildiği ve hemen ardından dönüş tepesi oluşan yerleri bul. Bu kalıp **her gün, her pariteşte** oluşuyor."*
:::

::: eleme
**ELEME**

#### Yazılabilir iddia — iki tür salınım noktası

**"Piyasada yalnızca iki tür salınım noktası var: stop koşusu ve failure swing."**

İlk bakışta bir sınıflandırma gibi duruyor. Ama iki kategori **tüm olasılıkları kapsıyor:** ya seviyeyi geçti (stop koşusu) ya geçemedi (failure swing). Üçüncü bir seçenek yok.

**Yani bu bir totoloji** — yönergenin kalıcı hata listesindeki ilk kalem. Ve videonun en çok vurguladığı cümle bu.

**Ama:** totoloji olması, altındaki **breaker prosedürünün** ölçülemez olduğu anlamına gelmiyor.

#### Yazılabilir kural — breaker salınımı

Beş adım, hepsi mekanik:

1. Üst zaman diliminde bir hedef seviye belirlenmiş olmalı (PD array)
2. Fiyat oraya **yaklaşıp durur** ve döner
3. Sonra bir kez daha gidip **kısa vadeli tepeyi kırar** ve seviyeye **ulaşır**
4. Sonra aşağı kırılıp **aradaki kısa vadeli dibi** ihlal eder
5. Fiyat o dibe döndüğünde → **giriş**

**Ve Aralık V5'in breaker tanımıyla aynı yapı**, ama bir ek koşulla: **ilk denemenin başarısız olması.** Bu, kurulumu daha dar ve daha yanlışlanabilir yapıyor.

#### Giriş gerekçesi — ve bu iyi

> *"Stop koşusu zaten yapıldı. Buradaki traderlar zaten stop oldular. Fiyatın oraya geri dönmesi için bir sebep yok."*

Bu, **stop yerleşimi için mekanik bir gerekçe** — ve yanlışlanabilir: eğer fiyat gerçekten oraya geri dönüyorsa iddia yanlıştır.

#### Zayıf noktalar

**Hiç grafik örneği yok.** Video tamamen şematik. Bu, geriye dönük örnek seçme sorununu ortadan kaldırıyor (dürüst) ama **hiçbir sayı da vermiyor** — "birkaç pip kala" ne kadar? Tanımsız.

**Ön koşul dışarıda:** hedef seviyenin (PD array) nasıl seçildiği bu videoda yok, önceki aylara devrediliyor.

#### Ölçülebilirlik

**Ölçülebilir.** Beş adımın hepsi fiyat yapısından türüyor. Tek tanımsız bileşen "seviyeye ne kadar yaklaşmalı" — ve o kenarda, bir tolerans bandıyla sabitlenebilir.

#### Not

**Ölçmeye değer somut hipotez:** *"başarısız ilk deneme + ikinci deneme + yapı kayması" üçlüsü, tek başına yapı kaymasından farklı sonuç veriyor mu?*

Bu, Aralık V5'in breaker testinin **daha dar** bir versiyonu — ve karşılaştırma grubu doğal: ilk denemede başarılı olanlar.
:::

---

## Video 6 — Üst zaman diliminde 10 yıllık getiri

::: ders
**DERS**

#### Veri kaynakları — video net

| Ne | Nereden |
|---|---|
| 10 yıllık tahvil **fiyatı** (futures) | **barchart.com** |
| 10 yıllık tahvil **getirisi** | **investing.com** |

İkisi de ücretsiz.

#### Temel ilişkiler — ezberlenmesi gereken

| Tahvil fiyatı | Getiri | Dolar |
|---|---|---|
| **Düşer** | Artar | **Yükselir** |
| **Yükselir** | Azalır | **Düşer** |

Genel kural: **"Uzun vadeli fonlar getiri arar."** Para, en çok getiri sağlayacağı yere gider.

#### 10 yıllık notun mevsimsel eğilimi

Videonun okuması:

| Dönem | Ne olur |
|---|---|
| **Ocak – Şubat** | Tepe oluşur |
| Sonra düşüş | |
| **Mayıs sonu – Temmuz başı** | **Dip oluşur** ← en güçlü sinyal |
| **Temmuz – Aralık** | Ralli |

Yani: yılın ilk yarısı ayı, ikinci yarısı boğa.

#### Dolar endeksinin mevsimsel eğilimi

| Dönem | Ne olur |
|---|---|
| **Ocak – Mart** | Ralli |
| **Mart – Mayıs** | Ayı piyasalarında düşüş |
| **Haziran – Temmuz** | **Önemli tepe** |
| Sonra yıl sonuna kadar düşüş | |
| **Ekim sonu – Kasım başı** | Dip, küçük sıçrama |

**Ve kritik gözlem:** bu iki mevsimsellik **zıt** — 10 yıllık Haziran-Temmuz'da dip yaparken dolar tepe yapıyor.

#### Ana kural — tandem vs ayrışma

Bu, videonun asıl katkısı, ve ölçülebilir:

| Durum | Ne demek | Ne yaparsın |
|---|---|---|
| **Ters yönde hareket ediyorlar** | Mevsimsellik yürürlükte, **trend rejimi** | Uzun vadeli pozisyon ara |
| **Aynı yönde hareket ediyorlar (tandem)** | **Büyük konsolidasyon** | Uzun vadeli pozisyon arama; kısa vadeli stop koşuları ve aralık işlemi ara |

Videonun ifadesi: *"İkisi de tandem hareket ediyorsa, uzun vadeli **kararsızlığa** bakıyorsun demektir. **Her ikisi için de yönlü bir devam olasılığı çok düşük.**"*

Ve pratik sonucu: *"O zaman **stop baskınları** ve IPDA veri aralıklarıyla geriye bakıp önceki tepe ve diplerin ihlal edilmesini ararsın."*

#### Örneklerin çözümü — üç yıl

**2015, Eylül kontratı.** 10 yıllık Haziran'da mevsimsel dip yapıyor ve ralli başlıyor → getiri düşüyor → dolar için ayı beklenir. **Ama dolar da hafifçe yükseliyor.** → **tandem** → sonuç: dolar Ağustos-Eylül boyunca yatay kaldı, Mayıs-Haziran dipleri alındı.

**2016, Eylül kontratı.** Aynı şey: 10 yıllık Mayıs sonu-Haziran'da dip yapıp ralli yapıyor. Dolar da **bir kez daha yükseliyor** ve Temmuz sonunda bir tepe daha yapıyor. → **tandem** → büyük konsolidasyon.

Videonun sonucu: *"2016'nın orta kısmında tüm parite çiftleri — GBP, EUR — **büyük konsolidasyonlardaydı.** Bunun sebebi tam olarak buydu."*

**2016 sonu – 2017, Mart kontratı.** 10 yıllık Kasım'da mevsimsel tepe yapıyor (seçim), sonra Aralık'a kadar düşüyor. → getiri artıyor → dolar **trend halinde** yükseliyor.

Videonun sonucu: *"Bu sefer **konsolidasyonda değiliz, trend halindeyiz.** Ve dolar bu ortamda trend yaptı."*

#### Pratik özet — videonun kendi ifadesi

> *"10 yıllık notun mevsimsel eğilimi yürürlükteyse ve dolar endeksinde **karşıt** fiyat hareketi görüyorsan, **patlayıcı ve trendli** bir işlem arayabilirsin. Görmüyorsan, **aralık işlemi** olacak — kısa vadeli işlem ve gün içi için yüksek olasılık, uzun vadeli pozisyon için çok düşük."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — rejim testi

**Bu, ayın en pratik ve en kolay ölçülebilir kuralı.**

| 10 yıllık ↔ dolar endeksi | Rejim | Ne aranır |
|---|---|---|
| **Ters yönde** | Trend | Uzun vadeli pozisyon |
| **Aynı yönde** | Konsolidasyon | Kısa vadeli, stop koşuları |

**Neden güçlü:**
- İki **bağımsız** kamuya açık seri
- Karşılaştırma tamamen mekanik (yön işareti)
- **Yasaklayıcı bileşen var:** tandem durumunda uzun vadeli işlem yasak
- Ve doğrudan sorulabilir: *"tandem dönemlerde gerçekleşmiş volatilite / trend gücü, ayrışma dönemlerinden düşük mü?"*

**Ve bu, tahmin değil rejim sınıflaması** — yani hangi tür kurulumun aranacağına dair bir filtre. Filtreler ölçülmesi en kolay şeylerdir çünkü karşılaştırma grubu doğal.

#### İkinci yazılabilir ayrıntı — mekanizma sağlam

Tahvil fiyatı ↔ getiri ters ilişkisi **tanım gereğidir.** Getiri ↔ döviz ilişkisi iktisatta en iyi belgelenmiş bağlantılardan biri. Bu, order block'un "bankalar burada aldı" hikâyesiyle aynı kategoride değil.

#### Zayıf noktalar

**"Ters yönde hareket ediyorlar" ne kadar sürede ölçülür?** Günlük mü, haftalık mı, aylık mı? Video örneklerde birkaç haftalık pencerelere bakıyor ama kural vermiyor. Kapatılabilir: yuvarlanan korelasyon.

**Mevsimsellik bileşeni ayrı bir sorun** — bkz. V10-V12 elemesi. Ama **rejim testi mevsimsellikten bağımsız çalışıyor:** iki seri ters mi aynı mı, mevsimsellik olmadan da sorulabilir.

**Üç örnek, üçü de geriye dönük.** Ve üçünde de "tandem = konsolidasyon" yorumu sonradan yapılıyor.

#### Ölçülebilirlik

**Ölçülebilir.** Mevsimsellik katmanını çıkarırsan geriye tamamen mekanik bir rejim testi kalıyor: iki seri arasındaki yuvarlanan korelasyonun işareti.

**Ve bu, ayın birinci önceliği** — çünkü hem ölçmesi ucuz, hem yasaklayıcı, hem de senin RET sonucuna doğrudan bağlanıyor: *sistemin ölçüldüğü dönem tandem miydi?*

#### Not

**Kripto analoğu:** BTC ↔ dolar endeksi, ya da BTC ↔ ABD 10 yıllık getiri. İkisi de kamuya açık ve günlük.
:::

---

## Video 7 — 10 yıllık getiriyle işlem koşullarının doğrulanması

::: ders
**DERS**

#### Prosedür — mevsimselliği ne zaman ciddiye alacaksın

Videonun sorusu: *"Mevsimsel eğilimin gerçekten gerçekleşeceğini nereden biliyorsun?"*

**Cevap — üç adım:**

1. Mevsimsel eğilimin başlangıç ayının **ilk işlem gününe** çizgi çek
2. O tarihten sonra **10 yıllık notta** ne oluştuğuna bak: ardışık daha düşük dipler mi, daha yüksek tepeler mi?
3. **Dolar endeksinde tam simetriğini** ara. **Simetri yoksa → çatlayan korelasyon → işlem fikri var**

Videonun ifadesi: *"Piyasa simetrisi böyle sunulmalı. Simetri kırıldığında, **altta yatan bir trend ya da manipülasyon** olduğunu gösterir."*

#### Örneklerin çözümü — üç yıl, sayısal

**Haziran 2015.** 10 yıllık notta ardışık **daha düşük dipler** (beş-altı mum). Dolar endeksinde beklenen: **daha yüksek tepeler.** Gerçekleşen: **daha düşük tepeler** → çatlayan korelasyon → doğrulama.

Ve ikinci teyit: getiri o dönemde **düşüyordu** — yani vadeli fiyat yükseliyordu. Ama getirinin kaldığı **konsolidasyon**, dolar ve paritelerde de konsolidasyona yol açtı.

**Haziran 2016.** 10 yıllık notta **eşit dipler.** Dolar endeksinde beklenen: eşit tepeler. Gerçekleşen: **daha yüksek tepeler** → çatlayan korelasyon → doğrulama. Yine konsolidasyon içinde.

**Kasım 2016 (Mart 2017 kontratı).** 10 yıllık notta **daha düşük tepe** (seçim fitili yok sayılarak). Dolar endeksinde beklenen: daha yüksek tepe. Gerçekleşen: **daha düşük dip.**

Videonun okuması: *"Dolarda daha düşük dip varsa, 10 yıllıkta **daha yüksek tepe** görmemiz gerekirdi. Görmedik. Mükemmel simetri kırıldı."*

Ve üçüncü teyit: **Kasım'da açık pozisyon düştü** — akıllı paranın kısa kapattığının işareti. Sonuç: dolar iki tam ay trend yaptı.

#### Zaman ufku uyarısı

> *"Zaman ufkum üç ay. **Genelde kurulumların tamamlanması bunun yarısı kadar sürüyor.** Bazen üç ay tamamlanır, bazen biraz daha uzun."*

#### Katmanlama önerisi

Videonun kapanışı:

> *"Bunları **çeyreklik kayma** kavramlarıyla harmanla. Ve isteğe bağlı olarak **faiz üçlüsüyle** ya da bir forex paritesinde **dolar endeksine karşı SMT ayrışmasıyla** da doğrulayabilirsin. **İkisine birden ihtiyacın yok — biri sana nitelendirme verir.**"*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — çatlayan korelasyon doğrulaması

Kasım V5'in SMT mantığının 10 yıllık nota uygulanması:

1. Mevsimsel dönemin başına çizgi çek
2. 10 yıllıkta yapı ne (daha düşük dip / daha yüksek tepe / eşit)?
3. Dolar endeksinde **tam simetrik** olanı ara
4. Yoksa → doğrulama

**Tamamen mekanik.** İki seri, iki yapı noktası, karşılaştır.

#### Ve bir iyileşme: teyit katmanları isteğe bağlı

Video açıkça söylüyor: *"İkisine birden ihtiyacın yok."* Bu, filtre yığını probleminden kaçınıyor — Ekim V6'nın yedi bileşenli sistemine göre belirgin bir iyileşme.

#### Zayıf noktalar

**"Seçim fitilini yok say" derken kural bozuluyor.** Video *"o büyük fitili bir kenara bırak, yapıya odaklan"* diyor. Hangi fitillerin yok sayılacağının kuralı yok — ve bu, gövde/fitil belirsizliğinin beşinci farklı biçimi.

**Üç örnek, üçü de geriye dönük**, üçü de çalışmış.

**Mevsimsellik bağımlılığı:** kural, mevsimsel dönemin başlangıcını referans alıyor. Mevsimsellik zayıfsa (bkz. V10-V12) başlangıç noktası da zayıflar. **Ama bağımsız da kullanılabilir:** herhangi bir pivotta karşılaştırma yapılabilir.

#### Ölçülebilirlik

**Ölçülebilir.** Yapı karşılaştırması mekanik. Tek eksik pivot tanımı, ve o kenarda.

#### Not

**V6 ile birlikte ölç.** V6 rejimi belirliyor (trend mi konsolidasyon mu), V7 giriş sinyalini doğruluyor. İkisi bir arada tek bir testte ölçülür:

*"Ayrışma rejiminde (V6) ve çatlayan korelasyon varken (V7) alınan pozisyonlar, filtresiz alınanlardan farklı ort. R veriyor mu?"*
:::

---

## Video 8 — Faiz farkları

::: ders
**DERS**

#### Veri kaynağı

**fxstreet.com** — küresel merkez bankası faiz oranları listesi. Video linkleri PDF notlarında vereceğini söylüyor.

#### Prosedür — üç adım

1. **Yüksek faizli** bir ülke seç
2. **Düşük faizli** bir ülke seç
3. İkisinin para birimlerinden oluşan **forex paritesini** belirle

Videonun kuralı: *"En yükseğin en yükseği olmak zorunda değil, en düşüğün en düşüğü de. **İki faiz arasında güçlü bir fark** olması yeterli."*

Ve mantık: *"Fonlar **yüksek getirili para birimlerini alıp zayıf getirili olanlara karşı satacaklar.**"*

#### O dönemin faiz sıralaması

| Uç | Merkez bankası |
|---|---|
| **Yüksek** | Yeni Zelanda Merkez Bankası, Avustralya Merkez Bankası |
| **Düşük** | Japonya Merkez Bankası, İsviçre Merkez Bankası, Avrupa Merkez Bankası (%0) |

#### Doğrulama zinciri — dört adım

Video, faiz farkını tek başına yeterli saymıyor:

1. Üst zaman diliminde **güçlü destek** (alım için) ya da **direnç** (satış için) bul
2. **Akıllı para ipuçlarını** bekle — o seviyede alındığının/satıldığının işareti
3. **Mevsimsel eğilim ve/veya açık pozisyon** doğrulasın
4. **Dolar endeksi yön teyidi** kurulumu nitelendirsin

#### Örnek 1 — AUD/USD (alım)

| Kalem | Değer |
|---|---|
| Avustralya faizi | **%1.50** |
| Fed faizi | **%0.50** → sonra **%0.75** (Aralık artışı) |
| Destek seviyesi | **0.7150** — uzun vadeli eski dip |
| Açık pozisyon | Sert düşüş → kısa kapatma |
| **Sonuç** | **400+ pip** ralli |

Videonun okuması: *"Açık pozisyon **azalıyorsa**, akıllı para karşı tarafı üstlenmek istemiyor demektir. **Kendilerini sıfırlıyorlar** çünkü keskin yükseliş bekliyorlar."*

Ve dördüncü teyit: *"Dolar endeksinde daha yüksek tepe vardı ama Avustralya dolarında daha düşük dip yoktu."* — SMT ayrışması.

#### Örnek 2 — USD/JPY (satış tarafı, yani parite alımı)

| Kalem | Değer |
|---|---|
| Fed faizi | **%0.75** (yüksek taraf) |
| Japonya faizi | **Negatif** |
| Parite | **USD/JPY** — yani dolar al, yen sat |
| Direnç (JPY nakit fiyatta) | **98.00** civarı bearish order block |
| Tetik | Seçim volatilitesi |
| **Sonuç** | **1.200 pipin üstünde** hareket |

#### Videonun ödevi

*"Merkez bankası seviyesinde tüm zayıf ve yüksek getirili para birimleri arasındaki faiz farklarına bak. Son altı ayda hangi pariteleri gördüğünü bul, ve **geriye dönük olarak** neden temellerin o büyük hareketlerle uyumlu olduğunu gerekçelendir."*

Ve bir uyarı: *"İnsanlara **egzotik pariteleri** işlem yapmalarını tavsiye etmiyorum."*

#### İleriye dönük not

*"Swing trading'e geçtiğimizde **getiri farkları (yield spreads)** hakkında da konuşacağız."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — carry seçimi

Prosedür mekanik: faiz listesi al, en yüksek ve en düşük olanı seç, pariteyi kur.

**Ve carry trade gerçek bir olgudur.** Faiz farkı, döviz getirilerinin en iyi belgelenmiş öngörücülerinden biri — akademik literatürde "carry trade puzzle" olarak bilinen bir anomali. Bu, seride mekanizması **gerçekten ölçülmüş** az sayıdaki fikirden biri.

#### Ama üç önemli eksik

**1. Carry'nin asıl riski hiç anılmıyor.** Carry trade'in bilinen özelliği: uzun süre küçük kazanç, sonra ani ve büyük kayıp. Getiri dağılımı **sola çarpık** — tam olarak senin fat-tail bulgunun tersi bir problem. Video bunu hiç konuşmuyor.

**2. Faiz farkının kendisi değil, seviyesi kullanılıyor.** Video "yüksek vs düşük" diyor ama **farkın değişimi** (daralıyor mu genişliyor mu) daha bilgilendirici. Bu, kolayca eklenebilir bir iyileştirme.

**3. Zamanlama tamamen tekniklere bırakılmış.** Faiz farkı yön veriyor ama giriş, tamamen order block / destek / açık pozisyon üçlüsüne bağlı.

#### Ölçülebilirlik

**Ölçülebilir.** Faiz verisi kamuya açık ve tartışmasız. Parite seçimi mekanik. Hipotez net: *"faiz farkı en geniş olan pariteler, en dar olanlardan farklı getiri veriyor mu?"*

Ve karşılaştırma grubu doğal.

**Kripto için:** doğrudan analoğu yok, ama **funding oranı** benzer bir rol oynuyor — pozitif funding, uzun tarafın maliyet ödediği anlamına gelir ve carry mantığıyla okunabilir.

#### Yanlışlanamazlık

**İki örnek, ikisi de geriye dönük, ikisi de çalışmış.**

**"Neden AUD'nin yükseleceğini söylediğimin sebebi buydu"** — kayıt yok.

**Ödev bile geriye dönük:** *"son altı aya bak ve **geriye dönük olarak** neden temellerin uyumlu olduğunu gerekçelendir."* Bu, tam olarak geçmiş açıklaması üretme talimatı.

#### Not

**Ölçmeye değer ama sıralamada ortada.** Mekanizması sağlam, verisi temiz — ama örneklem az (merkez bankası faizleri yılda birkaç kez değişir) ve asıl riski (sola çarpıklık) videoda hiç ele alınmıyor.

Ölçerken **kuyruk riskini ayrıca raporla** — ortalama R yeterli değil, en kötü %5'lik dilim de gerekli.
:::

---

## Video 9 — Piyasalar arası analiz

::: ders
**DERS**

Bu videoda grafik yok. Video baştan uyarıyor: *"Kuru ama faydalı bilgi. Tam dikkat veremeyeceksen başka bir zamana bırak."*

#### Dört ana grup

1. **Tahvil ve faiz piyasaları**
2. **Emtia piyasaları**
3. **Hisse senedi piyasası**
4. **Döviz piyasası**

Videonun uyarısı: *"Adım adım hareket etmiyorlar. Tahvil beş puan çıktı diye başka bir sınıf beş puan hareket etmiyor. **Öncü ve gecikmeli** zamanlar var."*

Ve gerekçesi: *"Tüm o temel verileri — TÜFE, istihdam — takip edemem. Bu dört gruba odaklanırsak, o verinin nihayetinde vereceği içgörünün tamamını alırız."*

#### İlişkiler tablosu

| İlişki | Yön | Not |
|---|---|---|
| **Tahvil ↔ hisse** | **Aynı** (pozitif) | Tahvil **öncü gösterge**. Gecikme: **6-12 ay** |
| **Tahvil ↔ emtia** | **Ters** | Enflasyon göstergesi. Gecikme: **6-12 ay** |
| **Dolar ↔ emtia** | **Ters** | Tahıl ve tarım **ihracata çok duyarlı** |
| **Dolar ↔ hisse/tahvil** | **Aynı** | |
| **Dolar ↔ emtia para birimleri** | **Ters** | |

#### Ölçüm araçları — hangi endeks ne için

| Endeks | Neyi ölçer | Kaynak |
|---|---|---|
| **CRB Index** | Genel emtia — **tahıl ve tarım ağırlıklı** (soya, buğday, mısır, sığır, domuz) | crbtrader.com |
| **Goldman Sachs Emtia Endeksi** | **Enerji ağırlıklı** | |
| **Goldman Sachs Sanayi Metalleri Endeksi** | Küresel eğilimler — **çinko, kalay, bakır, alüminyum** (altın/gümüş değil) | |

Videonun uyarısı: *"CRB endeksi çok ağır **tarım ağırlıklı.** Enerji tarafına bakacaksan Goldman Sachs emtia endeksini kullan."*

#### Deflasyon istisnası

> *"Deflasyon dönemlerinde — nadir, 1998 sonunda görüldü — **tahvil çok iyi performans gösterir, hisse düşer, emtia düşer.** Normal ilişkiler bozulur."*

#### Kilit ikili ilişkiler — videonun listesi

| Bu boğaysa | Şu olur |
|---|---|
| Dolar endeksi boğa | **Altın ayı** |
| Altın boğa | **AUD ve NZD boğa** (altın ihracatçısı) |
| Petrol boğa | **USD/CAD ayı** (Kanada petrol ihracatçısı) |
| Dow boğa | **Nikkei boğa** |
| Nikkei ayı | **USD/JPY ayı** |
| Getiri ayı | **O para birimi ayı** (para getiri arar) |
| Altın ayı | **USD/CAD boğa** |

#### Kullanım kuralı

> *"Bunların bir kısmını uzun vadeli analizinle uyumlu görüyorsan, muhtemelen doğru yoldasın. **Hepsinin birden uyuşmadığını nadiren görürsün.** İyi bir örneklem uyumluysa, uzun vadeli analizin muhtemelen doğrudur."*

#### Ve zamanlama itirafı

> *"Sorun **zamanlama.** Uzun vadeli trend işlemi ve zamanlama, bence en zor şeylerden. Çünkü traderları, giriş noktalarına karşı **biraz daha hareket payı** vermeye ikna etmek zor."*
:::

::: eleme
**ELEME**

#### Doğru olan kısım

Piyasalar arası ilişkilerin **çoğu gerçek ve ölçülmüş:**

- Dolar ↔ emtia ters ilişkisi ölçülmüş bir olgu
- Petrol ↔ CAD ilişkisi gerçek (Kanada'nın en büyük ihracat kalemi)
- Altın ↔ AUD/NZD ilişkisi gerçek (altın ihracatçıları)
- Tahvil ↔ hisse ilişkisi rejime bağlı ama belgelenmiş

**Ve araç seçimi doğru:** CRB'nin tarım ağırlıklı olduğunu belirtip enerji için Goldman Sachs endeksini önermek, gerçek bir teknik detay ve doğru.

**Deflasyon istisnası da doğru** — 1998 ve 2008 sonrası dönemlerde tahvil-hisse korelasyonu işaret değiştirdi.

#### Ama ölçüm açısından iki büyük sorun

**1. "6-12 ay gecikme" kuralı yanlışlanamaz kılıyor.**

Bir ilişki "6 ila 12 ay sonra ortaya çıkar" deniyorsa, ilişkinin tutmadığı hiçbir an yoktur — henüz gelmemiştir. Ve 12 ay sonra tuttuysa, arada geçen her şey açıklanabilir.

**Kapatılabilir:** sabit bir gecikme seç (ör. 6 ay) ve yuvarlanan korelasyonu ölç. O zaman ölçtüğün şey senin tanımın olur, videonun değil.

**2. "Üçü uyuşursa muhtemelen doğrusun" — sayı yok.**

Dört gruptan kaçının uyuşması gerektiği belirsiz. Video "üç" diyor bir yerde, "iyi bir örneklem" diyor başka yerde. Ve **uyuşma nasıl ölçülür** tanımsız.

#### Ölçülebilirlik

**Kısmen.** Tek tek ilişkiler ölçülebilir ve zaten ölçülmüş (dolar-emtia, petrol-CAD, altın-AUD). Ama videonun sunduğu **sistem** — dördünün uyumu — tanımsız.

**Ve ölçülmesi gereken şey aslında farklı:** bu ilişkiler zaten biliniyor ve fiyatlanıyor. Ölçülecek soru, ilişkilerin var olup olmadığı değil, **geçici bozulmalarının bilgi taşıyıp taşımadığı** — yani Kasım V5'in SMT fikri.

#### Not

**Bu videodan alınacak şey bir sistem değil, bir kontrol listesi.** Uzun vadeli bir yön görüşün varsa, bu ilişkilere bakıp **çelişki** olup olmadığını kontrol edebilirsin. Çelişki varsa görüşü sorgula.

Ve bu, ölçülebilir bir kullanım: *"piyasalar arası çelişki içeren kurulumlar, çelişkisiz olanlardan farklı sonuç veriyor mu?"*
:::

---

## Video 10 — Boğa mevsimselliği

::: ders
**DERS**

#### Videonun kendi uyarısı — ve bu dürüst

> *"Mevsimsel eğilimler **geçmiş performansın atasözü niteliğinde bir yol haritasıdır** ve bir panzehir ya da her şeyin cevabı olarak görülmemelidir. **Geçmişte bir şey yapmış olması, gelecekte aynısını yapacağını hiçbir şekilde garanti etmez.** Bu sadece, zaten bir beklentiye götüren şeylerin üstüne eklenen **bir araç daha.**"*

Video bu uyarıyı üç mevsimsellik videosunun her birinde tekrarlıyor.

#### Verinin yapısı

| Kalem | Değer |
|---|---|
| **Mavi çizgi** | **40 yıllık** ortalama (1976'dan itibaren) |
| **Kırmızı çizgi** | **15 yıllık** ortalama |
| Veri sonu | 2015 |
| Ölçek | **Vadeli sözleşme teslimat ayları:** Mart, Haziran, Eylül, Aralık |

Videonun notu: *"2017'de sapma var mı diye endişeleniyorsan — **hiç sapma yok.**"*

**Ve iki çizginin işlevi:** *"İkisi de aynı yönde hareket ediyorsa, bu **yüksek olasılıklı** bir mevsimsel eğilimdir. Karışık ve dalgalıysa, orada mevsimsellik olma ihtimali düşük."*

#### Kritik uyarı — futures/forex çevirisi

Bu, mevsimsellik modülünün en çok vurgulanan teknik detayı:

**Mevsimsellik grafikleri VADELİ SÖZLEŞME fiyatı içindir.** Forex paritesine çevirirken:

| Parite | Çeviri |
|---|---|
| **AUD/USD, NZD/USD, EUR/USD, GBP/USD** | Doğrudan — vadeli sözleşme yükselirse parite yükselir |
| **USD/CAD, USD/JPY, USD/CHF** | **TERS** — vadeli sözleşme yükselirse parite **düşer** |

Videonun örneği: *"Kanada doları vadeli sözleşmesi Eylül–Aralık arası düşme eğilimindeyse, bu **USD/CAD için boğa** senaryosudur."*

#### Kanada doları mevsimselliği

| Dönem | CAD vadeli | USD/CAD |
|---|---|---|
| **Mart ortası – Haziran** | Güçlü ralli | Düşüş |
| **Eylül – Noel** | Güçlü düşüş | **Yükseliş** ← alım fırsatı |

#### Örneğin çözümü — USD/CAD haftalık, 2008-2016

Video dokuz yılı tek tek işaretliyor. Her yıl için Eylül başından Aralık ortasına kadar gölgeli bir bölge:

| Yıl | Sonuç |
|---|---|
| 2008 | **Çok güçlü** ralli |
| 2009 | Küçük bir sıçrama ama **genel yön aşağıydı** |
| 2010 | **Zayıf, aşağı** |
| 2011 | Güçlü — ve dip sonrası yapı kayması boğa olmuştu |
| 2012 | Güçlü |
| 2013–2016 | Her yıl ralli |

**Ve videonun kendi çıkardığı ders — bu önemli:**

> *"Son iki yıla bak: haftalık grafikte yön ne? **Aşağıydı.** Yılın o zamanında **alım** mı arıyor olurdun, yoksa **satış** fırsatı mı? İşte bir sonraki dersin ipucu."*

Yani: **mevsimsellik, alttaki trendle uyumluysa çalışıyor; değilse çalışmıyor.**

#### İkinci örnek — ham petrol

Videonun eklediği: ham petrolün **Şubat ortası – Mart'tan Mayıs-Haziran'a** kadar ralli eğilimi var. Ve Kanada'nın bir numaralı ihracatı petrol olduğu için, ikisi neredeyse tandem hareket ediyor.

Yani **Mart – Haziran** arası hem CAD hem petrol için boğa → USD/CAD için ayı.
:::

::: eleme
**ELEME**

#### Dürüst olan kısım

**Uyarı tekrarlanıyor ve doğru:** *"geçmiş performans gelecek garantisi değil."* Video bunu üç videoda da söylüyor.

**Futures/forex çevirisi doğru ve önemli.** Bu, gerçek bir teknik detay ve atlanması kolay — video doğru vurguluyor.

**Ve en değerli kısım videonun kendi gözlemi:** *"Son iki yılda yön aşağıydı — o zamanda alım mı arardın?"*

Bu, mevsimselliğin **tek başına değil, trend filtresiyle** kullanılması gerektiğinin kabulü. Ve ölçülebilir bir kısıt.

#### Ama ölçüm açısından temel sorun

**Verinin nasıl hesaplandığı hiç gösterilmiyor.**

"40 yıllık ortalama" bir hesaplama tercihidir, bir olgu değil. Sorulması gereken sorular:

- Kontratlar nasıl **birleştirildi**? (Vadeli sözleşmeler her üç ayda değişir; rollover yöntemi sonucu tamamen değiştirir)
- Fiyat mı, getiri mi ortalandı?
- **Ölçekleme** nasıl yapıldı? (Farklı yıllardaki farklı fiyat seviyeleri nasıl karşılaştırılabilir hale getirildi?)
- **Aykırı yıllar** çıkarıldı mı?

Bunların hiçbiri söylenmiyor. Ve yönergenin **"verinin cinsi"** kalibrasyonu tam bunu işaret ediyor: *takvim ve saat tartışılmaz, ama 40 yıllık mevsimsel ortalama bir hesaplama tercihidir ve gösterilmediğinde doğrulanamaz.*

#### İkinci sorun: örnek sayısı

Bir mevsimsel eğilim, yılda **bir** gözlem üretir. 40 yıl = **40 gözlem.** Ve o 40 gözlemin çoğu birbirinden bağımsız değil (aynı rejimler, aynı uzun trendler).

Senin **100 kapanan işlem eşiğinin** çok altında.

#### Üçüncü sorun: videonun kendi örneği fikri zayıflatıyor

Dokuz yıllık USD/CAD örneğinde:
- 2009: sıçrama var ama **genel yön aşağıydı**
- 2010: **zayıf, aşağı**

Yani dokuz yılın **ikisinde çalışmamış.** Video bunu dürüstçe gösteriyor ama sayıya dökmüyor: **7/9 = %78.** Ve o iki başarısızlık, alttaki trendin ters olduğu yıllar.

Yani gerçek kural şu: **"trend uyumluysa mevsimsellik çalışır"** — ki bu durumda mevsimselliğin kendi katkısı ne kadar?

#### Ölçülebilirlik

**Kısmen — ama pratikte ölçülemez.**

Kural mekanik (belirli tarihler arasında al/sat). Ama:
1. Verinin hesaplanma yöntemi gizli → **doğrulanamaz**
2. Örneklem 40 gözlem → **istatistiksel olarak yetersiz**
3. Ve videonun kendi örneği trend filtresine bağımlılığı gösteriyor

#### Not

**Ölçmeye değmez — ama bir şey öğretiyor.**

Ölçmek istersen **kendi mevsimselliğini hesapla:** ham günlük veri al, yıl içi günlük ortalama getiriyi çıkar, güven aralığını hesapla. O zaman ölçtüğün şey doğrulanabilir olur.

**Ve muhtemel sonuç:** çoğu mevsimsel "eğilim", 40 gözlemde güven aralığının içinde kalır — yani gürültüden ayırt edilemez.
:::

---

## Video 11 — Ayı mevsimselliği (NZD)

::: ders
**DERS**

#### Verinin yapısı — NZD için

| Kalem | Değer |
|---|---|
| **Mavi çizgi** | **19 yıllık** ortalama |
| **Kırmızı çizgi** | **15 yıllık** ortalama |

Videonun kalite ölçütü: *"İkisi de aynı yönde hareket ediyorsa **yüksek olasılıklı** mevsimsellik. Karışıksa değil."*

#### NZD'nin güçlü kontratları

> *"**Haziran kontratı** aynı ay içinde hem ralli hem düşüş için en güçlü eğilime sahip. **Aralık kontratı** yıl sonuna doğru güçlü ralli eğiliminde. Kiwi işlem yapacaksan **Haziran ve Aralık kontratlarına** odaklan."*

**Ve en belirgin ayı penceresi:** **Şubat ortası – Mart ortası.**

#### Videonun asıl amacı — bu kritik

Video başlıkta "ayı mevsimselliği" diyor ama içeriği farklı:

> *"Bir dakika Michael, ayı mevsimselliğini konuşacaktık? Evet — ama bu ders **ayı mevsimselliklerini dar bir şekilde sadece kısa satış için değil**, bizi **uzun vadeli bir boğa çeyreklik kaymasına** senkronize etmek için nasıl kullanacağımızı anlatıyor."*

Yani: **bir düşüş mevsimselliği, sonrasındaki yükselişin başlangıç noktasını verir.**

#### Videonun ödevi ve dürüstlüğü

*"2007'ye kadar geri gittim ve her yılı tek tek inceleyeceğiz — ve mevsimselliğin ne kadar etkisi olduğunu göreceğiz."*

Ve: *"Her yıl gerçekleşecek mi? **Kesinlikle hayır.**"*

#### Futures/forex farkı — netleştirme

V10'da CAD için ters çevirme gerekiyordu. Burada gerekmiyor:

> *"Kiwi bir **com-dol** (emtia doları). NZD/USD paritesinde Yeni Zelanda doları önde olduğu için vadeli sözleşme mevsimselliği **doğrudan** uygulanır."*

Ve bir uyarı: *"Vadeli piyasa ile forex arasında pip-için-pip birebir bir eşleşme zorlamıyorum. **Genel olarak aynı yönde** hareket ederler."*
:::

::: eleme
**ELEME**

#### Videonun asıl katkısı — ve bu iyi

Başlık "ayı mevsimselliği" ama içerik **"bir düşüş penceresini, sonraki yükselişin zamanlaması için kullan."**

Bu, mevsimselliği tek başına bir sinyal olmaktan çıkarıp **bir zamanlama aracı** haline getiriyor. Ve daha savunulabilir: *"Şubat ortası – Mart ortası arası düşüş bekle, sonra çeyreklik kayma için pozisyon al."*

#### Ama aynı üç sorun duruyor

**1. Veri hesabı gösterilmiyor.** 19 yıl ve 15 yıl ortalamaları nasıl hesaplandı — rollover, ölçekleme, aykırı yıl temizliği. Hiçbiri yok.

**2. Örneklem daha da az.** NZD için 19 yıl = **19 gözlem.** CAD'in 40'ından da az.

**3. "İkisi aynı yönde hareket ediyorsa güçlü" ölçütü döngüsel.** 15 yıllık ortalama, 19 yıllık ortalamanın **alt kümesidir** — aynı verinin bir kısmı. İkisinin uyuşması bağımsız bir teyit değil, **tanım gereği beklenen** bir şey.

Bu, yönergenin **"bağımsız olmayan doğrulama"** kaleminin saf örneği: aynı veriden türetilmiş iki seri, teyit sayılıyor.

#### Ölçülebilirlik

**Ölçülemez** — sunulan haliyle. Veri doğrulanamaz, örneklem yetersiz, kalite ölçütü döngüsel.

#### Not

**Bu videodan alınacak tek şey yapısal fikir:** *"bir mevsimsel düşüş penceresi, sonraki yükselişin başlangıcını zamanlamak için kullanılabilir."*

Ve o fikir **mevsimsellik olmadan da test edilebilir:** herhangi bir mekanik düşüş tespiti (ör. son 20 günün dibi) sonrası dönüş oranı.
:::

---

## Video 12 — İdeal mevsimsellik (eşleştirilmiş)

::: ders
**DERS**

#### Ana fikir — modülün en iyi kısmı

Bu videonun katkısı, tek bir mevsimselliğe değil **iki mevsimselliğin karşıtlığına** bakmak.

> *"Yaptığımız şey **iki mevsimsellik grafiğini karşılaştırmak.** En **diametrik olarak zıt** fiyat hareketini arıyoruz. Yüksek olasılıklı — ya da benim tanımımla **ideal** — mevsimsellik, altta yatan piyasanın o yönde gitmeye zaten eğilimli olduğu zamandır."*

**Prosedür:**
1. Paritenin **ilk** para biriminin vadeli sözleşme mevsimselliğine bak
2. **Dolar endeksi** mevsimselliğine bak
3. **Zıt** oldukları pencereleri bul → **ideal mevsimsellik**

#### Tam tablo — yedi parite

| Parite | Vadeli sözleşme mevsimselliği | Dolar endeksi | Sonuç |
|---|---|---|---|
| **AUD/USD** | Mart'ta ralli, **Mayıs'ta tepe** | Mart-Mayıs düşüş | **Mart–Mayıs boğa** |
| **NZD/USD** | Mart-Nisan ralli, **Mayıs'ta tepe** | Nisan tepe, Mayıs dip | **Mart–Mayıs boğa** |
| **EUR/USD** | **Haziran–Temmuz dip** | Haziran-Temmuz tepe | **Yaz dibi** |
| **GBP/USD** | **Mart'ta dip, Mayıs'ta tepe** | Mart-Nisan tepe, Mayıs dip | **Mart–Mayıs boğa** |
| **USD/CHF** | CHF: Haziran-Temmuz **dip** | Haziran-Temmuz **tepe** | **Yazda dönüş noktası** |
| **USD/JPY** | JPY: Mart-Nisan **dip** | Tepe, Mayıs'a düşüş | **Yılın en uzun vadeli JPY dibi** |
| **USD/CAD** | CAD: Mart-Nisan **dip**, Mayıs tepe | Mart-Nisan **tepe**, Mayıs dip | **Mart–Mayıs ayı** |

Ve GBP için ek not: *"Mavi çizgi **40 yıllık** veri, kırmızı **15 yıllık.** Çok fazla zaman faktörlenmiş — benim görüşüme göre bu **çok güçlü** bir tanesi."*

#### Kullanım kuralı — ve bu önemli

Video her paritede aynı şartı tekrarlıyor:

> *"Bu, **altta yatan piyasa zaten o yönde eğilimliyse** en iyi çalışacak senaryodur."*

Yani mevsimsellik tek başına değil, **trend filtresiyle** kullanılıyor.

#### Videonun kapanış özeti

> *"Dolar endeksi mevsimselliğine bakıp Mart-Nisan'da bir tepe bekliyorsak — olacağı anlamına gelmez ama bekliyoruz — bu tek başına şunu söyler: **dolar endeksinde temelde ayıysak, dolar satmak için ideal bir senaryo.** O dolarla eşleşmiş bir paritenin de aynı zamanda güçlü ralli eğilimi varsa, **iki taraflı bir teyit** elde edersin."*
:::

::: eleme
**ELEME**

#### Modülün en iyi videosu — ve sebebi

**İki mevsimselliğin karşıtlığını aramak, tek bir mevsimselliğe bakmaktan daha iyi bir fikir.** Çünkü:

1. **Yasaklayıcı bir bileşen ekliyor:** zıtlık yoksa kurulum yok
2. Ve teorik olarak daha tutarlı: bir parite iki para biriminin oranıdır, ikisine de bakmak doğru

#### Ama bağımsızlık sorunu burada da var

**Dolar endeksi, bu paritelerin kendisinden hesaplanıyor.** Ağırlıklar: EUR ~%58, JPY ~%14, GBP ~%12, CAD ~%9, SEK ~%4, CHF ~%4.

Yani:
- **EUR/USD mevsimselliği ile dolar endeksi mevsimselliğinin zıt olması, matematiksel bir zorunluluk** — endeksin %58'i EUR
- GBP ve JPY için de kısmen aynı
- **AUD ve NZD endekste hiç yok** → onlar için karşılaştırma gerçekten bağımsız

Video bu ayrımı hiç yapmıyor ve yedi pariteyi aynı şekilde sunuyor.

**Sonuç:** tablodaki yedi satırın **beşi** için "diametrik zıtlık" bulmak, bilgi değil aritmetik.

#### Ölçülebilirlik

**Ölçülemez** — V10 ve V11'le aynı sebeplerden (veri hesabı gizli, örneklem yetersiz), artı yeni bir sorun: **karşılaştırılan iki serinin çoğu bağımsız değil.**

#### Ama bir şey kaydedilmeli

**"Altta yatan piyasa zaten o yönde eğilimliyse"** şartı, üç videoda da tekrarlanıyor. Bu, mevsimselliğin **kendi başına yeterli olmadığının açık kabulü** — ve o kabul dürüst.

Ve ölçülebilir bir soru üretiyor: *"trend filtresi verildiğinde mevsimsellik ne kadar ek bilgi ekliyor?"* Cevap muhtemelen "çok az" — çünkü trend filtresi zaten çalışıyorsa mevsimselliğin katkısı marjinal olur.

#### Not

**Ayın en zayıf bloğu bu üç video.** Ve zayıflık sebebi ilginç: **veri gerçek, mekanizma makul, ama doğrulanamaz.** Bu, seride sık görülen "yanlış iddia" kategorisinden farklı bir problem — burada iddia yanlış değil, **kontrol edilemez.**
:::

---

## Video 13 — Sermaye yönetimi

::: ders
**DERS**

#### Videonun çerçevesi

Bu video uzun vadeli işlem için sermaye yönetimini anlatıyor, ve odağı **fon yönetimi** perspektifi.

> *"Bazılarınız yönetilen fonları düşünmüyor olabilir. Ama önemli olan şey **çekilme kontrolü** — yönetilebilir, tolere edilebilir bir seviyede tutmak."*

#### Çekilme hedefi

| Seviye | Değerlendirme |
|---|---|
| **%15 yıllık** | *"Gerçekçi bir hedef — kesinlikle harika"* |
| **%20** | *"Muhtemelen tamam"* |
| **%25+** | *"Çoğu kişi burada irkilmeye başlar"* |

#### Tahsis kuralı — ayın en özgün risk fikri

Bu, seride başka hiçbir yerde geçmeyen bir kural:

> *"Görüşüm şu: piyasaya her doları tahsis etmek istemiyorum. Tahsisimi **toplam sermayemin yalnızca %30'uyla** sınırlıyorum."*

**Nasıl çalışır:**

| Kalem | Hesap |
|---|---|
| Hesap | **100.000 $** |
| Tahsis (%30) | **30.000 $** |
| İşlem başına risk (%1) | **30.000'in %1'i = 300 $** |

Ve bir başka örnek: *"10.000 $ hesabın varsa, işlem hesabın **3.000 $** olur. Onun %1'i **30 $** — işlem başına maksimum riskin bu."*

**Gerekçeler — dört tane:**
1. *"Marj çağrısı endişesi yok"*
2. *"Asla aşırı kaldıraçlı olmayacağım"*
3. *"Sermayemde vahşi düşüşler olmayacak"*
4. *"Her zaman elimde nakit rezerv olur — kaçırılamayacak bir fırsat çıkarsa alabilirsin"*

Ve yatırımcı perspektifi: *"Yatırımcılar bunu sever — **%100 maruz kalmadığını** görmek isterler."*

#### Hedef R:R

> *"3:1 ödül/risk veya daha yüksek kurulumları hedefle. **Düşük risk-yüksek ödül, çok düşük isabet oranına izin verir.** Ama bu zaman diliminde **sabırlı** olman gerekiyor."*

**Ve ikinci bir fayda:** *"Düşük risk, **daha fazla kurulum için sermaye** bırakır. Tüm paran tek işlemde olmadığı için daha çok kurulum alabilirsin."*

#### Yıllık getiri hedefi

| Hedef | Gerekçe |
|---|---|
| **%18 – 25 / yıl** | *"Yönetilen fonlar için endüstri standardı"* |

Videonun cümlesi: *"Bunu her yıl yapabilirsen, sana para vermek isteyen insan sıkıntısı **asla** çekmezsin."*

#### Uzun vadeli işlemin üç zorluğu

1. **Kurulum sıklığı çok düşük** — *"yıl boyunca üst zaman diliminde çok fazla işlem yok"*
2. **Açık kârda kısa vadeli geri çekilmelere izin vermelisin** — *"birkaç gün, hatta bir iki hafta piyasa açık kârının bir kısmını geri verir. Bunlar **realize kâr değil** — işlemi kapatana kadar"*
3. **Zaman ufku** — üç ayı bulabilir

#### Videonun tavsiyesi

*"Ocak içeriğini bitirdikten sonra, mentorship'in kalan sekiz ayı boyunca **uzun vadeli işlemler almayı** düşün. İçeri girip piyasadan biraz alıp hemen kenara çekilmeye çalışma."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — %30 tahsis

**Ayın en özgün risk fikri, ve gerçekten iyi.**

Etkisi: %100 hesap üzerinden %1 risk yerine, %30 üzerinden %1 → **efektif risk %0.3.** Yani standart tavsiyenin üçte biri.

**Ve dört gerekçenin üçü doğru:**
- Marj çağrısı riski gerçekten düşer
- Kaldıraç gerçekten düşer
- Nakit rezerv gerçekten fırsat esnekliği verir

**Dördüncüsü tartışmalı:** "sermayede vahşi düşüşler olmayacak" — bu doğru ama **getiri de aynı oranda düşer.** Video bu simetriyi hiç konuşmuyor.

#### Ve burada bir aritmetik tutarsızlık var

Video iki şeyi aynı anda söylüyor:

1. **Efektif risk: %0.3 / işlem** (30'un %1'i, 100 üzerinden)
2. **Yıllık hedef: %18 – 25**

**Hesap:** %0.3 riskle 3:1 ödemede, kazanan işlem başına +%0.9. %18 yıllık getiri için **20 kazanan işlem** gerekiyor — kayıplar sıfır varsayılırsa.

Gerçekçi bir isabet oranıyla (%40): 20 kazanan için ~50 işlem. Ama video aynı videoda diyor ki *"üst zaman diliminde yıl boyunca çok fazla işlem yok."*

**İki iddia bir arada tutmuyor.** Ya tahsis daha yüksek olmalı, ya getiri hedefi daha düşük, ya işlem sayısı çok daha fazla.

Bu, beş ayda kaydedilen **ikinci aritmetik tutarsızlık** (birincisi Ekim V4'ün %15/%16 hatasıydı) — ve bu daha önemli, çünkü sunumun merkezinde.

#### Doğru olan kısımlar

**Çekilme odağı doğru.** %15 yıllık çekilme gerçekten iyi bir hedef ve fon dünyasının standardıyla uyumlu.

**%18-25 yıllık getiri gerçekçi** — ve Ekim V3'ün "yılda %300" iddiasıyla arasındaki mesafe kayda değer. Seri kendi içinde düzeliyor.

**"Açık kâr realize kâr değildir"** — psikolojik olarak doğru ve önemli.

**"Düşük risk, daha fazla kurulum için sermaye bırakır"** — doğru ve seride nadir görülen bir portföy düşüncesi.

#### Ölçülebilirlik

**Ölçülebilir** — tahsis kuralı bir parametre, doğrudan ölçülür: *aynı sistem %100 ve %30 tahsisle koşturulursa, Sharpe ve maksimum çekilme nasıl değişir?*

Beklenen cevap: getiri ve çekilme **aynı oranda** düşer, Sharpe **değişmez.** Yani tahsis kuralı riski azaltıyor ama **verimliliği artırmıyor** — bir tercih meselesi, bir edge değil.

Video bunu bir avantaj olarak sunuyor; aslında bir **ölçek tercihi.**

#### Not

**Alınacak:** çekilme odağı, açık kâr/realize kâr ayrımı, %18-25 gerçekçilik çerçevesi.

**Dikkatli alınacak:** %30 tahsis. Faydası gerçek (psikolojik ve marj güvenliği) ama matematiksel bir edge değil — ve videonun kendi getiri hedefiyle çelişiyor.
:::

---

## Video 14 — Üst zaman dilimi PD array'lerinin tanımı

::: ders
**DERS**

Bu videoda grafik yok — hiyerarşi kuruluyor.

#### Sorun tanımı

> *"Fiyat bir destekten uzaklaşınca hepimiz yukarı hareket bekleriz. Ama sorun şu: hepimiz farklı sonuca varırız. **Kimisi eski bir dibi direnç görür, kimisi eski bir tepeyi, kimisi başka bir şeyi.** Bu belirsizliği kaldırmak için bir **hiyerarşiye** ihtiyacın var — bu ders o hiyerarşiyi öğretiyor."*

#### PD array — terim tanımı

**PD array = Premium/Discount array.** Videonun kısaltması: **PDA.**

Yani: order block, breaker, mitigation block, FVG, likidite boşluğu, rejection block, eski tepe/dip — **hepsi PD array.** Fark, bulundukları bölge:

| Bölge | Ne aranır |
|---|---|
| **İndirim (discount)** — dengenin altı | **Boğa** PD array'leri → alım |
| **Prim (premium)** — dengenin üstü | **Ayı** PD array'leri → satış |

#### İndirim PD array'leri — alım için

Videonun sıralı listesi:

1. **Mitigation block**
2. **Bullish breaker**
3. **Likidite boşluğu**
4. **Fair value gap**
5. **Bullish order block**
6. **Rejection block**
7. **Eski dip / tarihsel dip**

#### Prim PD array'leri — satış için ve hedef olarak

Simetriği:

1. **Mitigation block**
2. **Bearish breaker**
3. **Likidite boşluğu**
4. **Fair value gap**
5. **Bearish order block**
6. **Rejection block**
7. **Eski tepe / tarihsel tepe**

#### Hedef sıralaması — hiyerarşinin asıl işlevi

Bu, ayın en pratik katkısı. Bir indirim PD array'inden alım yaptıysan, hedefler **bu sırayla:**

| Sıra | Hedef |
|---|---|
| **1** | Mitigation block |
| **2** | Breaker (varsa) — *"onu geçecek güç var mı, tartılmalı"* |
| **3** | Doldurulacak likidite boşluğu |
| **4** | Prim bölgesindeki fair value gap |
| **5** | Bearish order block |
| **6** | Rejection block ve/veya eski tepe |

#### Denge kuralı — dengedeyken ne yapılır

> *"Piyasalar primde ya da indirimdeyken **her zaman önce yeniden dengelemeye** bakarlar — yani son aralığın **denge noktasına.** Derin bir indirimden alıp sadece dengeye kadar hedeflesen bile, **çok sayıda böyle işlem bulursun.**"*

**Ve dengedeyken:**

| Konum | Beklenti |
|---|---|
| **Primde** | Aylık PD array'e doğru hareket → satış fırsatı |
| **Dengede** | İki yön de mümkün → **aylık piyasa yapısına bak** |
| **İndirimde** | Aylık PD array'e doğru hareket → alım fırsatı |

Videonun uyarısı: *"Dengede rastgele zar atmıyoruz — o andaki fiyat aksiyonunun çevresindeki kriterlere bakmamız gerekiyor."*

#### Fraktallık

> *"Haftalık aralıklar için de **aynı PD array'ler** geçerli. Günlük için de aynı."*

#### Örnek yapının anlatımı

Video şematik olarak bir tam döngü anlatıyor:

1. Fiyat destekten yükselir → dirence çarpar
2. Geri çekilir → ikinci impuls bacağının dibi **destek** olur (bullish order block ya da alt zaman diliminde bir kısa vadeli tepe)
3. Fiyat tekrar dirence gider ve **failure swing** yapar
4. O failure swing'in dibi → **mitigation block** olur → satış fırsatı
5. Fiyat aşağı, likiditeyi alır, sonra tekrar bir order block'a döner → yeni satış
6. Ve döngü devam eder

Videonun vurgusu: *"Fiyat **indirimden prime, primden indirime** hareket eder. Kırmızı ve mavi çizgi uçlar; ortadaki **denge.**"*
:::

::: eleme
**ELEME**

#### Yazılabilir yapı — PD array hiyerarşisi

**Bu, beş ayın en değerli organizasyonel katkısı.**

Dört ay boyunca ondan fazla kavram dağınık verilmişti. Bu video onları **tek bir sıralı listeye** koyuyor, ve iki işlev veriyor:

1. **Giriş seçimi:** indirimdeysen boğa PD array'lerinden birini seç
2. **Hedef sıralaması:** prim PD array'lerini yakından uzağa hedefle

**Ve hedef sıralaması gerçekten yeni.** Dört ay boyunca "hedef nereye" sorusuna cevap verilmemişti; burada **altı kademeli sıralı bir liste** var.

#### Ölçülebilirlik açısından

**Kısmen.** Listenin her elemanı tek tek mekanik (Aralık ayında hepsi tanımlanmıştı). Ama:

**1. Sıralamanın gerekçesi yok.** Neden mitigation block breaker'dan önce? Video söylemiyor. Ve bu, ölçülebilir bir soru: *"PD array türüne göre hedefe ulaşma oranı farklı mı?"*

**2. "En yakın" mı "listede önce gelen" mi?** Video ikisini karıştırıyor. Fiyata en yakın PD array bir order block'sa ama listede beşinci sıradaysa, hangisi seçilecek?

**3. Denge kuralı yine döngüsel.** "Dengedeyken aylık piyasa yapısına bak" — ve aylık piyasa yapısı tanımı bu videoda yok.

#### Ve bir eksik: hiyerarşinin kendisi test edilebilir

Videonun sunduğu sıralama bir **iddia** — ve doğrudan ölçülebilir:

*"Bir kurulumdan sonra fiyat, listedeki hangi PD array türüne en sık ulaşıyor? Sıralama gerçekten bu mu?"*

Karşılaştırma grubu doğal: tüm PD array türleri, aynı veri, ulaşma oranı sayılıyor. **Tek koşuda cevaplanır.**

#### Not

**Bu video ölçülecek bir kural değil, bir organizasyon şeması.** Ama o şemanın kendisi bir hipotez içeriyor, ve o hipotez ucuz biçimde test edilir.

**Ve pratik değeri yüksek:** Aralık'ın yedi order block varyantı + Eylül'ün beş kavramı, burada tek bir listeye indirgeniyor. **Bölüm IV'teki sözlük bu listeyi temel alıyor.**
:::

---

## Video 15 — İşlem koşulları ve kurulum ilerleyişi

::: ders
**DERS**

Bu video, V13'te anılan **1.200 pip'lik** USD/JPY hareketini baştan sona çözüyor — aylıktan günlüğe.

#### Çalışma noktaları — önce kurallar

**1. Yeniden dengeleme her zaman ilk hedef.**

> *"Piyasalar primde ya da indirimdeyken **her zaman önce yeniden dengelemeye** bakarlar. Derin bir indirimden alıp sadece **dengeye** kadar hedeflesen bile, çok sayıda böyle işlem bulursun. Tarihsel zirvedeysen ya da yıllık/üç aylık tepedeysen, **son işlem aralığının denge noktasına** geri satış görme şansın yüksek."*

**2. Konum → beklenti tablosu:**

| Neredesin | Ne bekle |
|---|---|
| **Primde** | Aylık PD array'e hareket → satış fırsatı |
| **Dengede** | İki yön de mümkün — **aylık piyasa yapısına bak** |
| **İndirimde** | Aylık PD array'e hareket → alım fırsatı |

#### Örneğin çözümü — USD/JPY, aylıktan günlüğe

**AŞAMA 1: Nakit JPY günlük grafiği — bağlamı kur**

- Ağustos 2016'da tepe
- Bir kısa vadeli dip kırılıyor → **piyasa yapısı ayı yönlü kaydı**
- Trump seçim rallisi bir **bearish order block**'a çıkıyor, oradan satış

**Ve çeviri uyarısı:** JPY nakit fiyatı düşerse USD/JPY paritesi **yükselir** — dolar önde olduğu için.

**AŞAMA 2: USD/JPY aylık grafik — aralığı çiz**

| Kalem | Değer / gerekçe |
|---|---|
| Aşağıda **eşit dipler** | Satış stopları |
| **Bullish order block** | Ardışık **iki düşüş mumu**, gövdeleri birleştirilmiş |
| Denge noktası | Yuvarlanıyor: **99.00** |
| Yukarıda | Prim bölgesi |

**İndirim seviyesinin gerekçesi:** fiyatın oradan uzaklaştığı yer. Ve **yukarı bir gap** bırakılmış — fiyat sadece yukarı sunulmuş, aşağı hareket yok.

**AŞAMA 3: Aylık rejection block**

Kasım 2016 mumu, aşağıdaki mumların **gövdelerinin altına** iniyor, sonra reddedip yükseliyor. → **rejection block.**

**AŞAMA 4: Aylık breaker**

Bir eski tepe var. Fiyat üstüne çıkıp alım stoplarını temizliyor, sonra aşağı kırılıyor. Kırılımdan önceki **düşüş mumu** → **breaker.** Mean threshold'u seviye olarak işaretleniyor.

**Ve bir aylık gap:** bir mumun dibi ile diğerinin tepesi arası, sadece aşağı sunulmuş → yukarı hedef.

**AŞAMA 5: Haftalık grafik**

- **Bearish order block:** düşüş hareketinden önceki son yükseliş mumu. **Açılışı** kullanılıyor, fitili değil.
  - Gerekçe: *"Gap yok — o küçük alan **iki kez** işlem gördü, kapandı. Dolayısıyla fair value gap sayılmaz."*
- **Fair value gap:** bir mumun dibi ile diğerinin tepesi arası → hedef
- **Bullish order block:** düşüş hareketinden önceki son düşüş mumu → giriş. **Kasım dibi tam buraya oturuyor.**
- **Rejection block adayları:** eşit gövde tepeleri → yukarı hedefler

**AŞAMA 6: Günlük grafik — iki haftalık order block**

Video haftalıktan **iki** bullish order block taşıyor: bir alt, bir üst. Fiyat **ikisine de** dokunuyor, ve alt olana **iki kez** — sonra yukarı patlıyor.

**Günlük hedefler:**

| Seviye | Ne |
|---|---|
| Eski tepeler, eşit tepeler | Alım stopları |
| Bir FVG | Haftalıktan gelen |
| **118.55** | Son yükseliş mumunun dibi — prim PD array |

**AŞAMA 7: Yönetim kuralı**

> *"Yükseliş trendinde **her zaman düşüş mumlarına odaklan** — kurumlar orada alır. Ya mumun oluştuğu anda alırlar (genelde böyledir), ya da fiyat daha sonra o mumla döndüğünde."*

#### Sonuç

**1.200 pip**, indirimden prime.
:::

::: eleme
**ELEME**

#### Bu video, ayın tek tam örnek çözümü

Ve **yapı olarak doğru:** aylıktan haftalığa, haftalıktan günlüğe. Her adımda seviye taşınıyor, ve hedef sıralaması V14'ün hiyerarşisini izliyor.

#### Yazılabilir kural — yeniden dengeleme hedefi

> *"Derin bir indirimden alıp sadece **dengeye** kadar hedeflesen bile, çok sayıda böyle işlem bulursun."*

**Bu, ölçülebilir ve iddialı bir hipotez.** Ve hedef tanımı tartışmasız: son aralığın orta noktası.

**Karşılaştırma grubu doğal:** aynı girişler, farklı hedefler (denge vs prim array). Hangisi daha yüksek ort. R veriyor?

Ve senin **fat-tail bulgunla doğrudan ilişkili:** sabit ve yakın bir hedef (denge), sağ kuyruğu keser ama isabeti yükseltir. Ölçmeden hangisinin iyi olduğu bilinemez.

#### İkinci yazılabilir ayrıntı — FVG geçerlilik testi

Video bir yerde şunu yapıyor: bir aralığın FVG **olmadığını** söylüyor, çünkü *"o alan iki kez işlem gördü, kapandı."*

**Bu, FVG tanımına bir geçerlilik koşulu ekliyor** ve mekanik: aralık daha önce ters yönde işlem gördüyse FVG değildir. Aralık V12'nin tanımında örtük olan şey burada açık hale geliyor.

#### Ama örnek yine geriye dönük

**On beş civarı seviye işaretleniyor**, hepsi sonuç bilinerek. Ve hangisinin hedeflendiği sonradan belli oluyor.

Videonun kendi hedef sıralaması (V14) burada uygulanmıyor: örnekte **altı ayrı yukarı hedef** var ve hangisine öncelik verileceği söylenmiyor.

#### Ölçek sorunu — ve bu kez tersine

Aralık'ta 2 piplik FVG'ler sorundu. Burada tersi: **1.200 pip'lik tek bir hareket**, aylık grafikte. Örneklem: **bir.**

Ve bu, uzun vadeli işlemin yapısal sorunu — video V13'te kendisi de kabul ediyor: *"yıl boyunca çok fazla işlem yok."*

#### Ölçülebilirlik

**Kısmen.** Seviye tanımlarının hepsi mekanik (Aralık'ta tanımlanmıştı). Ama:
- Aralığın başlangıcı (hangi tepe, hangi dip) tanımsız
- Altı hedef arasında seçim kuralı yok
- Örneklem bir

**Ölçülebilir olan tek bileşen:** yeniden dengeleme hedefi. O tek başına, çok sayıda kurulumda test edilir.
:::

---

## Video 16 — Stop emriyle giriş

::: ders
**DERS**

#### Alım — dört koşul

Videonun tam listesi:

1. **Aylık ve/veya haftalık**, kurumsal emir akışının **günlük fiyatın ÜSTÜNDE** bir PD array aradığını göstermeli
   — yani üstte bir bearish order block, FVG ya da başka bir prim array olmalı
2. Günlük grafik bir **düşüş mumu** basmalı
3. **Mum KAPANMIŞ olmalı** — *"mum oluşurken geçerli değildir"*
4. **Alım stop emri, o düşüş mumunun AÇILIŞ fiyatına** konur

#### Mantık — order block teorisiyle bağlantısı

> *"Düşünsene: **düşüş mumu bir bullish order block'tur.** Fiyat o mumdan uzaklaşıp sonra açılışına geri dönerse, bu da gelecekte bir uzun giriş noktasıdır. Burada yaptığımız şey **güçten satın almak** — fiyat açılışın üstüne çıkarsa köşe dönülmüş demektir."*

**Ve dolum kuralı:** açılışın üstüne çıkmazsa **dolum olmaz.** O zaman: *"Yeni bir düşüş mumu bekle ve emri onun açılışına taşı. Her yeni düşüş mumunda **bir işlem günü ileri** taşırsın."*

#### Satış — simetriği

1. Aylık/haftalık, günlük fiyatın **ALTINDA** bir PD array aramalı
2. Günlük grafik bir **yükseliş mumu** basmalı
3. Mum **kapanmış** olmalı
4. **Satış stop emri, o yükseliş mumunun AÇILIŞ fiyatına** konur

Mantık aynı: yükseliş mumu bir **bearish order block**'tur, ve açılışından satış yapmak o order block'a dönüşle aynı şey.

#### Kritik uyarı — her düşüş mumu değil

> *"Herhangi bir eski düşüş mumunu almıyorsun. **İndirim piyasasındaki PD array'lere** bakıyorsun. Ya da uzun vadeli bir yükseliş trendindeysen, **her düşüş mumu akıllı para için yeni bir alım fırsatı** yaratır."*

#### Piramitleme prosedürü

Video bir pozisyon büyütme yöntemi veriyor:

1. Alım stopu tetiklendi, uzunsun
2. **Birkaç yüz pip** lehine hareket etti
3. **Bir kısmını kapat** (kısmi kâr)
4. Fiyat **aynı açılış fiyatına** geri dönerse
5. **Kapattığın kısmı aynı fiyattan geri koy**
6. Sonuç: *"aynı ortalama maliyeti** elde edersin"

Ve tekrar edilebilir: *"Her yeni düşüş mumunda aynı kavram ileri taşınır — ta ki aylık/haftalık PD array'e ulaşana kadar."*

#### Ölçek uyarısı — ve bu önemli

> *"Aylık ve haftalık aralıkta **yükseldikçe ve prim bölgesine yaklaştıkça**, bu mumlar güçlü alımı **daha az** teşvik eder. Dikkatli ol — tercihen **dengede ya da altında** alıyor ol."*

#### Örneğin çözümü

Video günlük bir grafikte adım adım gösteriyor:

| Adım | Ne oldu |
|---|---|
| 1 | Düşüş mumu → açılışına alım stopu → **dolum yok** (kaçırılan fırsat) |
| 2 | Yeni düşüş mumu → açılışına stop → **sonraki yeşil mum daha düşük açtı** → tetiklendi, uzunsun |
| 3 | Yeni düşüş mumu → yeni stop → tetiklendi |
| 4 | **Üç ardışık düşüş mumu** → ortadakinde dolum, ve diğer ikisi de eklenebilir |

**Stop yerleşimi:** *"Stop-loss'un günlük grafikte en son oluşan **salınım dibinin altında** olacak — ve derste 8'de anlatılacak belirli bir referans noktasının altında."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — tamamen mekanik

Dört koşulun üçü tartışmasız:
- Günlük mum **kapanmış** olmalı (zaman koşulu, mekanik)
- Mum **düşüş** kapanışlı olmalı (aritmetik)
- Emir **açılış fiyatına** konur (tek bir sayı)

**Tek tanımsız bileşen:** birinci koşul — üstte bir PD array olması. Ve o, **kenarda:** üst zaman dilimi yönünü sabit bir kuralla (ör. Kasım V4'ün aylık order block'u ya da Ocak V2'nin ara vadeli tepe ölçütü) doldurursan zincir kapanır.

**Bu, beş ayın en mekanik giriş kuralı.** Sıfır grafik yorumu içeriyor.

#### Ve order block teorisiyle tutarlı

Videonun kendi gözlemi doğru: **düşüş mumunun açılışından alım, bullish order block girişiyle aynı şey.** Yani bu, dört ayın order block tanımının **günlük mum ölçeğinde otomatikleştirilmiş** hali.

Ve bu, ölçüm açısından değerli: order block'un "hangi mum" problemi ortadan kalkıyor — **her düşüş mumu bir aday.**

#### Ölçmeye değer hipotez, çok net

*"Yükseliş trendinde, her günlük düşüş mumunun açılışına alım stopu koymak pozitif ort. R üretiyor mu?"*

Ve varyantları:
- Trend filtresiyle vs filtresiz
- Denge altında vs prim bölgesinde (videonun kendi uyarısı)
- Stop emri vs limit emri (V17 ile karşılaştırma)

**Örneklem bol:** günlük grafikte her düşüş mumu bir gözlem. On yıllık veride yüzlerce.

#### Zayıf noktalar

**Stop mesafesi bu videoda yok** — V18'e erteleniyor. Yani R hesabı yapılamıyor.

**Piramitleme kuralının matematiği eksik.** "Kapattığın kısmı aynı fiyattan geri koy → aynı ortalama maliyet" — bu doğru ama **komisyon ve spread iki kez ödeniyor.** Video bunu hesaba katmıyor, ve senin maliyet bulgun tam bu noktada geçerli.

**"Prim bölgesine yaklaştıkça daha az teşvik eder"** — uyarı doğru ama eşik yok. Denge altı/üstü ikili bir ayrım olarak kullanılabilir.

#### Ölçülebilirlik

**Ölçülebilir.** Giriş kuralı tamamen mekanik, örneklem bol, karşılaştırma grubu doğal.

**Ayın en kolay ölçülen kuralı** — ve V17 ile birlikte tek koşuda test edilir.
:::

---

## Video 17 — Limit emriyle giriş

::: ders
**DERS**

#### Alım — dört koşul

V16'nın aynısı, tek fark **emrin yeri:**

1. Aylık/haftalık, günlük fiyatın **üstünde** bir PD array aramalı
2. Günlük grafik bir **düşüş mumu** basmalı
3. Mum **kapanmış** olmalı
4. **Alım limit emri, o düşüş mumunun KAPANIŞ fiyatına** konur

**Fark özeti:**

| Emir türü | Nereye |
|---|---|
| **Stop** (V16) | Düşüş mumunun **AÇILIŞ**ı |
| **Limit** (V17) | Düşüş mumunun **KAPANIŞ**ı |

#### Mantık

> *"Ertesi gün mum açtığında, fiyatın o düşüş mumunun kapanışının **altına** inmesini bekliyoruz. Yaptığımız şey **derinden değersizlenmiş bir fiyattan almak** — hiçbir gösterge gerekmeden zaten aşırı satım olacak. **Çok çok derin bir indirimden** alıyorsun."*

Ve iddia: *"Girişleri ne kadar keskin yakaladığını göreceksin. O kadar derinde ki, günlük bazda bile **neredeyse anında** doğru tarafta olduğunun geri bildirimini alıyorsun."*

#### Satış — simetriği

Yükseliş mumunun **kapanışına** satış limit emri. *"Aşırı değerlenmiş / aşırı alım koşulundan satış yapıyorsun."*

Ve videonun ek notu: *"Gün içi işlemlere baktığında bunun çoğu zaman **Judas swing** olduğunu göreceksin — açılır, Londra'da tepeyi yapar, sonra satılır."*

#### Kritik uyarı — tekrarlanıyor

> *"Herhangi bir yükseliş mumundan gelişigüzel satmıyorsun. Bu koşullar **günlük bir PD array'le hizalandığında** en iyi çalışır: bearish order block, kapatılan bir gap, doldurulan bir boşluk, eski bir tepenin üstüne çıkış, ya da eski bir tarihsel dibe dönüş."*

#### Örneğin çözümü — USD/JPY, sayısal

Bu, ayın en somut sayısal örneği. Aynı 1.200 pip'lik hareketin içinde **altı ayrı giriş:**

**Bağlam:**
- **Haftalık bullish order block:** 100.00 civarı → indirim
- **Haftalık bearish order block:** 118 – 119 civarı → prim hedefi

**Girişler ve sonuçları:**

| # | Ne zaman | Hedefe kadar |
|---|---|---|
| 1 | **Eylül 2016** — Ağustos order block'una dönüş | **1.800 pip** |
| 2 | **~17 Kasım** | **980 pip** |
| 3 | Sonraki düşüş kapanışı | **785 pip** |
| 4 | Sonraki | **600 pip** |
| 5 | Sonraki | **500 pip** |
| 6 | PD array'e ulaşmadan hemen önceki son | **360 pip** |

Videonun vurgusu: *"Beş örnek burada, ve muhtemelen heyecan verici görünmüyor — ama **iki slayt sonra** ne kadar önemli olduğunu göreceksin."*

Ve: *"980 pip'lik hareket, **denge fiyat çubuğunun hemen altından** başlıyor. Denge noktasının üstünde bile birkaç yüz pip alabileceğin çok fırsat vardı."*

#### Stop vs limit — videonun karşılaştırması

| | Stop emri | Limit emri |
|---|---|---|
| **Dolum olasılığı** | **Yüksek** | Düşük — fiyat talep ettiğin seviyeye gelmeyebilir |
| **Giriş kalitesi** | Daha kötü (güçten alıyorsun) | **Daha iyi** (derin indirimden) |
| **Stop mesafesi** | Daha geniş | Daha dar |

*"Hangisini seçeceğin sana kalmış."*
:::

::: eleme
**ELEME**

#### Yazılabilir kural — V16'nın simetriği

Tek fark: emir açılış yerine **kapanışa** konuyor. Aynı derecede mekanik.

**Ve ikisi birlikte tek bir ölçüm tasarımı veriyor:**

*"Aynı sinyalde (günlük düşüş mumu + üstte PD array), açılışa stop emri ile kapanışa limit emri arasında ort. R farkı var mı?"*

Karşılaştırma **doğrudan** — aynı mumlar, iki farklı giriş fiyatı. Tek koşuda cevaplanır.

**Beklenen sonuç:** limit emri daha iyi giriş verir ama daha az dolum. Yani ort. R yüksek, işlem sayısı düşük. Hangisinin toplam getiriyi büyüttüğü ölçülmeden bilinemez — ve bu, gerçekten bilgilendirici bir soru.

#### Sayısal örnek — ama tek yönlü

Altı giriş, altısı da kazançlı, 360-1.800 pip arası. **Hiç kaybeden gösterilmiyor.**

Ve bu, hareketin **içinden** seçilmiş altı nokta. Aynı dönemde kaç düşüş mumu oluştu ve kaçında dolum olmadı — söylenmiyor.

**Doğru ölçüm:** o dönemdeki **tüm** düşüş mumlarını al, dolum olanları say, sonuçları hesapla. O zaman gerçek isabet oranı çıkar.

#### Kavramsal bir sorun

Video *"derin indirimden alıyorsun"* diyor. Ama günlük bir düşüş mumunun kapanışı, **o mumun en düşük noktası değil** — dibi daha aşağıda. Yani "en derin" giriş değil.

Ve daha önemlisi: **düşüş mumunun kapanışı, ertesi günün açılışına çok yakındır.** Yani limit emri çoğu zaman **açılışta** dolar — bu, bir giriş tekniğinden çok bir açılış fiyatı girişidir.

Bu ölçülebilir: *"limit emri dolumlarının kaçı ertesi günün ilk mumunda gerçekleşiyor?"*

#### Ölçülebilirlik

**Ölçülebilir.** V16 ile aynı yapı, aynı örneklem, ve karşılaştırma bedava.

#### Not

**V16 ve V17 birlikte, ayın en test edilebilir çıktısı.** İkisi de mekanik, ikisi de bol örneklemli, ve aralarındaki karşılaştırma gerçek bir soruya cevap veriyor: **stop emri mi limit emri mi?**

Senin harness'ında bu, tek bir parametre: giriş fiyatı = `open` ya da `close`.
:::

---

## Video 18 — Pozisyon işlem yönetimi

::: ders
**DERS**

Bu, ayın kapanış videosu ve **on yedi videoyu tek bir prosedüre bağlıyor.**

#### Boğa koşulları — tam prosedür, dokuz adım

**1. Mevsimsel eğilim.**
Önümüzdeki üç-dört ay için hangi boğa mevsimselliği bekleniyor? *(Ve her seferindeki uyarı: panzehir değil, yol haritası.)*

**2. Piyasalar arası teyit.**
Mevsimselliğin gerçekleşmesi için **teknik bir tablo** var mı?

> *"Teknikler mevsimsellikle uyumlu değilse, **mevsimsellik fiyatı sürüklemez.** Ama uyumluysa çok güçlü bir ikili."*

Bakılacaklar: dört varlık sınıfı (hisse, faiz, emtia, döviz). *"Dördünden **üçü** senin yön eğilimini doğruluyorsa, muhtemelen iyi bir işlem fikrin var."*

**3. Faiz getirileri.**
Getiriler artıyor mu? Artıyorsa işlem yaptığın para birimi için iyi. **Getirilerde ayrışma** varsa, mevcut yönde bir kayma ya da duraklama gelebilir.

**4. Aylık ve haftalık PD array'ler.**
Üst zaman diliminde kurumsal emir akışının **nereye gitmek istediğini** belirle.

**5. Günlük grafikte çeyreklik kayma.**
Üç-dört ayda bir yeni fiyat bacağı ara.

> *"**Mutlak dibi ya da mutlak tepeyi yakalamaya çalışmıyoruz.** Çeyreklik kaymaya senkronize olup **ortadaki eti** almaya çalışıyoruz."*

**6. Günlük PD array'lerle kurulumu çerçevele.**
Order block, boşluk, gap, rejection block, eski tepe/dip.

**7. Giriş türünü seç: stop mu limit mi.**

| | Stop | Limit |
|---|---|---|
| Dolum | **Daha sık** | Kaçırma riski |
| Giriş–stop mesafesi | **Daha geniş** | Daha dar |

**8. Risk: işlem başına en fazla %1.**

> *"Büyük pozisyonlar alıyorsun — **zaman açısından**, tahsis açısından değil. **Hesabının küçük bir kısmıyla büyük hareketler** arıyorsun."*

**9. Stop yönetimi — ve burada ayın en özgün kuralı var.**

#### Trailing stop kuralı — IPDA veri aralığına bağlı

Bu, V1'in 20/40/60 gün fikrinin **risk yönetimine** uygulanması:

| İlerleme | Stop nerede |
|---|---|
| **Girişten – hedefin %50'sine** | **Son 40 işlem gününün en düşük dibinin** altı |
| **Hedefin %75'inden sonra** | **Son 20 işlem gününün en düşük dibinin** altı |

**Gerekçe — mekanik ve ikna edici:**

> *"Neden son 40 işlem gününün dibi? Çünkü **yükseliş hareketi arıyorsak, piyasa muhtemelen 40 işlem günü geriye gidip o dibi bulmak istemeyecek** — son 40 günün **tepelerini** arayacak. Yani takip eden stop'un mevcut fiyatın **çok gerisinde** olur, ve seni oradan çıkarmak için **çok büyük** bir hareket gerekir."*

Ve neden %75'te daralıyor: *"Nihai hedefe çok yaklaştın ve **oraya hiç ulaşmayabilir.** Mümkün olduğunca çok kârı kilitlemek istiyorsun. Optimal trade entry gibi düşün — hareketin %79'unu yapıp sonra ters dönebilir."*

#### Breakeven yasağı — açık ve net

> *"Stop'unu başabaşa taşımak için **acele etme** — uzun vadeli işlemde **başabaş, düşünülebilecek en kötü şeydir.** Onu yapmak istemezsin."*

#### Ayı koşulları — simetriği

Tüm adımlar aynı, sadece yönler ters. Trailing stop: **son 40 işlem gününün en yüksek tepesinin üstü**, sonra **son 20 günün en yüksek tepesinin üstü.**

Ve haritalanacaklar: eski dipler, bullish order block'lar, aşağıdaki likidite boşlukları, aşağıdaki FVG'ler, mitigation block'lar, breaker'lar.

> *"Bunlar ya **hız kesiciler** olacak ya da bir sonraki bacağımız için **roket yakıtı.** İkisini de önceden haritalarsan sürpriz olmazsın."*

#### Videonun kapanış uyarısı

> *"Uzun vadeli kurulumları bu kadar sabırla bekleyip sonra **erken stop olmak** — olabilecek en kötü şey bu. Sonra korkarsın, bir daha girmezsin, ve hareket sensiz gider. **Üst zaman diliminde dar stop'a ihtiyacın yok** — aslında geniş stop daha iyidir."*
:::

::: eleme
**ELEME**

#### Ayın en değerli çıktısı — tam sistem

**Beş ayda ilk kez, uçtan uca bir prosedür veriliyor.** Dokuz adım, ve her adım bir önceki videoya bağlanıyor.

Ve yapı doğru: **makro → rejim → seviye → giriş → risk → yönetim.** Bu, bir işlem sisteminin standart iskeleti.

#### Yazılabilir kural — 40/20 günlük trailing stop

**Ayın en özgün ve en ölçülebilir risk kuralı.**

| İlerleme | Stop |
|---|---|
| < %50 | Son **40 günün** dibinin altı |
| > %75 | Son **20 günün** dibinin altı |

**Neden güçlü:**
- **Sıfır seçim noktası.** Gün sayısı ve fiyat, ikisi de tartışmasız
- **Gerekçesi mekanik ve içsel tutarlı:** 20/40/60 gün fikrinin risk tarafına uygulanması
- **Yanlışlanabilir:** ölçtüğünde ya daha iyi çıkar ya çıkmaz
- **Karşılaştırma grubu doğal:** sabit ATR stopu, chandelier exit, sabit R stopu

Ve bu, **senin `stop_buf_atr` taramana doğrudan bir alternatif** — ve muhtemelen daha iyisi, çünkü ATR'ye değil **yapıya** bağlı.

#### İkinci değerli kural — breakeven yasağı

> *"Uzun vadeli işlemde başabaş, düşünülebilecek en kötü şeydir."*

**Ve bu, senin `#018` bulgununla birebir aynı.** Sen ölçtün: kazananı 0R'de kesip kaybedeni −1R'de bırakan yapı sıfır edge üretiyor. Video aynı sonuca sezgiyle varıyor.

**Ama dikkat:** Ekim V3 tam tersini söylüyordu — *"ikinci hedeften sonra stopu başabaşa çek."* Serinin kendi içinde çelişkisi, ve bu ayki hali doğru.

#### Üçüncü kural — "ortadaki eti al"

> *"Mutlak dibi ya da tepeyi yakalamaya çalışmıyoruz."*

Basit ama önemli, ve **beş ayın en dürüst hedef beklentisi.**

#### Zayıf noktalar

**Dokuz adımın ilk üçü ölçülemez.** Mevsimsellik (V10-V12: veri doğrulanamaz), piyasalar arası teyit (V9: gecikme tanımsız), faiz ayrışması (V7: mevsimselliğe bağlı).

**Ve bu, filtre yığını problemi.** Ekim V6'nın yedi bileşenli sistemiyle aynı yapı: adım sayısı arttıkça işlem sayısı düşüyor, ve düşen işlem sayısı senin Aşama 1 RET'inin sebebiydi.

**"Dördünden üçü uyuşsun"** — eşik verilmiş ama "uyuşma" ölçüsü tanımsız.

**Hiç grafik örneği yok** — sadece prosedür. Dürüst (geriye dönük seçim yok) ama hiçbir sayı da yok.

#### Ölçülebilirlik

**Sistem olarak: ölçülemez.** İlk üç adım doğrulanamaz veriye dayanıyor.

**Ama bileşenler ayrı ayrı ölçülebilir, ve ikisi öncelikli:**

1. **40/20 günlük trailing stop** — tek başına, herhangi bir giriş kuralıyla test edilir
2. **Breakeven yasağı** — zaten senin bulgunla uyumlu, teyit değeri var

#### Not

**Prosedürün adım 4'ten 9'a kadarki kısmı tamamen mekanik** ve tek başına bir sistem oluşturuyor:

> Aylık/haftalık PD array → günlük çeyreklik kayma → günlük PD array → stop/limit giriş → %1 risk → 40/20 gün trailing stop

**İlk üç adımı çıkar, geriye kodlanabilir bir sistem kalıyor.** Ve o sistem, beş ayın en eksiksiz çıktısı.
:::

---

# BÖLÜM II — Beşinci ayın bütünü

## Ölçülebilirlik tablosu

| Video | Kavram | Değerlendirme |
|---|---|---|
| V1 | 20/40/60 günlük veri aralıkları | **Kısmen** — pencereler mekanik, başlangıç noktası değil |
| V2 | Yön tespiti (ardışık ara vadeli tepe/dip) | **Ölçülebilir** |
| V2 | Beş katmanlı likidite haritası | **Ölçülebilir** |
| V3 | Açık pozisyon filtresi | **Ölçülebilir** (eşik gerekli) |
| V4 | 20 günlük likidite havuzları | **Ölçülebilir** |
| V5 | Breaker salınım noktası | **Ölçülebilir** |
| V5 | "İki tür salınım noktası" | **Totoloji** |
| V6 | Tandem/ayrışma rejim testi | **Ölçülebilir** |
| V7 | Çatlayan korelasyon doğrulaması | **Ölçülebilir** |
| V8 | Faiz farkı (carry) | **Ölçülebilir** |
| V9 | Piyasalar arası ilişkiler | **Kısmen** — ilişkiler gerçek, sistem tanımsız |
| V10 | Boğa mevsimselliği | **Ölçülemez** |
| V11 | Ayı mevsimselliği | **Ölçülemez** |
| V12 | Eşleştirilmiş mevsimsellik | **Ölçülemez** |
| V13 | %30 tahsis kuralı | **Ölçülebilir** (ama edge değil, tercih) |
| V14 | PD array hiyerarşisi | **Kısmen** — sıralama iddiası test edilebilir |
| V15 | Yeniden dengeleme hedefi | **Ölçülebilir** |
| V16 | Stop emriyle giriş | **Ölçülebilir** |
| V17 | Limit emriyle giriş | **Ölçülebilir** |
| V18 | 40/20 günlük trailing stop | **Ölçülebilir** |
| V18 | Dokuz adımlı sistem (bütün olarak) | **Ölçülemez** — ilk üç adım doğrulanamaz |

**Ölçülebilir: 12 · Kısmen: 3 · Ölçülemez: 5 (biri totoloji)**

Beş ayın en yüksek mutlak sayısı — ama aynı zamanda **en büyük ölçülemez bloğu** (üç mevsimsellik videosu).

## Ayın üç yeni kategorisi

Beş ay boyunca her şey fiyat grafiğinden türüyordu. Ocak üç yeni girdi ekliyor:

**1. Zaman.** Çeyreklik kayma ve 20/40/60 günlük veri aralıkları. **Ve bu, ayın en sağlam kategorisi** — takvim ve gün sayısı tartışılmaz. Bir tarihi ve bir sayıyı yanlış yorumlayamazsın.

**2. Büyüklük (open float).** Hangi tarafta ne kadar emir birikmiş. Beş katmanlı likidite haritası (haftalık, aylık, 3 aylık, 6 aylık, 12 aylık) tamamen mekanik.

**3. Fiyat dışı veri.** Merkez bankası faizleri, 10 yıllık getiri, açık pozisyon, piyasalar arası ilişkiler, mevsimsellik. **Dördü sağlam, biri (mevsimsellik) doğrulanamaz.**

## Ayın en zayıf bloğu: mevsimsellik

Üç video, on sekizin altıda biri. Ve problem, seride alışılmış olandan farklı:

| Alışılmış problem | Mevsimselliğin problemi |
|---|---|
| İddia yanlış | **İddia yanlış değil** |
| Tanım belirsiz | **Tanım net** (belirli tarihler) |
| — | **Veri doğrulanamaz** |

Üç ayrı sorun:

1. **Hesaplama yöntemi gizli** — rollover, ölçekleme, aykırı yıl temizliği. Hiçbiri gösterilmiyor. Yönergenin *"40 yıllık mevsimsel ortalama bir hesaplama tercihidir"* uyarısı tam bunu işaret ediyor.
2. **Örneklem yetersiz** — 40 yıl = 40 gözlem; NZD için 19. Senin 100 işlem eşiğinin çok altında.
3. **Bağımsız olmayan doğrulama** — 15 yıllık ortalama, 40 yıllığın alt kümesi. İkisinin uyuşması **tanım gereği** beklenir, teyit sayılamaz. Aynı şekilde, dolar endeksi mevsimselliği ile EUR mevsimselliğinin zıt olması, endeksin %58'i EUR olduğu için aritmetik zorunluluk.

**Ama video kendisi de bunu zayıflatıyor:** üç videoda da *"altta yatan piyasa zaten o yönde eğilimliyse"* şartı tekrarlanıyor. Bu, mevsimselliğin tek başına yetmediğinin açık kabulü.

## Ayın iç çelişkileri

| Konu | Bir yerde | Başka yerde |
|---|---|---|
| **Veri aralıklarının işlevi** | V1/V3: "tepeyi çağırmaz, arama alanıdır" | V1: "60 günlük projeksiyon tam tepeyi işaretledi" |
| **Breakeven** | V18: "en kötü şey" | (Ekim V3): "ikinci hedeften sonra başabaşa çek" |
| **Getiri hedefi ve tahsis** | V13: %30 tahsis, %1 risk | V13: yılda %18-25 hedef |
| **Fitil/gövde** | V7: "seçim fitilini yok say" | V4: "gövdelerin altına bak" |

**Üçüncüsü aritmetik bir tutarsızlık** ve kaydedilmeli: efektif %0.3 risk ile 3:1 ödemede, yıllık %18 için ~20 kazanan işlem gerekiyor — ama aynı video "uzun vadede çok fazla işlem yok" diyor. İki iddia bir arada tutmuyor.

## Açılış ve kapanış argümanının karşılaştırması

**V1'in açılışı:**
> *"Piyasalar %100 mühendislik ürünü. Rastgele olsaydı bu kadar kesin olamazdım."*

Kanıt: kayıtsız isabet iddiası.

**V18'in kapanışı:**
> *"Mutlak dibi ya da tepeyi yakalamaya çalışmıyoruz. Ortadaki eti alıyoruz."*

**Ay, kendi açılış iddiasından geri adım atarak bitiyor** — ve kapanıştaki tavır daha savunulabilir. Bu, seride ilk kez görülen bir ton düzelmesi.

## Beş ayın toplamı

| Ay | Karakter | Ölç. / Kıs. / Ölçülemez |
|---|---|---|
| **1 (Eyl 2016)** | Kurulum kavramları — sekiz tanım, yedisinin klasik karşılığı var | 6 / 2 / 3 |
| **2 (Eki 2016)** | Para yönetimi — doğru ama metoda özgü değil | 7 / 1 / 2 |
| **3 (Kas 2016)** | En ölçülebilir fikirler kavram yığınıyla iç içe; yön ilk kez mekanik | 6 / 4 / 1 |
| **4 (Ara 2016)** | Tam tanımlar — order block ailesinin tamamı, ilk sayısal eşikler | 7 / 5 / 2 |
| **5 (Oca 2017)** | Yeni kategoriler (zaman, büyüklük, fiyat dışı veri) + ilk tam sistem + en zayıf blok | **12 / 3 / 5** |

## Elli beş videoda hâlâ geçmeyen cümle

> *"Bunu şu kadar örnekte ölçtük, şu oranda çalıştı."*

Beş ay, elli beş video, sıfır istatistik.

**Ve bu ay bunun resmî cevabı verildi.** V10'un açılışı:

> *"Mevsimsel eğilimler geçmiş performansın yol haritasıdır. Geçmişte bir şey yapmış olması, gelecekte aynısını yapacağını **hiçbir şekilde garanti etmez.**"*

Doğru bir uyarı — ama aynı zamanda **kanıt sunmama gerekçesi** olarak işliyor. "Garanti yok" ile "hiç ölçmedim" arasında büyük fark var, ve video ikisini birbirinin yerine kullanıyor.

---

# BÖLÜM III — Değerlendirme

## Ölçmeye değer dokuz fikir, öncelik sırasıyla

**1. Tandem/ayrışma rejim testi (V6).**
İki bağımsız kamuya açık seri, mekanik karşılaştırma, **yasaklayıcı bileşen.** Ve senin RET sonucuna doğrudan bağlanıyor: *sistemin ölçüldüğü dönem tandem miydi?*
Kripto: BTC ↔ dolar endeksi, ya da BTC ↔ ABD 10 yıllık getiri.

**2. 40/20 günlük trailing stop (V18).**
Sıfır seçim noktası, gerekçesi içsel tutarlı, `stop_buf_atr` taramana doğrudan alternatif. Karşılaştırma grubu doğal.

**3. Stop vs limit giriş (V16 + V17).**
Tek parametre farkı: giriş = `open` ya da `close`. Bol örneklem, doğrudan karşılaştırma, ve gerçek bir soruya cevap veriyor.

**4. Yön tespiti — ardışık ara vadeli tepe/dip (V2).**
`htf_bias` tanımına alternatif. EMA200 yerine "son üç ara vadeli tepe düşüyor mu". Her pivotta bir gözlem.

**5. 20/40/60 günlük likidite havuzları (V1 + V4).**
Takvim tartışılmaz. Hipotez: *son 20/40/60 günün tepe ve dipleri, rastgele seviyelerden daha sık tepki üretiyor mu?* **Başlangıç noktası gerektirmiyor** — doğrudan ölçülür.

**6. Yeniden dengeleme hedefi (V15).**
*"Derin indirimden al, sadece dengeye kadar hedefle."* Hedef tanımı tartışmasız, ve senin fat-tail bulgunla doğrudan ilişkili.

**7. Breaker salınım noktası (V5).**
Aralık V5'in daha dar versiyonu: **başarısız ilk deneme** ek koşulu. Karşılaştırma grubu doğal.

**8. Açık pozisyon filtresi (V3 + V4).**
Fiyattan bağımsız, kamuya açık. Eşik: %15 düşüş. Kripto: perpetual futures açık pozisyonu + funding.

**9. Faiz farkı / carry (V8).**
Mekanizması akademik olarak belgelenmiş. **Ama kuyruk riskini ayrıca ölç** — carry'nin bilinen özelliği sola çarpıklık.

## Ölçmeye değmeyen beşi

**Mevsimsellik (V10, V11, V12)** — veri doğrulanamaz, örneklem yetersiz, kalite ölçütü döngüsel.

**"İki tür salınım noktası" (V5)** — totoloji; ya geçti ya geçemedi.

**Dokuz adımlı sistem, bütün olarak (V18)** — ilk üç adım doğrulanamaz veriye dayanıyor, ve filtre yığını işlem sayısını öldürür. **Adım 4-9 ayrı ölçülür.**

## Kapanış gözlemi

Dördüncü ayın sonunda şu çıkarımı yapmıştık: *belirsizlik merkezdeyse kural ölçülemez, kenardaysa çekirdek test edilebilir kalır.*

Beşinci ay buna **üçüncü bir ölçüt** ekliyor: **verinin cinsi.**

Bu ayın en ölçülebilir fikirlerine bak:
- **20/40/60 gün:** takvim — tartışılmaz
- **Tandem/ayrışma:** iki kamuya açık fiyat serisi — doğrulanabilir
- **Faiz farkı:** merkez bankası açıklaması — tartışılmaz
- **Stop vs limit:** mumun açılışı ve kapanışı — tartışılmaz

Ve en ölçülemezine:
- **Mevsimsellik:** 40 yıllık bir ortalama — **bir hesaplama tercihi**, ve gösterilmiyor

**Fark, iddianın doğruluğunda değil — girdinin doğrulanabilirliğinde.**

Bir kural doğru olabilir ama girdisi doğrulanamıyorsa ölçemezsin. Ve ölçemediğin bir kuralla, doğru olup olmadığını asla bilemezsin.

Bu üçlü ölçüt — **seçim noktası sayısı, belirsizliğin konumu, verinin cinsi** — kalan yedi ayı elerken de ana çerçeve olacak.

---

# BÖLÜM IV — Kesinlikle bilmen gerekenler

Ocak'ın kavramları: **tanım · nasıl bulunur · ne işe yarar.** Sonda ayın tam sistemi.

---

## 1. Çeyreklik piyasa kayması

**Tanım.** Her **üç ila dört ayda** bir piyasa yapısında değişim.

**İki biçimi:** ya **dönüş**, ya **uzatılmış konsolidasyon.**

**Nasıl bulunur.**
1. Günlük grafikte son üç ayın **en belirgin yapı kaymasını** ara
2. Ya da grafiği **Mart / Haziran / Eylül / Aralık** dikey çizgileriyle böl — gözün kaymaya gider

**Ne işe yarar.** Zaman ufkunu kurar: *"üç ay içinde bir hareket olacak."* Ve pozisyon yönetimi verir: *"bir kısmını al, geri çekilmeyi bekle, geri koy."*

**Dikkat.** İki biçimi tüm olasılıkları kapsıyor — bu bir totoloji. **Değerli olan kısım zaman ufku, kaymanın kendisi değil.**

---

## 2. IPDA veri aralıkları — 20 / 40 / 60 gün

**Tanım.** Algoritmanın referans aldığı zaman pencereleri.

**Nasıl kurulur — dört adım:**
1. Son üç ayın en belirgin yapı kaymasını bul
2. **O ayın ilk gününe** dikey çizgi çek
3. **20, 40, 60 işlem günü ileriye** say
4. **20, 40, 60 işlem günü geriye** say

**Kalibrasyon kuralı (mekanik):** *"Bir önceki **tam kapanmış takvim ayına** dön."* 14 Kasım'daysan → 1 Ekim.

**Her pencerede aranacaklar:**

| Geriye bakışta | İleriye bakışta |
|---|---|
| Satış stopları nerede | Bir sonraki kurulum ne zaman |
| Alım stopları nerede | |
| FVG ve gap'ler nerede | |
| Likidite boşlukları nerede | |
| Konsolidasyonlar (denge) nerede | |

**Ne işe yarar.** Üç şey:
1. **Likidite haritası** — hangi seviyeler hedef
2. **Zamanlama** — bir sonraki kurulum penceresi
3. **Yatay gün tespiti** — fiyat denge civarında takılıysa Z günü

**Dikkat — videonun kendi uyarısı.** *"20/40/60 gün sonra tepeyi çağırmaz."* Bu bir **arama alanı**, bir tahmin değil.

---

## 3. Open float

**Tanım.** Mevcut fiyatın üstündeki ve altındaki **açık pozisyon** — bekleyen tüm emirler.

**Dört tür emir:**
- Tepelerin üstünde: uzun girmek için + kısaları korumak için alım stopları
- Diplerin altında: kısa girmek için + uzunları korumak için satış stopları

**Ölçümü:** son **60 gün geriye + 60 gün ileriye** = 120 günlük pencerenin en yüksek tepesi ve en düşük dibi.

**Beş katmanlı likidite haritası — yakından uzağa:**

| Kademe | Seviye |
|---|---|
| 1 | Son yön kaymasının ötesi |
| 2 | Haftalık ya da aylık tepe/dip |
| 3 | **Son üç ayın tepesi/dibi** ← çeyreklik odak |
| 4 | Altı aylık tepe/dip |
| 5 | On iki aylık tepe/dip |

**Ne işe yarar.** **Hedef seçimini sıralı hale getiriyor.** Ve beş kademenin hepsi mekanik.

---

## 4. Yön tespiti — üç mekanik yöntem

Beş ayın en değerli birikimi bu üçü. Hepsi bağımsız test edilebilir.

### a) Ardışık ara vadeli tepe/dip (Ocak V2) — en iyisi

**Ara vadeli tepe tanımı:** solunda ve sağında birer **kısa vadeli tepe** olan tepe. (Omuz-baş-omuz gibi düşün; ortadaki baş.)

**Kural:**
- Ardışık ara vadeli **tepeler düşüyor** + **dipler kolayca kırılıyor** → **satış tarafı** hedefleniyor
- Tersi → alım tarafı

### b) Hangi taraf süpürülüyor (Ocak V4)

- Alım stopları sürekli vuruluyor, satış stopları nadiren → **boğa**
- Tersi → **ayı**
- **Rejim değişimi:** ters tarafın alınmaya başlaması

### c) Aylık order block (Kasım V4)

Son düşüş mumu + solundaki son yükseliş mumu = aralık. Hangisi kırıldıysa yön o.

**Hangisini seçmeli?** (a) en bol örneklemli, (c) en az seçim noktalı. **İkisini birlikte ölç.**

---

## 5. Kurumsal salınım noktası — breaker

**Tanım.** İlk denemesi başarısız olan, ikinci denemede seviyeye ulaşan, sonra yapı kayması yapan salınım.

**Nasıl bulunur (ayı için) — beş adım:**
1. Üst zaman diliminde bir hedef seviye (PD array) belirlenmiş olmalı
2. Fiyat oraya **yaklaşıp durur** ve döner → perakende kırılım bekler
3. Fiyat **bir kez daha** gider, kısa vadeli tepeyi kırar, ve **seviyeye ulaşır**
4. Sonra aşağı kırılır ve **aradaki kısa vadeli dibi** ihlal eder → yapı kayması
5. Fiyat o dibe döndüğünde → **sat**

**Stop:** o tepenin üstü ya da tam o tepe.

**Neden bu stop güvenli — videonun gerekçesi:**
> *"Stop koşusu **zaten yapıldı.** Buradaki traderlar zaten stop oldular. Fiyatın oraya geri dönmesi için sebep yok."*

**Aralık V5'in breaker'ından farkı:** **başarısız ilk deneme** ek koşulu. Daha dar, daha yanlışlanabilir.

---

## 6. PD array (PDA) hiyerarşisi

**Tanım.** PD array = **Premium/Discount array.** Order block, breaker, mitigation block, FVG, likidite boşluğu, rejection block, eski tepe/dip — hepsi PD array.

**İndirim PD array'leri (dengenin altı) — ALIM için:**

| Sıra | Ne |
|---|---|
| 1 | Mitigation block |
| 2 | Bullish breaker |
| 3 | Likidite boşluğu |
| 4 | Fair value gap |
| 5 | Bullish order block |
| 6 | Rejection block |
| 7 | Eski dip / tarihsel dip |

**Prim PD array'leri (dengenin üstü) — SATIŞ ve HEDEF için:** tam simetriği.

**Kullanım — iki yönlü:**
1. **Giriş:** indirimdeysen boğa listesinden bir seviye seç
2. **Hedef:** prim listesini **yakından uzağa** sırayla hedefle

**Denge kuralı:**

| Neredesin | Beklenti |
|---|---|
| Primde | Aşağı, indirim array'ine |
| **Dengede** | İki yön de — **aylık yapıya bak** |
| İndirimde | Yukarı, prim array'ine |

**Ve her zaman önce yeniden dengeleme:** *"Derin indirimden alıp sadece dengeye kadar hedeflesen bile, çok sayıda böyle işlem bulursun."*

**Ne işe yarar.** **Beş ayın dağınık kavramlarını tek bir sıralı listeye indiriyor.** Ve dört ay boyunca cevapsız kalan "hedef nereye" sorusuna sıralı bir cevap veriyor.

**Dikkat.** Sıralamanın gerekçesi verilmiyor — ve o kendisi test edilebilir bir iddia.

---

## 7. Giriş teknikleri — stop ve limit

**Ortak ön koşullar (her ikisi için):**
1. Aylık/haftalık, günlük fiyatın **karşı tarafında** bir PD array aramalı
2. Günlük grafik **ters yönlü** bir mum basmalı
3. **Mum KAPANMIŞ olmalı** — oluşurken geçersiz

**Ve emrin yeri:**

| | Alım | Satış |
|---|---|---|
| **Stop emri** | Düşüş mumunun **AÇILIŞ**ı | Yükseliş mumunun **AÇILIŞ**ı |
| **Limit emri** | Düşüş mumunun **KAPANIŞ**ı | Yükseliş mumunun **KAPANIŞ**ı |

**Karşılaştırma:**

| | Stop | Limit |
|---|---|---|
| Dolum olasılığı | **Yüksek** | Düşük |
| Giriş kalitesi | Daha kötü | **Daha iyi** |
| Stop mesafesi | Geniş | **Dar** |

**Mantığı — ve bu güzel.** Düşüş mumu zaten bir **bullish order block**tur. Açılışından alım, order block'a dönüşle **aynı şey** — ama "hangi mum" problemi ortadan kalkıyor, çünkü **her düşüş mumu bir aday.**

**Dolum olmazsa:** yeni bir düşüş mumu bekle, emri onun açılışına taşı. Her yeni mumda bir gün ileri.

**Piramitleme:**
1. Uzunsun, birkaç yüz pip lehine
2. Bir kısmını kapat
3. Fiyat aynı açılışa dönerse **kapattığın kısmı geri koy**
4. Aynı ortalama maliyet

**Ölçek uyarısı:** *"Prim bölgesine yaklaştıkça bu mumlar daha az güçlü. **Tercihen dengede ya da altında al.**"*

---

## 8. Trailing stop — 40 / 20 gün kuralı

**Ayın en özgün risk kuralı.**

| Hedefin ne kadarı yapıldı | Stop nerede (uzun için) |
|---|---|
| **%0 – %50** | **Son 40 işlem gününün en düşük dibinin** altı |
| **%75+** | **Son 20 işlem gününün en düşük dibinin** altı |

Kısa için: son 40 / 20 günün **en yüksek tepesinin üstü.**

**Gerekçe — ve bu mekanik:**
> *"Yükseliş arıyorsak, piyasa muhtemelen **40 gün geriye gidip o dibi bulmak istemeyecek** — son 40 günün **tepelerini** arayacak. Yani stop'un çok geride olur ve seni çıkarmak için çok büyük bir hareket gerekir."*

**Neden %75'te daralıyor:**
> *"Nihai hedefe çok yaklaştın ve **oraya hiç ulaşmayabilir.** Optimal trade entry gibi düşün — hareketin %79'unu yapıp ters dönebilir."*

**Ve mutlak yasak:**
> **"Uzun vadeli işlemde başabaş, düşünülebilecek en kötü şeydir."**

**Bu, senin `#018` bulgununla birebir aynı.** Ve serinin Ekim V3'teki tavsiyesiyle çelişiyor — bu ayki hali doğru.

---

## 9. Tandem / ayrışma rejim testi

**Seriler:** 10 yıllık ABD tahvili (barchart.com) ve dolar endeksi. Getiri için investing.com.

**Temel ilişki:**

| Tahvil fiyatı | Getiri | Dolar |
|---|---|---|
| **Düşer** | Artar | **Yükselir** |
| **Yükselir** | Azalır | **Düşer** |

**Rejim testi:**

| İki seri | Rejim | Ne yaparsın |
|---|---|---|
| **Ters yönde** | **Trend** | Uzun vadeli pozisyon ara |
| **Aynı yönde (tandem)** | **Konsolidasyon** | Uzun vadeli pozisyon **arama.** Stop koşuları ve aralık işlemi ara |

**Ne işe yarar.** **Hangi tür kurulumun aranacağını** söylüyor. Ve yasaklayıcı bir bileşen içeriyor.

**Ayın birinci önceliği** — çünkü ölçmesi ucuz, iki bağımsız kamuya açık seri, ve senin RET sonucuna doğrudan bağlanıyor.

**Kripto:** BTC ↔ dolar endeksi, ya da BTC ↔ ABD 10 yıllık getiri.

---

## 10. Faiz farkı (carry)

**Kaynak:** fxstreet.com merkez bankası faiz listesi.

**Prosedür:**
1. **Yüksek** faizli ülke seç
2. **Düşük** faizli ülke seç
3. Pariteyi kur

**Doğrulama — dört katman:**
1. Üst zaman diliminde güçlü destek/direnç
2. Akıllı para ipucu (o seviyede alındığının işareti)
3. **Mevsimsellik ve/veya açık pozisyon**
4. Dolar endeksi yön teyidi

**Ne işe yarar.** Uzun vadeli yön için **temel** gerekçe. Ve carry gerçek bir olgu — akademik olarak belgelenmiş.

**Dikkat — videonun anmadığı asıl risk.** Carry trade'in bilinen özelliği: uzun süre küçük kazanç, sonra **ani ve büyük kayıp.** Getiri dağılımı sola çarpık. Ölçerken ortalama R yeterli değil — **en kötü %5'lik dilimi ayrıca raporla.**

---

## 11. Açık pozisyon (open interest)

**Tanım.** Vadeli piyasada **kapatılmamış** toplam sözleşme sayısı. Fiyattan bağımsız.

**Nerede bulunur.** Sadece **vadeli piyasada** — spot forex'te yok. Kaynak: barchart.com.

**Kural:**

| Durum | Okuma |
|---|---|
| **Destek seviyesi + açık pozisyonda ani düşüş (%15+)** | Akıllı para **kısa kapatıyor** → yukarı bekle |
| **Konsolidasyon + açık pozisyon artıyor** | Dağıtım → aşağı bekle |

**Videonun mantığı:** *"Açık pozisyon **yalnızca** akıllı paranın ağır kısa kalmak istemediğinin kanıtı olarak düşer. Yüksek açık pozisyon, bankanın riski taşıdığını; düşük açık pozisyon, o riski bıraktığını gösterir."*

**Ne işe yarar.** **Fiyattan bağımsız bir teyit katmanı** — bu, seride nadir.

**Kripto için:** perpetual futures açık pozisyonu mevcut ve ücretsiz. **Üstelik funding oranı gibi ek bir katman da var.**

**Dikkat.** "%15 düşüş" eşiği verilmiş ama **neye göre** tanımsız (önceki gün mü, hafta mı, zirve mi). Ve literatür karışık: fiyat-hacim-açık pozisyon ilişkisi üzerine çok çalışma var, tutarlı güçlü bir öngörü gücü gösterilmiş değil.

---

## 12. Mevsimsellik — dikkatli kullan

**Ne olduğu.** Vadeli sözleşme fiyatlarının çok yıllık ortalaması. Mavi çizgi uzun dönem (40 ya da 19 yıl), kırmızı çizgi kısa (15 yıl).

**Kritik çeviri kuralı — futures → forex:**

| Parite | Çeviri |
|---|---|
| **AUD/USD, NZD/USD, EUR/USD, GBP/USD** | **Doğrudan** |
| **USD/CAD, USD/JPY, USD/CHF** | **TERS** |

**"İdeal mevsimsellik" tanımı (V12):** paritenin ilk para biriminin mevsimselliği ile **dolar endeksi** mevsimselliği **zıt** olmalı.

**Ana pencereler:**

| Parite | Pencere | Yön |
|---|---|---|
| AUD/USD, NZD/USD, GBP/USD | **Mart – Mayıs** | Boğa |
| EUR/USD | **Haziran – Temmuz** | Dip |
| USD/CAD | **Eylül – Aralık** | Boğa |
| USD/CAD | **Mart – Mayıs** | Ayı |
| USD/JPY | **Mart – Nisan** | JPY dibi |

**Ve videonun her seferinde tekrarladığı şart:** *"Altta yatan piyasa **zaten o yönde eğilimliyse**."*

**Dikkat — üç sebeple ölçülemez:**
1. **Hesaplama yöntemi gösterilmiyor** (rollover, ölçekleme, aykırı yıl)
2. **Örneklem 19-40 gözlem** — 100 eşiğinin çok altında
3. **15 yıllık ortalama, 40 yıllığın alt kümesi** — uyuşmaları teyit değil

**Kullanmak istersen:** kendi mevsimselliğini ham veriden hesapla ve **güven aralığını** çıkar. Çoğu "eğilim" muhtemelen gürültüden ayırt edilemez çıkar.

---

## 13. Piyasalar arası kontrol listesi

**Dört grup:** tahvil/faiz, emtia, hisse, döviz.

**İlişkiler:**

| İlişki | Yön | Gecikme |
|---|---|---|
| Tahvil ↔ hisse | **Aynı** | 6–12 ay |
| Tahvil ↔ emtia | **Ters** | 6–12 ay |
| Dolar ↔ emtia | **Ters** | — |
| Dolar ↔ emtia para birimleri | **Ters** | — |

**Kilit ikililer:**

| Bu boğaysa | Şu olur |
|---|---|
| Dolar | Altın **ayı** |
| Altın | AUD, NZD **boğa** |
| Petrol | USD/CAD **ayı** |
| Dow | Nikkei **boğa** |
| Nikkei ayı | USD/JPY **ayı** |

**Ölçüm araçları:**

| Endeks | Neyi ölçer |
|---|---|
| **CRB** | Genel emtia — **tarım ağırlıklı** |
| **GS Emtia** | **Enerji ağırlıklı** |
| **GS Sanayi Metalleri** | Bakır, çinko, alüminyum — küresel eğilim |

**Ne işe yarar.** **Sistem değil, kontrol listesi.** Uzun vadeli bir yön görüşün varsa buraya bak — **çelişki** varsa görüşü sorgula.

**Dikkat.** "6-12 ay gecikme" kuralı, ilişkinin tutmadığı hiçbir an bırakmıyor. Kullanacaksan sabit bir gecikme seç.

---

## 14. Sermaye yönetimi

**Tahsis kuralı:**
> **Toplam sermayenin yalnızca %30'unu işleme tahsis et.**

| Kalem | 100.000 $ hesap için |
|---|---|
| Tahsis | **30.000 $** |
| İşlem başına risk (%1) | **300 $** |
| **Efektif risk** | **%0.3** |

**Dört gerekçe:** marj çağrısı yok, aşırı kaldıraç yok, vahşi düşüş yok, **nakit rezerv fırsat esnekliği verir.**

**Hedefler:**

| Kalem | Değer |
|---|---|
| İşlem başına risk | **maks %1** (tahsisin) |
| R:R | **3:1 veya daha yüksek** |
| Yıllık çekilme | **%15** ideal, %20 kabul edilebilir |
| Yıllık getiri | **%18 – 25** |

**Ne işe yarar.** Çekilme kontrolü ve psikolojik dayanıklılık.

**Dikkat.** Tahsis kuralı riski azaltıyor ama **Sharpe'ı değiştirmiyor** — getiri de aynı oranda düşer. Bir **ölçek tercihi**, bir edge değil.

**Ve aritmetik tutarsızlık:** %0.3 efektif riskle 3:1 ödemede yıllık %18 için ~20 kazanan işlem gerekiyor — ama aynı video "uzun vadede çok fazla işlem yok" diyor.

---

## Ocak'ın tam sistemi — dokuz adım

Ayın kapanışı, on sekiz videoyu tek prosedüre bağlıyor. **Adım 1-3 doğrulanamaz veriye dayanıyor; adım 4-9 tamamen mekanik.**

### Doğrulanamaz kısım (isteğe bağlı)

**1. Mevsimsel eğilim.** Önümüzdeki üç-dört ay için hangi yön bekleniyor?
**2. Piyasalar arası teyit.** Dört varlık sınıfından **üçü** yönü doğruluyor mu?
**3. Faiz getirileri.** Artıyor mu? Ayrışma var mı?

### Mekanik kısım — asıl sistem

**4. Aylık ve haftalık PD array'leri belirle.**
Kurumsal emir akışı nereye gitmek istiyor? İndirim ve prim array'lerini işaretle.

**5. Günlük grafikte çeyreklik kaymayı ara.**
Üç-dört ayda bir yeni bacak. **Mutlak dibi/tepeyi değil, ortadaki eti hedefle.**

**6. Günlük PD array'lerle kurulumu çerçevele.**
Hiyerarşiyi kullan: mitigation block → breaker → likidite boşluğu → FVG → order block → rejection block → eski tepe/dip.

**7. Giriş türünü seç.**

| | Stop emri | Limit emri |
|---|---|---|
| Nereye | Ters mumun **açılışı** | Ters mumun **kapanışı** |
| Dolum | Sık | Nadir |
| Stop mesafesi | Geniş | Dar |

Ve **mum kapanmış olmalı.**

**8. Risk: işlem başına en fazla %1** (tahsisin).

**9. Trailing stop.**

| İlerleme | Stop |
|---|---|
| < %50 | Son **40 günün** dibinin altı |
| > %75 | Son **20 günün** dibinin altı |

**Ve başabaşa çekme YASAK.**

### Bu sistemin ölçülebilirlik durumu

**Adım 4-9 tamamen mekanik** — tek tanımsız bileşen adım 5'in çeyreklik kayma tespiti, ve o Ocak V2'nin yön ölçütüyle (ardışık ara vadeli tepe/dip) doldurulabilir.

**Doldurulduğunda, beş ayın tamamı tek bir kodlanabilir sisteme iniyor:**

> Yön (V2 ölçütü) → aralık (aylık PD array) → seviye (günlük PD array hiyerarşisi) → giriş (stop ya da limit, mum kapanışında) → risk (%1) → stop (40/20 gün) → hedef (denge, sonra prim array)

**Ve bu, ilk dört ayın hiçbir noktasında mümkün değildi.**
