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

const SeeAllPosts = (props) => {

    const [selectedOption, setSelectedOption] = useState('popular');
    const [getAllUserPosts, setGetAllUserPosts] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        GetAllUserPosts();
    }, [page]);


    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    //get list of the posts 

    const GetAllUserPosts = async (latitude, longitude) => {
        setLoading(true);

        await getAlluserPost(latitude, longitude, page).then((res) => {
            if (res.status === 200) {
                const newData = res.data.matchedUsers;
                setGetAllUserPosts(prevData => [...prevData, ...newData]);
            }
            else if (res.data.Status == 400) {
                alert(res.data.message)
            }
        }).catch((error) => {
            console.log("error", error)
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


            <View style={{ marginTop: wp(20) }}>
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
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    onEndReached={()=>handleEndReached}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loading && <ActivityIndicator />}
                />

            </View>








        </View>
    )
}
export default SeeAllPosts;

