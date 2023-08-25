import {PermissionsAndroid } from 'react-native';


const requestPermission = async () => {

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location Access Required',
                message: 'FaithMateFinder needs to Access your location',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        } else {
            alert('Permission Denied');
        }
    } catch (err) {
        console.warn(err);
    }
}

export default { requestPermission }   