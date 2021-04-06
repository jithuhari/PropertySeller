import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity,FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
//import Header from '../Components/Header';
import {useNavigation} from '@react-navigation/native';
import Header from '../Components/Header';
import BankHeader from '../Components/headerBank';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FlatButton from '../Components/Buttons';
import AdminNotification from '../Screens/notification/admin_notification'; 
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
      id: "1",
      title: "Notification 1",
      date: "12/02/2021"
  },
  {
      id: "2",
      title: "Notification 2",
      date: "07/02/2021"
  },
  {
      id: "3",
      title: "Notification 3",
      date: "02/02/2021"
  },
  {
      id: "4",
      title: "Notification 4",
      date: "05/02/2021"
  },
  {
      id: "5",
      title: "Notification 5",
      date: "25/04/2021"
  },
]


const AdminHome = () =>

  {


    

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
       

    
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    const Item = ({ item, onPress, style }) => (

        <View style={styles.input}>
            <View>
                <Text style={styles.notfi}>{item.title}</Text>
                <Text style={{ color: "grey" }}>{item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => setDeleteModal(true)}>
                <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color={colors.secondary}
                />
            </TouchableOpacity>
            {/* deleteModal */}
            <Modal
                isVisible={deleteModal}
                
                style={{ margin: 0 }}
                backdropOpacity={0}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setDeleteModal(false)}
                onBackButtonPress={() => setDeleteModal(false)}

            >
                <View style={styles.modal}>
                    <TouchableOpacity>
                        <Text style={{ color: colors.secondary, fontSize: 17 }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>


    );

    const navigation = useNavigation();

    const [modalOpenNotif,setModalOpenNotif]=useState(false);
    const [modalOpenBanks,setModalOpenBanks]=useState(false);
    

    const pressHandlerBank = ()=> {
      navigation.navigate('ViewSeller')
    }
    
      
        return(
          
          <View style={styles.home}>

          {/* <Header/> */}
          
            < Header/>
            <ScrollView>
            <View style={styles.RowView}>
            <View style={styles.mainStyle}>
             
             <Text style={styles.textTitle} >Welcome</Text>
             <Text style={styles.textTitle1} >  ADMIN</Text>
           </View>
             <View><Image style={styles.imgStyle} source={require('../Assets/2.png')}/></View> 
            </View>

            {/* ----Divider---- */}

            <View
            style={{
            borderBottomColor: colors.secondary,
            borderBottomWidth: 1,
             }}
            />

           {/* ADD SELLER VIEW */}
            <View style={styles.RowView}>

              {/* Custom Button */}
              <TouchableOpacity onPress={
                
                ()=> navigation.navigate("SellerAddProperty")
            }>
                <FlatButton text="ADD SELLER"/>  
                </TouchableOpacity>

                <View><Image  style={styles.imgStyle1} source={require('../Assets/3.png')}/></View> 

            </View>


             {/* View SELLER VIEW */}
             <View style={styles.RowView}>

                {/* Custom Button */}
                <TouchableOpacity onPress={
               ()=> setModalOpenBanks(true)
            }>
                  <FlatButton text="VIEW SELLER"/>  

              </TouchableOpacity>

                  <View><Image  style={styles.imgStyle2} source={require('../Assets/1.png')}/></View> 

              </View>

              
             {/* View SELLER VIEW */}
             <View style={styles.RowView}>

              {/* Custom Button */}
              
              <TouchableOpacity onPress={
               ()=> setModalOpenNotif(true)
            }>
               <FlatButton text="Notifications"/>  
            
            </TouchableOpacity>
              <View><Image  style={styles.imgStyle3} source={require('../Assets/4.png')}/></View> 

              </View>

              <View
            style={{
            height:200
             }}
            />
            </ScrollView>
            

            
                 {/* Admin Notification Modal */}

                 <Modal isVisible={modalOpenNotif} style={{margin:0}}>
                 <View style={{ backgroundColor: colors.background, flex: 1 }}>
            {/* header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> setModalOpenNotif(false)}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={colors.secondary} />
                </TouchableOpacity>
                <View style={styles.head}>
                    <Text style={styles.title}>Notifications</Text>
                </View>
            </View>

            {/* body */}

            <View style={styles.card}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}

                />
            </View>

            {/* deleteModal
            <Modal
                isVisible={deleteModal}

                style={{ margin: 0 }}
                backdropOpacity={0}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={() => setDeleteModal(false)}
                onBackButtonPress={() => setDeleteModal(false)}

            >
                <View style={styles.modal}>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.secondary, fontSize: 17 }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </Modal> */}
                </View>
                </Modal>

              {/* Banks Modal */}

              <Modal isVisible={modalOpenBanks} style={{margin:0}}>
              <View style={styles.MainView}>
               
               {/* -----Body---- */}
               < BankHeader text='Banks'/>
               <ScrollView>
               <View style={styles.containerView}>
                 <View style={styles.mapview}>
                 <Image  style={styles.imageStyle5} source={require('../Assets/map.png')}/>
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
          
              </Modal>


          </View>

        );
      }
  

  const styles = StyleSheet.create({
    home:{
       
        
        backgroundColor:colors.background,
        
        
    },
    textTitle:{
      
      fontSize:28,
     
    },
    textTitle1:{
      paddingTop:1,
      fontSize:28,
    },
    mainStyle:{
      margin:'13%',
    },
    imgStyle:{
      marginTop:25,
      height:100,
      width:170
    },
    RowView:{
      flexDirection:'row'
    },
    imgStyle1:{
      marginTop:'30%',
      marginLeft:20,
      height:110,
      width:170
    },
    imgStyle2:{
      marginTop:'30%',
      marginLeft:20,
      height:140,
      width:160
    },
    imgStyle3:{
      marginTop:'30%',
      marginLeft:20,
      height:160,
      width:130
    },
    notfi: {
      color: colors.secondary,
      fontSize: 18
  },
  header: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    elevation: 2,
    flexDirection: 'row'
},
head: {
  width: "80%",


},
title: {
  fontWeight: 'bold',
  fontSize: 18,
  color: colors.secondary,
  alignSelf: 'center'

},
card: {
  width: '95%',
  borderRadius: 10,
  alignItems: 'center',
  alignSelf: 'center',
  padding: 10,
  backgroundColor: colors.card,
  paddingBottom: 20,
  paddingTop:50


},
modal: {
  width: '30%',
  height: 35,
  borderRadius: 3,
  backgroundColor: colors.background,
  padding: 5,
  // alignItems: 'flex-start',
  // justifyContent: 'flex-start',
  position: 'absolute',
  right:30,
  top:120

},
input: {
  width: '79%',
  padding: 5,
  borderRadius: 11,
  //elevation: 1.5,
  // shadowColor: '#000',
  // shadowOffset: { width: 1, height: 1 },
  // shadowOpacity: 0.4,
  // shadowRadius: 3,
  backgroundColor:colors.background,
  height: 75,
  margin: 5,
  marginTop: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
 
},
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
mapview:{
  flexDirection:'row',
  height:290,
  width:350,
  justifyContent:'center'
},

imageStyle5:{
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
BankList:{
  margin:10,
  backgroundColor:colors.listColor,
  borderRadius:10,
  color:colors.secondary,
  fontWeight:'bold'
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

export default AdminHome;