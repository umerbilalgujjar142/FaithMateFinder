import React, { useEffect,useState } from 'react';
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


const EnterOTP = (props) => {

    const [email, setEmail] = useState(props?.route?.params?.email);

    return (
        <View style={Styles.conatainer}>
            <View style={Styles.imageView}>
                <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
            </View>
            <View style={{ paddingHorizontal: wp(4) }}>
                <Text style={Styles.EnterOTPText}>Verification code</Text>
                <Text style={Styles.textForGmail}>Please Enter the 5 digit OTP on chumergujjar@gmail.com</Text>
            </View>
            <OTPComponent Email={email}/>
        </View>
    )
}
export default EnterOTP;