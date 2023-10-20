import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save } from '../Actions/Save';

export function Form() {
  const [id, onChangeId] = useState(0);
  const [nombre, onChangeText] = useState('');
  const [descripcion, onChangeDesc] = useState('');



  return (
    <>
      <Text>Agregue una nueva tarea:</Text>
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
        <Save id={id} nombre={nombre} descripcion={descripcion} onChangeId={onChangeId}/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
