import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar/SearchBar';
import exitProfile from "./../../assets/exitProfile.png"
import filter from "./../../assets/filter.png"
import scanner from "./../../assets/scanner.png"

function NavBar() {
const navigation = useNavigation();

const handleFilters = () => {
  console.log("filters");
}
  const handleBarCodeScanner = () => {
    navigation.navigate("BarCodeScanner")
  }

  return (
    <View style={styles.container}>
      <SearchBar />
      <TouchableOpacity onPress={handleFilters}>
      <Image
            source={filter}
            style={styles.image}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBarCodeScanner}>
      <Image
            source={scanner}
            style={styles.image}
          />
      </TouchableOpacity>
      <View >
      <Image
            source={exitProfile}
            style={styles.image}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:0,
    flexDirection: 'row', // Cambiado de 'column' a 'row'
    justifyContent: 'space-between', // Añadido para espaciar los botones automáticamente
    paddingHorizontal: 20, // Añadido para agregar espacio horizontal
    marginRight:5,
    backgroundColor: '#9E9E9E',
  },
  image: {
    margin:10,
    width: 45,
    height: 45,
    alignSelf: 'center'
  },
});

export default NavBar;
