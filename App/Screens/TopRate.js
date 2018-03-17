import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Icon } from 'native-base'
import axios from 'axios'
import Cards from '../Components/Cards'
export default class TopRate extends Component {
    state = {
        movies: null
    }
    componentDidMount(){
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=936564fe71e66aa13d11090a2555b5cb&language=en-US&page=1",
        })
            .then(({ data }) => 
                this.setState({movies: data.results }) 
            )
    }
    _keyExtractor = item => item.id
    _renderItem = ({item}) => {
        return <Cards movie={item} key={item.id} />
    }
    render (){
        return ( 
            <FlatList
            data={this.state.movies}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        )
    }
}

