AI Onboarding & Developer Guide

Bu dosya hem bir AI yardımcısının, hem de geliştiricinin bu projede etkili çalışabilmesi için gerekli tüm bilgileri içerir. Kısa ve uygulanabilir adımlar, konvansiyonlar ve komutlar yer almaktadır.

## Proje Özeti

- Framework: Astro 5
- Stil: UnoCSS (konfigürasyon `unocss.config.ts`)
- İçerik: `src/content/*`
- Çıktı: statik `dist/`, deploy branch: `deploy-live` (rsync + git worktree)

## Önemli Dosyalar & Dizinler

- `src/` — Kaynak kodu (components, layouts, pages)
- `plugins/` — custom remark/rehype pipeline eklentileri (og-image, reading-time vb.)
- `src/config.ts` — `SITE`, `UI`, `FEATURES` ana konfigürasyon nesneleri
- `src/types.ts` — Konfigürasyon tipleri (değiştirilirse önce buraya bakın)
- `public/og-images/` — Oluşturulan OG görselleri
- `deploy.sh` — `dist/` -> `deploy-live` sync ve push scripti
- `tsconfig.json` — Tip denetimini daraltmak için güncellendi (OOM önleme)

## Konfigürasyon & Kodlama Kuralları

- `SITE`, `UI`, `FEATURES` runtime'da değiştirmeyin; saf import olarak kullanın.
- `FEATURES` için tuple pattern: `false | [boolean, Config]` — kontrol ederken `Array.isArray(FEATURES.x) && FEATURES.x[0]` kullanın.
- Yeni özellik ekliyorsanız önce `src/types.ts` güncelleyin, sonra `src/config.ts`.
- remark/rehype plugin eklerken `plugins/index.ts` içindeki arrays'e ekleyin ve OG-image gibi conditional pluginleri mevcut örneğe göre ekleyin.
- Large generated output klasörlerini `tsconfig.json` exclude'a ekleyin (`deploy-live`, `_astro`, `pagefind`, `public/og-images` vb.) — aksi halde `pnpm check` OOM yapabilir.

## CLI & İstemler (zsh)

- Gerekli Node: proje `package.json`'daki `engines` ile uyumlu Node (ör. 18/20/22)
- Paket yükleme:

```bash
pnpm install
```

- Geliştirme sunucusu:

```bash
pnpm dev
```

- Tip kontrolleri:

```bash
pnpm check
```

- Lint ve format:

```bash
pnpm lint
pnpm format:write
```

- Üretim build + deploy (build sonra deploy.sh çalıştırıyor):

```bash
pnpm build
pnpm deploy
```

## Common Tasks (Kısa Rehber)

- Yeni collection / content ekleyince `pnpm sync` çalıştırın.
- OG görsel üretimini tetiklemek için: `public/og-images/og-image.png` silin ve `pnpm build` tekrar çalıştırın (plugins içinde conditional insert var).
- Eğer `pnpm check` OOM verirse: `tsconfig.json`'u `include`/`exclude` ile daraltın (özellikle `deploy-live`, `_astro`, `pagefind`, `og-images` dizinlerini exclude edin).

## Dağıtım (deploy.sh) – Özet

- `deploy.sh`:
  - `pnpm build` çıktısını `dist/` içinde oluşturur
  - `rsync` ile `deploy-live` git worktree'ına kopyalar
  - `git add/commit/push` ile `deploy-live` branch'ine gönderir
- Uygun kullanım: `pnpm deploy` (pakette script tanımlı) veya doğrudan `./deploy.sh`.

## Debug & Troubleshooting

- Font görünmüyor (production): component scoped `@import` yerine `BaseLayout.astro` içine Google Fonts `preconnect` + `<link href=...>` ekleyin. Ardından build & deploy edin.
- Social links yeni sekmede açılmıyorsa: `src/components/base/Link.astro`'de `newTab` prop'u kontrol edin ve sosyal linkleri `newTab={true}` ile render edin.
- TypeScript OOM: `tsconfig.json`'da `include` daraltma ve `exclude` genişletme yapın, sonra `pnpm check` çalıştırın.

## AI için Ek Notlar (kısa)

- AI ajan yeni bir değişiklik yapmadan önce `pnpm check` çalıştırmalı; yeni dosya eklediyse `pnpm sync` gerekebilir.
- Değişiklik yaparken minimal patch politikası (apply_patch) izlenmeli; büyük yeniden formatlama yapılmamalı.
- Eğer `FEATURES` veya `src/types.ts` değişiyorsa tip kontrolü zorunlu.

---
