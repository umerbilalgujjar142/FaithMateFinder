import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    View, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import ProileComponent from './ProfileComponent';
import LinearGrdientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import { launchImageLibrary } from 'react-native-image-picker';
import { ImageComponent } from '../../GlobalComponent/ImageComponent/ImageComponent';

const Profile = (props) => {

    const [file, setFile] = useState("");
    const [filePath, setFilePath] = useState({});


    const chooseFile = async (type) => {

        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };

        let isStoragePermitted = await requestStoragePermission();
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




    return (
        <View style={Styles.conatainer}>
            <Text style={{ top: wp(10), fontSize: wp(5), paddingHorizontal: wp(5), color: Assets.ic_Balck, fontWeight: 'bold' }}>Set Profile</Text>

            <TouchableOpacity style={Styles.profileView}
                onPress={() => { chooseFile('photo') }}>
                <Image
                    source={file !== "" && file !== null ? { uri: file } : Assets.ic_ProfileImage}
                    style={Styles.imageAvatar} />
            </TouchableOpacity>




            <ProileComponent />

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
                top={wp(25)}
                onPress={() => { props.navigation.navigate('Personality') }}
            />


        </View>
    )
}
export default Profile;