import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Delete, DeleteButton } from '../Actions/Delete';


export function Table({ tasks, onDelete, onUpdate }) {





  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableHeader}>Tareas</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeaderCell}>Nombre</Text>
          <Text style={styles.tableHeaderCell}>Descripción</Text>
          <Text style={styles.tableHeaderCell}>Acciones</Text>
        </View>
        {tasks.map((task, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCell}>{task.nombre}</Text>
            <Text style={styles.tableCell}>{task.descripcion}</Text>
            <View style={styles.tableCell}>
              <Button
                title="Actualizar"
                onPress={() => onUpdate(task.id)}
              />
              {/* Pasar onDelete al componente Delete */}
              <DeleteButton task={task} onDelete={onDelete} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    margin: 10,
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 5,
    textAlign: 'center',
  },
});