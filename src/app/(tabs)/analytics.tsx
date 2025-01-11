import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../constant'
import Chart from '../../components/analytics/Chart'

const Analytics = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['top', 'left', 'right']}
    >
      <View style={{ paddingHorizontal: 25, marginVertical: 18 }}>
        <Text style={styles.heading}>Analytics</Text>
      </View>
      <Chart />
    </SafeAreaView>
  )
}

export default Analytics
