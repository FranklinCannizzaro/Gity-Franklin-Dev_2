# Gity — Premium Dental Platform Dashboard

A modern, minimalist dashboard for dental labs. Built with React + Vite + Tailwind CSS.

![Gity Dashboard](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat&logo=tailwindcss)

---

## Features

- **Dark / Light Mode** — one-click toggle, all colors adapt seamlessly
- **Sidebar Navigation** — Übersicht, Fälle, Uploads, Kunden, Rechnungen with badge counters
- **Stats Cards** — 4 live metric tiles with trend indicators
- **Cases Table** — recent orders with patient avatars, status pills and amounts
- **Right Panel** — quick actions, status progress bars, monthly revenue mini-chart
- **Premium typography** — Cormorant Garamond (display) + Outfit (UI)

---

## Project Structure

```
gity-dental/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx      # Root layout
│   │   ├── Header.jsx         # Top bar (search, dark mode, CTA)
│   │   ├── Sidebar.jsx        # Navigation sidebar
│   │   ├── StatCards.jsx      # 4-column metric cards
│   │   ├── CasesTable.jsx     # Recent orders table
│   │   └── RightPanel.jsx     # Quick actions + revenue card
│   ├── data/
│   │   └── constants.js       # Mock data & icon mappings
│   ├── theme/
│   │   └── colors.js          # Light & dark color tokens
│   ├── App.jsx                # ThemeContext provider
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind directives + scrollbar
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/gity-dental.git
cd gity-dental
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Deploy to GitHub Pages

```bash
# Install the gh-pages helper (once)
npm install --save-dev gh-pages

# Add to package.json → scripts:
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# And add: "homepage": "https://YOUR_USERNAME.github.io/gity-dental"

npm run deploy
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| Lucide React | 0.383 | Icon library |
| Outfit (Google Fonts) | — | UI typeface |
| Cormorant Garamond (Google Fonts) | — | Display typeface |

---

## License

MIT © Gity Dental Platform
