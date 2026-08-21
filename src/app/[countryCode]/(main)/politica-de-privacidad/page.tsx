import { Metadata } from "next"
import { LEGAL } from "@lib/util/legal"

export const metadata: Metadata = {
  title: "Politica de Privacidad | Hit-Air Colombia",
  description:
    "Politica de tratamiento de datos personales de Hit-Air Colombia conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013. Conoce tus derechos y como ejercerlos.",
}

export default function PoliticaPrivacidad() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Política de Privacidad</h1>
        <p className="ekv-page-subtitle">
          Política de Tratamiento de Datos Personales · Ley 1581 de 2012 y Decreto 1377 de 2013
        </p>
      </div>

      <div className="ekv-page-body">
        <p className="ekv-legal-meta">Última actualización: {LEGAL.vigencia}</p>

        <section className="ekv-page-section">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            {LEGAL.razonSocial}, sociedad comercial colombiana identificada con NIT{" "}
            {LEGAL.nit}, con domicilio en {LEGAL.direccion}, actúa bajo el nombre
            comercial <strong>{LEGAL.nombreComercial}</strong> y es responsable del
            tratamiento de los datos personales recolectados a través de este sitio.
          </p>
          <p>
            Canal de atención para asuntos de datos personales:{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>2. Datos que recolectamos</h2>
          <ul className="ekv-page-list">
            <li>
              <strong>Identificación y contacto:</strong> nombre, documento, correo
              electrónico, teléfono y dirección de entrega y facturación.
            </li>
            <li>
              <strong>Transaccionales:</strong> historial de pedidos, productos, valores
              y estado de envío. No almacenamos números completos de tarjeta: el pago se
              procesa directamente por la pasarela, que opera bajo sus propios estándares
              de seguridad.
            </li>
            <li>
              <strong>Datos de negocio:</strong> cuando te registras como empresa o
              solicitas distribución, recolectamos razón social, NIT, sector y volumen
              estimado de compra.
            </li>
            <li>
              <strong>Técnicos:</strong> dirección IP, tipo de dispositivo y navegador,
              y datos de navegación mediante cookies.
            </li>
          </ul>
        </section>

        <section className="ekv-page-section">
          <h2>3. Finalidades</h2>
          <ul className="ekv-page-list">
            <li>Procesar, despachar y hacer seguimiento a tus pedidos.</li>
            <li>Emitir facturación y cumplir obligaciones tributarias y contables.</li>
            <li>Atender solicitudes de garantía, cambios, devoluciones y soporte técnico.</li>
            <li>Gestionar solicitudes de compra empresarial y de distribución.</li>
            <li>
              Enviar comunicaciones comerciales sobre productos y promociones, únicamente
              con tu autorización previa y con opción de retiro en cada mensaje.
            </li>
            <li>Prevenir fraude y proteger la seguridad de la plataforma.</li>
          </ul>
          <p>
            No vendemos ni cedemos datos personales a terceros con fines comerciales.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>4. Encargados y transferencia internacional</h2>
          <p>
            Para operar la tienda utilizamos proveedores que actúan como encargados del
            tratamiento y que pueden alojar información fuera de Colombia: la pasarela de
            pagos, el operador logístico, el proveedor de correo transaccional y los
            servicios de alojamiento e infraestructura. Estas transferencias se realizan
            con las garantías exigidas por la Ley 1581 de 2012 y se limitan a lo necesario
            para prestar el servicio.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>5. Tus derechos como titular</h2>
          <p>Conforme al artículo 8 de la Ley 1581 de 2012, tienes derecho a:</p>
          <ul className="ekv-page-list">
            <li>Conocer, actualizar y rectificar tus datos personales.</li>
            <li>
              Solicitar prueba de la autorización otorgada, salvo en los casos en que la
              ley no la exige.
            </li>
            <li>Ser informado sobre el uso que se ha dado a tus datos.</li>
            <li>
              Presentar quejas ante la Superintendencia de Industria y Comercio por
              infracciones a la normativa.
            </li>
            <li>
              Revocar la autorización y solicitar la supresión de los datos, cuando no
              exista un deber legal o contractual que lo impida.
            </li>
            <li>Acceder de forma gratuita a los datos que hayan sido tratados.</li>
          </ul>
        </section>

        <section className="ekv-page-section">
          <h2>6. Cómo ejercer tus derechos</h2>
          <p>
            Escríbenos a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> con el asunto
            &laquo;Protección de datos&raquo;, indicando tu nombre, documento, el derecho
            que deseas ejercer y los hechos que lo motivan.
          </p>
          <p>
            Las consultas se atienden en un máximo de <strong>diez (10) días hábiles</strong>,
            prorrogables por cinco (5) más. Los reclamos se atienden en un máximo de{" "}
            <strong>quince (15) días hábiles</strong>, prorrogables por ocho (8) más,
            informándote previamente el motivo de la prórroga.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>7. Cookies</h2>
          <p>
            Usamos cookies necesarias para el funcionamiento del carrito y la sesión, y
            cookies analíticas para entender el uso del sitio. Puedes bloquearlas desde tu
            navegador, teniendo en cuenta que deshabilitar las necesarias impide completar
            una compra.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>8. Conservación y seguridad</h2>
          <p>
            Conservamos los datos mientras exista relación comercial y, después, durante
            los plazos exigidos por la normativa tributaria y comercial colombiana.
            Aplicamos medidas técnicas y administrativas razonables para proteger la
            información contra acceso no autorizado, pérdida o alteración.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>9. Menores de edad</h2>
          <p>
            La venta está dirigida a mayores de edad. Cuando el producto se destina a un
            menor, la compra debe realizarla su padre, madre o representante legal.
          </p>
        </section>

        <section className="ekv-page-section ekv-section-tip">
          <h2>Vigencia</h2>
          <p>
            Esta política rige desde el {LEGAL.vigencia}. Cualquier cambio sustancial será
            informado en este sitio antes de su entrada en vigor.
          </p>
        </section>
      </div>
    </div>
  )
}
