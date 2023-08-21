import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    View, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageComponent from '../../GlobalComponent/ImageComponent/ImageComponent'
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';



const UploadPosts = (props) => {

    const [file, setFile] = useState('')
    const [filePath, setFilePath] = useState('')


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

    // useEffect(() => {
    //     chooseFile('photo')
    // }, [])

    return (
        <View style={{ flex: 1,backgroundColor:'#fff' }}>
            <View style={{ height: hp(7) }}>
                <HeaderComponent
                    headerText="Upload Post"
                    onPress={() => props.navigation.goBack()}
                />
            </View>
            <View style={{ height: hp(50) }}>
                <TouchableOpacity onPress={() => chooseFile('photo')}>
                    <Image
                        source={file !== "" && file !== null ? { uri: file } : Assets.ic_Profile}
                        style={{ height: hp(40) }}
                    />
                </TouchableOpacity>

            <View style={{paddingHorizontal:wp(5)}}>
                <Text style={{color:Assets.ic_Balck,fontSize:wp('4.5%')}}>{"When you Choose the image to uplaod it will Post into the new feeds and everyone can see it !"}</Text>  


            </View>


            </View>


        </View>

    )


}
export default UploadPosts;

//

