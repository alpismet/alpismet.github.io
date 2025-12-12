# Project Tasks & Goals

Bu dosya proje hedeflerini, yapılacakları, bekleyen işleri ve tamamlananları takip etmek için kullanılır. Basit bir manuel takip formatıdır — isterseniz CI ile otomatikleştirebiliriz.

## Nasıl Kullanılır

- Bir görev eklemek için yeni bir maddede `- [ ]` ile yazın.
- Tamamlanınca `- [x]` yapın ve kimin tamamladığını, hangi commit ile ilişkilendirildiğini kısa not olarak ekleyin.

## Hedefler (Yüksek Seviye)

- [x] TypeScript OOM problemini çöz (tsconfig kısıtlandı).
- [x] Social linklerin yeni sekmede açılması (Link komponenti `newTab` kullanıldı).
- [x] `Allura` fontu production için global head'e taşındı.
- [ ] Production deploy doğrulaması (build + deploy sonrası logo font kontrolü).
- [ ] OG image generation edge-case testleri.

## Backlog

- Dökümantasyon: İngilizce çeviri ve kısa cheat-sheet.
- E2E testler: kritik plugin pipeline'ı doğrulayan küçük testler.

## PR / Branch Kuralları

- Feature branch adı: `feature/<kısa-açıklama>`
- Hotfix: `hotfix/<kısa-açıklama>`
- PR açıklamasına: yaptığınız değişiklik, etkilediği dosyalar, nasıl test edileceği, ilgili todo id'si ekleyin.

## Kod İnceleme Kontrolleri

- `pnpm check` (type errors yok)
- `pnpm lint` (lint hatası yok)
- `pnpm build` (build başarılı)
- Lokal `pnpm dev` ile UI kontrolü

---
