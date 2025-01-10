import { StyleSheet } from "react-native"

export const theme = {
  primary: '#2563eb',
  primarySubHeading: '#d5dff5',

  white: '#fff',
}

export const styles = StyleSheet.create({
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