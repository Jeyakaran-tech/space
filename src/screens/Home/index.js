import React from 'react';
import {Text,View, ImageBackground} from "react-native"
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenContainer } from 'react-native-screens';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const HomePage = ()=> {
    return ( 
    <LinearGradient colors={['#b92b27', '#1565c0']} style={styles.background} >
        <View style={styles.header}>
            <Text style={{color:'white', fontFamily:'ShipporiAntiqueB1-Regular', fontSize:36, flex:3, alignSelf:'center', bottom:-19}}>
                Space
            </Text>
        </View>
        <ScrollView style={{height:1000}}>
            <View>
            <ImageBackground 
                source={require('../../../assets/images/HomePage.jpg')} 
                imageStyle={{ borderBottomLeftRadius: 50,borderBottomRightRadius:50}}
                style={styles.image} 
            >
                <Text style={styles.title}>Pick</Text>
                <Text style={styles.title}>your</Text>
                <Text style={styles.title}>next space</Text>
                <Text style={styles.title}>with us </Text>
                <Text style={styles.subTitle}>Tailor made for students </Text>


            </ImageBackground>
            </View>
<ScrollView  horizontal={true} contentContainerStyle={styles.container}>
    <View style={styles.lowerHomePage}>

    </View>
    <View style={styles.lowerHomePage}>

    </View>

</ScrollView>

           
        </ScrollView>
    </LinearGradient>
    );
};

export default HomePage;