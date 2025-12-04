# 🚀 Alok Kumar Kasyap — Futuristic Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS**, animated with **Framer Motion**, and themed with a custom context that syncs with the system palette. Recruiter-focused sections highlight projects, AI/Full-Stack experience, and contact info.

![hero](https://github.com/diceyalok/portfolio-preview/blob/main/hero.png?raw=true)

</div>

---

## ✨ Features

- ⚡ **Blazing-fast stack** — React 19 + Vite 5 + Tailwind 3
- 🎨 **Futuristic UI language** — Glassmorphism cards, neon gradients, floating orbs
- 🌓 **Theme intelligence** — System-aware theme context with animated transitions (system → light → dark)
- 🎞️ **Micro-interactions** — Framer Motion animations in hero, cards, and timeline
- 📄 **Recruiter-ready sections** — Hero CTA, experience timeline, rich project cards, skills-cloud, and contact pill strip
- 📁 **Resume download** — Button wired to `public/Alok-kumar-kasyap-FlowCV.pdf`

---

## 🧱 Tech Stack

| Layer        | Tools                                   |
| ------------ | --------------------------------------- |
| Frontend     | React 19, Vite 5, JSX                   |
| Styling      | Tailwind CSS 3.4, custom CSS gradients  |
| Animation    | Framer Motion, motion gradients         |
| Icons        | React Icons (Feather)                   |
| Theme Mgmt   | Custom ThemeContext (system aware)      |

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Open `http://localhost:5173` to view.

---

## 📁 Project Structure

```
vite-project/
├── public/
│   └── Alok-kumar-kasyap-FlowCV.pdf   # downloadable resume
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── ThemeToggle.jsx
│   │       ├── button.jsx
│   │       └── card.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── package.json
```

---

## 🌐 Deployment

The app is a static Vite build. Deploy to Vercel/Netlify/GitHub Pages by serving the `dist/` folder:

```bash
npm run build
# upload the generated dist/ folder
```

---

## 🤝 Contact

- **Email:** alokkashyap166@gmail.com  
- **GitHub:** [diceyalok](https://github.com/diceyalok)  
- **LinkedIn:** [alok-kasyap](https://www.linkedin.com/in/alok-kasyap)

---

> Crafted with a “futuristic-first” mindset: neon gradients, ambient glows, and system-synced themes that make recruiters remember you.
