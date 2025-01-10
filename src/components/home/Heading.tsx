import { View, Text } from 'react-native'
import { styles } from '../../constant'

const Heading = () => {
  return (
    <View style={{ paddingHorizontal: 25, marginVertical: 18 }}>
      <Text style={{ fontSize: 24 }}>Hi, John!</Text>
      <Text style={{ color: 'gray', fontSize: 16 }}>Good morning!</Text>
    </View>
  )
}

export default Heading
