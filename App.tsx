import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";


export type Props = {
  title: string;
  name: string;
  children?:
  | React.ReactNode
  | React.ReactNode[];
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world, how are you there?</Text>
      <Text>Notification test</Text>
      <MyComponent name="This is a Name" title="title">
        <Text>*** Another Text here... ***</Text>
        test
      </MyComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const MyComponent: React.FC<Props> = ({ name, title, children }) => {
  return (
    <Fragment>
      <Text>
        {title}
      </Text>
      <Text>
        {children}
      </Text>
      <Text>
        {name}
      </Text>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adf",
    alignItems: "center",
    justifyContent: "center",
  },
});
