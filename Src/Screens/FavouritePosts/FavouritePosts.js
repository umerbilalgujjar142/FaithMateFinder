import React, { useState, useEffect } from 'react';
import {
    Text,
    View, FlatList,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Left from 'react-native-vector-icons/Entypo'
import Assets from '../../Assets/Assets';
import PostItems from '../FilteredPosts/PostItems';
import Styles from './Styles'
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
const FovouritePosts = (props) => {

    const postList = [
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            text: 'Enjoying a beautiful day at the beach!',
            location: 'Beach Name, City',
            star: true
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            text: 'Exploring the mountains. Nature is amazing!',
            location: 'Mountain Range, Country',
            star: true
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            text: 'Enjoying a beautiful day at the beach!',
            location: 'Beach Name, City',
            star: true
        },
        {
            id: '4',
            image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            text: 'Exploring the mountains. Nature is amazing!',
            location: 'Mountain Range, Country',
            star: true
        },
        // Add more posts here
    ];

    return (
        <View style={Styles.container}>

            <View style={{height:hp(7)}}>
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
                            image={item.image}
                            text={item.username}
                            location={item.location}
                            props={props}
                            star={item.star}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )

}
export default FovouritePosts;