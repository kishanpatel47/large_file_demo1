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
            height: 250,
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            aspectRatio: 1.0,
          }}></Image>
        <Text style={{textAlign: 'center', color: 'black', fontSize: 25}}>
          Login Now
        </Text>
        <Text style={{textAlign: 'center', marginTop: 10}}>
          Please enter the Details below to Continue
        </Text>

        <View
          style={{backgroundColor: '#EBE8E8', top: 30, marginHorizontal: 10}}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={{paddingLeft: 10}}></TextInput>
        </View>
        <View
          style={{
            backgroundColor: '#EBE8E8',
            top: 50,
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
          top: 60,
          alignSelf: 'flex-end',
          right: 15,
        }}>
        {' '}
        Forget Password ?
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#FF003E',
          top: 50,
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
            {' '}
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{top: 150, marginHorizontal: 80, justifyContent: 'center'}}>
        <Text style={{color: 'black', textAlign: 'center'}}>
          {' '}
          Don't have any account!{' '}
          <Text style={{color: '#FF003E'}}>Register</Text>
        </Text>
      </View>
      </ScrollView>

      </View>
    );
};
export default Login;
