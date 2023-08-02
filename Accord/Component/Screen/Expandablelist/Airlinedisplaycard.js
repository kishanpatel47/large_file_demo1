import React from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../../Untils/colors';

const Airlinedisplaycard = ({item, onPress, airline}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          margin: 5,

          backgroundColor: colors.Cultured,
        }}>
        <Image
          style={{
            height: 120,
            width: 100,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
          source={{uri: item.airline[0].logo}}
        />
        <View style={{alignSelf: 'center', marginLeft: 20}}>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'name :-' + item.name}
          </Text>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'trips :-' + item.trips}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: colors.Green,
            }}>
            {'Airline name :-' + item.airline[0].name}
          </Text>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'Airline country :-' + item.airline[0].country}
          </Text>

          <Text
            style={{
              color: colors.Green,
            }}>
            {'Airline slogan :-' + item.airline[0].slogan}
          </Text>

          <Text
            style={{
              color: colors.Green,
            }}>
            {'Airline head_quaters :-' + item.airline[0].head_quaters}
          </Text>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'Airline website :-' + item.airline[0].website}
          </Text>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'Airline established :-' + item.airline[0].established}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Airlinedisplaycard;
