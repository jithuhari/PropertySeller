import React,{useState} from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../Components/SellerPropertyHeader';
const SellerAbout = () => {

    
    
    return(

     <View style={styles.page}>
  
         {/* header */}
         <Header text="About"/>
          
          <View>
          
              <View  style={styles.whiteContainer}>
                
              <ScrollView>
              <View style={styles.centeredView1}>
                    
                  
                    <Text style={styles.aboutContent}>
            Physiological   respiration  involves  the  mechanisms  that  ensure  that  the  
            composition  of  the  functional  residual  capacity  is  kept  constant,  and 
             equilibrates  with  the  gases  dissolved in the pulmonary capillary blood, and 
             thus throughout the body. Thus, in precise usage, the words breathing and ventilation 
             are hyponyms, not synonyms, of respiration; but this prescription is not consistently 
             followed, even by most health care providers, because the term respiratory rate (RR) is 
             a well-established term in health care, even though it would need to be consistently
              replaced with ventilation rate if the precise usage were to be followed.</Text>

                    
                    </View>
              </ScrollView>
                    

                  
             </View>

                 
            
          </View>
          
      </View>
     );
};

export default SellerAbout;
const styles = StyleSheet.create({
    page:{
        backgroundColor: Colors.background,
        alignItems: "center",
        flex:1
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:Colors.background,
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingLeft: 15
    },
    headerHeading: {
        fontSize: 20,
        color:Colors.secondary,
        fontWeight: 'bold',
       alignSelf:'center'
    },
    
     optionButton: {
        paddingRight: 20,
        paddingLeft: 20,
         paddingVertical: 20,
      
     },
  
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
        width: '70%',
        alignItems: 'center'
    },
    centeredView1: {
        padding:25,
        
    },
      modalView1: {
        backgroundColor:Colors.background,
        borderRadius: 10,
        alignItems: "center",
        padding:30
        
      },
      aboutContent:{
        fontSize:15,
        lineHeight: 30,
        color:Colors.secondary,
        textAlign:'justify'
      },
      whiteContainer:{
        width: 330,
        height:'93%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 14,
        backgroundColor:'white',
        marginTop:20
        
      }
});