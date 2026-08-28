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
