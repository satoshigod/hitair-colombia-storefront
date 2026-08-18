import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Logo from "@modules/ekivibes/logo"

const EQUITACION_URL = "https://ekivibes-storefront-production.up.railway.app/co/equitacion"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <Logo color="#D62828" height={36} className="lh" />
            <span className="lt">HIT-AIR COLOMBIA</span>
          </div>
          <p className="footer-desc">
            Distribuidor exclusivo de Hit-Air para motociclismo en Colombia.
            Productos originales, tecnologia japonesa y envio a todo el pais.
          </p>
        </div>
        <div className="footer-col">
          <h5>Categorias</h5>
          <ul>
            <li><LocalizedClientLink href="/categories/chaquetas-y-chalecos-moto">Chaquetas y chalecos</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/categories/accesorios-moto">Accesorios</LocalizedClientLink></li>
            <li><a href={EQUITACION_URL}>Equitacion (Ekivibes)</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Ayuda</h5>
          <ul>
            <li>Envios y devoluciones</li>
            <li>Contacto</li>
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
          <h5>Contacto</h5>
          <ul>
            <li>Medellin, Colombia</li>
            <li>hola@hitaircolombia.co</li>
            <li>@hitair.colombia</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Hit-Air Colombia. Todos los derechos reservados.</span>
        <span>Protegido desde 1995</span>
      </div>
    </footer>
  )
}
