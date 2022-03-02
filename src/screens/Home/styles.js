import { Dimensions, StyleSheet } from "react-native"

const {width} = Dimensions.get('screen')
const styles=StyleSheet.create({

    background:{
        width:'100%',
        height:1000,
    },
    image:{
        width:'100%',
        height:500,
        justifyContent:'center',
        borderBottomLeftRadius: 30,
    },
    title:{
        color:'white',
        fontSize:60,
        marginLeft:25,
        fontWeight:'bold',
        fontFamily: 'ShipporiAntiqueB1-Regular',
    },
    subTitle:{
        color:'#E8A87C',
        fontSize:25,
        marginTop:50,
        marginLeft:25,
        fontWeight:'bold',
        fontFamily: 'ShipporiAntiqueB1-Regular',

    },
    lowerHomePage:{
        backgroundColor:'#002533',
        marginTop:20,
        height:200,
        width:width-30,
        alignSelf:'center',
        borderRadius:30,
        marginRight:10,
    },
    header:{
        backgroundColor:'black',
        height:70,
    },
    container:{
        paddingLeft:10,    
    },
    headerImage:{
        width:'100%',
    }
});

export default styles;

