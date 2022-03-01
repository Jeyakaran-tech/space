import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import HomePage from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = ()=> {
    return ( 
        <Tab.Navigator
        screenOptions={{
            activeTintColor: '#f15454',
          }}
        >
            <Tab.Screen 
            name={'Search'}
            component={HomePage}
            options={{
                tabBarIcon:({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                ),
                headerShown:false,
            }}

            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;