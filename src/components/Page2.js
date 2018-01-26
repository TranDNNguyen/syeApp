import React, { Component } from 'react';

import{
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

export default class Page2 extends React.Component{
    static navigationOptions={
        title:'Page 2',
    };
    render(){
        return(
            <View style={{flex:1, alignContent:'center'}}>
                <Text>---Page 2---</Text>
            </View>
        );
    };
}
