import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductCatalog } from '@/components/product-catalog'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import { FixedCheckoutButton } from '@/components/fixed-checkout-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ProductCatalog />
      <About />
      <Footer />
      <CartDrawer />
      <FixedCheckoutButton />
    </main>
  )
}
