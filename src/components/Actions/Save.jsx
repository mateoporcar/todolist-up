import React from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

export function Save({ id, nombre, descripcion, onChangeId }) {
  const storeData = async () => {
    try {
      const dataToStore = { id, nombre, descripcion };
      const jsonValue = JSON.stringify(dataToStore);
      await AsyncStorage.setItem('my-key', jsonValue);
      console.log(dataToStore)
      // You may want to retrieve and handle keys with AsyncStorage.getAllKeys()

      // Assuming onChangeId is a function to update the 'id' value, you can call it here
      onChangeId(id + 1);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  return (
    <Button
      onPress={storeData}
      title="Agregar"
      color="#841584"
      accessibilityLabel="Guardar información"
    />
  );
}

Save.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  onChangeId: PropTypes.func.isRequired,
};


