import { AuthScreen } from "@/pages/Auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"SIGN_IN"}>
      <Stack.Screen name="SIGN_IN" component={AuthScreen} />
    </Stack.Navigator>
  );
};
