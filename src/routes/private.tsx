import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabNavigation } from './tab/tabNaviation'

const Stack = createNativeStackNavigator()

export const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="TAB" component={TabNavigation} />
    </Stack.Navigator>
  )
}
