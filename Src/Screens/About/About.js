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

                    <Text style={styles.header}>Self-Match</Text>
                    <Text style={{color:Assets.ic_Balck}}>Meeting “the right person” by chance in social or professional settings can be next to impossible. Our self-match service allows you the flexibility of connecting with someone who through our best-in-class matching technique matches your preferences. You can put up your photo and share as much information as you feel comfortable to share, so that our trusted and tested technique can help us match you with a potential “faith mate”.</Text>

                    <Text style={styles.header}>One-on-One Service</Text>
                    <Text style={{color:Assets.ic_Balck}}>If you are a private individual and not keen on having your profile and photo displayed on the Internet, we have a solution for you. Faith Mate Finder Personalized matching was built around the core values of integrity, confidentiality and respect for privacy. We offer an option for you not to post your photographs or share your information without your consent. We will do everything to maintain your confidentiality. Our trusted and experienced consultants use a sophisticated, efficient, highly personalized and completely confidential approach in helping you find a match.</Text>

                    <Text style={styles.header}>Matching Algorithm</Text>
                    <Text style={{color:Assets.ic_Balck}}>Our matching algorithm at FMF is highly specialized and provides compatible customized matches, which are based on successful intense screening of all prospective candidates. We conduct thorough screenings and/or interviews (depending on the service offering) for each potential candidate prior to accepting them as our client.</Text>

                    <Text style={styles.header}>Excellent Service</Text>
                    <Text style={{color:Assets.ic_Balck}}>Excellent Service is the heart of our business and so we strive to earn and maintain the trust of our clients. Our trusted professional consultants work hand in hand with all our clients to help them achieve their relationship goals and cater to the individual on every level.</Text>
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