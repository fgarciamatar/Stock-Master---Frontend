import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/SearchBar/SearchBar';
import exitProfile from './../../assets/exitProfile.png';
import filter from './../../assets/filter.png';
import scanner from './../../assets/scanner.png';

function NavBar() {
  const navigation = useNavigation();

  const handleFilters = () => {
    console.log('filters');
  };
  const handleBarCodeScanner = () => {
    navigation.navigate('BarCodeScanner');
  };
  const handleProfile = () => {
    navigation.navigate('SelectPerfil');
  };

  return (
    <View style={styles.container}>
     
      <TouchableOpacity onPress={handleFilters}>
        <Image source={filter} style={styles.filter} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBarCodeScanner}>
        <Image source={scanner} style={styles.scanner} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleProfile}>
        <View>
          <Image source={exitProfile} style={styles.profile} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flexDirection: 'row', // Cambiado de 'column' a 'row'
    justifyContent: 'space-between', // Añadido para espaciar los botones automáticamente
    paddingHorizontal: 20, // Añadido para agregar espacio horizontal
    backgroundColor: '#ffff',
    height: 60,
  },
  scanner: {
    marginTop: 10,
    margin: 10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
  filter: {
    marginTop: 10,
    margin: 10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
  profile: {
    marginTop: 10,
    margin: 10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
});

export default NavBar;
