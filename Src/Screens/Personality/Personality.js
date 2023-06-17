import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import ButtonComponent from '../../GlobalComponent/ButtonComponent/ButtonComponent';
import InputComponentIcon from '../../GlobalComponent/InputComponent/InputComponentIcon';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';

const Personality = (props) => {

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: wp(10) }}>
            <View style={Styles.conatainer}>
                <View style={{ marginTop: wp(10) }}>
                    <Text style={Styles.textStyle}>Personality</Text>
                </View>
                <View style={Styles.faithViw}>
                    <Text style={{ color: '#8C8C8C', top: wp(2) }}>Let others know what your interests are and help us connect you with other users that may have similar interests.</Text>
                </View>

                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>What do you do for fun</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

                />

                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>What do you do for fun</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

                />

                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>What do you do for fun</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

                />

                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>What is your favourite book?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

                />

                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>What sort of food do you like?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

                />

                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>How you decribe your dress sense</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

                />

                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>How would you describe your sense of Humor?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

                />
                <Text style={{ color: Assets.ic_Balck, fontSize: wp(4), marginTop: wp(5), textAlign: 'center' }}>What are you hobbies and interests?</Text>
                <InputComponentIcon
                    iconName='pencil'
                    width={wp(90)}
                    height={wp(15)}
                    borderWidth={wp(0.5)}
                    borderColor={Assets.ic_secondaryColor}
                    borderRadius={wp(10)}
                    // paddingLeft={wp(10)}
                    marginTop={wp(3)}
                    alignSelf='center'
                    color={Assets.ic_Balck}
                    fontSize={wp(4.5)}
                    paddingHorizontal={wp(5)}
                    iconSize={33}
                    backgroundColor={Assets.ic_secondaryColor}
                    iconColor={Assets.ic_primaryColor}

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
                    onPress={() => { props.navigation.navigate('LoginScreen') }}
                />
            </View>

        </ScrollView>

    )
}
export default Personality;