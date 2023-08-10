import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from '../Screens/MainScreen/MainScreen';
import FilteredPosts from '../Screens/FilteredPosts/FilteredPosts';
import GotMatchPeople from '../Screens/GotMatchPeople/GotMatchPeople';
import FovouritePosts from '../Screens/FavouritePosts/FavouritePosts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


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

            <Tab.Screen activeColor={Assets.ic_primaryColor}
                inactiveColor={Assets.ic_secondaryColor}
                barStyle={{ backgroundColor: '#694fad' }}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Liked Posts',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="heart" color={color} size={26} />
                    ),
                }} name="FilteredPosts" component={FilteredPosts} />


            <Tab.Screen activeColor={Assets.ic_primaryColor}
                inactiveColor={Assets.ic_secondaryColor}
                barStyle={{ backgroundColor: '#694fad' }}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Match People',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="people" color={color} size={26} />
                    ),
                }} name="GotMatchPeople" component={GotMatchPeople} />



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


        </Tab.Navigator>
    );
}

export default MyTabs;