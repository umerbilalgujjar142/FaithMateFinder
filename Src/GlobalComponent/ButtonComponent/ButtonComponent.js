// button component for the application in black with white text and rounded corners
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.backgroundColor,
                borderColor: props.borderColor,
                borderWidth: props.borderWidth,
                borderRadius: props.borderRadius,
                paddingLeft: props.paddingLeft,
                marginTop: props.marginTop,
                alignSelf: props.alignSelf,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ color: props.textColor, fontWeight: 'bold', fontSize: wp(5) }}>{props.text}</Text>
        </TouchableOpacity>
    )
}
export default ButtonComponent;






