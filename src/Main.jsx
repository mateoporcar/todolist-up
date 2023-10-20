import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Form } from './components/view/Form'
import Constants from 'expo-constants'

const Main = () => {
  return (
    <>
      <StatusBar style='#fff' animated barStyle='light-content' />
      <View style={styles.container}>
        <Form />
      </View>
    </>
  )
}
export default Main

const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',/
    */
    marginTop: Constants.statusBarHeight,
    flex: 1,
    // backgroundColor: 'red',
    padding: 19
  }
})



