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
            <View>
                <View style={{flex: 1, alignContent:'center', alignItems:'center'}}>
                    <Text style={styles.title}>
                        Homepage
                    </Text>
                    <View style={{flex:1,top:130, alignContent:'center', alignItems:'center'}}>
                        <Image style={{height:60, width:200, marginBottom:50}}
                               source={{uri:'http://chilios.com/wp-content/uploads/2017/10/chilios_logo7-1.png'}}/>
                        <Text style={styles.welcome}>Welcome!</Text>
                        <Text style={styles.intro}>Please sign in to save your receipts and invoices.</Text>
                        <TextInput style={styles.inputField} placeholder={'Email'}/>
                        <TextInput style={styles.inputField} placeholder={'Password'}/>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title:{
        fontSize:24,
        textAlign: 'center',
    },
    welcome:{
        fontFamily:'cardo',
        fontSize:24,
        color:'#4aabf4'
    },
    intro:{

    },
    inputField:{
        margin:3,
        width:220,
        height:40,
        fontSize:20,
        borderWidth:2,
        borderColor:'grey'
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