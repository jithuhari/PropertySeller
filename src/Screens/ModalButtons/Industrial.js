import React from 'react';
import {View,Text,FlatList,StatusBar,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../../config/colors'
import UserData from './data';
import BoxContainer from '../../Components/Box_Container';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/propertyViewHeader';

 const Industrial = ({navigation}) => {
    const USERS = new UserData();
    const Frequent_Users = USERS.FrequentUsers;

    const renderItem = ({ item }) => (
        <BoxContainer
            data={item.image}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            onPress={()=>navigation.navigate('Prop_details')}
        />
    );

    return(

        /* Main view starts here */
        
            <View style={{flex:1,backgroundColor:Colors.background}}>
                <StatusBar style={{backgroundColor:Colors.background}}  />
                
                    {/* View for header starts here */}
                   <Header text="Industrial properties"/>
                    {/* View for header ends here */}

                       
                    {/* Content session starts here */}
                    <View style={styles.content}>                   
                        <View style={styles.innercontent}>
                           
                                
                                <FlatList
                                    data={Frequent_Users}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={renderItem}
                                    showsVerticalScrollIndicator={false}
                                    horizontal={false}
                                    numColumns={2}
                                />
                               
                            
                        </View>
                    </View>
                    {/* Content session ends here*/}
                    
            </View>
                
           /* Main view ends here */
    );
 };

 const styles = StyleSheet.create({

    header: {
        justifyContent:"center",
        alignItems:"flex-start",
        paddingTop:70,
        height:'13%',
       
     
     },
     
   content: {
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    height:"84%",
    paddingTop:10
    
   },
 
   innercontent:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    backgroundColor:Colors.Innercolor,
    borderRadius:20
   },
   textstyle: {
    fontWeight:"bold",
    fontSize:20,
    paddingLeft:'10%',
    start:"15%",
    color:Colors.buttonColor
   },
   iconstyle: {
    color:Colors.buttonColor,
    paddingLeft:89
   }
      
   });

 export default Industrial;