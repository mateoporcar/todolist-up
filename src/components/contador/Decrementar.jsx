import assert from 'assert'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Text } from 'react-native'

export function Decrementar (props) {
  assert(props.onChange, 'Te olvidaste del onChange!')
  const onChange = props.onChange
  let value = props.value

  const decrementar = () => {
    onChange(--value)
    console.log('Decremento  -> ', value)
  }

  return (
    <>
      <Text>{value}</Text>
      <Button title='Decrementar' onPress={decrementar} />
    </>
  )
}

Decrementar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
}
