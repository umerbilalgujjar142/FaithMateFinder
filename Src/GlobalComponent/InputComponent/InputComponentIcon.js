
import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';


const InputComponentIcon = (props) => {

    return (
        <View>
            {/* make input text with the icons in the textinput on the right side */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',justifyContent:'space-between',width: props.width,
                        height: props.height,
                        backgroundColor: props.backgroundColor,
                        borderColor: props.borderColor,
                        borderWidth: props.borderWidth,
                        borderRadius: props.borderRadius,
                        paddingHorizontal: props.paddingHorizontal,
                        marginTop: props.marginTop,
                        }}>
                <TextInput
                    style={{
                        
                        paddingLeft: props.paddingLeft,
                       
                        alignSelf: props.alignSelf,
                        color: props.color,
                        fontSize: props.fontSize,
                    }}

                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={props.onChangeText}
                    value={props.value}
                />
                {/* vector icon */}
                <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} style={{  right: props.iconRight, top: props.iconTop }} />
            </View>







        </View>

    )
}

export default InputComponentIcon;