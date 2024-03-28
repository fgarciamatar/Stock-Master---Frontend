import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {View} from 'tamagui';
import ProfileCards from '../../components/ProfileCards/ProfileCards';
import { useNavigation } from '@react-navigation/native';

function SelectPerfil() {


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Selecciona tu perfil</Text>
        <ScrollView>
          <View style={styles.profilesContainer}>
            <ProfileCards />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#EEEBEB',
    borderWidth: 1,
    width: '100%',
    height: '100%',
  },
  profilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Alinear las columnas en el espacio disponible
    paddingHorizontal: 10, // Añadir espacio horizontal para evitar que los perfiles toquen los bordes
    paddingBottom: 10, // Añadir espacio en la parte inferior para evitar que los perfiles toquen el borde inferior
  },
  title: {
    fontSize: 26,
    color: '#0305C5',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10, // Ajustar el espacio vertical para centrar el texto
  },
});

export default SelectPerfil;
