import React from 'react'
import { TabNavigator } from 'react-navigation'
import TopRate from './Screens/TopRate'
import Search from './Screens/Search'
import { Icon } from 'native-base'

const Router =  TabNavigator({
    TopRated: { screen: TopRate},
    Search: { screen: Search }
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'TopRated') {
        iconName = `ios-closed-captioning${focused ? '' : '-outline'}`;
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
}
)

export default Router



