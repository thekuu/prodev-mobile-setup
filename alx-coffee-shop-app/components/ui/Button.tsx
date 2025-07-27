import { Pressable, Text, ActivityIndicator } from 'react-native'

interface ButtonProps {
  title: string
  onPress?: () => void
  loading?: boolean
  className?: string
}

export const Button = ({ title, onPress, loading, className }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`bg-primary rounded-xl h-12 items-center justify-center ${className}`}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white font-medium">{title}</Text>
      )}
    </Pressable>
  )
}