import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import Home from './Screens/Home'
import Search from './Screens/Search'
import ShowPage from './Screens/ShowPage'

const TabBar = TabNavigator({
    Home: {screen: Home},
    Search: {screen: Search},
},
    {
        navigationOptions: ({ navigation }) => ({
            header: null,
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-home${focused ? '' : '-outline'}`;
            } else if (routeName === 'Search') {
              iconName = `ios-search${focused ? '' : '-outline'}`;
            }
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    })

const Router = StackNavigator({
    Home: { screen: TabBar },
    ShowPage: { screen: ShowPage }
})
export default Router;