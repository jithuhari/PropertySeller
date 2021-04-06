//-------- View prpoperty main-----------


import React,{ useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
// import Header from '../Components/PropertymainHeader';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';
import PropertymainHeader from '../Components/PropertymainHeader';



export default function ViewPropertyMain()
{

  // const pressHandler = ()=> {
  //   navigation.navigate('ViewProperty')
  // };
  const navigation = useNavigation();

  const [property, setproperty] = useState([
    {property: 'Property 1:',  proId: '12ff34'  ,  place: 'Attingal',ReservedPrice: '10000$', EMD:'25885', EMDDate:'26/02/2021' ,key:'1'},
    {property: 'Property 2:',  proId: '3dd214'  ,  place: 'Kollam',  ReservedPrice: '20000$', EMD:'35885', EMDDate:'16/03/2021' ,key:'2'},
    {property: 'Property 3:',  proId: '454ff5'  ,  place: 'Kottayam',ReservedPrice: '55000$', EMD:'35288', EMDDate:'25/05/2021' ,key:'3'},
    {property: 'Property 4:',  proId: '454vv5'  ,  place: 'TVM' ,    ReservedPrice: '25000$', EMD:'25555', EMDDate:'02/03/2021' ,key:'4'},
  ]);
    


    return(
      <View style={styles.MainView}>
        
        {/* ----Body----- */}
        < PropertymainHeader navigation={navigation} text='View Properties'/>
        
        <ScrollView>
                <View style={styles.containerView}>

                
                {property.map((item)=>{
                    return (

                      <View key={item.key}>
                        <TouchableOpacity onPress={
                         ()=>navigation.navigate('ViewProperty',item) 
                        }>
                        <View style={styles.InputView} >

                        <View>
                        <Text style={styles.textstyle}>{item.property}</Text>
                        </View>

                        <View >
                        <Text style={styles.textstyle}>    Property Id: {item.proId}</Text>
                        <Text style={styles.textstyle}>    Branch Name :{item.place}</Text>
                        </View>

                        </View>
                        </TouchableOpacity>
                        </View>
                      
                    
                     )
                    })}

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
      borderRadius:15
    },

    InputView:{
      
      padding:15,
      margin:12,
      backgroundColor:colors.background,
      borderRadius:10,
      flexDirection:'row',
      
      justifyContent:'flex-start',
      
    },
  

    textstyle:{
      marginTop:5,
      fontWeight:'bold',
      color:colors.secondary,
      fontSize:16
      
    },

    
    
});
