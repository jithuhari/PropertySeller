import React, {useState} from 'react';
import colors from '../config/colors';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AdminHome from '../Screens/Seller/SellerHome';
import Modal from 'react-native-modal';

export default function PropertymainHeader({text,navigation}){


    const [modalOpenHome,setModalOpenHome]=useState(false);
    const pressHandler =()=>{
        navigation.goBack();
    }

    return(
        <View style={styles.RowView}>
            
            <View style={styles.Paddingview}>
                <FontAwesome onPress={()=> setModalOpenHome(true)} style={styles.iconItem}  name="chevron-left" size ={20}></FontAwesome >
            </View>
           
        
            <View style={styles.header}><Text style={styles.title}>{text} </Text></View>

            
                {/* Seller Home */}
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
        justifyContent:'center'
        
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        letterSpacing:1,
        color:colors.secondary
       
    },
    iconItem:{
        color:colors.secondary,
        margin:5
    },
    RowView:{
        flexDirection:'row'
    },
    Paddingview:{
        paddingTop:10
    }
    
});