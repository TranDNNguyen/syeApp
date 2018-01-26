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
import{
    Actions,
} from 'react-native-router-flux';

class Login extends React.Component{
    static navigationOptions={
        header: null,
    };
    state={
        user:'',
        password:'',
    };
    render(){
        return(
            <View>
                <View style={{flex: 1, alignContent:'center', alignItems:'center'}}>
                    <View style={{flex:1,top:100, alignContent:'center', alignItems:'center'}}>
                        <Image style={{height:100, width:350, marginBottom:50}}
                               source={{uri:'http://chilios.com/wp-content/uploads/2017/10/chilios_logo7-1.png'}}/>
                        <Text style={styles.welcome}>Welcome!</Text>
                        <Text style={styles.intro}>Please sign in to save your receipts and invoices.</Text>

                        <TextInput style={styles.inputField} placeholder={'Email'}
                            onChangeText={(text) =>{
                                this.setState({user:text,});
                            }}/>
                        <TextInput style={styles.inputField} placeholder={'Password'}
                            onChangeText={(text) => {
                                this.setState({password:text,});
                            }}/>

                        <TouchableOpacity
                            onPress={() => {
                                //navigate to second screen
                                Actions.home({
                                   user: this.state.user,
                                });
                            }} style={styles.button}>
                            <Text style={styles.bText}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    button:{
        marginTop:10,
        borderRadius:10,
        height:40,
        width:250,
        backgroundColor:'#f4c932',
    },
    bText:{
        color:'#489cf4',
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
    },
    title:{
        fontSize:24,
        textAlign: 'center',
    },
    welcome:{
        fontFamily:'cardo',
        fontSize:28,
        color:'#4aabf4',
        marginBottom:20,
        fontWeight:'bold'
    },
    intro:{
        marginBottom:8,
    },
    inputField:{
        margin:3,
        width:220,
        height:40,
        fontSize:20,
        borderWidth:2,
        borderColor:'grey',
    },
    login:{
        height:40,
        width:200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Login;