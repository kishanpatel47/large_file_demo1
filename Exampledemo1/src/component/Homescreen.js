import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Homescreen extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }
  // AsynLogout = async () => {
  //   try {
  //     AsyncStorage.clear();
  //     AsyncStorage.removeItem('UserData');
  //     this.props.navigation.navigate('Login');
  //   } catch (error) {
  //     console.log('Logout => ' + error);
  //   }
  // };
  AsyncStoragegetData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        let user = JSON.parse(value);
        console.log(' Register name =>' + user.name);
        this.setState({name: user.name});
      });
    } catch (error) {
      console.log('Asyncstorage Get Data Error =>' + error);
    }
  };
  componentDidMount = () => {
    this.AsyncStoragegetData();
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            // alert('data');
            console.log(' hi Home screen :---');
            this.props.navigation.navigate('Register');
          }}>
          <View>
            <Text>Homescreen</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 21,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
          }}>
          Welcome your name :- <Text>{this.state.name}</Text>
        </Text>
      </View>
    );
  }
}
// <TouchableOpacity
// onPress={() => {
//   this.AsynLogout();
//   // // alert('data');
//   // console.log(' hi Home screen :---');
//   // AsyncStorage.removeItem('UserData');
//   // this.props.navigation.navigate('Register');
// }}>
// <View>
//   <Text>Logout</Text>
// </View>
// </TouchableOpacity>     <TouchableOpacity
//             onPress={() => {
//               this.AsynLogout();
//               // // alert('data');
//               // console.log(' hi Home screen :---');
//               // AsyncStorage.removeItem('UserData');
//               // this.props.navigation.navigate('Register');
//             }}>
//             <View>
//               <Text>Logout</Text>
//             </View>
//           </TouchableOpacity>
