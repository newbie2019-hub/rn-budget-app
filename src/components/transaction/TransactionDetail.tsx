import { ReactNode } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { theme } from '../../constant'

interface TransactionDetailProps {
  onClick: () => void
  label: string
  icon: ReactNode
}

const TransactionDetail = ({
  onClick,
  label,
  icon,
}: TransactionDetailProps) => {
  return (
    <Pressable onPress={onClick}>
      <View style={{ marginHorizontal: 'auto', width: '85%' }}>
        <View style={styles.divider}></View>
        <View
          style={{
            flexDirection: 'row',
            gap: 14,
            paddingHorizontal: 12,
            alignItems: 'center',
          }}
        >
          {icon}
          <View style={{ flexDirection: 'column', gap: 3 }}>
            <Text style={{ fontSize: 13, color: theme.gray }}>{label}</Text>
            <Text style={{ fontSize: 16, color: theme.subtleBlack }}>
              {label}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default TransactionDetail

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 18,
    opacity: 0.4,
  },
})
