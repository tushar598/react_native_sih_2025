import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import CategoriesScreen from "./CategoriesScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LeaderboardScreen from "./LeaderboardScreen";

const Tab = createBottomTabNavigator();

const tabIcons: Record<string, string> = {
  Home: "home",
  Categories: "category",
  Leaderboard: "leaderboard",
  Profile: "person",
};

const getTabScreenOptions = (routeName: string) => ({
  tabBarIcon: ({ color, size }: { color: string; size: number }) => {
    const iconName = tabIcons[routeName] || "help";
    return <MaterialIcons name={iconName} size={size} color={color} />;
  },
});

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={getTabScreenOptions("Home")}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={getTabScreenOptions("Categories")}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={getTabScreenOptions("Leaderboard")}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={getTabScreenOptions("Profile")}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
