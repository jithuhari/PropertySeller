//---------- View Property---------------

import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
//import Header from '../components/PropertyHeader';
import colors from '../config/colors';
//import DatePicker from 'react-native-datepicker';
//import 'react-datepicker/dist/react-native-datepicker.css';
import PropertyHeader from '../Components/PropertyHeader';
import {useNavigation} from '@react-navigation/native';


export default function ViewProperty({route})
{
  const navigation = useNavigation();

        return(
          
            <View style={styles.MainView}>


                {/* -----Body----- */}

                < PropertyHeader navigation={navigation} text={route.params.proId}/>
               <ScrollView>
               <View style={styles.containerView}>
                  
               <View style={styles.InputView}>
                   <Text style={styles.textstyle}>Branch :</Text>
                    <Text style={styles.textstyle}>  {route.params.place}</Text> 
                   </View>

                   <View style={styles.InputView}>
                   <Text style={styles.textstyle}>Reserved Price :</Text>
                   <Text style={styles.textstyle}>  {route.params.ReservedPrice}</Text>   
                   </View>


                   <View style={styles.InputView}>
                   <Text style={styles.textstyle}>EMD RS :</Text>
                   <Text style={styles.textstyle}>  {route.params.EMD}</Text>   
                   </View>

                   <View style={styles.InputView}>
                   <Text style={styles.textstyle}>EMD Last Date:</Text>
                   <Text style={styles.textstyle}>  {route.params.EMDDate}</Text> 
                 
                   </View>
                  <View style={styles.InputViewText}>
                     <Text style={styles.textstyle}>Images</Text>
                  </View>


                  {/* Images of Property */}
                  <View style={styles.ImageContainer} >
                  <Image  style={styles.imgStyle} source={require('../Assets/viewProperty/p1.jpg')}/>
                  <Image  style={styles.imgStyle} source={require('../Assets/viewProperty/p2.jpg')}/>
                  </View>
                  {/* Images of Property */}
                  <View style={styles.ImageContainer} >
                  <Image  style={styles.imgStyle} source={require('../Assets/viewProperty/p3.jpg')}/>
                  <Image  style={styles.imgStyle} source={require('../Assets/viewProperty/p4.jpg')}/>
                  </View>

               </View>
               </ScrollView>
               
            </View>
        );
    }



  const styles = StyleSheet.create({

    MainView:{
      height:'100%',
     
      backgroundColor:colors.background
    },

    containerView:{
      margin:'3%',
      height:'98%',
      backgroundColor:colors.MapContainerColor,
      borderRadius:10
    },
    
    imgStyle:{
      
      height:150,
      width:'46%',
      borderRadius:10,
      
    },
    ImageContainer:{
      height:175,
      flexDirection:'row',
      justifyContent:'space-around',
    },
    
    RowView:{
      flexDirection:'row'
    },

    InputView:{
      
      padding:20,
      margin:10,
      backgroundColor:colors.background,
      borderRadius:11,
      flexDirection:'row',
      justifyContent:'flex-start'
    },
    InputViewText:{
      margin:20
    },

    textstyle:{
      fontWeight:'bold',
      color:colors.secondary
    },
    dates:{
      margin:10,
      width:300
    }
    
});

