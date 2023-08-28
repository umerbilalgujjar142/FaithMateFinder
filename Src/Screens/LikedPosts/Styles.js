import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        backgroundColor: '#fff'
    },
    View1:{
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    leftIcons:{
        marginTop: hp('2%'), 
        marginLeft: wp('2%')
    },
    fouritepost:{
        fontSize: hp('3.2%'), 
        color: Assets.ic_Balck, 
        marginTop: hp('2%'),
         marginRight: wp('2%') 
    }



});
export default styles;