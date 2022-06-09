import React, { useContext } from 'react'
import { Pressable, View, Text, Image, StyleSheet } from 'react-native'
import {StyleContext} from '../../contexts/styleContext'

export default props => {
    const style = useContext(StyleContext)
    return (
        <View style={style.theme.modalHeader}>
            <Pressable
                onPress={() => {
                    props.setAtivation(false)
                }}
            >
                <Image source={require('../../assets/images/icons/left_arrow.png')} />
            </Pressable>
            <View style={{width: '90%'}}>
                <Text style={style.theme.modalHeaderh1}>{props.children}</Text>
            </View>
        </View>
    )
}
