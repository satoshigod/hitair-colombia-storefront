/**
 * Datos legales de la sociedad responsable del comercio electronico.
 *
 * IMPORTANTE: los campos marcados como PENDIENTE deben completarse con los
 * datos reales antes de salir a produccion comercial. El Estatuto del
 * Consumidor (Ley 1480 de 2011, art. 50) obliga a que el proveedor de comercio
 * electronico informe su identificacion, NIT y direccion de forma cierta,
 * suficiente y accesible.
 *
 * Se centralizan aqui para que aparezcan de forma consistente en las paginas
 * legales, el pie y los correos transaccionales, sin duplicar strings.
 */

export const LEGAL = {
  /** Razon social de la sociedad. */
  razonSocial: "Soulbyte S.A.S.",
  /** Nombre comercial del canal. */
  nombreComercial: "Hit-Air Colombia",
  /** PENDIENTE: reemplazar por el NIT real con digito de verificacion. */
  nit: "PENDIENTE — NIT",
  /** PENDIENTE: direccion de notificaciones judiciales. */
  direccion: "PENDIENTE — direccion, Medellin, Antioquia, Colombia",
  ciudad: "Medellin, Antioquia, Colombia",
  email: "hola@hitaircolombia.co",
  /** PENDIENTE: numero de contacto y WhatsApp de atencion. */
  telefono: "PENDIENTE — telefono",
  whatsapp: "PENDIENTE — WhatsApp",
  instagram: "@hitair.colombia",
  instagramUrl: "https://www.instagram.com/hitair.colombia",
  /** Titular de la marca representada. */
  fabricante: "Mugen Denko Co., Ltd.",
  fabricanteDireccion: "1-1012, Ikeba, Tempaku-ku, Nagoya, 468-0055, Japon",
  /** Ultima actualizacion de los documentos legales. */
  vigencia: "20 de agosto de 2026",
} as const

/** Devuelve true si algun dato legal obligatorio sigue sin completarse. */
export const legalIncompleto = () =>
  Object.values(LEGAL).some((v) => typeof v === "string" && v.startsWith("PENDIENTE"))
