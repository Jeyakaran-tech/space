import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/Home';
import HomeTabNavigator from './HomeTabNavigator';
const Stack = createNativeStackNavigator();

const Router = ()=> {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                name = {"Home"}
                component={HomeTabNavigator}
                options={{
                    headerShown:false,
                }}
            />
 
                {/* <Stack.Screen 
                name = {"Destination Search"}
                component={HomePage}
                /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;