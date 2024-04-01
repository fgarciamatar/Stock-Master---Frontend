import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'tamagui';
import profile from "./../../assets/profile.png";
import lock from "./../../assets/lock.png";
import Profiles from "./../../utils/Profiles";

function ProfileCards() {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {Profiles.map((usuario, index) => (
        <TouchableOpacity key={index} onPress={handleHome} style={styles.cardContent}>
          <Image
            style={styles.image}
            source={profile}
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleName}>{usuario.name}</Text>
            <Text style={styles.titleProfile}>{usuario.rol}</Text>
          </View>
          <View style={styles.lockAndArrowContainer}>
            <Image
              style={styles.imageLock}
              source={lock}
            />
            <Text style={styles.arrowText}>&gt;&gt;</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    marginTop: 7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 5,
  },
  image: {
    margin: 10,
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  imageLock: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  titleName: {
    fontWeight: '400',
    fontSize: 25,
    color: '#6F9ED7',
    marginBottom: -8,
    textAlign: 'center',
  },
  titleProfile: {
    fontSize: 15,
    fontWeight: '400',
    color: '#6F9ED7',
    textAlign: 'center',
  },
  arrowText: {
    fontSize: 24,
    color: '#888888',
  },
});

export default ProfileCards;
