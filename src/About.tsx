import { Fragment, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";


const About: React.FC = () => {
    return (
        <Fragment>
            <View style={aboutStyles.body}>
                <Text style={aboutStyles.title}>About Page</Text>
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
        margin: 8,
    },
    buttonStyle: {
        margin: 8,
        backgroundColor: "#4c4",
        rippleColor: "3b3"
    },
    title: {

        backgroundColor: "#adf",
        fontSize: 18,
        textTransform: 'uppercase',
        fontStyle: 'normal',
        margin: 4,
        marginTop: 12,
        padding: 4,
        paddingHorizontal: 12
    },
 
});


export default About;