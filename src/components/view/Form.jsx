import React, { useState, useEffect } from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Save } from '../Actions/Save';
import { Table } from '../view/Table';

export function Form() {
  const [id, onChangeId] = useState(0);
  const [nombre, onChangeText] = useState('');
  const [descripcion, onChangeDesc] = useState('');
  const [tasks, setTasks] = useState([]);

  const loadTasksFromStorage = async () => {
    try {
      const tasksData = await AsyncStorage.getItem('my-key');
      if (tasksData !== null) {
        const parsedTasks = JSON.parse(tasksData);
        setTasks(parsedTasks);
      }
    } catch (error) {
      console.error('Error loading tasks from AsyncStorage', error);
    }
  };

  // Cargar tareas al cargar el componente
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  const deleteTask = (taskId) => {
    // Filtra las tareas para eliminar la tarea con el ID especificado
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };



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
        <Save id={id} nombre={nombre} descripcion={descripcion} onChangeId={onChangeId} setTasks={setTasks} tasks={tasks} />
        <Table tasks={tasks} onDelete={deleteTask}/>
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
