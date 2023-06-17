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
textStyle:{
    fontSize: wp(10), 
    color: Assets.ic_primaryColor
},
faithViw:{
    paddingHorizontal: wp(5),
     marginTop: wp(2)
}
,
toucableLogin:{
    flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(5), marginTop: wp(5)
},
ViewStarted:{
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: Assets.ic_primaryColor, borderRadius: wp(10), paddingHorizontal: wp(2), paddingVertical: wp(2)
},
textStarted:{
    color: '#fff', padding: wp(2), fontSize: wp(4), marginLeft: wp(2), marginRight: wp(1)
}


})
export default styles;
