import React, { useState, useEffect } from 'react';
import {
    Image,
    Text,
    View, ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addHobbies } from '../../API/add';

const Hobbies = (props) => {

    const Items = [
        // this is the parent or 'item'
        {
            name: 'Fun & Adventure',
            id: 0,
            // these are the children or 'sub items'
            children: [
                {
                    name: 'Art & painitng',
                    id: 10,
                },
                {
                    name: 'Book Reading',
                    id: 17,
                },
                {
                    name: 'Fashion Event',
                    id: 13,
                },
                {
                    name: 'Cycling',
                    id: 14,
                },
                {
                    name: 'Games',
                    id: 15,
                },
                {
                    name: 'Cricket',
                    id: 16,
                },
            ],

        },

    ];
    const Foods = [{
        name: 'Food & Drink',
        id: 1,
        // these are the children or 'sub items'
        children: [
            {
                name: 'Coffee',
                id: 20,
            },
            {
                name: 'Cooking',
                id: 21,
            },
            {
                name: 'Dining Out',
                id: 22,
            },
            {
                name: 'Drinking',
                id: 23,
            },
            {
                name: 'Eating Out',
                id: 24,
            },
            {
                name: 'Food',
                id: 25,
            },
            {
                name: 'Wine',
                id: 26,
            },
        ],

    }]

    const Movies = [{
        name: 'Movies & TV',
        id: 2,
        // these are the children or 'sub items'
        children: [
            {
                name: 'Action',
                id: 30,
            },
            {
                name: 'Adventure',
                id: 31,
            },
            {
                name: 'Animation',
                id: 32,
            },
            {
                name: 'Comedy',
                id: 33,
            },
            {
                name: 'Crime',
                id: 34,
            },
            {
                name: 'Documentary',
                id: 35,
            },
            {
                name: 'Drama',
                id: 36,
            },
            {
                name: 'Family',
                id: 37,
            },
            {
                name: 'Fantasy',
                id: 38,
            },
            {
                name: 'History',
                id: 39,
            },
            {
                name: 'Horror',
                id: 40,
            },
            {
                name: 'Music',
                id: 41,
            },
            {
                name: 'Mystery',
                id: 42,
            },
            {
                name: 'Romance',
                id: 43,
            },
            {
                name: 'Science Fiction',
                id: 44,
            },
            {
                name: 'TV Movie',
                id: 45,
            },
            {
                name: 'Thriller',
                id: 46,
            },
            {
                name: 'War',
                id: 47,
            },
        ]
    }]

    const Sports = [{
        name: 'Sports',
        id: 2,
        // these are the children or 'sub items'
        children: [
            {
                name: 'Football',
                id: 30,
            },
            {
                name: 'Cricket',
                id: 31,
            },
            {
                name: 'Basketball',
                id: 32,
            },
            {
                name: 'Tennis',
                id: 33,
            },
            {
                name: 'Rugby',
                id: 34,
            },
            {
                name: 'Golf',
                id: 35,
            },
            {
                name: 'Baseball',
                id: 36,
            },
            {
                name: 'Ice Hockey',
                id: 37,
            },
            {
                name: 'Swimming',
                id: 38,
            },
            {
                name: 'Boxing',
                id: 39,
            },
            {
                name: 'Wrestling',
                id: 40,
            },
            {
                name: 'Volleyball',
                id: 41,
            },
            {
                name: 'Badminton',
                id: 42,
            },
            {
                name: 'Table Tennis',
                id: 43,
            },
            {
                name: 'Sailing',
                id: 44,
            },
            {
                name: 'Skiing',
                id: 45,
            },
            {
                name: 'Snowboarding',
                id: 46,
            },
            {
                name: 'Horse Racing',
                id: 47,
            },
        ]
    }]


    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItems1, setSelectedItems1] = useState([]);
    const [selectedItems2, setSelectedItems2] = useState([]);
    const [selectedItems3, setSelectedItems3] = useState([]);



    const onSelectedItemsChange = (selectedItems) => {
        const selectedNames = [];
      
        selectedItems.forEach((itemId) => {
          Items.forEach((foodItem) => {
            const selectedItem = foodItem.children.find((child) => child.id === itemId);
            if (selectedItem) {
              selectedNames.push(selectedItem.name);
            }
          });
        });
        setSelectedItems(prevSelectedItems => [...prevSelectedItems, ...selectedNames]);
      };





    const onSelectedItemsChange1 = (selectedItems1) => {

        const selectedNames = [];
      
        selectedItems1.forEach((itemId) => {
          Foods.forEach((foodItem) => {
            const selectedItem = foodItem.children.find((child) => child.id === itemId);
            if (selectedItem) {
              selectedNames.push(selectedItem.name);
            }
          });
        });
        setSelectedItems1(prevSelectedItems => [...prevSelectedItems, ...selectedNames]);
    };

    const onSelectedItemsChange2 = (selectedItems2) => {

        const selectedNames = [];
      
        selectedItems2.forEach((itemId) => {
          Movies.forEach((foodItem) => {
            const selectedItem = foodItem.children.find((child) => child.id === itemId);
            if (selectedItem) {
              selectedNames.push(selectedItem.name);
            }
          });
        });
        setSelectedItems2(prevSelectedItems => [...prevSelectedItems, ...selectedNames]);

    };

    const onSelectedItemsChange3 = (selectedItems3) => {

        const selectedNames = [];
      
        selectedItems3.forEach((itemId) => {
          Sports.forEach((foodItem) => {
            const selectedItem = foodItem.children.find((child) => child.id === itemId);
            if (selectedItem) {
              selectedNames.push(selectedItem.name);
            }
          });
        });
        setSelectedItems3(prevSelectedItems => [...prevSelectedItems, ...selectedNames]);

    };


    const AddHoobies = async () => {
        try {

          const user_id = await AsyncStorage.getItem('userid');
          
          const response = await addHobbies(selectedItems, selectedItems1, selectedItems2, selectedItems3, user_id);

          console.log(response.data);
          
        } catch (error) {
          console.log("Error:", error);
        }
      };




    return (
        <View style={Styles.conatainer}>
            <View style={{ marginTop: wp(10) }}>
                <Text style={Styles.textStyle}>Hobbies & Interest</Text>
            </View>
            <View style={Styles.faithViw}>
                <Text style={Styles.describeText}>Faith Mate Finder match-making boutique has a unique business model, different from what you see in the industry. What sets us apart from your typical online dating service is our service offerings and the quality of our connections.</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: wp(10) }}
            >

                <Text style={Styles.itemText}>What do you do for fun</Text>


                <SectionedMultiSelect
                    items={Items}
                    showCancelButton={true}
                    IconRenderer={Icon}
                    color={Assets.ic_secondaryColor}
                    subText={Assets.ic_secondaryColor}
                    primary={Assets.ic_secondaryColor}
                    text={Assets.ic_secondaryColor}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Choose hobbies..."
                    showDropDowns={true}
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                />


                <Text style={Styles.itemText}>What Foods do you like most?</Text>


                <SectionedMultiSelect
                    items={Foods}
                    showCancelButton={true}
                    IconRenderer={Icon}
                    color={Assets.ic_secondaryColor}
                    subText={Assets.ic_secondaryColor}
                    primary={Assets.ic_secondaryColor}
                    text={Assets.ic_secondaryColor}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Choose Foods..."
                    showDropDowns={true}
                    onSelectedItemsChange={onSelectedItemsChange1}
                    selectedItems={selectedItems1}
                />





                <Text style={Styles.itemText}>What type of Movies do you like?</Text>
                <SectionedMultiSelect
                    items={Movies}
                    showCancelButton={true}
                    IconRenderer={Icon}
                    color={Assets.ic_secondaryColor}
                    subText={Assets.ic_secondaryColor}
                    primary={Assets.ic_secondaryColor}
                    text={Assets.ic_secondaryColor}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Choose Movies..."
                    showDropDowns={true}
                    onSelectedItemsChange={onSelectedItemsChange2}
                    selectedItems={selectedItems2}
                />

                <Text style={Styles.itemText}>What type of Sports do you like?</Text>
                <SectionedMultiSelect
                    items={Sports}
                    showCancelButton={true}
                    IconRenderer={Icon}
                    color={Assets.ic_secondaryColor}
                    subText={Assets.ic_secondaryColor}
                    primary={Assets.ic_secondaryColor}
                    text={Assets.ic_secondaryColor}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Choose Sports..."
                    showDropDowns={true}
                    onSelectedItemsChange={onSelectedItemsChange3}
                    selectedItems={selectedItems3}
                />


                <LinearGradientBtn
                    width={wp(83)}
                    height={wp(12)}
                    borderRadius={wp(10)}
                    text={'Finish'}
                    textColor={'#fff'}
                    backgroundColor={'#fff'}
                    borderColor={Assets.ic_primaryColor}
                    borderWidth={wp(0.5)}
                    alignSelf={'center'}
                    top={wp(5)}
                    // onPress={() => { props.navigation.navigate('LoginScreen') }}
                    onPress={() => AddHoobies()}
                />
            </ScrollView>



        </View>
    )


}
export default Hobbies;