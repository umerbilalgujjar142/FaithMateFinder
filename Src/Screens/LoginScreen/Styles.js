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
imageView:{
    justifyContent: 'center', 
    alignItems: 'center'
},
Images:{
    width: wp('50%'), 
    height: hp('30%') 
},
letsMatch:{
    color: Assets.ic_Balck, fontWeight: 'bold', fontSize: wp(6)
},
toucableForget:{
    flexDirection: 'row', justifyContent: 'flex-end', marginTop: wp(2), paddingHorizontal: wp(5)
},
signUpText:{
    color: Assets.ic_Balck, fontWeight: 'bold', fontSize: wp(4)
},
doesntHave:{
    flexDirection: 'row', justifyContent: 'center', marginTop: wp(2), paddingHorizontal: wp(5)
},
forgettEXT:{
    color: Assets.ic_primaryColor, fontWeight: 'bold', fontSize: wp(4) 
}
})
export default styles;