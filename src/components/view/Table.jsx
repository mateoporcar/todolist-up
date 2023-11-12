import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Delete } from '../Actions/Delete'
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";

export function Table() {

  const getItems = async () => {
    try {
      const tasksData = await AsyncStorage.getItem('my-key');
      if (tasksData !== null) {
        const parsedTasks = JSON.parse(tasksData);
        setTasks(parsedTasks);
        console.log(tasks)
      }
    } catch (error) {
      console.error('Error loading tasks from AsyncStorage', error);
    }
  };

  const [tasks, setTasks] = useState([]);

  // Cargar tareas al cargar el componente
  useEffect(() => {
    getItems();
  }, [localStorage.getItem('my-key')]);

  const Item = ({ all, index }) => (
    <View style={styles.task} key={index}>
      
      <Text
        style={styles.itemList}>{all.id}</Text>
      <Text
        style={styles.itemList}>{all.nombre}</Text>
      <Text
        style={styles.itemList}>{all.descripcion}</Text>
      <View
				style={styles.taskButtons}>
				{/* <Delete>
        <Text
						style={styles.deleteButton}>Delete</Text>
        </Delete> */}
			</View>
      <View
        style={styles.taskButtons}>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Item all={item} />}
        keyExtractor={item => item.id}
      />
    </>
  )
}

// Table.propTypes = {
//   id: PropTypes.number?.isRequired,
//   nombre: PropTypes.string?.isRequired,
//   descripcion: PropTypes.string?.isRequired,
//   onChangeId: PropTypes.func?.isRequired,
// };

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#dcdcdc"
  },
  itemList: {
    fontSize: 19,
    color: "black",

  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
