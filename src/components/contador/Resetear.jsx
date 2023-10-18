import React from 'react'
import { Button, Text } from 'react-native'
import PropTypes from 'prop-types'

export function Resetear ({ value, onChange }) {
  const resetear = () => {
    onChange(0)
    console.log('Reseteo -> ', value)
  }

  return (
    <>
      <Text>{value}</Text>
      <Button title='Resetear' onPress={() => resetear()} />
    </>
  )
}

Resetear.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
}
