import { Pressable, StyleSheet, Text, View } from 'react-native'
import { styles, theme } from '../../constant'
import { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'
import { mask } from '../../helpers'
import { formatCurrency } from 'react-native-format-currency'

interface Wallet {
  amount: number
  wallet: string
  updatedAt: string
  currency: string
}

const WalletCard = ({
  amount = 20_000,
  wallet,
  updatedAt,
  currency = 'PHP',
}: Wallet) => {
  const [shown, setShown] = useState(true)
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
    formatCurrency({
      amount: +amount,
      code: currency,
    })

  return (
    <View style={cardStyle.card}>
      <Text style={styles.subHeading}>Current Balance</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Text style={[cardStyle.amount, styles.white]}>
          {shown
            ? valueFormattedWithSymbol
            : symbol + mask(valueFormattedWithoutSymbol)}
        </Text>
        <Pressable onPress={() => setShown(!shown)}>
          <Feather
            name={shown ? 'eye' : 'eye-off'}
            size={18}
            color="white"
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.subHeading}>Wallet</Text>
          <Text style={styles.white}>{wallet}</Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.subHeading}>Last Transaction</Text>
          <Text style={styles.white}>{updatedAt}</Text>
        </View>
      </View>
    </View>
  )
}

export default WalletCard

const cardStyle = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: theme.primary,
    padding: 20,
    borderRadius: 8,
    marginVertical: 6,
  },
  amount: {
    fontSize: 40,
    fontWeight: '600',
  },
})
