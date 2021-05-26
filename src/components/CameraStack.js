import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen';
import PictureScreen from './PictureScreen';
import VideoScreen from './VideoScreen';
import ProductScanRNCamera from './ProductScanRNCamera';

const Stack = createStackNavigator();

const CameraStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#035',
        },
        headerTintColor: '#fd0',
      }}>
      <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
      <Stack.Screen
        name="PictureScreen"
        component={PictureScreen}></Stack.Screen>
      <Stack.Screen name="VideoScreen" component={VideoScreen}></Stack.Screen>
      <Stack.Screen
        name="ProductScanRNCamera"
        component={ProductScanRNCamera}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CameraStack;
