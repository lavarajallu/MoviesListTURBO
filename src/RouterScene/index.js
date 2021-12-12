/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *

 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { Router, Stack, Scene } from 'react-native-router-flux';
 import { Welcome,Login,MoviesList} from '../containers'
 
 
 const RouterScene = () => {
   return (
     <Router>
       <Stack key="root" hideNavBar={true}>
        
          <Scene key = 'welcome' component={Welcome}  initial={true} />
          <Scene key = 'login' component={Login} />
          <Scene key = 'movieslist' component={MoviesList} />

       </Stack>
     </Router>
   )
 }
 
 export default RouterScene
 