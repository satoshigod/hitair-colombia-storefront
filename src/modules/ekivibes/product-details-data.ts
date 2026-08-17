// Detalles de producto Hit-Air Colombia (URLs /public/product-details/).
// Mismo patron que Ekivibes: sections (imagenes con titulo), note (aviso
// destacado), tables (specs/tallas). Solo se listan los handles reales del
// canal Hit-Air Colombia (los 5 productos de moto).
export type DetailSection = { title: string; imgs: string[] }
export type DetailTable = { title: string; img?: string; head: string[]; rows: string[][]; fine: string }
export type ProductDetail = { sections: DetailSection[]; note?: string; tables?: DetailTable[] }

const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "hitair-mlv2-rc-vest-black": {
    sections: [
      {
        title: "Características del producto",
        imgs: ["/product-details/mlv2-rc-det1.jpg"],
      },
      {
        title: "Sistema de protección por airbag",
        imgs: [
          "/product-details/mlv2-rc-det2.jpg",
          "/product-details/mlv2-rc-det3.jpg",
        ],
      },
      {
        title: "Cartucho de CO2 y sistema de activación",
        imgs: ["/product-details/mlv2-rc-det4.jpg"],
      },
      {
        title: "Cable en espiral y material reflectante",
        imgs: ["/product-details/mlv2-rc-det5.jpg"],
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
  },
}

export default PRODUCT_DETAILS
