import React, {useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import Colors from '../config/colors';

const CustomButton = ({ text,onpress }) => {
    return(
        
            <TouchableOpacity onPress={onpress} style={styles.button}>
                <View >
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
       
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    button:{
        width:"90%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.secondary,
        height:50,
        borderRadius:8,
        marginVertical:20
    },
    text:{
        color:'#ffff',
        fontSize:18,
        fontWeight:'700'

    }

});