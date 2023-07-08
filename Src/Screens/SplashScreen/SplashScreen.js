import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View, StyleSheet, ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import { Center, Box, Progress, NativeBaseProvider } from 'native-base';
import RightIcons from 'react-native-vector-icons/AntDesign';

const SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('DetailsScreen')
        }, 3000);
    }, [])


    return (
        <ImageBackground source={Assets.ic_splashbg} style={styles.conatainer}>
            <View style={styles.imageView}>
                <Image source={Assets.ic_logoWhite} style={styles.Images} resizeMode='contain' />
            </View>

            <NativeBaseProvider>
                <Center w="100%">
                    <Box w="90%" maxW="400">
                        <Progress size="xs" mb={4} value={40} colorScheme="secondary" />
                    </Box>
                </Center>
            </NativeBaseProvider>


            <View style={styles.lastView}>

                <Text style={styles.readyText}>Ready?</Text>

                <View style={styles.secndView}>
                <Text style={styles.letsText}>Let's Go</Text>

                <RightIcons name="rightcircleo" size={wp(13)} color={Assets.ic_primaryColor} style={{ marginTop: wp(-6) }} />

                </View>


            </View>


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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('10%')
    },
    Images: {
        width: wp('50%'),
        height: hp('20%'),
    },
    lastView:{
        height: hp(20), 
        paddingHorizontal: wp(5)
    },
    readyText:{
        color: '#ffff',
         fontSize: wp(8), 
        fontWeight: 'bold'
    },
    secndView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    letsText:{
        color: '#ffff', 
        fontSize: wp(8),
         fontWeight: 'bold'
    }
})
