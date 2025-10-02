# CiberConCiencia

- Estructura solicitada: dos carpetas en la raíz: `frontend/` y `backend/`.
- Contenido educativo de IA (con fuentes) y subpáginas usando React Router. Esto, en frontend/src/pages/Home.tsx, Aprende.tsx (consume /api/facts) y Etica.tsx;
- El backend expone esos datos en backend/src/server.ts con GET /api/facts.
- Bootstrap se activa importándolo en frontend/src/main.tsx (bootstrap.min.css y bootstrap.bundle.min.js) y se ve en el encabezado (navbar) y footer definidos en frontend/src/App.tsx (clases navbar, - container, etc.).
- El Login y Registro con encriptación viven en el backend con POST /api/auth/register y POST /api/auth/login (hash con bcryptjs y JWT) y en el frontend con src/pages/Login.tsx, src/pages/Register.tsx y el contexto src/context/useAuth.tsx.
- El HTML base es frontend/index.html, el CSS propio está en frontend/src/styles.css, y el JS ES8 se usa con async/await en frontend/src/pages/Aprende.tsx y frontend/src/services/auth.ts.
- TypeScript se usa en todo (.ts/.tsx) con tsconfig.json;
- React y React Router están en frontend/src/App.tsx (rutas /, /aprende, /etica, /login, /register) y el enrutador se monta en frontend/src/main.tsx con BrowserRouter.
- En el backend, Node + Express están en backend/src/server.ts (endpoints /api/ping, /api/facts, /api/auth/* y /api/notes).
- Los formularios de ingreso de datos son los de Login/Registro y en el formulario de Notas en frontend/src/pages/Notas.tsx.
- Sobre excepciones y concurrencia: en el frontend hay try/catch en páginas y servicios;
- Express atiende múltiples solicitudes de forma concurrente por diseño del event loop.
- La división frontend/backend está en la raíz como frontend/ y backend/.
- Los métodos HTTP: GET y POST (/api/facts, /api/ping, /api/auth/*), y con el módulo de Notas quedan también PUT y DELETE (/api/notes/:id).

# ¿Cómo correr?
- cd backend
- npm i
- npm run dev
---
- cd frontend
- npm i 
- npm run dev
