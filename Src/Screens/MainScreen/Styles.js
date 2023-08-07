import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';0

const styles=StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,    
        paddingHorizontal: 15,
        width:wp(90),
        marginTop:wp(7),
        borderWidth:wp(0.4),
        borderColor:Assets.ic_primaryColor,
        alignSelf:'center',
        

      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },

})
export default styles;