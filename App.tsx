/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CameraStack from './src/components/CameraStack';
import Login from './src/components/login/Login.tsx';

const App = () => {
  return (
    <Login />
    // <NavigationContainer>

    //   <CameraStack></CameraStack>

    // </NavigationContainer>
  );
};

export default App;
