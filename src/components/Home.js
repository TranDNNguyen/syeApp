import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import{
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';

export default class Home extends React.Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        drawerLabel: "Home",
        title: "Home",
        headerLeft: (
            <View style={{ paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <Image style={{width:50, height:50,}} source={require('./resources/icons/menu_button.png')}/>
                </TouchableOpacity>
            </View>
        )
    });
    state={
        names:[
            {'name': 'Receipt 1', 'id': 1},
            {'name': 'Receipt 2', 'id': 2},
            {'name': 'Receipt 3', 'id': 3},
            {'name': 'Receipt 4', 'id': 4},
            {'name': 'Receipt 5', 'id': 5},
            {'name': 'Receipt 6', 'id': 6}
        ]
    };
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.centeredContent}>
                    <Text style={styles.title}>Homepage for testUser{this.props.user}</Text>
                </View>

                <View style={{flex:3,alignItems:'center',width:'100%',}}>
                    <ScrollView style={{width:'95%', height:100}}>
                        {
                            this.state.names.map((item,index)=>(
                                <TouchableOpacity style={styles.item} key={item.id}
                                                  onPress={()=>{
                                                      alert(item.name);
                                                  }}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={{flex:1, alignItems:'center'}}>
                    <TouchableOpacity
                        style={styles.camOpen}>
                        <Image
                            source={{uri:'http://2.bp.blogspot.com/-V31y2Ef4Ad0/VZservQf70I/AAAAAAAAdu8/ErI--hbXwfE/s1600/OpenCamera1.png'}}
                            style={{width:70, height:70,top:-2}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

Home.defaultProps = {
    name:'no_name',
    user:'',
};

Home.propTypes = {
    name: PropTypes.string,
};


var styles=StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },
    centeredContent:{
        alignItems:'center',
        alignContent:'center',
        borderBottomWidth:2,
    },
    camOpen:{
        width:70,
        height:70,
        top:20,
        justifyContent:'center',
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        borderColor: '#030303',
        borderBottomWidth: 1,
    },
    });