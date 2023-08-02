// import {Text, View, TextInput} from 'react-native';
// import React, {Component} from 'react';

// export default class validationform extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       nameError: '',
//       lastname: '',
//       lastError: '',
//     };
//   }
//   emailValidator = () => {
//     if (this.state.trim.toString()) {
//       this.setState({nameError: 'email field can not be empty'});
//     } else {
//       this.setState({nameError: ''});
//     }
//     if (this.state.lastname.trim.toString()) {
//       this.setState({lastError: 'email field can not be empty'});
//     } else {
//       this.setState({lastError: ''});
//     }
//   };
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <TextInput
//           style={{borderWidth: 1}}
//           onBlur={() => this.emailValidator()}
//           //   onChangeText={name => this.name(name)}
//           onChangeText={text => this.setState({name: text})}
//           placeholder="Please Enter The full name"></TextInput>
//         <Text>{this.state.nameError}</Text>
//         <TextInput
//           onChangeText={text => this.setState({lastname: text})}
//           style={{borderWidth: 1, marginTop: 30}}
//           placeholder="Please Enter The last name"></TextInput>
//         <Text>{this.state.nameError}</Text>

//         <Text>Submit </Text>
//       </View>
//     );
//   }
// }
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default class validationform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputValue: '',
      TextInputValueName: '',

      ErrorStatus: true,
    };
  }

  onEnterText = TextInputValue => {
    if (TextInputValue.trim() != 0) {
      this.setState({TextInputValue: TextInputValue, ErrorStatus: true});
    } else {
      this.setState({TextInputValue: TextInputValue, ErrorStatus: false});
    }
  };

  buttonClickListener = () => {
    this.setState({ErrorStatus: this.state.TextInputValue});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 45,
            width: '95%',
            borderColor: this.state.ErrorStatus == false ? 'red' : 'blue',
            borderWidth: 2,
          }}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your User Name"
          //set the value in state.
          onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />

        {this.state.ErrorStatus == false ? (
          <Text style={styles.errorMessage}>
            * Please enter the text to proceed.
          </Text>
        ) : null}

        <TextInput
          style={{
            height: 45,
            marginTop: 10,
            width: '95%',
            borderColor: this.state.ErrorStatus == false ? 'red' : 'blue',
            borderWidth: 2,
          }}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your User Name"
          //set the value in state.
          onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />

        {this.state.ErrorStatus == false ? (
          <Text style={styles.errorMessage}>
            * Please enter the text to proceed.
          </Text>
        ) : null}

        <View style={[{width: '93%', margin: 15, backgroundColor: 'red'}]}>
          <Button
            onPress={this.buttonClickListener}
            title="Submit"
            color="#00B0FF"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  errorMessage: {
    fontSize: 20,
    color: 'red',
    marginLeft: -80,
  },
});
