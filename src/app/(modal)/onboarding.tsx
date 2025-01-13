import { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import { theme } from '../../constant'
import Button from '../../components/Button'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Prop {
  onPress: () => void
}

const Intro = ({ onPress }: Prop) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        width: '100%',
        paddingVertical: 80,
      }}
    >
      <View style={{ width: '80%', marginHorizontal: 'auto' }}>
        <Text
          style={[
            { fontSize: theme.onBoardingHeading },
            { textAlign: 'center' },
          ]}
        >
          Kaperas - Track your Finances
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 'auto',
            color: theme.gray,
            marginTop: 10,
          }}
        >
          Organize your finances, monitor expenses, create budgets, and achieve
          your saving goals effortlessly
        </Text>
        <View style={{ marginTop: 40 }}>
          <Button
            text="Get Started"
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  </View>
)

const FeatureWallet = ({ onPress }: Prop) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        width: '100%',
        paddingVertical: 80,
      }}
    >
      <View style={{ width: '80%', marginHorizontal: 'auto' }}>
        <Text
          style={[
            { fontSize: theme.onBoardingHeading },
            { textAlign: 'center' },
          ]}
        >
          Your Money, Your Way
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 'auto',
            color: theme.gray,
            marginTop: 10,
          }}
        >
          Create multiple wallets for every need -- track accounts, budgets, or
          savings in one place!
        </Text>
        <View style={{ marginTop: 40 }}>
          <Button
            text="Get Started"
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  </View>
)

const FeatureCollab = ({ onPress }: Prop) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        width: '100%',
        paddingVertical: 80,
      }}
    >
      <View style={{ width: '80%', marginHorizontal: 'auto' }}>
        <Text
          style={[
            { fontSize: theme.onBoardingHeading },
            { textAlign: 'center' },
          ]}
        >
          Shared Goals, Shared Success
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 'auto',
            color: theme.gray,
            marginTop: 10,
          }}
        >
          Collaborate with family and friends -- share wallets, set goals, and
          grow together!
        </Text>
        <View style={{ marginTop: 40 }}>
          <Button
            text="Get Started"
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  </View>
)

const FeatureNotif = ({ onPress }: Prop) => (
  <View>
    <View
      style={{
        width: '100%',
        paddingVertical: 20,
      }}
    >
      <View style={{ width: '90%', marginHorizontal: 'auto' }}>
        <Text
          style={[
            { fontSize: theme.onBoardingHeading },
            { textAlign: 'center' },
          ]}
        >
          Savings start with reminders
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 'auto',
            color: theme.gray,
            marginTop: 10,
          }}
        >
          Being reminded keeps you on track, ensuring you stay focused on your
          goals and manage your finances effectively
        </Text>
        <View
          style={{
            width: '95%',
            marginHorizontal: 'auto',
            marginVertical: 40,
          }}
        >
          <Text
            style={{ color: theme.subtleBlack, fontSize: theme.subHeading }}
          >
            Set Notification
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 24,
            }}
          >
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: theme.subHeading }}>
                Daily notification
              </Text>
              <Text style={{ color: theme.subtleBlack, marginTop: 5 }}>
                Get a reminder to add your income or expenses for the day
              </Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: theme.primary }}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: theme.gray,
              marginVertical: 20,
              opacity: 0.25,
            }}
          ></View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View style={{ width: '60%' }}>
              <Text style={{ fontSize: theme.subHeading }}>
                Weekly notification
              </Text>
              <Text style={{ color: theme.subtleBlack, marginTop: 5 }}>
                Get a reminder to add your income or expenses for the day
              </Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: theme.primary }}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Button
            text="Set Notification"
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  </View>
)

const OnBoarding = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)

  let content = <Intro onPress={() => setPage(page + 1)} />

  if (page === 1) {
    content = <Intro onPress={() => setPage(page + 1)} />
  }

  if (page === 2) {
    content = <FeatureWallet onPress={() => setPage(page + 1)} />
  }

  if (page === 3) {
    content = <FeatureCollab onPress={() => setPage(page + 1)} />
  }

  if (page === 4) {
    content = <FeatureNotif onPress={() => router.dismiss()} />
  }
  return <SafeAreaView style={{ flex: 1 }}>{content}</SafeAreaView>
}

export default OnBoarding
