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
       <View style={styles.SearchBarContainer}>
      <SearchBar />
      </View>
      <TouchableOpacity onPress={handleFilters}>
      <Image
            source={filter}
            style={styles.filter}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBarCodeScanner}>
      <Image
            source={scanner}
            style={styles.scanner}
          />
      </TouchableOpacity>
      <View >
      <Image
            source={exitProfile}
            style={styles.profile}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    flexDirection: 'row', // Cambiado de 'column' a 'row'
    justifyContent: 'space-between', // Añadido para espaciar los botones automáticamente
    paddingHorizontal: 20, // Añadido para agregar espacio horizontal
    marginRight:5,
    backgroundColor: '#9E9E9E',
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
  },
  SearchBarContainer:{
    width: '55%', // ajusta el ancho según lo necesites
    margin: 0,
    padding: 6,
  },
  scanner: {
    margin:10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
  filter:{
    margin:10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
  profile:{
    margin:10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
});

export default NavBar;
