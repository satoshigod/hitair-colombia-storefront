export const dynamic = "force-dynamic"

import { Metadata } from "next"
import EkivibesInicio from "@modules/ekivibes/home"

export const metadata: Metadata = {
  title: "Hit-Air Colombia | Chalecos y Chaquetas Airbag para Motociclismo",
  description:
    "Distribuidor exclusivo de Hit-Air en Colombia. Chalecos y chaquetas airbag para motociclismo, tecnologia japonesa, certificacion CE, envio a todo el pais.",
}

export default async function Inicio(props: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await props.params
  return <EkivibesInicio countryCode={countryCode} />
}
