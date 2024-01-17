import {
  StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets'; 0

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    width: wp(90),
    marginTop: wp(7),
    borderWidth: wp(0.4),
    borderColor: Assets.ic_primaryColor,
    alignSelf: 'center',


  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff'
  },
  filteredView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginTop: wp(5)
  },
  imageStyle: {
    width: wp(10),
    height: wp(10)
  },
  WelcomeText: {
    fontSize: wp(7),
    paddingHorizontal: wp(5),
    top: wp(4)
    , color: Assets.ic_Balck,
    fontWeight: 'bold',
    width: wp(98)
  },
  BestMatches: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5)
    , marginBottom: wp(4),marginTop:wp(2)
  },
  BestMatchText: {
    color: Assets.ic_Balck,
    fontWeight: 'bold',
    fontSize: wp(5)
  },
  SeeAll: {
    color: Assets.ic_primaryColor,
    fontWeight: 'bold',
    fontSize: wp(5),
    textDecorationLine: 'underline'
  },
  ViewMale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp(10),
    paddingHorizontal: wp(3)
  },
  ViewMale1: {
    height: hp(7),
    width: wp(40),
    borderColor: Assets.ic_waterColor,
    borderWidth: wp(0.5),
    borderRadius: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4)
  }
  ,
  ViewFemale: {
    height: hp(7)
    , width: wp(40),
    borderColor: Assets.ic_Red,
    borderWidth: wp(0.5),
    borderRadius: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
    , paddingHorizontal: wp(4)
  },
  modalView1: {
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView2: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '95%'
  },
  crossStyle: {
    position: 'absolute',
    top: wp(1.5),
    right: wp(5)
  },
  applyButton: {
    height: hp(7),
    width: wp(80),
    backgroundColor: Assets.ic_primaryColor,

    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  aplyText:{
    color: "#fff", 
    fontWeight: 'bold', 
    fontSize: wp(5)
  },
  innerView:{
    flexDirection: 'row', 
    justifyContent: 'space-between',marginTop: wp(5),
},
textMinMax:{
    fontSize: wp(4),
     color: '#000'
},
emptyText:{
    fontSize: wp(4),
     alignSelf: 'center', 
     marginTop: wp(10), 
     color: Assets.ic_secondaryColor
},


})
export default styles;