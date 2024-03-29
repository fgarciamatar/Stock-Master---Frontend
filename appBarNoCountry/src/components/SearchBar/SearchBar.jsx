import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function SearchBar() {
const [search, setSearch] = useState("");

return (
    <View style={styles.container}>
      <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.search}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    margin:0,
    marginRight:30,
    padding:5,
    backgroundColor: '#9E9E9E',
    borderColor: '#ffff',
    borderWidth: 2, // Ancho del borde para los TextInput
    borderRadius: 40, 
    
  }
 
});

export default SearchBar;