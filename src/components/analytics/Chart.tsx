import { Fragment } from 'react'
import { Text, View } from 'react-native'
import { PieChart } from 'react-native-gifted-charts'

const Chart = () => {
  const pieData = [
    {
      value: 47,
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
      focused: true,
    },
    { value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE' },
    { value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3' },
    { value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97' },
  ]

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 16,
          borderRadius: 20,
        }}
      >
        <View style={{ padding: 20, alignItems: 'center' }}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text
                    style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}
                  >
                    47%
                  </Text>
                </View>
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Chart
