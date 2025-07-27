import { ScrollView, View } from 'react-native'
import { Header, ProductCard } from '@/components'
import { coffeeProducts } from '@/constants/data'
import { Search, Filter } from '@/components/icons'

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <Header title="Find the best coffee for you" />
      
      <View className="px-6">
        <View className="flex-row items-center bg-light rounded-xl px-4 py-3 mt-4">
          <Search className="text-gray-400 mr-2" />
          <TextInput 
            placeholder="Find your coffee..." 
            className="flex-1 text-gray-700"
          />
          <Filter className="text-primary" />
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6">
          {['Cappuccino', 'Latte', 'Espresso', 'Americano'].map((category) => (
            <Pressable key={category} className="px-4 py-2 mr-2 bg-primary rounded-full">
              <Text className="text-white">{category}</Text>
            </Pressable>
          ))}
        </ScrollView>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-6 py-4"
        >
          {coffeeProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}