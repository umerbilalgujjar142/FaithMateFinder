import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import ButtonComponent from '../../GlobalComponent/ButtonComponent/ButtonComponent';
import { EnterOTP } from '../../API/add'

const OTPComponent = (props) => {

    const [otp, setOtp] = React.useState(['', '', '', '', '']);
    const [email, setEmail] = React.useState(props?.Email);
    const navigation = props.props.navigation;

    const handleOTPChange = (value, index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
    };

    const handleSubmitButton = () => {

        const formattedOTP = otp.join('');
        EnterOTP(formattedOTP, email).then((res) => {
            console.log("res--->>>", res.data);
            if (res.status == 200) {
                console.log("res", res);
                props.navigation.navigate('ConfirmPasswords')
            }
            else {
                console.log("res", res);
                alert(res.message)
            }
        }
        ).catch((err) => {
            console.log("err", err);
        }
        )
    }


    return (
        <>

            <View style={Styles.ViewMainOTP}>

                <TextInput
                    style={Styles.otpComponwetn}
                    placeholder='1'
                    keyboardType='numeric'
                    maxLength={1}
                    value={otp?.[0] || ''}
                    onChangeText={(value) => handleOTPChange(value, 0)}
                    placeholderTextColor={Assets.ic_Balck}
                />

                <TextInput
                    style={Styles.otpComponwetn}
                    placeholder='2'
                    keyboardType='numeric'
                    maxLength={1}
                    value={otp?.[1] || ''}
                    onChangeText={(value) => handleOTPChange(value, 1)}

                    placeholderTextColor={Assets.ic_Balck}
                />

                <TextInput
                    style={Styles.otpComponwetn}
                    placeholder='3'
                    keyboardType='numeric'
                    maxLength={1}
                    value={otp?.[2] || ''}
                    onChangeText={(value) => handleOTPChange(value, 2)}

                    placeholderTextColor={Assets.ic_Balck}
                />

                <TextInput
                    style={Styles.otpComponwetn}
                    placeholder='4'
                    value={otp?.[3] || ''}
                    onChangeText={(value) => handleOTPChange(value, 3)}
                    keyboardType='numeric'

                    maxLength={1}
                    placeholderTextColor={Assets.ic_Balck}
                />

                <TextInput
                    style={Styles.otpComponwetn}
                    placeholder='5'
                    keyboardType='numeric'
                    maxLength={1}
                    value={otp?.[4] || ''}
                    onChangeText={(value) => handleOTPChange(value, 4)}

                    placeholderTextColor={Assets.ic_Balck}
                />
            </View>

            <LinearGradientBtn
                width={wp(90)}
                height={hp(7)}
                borderRadius={wp(10)}
                marginTop={wp(5)}
                alignSelf={'center'}
                textColor={'#fff'}
                text={'Verify OTP'}
                // onPress={() => { handleSubmitButton() }}
                onPress={() => navigation.navigate('ConfirmPasswords')}
            />

            <ButtonComponent
                width={wp(90)}
                height={hp(7)}
                backgroundColor={'#fff'}
                borderRadius={wp(5)}
                borderWidth={wp(0.4)}
                marginTop={wp(3)}
                alignSelf={'center'}
                textColor={'#000'}
                text={'Resend OTP'}
            // onPress={() => setIsConfirm(true)}
            />

        </>
    )



}
export default OTPComponent;