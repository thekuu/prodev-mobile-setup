import { View, Text, ScrollView } from 'react-native'
import { Header } from '@/components/layout'
import { Button } from '@/components/ui'
import { CartItem } from '@/components/product'

export default function Cart() {
  return (
    <View className="flex-1 bg-white">
      <Header title="Your Cart" />
      
      <ScrollView className="flex-1 px-6">
        {/* Map through cart items */}
        <CartItem 
          product={{
            id: '1',
            name: 'Cappuccino',
            price: 4.53,
            image: require('@/assets/images/cappuccino.png')
          }}
          quantity={2}
          size="M"
        />
      </ScrollView>

      <View className="px-6 pb-6 pt-4 border-t border-gray-200">
        <View className="flex-row justify-between mb-4">
          <Text className="text-gray-600">Total Price</Text>
          <Text className="font-serif text-lg text-primary">$9.06</Text>
        </View>
        <Button title="Checkout" />
      </View>
    </View>
  )
}