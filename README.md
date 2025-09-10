# 🎬 Showcase

Interactive portfolio & certificate presentation built with **React + Impress.js**, designed to highlight projects, trainings, and achievements with smooth transitions and a modern UI.  

🌍 **Live Demo :** mamskie.me/showcase  
👤 **Author:** M. Khotibul Umam (Mamskie)  

---

## ✨ Features
- 🖼 Certificates & Training Showcase
- 🎭 3D Interactive Slides powered by impress.js
- ⏯ Autoplay Mode with on-screen notification
- 🗺 Mini-map Navigation toggle
- 🌗 Light/Dark Theme Toggle (saved in localStorage)
- 📱 Responsive Layout

---

## ⚡ Tech Stack
- React + TypeScript
- Impress.js
- Rsbuild (bundler)
- Font Awesome
- Custom CSS / Tailwind

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/mamskie/showcase.git
cd showcase
```

### 2️⃣ Install dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Run development server
```bash
npm run dev
```

### 4️⃣ Build for production
```bash
npm run build
npm run preview
```

---

## 🛠 Project Structure
```
showcase/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, gifs, icons
│   ├── components/      # UI Components
│   │   ├── MiniMap/
│   │   ├── OverviewSlide/
│   │   ├── ProgressBar/
│   │   ├── ProjectCard/
│   │   ├── ProjectSlide/
│   │   ├── TitleSlide/
│   │   ├── Toolbar/
│   │   └── ui/
│   ├── constants/       # Data & configs
│   │   ├── impressConfig.ts
│   │   ├── projectsData.ts
│   │   ├── slideIds.ts
│   │   └── userConfig.ts
│   ├── types/           # TypeScript types
│   │   ├── global.d.ts
│   │   ├── project.ts
│   │   └── userConfig.ts
│   ├── App.css
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── .prettierrc
├── .prettierignore
├── eslint.config.mjs
├── rsbuild.config.mjs
├── tsconfig.json
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

---

## 📦 Deployment

### GitHub Pages
Edit `rsbuild.config.mjs`:
```js
export default {
  output: {
    assetPrefix: '/showcase/',
  },
};
```

Build & deploy:
```bash
npm run build
# upload dist/ ke branch gh-pages atau pakai GitHub Actions
```

### Vercel / Netlify
- Import repo `showcase`
- Build command → `npm run build`
- Output directory → `dist`

---

## 📜 License
MIT License © 2025 Mamskie
