import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Icon from 'react-native-vector-icons/AntDesign';
import Styles from './Styles'
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';

const DetailsScreen = (props) => {

    return (
        <View style={Styles.conatainer}>
            <View style={Styles.imageView}>
                <Image source={Assets.ic_logo} style={Styles.Images} resizeMode='contain' />
            </View>

            <View style={{ paddingHorizontal: wp(5) }}>
                <Text style={Styles.textStyle}>Embrace A</Text>
                <Text style={Styles.textStyle}>Different Kind</Text>
                <Text style={Styles.textStyle}>Of Dating</Text>
            </View>
            
            <View style={Styles.faithViw}>
                <Text style={{ color: '#000' }}>Faith Mate Finder match-making boutique has a unique business model, different from what you see in the industry. What sets us apart from your typical online dating service is our service offerings and the quality of our connections.</Text>
            </View>

            <TouchableOpacity onPress={()=>props.navigation.navigate('LoginScreen')} style={Styles.toucableLogin}>
                <View style={Styles.ViewStarted}>
                    <Text style={Styles.textStarted}>GET STARTED</Text>
                    <Icon name="arrowright" size={25} color={'#fff'} />
                </View>
            </TouchableOpacity>



        </View>

    )
}

export default DetailsScreen;