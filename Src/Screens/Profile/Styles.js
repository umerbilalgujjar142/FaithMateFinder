import React, { useEffect } from 'react';
import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';

const styles=StyleSheet.create({

conatainer:{
    flex: 1,
     backgroundColor: '#fff'
},
profileView: {
    height: hp(17),
    width: wp(30),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: wp(15),
},

imageAvatar: {
    height: hp(16),
    width: hp(16),
    resizeMode: 'cover',
    borderRadius: hp(16),
    borderWidth: wp(0.5),
    borderColor: Assets.ic_primaryColor,
},

})
export default styles;