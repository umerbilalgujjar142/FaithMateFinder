import React,{useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles';
import Malesymbol from 'react-native-vector-icons/Foundation';
import Femalesymbol from 'react-native-vector-icons/Foundation';
import { Slider, Box, NativeBaseProvider, Select, FormControl } from "native-base";
import CheckIcon from 'react-native-vector-icons/FontAwesome';
import Cross from 'react-native-vector-icons/Entypo';


const FilteredPosts = ({closeModal}) => {

   
    const [isMalePressed, setIsMalePressed] = useState(false);
    const [isFemalePressed, setIsFemalePressed] = useState(false);
    const [gender, setGender] = useState('');

    const handlePressIn = (selectedGender) => {
        setGender(selectedGender);
        setIsMalePressed(selectedGender === 'Male');
        setIsFemalePressed(selectedGender === 'Female');
    };


    return (
        <View style={Styles.container1}>

          
                <View style={Styles.modalView1}>
                    <View style={Styles.modalView2}>

                    <TouchableOpacity onPress={closeModal} style={Styles.crossStyle}>
                        <Cross name="circle-with-cross" size={wp(8)} color={Assets.ic_primaryColor} />
                        </TouchableOpacity>

                        <View style={Styles.ViewMale}>

                            <TouchableOpacity onPress={() => handlePressIn('Male')}
                                style={[Styles.ViewMale1,

                                {
                                    borderColor: isMalePressed ? 'red' : Assets.ic_waterColor,
                                    borderWidth: isMalePressed ? wp(0.65) : wp(0.5),
                                },
                                ]}>
                                <Text style={{ marginTop: wp(3.5) }}>Male</Text>

                                <Malesymbol name="male-symbol" size={wp(5)}
                                    color={Assets.ic_Balck} style={{ marginTop: wp(3.5) }} />

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handlePressIn('Female')}
                                style={[Styles.ViewFemale,

                                {
                                    borderColor: isFemalePressed ? 'red' : Assets.ic_waterColor,
                                    borderWidth: isFemalePressed ? wp(0.65) : wp(0.5),
                                    marginLeft: wp(2)
                                },
                                ]}>
                                <Text style={{ marginTop: wp(3.5) }}>Female</Text>
                                <Femalesymbol name="female-symbol" size={wp(5)} color={Assets.ic_Balck} style={{ marginTop: wp(3.5) }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: wp(15) }}>

                            <NativeBaseProvider>
                                <Box alignItems="center" w="100%">
                                    <Slider w="2xl" maxW="300" colorScheme={"red"}
                                        defaultValue={70} minValue={0}
                                        maxValue={100} accessibilityLabel="KM" step={10}>
                                        <Slider.Track>
                                            <Slider.FilledTrack />
                                        </Slider.Track>
                                        <Slider.Thumb />
                                    </Slider>
                                </Box>
                            </NativeBaseProvider>

                            <View style={{ height: hp(20), marginTop: wp(10) }}>
                                <NativeBaseProvider>
                                    <FormControl.Label>City</FormControl.Label>
                                    <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="City" _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size={5} />
                                    }} mt="1">
                                        <Select.Item label="Paris" value="pr" />
                                        <Select.Item label="US" value="us" />
                                        <Select.Item label="Canada" value="ca" />
                                        <Select.Item label="Pakistan" value="pk" />
                                        <Select.Item label="India" value="in" />
                                    </Select>
                                </NativeBaseProvider>

                            </View>
                        </View>
                    </View>
                </View>

        </View>
    )
}
export default FilteredPosts;
