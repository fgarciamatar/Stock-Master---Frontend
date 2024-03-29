import { useNavigation } from '@react-navigation/native'; // Agregado para usar la navegación
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Spinner } from 'tamagui';

function Login() {
  const navigation = useNavigation(); // Instanciación de useNavigation
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
  
  

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleSelectPerfil = () => {
    navigation.navigate('SelectPerfil');
  };
  const handlePasswordRecovery = () => {
    navigation.navigate('PasswordRecovery');
  };


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.TextInicial}>inicia sesion en tu cuenta o registrate para comenzar</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Usuario:</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
        />
    
        <Text style={styles.label}>Password:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Oculta la contraseña si showPassword es falso
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
     
        <TouchableOpacity onPress={handlePasswordRecovery}>
          <Text style={styles.textPassword}>Olvide Mi contraseña</Text>
        </TouchableOpacity>

        <View style={styles.createCountContainer}>
        <Text>¿Aún no tienes una cuenta?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.createCount}>Registrarme</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity  style={styles.button} onPress={handleSelectPerfil}>
          <Text style={styles.textButton}>Inicia sesión</Text>
        </TouchableOpacity>

        <Text style={styles.textEnd}>Stock Master</Text>
      </View>
     

    
    </View>
  );
}

const styles = StyleSheet.create({
  //#5271C4 fondo referencia
  //#BB94E3
  container: {
    flex: 1,
    backgroundColor: '#BB94E3', // Fondo púrpura para el contenedor principal
  },
  formContainer: {
    
    padding: 20,
    backgroundColor: '#5271C4', // Fondo blanco para los campos de entrada
    borderTopLeftRadius:100,
  },
  
  TextInicial:{
    marginTop:10,
    color: '#5271C4', // Texto púrpura para las etiquetas
    fontWeight: 'bold', // Negrita para las etiquetas
    marginBottom: 20, // Espacio debajo de las etiquetas
  },
  
  label: {
    margin:20,
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
  // passwordContainer: {
  //   flexDirection: 'row', // Alineación horizontal para la contraseña y el ícono
  //   alignItems: 'center', // Alineación vertical para la contraseña y el ícono
  //   borderColor: '#7D3C98', // Borde púrpura para el contenedor de la contraseña
  //   borderWidth: 1, // Ancho del borde para el contenedor de la contraseña
  //   borderRadius: 5, // Bordes redondeados para el contenedor de la contraseña
  //   padding: 10, // Relleno para el contenedor de la contraseña
  // },
  passwordInput: {
    flex: 1, // Ocupa todo el espacio disponible
  },
  eyeIcon: {
    marginLeft: 10, // Espacio a la izquierda del ícono del ojo
  },
  textPassword: {
    color: '#ffff', // Texto púrpura para 'Olvide Mi contraseña'
    textAlign: 'right', // Alineación a la derecha para 'Olvide Mi contraseña'
    marginBottom: 20, // Espacio debajo de 'Olvide Mi contraseña'
  },
  button: {
    backgroundColor: '#5991C4',
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
    paddingBottom:20,
    color: '#1D3C98', // Texto púrpura para 'Registrarme'
    fontWeight: 'bold', // Negrita para 'Registrarme'
    marginLeft: 5, // Espacio a la izquierda de 'Registrarme'
  },
  textEnd:{
    marginTop:50,
    color: '#FFFF', // Texto púrpura para 'Registrarme'
    fontWeight: 'bold', // Negrita para 'Registrarme'
    alignItems: 'center', // Centrado del texto en el botón
  }
});


export default Login;
