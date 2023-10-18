import React, { useState } from 'react'
import {
  Button, StyleSheet, Text, View
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    // margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default function Contador () {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  return (
    <>
      <View style={styles.container}>
        <Text>
          Clicks:
          {contador}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title='+' onPress={incrementar} />
          <Button title='-' onPress={() => setContador(contador - 1)} />
          <Button title='Reset' onPress={() => setContador(0)} />
        </View>
      </View>
    </>
  )
}
