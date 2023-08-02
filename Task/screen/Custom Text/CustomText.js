import React from 'react';
import {Text, View} from 'react-native';

export default class CustomText extends React.Component {
  render() {
    return <Text>{this.props.nametitle}</Text>;
  }
}
