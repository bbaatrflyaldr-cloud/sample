# Selbe Mall – Next.js website

Next.js 15 (App Router) + TypeScript. Tailwind шаардлагагүй, энгийн CSS ашигласан.

## Ажиллуулах

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Бүтэц

- `app/` – layout, нүүр хуудас, global CSS
- `components/` – Header, Stats, FloorExplorer (давхар сонгогч), Gallery, Lightbox, Reveal
- `data/floors.ts` – давхар бүрийн мэдээлэл (нэр, талбай, онцлог). Эндээс засна.
- `public/images/floors` – давхрын төлөвлөлтийн зургууд
- `public/images/gallery` – интерьер зургууд

## Засах зүйлс

- Холбоо барих мэдээлэл, ажлын цаг: `app/page.tsx` дахь "VISIT" хэсэг
- Давхрын мэдээлэл: `data/floors.ts` (зураг дээрээс уншсан тул баримттай тулгана уу)
- 5-р давхрын зураг өгөөгүй тул жагсаалтад ороогүй. Зураг нэмэхдээ `floors` массивт нэг бичлэг нэмнэ.
