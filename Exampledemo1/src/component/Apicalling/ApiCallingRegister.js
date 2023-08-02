import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ApiCallingRegister extends Component {
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
  onsubmit = () => {
    if (this.state.name == '') {
      alert('please  Enter  the  name  ');
    } else if (this.state.lastname == '') {
      alert('please enter the last name');
    } else if (this.state.email == '') {
      alert('please  enter the Email');
    } else if (this.state.mobilenumber == '') {
      alert('please  enter the  Mobile-number ');
    } else if (this.state.password == '') {
      alert('please  enter the  Password');
    } else {
      this.ApiCallingRegisterform();
    }
  };
  ApiCallingRegisterform = () => {
    const {name, lastname, email, mobilenumber, password} = this.state;
    let item = {name, lastname, email, mobilenumber, password};
    console.log(JSON.stringify(item, null, 2));
    // fetch('http://localhost:5000/api/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify(item),
    // })
    //   .then(res => res.JSON())
    //   .then(responsejson => {
    //     console.log('Register here ' + responsejson);
    //   });
    fetch('http://localhost:5000/api/signup', {
      method: 'POST',

      body: JSON.stringify(item),
    })
      .then(res => res.JSON())
      .then(responsejson => {
        console.log('Register here ' + responsejson);
      });
    var raw = '';

    var requestOptions = {
      method: 'POST',
      body: raw,
    };
    fetch('http://localhost:5000/api/signup', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log(
      'Your  Register  Form  Data  =>  ' +
        '\n' +
        'Your name  => ' +
        this.state.name +
        '\n' +
        'Your Lastname =>' +
        this.state.lastname +
        '\n' +
        'your Email id => ' +
        this.state.email +
        '\n' +
        'your Mobile-number =>' +
        this.state.mobilenumber +
        '\n' +
        'your Password is  =>' +
        this.state.password,
    );
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 24, color: 'black'}}>
          Register here
        </Text>

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
