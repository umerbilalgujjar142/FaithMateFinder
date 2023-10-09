import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles';
import { NativeBaseProvider, Select, FormControl, Stack } from "native-base";
import CheckIcon from 'react-native-vector-icons/FontAwesome';
import Cross from 'react-native-vector-icons/Entypo';
import { getFilteredPosts } from '../../API/add'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { CountryList } from './CountryList'


const FilteredPosts = ({ closeModal, onFilterApplied, onCheckedData }) => {

    const [ageRange, setAgeRange] = useState([18, 65]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchQuery, setSearchQuery] = useState('');



    const filteredCountries = CountryList.filter(country =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const GetFilteredPosts = async () => {
        //get the agRange value min and max and store them into another min and max variable
        const minAge = ageRange[0]
        const maxAge = ageRange[1]



        if ((selectedCountry == '') || (minAge == '')||(maxAge == '')) {
            alert("Please fill all fields")
            return
        }
        else {
            console.log("---->>>>>",selectedCountry,minAge,maxAge);
            await getFilteredPosts(selectedCountry,minAge,maxAge).then((res) => {
                if (res.status == 200) {
                    console.log("res.data.filteredProfiles", res.data.filteredProfiles);
                    onFilterApplied(res.data.filteredProfiles)
                    onCheckedData(true)
                    closeModal()
                }
                else if (res.data.Status == 400) {
                    alert(res.data.message)
                }
            }).catch((error) => {
                console.log("error", error)
            })
        }
    }
    const handleSliderChange = (values) => {
        setAgeRange(values);
    };


    return (
        <View style={Styles.container1}>
            <View style={Styles.modalView1}>
                <View style={Styles.modalView2}>

                    <TouchableOpacity onPress={closeModal} style={Styles.crossStyle}>
                        <Cross name="circle-with-cross" size={wp(8)} color={Assets.ic_primaryColor} />
                    </TouchableOpacity>

                    <View style={{ height: hp(40), marginTop: wp(5) }}>
                        <View style={Styles.innerView}>
                            <Text style={Styles.textMinMax}>Min Age: {ageRange[0]}</Text>
                            <Text style={Styles.textMinMax}>{' '} Max Age: {ageRange[1]}</Text>
                        </View>
                        <MultiSlider
                            values={ageRange}
                            sliderLength={280}
                            sliderHeight={40}
                            min={18}
                            max={65}
                            step={1}
                            onValuesChange={handleSliderChange}
                            allowOverlap
                            snapped
                            minMarkerOverlapDistance={3} // Set a small value to allow overlap
                            containerStyle={{ height: 40, marginTop: wp(2.5), marginLeft: wp(5) }}
                        />
                        <NativeBaseProvider>
                            <FormControl.Label>Country</FormControl.Label>
                            <TextInput
                                placeholder="Search Country"
                                value={searchQuery}
                                onChangeText={text => setSearchQuery(text)}
                            />
                            <Select
                                onValueChange={(value) => setSelectedCountry(value)}
                                minWidth="200"
                                accessibilityLabel="Choose Country"
                                placeholder="Select Country"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size={5} />
                                }}
                                mt="1"
                            >
                                {filteredCountries.map((country, index) => (
                                    <Select.Item
                                        key={index}
                                        label={country}
                                        value={country}
                                    />
                                ))}
                            </Select>
                        </NativeBaseProvider>
                    </View>
                    <TouchableOpacity onPress={() => GetFilteredPosts()}
                        style={Styles.applyButton}>
                        <Text style={Styles.aplyText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export default FilteredPosts;
