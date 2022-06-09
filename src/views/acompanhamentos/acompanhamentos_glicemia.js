import React, { useState, useMemo, createContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chart from './acompanhamentos_glicemia_chart'
import List from './acompanhamentos_glicemia_list'
import Acompanhamentos_Glicemia_add from './acompanhamentos_glicemia_add'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
export default props => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = useMemo(() => async () => {
        try {
            const value = await AsyncStorage.getItem('acompanhamentos_glicemia')
            const data = JSON.parse(value)
            if(value !== null) {
                setData(data.sort((a, b) => a.data.split('/').reverse().join().localeCompare(b.data.split('/').reverse().join())))
            }
        } catch (e) {
            console.warn(e)
        } finally {
            setLoading(false)
        }
    })
    function updateData(value) {
        setData(value)
    }
    
    function updateLoading() {
        setLoading(true)
    }
    if (loading == true) {
        getData()
    }
    return (
        <Stack.Navigator initialRouteName='glicemia_home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'glicemia_home'}>{props => (
                <Tab.Navigator initialRouteName='chart' screenOptions={{ headerShown: false }}>
                    <Tab.Screen {...props} name='chart' options={{ unmountOnBlur: false }}>{props => (<Chart {...props} data={data} loading={loading}></Chart>)}</Tab.Screen>
                    <Tab.Screen {...props} name='list' options={{ unmountOnBlur: false, lazy: false }}>{props => (<List {...props} data={data} loading={loading} setData={updateData}></List>)}</Tab.Screen>
                </Tab.Navigator>
            )}
            </Stack.Screen>
            <Stack.Screen name='acompanhamentos_glicemia_add'>{props => (<Acompanhamentos_Glicemia_add {...props} backData={data} setLoading={updateLoading}></Acompanhamentos_Glicemia_add>)}</Stack.Screen>
        </Stack.Navigator>
    )
}
