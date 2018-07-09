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
    AsyncStorage,
} from 'react-native';


class ReviewReceiptScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>Testing</Text>
                <Image style={styles.receiptImage}
                       source = {{uri:this.props.rURI}}>
                </Image>
            </View>
        );
    }

    //retrieve the picture from cache
    //buttons to determine if we want to submit for processing or go back to the Camera screen
    //feed the image to the ocr and go back to Home screen

}

const styles = StyleSheet.create({
    receiptImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    testing: {
        color: '#F5FCFF'
    }
});
export default ReviewReceiptScreen;