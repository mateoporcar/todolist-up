import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

export function Delete({ all, id }) {


    const storeData = async (updatedTasks) => {
        try {
            //setTasks([updatedTasks]);
            const jsonValue = JSON.stringify(tasks);
            await AsyncStorage.setItem('my-key', jsonValue);
        } catch (error) {
            console.error('Error storing data:', error);
        }
    }

    const handleDeleteTask = (id) => {
        const updatedTasks = [all];
        updatedTasks.splice(id, 1);
        storeData(updatedTasks)
    };

    return (
        <View style={styles.alignButtom}>
            <Button
                onPress={handleDeleteTask(id)}
                title="Borrar"
                color="#841584"
                accessibilityLabel="Borrar Tarea"
            />
        </View>
    );
}

Delete.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    onChangeId: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    alignButtom: {

        marginTop: 20,
        marginBottom: 20
    }
});