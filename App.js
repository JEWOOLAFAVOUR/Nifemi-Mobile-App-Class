import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screen/HomeScreen'
import ProfilePage from './screen/ProfilePage'

const App = () => {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { height: 50 } }}>
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            title: 'ddjdjjd',
            tabBarShowLabel: false,
            tabBarLabelStyle: { height: 50 },
            tabBarIcon: ({ focused, size, color }) => {
              return (
                <Image source={require('./assets/home.png')} style={{ height: focused ? 25 : 20, width: focused ? 25 : 20, tintColor: focused ? 'blue' : 'black' }} />
              )
            }
          }}
        />
        <Tab.Screen name='Profile' component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})









































// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import HomeScreen from './screen/HomeScreen'
// import ProfilePage from './screen/ProfilePage'


// const App = () => {

//   const Nifemi = createNativeStackNavigator();

//   return (
//     <NavigationContainer>

//       <Nifemi.Navigator screenOptions={{
//         headerShown: false
//       }} >

//         <Nifemi.Screen name='Home' component={HomeScreen} />
//         <Nifemi.Screen name='Profile' component={ProfilePage} />

//       </Nifemi.Navigator>

//     </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})