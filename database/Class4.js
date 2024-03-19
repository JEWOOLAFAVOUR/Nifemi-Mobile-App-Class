import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
    const chatData = [
        {
            name: "Peter Shalomite",
            chat: "Are you fine",
            numberOfMsg: 2,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }, {
            name: "Feranmi LevelMate",
            chat: "Are you coming to today Relation Talk program, also come along with Bro Nifemi, he might be interested in me❤❤😍",
            numberOfMsg: 3,
            profileImage: require('./assets/splash.png'),
        }
    ];
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}>Whatsapp Chat</Text>

            <View>
                <FlatList
                    data={chatData}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>

                                <Image source={item.profileImage} style={{ height: 50, width: 50, borderRadius: 200 }} />

                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{item.chat}</Text>
                                </View>


                                <View>
                                    <Text>1:14</Text>
                                    <Text>{item.numberOfMsg}</Text>
                                </View>


                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        paddingHorizontal: 25,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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