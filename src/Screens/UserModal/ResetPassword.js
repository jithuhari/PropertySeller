import React,{useState} from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../Components/notifiHeder';
import colors from '../../config/colors';
import Button from '../../Components/AddsellerButton';
const ResetPassword = () => {

    
    const [data , setData] = React.useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        secureTextEntry: true,
        
    });
    
    const handlecurrentPasswordChange = (val)=>{
        setData({
            ...data,
            currentPassword:val
        })
    }

    const updateSecureTextEntry =()=>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }


    return(

     <View style={styles.page}>
  
         {/* header */}
         <Header text="Reset Password"/>
          
          <View>
          
              <View  style={styles.whiteContainer}>
                
              <ScrollView>
              <View style={styles.centeredView1}>
                    <View><Text style={styles.text}>Current Password</Text></View>
                    <View style={styles.password}>
                        <FontAwesome style={styles.icon} name="lock" color={Colors.secondary} size={20}/>
                        <TextInput
                         placeholder='Enter Current Password' 
                         style={styles.textInput} 
                         secureTextEntry={data.secureTextEntry ? true : false} 
                         onChangeText = {(val) => handlecurrentPasswordChange(val)}/>

                         <TouchableOpacity onPress={updateSecureTextEntry}>
                            <Feather name='eye-off' size={15} color={colors.secondary} style={styles.icon}/>
                         </TouchableOpacity>
                        
                    </View>

                    <View><Text style={styles.text}>New Password</Text></View>
                    <View style={styles.password}>
                        <FontAwesome style={styles.icon} name="lock" color={Colors.secondary} size={20}/>
                        <TextInput 
                        placeholder='Enter New Password' 
                        style={styles.textInput} 
                        secureTextEntry={data.secureTextEntry ? true : false} 
                         onChangeText = {(val) => handlecurrentPasswordChange(val)}/>

                         <TouchableOpacity onPress={updateSecureTextEntry}>
                            <Feather name='eye-off' size={15} color={colors.secondary} style={styles.icon}/>
                         </TouchableOpacity>
                        
                    </View>

                    <View><Text style={styles.text}>Confirm Password</Text></View>
                    <View style={styles.password}>
                        <FontAwesome style={styles.icon} name="lock" color={Colors.secondary} size={20}/>
                        <TextInput 
                        placeholder='Confirm Password' 
                        style={styles.textInput} 
                        secureTextEntry={true}/>
                        <Feather name='eye-off' size={15} color={colors.secondary} style={styles.icon}/>
                    </View>

                    <TouchableOpacity>
                        <Button text="Reset Password"/>
                    </TouchableOpacity>
                    

              </View>
              </ScrollView>
             </View>

                 
            
          </View>
          
      </View>
     );
};

export default ResetPassword;
const styles = StyleSheet.create({
    page:{
        backgroundColor: Colors.MapContainerColor,
        alignItems: "center",
        flex:1
    },
  
   
    centeredView1: {
        padding:25,
        
    },
      whiteContainer:{
        width: 330,
        height:'93%',
        borderWidth: 1,
        borderColor: colors.background,
        borderRadius: 14,
        backgroundColor:colors.background,
        marginTop:20
        
      },
      password:{
          flexDirection:'row',
          marginTop:10,
          paddingBottom:5,
          borderBottomWidth:.5,
          borderBottomColor:colors.secondary
      },
      textInput:{
          flex:1,
          color:colors.secondary

      },
      icon:{
          marginTop:15,
          marginRight:10,
          marginLeft:5
      },
      text:{
          color:colors.secondary,
          marginLeft:6,
          marginTop:40,
          fontSize:16
      }
});