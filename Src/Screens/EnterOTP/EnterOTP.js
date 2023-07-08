import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import ButtonComponent from '../../GlobalComponent/ButtonComponent/ButtonComponent';
import OTPComponent from './OTPComponent';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';


const EnterOTP = (props) => {

    return (
        <View style={Styles.conatainer}>
            <View style={Styles.imageView}>
                <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
            </View>


            <View style={{ paddingHorizontal: wp(4) }}>
                <Text style={Styles.EnterOTPText}>Verification code</Text>
                <Text style={Styles.textForGmail}>Please Enter the 5 digit OTP on chumergujjar@gmail.com</Text>
            </View>


            <OTPComponent />



            <LinearGradientBtn
                   width={wp(90)}    
                   height={hp(7)}
                   borderRadius={wp(10)}
                   marginTop={wp(5)}
                   alignSelf={'center'}
                   textColor={'#fff'}
                   text={'Verify OTP'}
                   onPress={() => props.navigation.navigate('LoginScreen')}
                />

            <ButtonComponent
                width={wp(90)}
                height={hp(7)}
                backgroundColor={'#fff'}
                borderRadius={wp(5)}
                borderWidth={wp(0.4)}
                // paddingLeft={wp(5)}
                marginTop={wp(3)}
                alignSelf={'center'}
                textColor={'#000'}
                text={'Resend OTP'}
                onPress={() => props.navigation.navigate('Resend OTP')}
            />


        </View>
    )
}
export default EnterOTP;