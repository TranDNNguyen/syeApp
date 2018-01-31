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

class SettingsScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        let title = 'Settings';
        let drawerLabel = 'Settings';

        return{title, drawerLabel};
    }
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <View style={styles.title}>
                    <Text>Settings</Text>
                </View>
                <View style={styles.centered}>
                    <Text onPress={ ()=> navigate('Home')}> Go back to home </Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6eaff4',
    },
    title:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center'
    },
});
export default SettingsScreen;