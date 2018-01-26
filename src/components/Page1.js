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

export default class Page1 extends React.Component{
    static navigationOptions={
        title:'Page 1',
    };
    render(){
        return(
            <View style={{flex:1, alignContent:'center'}}>
                <Text>---Page 1---</Text>
            </View>
        );
    };
}
