import React from 'react'
import { Image, TouchableHighlight, View, Text } from 'react-native'

export default props => {
    return (
        <View>
            <TouchableHighlight
                underlayColor="rgba(0,0,0,0.0)"
                onPress={() => {
                    props.navigation.navigate(props.screen)
                }}>
                <View>
                    <Image source={require('../../assets/images/emojis/bom/50.png')} />
                    <Text>{props.children}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}