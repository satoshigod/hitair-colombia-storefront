import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HitAirLogoPlain } from "@modules/ekivibes/brand/hitair-logo"
import OfficialSeal from "@modules/ekivibes/brand/official-seal"

const EQUITACION_URL = "https://ekivibes-storefront-production.up.railway.app/co/equitacion"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <HitAirLogoPlain height={30} className="lh" />
            <span className="lt">COLOMBIA</span>
          </div>
          <p className="footer-desc">
            Sitio oficial de Hit-Air en Colombia. Distribuidor exclusivo de la
            marca para los dos segmentos: motociclismo y equitacion. Productos
            originales importados de Japon y envio a todo el pais.
          </p>
        </div>
        <div className="footer-col">
          <h5>Categorias</h5>
          <ul>
            <li><LocalizedClientLink href="/categories/chaquetas-y-chalecos-moto">Chaquetas y chalecos</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/categories/accesorios-moto">Accesorios</LocalizedClientLink></li>
            <li><a href={EQUITACION_URL}>Equitacion &mdash; division ecuestre</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Ayuda</h5>
          <ul>
            <li><LocalizedClientLink href="/envios-y-devoluciones" className="footer-link">Envios y devoluciones</LocalizedClientLink></li>
            <li><a href="mailto:hola@hitaircolombia.co" className="footer-link">Contacto</a></li>
            <li><LocalizedClientLink href="/compras-empresariales" className="footer-link">Compras empresariales</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/hazte-distribuidor" className="footer-link">Hazte distribuidor</LocalizedClientLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Hit-Air</h5>
          <ul>
            <li><LocalizedClientLink href="/acerca-de-hit-air" className="footer-link">Acerca de Hit-Air</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/guia-de-tallas" className="footer-link">Guia de tallas</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/preguntas-frecuentes" className="footer-link">Preguntas frecuentes</LocalizedClientLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><LocalizedClientLink href="/condiciones-de-venta" className="footer-link">Condiciones de venta</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/politica-de-privacidad" className="footer-link">Politica de privacidad</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/terminos-y-condiciones" className="footer-link">Terminos y condiciones</LocalizedClientLink></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contacto</h5>
          <ul>
            <li>Medellin, Colombia</li>
            <li><a href="mailto:hola@hitaircolombia.co" className="footer-link">hola@hitaircolombia.co</a></li>
            <li><a href="https://www.instagram.com/hitair.colombia" target="_blank" rel="noopener noreferrer" className="footer-link">@hitair.colombia</a></li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
      <OfficialSeal variant="band" />

      <div className="footer-bottom">
        <p className="footer-legal">
          © {new Date().getFullYear()} Hit-Air Colombia. Distribuidor y
          representante autorizado de Hit-Air<sup>&reg;</sup> / Mugen Denko Co., Ltd.
          en territorio colombiano.
        </p>
        <p className="footer-legal-sub">
          Hit-Air<sup>&reg;</sup> es una marca registrada de Mugen Denko Co., Ltd.
          (Nagoya, Japon). Protegido desde 1995.
        </p>
      </div>
    </footer>
  )
}
