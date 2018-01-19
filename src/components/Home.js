import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';

class Home extends React.Component{
    render(){
        return(
            <View style={{flex: 1, alignContent:'center', alignItems:'center'}}>
                {/*<Text style={styles.title}>
                    Homepage
                </Text>*/}
                <Image style={{height:60, width:200}}
                       source={{uri:'http://chilios.com/wp-content/uploads/2017/10/chilios_logo7-1.png'}}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title:{
        fontSize:24,
        textAlign: 'center',
    },
    login:{
        height:40,
        width:200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Home;