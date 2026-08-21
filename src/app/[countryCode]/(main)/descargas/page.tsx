import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import OfficialSeal from "@modules/ekivibes/brand/official-seal"
import { LEGAL } from "@lib/util/legal"

export const metadata: Metadata = {
  title: "Descargas y Manuales Oficiales | Hit-Air Colombia",
  description:
    "Descarga los manuales oficiales de usuario del sistema airbag Hit-Air en espanol: instalacion, uso, cartucho de CO2, mantenimiento y precauciones de seguridad.",
}

type Doc = {
  titulo: string
  descripcion: string
  archivo: string
  idioma: string
  paginas: number
  peso: string
  segmento: string
}

const DOCS: Doc[] = [
  {
    titulo: "Manual del sistema airbag — Motociclismo",
    descripcion:
      "Manual oficial de usuario del sistema All-In-One para moto. Cubre precauciones de seguridad, partes del sistema, Key Box y bola clave, instalación y cambio del cartucho de CO₂, uso del cable de activación, qué hacer después de una activación, re-ensamblaje, lavado y almacenamiento.",
    archivo: "/descargas/manual-moto-airbag-es.pdf",
    idioma: "Español",
    paginas: 7,
    peso: "8,0 MB",
    segmento: "Moto",
  },
  {
    titulo: "Manual del sistema airbag — Equitación",
    descripcion:
      "Manual oficial de usuario del sistema para equitación (tipo Y). Incluye estructura del chaleco, función del cojín de aire, conexión del cable en espiral a la silla, sistema de liberación one-touch, cartucho de CO₂ y re-ensamblaje del Key Box.",
    archivo: "/descargas/manual-equitacion-airbag-en.pdf",
    idioma: "Inglés",
    paginas: 7,
    peso: "2,8 MB",
    segmento: "Equitación",
  },
]

export default function Descargas() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Descargas y Manuales</h1>
        <p className="ekv-page-subtitle">
          Documentación oficial de {LEGAL.fabricante}, distribuida por Hit-Air Colombia
        </p>
      </div>

      <div className="ekv-page-body">
        <section className="ekv-page-section">
          <p>
            Aquí encuentras los manuales oficiales de usuario del sistema airbag
            Hit-Air<sup>&reg;</sup>, tal como los publica el fabricante. Son el documento
            vinculante para la instalación, el uso y el mantenimiento de tu equipo.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Manuales de usuario</h2>
          <div className="ha-doc-list">
            {DOCS.map((d) => (
              <article key={d.archivo} className="ha-doc">
                <div className="ha-doc-main">
                  <span className="ha-doc-seg">{d.segmento}</span>
                  <h3 className="ha-doc-title">{d.titulo}</h3>
                  <p className="ha-doc-desc">{d.descripcion}</p>
                  <p className="ha-doc-meta">
                    PDF · {d.idioma} · {d.paginas} páginas · {d.peso}
                  </p>
                </div>
                <a
                  className="ekv-btn-primary ha-doc-btn"
                  href={d.archivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Descargar
                </a>
              </article>
            ))}
          </div>
          <p className="ha-doc-note">
            El manual de equitación aún no está publicado en español por el fabricante.
            Si necesitas ayuda para interpretarlo, escríbenos por{" "}
            <a
              href={`https://wa.me/${LEGAL.whatsappE164}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            y te acompañamos paso a paso.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Antes de usar tu equipo</h2>
          <ul className="ekv-page-list">
            <li>
              Lee las precauciones de seguridad completas antes del primer uso. El manual
              distingue entre <strong>ADVERTENCIA</strong> (riesgo de lesión grave o
              muerte) y <strong>PRECAUCIÓN</strong> (riesgo de lesión o daño del equipo).
            </li>
            <li>
              Verifica que el cartucho de CO₂ esté correctamente enroscado antes de cada
              salida. Un cartucho flojo o ya perforado impide el inflado.
            </li>
            <li>
              Conecta siempre el cable de activación al punto de anclaje. Sin conexión, el
              sistema no se activa en una caída.
            </li>
            <li>
              Usa únicamente cartuchos y repuestos originales Hit-Air<sup>&reg;</sup>.
            </li>
          </ul>
        </section>

        <section className="ekv-page-section ekv-section-tip">
          <h2>¿Necesitas otro documento?</h2>
          <p>
            Como distribuidor autorizado tenemos acceso a la documentación técnica
            completa del fabricante: fichas de producto, datos de ensayo y manuales de
            modelos específicos. Si necesitas algo que no está aquí, escríbenos a{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> y lo gestionamos.
          </p>
          <p>
            Consulta también la{" "}
            <LocalizedClientLink href="/guia-de-tallas">Guía de tallas</LocalizedClientLink>{" "}
            y las{" "}
            <LocalizedClientLink href="/preguntas-frecuentes">
              Preguntas frecuentes
            </LocalizedClientLink>
            .
          </p>
        </section>

        <OfficialSeal variant="content" />
      </div>
    </div>
  )
}
