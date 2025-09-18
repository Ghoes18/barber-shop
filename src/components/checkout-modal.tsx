'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from '@/hooks/use-cart'
import { useToast } from "@/hooks/use-toast"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { clearCart, closeCart } = useCart()
  const { toast } = useToast()

  const handleConfirmOrder = () => {
    // Basic validation
    // In a real app, you would use a library like Zod
    const name = (document.getElementById('ckName') as HTMLInputElement)?.value
    const email = (document.getElementById('ckEmail') as HTMLInputElement)?.value
    if (!name || !email || !email.includes('@')) {
      toast({
        title: "Dados inválidos",
        description: "Por favor, preenche o nome e um email válido.",
        variant: "destructive",
      })
      return
    }

    // Demo order confirmation
    toast({
      title: "Pedido confirmado!",
      description: "Obrigado pela tua compra (demo).",
    })
    
    clearCart()
    closeCart()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            Preenche os teus dados para finalizar a compra. Esta é uma demonstração.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ckName" className="text-right">
              Nome
            </Label>
            <Input id="ckName" placeholder="O teu nome completo" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ckEmail" className="text-right">
              Email
            </Label>
            <Input id="ckEmail" type="email" placeholder="email@exemplo.com" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleConfirmOrder}>Confirmar pedido</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
