import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import IconTile from '../../Components/Icon_Tile';
import Header from '../../Components/propertyViewHeader';

export default function FAQscreen(){
  const navigation = useNavigation();
  const [drawerVisible, setDrawer] = useState(false)
  const [search, setsearch] = useState ('');
        return(
     
            <View style={styles.MainView}>
                {/* AppBar */}
                
                <View style={styles.headerContainer}>
         <Header text="FAQ"/>
                        
              </View>
              <View style={{flexDirection:'row',height:40,backgroundColor:'white',borderRadius:20,width:'80%',alignSelf:'center'}}>
                <TextInput
                placeholder="Type keyword to find answers"
                onChangeText={(val) => setsearch(val)}
                underlineColorAndroid="transparent"
                style={{textAlign:'left',left:16,width:200}}
                />
                  <AntDesign name="search1" size={20} style={styles.icon}  />
              </View>


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
                    <IconTile data={require('../../assets/icons/icon5.jpg')} title="Guidelines"  onPress={() => navigation.navigate('Guidelines')}/>
                    <IconTile data={require('../../assets/icons/icon2.jpg')} title="Disclaimer" onPress={() => navigation.navigate('Disclaimer')} />
                    <IconTile data={require('../../assets/icons/icon9.jpg')} title="Residential property"  onPress={() => navigation.navigate('Residential')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon16.jpg')} title="Commercial property"  onPress={() => navigation.navigate('Commercial')}  />
                    <IconTile data={require('../../assets/icons/icon6.jpg')} title="Industrial property" onPress={() => navigation.navigate('Industrial')}/>
                    <IconTile data={require('../../assets/icons/icon14.jpg')} title="Agricultural property"  onPress={() => navigation.navigate('Agricultural')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon8.jpg')} title="property over state" onPress={() => navigation.navigate('ViewState')} />
                    <IconTile data={require('../../assets/icons/icon15.jpg')} title="Participating Banks" onPress={() => navigation.navigate('Bank')}/>
                    <IconTile data={require('../../assets/icons/icon3.jpg')} title="FAQ" onPress={() => navigation.navigate('FAQ')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon11.jpg')} title="Suggestions" onPress={() => navigation.navigate('Suggestions')} />
                    <IconTile data={require('../../assets/icons/icon1.jpg')} title="Contact Us"  onPress={() => navigation.navigate('Contactus')}/>
                    <IconTile data={require('../../assets/icons/icon13.jpg')} title="About"  onPress={() => navigation.navigate('About')}/>
                    </View>
                
                </View>
                </View>
            </Modal> */}


{/* body */}    
                <View style={styles.containerView}>
                
                       <Text style={{marginHorizontal:20,fontSize:18,color:colors.buttonColor,fontWeight:'bold'}}>Popular Questions</Text>
      <View style={{marginVertical:20}}>
        <ScrollView>
         
                        <View style={styles.Qview}>
                           <Text style={styles.Qhead}>Q-1 What is the purpose of this Portal?</Text>
                            <Text style={styles.paragraph}>
                                This Portal Provides an enhancece user experience
                                {'\n'}
                                throught seamless single window access to 
                                {'\n'}
                                information by search based on the type and
                                {'\n'}
                                location of property put up for e-aution by indian  
                                {'\n'}
                                banks.The common platform also provides for
                                {'\n'}
                                smooth navigation to the bank e-auction site once

                                {'\n'}
                                a notified  property is selected.Presently 21 banks
                                {'\n'}
                               are onboarded on this portal.The list can be seen
                               {'\n'}on the home page.
                            </Text>
                        </View>
             {/* 2nd box    */}
                        <View style={styles.Qview}>
                           <Text style={styles.Qhead}>Q-2 Does a user reqire registration/login to use
                           {'\n'}
                           the portal?</Text>
                            <Text style={styles.paragraph}>
                               User can directly access the portal without
                                {'\n'}
                               registration/login.
                                
                            </Text>
                        </View>
    
   

{/* 3nd box */}
 <View style={styles.Qview}>
                           <Text style={styles.Qhead}>Q-3 What are the browser specifications for 
                           {'\n'}
                           access, if any?</Text>
                            <Text style={styles.paragraph}>
                            The portal is best viewed in IE 9.0+, Mozilla 
                                {'\n'}
                                Firefox,Google Chrome
                                
                            </Text>
                        </View> 
{/* 4nd box */}
 <View style={styles.Qview}>
                           <Text style={styles.Qhead}>Q-4 What benefits are derived from this portal?
                           </Text>
                            <Text style={styles.paragraph}>
                            Potential bidders can select segmented data 
                                {'\n'}
                                bank-wise and as per location (States and
                                  {'\n'}
                                 Districts) across banks.
                                
                            </Text>
                        </View> 

{/* 5nd box */}
 <View style={styles.Qview}>
                           <Text style={styles.Qhead}>Q-5 What is the meaning of notified property?
                           </Text>
                            <Text style={styles.paragraph}>
                              Notified properties are those which are notified by
                                {'\n'}
                               the banks for auctioning with auction date and
                               {'\n'}
                               time.Apart from notified properties,banks also

                               upload property inffformation which will be up for

                               auction in near future but date and times is  still to

                               be notified
                            </Text>
                        </View>

 
{/* 6nd box */}
 <View style={styles.Qview}>
                           <Text style={styles.Qhead}>Q-6 What comprise property details as
                           {'\n'}
                           provided by the banks?</Text>
                            <Text style={styles.paragraph}>
                               property type,location,number of rooms(in
                                {'\n'}
                               residential property)and type of ownership
                               {'\n'}
                               (freehold,leasehold,cooperative society 
                                {'\n'}
                               and other)and reserve prive range.this will enable
                               {'\n'}
                               bidders to compare similar properties andd  choose
                               {'\n'}
                               properties of interest from the displayed list by
                               {'\n'}
                               clicking to view the banks eauctiondate,reserve
                               {'\n'}
                                price and property address and description.
                                {'\n'}
                                Photographys and videos of properties that have
                                {'\n'}
                                been upload can also be viewed
                                {'\n'}
                               registration
                                
                            </Text>
                        </View> 
 

{/* 7nd box */}
 <View style={styles.Qview}>
                           <Text style={styles.Qhead}>Q-7 What searchable parameters availabel with
                           {'\n'}
                           the user?</Text>
                            <Text style={styles.paragraph}>
                               User can searcch property details State-wise
                                {'\n'}
                               District-wise and bank-wise.
                                
                            </Text>
                        </View>  


                            <View style={{height:100}}>

                            </View>
                    </ScrollView>
                  </View>
                 
          </View>
          {/* container view close */}

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
      paddingLeft: 5,
      width:'100%',
     
    },
    headerText: {
      fontSize: 19,
      fontWeight:'bold',
      color:colors.buttonColor,
   }, 
  icon:{
      color:colors.buttonColor,
      marginVertical:10,
      alignSelf:'flex-end',
      marginLeft:40
      
  },
  containerView:{
    margin:'3%',
      flex:1,
    borderRadius:10,
   backgroundColor:colors.listColor
  },
  Qview:{
 
    width:'95%',
    marginLeft:'3%',
    marginTop:'2%',
    borderRadius:10,
    elevation:2,
     backgroundColor:colors.background,
 },
  Qhead:{
      color:colors.secondary,
      fontWeight:'bold',
      left:16,

  },
  paragraph:{
   marginLeft:16,
   fontSize:12,
   marginTop:5
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
headerContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor:colors.background,
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingLeft: 15
},
  
});