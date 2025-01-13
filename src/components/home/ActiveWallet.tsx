import { View, Text } from 'react-native'
import React from 'react'
import WalletCard from '../wallet/CardWallet'
import { styles, theme } from '../../constant'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link } from 'expo-router'

const ActiveWallet = () => {
  return (
    <View style={{ paddingHorizontal: 25, paddingVertical: 16 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: theme.subHeading, color: theme.subtleBlack }}>
          Active Wallet
        </Text>
        <Link href="/(modal)/switch-wallet">
          <AntDesign
            name="swap"
            size={22}
            color={theme.subtleBlack}
          />
        </Link>
      </View>
      <WalletCard
        amount={12_600}
        currency="PHP"
        wallet="Main Wallet"
        key="wallet"
        updatedAt="Aug 20, 2022"
      />
    </View>
  )
}

export default ActiveWallet
