import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';

const styles = StyleSheet.create({

    conatainer: {
        flex: 1, backgroundColor: '#fff'
    },
    View1: {
        width: wp('100%'),
        position: 'absolute',
        marginTop: wp(20),
        backgroundColor: '#fff',
    },
    imageBgView: {
        width: wp('90%'),
        height: hp('30%'),
        alignSelf: 'center',
    },
    viewBg: {
        alignItems: 'flex-end',
        paddingHorizontal: wp(5),
        marginTop: wp(5),
    },
    distanceView: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: Assets.ic_primaryColor,
        margin: wp(2),
        paddingHorizontal: wp(4),
        paddingVertical: wp(2),
        borderRadius: wp(3.5)
    },
    ViewName: {
        flexDirection: 'row',
        paddingHorizontal: wp(6),
        justifyContent: 'space-between',
        marginTop: wp(6)
    },
    textFreiji: {
        fontSize: wp(5),
        color: '#000',
        fontWeight: 'bold'
    },
    matchView: {
        fontSize: wp('3.3%'),
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: Assets.ic_secondaryColor,
        margin: wp(2),
        paddingHorizontal: wp(4),
        paddingVertical: wp(2),
        borderRadius: wp(3.5)
    },
    LOCATIONvIEW:{
        flexDirection: 'row', 
        paddingHorizontal: wp(5), 
        marginTop: wp(-5)
    },
    ViewTextTravel:{
        fontSize: wp('3.5%'),
         color: '#000',
         marginTop: wp(2)
    },
    InterestText:{
        marginTop: wp(5),
         color: Assets.ic_Balck
        , fontSize: wp(8), 
        fontWeight: 'bold'
    },
    InterestSubText:{
        color: Assets.ic_Balck, 
        fontSize: wp(4.5)
    }

})
export default styles;