import React, { Component } from 'react';
import colors from '../config/colors';
import { View, Text, Picker, StyleSheet } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';


class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         // <View style={styles.RowView1}>     
         //    <Picker 
         //    selectedValue = {this.state.user} onValueChange = {this.updateUser}        
         //    style={{ height: 100, width: 150 }} >
         //       <Picker.Item label = "ALL STATE"  color='colors.secondary' />
         //       <Picker.Item label = "Kerala" value = "Kerala" />
         //       <Picker.Item label = "Tamil Nadu" value = "Tamil Nadu" />    
         //       <Picker.Item label = "Andhra Pradesh"  />
         //       <Picker.Item label = "Madhya Pradesh"  />
         //    </Picker>
         //    <Text style = {styles.text}>{this.state.user}</Text>

         //    <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}      
         //      style={{ height: 100, width: 150 }}>
         //       <Picker.Item label = "ALL DISTRICT"  color="blue"  value = "" />
         //       <Picker.Item label = "Pathanamthitta"  />
         //       <Picker.Item label = "Kottayam"  />
         //       <Picker.Item label = "Kollam"  />
         //       <Picker.Item label = "Idukki"  />
         //       <Picker.Item label = "Thiruvananthapuram"  />    
         //       <Picker.Item label = "Alappuzha"  />
              
         //    </Picker>
         //    {/* <Text style = {styles.text}>{this.state.user}</Text> */}


            



               
         // </View>


         <View>

            <View style={styles.contView}>
            <Text style={styles.textTitle1} >STATE</Text>

            <View style={styles.RowView1}>

            <Picker 
               selectedValue = {this.state.user} onValueChange = {this.updateUser}        
               style={{ height: 50, width: "100%" }} >
               <Picker.Item label = "ALL STATE" value = "ALL STATE" color="#317773" fontWeight='bold'/>
               <Picker.Item label = "Kerala" value = "Kerala" color="#317773"/>
               <Picker.Item label = "Tamil Nadu" value = "Tamil Nadu" color="#317773"/>    
               <Picker.Item label = "Andhra Pradesh" value = "Andhra Pradesh"  color="#317773"/>
               <Picker.Item label = "Madhya Pradesh" value = "Madhya Pradesh"  color="#317773"/>
            </Picker>
            {/* <Text style = {styles.text}>{this.state.user}</Text> */}

         </View >

            </View>


            <View style={styles.contView}>

            <Text style={styles.textTitle1} >DISTRICT</Text>

            <View style={styles.RowView2}>

<Picker style={styles.pickerStyle} 
selectedValue = {this.state.user} onValueChange = {this.updateUser}        
style={{ height: 50, width: "53%" , }} >
   <Picker.Item label = "ALL DISTRICT" value = "ALL DISTRICT"  color="#317773" fontWeight="bold" />
   <Picker.Item label = "Pathanamthitta" value = "Pathanamthitta" color="#317773" />
   <Picker.Item label = "Kottayam" value = "Kottayam"  color="#317773"/>
   <Picker.Item label = "Kollam" value = "Kollam" color="#317773"  />
   <Picker.Item label = "Idukki" value = "Idukki" color="#317773" />
   <Picker.Item label = "Thiruvananthapuram" value = "Thiruvananthapuram"  color="#317773"/>    
   <Picker.Item label = "Alappuzha" value = "Alappuzha" color="#317773" />
   </Picker>
{/* <Text style = {styles.text}>{this.state.user}</Text> */}

<View
style={{
width: 20
}}
/>

<View style={styles.RowView2}><Picker 
      selectedValue = {this.state.user} onValueChange = {this.updateUser}        
      style={{ height: 50, width: 100 }} >
         <Picker.Item label = "CITY"  color="#317773"value = "CITY" fontWeight= 'bold'/>
         <Picker.Item label = "Pathanamthitta" value = "Pathanamthitta" color="#317773" />
         <Picker.Item label = "Kottayam" value = "Kottayam" color="#317773"/>
         <Picker.Item label = "Kollam" value = "Kollam" color="#317773" />
         <Picker.Item label = "Idukki" value = "Idukki"  color="#317773"/>
         <Picker.Item label = "Thiruvananthapuram" value = "Thiruvananthapuram" color="#317773" />    
         <Picker.Item label = "Alappuzha" value = "Alappuzha" color="#317773"/>
         </Picker>
      {/* <Text style = {styles.text}>{this.state.user}</Text> */}

      </View>
</View>

            </View>

            

           
          </View>




      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',   
      color: colors.secondary,
   },

   RowView1:{
      flexDirection:'column',
     //margin: '8%',
     paddingLeft:'8%',
     
     // color: colors.secondary,
     // alignItems: 'center'
    },

    RowView2:{
      flexDirection:'row',
     //margin: '8%',
     paddingLeft:'8%',
   
     // color: colors.secondary,
     // alignItems: 'center'
    },

    textTitle1:{
      paddingLeft:'10%',
      fontSize:18,
      color: colors.secondary,
      fontWeight: 'bold',
      },

   pickerStyle:{
     color: colors.secondary,fontWeight: 'bold',
      },

   contView:{
         backgroundColor:colors.background,
         borderRadius:10,
         margin:8,
         padding:8
      }

})