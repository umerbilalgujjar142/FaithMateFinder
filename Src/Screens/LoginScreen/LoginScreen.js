import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import InputComponent from '../../GlobalComponent/InputComponent/InputComponent'
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import { loginUser } from '../../API/add'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const LoginUser = async () => {

        loginUser(email, password).then
            (response => {
                console.log("response", response.data.user.id)
                if (response.data.status == "success") {
                    alert(response.data.status)
                    setEmail('')
                    setPassword('')
                    AsyncStorage.setItem('token', response.data.token)
                    AsyncStorage.setItem('fullname', response.data.user.fullname)
                     props.navigation.navigate('Profile')
                    AsyncStorage.setItem('userid', JSON.stringify(response.data.user.id))
                    AsyncStorage.setItem('gender', response.data.user.gender)

                }
                else {
                    alert("User not exist")
                }
            }
            ).catch(error => {
                console.log("error", error)
            })
    }



    return (
        <View style={Styles.conatainer}>
            <View style={Styles.imageView}>
                <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
            </View>

            <View style={{ paddingHorizontal: wp(4) }}>
                <Text style={Styles.letsMatch}>Something great is brewing,</Text>
                <Text style={Styles.letsMatch}>So let’s get you connected!</Text>
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
                onChangeText={(text) => setEmail(text)}
                value={email}
            />


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
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <TouchableOpacity onPress={() => props.navigation.navigate("ResetPassword")} style={Styles.toucableForget}>
                <Text style={Styles.signUpText}>Forgot Password?</Text>
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
                onPress={() => LoginUser()}
                // onPress={() => { props.navigation.navigate('Profile') }}
            />



            <View style={Styles.doesntHave}>
                <Text style={Styles.forgettEXT}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignUpScreen")} >
                    <Text style={Styles.signUpText}> Sign Up</Text>
                </TouchableOpacity>
            </View >
        </View>
    )

}
export default LoginScreen;