import { registerRootComponent } from 'expo';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Header, Icon } from '@rneui/themed';
import Cafe from "./Cafe";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';


type RootStackParamList = {
    About: undefined;
    CatsCafe: undefined;
  };

type Props = NativeStackScreenProps<RootStackParamList, 'About', 'CatsCafe'>

const CatsCafe: React.FC<Props> = ({ navigation }) => {
    const handleAboutPress = () => {
        navigation.navigate('About')
    }
    return (
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
                <Button onPress={handleAboutPress}>About</Button>
            </View>
            <View style={styles.body}>
                <Cafe></Cafe>
            </View>
        </SafeAreaView>
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

export default CatsCafe