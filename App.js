import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.page}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Full Name' placeholderTextColor={'black'} style={{ color: 'black', fontSize: 13 }} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Passwprd' placeholderTextColor={'black'} style={{ color: 'black', fontSize: 13 }} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 14, color: "#fff", fontWeight: 'bold' }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: '5%',
  },
  button: {
    height: 50,
    borderRadius: 8,
    backgroundColor: "#1F5C3D",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputContainer: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
})