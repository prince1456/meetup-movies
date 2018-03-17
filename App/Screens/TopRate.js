import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

export default class TopRate extends Component {
    render (){
        return ( 
            <View style={styles.container}>
                <Text style={styles.title}>
                    <Icon name={"md-search"}/>
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