import React, { useContext } from 'react'
import { Image, TouchableHighlight, View, Text } from 'react-native'
import { StyleContext } from '../../contexts/styleContext'

export default props => {
    const style = useContext(StyleContext)
    return (
        <TouchableHighlight
            underlayColor="rgba(0,0,0,0.0)"
            onPress={() => {
                props.navigation.navigate(props.screen)
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'rgba(0,0,0,0.2)', paddingBottom: '3%', paddingTop: '3%' }}>
                <View>
                    <Image source={require('../../assets/images/emojis/bom/50.png')} />
                </View>
                <View style={{ width: '70%' }}>
                    <Text style={style.theme.h1}>{props.title}</Text>
                    <Text style={style.theme.h2}>{props.description}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image source={require('../../assets/images/icons/arrow_50.png')} />
                </View>
            </View>
        </TouchableHighlight>
    )
}