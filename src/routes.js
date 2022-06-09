import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StyleContext from './contexts/styleContext'
import DateContext from './contexts/dateContext'
import IsUser from './routes/isUser'
import NotUser from './routes/notUser'

export default props => {
    return (
        <NavigationContainer>
            <DateContext>
                <StyleContext>
                    <IsUser></IsUser>
                </StyleContext>
            </DateContext>
        </NavigationContainer>
    )
}