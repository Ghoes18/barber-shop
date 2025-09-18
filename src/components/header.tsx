'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { ShoppingCart, Sun, Moon, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'

export function Header() {
  const { theme, setTheme } = useTheme()
  const { items, openCart } = useCart()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-20 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary font-bold tracking-wider">
              LR
            </div>
            <h1 className="hidden text-lg font-bold tracking-widest sm:block">
              LR BARBERSTORE
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push('/appointments')}
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted ? (
                theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={openCart}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
