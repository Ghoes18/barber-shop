'use client'

import { CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { useState } from 'react'
import { CheckoutModal } from '@/components/checkout-modal'

export function FixedCheckoutButton() {
  const { items } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  if (cartCount === 0) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-30">
        <Button
          onClick={() => setShowCheckout(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow-xl transition-all duration-300 ease-in-out hover:w-48 hover:shadow-2xl"
          style={{ animation: 'pulse-glow 2s infinite' }}
          aria-label={`Finalizar compra com ${cartCount} itens`}
        >
          <CreditCard className="absolute h-6 w-6 transition-all duration-300 ease-in-out group-hover:left-4" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 font-semibold transition-all duration-300 ease-in-out group-hover:max-w-[200px] group-hover:pl-8">
            Finalizar Compra
          </span>
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground">
            {cartCount}
          </span>
        </Button>
      </div>

      {showCheckout && (
        <CheckoutModal
          isOpen={showCheckout}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  )
}

