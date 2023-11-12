import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

export function Save({ id, nombre, descripcion, onChangeId, setTasks, tasks }) {

  const dataToStore = { id, nombre, descripcion, onChangeId }

  const storeData = async () => {
    try {
      setTasks([...tasks, dataToStore]);
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem('my-key', jsonValue);
      onChangeId(id + 1);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }


  return (
    <View style={styles.alignButtom}>
    <Button
      onPress={storeData}
      title="Agregar"
      color="#841584"
      accessibilityLabel="Guardar información"
    />
    </View>
  );
}

Save.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  onChangeId: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  alignButtom: {

    marginTop: 20,
    marginBottom:20
  }

});

