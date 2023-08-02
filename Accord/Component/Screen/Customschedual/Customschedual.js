import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../../Untils/colors';

const Customschedual = ({item, days, backgroundColor, onPress, color}) => {
  return (
    <View
      style={{
        // width: Dimensions.get('screen').width / 2.5,
        // top: 10,
        borderWidth: 1,
        // margin: 10,

        marginHorizontal: 10,

        borderColor: colors.Cylindrical_coordinate,
        borderStyle: 'dashed',
      }}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            padding: 10,
            margin: 3,
            backgroundColor: backgroundColor,
          }}>
          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 11,
              color: colors.Black,
            }}>
            {days}
          </Text>
          <Text
            style={{
              alignItems: 'center',
              fontSize: 10,
              fontWeight: 'bold',
              textAlign: 'center',
              color: color,
            }}>
            {item.shot}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Customschedual;
