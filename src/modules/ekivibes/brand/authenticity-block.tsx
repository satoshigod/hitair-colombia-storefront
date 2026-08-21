import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HitAirIcon } from "@modules/ekivibes/brand/hitair-logo"
import { LEGAL } from "@lib/util/legal"

/**
 * Bloque de autenticidad para fichas de producto.
 *
 * Responde a la principal objecion de compra en este mercado: distinguir
 * producto original importado directo del importador gris o la replica.
 * Declara procedencia, garantia, soporte y la advertencia de repuestos
 * originales, que es ademas una condicion de seguridad: un cartucho no
 * original puede impedir el despliegue del airbag.
 */
export default function AuthenticityBlock({
  segmento = "moto",
}: {
  segmento?: "moto" | "equitacion"
}) {
  const puntos = [
    {
      t: "Importación directa de fábrica",
      d: `Traído directamente desde ${LEGAL.fabricante} (Nagoya, Japón). Sin intermediarios ni mercado gris.`,
    },
    {
      t: "Distribuidor autorizado",
      d: `${LEGAL.nombreComercial} es el distribuidor y representante exclusivo de Hit-Air® en Colombia para motociclismo y equitación.`,
    },
    {
      t: "Garantía respaldada",
      d: "Garantía legal colombiana sobre defectos de fabricación, con escalamiento al fabricante en Japón cuando el caso lo requiere.",
    },
    {
      t: "Soporte técnico y repuestos",
      d: "Cartuchos de CO₂ originales, cables de activación y repuestos disponibles en el país, sin importar cada pieza por tu cuenta.",
    },
  ]

  return (
    <section className="ha-auth" aria-labelledby="ha-auth-title">
      <div className="ha-auth-head">
        <HitAirIcon height={30} className="ha-auth-icon" />
        <h2 id="ha-auth-title" className="ha-auth-title">
          Producto original Hit-Air<sup>&reg;</sup>
        </h2>
      </div>

      <ul className="ha-auth-grid">
        {puntos.map((p) => (
          <li key={p.t} className="ha-auth-item">
            <span className="ha-auth-item-t">{p.t}</span>
            <span className="ha-auth-item-d">{p.d}</span>
          </li>
        ))}
      </ul>

      <p className="ha-auth-warn">
        <strong>Advertencia de seguridad:</strong> usar cartuchos de CO₂ o repuestos
        no originales anula la garantía y puede impedir que el airbag se despliegue
        en una caída.
      </p>

      <p className="ha-auth-links">
        <LocalizedClientLink href="/descargas">Manuales oficiales</LocalizedClientLink>
        <span aria-hidden="true"> · </span>
        <LocalizedClientLink href="/condiciones-de-venta">Garantía</LocalizedClientLink>
        <span aria-hidden="true"> · </span>
        <LocalizedClientLink href="/guia-de-tallas">Guía de tallas</LocalizedClientLink>
        <span aria-hidden="true"> · </span>
        <a
          href={`https://wa.me/${LEGAL.whatsappE164}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Asesoría por WhatsApp
        </a>
      </p>
    </section>
  )
}
