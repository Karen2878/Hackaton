import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import jwt, { SignOptions } from 'jsonwebtoken'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '2h'

// ---------- Setup básico ----------
app.use(cors())
app.use(express.json())

// ---------- Persistencia simple en archivo (demo) ----------
type User = {
  id: string
  name: string
  email: string
  passwordHash: string
  createdAt: string
}

const DATA_DIR = path.resolve(process.cwd(), 'data')
const USERS_PATH = path.join(DATA_DIR, 'users.json')

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  if (!fs.existsSync(USERS_PATH)) fs.writeFileSync(USERS_PATH, '[]', 'utf-8')
}
ensureDataFile()

type Note = {
  id: string
  userId: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

const NOTES_PATH = path.join(DATA_DIR, 'notes.json')

function ensureNotesFile() {
  if (!fs.existsSync(NOTES_PATH)) fs.writeFileSync(NOTES_PATH, '[]', 'utf-8')
}
ensureNotesFile()

function readNotes(): Note[] {
  try { return JSON.parse(fs.readFileSync(NOTES_PATH, 'utf-8')) as Note[] }
  catch { return [] }
}

function writeNotes(notes: Note[]) {
  fs.writeFileSync(NOTES_PATH, JSON.stringify(notes, null, 2), 'utf-8')
}

function readUsers(): User[] {
  try {
    const raw = fs.readFileSync(USERS_PATH, 'utf-8')
    return JSON.parse(raw) as User[]
  } catch {
    return []
  }
}
function writeUsers(users: User[]) {
  fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2), 'utf-8')
}

// ---------- Helpers ----------
function generateId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function generateToken(user: User) {
  const payload = { sub: user.id, email: user.email, name: user.name }
  const expiresIn: SignOptions['expiresIn'] =
    (process.env.JWT_EXPIRES_IN || '2h') as SignOptions['expiresIn']
  return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

function authMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) return res.status(401).json({ error: 'Token requerido' })
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { sub: string; email: string; name: string }
    ;(req as any).auth = decoded
    next()
  } catch {
    return res.status(401).json({ error: 'Token inválido o expirado' })
  }
}

// ---------- Endpoints básicos existentes ----------
app.get('/api/ping', (_req, res) => {
  res.json({ ok: true, message: 'pong' })
})

app.get('/api/facts', (_req, res) => {
  const facts = [
    {
      id: 1,
      text:
        'La IA se ocupa de que las máquinas realicen tareas que asociamos con la inteligencia humana (percepción, aprendizaje, razonamiento).',
      source: 'https://plato.stanford.edu/entries/artificial-intelligence/',
    },
    {
      id: 2,
      text:
        'El aprendizaje automático (ML) permite a los sistemas mejorar su desempeño en una tarea a partir de datos.',
      source: 'https://www.ibm.com/topics/machine-learning',
    },
    {
      id: 3,
      text:
        'Las redes neuronales profundas aprenden representaciones jerárquicas de los datos mediante múltiples capas.',
      source: 'https://en.wikipedia.org/wiki/Deep_learning',
    },
    {
      id: 4,
      text:
        'La UNESCO publicó en 2021 una recomendación global sobre ética de la IA (transparencia, equidad, supervisión humana).',
      source: 'https://unesdoc.unesco.org/ark:/48223/pf0000380455',
    },
  ]
  res.json(facts)
})

// ---------- AUTH: registro, login y perfil ----------
/**
 * POST /api/auth/register
 * body: { name, email, password }
 * crea usuario con password cifrado y devuelve { user, token }
 */
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body || {}
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email y password son requeridos' })
  }

  const users = readUsers()
  const exists = users.find(u => u.email.toLowerCase() === String(email).toLowerCase())
  if (exists) return res.status(409).json({ error: 'El email ya está registrado' })

  if (String(password).length < 8) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' })
  }

  const passwordHash = await bcrypt.hash(String(password), 12)
  const user: User = {
    id: generateId(),
    name: String(name),
    email: String(email).toLowerCase(),
    passwordHash,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  writeUsers(users)

  const token = generateToken(user)
  return res.status(201).json({
    user: { id: user.id, name: user.name, email: user.email },
    token,
  })
})

/**
 * POST /api/auth/login
 * body: { email, password }
 * valida credenciales y devuelve { user, token }
 */
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ error: 'email y password son requeridos' })

  const users = readUsers()
  const user = users.find(u => u.email === String(email).toLowerCase())
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' })

  const ok = await bcrypt.compare(String(password), user.passwordHash)
  if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' })

  const token = generateToken(user)
  return res.json({ user: { id: user.id, name: user.name, email: user.email }, token })
})

/**
 * GET /api/me
 * header: Authorization: Bearer <token>
 * devuelve info del usuario autenticado
 */
app.get('/api/me', authMiddleware, (req, res) => {
  const auth = (req as any).auth as { sub: string }
  const users = readUsers()
  const user = users.find(u => u.id === auth.sub)
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
  return res.json({ id: user.id, name: user.name, email: user.email })
})

// ====== NOTES CRUD (GET/POST/PUT/DELETE) ======
app.get('/api/notes', authMiddleware, (req, res) => {
  const auth = (req as any).auth as { sub: string }
  const notes = readNotes().filter(n => n.userId === auth.sub)
  res.json(notes)
})

app.post('/api/notes', authMiddleware, (req, res) => {
  const auth = (req as any).auth as { sub: string }
  const { title, content } = req.body || {}
  if (!title || !content) return res.status(400).json({ error: 'title y content son requeridos' })

  const notes = readNotes()
  const now = new Date().toISOString()
  const note: Note = {
    id: generateId(),
    userId: auth.sub,
    title: String(title),
    content: String(content),
    createdAt: now,
    updatedAt: now,
  }
  notes.push(note)
  writeNotes(notes)
  res.status(201).json(note)
})

app.put('/api/notes/:id', authMiddleware, (req, res) => {
  const auth = (req as any).auth as { sub: string }
  const { id } = req.params
  const { title, content } = req.body || {}
  const notes = readNotes()
  const idx = notes.findIndex(n => n.id === id && n.userId === auth.sub)
  if (idx === -1) return res.status(404).json({ error: 'Nota no encontrada' })
  if (title != null) notes[idx].title = String(title)
  if (content != null) notes[idx].content = String(content)
  notes[idx].updatedAt = new Date().toISOString()
  writeNotes(notes)
  res.json(notes[idx])
})

app.delete('/api/notes/:id', authMiddleware, (req, res) => {
  const auth = (req as any).auth as { sub: string }
  const { id } = req.params
  const notes = readNotes()
  const before = notes.length
  const afterNotes = notes.filter(n => !(n.id === id && n.userId === auth.sub))
  if (afterNotes.length === before) return res.status(404).json({ error: 'Nota no encontrada' })
  writeNotes(afterNotes)
  res.status(204).send()
})


app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en http://localhost:${PORT}`)
})
