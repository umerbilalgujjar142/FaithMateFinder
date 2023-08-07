import React, { useEffect, useState } from 'react';
import {
  View,Image,Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from '../EnterOTP/Styles'
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import InputComponent from '../../GlobalComponent/InputComponent/InputComponent';
import { ConfirmPassword } from '../../API/add'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmPasswords = (props) => {

  const [passwords, setPasswords] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const Confirm = async () => {
    const userId = await AsyncStorage.getItem('userid')
    if (passwords == confirmPassword) {
      try {
        const res = await ConfirmPassword(userId, passwords)
        if (res.data.status == 200) {
          props.navigation.navigate('LoginScreen')

          alert(res.data.message)
          setPasswords('')
          setConfirmPassword('')
        } else {
          alert(res.data.message)
        }
      } catch (error) {
        console.error(error)
        alert("An error occurred while updating the password.")
      }
    } else {
      alert("Password does not match")
    }
  }


  return (
    <View style={Styles.conatainer}>
      <View style={Styles.imageView}>
        <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
      </View>
      <View style={{ paddingHorizontal: wp(6) }}>
        <Text style={Styles.EnterOTPText}>Create new password</Text>
        <Text style={[Styles.EnterOTPText,{fontSize:wp(4),fontWeight:null,color:Assets.ic_Balck}]}>Enter your new password below</Text>


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
        placeholder={'Password'}
        placeholderTextColor={'#000'}
        secureTextEntry={true}
        onChangeText={(text) => setPasswords(text)}
        value={passwords}
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
        placeholder={'Confirm Password'}
        placeholderTextColor={'#000'}
        secureTextEntry={true}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />


      <LinearGradientBtn
        width={wp(90)}
        height={hp(7)}
        borderRadius={wp(10)}
        marginTop={wp(5)}
        alignSelf={'center'}
        textColor={'#fff'}
        text={'Submit'}
        onPress={() => { Confirm() }}
      // onPress={() => { props.navigation.navigate('EnterOTP', { email }) }}

      />
    </View>


  )
}
export default ConfirmPasswords;
