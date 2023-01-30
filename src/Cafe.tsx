import { useState } from "react";
import { FlatList, ImageBackground, StyleSheet } from "react-native";
import Cat from "./Cat";


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
      const newCats = [...cats];
      const c = newCats.find(
        a => a.key === key
      );
      if (c !== undefined)
        c.name = newName
  
      setCats(newCats)
    }
  
  
    return (
      <ImageBackground 
        style={cafeStyle.container}
        //source={{uri:"https://cdn.pixabay.com/photo/2016/12/30/19/33/children-1941336_960_720.png"}}>
        source={require('../assets/background.png')}>
        <FlatList
          keyExtractor={(item) => item.key.toString()}
          data={cats}
          renderItem={({ item }) => (
            <Cat keycat={item.key} name={item.name} newName={setName} />
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </ImageBackground>
    );
  };

  
const cafeStyle = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    },
  })
  
export default Cafe