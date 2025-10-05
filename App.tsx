import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./src/screen/Tabs";
import WorldListScreen from "./src/components/WorldListScreen";
import WorldScreen from "./src/screen/WorldScreen";
import { LoaderProvider } from "./src/context/LoaderContext";
import QuizScreen from "./src/screen/QuizScreen";

export type RootStackParamList = {
  Tabs: undefined;
  WorldList: { classNumber: number };
  World: { classNumber: number; subject: string };
  Quiz: { classNumber: number; subject: string; level: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <LoaderProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="WorldList" component={WorldListScreen} />
          <Stack.Screen
            name="World"
            component={WorldScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoaderProvider>
  );
};

export default App;
