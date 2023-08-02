// import {Text, View, TextInput} from 'react-native';
// import React, {Component} from 'react';

// export default class validationform extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       nameError: '',
//       lastname: '',
//       lastError: '',
//     };
//   }
//   emailValidator = () => {
//     if (this.state.trim.toString()) {
//       this.setState({nameError: 'email field can not be empty'});
//     } else {
//       this.setState({nameError: ''});
//     }
//     if (this.state.lastname.trim.toString()) {
//       this.setState({lastError: 'email field can not be empty'});
//     } else {
//       this.setState({lastError: ''});
//     }
//   };
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <TextInput
//           style={{borderWidth: 1}}
//           onBlur={() => this.emailValidator()}
//           //   onChangeText={name => this.name(name)}
//           onChangeText={text => this.setState({name: text})}
//           placeholder="Please Enter The full name"></TextInput>
//         <Text>{this.state.nameError}</Text>
//         <TextInput
//           onChangeText={text => this.setState({lastname: text})}
//           style={{borderWidth: 1, marginTop: 30}}
//           placeholder="Please Enter The last name"></TextInput>
//         <Text>{this.state.nameError}</Text>

//         <Text>Submit </Text>
//       </View>
//     );
//   }
// }
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {colors} from '../Untils/colors';

export default class PatientDeatlies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      age: '',
      address: '',
      email: '',
      mobilenumber: '',
      descrpition: '',

      Errorstatus: true,
    };
  }

  buttonClickListener = () => {
    if (!this.state.fullname == '') {
      this.setState({fullname: this.state.fullname, Errorstatus: false});
    } else {
      this.setState({fullname: this.state.fullname, Errorstatus: false});
    }
    if (!this.state.age == '') {
      this.setState({age: this.state.age, Errorstatus: true});
    } else {
      this.setState({age: this.state.fullname, Errorstatus: false});
    }
    if (!this.state.address == '') {
      this.setState({address: this.state.address, Errorstatus: true});
    } else {
      this.setState({address: this.state.address, Errorstatus: false});
    }
    if (!this.state.email == '') {
      this.setState({email: this.state.email, Errorstatus: true});
    } else {
      this.setState({email: this.state.email, Errorstatus: false});
    }

    // this.props.navigation.navigate('Dashbord');
    // this.setState({ErrorStatus: true});
  };

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <TextInput
              style={{
                width: Dimensions.get('screen').width / 1.08,
                borderColor:
                  this.state.Errorstatus == false ? colors.Red : 'grey',

                borderWidth: 1,
              }}
              placeholder=" full name"
              onChangeText={fullname => this.setState({fullname: fullname})}
              underlineColorAndroid="transparent"
            />
            {this.state.Errorstatus === false ? (
              <Text style={styles.errorMessage}>Please enter fullname.</Text>
            ) : null}

            <TextInput
              style={{
                width: Dimensions.get('screen').width / 1.08,
                borderColor:
                  this.state.Errorstatus == false ? colors.Red : 'grey',

                borderWidth: 1,
                marginTop: 14,
                justifyContent: 'center',
                paddingLeft: 9,
              }}
              keyboardType={'number-pad'}
              placeholder="Age"
              onChangeText={age => this.setState({age: age})}
              underlineColorAndroid="transparent"
            />

            {this.state.Errorstatus === false ? (
              <Text style={styles.errorMessage}>Please enter Age.</Text>
            ) : null}
            <TextInput
              style={{
                width: Dimensions.get('screen').width / 1.08,
                borderColor:
                  this.state.Errorstatus == false ? colors.Red : 'grey',

                borderWidth: 1,
                marginTop: 14,
                paddingLeft: 10,
              }}
              keyboardType={'email-address'}
              placeholder="Address"
              onChangeText={address => this.setState({address: address})}
              underlineColorAndroid="transparent"
            />

            {this.state.Errorstatus == false ? (
              <Text style={styles.errorMessage}>Please enter Address.</Text>
            ) : null}
            <TextInput
              style={{
                width: Dimensions.get('screen').width / 1.08,
                borderColor:
                  this.state.Errorstatus == false ? colors.Red : 'grey',

                borderWidth: 1,
                marginTop: 14,
                paddingLeft: 10,
              }}
              keyboardType={'email-address'}
              placeholder="Email"
              onChangeText={email => this.setState({email: email})}
              underlineColorAndroid="transparent"
            />

            {this.state.Errorstatus == false ? (
              <Text style={styles.errorMessage}>Please enter Email.</Text>
            ) : null}
            <TextInput
              style={{
                width: Dimensions.get('screen').width / 1.08,
                borderColor:
                  this.state.Errorstatus == false ? colors.Red : 'grey',

                borderWidth: 1,
                marginTop: 14,
                paddingLeft: 10,
              }}
              keyboardType={'number-pad'}
              placeholder="Mobile number"
              onChangeText={mobilenumber =>
                this.setState({mobilenumber: mobilenumber})
              }
              underlineColorAndroid="transparent"
            />

            {this.state.Errorstatus == false ? (
              <Text style={styles.errorMessage}>
                Please enter Mobile number.
              </Text>
            ) : null}
            <TextInput
              style={{
                width: Dimensions.get('screen').width / 1.08,
                borderColor:
                  this.state.Errorstatus == false ? colors.Red : 'grey',

                borderWidth: 1,
                marginTop: 14,
                paddingLeft: 10,
              }}
              keyboardType={'email-address'}
              placeholder="Any descrption about Diagnosis"
              onChangeText={mobilenumber =>
                this.setState({mobilenumber: mobilenumber})
              }
              underlineColorAndroid="transparent"
            />

            {this.state.Errorstatus == false ? (
              <Text style={styles.errorMessage}>Please enter descrpition.</Text>
            ) : null}
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.buttonClickListener();
                  // this.props.navigation.navigate('Dashbord');
                }}>
                <View
                  style={{
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 14,
                    display: 'flex',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      paddingRight: 2,
                      fontFamily: 'PromptMedium',
                      color: colors.Cylindrical_coordinate,
                    }}>
                    Submit
                  </Text>
                  <Image
                    style={{
                      height: 40,
                      width: 19,
                      top: 1.0,

                      tintColor: colors.Cylindrical_coordinate,
                      alignItems: 'flex-end',
                      alignSelf: 'flex-end',
                      resizeMode: 'center',
                    }}
                    source={require('../Image/rightarrow.png')}></Image>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    top: 5,

    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});
