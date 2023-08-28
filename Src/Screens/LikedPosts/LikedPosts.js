import React, { useState, useEffect } from 'react';
import {
    Text,
    View, FlatList,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PostItems from './PostItems';
import Styles from './Styles'
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import { getBasedOnLiked } from '../../API/add'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';

const LikedPosts = (props) => {

    const [postList, setPostList] = useState([])
    const [page, setPage] = useState(1);
    const [cameraCords, setCameraCords] = useState({
        latitude: 0,
        longitude: 0,
    })

    useEffect(() => {
        callGeolocation();
        (async () => {
            const userid = await AsyncStorage.getItem('userid')
            getBasedOnLiked(userid, page).then((res) => {
                setPostList(res.data.LikedUser)
            }).catch((err) => {
                console.log("err", err)
            })
        })();
       
    }, [])

    const callGeolocation = async () => {
        
        Geolocation.getCurrentPosition(info => {
            const { latitude, longitude } = info.coords;
            setCameraCords({
                latitude: latitude,
                longitude: longitude,
            })
        })
    }

    return (
        <View style={Styles.container}>

            <View style={{ height: hp(7) }}>
                <HeaderComponent
                    headerText="Favourite Posts"
                    onPress={() => props.navigation.goBack()}
                />
            </View>

            <View style={{ marginTop: wp(5), marginBottom: wp(15) }}>
                <FlatList
                    data={postList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <PostItems
                            image={item.Image}
                            text={item.user.fullname}
                            location={item.location}
                            props={props}
                            LikesPost={item.Liked}
                            id={item.id}
                            cameraCords={cameraCords}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )

}
export default LikedPosts;