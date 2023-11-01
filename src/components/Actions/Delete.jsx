import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

export function DeleteButton({ task, onDelete }) {
    const handleDeleteTask = (index) => { 
    const updatedTasks = [...tasks]; 
    updatedTasks.splice(index, 1); 
    setTasks(updatedTasks); 
}; 
  return (
    <Button title="Eliminar" onPress={() => onDelete(task.id)} color="red" />
  );
}

DeleteButton.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};