import React, { Alert, Text, TouchableHighlight } from 'react-native'

export default function ContadorValue ({ value }) {
  return (
    <>
      <TouchableHighlight onPress={() => Alert.alert('El valor actual es ' + value)}>
        <Text>Valor: {value}</Text>
      </TouchableHighlight>
    </>
  )
}
