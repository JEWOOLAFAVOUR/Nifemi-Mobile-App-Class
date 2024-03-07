import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.page}>
      <Image source={require('./assets/image1.jpg')} style={{ height: 200, width: 210, alignSelf: 'center', marginTop: 35, }} />
      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 24, color: 'black', fontWeight: "bold", textAlign: 'center' }}>Join Facebook</Text>
        <Text style={{ color: 'grey', fontSize: 16, textAlign: 'center', marginTop: 6 }}>We'll help you create a new account in a few easy steps</Text>
      </View>
      <View style={{ marginTop: 25, marginBottom: 250 }}>
        <Button title="Next" />
      </View>
      <Text style={{ fontSize: 16, color: 'blue', fontWeight: 'bold', textAlign: 'center', }}>Already have an account</Text>
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    // paddingLeft: 20,
    paddingHorizontal: 10,
  },
})

