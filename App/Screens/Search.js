import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Container, Content, Header, Item, Input, Icon, Button } from 'native-base';
import axios from 'axios';
import Cards from '../Components/Cards'

export default class Search extends Component {
    state= {
        text: null,
        movies: null,
    }
    _handelSearch = () => {
        const {text} = this.state
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/search/movie?api_key="your Key"&language=en-US&query=${text}&page=1&include_adult=false`
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
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"  onChangeText={text => this.setState({ text })}/>
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent onPress={()=> this._handelSearch()}>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <FlatList
                        data={this.state.movies}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </Content>
            </Container>
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