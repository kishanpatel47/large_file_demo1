import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ApiCallingLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onsubmit = () => {
    console.log(
      'Your   email and password  =>  ' +
        '\n' +
        ' Your  Email  id   => ' +
        this.state.email +
        '\n' +
        'Your Password is => ' +
        this.state.password,
    );
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
          Welcome back
        </Text>

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
            this.props.navigation.navigate('ApiCallingRegister');
          }}>
          Not a register user loginnow
        </Text>
      </View>
    );
  }
}
