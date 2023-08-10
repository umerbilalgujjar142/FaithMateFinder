import React, { useState, useEffect } from 'react';
import {
    Image,
    Text,
    View, TextInput, FlatList, Pressable, Modal
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import Filter from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusItem from './StatusScreen';
import PostItems from './PostItems';
import FilteredPosts from './FilteredModal';

const MainScreen = (props) => {


    const [modalVisible, setModalVisible] = useState(false);
    const statusData = [
        { id: '1', username: 'user1', image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { id: '2', username: 'user2', image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { id: '3', username: 'user1', image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { id: '4', username: 'user2', image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { id: '5', username: 'user1', image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
        { id: '6', username: 'user2', image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
    ];

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


    const closeModal = () => {
        setModalVisible(false);
      };


    return (
        <View style={Styles.container1}>
            <View style={Styles.filteredView}>
                <Image source={Assets.ic_ProfileImage} style={Styles.imageStyle} resizeMode='contain' />
                <Pressable onPress={() => setModalVisible(true)}>
                    <Filter name="filter" size={wp(10)} color={Assets.ic_primaryColor} />
                </Pressable>
            </View>
            <Text style={Styles.WelcomeText}>Welcome, EDWARD</Text>

            <View style={Styles.container}>
                <Icon name="search" size={25} color={Assets.ic_primaryColor} style={Styles.icon} />
                <TextInput
                    style={Styles.input}
                    placeholder="Search"
                    placeholderTextColor="#888"
                />
            </View>

            <View style={{ height: wp(25), marginTop: wp(4) }}>
                <FlatList
                    data={statusData}
                    renderItem={({ item }) => (
                        <StatusItem username={item.username} image={item.image} />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={Styles.BestMatches}>
                <Text style={Styles.BestMatchText}>Best Matches</Text>

                <Pressable onPress={() => props.navigation.navigate('FilteredPosts')}>
                    <Text style={Styles.SeeAll}>See All</Text>
                </Pressable>
            </View>

            <View style={{ marginBottom: wp(3), height: wp(80) }}>
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
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <FilteredPosts closeModal={() => setModalVisible(false)}/>
            </Modal>

        </View>
    )

}
export default MainScreen;