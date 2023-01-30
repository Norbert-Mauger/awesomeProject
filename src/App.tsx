import { registerRootComponent } from 'expo';
import { SafeAreaView,StyleSheet, Text, View } from "react-native";


export type Props = {
  title: string;
  children?:
  | React.ReactNode
  | React.ReactNode[];
};

import * as React from "react";
import { Header, Icon } from '@rneui/themed';
import Cafe from "./Cafe";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          backgroundImageStyle={{}}
          barStyle="default"
          centerComponent={{
            text: "MY TITLE",
            style: { color: "#fff" }
          }}
          centerContainerStyle={{}}
          containerStyle={{ width: 350 }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          leftContainerStyle={{}}
          placement="center"
          rightComponent={{ icon: "home", color: "#fff" }}
          rightContainerStyle={{}}
          statusBarProps={{}} />
        <View style={styles.header}>
          <Text style={styles.title}>This is the CAT CAFÉ !</Text>
        </View>
        <View style={styles.body}>
          <Cafe></Cafe>
        </View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cef",
    alignItems: "stretch",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#FFAA44",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 12

  },
  title: {
    fontSize: 20,
    fontStyle: 'normal',
    margin: 10
  },
  body: {
    flex: 11,
  }

});



registerRootComponent(App);