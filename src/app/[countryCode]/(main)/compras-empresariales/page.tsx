import { Metadata } from "next"
import BusinessRegistrationForm from "@modules/business/components/registration-form"

export const metadata: Metadata = {
  title: "Compras Empresariales | Hit-Air Colombia",
  description:
    "¿Tienes un concesionario, escuela de manejo o flota de motos? Regístrate como cliente empresarial de Hit-Air Colombia y accede a condiciones especiales en chalecos airbag.",
}

export default function ComprasEmpresariales() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Compras Empresariales</h1>
        <p className="ekv-page-subtitle">
          Condiciones especiales para concesionarios, escuelas de manejo, flotas y revendedores
        </p>
      </div>

      <div className="ekv-page-body">
        <section className="ekv-page-section">
          <h2>¿Ya compraste con nosotros?</h2>
          <p>
            Si tu empresa ya ha realizado compras en Hit-Air Colombia, puedes acceder
            directamente con tu cuenta. No es necesario registrarte de nuevo.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a href="/account" className="ekv-btn-primary">
              Iniciar sesión
            </a>
          </div>
        </section>

        <section className="ekv-page-section">
          <h2>Beneficios para clientes empresariales</h2>
          <ul className="ekv-page-list">
            <li>Precios especiales por volumen en chalecos airbag Hit-Air</li>
            <li>Asesoría técnica para equipar flotas o comunidades de motociclistas</li>
            <li>Prioridad en stock para escuelas de manejo y concesionarios</li>
            <li>Factura a nombre de la empresa</li>
            <li>Envío a toda Colombia con seguimiento</li>
            <li>Atención directa con un asesor comercial</li>
          </ul>
        </section>

        <section className="ekv-page-section ekv-section-tip">
          <h2>¿Para quién es este programa?</h2>
          <ul className="ekv-page-list">
            <li>Concesionarios y tiendas de motos</li>
            <li>Escuelas de conducción y manejo</li>
            <li>Empresas de rental o alquiler de motos</li>
            <li>Clubes y comunidades de motociclistas</li>
            <li>Flotas corporativas, mensajería y delivery</li>
            <li>Revendedores de equipamiento de moto</li>
          </ul>
        </section>

        <section className="ekv-page-section">
          <h2>Regístrate como cliente empresarial</h2>
          <p>
            Completa el formulario con los datos de tu empresa. Nuestro equipo revisará tu
            solicitud y te contactará en máximo 2 días hábiles.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <BusinessRegistrationForm />
          </div>
        </section>

        <div className="ekv-page-cta">
          <p>¿Prefieres hablar directamente con nosotros?</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "0.5rem" }}>
            <a href="mailto:hola@hitaircolombia.co?subject=Registro%20cliente%20empresarial" className="ekv-btn-primary">
              hola@hitaircolombia.co
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
