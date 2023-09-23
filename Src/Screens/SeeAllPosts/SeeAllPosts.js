import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    Text,
    View, TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import PostItems from './PostItems';
import Styles from './Styles'
import { getAlluserPost } from '../../API/add'
import Geolocation from '@react-native-community/geolocation';
import PermissionComponent from '../../GlobalComponent/PermissionComponent/PermissionComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Loader from '../../GlobalComponent/ActivityIndicator/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SeeAllPosts = (props) => {

    const [getAllUserPosts, setGetAllUserPosts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cameraCords, setCameraCords] = useState({
        latitude: 0,
        longitude: 0
    })
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        GetAllUserPosts();
    }, [page]);

    //get list of the posts `   

    const GetAllUserPosts = async (latitude, longitude) => {
        setLoading(true);
        setVisible(true)
        const Gender=await AsyncStorage.getItem("gender")

        await getAlluserPost(latitude, longitude, page,Gender).then((res) => {
        setVisible(false)

            if (res.status === 200) {
                const newData = res.data.matchedUsers;
                setGetAllUserPosts(prevData => [...prevData, ...newData]);
            }
            else if (res.data.Status == 400) {
                alert(res.data.message)
            }
        }).catch((error) => {
            console.log("error", error)
            setVisible(false)
        }).finally(() => {
            setLoading(false);
          });
    }

    useEffect(() => {
        callGeolocation();
        PermissionComponent.requestPermission();
    }, []);

    const callGeolocation = async () => {
        Geolocation.getCurrentPosition(info => {
            const { latitude, longitude } = info.coords;
            GetAllUserPosts(latitude, longitude)
            setCameraCords({
                latitude: latitude,
                longitude: longitude
            })
        })
    }

    const handleEndReached = () => {
        if (!loading) {
            setPage(page + 1);
        }
    };

    return (
        <View style={Styles.container1}>
            <HeaderComponent headerText={'See All Posts'}
            onPress={() => props.navigation.goBack()}
            />


            <View style={{ marginTop: wp(20),backgroundColor:'#fff' }}>
                <FlatList
                    data={getAllUserPosts}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <PostItems
                            image={item.Image}
                            text={item.user.fullname}
                            location={item.location}
                            props={props}
                            favourites={item.Favourite}
                            likes={item.Liked}
                            id={item.userId}
                            cameraCords={cameraCords}
                
                        />
                    )}
                    keyExtractor={(item) => "heloo"+item.id}
                    onEndReached={()=>handleEndReached}
                    onEndReachedThreshold={0.5}
                    ListEmptyComponent={() => (
                        <View style={{flex:1}}>
                            <Text style={Styles.emptyText}>No Posts Found</Text>
                        </View>
                    )
                        
                    }
                    ListFooterComponent={loading && <ActivityIndicator />}
                />

            </View>





            <Loader visible={visible} />


        </View>
    )
}
export default SeeAllPosts;

