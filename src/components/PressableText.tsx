import {
  View,
  Text,
  Pressable,
  PressableProps,
  GestureResponderEvent,
} from 'react-native'
import { theme } from '../constant'

interface PressableTextProps {
  options: Record<string, string>[]
  defaultValue: string
  selected: string
  onPress: (value: string) => void
}

const PressableText = ({
  options = [],
  selected,
  onPress,
}: PressableTextProps) => {
  return (
    <View
      style={{
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'gray',
      }}
    >
      {options &&
        options.map((opt) => (
          <Pressable
            key={opt.value}
            style={({ pressed }) => [
              selected !== opt.value && pressed
                ? {
                    backgroundColor: theme.pressedGray,
                    borderRadius: 50,
                  }
                : {},
            ]}
            onPress={() => {
              onPress(opt.value)
            }}
          >
            <View
              style={[
                selected === opt.value ? { backgroundColor: theme.gray } : {},
                { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 50 },
              ]}
            >
              <Text
                style={[
                  selected === opt.value
                    ? { color: 'white' }
                    : { color: 'gray' },
                  { fontSize: 16 },
                ]}
              >
                {opt.label}
              </Text>
            </View>
          </Pressable>
        ))}
    </View>
  )
}

export default PressableText
