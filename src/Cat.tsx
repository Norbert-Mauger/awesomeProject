import { Fragment, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";

type CatProps = {
    keycat: number;
    name: string;
    newName: (key: number, newName: string) => void
}

const Cat: React.FC<CatProps> = ({ keycat, name, newName }) => {
    const [isHungry, setIsHungry] = useState(true);
    const [digestionTime, resetTime] = useState(1000);

    const feedTheCat = (giveALot: boolean) => {
        // if(!isHungry) {
        //   Alert .alert('MEEEOOOW', 'Already fed')
        //   console.log("ALREADY OK");
        // }    
        console.warn("feeding...");
        ToastAndroid.showWithGravity(`Feeding ${name}...`, ToastAndroid.SHORT, ToastAndroid.CENTER)
        const delay = giveALot ? 10000 : 1000
        setIsHungry(false);
        let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
            setIsHungry(true);
            clearTimeout(timer);
            resetTime(Math.floor(Math.random() * delay))
        }, digestionTime);
    }

    return (
        <Fragment>
            <View style={catStyles.body}>
                <Text style={catStyles.title}>{name}</Text>
                <TextInput
                    style={catStyles.input}
                    placeholder="cat name"
                    autoComplete="off"
                    onEndEditing={(value) => newName(keycat, value.nativeEvent.text)}
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
                    <Pressable
                        style={catStyles.buttonStyle}
                        android_ripple={{ color: catStyles.buttonStyle.rippleColor }}
                        delayLongPress={2000}
                        onLongPress={() => {
                            feedTheCat(true)
                        }}
                        onPress={() => {
                            feedTheCat(false)
                        }}
                        disabled={!isHungry}
                    >
                        <Text >
                            {isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Fragment>
    )
}

const catStyles = StyleSheet.create({
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
    text: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 8
    },
    input: {
        width: 150,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#adf",
        textAlign: "center",
        fontSize: 22,
        textTransform: 'uppercase',

    }

});


export default Cat;