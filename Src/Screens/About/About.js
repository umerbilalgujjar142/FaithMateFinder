import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import CheckIcon from 'react-native-vector-icons/AntDesign';


const AboutPage = (props) => {
    return (
        <>
            <View style={{ height: hp(7),justifyContent:'space-between',paddingHorizontal:wp(3),flexDirection:'row',marginTop:wp(4),alignItems:'center' }}>
            <Text style={{fontSize:wp(6),color:Assets.ic_Balck,textAlign:'center',}}>{""}</Text>
               <Text style={{fontSize:wp(6),color:Assets.ic_Balck,textAlign:'center',}}>About Us</Text>
               <TouchableOpacity onPress={()=>props.navigation.navigate("Testmonials")}>
               <CheckIcon name="wechat" size={25} color={Assets.ic_primaryColor} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.header}>Thank you for visiting Faith Mate Finder</Text>
                    <Text style={{color:Assets.ic_Balck}}>A global upscale Christian matchmaking service for black professionals.</Text>

                    <Text style={styles.header}>Our Mission</Text>
                    <Text style={{color:Assets.ic_Balck}} > Faith Mate Finder offers a unique matchmaking experience that is highly professional, comfortable and enjoyable. Our members are people of faith who are serious, marriage-minded individuals. In today’s fast-paced society, it has become more difficult than ever to find long-lasting relationships that lead to marriages. Our goals and aim is to connect singles with high Christian and family values and are committed to finding the right partner.</Text>

                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingBottom: 32,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
        color: Assets.ic_Balck,
    },
});

export default AboutPage;