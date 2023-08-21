import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import Location from 'react-native-vector-icons/Entypo'
import Styles from './Styles'

const GotMatchPeople = (props) => {


    return (
        <View style={Styles.conatainer}>
            <HeaderComponent onPress={() => props.navigation.goBack()} headerText={"You've got a Match!"} />

            <View style={Styles.View1}>

                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }}
                    style={Styles.imageBgView}
                >
                    <View style={Styles.viewBg}>
                        <Text style={Styles.distanceView}>1.5 km</Text>
                    </View>
                </ImageBackground>


                <View style={Styles.ViewName}>
                    <Text style={Styles.textFreiji}>Freje Jaylani</Text>

                    <Text style={Styles.matchView}>94% Match</Text>
                </View>


                <View style={Styles.LOCATIONvIEW}>
                    <Location name={'location-pin'} size={wp('5.5%')} color={'#000'} />
                    <Text style={{ color: '#000' }}>new jersy,America</Text>
                </View>

                <View style={{ paddingHorizontal: wp(5) }}>

                    <Text style={Styles.ViewTextTravel}>I am a very simple person who loves to travel and try new things. I would like to meet someone who is easy going and fun loving.</Text>

                    <Text style={Styles.InterestText}>Interest</Text>

                    <Text style={[Styles.InterestSubText, { marginTop: wp(3) }]}>{`\u2022 Cricket`}</Text>
                    <Text style={Styles.InterestSubText}>{`\u2022 Football`}</Text>
                    <Text style={Styles.InterestSubText}>{`\u2022 Badminton`}</Text>
                    <Text style={Styles.InterestSubText}>{`\u2022 Table Tennis`}</Text>
                </View>
            </View>
        </View>
    )


}
export default GotMatchPeople;



