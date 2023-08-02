import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Icon,
  ScrollView
} from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const Login = ({navigation}) => {
  const [showpasword, setshowpassword] = useState(false);
  return (
   
    <View style={{alignSelf: 'center'}}>
    <ScrollView scrollEnabled={true}> 
    <View style={{justifyContent: 'center', alignContent: 'center',flex:1,height:'90%'}}>
        <Image
          source={require('./image/first.png')}
          style={{
            alignContent: 'center',
            height: height*0.30,
            width: width*0.25,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            aspectRatio: 1.1,
          }}></Image>
        <Text style={{textAlign: 'center', color: 'black', fontSize: 25}}>
          Login Now
        </Text>
        <Text style={{textAlign: 'center', marginTop: 15}}>
          Please enter the Details below to Continue
        </Text>

        <View
          style={{backgroundColor: '#EBE8E8', marginTop:15, marginHorizontal: 10}}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={{paddingLeft: 10}}></TextInput>
        </View>
        <View
          style={{
            backgroundColor: '#EBE8E8',
           marginTop:25,
             marginHorizontal: 10,
            height: 44,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            textContentType="password"
            secureTextEntry={!showpasword}
            placeholder="password"
            placeholderTextColor="black"
            style={{
              flex: 1,
              paddingHorizontal: 4,
              paddingLeft: 10,
            }}></TextInput>
          <TouchableOpacity onPress={() => setshowpassword(!showpasword)}>
            <Image
              source={
                !showpasword
                  ? require('./image/blind.png')
                  : require('./image/eye.png')
              }
              style={{
                alignSelf: 'flex-end',
                alignItems: 'flex-end',
                alignContent: 'flex-end',
                right: 15,
              }}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: '#FF003E',
          textAlign: 'center',
          height: 20,
          borderRadius: 20,
          bottom: 1,
          marginTop:10,
          alignSelf: 'flex-end',
          right: 15,
        }}>
        {' '}
        Forget Password ?
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#FF003E',
       marginTop:19,
          marginHorizontal: 10,
          justifyContent: 'center',
          borderRadius: 25,
        }}>
        <View
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            height: 50,
            
            justifyContent: 'center',
          }}>
          <Text
            style={{color: 'white', textAlign: 'center', alignSelf: 'center'}}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop:36, marginHorizontal: 80, justifyContent: 'center',bottom:24}}>
        <Text style={{color: 'black', textAlign: 'center'}}>
         Don't have any account! {''}
          <Text style={{color: '#FF003E'}}>Register</Text>
        </Text>
      </View>
      </ScrollView>

      </View>
    );
};
export default Login;
