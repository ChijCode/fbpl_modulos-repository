import React, {createContext, useState} from "react";
import { StyleSheet, Dimensions } from "react-native";
import moment from "moment";
import 'moment-timezone'

export const DateContext = createContext({})
export default props => {
    const dateFormated = moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
    const date = moment().tz('America/Sao_Paulo').format('DD/MM/YYYY')
    const Hour = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
    return (
        <DateContext.Provider value={{Hour, date, dateFormated }}>
            {props.children}
        </DateContext.Provider>
    )
}
