import React, { useEffect } from 'react';
import {
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
const styles=StyleSheet.create({

conatainer:{
    flex: 1,
     backgroundColor: '#fff',
     paddingHorizontal:wp(7)
},

faithViw:{

     marginTop: wp(2)
},
textStyle:{
    fontSize: wp(7), 
    color: Assets.ic_primaryColor
},


////////
titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
  describeText: {
    color: '#8C8C8C', top: wp(2)  
},
itemText:{
    color: Assets.ic_Balck,
     fontSize: wp(4.5),
      marginTop: wp(5)
}
})
export default styles;