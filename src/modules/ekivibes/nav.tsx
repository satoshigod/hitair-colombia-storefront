import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Logo from "@modules/ekivibes/logo"
import CartMenu from "@modules/ekivibes/cart-menu"

// URL del storefront de Ekivibes (misma arquitectura multi-tienda, un solo
// backend). El link "Equitacion" saca al usuario del sitio Hit-Air Colombia
// (exclusivo moto) hacia la pagina de catalogo ecuestre en Ekivibes, tal
// como hacen los sitios oficiales de referencia (hit-air-france.fr separa
// EQUITATION / MOTO en el nav). No se muestra catalogo ecuestre aqui.
const EQUITACION_URL = "https://ekivibes-storefront-production.up.railway.app/co/equitacion"

export default function Nav() {
  return (
    <header>
      <div className="topbar">
        <span>Envio a toda Colombia</span>
        <span>Distribuidor exclusivo Hit-Air en Colombia</span>
        <span>Fabricado en Japon · Certificacion CE</span>
      </div>
      <nav className="nav">
        <LocalizedClientLink href="/" className="logo">
          <Logo height={40} />
          <span className="logo-text">HIT-AIR <span className="accent">COLOMBIA</span></span>
        </LocalizedClientLink>
        <div className="nav-menu">
          <LocalizedClientLink href="/store">Catalogo</LocalizedClientLink>
          <LocalizedClientLink href="/acerca-de-hit-air">Tecnologia</LocalizedClientLink>
          <LocalizedClientLink href="/preguntas-frecuentes">FAQ</LocalizedClientLink>
          <a href={EQUITACION_URL} className="nav-crosslink">
            Equitacion <span className="xic">&#8599;</span>
          </a>
        </div>
        <div className="nav-icons">
          <LocalizedClientLink href="/account" className="ic">
            Cuenta
          </LocalizedClientLink>
          <CartMenu />
        </div>
      </nav>
    </header>
  )
}
