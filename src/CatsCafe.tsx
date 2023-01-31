
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { useState } from "react";
import { Header, Icon } from '@rneui/themed';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import { RootStackParamList } from './App';
import { ImageBackground, FlatList } from "react-native";

import Cat from './Cat';


type CatsCafeProps = NativeStackScreenProps<RootStackParamList, 'CatsCafe'>

const CatsCafe: React.FC<CatsCafeProps> = ({ route, navigation }) => {
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
        const newCats = [...cats];
        const c = newCats.find(
            a => a.key === key
        );
        if (c !== undefined)
            c.name = newName

        setCats(newCats)
    }

    const handleAboutPress = () => {
        navigation.navigate('About', { catsCount: cats.length })
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <Header
                backgroundImageStyle={{}}
                barStyle="default"
                centerComponent={{
                    text: `Route: ${route.name}`,
                    style: { color: "#fff" }
                }}
                centerContainerStyle={{}}
                containerStyle={{ width: 350 }}
                leftComponent={{ icon: "menu", color: "#fff" }}
                leftContainerStyle={{}}
                placement="center"
                rightComponent={{ icon: "home", color: "#fff" }}
                rightContainerStyle={{}}
                statusBarProps={{}} /> */}
            <View style={styles.header}>
                <Text style={styles.title}>This is the CAT CAFÉ !</Text>
                <Pressable
                    style={styles.buttonStyle}
                    onPress={() => {
                        //handleAboutPress()
                        navigation.navigate('About', { catsCount: cats.length })
                    }}>
                    <Text>Click to know more about...</Text>
                </Pressable>


            </View>
            <View style={styles.body}>
                <ImageBackground
                    style={styles.container}
                    //source={{uri:"https://cdn.pixabay.com/photo/2016/12/30/19/33/children-1941336_960_720.png"}}>
                    source={require('../assets/background.png')}>
                    <FlatList
                        data={cats}
                        keyExtractor={(item) => item.key.toString()}

                        renderItem={({ item }) => (
                            <Cat keycat={item.key} name={item.name} newName={setName} />
                        )}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                </ImageBackground>
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
        borderWidth: 12,
        margin: 24

    },
    title: {
        fontSize: 20,
        fontStyle: 'normal',
        margin: 10,
        padding: 1
    },
    body: {
        flex: 11,
    },
    buttonStyle: {
        margin: 1,
        rippleColor: "3b3"
    },

});


const cafeStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },

})

export default CatsCafe