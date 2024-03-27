import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

function Welcom() {
    const navigation = useNavigation(); // Instanciación de useNavigation

  const handleSend = () => {
    console.log("hola");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.welcomContainer}>
      <Text style={styles.titleWelcom}>Bienvenido a</Text>
      <Text style={styles.textBar}>Stock Master</Text>
      <View style={styles.imageContainer}>
       <Text>STOCKMASTER</Text>
      </View>

      <View style={styles.continueContainer}>
        <Text style={styles.privacityText}>
          Lee nuestra Política de Privacidad .Toca “Aceptar y continuar” para
          aceptar los Términos de Servicio.
        </Text>
        <TouchableOpacity  onPress={handleSend}
          style={styles.sendButton}>
          <Text style={styles.textButton}>Aceptar y Continuar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fromContainer}>
        <Text style={{color: "#fff"}}>from</Text>
        <Text style={styles.fromText}>{'Migrantes2.0'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#0305C5',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical:0
  },
  titleWelcom: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    paddingTop: 0,
    
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 4},
    textShadowRadius: 6

  },
  textBar: {
    color: '#EBB426',
    fontSize: 30,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontWeight: 'bold',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 4},
    textShadowRadius: 6
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  image: {
    width: 268,
    height: 218,
  },
  continueContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  privacityText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    padding: 20,
    fontWeight:"100"
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#D0BBFD',
    width: 205,
    borderRadius: 10,
    maxWidth: 190,
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#AA84FC',
  },
  textButton:{
    fontWeight: "400",
    color: "#4505D0",
    textAlign: "center",
    fontSize: 14,
    paddingTop:0,
  },
  fromContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  fromText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  }
});


export default Welcom;
