import { View, Text } from 'react-native'
import { styles } from '../../constant'

const RecentTransactions = () => {
  return (
    <View style={{ paddingHorizontal: 25, paddingVertical: 6 }}>
      <Text style={{ fontSize: 16, color: 'gray' }}>Recent Transactions</Text>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#dedede',
          marginVertical: 12,
        }}
      ></View>
    </View>
  )
}

export default RecentTransactions
