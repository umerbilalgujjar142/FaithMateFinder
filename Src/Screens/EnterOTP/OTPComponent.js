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
    <View style={{ paddingHorizontal: wp(4), marginTop: hp(5), flexDirection: 'row', justifyContent: 'center' }}>
    <TextInput
        style={{ height: hp(7), width: wp(10), textAlign: 'center', fontSize: wp(4), borderRadius: wp(4), borderWidth: wp(0.6), borderColor: Assets.ic_primaryColor, marginRight: wp(4), borderColor: 'gray', borderWidth: 1 }}
        placeholder='1'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={{ height: hp(7), width: wp(10), textAlign: 'center', fontSize: wp(4), borderRadius: wp(4), borderWidth: wp(0.6), borderColor: Assets.ic_primaryColor, marginRight: wp(4), borderColor: 'gray', borderWidth: 1 }}
        placeholder='2'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={{ height: hp(7), width: wp(10), textAlign: 'center', fontSize: wp(4), borderRadius: wp(4), borderWidth: wp(0.6), borderColor: Assets.ic_primaryColor, marginRight: wp(4), borderColor: 'gray', borderWidth: 1 }}
        placeholder='3'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={{ height: hp(7), width: wp(10), textAlign: 'center', fontSize: wp(4), borderRadius: wp(4), borderWidth: wp(0.6), borderColor: Assets.ic_primaryColor, borderColor: 'gray', marginRight: wp(4), borderWidth: 1 }}
        placeholder='4'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />

    <TextInput
        style={{ height: hp(7), width: wp(10), textAlign: 'center', fontSize: wp(4), borderRadius: wp(4), borderWidth: wp(0.6), marginRight: wp(4), borderColor: Assets.ic_primaryColor, borderColor: 'gray', borderWidth: 1 }}
        placeholder='5'
        keyboardType='numeric'
        maxLength={1}
        placeholderTextColor={Assets.ic_Balck}
    />
</View>


)



}
export default OTPComponent;