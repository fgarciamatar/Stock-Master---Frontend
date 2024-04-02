import React from 'react';
import {StyleSheet, View} from 'react-native';
import NavBar from '../../components/Navbar.jsx/NavBar';
import ProductCards from '../../components/ProductCards/ProductCards';
import TabNavigator from "./../../components/TabNavigator/TabNavigator"

function Home() {
  return (
    <View style={styles.container}>
     
        <NavBar />

      <View style={styles.Productos}>
        <ProductCards />
      </View>
      <TabNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:0,
    backgroundColor: "#215596",
  },
  NavBar: {
    marginTop:0,
    marginBottom: 20, // Espacio entre NavBar y ProductCards
  },
  Productos: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra los elementos horizontalmente
    alignItems: 'center',
  },
});

export default Home;
