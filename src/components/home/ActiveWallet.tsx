import { View, Text } from 'react-native'
import React from 'react'
import WalletCard from '../wallet/wallet-card'
import { styles } from '../../constant'
import AntDesign from '@expo/vector-icons/AntDesign'

const ActiveWallet = () => {
  return (
    <View style={{ paddingHorizontal: 25, paddingVertical: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 16, color: 'gray' }}>Active Wallet</Text>
        <AntDesign
          name="swap"
          size={20}
          color="gray"
        />
      </View>
      <WalletCard
        amount={20_000}
        currency="PHP"
        wallet="Main Wallet"
        key="wallet"
        updatedAt="Aug 20, 2022"
      />
    </View>
  )
}

export default ActiveWallet
