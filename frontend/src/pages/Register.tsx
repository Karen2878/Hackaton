
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { register as registerApi } from '../services/auth'
import { useAuth } from '../context/useAuth'
import AuthLayout from '../components/AuthLayout'

export default function Register() {
  const nav = useNavigate()
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null); setLoading(true)
    try {
      if (password.length < 8) throw new Error('La contraseña debe tener al menos 8 caracteres')
      const data = await registerApi(name, email, password)
      login(data) // autologin
      nav('/')
    } catch (err: any) {
      setError(err.message || 'Error al registrarse')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Crear cuenta"
      subtitle="Regístrate para empezar a gestionar tus notas y recursos de seguridad."
    >
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <div className="input-group">
            <span className="input-group-text" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <input
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-hint">Usa un correo válido. Te servirá para recuperar acceso.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <div className="input-group">
            <span className="input-group-text" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            <input
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type={showPass ? 'text' : 'password'}
              placeholder="Mínimo 8 caracteres"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPass(s => !s)}
              aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPass ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          <div className="form-hint">Recomendado: combina letras mayúsculas, minúsculas y números.</div>
        </div>

        {error && <p className="text-danger mb-3">{error}</p>}

        <button className="btn btn-brand w-100" disabled={loading}>
          {loading ? 'Creando…' : 'Registrarme'}
        </button>

        <div className="divider" />

        <p className="text-center mb-0">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="fw-semibold">Inicia sesión</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
