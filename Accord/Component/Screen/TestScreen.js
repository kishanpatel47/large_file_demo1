// App.js

import React, {Component} from 'react';
import {TextInput, Text, Button, Alert, View, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';

export default class App extends Component {
  render() {
    const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 5,
    };
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          age: '',
          password: '',
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          name: yup.string().required('Please, provide your name!'),
          email: yup.string().email().required(),
          //   age: yup
          //     .number()
          //     .positive('age must be greater than zero')
          //     .required('age is required'),
          age: yup
            .string()
            .required('This field is Required')
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              'Phone number is not valid',
            ),
          password: yup
            .string()
            .min(4)

            .max(10, 'Password should not excced 10 chars.')
            .required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.age}
              style={inputStyle}
              onChangeText={handleChange('age')}
              onBlur={() => setFieldTouched('age')}
              placeholder="Age"
            />
            {touched.name && errors.name && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.name}
              </Text>
            )}
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.email}
              </Text>
            )}
            <TextInput
              value={values.password}
              style={inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.password}
              </Text>
            )}
            <TextInput
              value={values.password}
              style={inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.password}
              </Text>
            )}
            <Button
              color="#3740FE"
              title="Submit"
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}
const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});
console.disableYellowBox = true;
