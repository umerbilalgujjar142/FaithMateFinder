import React from 'react';
import {View, ScrollView, StyleSheet,Text} from 'react-native';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DummyText from '../../Utils/DummyText.json';
import Assets from '../../Assets/Assets';
const Testmonials = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: hp(9)}}>
        <HeaderComponent
          headerText="Privacy Policy"
          onPress={() => props.navigation.goBack()}
       />
      </View>

      <View style={{paddingBottom: wp(15)}}>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.header}>
              Welcome to the Faith Mate Finder Privacy Policy!
            </Text>
            
            <Text style={styles.paragraph}>
              {DummyText.privacyIntro}
            </Text>

            <Text style={styles.header}>Who we are</Text>
            <Text style={styles.paragraph}>
              {DummyText.appAndSitesInfo}
            </Text>

            <Text style={styles.header}>1. COLLECTION OF INFORMATION.</Text>

            <Text style={styles.subHeader}>Registration Information</Text>
            <Text style={styles.bulletPoint}>• Name;</Text>
            <Text style={styles.bulletPoint}>• Username;</Text>
            <Text style={styles.bulletPoint}>• Email address;</Text>
            <Text style={styles.bulletPoint}>• Cell number;</Text>
            <Text style={styles.bulletPoint}>• Gender identity;</Text>
            <Text style={styles.bulletPoint}>• Sexual preference;</Text>
            <Text style={styles.bulletPoint}>• Photographs;</Text>
            <Text style={styles.bulletPoint}>• Location; and</Text>
            <Text style={styles.bulletPoint}>
              • {DummyText.loginInfo}
            </Text>

            <Text style={styles.subHeader}>Profile Information</Text>
            <Text style={styles.paragraph}>
              {DummyText.recommendationInfo}
            </Text>

            <Text style={styles.subHeader}>
              Profile Verification Information (Including Biometric Information)
            </Text>
            <Text style={styles.paragraph}>
              {DummyText.verificationInfo}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Testmonials;

const styles = StyleSheet.create({
  container: {
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
    color: '#000',
  },
  paragraph: {
    color: '#000',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#000',
  },
  bulletPoint: {
    marginLeft: 15,
    color: '#000',
  },
});
