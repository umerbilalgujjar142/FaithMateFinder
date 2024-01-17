//mak the header component icon in left side and text in center
import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    View, StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign'


const HeaderComponent = (props) => {

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>

                { props.leftIcon=="About Us" ? <Text/> :
                <TouchableOpacity onPress={props.onPress}>
                    <Icon name={'left'} size={wp('8%')} color={'#000'} />
                </TouchableOpacity>
               
                }


                <View style={Styles.headerRight}>
                    <Text style={Styles.headerText}>{props.headerText}</Text>
                </View>
                {
                    props.rightIcon ?
                        <TouchableOpacity onPress={props.onPressRight}>
                            <Icon name={props.rightIcon} size={25} color={props.color} />
                        </TouchableOpacity>
                        :
                        <Text style={Styles.headerText}>{" "}</Text>   
                }
            </View>
        </View>
    )
}
export default HeaderComponent;

export const Styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
    header: {
        height: hp('10%'),
        width: wp('100%'),
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('5%')
    },

    headerRight: {
        width: wp('50%'),
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: '#000'
    }

});








