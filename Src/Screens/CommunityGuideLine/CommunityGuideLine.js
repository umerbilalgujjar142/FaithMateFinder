import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import HeaderComponent from '../../GlobalComponent/HeaderComponent/HeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DummyText from '../../Utils/DummyText.json';
import Assets from '../../Assets/Assets';



const CommunityGuideLine = props => {

  
  return (
    <View style={{flex: 1}}>
      <View style={{height: hp(9)}}>
        <HeaderComponent
          headerText="Guidelines"
          onPress={() => props.navigation.goBack()}
          onPressRight={()=>props.navigation.navigate('Testmonials')}
          rightIcon={"file1"}
          color={Assets.ic_primaryColor}
        />
      </View>
      <View style={{paddingBottom: wp(15), marginTop: wp(3)}}>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.header}>
            Faith Mate Finder Community Guidelines
            </Text>

            <Text style={styles.paragraph}>{DummyText.faithMateFinder}</Text>

            <Text style={styles.header}>Profile Guidelines</Text>
            <Text style={styles.bulletPoint}>
              • Age. You need to be at least 18 years old to join Faith Mate
              Finder. Creating a profile that intentionally misrepresents you as
              being under the age of 18 is not allowed. We reserve the right to
              ask for your ID to verify your age, and we’ll block you from the
              platform if you’re underage.
            </Text>
            <Text style={styles.bulletPoint}>
              • Profile Photos. We want your profile to celebrate your authentic
              self! That’s why we require at least one of your profile photos to
              depict only you and to clearly show your full face. We do not
              permit:
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Profile photos that are heavily distorted or contain exaggerated
              or unnatural digital effects to the point where it cannot be
              clearly determined that you’re the person in the photos
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Any overlaid symbols, icons, frames, or stickers that aren’t
              from Faith Mate Finder on your profile photos
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Memes or photos with only — or primarily — text as a profile
              photo
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Profile photos of children on their own
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Profile photos with unclothed children
            </Text>
            <Text style={styles.bulletPoint}>
              • Username. Members are allowed to use initials, abbreviations,
              contracted or shortened versions of their name, nicknames, full
              names, and middle names. Members do not have to use their legal
              name or full name, but usernames should be an authentic
              representation of the name you use in everyday life. We do not
              permit:
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Any words or phrases that violate our Community Guidelines
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Using the name of a celebrity or fictional character
            </Text>
            <Text style={styles.innerBulletPoint}>
              - Words or characters (other than a valid name) including
              descriptive words, symbols (e.g. $, *, @,), emojis, numbers, or
              punctuation
            </Text>

            <Text style={styles.subHeader}>Content and Conduct Guidelines</Text>
            <Text style={styles.paragraph}>{DummyText.recommendationInfo}</Text>

            <Text style={styles.subHeader}>
              Profile Verification Information (Including Biometric Information)
            </Text>
            <Text style={styles.paragraph}>{DummyText.verificationInfo}</Text>

          

            <Text style={styles.subHeader}>
              {DummyText.category}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category1}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category2}
            </Text>
            {/* <Text style={styles.paragraph}>{DummyText.description2}</Text> */}


            <Text style={styles.subHeader}>
              {DummyText.category3}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description3}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category4}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description4}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category5}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description5}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category6}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description6}</Text>

            <Text style={styles.subHeader}>
              {DummyText.category7}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description7}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category8}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description8}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category9}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description9}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category10}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description10}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category11}
            </Text>
            {/* <Text style={styles.paragraph}>{DummyText.description11}</Text> */}

            <Text style={styles.subHeader}>
              {DummyText.category12}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description12}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category13}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description13}</Text>


            <Text style={styles.subHeader}>
              {DummyText.category14}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description14}</Text>

            <Text style={styles.subHeader}>
              {DummyText.category15}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description15}</Text>

            <Text style={styles.subHeader}>
              {DummyText.category16}
            </Text>
            <Text style={styles.paragraph}>{DummyText.description16}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CommunityGuideLine;

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
  innerBulletPoint: {
    marginLeft: 20, // Adjust the margin as needed
    fontSize: 14, // Adjust the font size as needed
    color: '#555', // Adjust the color as needed
  },
  ruleContainer: {
    marginBottom: 16,
  },
  ruleCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ruleDescription: {
    fontSize: 16,
  },
});
