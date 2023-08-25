import React, { useState, useEffect } from 'react';
import {
    Image,
    Text,
    View, TextInput, FlatList, Pressable, Modal, TouchableOpacity, StyleSheet,Linking,Platform 
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
import { getAllUsersStatus } from '../../API/add'
import PermissionComponent from '../../GlobalComponent/PermissionComponent/PermissionComponent';



const MainScreen = (props) => {


    const [modalVisible, setModalVisible] = useState(false);
    const [file, setFile] = useState('')
    const [filePath, setFilePath] = useState({})
    const [userid, setUserid] = useState('')
    const [fullname, setFullname] = useState('')
    const [cameraCords, setcameraCords] = useState('')
    const [getAllStatus, setGetAllStatus] = useState([])


    useEffect(() => {
        (async () => {
            const id = await AsyncStorage.getItem('userid')
            const name = await AsyncStorage.getItem('fullname')
            setUserid(id)
            setFullname(name)
        })();
       
        callGeolocation();
       PermissionComponent.requestPermission();
    }, []);

 


    const callGeolocation = async () => {
        Geolocation.getCurrentPosition(info =>{
            const { latitude, longitude } = info.coords;
            setcameraCords(latitude, longitude)
           GetAllStatus(latitude, longitude)
        })
      }

     


    const GetAllStatus = async (latitude, longitude) => {
        await getAllUsersStatus(latitude, longitude).then((res) => {
            if(res.status == 200){
                setGetAllStatus(res.data.images)
            }
            else if(res.data.Status == 400){
                alert(res.data.message)
            }
        }).catch((error) => {
            console.log("error", error)
        })

    }

    const postList = [
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            text: 'Enjoying a beautiful day at the beach!',
            location: 'Beach Name, City',
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            text: 'Exploring the mountains. Nature is amazing!',
            location: 'Mountain Range, Country',
        },
        // Add more posts here
    ];

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
    const closeModal = () => {
        setModalVisible(false)
    }


    return (
        <View style={Styles.container1}>
            <View style={Styles.filteredView}>
                <Image source={Assets.ic_ProfileImage} style={Styles.imageStyle} resizeMode='contain' />
                <Pressable onPress={() => setModalVisible(true)}>
                    <Filter name="filter" size={wp(10)} color={Assets.ic_primaryColor} />
                </Pressable>
            </View>
            <Text style={Styles.WelcomeText}>Welcome, {fullname}</Text>

            <Text style={styles.pieceofSoul}>Giving someone a piece of your soul is better than giving a piece of your heart. Because souls are etenal.</Text>

            <View style={Styles.container}>
                <Icon name="search" size={25} color={Assets.ic_primaryColor} style={Styles.icon} />
                <TextInput
                    style={Styles.input}
                    placeholder="Search"
                    placeholderTextColor="#888"
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => chooseFile('photo')} style={styles.uploadButton}>
                    <Icon name="camera" size={30} color="white" />
                </TouchableOpacity>


                <View style={{ height: wp(25), marginTop: wp(4) }}>
                    {
                        console.log("getAllStatus", getAllStatus)
                    }
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

                <Pressable onPress={() => props.navigation.navigate('FilteredPosts')}>
                    <Text style={Styles.SeeAll}>See All</Text>
                </Pressable>
            </View>

            <View style={{ height: wp(60) }}>
                <FlatList
                    data={postList}
                    showsVerticalScrollIndicator={false}
                    onRequestClose={closeModal}
                    renderItem={({ item }) => (
                        <PostItems
                            image={item.image}
                            text={item.text}
                            location={item.location}

                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>


            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <FilteredPosts closeModal={() => setModalVisible(false)} />
            </Modal>
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