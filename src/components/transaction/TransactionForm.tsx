import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import TransactionDetail from './TransactionDetail'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../constant'
import Button from '../Button'
import PressableText from '../PressableText'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const options = [
  {
    label: 'Expense',
    value: 'expense',
  },
  {
    label: 'Income',
    value: 'income',
  },
  { label: 'Transfer', value: 'transfer' },
]

const TransactionForm = () => {
  const [selected, setSelected] = useState('expense')

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 0.87,
      }}
    >
      <View>
        <View style={{ marginVertical: 52 }}>
          <Text style={{ textAlign: 'center', color: 'gray', fontSize: 14 }}>
            ENTER AMOUNT
          </Text>
          <TextInput
            style={styles.inputValue}
            defaultValue="₱18,000"
            allowFontScaling
          />
          <View
            style={{ width: 'auto', marginHorizontal: 'auto', marginTop: 12 }}
          >
            <PressableText
              options={options}
              defaultValue="expense"
              selected={selected}
              onPress={(value: string) => setSelected(value)}
            />
          </View>
        </View>
        <TransactionDetail
          onClick={() => {}}
          label="WALLET"
          icon={
            <Ionicons
              name="wallet-outline"
              size={21}
              color="black"
            />
          }
        />
        <TransactionDetail
          onClick={() => {}}
          label="DATE"
          icon={
            <Feather
              name="calendar"
              size={19}
              color="black"
            />
          }
        />
        <TransactionDetail
          onClick={() => {}}
          label="CATEGORY"
          icon={
            <Feather
              name="info"
              size={21}
              color={theme.subtleBlack}
            />
          }
        />
        <TransactionDetail
          onClick={() => {}}
          label="NOTES"
          icon={
            <MaterialIcons
              name="notes"
              size={21}
              color={theme.subtleBlack}
            />
          }
        />
        <TransactionDetail
          onClick={() => {}}
          label="RECURRING"
          icon={
            <Feather
              name="clock"
              size={21}
              color={theme.subtleBlack}
            />
          }
        />
      </View>
      <View style={{ width: '85%', marginHorizontal: 'auto' }}>
        <Button
          text="Save Transaction"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

export default TransactionForm

const styles = StyleSheet.create({
  inputValue: {
    fontSize: 58,
    color: theme.subtleBlack,
    marginHorizontal: 'auto',
    marginBottom: 6,
    width: 'auto',
  },
})
