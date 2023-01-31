import { registerRootComponent } from 'expo';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatsCafe from './CatsCafe';
import About from './About';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
// list of icons here :
// https://fontawesome.com/v5/cheatsheet/free/regular

export type RootStackParamList = {
  About: {
    catsCount: number;
  };
  CatsCafe: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CatsCafe"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName: string = 'thumb-down';
            if (route.name === 'About') {
              iconName = 'lightbulb';
              size = focused ? 32 : 24;
            } else if (route.name === 'CatsCafe') {
              iconName = 'id-card';
              size = focused ? 32 : 24;
            } 
            return (
              <FontAwesome5
                name={iconName}
                size={size} />
            )
          }

        })}
        tabBarOptions={{
          activeTintColor: '#44F',
          activeBackgroundColor: "#bdf",
          inactivetTintColor: '#666',
          inactiveBackgroundColor: "#cef",
          labelStyle:{fontSize: 14},
        }}
      >
        <Tab.Screen
          options={{ headerShown: false,
            tabBarBadge: 3 }}
          name="CatsCafe"
          component={CatsCafe} 
          />
        <Tab.Screen
          name="About"
          component={About}
          initialParams= {{catsCount: 4}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


registerRootComponent(App);