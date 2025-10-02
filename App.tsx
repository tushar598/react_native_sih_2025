import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "./src/screen/Home";
import CategoriesScreen from "./src/screen/CategoriesScreen"; 

const Tab = createBottomTabNavigator();

// Define icon mapping
const tabIcons: Record<string, string> = {
  Home: "home",
  Categories: "category",
  Leaderboard: "leaderboard",
  Profile: "person",
};

// Create individual screen options for each tab
const getTabScreenOptions = (routeName: string) => ({
  tabBarIcon: ({ color, size }: { color: string; size: number }) => {
    const iconName = tabIcons[routeName] || "help";
    return <MaterialIcons name={iconName} size={size} color={color} />;
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#2196F3",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={getTabScreenOptions("Home")}
        />
        <Tab.Screen 
          name="Categories" 
          component={CategoriesScreen}
          options={getTabScreenOptions("Categories")}
        />
        <Tab.Screen 
          name="Leaderboard" 
          component={HomeScreen}
          options={getTabScreenOptions("Leaderboard")}
        />
        <Tab.Screen 
          name="Profile" 
          component={HomeScreen}
          options={getTabScreenOptions("Profile")}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;