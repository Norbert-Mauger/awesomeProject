import { Fragment, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "./App";


type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>

const About: React.FC<AboutProps> = ({route}) => {
    return (
        <Fragment>
            <View style={aboutStyles.body}>
                <Text style={aboutStyles.title}>there are {route.params?.catsCount} cats right now</Text>
            </View>
        </Fragment>
    )
}

const aboutStyles = StyleSheet.create({
    body: {
        backgroundColor: "#adf",
        opacity: 0.9,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 12,
        marginTop: 42,
       
    },
    buttonStyle: {
        margin: 2,
        backgroundColor: "#4c4",
        rippleColor: "3b3"
    },
    title: {

        backgroundColor: "#adf",
        fontSize: 18,
        textTransform: 'uppercase',
        fontStyle: 'normal',
        margin: 4,
        padding: 2,
        paddingHorizontal: 12
    },
 
});


export default About;