// SelectionModal.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Modal, SafeAreaView } from 'react-native';
import styles from './Styles';
import PayPalAPI from '../../API/PayPalApi';
import WebView from 'react-native-webview';
import queryString from 'query-string';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectionModal = ({
  paymentMethod,
  selectPaymentMethod,
  closePaymentModal,
  initiatePayment,
  paypalUrl,
  loadingPayment,
}) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const initializePayment = async () => {
      if (paypalUrl) {
        try {
          const token = await PayPalAPI.generateToken();
          setAccessToken(token);
        } catch (error) {
          console.error('Error in PayPal API:', error);
        }
      }
    };

    initializePayment();
  }, [paypalUrl]);

  const onUrlChange = webviewState => {
    if (webviewState.url.includes('https://example.com/cancel')) {
      clearPaypalState();
      return;
    }
    if (webviewState.url.includes('https://example.com/return')) {
      const urlValues = queryString.parseUrl(webviewState.url);
      const { token } = urlValues.query;
      if (!!token) {
        paymentSuccess(token);
      }
    }
  };

  const paymentSuccess = async id => {
    try {
      const res = await PayPalAPI.capturePayment(id, accessToken);
      alert('Payment successful...!!!');
      clearPaypalState();
    } catch (error) {
      console.log('Error raised in payment capture', error);
    }
  };

  const clearPaypalState = () => {
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
            { borderColor: paymentMethod === 'PayPal' ? '#000' : '#ccc' },
          ]}>
          {paymentMethod === 'PayPal' && (
            <View style={styles.radioButtonSelected} />
          )}
        </View>
        <Text style={styles.paymentText}>Pay with PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={initiatePayment}>
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
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity onPress={closePaymentModal} style={{ margin: 24 }}>
            <Icon name="close" size={26} color={'red'} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <WebView
              source={{ uri: paypalUrl }}
              onNavigationStateChange={onUrlChange}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SelectionModal;
