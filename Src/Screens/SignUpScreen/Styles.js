import React, { useEffect } from 'react';
import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
const styles=StyleSheet.create({

container:{
    flex: 1, backgroundColor: '#fff'
},
signUptext:{
    color: Assets.ic_Balck,
     fontWeight: 'bold', 
    fontSize: wp(6), 
    top: wp(5), 
    paddingHorizontal: wp(4) 
},
View1:{
    paddingHorizontal: wp(4), marginTop: wp(10)
}
,
View2:{
    flexDirection: 'row', justifyContent: 'space-between'
}
,
selectionText:{
    color: Assets.ic_Balck, fontWeight: 'bold', fontSize: wp(4)
},
wantChange:{
    color: Assets.ic_primaryColor, fontSize: wp(3),textAlign:'right',width:wp(95),paddingHorizontal:wp(5)
},
ViewMale:{
    flexDirection: 'row', justifyContent: 'space-between', marginTop: wp(5),paddingHorizontal:wp(3)
},
ViewMale1:{
    height: hp(7), width: wp(40), borderColor: Assets.ic_waterColor, borderWidth: wp(0.5), borderRadius: wp(10),flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:wp(4)
}
,
ViewFemale:{
    height: hp(7), width: wp(40), borderColor: Assets.ic_Red, borderWidth: wp(0.5), borderRadius: wp(10),flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:wp(4)
}
})
export default styles;