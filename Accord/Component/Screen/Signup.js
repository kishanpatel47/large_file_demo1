import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '../Untils/colors';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              left: 10,
              top: 50,
            }}>
            <Image
              style={{height: 12, width: 12}}
              source={require('../Image/leftarrow.png')}></Image>
            <Text
              style={{
                color: 'black',
                top: 10,
                fontSize: height * 0.03,
                fontFamily: 'PromptItalic',
              }}>
              Sign {''}
              <Text style={{color: colors.Cylindrical_coordinate}}>Up</Text>
            </Text>
            <Text style={{marginTop: 20}}>Please Enter Your Mobile No</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.Gray,
                flexDirection: 'row',
                alignItems: 'center',
                display: 'flex',
                marginHorizontal: 20,
                top: 20,
                left: -17,
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Text style={{color: colors.Gray}}>+91</Text>
              <View
                style={{
                  height: 26,
                  backgroundColor: colors.Gray,
                  borderWidth: 1,
                  left: 10,
                }}></View>
              <TextInput
                style={{
                  color: colors.Gray,
                  flex: 1,
                  height: 40,
                  letterSpacing: 1,
                  paddingLeft: 25,
                  color: colors.Gray,
                }}
                keyboardType="number-pad"
                placeholder="Mobile No"
                placeholderTextColor={colors.Gray}></TextInput>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('OtpVerificatipon');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  display: 'flex',
                  marginHorizontal: 3,
                  top: 30,
                }}>
                <Text
                  style={{
                    letterSpacing: 1,
                    paddingRight: 2,
                    fontSize: height * 0.024,
                    marginTop: 16,
                    fontFamily: 'PromptItalic',
                    color: colors.Cylindrical_coordinate,
                  }}>
                  Sign up
                </Text>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    bottom: 2,

                    alignItems: 'flex-end',
                    alignSelf: 'flex-end',
                  }}
                  source={require('../Image/logout.png')}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default SignUp;
