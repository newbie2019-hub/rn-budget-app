import { StyleSheet } from "react-native"

export const theme = {
  primary: '#2563eb',
  primarySubHeading: '#d5dff5',
  error: '#b91c1c',
  subtleBlack: '#2b2b2b',
  gray: '#6e6e6e',
  pressedGray: '#d1d1d1',
  white: '#fff',

  // Font Sizes
  heading: 18,
  subHeading: 18,

  // Onboarding
  onBoardingHeading: 34
}

export const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
  },
  container: {
    gap: 10,
    marginTop: 10,
    flex: 1,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  subHeading: {
    color: theme.primarySubHeading
  },
  white: {
    color: theme.white
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#8a92a7',
    marginVertical: 20,
  },
})