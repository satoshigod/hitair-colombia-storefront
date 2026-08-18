import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Acerca de Hit-Air | Hit-Air Colombia",
  description:
    "Conoce el sistema airbag Hit-Air: cómo funciona, qué protege y por qué es la referencia mundial en protección activa para equitación y motociclismo.",
}

export default function AcercaDeHitAir() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Acerca de Hit-Air</h1>
        <p className="ekv-page-subtitle">
          El sistema airbag líder mundial en protección para equitación y motociclismo, fabricado en Japón desde 1985
        </p>
      </div>

      <div className="ekv-page-body">
        <section className="ekv-page-section">
          <h2>¿Qué es Hit-Air?</h2>
          <p>
            Hit-Air es un sistema de chaleco y chaqueta airbag fabricado por Mugen Denko Co., Ltd.
            en Japón. Desde 1985 es el líder mundial en protección activa tanto para equitación
            como para motociclismo, con presencia en Asia, Europa, Australia y América. En
            Colombia, Hit-Air Colombia es el distribuidor exclusivo de la marca para ambas líneas.
          </p>
          <p>
            A diferencia de los protectores rígidos tradicionales, las prendas Hit-Air son ligeras,
            cómodas y flexibles. Se usan como una prenda normal sobre la ropa de montar o de
            manejo, y solo se activan en el momento de una caída o accidente, en menos de medio
            segundo.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>¿Cómo funciona?</h2>
          <p>
            La prenda se conecta mediante un cable en espiral (lanyard) a un punto fijo: en
            equitación, a las argollas del sillín; en motociclismo, a un punto de anclaje de la
            moto. Cuando el jinete o el motociclista se separa del vehículo en una caída, el cable
            se estira y activa automáticamente el mecanismo: el cartucho de CO₂ se perfora y el
            airbag se infla en menos de 0,5 segundos.
          </p>
          <p>
            No es necesario hacer nada: el sistema es completamente automático. Una fuerza mínima
            de 25 a 30 kg es necesaria para activarlo, lo que hace prácticamente imposible una
            activación accidental durante el uso normal, ya sea montando a caballo o en moto.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>¿Qué protege?</h2>
          <p>
            Al inflarse, la prenda envuelve completamente el torso, protegiendo las zonas más
            vulnerables en una caída o accidente, tanto ecuestre como en moto:
          </p>
          <ul className="ekv-page-list">
            <li>Cuello y nuca</li>
            <li>Pecho y costillas</li>
            <li>Espalda</li>
            <li>Sacro y coxis</li>
          </ul>
          <p>
            La sensación al inflarse es la de un gran cojín firme que te rodea, absorbiendo el
            impacto antes de llegar al suelo.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Certificación</h2>
          <p>
            Las prendas Hit-Air cumplen la norma europea <strong>EN 1621-4:2013</strong>,
            la certificación más exigente para protectores airbag tanto en equitación como en
            motociclismo dentro de la Unión Europea.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Reutilizable</h2>
          <p>
            Después de una caída leve, puedes rearmar la prenda tú mismo en pocos minutos: vacías
            el airbag, pliegas los cojines y reemplazas el cartucho de CO₂ por uno nuevo original
            Hit-Air. Queda lista para usar nuevamente, sin importar si la usas a caballo o en moto.
          </p>
          <p>
            En caso de una caída o accidente fuerte, recomendamos enviarla a revisión técnica para
            verificar el estado completo de la prenda y el mecanismo.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>¿Por qué Hit-Air?</h2>
          <ul className="ekv-page-list">
            <li>Más de 40 años de experiencia y desarrollo en Japón</li>
            <li>Activación automática en menos de 0,5 segundos</li>
            <li>Ligero y cómodo, pensado tanto para el jinete como para el motociclista</li>
            <li>Reutilizable después de una caída</li>
            <li>Certificación CE EN 1621-4:2013</li>
            <li>Distribuidor exclusivo para Colombia: Hit-Air Colombia</li>
          </ul>
        </section>

        <div className="ekv-page-cta">
          <p>¿Tienes preguntas sobre las prendas airbag Hit-Air?</p>
          <LocalizedClientLink href="/preguntas-frecuentes" className="ekv-btn-primary">
            Ver preguntas frecuentes
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}
