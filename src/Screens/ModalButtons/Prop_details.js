import React from "react";
import {View,StyleSheet,TouchableOpacity,Text,Dimensions} from 'react-native';
import Colors from '../../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SliderBox } from "react-native-image-slider-box";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';

const PropDetails = () =>
{
    const navigation = useNavigation();
    const Width = Dimensions.get("window").width;
    const Height = Dimensions.get("window").height * 0.25;
    const Images = [
       require('../../Assets/viewProperty/p2.jpg'),
       require('../../Assets/viewProperty/p1.jpg'),
       require('../../Assets/viewProperty/p3.jpg'),
       require('../../Assets/viewProperty/p4.jpg'),
      ];
    return(
        <View style={styles.mainContainer}>
            <ScrollView>
             {/* header */}
             <View style={styles.headerContainer}>
             <TouchableOpacity   onPress={()=> navigation.goBack(null)} >
                  <FontAwesome name="angle-left" size={30} color={Colors.secondary}/></TouchableOpacity>

                            {/* <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Home</Text>
                                  
                                </View>
                        
                            </View> */}
                            <TouchableOpacity onPress={() => {setModalVisible(true);}}>
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
    );
};

export default PropDetails;

const styles=StyleSheet.create({
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

});