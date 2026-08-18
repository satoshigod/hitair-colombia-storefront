// Detalles de producto Hit-Air Colombia (URLs /public/product-details/).
// Mismo patron que Ekivibes: sections (imagenes con titulo/leyenda), note
// (aviso destacado), tables (specs/tallas), videos (embebidos de YouTube).
// Orden y contenido replicados de la ficha oficial de cada modelo en
// hit-air.com (referencia enviada por Ivan), traducidos al espanol.
export type DetailImage = { src: string; caption?: string }
export type DetailSection = { title: string; imgs: (string | DetailImage)[]; text?: string }
export type DetailTable = { title: string; img?: string; head: string[]; rows: string[][]; fine: string }
export type DetailVideo = { url: string; title: string }
export type ProductDetail = {
  sections: DetailSection[]
  note?: string
  tables?: DetailTable[]
  videos?: DetailVideo[]
}

const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "hitair-mlv2-rc-vest-black": {
    sections: [
      {
        title: "Certificación y protección",
        imgs: [],
        text:
          "Certificado bajo EN1621-4:2013, el único estándar europeo para chalecos airbag. " +
          "El material reflectante LUMIDEX está tejido en toda la prenda para visibilidad nocturna. " +
          "El tubo del airbag fue mejorado y ahora admite almohadilla de pecho opcional; el airbag " +
          "se ubica detrás de la caja de llave para reforzar la absorción de impacto (S-System).",
      },
      {
        title: "Antes y después de la activación",
        imgs: [
          {
            src: "/product-details/mlv2-rc-det4.jpg",
            caption:
              "Caja de llave (Key Box): dispositivo que activa el airbag y aloja el cartucho de CO2. " +
              "La tapa moldeada amortigua el impacto sobre el cartucho.",
          },
        ],
      },
      {
        title: "Cable en espiral y material reflectante",
        imgs: [
          {
            src: "/product-details/mlv2-rc-det5.jpg",
            caption:
              "Cable en espiral (incluido): ajusta su longitud óptima y se fija al punto de anclaje " +
              "de la moto. A la derecha, el tejido LUMIDEX reflectante frente/espalda para visibilidad nocturna.",
          },
        ],
      },
      {
        title: "Sistema de protección por airbag",
        imgs: [
          {
            src: "/product-details/mlv2-rc-det3.jpg",
            caption:
              "Zonas cubiertas al inflarse: airbag de cuello, pecho, espalda, costados y cadera. " +
              "Caja de llave tipo B con cartucho de CO2 de 60cc (talla M).",
          },
          {
            src: "/product-details/mlv2-rc-det2.jpg",
            caption:
              "Lámina absorbente de impacto VISCO ELASTAN detrás del cartucho (amortigua incluso un huevo " +
              "crudo sin romperlo). El protector de espalda integrado se combina con el airbag para mayor absorción.",
          },
        ],
      },
    ],
    note: "No laves el airbag. Retira el sistema airbag de la prenda antes de lavarla. Revisa periódicamente que el cartucho de CO2 y la llave de resina no presenten grietas ni deformaciones; reemplázalos si detectas algún daño.",
    tables: [
      {
        title: "Ficha técnica",
        head: ["Especificación", "Detalle"],
        rows: [
          ["Color", "Negro"],
          ["Tallas", "M, L"],
          ["Cartucho CO2", "60cc"],
          ["Peso", "M: 1.5 kg · L: 1.6 kg"],
          ["Material", "LUMIDEX (reflectante), poliéster 600D, malla de poliéster, nylon ripstop"],
          ["Tubo del airbag", "Poliuretano"],
          ["Certificación", "CE — EN1621-4:2013 (único estándar europeo para chalecos airbag)"],
          ["Activación", "Mecánica, por cable de enganche a la moto"],
          ["Opcionales", "Almohadilla de pecho, protector lateral de arnés"],
        ],
        fine: "Especificaciones del fabricante (Hit-Air / Mugen Denko Co., Ltd.), sujetas a cambio sin previo aviso.",
      },
      {
        title: "Tabla de tallas (cm)",
        head: ["Talla", "Estatura", "Pecho", "Cintura", "Cartucho CO2"],
        rows: [
          ["M", "160–185", "86–110", "72–94", "60cc"],
          ["L", "175–195", "105–120", "84–105", "60cc"],
        ],
        fine: "Medidas de referencia del fabricante. Si estás entre dos tallas, escríbenos antes de comprar.",
      },
    ],
    videos: [
      {
        url: "https://www.youtube.com/embed/WM4sSGjnwhg",
        title: "Hit-Air Motorcycle MLV2 — demostración",
      },
      {
        url: "https://www.youtube.com/embed/e7M1t5gACdI",
        title: "Hit-Air Airbag MLV2 — modelo y detalle",
      },
    ],
  },
  "hitair-hds-ms-jacket-black": {
    sections: [
      {
        title: "Chaqueta con capucha desmontable y protección CE",
        imgs: [],
        text:
          "Chaqueta tipo hoodie que combina estilo urbano deportivo con seguridad. El exterior combina malla " +
          "transpirable brillante y nylon mate. Incorpora protectores HEXA CE (EN1621-1), livianos, en hombros " +
          "y codos, más protector de espalda blando de serie. El sistema airbag es desmontable de la chaqueta.",
      },
      {
        title: "Caja de llave y sistema de liberación",
        imgs: [
          {
            src: "/product-details/hdsms-keybox.jpg",
            caption:
              "Caja de llave (Key Box): aloja el cartucho de CO2 de 50cc y activa el airbag al desconectarse " +
              "el cable en espiral de la moto.",
          },
          {
            src: "/product-details/hdsms-keyboxcover.jpg",
            caption:
              "Cubierta de la caja de llave: diseño discreto que oculta el cartucho de CO2 y el orificio de " +
              "salida del conector tipo bola (keyball).",
          },
        ],
      },
      {
        title: "Estructura del airbag",
        imgs: [
          {
            src: "/product-details/hdsms-airbagstructure.jpg",
            caption:
              "Estructura interna del airbag: se despliega cubriendo cuello, hombros y espalda para absorber " +
              "el impacto en caso de caída.",
          },
          {
            src: "/product-details/hdsms-banner-airbag-es.jpg",
            caption: "Zonas que cubre el airbag al inflarse, y los 3 colores de catálogo internacional (en Colombia vendemos negro).",
          },
        ],
      },
      {
        title: "Detalle de partes y ajustes",
        imgs: [
          {
            src: "/product-details/hdsms-banner-details-es.jpg",
            caption:
              "Guardacuello de neoprene, capucha desmontable por cremallera y velcro, ajustador de brazo, " +
              "ajustador de puño con velcro, conector de un toque (hembra) y cordón de ajuste en la cintura.",
          },
        ],
      },
      {
        title: "Cable en espiral, tela, reflectivos y capucha",
        imgs: [
          {
            src: "/product-details/hdsms-banner-function-es.jpg",
            caption:
              "Cable en espiral incluido (se fija a la moto), tela de malla con brillo metálico y gran " +
              "transpirabilidad, impresión reflectiva para visibilidad nocturna, capucha desmontable por " +
              "cremallera y velcro, e ilustración del despliegue del airbag.",
          },
        ],
      },
      {
        title: "Protectores CE",
        imgs: [
          {
            src: "/product-details/hdsms-banner-protector-es.jpg",
            caption:
              "Protectores HEXA de hombro y codo, certificados CE bajo EN1621-1, estructura tipo panal en " +
              "polipropileno y polietileno, livianos. Incluyen de fábrica protector de espalda blando; " +
              "protector de pecho y espalda rígida CE son opcionales (se sujetan con velcro por dentro).",
          },
        ],
      },
    ],
    note: "No laves la chaqueta con el sistema airbag puesto. Retira el airbag antes de lavarla. Revisa periódicamente que el cartucho de CO2 y la llave de resina no presenten grietas ni deformaciones; reemplázalos si detectas algún daño.",
    tables: [
      {
        title: "Ficha técnica",
        head: ["Especificación", "Detalle"],
        rows: [
          ["Color", "Negro"],
          ["Talla disponible", "M (el modelo oficial va de XS a 2XL bajo pedido)"],
          ["Cartucho CO2", "50cc"],
          ["Peso", "2.1 kg"],
          ["Material", "Exterior: nylon y poliéster · Forro: malla de poliéster · Tubo del airbag: poliuretano"],
          ["Certificación", "CE — EN1621-1 (protectores HEXA en hombros y codos)"],
          ["Activación", "Mecánica, por cable en espiral anclado a la moto"],
          ["Opcionales", "Forro interior impermeable B-Liner7, protector de pecho, protector de espalda CE"],
        ],
        fine: "Especificaciones del fabricante (Hit-Air / Mugen Denko Co., Ltd.), sujetas a cambio sin previo aviso.",
      },
      {
        title: "Talla según tu cuerpo (guía de compra)",
        head: ["Talla", "Estatura", "Pecho", "Cintura"],
        rows: [
          ["XS", "150–165", "80–88", "66–74"],
          ["S", "160–175", "86–96", "72–80"],
          ["M", "165–180", "95–105", "78–86"],
          ["L", "170–185", "95–110", "84–92"],
          ["XL", "175–190", "105–115", "90–98"],
          ["2XL", "180–195", "110–120", "96–104"],
        ],
        fine: "Úsala si nunca te has probado la chaqueta: compara tu estatura, pecho y cintura contra la tabla.",
      },
      {
        title: "Medidas de la prenda (guía de comparación)",
        img: "/product-details/hdsms-sizediagram-es.jpg",
        head: ["Talla", "Largo delantero", "Largo espalda", "Hombro", "Pecho", "Manga", "Cintura"],
        rows: [
          ["M", "68 cm", "70 cm", "48 cm", "112 cm", "63 cm", "108 cm"],
        ],
        fine:
          "Medidas de la prenda ya armada, tomada plana (no de tu cuerpo). Úsala si quieres comparar contra " +
          "una chaqueta que ya tienes. Solo tenemos la talla M medida; las demás tallas escalan proporcionalmente " +
          "según el diagrama — escríbenos si necesitas el detalle exacto de otra talla.",
      },
    ],
  },
  "hitair-mx9-jacket-black": {
    sections: [
      {
        title: "Chaqueta tipo malla, diseño deportivo",
        imgs: [],
        text:
          "Chaqueta airbag de malla con diseño deportivo y reflectivos en varias zonas para mayor visibilidad " +
          "nocturna. Tela exterior combina malla brillante y nylon mate, resistente y transpirable. Trae de serie " +
          "protectores CE (EN1621-1) tipo HEXA, livianos, en hombros y codos, más protector de espalda blando. " +
          "El sistema de airbag es desmontable de la chaqueta.",
      },
      {
        title: "Ficha visual completa (partes de la chaqueta)",
        imgs: [
          {
            src: "/product-details/mx9-banner-details-es.jpg",
            caption:
              "Todas las partes: protector de cuello, malla de aire, estampado reflectivo, cubierta de la caja " +
              "de llave, ajustador de brazo, almohadilla EVA, airbag de cadera, ajuste de puños y velcros para " +
              "las almohadillas opcionales de pecho y espalda.",
          },
        ],
      },
      {
        title: "Cable en espiral, malla y reflectivos",
        imgs: [
          {
            src: "/product-details/mx9-banner-function-es.jpg",
            caption:
              "Cómo funciona el cable en espiral que activa el airbag, la tela de malla densa y transpirable, " +
              "el estampado reflectivo para visibilidad nocturna, y el detalle de la cubierta del airbag de cuello.",
          },
        ],
      },
      {
        title: "Zonas cubiertas al inflarse",
        imgs: [
          {
            src: "/product-details/mx9-banner-airbag-es.jpg",
            caption:
              "El airbag cubre cuello, pecho, espalda, laterales y cadera. Debajo, la chaqueta en los 3 colores " +
              "del catálogo internacional (gris oscuro, negro y gris claro) — en Colombia la vendemos en negro.",
          },
        ],
      },
      {
        title: "Protectores CE HEXA",
        imgs: [
          {
            src: "/product-details/mx9-banner-protector-es.jpg",
            caption:
              "Hombreras y coderas CE (EN1621-1) tipo HEXA, en polipropileno y polietileno: livianas y con buena " +
              "ventilación. Protector de espalda blando incluido de serie como equipo estándar.",
          },
        ],
      },
      {
        title: "Caja de llave (Key Box)",
        imgs: [
          {
            src: "/product-details/mx9-det3.jpg",
            caption:
              "Caja de llave con cartucho de CO2 de 50cc alojado en un compartimento discreto, con salida en 3D " +
              "para el conector de la llave de resina.",
          },
        ],
      },
      {
        title: "Sistema de protección por airbag",
        imgs: [
          {
            src: "/product-details/mx9-det4.jpg",
            caption:
              "Zonas cubiertas al inflarse: cuello, pecho —con una extensión que baja hasta la cadera, de ahí el " +
              "nombre del modelo ('Packing the hip air cushion')— y espalda completa.",
          },
          {
            src: "/product-details/mx9-det6.jpg",
            caption:
              "Airbag desplegado (foto de referencia en gris oscuro; el funcionamiento es igual en la versión negra).",
          },
        ],
      },
      {
        title: "Espalda con protector integrado",
        imgs: [
          {
            src: "/product-details/mx9-det2.jpg",
            caption:
              "Espalda con el sistema Hit-Air Airbag integrado y protector de espalda blando incluido de serie.",
          },
        ],
      },
    ],
    note: "No laves el airbag. Retira el sistema airbag de la chaqueta antes de lavarla. Revisa periódicamente que el cartucho de CO2 y la llave de resina no presenten grietas ni deformaciones; reemplázalos si detectas algún daño.",
    tables: [
      {
        title: "Ficha técnica",
        head: ["Especificación", "Detalle"],
        rows: [
          ["Color", "Negro (también disponible en gris oscuro y gris claro en el catálogo internacional)"],
          ["Tallas", "S, M, L, XL, 2XL, 3XL (edición inicial Colombia: M)"],
          ["Cartucho CO2", "50cc"],
          ["Peso", "2 kg"],
          ["Material", "Exterior: nylon y poliéster · Forro: malla de poliéster · Tubo del airbag: poliuretano"],
          ["Protectores", "CE (EN1621-1) HEXA en hombros y codos + protector de espalda blando, de serie"],
          ["Activación", "Mecánica, por cable en espiral (coiled wire) anclado a la moto"],
          ["Opcionales", "Forro interior impermeable/cortavientos B-Liner7, protector de pecho, protector de espalda CE"],
        ],
        fine: "Especificaciones del fabricante (Hit-Air / Mugen Denko Co., Ltd.), sujetas a cambio sin previo aviso.",
      },
      {
        title: "Tabla de tallas (cm)",
        head: ["Talla", "Estatura", "Pecho", "Cintura"],
        rows: [
          ["S", "160–175", "86–96", "72–80"],
          ["M", "165–180", "95–105", "78–86"],
          ["L", "170–185", "100–110", "84–92"],
          ["XL", "175–190", "105–115", "90–98"],
          ["2XL", "180–195", "110–120", "96–104"],
          ["3XL", "180–195", "115–125", "102–110"],
        ],
        fine: "Medidas de referencia del fabricante. Si estás entre dos tallas, escríbenos antes de comprar.",
      },
    ],
  },
  "hitair-eu7-touring-jacket": {
    sections: [
      {
        title: "Chaqueta técnica de invierno, transpirable e impermeable",
        imgs: [
          {
            src: "/product-details/eu7-banner-details-es.jpg",
            caption:
              "Vista general de componentes: protector de cuello, bolsillos con cremallera impermeable, " +
              "caja de llave con cartucho CO2 de 50cc, conector de un toque, cable en espiral y material " +
              "exterior ripstop.",
          },
        ],
        text:
          "Modelo insignia de Hit-Air de estilo europeo. La chaqueta exterior es en ripstop 600D con forro " +
          "de malla y una membrana interior INTERON transpirable e impermeable. El forro térmico interno es " +
          "desmontable, así que se puede usar todo el año quitando o dejando el forro según el clima. Trae de " +
          "serie protectores CE (EN1621-1, tipo HEXA), livianos, en hombros y codos.",
      },
      {
        title: "Cable en espiral, ventilación, reflectante y capucha",
        imgs: [
          {
            src: "/product-details/eu7-banner-function-es.jpg",
            caption:
              "Chaqueta exterior y forro (liner) por separado: velcro para fijar almohadillas de pecho y " +
              "espalda opcionales, cordón ajustable y presillas para retirar el forro por el cuello y los puños.",
          },
        ],
      },
      {
        title: "Sistema de protección por airbag",
        imgs: [
          {
            src: "/product-details/eu7-banner-airbag-es.jpg",
            caption: "Zonas cubiertas al inflarse el airbag: cuello, hombros, pecho y espalda completa.",
          },
          {
            src: "https://www.hit-air.com/archives/005/202508/3bea7f734dd875b74573dbb44c41273b804d808c6c92bba92fdecec51998d810.jpg",
            caption:
              "Airbag desplegado, vista frontal (foto de referencia en gris claro; el funcionamiento es igual " +
              "en gris oscuro y negro).",
          },
          {
            src: "https://www.hit-air.com/archives/005/202508/f2ddae2616873d61de34df6b5648dd788085001eb524a4b3d4fe67995b5ffa7d.jpg",
            caption: "Airbag desplegado, vista trasera.",
          },
        ],
      },
      {
        title: "Protector CE en hombros y codos",
        imgs: [
          {
            src: "/product-details/eu7-banner-protector-es.jpg",
            caption:
              "Protectores CE (EN1621-1, tipo HEXA) livianos en hombros y codos, incluidos de serie. Protector " +
              "de pecho y de espalda adicionales disponibles bajo pedido.",
          },
        ],
      },
      {
        title: "Caja de llave (Key Box)",
        imgs: [
          {
            src: "https://www.hit-air.com/archives/005/202508/c1a78db5b58072b9a538a0d6e24b450e49d8ed9c1655dba1dc6bc667968f7f00.jpg",
            caption:
              "Caja de llave con cartucho de CO2 de 50cc, ubicada de forma discreta en la espalda de la chaqueta.",
          },
        ],
      },
      {
        title: "Chaqueta exterior y forro térmico desmontable",
        imgs: [
          {
            src: "https://www.hit-air.com/archives/005/202508/14dd65bb09f346bf21c94013fc5550909d006100586512a0e9b0d4787feb812c.jpg",
            caption:
              "Chaqueta exterior y forro térmico (liner) por separado: se pueden usar juntos en clima frío o " +
              "solo la exterior en clima templado.",
          },
          {
            src: "https://www.hit-air.com/archives/005/202508/aba6fe55cc0fe9a95eaf30ea364aaad415f93499b892172e6158c73c5a2e35ed.jpg",
            caption: "Forro térmico (liner) acolchado, con forro interior en tafetán.",
          },
        ],
      },
    ],
    note: "No laves la chaqueta con el sistema airbag puesto. Retira el airbag y el forro térmico antes de lavarla. Revisa periódicamente que el cartucho de CO2 y la llave de resina no presenten grietas ni deformaciones; reemplázalos si detectas algún daño.",
    tables: [
      {
        title: "Ficha técnica",
        head: ["Especificación", "Detalle"],
        rows: [
          ["Color", "Gris Oscuro, Negro (disponibles en Colombia) · Gris Claro bajo pedido especial"],
          ["Tallas disponibles en Colombia", "M, L (gris oscuro) · M (negro) — el modelo oficial va de S a 3XL bajo pedido"],
          ["Cartucho CO2", "50cc"],
          ["Peso", "2.8 kg (exterior: 2.3 kg · forro térmico: 500 g)"],
          [
            "Material",
            "Exterior: ripstop 600D (poliéster) · Forro: malla de poliéster · Membrana interior: INTERON " +
              "transpirable e impermeable (poliéster/poliuretano) · Tubo del airbag: poliuretano · Forro " +
              "térmico: exterior acolchado (poliéster), forro interior tafetán (poliéster)",
          ],
          ["Certificación", "CE — EN1621-1, protectores HEXA en hombros y codos"],
          ["Activación", "Mecánica, por cable en espiral (coiled wire) anclado a la moto"],
          ["Opcionales", "Protector de pecho y protector de espalda CE (varios modelos disponibles bajo pedido)"],
        ],
        fine: "Especificaciones del fabricante (Hit-Air / Mugen Denko Co., Ltd.), sujetas a cambio sin previo aviso.",
      },
      {
        title: "Tabla de tallas (cm)",
        head: ["Talla", "Estatura", "Pecho", "Cintura"],
        rows: [
          ["S", "150–165", "80–88", "66–74"],
          ["M", "160–175", "86–96", "72–80"],
          ["L", "165–180", "95–105", "78–86"],
          ["XL", "170–185", "95–110", "84–92"],
          ["2XL", "175–190", "105–115", "90–98"],
          ["3XL", "180–195", "110–120", "96–104"],
        ],
        fine: "Medidas de referencia del fabricante. Si estás entre dos tallas, escríbenos antes de comprar.",
      },
    ],
  },
}

export default PRODUCT_DETAILS
