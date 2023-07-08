import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import InputComponent from '../../GlobalComponent/InputComponent/InputComponent'
import ButtonComponent from '../../GlobalComponent/ButtonComponent/ButtonComponent';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';


const ResetPassword = (props) => {

    return (
        <View style={Styles.conatainer}>
            <View style={Styles.imageView}>
                <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
            </View>

            <View style={{ paddingHorizontal: wp(4) }}>
                <Text style={Styles.RestPass}>Reset Password</Text>
                <Text style={Styles.oppsText}>Opps. It happens to the best of us. Input your email to fix the issue.</Text>
            </View>

            {/* input for email */}
            <InputComponent
                width={wp(90)}
                height={hp(7)}
                backgroundColor={'#fff'}
                borderColor={Assets.ic_primaryColor}
                borderRadius={wp(5)}
                borderWidth={wp(0.4)}
                paddingLeft={wp(5)}
                marginTop={wp(5)}
                alignSelf={'center'}
                placeholder={'Email'}
                placeholderTextColor={'#000'}
                secureTextEntry={false}
                onChangeText={(text) => console.log(text)}
                value={''}
            />
            {/* for button */}


            <LinearGradientBtn
                   width={wp(90)}    
                   height={hp(7)}
                   borderRadius={wp(10)}
                   marginTop={wp(5)}
                   alignSelf={'center'}
                   textColor={'#fff'}
                   text={'Submit'}
                   onPress={() => props.navigation.navigate('EnterOTP')}
                />

        </View>
    )
}

export default ResetPassword;

