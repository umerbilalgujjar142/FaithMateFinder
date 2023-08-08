import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';

const GotMatchPeople = (props) => {


    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <HeaderComponent onPress={()=>props.navigation.goBack()} headerText={"You've got a Match!"} />

            <View style={{width: wp('100%'), position: 'absolute', marginTop: wp(20), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>

                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }} 
                    style={{ width: wp('90%'), height: hp('30%'),   }}
                >
                    <View style={{alignItems:'flex-end',paddingHorizontal:wp(5),marginTop:wp(5),}}>
                    <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: '#fff',backgroundColor:Assets.ic_primaryColor,margin:wp(2),paddingHorizontal:wp(4),paddingVertical:wp(2),borderRadius:wp(3.5) }}>1.5 km</Text>
                    </View>
                </ImageBackground>
            </View>







        </View>
    )


}
export default GotMatchPeople;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover', // or 'contain' based on your preference
        justifyContent: 'center', // or 'flex-start', 'flex-end'
        alignItems: 'center', // or 'flex-start', 'flex-end'
    },
    text: {
        fontSize: 24,
        color: 'white', // or your desired text color
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // add a semi-transparent background for better readability
        padding: 10,
        borderRadius: 5,
    },
});

