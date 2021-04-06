//----------VIEW SELLER-----------

import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../Components/headerBank';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ViewSeller()
{

  
  const navigation = useNavigation();

      const [Bank, setBank] = useState([
        {no: '#',  name: 'Name of Bank' ,key:'1'},
        {no: '1',  name: 'Axis Bank'  ,key:'2'},
        {no: '2',  name: 'Bank of Baroda'  ,key:'3'},
        {no: '3',  name: 'Bank of India'  ,key:'4'},
        {no: '4',  name: 'Canara Bank' ,key:'5'},
        {no: '5',  name: 'Federal Bank'  ,key:'6'},
        {no: '6',  name: 'HDFC Bank'  ,key:'7'},
        {no: '7',  name: 'ICICI Bank'  ,key:'8'},
        {no: '8',  name: 'IDBI Bank'  ,key:'9'},
        {no: '9',  name: 'Indian Overseas Bank'  ,key:'10'},
        {no: '10',  name: 'Jammu and Kashmir Bank'  ,key:'11'},
        {no: '11',  name: 'Punjab National Bank'  ,key:'12'},
      ]);
       
      
      
        return(
           
              <View style={styles.MainView}>
               
                {/* -----Body---- */}
                < Header text='Banks'/>
                <ScrollView>
                <View style={styles.containerView}>
                  <View style={styles.mapview}>
                  <Image  style={styles.imgStyle} source={require('../Assets/map.png')}/>
                  </View>
                 
                  <View  style={styles.ViewList} >
                  {Bank.map((item)=>{
                   return (
                     <View key={item.key}>
                       <View style={styles.RowView}>

                       <Text style={styles.BankList}>  
                         {item.no}
                       </Text>
                       <Text style={styles.BankList}>  
                         {item.name}
                       </Text>
                        
                       </View>
                       
                     </View>
                     
                   )
                 })}
                     <TouchableOpacity onPress={()=> navigation.navigate("SellerAddProperty")}>
                     <View style={styles.Iconadd}>
                        <Ionicons style={styles.iconItem} name="add" size ={40}></Ionicons>
                        </View>  
                       </TouchableOpacity> 
                      

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
      marginTop:15,
      height:250,
      width:280
    },
    ViewList:{
      margin:15,
      backgroundColor:colors.listColor,
      borderRadius:10,
      color:colors.secondary,
      fontWeight:'bold',
      
     
    },
    RowView:{
      flexDirection:'row'
    },
    BankList:{
      margin:10,
      backgroundColor:colors.listColor,
      borderRadius:10,
      color:colors.secondary,
      fontWeight:'bold'
    },
    mapview:{
      flexDirection:'row',
      height:290,
      width:350,
      justifyContent:'center'
    },
    Iconadd:{
      flexDirection:'row',
      justifyContent:'flex-end',
      margin:10,
      
    },
    iconItem:{
      color:colors.secondary,
      
    }
    
});
