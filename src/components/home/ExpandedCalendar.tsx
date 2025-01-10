import React, { useState } from 'react'
import {
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
} from 'react-native-calendars'
import { WeekCalendarData } from '../../constant/theme'
import Heading from './Heading'
import ActiveWallet from './ActiveWallet'
import RecentTransactions from './RecentTransactions'
import { theme } from '../../constant'

const ITEMS: any[] = WeekCalendarData

const ExpandedCalendar = () => {
  return (
    <CalendarProvider
      showTodayButton
      date={ITEMS[1]?.title}
    >
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
