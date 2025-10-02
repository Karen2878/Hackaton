/* Mantiene el contenido existente (facts locales) y agrega secciones con imágenes y contenedores. */

type Fact = { id: number; text: string; source: string }

const facts: Fact[] = [
  {
    id: 1,
    text: 'OWASP Top 10 resume las principales categorías de riesgos en aplicaciones web (inyección, XSS, control de acceso roto, etc.).',
    source: 'https://owasp.org/Top10/'
  },
  {
    id: 2,
    text: 'El Marco de Ciberseguridad de NIST (CSF) organiza actividades en identificar, proteger, detectar, responder y recuperar.',
    source: 'https://www.nist.gov/cyberframework'
  },
  {
    id: 3,
    text: 'La autenticación multifactor (MFA) reduce el riesgo de compromiso de cuentas por robo de credenciales.',
    source: 'https://www.cisa.gov/secure-our-world/use-strong-passwords-and-password-manager'
  },
  {
    id: 4,
    text: 'El enfoque 3-2-1 de copias de seguridad: 3 copias, 2 medios distintos, 1 copia fuera de línea o fuera del sitio.',
    source: 'https://www.cisa.gov/news-events/news/backing-your-data'
  },
  {
    id: 5,
    text: 'El principio de mínimo privilegio limita el impacto de cuentas comprometidas o errores de configuración.',
    source: 'https://csrc.nist.gov/glossary/term/least_privilege'
  }
]

export default function Aprende() {
  return (
    <section>
      {/* HERO */}
      <section className="section">
        <div className="container page-container">
          <span className="eyebrow">Aprendizaje</span>
          <h1 className="section-title">Aprende Seguridad Informática</h1>
          <p className="lead">
            Conceptos claros, guías rápidas y recursos verificados para fortalecer tus bases.
          </p>
        </div>
      </section>

      {/* BLOQUE 1: Introducción con imagen */}
      <section className="section section--muted">
        <div className="container page-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                className="img-fluid shadow-soft"
                src="../img/OIP.webp"
                alt="Candado sobre teclado: concepto de protección"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="h4 mb-3">Rutas de aprendizaje clave</h2>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="card card-security h-100">
                    <div className="card-body">
                      <h3 className="h6 mb-1">Identidad y Acceso</h3>
                      <p className="mb-0 text-ink-2">MFA, SSO, mínimo privilegio y revisiones periódicas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card card-security h-100">
                    <div className="card-body">
                      <h3 className="h6 mb-1">AppSec</h3>
                      <p className="mb-0 text-ink-2">OWASP Top 10, revisiones de código y pruebas de seguridad.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card card-security h-100">
                    <div className="card-body">
                      <h3 className="h6 mb-1">Protección de Datos</h3>
                      <p className="mb-0 text-ink-2">Cifrado en tránsito y en reposo, clasificación y retención.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card card-security h-100">
                    <div className="card-body">
                      <h3 className="h6 mb-1">Respuesta a Incidentes</h3>
                      <p className="mb-0 text-ink-2">Detección, contención, erradicación y recuperación.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="alert alert-brand mt-3 mb-0">
                <span className="badge-soft-brand me-2">Guía</span>
                Comienza por identidad/MFA y continua con AppSec para impacto inmediato.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: Guías rápidas */}
      <section className="section">
        <div className="container page-container">
          <span className="eyebrow">Guías</span>
          <h2 className="section-title">Buenas prácticas rápidas</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card h-100 shadow-soft">
                <div className="card-body">
                  <h3 className="h6">Contraseñas & MFA</h3>
                  <ul className="mb-0">
                    <li>Activa MFA en servicios críticos.</li>
                    <li>Usa gestor de contraseñas.</li>
                    <li>No reutilices credenciales.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-soft">
                <div className="card-body">
                  <h3 className="h6">Actualizaciones</h3>
                  <ul className="mb-0">
                    <li>Automatiza parches de SO/apps.</li>
                    <li>Incluye firmware y dependencias.</li>
                    <li>Prioriza por criticidad (CVSS).</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-soft">
                <div className="card-body">
                  <h3 className="h6">Backups 3-2-1</h3>
                  <ul className="mb-0">
                    <li>3 copias, 2 medios, 1 offline.</li>
                    <li>Prueba restauraciones periódicas.</li>
                    <li>Protege contra ransomware.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENIDO EXISTENTE: lista de facts con fuente */}
          <div className="divider" />
          <h3 className="h5 mb-2">Conceptos con fuente</h3>
          <ul className="list-group">
            {facts.map(f => (
              <li key={f.id} className="list-group-item">
                {f.text}{' '}
                <a href={f.source} target="_blank" rel="noreferrer">[fuente]</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOQUE 3: Recurso visual */}
      <section className="section section--alt">
        <div className="container page-container">
          <div className="row align-items-center g-4 flex-lg-row-reverse">
            <div className="col-lg-6">
              <img
                className="img-fluid shadow-soft"
                src="../img/2OIP.webp"
                alt="Código y candado: enfoque AppSec"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="h4 mb-2">Mapa mental: del riesgo a la acción</h2>
              <p className="text-ink-2 mb-3">
                Identifica activos, evalúa riesgos, prioriza controles y mide resultados. Itera en ciclos cortos.
              </p>
              <div className="alert alert-brand mb-0">
                <strong>Tip:</strong> adopta objetivos trimestrales (OKRs) de seguridad para mantener foco y ritmo.
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
