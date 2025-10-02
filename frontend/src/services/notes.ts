import type { } from 'react' // (solo para mantener TS feliz si tu config lo requiere)

export type Note = {
  id: string
  userId: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export async function listNotes(token: string): Promise<Note[]> {
  const res = await fetch('/api/notes', { headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) throw new Error('Error al listar notas')
  return res.json()
}

export async function createNote(token: string, title: string, content: string): Promise<Note> {
  const res = await fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ title, content })
  })
  if (!res.ok) throw new Error('Error al crear nota')
  return res.json()
}

export async function updateNote(token: string, id: string, patch: Partial<Pick<Note,'title'|'content'>>): Promise<Note> {
  const res = await fetch(`/api/notes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(patch)
  })
  if (!res.ok) throw new Error('Error al actualizar nota')
  return res.json()
}

export async function deleteNote(token: string, id: string): Promise<void> {
  const res = await fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  })
  if (!res.ok && res.status !== 204) throw new Error('Error al eliminar nota')
}
