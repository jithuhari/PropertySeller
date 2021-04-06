import React, {useState} from 'react';
import colors from '../config/colors';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AdminHome from '../Screens/Seller/SellerHome';
import Modal from 'react-native-modal';

export default function Header({text}){

    const [modalOpenHome,setModalOpenHome]=useState(false);
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> setModalOpenHome(true)}>
            <FontAwesome style={styles.iconItem}  name="chevron-left" size ={20}></FontAwesome >
            </TouchableOpacity>
            <View style={styles.headerTitle}><Text style={styles.title} title='Hi Joe'>{text} </Text></View>
            

            <Modal isVisible={modalOpenHome} style={{margin:0,paddingTop:15}}>
                    <AdminHome/>
                </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:55,
        flexDirection:'row',
        paddingTop:10,
        backgroundColor:colors.background,
        alignItems:'center',
        padding:10,
        paddingLeft:20,
        elevation:2
        
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        letterSpacing:1,
        color:colors.secondary
       
    },
    iconItem:{
        color:colors.secondary,
        },
        headerTitle:{
            alignItems:'center',
            padding:10,
            paddingLeft:20
        }
    
});