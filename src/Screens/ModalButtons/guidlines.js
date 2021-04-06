import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Colors  from '../../config/colors';
import EvilIons from 'react-native-vector-icons/EvilIcons';

const Guidlines = () => {
    return(
    /*main view */
        <View style={{alignItems:'center'}}>

                <Modal
                      isVisible={true}
                      style={{ margin: 0}}
                      backdropOpacity={0.1}
                      
                     
                      >

                    <View style={{width:320,height:600,opacity:0.8,borderRadius:14,left:25,backgroundColor: Colors.background,padding:8}}>

                        <TouchableOpacity style={{alignItems:'flex-end',top:10,right:10}}>

                            <EvilIons
                               name="close"
                               size={25}
                               flexDirection='row'
                               color={Colors.secondary}
                             
                
                            />

                        </TouchableOpacity>     
                       <Text style={{padding:18,fontSize:18,fontWeight:'bold',color:Colors.secondary,flexDirection:'row'}}>Guidlines for e-Aution Platform</Text>
                        
                        <Text style={{padding:10,color:Colors.secondary,fontWeight:'bold'}}>Bidder has to complete following fomalities well in advane:</Text>
                        <Text style={styles.styletext}>Step 1 : Bidder/Purchaser Registration : Bidder to register on e-Auction Platform using his mobile number and email-id Tutorial Video</Text>


                        <Text style={styles.styletext}>Step 2 : KYC Verification: Bidder to upload requisite KYC documents. KYC documents shall be verified by e-auction service provider (may take 2 working days).</Text>

                         <Text style={styles.styletext}>Step 3 : Transfer of EMD amount to Bidder Global EMD Wallet : Online/off-line transfer of fund using NEFT/Transfer, using challan generated on e-Auction Platform. Tutorial Video</Text>

                         <Text style={styles.styletext}>Step 4 : Bidding Process and Auction Results: Interested Registered bidders can bid online on e-Auction Platform after completing Step 1,2 and 3. </Text>

                           <TouchableOpacity ><Text style={styles.stylelink}>Tutorial Video</Text></TouchableOpacity>

                  

                         
                    </View>

                </Modal>


        </View>
    /*end view */
    );
};

export default Guidlines;
const styles = StyleSheet.create({
    styletext:{
        color: Colors.secondary,
        lineHeight:18,
        padding:10
       
        
    },
    stylelink:{
        color: '#1e90ff',
        padding:20,
        lineHeight:18,
       
        
    }

    
});