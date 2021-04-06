import React, { useEffect } from 'react';
import {
  Text,
  View,

} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import MainNavigation from './src/navigation/main_navigation';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => SplashScreen.hide());
  return (

    // <NavigationContainer>
    //   <Stack.Navigator headerMode='none'
    //     initialRouteName="LoginSeller">
    //     <Stack.Screen name="LoginSeller" component={LoginSeller} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //  <View style={{flex:1}}>

    //   <Loginscreen/>
    //  </View>

    <MainNavigation/>
  );
};


export default App;
