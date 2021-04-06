import React, { useEffect } from 'react';
import { View, ActivityIndicatorm, Platform, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from '../navigation/login_navigation/login_stack';

const Stack = createStackNavigator();

const MainNavigation = ({ navigation }) => {
  return(
<NavigationContainer>
{/* { loginState.userToken !== null ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      ):
          <RootStackScreen />
        } */}
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Logins" component={RootStackScreen}/>
        </Stack.Navigator>
</NavigationContainer>
);
}

export default MainNavigation;