'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNewsletterSubmit = () => {
    if (email.includes('@') && email.includes('.')) {
      setMessage('Subscrição registada (demo).')
      setEmail('')
    } else {
      setMessage('Insere um email válido.')
    }
  }

  return (
    <footer id="contactos" className="mt-12 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-lg font-bold">LR BARBERSTORE</h4>
            <p className="mb-4 text-muted-foreground">
              Minimalista, funcional e direto ao ponto. Precisas de ajuda? Fala connosco.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:hello@lrbarberstore.pt">hello@lrbarberstore.pt</a>
              </Button>
              <Button variant="outline" size="sm">IG</Button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-3 text-lg font-bold">Atendimento</h4>
            <p className="text-muted-foreground">
              2ª a 6ª • 10h–18h (Lisboa)<br />
              Envios 24/48h
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 text-lg font-bold">Newsletter</h4>
            <div className="mb-2 flex flex-col gap-2 sm:flex-row">
              <Input
                placeholder="O teu e‑mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleNewsletterSubmit}>Subscrever</Button>
            </div>
            {message && (
              <p className="text-sm text-muted-foreground">{message}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
