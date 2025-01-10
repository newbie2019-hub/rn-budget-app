import { Button, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import { theme } from '../../constant'

const EmptyWallet = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Entypo
        name="wallet"
        size={84}
        color={theme.primary}
      />
      <Text
        style={{
          fontSize: 20,
          marginTop: 14,
        }}
      >
        No Wallet Added
      </Text>
      <Text
        style={{
          color: 'gray',
          marginTop: 8,
          textAlign: 'center',
        }}
        numberOfLines={2}
      >
        Add a wallet to your account and start tracking {'\n'} your financial
        journey today
      </Text>
      <View style={{ marginTop: 26 }}>
        <Button title="Add Wallet" />
      </View>
    </View>
  )
}

export default EmptyWallet
