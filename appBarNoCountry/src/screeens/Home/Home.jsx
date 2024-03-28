import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import NavBar from '../../components/Navbar.jsx/NavBar';
import ProductCards from '../../components/ProductCards/ProductCards';

function Home() {



  return (
    <View style={styles.container}>
      <NavBar/>
    <ProductCards/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 20,
  }

});

export default Home;
