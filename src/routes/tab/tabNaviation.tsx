import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { options } from "./taboptions";
import { HomeScreen } from "@/pages/Home/home-screen";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={options} initialRouteName="HOME">
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="home" color={color} focused={focused} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
