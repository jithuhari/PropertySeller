// //---------- Seller Add Property---------------

import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';
import colors from '../../config/colors';

import AddsellerButton from '../../Components/AddsellerButton';

//import { Dropdown } from 'react-native-material-dropdown';
import PickerExample from '../../Components/PickerExample';
import SellerAddPropertyHeader from '../../Components/SellerAddPropertyHeader';

import Modal from 'react-native-modal';



export default function SellerAddProperty(navigation) {


    const [modalOpenAdd,setModalOpenAdd]=useState(true);

    return (
        
            <View style={styles.MainView}>
                 
                 < SellerAddPropertyHeader navigation={navigation} text='Add Seller'/>   
                    {/* AppBar */}
                    {/* <SellerAddPropertyHeader text="         Add Seller" /> */}
                    <ScrollView>
                        <View style={styles.containerView}>
        
                            <View style={styles.InputView1}>
                                <Text style={styles.textstyle}>BANK NAME :</Text>
                                <TextInput style={styles.TextInput} />
                            </View>
        
                            <View style={styles.InputView1}>
                                <Text style={styles.textstyle}>BRANCH NAME:</Text>
                                <TextInput style={styles.TextInput} />
                            </View>
        
                            
                            <View >
                                {/* <PickerExp/>     */}
                                <PickerExample />
                            </View>
        
                         
        
                            <View style={styles.InputView1}>
                                <Text style={styles.textstyle}>PINCODE :</Text>
                                <TextInput style={styles.TextInput} />
                            </View>
        
                            <View style={styles.InputView1}>
                                <Text style={styles.textstyle}>EMAIL ID :</Text>
                                <TextInput style={styles.TextInput} />
                            </View>
        
                            <View style={styles.InputView1}>
                                <Text style={styles.textstyle}>PASSWORD :</Text>
                                <TextInput style={styles.TextInput} />
                            </View>
        
                            {/* ADD SELLER VIEW */}
                         
        
                                {/* Custom Button */}
                               
                                    <AddsellerButton text=" ADD " />
                                
                          
                        </View>
                    </ScrollView>
        
                </View>
               
                
        
    );
}



const styles = StyleSheet.create({

    MainView: {
        height: '100%',

        backgroundColor: colors.background
    },

    containerView: {
        margin: '3%',
        height: '98%',
        backgroundColor: colors.MapContainerColor,
        borderRadius: 15
    },



    RowView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    InputView: {
        // borderWidth: .5,

        padding: 5,
        margin: 12,
        // borderColor: colors.secondary,
        borderRadius: 20
    },
    InputViewText: {
        margin: 20
    },

    textstyle: {
        fontWeight: 'bold',
        color: colors.secondary,
        margin: 30, fontSize: 18,
    },

    InputView1: {
        flexDirection: 'row',
        backgroundColor:colors.background,
        margin:8,
        borderRadius:10
        // alignItems: 'center',


    },
    RowView1: {
        
    },






});


