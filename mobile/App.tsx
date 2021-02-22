import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Programme from './screens/Programme';
import WorkoutCoached from './screens/WorkoutCoached';
import {AuthProvider} from './lib/auth';
import {Workout} from './types';

export type RootStackParamList = {
  Welcome: undefined;
  Programme: undefined;
  'Workout Coached': {workout: Workout};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Programme" component={Programme} />
          <Stack.Screen name="Workout Coached" component={WorkoutCoached} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
