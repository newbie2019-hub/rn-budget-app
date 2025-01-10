import { SafeAreaView } from 'react-native-safe-area-context'
import ExpandableCalendar from '../../components/home/ExpandedCalendar'

export default function Page() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white' }}
      edges={['top', 'left', 'right']}
    >
      <ExpandableCalendar />
    </SafeAreaView>
  )
}
