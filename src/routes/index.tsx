import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PrivateRoutes } from "./private";
import { PublicRoutes } from "./public";
import { useAuthStore } from "@/data/stores/user/user-data";

const MainStack = createNativeStackNavigator();

export const AppRoutes = () => {
  const user = useAuthStore((state) => state.user);

  const initialRoute = user?.email ? "PRIVATE" : "PUBLIC";

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}>
        {user?.email ? (
          <MainStack.Screen name={"PRIVATE"} component={PrivateRoutes} />
        ) : (
          <MainStack.Screen name={"PUBLIC"} component={PublicRoutes} />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
