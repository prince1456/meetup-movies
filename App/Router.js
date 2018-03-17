import React from 'react'
import { TabNavigator } from 'react-navigation'
import TopRate from './Screens/TopRate'
import Search from './Screens/Search'

const Router =  TabNavigator({
    TopRated: { screen: TopRate},
    Search: { screen: Search }
})

export default Router



