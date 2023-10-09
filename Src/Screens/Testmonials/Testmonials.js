import React from 'react';
import { View,FlatList } from 'react-native';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FaithMateFinderCard from './FaithMateFinderCard';

const Testmonials = (props) => {

    const testimonials = [
        {
          name: 'Joseph & Temi A',
          location: 'Albany, GA',
          testimonial:
            'Faith Mate Finder is a highly skilled company which has perfected the art of matching folks in great relationships. We\'ve known the founder for a very long time and she was instrumental in connecting me with my wife. We have also witnessed several successful relationships that have been crafted with their help.',
        },
        {
          name: 'Kunbi and Segun O',
          location: '',
          testimonial:
            'I never thought that I could still find true love. FMF proved me wrong. I used their service back in 2008 and got connected with the love of my life. Can’t believe it’s been that long but we’ve been married for 10 years now and counting.. I’m grateful for FMF.',
        },
        {
          name: 'Ibk & Ola',
          location: 'Tnorcross, GA to Norcross, GA',
          testimonial:
            'Faith Mate Finder is a friendly dating service. Thanks to the Chief Consultant at FMF, who introduced me to my husband. We have been married for seven years now and still going strong.',
        },
        {
          name: 'Soji, B',
          location: 'Houston, TX',
          testimonial:
            'FMF has been around for quite a while. It was birthed through passion and love for connecting people and I have benefited from it. I am currently using their service and have been connected with a successful relationship and hope it leads to marriage.',
        },
        {
          name: 'Sheila & Matt',
          location: 'Baltimore, MD',
          testimonial:
            'I was matched by the founder and chief consultant at FMF. My experience has been absolutely pleasant because they took their time to understand my needs and match me to my soulmate. We just celebrated our 10th year anniversary in May of 2018. Thank you FMF!.',
        },
        {
          name: 'Tinu. P',
          location: 'San Diego, CA',
          testimonial:
            'There are thousands of dating websites but FMF has been my favorite so far. I have been connected with two people so far and this second connection seems to be the real deal. They have an excellent customer service and stand behind their promise.',
        },
        {
          name: 'Debola & Ade A',
          location: 'New York, NY',
          testimonial:
            'FMF is a great dating and math making service. I got connected with my partner via their social media page. We’ve now been married for 11 years and still counting. Thank you FMF.',
        },
        {
          name: 'Tiffany S',
          location: 'Charlotte, NC',
          testimonial:
            'I typically do not subscribe to online dating but decided to try FMF’s one-on-on matching service. I was pleasantly surprised. My first connection was a hit and we have been inseparable since then. We are hoping to tie the know by the end of 2018. So glad I signed up. Great job FMF!',
        },
      ];

    return (
        <View style={{ flex: 1 }}>

            <View style={{ height: hp(9) }}>
                <HeaderComponent
                    headerText="Testmonials"
                    onPress={() => props.navigation.goBack()}
                />
            </View>

            <View style={{paddingBottom:wp(15)}}>
                <FlatList
                    data={testimonials}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <FaithMateFinderCard
                            name={item.name}
                            location={item.location}
                            testimonial={item.testimonial}
                        />
                    )}
                />


            </View>




        </View>
    )
}
export default Testmonials;