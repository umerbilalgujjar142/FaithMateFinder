import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Icon from 'react-native-vector-icons/AntDesign';
import InputComponent from '../../GlobalComponent/InputComponent/InputComponent';

const ProileComponent = (props) => {

    return (
        <View style={{ paddingHorizontal: wp(3), top: wp(20) }}>

            <InputComponent
                width={wp(90)}
                height={hp(15)}
                backgroundColor={'#fff'}
                borderColor={Assets.ic_primaryColor}
                borderRadius={wp(3)}
                borderWidth={wp(0.4)}
                paddingLeft={wp(5)}
                marginTop={wp(1)}
                alignSelf={'center'}
                placeholder={'Enter Bio'}
                fontSize={wp(4)}
                placeholderTextColor={'#000'}
                textAlignVertical={'top'}
                secureTextEntry={false}
                value={''}
            />


            <InputComponent
                width={wp(90)}
                height={hp(7)}
                backgroundColor={'#fff'}
                borderColor={Assets.ic_primaryColor}
                borderRadius={wp(3)}
                borderWidth={wp(0.4)}
                paddingLeft={wp(5)}
                marginTop={wp(3)}
                alignSelf={'center'}
                placeholder={'Enter Age'}
                fontSize={wp(4)}
                placeholderTextColor={'#000'}
                secureTextEntry={false}
                value={''}
            />



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