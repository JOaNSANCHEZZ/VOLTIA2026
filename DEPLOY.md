# Guía de Deploy — Voltia en Vercel

El proyecto compila en producción (`next build` ✓). Sigue estos pasos en orden.

## 1. Probar local con tus claves reales

```bash
cp .env.local.example .env.local
# Rellena .env.local con tus claves de Firebase, Firebase Admin y MongoDB
npm install
npm run dev
```

Verifica: el login funciona, escaneas una factura → preguntas → dashboard, y
al recargar el historial sigue ahí (eso confirma que MongoDB guarda).

## 2. Regenerar el lockfile (recomendado)

```bash
rm package-lock.json
npm install
```

## 3. Subir a GitHub

```bash
git init
git add .
git commit -m "Voltia - listo para deploy"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/voltia.git
git push -u origin main
```

Confirma que `.env.local` NO se subió (está en `.gitignore`).

## 4. Desplegar en Vercel

1. vercel.com → Add New Project → importa tu repo.
2. Antes de Deploy, ve a **Environment Variables** y agrega TODAS las de tu
   `.env.local`:
   - Las 6 `NEXT_PUBLIC_FIREBASE_*`
   - Las 3 `FIREBASE_ADMIN_*` (la PRIVATE_KEY pégala completa, con sus `\n`)
   - `MONGODB_URI`
   - `GROQ_API_KEY` y `GROQ_MODEL` (cuando se use la IA)
3. Deploy.

## 5. Autorizar el dominio (¡no olvidar!)

Cuando Vercel te dé tu URL (`tu-proyecto.vercel.app`):

- **Firebase** → Authentication → Settings → Authorized domains → agrega esa URL.
- **MongoDB Atlas** → Network Access → Add IP → `0.0.0.0/0`.

Sin el paso 5, el login de Google falla y las API routes dan timeout.

## Notas

- El OCR (Tesseract.js) corre en el navegador; la primera vez descarga el
  modelo de español (~10-15MB), luego queda en caché.
- Los datos (facturas, respuestas) ahora persisten en MongoDB por usuario.
