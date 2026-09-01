# ICT Eleme Notları

ICT Mentorship video transkriptlerinden üretilmiş **ders + eleme** notları.
Her ay için: videonun anlattığı (tarafsız ders) ve iddiaların filtresi (eleme) ayrı ayrı.

## Okuma

Yayınlanan okuyucu: `index.html` — ay seçici, arama, doküman içi içindekiler, koyu tema.

## Yeniden üretme

Kaynak belgeler `ciktilar/*.md` içinde. Siteyi yeniden derlemek için:

```bash
python3 build.py
```

`index.html` yeniden yazılır. Yeni bir ay eklemek için `.md` dosyasını
`ciktilar/` içine `ict-<ay>-<yil>-eleme-notlari.md` adıyla koyup komutu tekrar çalıştır.

Ders bölümleri `.md` içinde şu blokla işaretlenir:

```
::: ders
**DERS**
...
:::
```

## Not

`transcripts/` klasörü telif nedeniyle bu depoya dahil edilmez (`.gitignore`).

## Grafik laboratuvarı

`grafik.html` — belgedeki tanımların **grafik üstünde çalışan kod karşılığı**. Soldaki listeden bir
öğreti seçilir, o öğreti mumların üstüne çizilir. Amaç iddiayı doğrulamak değil, **görünür kılmak**:
kural neyi işaretliyor, kaç kere işaretliyor, ve işaretlediği yer sonradan ne yaptı.

Tarayıcıda `grafik.html` dosyasını aç. Kurulum, derleme, sunucu gerekmiyor.

### Veri

| Kaynak | Not |
|---|---|
| **Binance** | Anahtar gerekmiyor, doğrudan tarayıcıdan. Hazır pariteler: BTC, ETH, SOL, BNB, XRP, DOGE, ADA, AVAX, LINK, TRX, DOT, LTC (USDT), ETH/BTC, PAXG. "Diğer…" ile herhangi bir Binance sembolü yazılabilir |
| **CSV** | TradingView / MT4 / genel dışa aktarımlar. Ayraç, ondalık virgül ve `Date`+`Time` sütunları otomatik çözülür. Saat dilimi işareti yoksa **UTC** varsayılır — broker saatini hizalamak için "saat kayması" alanı var |
| **Örnek** | Sentetik, sabit tohumlu. Çevrimdışı çalışmak ve dedektörü denemek için |

Zaman dilimleri: 1 dk · 5 dk · 15 dk · 30 dk · 1 sa · 4 sa · günlük · haftalık.
1 dakika §16 Örüntü 3 için var — *"5 dakikadan 1 dakikaya, ilk uygun grafikte"*.

### Canlı akış

**Canlı** düğmesi Binance WebSocket akışını açar. Son mum her tikte güncellenir, yeni mum
kendiliğinden eklenir, görünüm sağ kenardaysa orada kalır. Bağlantı koparsa üstel bekleyerek
yeniden bağlanır; arada mum atlandıysa geçmiş yeniden çekilip hizalanır.

**Dedektörler her tikte değil, yalnız mum KAPANINCA yeniden koşar.** §16'nın kuralı bu:
*"MUM KAPANMIŞ olmalı."* Kapanmamış son mum grafikte çizilir ve soluk bir bantla işaretlenir,
ama hiçbir dedektöre girmez — "yalnız kapanmış mumlar" kutusu bunu kontrol eder. Aksi halde
her tikte beliren ve kaybolan array'ler görürsün; hiçbiri işlem edilebilir değildir.

### Çizilen öğretiler

| Katman | Kaynak bölüm |
|---|---|
| Salınım noktaları (kısa / ara vadeli) | §10 Yöntem B |
| Fair value gap + consequent encroachment | §2 · §13.4 |
| Order block (geçerlilik, güç, birleştirme, mean threshold) | §13.3 · §13.4 · §13.5 |
| Breaker (süpürme + yapı kayması) | §13.3 · §13.4 |
| Mitigation block (süpürmesiz yapı kayması) | §2 · §13.4 |
| Rejection block (fitil oranı) | §2 · §13.4 |
| Likidite havuzu ve baskın (eşit tepe/dip, derinlik bandı) | §2 · §16 Örüntü 2 |
| Displacement → MSS → bıraktığı FVG | §2 · §16 Örüntü 3 |
| Prim / iskonto — dealing range, 0,20–0,90 yasakları | §12 |
| OTE %62 / %70,5 / %79 | §2 · §16 Örüntü 1 |
| IPDA 20 / 40 / 60 işlem günü | §2 · §12.4 |
| Seanslar ve kill zone (New York saati, yaz saati dahil) | §15.2 |
| Aralık projeksiyonu — CBDR / Asya / flout, "birim" | §15.3 |
| Düşük dirençli bölge | §13.9 |

Her katmanın kartında **tanım**, **kaynağın kendi uyarısı**, **seçim noktası sayısı** ve belgedeki
bölüme bağlantı var. Tanımdaki her eşik parametre olarak açık — çünkü eşiği belge değil, kullanan
seçiyor. Bir eşiği değiştirmek bulguları anında değiştirir; **seçtiğin değeri yaz ve dönem boyunca
sabit tut** (§13.6).

"Yalnız tükenmemişler" kutusu §13.6'nın tükenme kuralını hem listeye hem grafiğe uygular: bir kez
işlem görmüş array çizilmez.

### Yer imi ve paylaşım

Görünüm URL'ye yazılabilir:

```
grafik.html?k=fvg,orderblock,konum&sembol=SOLUSDT&aralik=5m&adet=500&suz=1&canli=1
```

`k` katman kimlikleri · `kaynak` binance|csv|ornek · `sembol` · `aralik` · `adet` ·
`canli=1` akışı açar · `suz=1` tükenmişleri gizler · `pip` mesafeleri pip cinsinden yazar ·
`kayma` CSV saat kaydırması.

### Sınır

Bu bir **görselleştirici**, bir backtest değil. Hiçbir katman isabet oranı, beklenti ya da R üretmiyor —
`islem-claude.md` §25'in söylediği gibi bu kuralların hiçbirinin isabet oranı bilinmiyor. Buradaki
katmanlar o ölçümün **girdisini** hazırlar: kural neyi işaretliyor, kaç kere, ve nerede.
