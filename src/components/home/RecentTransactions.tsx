import { View, Text, FlatList } from 'react-native'
import Transaction from '../Transaction'

const transactions = [
  {
    id: '1',
    category: 'Food',
    amount: 6000,
    createdAt: 'Jan 05, 2025',
  },
]

const RecentTransactions = () => {
  return (
    <View style={{ paddingHorizontal: 25, paddingVertical: 6 }}>
      <Text style={{ fontSize: 16, color: 'gray' }}>Recent Transactions</Text>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#dedede',
          marginTop: 10,
        }}
      ></View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Transaction />}
      />
    </View>
  )
}

export default RecentTransactions
