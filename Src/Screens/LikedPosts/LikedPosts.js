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
import Loader from '../../GlobalComponent/ActivityIndicator/Loader';

const LikedPosts = (props) => {

    const [postList, setPostList] = useState([])
    const [page, setPage] = useState(1);
    const [cameraCords, setCameraCords] = useState({
        latitude: 0,
        longitude: 0,
    })
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        callGeolocation();
        (async () => {
            setVisible(true)
            const userid = await AsyncStorage.getItem('userid')
            getBasedOnLiked(userid, page).then((res) => {
                setVisible(false)
                setPostList(res.data.LikedUser)
            }).catch((err) => {
                console.log("err", err)
                setVisible(false)
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
                    ListEmptyComponent={() => (
                        <View style={{ flex: 1, justifyContent: 'center', marginTop:wp(15),alignItems: 'center' }}>
                            <Text style={{ fontSize: wp(4),color:'#000' }}>No Data Found</Text>
                        </View>
                    )}
                />
            </View>
            <Loader visible={visible} />
        </View>
    )

}
export default LikedPosts;