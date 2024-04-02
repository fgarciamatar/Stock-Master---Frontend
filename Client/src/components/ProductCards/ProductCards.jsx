import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Products from '../../utils/Products';
import { ScrollView } from 'react-native-gesture-handler';

function ProductCards() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.table}>
       <View style={[styles.column, styles.border]}>
       <Text style={styles.textColumn}>Code</Text>
        </View>
        <View style={[styles.column, styles.border]}>
        <Text style={styles.textColumn}>Producto</Text>
        </View>
        <View style={[styles.column, styles.border]}>
        <Text style={styles.textColumn}>Categoria</Text>
        </View>
        <View style={[styles.column, styles.border]}>
        <Text style={styles.textColumn}>Stock</Text>
        </View>
        
      </View>
      {Products !== undefined &&
        Products.map((producto, index) => (
          <View style={styles.table}>
       <View style={[styles.column, styles.border]}>
       <Text style={styles.textContent}>{producto.code}</Text>
        </View>
        <View style={[styles.column, styles.border]}>
        <Text style={styles.textContent}>{producto.nombre}</Text>
        </View>
        <View style={[styles.column, styles.border]}>
        <Text style={styles.textContent}>{producto.categoria}</Text>
        </View>
        <View style={[styles.column, styles.border]}>
        <Text style={styles.textContent}>Stock</Text>
        </View>
        
      </View>
       
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F9ED7', // Color de fondo del ScrollView
    width:"96%",
    
  },
  table:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#E6E6E6',
  },
  column:{
    margin:10,
    width:80,
    borderColor: '#E6E6E6',
   
  },
  // border: {
  //   borderWidth: 1,
  //   borderColor: 'white',
  // },
  textColumn: {
    fontWeight: 'bold', // Negrita para el código
    fontSize: 16, // Tamaño de fuente para el nombre
    color: '#ffff', // Color de texto para el nombre
   
  },

  textContent: {
    fontSize: 14, // Tamaño de fuente para el nombre
    color: '#ffff', // Color de texto para el nombre
  
  }
});

export default ProductCards;

