import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/SearchBar/SearchBar';
import exitProfile from './../../assets/exitProfile.png';
import filter from './../../assets/filter.png';
import scanner from './../../assets/scanner.png';

function NavBar() {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home');
  };
  const handlePorVencer = () => {
    navigation.navigate('ProxVencer');
  };
  const handleSinStock = () => {
    navigation.navigate('SinStock');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHome}>
        <Image source={filter} style={styles.home} />
        <Text style={styles.textIcon}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePorVencer}>
        <Image source={scanner} style={styles.porVencer} />
        <Text style={styles.textIcon}>Por Vencer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSinStock}>
        <View>
          <Image source={exitProfile} style={styles.sStock} />
          <Text style={styles.textIcon}>S/stock</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    height: 65,
  },
  textIcon:{
    fontFamily: 'Montserrat',
    fontSize:10,
    textAlign: 'center',
    color: '#000',// Texto púrpura para las etiquetas
    fontWeight: 'bold',
   
  },
  home: {
    marginTop: 10,
    marginBottom:0,
    margin: 10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
  porVencer: {
    marginTop: 10,
    marginBottom:0,
    margin: 10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
  sStock: {
    marginTop: 10,
    marginBottom:0,
    margin: 10,
    width: 37,
    height: 37,
    alignSelf: 'center',
  },
});

export default NavBar;
