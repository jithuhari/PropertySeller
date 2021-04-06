import React from 'react';
import colors from '../config/colors';

import {StyleSheet, View, Text,  TouchableOpacity} from 'react-native';

export default function AddsellerButton({text})
  {
        return(
                
                 <View style = {styles.button}>
                    <Text style = {styles.buttonText}>{text}</Text>
                </View>
        );
      }
  

  const styles = StyleSheet.create({
   
    button:{
        
        margin:20,
        borderRadius:10,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:colors.secondary,
        marginBottom:10
        
        
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }
    
});

