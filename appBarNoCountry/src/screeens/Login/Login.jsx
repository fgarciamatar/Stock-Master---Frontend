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
  const handleHome = () => {
    navigation.navigate('Home');
  };


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <View style={styles.container}>
  
      <View style={styles.formContainer}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
        />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Oculta la contraseña si showPassword es falso
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity >
          <Text style={styles.textPassword}>Olvide Mi contraseña</Text>
        </TouchableOpacity>
      </View>
     
        <TouchableOpacity  style={styles.button} onPress={handleHome}>
          <Text style={styles.textButton}>Inicia sesión</Text>
        </TouchableOpacity>
  

      <View style={styles.createCountContainer}>
        <Text>¿Aún no tienes una cuenta?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.createCount}>Registrarme</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: 174,
    height: 163.8,
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#0305C5',
    marginBottom:4

  },
  formContainer: {
    display: 'flex',
    gap: 0,
    marginTop: 30,
  },
  input: {
    borderRadius: 8,
    backgroundColor: '#D7D7D7',
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginVertical: 0,
    width: 288,
    height: 35,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderBottomColor: '#000',
  },
  passwordInput: {
    flex: 1,
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: '#D7D7D7',
    borderRadius: 8,
    borderTopRightRadius:0 ,
    borderBottomRightRadius: 0
  },
  textTitle: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'left',
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#4215D0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textPassword: {
    marginTop: 7,
    marginRight:-5,
    color: '#3F86FC',
    textAlign: 'right',
    fontWeight: '400',
    fontFamily: 'Montserrat',
  },
  button: {
    width: 186,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F0BBFD',
    borderWidth: 1,
    borderColor: '#FA84FC',
    marginVertical: 30,
  },
  createCountContainer: {
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  createCount: {
    color: '#3F86FC',
  },
  eyeIcon: {
    fontSize: 15,
    paddingHorizontal: 10,
    height: 35,
    paddingVertical: 7,
    backgroundColor: '#D7D7D7',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default Login;
