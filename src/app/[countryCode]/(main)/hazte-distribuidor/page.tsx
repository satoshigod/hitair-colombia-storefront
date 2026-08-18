import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Logo from "@modules/ekivibes/logo"
import DistributorRegistrationForm from "@modules/business/components/distributor-form"

export const metadata: Metadata = {
  title: "Hazte Distribuidor | Hit-Air Colombia",
  description:
    "Únete a la red de distribuidores de Hit-Air Colombia. Vende chalecos y chaquetas airbag para motociclistas con condiciones especiales para concesionarios y tiendas.",
}

const FEATURES = [
  "25 años de efectividad comprobada en el mundo",
  "Sin batería, sin mantenimiento",
  "Inflado en 0.1 - 0.25 segundos",
  "Tejido exterior 600D super reforzado",
  "Protección certificada CE, fabricado en Japón",
  "Distribuidor exclusivo autorizado en Colombia",
]

const BENEFITS = [
  "Precios especiales por volumen para reventa",
  "Zona de trabajo definida, sin competir con otro distribuidor en tu área",
  "Material de marca y apoyo para exhibir el producto en tu local",
  "Capacitación sobre el sistema airbag y su correcto uso",
  "Acompañamiento comercial directo con el equipo Hit-Air Colombia",
]

export default function HazteDistribuidor() {
  return (
    <>
      <div className="hero">
        <div className="hero-horse">
          <Logo color="#ffffff" height={200} />
        </div>
        <div className="hero-c">
          <h1>Hazte Distribuidor</h1>
          <p>
            Únete a la red de distribuidores Hit-Air Colombia y lleva la protección líder para
            motociclistas a tu zona.
          </p>
          <a href="#formulario">
            <button className="btn-gold">Quiero ser distribuidor</button>
          </a>
        </div>
      </div>

      <div className="ekv-page">
        <div className="ekv-page-body">
          <section className="ekv-page-section">
            <h2>¿Ya eres distribuidor Hit-Air Colombia?</h2>
            <p>
              Si ya tienes una cuenta comercial con nosotros, ingresa directamente para hacer tus
              pedidos. No es necesario que vuelvas a registrarte.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <LocalizedClientLink href="/account" className="ekv-btn-primary">
                Iniciar sesión
              </LocalizedClientLink>
            </div>
          </section>

          <section className="ekv-page-section ekv-section-tip">
            <h2>Por qué Hit-Air</h2>
            <ul className="ekv-page-list">
              {FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <section className="ekv-page-section">
            <h2>Beneficios de ser distribuidor</h2>
            <ul className="ekv-page-list">
              {BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section className="ekv-page-section" id="formulario">
            <h2>Consulta condiciones y disponibilidad en tu zona</h2>
            <p>
              Cuéntanos un poco sobre tu concesionario o tienda. Estaremos encantados de
              resolver todas tus dudas.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <DistributorRegistrationForm />
            </div>
          </section>

          <div className="ekv-page-cta">
            <p>¿Prefieres hablar directamente con nosotros?</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <a href="mailto:hola@hitaircolombia.co?subject=Quiero%20ser%20distribuidor" className="ekv-btn-primary">
                hola@hitaircolombia.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
