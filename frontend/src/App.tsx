import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Aprende from './pages/Aprende'
import Etica from './pages/Etica'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuth } from './context/useAuth'
import Notas from './pages/Notas'

export default function App() {
  const { isAuth, user, logout } = useAuth()
  const nav = useNavigate()

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* NAVBAR BOOTSTRAP */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-brand sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">CiberConCiencia</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                  aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aprende" className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>Aprende</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/etica" className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>Ética</NavLink>
              </li>
              <li className="nav-item">
                {isAuth && (
                  <NavLink to="/notas" className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>Notas</NavLink>
                )}
              </li>  
            </ul>

            <div className="d-flex align-items-center gap-2">
              {!isAuth ? (
                <>
                  <NavLink to="/login" className={({isActive}) => 'btn btn-nav' + (isActive ? ' active' : '')}>Entrar</NavLink>
                  <NavLink to="/register" className="btn btn-nav">Registro</NavLink>
                </>
              ) : (
                <>
                  <span className="text-light">Hola, <strong>{user?.name}</strong></span>
                  <button className="btn btn-outline-warning"
                          onClick={() => { logout(); nav('/'); }}>
                    Salir
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="container py-4 page-container flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aprende" element={<Aprende />} />
          <Route path="/etica" element={<Etica />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notas" element={<Notas />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bsite-footer bg-brand-600 text-white py-3 mt-auto text-center">
        <div className="container">
          <small>Karen Sofía Rueda Piñeros * CiberConCiencia © 2025</small>
        </div>
      </footer>
    </div>
  )
}
