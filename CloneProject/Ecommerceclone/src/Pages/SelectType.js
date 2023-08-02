import { Text, View, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../helper/AppTheme'
import Swiper from 'react-native-swiper'
export default class SelectType extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {






        return (
            <View style={{ flex: 1, backgroundColor: AppTheme.APPCOLOR.Whitegrey }}>
                <StatusBar
                    translucent={false}
                    backgroundColor={AppTheme.APPCOLOR.Whitegrey}
                    barStyle={'default'}
                />

                <View style={{ flexDirection: 'column', height: '78%', alignSelf: 'center' }}>
                    <Swiper activeDotColor='#589f72' autoplay>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Image
                                style={{ height: Dimensions.get('screen').height * 0.48 }}
                                source={require('../../Assets/Image/silder.png')}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: AppTheme.APPCOLOR.BLACK, }}>Tea  is Good  heath now</Text>
                            <Text style={{ fontSize: 12, color: AppTheme.APPCOLOR.BLACK }}>Tea is an aromatic beverage  prepared by pouring hot </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Image
                                style={{ resizeMode: 'stretch', height: Dimensions.get('screen').height * 0.48 }}
                                source={require('../../Assets/Image/istockphoto.png')}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: AppTheme.APPCOLOR.BLACK, }}>Tea  is Good  heath now</Text>
                            <Text style={{ fontSize: 12, color: AppTheme.APPCOLOR.BLACK }}>Tea is an aromatic beverage  prepared by pouring hot </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image
                                style={{ resizeMode: 'stretch', height: Dimensions.get('screen').height * 0.48 }}
                                source={require('../../Assets/Image/silder3.png')}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: AppTheme.APPCOLOR.BLACK, }}>Tea  is Good  heath now</Text>
                            <Text style={{ fontSize: 12, color: AppTheme.APPCOLOR.BLACK }}>Tea is an aromatic beverage  prepared by pouring hot </Text>
                        </View>
                    </Swiper>

                </View>

                <View style={{ flexDirection: 'column', bottom: 0, position: 'absolute', flex: 1, alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Dashboard') }}>
                        <View style={{ bottom: Dimensions.get('screen').width * 0.08, backgroundColor: AppTheme.APPCOLOR.Turquoise, alignItems: 'center', alignContent: 'center', width: Dimensions.get('screen').width * 0.95, padding: 15, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: AppTheme.APPCOLOR.WHITE }} >GET STARTED</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}>
                        <View style={{ bottom: Dimensions.get('screen').width * 0.07, backgroundColor: AppTheme.APPCOLOR.Greywhite, alignItems: 'center', alignContent: 'center', width: Dimensions.get('screen').width * 0.95, padding: 15, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: AppTheme.APPCOLOR.Turquoise }} >Sign in</Text>

                        </View>
                    </TouchableOpacity>
                </View>


            </View>

        )
    }
}
