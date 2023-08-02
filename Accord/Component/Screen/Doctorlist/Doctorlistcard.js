import React from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {colors} from '../../Untils/colors';

const Doctorlistcard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: Dimensions.get('screen').width / 2 - 15,

          // height: 80,
          // paddingHorizontal: 10,
          // bottom: 10,
          marginVertical: 1,
          // justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: colors.white,
        }}>
        <Image
          style={{
            // backgroundColor: colors.Blue,
            height: 50,
            width: 50,
            alignSelf: 'center',
            borderRadius: 30,
            marginLeft: 5,
            // alignItems: 'center',
            aspectRatio: 1.0,
          }}
          source={item.image}></Image>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            marginLeft: 5,
          }}>
          <Text style={{color: colors.bluelight, fontSize: 12}}>
            {item.doctorname}
          </Text>

          <Text
            style={{
              flex: 1,
              alignItems: 'flex-start',
              color: colors.Cylindrical_coordinate,
              fontSize: 10,
            }}>
            {item.speciality}
          </Text>

          <Text style={{color: colors.Gray, fontSize: 9}}>
            {item.experience}
          </Text>

          <View style={{flexDirection: 'row', bottom: 1}}>
            <Text
              style={{color: colors.Gray, flexDirection: 'row', fontSize: 9}}>
              {item.rating}
            </Text>

            <Image
              style={{
                height: 10,
                width: 10,
                marginLeft: 4,
                alignContent: 'center',
                alignSelf: 'center',
              }}
              source={require('../../Image/star.png')}></Image>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Doctorlistcard;
