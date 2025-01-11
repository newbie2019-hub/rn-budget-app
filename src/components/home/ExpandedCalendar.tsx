import React from 'react'
import { CalendarProvider, ExpandableCalendar } from 'react-native-calendars'
import { WeekCalendarData } from '../../helpers/date'
import Heading from './Heading'
import ActiveWallet from './ActiveWallet'
import RecentTransactions from './RecentTransactions'
import { theme } from '../../constant'
import { ScrollView } from 'react-native'

const ITEMS: any[] = WeekCalendarData

const ExpandedCalendar = () => {
  return (
    <CalendarProvider date={ITEMS[1]?.title}>
      <Heading />
      <ExpandableCalendar
        allowShadow={false}
        theme={{
          monthTextColor: 'black',
          dotColor: theme.primary,
          arrowColor: theme.primary,
          selectedDayBackgroundColor: theme.primary,
        }}
      />
      <ActiveWallet />
      <RecentTransactions />
    </CalendarProvider>
  )
}

export default ExpandedCalendar
