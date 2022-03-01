/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler'
 import React from 'react';
 import { StatusBar } from 'react-native';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import HomePage from './src/screens/Home/index';
 import Router from './src/navigations/Router';
 
 const App = () => {
   return (
     <>
     <StatusBar barStyle='dark-content'/>
     <Router/>
     {/* <SafeAreaView>
       <HomePage />
     </SafeAreaView> */}
     </>
     
   );
 };
 
 
 export default App;
 