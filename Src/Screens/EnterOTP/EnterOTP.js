import React, { useEffect,useState } from 'react';
import {
    Image,
    Text,
    View, TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import OTPComponent from './OTPComponent';


const EnterOTP = (props) => {

    const [email, setEmail] = useState(props?.route?.params?.email);

    return (
        <View style={Styles.conatainer}>
            <View style={Styles.imageView}>
                <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
            </View>
            <View style={{ paddingHorizontal: wp(6) }}>
                <Text style={Styles.EnterOTPText}>Verification Code</Text>
                <Text style={[Styles.EnterOTPText, { fontSize: wp(4), fontWeight: null, color: Assets.ic_Balck }]}>Enter the 5-digit code sent to</Text>
                <Text style={[Styles.EnterOTPText, { fontSize: wp(4), fontWeight: null, color: Assets.ic_Balck }]}>{email}</Text>
            </View>
            <OTPComponent Email={email} props={props}/>
        </View>
    )
}
export default EnterOTP;