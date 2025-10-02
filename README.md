# IA Mini (React + TypeScript + React Router + Express)

Estructura solicitada: dos carpetas en la raíz: `frontend/` y `backend/`.
Contenido minimalista de IA (con fuentes) y 3 páginas usando React Router.

## Requisitos
- Node.js 18+
- npm o yarn

## Cómo ejecutar
1. **Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   # Servirá en http://localhost:3000
   ```

2. **Frontend** (en otra terminal):
   ```bash
   cd frontend
   npm install
   npm run dev
   # Abre http://localhost:5173
   ```

> El frontend tiene un proxy a `/api` para el backend.

## Rutas del Frontend
- `/` (Inicio)
- `/aprende` (consume `/api/facts` con fuentes)
- `/etica` (principios básicos y enlace a UNESCO)

## Endpoints del Backend
- `GET /api/ping` → `{ ok: true }`
- `GET /api/facts` → Lista de hechos cortos con su `source` (URL).

## Fuentes incluidas en los hechos
- Stanford Encyclopedia of Philosophy (AI): https://plato.stanford.edu/entries/artificial-intelligence/
- IBM: ¿Qué es ML?: https://www.ibm.com/topics/machine-learning
- Deep Learning (visión general): https://en.wikipedia.org/wiki/Deep_learning
- UNESCO (Ética IA, 2021): https://unesdoc.unesco.org/ark:/48223/pf0000380455

## Notas
- Código de frontend con Vite + React + TS.
- Backend en TypeScript con Express y CORS.
- Estilos simples en `src/styles.css`.
