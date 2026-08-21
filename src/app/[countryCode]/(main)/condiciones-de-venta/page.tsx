import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { LEGAL } from "@lib/util/legal"

export const metadata: Metadata = {
  title: "Condiciones de Venta | Hit-Air Colombia",
  description:
    "Condiciones de venta de Hit-Air Colombia: precios, pago, derecho de retracto, garantia legal y reversion del pago conforme al Estatuto del Consumidor.",
}

export default function CondicionesVenta() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Condiciones de Venta</h1>
        <p className="ekv-page-subtitle">
          Ley 1480 de 2011 (Estatuto del Consumidor) y Ley 527 de 1999
        </p>
      </div>

      <div className="ekv-page-body">
        <p className="ekv-legal-meta">Última actualización: {LEGAL.vigencia}</p>

        <section className="ekv-page-section">
          <h2>1. Quién vende</h2>
          <p>
            Los productos ofrecidos en este sitio son vendidos por {LEGAL.razonSocial},
            NIT {LEGAL.nit}, con domicilio en {LEGAL.direccion}, que opera bajo el nombre
            comercial <strong>{LEGAL.nombreComercial}</strong> en calidad de distribuidor
            y representante autorizado de Hit-Air<sup>&reg;</sup> / {LEGAL.fabricante}{" "}
            ({LEGAL.fabricanteDireccion}) en territorio colombiano, para los segmentos de
            motociclismo y equitación.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>2. Precios y disponibilidad</h2>
          <p>
            Todos los precios se expresan en <strong>pesos colombianos (COP)</strong> e
            incluyen el IVA aplicable. El precio no incluye el costo de envío, que se
            calcula y muestra antes de confirmar el pedido.
          </p>
          <p>
            Los precios y la disponibilidad pueden cambiar sin previo aviso. Si detectamos
            un error evidente de precio o un producto sin existencias después de recibir
            tu pedido, te contactaremos para ofrecerte la corrección, la sustitución o el
            reembolso total.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>3. Pago</h2>
          <p>
            El pago se procesa a través de una pasarela autorizada. No almacenamos datos
            completos de tarjetas. El pedido se confirma únicamente cuando la pasarela
            aprueba la transacción; una transacción pendiente o rechazada no genera
            reserva de inventario.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>4. Derecho de retracto</h2>
          <p>
            En las ventas a distancia, el artículo 47 del Estatuto del Consumidor te
            concede el <strong>derecho de retracto dentro de los cinco (5) días hábiles</strong>{" "}
            siguientes a la entrega del producto, sin necesidad de justificar tu decisión.
          </p>
          <ul className="ekv-page-list">
            <li>
              El producto debe devolverse en las mismas condiciones en que se recibió: sin
              uso, con etiquetas, empaque original y accesorios completos.
            </li>
            <li>
              El costo del transporte de devolución y los demás costos asociados corren
              por cuenta del consumidor.
            </li>
            <li>
              Recibida y verificada la devolución, reintegramos el dinero en un plazo
              máximo de treinta (30) días calendario.
            </li>
          </ul>
          <p>
            <strong>Excepción por seguridad:</strong> un chaleco o chaqueta airbag cuyo
            cartucho de CO₂ haya sido perforado o cuyo sistema haya sido activado no puede
            devolverse por retracto, porque el producto ya fue usado. En ese caso aplica
            la garantía o la recarga del cartucho, según corresponda.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>5. Reversión del pago</h2>
          <p>
            Conforme al artículo 51 del Estatuto del Consumidor, puedes solicitar la
            reversión del pago cuando seas víctima de fraude, cuando la operación no
            corresponda a un bien solicitado, cuando el producto no sea recibido, o cuando
            el bien entregado sea defectuoso o no corresponda a lo pedido. La solicitud
            debe presentarse dentro de los cinco (5) días hábiles siguientes al hecho, y
            debe dirigirse también a tu entidad emisora del medio de pago.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>6. Garantía legal</h2>
          <p>
            Todos los productos cuentan con la garantía legal prevista en los artículos 7
            y siguientes de la Ley 1480 de 2011, que cubre defectos de fabricación y de
            funcionamiento del sistema airbag.
          </p>
          <ul className="ekv-page-list">
            <li>
              <strong>Cubre:</strong> fallas de materiales, costuras, herrajes, mecanismo
              de disparo y sistema de inflado atribuibles a fabricación.
            </li>
            <li>
              <strong>No cubre:</strong> desgaste normal por uso, daño por caída o
              accidente, activación del sistema en condiciones de uso previstas,
              modificaciones o reparaciones no autorizadas, uso de cartuchos de CO₂ no
              originales, ni daños por almacenamiento o lavado contrarios al manual.
            </li>
          </ul>
          <p>
            Para hacer efectiva la garantía escríbenos a{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> con tu número de pedido y
            evidencia fotográfica. Cuando el diagnóstico lo requiera, el caso se escala al
            fabricante en Japón.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>7. Uso seguro del producto</h2>
          <p>
            Los productos Hit-Air<sup>&reg;</sup> son equipos de protección personal que
            reducen el riesgo de lesión, pero <strong>no eliminan</strong> la posibilidad
            de sufrir daño en un accidente. Su eficacia depende del uso correcto: talla
            adecuada, conexión del cable de activación al punto de anclaje, cartucho de
            CO₂ original correctamente instalado y mantenimiento conforme al manual del
            fabricante.
          </p>
          <p>
            El airbag no sustituye el casco ni los demás elementos de protección exigidos
            por la normativa de tránsito colombiana.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>8. Productos originales</h2>
          <p>
            Comercializamos exclusivamente producto original importado de forma directa
            desde {LEGAL.fabricante}. El uso de cartuchos de CO₂ o repuestos no originales
            anula la garantía y puede impedir el despliegue del airbag.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>9. Atención al consumidor</h2>
          <p>
            Canal de peticiones, quejas y reclamos:{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>. Respondemos en un máximo
            de quince (15) días hábiles. Si no estás conforme con la respuesta, puedes
            acudir a la Superintendencia de Industria y Comercio.
          </p>
        </section>

        <section className="ekv-page-section ekv-section-tip">
          <h2>Documentos relacionados</h2>
          <p>
            Consulta también nuestra{" "}
            <LocalizedClientLink href="/politica-de-privacidad">
              Política de Privacidad
            </LocalizedClientLink>{" "}
            y las condiciones de{" "}
            <LocalizedClientLink href="/envios-y-devoluciones">
              Envíos y Devoluciones
            </LocalizedClientLink>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
