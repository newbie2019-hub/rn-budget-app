import { ScreenProps } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AntDesign from '@expo/vector-icons/AntDesign'

export const routes: ScreenProps[] = [
  {
    name: 'index',
    options: {
      title: 'Home',
      tabBarShowLabel: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <FontAwesome
          size={24}
          name="home"
          color={color}
        />
      ),
    },
  },
  {
    name: 'analytics',
    options: {
      title: 'Analytics',
      tabBarShowLabel: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <AntDesign
          name="piechart"
          size={20}
          color={color}
        />
      ),
    },
  },
  {
    name: 'wallet',
    options: {
      title: 'Wallet',
      tabBarShowLabel: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <Entypo
          name="wallet"
          size={24}
          color={color}
        />
      ),
    },
  },
  {
    name: 'account',
    options: {
      title: 'Account',
      tabBarShowLabel: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <MaterialIcons
          name="account-circle"
          size={24}
          color={color}
        />
      ),
    },
  },
]
