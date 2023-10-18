import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'

function agregar (value, onChange) {
  onChange(++value)
  console.log('Incremento -> ', value)
}

export function Agregar ({ value = 0, onChange }) {
  return (
    <>
      <Button title='Agregar' onPress={() => agregar(value, onChange)} />
    </>
  )
}

Agregar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
}


