import React,{useEffect} from 'react';
import {
    Image,
    Text,
    View,StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import { Center, Box, Progress, NativeBaseProvider } from 'native-base';

const SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('DetailsScreen')
        }, 3000);
    }, [])


    return (
        <View style={styles.conatainer}>
            <View style={styles.imageView}>
                <Image source={Assets.ic_logo} style={styles.Images} resizeMode='contain' />
            </View>
            <NativeBaseProvider>
                <Center w="100%">
                    <Box w="90%" maxW="400">
                        <Progress value={50} mx="5"/>
                    </Box>
                </Center>
            </NativeBaseProvider>

        </View>
    )



}
export default SplashScreen;

 const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Images: {
        width: wp('50%'),
        height: hp('50%')
    }
})
