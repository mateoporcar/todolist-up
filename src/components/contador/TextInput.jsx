import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export const TextInputExample = () => {
  const [id, onChangeId] = React.useState(0);
  const [nombre, onChangeText] = React.useState('');
  const [descripcion, onChangeDesc] = React.useState('');
  const getCurrentDate=()=>{
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
    }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Nombre"
        value={nombre}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDesc}
        placeholder="Descripción"
        value={descripcion}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});