import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {View} from 'tamagui';
import ProfileCards from '../../components/ProfileCards/ProfileCards';
import { useNavigation } from '@react-navigation/native';

function SelectPerfil() {


  return (

      <View style={styles.container}>
       
        <View style={styles.profilesContainer}>
        <Text style={styles.TextInicial}>Selecciona tu perfil:</Text>
      
            <ProfileCards />
         
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
  profilesContainer: {
    padding: 30,
    backgroundColor: '#6F9ED7', // Fondo blanco para los campos de entrada
    borderTopLeftRadius:100,
    height: '100%',
  },
  TextInicial:{
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontSize:20,
    margin:12,
    marginTop:60,
    height: '15%',
    color: '#E6E6E6', // Texto púrpura para las etiquetas
    fontWeight: 'bold', // Negrita para las etiquetas
    marginBottom: 0, // Espacio debajo de las etiquetas
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
    paddingBottom:20,
    color: '#1D3C98', // Texto púrpura para 'Registrarme'
    fontWeight: 'bold', // Negrita para 'Registrarme'
    marginLeft: 5, // Espacio a la izquierda de 'Registrarme'
  },
  textEnd:{
    marginTop:50,
    fontSize:20,
    color: '#FFFF', // Texto púrpura para 'Registrarme'
    fontWeight: 'bold', // Negrita para 'Registrarme'
    alignItems: 'center', // Centrado del texto en el botón
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.5,
  }

});


export default  SelectPerfil;
