import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

function BarCodeScanner() {



  return (
    <View style={styles.container}>
  <Text style={styles.label}>BarCodeScanner</Text>
        
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

export default BarCodeScanner;
