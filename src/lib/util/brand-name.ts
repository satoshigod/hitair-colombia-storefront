// Nombre comercial del storefront. Centralizado para que los titulos de
// pagina, metadatos y textos legales no queden hardcodeados por archivo
// (el repo nace de un fork compartido con Ekivibes y arrastraba la marca
// equivocada en los <title>, lo que afectaba SEO y confianza de marca).
//
// Se puede sobrescribir por entorno con NEXT_PUBLIC_STORE_NAME, que es el
// mismo mecanismo usado para diferenciar las dos tiendas sobre un backend.
export const STORE_NAME =
  process.env.NEXT_PUBLIC_STORE_NAME || "Hit-Air Colombia"

/** Sufijo estandar para <title>. */
export const titleSuffix = (t: string) => `${t} | ${STORE_NAME}`

/** Razon social y representacion, para textos legales. */
export const LEGAL_ENTITY = "Soulbyte S.A.S."
export const BRAND_OWNER = "Mugen Denko Co., Ltd."
