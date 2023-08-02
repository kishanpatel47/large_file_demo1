import React from 'react';

import {View, Image} from 'react-native';

const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('../Image/left.png')}
        style={{
          width: 30,
          height: 30,
          left: -2,
        }}
      />
    </View>
  );
};

export default ActionBarImage;
