import React, { Component } from 'react'
import { Card, CardItem, Body, Thumbnail,Left, Button, Icon, Right, Text } from 'native-base'
import { Image } from 'react-native'

export default class Cards extends Component {
    render() {
        const { movie } = this.props;
        return (
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{movie.title}</Text>
                  <Text note>{movie.original_title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{movie.vote_count}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{movie.vote_average}</Text>
                </Button>
              </Body>
              <Right>
                <Text>{movie.release_date}</Text>
              </Right>
            </CardItem>
          </Card>
        )
    }
}