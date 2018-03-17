import React,{ Component } from 'react'
import {View, Text, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'
import {PacmanIndicator} from 'react-native-indicators'
import Cards from '../Components/card'

export default class Home extends Component {
    static navigationOptions ={
        header: null,
    }
    state = {
        movies: null,
        spiner: true,
    }
    _keyExtractor = (item, index) => item.id;

    componentDidMount(){
        axios({
            method: 'GET',
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=936564fe71e66aa13d11090a2555b5cb&language=en-US&page=1",
            maxContentLength: 2,            
        })
        .then(res => {
            this.setState({movies: res.data.results, spiner: false})
        })
    }
    _renderItem = ({item}) => {
        return (
           <Cards item={item}  key={item.id}/>
        )
    }
    render() {
        if (this.state.spiner){
            return (
                <PacmanIndicator size={30} />
            )
        }
            return (
                <View style={{paddingTop: 30}}>
                    <FlatList
                    data={this.state.movies}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
              </View>
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