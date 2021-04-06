import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import ViewPropertyMain from '../Screens/ViewPropertyMain';

import SellerHome from "../Screens/Seller/SellerHome";
import ViewProperty from '../Screens/ViewProperty';
import PropertymainHeader from '../Components/PropertymainHeader';
import PropertyHeader from '../Components/PropertyHeader';
import AddProperty from '../Screens/Seller/property_add';
import colors from '../config/colors';
import SellerNotification from '../Screens/notification/seller_notification';
import AddNotification from '../Screens/notification/add_notification';

const SellerStack = createStackNavigator();

const SellerHomeStack = () => (
   
        <SellerStack.Navigator headerMode='none'
        initialRouteName="SellerHome">
        <SellerStack.Screen name="SellerHome" component={SellerHome}/>
        <SellerStack.Screen name="AddProperty" component={AddProperty}/>
        <SellerStack.Screen name="SellerNotification" component={SellerNotification} />
        <SellerStack.Screen name="AddNotification" component={AddNotification} />
        <SellerStack.Screen name="ViewPropertyMain" component={ViewPropertyMain} />
        <SellerStack.Screen name="ViewProperty" component={ViewProperty}/>
    </SellerStack.Navigator>
   
);

export default SellerHomeStack;