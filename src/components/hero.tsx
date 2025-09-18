"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()
  
  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const navigateToAppointments = () => {
    router.push('/appointments')
  }

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl mb-4">
              Agende seu corte de cabelo hoje mesmo.
            </h2>
            <p className="text-md text-muted-foreground sm:text-lg mb-6 max-w-2xl">
              Experiência profissional de barbearia com os melhores produtos e técnicas. 
              Reserve já o seu horário e tenha o visual perfeito que sempre desejou.
            </p>
            <div className="flex gap-3">
              <Button onClick={navigateToAppointments}>Agendar Corte</Button>
              <Button variant="outline" onClick={scrollToCatalog}>Ver produtos</Button>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted via-card to-background rounded-xl border border-border flex items-center justify-center mb-4">
              <svg width="160" height="160" viewBox="0 0 200 200" className="text-muted-foreground">
                <rect width="200" height="200" rx="16" fill="none" stroke="currentColor" strokeWidth="2"/>
                <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round">
                  <path d="M50 60h100"/>
                  <path d="M60 90h80"/>
                  <path d="M70 120h60"/>
                  <rect x="70" y="135" width="60" height="20" rx="10"/>
                  <path d="M85 40v25M115 40v25"/>
                </g>
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Envios 24/48h • Pagamentos seguros</span>
              <Button size="sm" onClick={scrollToCatalog}>Comprar agora</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
