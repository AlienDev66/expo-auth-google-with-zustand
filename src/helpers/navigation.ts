import { NavigationProp, useNavigation } from '@react-navigation/native'

const useNavigationSwitcher = () => {
  const privateNavigation: NavigationProp<NAVIGATION.Private> = useNavigation()
  const publicNavigation: NavigationProp<NAVIGATION.Public> = useNavigation()

  return {
    privateNavigation,
    publicNavigation
  }
}
export { useNavigationSwitcher }
