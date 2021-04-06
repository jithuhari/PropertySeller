import React,{useState} from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconTile from '../../Components/Icon_Tile';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/propertyViewHeader';
const Suggestion = () => {

    const navigation = useNavigation();

    const [modalOpen,setModalOpen]=useState(false);

    const pressHandlerAbout = ()=> {
        navigation.navigate('About')
        
      }

      const pressHandlerDisclaimer = ()=> {
        navigation.navigate('Disclaimer')
        
      }  

      const pressHandlerSuggestiont = ()=> {
        navigation.navigate('Suggestion')
        
      }
    
    return(
        /*main view */
        <View style={styles.page}>


             {/*view for header */}
             <Header text="Suggestion"/>
              {/*view for header end here */}

              {/*inner view */}
            <View>

                <View style={{width: 330,height:600,borderWidth: 1,borderColor: 'white',
                borderRadius: 14,backgroundColor:'#f5f5f5',opacity:0.8}}>
                     <View style={styles.input}>
                         <Text style={styles.Textstyle}>Name</Text>
                         <TextInput style={styles.placeholderstyle}
                            placeholder= "John Smith"
                            
                            placeholderTextColor={colors.secondary}>
                            
                            

                         </TextInput>
                     </View>


                     <View style={styles.input}>
                         <Text style={styles.Textstyle}>Email Address</Text>  
                         <TextInput style={styles.placeholderstyle}
                           
                           placeholder= "jsmith@example.com"
                           placeholderTextColor={colors.secondary}/>

                           
                    </View>


                    <View  style={styles.input}>
                       <Text style={styles.Textstyle}>Mobile Number</Text>
                       <TextInput style={styles.placeholderstyle}
                           
                           placeholder= "1234567898"
                           keyboardType='numeric'
                           placeholderTextColor={colors.secondary}
                            />
                    </View>

                     

                     <View style={styles.inputsug}>
                            <Text style={styles.Textstyle}>Suggestion:</Text>
                            
                              <TextInput style={styles.placeholdersug}
                                 placeholderTextColor={colors.secondary}
                                
                           
                           
                                 placeholder= {"Nulla Lorem mollit cupidatat irure.Laborum maggna\n nulla duis ullamco illum dolor.Voluptate exercitation\n incididunt aliquip deserunt reprehenderit elit"}
                              />
                           
                     </View>



                     
                           <View style={{paddingRight:10,
                            left:50,
                            borderRadius:12,
                            backgroundColor:colors.background,
                            borderWidth:0,
                            margin:15,
                            width:100,
                            height:36,
                            borderColor:colors.secondary,
                            flexDirection:'row',
                            justifyContent:'space-between'}}>
                                 <TouchableOpacity><Text style={{
                                     left:20,
                                     color:colors.secondary,
                                     padding:4,
                                     fontWeight:'bold',
                                     fontSize:18
                                     }}>Reset</Text></TouchableOpacity>
                                
                                 
                                    <View style={{
                                        left:50,
                                        borderRadius:12,
                                        backgroundColor:colors.secondary,
                                        borderWidth:0,
                                        margin:15,
                                        width:120,
                                        height:36,
                                        borderColor:colors.secondary,
                                        bottom:14}}>
                                      <Text style={{color:colors.secondary,
                                        padding:4,
                                        left:29,
                                        fontWeight:'bold',
                                        fontSize:18,
                                        color:'white'}}>Submit</Text>
                                    </View>
                                 
                           </View>
                       
                        
                       <TouchableOpacity>
                           
                       </TouchableOpacity>


                      
                </View>

            </View>
            {/*inner view ends */}

        </View>
        /*main view ends */
    );
};

export default Suggestion
;
const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.background,
        alignItems: "center",
        flex:1,
        padding:20
    },
    input:{
        
        margin:15,
        height:55,
        borderColor:colors.secondary,
        borderRadius:12,
        borderWidth:1,
        backgroundColor: colors.background,
        width:300,
       

    },
    inputsug:{
        
        margin:6,
        height:230,
        borderColor:colors.secondary,
        borderRadius:12,
        borderWidth:1,
        backgroundColor: colors.background,
        width:300,
        left:10,
      
        

    },
    Textstyle:{
        fontWeight:'bold',
        textAlign:'justify',
        color:colors.secondary,
        paddingLeft:14,
        paddingTop:4,
        fontSize:15
        

    },
    placeholderstyle:{
        textAlign:'justify',
        paddingLeft:14,
        paddingTop:1
        


    },
    placeholdersug:{
        textAlign:'justify',
        // paddingLeft:14,
        // paddingTop:1,
        padding:10


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
    modalText:{
        fontSize:22,
        fontWeight:'bold',
        borderBottomWidth:0.5,
        borderColor:'#fff'


    },
    antstyle:{
        alignItems:'flex-end',
        fontWeight:'bold'
    },
});