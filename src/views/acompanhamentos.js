import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { StyleContext } from '../contexts/styleContext'
import Button from '../components/buttons/buttonAcompanhamentos'

export default props => {
    const style = useContext(StyleContext)
    return (
        <View style={style.theme.screenStyles}>
            <Button {...props} title={'Glicemia'} description={'mg/dL'} screen={'acompanhamentos_glicemia'}>dsadsads</Button>
            <Button title={'IMC'} description={'Kg/m2'}>dsadsads</Button>
            <Button title={'Pressão Arterial'} description={'mmHg'}>dsadsads</Button>
        </View>
    )
}