import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../constant'

const Account = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['top', 'left', 'right']}
    >
      <View style={styles.body}>
        <Text style={styles.heading}>Account</Text>
      </View>
    </SafeAreaView>
  )
}

export default Account
