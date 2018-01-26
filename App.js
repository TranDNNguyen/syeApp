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
    View,
} from 'react-native';

import{
    Router, Scene,
} from 'react-native-router-flux'

import {StackNavigator,
        DrawerNavigator
} from "react-navigation";

//Componenets
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import Page1 from "./src/components/Page1";
import Page2 from "./src/components/Page2";
import DrawerMenu from "./src/components/DrawerMenu";


const MainScreenNavigator = StackNavigator({
    login: {screen: Login},
    home: {screen:Home},
    testPage1: {screen: Page1},
    testPage2: {screen: Page2}
});

const Drawer = DrawerNavigator(
    {
        Main:{screen: Home}
    },
    {
        contentComponent: DrawerMenu,
        drawerWidth:200
    }
);

export default Drawer;

/*
//Manages navigation
export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='login' component={Login} title='Login'/>
                    <Scene key='home' component={Home} title='Home'/>
                </Scene>
            </Router>
        );
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
*/