import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import { Button, Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


export type Props = {
  title: string;
  children?:
  | React.ReactNode
  | React.ReactNode[];
};

import * as React from "react";
import { Header, Icon } from '@rneui/themed';
import { SafeAreaProvider } from "react-native-safe-area-context";

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

const Cafe = () => {
  let catList = [
    { key: 1, name: "Willy" },
    { key: 2, name: "Spot" },
    { key: 3, name: "Tommy" },
    { key: 4, name: "Lilly" }]

  const [cats, setCats] = useState(catList);
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    // add a cat...
    setCats([...cats, {key: cats.length+1, name: "New One"}])
    setRefreshing(false);

  }

  return (
    <View style={cafeStyle.container}>
      <ScrollView horizontal={false} refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
        {
          cats.map((item) => {
            return <Cat key={item.key} name={item.name} />
          })
        }
      </ScrollView>
    </View>
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
      <View style={catStyles.body}>
        <Text style={catStyles.title}>{name}</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 120, height: 120 }}
        />
        <Text style={catStyles.text}>Meow, my name is {name}</Text>
        <Text style={catStyles.text}>and {isHungry ? "I am hungry" : "I'm fine thank you"}</Text>
        <View style={catStyles.buttonStyle}>
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
      </View>
    </Fragment>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adf",
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

const catStyles = StyleSheet.create({
  body: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 12,
    margin: 8,
  },
  buttonStyle: {
    margin: 8,
  },
  title: {
    backgroundColor: "#8be",
    fontSize: 18,
    textTransform: 'uppercase',
    fontStyle: 'normal',
    margin: 4,
    marginTop: 12,
    padding: 4,
    paddingHorizontal: 12
  },
  text: {
    fontSize: 16,

    fontStyle: 'italic',
    marginBottom: 8

  }

});

const cafeStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
})
