import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userinfo = {
  name: 'ram',
  lastname: 'patel',
  email: 'kishan@gmail.com',
  mobilenumber: '1234567890',
  password: '123456789',
};
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      mobilenumber: '',
      password: '',
    };
  }
  onsubmit = async () => {
    if (
      this.state.name == 0 ||
      this.state.lastname == 0 ||
      this.state.email.length == 0 ||
      this.state.password == 0
    ) {
      alert('"Warning !');
    } else {
      try {
        var user = {
          name: this.state.name,
          lastname: this.state.lastname,

          email: this.state.email,
          password: this.state.password,
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        alert('Account Created Success');
        console.log(user);
        this.props.navigation.navigate('Homescreen');
      } catch (err) {
        console.warn('AsyncStorageError = ', err);
      }
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Register Form </Text>

        <TextInput
          placeholder="Enter the Name"
          placeholderTextColor="black"
          value={this.state.name}
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({name: text});
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
          placeholder="Enter the lastName"
          placeholderTextColor="black"
          autoCapitalize="none"
          value={this.state.lastname}
          onChangeText={text => {
            this.setState({lastname: text});
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
          placeholder="Enter the Email"
          placeholderTextColor="black"
          value={this.state.email}
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
          placeholder="Enter the Mobile-number"
          placeholderTextColor="black"
          autoCapitalize="none"
          value={this.state.mobilenumber}
          onChangeText={text => {
            this.setState({mobilenumber: text});
          }}
          keyboardType="number-pad"
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
          value={this.state.password}
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
            <Text style={{color: 'white'}}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
