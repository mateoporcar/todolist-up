import React, { useState } from 'react'
import { Text, TextInput, SafeAreaView, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Save (value) {
    
    async function storeData (values) {
        try {
          console.log(values)
          const jsonValue = JSON.stringify(values);
          await AsyncStorage.setItem('my-key', jsonValue);
          AsyncStorage.getAllKeys();
          onChangeId(id + 1)
        } catch (e) {
          // saving error
        }
      };
    
    return (
        <>
        <Button
          onPress={() => storeData({ value })}
          title="Agregar"
          color="#841584"
          accessibilityLabel="Guardar información"
        />
        </>
    )
}