import React, { useContext, useEffect, useState, useMemo } from "react";
import { Text, View, Image, ActivityIndicator, ScrollView, TouchableHighlight } from 'react-native'
import Button from '../../components/buttons/rightSideButton'
import { StyleContext } from '../../contexts/styleContext'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default props => {
    const Style = useContext(StyleContext)
    const data = props.data
    const loading = props.loading
    const funcao = props.setData
    function navigate() {
        props.navigation.push('acompanhamentos_glicemia_add')
    }

    function removeInfo(value) {
        data.splice(value, 1)
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value)
                await AsyncStorage.setItem('acompanhamentos_glicemia', jsonValue)
            } catch (e) {
                console.warn(e)
            }
        }
        storeData(data)
        return data
    }

    if (loading == true) {
        return (
            <ActivityIndicator></ActivityIndicator>
        )
    }

    if (data.length >= 1) {
        const x = []
        x.push(data.map((element, index) => {
            return (
                <TouchableHighlight
                    key={index}
                    onLongPress={() => {
                        const a = removeInfo(index)
                        //console.warn(a)
                        props.setData([])
                        props.setData(a)
                        //props.navigation.push('acompanhamentos_glicemia')
                    }}
                    delayLongPress={1000}
                    underlayColor="rgba(255,255,255,0.3)"
                >
                    <View style={{ flexGrow: 1 }}>
                        <Image source={require('../../assets/images/icons/arrow_50.png')}></Image>
                        <View>
                            <Text>{element.data}</Text>
                            <Text>{element.indice}</Text>
                            <Text>{element.observacao}</Text>
                            <Text>dsadsad</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        }))
        return (
            <View style={{ flexGrow: 1 }}>
                <ScrollView>
                    {x}
                </ScrollView>
                <View key={'button'} style={Style.theme.rightSideButtonStyle}>
                    <Button {...props} icon={require('../../assets/images/icons/arrow_50.png')} onPress={navigate}></Button>
                </View>
            </View>
        )
    }

    else {
        return (
            <View key={'button'} style={Style.theme.rightSideButtonStyle}>
                <Button {...props} icon={require('../../assets/images/icons/arrow_50.png')} onPress={navigate}></Button>
            </View>
        )
    }
}