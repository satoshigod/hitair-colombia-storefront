import { listProducts } from "@lib/data/products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import EkivibesProductCard from "@modules/ekivibes/product-card"
import { HitAirIcon } from "@modules/ekivibes/brand/hitair-logo"

const TECH_SPECS = [
  { v: "0.1-0.25s", l: "Tiempo de activacion" },
  { v: "600D", l: "Tejido exterior" },
  { v: "CE", l: "Proteccion certificada" },
  { v: "JP", l: "Fabricado en Japon" },
]

const ZONES = [
  "Cuello y cervicales",
  "Columna vertebral",
  "Torax y costillas",
  "Coxis y zona lumbar",
]

export default async function EkivibesInicio({
  countryCode,
}: {
  countryCode: string
}) {
  const { response } = await listProducts({
    countryCode,
    queryParams: { limit: 12 },
  })
  const products = response.products

  return (
    <>
      <div className="hero">
        <div className="hero-horse">
          <HitAirIcon height={150} />
        </div>
        <div className="hero-c">
          <span className="eyebrow">Distribuidor exclusivo Hit-Air Colombia</span>
          <h1>Airbag que se activa antes del impacto</h1>
          <p>
            Chalecos y chaquetas Hit-Air con sistema airbag integrado para
            motociclismo. Proteccion certificada CE, tecnologia japonesa,
            entrega en toda Colombia.
          </p>
          <LocalizedClientLink href="/store">
            <button className="btn-gold">Ver catalogo</button>
          </LocalizedClientLink>
        </div>
      </div>

      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="tech-strip">
          {TECH_SPECS.map((t) => (
            <div className="tech-item" key={t.l}>
              <div className="tv mono">{t.v}</div>
              <div className="tl">{t.l}</div>
            </div>
          ))}
        </div>
      </div>

      {products.length > 0 && (
        <div className="section">
          <div className="section-head">
            <h2 className="section-title">Catalogo Hit-Air Colombia</h2>
            <LocalizedClientLink className="section-link" href="/store">
              Ver todo &rarr;
            </LocalizedClientLink>
          </div>
          <div className="ekv-grid">
            {products.map((p) => (
              <EkivibesProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2 className="section-title">Zonas de proteccion</h2>
        </div>
        <div className="zones">
          <ul className="zones-list">
            {ZONES.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
          <p style={{ flex: 2, minWidth: 260, fontSize: 14, lineHeight: 1.7, color: "#444" }}>
            Al separarse el piloto de la moto, el cable de activacion libera
            el cartucho de CO2 y la bolsa de aire se infla en fracciones de
            segundo, cubriendo las zonas mas vulnerables antes de que ocurra
            el impacto contra el asfalto.
          </p>
        </div>
      </div>

      <div className="banner">
        <div className="banner-horse">
          <HitAirIcon height={120} />
        </div>
        <div className="banner-c">
          <h2>Seguridad certificada</h2>
          <p>
            Chalecos y chaquetas airbag Hit-Air, la proteccion lider para
            motociclistas en carretera y ciudad.
          </p>
          <LocalizedClientLink href="/store">
            <button className="btn-gold">Ver airbags</button>
          </LocalizedClientLink>
        </div>
      </div>
    </>
  )
}
