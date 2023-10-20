import React, { useState } from 'react'
import { Agregar } from './Agregar'
import { Text, TextInput, SafeAreaView, StyleSheet, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ContadorWrapper () {
  const [id, onChangeId] = React.useState(0);
  const [nombre, onChangeText] = React.useState('');
  const [descripcion, onChangeDesc] = React.useState('');
  async function storeData (value) {
    try {
      console.log(id, value)
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
      AsyncStorage.getAllKeys();
      onChangeId(id + 1)
    } catch (e) {
      // saving error
    }
  };

  return (
    <>
      <Text>
        Agregue una nueva tarea: 
      </Text>
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
      <Button
        onPress={() => storeData({id, nombre, descripcion})}
        title="Agregar"
        color="#841584"
        accessibilityLabel="Guardar información"
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});