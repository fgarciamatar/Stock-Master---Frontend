import { useNavigation } from '@react-navigation/native'; // Agregado para usar la navegación
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function PasswordRecovery() {
  const navigation = useNavigation(); // Instanciación de useNavigation
  const [email, setEmail] = useState('');
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextInicial}>
        Ingresa tu email para recuperar tu contraseña
      </Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Ingresa tu email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Recuperar Contraseña</Text>
        </TouchableOpacity>

        <View style={styles.createCountContainer}>
          <Text style={styles.textPassword}>¿Aún no tienes una cuenta?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.createCount}>Registrarme</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createCountContainer}>
          <Text style={styles.textPassword}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.createCount}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textEnd}>STOCK MASTER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //#215596 fondo referencia
  //#BB94E3
  container: {
    flex: 1,
    backgroundColor: '#215596', // Fondo púrpura para el contenedor principal
  },
  formContainer: {
    padding: 30,
    backgroundColor: '#6F9ED7', // Fondo blanco para los campos de entrada
    borderTopLeftRadius: 100,
    height: '100%',
  },
  TextInicial: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontSize: 20,
    margin: 12,
    marginTop: 90,
    height: '15%',
    color: '#E6E6E6', // Texto púrpura para las etiquetas
    fontWeight: 'bold', // Negrita para las etiquetas
    marginBottom: 0, // Espacio debajo de las etiquetas
  },

  label: {
    marginTop:40,
    margin: 20,
    color: '#ffff', // Texto púrpura para las etiquetas
    fontWeight: 'bold', // Negrita para las etiquetas
    marginBottom: 8, // Espacio debajo de las etiquetas
  },
  input: {
    borderColor: '#ffff', // Borde púrpura para los TextInput
    backgroundColor: '#ffff',
    borderWidth: 1, // Ancho del borde para los TextInput
    borderRadius: 10, // Bordes redondeados para los TextInput
    padding: 5, // Relleno para los TextInput
    marginBottom: 10, // Espacio debajo de los TextInput
  },
  button: {
    marginTop:50,
    marginBottom:30,
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
  createCountContainer: {
    
    flexDirection: 'row', // Alineación horizontal para '¿Aún no tienes una cuenta?' y 'Registrarme'
    justifyContent: 'center', // Centrado horizontal para el contenedor
    marginTop: 20, // Espacio arriba del contenedor
  },
  createCount: {
    paddingBottom: 20,
    color: '#1D3C98', // Texto púrpura para 'Registrarme'
    fontWeight: 'bold', // Negrita para 'Registrarme'
    marginLeft: 5, // Espacio a la izquierda de 'Registrarme'
  },
  textEnd: {
    marginTop: 50,
    fontSize: 20,
    color: '#FFFF', // Texto púrpura para 'Registrarme'
    fontWeight: 'bold', // Negrita para 'Registrarme'
    alignItems: 'center', // Centrado del texto en el botón
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.5,
  },
});
export default PasswordRecovery;
