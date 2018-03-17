import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, Header, Item, Input, Icon, Button } from 'native-base';
import axios from 'axios';

export default class Search extends Component {
    state= {
        text: null,
        movies: null,
    }
    _handelSearch = () => {
        const {text} = this.state
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=936564fe71e66aa13d11090a2555b5cb&language=en-US&page=1",
        })
            .then(({ data }) => 
                this.setState({movies: data.results }) 
            )
    }
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
                    <Text>{this.state.text}</Text>
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