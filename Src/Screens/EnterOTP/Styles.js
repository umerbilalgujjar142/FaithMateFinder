import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
const styles = StyleSheet.create({

    conatainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Images: {
        width: wp('50%'),
        height: hp('30%')
    },
    EnterOTPText: {
        color: Assets.ic_Balck, fontWeight: 'bold', fontSize: wp(6)
    },
    textForGmail: {
        fontSize: (3.7), width: wp(63), color: '#36454F',
    },
    otpComponwetn: {
        height: hp(7),
        width: wp(10),
        textAlign: 'center',
        fontSize: wp(4),
        borderRadius: wp(4),
        borderWidth: wp(0.6),
        borderColor: Assets.ic_primaryColor,
        marginRight: wp(4),
        // borderColor: 'gray',
        borderWidth: 1,
       
    },
    ViewMainOTP:{
        paddingHorizontal: wp(4), 
        marginTop: hp(5), 
        flexDirection: 'row', 
        justifyContent: 'center'
    }
})
export default styles;