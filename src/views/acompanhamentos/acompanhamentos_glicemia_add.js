import React, { useState, useContext } from "react";
import { TextInput, Text, View, Modal, Keyboard, TouchableWithoutFeedback  } from 'react-native'
import { StyleContext } from '../../contexts/styleContext'
import { DateContext } from '../../contexts/dateContext'
import Button from '../../components/buttons/rightSideButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaskInput, { Masks } from 'react-native-mask-input';



export default props => {
    const Style = useContext(StyleContext)
    const date = useContext(DateContext)
    const [inputIndice, setInputIndice] = useState()
    const [inputData, setInputData] = useState(date.date)
    const [inputObservacao, setInputObservacao] = useState()
    function saveInfo() {
        const data = {
            indice: inputIndice,
            data: inputData,
            observacao: inputObservacao
        }
        if (inputIndice == null) {
            console.warn('indice')
            return
        }
        if (inputData == null) {
            console.warn('data')
        }
        else {
            const storeData = async () => {
                try {
                    const value = await AsyncStorage.getItem('acompanhamentos_glicemia')
                    if (value !== null) {
                        const jsonValue = JSON.parse(value)
                        jsonValue.push(data)
                        await AsyncStorage.setItem('acompanhamentos_glicemia', JSON.stringify(jsonValue))
                    }
                    else {
                        const t = [
                            data
                        ]
                        await AsyncStorage.setItem('acompanhamentos_glicemia', JSON.stringify(t))
                    }
                } catch (e) {
                    console.warn(e)
                } finally {
                    props.navigation.goBack()
                    props.setLoading()
                }
            }
            storeData()
        }

    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('acompanhamentos_glicemia', '')
        } catch (e) {
            // saving error
        }
    }


    return (
        <View style={{ flexGrow: 1 }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss()
                }}
            >
                <View style={{ flexGrow: 1 }}>
                    <View>
                        <Text>Índice</Text>
                        <TextInput
                            value={inputIndice}
                            placeholder={'Ex. 80 mg/dL'}
                            onChangeText={value => setInputIndice(value)}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View>
                        <Text>Data</Text>
                        <MaskInput
                            value={inputData}
                            onChangeText={value => setInputData(value)}
                            mask={Masks.DATE_DDMMYYYY}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View>
                        <Text>Observação</Text>
                        <MaskInput
                            value={inputObservacao}
                            onChangeText={value => setInputObservacao(value)}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={Style.theme.rightSideButtonStyle}>
                <Button {...props} icon={require('../../assets/images/icons/arrow_50.png')} onPress={saveInfo}></Button>
            </View>
        </View>
    )
}
