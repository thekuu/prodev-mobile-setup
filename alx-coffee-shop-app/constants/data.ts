export interface CoffeeProduct {
  id: string
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  image: any
  category: string
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: '1',
    name: 'Cappuccino',
    description: 'With chocolate and cream topping',
    price: 4.53,
    rating: 4,
    reviews: 234,
    image: require('@/assets/images/cappuccino.png'),
    category: 'Cappuccino'
  },
  // Add more products...
]