import React, { useState } from "react";
import { TextInput, Text, View, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Header from '../headers/header'

export default props => {
    const [inputText, setInputText] = useState('Ex. 80 mg/dL')
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
            /* console.warn('sss') */
        }}>
            <View>
                <Modal
                    visible={props.ative}
                >
                    <Header setAtivation={props.setAtivation}>Acompanhamento Glicemia</Header>
                    <Text>Índice</Text>
                    <TextInput
                        onFocus={() => {
                            if (inputText == 'Ex. 80 mg/dL') {
                                setInputText('')
                            }
                        }
                        }
                        value={inputText}
                        onChangeText={value => setInputText(value)}
                    />
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}