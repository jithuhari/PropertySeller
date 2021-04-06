import React from 'react';
import {View } from 'react-native';
import {Divider} from 'react-native-elements';
import colors from '../config/colors'
const DividerTile = () =>{
    return(
        <View style={{width:'98%',height:10,paddingLeft:20,marginTop:19}}>
            <Divider style={{backgroundColor:colors.secondary,height:1,marginBottom:1, 
       
      }}
            />
        </View>
    );
}

export default DividerTile;