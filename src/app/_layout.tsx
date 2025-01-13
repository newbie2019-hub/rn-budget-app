import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="(modal)/transaction"
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="(modal)/switch-wallet"
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="(modal)/onboarding"
        options={{ presentation: 'fullScreenModal' }}
      />
    </Stack>
  )
}
