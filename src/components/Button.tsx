import {
  View,
  Text,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native'
import React from 'react'
import { theme } from '../constant'

interface ButtonProps {
  text: string
  onPress: (event: GestureResponderEvent) => void
}

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
    >
      <View style={styles.btnPrimary}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>
          {text}
        </Text>
      </View>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: theme.primary,
    paddingVertical: 14,
    borderRadius: 40,
  },
})
