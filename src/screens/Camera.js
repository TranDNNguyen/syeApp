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

import Camera from 'react-native-camera';
import ReviewReceiptScreen from "./ReviewReceipt";



class CameraScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    onBarCodeRead={this.onBarCodeRead.bind(this)}cap
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={() => this.takePicToNextScreen()}>[CAPTURE]</Text>
                </Camera>
            </View>
        );
    }

    takePicToNextScreen() {
        const {navigate} = this.props.navigation;
        let receiptURI = this.takePicture.bind(this);
        navigate("ReviewReceipt", {rURI: receiptURI});
        //need to save the picture to cache temporarily
    }

    onBarCodeRead(e) {
        console.log(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

    takePicture = async function() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            return data.uri;
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});
export default CameraScreen;