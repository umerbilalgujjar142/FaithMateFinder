import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:wp(5)
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    scrollContainer: {
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop: 5,
      height:hp(70),
      top:hp(-6)
    },
    package: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 20,
      marginHorizontal: 5,
      width: 250,
      alignItems: 'center',
      height: 340,
      justifyContent: 'center'
    },
    selectedPackage: {
      borderColor: 'blue', // Customize the border color for selected package
    },
    packageTitle: {
      fontSize: 23,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#333',
    },
    packageDetails: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    option: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      marginHorizontal: 5,
    },
    selectedOption: {
      backgroundColor: 'red',
      borderColor: 'white',
    },
    optionText: {
      fontSize: 16,
      color: '#fff',
    },
    // Modal Styles
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the modal
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    radioButtonInner: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    radioButtonSelected: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: '#000',
    },
    paymentText: {
      fontSize: 16,
    },
    confirmButton: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    confirmButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    closeButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  export default styles;