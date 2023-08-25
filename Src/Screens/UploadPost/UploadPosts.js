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
import Geolocation from '@react-native-community/geolocation';
import PermissionComponent from '../../GlobalComponent/PermissionComponent/PermissionComponent';
import { UploadMatchPosts } from '../../API/add';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const UploadPosts = (props) => {

    const [file, setFile] = useState('')
    const [filePath, setFilePath] = useState('')
    const [cameraCords, setcameraCords] = useState({
        latitude: 0,
        longitude: 0,
    })
    const [userId, setUserid] = useState('')
    const [paddress, setPaddress] = useState('')

    const chooseFile = async (type) => {

        computeThings()


        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };

        let isStoragePermitted = await ImageComponent.requestExternalWritePermission();
        if (isStoragePermitted) {
            launchImageLibrary(options, (response) => {

                if ((response.didCancel) || (response.errorCode == 'camera_unavailable') || (response.errorCode == 'permission') || (response.errorCode == 'others')) {
                    console.log('User cancelled camera picker');
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

    useEffect(() => {
        callGeolocation()
        PermissionComponent.requestPermission();



        (async () => {
            const id = await AsyncStorage.getItem('userid')
            setUserid(id)
        }
        )();

        return () => {
            setFilePath('')
        }

    }, [])


    const computeThings = () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBQIFhAIJcc9D_ssQdb-7c-EnWvrtLeJb4&language=eng&latlng=' + cameraCords.latitude + "," + cameraCords.longitude,

            }

            axios.request(options).then(function (response) {

                const template = response.data.results[0].address_components

                const locality = template.find(x => x.types[0] === 'locality').long_name
                const tehsil = template.find(x => x.types[0] === 'administrative_area_level_3').long_name
                const district = template.find(x => x.types[0] === 'administrative_area_level_2').long_name
                const province = template.find(x => x.types[0] === 'administrative_area_level_1').long_name
                
                setPaddress(locality)

            }).catch(function (error) {
                console.error(error);
            });

        } catch (error) {
            console.log('error', error);
        }

    }




    const callGeolocation = async () => {
        Geolocation.getCurrentPosition(info => {
            const { latitude, longitude } = info.coords;
            setcameraCords({ latitude, longitude })
        })

    }
    const UploadPost = async () => {
        const response = await UploadMatchPosts(userId, paddress, filePath, cameraCords.latitude, cameraCords.longitude)
        if (response.data.status == 'success') {
            alert("Post Uploaded Successfully");
            props.navigation.navigate('MainScreen')
        }
        else if (response.data.status == 'error') {
            alert("Something went wrong");
        }
    }




    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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

                <View style={{ paddingHorizontal: wp(5) }}>
                    <Text style={{ color: Assets.ic_Balck, fontSize: wp('4.5%') }}>{"When you Choose the image to uplaod it will Post into the new feeds and everyone can see it !"}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => UploadPost()}
                    style={{ height: hp(7), width: wp(90), backgroundColor: Assets.ic_primaryColor, alignSelf: 'center', borderRadius: wp(2), justifyContent: 'center', alignItems: 'center', marginTop: wp(5) }}>
                    <Text style={{ color: '#fff', fontSize: wp('4.5%') }}>Upload Post</Text>
                </TouchableOpacity>
            </View>
        </View>

    )


}
export default UploadPosts;

//

