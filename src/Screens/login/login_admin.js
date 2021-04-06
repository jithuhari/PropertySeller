import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Colors from '../../config/colors';
import CustomButton from '../../Components/custom_button';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

const AdminLogin = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [data, setData] = useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    // const textInputChange = (email) => {
    //     if (val.length !== 0) {
    //         setData({
    //             ...data,
    //             username: email,
    //             check_textInputChange: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             username: email,
    //             check_textInputChange: false
    //         });
    //     }
    // }

   

   

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

   


    return (
        <View style={{ backgroundColor: Colors.background, height: '100%' }}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: Colors.background, alignItems: 'center', }}>

                    <Text style={styles.seller}>Admin Login</Text>
                    <View style={styles.loginContainer}>
                        <Text style={styles.login}>Login to continue</Text>
                        <Image source={require('../../Assets/login/dpdp.png')} style={styles.image}></Image>

                        <Text style={styles.email}>Email address</Text>

                        <View style={[styles.action, { paddingLeft: 0 }]}>
                            <TextInput style={styles.textField}
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onChangeText={ (text) => setEmail(text)}
                                value={email}
                               
                                ></TextInput>
                        </View>

                        <Text style={styles.email}>Password</Text>

                        <View style={styles.action}>

                            <TextInput style={styles.textField}
                               secureTextEntry={data.secureTextEntry ? true : false}
                               autoCapitalize="none"
                               autoCorrect={false}
                               onChangeText={(pswrd) => setPassword(pswrd)}
                               value={password}
                                
                                ></TextInput>

                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>

                        </View>

                        
                         {/* Button */}
                         <TouchableOpacity  onPress={ ()=>
                        axios.post('http://10.0.2.2:5000/api/admin/login',
                            {
                            email: email,
                            password: password,
                            })
                        .then(function (response) {

                            navigation.navigate("AdminHomeStack");
                        // handle success
                        console.log(response.data);
  
                        })
                        .catch(function (error) {
                        // handle error
                        alert('wrong Email or Password');
                        })
                        .then(function () {
                        })
                        } >
                        <View style={styles.buttonnew}
                        >
                        <Text style = {styles.text}>Login</Text>
                        </View>
                        </TouchableOpacity>    
                        {/* <TouchableOpacity style={styles.button} onPress={() => submitData()}>
                            <Text>LOGIN</Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity onPress={() => navigation.navigate("AdminRegister")}>
                            <Text style={styles.clickHere}>Register</Text>
                        </TouchableOpacity>

                        <Text style={styles.asAdmin}>Login as Seller ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SellerLogin")}>
                            <Text style={styles.clickHere}>Click here</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </View>
    );
}

export default AdminLogin;

const styles = StyleSheet.create({
    seller: {
        color: Colors.secondary,
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 20

    },
    loginContainer: {
        width: '90%',
        // backgroundColor:'#ffff',
        alignItems: 'center',
        borderRadius: 8,
    },
    login: {
        color: Colors.secondary,
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'flex-start',


    },
    textField: {
        height: 39,
        width: '100%',
        // borderBottomWidth: 1,
        // borderBottomColor: 'grey',
        paddingVertical: 7,
        fontSize: 18
    },
    email: {
        color: Colors.secondary,
        alignSelf: 'flex-start',
        paddingVertical: 10
    },
    asAdmin: {
        color: Colors.secondary,
        fontSize: 18
    },
    clickHere: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.secondary,
        elevation: 15,
        marginVertical: 10
    },
    image: {
        alignSelf: 'center',
        marginVertical: 20
    },
    action: {
        flexDirection: 'row',
        paddingBottom: 5,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        width: '100%',
        justifyContent: 'space-around'
    },
    button:{
        width:"90%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.buttonColor,
        height:50,
        borderRadius:8,
        marginVertical:20
    },
    buttonnew:{
        width:200,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.secondary,
        height:50,
        borderRadius:8,
        marginVertical:20
    },
    text:{
        color:'#ffff',
        fontSize:18,
        fontWeight:'700'

    }


});