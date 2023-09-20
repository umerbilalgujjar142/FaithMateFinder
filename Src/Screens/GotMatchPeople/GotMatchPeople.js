import React, { useState, useEffect } from 'react';
import {
    Text,
    View,  ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import Location from 'react-native-vector-icons/Entypo'
import Styles from './Styles'
import { YouHaveGotMatch } from '../../API/add'
import Loader from '../../GlobalComponent/ActivityIndicator/Loader';

const GotMatchPeople = (props) => {

    const [storeRandom, setStoreRandom] = React.useState(0);
    const [getMatchData, setGetMatchData] = useState('')
    const [id, setID] = useState(props.route.params.id)
    const [cameraCords, setCameraCords] = useState(props.route.params.cameraCords)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true)
        YouHaveGotMatch(id, cameraCords.longitude, cameraCords.latitude).then((res) => {
            setVisible(false)
            if (res.status == 200) {
                setGetMatchData(res.data)
            }
            else if (res.status == 400) {
                alert(res.data.message)
            }
        }).catch((error) => {
            setVisible(false)
            console.log("error", error)
        })


        const randomDecimal = Math.random();
        const scaledValue = 0.3 + randomDecimal * 0.5;
        const randomPercentage = scaledValue * 100;
        const randomPercentageRounded = Math.round(randomPercentage);
        setStoreRandom(randomPercentageRounded);

    }, [])




    return (
        <View style={Styles.conatainer}>
            <HeaderComponent onPress={() => props.navigation.goBack()} headerText={"You've got a Match!"} />

            <View style={Styles.View1}>

                <ImageBackground
                    source={{ uri: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg' }}
                    style={Styles.imageBgView}
                >
                    <View style={Styles.viewBg}>
                        <Text style={Styles.distanceView}>{getMatchData.distance} km</Text>
                    </View>
                </ImageBackground>


                <View style={Styles.ViewName}>
                    <Text style={Styles.textFreiji}>{getMatchData?.singleMatch?.user?.fullname}</Text>
                    <Text style={Styles.matchView}>{storeRandom}% Match</Text>
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
            
            <Loader visible={visible} />

        </View>
    )


}
export default GotMatchPeople;



