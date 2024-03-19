import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screen/HomeScreen'
import ProfilePage from './screen/ProfilePage'


const App = () => {

  const Nifemi = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Nifemi.Navigator>

        <Nifemi.Screen name='Home' component={HomeScreen} />
        <Nifemi.Screen name='Profile' component={ProfilePage} />

      </Nifemi.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})