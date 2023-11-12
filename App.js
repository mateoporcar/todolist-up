import React from 'react'
import Main from './src/Main'
import UseContext from './src/context/UseContext'

export default function App() {
  return (
    <UseContext>
      <Main />
    </UseContext>

  )
}
