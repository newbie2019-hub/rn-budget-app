import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import WalletCard from '../../components/wallet/wallet-card'
import ContextMenuCard from '../../components/wallet/contextmenu'
import EmptyWallet from '../../components/wallet/emptywallet'
import { styles } from '../../constant'

interface Wallet {
  id: number
  amount: number
  wallet: string
  updatedAt: string
  currency: string
}

const emptyWallet: Wallet[] = []

const wallets: Wallet[] = [
  {
    id: 1,
    amount: 234231,
    wallet: 'Main Wallet',
    updatedAt: 'Dec 23, 2024',
    currency: 'PHP',
  },
  {
    id: 2,
    amount: 219205,
    wallet: 'Secondary Wallet',
    updatedAt: 'Dec 22, 2024',
    currency: 'PHP',
  },
  {
    id: 3,
    amount: 22000,
    wallet: 'UnionBank',
    updatedAt: 'Oct 23, 2024',
    currency: 'PHP',
  },
  {
    id: 4,
    amount: 10400,
    wallet: 'BDO',
    updatedAt: 'Sept 12, 2024',
    currency: 'PHP',
  },
  {
    id: 5,
    amount: 10000,
    wallet: 'BPI',
    updatedAt: 'Sept 12, 2024',
    currency: 'PHP',
  },
]

const Wallet = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['top', 'left', 'right']}
    >
      <View style={styles.body}>
        <Text style={styles.heading}>Wallets</Text>

        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              wallets.length === 0
                ? {
                    alignContent: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }
                : {}
            }
            data={wallets}
            ListEmptyComponent={() => <EmptyWallet />}
            renderItem={({ item }) => (
              <ContextMenuCard>
                <WalletCard
                  wallet={item?.wallet}
                  updatedAt={item?.updatedAt}
                  amount={item?.amount}
                  currency={item?.currency}
                />
              </ContextMenuCard>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Wallet

const walletStyles = StyleSheet.create({})
