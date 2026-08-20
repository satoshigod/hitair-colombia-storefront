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
  "protector-espalda-ce-ym-hitair": {
    sections: [
      {
        title: "Va dentro del bolsillo trasero de la prenda",
        imgs: [
          {
            src: "/product-details/pad-back-ym-05.jpg",
            caption: "Bolsillo trasero abierto: aquí se retira el acolchado blando de fábrica.",
          },
          {
            src: "/product-details/pad-back-ym-06.jpg",
            caption: "La espaldera CE ocupa el mismo espacio, sin herrajes ni costuras adicionales.",
          },
        ],
        text:
          "La instalación no requiere herramientas ni modificar la prenda. Se saca el acolchado suave " +
          "original, se inserta esta espaldera en su lugar y se cierra el bolsillo. La prenda conserva " +
          "su corte y su peso apenas cambia.",
      },
      {
        title: "Memory Elastan: recupera su forma después del golpe",
        imgs: [
          {
            src: "/product-details/pad-back-ym-04.jpg",
            caption: "El material se dobla con la mano y vuelve solo a su forma original.",
          },
        ],
        text:
          "A diferencia de las espumas que se aplastan de forma permanente, el Memory Elastan es un " +
          "material con memoria de forma: absorbe la energía del impacto y se recompone. Eso significa " +
          "que sigue protegiendo después del primer golpe. El perforado del cuerpo mantiene la " +
          "circulación de aire en clima caliente.",
      },
    ],
    note:
      "Antes de instalarla, verifica que tu chaleco o chaqueta Hit-Air tenga bolsillo trasero para " +
      "espaldera. Si tu prenda sujeta el protector con velcro en lugar de bolsillo, necesitas la " +
      "versión con funda de velcro.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Norma", "CE EN1621-2 Nivel 2"],
          ["Medidas", "255 mm ancho × 395 mm alto × 18 mm espesor"],
          ["Peso", "390 g"],
          ["Material", "Poliuretano (Memory Elastan)"],
          ["Color", "Amarillo"],
          ["Sujeción", "Bolsillo trasero de la prenda"],
        ],
        fine: "Nivel 2 es el grado más alto de la norma EN1621-2 para protectores dorsales. Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

  "protector-espalda-ce-ym-funda-velcro-hitair": {
    sections: [
      {
        title: "Funda de velcro: se adhiere al forro de la prenda",
        imgs: [
          {
            src: "/product-details/pad-back-ymcv-03.jpg",
            caption: "La funda se abre para extraer el protector cuando hay que lavar la prenda.",
          },
          {
            src: "/product-details/pad-back-ymcv-02.jpg",
            caption: "Cara posterior en malla transpirable, con las bandas de velcro de sujeción.",
          },
        ],
        text:
          "Esta es la diferencia con la versión desnuda: en lugar de alojarse en un bolsillo, se pega " +
          "directamente al velcro hembra del forro trasero. Es la opción correcta si tu prenda no tiene " +
          "bolsillo para espaldera.",
      },
      {
        title: "Montada en la prenda",
        imgs: [
          {
            src: "/product-details/pad-back-ymcv-04.jpg",
            caption: "Instalada en un chaleco de la serie MLV.",
          },
          {
            src: "/product-details/pad-back-ymcv-05.jpg",
            caption: "Montada sobre un arnés tipo Harness-B.",
          },
        ],
        text:
          "Compatible con modelos como MLV-C, VHR y los arneses Harness-B. El cuerpo protector es el " +
          "mismo Memory Elastan certificado Nivel 2 de la versión sin funda.",
      },
    ],
    note:
      "Si tu prenda tiene bolsillo trasero en lugar de velcro, la versión sin funda es más liviana y " +
      "queda mejor ajustada.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Norma", "CE EN1621-2 Nivel 2"],
          ["Medidas", "255 mm ancho × 395 mm alto × 18 mm espesor"],
          ["Peso", "430 g"],
          ["Material funda", "Nylon Ripstop y malla de poliéster"],
          ["Material cuerpo", "Poliuretano (Memory Elastan)"],
          ["Color", "Funda negra / cuerpo amarillo"],
          ["Sujeción", "Velcro sobre el forro trasero"],
        ],
        fine: "Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

  "protector-pecho-ce-asc-hitair": {
    sections: [
      {
        title: "Cómo queda instalado",
        imgs: [
          {
            src: "/product-details/pad-chest-asc-05.jpg",
            caption: "Las dos piezas alojadas en los bolsillos pectorales de la chaqueta.",
          },
          {
            src: "/product-details/pad-chest-asc-06.jpg",
            caption: "Desde fuera no altera el corte de la prenda.",
          },
        ],
        text:
          "El airbag cubre el tórax con una cámara de aire; estos protectores agregan encima una barrera " +
          "rígida certificada. Se instalan en los bolsillos pectorales de los modelos que los traen, " +
          "como MLV2-H, MLV2P y MX-9.",
      },
      {
        title: "Cuerpo perforado que reparte el impacto",
        imgs: [
          {
            src: "/product-details/pad-chest-asc-04.jpg",
            caption: "Estructura perforada en polietileno, flexible al doblarla con la mano.",
          },
        ],
        text:
          "La perforación cumple dos funciones: deja circular el aire y permite que la pieza se flexione " +
          "para adaptarse al pecho. Al recibir un golpe, la superficie amplia reparte la energía en lugar " +
          "de concentrarla en un punto.",
      },
    ],
    note:
      "Se venden siempre como juego de dos piezas, izquierda y derecha. Verifica que tu prenda tenga " +
      "bolsillos pectorales antes de comprar.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Presentación", "Par (2 unidades)"],
          ["Medidas por pieza", "160 mm ancho × 226 mm alto × 17 mm espesor"],
          ["Peso", "300 g el juego completo"],
          ["Material", "Cuerpo en polietileno, cubierta en poliéster"],
          ["Color", "Negro"],
          ["Compatibilidad", "MLV2-H, MLV2P, MX-9 y otros modelos con bolsillo pectoral"],
        ],
        fine: "Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

  "protector-pecho-hc-hitair": {
    sections: [
      {
        title: "Cómo queda instalado",
        imgs: [
          {
            src: "/product-details/pad-chest-hc-04.jpg",
            caption: "Montado sobre un arnés Hit-Air con anclaje pectoral.",
          },
          {
            src: "/product-details/pad-chest-hc-05.jpg",
            caption: "Bajo una chaqueta de uso diario.",
          },
          {
            src: "/product-details/pad-chest-hc-06.jpg",
            caption: "En un chaleco airbag, cubriendo esternón y costillas.",
          },
        ],
        text:
          "Se monta en los arneses y chalecos Hit-Air que tienen anclaje pectoral, como Harness, MC5, " +
          "MLV-C y HS3, y trabaja junto al airbag: la cámara de aire amortigua, la pieza rígida distribuye.",
      },
      {
        title: "La opción más liviana del catálogo",
        imgs: [
          {
            src: "/product-details/pad-chest-hc-03.jpg",
            caption: "Marcado CE impreso en la pieza.",
          },
        ],
        text:
          "190 gramos entre las dos piezas. La estructura en panal de polipropileno y EVA sobre malla de " +
          "poliéster se flexiona con el cuerpo en vez de comportarse como una placa rígida, lo que la hace " +
          "cómoda para uso urbano diario y para clima caliente.",
      },
    ],
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Presentación", "Par (2 unidades)"],
          ["Medidas", "275 mm ancho × 226 mm alto"],
          ["Peso", "190 g"],
          ["Material", "Polipropileno, EVA y malla de poliéster"],
          ["Color", "Negro"],
          ["Compatibilidad", "Harness, MC5, MLV-C, HS3 y otros con anclaje pectoral"],
        ],
        fine: "Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

  "soporte-conector-tipo-hebilla-hitair": {
    sections: [
      {
        title: "Se fija a la moto y ancla el cable",
        imgs: [
          {
            src: "/product-details/conn-holder-02.jpg",
            caption: "El soporte con su cinta de sujeción, lista para montar en el chasis.",
          },
          {
            src: "/product-details/conn-holder-03.jpg",
            caption: "Detalle del conector tipo hebilla en su posición de anclaje.",
          },
        ],
        text:
          "Se instala con la cinta incluida sobre el chasis, el subchasis o el punto firme que mejor " +
          "funcione en tu moto. No requiere perforar ni modificar nada.",
      },
      {
        title: "Por qué importa el ángulo",
        imgs: [
          {
            src: "/product-details/conn-holder-main.jpg",
            caption: "Versión 2025 del soporte original Hit-Air.",
          },
        ],
        text:
          "El sistema se activa cuando el piloto se separa de la moto y el cable hace tensión. Si el " +
          "conector queda suelto o trabaja torcido, esa tensión no se transmite igual. El soporte lo " +
          "mantiene siempre en la misma posición y en el ángulo correcto, y de paso vuelve el gesto de " +
          "engancharse y desengancharse cosa de un segundo.",
      },
    ],
    note: "No incluye el cable en espiral, que se vende por separado.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Tipo", "Conector de hebilla con soporte"],
          ["Versión", "2025"],
          ["Montaje", "Cinta de sujeción incluida"],
          ["Uso", "Motociclismo"],
          ["Incluye cable", "No"],
        ],
        fine: "Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

  "set-herramientas-key-box-tipo-b-hitair": {
    sections: [
      {
        title: "Contenido del set",
        imgs: [
          {
            src: "/product-details/tool-set-main.jpg",
            caption: "Perno de ajuste y llave hexagonal para Key Box tipo B.",
          },
        ],
        text:
          "Cuando el airbag se activa hay que rearmar el sistema: recolocar el cartucho de CO2 y volver a " +
          "ajustar el perno de la Key Box. Estas son exactamente las dos piezas que se necesitan para eso. " +
          "También es la herramienta del mantenimiento periódico y el repuesto si el perno se pierde o se " +
          "pasa de rosca.",
      },
    ],
    note:
      "Verifica el tipo de Key Box de tu prenda antes de comprar: este set es para el tipo B. El tipo Y " +
      "usa un juego distinto.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Contenido", "1 perno de ajuste + 1 llave hexagonal"],
          ["Compatible con", "Key Box tipo B"],
          ["Segmentos", "Equitación y motociclismo"],
        ],
        fine: "Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

  "hitair-coiled-wire-moto": {
    sections: [
      {
        title: "Cómo se conecta",
        imgs: [
          {
            src: "/product-details/coiled-wire-moto-02.jpg",
            caption: "Un extremo va al soporte anclado a la moto.",
          },
          {
            src: "/product-details/coiled-wire-moto-03.jpg",
            caption: "El otro extremo conecta con la llave que va en la Key Box de la prenda.",
          },
        ],
        text:
          "El cable en espiral es el vínculo mecánico entre el piloto y la moto. Si el piloto sale " +
          "despedido, la tensión del cable libera la llave de la Key Box y el airbag se infla. Todo el " +
          "sistema es mecánico: no lleva electrónica ni baterías.",
      },
      {
        title: "Pieza de desgaste",
        imgs: [
          {
            src: "/product-details/coiled-wire-moto-main.jpg",
            caption: "Cable en espiral de repuesto, versión para motociclismo.",
          },
        ],
        text:
          "Es la pieza del sistema que más trabajo mecánico acumula, porque se estira y se recoge en cada " +
          "subida y bajada de la moto. Conviene revisarla con regularidad y reemplazarla cuando el resorte " +
          "pierda capacidad de recuperación o el forro se agriete.",
      },
    ],
    note:
      "Revisa el cable antes de cada salida. Un cable dañado puede impedir que el sistema se active en " +
      "una caída.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Tipo", "Cable en espiral (coiled wire)"],
          ["Uso", "Motociclismo"],
          ["Activación", "Mecánica, sin electrónica"],
          ["Función", "Repuesto del cable de conexión piloto–moto"],
        ],
        fine: "Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

  "cartucho-de-co2-hit-air-50cc": {
    sections: [
      {
        title: "Verifica la cilindrada de tu prenda",
        imgs: [
          {
            src: "/product-details/co2-comparativa.jpg",
            caption: "Comparación de tamaños entre el cartucho de 50cc y el de 60cc.",
          },
        ],
        text:
          "El 50cc es el que usan los modelos de talla pequeña e infantil, y también algunas chaquetas de " +
          "moto como la EU7. Cada prenda indica su cilindrada; montar una distinta a la especificada cambia " +
          "la presión de inflado.",
      },
      {
        title: "Se reemplaza después de cada activación",
        imgs: [
          {
            src: "/product-details/co2-50cc-main.jpg",
            caption: "Cartucho de 50cc, repuesto original Hit-Air.",
          },
        ],
        text:
          "Cuando el airbag se infla, el cartucho queda vacío. Hasta que no montes uno nuevo, la prenda no " +
          "vuelve a funcionar. Se rosca a mano en la Key Box, sin herramientas.",
      },
    ],
    note:
      "Contiene gas a alta presión. No lo perfores, no lo expongas al calor y ten en cuenta que las " +
      "aerolíneas restringen su transporte.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Cilindrada", "50 cc"],
          ["Gas", "CO2 comprimido"],
          ["Instalación", "Roscado manual en la Key Box"],
          ["Uso típico", "Tallas pequeñas, modelos infantiles y chaqueta EU7"],
        ],
        fine: "Confirma siempre la cilindrada indicada en tu prenda antes de comprar.",
      },
    ],
  },

  "cartucho-de-co2-hit-air-60cc": {
    sections: [
      {
        title: "Verifica la cilindrada de tu prenda",
        imgs: [
          {
            src: "/product-details/co2-comparativa.jpg",
            caption: "Comparación de tamaños entre el cartucho de 50cc y el de 60cc.",
          },
        ],
        text:
          "El 60cc es la cilindrada de los modelos de talla adulta, como la serie MLV y los VH de adulto. " +
          "Cada prenda indica cuál le corresponde; usar una distinta cambia la presión de inflado.",
      },
      {
        title: "Se reemplaza después de cada activación",
        imgs: [
          {
            src: "/product-details/co2-60cc-main.jpg",
            caption: "Cartucho de 60cc, repuesto original Hit-Air.",
          },
        ],
        text:
          "Tras el inflado el cartucho queda vacío y la prenda no vuelve a activarse hasta que se monte " +
          "uno nuevo. Se rosca a mano en la Key Box, sin herramientas.",
      },
    ],
    note:
      "Contiene gas a alta presión. No lo perfores, no lo expongas al calor y ten en cuenta que las " +
      "aerolíneas restringen su transporte.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Cilindrada", "60 cc"],
          ["Gas", "CO2 comprimido"],
          ["Instalación", "Roscado manual en la Key Box"],
          ["Uso típico", "Tallas adulto, serie MLV y VH adulto"],
        ],
        fine: "Confirma siempre la cilindrada indicada en tu prenda antes de comprar.",
      },
    ],
  },

  "llave-bola-conector-hebilla-tipo-b-hitair": {
    sections: [
      {
        title: "Dónde va la llave de bola",
        imgs: [
          {
            src: "/product-details/keyball-set-b-keybox-es.jpg",
            caption: "La llave se inserta en la Key Box, en la parte trasera superior de la prenda.",
          },
        ],
        text:
          "Al insertarla queda firme dentro del mecanismo. Si el usuario cae y el cable en espiral hace " +
          "tensión, la llave se libera de la Key Box y dispara el inflado. Después de instalarla, haz una " +
          "prueba de tensión suave para confirmar que se libera correctamente.",
      },
      {
        title: "Set de repuesto completo",
        imgs: [
          {
            src: "/product-details/keyball-set-b-main.jpg",
            caption: "Llave de bola metálica y hebilla conectora hembra tipo B.",
          },
        ],
        text:
          "Reemplaza el conjunto llave–hebilla cuando se daña, se desgasta o se pierde. Sirve para prendas " +
          "de equitación y de motociclismo que usen sistema de hebilla.",
      },
    ],
    note: "No incluye el cable en espiral, que se vende por separado.",
    tables: [
      {
        title: "Especificaciones",
        head: ["Característica", "Detalle"],
        rows: [
          ["Contenido", "1 llave de bola + 1 hebilla conectora hembra"],
          ["Tipo", "B (sistema de hebilla)"],
          ["Segmentos", "Equitación y motociclismo"],
          ["Incluye cable", "No"],
        ],
        fine: "Especificaciones sujetas a cambio por el fabricante.",
      },
    ],
  },

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

