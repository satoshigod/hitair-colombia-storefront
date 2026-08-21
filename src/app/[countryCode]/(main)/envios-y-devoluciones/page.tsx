import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { LEGAL } from "@lib/util/legal"

export const metadata: Metadata = {
  title: "Envios y Devoluciones | Hit-Air Colombia",
  description:
    "Costos y tiempos de envio a toda Colombia, restricciones para cartuchos de CO2 y proceso de cambios y devoluciones en Hit-Air Colombia.",
}

export default function EnviosYDevoluciones() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Envíos y Devoluciones</h1>
        <p className="ekv-page-subtitle">
          Cobertura nacional, tiempos de entrega y proceso de cambios
        </p>
      </div>

      <div className="ekv-page-body">
        <p className="ekv-legal-meta">Última actualización: {LEGAL.vigencia}</p>

        <section className="ekv-page-section">
          <h2>Costo de envío</h2>
          <ul className="ekv-page-list">
            <li>
              <strong>Tarifa única nacional:</strong> $18.000 COP a cualquier ciudad del
              país con cobertura de la transportadora.
            </li>
            <li>
              <strong>Envío gratis</strong> en pedidos iguales o superiores a $250.000 COP.
            </li>
          </ul>
        </section>

        <section className="ekv-page-section">
          <h2>Tiempos de entrega</h2>
          <p>
            Los pedidos confirmados antes de las 2:00 p.m. en día hábil se despachan el
            mismo día; los posteriores, al siguiente día hábil. A partir del despacho, los
            tiempos estimados de la transportadora son:
          </p>
          <ul className="ekv-page-list">
            <li><strong>Medellín y área metropolitana:</strong> 1 a 2 días hábiles.</li>
            <li><strong>Ciudades principales:</strong> 2 a 4 días hábiles.</li>
            <li><strong>Municipios y zonas rurales:</strong> 4 a 8 días hábiles.</li>
          </ul>
          <p>
            Al despachar recibirás por correo el número de guía para hacer seguimiento.
            Los tiempos son estimados de la transportadora y pueden variar por causas
            ajenas a nosotros, como clima, orden público o congestión operativa.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Cartuchos de CO₂: restricción de transporte</h2>
          <p>
            Los cartuchos de CO₂ son <strong>mercancía peligrosa clase 2.2</strong> (gas
            no inflamable a presión) y no pueden transportarse por vía aérea en el canal
            de mensajería estándar.
          </p>
          <p>
            Esto significa que los destinos que se atienden únicamente por avión —como San
            Andrés, Providencia, Leticia y varias poblaciones de Amazonas, Vaupés y
            Guainía— <strong>no pueden recibir cartuchos de CO₂</strong> por este medio.
            Los chalecos y chaquetas sí se despachan con normalidad.
          </p>
          <p>
            Si tu destino está en esa condición, escríbenos a{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> antes de comprar y
            buscamos una alternativa terrestre o marítima.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Recibir el pedido</h2>
          <p>
            Revisa el paquete al momento de la entrega. Si el empaque llega abierto,
            mojado o visiblemente dañado, déjalo consignado en la guía de la transportadora
            y avísanos el mismo día con fotos. Ese registro es lo que permite reclamar.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Cambios de talla</h2>
          <p>
            La talla es determinante para que el airbag funcione: una prenda holgada
            reduce la protección. Si te queda mal, tienes{" "}
            <strong>cinco (5) días hábiles</strong> desde la entrega para solicitar el
            cambio, siempre que la prenda esté sin uso, con etiquetas y empaque original,
            y con el cartucho de CO₂ sin perforar.
          </p>
          <p>
            El costo del envío de ida y vuelta del cambio corre por cuenta del comprador.
            Antes de comprar, consulta la{" "}
            <LocalizedClientLink href="/guia-de-tallas">Guía de tallas</LocalizedClientLink>{" "}
            o escríbenos y te asesoramos.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Devoluciones</h2>
          <p>
            Puedes ejercer el derecho de retracto dentro de los cinco (5) días hábiles
            siguientes a la entrega, en los términos descritos en las{" "}
            <LocalizedClientLink href="/condiciones-de-venta">
              Condiciones de Venta
            </LocalizedClientLink>
            . No se aceptan devoluciones de productos cuyo sistema airbag haya sido
            activado o cuyo cartucho haya sido perforado.
          </p>
          <p>
            Para iniciar el proceso escríbenos a{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> con tu número de pedido y
            el motivo. Te indicamos la dirección de retorno y el procedimiento.
          </p>
        </section>

        <section className="ekv-page-section ekv-section-tip">
          <h2>Garantía</h2>
          <p>
            Los defectos de fabricación se atienden por garantía legal, no por devolución.
            El detalle de cobertura, exclusiones y trámite está en las{" "}
            <LocalizedClientLink href="/condiciones-de-venta">
              Condiciones de Venta
            </LocalizedClientLink>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
