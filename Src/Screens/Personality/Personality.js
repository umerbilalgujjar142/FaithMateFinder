import React, {useState, useEffect } from 'react';
import {
    Image,
    Text,
    View, ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import InputComponentIcon from '../../GlobalComponent/InputComponent/InputComponentIcon';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import { addPersonality } from '../../API/add';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Personality = (props) => {

    const [fun, setFun] = useState('');
    const [book, setBook] = useState('');
    const [food, setFood] = useState('');
    const [dress, setDress] = useState('');
    const [humor, setHumor] = useState('');
    const [hobbies, setHobbies] = useState('');


    const AddPersonality = async () => {

        const userId = await AsyncStorage.getItem('userid')

        try {
            let response = await addPersonality(fun, book, food, dress, humor, hobbies,userId)
            console.log(response.data)
            if (response.data) {
                alert("Personality Added Successfully")
                props.navigation.navigate('Hobbies')
            }
            else {
                alert(response.data.message)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: wp(10) }}>
            <View style={Styles.conatainer}>
                <View style={{ marginTop: wp(10) }}>
                    <Text style={Styles.textStyle}>Personality</Text>
                </View>
                <View style={Styles.faithViw}>
                    <Text style={{ color: '#8C8C8C', top: wp(2) }}>Let others know what your interests are and help us connect you with other users that may have similar interests.</Text>
                </View>

                <Text style={Styles.textPersonality}>What do you do for fun</Text>
                <InputComponentIcon
                    iconName='pencil'
                    multiline={true}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    placeholder={'Write here...'}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(8)}
                    iconSize={33}
                    backgroundColor={Assets.ic_tertiaryColor}
                    iconColor={Assets.ic_primaryColor}
                    onChangeText={(text) => setFun(text)}
                />


                <Text style={Styles.textPersonality}>What is your favourite book?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    placeholder={'Write here...'}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(8)}
                    iconSize={33}
                    backgroundColor={Assets.ic_tertiaryColor}
                    iconColor={Assets.ic_primaryColor}
                    onChangeText={(text) => setBook(text)}

                />

                <Text style={Styles.textPersonality}>What sort of food do you like?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    placeholder={'Write here...'}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(8)}
                    iconSize={33}
                    backgroundColor={Assets.ic_tertiaryColor}
                    iconColor={Assets.ic_primaryColor}
                    onChangeText={(text) => setFood(text)}

                />

                <Text style={Styles.textPersonality}>How you decribe your dress sense</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    placeholder={'Write here...'}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(8)}
                    iconSize={33}
                    backgroundColor={Assets.ic_tertiaryColor}
                    iconColor={Assets.ic_primaryColor}
                    onChangeText={(text) => setDress(text)}

                />

                <Text style={Styles.textPersonality}>How would you describe your sense of Humor?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    placeholder={'Write here...'}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(8)}
                    iconSize={33}
                    backgroundColor={Assets.ic_tertiaryColor}
                    iconColor={Assets.ic_primaryColor}
                    onChangeText={(text) => setHumor(text)}

                />
                <Text style={Styles.textPersonality}>What are you hobbies and interests?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    placeholder={'Write here...'}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(8)}
                    iconSize={33}
                    backgroundColor={Assets.ic_tertiaryColor}
                    iconColor={Assets.ic_primaryColor}
                    onChangeText={(text) => setHobbies(text)}

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
                    onPress={() => { AddPersonality() }}
                />
            </View>

        </ScrollView>

    )
}
export default Personality;