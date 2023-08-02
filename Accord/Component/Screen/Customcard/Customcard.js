import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const Customcard = ({item, onPress}) => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          marginVertical: 2,
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{
              justifyContent: 'center',
              height: 70,
              width: 70,

              alignSelf: 'center',
              justifyContent: 'center',
            }}
            source={item.image}></Image>
          <Text
            style={{
              fontSize: 12,
              alignItems: 'center',
              alignSelf: 'center',
              color: 'black',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Customcard;
