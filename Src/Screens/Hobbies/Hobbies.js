import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import { Chip } from 'react-native-paper';
import ButtonComponent from '../../GlobalComponent/ButtonComponent/ButtonComponent';


const Hobbies = (props) => {

    return (
        <View style={Styles.conatainer}>
            <View style={{ marginTop:wp(10) }}>
                <Text style={Styles.textStyle}>Hobbies & Interest</Text>
            </View>
            <View style={Styles.faithViw}>
                <Text style={{ color: '#8C8C8C',top:wp(2) }}>Faith Mate Finder match-making boutique has a unique business model, different from what you see in the industry. What sets us apart from your typical online dating service is our service offerings and the quality of our connections.</Text>
            </View>

        <Text style={{color:Assets.ic_Balck,fontSize:wp(4.5),marginTop:wp(5)}}>What do you do for fun</Text>

        <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>




        </View>
    )


}
export default Hobbies;