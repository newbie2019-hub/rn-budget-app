import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Entypo from '@expo/vector-icons/Entypo'
import { theme } from '../../constant'

const Heading = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 26 }}>Hi, John!</Text>
        <Text style={{ color: 'gray', fontSize: 18 }}>Good morning!</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Entypo
          name="cog"
          size={22}
          color={theme.subtleBlack}
        />
        <MaterialIcons
          name="notifications-none"
          size={22}
          color={theme.subtleBlack}
        />
      </View>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginVertical: 18,
  },
})
