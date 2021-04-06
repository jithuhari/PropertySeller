import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ViewPropertyMain from '../Screens/ViewPropertyMain';
import AdminHome from '../Screens/adminHome';
import ViewSeller from '../Screens/ViewSeller';
import SellerAddProperty from "../Screens/Seller/SellerAddProperty";
import AdminNotification from '../Screens/notification/admin_notification';
import About from '../Screens/ModalButtons/about';
import Disclaimer from '../Screens/ModalButtons/disclaimer';
import Suggestion from '../Screens/ModalButtons/suggestion';
import Guidlines from '../Screens/ModalButtons/guidlines';
import FAQ from '../Screens/ModalButtons/FAQ';
import Viewstate from '../Screens/ModalButtons/Viewstate';
import Viewbanks from '../Screens/ModalButtons/Bank';
import Residential from '../Screens/ModalButtons/Residential';
import Commersial from '../Screens/ModalButtons/Commersial';
import PropDetails from '../Screens/ModalButtons/Prop_details';
import Industrial from '../Screens/ModalButtons/Industrial';
import Agricultural from '../Screens/ModalButtons/Agricultural';
import ResetPassword from '../Screens/UserModal/ResetPassword';
import NotifiTile from '../Components/NotificationTile';


const AdminStack = createStackNavigator();

const AdminHomeStack = () => (
   
        <AdminStack.Navigator headerMode='none'
        initialRouteName="AdminHome">
        <AdminStack.Screen name="AdminHome" component={AdminHome}/>
        <AdminStack.Screen name="ViewSeller" component={ViewSeller}/>
        <AdminStack.Screen name="SellerAddProperty" component={SellerAddProperty}/>
        <AdminStack.Screen name="AdminNotification" component={AdminNotification} />
        <AdminStack.Screen name="About" component={About}/>
        <AdminStack.Screen name="Disclaimer" component={Disclaimer}/>
        <AdminStack.Screen name="Suggestion" component={Suggestion}/>
        <AdminStack.Screen name="Guidlines" component={Guidlines}/>
        <AdminStack.Screen name="FAQ" component={FAQ}/>
        <AdminStack.Screen name="Viewstate" component={Viewstate}/>
        <AdminStack.Screen name="Viewbanks" component={Viewbanks}/>
        <AdminStack.Screen name="Residential" component={Residential}/>
        <AdminStack.Screen name="Commersial" component={Commersial}/>
        <AdminStack.Screen name="PropDetails" component={PropDetails}/>
        <AdminStack.Screen name="Industrial" component={Industrial}/>
        <AdminStack.Screen name="Agricultural" component={Agricultural}/>
        <AdminStack.Screen name="ResetPassword" component={ResetPassword}/>
        <AdminStack.Screen name="NotifiTile" component={NotifiTile}/>
        
        
    </AdminStack.Navigator>
   
);

export default AdminHomeStack;