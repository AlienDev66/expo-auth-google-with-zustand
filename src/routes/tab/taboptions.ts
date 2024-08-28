import { Platform } from 'react-native'

export const options = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#006D4C',
  tabBarInactiveTintColor: '#4B4B4B',
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 87 : 72,
    padding: 12
  }
}
