import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Icon from 'react-native-vector-icons/AntDesign';


const DetailsScreen = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Assets.ic_logo} style={{ width: wp('50%'), height: hp('30%') }} resizeMode='contain' />
            </View>

            <View style={{ paddingHorizontal: wp(5) }}>
                <Text style={{ fontSize: wp(10), color: Assets.ic_primaryColor }}>Embrace A</Text>
                <Text style={{ fontSize: wp(10), color: Assets.ic_primaryColor }}>Different Kind</Text>
                <Text style={{ fontSize: wp(10), color: Assets.ic_primaryColor }}>Of Dating</Text>

            </View>
            <View style={{ paddingHorizontal: wp(5), marginTop: wp(2) }}>
                <Text style={{ color: '#8C8C8C' }}>Faith Mate Finder match-making boutique has a unique business model, different from what you see in the industry. What sets us apart from your typical online dating service is our service offerings and the quality of our connections.</Text>
            </View>

            {/* making round black button with icons */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(5), marginTop: wp(5) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000', borderRadius: wp(5), paddingHorizontal: wp(2), paddingVertical: wp(2) }}>
                    <Text style={{ color: '#fff',padding:wp(2), fontSize: wp(4), marginLeft: wp(2), marginRight: wp(1) }}>GET STARTED</Text>
                    <Icon name="arrowright" size={25} color={Assets.ic_primaryColor} />
                </View>
            </View>



        </View>

    )
}

export default DetailsScreen;