import React, { useState, useEffect } from 'react';
import {
    Image,
    Text,
    View, TextInput, FlatList, Pressable, Modal, TouchableOpacity, StyleSheet, Linking, Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import Filter from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusItem from './StatusScreen';
import PostItems from './PostItems';
import FilteredPosts from './FilteredModal';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageComponent from '../../GlobalComponent/ImageComponent/ImageComponent'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { getAllUsersStatus, getAlluserPost, UploadStatus } from '../../API/add'
import PermissionComponent from '../../GlobalComponent/PermissionComponent/PermissionComponent';
import Loader from '../../GlobalComponent/ActivityIndicator/Loader';


const MainScreen = (props) => {


    const [modalVisible, setModalVisible] = useState(false);
    const [checkSetData, setCheckSetData] = useState(false)
    const [getAllFilteredData, setGetAllFilteredData] = useState([])
    const [file, setFile] = useState('')
    const [filePath, setFilePath] = useState({})
    const [fullname, setFullname] = useState('')
    const [getAllStatus, setGetAllStatus] = useState([])
    const [getAllUserPosts, setGetAllUserPosts] = useState([])
    const [searchText, setSearchText] = useState('')
    const [cameraCords, setCameraCords] = useState({
        latitude: 0,
        longitude: 0,
    })
    const [visible, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            const name = await AsyncStorage.getItem('fullname')
            setFullname(name)
        })();

        callGeolocation();
        PermissionComponent.requestPermission();
    }, []);




    const callGeolocation = async () => {
        Geolocation.getCurrentPosition(info => {
            const { latitude, longitude } = info.coords;
            GetAllStatus(latitude, longitude)
            GetAllUserPosts(latitude, longitude)
            setCameraCords({
                latitude: latitude,
                longitude: longitude,
            })
        })
    }

    const UploadUserStatus = async () => {
        setLoading(true)
        const userId = await AsyncStorage.getItem('userid')
        await UploadStatus(filePath,cameraCords.latitude,cameraCords.longitude,userId).then((res) => {
            if (res.status == 201) {
                setLoading(false)
                setFile('')
                setFilePath({})
                alert("Status Uploaded Successfully")
                GetAllStatus(cameraCords.latitude, cameraCords.longitude)
            }
            else if (res.data.Status == 400) {
                alert(res.data.message)
                setLoading(false)
            }

        }).catch((error) => {
            console.log("error", error)
        })

    }




    const GetAllStatus = async (latitude, longitude) => {
        await getAllUsersStatus(latitude, longitude).then((res) => {
            if (res.status == 200) {
                setGetAllStatus(res.data.images)
            }
            else if (res.data.Status == 400) {
                alert(res.data.message)
            }
        }).catch((error) => {
            console.log("error", error)
        })
    }

    //get list of the posts 

    const GetAllUserPosts = async (latitude, longitude) => {
        setLoading(true)
        const Gender=await AsyncStorage.getItem("gender")
        await getAlluserPost(latitude, longitude, page = 1,Gender).then((res) => {
            if (res.status == 200) {
                setGetAllUserPosts(res.data.matchedUsers)
                setLoading(false)
            }
            else if (res.data.Status == 400) {
                alert(res.data.message)
                setLoading(false)
            }
        }).catch((error) => {
            console.log("error", error)
        })

    }


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
                if ((response.didCancel) || (response.errorCode == 'camera_unavailable') || (response.errorCode == 'permission') || (response.errorCode == 'others')) {
                    console.log('User cancelled  picker');
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
    const closeModal = () => {
        setModalVisible(false)
    }

    useEffect(() => {
        if (file != '') {
            UploadUserStatus()
           
        }
    }, [file])



    return (
        <View style={Styles.container1}>
            <View style={Styles.filteredView}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")}>
                <Image source={Assets.ic_ProfileImage} style={Styles.imageStyle} resizeMode='contain' />
                </TouchableOpacity>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Filter name="filter" size={wp(10)} color={Assets.ic_primaryColor} />
                </Pressable>
            </View>
            <Text style={Styles.WelcomeText}>Welcome, {fullname}</Text>

            <Text style={styles.pieceofSoul}>Finding a deep, meaningful and true connection with a likeminded individual can become a reality.</Text>

            <View style={Styles.container}>
                <Icon name="search" size={25} color={Assets.ic_primaryColor} style={Styles.icon} />
                <TextInput
                    style={Styles.input}
                    placeholder="Search"
                    placeholderTextColor="#888"
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => chooseFile('photo')} style={styles.uploadButton}>
                    <Icon name="camera" size={30} color="white" />
                </TouchableOpacity>


                <View style={{ height: wp(25), marginTop: wp(4) }}>
                    <FlatList
                        data={getAllStatus}
                        renderItem={({ item }) => (
                            <StatusItem image={item.Image} />
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>


            <View style={Styles.BestMatches}>
                <Text style={Styles.BestMatchText}>Best Matches</Text>

                <Pressable onPress={() => props.navigation.navigate('SeeAllPosts')}>
                    <Text style={Styles.SeeAll}>See All</Text>
                </Pressable>
            </View>

            <View style={{ flex: 1 }}>
                <FlatList
                    data={checkSetData ? getAllFilteredData : getAllUserPosts.slice(0, 5).filter(pd => pd.country.toLowerCase().includes(searchText.toLowerCase()))}
                    showsVerticalScrollIndicator={false}
                    onRequestClose={closeModal}
                    renderItem={({ item }) => (
                        <>
                      
                            {
                                // checkSetData ?
                                //     <PostItems
                                //         image={item.BestMatch.Image}
                                //         text={item.fullname}
                                //         location={item.BestMatch.location}
                                //         id={item.BestMatch.id}
                                //         props={props}
                                //         cameraCords={cameraCords}
                                //         favourites={item.Favourite}
                                //         likes={item.Liked}
                                //         profession={item.user.profession}
                                //     />
                                //     :
                                    <PostItems
                                        image={item.Image}
                                        text={item.user.fullname}
                                        country={item.country}
                                        id={item.id}
                                        props={props}
                                        cameraCords={cameraCords}
                                        favourites={item.Favourite}
                                        likes={item.Liked}
                                        profession={item.user.profession}
                                        Age={item.Age}

                                    />
                            }
                        </>
                    )}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => (
                        <View style={{ flex: 1 }}>
                            <Text style={Styles.emptyText}>No Posts Found</Text>
                        </View>
                    )
                    }
                />
            </View>


            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <FilteredPosts cameraCords={cameraCords} closeModal={() => setModalVisible(false)}

                    onFilterApplied={(wholeData) => {
                        console.log("Filtered Data:", wholeData);
                        // setGetAllUserPosts(wholeData)
                        setGetAllFilteredData(wholeData)
                    }}
                    onCheckedData={(data) => {
                        console.log("Checked Data:", data);
                        setCheckSetData(data)
                    }}

                />
            </Modal>
            <Loader visible={visible} />
        </View>
    )

}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    username: {
        fontSize: 15,
        color: Assets.ic_Balck,
    },
    uploadButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pieceofSoul: {
        paddingHorizontal: wp(5),
        fontSize: wp(4),
        marginTop: wp(5),
        color: Assets.ic_Balck
    }
});