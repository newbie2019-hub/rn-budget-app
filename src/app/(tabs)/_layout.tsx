import { Tabs } from 'expo-router'
import { routes } from '../../constant/routes'
import { theme } from '../../constant'
import { View } from 'react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        animation: 'shift',
        headerShown: false,
      }}
    >
      {routes.map((route) => (
        <Tabs.Screen
          key={route.name}
          name={route.name}
          options={route.options}
        />
      ))}
    </Tabs>
  )
}
