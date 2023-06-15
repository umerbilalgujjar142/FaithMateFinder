import React,{useEffect} from 'react';
import {
    Image,
    Text,
    View,
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
        <View style={{ flex: 1,backgroundColor:'#fff' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Assets.ic_logo} style={{ width: wp('50%'), height: hp('50%') }} resizeMode='contain' />
            </View>
            <NativeBaseProvider>
                <Center w="100%">
                    <Box w="90%" maxW="400">
                        <Progress value={45} mx="4" />
                    </Box>
                </Center>
            </NativeBaseProvider>

        </View>
    )



}
export default SplashScreen;
