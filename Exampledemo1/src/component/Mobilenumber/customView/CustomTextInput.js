import {Text, View, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppTheme from '../AppTheme';
export default class CustomTextInput extends Component {
  static propTypes = {
    placeholderTextColor: PropTypes.color,
  };
  constructor(props) {
    super(props);
    this.state = {
      enterText: '',
      isFocused: false,
    };
  }

  onSubmitPressed() {
    //navigationRef
    // Custom method call for any other operation.
  }

  focus = () => this.textInputRef.focus();

  render() {
    const {
      style,
      // customStyle,
      placeholderTextColor,
      ...otherProps
    } = this.props;
    return (
      <TextInput
        //ref={ref}
        autoCorrect={false}
        ref={ref => (this.textInputRef = ref)}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={placeholderTextColor}
        clearButtonMode={'while-editing'}
        selectionColor={AppTheme.APPCOLOR.GREEN} //
        autoCapitalize="none"
        multiline={false}
        onFocus={() => this.setState({isFocused: true})}
        onBlur={() => this.setState({isFocused: false})}
        style={[
          styles.title,
          // customStyle,
          style,
        ]}
        {...otherProps}
        // keyboardType={'number-pad'}
      />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    // backgroundColor:'blue',
    // fontFamily: AppTheme.APP_FONTS.BOLD,

    color: AppTheme.APPCOLOR.BLACK,
    fontSize: 17,
    height: 50,
    padding: 8,
    // backgroundColor:'red',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    // alignSelf: 'center',
  },
});
