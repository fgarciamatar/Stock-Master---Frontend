import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Paragraph, Separator, XStack, YStack} from 'tamagui';
import Products from '../../utils/Products';

function ProductCards() {
  return (
    <View style={styles.container}>
      {Products !== undefined &&
        Products.map(producto => (
          <View>
            <Text>{producto.code}</Text>
            {/* <Text>{producto.id}</Text> */}
            <Text>{producto.nombre}</Text>
            {/* <Text>{producto.categoria}</Text> */}
            {/* <Text>{producto.stock}</Text> */}
          </View>
        ))}
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
  },
});

export default ProductCards;
