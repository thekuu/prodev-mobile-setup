import { View, Text, Image, Pressable } from 'react-native'
import { Star } from '@/components/icons'
import { CoffeeProduct } from '@/types'

export const ProductCard = ({ product }: { product: CoffeeProduct }) => (
  <Pressable className="w-48 bg-light rounded-xl p-3 mr-4">
    <View className="items-center -mt-8 mb-2">
      <Image 
        source={product.image} 
        className="w-32 h-32" 
        resizeMode="contain"
      />
    </View>
    
    <View className="px-2">
      <Text className="font-serif text-lg text-secondary">{product.name}</Text>
      <Text className="text-gray-500 text-xs">{product.description}</Text>
      
      <View className="flex-row justify-between items-center mt-2">
        <Text className="font-serif text-lg text-primary">${product.price}</Text>
        <View className="flex-row items-center">
          <Star filled className="text-yellow-400" />
          <Text className="ml-1 text-secondary">{product.rating}</Text>
        </View>
      </View>
    </View>
  </Pressable>
)