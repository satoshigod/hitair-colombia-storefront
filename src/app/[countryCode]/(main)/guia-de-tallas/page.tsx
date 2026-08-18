import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guía de Tallas | Hit-Air Colombia",
  description:
    "Encuentra tu talla correcta para los chalecos y chaquetas airbag Hit-Air de motociclismo. Tablas de tallas por modelo con estatura, pecho y cintura.",
}

export default function GuiaDeTallas() {
  return (
    <div className="ekv-page">
      <div className="ekv-page-header">
        <h1 className="ekv-page-title">Guía de Tallas</h1>
        <p className="ekv-page-subtitle">
          Chalecos y chaquetas airbag Hit-Air para motociclismo — medidas en centímetros
        </p>
      </div>

      <div className="ekv-page-body">
        <section className="ekv-page-section">
          <h2>¿Cómo tomar las medidas?</h2>
          <p>
            Toma las medidas con la ropa que normalmente usas para conducir (camiseta o
            capa liviana), no con chaquetas gruesas de invierno. Para la talla, considera
            primero tu <strong>estatura</strong> dentro del rango recomendado, y luego
            verifica que el <strong>pecho</strong> y la <strong>cintura</strong> también
            entren. Si estás entre dos tallas, escríbenos y te ayudamos a elegir.
          </p>
          <p>
            La prenda debe quedar <strong>ajustada pero sin restringir el movimiento</strong>:
            el sistema airbag necesita espacio para inflarse correctamente en caso de caída.
            Una prenda demasiado ajustada puede dañarse o no proteger bien al activarse.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Chaleco Airbag MLV2-RC</h2>
          <p>
            Chaleco tipo arnés para motociclismo con protector de espalda integrado y
            material reflectante LUMIDEX. Certificado CE — EN1621-4:2013.
          </p>
          <div className="ekv-table-wrap">
            <table className="ekv-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>Estatura (cm)</th>
                  <th>Pecho (cm)</th>
                  <th>Cintura (cm)</th>
                  <th>Cartucho CO2</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>M</td><td>160 – 185</td><td>86 – 110</td><td>72 – 94</td><td>60cc</td></tr>
                <tr><td>L</td><td>175 – 195</td><td>105 – 120</td><td>84 – 105</td><td>60cc</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="ekv-page-section">
          <h2>Chaqueta Airbag HDS-MS</h2>
          <p>
            Chaqueta tipo hoodie con capucha desmontable, protectores HEXA CE en hombros
            y codos (EN1621-1), y sistema airbag desmontable. Estilo urbano deportivo.
          </p>
          <div className="ekv-table-wrap">
            <table className="ekv-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>Estatura (cm)</th>
                  <th>Pecho (cm)</th>
                  <th>Cintura (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>XS</td><td>150 – 165</td><td>80 – 88</td><td>66 – 74</td></tr>
                <tr><td>S</td><td>160 – 175</td><td>86 – 96</td><td>72 – 80</td></tr>
                <tr><td>M</td><td>165 – 180</td><td>95 – 105</td><td>78 – 86</td></tr>
                <tr><td>L</td><td>170 – 185</td><td>95 – 110</td><td>84 – 92</td></tr>
                <tr><td>XL</td><td>175 – 190</td><td>105 – 115</td><td>90 – 98</td></tr>
                <tr><td>2XL</td><td>180 – 195</td><td>110 – 120</td><td>96 – 104</td></tr>
              </tbody>
            </table>
          </div>
          <p className="ekv-page-fine">
            Talla M disponible en stock permanente. Tallas XS a 2XL bajo pedido especial.
          </p>
        </section>

        <section className="ekv-page-section">
          <h2>Chaqueta Airbag MX-9</h2>
          <p>
            Chaqueta de malla con diseño deportivo, reflectivos en varias zonas y
            protectores CE HEXA (EN1621-1) en hombros y codos, más protector de espalda
            blando incluido de serie. Sistema airbag desmontable.
          </p>
          <div className="ekv-table-wrap">
            <table className="ekv-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>Estatura (cm)</th>
                  <th>Pecho (cm)</th>
                  <th>Cintura (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>S</td><td>160 – 175</td><td>86 – 96</td><td>72 – 80</td></tr>
                <tr><td>M</td><td>165 – 180</td><td>95 – 105</td><td>78 – 86</td></tr>
                <tr><td>L</td><td>170 – 185</td><td>100 – 110</td><td>84 – 92</td></tr>
                <tr><td>XL</td><td>175 – 190</td><td>105 – 115</td><td>90 – 98</td></tr>
                <tr><td>2XL</td><td>180 – 195</td><td>110 – 120</td><td>96 – 104</td></tr>
                <tr><td>3XL</td><td>180 – 195</td><td>115 – 125</td><td>102 – 110</td></tr>
              </tbody>
            </table>
          </div>
          <p className="ekv-page-fine">
            Edición inicial Colombia: talla M. Otras tallas (S a 3XL) bajo pedido especial.
          </p>
        </section>

        <section className="ekv-page-section ekv-section-tip">
          <h2>Consejos para elegir bien</h2>
          <ul className="ekv-page-list">
            <li>Si tu pecho o cintura están en el límite superior de una talla, sube a la siguiente.</li>
            <li>La prenda no debe quedar ajustada al máximo: al inflarse el airbag necesita espacio.</li>
            <li>¿Usas chaqueta o protección adicional debajo? Toma las medidas con ella puesta.</li>
            <li>El cable en espiral (lanyard) se ajusta a tu posición de manejo independientemente de la talla del chaleco.</li>
          </ul>
        </section>

        <div className="ekv-page-cta">
          <p>¿Tienes dudas con tu talla?</p>
          <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="ekv-btn-primary">
            Consúltanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
