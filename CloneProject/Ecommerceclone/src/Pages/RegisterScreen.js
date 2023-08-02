import { Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../helper/AppTheme'
import CustomText from '../helper/customView/CustomText'
import strings from '../LanguageFiles/LocalizedString'
import CustomImage from '../helper/customView/CustomIcon'
import CustomTextInput from '../helper/customView/CustomTextInput'
import CustomButton from '../helper/customView/CustomButton'
import AppBase from '../AppBase'
export default class RegisterScreen extends AppBase {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: true,
            isMobileVerified: false,
            isOTPVerified: false,
            isOTPSent: false,
            userName: '',
            userEmail: '',
            userMobile: '',
            userOTP: '',
            deviceID: 'test Firebase Device ID',
            loadingCounter: false,
        }
    }

    doRegistration = () => {
        if (this.state.userName.length <= 0) {
            this.showAlertMessage(strings.Valid_User_Name);
        } else if (!this.validateMobile(this.state.userMobile)) {
            this.showAlertMessage(strings.Valid_Mobile);
        } else if (!this.validateEmail(this.state.userEmail)) {
            this.showAlertMessage(strings.Valid_Email);
        }
        else {
            this.setState({
                loadingCounter: true,
            });
            let params = {
                UserName: this.state.userMobile,
                FirstName: this.state.userName,
                Email: this.state.userEmail,
                Mobiledeviceid: this.state.deviceID
            };
            console.log('SIGNUP PARAMS - ', params);
            API.simplePostRequest('api/Account/signupuser', params)
                .then((data) => {
                    this.setState({
                        loadingCounter: false,
                    });
                    console.log(data);
                    if (data.jsonResponse.success) {
                        this.doLogin();
                    } else {
                        this.showAlertMessage(data.jsonResponse.message);
                    }
                })
                .catch((err) => {
                    this.setState({
                        loadingCounter: false,
                    });
                    console.log(err);
                    if (err.jsonResponse.status == false) {
                        this.showAlertMessage(err.jsonResponse.message);
                    }
                });
        }
    }
    LeftarrowandTitle = () => {
        return (
            <View style={{ margin: 10 }}>
                <CustomImage source={require('../../Assets/Image/left-arrow.png')} customstyle={{ height: 20, width: 20 }} onPress={() => this.props.navigation.navigate('Login')} />
                <CustomText

                    customStyle={{ color: AppTheme.APPCOLOR.BLACK, top: 10, fontWeight: 'bold', fontSize: 20 }}
                    text={strings.REGISTER_ACCOUNT}
                />
                <CustomText

                    customStyle={{ color: AppTheme.APPCOLOR.BLACK, top: 10, left: 10 }}
                    text={strings.SIGN_UP_YOUR_ACCOUNT}
                />


            </View>
        )
    }
    MobileNumerotpVerification = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <CustomTextInput
                    ref={(ref) => (this.nameInputTextRef = ref)}

                    style={[{ justifyContent: 'center', backgroundColor: AppTheme.APPCOLOR.MEDIUAM_GREY, width: Dimensions.get('screen').width / 1.2, borderRadius: 10 }]}
                    // returnKeyType={'next'}
                    placeholder={strings.NAME}
                    keyboardType={'text'}

                    color={AppTheme.APPCOLOR.WHITE}
                    placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                // onSubmitEditing={() => { this.phoneInputTextRef.focus(); }}
                />
                <CustomTextInput
                    ref={(ref) => (this.nameInputTextRef = ref)}

                    style={[{ justifyContent: 'center', backgroundColor: AppTheme.APPCOLOR.MEDIUAM_GREY, width: Dimensions.get('screen').width / 1.2, borderRadius: 10, top: 5 }]}
                    // returnKeyType={'next'}
                    placeholder={strings.LAST_NAME}
                    keyboardType={'text'}

                    color={AppTheme.APPCOLOR.WHITE}
                    placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                // onSubmitEditing={() => { this.phoneInputTextRef.focus(); }}
                />
                <CustomTextInput
                    ref={(ref) => (this.nameInputTextRef = ref)}

                    style={[{ justifyContent: 'center', backgroundColor: AppTheme.APPCOLOR.MEDIUAM_GREY, width: Dimensions.get('screen').width / 1.2, borderRadius: 10, top: 10 }]}
                    // returnKeyType={'next'}
                    placeholder={strings.MOBILE_NUMBER}
                    keyboardType={'number-pad'}

                    color={AppTheme.APPCOLOR.WHITE}
                    placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                // onSubmitEditing={() => { this.phoneInputTextRef.focus(); }}
                />
                <CustomButton
                    textname={strings.SIGN_UP}

                    onPress={() => {


                        this.doRegistration()
                    }}
                    style={{ backgroundColor: AppTheme.APPCOLOR.Turquoise, width: Dimensions.get('screen').width / 1.5, textAlign: 'center', top: 30, padding: 12, color: AppTheme.APPCOLOR.WHITE, borderRadius: 10 }}
                />

                <Text style={{ top: 40, color: AppTheme.APPCOLOR.BLACK }}>{strings.HAVE_AN_ACCOUNT} <Text style={{ color: AppTheme.APPCOLOR.Turquoise }} >{strings.SIGN_IN}</Text></Text>

            </View>

        )

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={false}
                    backgroundColor={AppTheme.APPCOLOR.Turquoise}
                    barStyle={'default'}
                />


                {this.LeftarrowandTitle()}

                {this.MobileNumerotpVerification()}


            </View>
        )
    }
}