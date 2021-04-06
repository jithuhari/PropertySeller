import React, {useState} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity,Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import IconTile from '../Components/Icon_Tile';
import EvilIons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Residential from '../Screens/ModalButtons/Residential';
import Commersial from '../Screens/ModalButtons/Commersial';
import Industial from '../Screens/ModalButtons/Industrial';
import Agricultural from '../Screens/ModalButtons/Agricultural';
import Viewstate from '../Screens/ModalButtons/Viewstate';
import Viewbanks from '../Screens/ModalButtons/Bank';
import FAQ from '../Screens/ModalButtons/FAQ';
import Suggestion from '../Screens/ModalButtons/suggestion';
import About from '../Screens/ModalButtons/about';
const BoxContainer =({data,title,subtitle}) => 
{

  const navigation = useNavigation();

  const [modalOpen,setModalOpen]=useState(false);
  const [modalOpenGuid,setModalOpenGuid]=useState(false);
  const [modalOpenDis,setModalOpenDis]=useState(false);
  const [modalOpenAbout,setModalOpenAbout]=useState(false);
  const [modalOpensug,setModalOpensug]=useState(false);
  const [modalOpenFaq,setModalOpenFaq]=useState(false);
  const [modalOpenBank,setModalOpenBank]=useState(false);
  const [modalOpenState,setModalOpenState]=useState(false);
  const [modalOpenAgri,setModalOpenAgri]=useState(false);
  const [modalOpenInd,setModalOpenInd]=useState(false);
  const [modalOpenCom,setModalOpenCom]=useState(false);
  const [modalOpenRes,setModalOpenRes]=useState(false);

  const Width = Dimensions.get("window").width;
  const Height = Dimensions.get("window").height * 0.25;
  const Images = [
     require('../Assets/viewProperty/p2.jpg'),
     require('../Assets/viewProperty/p1.jpg'),
     require('../Assets/viewProperty/p3.jpg'),
     require('../Assets/viewProperty/p4.jpg'),
    ];

  // const pressHandlerPropDetails = ()=> {
  //   navigation.navigate('PropDetails')
    
  // }

  const pressHandlerAdminHome = ()=> {
    navigation.navigate('AdminHome')
    
  }

  const [modalOpenProp,setModalOpenProp]=useState(false);

  const [color, setColor] = useState(false);

  

  const FavouriteIcon = () => {
    setColor(!color);
  };

  
 
return (
   <View style={styles.mainContainer}>

       {/* property Modal */}


       <Modal isVisible={modalOpenProp} style={{margin:0}}>
       <View style={styles.mainContainer}>
            <ScrollView>
             {/* header */}
             <View style={styles.headerContainer}>
             <TouchableOpacity   onPress={()=>setModalOpenProp(false) } >
                  <FontAwesome name="angle-left" size={30} color={Colors.secondary}/></TouchableOpacity>

                            {/* <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Home</Text>
                                  
                                </View>
                        
                            </View> */}
                            <TouchableOpacity onPress={()=>setModalOpen(true)}>
                                <AntDesign style={styles.optionButton} name="menuunfold" 
                                size={25} color={Colors.secondary}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.propertyText}>PropertyID : BR099857</Text>
                            
                                 {/* Imageslider starts   */}

                <View style={{alignSelf:'center', height: Height,position:'relative',}}>
                <SliderBox 
                    images={Images}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFF"
                    inactiveDotColor="#90A4AE"
                    autoplay
                    circleLoop
                   
                      ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}/>
              </View>

                     <View style={styles.containerInner}>
                     <Text style={styles.innerText}>State : ANDRA PRADESH</Text>
                        <Text  style={styles.innerText}>District : GUNTUR</Text>
                        <Text  style={styles.innerText}>City : guntur</Text>

                        <Divider style={{ width: '70%',margin:10,color:Colors.background}} />
                    
                        <Text style={styles.propdetails}>Address : UnsurveyedGunturDNo1137,1138 Resurvey DNo1137 BY 1B
                             vacant site Plot No.14,24 extent of 400 sq.yds Nearest Airport/ 
                             Railway/ Bus Stand: guntur</Text>
                             <Text style={styles.propdetails}>Property Type: RESIDENTIAL</Text>
                             <Text style={styles.propdetails}>Property Sub Type: PLOT RESIDENTIAL</Text>
                             <Text style={styles.propdetails}>Type of Title Deed: REGISTERED SALE DEED </Text>
                             <Text style={styles.propdetails}>Status of Possession: SARFAESI PHYSICAL </Text>
                             <Text style={styles.propdetails}>Borrower's Name: M BY S Pavan Cotton Traders</Text>
                             <Text style={styles.propdetails}>Owner's Name: Sri Gude Kotaiah</Text>
                             <Text style={styles.propdetails}>Ownership Type: FREEHOLD</Text>
                             <Text style={styles.propdetails}>Summary Description: vaccant land</Text>

                             <Divider style={{ width: '70%',margin:10,color:Colors.background}} />
                            
                        <Text style={styles.propdetails}>Bank Name: BANK OF BARODA</Text>
                        <Text style={styles.propdetails}>Branch Name: GUNTUR BRANCH </Text>
                        <Text style={styles.propdetails}>Reserve Price Rs: 2880000</Text>
                        </View>
                    
                    <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:16}}>Auction Open Date :</Text>
                        <Text style={{fontSize:16}}>10/Feb/2021 02:00:00 PM</Text>
                        </View>
                        <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:16}}>Auction Close Date :</Text>
                        <Text style={{fontSize:16}}>10/Feb/2021 06:00:00 PM</Text>
                    </View>

                    <View style={{padding:30,flexDirection:'row',justifyContent:'space-between',}}>
                    <TouchableOpacity style={styles.bannerButton}>
                    <Text style={styles.bannerButtonText} >CONTACT ME</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.bannerButton1}>
                    <Text style={styles.bannerButtonText1} >BID</Text>
                    </TouchableOpacity> 
                    </View>
                    <Text style={{color:'#AA0000',textAlign:'center',bottom:30}}> Bidding URL becomes active on the day of auction</Text>
               
                    </View>

                    </ScrollView>
                    </View>
               </Modal>


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
                    <AntDesign onPress={() => setModalOpen(false)} style={styles.optionButton} name="menuunfold" size={25} color={Colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:80}} onPress={() => setModalOpen(false)} >
                  <AntDesign name="right" size={20} color={Colors.secondary}/></TouchableOpacity>
            </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    
                    <TouchableOpacity onPress={pressHandlerAdminHome}>
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


                 {/* disclamer modal */}
                

            
                 <Modal
                      isVisible={modalOpenDis}
                      backdropOpacity={0.1}>

                    <View style={{height:'100%',
                    opacity:0.8,borderRadius:14,
                    backgroundColor: Colors.background,paddingHorizontal:0,}}>
                    <TouchableOpacity style={{alignItems:'flex-end',top:10,right:10}}>
                            <EvilIons
                               onPress={() => setModalOpenDis(false)} 
                               name="close"
                               size={25}
                               flexDirection='row'
                               alignItems='flex-end'
                               color={Colors.buttonColor}
                             
                         
                
                              />
                        </TouchableOpacity>
                       <Text style={{textAlign:'center',
                       fontSize:20,fontWeight:'bold',color:Colors.secondary,flexDirection:'row',
                       paddingBottom:10}}>
                           Disclaimer
                           </Text>
                        
                        <Text style={{color:Colors.secondary,paddingHorizontal:10}}>
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
                    backgroundColor: Colors.background,paddingHorizontal:0,}}>
                    <TouchableOpacity style={{alignItems:'flex-end',top:10,right:10}}>
                            <EvilIons
                               onPress={() => setModalOpenGuid(false)} 
                               name="close"
                               size={25}
                               flexDirection='row'
                               alignItems='flex-end'
                               color={Colors.buttonColor}
                
                              />
                        </TouchableOpacity>
                        <Text style={{padding:18,
                            fontSize:18,
                            fontWeight:'bold',
                            color:Colors.secondary,
                            flexDirection:'row'}}>Guidlines for e-Aution Platform</Text>
                        
                        <Text style={{padding:10,color:Colors.secondary,fontWeight:'bold'}}>Bidder has to complete following fomalities well in advane:</Text>
                        <Text style={styles.styletext1}>Step 1 : Bidder/Purchaser Registration : Bidder to register on e-Auction Platform using his mobile number and email-id Tutorial Video</Text>


                        <Text style={styles.styletext1}>Step 2 : KYC Verification: Bidder to upload requisite KYC documents. KYC documents shall be verified by e-auction service provider (may take 2 working days).</Text>

                         <Text style={styles.styletext1}>Step 3 : Transfer of EMD amount to Bidder Global EMD Wallet : Online/off-line transfer of fund using NEFT/Transfer, using challan generated on e-Auction Platform. Tutorial Video</Text>

                         <Text style={styles.styletext1}>Step 4 : Bidding Process and Auction Results: Interested Registered bidders can bid online on e-Auction Platform after completing Step 1,2 and 3. </Text>

                         <TouchableOpacity ><Text style={styles.stylelink}>Tutorial Video</Text></TouchableOpacity>
                    </View>

                </Modal>







     <TouchableOpacity onPress={()=> setModalOpenProp(true)}>
  <View style={styles.boxContainer}>
      <Image style={styles.imgContainer} source={data}/>
      <View style={styles.textContainer}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.iconImg} onPress={() => FavouriteIcon()}>
      <AntDesign
          name={color ? 'heart' : 'hearto'}
          size={20}
          color="#e30707"
          />
    
      </TouchableOpacity>
    </View>
  </View>
  </TouchableOpacity>
  </View>
    );

};

const styles = StyleSheet.create({
    mainContainer:{
    padding:10,
    },
    boxContainer:{
      width:160,
      height:180,
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:Colors.background,
      borderRadius:20,
    },
    imgContainer:{
     marginTop:50,
      width:130,
      height:100,
      borderRadius:10,
     },
     textContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
     },
    text:{
      justifyContent:'space-between',
      padding:20,
      color:'black',
      fontWeight:'bold',
      right:15,
      bottom:15
     },
     subText:{
      bottom:35,
      left:10,
      fontWeight:'bold'
     },
     iconImg:{
       bottom:15
     },
     mainContainer:{

      backgroundColor:Colors.background,
      height:'100%',
     
  },
  headerContainer: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor:Colors.background,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15
  },
  headerHeading: {
      fontSize: 20,
      color:Colors.secondary,
      fontWeight: 'bold',
      paddingLeft:30
  },
  
   optionButton: {
      paddingRight: 20,
      paddingLeft: 20,
       paddingVertical: 20,
    
   },
  nameContainer: {
      marginLeft: 20
  },
  innerContainer: {
      flexDirection: 'row',
      marginHorizontal: 2,
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginHorizontal: 10,
      width: '70%',
      alignItems: 'center'
  },
  propertyText:{
      color:Colors.secondary,
      fontSize:18,
      fontWeight:'bold',
      padding:20,
     
  },
  container:{
      backgroundColor:'#A6C1BD',
      height:'100%',
      borderRadius:30,
      },
      containerInner:{
          backgroundColor:'#D3E1DD' ,
         padding:20,
         width:'95%',
         alignSelf:'center'
         
      },
      innerText:{
          color:Colors.secondary,
          fontSize:18,
          
      },
      propdetails:{
          fontSize:16,
          color:Colors.secondary,
      },
      bannerButton:{
          backgroundColor:'#D3E1DD',
          
          width:'40%',
          height: 30,
          borderRadius: 5,
           elevation: 2,
          justifyContent: 'center',
          alignItems: 'center',
          bottom:20,
          
          
      },
      bannerButtonText:{
          color:Colors.secondary,
          fontWeight:'bold'
      },

      bannerButton1:{
          backgroundColor:Colors.buttonColor,
          width:'40%',
          height: 30,
          borderRadius: 5,
           elevation: 2,
          justifyContent: 'center',
          alignItems: 'center',
          bottom:20,
          
          
      },
      bannerButtonText1:{
          color:'#fff',
          fontWeight:'bold'
          
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
     scroll:{
      marginTop:-6,
      marginRight:-6
  },
  styletext:{
    color: Colors.secondary,
     padding:10,
    lineHeight:18,
    textAlign:'justify'
    
},
styletext1:{
    color: Colors.secondary,
    lineHeight:18,
    padding:10
   
    
},
stylelink:{
    color: '#1e90ff',
    padding:20,
    lineHeight:18,
},


});


export default BoxContainer;