import { SafeAreaView } from 'react-native-safe-area-context'
import ExpandableCalendar from '../../components/home/ExpandedCalendar'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function Page() {
  const router = useRouter()

  // Onboarding
  useEffect(() => {
    setTimeout(() => {
      router.push('/(modal)/onboarding')
    }, 500)
  }, [])

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white' }}
      edges={['top', 'left', 'right']}
    >
      <ExpandableCalendar />
    </SafeAreaView>
  )
}
