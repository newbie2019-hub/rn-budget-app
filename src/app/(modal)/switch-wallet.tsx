import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { theme } from '../../constant'
import ActiveWallet from '../../components/home/ActiveWallet'
import WalletCard from '../../components/wallet/CardWallet'

const SwitchActiveWallet = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.pullDivider}></View>
      <Text
        style={{
          textAlign: 'center',
          color: theme.subtleBlack,
          fontSize: 12,
        }}
      >
        WALLETS
      </Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 68 }}>
        <View
          style={{
            width: '85%',
            marginHorizontal: 'auto',
            marginTop: 20,
          }}
        >
          <Text
            style={{ fontSize: theme.subHeading, color: theme.subtleBlack }}
          >
            Active Wallet
          </Text>
          <WalletCard
            amount={12_600}
            currency="PHP"
            wallet="Main Wallet"
            key="wallet"
            updatedAt="Aug 20, 2022"
          />
        </View>
        <View
          style={{
            width: '85%',
            marginHorizontal: 'auto',
            marginTop: 10,
          }}
        >
          <Text
            style={{ fontSize: theme.subHeading, color: theme.subtleBlack }}
          >
            Other Wallets
          </Text>
          <WalletCard
            amount={14_500}
            currency="PHP"
            wallet="BDO"
            key="wallet"
            updatedAt="Aug 21, 1998"
          />
          <WalletCard
            amount={1_250}
            currency="PHP"
            wallet="On-Hand Cash"
            key="wallet-onhand"
            updatedAt="Aug 21, 1962"
          />
          <WalletCard
            amount={24_000}
            currency="PHP"
            wallet="BPI"
            key="wallet-bpi"
            updatedAt="Sep 12, 1928"
          />
          <WalletCard
            amount={24_000}
            currency="PHP"
            wallet="IDK Random"
            key="wallet-random"
            updatedAt="Sep 12, 1928"
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default SwitchActiveWallet

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
