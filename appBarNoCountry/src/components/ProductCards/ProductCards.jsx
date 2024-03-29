import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Products from '../../utils/Products';
import { ScrollView } from 'react-native-gesture-handler';

function ProductCards() {
  return (
    <ScrollView style={styles.container}>
      {Products !== undefined &&
        Products.map((producto, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.code}>{producto.code}</Text>
            <Text style={styles.name}>{producto.nombre}</Text>
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Color de fondo del ScrollView
  },
  card: {
    backgroundColor: 'white', // Color de fondo de cada tarjeta
    borderRadius: 10, // Bordes redondeados
    padding: 20, // Espaciado interno
    marginVertical: 10, // Margen vertical entre tarjetas
    marginHorizontal: 20, // Margen horizontal
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Color de la sombra en iOS
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra en iOS
    shadowOpacity: 0.1, // Opacidad de la sombra en iOS
    shadowRadius: 1, // Radio de la sombra en iOS
  },
  code: {
    fontWeight: 'bold', // Negrita para el código
    marginBottom: 5, // Margen inferior para el código
  },
  name: {
    fontSize: 16, // Tamaño de fuente para el nombre
    color: '#333', // Color de texto para el nombre
  },
});

export default ProductCards;

