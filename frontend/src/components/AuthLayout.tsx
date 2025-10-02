import type { ReactNode } from 'react'

export default function AuthLayout({
  title,
  subtitle,
  children,
  color = 'default', // 'default' | 'brand'
}: {
  title: string
  subtitle?: string
  children: ReactNode
  color?: 'default' | 'brand'
}) {
  const isBrand = color === 'brand'
  return (
    <section className={`section auth-screen ${isBrand ? 'auth-screen--brand' : ''}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-11 col-md-9 col-lg-7 col-xl-5">
            <div className={`card auth-card ${isBrand ? 'auth-card--brand text-white' : 'shadow-soft'}`}>
              <div className="card-body p-4 p-md-5">
                <h1 className="h3 mb-1">{title}</h1>
                {subtitle && <p className="text-muted mb-4">{subtitle}</p>}
                {children}
              </div>
            </div>
            <p className={`text-center mt-3 small ${isBrand ? 'text-white' : 'text-muted'}`}>
              © 2025 Seguridad Informática — Protege. Previene. Responde.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
