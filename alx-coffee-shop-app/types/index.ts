export interface Product {
  id: string
  name: string
  price: number
  image: any
  category: string
}

export interface CartItem extends Product {
  quantity: number
  size: string
}

export interface Order {
  id: string
  date: string
  items: CartItem[]
  total: number
  status: 'preparing' | 'delivering' | 'delivered'
}