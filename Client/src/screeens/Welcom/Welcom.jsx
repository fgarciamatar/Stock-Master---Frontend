import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import check from "./../../assets/check.png"

function Welcom() {
    const navigation = useNavigation(); // Instanciación de useNavigation

  const handleSend = () => {
    console.log("hola");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.welcomContainer}>
      <Text style={styles.titleWelcom}>Bienvenid@ a</Text>
      <Text style={styles.textBar}>STOCK MASTER</Text>
      <View style={styles.imageContainer}>
      <Image
            source={check}
            style={styles.image}
          />
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
    height: '100%',
    backgroundColor:"#215596"
  },
  titleWelcom: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat',
   color:"#E6E6E6"

  },
  textBar: {
    color:"#6F9ED7",
    fontSize: 30,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  image: {
    width: 80,
    height: 80,
  },
  continueContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  privacityText: {
    color: '#E6E6E6',
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontSize: 13,
    padding: 20,
    fontWeight:"100"
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#215596',
    width: 205,
    borderRadius: 10,
    maxWidth: 190,
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  textButton:{
    fontWeight: "400",
    color: "#E6E6E6",
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
    color: "#E6E6E6",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
  }
});


export default Welcom;
