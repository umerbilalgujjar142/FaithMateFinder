// Subscription.js
import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Modal,
  Alert,
} from 'react-native';
import Assets from '../../Assets/Assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradientBtn from '../../GlobalComponent/ButtonComponent/LinearGradientBtn';
import styles from './Styles';
import SelectionModal from './SelectionModal';
import PayPalAPI from '../../API/PayPalApi';
import {postPaymentData} from '../../API/add.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Subscription = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Weekly');
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const [paypalUrl, setPaypalUrl] = useState(null);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [orders, setOrders] = useState(null);
  const [totalAmount, setTotalAmount] = useState('');
  const [expirationsDate, setExpirationDate] = useState('');


  const initiatePayment = async () => {
    
    calculateExpirationDate(selectedOption);
    setLoadingPayment(true);

    if (selectedPackage && selectedOption) {
      try {
        const token = await PayPalAPI.generateToken();
        const itemName = 'Subscription';
        const itemDescription = `Subscription for ${selectedOption} plan`;
        const itemQuantity = 1;
        const itemValue = packages
          .find((packageItem) => packageItem.type === selectedPackage)
          .prices[selectedOption]
          .replace('$', '');

        const order = await PayPalAPI.createOrder(
          token,
          itemName,
          itemDescription,
          itemQuantity,
          itemValue
        );

        if (order && order.links) {
          const approveLink = order.links.find((link) => link.rel === 'approve');
          if (approveLink) {
            setPaypalUrl(approveLink.href);
            setShowModal(true);
            setOrders(order.id);
            setTotalAmount(itemValue);
          } else {
            Alert.alert('Error', 'Failed to create PayPal order', [{ text: 'OK' }]);
          }
        } else {
          console.error('Failed to create PayPal order');
        }
      } catch (error) {
        console.error('Error in PayPal API:', error);
      } finally {
        setLoadingPayment(false);
      }
    } else {
      Alert.alert('Error', 'Please select a package and an option to proceed', [
        { text: 'OK' },
      ]);
      setLoadingPayment(false);
    }

    // console.log('orders',orders);
    // console.log('totalAmount',totalAmount);

    const paymentData = {
      userId: 1,
      packageType: selectedPackage,
      packageAmount: totalAmount,
      orderId: orders,
      paymentStatus: 'active',
      expirationsDate: expirationsDate,
    };

    const res = await postPaymentData(paymentData.userId,
      paymentData.packageType,
      paymentData.packageAmount,
      paymentData.orderId,
      paymentData.paymentStatus,
      paymentData.expirationsDate
      );      
      console.log('res',res.data);
  };

  const calculateExpirationDate = ( selectedOption) => {
    const expirationDate = new Date();
    switch (selectedOption) {
      case 'Weekly':
        expirationDate.setDate(expirationDate.getDate() + 7);
        break;
      case 'Monthly':
        expirationDate.setMonth(expirationDate.getMonth() + 1);
        break;
      case 'Quarterly':
        expirationDate.setMonth(expirationDate.getMonth() + 3);
        break;
      case 'Semi-annually':
        expirationDate.setMonth(expirationDate.getMonth() + 6);
        break;
      case 'Yearly':
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        break;
      default:
        // Handle unknown subscription types
        throw new Error('Invalid subscription type');
    }
    setExpirationDate(expirationDate);
  };
  



  const handlePackageSelection = (packageType) => {
    setSelectedPackage(packageType);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);

  };

  const calculateProfiles = (profilesPerDay, option) => {
    if (option === 'Weekly') {
      return profilesPerDay * 7;
    } else if (option === 'Monthly') {
      return profilesPerDay * 30;
    } else if (option === 'Quarterly') {
      return profilesPerDay * 90;
    } else if (option === 'Semi-annually') {
      return profilesPerDay * 180;
    } else if (option === 'Yearly') {
      return profilesPerDay * 365;
    }
    
    return profilesPerDay;
    
  };

  const packages = [
    {
      type: 'Silver',
      prices: {
        Weekly: '$9.99',
        Monthly: '$34.99',
        Yearly: '$149.99',
        Quarterly: '$49.99',
        Semiannually: '$69.99',
      },
      profiles: 'View 50 profiles/day',
    },
    {
      type: 'Gold',
      prices: {
        Weekly: '$59.99',
        Monthly: '$199.99',
        Yearly: '$349.99',
        Quarterly: '$149.99',
        Semiannually: '$249.99',
      },
      profiles: 'View 150 profiles/day',
    },
  ];

  const options = ['Weekly', 'Monthly', 'Quarterly', 'Semi-annually', 'Yearly'];

  const openPaymentModal = () => {
    if (selectedPackage && selectedOption) {
      setShowModal(true);
    } else {
      Alert.alert('Error', 'Please select a package and an option to proceed', [
        { text: 'OK' },
      ]);
    }
  };

  const closePaymentModal = () => {
    setShowModal(false);
    setPaypalUrl(null);
  };

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
  };


  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const getUserId = async () => {
      try {
        const value = await AsyncStorage.getItem('userid');
        if (value !== null) {
          setUserId(value);
        }
      } catch (e) {
        console.log('error', e);
      }
    };
    getUserId();
  }, []);



  return (
    <ImageBackground source={Assets.ic_bgScreen} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Choose a Subscription</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContainer, { height: hp(10), top: 0 }]}
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
              parseInt(packageItem.profiles.split(' ')[1]),
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
                  <Text style={styles.matchPeopleText}>{'\u2B19'} Chat</Text>
                  <Text style={styles.matchPeopleText}>{'\u2B19'} Match people</Text>
                  <Text style={styles.matchPeopleText}>{`\u2B19 Up to ${updatedProfiles} profiles`}</Text>
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
              paypalUrl={paypalUrl}
              loadingPayment={loadingPayment}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Subscription;
