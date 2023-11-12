import React, { useContext } from 'react'
import { StatusBar, StyleSheet, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// const Main = () => {
//   return (
//     <>
//       <StatusBar style='#fff' animated barStyle='light-content' />
//       <View style={styles.container}>
//         <Form />
//       </View>
//     </>
//   )
// }
// export default Main


import Login from './components/login/firebase'
import { Form } from './components/view/Form'
import Context from './context/Context'


const Stack = createBottomTabNavigator()

const Main = () => {
  const { isLoggedIn } = useContext(Context)
  console.log(isLoggedIn, "------")
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { isLoggedIn == false ? <Stack.Screen name="Login" component={Login} /> : null } 
        { isLoggedIn == true ? <Stack.Screen name="Form" component={Form} /> : null } 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    padding: 19
  }
})



