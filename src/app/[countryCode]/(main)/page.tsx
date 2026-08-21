export const dynamic = "force-dynamic"

import { Metadata } from "next"
import EkivibesInicio from "@modules/ekivibes/home"

export const metadata: Metadata = {
  title: "Hit-Air Colombia | Chalecos y Chaquetas Airbag para Motociclismo",
  description:
    "Sitio oficial de Hit-Air en Colombia. Distribuidor exclusivo para motociclismo y equitacion: chalecos y chaquetas airbag con tecnologia japonesa y certificacion CE. Envio a todo el pais.",
}

export default async function Inicio(props: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await props.params
  return <EkivibesInicio countryCode={countryCode} />
}
