import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {colors} from '../Untils/colors';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class OtpVerificatipon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              left: 10,
              top: 50,
            }}>
            <Image
              style={{height: 12, width: 12}}
              source={require('../Image/leftarrow.png')}></Image>
            <View>
              <Text
                style={{
                  color: 'black',
                  top: 20,

                  fontSize: height * 0.04,
                  fontFamily: 'PromptMedium',
                }}>
                Enter Your 6 Digit {''}
                <Text style={{color: colors.Cylindrical_coordinate}}>OTP</Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 20,
                right: 17,
                marginTop: 50,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Black,
                  flexDirection: 'row',
                  alignItems: 'center',

                  borderRadius: 5,
                  width: height * 0.075,
                  height: height * 0.07,
                }}>
                <Text
                  style={{color: colors.Black, textAlign: 'center', flex: 1}}>
                  1
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Black,
                  flexDirection: 'row',
                  alignItems: 'center',

                  borderRadius: 5,
                  width: height * 0.075,
                  height: height * 0.07,
                }}>
                <Text
                  style={{color: colors.Black, textAlign: 'center', flex: 1}}>
                  2
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Black,
                  flexDirection: 'row',
                  alignItems: 'center',

                  borderRadius: 5,
                  width: height * 0.075,
                  height: height * 0.07,
                }}>
                <Text
                  style={{color: colors.Black, textAlign: 'center', flex: 1}}>
                  0
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Black,
                  flexDirection: 'row',
                  alignItems: 'center',

                  borderRadius: 5,
                  width: height * 0.075,
                  height: height * 0.07,
                }}>
                <Text
                  style={{color: colors.Black, textAlign: 'center', flex: 1}}>
                  2
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Black,
                  flexDirection: 'row',
                  alignItems: 'center',

                  borderRadius: 5,
                  width: height * 0.075,
                  height: height * 0.07,
                }}>
                <Text
                  style={{
                    color: colors.Black,

                    textAlign: 'center',
                    flex: 1,
                  }}>
                  9
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Black,
                  flexDirection: 'row',
                  borderRadius: 5,
                  alignItems: 'center',
                  marginRight: -10,
                  width: height * 0.075,
                  height: height * 0.07,
                }}>
                <Text
                  style={{color: colors.Black, textAlign: 'center', flex: 1}}>
                  0
                </Text>
              </View>
            </View>

            <View style={{marginTop: 25}}>
              <Text style={{color: 'black'}}>Don't receive an OTP? </Text>
            </View>

            <View style={{marginTop: 7}}>
              <Text style={{color: colors.Cylindrical_coordinate}}>
                Resend OTP
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Dashbord');
                }}>
                <View
                  style={{
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    display: 'flex',
                  }}>
                  <Text
                    style={{
                      letterSpacing: 1,
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
        </View>
      </View>
    );
  }
}
export default OtpVerificatipon;
