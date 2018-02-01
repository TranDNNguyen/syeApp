import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

//import Camera from 'react-native-camera';

//Components
import HeaderComponent from '../components/HeaderComponent';


class HomeScreen extends React.Component{
    static navigationOptions = ({ navigation }) =>{
        let title = 'Home';
        let drawerLabel = 'Home';
        let headerLeft = null;
        return{title, drawerLabel, headerLeft};
    }
    state={
        names:[
            {'name': 'Receipt 1', 'id': 1},
            {'name': 'Receipt 2', 'id': 2},
            {'name': 'Receipt 3', 'id': 3},
            {'name': 'Receipt 4', 'id': 4},
            {'name': 'Receipt 5', 'id': 5},
            {'name': 'Receipt 6', 'id': 6},
            {'name': 'Receipt 7', 'id': 7},
            {'name': 'Receipt 8', 'id': 8},
            {'name': 'Receipt 9', 'id': 9}
        ]
    };
    render() {
        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
                <HeaderComponent {...this.props}/>
                <Text>{this.props.name}</Text>
                <View style={{flex:4,alignItems:'center',width:'100%',}}>
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
                        style={styles.camButton}>
                        <Image
                            source={{uri:'http://2.bp.blogspot.com/-V31y2Ef4Ad0/VZservQf70I/AAAAAAAAdu8/ErI--hbXwfE/s1600/OpenCamera1.png'}}
                            style={{width:70, height:70,top:-2}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    camButton:{
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
export default HomeScreen;