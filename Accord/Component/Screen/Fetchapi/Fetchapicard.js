import React from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../../Untils/colors';

const Fetchapicard = ({item, onPress}) => {
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
          source={{uri: item.logo}}
        />
        <View style={{alignSelf: 'center', marginLeft: 20}}>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'Airline :-' + item.name}
          </Text>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'Country :-' + item.country}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: colors.Green,
            }}>
            {'slogan :-' + item.slogan}
          </Text>
          <Text
            style={{
              color: colors.Green,
            }}>
            {'head_quaters :-' + item.head_quaters}
          </Text>

          <Text
            style={{
              color: colors.Green,
            }}>
            {'website :-' + item.website}
          </Text>

          <Text
            style={{
              color: colors.Green,
            }}>
            {'established :-' + item.established}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Fetchapicard;
