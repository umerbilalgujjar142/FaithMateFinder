import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Styles from './Styles'
import Icon from 'react-native-vector-icons/AntDesign';

const ProileComponent = (props) => {

    return (
        <View style={{ paddingHorizontal: wp(3), top: wp(30) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ height: hp(25), width: wp(44), borderRadius: wp(2), backgroundColor: '#F6F6F6', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="pluscircleo" size={25} color={Assets.ic_primaryColor} />
                </View>

                <View style={{ height: hp(25), width: wp(44), borderRadius: wp(2), backgroundColor: '#F6F6F6', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="pluscircleo" size={25} color={Assets.ic_primaryColor} />
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: wp(5) }}>

                <View style={{ height: hp(25), width: wp(44), borderRadius: wp(2), backgroundColor: '#F6F6F6', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="pluscircleo" size={25} color={Assets.ic_primaryColor} />
                </View>

                <View style={{ height: hp(25), width: wp(44), borderRadius: wp(2), backgroundColor: '#F6F6F6', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="pluscircleo" size={25} color={Assets.ic_primaryColor} />
                </View>
            </View>


        </View>
    )


}
export default ProileComponent;