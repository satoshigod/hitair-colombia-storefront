import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { LEGAL } from "@lib/util/legal"

export const metadata: Metadata = {
  title: "Terminos y Condiciones de Uso | Hit-Air Colombia",
  description:
    "Terminos y condiciones de uso del sitio oficial de Hit-Air Colombia: cuenta de usuario, propiedad intelectual y limitacion de responsabilidad.",
}

export default function TerminosYCondiciones() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Términos y Condiciones de Uso</h1>
        <p className="ekv-page-subtitle">
          Condiciones aplicables a la navegación y uso de este sitio
        </p>
      </div>

      <div className="ekv-page-body">
        <p className="ekv-legal-meta">Última actualización: {LEGAL.vigencia}</p>

        <section className="ekv-page-section">
          <h2>1. Aceptación</h2>
          <p>
            El uso de este sitio implica la aceptación de estos términos. Si no estás de
            acuerdo, abstente de utilizarlo. Las condiciones aplicables a la compra se
            encuentran en las{" "}
            <LocalizedClientLink href="/condiciones-de-venta">
              Condiciones de Venta
            </LocalizedClientLink>
            .
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>2. Titular del sitio</h2>
          <p>
            Este sitio es operado por {LEGAL.razonSocial}, NIT {LEGAL.nit}, bajo el nombre
            comercial {LEGAL.nombreComercial}, distribuidor y representante autorizado de
            Hit-Air<sup>&reg;</sup> / {LEGAL.fabricante} en Colombia.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>3. Cuenta de usuario</h2>
          <p>
            Eres responsable de la veracidad de los datos que registras y de la
            confidencialidad de tu contraseña. Notifícanos de inmediato ante cualquier uso
            no autorizado de tu cuenta. Podemos suspender cuentas que registren
            información falsa o que se usen de forma fraudulenta.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>4. Propiedad intelectual</h2>
          <p>
            Hit-Air<sup>&reg;</sup> es una marca registrada de {LEGAL.fabricante}. Los
            logotipos, denominaciones y material gráfico de la marca se utilizan en este
            sitio bajo la autorización que ostenta {LEGAL.nombreComercial} en su calidad
            de distribuidor autorizado para Colombia.
          </p>
          <p>
            Los textos, fotografías propias, diseño y código de este sitio son propiedad
            de {LEGAL.razonSocial} o de sus licenciantes. Queda prohibida su reproducción
            o uso comercial sin autorización escrita previa.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>5. Contenido informativo</h2>
          <p>
            La información técnica publicada tiene fines informativos y se basa en la
            documentación oficial del fabricante. No sustituye el manual de usuario que
            acompaña cada producto, que es el documento vinculante para su instalación,
            uso y mantenimiento.
          </p>
          <p>
            Las especificaciones pueden ser modificadas por el fabricante sin previo
            aviso.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>6. Limitación de responsabilidad</h2>
          <p>
            Procuramos que el sitio esté disponible y que la información sea exacta, pero
            no garantizamos operación ininterrumpida ni ausencia total de errores.
          </p>
          <p>
            Nuestra responsabilidad no cubre daños derivados del uso indebido del
            producto, del incumplimiento del manual del fabricante, del uso de repuestos
            no originales, ni de la operación de vehículos o caballos, actividades que
            conllevan riesgo propio. Nada en esta cláusula limita los derechos
            irrenunciables que la ley colombiana reconoce al consumidor.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>7. Enlaces a terceros</h2>
          <p>
            El sitio enlaza a la división ecuestre de la marca y a servicios de terceros
            como la pasarela de pago y la transportadora. No respondemos por el contenido
            ni las políticas de sitios que no operamos.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>8. Ley aplicable</h2>
          <p>
            Estos términos se rigen por la ley colombiana. Cualquier controversia se
            someterá a los jueces competentes de la República de Colombia.
          </p>
        </section>

        <section className="ekv-page-section ekv-section-tip">
          <h2>Contacto</h2>
          <p>
            Para cualquier inquietud sobre estos términos, escríbenos a{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
