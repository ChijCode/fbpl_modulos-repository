import React from "react";
import { SafeAreaView } from "react-native";
import Routes from './routes'

export default props => (
    <SafeAreaView style={{flexGrow:1}}>
        <Routes></Routes>
    </SafeAreaView>
)