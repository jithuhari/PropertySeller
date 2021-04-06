import React, {useState} from 'react';
import colors from '../config/colors';
import {StyleSheet, View, Text,TouchableOpacity,Switch,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconTile from '../Components/Icon_Tile';
import Modal from 'react-native-modal';
import EvilIons from 'react-native-vector-icons/EvilIcons';
import Residential from '../Screens/ModalButtons/Residential';
import Commersial from '../Screens/ModalButtons/Commersial';
import Industial from '../Screens/ModalButtons/Industrial';
import Agricultural from '../Screens/ModalButtons/Agricultural';
import Viewstate from '../Screens/ModalButtons/Viewstate';
import Viewbanks from '../Screens/ModalButtons/Bank';
import FAQ from '../Screens/ModalButtons/FAQ';
import Suggestion from '../Screens/ModalButtons/suggestion';
import About from '../Screens/ModalButtons/about';
import AdminHome from '../Screens/adminHome';
import Notification from '../Screens/UserModal/Notification';
import ResetPass from '../Screens/UserModal/ResetPassword';
import {useNavigation} from '@react-navigation/native';
export default function Header({text}){

    const navigation = useNavigation();


    // const pressHandlerAbout = ()=> {
    //     navigation.navigate('About')
        
    //   }
      
    //   const pressHandlerAgricultural = ()=> {
    //     navigation.navigate('Agricultural')
        
    //   }
      
    //   const pressHandlerIndustrial = ()=> {
    //     navigation.navigate('Industrial')
        
    //   }

    //   const pressHandlerCommersial = ()=> {
    //     navigation.navigate('Commersial')
        
    //   }

    //   const pressHandlerResidential = ()=> {
    //     navigation.navigate('Residential')
        
    //   }

    //   const pressHandlerViewbanks = ()=> {
    //     navigation.navigate('Viewbanks')
        
    //   }

    //   const pressHandlerFAQ = ()=> {
    //     navigation.navigate('FAQ')
        
    //   }

    //   const pressHandlerGuidlines = ()=> {
    //     navigation.navigate('Guidlines')
        
    //   }

    //   const pressHandlerViewstate = ()=> {
    //     navigation.navigate('Viewstate')
        
    //   }

    //   const pressHandlerDisclaimer = ()=> {
    //     navigation.navigate('Disclaimer')
        
    //   }  

    //   const pressHandlerSuggestiont = ()=> {
    //     navigation.navigate('Suggestion')
        
    //   }

      const pressHandlerAdminHome = ()=> {
        navigation.navigate('AdminHome')
        
      }

      const pressHandlerResetPassword = ()=> {
        navigation.navigate('ResetPassword')
        
      }


    const [modalOpen,setModalOpen]=useState(false);
    const [modalOpenResetPass,setModalOpenResetPass]=useState(false);
    const [modalOpenNotifi,setModalOpenNotifi]=useState(false);
    const [modalOpenHome,setModalOpenHome]=useState(false);
    const [modalOpenAbout,setModalOpenAbout]=useState(false);
    const [modalOpensug,setModalOpensug]=useState(false);
    const [modalOpenFaq,setModalOpenFaq]=useState(false);
    const [modalOpenBank,setModalOpenBank]=useState(false);
    const [modalOpenState,setModalOpenState]=useState(false);
    const [modalOpenAgri,setModalOpenAgri]=useState(false);
    const [modalOpenInd,setModalOpenInd]=useState(false);
    const [modalOpenCom,setModalOpenCom]=useState(false);
    const [modalOpenRes,setModalOpenRes]=useState(false);
    const [modalOpenGuid,setModalOpenGuid]=useState(false);
    const [modalOpenDis,setModalOpenDis]=useState(false);
    const [modalUserOpen,setModalUserOpen]=useState(false);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(

        <View style={styles.header}>

            {/* Menu Modal */}
            
            <Modal
                    isVisible={modalOpen}
                    backdropOpacity={0.3}
                    style={{ margin:10,}}
                    animationIn={'slideInRight'}
                    animationInTiming={800}
                    animationOut={'slideOutRight'}
                    animationOutTiming={800}
                    onBackdropPress={() => setModalOpen(false)}>

                    <ScrollView style={styles.scroll}>
                    <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',bottom:40}}>
                    <TouchableOpacity  style={{right:90}} >
                    <AntDesign onPress={() => setModalOpen(false)} style={styles.optionButton} name="menuunfold" size={25} color={colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:80}} onPress={() => setModalOpen(false)} >
                  <AntDesign name="right" size={20} color={colors.secondary}/></TouchableOpacity>
            </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    
                    <TouchableOpacity onPress={()=> setModalOpenHome(true)}>
                        <IconTile data={require('../Assets/Icons/icon6.jpg')} title="Home"/>
                    </TouchableOpacity>
                    
                   
                    <TouchableOpacity onPress={()=> setModalOpenGuid(true)}>
                        <IconTile data={require('../Assets/Icons/icon5.jpg')} title="Guidelines"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> setModalOpenDis(true)}>
                    <IconTile data={require('../Assets/Icons/icon2.jpg')} title="Disclamer"/>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <TouchableOpacity onPress={()=> setModalOpenRes(true)}>
                        <IconTile data={require('../Assets/Icons/icon9.jpg')} title="Residential property"/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={()=> setModalOpenCom(true)}>
                        <IconTile data={require('../Assets/Icons/icon16.jpg')} title="Commersial property"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setModalOpenInd(true)}>
                        <IconTile data={require('../Assets/Icons/icon6.jpg')} title="Industrial property"/>
                    </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:'row',bottom:30}}>

                    <TouchableOpacity onPress={()=> setModalOpenAgri(true)}>
                        <IconTile data={require('../Assets/Icons/icon14.jpg')} title="Agricultural property"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> setModalOpenState(true)}>
                        <IconTile data={require('../Assets/Icons/icon8.jpg')} title="Property over state"/>
                    </TouchableOpacity>
                   
                   <TouchableOpacity onPress={()=> setModalOpenBank(true)}>
                        <IconTile data={require('../Assets/Icons/icon15.jpg')} title="Participating Banks"/>
                   </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:'row',bottom:20}}>

                    <TouchableOpacity onPress={()=> setModalOpenFaq(true)}>
                        <IconTile data={require('../Assets/Icons/icon3.jpg')} title="FAQS"/>
                    </TouchableOpacity>
                    

                    <TouchableOpacity onPress={()=>setModalOpensug(true)}>
                        <IconTile data={require('../Assets/Icons/icon11.jpg')} title="Suggestions"/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={()=>setModalOpenAbout(true)
                    }>
                    <IconTile data={require('../Assets/Icons/icon13.jpg')} title="About"/>
                    </TouchableOpacity>

                </View>
                </View>
                </View>
                    </ScrollView>

                    
            </Modal>


            {/* User Modal */}
            <Modal
                    isVisible={modalUserOpen}
                    backdropOpacity={0.3}
                    style={{ margin:10,}}
                    animationIn={'slideInLeft'}
                    animationInTiming={800}
                    animationOut={'slideOutLeft'}
                    animationOutTiming={800}
                    onBackdropPress={() => setModalUserOpen(false)}>

            <ScrollView style={styles.scroll1}>

            <View style={styles.centeredView2}>
                    <View style={styles.modalView2}>
                        
                    <View style={{flexDirection:'row',}}>
                    
                    <TouchableOpacity  style={{right:70}} >
                        <AntDesign onPress={ () => setModalUserOpen(false)} style={styles.optionButton} name="left" size={23} color={colors.secondary}/>
                    </TouchableOpacity>

                  <View  style={{justifyContent:'center',alignItems:'center'}}>
                  
                  <Text style={{fontSize:20,color:colors.secondary,fontWeight:'bold',right:40}} >Hi,Jeck</Text>
                    
                 </View>
                  
                </View>

                <View  style={{justifyContent:'center',alignItems:'center'}}>
                  
                  <Text style={{fontSize:20,color:colors.secondary, marginBottom:10}} >Welcome !</Text>
                    
                 </View>
                    

            <View style={styles.drawerContainer}>
               <View style={{justifyContent:'center',alignItems:'center',bottom:25}}>
                   <FontAwesome name="user-circle" size={60} color={colors.secondary}/>
                   </View> 
                   <View style={{justifyContent:'center',alignItems:'center',bottom:18,}}>
                       <Text style={{fontWeight:'bold',color:colors.secondary,fontSize:18}}>Jeck sam</Text>
                       <Text style={{color:colors.secondary,fontSize:14}}>jackh@example.com</Text>
                       <Text style={{color:colors.secondary,fontSize:14}}>Delhi,india</Text>
                   </View>
                </View>


                <View style={styles.drawerContainer1}>
               
                    {/* Notification */}
                   <View style={{
                       padding:13,flexDirection:'row'
                   }}>
                    
                   <View>
                   <FontAwesome name="bell-o" size={19} color={colors.secondary}/>
                   </View>
                   
                   <TouchableOpacity onPress={()=>setModalOpenNotifi(true)}>
                   <View style={{
                       marginLeft:15
                   }}>
                  <Text style={{fontSize:15,color:colors.secondary}}>Notifications</Text>
                  </View>
                    </TouchableOpacity>
                  

                   {/* Switch button */}
                   <View style={{marginLeft:10}}>
                    <Switch
                        trackColor={{ false: " #1F3B3F", true: "#C8D9D4" }}
                        thumbColor={isEnabled ? "#317773" : "#F4F3F4"}
                        ios_backgroundColor="#3E3E3E"
                       onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                   </View>
               
                 
                </View>


                   {/* Reset Password */}

                <TouchableOpacity onPress={()=> setModalOpenResetPass(true)}>
                <View style={{
                       padding:13,flexDirection:'row'
                   }}>

                   <View>
                   <MaterialCommunityIcons name="lock-reset" size={22} color={colors.secondary}/>
                   </View>
                   
                  <View style={{
                       marginLeft:15
                   }}>
                  <Text style={{fontSize:15, color:colors.secondary}}>Reset-Password</Text>
                  </View>


                </View>
                </TouchableOpacity>

                    {/* Logout */}
                <View style={{
                       padding:13,flexDirection:'row'
                   }}>

                   <View>
                   <MaterialIcons name="logout" size={22} color='red'/>
                   </View>
                   
                  <View style={{
                       marginLeft:15
                   }}>
                  <Text style={{fontSize:15,color:'red'}}>Logout</Text>
                  </View>

                </View>

                </View>

                </View>
                </View>

            </ScrollView>
            
            </Modal>


            {/* disclamer modal */}
                

            
                <Modal
                      isVisible={modalOpenDis}
                      backdropOpacity={0.1}>

                    <View style={{height:'100%',
                    opacity:0.8,borderRadius:14,
                    backgroundColor: colors.background,paddingHorizontal:0,}}>
                    <TouchableOpacity style={{alignItems:'flex-end',top:10,right:10}}>
                            <EvilIons
                               onPress={() => setModalOpenDis(false)} 
                               name="close"
                               size={25}
                               flexDirection='row'
                               alignItems='flex-end'
                               color={colors.buttonColor}
                             
                         
                
                              />
                        </TouchableOpacity>
                       <Text style={{textAlign:'center',
                       fontSize:20,fontWeight:'bold',color:colors.secondary,flexDirection:'row',
                       paddingBottom:10}}>
                           Disclaimer
                           </Text>
                        
                        <Text style={{color:colors.secondary,paddingHorizontal:10}}>
                            Notice to any user of this website.</Text>
                        <Text style={styles.styletext}>
                            IBAPI website makes no warranty, expressed or implied, as to the results obtained 
                            from the use of the information on the website.</Text>


                        <Text style={styles.styletext}>
                            IBAPI shall have no liability for the accuracy of the information and cannot be held 
                            liable for any third-party claims or losses of any damages, the user are advised to 
                            confirm the information by visiting the bank/branch/property concerned.</Text>

                         <Text style={styles.styletext}>
                             The information contained in this web site does not constitute a confirmed offer to 
                             sell or the solicitation of an offer to buy any property or service; and should not be
                              treated as recommendation in connection with any investment decision.</Text>

                         <Text style={styles.styletext}>
                             IBAPI website is not responsible for the contents of any linked site or any link
                              contained in a linked site. The hypertext links provided herein are meant only as a 
                              convenience and the inclusion of any link does not imply endorsement by of the referenced site.</Text>

                         <Text style={styles.styletext}>
                             All trademarks, brand marks and Bank names, logo etc shown on this website, on related
                              websites or other material are protected by the trademark rights/I P Act. Use of Trademark 
                              in stylized or modified form of our logo and product names, without prior permission is strictly 
                              prohibited.</Text>
                    </View>

                </Modal>


                {/* modal guidelines */}

                <Modal
                      isVisible={modalOpenGuid}
                      backdropOpacity={0.1}>

                    <View style={{height:'100%',
                    opacity:0.99,borderRadius:14,
                    backgroundColor: colors.background,paddingHorizontal:0,}}>
                    <TouchableOpacity style={{alignItems:'flex-end',top:10,right:10}}>
                            <EvilIons
                               onPress={() => setModalOpenGuid(false)} 
                               name="close"
                               size={25}
                               flexDirection='row'
                               alignItems='flex-end'
                               color={colors.buttonColor}
                
                              />
                        </TouchableOpacity>
                        <Text style={{padding:18,
                            fontSize:18,
                            fontWeight:'bold',
                            color:colors.secondary,
                            flexDirection:'row'}}>Guidlines for e-Aution Platform</Text>
                        
                        <Text style={{padding:10,color:colors.secondary,fontWeight:'bold'}}>Bidder has to complete following fomalities well in advane:</Text>
                        <Text style={styles.styletext1}>Step 1 : Bidder/Purchaser Registration : Bidder to register on e-Auction Platform using his mobile number and email-id Tutorial Video</Text>


                        <Text style={styles.styletext1}>Step 2 : KYC Verification: Bidder to upload requisite KYC documents. KYC documents shall be verified by e-auction service provider (may take 2 working days).</Text>

                         <Text style={styles.styletext1}>Step 3 : Transfer of EMD amount to Bidder Global EMD Wallet : Online/off-line transfer of fund using NEFT/Transfer, using challan generated on e-Auction Platform. Tutorial Video</Text>

                         <Text style={styles.styletext1}>Step 4 : Bidding Process and Auction Results: Interested Registered bidders can bid online on e-Auction Platform after completing Step 1,2 and 3. </Text>

                         <TouchableOpacity ><Text style={styles.stylelink}>Tutorial Video</Text></TouchableOpacity>
                    </View>

                </Modal>


                {/* Residential Modal */}


                <Modal isVisible={modalOpenRes} style={{margin:0}}>
                    <Residential/>
                </Modal>

                {/* commersial Modal */}

                <Modal isVisible={modalOpenCom} style={{margin:0}}>
                    <Commersial/>
                </Modal>

                {/* Industial Modal */}

                <Modal isVisible={modalOpenInd} style={{margin:0}}>
                    <Industial/>
                </Modal>

                 {/* Agricultural Modal */}

                 <Modal isVisible={modalOpenAgri} style={{margin:0}}>
                    <Agricultural/>
                </Modal>


                {/* Property state Modal */}

                <Modal isVisible={modalOpenState} style={{margin:0}}>
                    <Viewstate/>
                </Modal>

                 {/* Property Bank Modal */}

                 <Modal isVisible={modalOpenBank} style={{margin:0}}>
                    <Viewbanks/>
                </Modal>

                  {/* FAQ Modal */}

                  <Modal isVisible={modalOpenFaq} style={{margin:0}}>
                    <FAQ/>
                </Modal>

                {/* Suggestion Modal */}

                <Modal isVisible={modalOpensug} style={{margin:0}}>
                    <Suggestion/>
                </Modal>

                {/* About Modal */}

                <Modal isVisible={modalOpenAbout} style={{margin:0}}>
                    <About/>
                </Modal>

                {/* Home Modal */}

                <Modal isVisible={modalOpenHome} style={{margin:0,paddingTop:15}}>
                    <AdminHome/>
                </Modal>

                
                {/* Notification Modal */}

                <Modal isVisible={modalOpenNotifi} style={{margin:0}}>
                    <Notification/>
                </Modal>

                 {/* Reset password Modal */}

                 <Modal isVisible={modalOpenResetPass} style={{margin:0}}>
                    <ResetPass/>
                </Modal>

              

             <View><FontAwesome onPress={()=> setModalUserOpen(true)} style={styles.iconItem}  name="user-circle" size ={33}></FontAwesome ></View>
            <View><Text style={styles.title}>{text} </Text></View>
            <View><MaterialIcons onPress={()=> setModalOpen(true)} style={styles.iconItem} name="menu" size ={30}></MaterialIcons></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:55,
        flexDirection:'row',
        paddingTop:10,
        backgroundColor:colors.background,
        justifyContent:'space-between',
        
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        letterSpacing:1,
        color:colors.secondary
       
    },
    iconItem:{
        color:colors.secondary,
        margin:5
    },
    centeredView1: {
        flex: 1,
        alignItems: "flex-end",
        position:'relative',
        justifyContent:'space-between',
        
        
        
      },
      modalView1: {
        backgroundColor:'#97BAB8',
        borderRadius: 10,
        alignItems: "center",
        paddingBottom:'15%',
        padding:20
        
       
      },
      optionButton: {
        paddingRight: 25,
        paddingLeft: 22,
         paddingVertical: 25,
      
     },

     centeredView2: {
        flex: 1,
        alignItems: "baseline",
        position:'relative',
      },
      modalView2: {
        backgroundColor:'#97BAB8',
        borderRadius: 10,
        alignItems: "center",
        paddingBottom:'15%',
      },

      drawerContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 130,
        width:200,
        margin: 17,
        elevation: 10,
    },
    drawerContainer1: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 180,
        width:200,
        margin: 10,
        elevation: 10,
    },
    scroll:{
        marginTop:-6,
        marginRight:-6
    },
    scroll1:{
        marginTop:-6,
        marginLeft:-6
        
    },

    styletext:{
        color: colors.secondary,
         padding:10,
        lineHeight:18,
        textAlign:'justify'
        
    },
    styletext1:{
        color: colors.secondary,
        lineHeight:18,
        padding:10
       
        
    },
    stylelink:{
        color: '#1e90ff',
        padding:20,
        lineHeight:18,
    },
    
    
});