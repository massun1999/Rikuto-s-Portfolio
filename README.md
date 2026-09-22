# Rikuto Portfolio

Astro（SSR）+ Vercel で動かすポートフォリオサイトです。

## Stack

- [Astro](https://astro.build/) — SSR (`output: 'server'`)
- [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) — Vercel デプロイ
- GitHub — ソース管理

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

## デプロイ（Vercel）

1. GitHub にリポジトリを push
2. [Vercel](https://vercel.com/) で Import
3. Framework Preset: Astro（自動検出）
4. Deploy

## コンテンツの編集

プロフィール・作品一覧は `src/data/site.ts` を編集してください。
