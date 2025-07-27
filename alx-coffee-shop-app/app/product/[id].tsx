import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import { ArrowLeft, Star, Plus, Minus } from '@/components/icons'
import { Button } from '@/components/ui'
import { coffeeProducts } from '@/constants/data'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function ProductDetail() {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const product = coffeeProducts.find(p => p.id === id)

  if (!product) return null

  return (
    <View className="flex-1 bg-light">
      <View className="h-64 bg-white rounded-bl-3xl rounded-br-3xl">
        <Image 
          source={product.image} 
          className="w-full h-full" 
          resizeMode="contain"
        />
      </View>

      <Pressable 
        onPress={() => router.back()}
        className="absolute top-12 left-6 bg-black/30 p-2 rounded-full"
      >
        <ArrowLeft color="white" />
      </Pressable>

      <ScrollView className="flex-1 px-6 mt-6">
        <Text className="font-serif text-2xl text-secondary">{product.name}</Text>
        
        <View className="flex-row items-center mt-2">
          <View className="flex-row mr-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled={i < product.rating} className="mr-1" />
            ))}
          </View>
          <Text className="text-gray-500">({product.reviews} reviews)</Text>
        </View>

        <View className="my-6">
          <Text className="font-serif text-lg mb-2">Description</Text>
          <Text className="text-gray-600">{product.description}</Text>
        </View>

        <View className="mb-6">
          <Text className="font-serif text-lg mb-2">Size</Text>
          <View className="flex-row justify-between">
            {['S', 'M', 'L'].map(size => (
              <Pressable 
                key={size}
                className="w-28 h-10 border border-primary rounded-lg items-center justify-center"
              >
                <Text className="text-primary">{size}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      <View className="px-6 pb-6 pt-4 bg-white flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="font-serif text-2xl text-primary mr-4">${product.price}</Text>
          <View className="flex-row items-center bg-light rounded-full px-3 py-1">
            <Pressable>
              <Minus />
            </Pressable>
            <Text className="mx-4">1</Text>
            <Pressable>
              <Plus />
            </Pressable>
          </View>
        </View>
        <Button title="Buy Now" className="w-36" />
      </View>
    </View>
  )
}