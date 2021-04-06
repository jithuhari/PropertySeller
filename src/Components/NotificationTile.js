import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import colors from '../config/colors'
import Divider from '../Components/Divider';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const NotifiTile = ({ heading, name, subname, third, onPress }) => {
    return (

        
        <Pressable android_ripple={{ color: 'rgba(0,0,0,0.1)' }} onPress={onPress}>
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
            
                   <View style={styles.circle}>
                   
                   <Foundation name="calendar" size={35} color={colors.secondary} />
                   </View>
              
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between',}}>
                    <View style={styles.leftcontainer}>
                        <Text style={styles.head}>{heading}</Text>
                        <Text style={styles.maintext}>{name}</Text>
                        <Text style={styles.maintext}>{subname}</Text>
                        <Text style={styles.maintext}>{third}  
                                View<SimpleLineIcons name="arrow-right" size={10} color={colors.secondary} />
                        </Text>

                       
                    </View>

                        
                </View>
            </View>
            <Divider/>
        </Pressable>
        

    );
};

const styles = StyleSheet.create({
 

    leftcontainer: {
        padding: 5,
         paddingLeft: 10,
        alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    imageicon: {
        width: 50,
        height: 50,
 },
 circle: {
        
    height: 50,
    width: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
},
    right: {
        color: 'grey',
        alignSelf: 'center',
        marginRight:5

    },
    circle: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        color:'grey'
    },
  
    maintext:{
        color:colors.secondary,
        fontSize:12,
    },
    head:{
        color:colors.secondary,
        fontWeight:'bold'
    }
});

export default NotifiTile;
