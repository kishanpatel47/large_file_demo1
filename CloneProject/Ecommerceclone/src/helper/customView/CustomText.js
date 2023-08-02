import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import PropsTypes from 'prop-types';
import AppTheme from '../AppTheme';
export default class CustomText extends Component {

    static propsTypes = {
        text: PropsTypes.string,
        textcolor: PropsTypes.string,
        fontsize: PropsTypes.string,
        fontWeight: PropsTypes.string,
        numberOfLines: PropsTypes.number,
        customStyle: PropsTypes.style,


    }
    render() {
        const { text, textcolor, fontSize, fontWeight, customStyle, numberOfLines, } = this.props;
        return (
            <View>
                <Text numberOfLines={numberOfLines} style={[{ fontWeight: fontWeight }, fontSize ? { fontSize: fontSize } : null, textcolor ? { color: textcolor } : null, customStyle]} >{text}</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    title: {
        color: AppTheme.APPCOLOR.PRIMARY,


    }
})