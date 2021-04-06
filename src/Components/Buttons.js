import React from 'react';
import colors from '../config/colors';

import {StyleSheet, View, Text,  TouchableOpacity} from 'react-native';

export default function FlatButton({text})
  {
        return(
          
                 <View style = {styles.button}>
                    <Text style = {styles.buttonText}>{text}</Text>
                </View>
        );
      }
  

  const styles = StyleSheet.create({
   
    button:{
        marginLeft:'11%',
        marginTop:'70%',
        width:'80%',
        borderRadius:17,
        paddingVertical:'15%',
        paddingHorizontal:'3%',
        backgroundColor:colors.secondary,
        
        
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
    
});

