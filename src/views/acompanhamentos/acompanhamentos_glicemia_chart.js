import React, { useContext, useEffect, useMemo, useState } from "react";
import { Text, View, Dimensions, ActivityIndicator, Animated } from 'react-native'
import { StyleContext } from '../../contexts/styleContext'
import Button from '../../components/buttons/rightSideButton'
import Chart from '../../components/charts/acompanhamentoChart'

export default props => {
    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height
    const Style = useContext(StyleContext)
    const data = props.data
    const loading = props.loading
    const [dotAnimated] = useState(new Animated.Value(40))
    const [control, setControl] = useState(40)
    function navigate() {
        props.navigation.push('acompanhamentos_glicemia_add')
    }
    function formatData() {
        const x = []
        const y = []
        if (data.length >= 1) {
            x.push(data.map((element) => {
                return element.data
            }))
            y.push(data.map((element) => {
                return parseInt(element.indice)
            }))
        }
        return [x[0], y[0]]
    }
    const m = formatData()
    function animacao() {
        if (m[1])
            Animated.timing(dotAnimated, { toValue: m[1][m[1].length - 1] !== undefined ? m[1][m[1].length - 1] : 0, duration: 3000, useNativeDriver: false }).start()
        dotAnimated.addListener(({ value }) => {
            setControl(value)
        })
    }


    if (loading == true) {
        animacao()
        return (
            <ActivityIndicator></ActivityIndicator>
        )
    }

    if (data.length >= 1) {
        const par = [...m[1]]
        par[par.length - 1] = control
        if (par.length >= 4) {
            par.reverse()
            m[0].reverse()
            m[1].reverse()
            par.splice(4)
            m[0].splice(4)
            m[1].splice(4)
            par.reverse()
            m[0].reverse()
            m[1].reverse()
        }
        return (
            <View style={Style.theme.screenStyles}>
                <View style={Style.theme.acompanhamentoTopStyle}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={Style.theme.acompanhamentoH1Style}>{m[1][m[1].length - 1]}</Text>
                        <Text >mg/dl</Text>
                    </View>
                </View>
                <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Animated.View>
                        <Chart dataMain={m} dataSets={par} />
                    </Animated.View>
                    <View style={Style.theme.rightSideButtonStyle}>
                        <Button {...props} icon={require('../../assets/images/icons/arrow_50.png')} onPress={navigate}></Button>
                    </View>
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