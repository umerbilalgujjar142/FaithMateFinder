import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity,ActivityIndicator, Modal,SafeAreaView} from 'react-native';
import styles from './Styles';
import PayPalAPI from '../../API/PayPalApi';
import WebView from 'react-native-webview';
import queryString from 'query-string';
import Icon from 'react-native-vector-icons/FontAwesome';


const SelectionModal = ({
  paymentMethod,
  selectPaymentMethod,
  closePaymentModal,
}) => {

  const [loadingPayment, setLoadingPayment] = useState(false); // State to manage loading state for payment
  const [paypalUrl, setPaypalUrl] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const onPressPayPal = async () => {
    setLoadingPayment(true);
    try {
      const token = await PayPalAPI.generateToken();
      const res = await PayPalAPI.createOrder(token);
      if (!!res?.links) {
        const findUrl = res.links.find(data => data?.rel == 'approve');
        setPaypalUrl(findUrl.href);
        setLoadingPayment(false);
      }
    } catch (error) {
      console.log('error', error);
      alert('Payment Failed');
      setLoadingPayment(false);
    }
  };

  const onUrlChange = webviewState => {
    if (webviewState.url.includes('https://example.com/cancel')) {
      clearPaypalState();
      return;
    }
    if (webviewState.url.includes('https://example.com/return')) {
      const urlValues = queryString.parseUrl(webviewState.url);
      const {token} = urlValues.query;
      if (!!token) {
        paymentSucess(token);
      }
    }
  };

  const paymentSucess = async id => {
    try {
      const res = PayPalAPI.capturePayment(id, accessToken);
      alert('Payment sucessfull...!!!');
      clearPaypalState();
    } catch (error) {
      console.log('error raised in payment capture', error);
    }
  };

  const clearPaypalState = () => {
    setPaypalUrl(null);
    setAccessToken(null);
  };

  return (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Choose Payment Method</Text>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => selectPaymentMethod('PayPal')}>
        <View
          style={[
            styles.radioButtonInner,
            {borderColor: paymentMethod === 'PayPal' ? '#000' : '#ccc'},
          ]}>
          {paymentMethod === 'PayPal' && (
            <View style={styles.radioButtonSelected} />
          )}
        </View>
        <Text style={styles.paymentText}>Pay with PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          onPressPayPal();
          
        }}>
          {loadingPayment ? (
          <ActivityIndicator size="small" color="#fff" /> 
        ) : (
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={closePaymentModal}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>


      <Modal visible={!!paypalUrl}>
      <SafeAreaView style={{flex:1}}> 
        <TouchableOpacity onPress={clearPaypalState} style={{margin: 24}}>
          <Icon name="close" size={26} color={'red'} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <WebView
            source={{uri: paypalUrl}}
            onNavigationStateChange={onUrlChange}
          />
        </View>
        </SafeAreaView>
      </Modal>
      
    </View>
  );
};

export default SelectionModal;
