export default function Home() {
  return (
    <section>
      {/* Hero */}
      <div className="py-4 text-center">
        <h1 className="display-5 fw-bold">Seguridad Informática</h1>
        <p className="lead text-secondary mb-0">
          Protege la confidencialidad, integridad y disponibilidad de la información (Triada CIA).
        </p>
      </div>

      {/* Sección 1: Fundamentos + Imagen */}
      <div className="container my-4">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop"
              alt="Candado sobre teclado representando seguridad"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="h3 mb-3">Fundamentos clave</h2>
            <ul className="list-unstyled mb-3">
              <li>• <strong>Confidencialidad</strong>: solo quien debe, accede.</li>
              <li>• <strong>Integridad</strong>: los datos no se alteran sin autorización.</li>
              <li>• <strong>Disponibilidad</strong>: servicios y datos cuando se necesitan.</li>
            </ul>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h6">Control de Acceso</h3>
                    <p className="mb-0">MFA, principio de mínimo privilegio y gestión de contraseñas.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h6">Gestión de Vulnerabilidades</h3>
                    <p className="mb-0">Parcheo periódico, escaneo y remediación priorizada por riesgo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 2: Amenazas + Imagen */}
      <div className="container my-4">
        <div className="row align-items-center g-4 flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
              alt="Código y candado representando ciberamenazas"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="h3 mb-3">Amenazas más comunes</h2>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h6">Phishing</h3>
                    <p className="mb-0">Correos/mensajes que suplantan identidad para robar credenciales o dinero.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h6">Ransomware</h3>
                    <p className="mb-0">Cifra archivos y exige pago. Copias de seguridad son esenciales.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h6">Ingeniería Social</h3>
                    <p className="mb-0">Manipulación psicológica para que el usuario conceda acceso.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h6">Vulnerabilidades Web</h3>
                    <p className="mb-0">Inyección, XSS, CSRF… aplica OWASP Top 10 para mitigarlas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-dark mt-3 mb-0">
              <strong>Tip:</strong> activa MFA, actualiza software y haz <em>backups</em> verificados.
            </div>
          </div>
        </div>
      </div>

      {/* Sección 3: Buenas prácticas + Recursos */}
      <div className="container my-4">
        <h2 className="h3 mb-3">Buenas prácticas</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h6">MFA & Passwords</h3>
                <p className="mb-0">Usa MFA y gestores de contraseñas; evita repetir claves entre servicios.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h6">Actualizaciones</h3>
                <p className="mb-0">Parchea SO, apps y firmware. Automatiza cuando sea posible.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h6">Copias y Recuperación</h3>
                <p className="mb-0">Prueba restauraciones. 3-2-1: tres copias, dos medios, uno fuera de línea.</p>
              </div>
            </div>
          </div>

          <iframe
            width="704"
            height="396"
            src="https://www.youtube.com/embed/c7wAz9w4urY"
            title="La ciberseguridad, tarea de todos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="h5 mt-4">Recursos recomendados</h2>
        <ul className="mb-0">
          <li><a href="https://owasp.org/Top10/" target="_blank" rel="noreferrer">OWASP Top 10</a></li>
          <li><a href="https://www.nist.gov/cyberframework" target="_blank" rel="noreferrer">NIST Cybersecurity Framework</a></li>
          <li><a href="https://www.cisa.gov/" target="_blank" rel="noreferrer">CISA (Estados Unidos)</a></li>
        </ul>
      </div>
    </section>
  )
}
