import React,{ Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'
import Router from './router'
export default class App extends Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
      }
      
    render() {
            return (
                
                    <Router />
                
         );
    }
}
          
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

          