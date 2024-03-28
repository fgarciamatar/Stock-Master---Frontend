import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

function ProxVencer() {



  return (
    <View style={styles.container}>
  <Text style={styles.label}>ProxVencer</Text>
        
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

export default ProxVencer;
