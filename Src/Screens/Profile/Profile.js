import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    View, TouchableOpacity, Button
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import LinearGrdientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageComponent from '../../GlobalComponent/ImageComponent/ImageComponent'
import { UpdateProfile, getProfileData } from '../../API/add'
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputComponent from '../../GlobalComponent/InputComponent/InputComponent';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';


const Profile = (props) => {

    const [file, setFile] = useState("");
    const [filePath, setFilePath] = useState('')
    const [Bios, setBio] = useState('')
    const [Age, setAge] = useState('')
    const [ageRange, setAgeRange] = useState([18, 65]);



    const handleSliderChange = (values) => {
        setAgeRange(values);
    };
    const chooseFile = async (type) => {

        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };

        let isStoragePermitted = await ImageComponent.requestExternalWritePermission();
        if (isStoragePermitted) {
            launchImageLibrary(options, (response) => {

                if (response.didCancel) {
                    console.log('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    console.log('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    console.log('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    console.log(response.errorMessage);
                    return;
                }
                setFilePath(response.assets);
                response.assets.map((item, index) => {
                    setFile(item.fileName)
                }
                )
            });
        }
    };


    const UpdateProfileData = async () => {
        const USERID = await AsyncStorage.getItem('userid');
        try {
            const response = await UpdateProfile(Bios, Age, filePath, USERID, ageRange);
            if (response && response.data && response.data.status === 'success') {
                alert("Profile Updated Successfully");
                props.navigation.navigate('Personality')

            } else {
                console.log('Something went wrong', response.data);
                alert('Something went wrong');
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const getProfile = async () => {

        const USERID = await AsyncStorage.getItem('userid');
        await getProfileData(USERID)
            .then((res) => {
                if (res && res.data && res.data.status === 'success') {
                    setBio(res.data.data.bio);
                    setAge(res.data.data.age);
                    setFile(res.data.data.ProfileImage);

                } else {
                    console.log('Something went wrong', res.data);
                    alert('Something went wrong');
                }
            })
    }



    useEffect(() => {
        getProfile();
    }, []);









    return (
        <View style={Styles.conatainer}>

            <View style={{ height: hp(7) }}>
                <HeaderComponent
                    headerText="Profile"
                    onPress={() => props.navigation.goBack()}
                />
            </View>


            <TouchableOpacity style={Styles.profileView}
                onPress={() => { chooseFile('photo') }}>
                <TouchableOpacity style={Styles.profileView} onPress={() => chooseFile('photo')}>
                    <Image
                        // source={file !== "" && file !== null ? { uri: `http://192.168.1.2:3000/uploads/${file}` } : Assets.ic_ProfileImage}
                        source={Assets.ic_ProfileImage}

                        style={Styles.imageAvatar}
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            <View style={{ marginTop: wp(5) }}>
                <InputComponent
                    width={wp(90)}
                    height={hp(15)}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderRadius={wp(1)}
                    borderWidth={wp(0.4)}
                    paddingLeft={wp(5)}
                    marginTop={wp(1)}
                    alignSelf={'center'}
                    placeholder={'Enter Bio'}
                    fontSize={wp(4)}
                    placeholderTextColor={'#000'}
                    textAlignVertical={'top'}
                    secureTextEntry={false}
                    value={Bios}
                    onChangeText={(text) => { setBio(text) }}
                />


                <InputComponent
                    width={wp(90)}
                    height={hp(7)}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderRadius={wp(1)}
                    borderWidth={wp(0.4)}
                    paddingLeft={wp(5)}
                    marginTop={wp(3)}
                    alignSelf={'center'}
                    placeholder={'Enter Age'}
                    fontSize={wp(4)}
                    keyboardType={'numeric'}
                    placeholderTextColor={'#000'}
                    secureTextEntry={false}
                    value={Age}
                    maxLength={2}
                    onChangeText={(text) => { setAge(text) }}
                />

                


            </View>


            <View>

                <Text style={Styles.prefrences}>Select your Age Prerences:</Text>

                <View style={Styles.lastView}>
                    <View style={Styles.innerView}>
                        <Text style={Styles.textMinMax}>Min Age: {ageRange[0]}</Text>
                        <Text style={Styles.textMinMax}>{' '} Max Age: {ageRange[1]}</Text>
                    </View>

                    <MultiSlider
                        values={ageRange}
                        sliderLength={280} // Adjust the width here
                        sliderHeight={40}
                        min={18}
                        max={65}
                        step={1}
                        onValuesChange={handleSliderChange}
                        allowOverlap
                        snapped
                        minMarkerOverlapDistance={3} // Set a small value to allow overlap
                        containerStyle={{ height: 40, marginTop: wp(2.5), marginLeft: wp(5) }}
                        
                    />
                </View>
            </View>

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
                top={wp(5)}
                onPress={() => { UpdateProfileData() }}

            // onPress={() => { props.navigation.navigate('Personality') }}
            />



        </View >
    )
}
export default Profile;