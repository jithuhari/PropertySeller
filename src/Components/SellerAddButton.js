import React from 'react';
import colors from '../config/colors';

import {StyleSheet, View, Text,  TouchableOpacity} from 'react-native';

export default function FlatButton({text})
  {
   
    
        return(
            <TouchableOpacity onPress={
               console.log('ggg')
            }>
                 <View style = {styles.button}>
                    <Text style = {styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
         

        );
      }
  

  const styles = StyleSheet.create({
   
    button:{
        //marginLeft:'2%',
        //marginTop:'40%',
        width:'400%',
        borderRadius:10,
        paddingVertical:'30%',
        paddingHorizontal:'5%',
        backgroundColor:colors.secondary,
        alignItems: 'center'
        
        
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontWeight: 'bold',
    }
    
});

