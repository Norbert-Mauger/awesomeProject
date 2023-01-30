import { registerRootComponent } from 'expo';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatsCafe from './CatsCafe';
import About from './About';
import { View } from 'react-native';


export type RootStackParamList = {
  About: {
    catsCount: number;
  };
  CatsCafe: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CatsCafe">
        <Stack.Screen
          name="CatsCafe"
          component={CatsCafe} />
        <Stack.Screen
          name="About"
          component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


registerRootComponent(App);