import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Inicio from '../pages/Inicio';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

/*function MyTab(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio} />
        </Stack.Navigator>
    ) 
}*/

export default function Router(){
   
        return(
            <NavigationContainer>
                <Stack.Navigator> 
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Inicio" component={Inicio} />
                </Stack.Navigator>  
            </NavigationContainer>
                  
            
        )
    
}

