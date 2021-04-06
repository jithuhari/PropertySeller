import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Picker, ScrollView, TextInput } from 'react-native';
import Colors from '../../config/colors';
import CustomButton from '../../Components/custom_button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import SellerNotificatio from '../notification/seller_notification';
import Modal from 'react-native-modal';
const AddNotification = () => {
    const [modalOpenHome,setModalOpenHome]=useState(false);
    const navigation = useNavigation();
    const [title, setTitle] = useState();
    const [message, setMessage] = useState();
    return(

        <View style={{ backgroundColor: Colors.background, flex:1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> setModalOpenHome(true)}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={Colors.secondary} />
                </TouchableOpacity>
                <View style={styles.head}>
                    <Text style={styles.title}>Add Notification</Text>
                </View>
            </View> 
            <ScrollView>
                <View style={styles.card}>
                    <View style={styles.input}>
                    <Text style={{ color: Colors.secondary, alignSelf: 'center' }}>TITLE </Text>
                    <TextInput style={styles.textFiled} 
                        onChangeText={(title)=> setTitle(title)}
                        value={title}/>
                    </View>
                    <View style={styles.input1}>
                    <Text style={{ color: Colors.secondary, marginTop:25 }}>MESSAGE </Text>
                    <TextInput style={styles.textFiled1} 
                    multiline={true}
                        onChangeText={(message)=> setMessage(message)}
                        value={message}/>
                    </View>
                    <CustomButton text="SAVE" onpress={() => null}></CustomButton>
                </View>
                
            </ScrollView>

              {/* Seller Home */}
              <Modal isVisible={modalOpenHome} style={{margin:0}}>
                    <SellerNotificatio/>
                </Modal>

        </View>
    );
}

export default AddNotification;

const styles = StyleSheet.create({
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
        color: Colors.secondary,
        alignSelf: 'center'

    },
    card: {
        width: '95%',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: Colors.card,
        paddingBottom: 20,
        paddingTop: 50
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 11,
        backgroundColor:Colors.background,
        // elevation: 1.5,
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.4,
        // shadowRadius: 3,
        // elevation: 2,
        height: 50,
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        

    },
    input1: {
        width: '100%',
        padding: 10,
        borderRadius: 11,
        backgroundColor:Colors.background,
        // elevation: 1.5,
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.4,
        // shadowRadius: 3,
        // elevation: 2,
        height:150,
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        

    },
    textFiled: {
        width: '65%',
        padding: 10,
        borderBottomColor: Colors.secondary,
       
        height:40,
       
    },
    textFiled1: {
        width: '65%',
        // padding: 10,
        // borderBottomColor: Colors.secondary,
        // borderBottomWidth: 1,
        height:70,
       
    },
});