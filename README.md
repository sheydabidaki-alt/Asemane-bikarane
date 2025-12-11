Sabetpoor AL - Luxury Edition
=============================

This is a Next.js demo project (PWA-ready) for the "Sabetpoor AL" Luxury Edition stone analyzer.

How to run locally:
1. Install node >= 18
2. npm install
3. npm run dev
4. Open http://localhost:3000

To produce APK:
- Deploy to Vercel or any public HTTPS host, then convert the PWA to APK using a PWA->APK service.

Files included:
- next.config.js (with next-pwa)
- public/manifest.json, logo.png, bg-galaxy.jpg
- src/app (layout.js, page.js, globals.css)
- src/components (HeaderLogo, FloatingButton, UploadBox, StoneAnalyzer)
- src/lib/deepseek.js (mock)
