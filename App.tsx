import React from "react";
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./src/screen/Home";

enableScreens();
const Tab = createBottomTabNavigator();

const renderTabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName: React.ComponentProps<typeof Ionicons>["name"];

  switch (routeName) {
    case "Home":
      iconName = "home-outline";
      break;
    case "Categories":
      iconName = "apps-outline";
      break;
    case "Leaderboard":
      iconName = "podium-outline";
      break;
    case "Profile":
      iconName = "person-outline";
      break;
    default:
      iconName = "ellipse-outline"; // fallback
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon(route.name, color, size),
          tabBarActiveTintColor: "#2196F3",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Categories" component={HomeScreen} />
        <Tab.Screen name="Leaderboard" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
