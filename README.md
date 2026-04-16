# Portfólio — Wildemar Pedro Leal

Versão React do meu portfólio pessoal, migrada a partir da versão HTML/CSS/JS original (branch `main`).

## Stack
- React 18
- Vite 5

## Arquitetura
```
src/
├── components/   # Header, Hero, Sobre, Projetos, Contato, Footer
├── data/         # projetos.js (array renderizado dinamicamente)
├── styles/       # index.css (global)
├── App.jsx
└── main.jsx
```

## Scripts
```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Deploy
- **GitHub Pages** → branch `main` (HTML vanilla)
- **Vercel** → branch `feat/react-portfolio` (este código)
