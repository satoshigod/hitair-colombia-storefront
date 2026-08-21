"use client"

import { Heading, Text, clx } from "@medusajs/ui"

import PagoButton from "../payment-button"
import { useSearchParams } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Revisión = ({ cart }: { cart: any }) => {
  const searchParams = useSearchParams()

  const isOpen = searchParams.get("step") === "review"

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const previousStepsCompletado =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    (cart.payment_collection || paidByGiftcard)

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": !isOpen,
            }
          )}
        >
          Revisión
        </Heading>
      </div>
      {isOpen && previousStepsCompletado && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Al hacer clic en Realizar pedido confirmas que has leído y
                aceptas los{" "}
                <LocalizedClientLink
                  href="/terminos-y-condiciones"
                  className="underline"
                >
                  Términos y Condiciones
                </LocalizedClientLink>
                , las{" "}
                <LocalizedClientLink
                  href="/condiciones-de-venta"
                  className="underline"
                >
                  Condiciones de Venta
                </LocalizedClientLink>{" "}
                y la{" "}
                <LocalizedClientLink
                  href="/politica-de-privacidad"
                  className="underline"
                >
                  Política de Privacidad
                </LocalizedClientLink>{" "}
                de Hit-Air Colombia.
              </Text>
            </div>
          </div>
          <PagoButton cart={cart} data-testid="submit-order-button" />
        </>
      )}
    </div>
  )
}

export default Revisión
