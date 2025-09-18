'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Product, CartItem } from '@/types'
import { useToast } from "@/hooks/use-toast"

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lr_cart')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  const { toast } = useToast()

  useEffect(() => {
    localStorage.setItem('lr_cart', JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, quantity = 1) => {
    let itemAdded = false;
    setItems(current => {
      const existingItem = current.find(item => item.productId === product.id)
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity
        if (newQuantity > product.stock) {
          toast({
            title: "Stock insuficiente",
            description: `Não podes adicionar mais ${product.name}.`,
            variant: "destructive",
          })
          return current
        }
        itemAdded = true;
        return current.map(item =>
          item.productId === product.id
            ? { ...item, quantity: newQuantity }
            : item
        )
      }

      if (quantity > product.stock) {
        toast({
          title: "Stock insuficiente",
          description: `Não há stock suficiente de ${product.name}.`,
          variant: "destructive",
        })
        return current
      }

      itemAdded = true;
      return [...current, {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        quantity,
        product
      }]
    })

    if(itemAdded){
      toast({
        title: "Adicionado ao carrinho",
        description: `${quantity} x ${product.name} foi adicionado.`,
      })
    }
  }

  const removeItem = (productId: string) => {
    setItems(current => current.filter(item => item.productId !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setItems(current =>
      current.map(item => {
        if (item.productId === productId) {
          const maxQuantity = item.product.stock
          return {
            ...item,
            quantity: Math.min(quantity, maxQuantity)
          }
        }
        return item
      })
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total,
      isOpen,
      openCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
