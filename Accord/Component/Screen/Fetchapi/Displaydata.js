import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../../Untils/colors';

export default class Displaydata extends Component {
  constructor(pros) {
    super(pros);
    // console.log(
    //   'ths.props = ' + JSON.stringify(this.props.state.country, null),
    // );
    console.log(
      '\n\n\n\nthis.propsmmmmm = ' + JSON.stringify(this.props, null, 2),
    );
    this.state = {
      selectedAirline: {},
    };
  }

  componentDidMount() {
    if (this.props.route.params.selectedAirline != null) {
      this.setState({
        selectedAirline: this.props.route.params.selectedAirline,
      });
    }
  }

  render() {
    return (
      <View
        style={{
          height: Dimensions.get('screen').height / 1,
          backgroundColor: colors.Cultured,
        }}>
        <Image
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            resizeMode: 'contain',
            height: Dimensions.get('screen').height / 2.8,
            aspectRatio: 1,
          }}
          source={{uri: selectedAirline.logo}}
        />

        <View
          style={{
            flex: 1,
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: colors.Teal,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: colors.white,
              justifyContent: 'center',
            }}>
            {'name :-' + selectedAirline.name}
          </Text>
          <Text style={{fontSize: 20, color: colors.white}}>
            {'country :-' + selectedAirlinet.country}
          </Text>
          <Text style={{fontSize: 20, color: colors.white}}>
            {'slogan :-' + selectedAirline.country}
          </Text>

          <Text style={{fontSize: 20, color: colors.white}}>
            {'head_quaters :-' + selectedAirline.head_quaters}
          </Text>
          <Text style={{fontSize: 20, color: colors.white}}>
            {'website :-' + selectedAirline.website}
          </Text>
          <Text style={{fontSize: 20, color: colors.white}}>
            {'established :-' + selectedAirline.established}
          </Text>
          <TouchableOpacity>
            <View
              style={{
                padding: 10,
                alignItems: 'center',
                margin: 30,
                borderRadius: 20,
                backgroundColor: colors.white,
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: colors.Black,
                }}>
                NEXT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
