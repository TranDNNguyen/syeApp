/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

//Import screens
import HomeScreen from './src/screens/Home.js'
import LoginScreen from './src/screens/Login.js'


const NavigationApp = StackNavigator({
    Home: {screen: HomeScreen},
    Login: {screen: LoginScreen},
},
    {
      initialRouteName:'Login',
});

export default class App extends Component<{}> {
  render() {
    return <NavigationApp />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
