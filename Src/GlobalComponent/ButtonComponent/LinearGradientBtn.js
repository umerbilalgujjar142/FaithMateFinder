import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LinearGradientBtn = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                top: props.top,
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

            <LinearGradient
                colors={['#E33068', '#F38B76']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    width: props.width,
                    height: props.height,
                    borderRadius: props.borderRadius,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{ color: props.textColor, fontWeight: 'bold', fontSize: wp(5) }}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default LinearGradientBtn;