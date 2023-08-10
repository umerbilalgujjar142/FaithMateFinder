import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, ScrollView,FlatList
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import PostItems from './PostItems';
import Styles from './Styles'


const FilteredPosts = (props) => {

    const [selectedOption, setSelectedOption] = useState('popular');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

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

            <View>
                <FlatList
                    data={postList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <PostItems
                            image={item.image}
                            text={item.text}
                            location={item.location}
                            props={props}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />

            </View>








        </View>
    )
}
export default FilteredPosts;

