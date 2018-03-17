import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import axios from 'axios'

export default class TopRate extends Component {
    state = {
        movies: null
    }
    componentDidMount(){
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=936564fe71e66aa13d11090a2555b5cb&language=en-US&page=1",
        })
        .then(({ data }) => this.setState({movies: data})  )
    }
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