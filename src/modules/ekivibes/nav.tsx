import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HitAirLogo } from "@modules/ekivibes/brand/hitair-logo"
import CartMenu from "@modules/ekivibes/cart-menu"

// Hit-Air Colombia es el sitio oficial de la marca en el pais y ostenta la
// distribucion exclusiva de AMBOS segmentos: motociclismo y equitacion.
// Por decision comercial el catalogo ecuestre se atiende bajo la marca
// Ekivibes, que es la division ecuestre de la misma casa (Soulbyte S.A.S.).
// El nav separa MOTO / EQUITACION igual que los sitios oficiales de
// referencia (hit-air-france.fr), pero la representacion es una sola.
const EQUITACION_URL = "https://ekivibes-storefront-production.up.railway.app/co/equitacion"

// Handles de las categorias en Medusa (exclusivas del canal Hit-Air Colombia).
// Mismo patron de separacion que usa el nav de Ekivibes, donde "Airbags" y
// "Accesorios" apuntan directo a /categories/<handle>.
const CAT_CHAQUETAS = "/categories/chaquetas-y-chalecos-moto"
const CAT_ACCESORIOS = "/categories/accesorios-moto"

export default function Nav() {
  return (
    <header>
      <div className="topbar">
        <span>Envio a toda Colombia</span>
        <span>Distribuidor exclusivo en Colombia &middot; Moto y Equitacion</span>
        <span>Fabricado en Japon &middot; Certificacion CE</span>
      </div>
      <nav className="nav">
        <LocalizedClientLink href="/" className="logo" aria-label="Hit-Air Colombia - inicio">
          <HitAirLogo height={38} className="brand-mark" />
          <span className="brand-region">
            <span className="brand-country">COLOMBIA</span>
            <span className="brand-sep" aria-hidden="true">|</span>
            <span className="brand-role">Distribuidor Autorizado</span>
          </span>
        </LocalizedClientLink>
        <div className="nav-menu">
          <LocalizedClientLink href="/store">Catalogo</LocalizedClientLink>
          <LocalizedClientLink href={CAT_CHAQUETAS}>Chaquetas y Chalecos</LocalizedClientLink>
          <LocalizedClientLink href={CAT_ACCESORIOS}>Accesorios</LocalizedClientLink>
          <LocalizedClientLink href="/acerca-de-hit-air">Tecnologia</LocalizedClientLink>
          <LocalizedClientLink href="/preguntas-frecuentes">FAQ</LocalizedClientLink>
          <a
            href={EQUITACION_URL}
            className="nav-crosslink"
            title="Equitacion — division ecuestre de Hit-Air Colombia (Ekivibes)"
          >
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
