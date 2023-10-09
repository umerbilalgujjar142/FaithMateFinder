import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from '../Screens/MainScreen/MainScreen';
import FovouritePosts from '../Screens/FavouritePosts/FavouritePosts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/AntDesign';
import UploadPost from '../Screens/UploadPost/UploadPosts';
import Feather from 'react-native-vector-icons/Feather';
import LikedPosts from '../Screens/LikedPosts/LikedPosts';
import AboutPage from '../Screens/About/About';
import Assets from '../Assets/Assets';

const Tab = createBottomTabNavigator();


function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                activeColor={Assets.ic_primaryColor}
                inactiveColor={Assets.ic_secondaryColor}
                barStyle={{ backgroundColor: '#694fad' }}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} name="MainScreen" component={MainScreen} />

            <Tab.Screen
                activeColor={Assets.ic_primaryColor}
                inactiveColor={Assets.ic_secondaryColor}
                barStyle={{ backgroundColor: '#694fad' }}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Liked',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart" color={color} size={26} />
                    ),
                }} name="home" component={LikedPosts} />

            <Tab.Screen activeColor={Assets.ic_primaryColor}
                inactiveColor={Assets.ic_secondaryColor}
                barStyle={{ backgroundColor: '#694fad' }}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Posts',
                    tabBarIcon: ({ color }) => (
                        <Feather name="upload" color={color} size={26} />
                    ),
                }} name="UploadPost" component={UploadPost} />



            <Tab.Screen activeColor={Assets.ic_primaryColor}
                inactiveColor={Assets.ic_secondaryColor}
                barStyle={{ backgroundColor: '#694fad' }}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Fovourite',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="staro" color={color} size={26} />
                    ),
                }} name="FovouritePosts" component={FovouritePosts} />

            <Tab.Screen activeColor={Assets.ic_primaryColor}
                inactiveColor={Assets.ic_secondaryColor}
                barStyle={{ backgroundColor: '#694fad' }}
                options={{
                    headerShown: false,
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="infocirlceo" color={color} size={26} />
                    ),
                }} name="AboutPage" component={AboutPage} />



        </Tab.Navigator>
    );
}

export default MyTabs;