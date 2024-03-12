import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Class2 = () => {
    return (
        <View style={styles.page}>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Full Name' placeholderTextColor={'black'} style={{ color: 'black', fontSize: 13 }} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Password' placeholderTextColor={'black'} style={{ color: 'black', fontSize: 13 }} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 14, color: "#fff", fontWeight: 'bold' }}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Class2

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



















// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Class2 from './database/Class2';
// import Class3 from './database/Class3';

// const App = () => {
//   return (
//     <View style={styles.page}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}>React Native Flex-Box</Text>

//       <View style={[styles.box1, styles.box2]}>
//         <View style={[styles.box1, { height: 150, width: 150, backgroundColor: 'red', borderRadius: 1000 }]}></View>
//       </View>
//       <View style={[styles.box1, { borderRadius: 100, backgroundColor: 'green' }]}></View>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 50,
//     paddingHorizontal: 30,
//   },
//   box1: {
//     height: 200,
//     width: 200,
//     backgroundColor: 'blue',
//     marginVertical: 10,
//     marginHorizontal: 10,
//     // borderRadius: 200,
//   },

//   box2: {
//     borderRadius: 0,
//     height: 250,
//     width: 250,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }

// });