import React, { useEffect } from 'react';
import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
const styles = StyleSheet.create({

    conatainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: wp(7)
    },

    faithViw: {

        marginTop: wp(2)
    },
    textStyle: {
        fontSize: wp(7),
        color: Assets.ic_primaryColor
    },
    textPersonality: {
        color: Assets.ic_Balck,
        fontSize: wp(4),
        marginTop: wp(5),
        textAlign: 'center'
    }



})
export default styles;