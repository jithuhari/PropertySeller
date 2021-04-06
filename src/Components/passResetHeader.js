import React, {useState} from 'react';
import colors from '../config/colors';
import {StyleSheet, View, Text,TouchableOpacity,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import IconTile from '../Components/Icon_Tile';
import EvilIons from 'react-native-vector-icons/EvilIcons';
import AdminHome from '../Screens/adminHome';
export default function passResetHeader({text}){

    const navigation = useNavigation();

    const pressHandlerAbout = ()=> {
        navigation.navigate('About')
        
      }


      const pressHandlerAdminHome = ()=> {
        navigation.navigate('AdminHome')
        
      }
      
      const pressHandlerAgricultural = ()=> {
        navigation.navigate('Agricultural')
        
      }
      
      const pressHandlerIndustrial = ()=> {
        navigation.navigate('Industrial')
        
      }

      const pressHandlerCommersial = ()=> {
        navigation.navigate('Commersial')
        
      }

      const pressHandlerResidential = ()=> {
        navigation.navigate('Residential')
        
      }

      const pressHandlerViewbanks = ()=> {
        navigation.navigate('Viewbanks')
        
      }

      const pressHandlerFAQ = ()=> {
        navigation.navigate('FAQ')
        
      }

      const pressHandlerViewstate = ()=> {
        navigation.navigate('Viewstate')
        
      }

    //   const pressHandlerDisclaimer = ()=> {
    //     navigation.navigate('Disclaimer')
        
    //   }  

      const pressHandlerSuggestiont = ()=> {
        navigation.navigate('Suggestion')
        
      }

      const [modalOpen,setModalOpen]=useState(false);
      const [modalOpenGuid,setModalOpenGuid]=useState(false);
      const [modalOpenDis,setModalOpenDis]=useState(false);
      const [modalOpenHome,setModalOpenHome]=useState(false);


    return(
        <View style={styles.RowView}>

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
                    <TouchableOpacity onPress={pressHandlerResidential}>
                        <IconTile data={require('../Assets/Icons/icon9.jpg')} title="Residential property"/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={pressHandlerCommersial}>
                        <IconTile data={require('../Assets/Icons/icon16.jpg')} title="Commersial property"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pressHandlerIndustrial}>
                        <IconTile data={require('../Assets/Icons/icon6.jpg')} title="Industrial property"/>
                    </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:'row',bottom:30}}>

                    <TouchableOpacity onPress={pressHandlerAgricultural}>
                        <IconTile data={require('../Assets/Icons/icon14.jpg')} title="Agricultural property"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={pressHandlerViewstate}>
                        <IconTile data={require('../Assets/Icons/icon8.jpg')} title="Property over state"/>
                    </TouchableOpacity>
                   
                   <TouchableOpacity onPress={pressHandlerViewbanks}>
                        <IconTile data={require('../Assets/Icons/icon15.jpg')} title="Participating Banks"/>
                   </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:'row',bottom:20}}>

                    <TouchableOpacity onPress={pressHandlerFAQ}>
                        <IconTile data={require('../Assets/Icons/icon3.jpg')} title="FAQS"/>
                    </TouchableOpacity>
                    

                    <TouchableOpacity onPress={pressHandlerSuggestiont}>
                        <IconTile data={require('../Assets/Icons/icon11.jpg')} title="Suggestions"/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={pressHandlerAbout
                    }>
                    <IconTile data={require('../Assets/Icons/icon13.jpg')} title="About"/>
                    </TouchableOpacity>

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

                 {/* Home Modal */}

                 <Modal isVisible={modalOpenHome} style={{margin:0,paddingTop:15}}>
                    <AdminHome/>
                </Modal>
            
            <View style={styles.Paddingview}>
                <AntDesign onPress={()=> setModalOpenHome(true)} style={styles.iconItem}  name="left" size ={25}></AntDesign >
            </View>
            
            <View style={styles.header}><Text style={styles.title}>{text} </Text></View>

            <View style={styles.Paddingview}>
                <AntDesign onPress={()=> setModalOpen(true)} style={styles.iconItem}  name="menu-fold" size ={25}></AntDesign >
            </View>
            
                
           
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
       width :'75%',
        height:40,
        flexDirection:'row',
        paddingTop:10,
        backgroundColor:colors.MapContainerColor,
       justifyContent:'center'
        
    },


    title:{
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:1,
        color:colors.secondary
       
    },
    iconItem:{
        color:colors.secondary,
        
        marginRight:10
    },
    RowView:{
        flexDirection:'row'
    },
    Paddingview:{
        paddingTop:10
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
        paddingBottom:'34%',
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
    }
    
});