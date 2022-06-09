import React, { useContext } from "react";
import { Image, TouchableHighlight, View } from 'react-native'
import { StyleContext } from '../../contexts/styleContext'

export default props => {
    const Style = useContext(StyleContext)
    const image = props.icon
    return (
        <TouchableHighlight
            underlayColor="rgba(255,255,255,0.3)"
            onPress={() => {
                props.onPress()
            }}
        >
            <View style={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1, height: '100%', borderRadius: 30 }}>
                <Image source={image} />
            </View>
        </TouchableHighlight>
    )
}