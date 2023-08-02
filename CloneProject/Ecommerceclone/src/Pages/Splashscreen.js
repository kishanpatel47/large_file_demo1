
import { Text, View, StatusBar, Image } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../helper/AppTheme'
import Singleton from '../helper/Singleton';

import { LogBox } from 'react-native';
export default class Splashscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    buttonPressed = () => {
        this.props.navigation.navigate('SelectType')

        // Singleton.getInstance()
        //   .getUserInfo()
        //   .then((jsonValue) => {
        //     if (jsonValue == null) {
        //       console.log('USER NOT LOGGED IN');
        //       var jsonObject = JSON.parse(jsonValue);
        //       this.props.navigation.replace('login');
        //     } else {
        //       console.log('USER LOGGED IN');
        //       this.props.navigation.replace('dashboard');
        //       // AsyncStorage.getItem('isNotification').then((jsonValue) => {
        //       //   console.log(jsonValue);
        //       //   if (jsonValue == 'true') {
        //       //     this.props.navigation.navigate('NotificationList', {});
        //       //   } else {
        //       //     this.props.navigation.replace('dashboard');
        //       //   }
        //       // });
        //     }
        //   });
    };

    componentDidMount = () => {
        Singleton.getInstance().LocationPermission();
        LogBox.ignoreAllLogs(true)
        setTimeout(() => {
            console.warn('data')
            this.buttonPressed();

            // this.props.navigation.navigate('SelectType');
            // alert('data')
        }, 2000)
    }
    render() {
        const BackgroundImage = (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image
                    source={require('../../Assets/Image/fontlogo.png')}
                    style={{ alignSelf: 'center' }}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: AppTheme.APPCOLOR.WHITE, fontSize: 25 }}>Kupa</Text>
            </View>
        )
        return (
            <View style={{ flex: 1, backgroundColor: AppTheme.APPCOLOR.Turquoise }}>
                <StatusBar
                    translucent={false}
                    backgroundColor={AppTheme.APPCOLOR.Turquoise}
                    barStyle={'default'} />
                {BackgroundImage}
            </View>
        )
    }
}