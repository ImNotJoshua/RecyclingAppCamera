import {Image, TouchableOpacity, TextInput, Switch, Text, View, StyleSheet} from 'react-native';
import React,{useState, useEffect} from 'react';
import {Camera} from 'expo-camera';

const [hasPermission, setHasPermission]= useState(null);
const [type, setType]= useState(Camera.Constants.Type.back);

export default class ScannerScreen extends React.Component{
    useEffect(() => {
(async () => {
    const{status}=await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
})();
    },[]);

    render() {
        return(
            <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress>

            </TouchableOpacity>
            </View>
            </Camera>
                <Text>
                    Profile
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({

})