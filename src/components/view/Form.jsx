import React, { useState } from 'react'
import { Text, TextInput, SafeAreaView, StyleSheet, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save } from '../actions/Save'

export function Form () {
  const [id, onChangeId] = React.useState(0);
  const [nombre, onChangeText] = React.useState('');
  const [descripcion, onChangeDesc] = React.useState('');
  
  const getCurrentDate=()=>{
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
    }
//  async function storeData (value) {
//    try {
//      console.log(value)
//      const jsonValue = JSON.stringify(value);
//      await AsyncStorage.setItem('my-key', jsonValue);
//      AsyncStorage.getAllKeys();
//      onChangeId(id + 1)
//    } catch (e) {
//      // saving error
//    }
//  };


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
      <Save value={{id, nombre, descripcion}} />
      
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