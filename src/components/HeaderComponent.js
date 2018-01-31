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
                <Text style={styles.title}>test</Text>
                <TouchableHighlight
                    style={styles.drawerContainer}
                    onPress={() => {
                        navigate('DrawerOpen');
                    }}>
                    <Image
                        style={{width:35, height:35}}
                        source={require('../icons/menuButton.png')}/>
                </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
   headerView: {
       height: 70,
       width: width,
   },
    drawerContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:10,
        marginTop:20,
    },
    title:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});