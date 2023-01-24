import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import { Button, FlatList, Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


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
    { key: 0, name: "Willy" },
    { key: 1, name: "Spot" },
    { key: 2, name: "Tommy" },
    { key: 3, name: "Lilly" }]

  const [cats, setCats] = useState(catList);
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    // add a cat...
    const newKey = cats.length
    setCats([...cats, { key: newKey, name: `Cat #${newKey}` }])
    setRefreshing(false);
  }

  const setName = (key: number, newName: string) => {
    const newCats = cats.map((c, i) => {
      if (i === key) {
        return {...c, name: newName}
      } else {
        return c
      }
    });
        
    setCats(newCats)
  }


  return (
    <View style={cafeStyle.container}>
      <FlatList
        keyExtractor={(item) => item.key.toString()}
        data={cats}
        renderItem={({ item }) => (
          <Cat keycat={item.key} name={item.name} newName={setName} />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

type CatProps = {
  keycat: number;
  name: string;
  newName:  (key: number, newName: string) => void
}

const Cat: React.FC<CatProps> = ({ keycat, name, newName }) => {
  const [isHungry, setIsHungry] = useState(true);
  const [digestionTime, resetTime] = useState(Math.floor(Math.random() * 5000));

  return (
    <Fragment>
      <View style={catStyles.body}>
        <Text style={catStyles.title}>{name}</Text>
        <TextInput
          style={catStyles.input}
          placeholder="cat name"
          onChangeText={(value) => newName(keycat, value)}
          maxLength={12}
          editable={true}
        >
          {name}
        </TextInput>
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

  },
  input: {
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#8be",
    textAlign: "center",
    fontSize: 22,
    textTransform: 'uppercase',

  }

});

const cafeStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
})
