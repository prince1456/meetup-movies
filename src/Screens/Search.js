import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Container, Content,  Header, Item, Input, Icon, Button, Text } from 'native-base';
import axios from 'axios';
import Cards from '../Components/card'
import { SkypeIndicator } from 'react-native-indicators'

export default class Search extends Component {
    state ={
        text: null,
        movies: null,
        spiner: false
    }

    handleSearch = () => {
        this.setState({spiner: true})
        const { text } = this.state
        console.log(text)
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?api_key=9e=en-US&query=${text}&page=1&include_adult=false`
        })
        .then(({data}) => this.setState({movies: data.results, spiner: false}))
    }
    _renderItem = ({item}) => {
        return (
           <Cards item={item}  key={item.id}/>
        )
    }
    _keyExtractor = (item, index) => item.id;
    
    render() {
        
            return (
                <Container>
                 <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={ text => this.setState({text})} />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent onPress={() => this.handleSearch()}>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    {
                        this.state.spiner
                            ? <SkypeIndicator /> 
                            :
                            <FlatList
                                data={this.state.movies}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                            />
                    }
                
                </Content>
            </Container>
         );
    }
}
