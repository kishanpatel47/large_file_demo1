import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {colors} from '../Untils/colors';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Selecttype extends React.Component {
  constructor(props) {
    super(props);
  }
  viewNamelogo = () => {
    return (
      <Image
        style={{
          height: 200,
          width: 200,

          justifyContent: 'center',

          resizeMode: 'center',
          alignSelf: 'center',
        }}
        source={require('../Image/name.png')}
      />
    );
  };
  viewDoctorlogog = () => {
    return (
      <View style={{justifyContent: 'center'}}>
        <Image
          style={{
            height: 200,
            width: 200,
            bottom: 60,
            justifyContent: 'center',
            aspectRatio: 2.0,
            resizeMode: 'center',
            alignSelf: 'center',
          }}
          source={require('../Image/doctor.png')}
        />
      </View>
    );
  };
  viewBottomside = () => {
    return (
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          flexDirection: 'column',
          width: '100%',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: colors.white,
          }}>
          Certified Partner Doctors You Can Trust
        </Text>
        <Image
          style={{
            tintColor: colors.white,
            alignSelf: 'center',
          }}
          source={require('../Image/ellipsis.png')}></Image>
        <View
          style={{
            height: 1,
            borderWidth: 1,
            borderColor: colors.white,
          }}></View>
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.Gray,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              color: colors.Gray,
              alignItems: 'flex-end',
              alignSelf: 'flex-end',
              alignContent: 'flex-end',
              flex: 1,
              height: 35,
              letterSpacing: 1,
              paddingLeft: 15,
              color: colors.Gray,
            }}
            keyboardType="number-pad"
            placeholder="Search City or Locality"
            placeholderTextColor={colors.Gray}></TextInput>
          <Image
            style={{marginRight: 15, tintColor: colors.Cylindrical_coordinate}}
            source={require('../Image/search.png')}></Image>
        </View>
        <View
          style={{
            // borderWidth: 1,
            // borderColor: colors.Gray,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 2,

            // borderRadius: 5,
            alignItems: 'center',
          }}>
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
            placeholder="Use Current Location"
            placeholderTextColor={colors.Cylindrical_coordinate}></TextInput>
          <Image
            style={{marginRight: 5, tintColor: colors.Cylindrical_coordinate}}
            source={require('../Image/aim.png')}></Image>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}>
          <View
            style={{
              borderColor: colors.white,
              flexDirection: 'row',
              marginHorizontal: 40,
              display: 'flex',
              bottom: 5,
              height: 24,
            }}>
            <Text
              style={{
                letterSpacing: 1,
                fontSize: 15,
                fontFamily: 'PromptMedium',
                color: colors.Cylindrical_coordinate,
              }}>
              Sign Up
            </Text>
            <Image
              style={{
                height: 17,
                width: 17,
                alignSelf: 'center',
                marginLeft: 5,
                tintColor: colors.Cylindrical_coordinate,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../Image/logout.png')}></Image>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={require('../Image/background.jpg')}
        resizeMode="cover"
        style={{flex: 1}}>
        {this.viewNamelogo()}
        {this.viewDoctorlogog()}
        {this.viewBottomside()}
      </ImageBackground>
    );
  }
}
export default Selecttype;
