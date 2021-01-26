import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  FanwoodText_400Regular,
} from "@expo-google-fonts/fanwood-text";
import { createStackNavigator } from "@react-navigation/stack";

import Programme from "./screens/Programme";
import WorkoutCoached from "./screens/WorkoutCoached";

import { Workout } from "./features/getWorkouts/interface";

export type RootStackParamList = {
  Programme: undefined;
  Workout: { workout: Workout };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    FanwoodText_400Regular,
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Programme" component={Programme} />
        <Stack.Screen name="Workout" component={WorkoutCoached} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
