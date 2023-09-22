import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: Assets.ic_secondaryColor,
        marginHorizontal: 5,
    },
    selectedButton: {
        backgroundColor: Assets.ic_primaryColor,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    container1: {
        // flex: 1,
        backgroundColor: '#fff',
    },
    View1: {
        position: 'absolute',
        marginTop: wp(18),
        width: wp(100),
        height: hp(7),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5)
    },
    emptyText: {
        fontSize: wp(4),
        alignSelf: 'center',
        marginTop: wp(10),
        color: Assets.ic_secondaryColor
    },


})
export default styles;