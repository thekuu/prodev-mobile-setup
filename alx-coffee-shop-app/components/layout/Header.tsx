import { View, Text } from 'react-native'

interface HeaderProps {
  title: string
  subtitle?: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <View className="px-6 pt-12 pb-4">
      <Text className="font-serif text-2xl text-secondary">{title}</Text>
      {subtitle && (
        <Text className="text-gray-500 mt-1">{subtitle}</Text>
      )}
    </View>
  )
}