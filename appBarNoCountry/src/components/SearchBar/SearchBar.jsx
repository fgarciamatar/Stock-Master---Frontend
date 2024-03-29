import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function SearchBar() {
const [search, setSearch] = useState("");

return (
  <View style={styles.container}>
  <TextInput
    value={search}
    onChangeText={setSearch}
    placeholder="Buscar"
    placeholderTextColor="#ffffff"
    textAlignVertical="center" 
    style={styles.search}
  />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    marginLeft:0,
    width: '100%', // ajusta el ancho según lo necesites
    margin: 0,
    padding: 6,
    backgroundColor: '#9E9E9E',
    borderColor: '#ffff',
    borderWidth: 2, // Ancho del borde para los TextInput
    borderRadius: 40,
  },
 
});

export default SearchBar;