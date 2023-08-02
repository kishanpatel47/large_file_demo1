import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Value} from 'react-native-reanimated';

// const userinfo = {
//   email: 'kishan@gmail.com',
//   password: '123456789',
// };
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onsubmit = async () => {
    if (this.state.email.length == 0 || this.state.password == 0) {
      alert('"Warning !');
    } else {
      try {
        var user = {
          email: this.state.email,
          password: this.state.password,
        };
        AsyncStorage.getItem('UserData').then(value => {
          console.log('valueXXX', value);
          // console.log('Email =>' + JSON.stringify(user).name);
          let user = JSON.parse(value);
          if (
            user.email === this.state.email &&
            user.password === this.state.password
          ) {
            AsyncStorage.getItem('UserData');

            this.props.navigation.navigate('Homescreen');
          } else {
            alert('Try again');
          }
          // if (value != null) {
          //
          // } else {
          //   alert('invalid');
          // }
        });

        // alert('Account Created Success');
        //
      } catch (err) {
        console.warn(err);
      }
    }
    // if (
    //   userinfo.email === this.state.email &&
    //   userinfo.password === this.state.password
    // ) {
    //   AsyncStorage.setItem('isLoginIn', 'true');
    //   this.props.navigation.navigate('Homescreen');
    //   //   alert('Register  here');
    // } else {
    //   alert('creadtion is unvalid');
    // }
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Register Form </Text>

        <TextInput
          placeholder="Enter the Email"
          placeholderTextColor="black"
          // value={this.state.email}
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({email: text});
          }}
          keyboardType="name-phone-pad"
          style={{
            color: 'black',
            borderWidth: 1,
            width: '80%',
            marginTop: 20,
            paddingLeft: 10,
          }}></TextInput>
        <TextInput
          placeholder="Enter the Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          // value={this.state.password}
          onChangeText={text => {
            this.setState({password: text});
          }}
          keyboardType="password"
          style={{
            color: 'black',
            borderWidth: 1,
            width: '80%',
            marginTop: 20,
            paddingLeft: 10,
          }}></TextInput>
        <TouchableOpacity
          onPress={() => {
            this.onsubmit();
          }}
          style={{width: '80%'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 20,
              padding: 15,
              borderRadius: 30,
              backgroundColor: 'red',
            }}>
            <Text style={{color: 'white'}}>Login here</Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{marginTop: 5, color: 'black'}}
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}>
          Not a register user loginnow
        </Text>
      </View>
    );
  }
}
