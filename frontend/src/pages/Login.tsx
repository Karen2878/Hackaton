
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login as loginApi } from '../services/auth'
import { useAuth } from '../context/useAuth'
import AuthLayout from '../components/AuthLayout'

export default function Login() {
  const nav = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null); setLoading(true)
    try {
      const data = await loginApi(email, password)
      login(data)
      nav('/')
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Iniciar sesión"
      subtitle="Accede a tu cuenta para gestionar notas y recursos de seguridad."
    >
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <div className="input-group">
            <span className="input-group-text" aria-hidden="true">
              {/* ícono sobrecarga mínima (sin libs) */}
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
              autoComplete="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>
          <div className="form-hint">Usa tu correo registrado.</div>
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
              autoComplete="current-password"
              placeholder="••••••••"
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
        </div>

        {error && <p className="text-danger mb-3">{error}</p>}

        <button className="btn btn-brand w-100" disabled={loading}>
          {loading ? 'Entrando…' : 'Entrar'}
        </button>

        <div className="divider" />

        <p className="text-center mb-0">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="fw-semibold">Crear cuenta</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
