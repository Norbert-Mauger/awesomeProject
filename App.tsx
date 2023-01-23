import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";


export type Props = {
  title: string;
  children?: 
  | React.ReactNode
  | React.ReactNode[];
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world, how are you there?</Text>
      <Text>Notification test</Text>
      <MyComponent title="title">
        <Text>*** Another Awesome Text here... ***</Text>
        test
      </MyComponent>
      <StatusBar style="auto"/>
    </View>
  );
}

const MyComponent: React.FC<Props> = ({ title, children }) => {
  return (
    <Fragment>
      <Text>
        {title}
      </Text>
      <Text>
        {children}
      </Text>
      <Cafe></Cafe>
      
    </Fragment>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Willy" />
      <Cat name="Spot" />
    </>
  );
};

type CatProps = {
  name: string;
}
const Cat: React.FC<CatProps> = ({name}) => {
  const [isHungry, setIsHungry] = useState(true);
  const [digestionTime, resetTime] = useState(Math.floor(Math.random() * 5000));

  return(
    <Fragment>
      <ScrollView>
      <View>
        <Text>Meow, my name is {name}</Text>
        <Text>and {isHungry?"I am hungry":"I'm fine thank you"}</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{width: 200, height: 200}}
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
      </ScrollView>
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
