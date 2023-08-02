import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './src/component/Register';

import Login from './src/component/Login';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Mobilenumberotpverification from './src/component/Mobilenumber/Component/Mobilenumberotpverification';
import React from 'react';
import Homescreen from './src/component/Homescreen';
import Profilescreen from './src/component/Profilescreen';
import Setting from './src/component/Setting';
import Details from './src/component/Details';
import ImageSilder from './src/component/ImageSilder/ImageSilder';
import Slashscreen from './src/component/Splashscreen';
import ApiCallingLogin from './src/component/Apicalling/ApiCallingLogin';
import ApiCallingRegister from './src/component/Apicalling/ApiCallingRegister';
import CustomSidebarMenu from './src/component/CustomSidebarMenu';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomSidebarMenu}
      screenOptions={{headerTintColor: 'black'}}>
      <Drawer.Screen
        name="Homescreen"
        component={Homescreen}
        screenOptions={{
          headerShown: false,

          headerTintColor: 'black',
        }}
      />

      <Drawer.Screen name="Profilescreen" component={Profilescreen} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}
const Manifestfile = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mobilenumberotpverification">
        <Stack.Screen
          name="Slashscreen"
          component={Slashscreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true}}></Stack.Screen>
        <Stack.Screen
          name="ApiCallingLogin"
          component={ApiCallingLogin}></Stack.Screen>
        <Stack.Screen
          name="Mobilenumberotpverification"
          component={Mobilenumberotpverification}></Stack.Screen>

        <Stack.Screen
          name="ApiCallingRegister"
          component={ApiCallingRegister}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>

        <Stack.Screen name="ImageSilder" component={ImageSilder}></Stack.Screen>

        <Stack.Screen
          name="Homescreen"
          component={DrawerRoutes}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Manifestfile;

// import React from 'react';
// import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function Screen_1() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FF1744',
//       }}>
//       <Text style={styles.TextStyle}> This is Screen 1 ! </Text>
//     </View>
//   );
// }

// function Screen_2() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#33691E',
//       }}>
//       <Text style={styles.TextStyle}> This is Screen 2 ! </Text>
//     </View>
//   );
// }

// function Screen_3() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FF6F00',
//       }}>
//       <Text style={styles.TextStyle}> This is Screen 3 ! </Text>
//     </View>
//   );
// }

// function CustomTabBar(props) {
//   const navigateToFirstScreen = () => {
//     props.navigation.navigate('Screen_1');
//   };

//   const navigateToSecondScreen = () => {
//     props.navigation.navigate('Screen_2');
//   };

//   const navigateToThirdScreen = () => {
//     props.navigation.navigate('Screen_3');
//   };

//   return (
//     <View style={styles.TabBarMainContainer}>
//       <TouchableOpacity
//         onPress={navigateToFirstScreen}
//         activeOpacity={0.6}
//         style={styles.button}>
//         <Text style={styles.TextStyle}> SCREEN 1 </Text>
//       </TouchableOpacity>

//       <View style={{height: 50, backgroundColor: '#fff', width: 2}} />

//       <TouchableOpacity
//         onPress={navigateToSecondScreen}
//         activeOpacity={0.6}
//         style={styles.button}>
//         <Text style={styles.TextStyle}> SCREEN 2 </Text>
//       </TouchableOpacity>

//       <View style={{height: 50, backgroundColor: '#fff', width: 2}} />

//       <TouchableOpacity
//         onPress={navigateToThirdScreen}
//         activeOpacity={0.6}
//         style={styles.button}>
//         <Text style={styles.TextStyle}> SCREEN 3 </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function AllTabs() {
//   return (
//     <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
//       <Tab.Screen name="Screen_1" component={Screen_1} />

//       <Tab.Screen name="Screen_2" component={Screen_2} />

//       <Tab.Screen name="Screen_3" component={Screen_3} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AllTabs />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   TabBarMainContainer: {
//     justifyContent: 'space-around',
//     height: 50,
//     flexDirection: 'row',
//     width: '100%',
//   },

//   button: {
//     height: 50,
//     paddingTop: 5,
//     paddingBottom: 5,
//     backgroundColor: '#00BCD4',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexGrow: 1,
//   },

//   TextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 20,
//   },
// });

// import React from 'react';

// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';

// import 'react-native-gesture-handler';

// import {NavigationContainer} from '@react-navigation/native';

// import {createStackNavigator} from '@react-navigation/stack';

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import Register from './src/component/Register';
// const HamburgerIcon = props => {
//   const toggleDrawer = () => {
//     props.navigationProps.toggleDrawer();
//   };
//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={toggleDrawer}>
//         <Image
//           source={{
//             uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
//           }}
//           style={{width: 25, height: 25, marginLeft: 5}}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };
// const CustomSidebar = props => {
//   const {state, descriptors, navigation} = props;
//   let lastGroupName = '';
//   let newGroup = true;

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <DrawerContentScrollView {...props}>
//         {state.routes.map(route => {
//           const {drawerLabel, activeTintColor, groupName} =
//             descriptors[route.key].options;
//           if (lastGroupName !== groupName) {
//             newGroup = true;
//             lastGroupName = groupName;
//           } else newGroup = false;
//           return (
//             <View>
//               {newGroup ? (
//                 <View style={styles.sectionView}>
//                   <Text key={groupName} style={{marginLeft: 10}}>
//                     {groupName}
//                   </Text>
//                   <View style={styles.separatorLine} />
//                 </View>
//               ) : null}
//               <DrawerItem
//                 key={route.key}
//                 label={({color}) => <Text style={{color}}>{drawerLabel}</Text>}
//                 focused={
//                   state.routes.findIndex(e => e.name === route.name) ===
//                   state.index
//                 }
//                 activeTintColor={activeTintColor}
//                 onPress={() => navigation.navigate(route.name)}
//               />
//             </View>
//           );
//         })}
//       </DrawerContentScrollView>
//     </SafeAreaView>
//   );
// };
// const HomeScreen = () => {
//   return (
//     <SafeAreaView flex={1}>
//       <View style={styles.MainContainer}>
//         <Text
//           style={{fontSize: 25, color: 'black'}}
//           onPress={() => {
//             alert('data');
//             // this.props.navigation.navigate('Register');
//           }}>
//           Home Screen
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const SecondScreen = () => {
//   return (
//     <SafeAreaView flex={1}>
//       <View style={styles.MainContainer}>
//         <Text style={{fontSize: 25, color: 'black'}}> Second Screen </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const ThirdScreen = () => {
//   return (
//     <SafeAreaView flex={1}>
//       <View style={styles.MainContainer}>
//         <Text style={{fontSize: 25, color: 'black'}}> Third Screen </Text>
//       </View>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//   },

//   sectionView: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 12,
//   },
//   separatorLine: {
//     flex: 1,
//     backgroundColor: 'black',
//     height: 1.2,
//     marginLeft: 12,
//     marginRight: 24,
//   },
// });
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// function HomeStack({navigation}) {
//   return (
//     <Stack.Navigator initialRouteName="HomeScreen">
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           title: 'Home Screen',
//           headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
//           headerStyle: {
//             backgroundColor: 'red',
//           },
//           headerTintColor: '#fff',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function SecondStack({navigation}) {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
//         headerStyle: {
//           backgroundColor: 'red',
//         },
//         headerTintColor: '#fff',
//       }}>
//       <Stack.Screen
//         name="SecondScreen"
//         component={SecondScreen}
//         options={{
//           title: 'Second Screen',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function ThirdStack({navigation}) {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerLeft: () => <HamburgerIcon navigationProps={navigation} />,
//         headerStyle: {
//           backgroundColor: '#FF9800',
//         },
//         headerTintColor: '#fff',
//       }}>
//       <Stack.Screen
//         name="ThirdScreen"
//         component={ThirdScreen}
//         options={{
//           title: 'Third Screen',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// const App = () => {
//   return (
//     <NavigationContainer>

//    <Drawer.Navigator drawerContent={props => <CustomSidebar {...props} />}>
//         <Drawer.Screen
//           name="Home"
//           options={{
//             drawerLabel: 'Open Home Screen',
//             groupName: 'Category 1',
//             activeTintColor: '#FF6F00',
//           }}
//           component={HomeScreen}
//         />

//         <Drawer.Screen
//           name="Second"
//           options={{
//             drawerLabel: 'Open Second Screen',
//             groupName: 'Category 1',
//             activeTintColor: '#FF6F00',
//           }}
//           component={SecondScreen}
//         />

//         <Drawer.Screen
//           name="Third"
//           options={{
//             drawerLabel: 'Open Third Screen',
//             groupName: 'Category 2',
//             activeTintColor: '#FF6F00',
//           }}
//           component={ThirdScreen}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;
