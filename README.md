# Voltia ⚡

Plataforma SaaS de inteligencia energética. Optimización de consumo eléctrico, análisis avanzado, simulación, OCR de facturas y recomendaciones con IA.

> **Estado actual: COMPLETA — auth, OCR, dashboard, admin, IA, recomendaciones, aprendizaje, perfil, notificaciones** ✅

---

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 15 (App Router) + React 19 |
| Lenguaje | TypeScript (strict) |
| Estilos | TailwindCSS + shadcn/ui |
| Animación | Framer Motion |
| Base de datos | MongoDB Atlas + Mongoose |
| Auth | Firebase Authentication |
| IA | Groq (`llama-3.3-70b-versatile`) |
| OCR | Tesseract.js |
| Gráficas | Recharts |
| Estado | Zustand |
| Deploy | Vercel |

---

## Setup local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar entorno
cp .env.local.example .env.local
#    -> rellena tus claves de Firebase, MongoDB y Groq

# 3. Levantar en desarrollo
npm run dev
```

Abre http://localhost:3000

### Scripts

```bash
npm run dev        # desarrollo
npm run build      # build de producción
npm run start      # servir build
npm run typecheck  # validar tipos (tsc --noEmit)
npm run lint       # eslint
```

---

## Design System

Toda la consistencia visual nace de tres archivos. **No definas colores, sombras ni radios sueltos en componentes** — usa siempre los tokens:

- `src/app/globals.css` — variables CSS (light/dark, paleta energética)
- `tailwind.config.ts` — tokens expuestos a Tailwind (colores, sombras, radios, animaciones)
- `src/lib/design-tokens.ts` — paleta en TS para Recharts y SVG

**Paleta de marca:** `energy-cyan`, `energy-electric`, `energy-emerald`, `energy-coral`, `energy-amber`.

**Tipografía:** Sora (display), Inter (cuerpo), JetBrains Mono (datos).

---

## Decisiones de arquitectura

- **Roles:** Firebase Auth gestiona la *identidad*; MongoDB es la *autoridad* sobre roles (`superadmin` → `user`). El rol se verifica server-side, nunca se confía desde el cliente. Ver `src/types/user.ts`.
- **OCR:** Tesseract.js se marca como `serverExternalPackages` en `next.config.js`.

---

## Próximas fases

- **Fase 1** — Layout: sidebar colapsable, navbar, footer, responsive, AuthContext, store Zustand.
- **Fase 2** — Dashboard: KPIs, gráficas, AI insight cards.
- **Fase 3+** — Simulador, Facturas+OCR, IA, Learning, Admin.
