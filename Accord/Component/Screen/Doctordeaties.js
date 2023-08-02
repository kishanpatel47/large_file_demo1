import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../Untils/colors';

export default class Doctordeaties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectedVisit: false,
    };
  }
  onlinechating = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: -20,
        }}>
        <View
          style={{
            height: Dimensions.get('screen').height / 25,
            width: Dimensions.get('screen').width / 25,
            padding: 19,
            // elevation: 1,
            left: 2,
            backgroundColor: colors.Cylindrical_coordinate,
            borderRadius: 25,
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 18,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center',
              tintColor: colors.white,
              alignSelf: 'center',
            }}
            source={require('../Image/video-camera.png')}></Image>
        </View>
        <View
          style={{
            height: Dimensions.get('screen').height / 25,
            width: Dimensions.get('screen').width / 25,
            padding: 19,
            // elevation: 1,
            left: 10,
            backgroundColor: colors.Cylindrical_coordinate,
            borderRadius: 25,
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
              aspectRatio: 1.0,
              justifyContent: 'center',
              alignItems: 'center',
              tintColor: colors.white,
              alignSelf: 'center',
            }}
            source={require('../Image/chat.png')}></Image>
        </View>
      </View>
    );
  };
  timeshot = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginLeft: -2,
          margin: 5,
        }}>
        <View
          style={{
            flex: 1,
            alignSelf: 'flex-end',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
              aspectRatio: 1.7,
              alignSelf: 'center',

              tintColor: colors.bluelight,
            }}
            source={require('../Image/video-camera.png')}></Image>
          <Text
            style={{
              color: colors.bluelight,
              fontWeight: '700',
              fontFamily: 'Prompt-SemiBoldItalics',
              fontSize: 12.5,
              textAlign: 'right',
            }}>
            2:00 pm, Tomorrow
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Image
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
              aspectRatio: 1.7,
              alignSelf: 'center',

              tintColor: colors.bluelight,
            }}
            source={require('../Image/hospital.png')}></Image>
          <Text
            style={{
              color: colors.bluelight,
              fontWeight: '700',
              fontFamily: 'Prompt-SemiBoldItalics',
              fontSize: 12.5,
            }}>
            6:00 pm, Tomorrow
          </Text>
        </View>
      </View>
    );
  };
  viewdeatlies = () => {
    return (
      <View
        style={{
          height: Dimensions.get('screen').height / 1.3 - 2,
          paddingBottom: 20,
        }}>
        <ScrollView style={{}}>
          <View style={{padding: 15}}>
            <Text
              style={{
                color: colors.Black,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              About{' '}
              <Text style={{color: colors.Cylindrical_coordinate}}>Doctor</Text>
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: colors.Cylindrical_coordinate,
                fontSize: 15,
                fontFamily: 'PromptMedium',
              }}>
              Experience :-
              <Text
                style={{
                  marginTop: 5,
                  color: colors.Black,
                }}>
                7 Year
              </Text>
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: colors.Black,
                fontFamily: 'PromptMedium',
              }}>
              250 Online Consultations Completed
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                source={require('../Image/mortarboard.png')}
                style={{
                  height: 13,
                  width: 13,
                  aspectRatio: 0.79,
                  alignSelf: 'center',
                  tintColor: colors.Cylindrical_coordinate,
                }}></Image>
              <Text
                style={{
                  marginLeft: 12,
                  fontWeight: 'bold',
                  color: colors.Black,
                }}>
                MBBS
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.35,
                borderColor: colors.Black,
                marginTop: 25,
              }}></View>
            <Text
              style={{
                marginTop: 9,
                color: colors.Cylindrical_coordinate,
                fontFamily: 'Prompt-SemiBoldItalic',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Next Available
            </Text>
            {this.timeshot()}

            <View style={{flexDirection: 'row', marginLeft: -7}}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  this.setState({isSelectedVisit: true});
                }}>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    margin: 10,
                    backgroundColor:
                      this.state.isSelectedVisit == true
                        ? colors.Cylindrical_coordinate
                        : colors.Cultured,
                    borderColor:
                      this.state.isSelectedVisit == true
                        ? colors.Cylindrical_coordinate
                        : colors.Cultured,
                    borderStyle: 'solid',
                  }}>
                  <View style={{marginLeft: 5}}>
                    <Text
                      style={{
                        color:
                          this.state.isSelectedVisit == true
                            ? colors.white
                            : colors.Cylindrical_coordinate,
                        fontFamily: 'Prompt-SemiBoldItalic',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      Rs 600
                    </Text>
                    <Text
                      style={{
                        color:
                          this.state.isSelectedVisit == true
                            ? colors.white
                            : colors.Black,
                        fontSize: 13,
                        fontFamily: 'Prompt-SemiBoldItalic',
                      }}>
                      OnlineConsultation(video call or chat)
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  this.setState({isSelectedVisit: false});
                }}>
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    margin: 10,
                    marginLeft: 2,
                    backgroundColor:
                      this.state.isSelectedVisit == true
                        ? colors.Cultured
                        : colors.Cylindrical_coordinate,
                    borderColor:
                      this.state.isSelectedVisit == true
                        ? colors.Cultured
                        : colors.Cylindrical_coordinate,
                    borderStyle: 'solid',
                  }}>
                  <View style={{marginLeft: 5}}>
                    <Text
                      style={{
                        color:
                          this.state.isSelectedVisit == true
                            ? colors.Cylindrical_coordinate
                            : colors.white,
                        fontFamily: 'Prompt-SemiBoldItalic',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      Rs 500
                    </Text>
                    <Text
                      style={{
                        color:
                          this.state.isSelectedVisit == true
                            ? colors.Black
                            : colors.white,
                        fontSize: 13,
                        fontFamily: 'Prompt-SemiBoldItalic',
                      }}>
                      Visit Clinic (Physically)
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Visitclinic');
                }}>
                <View
                  style={{
                    borderColor: colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: 20,
                    paddingBottom: 80,
                    alignSelf: 'center',

                    display: 'flex',
                  }}>
                  <Text
                    style={{
                      letterSpacing: 1,
                      fontFamily: 'Prompt-SemiBoldItalic',
                      fontWeight: '800',
                      paddingRight: 2,
                      fontFamily: 'PromptMedium',
                      color: colors.Cylindrical_coordinate,
                    }}>
                    Book Appointment
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
      </View>
    );
  };

  headerview = () => {
    return (
      <View style={{}}>
        <View
          style={{
            height: Dimensions.get('screen').height / 1,
            backgroundColor: colors.bluelight,
            alignItems: 'center',

            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <Image
              style={{
                aspectRatio: 1.0,
                borderRadius: 50,
                width: 60,
                height: 60,
              }}
              source={require('../Image/prasahant.png')}></Image>

            <Text style={{marginTop: 5, color: colors.white, fontSize: 20}}>
              Dr Arohi Shah
            </Text>

            <Text style={{marginTop: 2, color: colors.Cylindrical_coordinate}}>
              Pediatrics
            </Text>
          </View>

          <View
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              width: Dimensions.get('screen').width / 1,

              backgroundColor: colors.white,
            }}>
            {this.onlinechating()}
            {this.viewdeatlies()}
          </View>
        </View>
      </View>
    );
  };

  // bottomview = () => {
  //   return (

  //   );
  // };

  render() {
    return <View>{this.headerview()}</View>;
  }
}
