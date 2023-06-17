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
import Malesymbol from 'react-native-vector-icons/Foundation';
import Femalesymbol from 'react-native-vector-icons/Foundation';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';



const SignUpScreen = (props) => {

    return (
        <View styles={Styles.container}>
            <Text style={Styles.signUptext}>Sign Up</Text>

            <View style={Styles.View1}>
                <View style={Styles.View2}>
                    <Text style={Styles.selectionText}>First Name</Text>

                    <Text style={Styles.wantChange}>Wan't be able to change name later</Text>
                </View>

                <InputComponent
                    width={wp(90)}
                    height={hp(7)}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderRadius={wp(5)}
                    borderWidth={wp(0.5)}
                    paddingLeft={wp(5)}
                    marginTop={wp(1)}
                    alignSelf={'center'}
                    placeholder={'First Name'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={false}
                    onChangeText={(text) => console.log(text)}
                    value={''}
                />


                <View style={{ marginTop: wp(3) }}>

                    <Text style={Styles.selectionText}>Select Gender</Text>
                    <View style={Styles.ViewMale}>
                        <View style={Styles.ViewMale1}>
                            <Text style={{ marginTop: wp(3.5) }}>Male</Text>
                            <Malesymbol name="male-symbol" size={wp(5)} color={Assets.ic_Balck} style={{ marginTop: wp(3.5) }} />
                        </View>

                        <View style={Styles.ViewFemale}>
                            <Text style={{ marginTop: wp(3.5) }}>Female</Text>
                            <Femalesymbol name="female-symbol" size={wp(5)} color={Assets.ic_Balck} style={{ marginTop: wp(3.5) }} />
                        </View>
                    </View>
                </View>

             {/* for email field */}
                <InputComponent
                    width={wp(90)}
                    height={hp(7)}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderRadius={wp(5)}
                    borderWidth={wp(0.5)}
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
                    borderWidth={wp(0.5)}
                    paddingLeft={wp(5)}
                    marginTop={wp(5)}
                    alignSelf={'center'}
                    placeholder={'Password'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={true}
                    onChangeText={(text) => console.log(text)}
                    value={''}
                />

                {/* for confirm password field */}
                <InputComponent
                    width={wp(90)}
                    height={hp(7)}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderRadius={wp(5)}
                    borderWidth={wp(0.5)}
                    paddingLeft={wp(5)}
                    marginTop={wp(5)}
                    alignSelf={'center'}
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={true}
                    onChangeText={(text) => console.log(text)}
                    value={''}
                />

                {/* for signup button */}
                <LinearGradientBtn
                   width={wp(90)}    
                   height={hp(7)}
                //    backgroundColor={Assets.ic_Balck}
                   borderRadius={wp(10)}
                //    borderWidth={wp(0.5)}
                   paddingLeft={wp(5)}
                   marginTop={wp(5)}
                   alignSelf={'center'}
                   textColor={'#fff'}
                   text={'Signup'}
                   onPress={() => props.navigation.navigate('LoginScreen')}
                />

            </View>
        </View>

    )
}
export default SignUpScreen;