
import React, { useEffect } from 'react';
import {
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';


const InputComponent = (props) => {

    return (
        <View>
            <TextInput
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
                    color: props.color,
                    fontSize: props.fontSize,
                }}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>


    )

}
export default InputComponent;
