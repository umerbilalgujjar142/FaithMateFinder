import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,SafeAreaView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import DummyText from '../../Utils/DummyText.json';

const AboutPage = props => {

  return (
    <SafeAreaView style={{flex:1}}>

      <View style={{height: hp(9)}}>
      <HeaderComponent
          headerText="About Us"
          leftIcon={"About Us"}
          onPress={() => props.navigation.goBack()}
          rightIcon={"Safety"}
          color={Assets.ic_primaryColor}
          onPressRight={()=>props.navigation.navigate('CommunityGuideLine')}
        />
        </View>


      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.header}>
            Thank you for visiting Faith Mate Finder
          </Text>
          <Text style={{color: Assets.ic_Balck}}>
            A global upscale Christian matchmaking service for black
            professionals.
          </Text>

          <Text style={styles.header}>Our Mission</Text>
          <Text style={{color: Assets.ic_Balck}}>
            {' '}
         {DummyText.faithMateFinderInfo}
          </Text>


          <Text style={styles.header}>Block & Report</Text>
          <Text style={{color: Assets.ic_Balck}}>
            {' '}
         {DummyText.safetyInfo}
          </Text>



        </View>
        </ScrollView>
      </SafeAreaView>
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
