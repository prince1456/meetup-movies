import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TopRate extends Component {
    render (){
        return ( 
            <View style={styles.container}>
                <Text style={styles.title}>
                   Hello Top Rate movie Scren
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: 'red'
    }
})