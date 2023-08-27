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

const FilteredPosts = (props) => {

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
            <HeaderComponent headerText={'Filtered Posts'} />

            <View
                style={Styles.View1}>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        style={[
                            Styles.button,
                            selectedOption === 'popular' && Styles.selectedButton,
                        ]}
                        onPress={() => handleOptionChange('popular')}
                    >
                        <Text style={Styles.buttonText}>Popular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            Styles.button,
                            selectedOption === 'newest' && Styles.selectedButton,
                        ]}
                        onPress={() => handleOptionChange('newest')}
                    >
                        <Text style={Styles.buttonText}>Newest News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            Styles.button,
                            selectedOption === 'latest' && Styles.selectedButton,
                        ]}
                        onPress={() => handleOptionChange('latest')}
                    >
                        <Text style={Styles.buttonText}>Latest Photo</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={{ marginTop: wp(35) }}>
                <FlatList
                    data={getAllUserPosts}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <PostItems
                            image={item.Image}
                            text={item.user.fullname}
                            location={item.location}
                            props={props}
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
export default FilteredPosts;

