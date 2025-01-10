import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
