import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

const SelectionModal = ({
  paymentMethod,
  selectPaymentMethod,
  initiatePayment,
  closePaymentModal,
}) => {
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
      <TouchableOpacity style={styles.confirmButton} onPress={initiatePayment}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={closePaymentModal}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectionModal;