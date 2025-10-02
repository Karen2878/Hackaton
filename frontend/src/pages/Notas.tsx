import { useEffect, useState } from 'react'
import { useAuth } from '../context/useAuth'
import { listNotes, createNote, updateNote, deleteNote, type Note } from '../services/notes'

export default function Notas() {
  const { token, isAuth } = useAuth()
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isAuth || !token) return
    (async () => {
      setLoading(true)
      try { setNotes(await listNotes(token)) }
      catch (e: any) { setError(e.message) }
      finally { setLoading(false) }
    })()
  }, [isAuth, token])

  async function onCreate(e: React.FormEvent) {
    e.preventDefault()
    if (!token) return
    setError(null)
    try {
      const n = await createNote(token, title, content)
      setNotes([n, ...notes])
      setTitle(''); setContent('')
    } catch (e: any) { setError(e.message) }
  }

  async function onEdit(note: Note) {
    if (!token) return
    const newTitle = prompt('Nuevo título', note.title)
    if (newTitle == null) return
    const newContent = prompt('Nuevo contenido', note.content)
    if (newContent == null) return
    try {
      const updated = await updateNote(token, note.id, { title: newTitle, content: newContent })
      setNotes(notes.map(n => (n.id === note.id ? updated : n)))
    } catch (e: any) { setError(e.message) }
  }

  async function onDelete(id: string) {
    if (!token) return
    if (!confirm('¿Eliminar nota?')) return
    try {
      await deleteNote(token, id)
      setNotes(notes.filter(n => n.id !== id))
    } catch (e: any) { setError(e.message) }
  }

  if (!isAuth) return <p>Debes iniciar sesión para ver tus notas.</p>

  return (
    <section>
      <h1 className="mb-3">Notas</h1>

      <form onSubmit={onCreate} className="card p-3 mb-3" style={{ maxWidth: 520 }}>
        <label className="form-label">Título
          <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
        </label>
        <label className="form-label">Contenido
          <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)} required />
        </label>
        <button className="btn btn-primary mt-2">Crear</button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>

      {loading ? <p>Cargando...</p> : (
        <div className="row g-3">
          {notes.map(n => (
            <div className="col-md-6 col-lg-4" key={n.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{n.title}</h5>
                  <p className="card-text">{n.content}</p>
                </div>
                <div className="card-footer d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => onEdit(n)}>Editar</button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(n.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          {notes.length === 0 && <p className="text-secondary">No tienes notas aún.</p>}
        </div>
      )}
    </section>
  )
}
