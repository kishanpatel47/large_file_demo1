import { Alert, Linking, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import GetLocation from 'react-native-get-location';

// https://stackoverflow.com/questions/44719103/singleton-object-in-react-native
export default class Singleton {
    static myInstance = null;
    // UserCurrentLatitude = 0.0;
    // UserCurrentLongitude = 0.0;

    /**
     * @returns {Singleton}
     */
    static getInstance() {
        if (Singleton.myInstance == null) {
            Singleton.myInstance = new Singleton();
        }

        return this.myInstance;
    }


    LocationPermission = () => {
        if (Platform.OS == 'ios') {
            Geolocation.requestAuthorization('');
            this.GetCurrentPosition();
        } else {
            // Android
            const granted = PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.GetCurrentPosition();
            }
        }
    };

    GetCurrentPosition = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then((location) => {
                this.UserCurrentLatitude = location.latitude;
                this.UserCurrentLongitude = location.longitude;
            })
            .catch((error) => {
                const { code, message } = error;
                console.warn(code, message);
                Alert.alert('Location Error', JSON.stringify(error));
            });
    };
}
