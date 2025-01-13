import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../constant'
import TransactionForm from '../../components/transaction/TransactionForm'

const Transaction = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pullDivider}></View>
      <Text
        style={{ textAlign: 'center', color: theme.subtleBlack, fontSize: 14 }}
      >
        NEW TRANSACTION
      </Text>
      <TransactionForm />
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
  pullDivider: {
    marginVertical: 8,
    width: 40,
    height: 4,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginHorizontal: 'auto',
  },
})
