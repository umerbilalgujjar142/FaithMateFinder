import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, ScrollView,FlatList
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import PostItems from './PostItems';

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
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <HeaderComponent headerText={'Filtered Posts'} />

            <View
                style={{ position: 'absolute', marginTop: wp(18), width: wp(100), height: hp(7), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(5) }}>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOption === 'popular' && styles.selectedButton,
                        ]}
                        onPress={() => handleOptionChange('popular')}
                    >
                        <Text style={styles.buttonText}>Popular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOption === 'newest' && styles.selectedButton,
                        ]}
                        onPress={() => handleOptionChange('newest')}
                    >
                        <Text style={styles.buttonText}>Newest News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOption === 'latest' && styles.selectedButton,
                        ]}
                        onPress={() => handleOptionChange('latest')}
                    >
                        <Text style={styles.buttonText}>Latest Photo</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={{ marginBottom: wp(3) }}>
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

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: Assets.ic_secondaryColor,
        marginHorizontal: 5,
    },
    selectedButton: {
        backgroundColor: Assets.ic_primaryColor,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

