import React from 'react';
import {ImageBackground, View, Image} from 'react-native';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('screen').height;
class Splashscreen extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      {
        this.props.navigation.navigate('Selecttype');
      }
    }, 2000);
  }

  render() {
    return (
      <View style={{}}>
        <ImageBackground
          source={require('../Image/background.jpg')}
          resizeMode="cover"
          style={{height: '100%'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{resizeMode: 'center', aspectRatio: 0.8}}
              source={require('../Image/name.png')}></Image>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Splashscreen;
