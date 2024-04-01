import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View, YStack } from 'tamagui';
import profile from "./../../assets/profile.png";

function ProfileCards() {
  const navigation = useNavigation()
  const handleHome = () => {
    navigation.navigate('Home');
  }

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHome} style={styles.cardContainer}>
        <View>
          <Image
            style={styles.image}
            source={profile}
          />
          <YStack
            gap="$1"
            justifyContent="center"
            alignItems="center"
            padding="$2">
            <Text style={[styles.titleName]}>Francisco</Text>
            <Text style={[styles.titleProfile]}>Administrador</Text>
          </YStack>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#EEEBEB',
    width: '50%',
    // Centrar elementos horizontalmente
  },
  imageContainer: {
    marginBottom: 10,
    // Espacio entre la imagen y el texto
  },
  cardContainer: {
    width: '80%',
    display: 'flex',
    borderRadius: 16,
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 5,

  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  },

  titleName: {
    fontWeight: '400', // Texto en negrita
    textAlign: 'center', // Centrar texto horizontalmente
    fontSize: 16,
    lineHeight: 25,
    color:'#0305C5',
    marginBottom:-8,
  },
  titleProfile: {
    fontSize: 10,
    fontWeight:'400',
    color: '#8586FF'
  },
});


export default ProfileCards;