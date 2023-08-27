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
import { YouHaveGotMatch } from '../../API/add'

const GotMatchPeople = (props) => {

    const [getMatchData, setGetMatchData] = useState('')
    const [id, setID] = useState(props.route.params.id)
    const [cameraCords, setCameraCords] = useState(props.route.params.cameraCords)
    useEffect(() => {
        YouHaveGotMatch(id,cameraCords.longitude,cameraCords.latitude).then((res) => {
            if (res.status == 200) {
                setGetMatchData(res.data)
            }
            else if (res.status == 400) {
                alert(res.data.message)
            }
        }).catch((error) => {
            console.log("error", error)
        })
    }, [])



    return (
        <View style={Styles.conatainer}>
            <HeaderComponent onPress={() => props.navigation.goBack()} headerText={"You've got a Match!"} />

            <View style={Styles.View1}>

                <ImageBackground
                    source={{ uri: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }}
                    style={Styles.imageBgView}
                >
                    <View style={Styles.viewBg}>
                        <Text style={Styles.distanceView}>{getMatchData.distance} km</Text>
                    </View>
                </ImageBackground>


                <View style={Styles.ViewName}>
                    <Text style={Styles.textFreiji}>{getMatchData?.singleMatch?.user?.fullname}</Text>
                    <Text style={Styles.matchView}>94% Match</Text>
                </View>


                <View style={Styles.LOCATIONvIEW}>
                    <Location name={'location-pin'} size={wp('5.5%')} color={'#000'} />
                    <Text style={{ color: '#000' }}>{getMatchData?.singleMatch?.location}</Text>
                </View>

                <View style={{ paddingHorizontal: wp(5) }}>

                    <Text style={Styles.ViewTextTravel}>{getMatchData?.singleMatch?.user?.profile?.Bio}</Text>

                    <Text style={Styles.InterestText}>Interest</Text>

                    {getMatchData?.singleMatch?.user?.hobby?.fun && (
                        getMatchData.singleMatch.user.hobby.fun.map((interest, index) => (
                            <Text key={index} style={Styles.InterestSubText}>
                                {`\u2022 ${interest.replace(/"/g, '')}`}
                            </Text>
                        ))
                    )}
                </View>
            </View>
        </View>
    )


}
export default GotMatchPeople;



