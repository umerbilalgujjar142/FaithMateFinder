import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, StyleSheet, ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';

const SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('DetailsScreen')
        }, 3000);
    }, [])


    return (
        <ImageBackground source={Assets.ic_bgScreen} style={styles.conatainer}>
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                <Image source={Assets.ic_logoWhite} style={styles.Images} resizeMode='contain' />
            </View>
            <Text style={styles.imageView}>The # 1 trusted Christian dating app</Text>
        </ImageBackground>
    )



}
export default SplashScreen;

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageView: {
        fontSize: wp(5),
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'
    },
    Images: {
        width: wp('50%'),
        height: hp('35%'),
    },

})
