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
EnterOTPText:{
    color: Assets.ic_Balck, fontWeight: 'bold', fontSize: wp(6)
},
textForGmail:{
    fontSize:(3.5), width: wp(63), color: '#36454F' 
}
})
export default styles;