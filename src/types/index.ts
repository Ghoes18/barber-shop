export interface Product {
  id: string
  name: string
  brand?: string
  price: number
  stock: number
  category: string
  note?: string
  image?: string
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  product: Product
}

export interface Order {
  id: string
  customerName: string
  email: string
  address: string
  total: number
  status: OrderStatus
  paymentMethod?: string
  paymentId?: string
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  productId: string
  quantity: number
  price: number
  product: Product
}

export interface Appointment {
  id: string
  customerName: string
  email: string
  phone?: string
  service: string
  date: Date
  duration: number
  status: AppointmentStatus
  notes?: string
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW'
}
