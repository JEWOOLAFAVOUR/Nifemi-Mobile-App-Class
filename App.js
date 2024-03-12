import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {

  const data = ['Ade', 'Bola', 'Suliyat', 'Mukaila']

  return (
    <View style={styles.page}>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text>{item}</Text>
            </View>
          )
        }}

      />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  container: {
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center'
  },
})


































// import { StyleSheet, Text, View, FlatList } from 'react-native'
// import React from 'react'

// const App = () => {

//   const nifemiChildren = ['Nifemi', 'Goodness', 'Silvernus', "Bala", 'Ade', 'Tunji', 'Adisa'];

//   const name = ['Ade', 'Tunji', 'Adisa']

//   return (
//     <View style={styles.page}>
//       <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>List Implementation in React Native</Text>
//       {/* <View>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//         <Text>Akim=</Text>
//       </View> */}

//       {/* <View>
//         {
//           nifemiChildren.map((data, index) => {
//             return (
//               <View key={index}>
//                 <Text>{data}</Text>
//               </View>
//             )
//           })
//         }
//       </View> */}

//       <FlatList
//         data={nifemiChildren}
//         renderItem={({ item }) => {
//           return (
//             <View style={styles.container}>
//               <Text>{item}</Text>
//             </View>
//           )
//         }}
//       />

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 30,
//   },
//   container:{

//   },
// })