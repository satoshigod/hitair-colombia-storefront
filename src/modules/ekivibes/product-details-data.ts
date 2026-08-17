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
}

export default PRODUCT_DETAILS
