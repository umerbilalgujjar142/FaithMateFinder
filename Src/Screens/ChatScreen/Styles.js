import {
    StyleSheet
  } from 'react-native';
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
  import Assets from '../../Assets/Assets';
  
  const styles = StyleSheet.create({

    container: {
        flex:1,
    },
    sendContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginBottom: 5,
    },
    sendText: {
      color: '#5CACEE',
      fontWeight: 'bold',
      fontSize: 16,
    },



  })
  export default styles;