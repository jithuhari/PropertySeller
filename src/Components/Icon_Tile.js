import React, {useState} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';
//import { color } from 'react-native-reanimated';
import colors from '../config/colors';
const IconTile =({data,title}) => 
{
return (
   <View style={styles.mainContainer}>
      
        <View style={styles.IcoBboxContainer}>
      <Image style={styles.IconImgContainer} source={data}/>
      <Text style={styles.text}>{title}</Text>
      </View>
      
  </View>
    );
};
const styles = StyleSheet.create({
    mainContainer:{
        padding:5
    },
    IcoBboxContainer:{
      width:65,
      height:65,
     
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
      borderRadius:15,
    },
    IconImgContainer:{
     marginTop:5,
      width:30,
      height:30,
      
      
     },
    text:{
     color:'black',
      fontWeight:'bold',
      color: '#003366',
      justifyContent:'center',
      textAlign:'center',
      fontSize:9
     },
});
export default IconTile;