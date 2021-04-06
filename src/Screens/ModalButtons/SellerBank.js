import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/Header';
import SellerBankHeader from '../../Components/SellerheaderBank';
import { useNavigation } from '@react-navigation/native';
//import ButtonTile from '../../components/Button_tile';
//import IconTile from '../../components/Icon_Tile';
//import { Container, Content, Form, Item, Picker } from 'native-base';
import Picker from '@react-native-community/picker';
export default function SellerViewbanks(){

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

      const [modalVisible, setModalVisible] = useState(false)
      const [drawerVisible, setDrawer] = useState(false)
      const [Branch, setBranch] = useState()
      const [id, setID] = useState()
      const [selectedValue, setSelectedValue] = useState("");


        return(
            <View style={styles.MainView}>
                {/* AppBar */}
                <SellerBankHeader text="Banks"/>



        {/* modal */}
        {/* <Modal
                    isVisible={drawerVisible}
                    backdropOpacity={0.3}
                    style={{ margin:10,}}
                    animationIn={'fadeInRight'}
                    animationOut={'fadeInRight'}
                    onBackdropPress={() => setDrawer(false)}>

                    <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>

            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',bottom:40}}>
                    <TouchableOpacity  style={{right:90}} >
                    <AntDesign style={styles.optionButton} name="menuunfold" size={25} color={colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:80}} onPress={()=> navigation.goBack(null)} >
                  <AntDesign name="right" size={20} color={colors.secondary}/></TouchableOpacity>
            </View>

                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon5.jpg')} title="Guidelines"/>
                    <IconTile data={require('../../assets/icons/icon2.jpg')} title="Disclaimer"/>
                    <IconTile data={require('../../assets/icons/icon9.jpg')} title="Residential property"/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon16.jpg')} title="Commercial property"/>
                    <IconTile data={require('../../assets/icons/icon6.jpg')} title="Industrial property"/>
                    <IconTile data={require('../../assets/icons/icon14.jpg')} title="Agricultural property"/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon8.jpg')} title="property over state" onPress={() => navigation.navigate('Viewstate')} />
                    <IconTile data={require('../../assets/icons/icon15.jpg')} title="Participating Banks" onPress={() => navigation.navigate('Bank')}/>
                    <IconTile data={require('../../assets/icons/icon3.jpg')} title="FAQ"/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon11.jpg')} title="Suggestions"/>
                    <IconTile data={require('../../assets/icons/icon1.jpg')} title="Contact Us"/>
                    <IconTile data={require('../../assets/icons/icon13.jpg')} title="About"/>
                    
                </View>
                
                </View>
                </View>
            </Modal> */}




                <ScrollView>
                <View style={styles.containerView}>
                  <View style={styles.mapview}>
                  <Image  style={styles.imgStyle} source={require('../../Assets/map.png')}/>
                  </View>
                 
                  <View  style={styles.ViewList} >
                  
                  {Bank.map((item)=>{
                   return (<View key={item.key}>
                       <View style={styles.RowView}>
                       <Text style={styles.BankList}>  
                         {item.no}
                       </Text>
                       <TouchableOpacity
                       onPress={() => setModalVisible(true)}>
                       <Text style={styles.BankList} >  
                         {item.name}
                       </Text>
                       </TouchableOpacity>
                       </View>
                     </View>
                    
                   )
                 })}
                  
                  </View>
                
                  </View>
                
                  </ScrollView>
  {/* BankDetails Modal */}
          <Modal
                isVisible={modalVisible}
                style={{ margin: 0 }}
                backdropOpacity={0.3}
                onBackdropPress={() => setModalVisible(false)}
            >
           <View style={styles.modalContainer}>
              <ScrollView>
                 {/* model screen header */}
                <View style={styles.header2}>
                      <TouchableOpacity   onPress={()=> setModalVisible(false)} style={{position:'absolute',left:20}}>
                      <AntDesign name="left" size={25} style={styles.icon} />
                      </TouchableOpacity>
                    <View style={styles.searchBox}>
                        <Text style={styles.headerText}>SEARCH BANK</Text>
                      </View>
                </View>
            {/* body */}
        
               <View style={{top:25,padding:10,}}>
                 
                 {/* 1st containerView */}
                         <Text style={{margin:10,fontSize:14,color:colors.secondary}}>Bank name</Text>
                <View style={{backgroundColor:colors.listColor,borderRadius:10,elevation:2}}>
                          <View style={styles.display}>
                                  <Text style={styles.Binput}>BRANCH NAME:</Text>
                                  {/* <Picker
                                  selectedValue={selectedValue}
                                  style={{ position:'absolute',left:130,height: 50, width:'50%',color:colors.seconda,}}
                                  
                                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                  <Picker.Item label="Adoor" value="ad" /> 
                                  <Picker.Item label="Alapuzha" value="Alapi" />
                                  <Picker.Item label="Chalakudy" value="chala" />
                                  <Picker.Item label="Idukki" value="iduki" />
                                  <Picker.Item label="Kanjirappally" value="Kanjira" />

                                  <Picker.Item label="Kasaragod" value="kasar" />
                                  <Picker.Item label="Kochi" value="Kochi" />
                                  <Picker.Item label="Kozhikode" value="kozhikode" />
                                  <Picker.Item label="Malappuram" value="malapuram" />
                                  <Picker.Item label="Palakkad" value="pala" />
                                  <Picker.Item label="Payangadi" value="pazhangadi" />
                                  <Picker.Item label="Thrissur" value="Thrissur" />
                                  <Picker.Item label="calicut" value="calicut" />
                                  <Picker.Item label="Ernakulam" value="Ekm" />
                                  <Picker.Item label="Kannur" value="Kannur" />
                                  <Picker.Item label="Kollam" value="lkolamm" />
                                  <Picker.Item label="Ollur" value="oll" />
                                  <Picker.Item label="Trivandrum" value="tvm" />

                                </Picker> */}
                                       
                                        


                                          </View>
                         <View style={{alignSelf:'center'}}>
                         {/* <ButtonTile title ="SEARCH"/> */}
                         </View>

                </View>

            {/* 2nd containerView */}
            <View style={{backgroundColor:colors.listColor,borderRadius:10,elevation:2,marginVertical:25, height:300
            }}>
                  <View style={styles.rowinput}>
                      <Text style={styles.inputtext}>BANK ID:</Text>
                      <Text style={styles.text}>  </Text>
                             
                    </View>
                  {/* second input */}
                  <View style={styles.rowinput}>
                      <Text style={styles.inputtext}>BANK NAME:</Text>
                      <Text style={styles.text}> </Text>
                             
                    </View>
               {/* 3rd input */}
               <View style={styles.rowinput}>
                      <Text style={styles.inputtext}>CITY:</Text>
                      <Text style={styles.text}> </Text>
                    </View>
                {/* 4th input */}
                <View style={styles.rowinput}>
                      <Text style={styles.inputtext}>EMAIL:</Text>
                      <Text style={styles.text}>  </Text>
                    </View>
                  {/* 5th input  */}
                  <View style={styles.rowinput}>
                      <Text style={{ textAlign:'center',top:10,left:10,color:colors.secondary,fontWeight:'700'}}>PROPERTY LIST:</Text>
                      <Text style={styles.text}> </Text>
                  </View>

              </View>

              <View>
              <Image  style={styles.imgStyle} source={require('../../Assets/modal/bank.png')}/>
              </View>


        </View>             
                      
                     
             </ScrollView>
                </View>
            </Modal>

            </View>
        );
    }
  const styles = StyleSheet.create({
    //header
    header: {
      backgroundColor:colors.background,
      flexDirection: 'row',
      alignItems: 'center',
    },
    header2: {
      backgroundColor:colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      top:20
    },
   imLogo:{
      height:40,
      width:40,
      borderRadius: 50,
      marginLeft:16
   },
  circle: {
        width: 40,
        height: 40,
        borderRadius: 100 / 1,
        alignSelf:'center',
        marginVertical:20
      },
  titleBox: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf:'center',
      marginLeft:10
    },
    searchBox: {
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
      alignSelf: 'center',
      marginHorizontal:50
    },
  icon:{
      color:colors.secondary,
    },
// drawer model
centeredView1: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  position:'absolute',
   bottom:120,
  left:30,
  width:'100%',
},
modalView1: {
  backgroundColor:colors.background,
  borderRadius: 10,
  alignItems: "center",
  paddingBottom:100,
  paddingTop:40,
  paddingLeft:30,
 
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
      elevation:3
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
    },

    //model
modalContainer:{
  flex:1,
  alignSelf:'center',
  backgroundColor:colors.background

},
display:{
  height: 50,
  borderColor: colors.secondary, 
  borderWidth: 1, 
  borderRadius: 20, 
  marginBottom: 10, 
  width:'90%',
  flexDirection:'row',
  top:10,
  alignSelf:'center'
},
inputtext:{
  textAlign:'center',
  top:10,left:10,
  color:colors.secondary,
  fontWeight:'500'
},
Binput:{
  textAlign:'center',
  top:10,left:10,
  color:colors.secondary,
  fontWeight:'500',
  marginTop:5
},
// 2nd container customElements
rowinput:{
  height: 40,
  borderColor: colors.secondary, 
  borderWidth: 1, 
  borderRadius: 20, 
  width:'90%',
  flexDirection:'row',
  top:10,
  bottom:20,
  alignSelf:'center',
  marginTop:10
},
text:{
  marginHorizontal:15,
  top:10,
  color:colors.secondary,
  fontWeight:'200'
},

});