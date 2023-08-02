import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './Pages/Splashscreen';
import SelectType from './Pages/SelectType';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import RegisterScreen from './Pages/RegisterScreen';

const RootStack = createNativeStackNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName='Splashscreen'>
                <RootStack.Screen name='Splashscreen' component={Splashscreen} options={{ headerShown: false }} />
                <RootStack.Screen name='SelectType' component={SelectType} options={{ headerShown: false }} />
                <RootStack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
                <RootStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <RootStack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />

            </RootStack.Navigator>
        </NavigationContainer>
    )
}