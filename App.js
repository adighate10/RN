import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View } from 'react-native';
import HomeScreen from './appData/components/HomeScreen'
import Charitra from './appData/components/Chatritra'
import Abhang from './appData/components/Abhang'
import Parampara from './appData/components/Parampara'
import FullAbhang from './appData/components/FullAbhang'
import Gallery from './appData/components/Gallery'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Charitra:
    {
      screen: Charitra
    },
    Abhang:
    {
      screen: Abhang
    },
    Parampara:
    {
      screen: Parampara
    },
    FullAbhang:
    {
      screen: FullAbhang
    },
    Gallery:
    {
      screen:Gallery
    }

  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}







