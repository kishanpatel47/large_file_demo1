import { Image, Text, View, StatusBar, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import AppBase from '../AppBase'

import AppTheme from '../helper/AppTheme'
import CustomText from '../helper/customView/CustomText'
import strings from '../LanguageFiles/LocalizedString'
import CustomImage from '../helper/customView/CustomIcon'
import CustomTextInput from '../helper/customView/CustomTextInput'
import CustomButton from '../helper/customView/CustomButton'
import API from '../connection/http_utils'

import { decode as atob, encode as btoa } from 'base-64';
import auth from '@react-native-firebase/auth';

export default class Login extends AppBase {

    constructor(props) {
        super(props);
        this.state = {
            // isOTpSent: false,
            // userIdText: '',
        }
    }


    sendOTP = () => {
        if (this.validateMobile(this.state.userIdText)) {
            this.showAlertMessage(strings.OTPSend_Successfully);
            this.setState({ isOTPSent: true, loadingCounter: true });
            const strUser = btoa(
                API.encrpt(
                    JSON.stringify({
                        UserName: this.state.userIdText,
                        MobileDeviceId: this.state.deviceID,
                    }),
                ),
            );
            // this.disableResend();
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
            console.log(API.encryptedString(strUser))
            API.simplePostRequest('api/Account/login', API.encryptedString(strUser))
                .then((dataenc) => {
                    // const res = API.decrpt(dataenc.jsonResponse._bodyBlob.headers.ok);
                    console.log(dataenc.jsonResponse);
                    this.setState({ isOTPSent: true, loadingCounter: false });
                    // if (res.data.isValidate) {
                    //   this.setState({ isOTPSent: true });
                    // console.log(this.isOTPSent);
                    // }
                })
                .catch((err) => {
                    this.setState({ loadingCounter: false });
                    console.log(err);
                    if (err.jsonResponse.status == false) {
                        this.showAlertMessage(err.jsonResponse.message);
                    }
                });
        } else {
            this.showAlertMessage(strings.Valid_Mobile);
        }
    };

    doLogin = () => {
        if (!this.validateMobile(this.state.userIdText)) {
            this.showAlertMessage(strings.Valid_Mobile);
        } else if (this.state.passwordText.length <= 0) {
            this.showAlertMessage(strings.Valid_OTP);
        } else {
            // this.setState({
            //     loadingCounter: true,
            // });
            let loginParam = JSON.parse(
                JSON.stringify({
                    username: this.state.userIdText,
                    password: this.state.passwordText,
                }),
            );
            const upwd = API.getUserPassword(
                this.state.userIdText,
                this.state.passwordText,
            );
            API.encrypt(upwd.user)
                .then((encUsername) => {
                    // console.log(encUsername);
                    loginParam.username = btoa(encUsername);
                    API.encrypt(upwd.pwd).then((encPassword) => {
                        loginParam.password = btoa(encPassword);
                        // console.log('loginParam', loginParam);
                        API.authApi(loginParam)
                            .then((data) => {
                                // this.setState({
                                //     loadingCounter: false,
                                // });
                                console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                                console.log(data.jsonResponse);
                                if (data.jsonResponse.access_token) {
                                    this.SaveUserInfo(data.jsonResponse);
                                    this.saveToken(data.jsonResponse.access_token);
                                    this.props.navigation.replace('dashboard');
                                } else {
                                    this.showAlertMessage(data.jsonResponse.error_description);
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
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    LeftarrowandTitle = () => {
        return (
            <View style={{ margin: 10 }}>
                <CustomImage source={require('../../Assets/Image/left-arrow.png')} customstyle={{ height: 20, width: 20 }} onPress={() => Alert.alert("Are you sure Logout", {

                })} />
                <CustomText

                    customStyle={{ color: AppTheme.APPCOLOR.BLACK, top: 10, fontWeight: 'bold', fontSize: 20 }}
                    text={strings.WELCOME_BACK}
                />
                <CustomText

                    customStyle={{ color: AppTheme.APPCOLOR.BLACK, top: 10 }}
                    text={strings.SIGN_YOUR_ACCOUNT}
                />


            </View>
        )
    }
    GOOGLE_LOGIN = () => {

        auth()
            .createUserWithEmailAndPassword('ja.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    MobileNumerotpVerification = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <CustomTextInput
                    ref={(ref) => (this.nameInputTextRef = ref)}

                    style={[{ justifyContent: 'center', backgroundColor: AppTheme.APPCOLOR.MEDIUAM_GREY, width: Dimensions.get('screen').width / 1.2, borderRadius: 10 }]}
                    // returnKeyType={'next'}
                    placeholder={strings.MOBILE_NUMBER}
                    keyboardType={'number-pad'}

                    color={AppTheme.APPCOLOR.WHITE}
                    placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                    onChangeText={(value) => {

                        this.setState({ userIdText: value })
                    }
                    }
                // onSubmitEditing={() => { this.phoneInputTextRef.focus(); }}
                />
                <CustomTextInput
                    textContentType='oneTimeCode'
                    autoComplete='sms-otp'
                    maxLength={6}
                    ref={(ref) => (this.passwordInputTextRef = ref)}
                    onSubmitEditing={() => {
                        this.doLogin()
                        Keyboard.dismiss()
                    }}

                    color={AppTheme.APPCOLOR.WHITE}
                    secureTextEntry={this.state.hidePassword}
                    style={[{ top: 10, paddingLeft: 12, justifyContent: 'center', backgroundColor: AppTheme.APPCOLOR.MEDIUAM_GREY, width: Dimensions.get('screen').width / 1.2, borderRadius: 10 }]}
                    keyboardType={"numeric"}
                    returnKeyType={'done'}
                    placeholder={strings.OTP}
                    placeholderTextColor={AppTheme.APPCOLOR.WHITE}
                    onChangeText={(value) =>
                        this.setState({ passwordText: value })
                    }
                />

                <View style={{ alignSelf: 'flex-end', right: 35, top: 15 }}>
                    <CustomButton textname={strings.RESEND_OTP} style={{ color: AppTheme.APPCOLOR.Turquoise, alignItems: 'flex-end' }} />
                </View>

                <CustomButton
                    textname={strings.SIGN_IN}

                    onPress={() => {
                        if (this.state.isOTpSent && this.state.userIdText) {
                            this.doLogin()
                        }
                        else {
                            this.sendOTP()
                        }
                    }
                    }
                    style={{ backgroundColor: AppTheme.APPCOLOR.Turquoise, width: Dimensions.get('screen').width / 1.5, textAlign: 'center', top: 30, padding: 12, color: AppTheme.APPCOLOR.WHITE, borderRadius: 10 }}
                />

                <Text style={{ top: 40, color: AppTheme.APPCOLOR.BLACK }}>{strings.DONTAHAVEACCOUNT} <Text style={{ color: AppTheme.APPCOLOR.Turquoise }} onPress={() => this.props.navigation.navigate('RegisterScreen')}>{strings.SIGN_UP}</Text></Text>

                <View>
                    {this.Social_Login()}

                </View>

            </View>





        )

    }

    Social_Login = () => {
        return (
            <TouchableOpacity onPress={() => this.GOOGLE_LOGIN()}>
                <View style={{ borderRadius: 15, top: 65, padding: 10, backgroundColor: AppTheme.APPCOLOR.GREY, width: Dimensions.get('screen').width / 1.3, flexDirection: 'row' }}>

                    <Image source={require('../../Assets/Image/google.png')} style={{ justifyContent: 'center', }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'right', color: AppTheme.APPCOLOR.BLACK }}>{strings.GOOGLE_LOGIN}</Text>
                    </View>

                </View>
            </TouchableOpacity>


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
    // {this.Social_Login()}