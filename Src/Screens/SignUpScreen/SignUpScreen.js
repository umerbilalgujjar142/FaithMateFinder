import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    View, Pressable
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import InputComponent from '../../GlobalComponent/InputComponent/InputComponent'
import Malesymbol from 'react-native-vector-icons/Foundation';
import Femalesymbol from 'react-native-vector-icons/Foundation';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import { addNewUser } from '../../API/add'


const SignUpScreen = (props) => {
    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');
    const [isMalePressed, setIsMalePressed] = useState(false);
    const [isFemalePressed, setIsFemalePressed] = useState(false);
  


    const handlePressIn = (selectedGender) => {
      setGender(selectedGender);
      setIsMalePressed(selectedGender === 'Male');
      setIsFemalePressed(selectedGender === 'Female');
    };

    const RegisterUser = async () => {
        
        addNewUser(fullname,gender,email,password,confirmPassword).then
        (response => {
            console.log("response", response.data.status)
            if (response.data.status == "success") {
                alert(response.data.status)
                props.navigation.navigate('LoginScreen')
            }
            else {
                alert("User already exist")
            }
        }
        ).catch(error => {
            console.log("error", error)
        })

    }



    return (
        <View styles={Styles.container}>
            <Text style={Styles.signUptext}>Sign Up</Text>

            <View style={Styles.View1}>
                <View style={Styles.View2}>
                    {/* <Text style={Styles.selectionText}>First Name</Text> */}

                    <Text style={Styles.wantChange}>Your username once created, cannot be changed </Text>
                </View>

                <InputComponent
                    width={wp(90)}
                    height={hp(7)}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderRadius={wp(5)}
                    borderWidth={wp(0.4)}
                    paddingLeft={wp(5)}
                    marginTop={wp(1)}
                    alignSelf={'center'}
                    placeholder={'Full Name'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={false}
                    onChangeText={(text) => setFullname(text)}
                    value={fullname}
                />


                <View style={{ marginTop: wp(3) }}>

                    {/* <Text style={Styles.selectionText}>Select Gender</Text> */}
                    <View style={Styles.ViewMale}>

                        <TouchableOpacity onPress={() => handlePressIn('Male')}
                            style={[Styles.ViewMale1, 
                            
                                {
                                    borderColor: isMalePressed ? 'red' : Assets.ic_waterColor,
                                    borderWidth: isMalePressed ? wp(0.65) : wp(0.5),
                                  },
                            ]}>
                            <Text style={{ marginTop: wp(3.5) }}>Male</Text>
                            
                            <Malesymbol name="male-symbol" size={wp(5)} 
                            color={Assets.ic_Balck} style={{ marginTop: wp(3.5) }} />
                        
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handlePressIn('Female')}
                            style={[Styles.ViewFemale,
                            
                                {
                                    borderColor: isFemalePressed ? 'red' : Assets.ic_waterColor,
                                    borderWidth: isFemalePressed ? wp(0.65) : wp(0.5),
                                  },
                            ]}>
                            <Text style={{ marginTop: wp(3.5) }}>Female</Text>
                            <Femalesymbol name="female-symbol" size={wp(5)} color={Assets.ic_Balck} style={{ marginTop: wp(3.5) }} />
                        </TouchableOpacity>
                    </View>
                </View>


                <InputComponent
                    width={wp(90)}
                    height={hp(7)}
                    border={'#fff'}
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

                {/* for confirm password field */}
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
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPass(text)}
                    value={confirmPassword}
                />

                <LinearGradientBtn
                    width={wp(90)}
                    height={hp(7)}
                    borderRadius={wp(10)}
                    marginTop={wp(5)}
                    alignSelf={'center'}
                    textColor={'#fff'}
                    text={'Signup'}
                    // onPress={() => props.navigation.navigate('LoginScreen')}
                    onPress={() => RegisterUser()}

                />

            </View>
        </View>

    )
}
export default SignUpScreen;