import {Image, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Slashscreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.getUserData();
    }, 2000);
  }
  getUserData = async () => {
    try {
      console.log('Method Start');
      let storekey = await AsyncStorage.getItem('UserData');
      console.log('Method Stop');
      console.log('Print Data = ' + JSON.stringify(storekey));
      if (storekey != null) {
        this.props.navigation.navigate('Homescreen');
      } else {
        this.props.navigation.navigate('Login');
      }
    } catch (err) {
      console.log('AsyncStorage error => ' + JSON.stringify(err));
    }
  };
  componentDidMount = async () => {};
  render() {
    return (
      <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        <Image
          style={{
            width: Dimensions.get('screen').width / 0.9,
            resizeMode: 'center',
            alignItems: 'center',
          }}
          source={require('../image/slashscreen.png')}></Image>
      </View>
    );
  }
}
