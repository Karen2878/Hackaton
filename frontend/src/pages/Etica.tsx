/* Mantiene el contenido existente y agrega contenedores con imágenes y secciones diferenciadas. */

export default function Etica() {
  return (
    <section>
      {/* HERO */}
      <section className="section">
        <div className="container page-container">
          <span className="eyebrow">Lineamientos</span>
          <h1 className="section-title">Buenas Prácticas y Cumplimiento</h1>
          <p className="lead">
            La seguridad debe equilibrar privacidad, transparencia y responsabilidad a lo largo del ciclo de vida.
          </p>
        </div>
      </section>

      {/* BLOQUE 1: Imagen + texto (manteniendo el contenido actual y ampliando) */}
      <section className="section section--muted">
        <div className="container page-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                className="img-fluid shadow-soft"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
                alt="Equipo colaborando en políticas y cumplimiento"
              />
            </div>
            <div className="col-lg-6">
              {/* CONTENIDO EXISTENTE */}
              <h2 className="h4 mb-3">Principios esenciales</h2>
              <ul className="mb-3">
                <li><strong>Privacidad por diseño</strong>: recolecta lo mínimo necesario y protege datos sensibles.</li>
                <li><strong>Principio de mínimo privilegio</strong>: acceso estricto según función.</li>
                <li><strong>Monitoreo y registro</strong>: registra eventos relevantes y revisa alertas.</li>
                <li><strong>Gestión de vulnerabilidades</strong>: ciclo continuo de descubrimiento, evaluación, remediación y verificación.</li>
                <li><strong>Divulgación responsable</strong>: procesos para reportar fallos de forma segura y ética.</li>
              </ul>

              <p className="mb-2">Marcos y estándares útiles:</p>
              <ul className="mb-0">
                <li><a href="https://www.nist.gov/cyberframework" target="_blank" rel="noreferrer">NIST Cybersecurity Framework</a></li>
                <li><a href="https://owasp.org/www-project-proactive-controls/" target="_blank" rel="noreferrer">OWASP Proactive Controls</a></li>
                <li><a href="https://www.iso.org/standard/82875.html" target="_blank" rel="noreferrer">ISO/IEC 27001 (SGSI)</a></li>
              </ul>
            </div>
          </div>

          <div className="alert alert-brand mt-4 mb-0">
            <strong>Nota:</strong> adapta políticas y controles al contexto de tu organización (riesgos, normativas locales, activos críticos).
          </div>
        </div>
      </section>

      {/* BLOQUE 2: Controles por dominio */}
      <section className="section">
        <div className="container page-container">
          <span className="eyebrow">Controles</span>
          <h2 className="section-title">Políticas y Controles Clave</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card card-security h-100">
                <div className="card-body">
                  <h3 className="h6">Gobierno & Riesgo</h3>
                  <ul className="mb-0">
                    <li>Gestión de riesgos con apetito definido.</li>
                    <li>Políticas actualizadas y aprobadas.</li>
                    <li>Dueños de control y métricas.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-security h-100">
                <div className="card-body">
                  <h3 className="h6">Protección de Datos</h3>
                  <ul className="mb-0">
                    <li>Clasificación y etiquetado.</li>
                    <li>Cifrado E2E y gestión de llaves.</li>
                    <li>Retención y destrucción segura.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-security h-100">
                <div className="card-body">
                  <h3 className="h6">Respuesta & Continuidad</h3>
                  <ul className="mb-0">
                    <li>Plan de respuesta a incidentes.</li>
                    <li>Simulacros y lecciones aprendidas.</li>
                    <li>BCP/DRP probados regularmente.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* BLOQUE 2.1: Ilustración adicional */}
          <div className="row align-items-center g-4 mt-1">
            <div className="col-lg-6">
              <img
                className="img-fluid shadow-soft"
                src="../img/3OIP.webp"
                alt="Centro de operaciones de seguridad (SOC)"
              />
            </div>
            <div className="col-lg-6">
              <div className="border-soft pad rnd h-100">
                <h3 className="h5">Auditoría y Mejora Continua</h3>
                <p className="text-ink-2 mb-2">
                  Realiza auditorías internas/externas, gestiona hallazgos y mide KPIs de eficacia de controles.
                </p>
                <ul className="mb-0">
                  <li>Checklist de cumplimiento por normativa.</li>
                  <li>Evidencia de controles y trazabilidad.</li>
                  <li>Plan de remediación con responsables y fechas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: Cierre con CTA */}
      <section className="section section--alt">
        <div className="container page-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="h4 mb-2">De políticas a práctica</h2>
              <p className="text-ink-2 mb-0">
                Empieza pequeño: define 3 políticas críticas, 5 controles medibles y un calendario de revisión trimestral.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="btn btn-brand" href="https://owasp.org/Top10/" target="_blank" rel="noreferrer">
                Ver OWASP Top 10
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
