import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import profile from "./../../assets/profile.png"
import {useNavigation} from '@react-navigation/native';


function ProfilePin() {
  const [pin, setPin] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if(pin === "1234" ) {
      navigation.navigate('Home');
    Alert.alert('Exito', 'PIN correcto.');
    }else {
      Alert.alert('Error', 'PIN incorrecto. Por favor, inténtalo de nuevo.');
      setPin('');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={profile}
      />
      <Text style={styles.text}>NOMBRE</Text>
      <Text style={styles.title}>Ingrese el Pin:</Text>
      <TextInput
        style={styles.input}
        placeholder="PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry={true}
        keyboardType="numeric" // Esto hará que el teclado muestre solo números
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Ingresar</Text>
      </TouchableOpacity>

    </View>
  );
}

export default ProfilePin;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    gap: 30,
    backgroundColor: '#215596',
    height:"100%"
  },
  text:{
    color: '#D7D7D7',
    fontSize: 16,
  },
  input: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 0,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#D7D7D7',
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#D7D7D7',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6F9ED7',
    borderColor: '#ffff', 
     borderWidth: 2, // Ancho del borde
    padding: 10, // Relleno para el botón
    borderRadius: 10, // Bordes redondeados para el botón
    alignItems: 'center', // Centrado del texto en el botón
    marginHorizontal: 80, // Margen horizontal para el botón
  },
  textButton: {
    color: 'white', // Texto blanco para el botón
    fontWeight: 'bold', // Negrita para el texto del botón
  },
});
