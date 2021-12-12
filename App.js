/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RouterScene from './src/RouterScene'



const App = () => {

 

  return (
    <SafeAreaView style={{flex:1}}>
     
         <StatusBar />
        <RouterScene />
      </SafeAreaView>
  );
};


export default App;
