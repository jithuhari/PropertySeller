import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import AdminLogin from '../../Screens/login/login_admin';
import LoginSeller from '../../Screens/login/login_seller';
import AdminRegister from '../../Screens/login/AdminRegister';
import Home from '../../Screens/login/home';
import SellerHomeStack from '../../routes/seller_home_stack';
import AdminHomeStack from '../../routes/homeStack';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
   
        <RootStack.Navigator headerMode='none'
        initialRouteName="AdminLogin">
        <RootStack.Screen name="AdminLogin" component={AdminLogin}/>
        <RootStack.Screen name="SellerLogin" component={LoginSeller}/>
        <RootStack.Screen name="AdminRegister" component={AdminRegister}/>
        <RootStack.Screen name="SellerHomeStack" component={SellerHomeStack} />
        <RootStack.Screen name="AdminHomeStack" component={AdminHomeStack} />
    </RootStack.Navigator>
   
);

export default RootStackScreen;