import React, {useState} from 'react';
import { View,Text,StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Colors  from '../../config/colors';
import EvilIons from 'react-native-vector-icons/EvilIcons';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const Disclaimer = () => {

    const navigation = useNavigation();
    
    const [modalOpen,setModalOpen]=useState(true);

    

    return(
   
        <View >
         <ScrollView>
                <Modal
                      isVisible={modalOpen}
                      backdropOpacity={0.1}>

                    <View style={{height:'100%',
                    opacity:0.8,borderRadius:14,
                    backgroundColor: Colors.background,paddingHorizontal:0,}}>
                    <TouchableOpacity style={{alignItems:'flex-end',top:10,right:10}}>
                            <EvilIons
                               onPress={() => setModalOpen(false)} 
                               name="close"
                               size={25}
                               flexDirection='row'
                               alignItems='flex-end'
                               color={Colors.buttonColor}
                               style={{}}
                         
                
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

                </ScrollView>
        </View>
   
    );
};

export default Disclaimer;
const styles = StyleSheet.create({
    styletext:{
        color: Colors.secondary,
         padding:10,
        lineHeight:18,
        textAlign:'justify'
        
    }
});