# 01 · VANGUARD — Maison of Luxury Footwear

> Landing de una sola página (one-pager) para una maison francoitaliana de calzado artesanal de lujo, ficticia, fundada en 1987 en Florencia. Es un sitio de **presentación de marca / demo**, no un e-commerce funcional — el propio footer lo dice: *"Demo site — for presentation purposes"*.

Proyecto **#1** del portafolio de demos en `motionsites para demo/`. Ver [`../CLAUDE.md`](../CLAUDE.md) para el mapa general de todas las carpetas.

## Cómo correr el proyecto

```bash
cd "01-vanguard"
npm install       # node_modules ya está presente, no debería hacer falta
npm run dev        # → http://localhost:5180  (puerto fijo, strictPort: true)
npm run build       # tsc -b && vite build → genera dist/
npm run preview      # sirve el build de dist/
```

⚠️ El puerto **5180** está fijado en `vite.config.ts` con `strictPort: true`: si está ocupado, Vite **falla** en vez de buscar otro puerto libre.

## Stack técnico

- React 18.3.1 + React DOM 18.3.1
- TypeScript 5.6.3 (`strict`)
- Vite 6.0.3 + `@vitejs/plugin-react`
- Tailwind CSS 3.4.16 + PostCSS + Autoprefixer
- `lucide-react` (iconos)
- Sin router, sin gestor de estado externo (todo con `useState`/`useEffect` locales), sin backend, sin testing configurado.

## Estructura

```
01-vanguard/
├── index.html              # Carga Google Fonts (Cormorant Garamond + Inter), monta #root
├── package.json             # name: "vanguard"
├── vite.config.ts            # server.port 5180, strictPort true
├── tailwind.config.js         # color custom "gold", fuentes display/inter
├── dist/                      # build de producción ya generado
└── src/
    ├── main.tsx                # entry point
    ├── App.tsx                  # orquesta el orden de las secciones
    ├── data.ts                   # TODA la data mock del sitio (contenido hardcodeado)
    ├── index.css                  # @tailwind + animaciones custom (keyframes)
    └── components/
        ├── Header.tsx              # Navbar fija, transparente → oscura con blur al hacer scroll (>64px)
        ├── Hero.tsx                 # Pantalla completa, imagen Ken Burns, stats, rail de 3 productos
        ├── Collection.tsx            # Grid de productos, toggle "View All / Show Fewer"
        ├── Atelier.tsx                # Proceso artesanal en 4 pasos
        ├── Heritage.tsx                # Timeline histórica con toggle de archivo completo
        ├── Press.tsx                   # 3 citas de prensa
        ├── Journal.tsx                  # Blog editorial con modal de artículo (Esc / click-fuera cierra)
        ├── Contact.tsx                   # Formulario "Private Fitting" (validación nativa, envío simulado)
        └── Footer.tsx                     # Redes, boutiques, newsletter
```

**Todo el contenido textual/numérico vive en `src/data.ts`** — para editar textos, precios, timeline, prensa o posts del blog, se edita ahí, no en los componentes.

## Orden de secciones en `App.tsx`

Header → Hero → Collection → Atelier → Heritage → Press → Journal → Contact → Footer

## Diseño

- **Colores**: fondo `neutral-950`/`neutral-900` (casi negro), acento dorado custom `gold` (`#C8A96A`, `light #E3CFA4`, `dark #9C7F45`), texto blanco con opacidades variables para jerarquía.
- **Tipografías** (Google Fonts): `font-display` = Cormorant Garamond (serif editorial, mucho uso de itálica), `font-inter` = Inter (uppercase + tracking amplio en labels/botones).
- **Estética**: editorial de lujo — tracking amplio en mayúsculas, líneas finas doradas, fondos oscuros, imágenes grandes con overlays de gradiente.
- **Animaciones**: 100% CSS custom en `index.css` (`fade-up`, `fade-in`, `scale-in`, `slow-zoom` Ken Burns 24s, `line-grow`) — **no usa framer-motion** pese al nombre de la carpeta raíz original ("motionsites").
- Todas las imágenes son URLs externas de **Unsplash** (no hay `public/` ni assets locales — dependencia de un servicio externo).

## Cosas a tener en cuenta / deuda técnica menor

- No hay `.gitignore` — si se versiona con git, excluir `node_modules/`, `dist/` y `tsconfig.tsbuildinfo`.
- Las imágenes dependen de URLs de Unsplash; si esas URLs cambian o el servicio no responde, se rompen visualmente.
- No hay favicon configurado en `index.html`.

## Lo que se revisó y está limpio

- Sin `TODO`/`FIXME`/`console.log` en `src/`.
- Sin componentes huérfanos ni imports rotos — los 9 componentes se usan todos.
- Se limpiaron los `.DS_Store` sueltos (basura de macOS) de esta carpeta.
