import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	StyleSheet,
} from "react-native";


export function Table() {

  const getItems = async () => {
    try {
      const tasksData = await AsyncStorage.getItem('my-key');
      if (tasksData !== null) {
        const parsedTasks = JSON.parse(tasksData);
        setTasks(parsedTasks);
        console.log(tasksw)
      }
    } catch (error) {
        console.error('Error loading tasks from AsyncStorage', error);
    }
  };

  const [tasksw, setTasks] = useState([]);

  // Cargar tareas al cargar el componente
  useEffect(() => {
    getItems();
  }, []);

	const renderItem = ({ tasksw }) => (
		<View>
			<Text>{tasksw}</Text>
		</View>
	);

  return (
    <>
			<FlatList
				data={tasksw}
				renderItem={renderItem}
				keyExtractor={(tasksw, index) => tasksw.toString()}
			/>
    </>
  )
}



Table.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  onChangeId: PropTypes.func.isRequired,
};


