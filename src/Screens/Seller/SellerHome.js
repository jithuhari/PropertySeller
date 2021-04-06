//------- SELLER HOME---------

import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';
import Sellerheader from '../../Components/SellerHeader';
import AddProperty from '../Seller/SellerAddProperty';
import Modal from 'react-native-modal';
import SellerNotifi from '../../Screens/notification/seller_notification';
import ViewPropertyMain from '../../Screens/ViewPropertyMain';

export default function SellerHome() {

  
  const [modalOpenAddProperty,setModalOpenAddProperty]=useState(false);
  const [modalOpenViewProperty,setModalOpenViewProperty]=useState(false);
  const [modalOpenSellerNotifi,setModalOpenSellerNotifi]=useState(false);

  const pressHandlerAddProperty = () => {
    navigation.navigate('AddProperty')
  };


  const navigation = useNavigation();

  return (

    <View style={styles.home}>

      {/* ----AppBar----*/}
      <Sellerheader text="Hi Joe" />
      {/* ----Body---- */}
      {/* ----ScrollView---- */}
      <ScrollView>
        {/* ADD SELLER VIEW */}
        {/* <View style={styles.imgStyle}> */}
          
              <Image  source={require('../../Assets/SellerHome/sh1.png')} style={styles.imageTop}/>
            
        {/* </View> */}
        {/* ADD & VIEW PROPERTY */}

        <View style={styles.propertyRow}>
          {/* add property */}
          <TouchableOpacity  style={styles.imageBox} onPress={()=> setModalOpenAddProperty(true)}>
          <View>
            <Image source={require('../../Assets/SellerHome/sh2.png')} style={styles.image}/>
            <Text style={styles.text}> ADD PROPERTY</Text>
          </View>
          </TouchableOpacity>
          {/* view property */}
          <TouchableOpacity style={styles.imageBox} onPress={()=> setModalOpenViewProperty(true)}>
          <View >
          <Image source={require('../../Assets/SellerHome/sh3.png')} style={styles.image}/>
            <Text style={styles.text}>VIEW PROPERTY</Text>
          </View>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.RowView}>
          <TouchableOpacity onPress={
            pressHandlerAddProperty
          }>
            <View><Image style={styles.imgStyle2} source={require('../../assets/SellerHome/sh2.png')} /></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ViewPropertyMain")}>
            <View><Image style={styles.imgStyle2} source={require('../../assets/SellerHome/sh3.png')} /></View>
          </TouchableOpacity>
        </View> */}
        {/* ADD & VIEW PROPERTY */}
        {/* <View style={styles.RowView}>
          <View><Text style={styles.textTitle} >ADD PROPERTY</Text></View>
          <View><Text style={styles.textTitle1} >VIEW PROPERTY</Text></View>
        </View> */}

        {/* NOTIFICATION */}
        <View style={styles.RowView}>
          <TouchableOpacity onPress={()=> setModalOpenSellerNotifi(true)}>
          <Image style={styles.imgStyle4} source={require('../../Assets/SellerHome/sh4.png')} />
          </TouchableOpacity>
          <Text style={styles.textTitle} >NOTIFICATIONS</Text>
        </View>
        {/* <View style={styles.RowView}>
          <View><Text style={styles.textTitle2} >NOTIFICATIONS</Text></View>
        </View> */}
        <View
          style={{
            height: 200
          }}
        />
      </ScrollView>


           {/* Add Property Modal */}

           <Modal isVisible={modalOpenAddProperty} style={{margin:0}}>
                    <AddProperty/>
                </Modal>

             {/* View Property Modal */}

             <Modal isVisible={modalOpenViewProperty} style={{margin:0}}>
                    <ViewPropertyMain/>
            </Modal>     

           {/* seller Notification Modal */}

           <Modal isVisible={modalOpenSellerNotifi} style={{margin:0}}>
                    <SellerNotifi/>
                </Modal>

    </View>

  );

}



const styles = StyleSheet.create({
  home: {
    backgroundColor: colors.background,

  },


  textTitle: {
    
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'center',
    color:colors.secondary,
    paddingTop:5

  },
  textTitle1: {
    //paddingTop:1,
    marginLeft: 70,
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'space-around',
  },
  textTitle2: {
    paddingTop: 3,
    marginLeft: 120,
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center'
  },

  mainStyle: {
    padding: '10%',
  },
    imgStyle: {
    alignSelf:'center',
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center'
   

  },

  imgStyle1: {
    
    marginLeft: 5,
    height: 310,
    width: 370
  },
  imgStyle2: {
    marginTop: '10%',
    marginRight: '2%',
    marginLeft: 20,
    height: 145,
    width: 160
  },
  imgStyle3: {
    marginTop: '3%',
    marginRight: '10%',
    marginLeft: 2,
    height: 160,
    width: 160
  },
  imgStyle4: {
    marginTop: '8%',
    marginLeft: 58,
    height: 160,
    width: 250
  },
  propertyRow:{
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    // backgroundColor:'red',
    height:200
  },
  imageBox:{
    width:'50%',
    padding:10,
    // backgroundColor:'blue'

  },
  image:{
    height:150,
    width:150,

  },
  text:{
    alignSelf:'center',
    fontSize:17,
    color:colors.secondary,
    fontWeight:'bold'
  },
  imageTop:{
    height:400,
    width:400,
    alignSelf:'center'
  }


});

