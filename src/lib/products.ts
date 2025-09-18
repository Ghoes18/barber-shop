import { Product } from '@/types'

export const PRODUCTS: Product[] = [
  {
    id: 'wahl-magic-clip',
    brand: 'Wahl',
    name: 'Magic Clip Cordless',
    price: 149.90,
    stock: 12,
    category: 'Máquinas',
    note: 'Corte preciso • 90 min bateria',
    image: 'https://images.unsplash.com/photo-1563293128-346731a592ba?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'andis-t-outliner',
    brand: 'Andis',
    name: 'T-Outliner Trimmer',
    price: 129.00,
    stock: 0,
    category: 'Máquinas',
    note: 'Lâmina T • acabamento',
    image: 'https://images.unsplash.com/photo-1596791924973-c65a12f99833?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'babyliss-fx',
    brand: 'BaBylissPRO',
    name: 'FX Premium Clipper',
    price: 189.00,
    stock: 5,
    category: 'Máquinas',
    note: 'Motor brushless • pro',
    image: 'https://images.unsplash.com/photo-1567822402940-d463918b5e28?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'feather-blades-100',
    brand: 'Feather',
    name: 'Hi‑Stainless Blades (100)',
    price: 24.90,
    stock: 48,
    category: 'Lâminas',
    note: 'Aço japonês',
    image: 'https://images.unsplash.com/photo-1563293128-346731a592ba?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'parker-srx',
    brand: 'Parker',
    name: 'Navalhete SRX Inox',
    price: 29.90,
    stock: 17,
    category: 'Lâminas',
    note: 'Equilíbrio e precisão',
    image: 'https://images.unsplash.com/photo-1596791924973-c65a12f99833?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'tesoura-6p5',
    brand: 'Jaguar',
    name: 'Tesoura Profi 6.5"',
    price: 79.90,
    stock: 9,
    category: 'Tesouras',
    note: 'Aço temperado • microserrilha',
    image: 'https://images.unsplash.com/photo-1567822402940-d463918b5e28?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'reuzel-blue-113',
    brand: 'Reuzel',
    name: 'Pomade Blue 113g',
    price: 16.90,
    stock: 34,
    category: 'Pomadas',
    note: 'Brilho alto • fixação forte',
    image: 'https://images.unsplash.com/photo-1563293128-346731a592ba?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'uppercut-deluxe-100',
    brand: 'Uppercut',
    name: 'Deluxe Pomade 100g',
    price: 17.90,
    stock: 21,
    category: 'Pomadas',
    note: 'Acabamento clássico',
    image: 'https://images.unsplash.com/photo-1596791924973-c65a12f99833?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'proraso-after-green',
    brand: 'Proraso',
    name: 'After Shave Green 100ml',
    price: 12.90,
    stock: 42,
    category: 'Cuidados',
    note: 'Mentol e eucalipto',
    image: 'https://images.unsplash.com/photo-1567822402940-d463918b5e28?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'proraso-oil-30',
    brand: 'Proraso',
    name: 'Óleo de Barba 30ml',
    price: 13.90,
    stock: 25,
    category: 'Cuidados',
    note: 'Amacia e perfuma',
    image: 'https://images.unsplash.com/photo-1563293128-346731a592ba?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'pente-metal-pro',
    brand: 'LR',
    name: 'Pente Metálico Pro',
    price: 11.90,
    stock: 60,
    category: 'Acessórios',
    note: 'Anti‑estático',
    image: 'https://images.unsplash.com/photo-1596791924973-c65a12f99833?w=900&q=80&auto=format&fit=crop'
  },
  {
    id: 'toalhas-pretas-6',
    brand: 'LR',
    name: 'Toalhas Pretas (6)',
    price: 22.90,
    stock: 15,
    category: 'Acessórios',
    note: 'Algodão premium',
    image: 'https://images.unsplash.com/photo-1567822402940-d463918b5e28?w=900&q=80&auto=format&fit=crop'
  }
]

export const CATEGORIES = ['Tudo', ...Array.from(new Set(PRODUCTS.map(p => p.category)))]

export function formatPrice(price: number): string {
  return price.toLocaleString('pt-PT', {
    style: 'currency',
    currency: 'EUR'
  })
}
