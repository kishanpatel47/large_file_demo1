import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splashscreen from './Component/Screen/Splashscreen';
import Selecttype from './Component/Screen/Selecttype';
import OtpVerificatipon from './Component/Screen/OtpVerification';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './Component/Screen/Signup';
import Dashbord from './Component/Screen/Dashbord';
import Doctorlist from './Component/Screen/Doctorlist';
import Doctordeaties from './Component/Screen/Doctordeaties';
import {colors} from './Component/Untils/colors';
import App from './Component/Screen/demo';
import Visitclinic from './Component/Screen/Visitclinic';
import Expandablelistview from './Component/Screen/Expandablelistview';
import PatientDeatlies from './Component/Screen/PatientDeatlies';
import TestScreen from './Component/Screen/TestScreen';
import validationform from './Component/Screen/validationform';
import Apicalling from './Component/Screen/Apicalling';
import fetchapicalling from './Component/Screen/fetchapicalling';
import Displaydata from './Component/Screen/Fetchapi/Displaydata';
import Airlineapicalling from './Component/Screen/Expandablelist/Airlineapicalling';

const Stack = createNativeStackNavigator();

const MyNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="fetchapicalling">
        <Stack.Screen
          name="Airlineapicalling"
          component={Airlineapicalling}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="fetchapicalling"
          component={fetchapicalling}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Displaydata"
          component={Displaydata}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Apicalling"
          component={Apicalling}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="validationform"
          component={validationform}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PatientDeatlies"
          component={PatientDeatlies}
          options={{
            headerTitleStyle: {
              fontSize: 16,
            },
            // headerLeft: () => <ActionBarImage />,

            title: 'Patient Detail',
            headerTintColor: colors.Black,
            headerTitleAlign: 'center',
            headerShown: true,
            headerStyle: {backgroundColor: colors.white},
          }}
        />
        <Stack.Screen
          name="Expandablelistview"
          component={Expandablelistview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={App}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="OtpVerificatipon"
          component={OtpVerificatipon}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Doctordeaties"
          component={Doctordeaties}
          options={{
            headerTitleStyle: {
              fontSize: 16,
            },
            // headerLeft: () => <ActionBarImage />,

            title: 'Expert Detail',
            headerTintColor: colors.Black,
            headerTitleAlign: 'center',
            headerShown: true,
            headerStyle: {backgroundColor: colors.white},
          }}
        />

        <Stack.Screen
          name="Selecttype"
          component={Selecttype}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashbord"
          component={Dashbord}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Visitclinic"
          component={Visitclinic}
          options={{
            headerTitleStyle: {
              fontSize: 16,
            },
            title: 'Visit Clinic(Physically)',
            headerTintColor: colors.Black,
            headerTitleAlign: 'center',
            headerShown: true,
            headerStyle: {backgroundColor: colors.white},
          }}
        />
        <Stack.Screen
          name="Doctorlist"
          component={Doctorlist}
          options={{
            headerTitleStyle: {
              fontSize: 16,
            },
            title: 'Expert Consultation',
            headerTintColor: colors.Black,
            headerTitleAlign: 'center',
            headerShown: true,
            headerStyle: {backgroundColor: colors.white},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigator;
