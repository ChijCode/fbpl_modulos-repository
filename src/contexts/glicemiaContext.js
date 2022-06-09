import React, { createContext, useState, useMemo } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlicemiaDataContext = createContext({})

export default props => {

    const [data, setData] = useState([])

    const getData = useMemo(() => async () => {
        try {
            const value = await AsyncStorage.getItem('acompanhamentos_glicemia')
            const data = JSON.parse(value)
            setData(data)
        } catch (e) {
            console.warn(e)
        }
    })
    getData()

    return (
        <GlicemiaDataContext.Provider value={{ data }}>
            {props.children}
        </GlicemiaDataContext.Provider>
    )
}