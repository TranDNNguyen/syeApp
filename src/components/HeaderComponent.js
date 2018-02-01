import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button,
    TouchableHighlight,
} from 'react-native';

var {height,width} = Dimensions.get('screen');

export default class HeaderComponent extends React.Component{

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View
            style={styles.headerView}>
                <TouchableHighlight
                    style={styles.drawerContainer}
                    onPress={() => {
                        navigate('DrawerOpen');
                    }}>
                    <Image
                        style={{width:35, height:35}}
                        source={require('../icons/menuButton.png')}/>
                </TouchableHighlight>
                <Text style={styles.title}>{this.props.name}test</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
   headerView: {
       flexDirection:'row',
       height:70,
       backgroundColor:'#46d1e3',
   },
    drawerContainer:{
        justifyContent: 'center',
        alignSelf:'center',
        marginLeft:10,
        marginTop:10,
    },
    title:{
        textAlign:'center',
        alignContent:'center',
        marginTop:30,
        flex:1,
    },
});