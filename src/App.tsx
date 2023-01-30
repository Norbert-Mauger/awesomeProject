import { registerRootComponent } from 'expo';
import { SafeAreaView,StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Header, Icon } from '@rneui/themed';
import Cafe from "./Cafe";
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