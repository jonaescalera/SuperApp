import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen'
import PictureScreen from './PictureScreen'
import VideoScreen from './VideoScreen'

const Stack = createStackNavigator();

const CameraStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='MainMenu'
            component={MainScreen}></Stack.Screen>
            <Stack.Screen name='PictureScreen'
            component={PictureScreen}></Stack.Screen>
            <Stack.Screen name='VideoScreen'
            component={VideoScreen}></Stack.Screen>
            
        </Stack.Navigator>
    );
} 

export default CameraStack;