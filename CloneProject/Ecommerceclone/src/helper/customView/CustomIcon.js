import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropsTypes from 'prop-types'
export default class CustomImage extends Component {
  static propsTypes = {
    source: PropsTypes.string,
    customstyle: PropsTypes.style,
    height: PropsTypes.string,
    width: PropsTypes.string,
    onPress: PropsTypes.string
  }
  render() {
    const { source, customstyle, onPress } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={onPress} >
          <Image source={source} style={[customstyle]} />

        </TouchableOpacity>

      </View>

    )
  }
}
