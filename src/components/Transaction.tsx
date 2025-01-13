import { Text, StyleSheet, View, Pressable } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { theme } from '../constant'

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: drag.value + 50 }],
    }
  })

  return (
    <Reanimated.View style={[styleAnimation, styles.rightAction]}>
      <EvilIcons
        name="trash"
        size={24}
        color="white"
      />
    </Reanimated.View>
  )
}

const Transaction = () => {
  return (
    <GestureHandlerRootView style={{ marginVertical: 4 }}>
      <ReanimatedSwipeable
        containerStyle={styles.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={RightAction}
      >
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <EvilIcons
                name="cart"
                size={24}
                color="black"
              />
              <View>
                <Text style={{ fontSize: 18 }}>Groceries</Text>
                <Text style={{ fontSize: 14, color: 'gray' }}>
                  Jan 11, 2024 at 2:24 PM
                </Text>
              </View>
            </View>
            <Text style={{ fontSize: 18 }}>-₱7,000</Text>
          </View>
        </Pressable>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  )
}

export default Transaction

const styles = StyleSheet.create({
  rightAction: {
    backgroundColor: theme.error,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    borderTopWidth: 1,
  },
  swipeable: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
})
