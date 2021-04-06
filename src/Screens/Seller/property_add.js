import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Picker, ScrollView, TextInput } from 'react-native';
import Colors from '../../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../Components/custom_button';
import {useNavigation} from '@react-navigation/native';


const AddProperty = () => {
    const [type, setType] = useState("PROPERTY TYPE");
    const [branch, setBranch] = useState("BARNCH NAME");
    const [state, setState] = useState("STATE");
    const [district, setDistrict] = useState("DISTRICT");
    const [reserved, setReserved] = useState();
    const [emd, setEmd] = useState();
    const [emdLast, setEmdLast] = useState();
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: Colors.background }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={Colors.secondary} />
                </TouchableOpacity>
                <View style={styles.head}>
                    <Text style={styles.title}>Add Property</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.card}>
                    <View style={styles.input}>
                        <Picker
                            
                            selectedValue={type}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                            
                            style={{ height: 50, width: "100%" }} >
                                <Picker.Item label="Property Type" color="#317773" fontWeight='bold' />
                            <Picker.Item label="Commercial Property" color="#317773"  />
                            <Picker.Item label="Industrial Property" value="Kerala" color="#317773" />
                            <Picker.Item label="Residential Property" value="Tamil Nadu" color="#317773" />
                            <Picker.Item label="Agricultural Property" color="#317773" />
                        </Picker>
                    </View>
                    <View style={styles.input}>
                    <Picker
                            selectedValue={branch}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}
                            
                            style={{ height: 50, width: "100%" }} >
                                <Picker.Item label="Branch Name" color="#317773" fontWeight='bold' />
                            <Picker.Item label="Cochin" color="#317773"  />
                            <Picker.Item label="Chennai" value="Kerala" color="#317773" />
                            <Picker.Item label="Banglore" value="Tamil Nadu" color="#317773" />
                            <Picker.Item label="Hyderabad" color="#317773" />
                        </Picker>
                    </View>
                    <View style={styles.input}>
                    <Picker
                           
                            selectedValue={state}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setState(itemValue)}
                            style={{ height: 50, width: "50%" }} >
                                <Picker.Item label="State" color="#317773"  />
                            <Picker.Item label="Kerala" color="#317773" fontWeight='bold' />
                            <Picker.Item label="TamilNadu" value="Kerala" color="#317773" />
                            <Picker.Item label="Karnataka" value="Tamil Nadu" color="#317773" />
                            <Picker.Item label="AndraPradesh" color="#317773" />
                        </Picker>
                        <Picker
                            
                            selectedValue={district}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setDistrict(itemValue)}
                            style={{ height: 50, width: "50%" }} >
                                <Picker.Item label="District" color="#317773" fontWeight='bold' />
                            <Picker.Item label="Ernakulam" color="#317773"  />
                            <Picker.Item label="Chennai" value="Kerala" color="#317773" />
                            <Picker.Item label="Banglore" value="Tamil Nadu" color="#317773" />
                            <Picker.Item label="Hyderabad" color="#317773" />
                        </Picker>
                    </View>
                    <View style={styles.input}>
                        <Text style={{ color: Colors.secondary, alignSelf: 'center' }}>RESERVED PRICE </Text>
                        <TextInput style={styles.textFiled} 
                        onChangeText={(reserved)=> setReserved(reserved)}
                        value={reserved}/>
                    </View>
                    <View style={styles.input}>
                        <Text style={{ color: Colors.secondary, alignSelf: 'flex-end' }}>EMD RS </Text>
                        <TextInput style={styles.textFiled} 
                        onChangeText={(emd)=> setEmd(emd)}
                        value={emd}/>
                    </View>
                    <View style={styles.input}>
                        <Text style={{ color: Colors.secondary, alignSelf: 'center' }}>EMD LAST DATE </Text>
                        <TextInput style={styles.textFiled} 
                        onChangeText={(emdLast)=> setEmdLast(emdLast)}
                        value={emdLast}/>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-start', padding: 20 }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                            <Text style={{ color: Colors.secondary, alignSelf: 'center' }}>ATTACH FILE </Text>

                            <Entypo name="attachment" size={20} color={Colors.secondary} />

                        </View>
                    </TouchableOpacity>
                    <CustomButton text="ADD" onpress={() => null}></CustomButton>
                </View>
                <View style={{ height: 200 }}></View>
            </ScrollView>
        </View>
    );
}

export default AddProperty;

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
        backgroundColor:Colors.background,
        borderRadius:10,
        width: '95%',
        padding: 10,
        height: 60,
        margin: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        

    },
    textFiled: {
        width: '65%',
        padding: 10,
        borderBottomColor: Colors.secondary,
       
        alignSelf: 'center',
        height:40,
       
    },
    addFile: {
        width: '100%',
        padding: 10,
        borderRadius: 11,
        elevation: 1.5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 2,
        height: 40,
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',


    }
});