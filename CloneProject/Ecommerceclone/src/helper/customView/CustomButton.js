import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component } from 'react'
import PropsTypes from 'prop-types'
export default class CustomButton extends Component {
    static PropsTypes = {
        backgroundColor: PropsTypes.string,
        color: PropsTypes.string,
        onPress: PropsTypes.string,
        padding: PropsTypes.string,
        margin: PropsTypes.string,
        width: PropsTypes.string,
        style: PropsTypes.style,
        textname: PropsTypes.string

    }
    render() {
        const { backgroundColor, color, onPress, margin, padding, style, textname, width } = this.props
        return (
            <View>
                <TouchableOpacity onPress={onPress} >
                    <View>
                        <Text
                            //  style={[{ backgroundColor: backgroundColor, color: color, margin: margin, padding: padding, style, width: width }]}>
                            style={[style]}>
                            {textname}
                        </Text>



                    </View>


                </TouchableOpacity>


            </View>
        )
    }
}