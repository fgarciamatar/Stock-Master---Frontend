import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Spinner} from 'tamagui';

function SignUp() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextInicial}>
        Completa con tus datos para registrarte
      </Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
       <TouchableOpacity  style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Registrarme</Text>
        </TouchableOpacity>
        <View style={styles.createCountContainer}>
        <Text style={styles.textPassword}>¿Aún no tienes una cuenta?</Text>
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
    marginTop: 25,
    margin: 20,
    color: '#ffff', // Texto púrpura para las etiquetas
    fontWeight: 'bold', // Negrita para las etiquetas
    marginBottom: 0, // Espacio debajo de las etiquetas
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
    marginTop: 20,
    marginBottom: 10,
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
    marginTop: 20,
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
export default SignUp;
