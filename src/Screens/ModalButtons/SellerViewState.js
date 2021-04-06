import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/SellerPropertyHeader';
export default function SellerViewstate(){
  const navigation = useNavigation();
      const [State, setState] = useState([
        {no: '',  name: '' ,key:'1'},
        {no: '1',  name: 'Andaman and Nicobar Island'  ,key:'2'},
        {no: '2',  name: 'Andhra Pradesh'  ,key:'3'},
        {no: '3',  name: 'Arunachal pradesh'  ,key:'4'},
        {no: '4',  name: 'Assam' ,key:'5'},
        {no: '5',  name: 'Bihar'  ,key:'6'},
        {no: '6',  name: 'Chandigarh'  ,key:'7'},
        {no: '7',  name: 'Chhattisgarh'  ,key:'8'},
        {no: '8',  name: 'Dadra and Nagar Haveli'  ,key:'9'},
        {no: '9',  name: 'Daman and Diu'  ,key:'10'},
        {no: '10',  name: 'Delhi'  ,key:'11'},
        {no: '11',  name: 'Goa'  ,key:'12'},
        {no: '12',  name: 'Gujart'  ,key:'13'},
        {no: '13',  name: 'Haryana'  ,key:'14'},
        {no: '14',  name: 'Himachal Pradesh'  ,key:'15'},
        {no: '15',  name: 'Jammu and Kashmir'  ,key:'16'},
        {no: '16',  name: 'Jharkhand'  ,key:'17'},
        {no: '17',  name: 'Karnataka'  ,key:'18'},

        {no: '18',  name: 'Kerala'  ,key:'19'},
        {no: '19',  name: 'Lakshadweep'  ,key:'20'},
        {no: '20',  name: 'Ladakh'  ,key:'21'},
        {no: '21',  name: 'Madhya Pradesh'  ,key:'22'},
        {no: '22',  name: 'Maharashtra'  ,key:'23'},
        {no: '23',  name: 'Manipur'  ,key:'24'},
      ]);
        return(
            <View style={styles.MainView}>
                {/* AppBar */}

                <Header text="Properties Over State"/>

{/* body */}
  <ScrollView>
       <View style={styles.containerView}>
                  <View style={{backgroundColor:colors.buttonColor,width:'90%',flexDirection:'row',position:'absolute',top:10,marginLeft:6,marginRight:16,padding:5}}>
                    <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',left:5}}>#</Text>
                    <Text style={{marginHorizontal:25,color:'#fff',fontWeight:'bold'}}>State</Text>
                  </View>
                  
                  {State.map((item)=>{
                   return (
                      <View key={item.key}>
                          <View style={styles.RowView}>
                            <Text style={styles.StateList}>  
                              {item.no}
                            </Text>
                            <Text style={styles.StateList}>  
                              {item.name}
                            </Text>
                       </View>
                     </View>
                      
                   )
                  })}
                    
                <Image  style={styles.imgStyle} source={require('../../Assets/modal/Building.png')}/> 

                  </View>
              
                </ScrollView>
            </View>
        );
    }
  const styles = StyleSheet.create({
    MainView:{
      flex:1,
      backgroundColor:colors.background
    },
    //header
    header: {
      backgroundColor:colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      height:50,
      marginTop:20
    },
    titleBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20,
    },
    headerText: {
      fontSize: 20,
      fontWeight:'bold',
      color:colors.buttonColor,
      alignSelf: 'center',
      marginHorizontal:50
    }, 
  icon:{
      color:colors.buttonColor,
     
  },
  
containerView:{
     margin:15,
      backgroundColor:colors.background,
      fontWeight:'bold',
      elevation:2,
      borderRadius:10,
      
    },
 RowView:{
      flexDirection:'row'
    },

StateList:{
      margin:10,
      borderRadius:10,
      color:colors.buttonColor,
      marginLeft:16
      
    },
mapview:{
  flexDirection:'row',
  height:290,
  width:350,
  justifyContent:'center'
},

imgStyle:{
  marginTop:15,
  height:250,
  width:280
},
   
  
});