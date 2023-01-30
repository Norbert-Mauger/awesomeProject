import { registerRootComponent } from 'expo';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatsCafe from './CatsCafe';
import About from './About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CatsCafe"
          component={CatsCafe}/>
        <Stack.Screen
          name="About"
          component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


registerRootComponent(App);