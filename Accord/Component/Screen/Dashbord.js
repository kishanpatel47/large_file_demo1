import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
} from 'react-native';
const numColumns = 3;
const size = Dimensions.get('window').width / numColumns;
import {colors} from '../Untils/colors';
import {String} from '../Untils/String';
import Customcard from './Customcard/Customcard';

class Dashbord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: [
        {
          id: 1,
          name: 'covid',
          image: require('../Image/covid.png'),
        },
        {
          id: 2,
          name: 'Physician',
          image: require('../Image/physician.png'),
        },
        {
          id: 3,
          name: 'Gynecology',
          image: require('../Image/gynecology.png'),
        },
        {
          id: 4,
          name: 'Pediatrics',
          image: require('../Image/pediatrics.png'),
        },
        {
          id: 5,
          name: 'Dermatology',
          image: require('../Image/dermatology.png'),
        },

        {
          id: 6,
          name: 'Psychiatry',
          image: require('../Image/psychiatry.png'),
        },
        {
          id: 7,
          name: 'ENT',
          image: require('../Image/ent.png'),
        },
        {
          id: 8,
          name: 'Orthopedics',
          image: require('../Image/orthopedics.png'),
        },
        {
          id: 9,
          name: 'Nutrition',
          image: require('../Image/nutrition.png'),
        },
        {
          id: 10,
          name: 'Cardiology',
          image: require('../Image/cardiology.png'),
        },
        {
          id: 11,
          name: 'Diabetology',
          image: require('../Image/diabetology.png'),
        },
        {
          id: 12,
          name: 'Gastroenterology',
          image: require('../Image/gastroenterology.png'),
        },
      ],
    };
  }

  viewHeader = () => {
    return (
      <View
        style={{
          height: 50,
          alignItems: 'center',
          // marginHorizontal: 10,
          // display: 'flex',
          flexDirection: 'row',
        }}>
        <Image
          style={{marginHorizontal: 15}}
          source={require('../Image/more.png')}></Image>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../Image/placeholder.png')}
          />
          <Text
            style={{
              fontSize: 17,
              color: colors.Cylindrical_coordinate,
              left: 5,
            }}>
            Rajasthan
          </Text>
        </View>
      </View>
    );
  };
  viewSearch = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View
          style={{
            flexDirection: 'row',
            height: 38,
            marginTop: 20,
            borderRadius: 5,
            display: 'flex',
            borderWidth: 1,
            borderColor: colors.Gray,
            marginHorizontal: 20,
          }}>
          <TextInput
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              height: 40,
              color: colors.white,

              paddingLeft: 10,
              flex: 1,
            }}
            placeholderTextColor={colors.Gray}
            placeholder={String.search}></TextInput>

          <Image
            style={{
              width: 20,
              marginHorizontal: 10,
              marginLeft: 6,
              tintColor: colors.Gray,
              alignSelf: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            source={require('../Image/search.png')}></Image>
        </View>
      </KeyboardAvoidingView>
    );
  };

  headerImage = () => {
    return (
      <Image
        style={{
          width: '95%',
          height: '15%',
          alignSelf: 'center',
        }}
        source={require('../Image/header.jpg')}
      />
    );
  };

  viewCare = () => {
    return (
      <View
        style={{
          height: '10%',
          marginHorizontal: 25,
          flexDirection: 'row',
          marginTop: 12,
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={require('../Image/dashboard_bg2.png')}
          style={{
            flex: 1,
            height: 70,
            marginHorizontal: 1,
            right: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.bluelight,
          }}>
          <Image
            style={{height: 30}}
            resizeMode="center"
            source={require('../Image/special_service.png')}></Image>
          <Text
            style={{
              color: 'white',

              fontSize: 10,
            }}>
            Specialised Service
          </Text>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            right: 1,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            style={{height: 24}}
            resizeMode="center"
            source={require('../Image/availabity.png')}></Image>
          <Text style={{top: 2, color: 'black', fontSize: 9}}>
            24/7 Advanced care
          </Text>
        </View>

        <ImageBackground
          source={require('../Image/dashboard_bg2.png')}
          style={{
            flex: 1,
            height: 70,
            left: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 24}}
            resizeMode="center"
            source={require('../Image/online_result.png')}></Image>
          <Text
            style={{
              fontStyle: 'normal',
              top: 2,
              color: 'white',
              fontSize: 9,
            }}>
            Get Result Online
          </Text>
        </ImageBackground>
      </View>
    );
  };

  viewtitle = () => {
    return (
      <Text
        style={{
          color: 'black',
          marginTop: '8%',

          marginHorizontal: 20,
        }}>
        What are you Symptoms ?
      </Text>
    );
  };

  render() {
    const renderItem = ({item, onPress}) => {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginVertical: 5,
            marginTop: 5,
            alignSelf: 'center',
          }}>
          <Customcard
            item={item}
            onPress={() => {
              alert('data' + JSON.stringify(item, null, 1));
              this.props.navigation.navigate('Doctorlist', {
                item: this.state.data.name,
              });
            }}
          />
        </View>
      );
    };

    return (
      <ImageBackground
        style={{
          // height: '100%',
          flex: 1,
        }}
        source={require('../Image/background.png')}>
        {this.viewHeader()}
        {this.headerImage()}
        {this.viewSearch()}
        {this.viewCare()}
        {this.viewtitle()}

        <FlatList
          style={{marginBottom: 10}}
          numColumns={4}
          data={this.state.data}
          renderItem={renderItem}></FlatList>
        <View
          style={{
            borderColor: colors.white,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            // display: 'flex',
            height: 48,
          }}>
          <Text
            style={{
              letterSpacing: 1,
              fontFamily: 'PromptMedium',
              color: colors.Cylindrical_coordinate,
            }}>
            View All Symptoms
          </Text>
          <Image
            style={{
              height: 24,
              width: 24,

              tintColor: colors.Cylindrical_coordinate,
              justifyContent: 'center',

              resizeMode: 'center',
            }}
            source={require('../Image/rightarrow.png')}></Image>
        </View>
      </ImageBackground>
    );
  }
}
export default Dashbord;
