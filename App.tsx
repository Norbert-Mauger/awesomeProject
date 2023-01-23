import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


export type Props = {
  title: string;
  children?:
  | React.ReactNode
  | React.ReactNode[];
};

import * as React from "react";
import { Header, Icon } from  '@rneui/themed';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
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
        <ScrollView>
          <Cafe></Cafe>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Willy" />
      <Cat name="Spot" />
      <Cat name="Tommy" />
      <Cat name="Lilly" />
    </>
  );
};

type CatProps = {
  name: string;
}
const Cat: React.FC<CatProps> = ({ name }) => {
  const [isHungry, setIsHungry] = useState(true);
  const [digestionTime, resetTime] = useState(Math.floor(Math.random() * 5000));

  return (
    <Fragment>
      <View>
        <Text>Meow, my name is {name}</Text>
        <Text>and {isHungry ? "I am hungry" : "I'm fine thank you"}</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Button
          onPress={() => {
            setIsHungry(false);
            let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
              setIsHungry(true);
              clearTimeout(timer);
              resetTime(Math.floor(Math.random() * 5000))
            }, digestionTime);
          }}
          disabled={!isHungry}
          title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
        />
      </View>
    </Fragment>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adf",
    alignItems: "center",
    justifyContent: "center",
  },
});
