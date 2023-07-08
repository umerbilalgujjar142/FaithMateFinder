import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import InputComponent from '../../GlobalComponent/InputComponent/InputComponent'
import ButtonComponent from '../../GlobalComponent/ButtonComponent/ButtonComponent';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';


const LoginScreen = (props) => {

    return (
        <View style={Styles.conatainer}>
            <View style={Styles.imageView}>
                <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
            </View>

            <View style={{ paddingHorizontal: wp(4) }}>
                <Text style={Styles.letsMatch}>LET'S Match your</Text>
                <Text style={Styles.letsMatch}>Favorite</Text>
            </View>


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
                {/* for password field */}
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
                    placeholder={'Password'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={true}
                    onChangeText={(text) => console.log(text)}
                    value={''}
                />

                <TouchableOpacity onPress={()=>props.navigation.navigate("ResetPassword")} style={Styles.toucableForget}>
                    <Text style={Styles.signUpText}>Forget Password?</Text>
                </TouchableOpacity>


                <LinearGradientBtn
                    width={wp(83)}
                    height={wp(12)}
                    borderRadius={wp(10)}
                    text={'Login'}
                    textColor={Assets.ic_Balck}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderWidth={wp(0.5)}
                    alignSelf={'center'}
                    top={wp(1)}
                    onPress={() => { props.navigation.navigate('Profile') }}
                />

              

                <View  style={Styles.doesntHave}>
                    <Text style={Styles.forgettEXT}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("SignUpScreen")} >
                    <Text style={Styles.signUpText}> Sign Up</Text>
                    </TouchableOpacity>
                    </View >
        </View>
    )

}
export default LoginScreen;