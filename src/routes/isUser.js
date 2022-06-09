import React from 'react'
import { Dimensions } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../views/home'
import Acompanhamentos from '../views/acompanhamentos'
import Acompanhamentos_Glicemia from '../views/acompanhamentos/acompanhamentos_glicemia'

const width = Dimensions.get("window").width
const Stack = createNativeStackNavigator()
export default props => {

    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen {...props} name='home' component={Home} options={{ headerStyle: { backgroundColor: '#009741', }, headerTintColor: '#fff', }}></Stack.Screen>
            <Stack.Screen {...props} name='acompanhamentos' component={Acompanhamentos} options={{ headerStyle: { backgroundColor: '#009741' }, headerTintColor: '#fff', }}></Stack.Screen>
            <Stack.Screen name='acompanhamentos_glicemia' component={Acompanhamentos_Glicemia} options={{title: 'Glicemia', headerTitleStyle: {fontFamily: 'Roboto-Bold', fontSize: width / 20}, headerStyle: { backgroundColor: '#009741'}, headerTintColor: '#fff', headerShadowVisible: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}