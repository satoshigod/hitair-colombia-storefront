import { HitAirStacked, HitAirLogoPlain } from "@modules/ekivibes/brand/hitair-logo"

/**
 * Sello de representacion oficial.
 *
 * Hit-Air Colombia es el sitio oficial de la marca en el pais y ostenta la
 * distribucion exclusiva de los DOS segmentos (motociclismo y equitacion),
 * aunque el catalogo ecuestre se atienda comercialmente bajo Ekivibes.
 * Este componente hace explicita esa representacion, siguiendo la practica
 * de los distribuidores oficiales europeos (Iberica, Francia, UK).
 *
 * Variantes:
 *  - "band"    franja ancha para el pie de pagina
 *  - "content" sello de autoria para articulos del blog y guias tecnicas
 */
type Variant = "band" | "content"

export default function OfficialSeal({
  variant = "band",
  className = "",
}: {
  variant?: Variant
  className?: string
}) {
  if (variant === "content") {
    return (
      <aside className={`ha-seal-content ${className}`} aria-label="Contenido oficial">
        <div className="ha-seal-mark">
          <HitAirStacked height={52} />
        </div>
        <div className="ha-seal-body">
          <p className="ha-seal-title">
            Contenido Oficial de Hit-Air<sup>&reg;</sup> Colombia
          </p>
          <p className="ha-seal-text">
            Redactado por el equipo tecnico de Hit-Air Colombia, distribuidor y
            representante autorizado de Hit-Air<sup>&reg;</sup> / Mugen Denko Co., Ltd.
            en territorio colombiano, con base en la documentacion tecnica oficial
            del fabricante.
          </p>
        </div>
      </aside>
    )
  }

  return (
    <section className={`ha-seal-band ${className}`} aria-label="Representacion oficial">
      <div className="ha-seal-band-inner">
        <HitAirLogoPlain height={28} className="ha-seal-band-mark" />
        <div className="ha-seal-band-text">
          <p className="ha-seal-band-lead">
            Distribuidor exclusivo autorizado para Colombia
          </p>
          <p className="ha-seal-band-sub">
            Representacion oficial de Hit-Air<sup>&reg;</sup> en los dos segmentos de
            la marca: <strong>motociclismo</strong> y <strong>equitacion</strong>.
            Importacion directa desde Mugen Denko Co., Ltd. (Nagoya, Japon).
          </p>
        </div>
      </div>
    </section>
  )
}
