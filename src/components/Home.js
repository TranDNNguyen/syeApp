import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component{
    render(){
        return (
            <Text style={styles.title}>Homepage for {this.props.name}</Text>
        );
    };
}

Home.defaultProps = {
    name:'no_name',
};

Home.propTypes = {
    name: PropTypes.string,
};


var styles=StyleSheet.create({
    title:{
        fontSize:24,
        textAlign: 'center',
        fontWeight:'bold',
    }
    });