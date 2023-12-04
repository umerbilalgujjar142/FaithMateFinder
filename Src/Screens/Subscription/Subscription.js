import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground,Modal,RadioButton } from 'react-native';
import Assets from '../../Assets/Assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import styles from './Styles';
import SelectionModal from './SelectionModal';

const Subscription = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Weekly');
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('PayPal');



  const handlePackageSelection = (packageType) => {
    setSelectedPackage(packageType);
    // Handle package selection logic here
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    // Handle option selection logic here
  };

  const calculateProfiles = (profilesPerDay, option) => {
    if (option === 'Weekly') {
      return profilesPerDay * 7;
    } else if (option === 'Monthly') {
      return profilesPerDay * 30;
    } else if (option === 'Yearly') {
      return profilesPerDay * 365;
    }
    return profilesPerDay;
  };

  const packages = [
    {
      type: 'Silver',
      prices: {
        Weekly: '$50',
        Monthly: '$150',
        Yearly: '$250'
      },
      profiles: 'View 50 profiles/day'
    },
    {
      type: 'Gold',
      prices: {
        Weekly: '$60',
        Monthly: '$200',
        Yearly: '$350'
      },
      profiles: 'View 150 profiles/day'
    },
  ];

  const options = ['Weekly', 'Monthly', 'Yearly'];


  const openPaymentModal = () => {
    setShowModal(true);
  };

  const closePaymentModal = () => {
    setShowModal(false);
  };

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const initiatePayment = () => {
    // Handle payment logic here
    closePaymentModal();
  };




  return (
    <ImageBackground
      source={Assets.ic_bgScreen} // Replace with your background image
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Choose a Subscription</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContainer,{height:hp(10),top:0}]}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selectedOption === option ? styles.selectedOption : null,
              ]}
              onPress={() => handleOptionSelection(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {packages.map((packageItem) => {
            const updatedProfiles = calculateProfiles(
              parseInt(packageItem.profiles.split(' ')[1]), // Extracting number of profiles per day
              selectedOption
            );

            const updatedPrice = packageItem.prices[selectedOption];

            return (
              <TouchableOpacity
                key={packageItem.type}
                style={[
                  styles.package,
                  selectedPackage === packageItem.type ? styles.selectedPackage : null,
                ]}
                onPress={() => handlePackageSelection(packageItem.type)}
              >
                <Text style={styles.packageTitle}>{packageItem.type} Package</Text>
                <View style={{ marginBottom: wp(5) }}>
                  <Text style={{ fontSize: wp(5), color: '#fff', fontWeight: '500' }}>{'\u2B19'} Chat</Text>
                  <Text style={{ fontSize: wp(5), color: '#fff', fontWeight: '500' }}>{'\u2B19'} Match people</Text>
                  <Text style={{ fontSize: wp(5), color: '#fff', fontWeight: '500' }}>{`\u2B19 Up to ${updatedProfiles} profiles`}</Text>
                </View>
                <Text style={styles.packageDetails}>Price   {updatedPrice}</Text>
                <LinearGradientBtn
                  width={wp(50)}
                  height={wp(12)}
                  borderRadius={wp(10)}
                  text={'Subscribe'}
                  textColor={'#fff'}
                  backgroundColor={'#fff'}
                  borderColor={Assets.ic_primaryColor}
                  borderWidth={wp(0.5)}
                  alignSelf={'center'}
                  top={wp(10)}
                  onPress={openPaymentModal}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={closePaymentModal}
        >
          <View style={styles.modalContainer}>
          <SelectionModal
              paymentMethod={paymentMethod}
              selectPaymentMethod={selectPaymentMethod}
              initiatePayment={initiatePayment}
              closePaymentModal={closePaymentModal}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
};



export default Subscription;
