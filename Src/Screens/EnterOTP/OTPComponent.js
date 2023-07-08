import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
const OTPComponent = (props) => {   
return (
    <View style={Styles.ViewMainOTP}>
   
    <TextInput
        style={Styles.otpComponwetn
        }
        placeholder='1'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={Styles.otpComponwetn}
        placeholder='2'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={Styles.otpComponwetn}
        placeholder='3'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={Styles.otpComponwetn}
        placeholder='4'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={Styles.otpComponwetn}
        placeholder='5'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />
</View>


)



}
export default OTPComponent;