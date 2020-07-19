import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  View,
  Text,
  Image
} from 'react-native'

// Screen Component
import Home from './screens/home'
import Page from './screens/page'
import ChatScreen from './screens/chatscreen'
import Login from './screens/login'
import Jobs from './screens/jobs'
import Menu from './screens/menu'
import MyJobs from './screens/myjobs'

// Icons
import HomeIconBlue from './../assets/home-icon-blue.png'
import HomeIconWhite from './../assets/home-icon-white.png'
import HomeIconGray from './../assets/home-icon-gray.png'
import BagIconBlue from './../assets/bag-icon-blue.png'
import BagIconWhite from './../assets/bag-icon-white.png'
import BagIconGray from './../assets/bag-icon-gray.png'
import MenuIconBlue from './../assets/menu-icon-blue.png'
import MenuIconWhite from './../assets/menu-icon-white.png'
import MenuIconGray from './../assets/menu-icon-gray.png'


// Config
import { Color } from './global'


// Tab Navigation
const TabNavigator = createBottomTabNavigator( {
  Jobs,
  MyJobs: {
    screen: MyJobs
  },
  Menu

} ,{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let icon
      if (routeName === 'Jobs') {
        if( focused )
          icon= <Image source={HomeIconWhite} style={{ height: 18, width: 18 }}/>
        else icon = <Image source={HomeIconWhite} style={{ height: 18, width: 18, opacity: 0.5 }}/>
      }
      else if( routeName === 'MyJobs') {

        if( focused )
          icon= <Image source={BagIconWhite} style={{ height: 18, width: 18 }}/>
        else icon = <Image source={BagIconWhite} style={{ height: 18, width: 18, opacity: 0.5 }}/>

      }
      else if( routeName === 'Menu') {

        if( focused )
          icon= <Image source={MenuIconWhite} style={{ height: 18, width: 18 }}/>
        else icon = <Image source={MenuIconWhite} style={{ height: 18, width: 18, opacity: 0.5 }}/>

      }

      // You can return any component that you like here!
      return <View style={{ marginTop: -10}}>
        { icon }
      </View>;
    },
    tabBarLabel: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let labelName = null
      if (routeName === 'Jobs') {
        labelName = "Jobs nearby"
      }
      else if( routeName === 'MyJobs') {
        labelName = "My jobs"        
      }
      else if( routeName === 'Menu') {
        labelName = "Menu"
      }
      // You can return any component that you like here!
      return <View style={{ alignItems: 'center', marginTop: -20 }}>
        <Text style={[{ fontSize: 12 }, focused? { color: '#fff' } : { color: Color.color4, opacity: 0.5 }]}>{labelName}</Text>
      </View>
    },
  }),
  tabBarOptions: {
    activeTintColor: Color.primary,
    style: {
      paddingBottom: 4,
      backgroundColor: Color.primary
    }
  },
}
);

const screenStack = createStackNavigator({
  TabNavigator,
  ChatScreen
},{
  defaultNavigationOptions: ({ navigation }) => ({

    header : null
  })
})

let AppNavigation = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Screen: {
    screen: screenStack
  },
  Login: {
    screen: Login
  }
},{
  initialRouteName: 'Login'
})

export default createAppContainer(AppNavigation)