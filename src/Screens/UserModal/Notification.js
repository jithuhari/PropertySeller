
import React,{ useState} from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity,FlatList} from 'react-native';
// import Header from '../Components/PropertymainHeader';
import colors from '../../config/colors';
//import {useNavigation} from '@react-navigation/native';
//import PropertymainHeader from '../../Components/Header';
import Header from '../../Components/notifiHeder';
//import NotificationTitle from '../../Screens/UserModal/NotificationTitle';
import NotificationTile from '../../Components/NotificationTile';
import UserData from '../../Screens/ModalButtons/data';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';


const USERS = new UserData();
const  Notification_item = USERS.Notification;

export default function Notification()
{

  const navigation = useNavigation();


  const [modalOpenTile,setModalOpenTile]=useState(false);

  const renderItem = ({ item }) => (
    <NotificationTile
         heading={item.heading}
          name={item.name}
          subname={item.subname}
          third={item.third}
          onPress={()=> setModalOpenTile(true)}
       />
    );

    return(
      <View style={styles.MainView}>
        
        {/* Header */}
        < Header text='Notifications'/>
        
     
                <View style={styles.containerView}>

                
                <View style={styles.containerView}>
                    <FlatList
                    data={Notification_item}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false} />
                  </View>
               
                </View>

                
                {/* NotifiTile Modal */}

                <Modal isVisible={modalOpenTile} style={{margin:0}}>
                <View style={styles.MainView}>
                {/* AppBar */}
                    <View style={styles.header2}>
                    <TouchableOpacity   onPress={()=> setModalOpenTile(false)} >
                      <AntDesign name="left" size={25} style={styles.icon} />
                      </TouchableOpacity>
              
                    <View style={styles.titleBox}>
                    <Text style={styles.headerText}>Notification title </Text>
                   </View>
                
                    </View>


                    
{/* body */}    
                            <View style={styles.containerViewnotifi}>
                                <View style={{marginVertical:'15%',paddingLeft:10,}}>
                                <Text style={{color:colors.secondary,fontWeight:'600'}}>In this subject we have, of course, the difficulty
                                    {'\n'}
                                    that the quantum mechanical behavior of 
                                    {'\n'}
                                    things is quite strange.Nobody has an everyday 
                                    {'\n'}
                                    experience to lean on to get a rough, intuitive 
                                    {'\n'}
                                    idea of what will happen. So there are two ways of
                                    {'\n'}
                                    presenting the subject: We could either describe
                                    {'\n'}
                                    what can happen in a rather rough physical way, 
                                    {'\n'}
                                    telling you more or less what happens without
                                      {'\n'}
                                    giving the precise laws of everything; or we could, 
                                    {'\n'}
                                    on the other hand, give the precise laws in their 
                                    {'\n'}
                                    abstract form. But,    then   because   of the 
                                    {'\n'}
                                    abstractions, you wouldn’t know what they were 
                                    {'\n'}
                                    all about, physically. The latter method is
                                    {'\n'}
                                    unsatisfactory because it is completely abstract,
                                    {'\n'}
                                    and the first way leaves an uncomfortable feeling 
                                    {'\n'}
                                    because one doesn’t know exactly what is true 
                                    {'\n'}
                                    and what is  false.  We are not  sure how to 
                                    {'\n'}
                                    overcome this difficulty. You will notice, in fact,
                                    {'\n'}
                                     that Chapters 1  and  2  showed this problem. The
                                     {'\n'}
                                      first chapter was relatively precise; but the second 
                                      {'\n'}
                                      chapter was a  rough   description   of   the 
                                      {'\n'}
                                      characteristics of different phenomena. Here, we
                                      {'\n'}
                                       will try to find a happy medium between the two 
                                       {'\n'}
                                       extremes.


                                </Text>
                                </View>

                                </View>








            </View>
                </Modal>


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
    header2: {
      backgroundColor:colors.background,
      flexDirection: 'row',
     alignItems: 'center',
      top:20
    },
    titleBox: {
      width: '100%',
      justifyContent: 'space-between',
      paddingLeft: 20,
      flexDirection: 'row',
      alignSelf:'center',
      
      },
  headerText: {
        fontSize: 20,
        fontWeight:'bold',
        color:colors.secondary,
      paddingLeft:100
       
      },
      containerViewnotifi:{
        margin:'3%',
        height:'98%',
        backgroundColor:colors.MapContainerColor,
        borderRadius:10,
        marginTop:50,
        alignItems:'center'
      },
      icon:{
        color:colors.secondary,
        left:20
      },
  
});
