import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import ButtonComponent from '../../GlobalComponent/ButtonComponent/ButtonComponent';
import ProileComponent from './ProfileComponent';
import LinearGrdientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';

const Profile = (props) => {

    return (
        <View style={Styles.conatainer}>
            <Text style={{ top: wp(10), fontSize: wp(5), paddingHorizontal: wp(5), color: Assets.ic_Balck, fontWeight: 'bold' }}>Set Profile</Text>

           
            <View style={{ top: wp(15), justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Assets.ic_Profile} style={{ width: wp(30), height: wp(30), borderRadius: wp(15), borderWidth: wp(0.5), borderColor: Assets.ic_primaryColor }} />
                {/* <Image source={Assets.ic_logo} style={{ width: wp(10), height: wp(10), position: 'absolute', bottom: wp(0), right: wp(0) }} /> */}
                </View>
          
        <ProileComponent/>

        <LinearGrdientBtn
            width={wp(90)}
            height={wp(12)}
            borderRadius={wp(10)}
            text={'Save'}
            textColor={'#fff'}
            backgroundColor={'#fff'}
            borderColor={Assets.ic_primaryColor}
            borderWidth={wp(0.5)}
            alignSelf={'center'}
            top={wp(40)}
            onPress={() => { props.navigation.navigate('Personality') }}
        />


        </View>
    )
}
export default Profile;