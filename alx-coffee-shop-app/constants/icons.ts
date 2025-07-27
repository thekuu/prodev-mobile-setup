import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'

export const Home = ({ color = '#000' }) => (
  <Feather name="home" size={24} color={color} />
)

export const Heart = ({ color = '#000' }) => (
  <Feather name="heart" size={24} color={color} />
)

export const ShoppingBag = ({ color = '#000' }) => (
  <Feather name="shopping-bag" size={24} color={color} />
)

export const User = ({ color = '#000' }) => (
  <Feather name="user" size={24} color={color} />
)

export const ArrowLeft = ({ color = '#000' }) => (
  <Feather name="arrow-left" size={24} color={color} />
)

export const Star = ({ filled = false, color = '#000', className = '' }) => (
  <Feather 
    name={filled ? 'star' : 'star'} 
    size={20} 
    color={filled ? '#FBBE21' : color} 
    className={className}
  />
)

export const Search = ({ color = '#000' }) => (
  <Feather name="search" size={20} color={color} />
)

export const Filter = ({ color = '#000' }) => (
  <Feather name="sliders" size={20} color={color} />
)

export const Plus = ({ color = '#000' }) => (
  <Feather name="plus" size={20} color={color} />
)

export const Minus = ({ color = '#000' }) => (
  <Feather name="minus" size={20} color={color} />
)