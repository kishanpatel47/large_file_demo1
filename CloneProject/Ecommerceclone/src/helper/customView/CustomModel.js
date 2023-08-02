import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CustomModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> CustomModel </Text>
            </View>
        );
    }
}
