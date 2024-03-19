import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <TouchableOpacity style={styles.container}>
                <Text style={{ fontSize: 16, color: 'white' }}>Next Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})