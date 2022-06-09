import React, { createContext, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";

export const StyleContext = createContext({})
const windowHeith = Dimensions.get('window').height
const windowWidht = Dimensions.get('window').width
export default props => {
    const [themeDark, setTheme] = useState(false)
    const greenTheme = StyleSheet.create({

        /* Main Styles */
        screenStyles: {
            backgroundColor: '#fff',
            flex: 1
        },
        h1: {
            color: '#000',
            fontFamily: 'Roboto-Bold',
            fontSize: windowWidht / 20
        },
        h2: {
            fontFamily: 'Roboto-Regular',
            fontSize: windowWidht / 30
        },

        /* Right Side Button Style */

        rightSideButtonStyle: {
            flexGrow: 1,
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: '#009741',
            position: 'absolute',
            bottom: windowHeith / 15,
            right: windowWidht / 7,
            width: windowWidht / 7,
            height: windowWidht / 7
        },

        /* Modal Header Styles */
        modalHeader: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            flexDirection: 'row',
            elevation: 5,
            height: windowHeith / 13
        },
        modalHeaderh1: {
            textAlign: 'center',
            color: '#000',
            fontFamily: 'Roboto-Bold',
            fontSize: windowWidht / 20
        },

        /* Acompanhamentos */
        acompanhamentoTopStyle: {
            flexGrow: 1,
            height: '5%',
            backgroundColor: '#009741'
        },
        acompanhamentoH1Style : {
            color: '#fff',
            fontSize: windowHeith / 10
        }
    })

    const darkTheme = StyleSheet.create({

        /* Main Styles */
        screenStyles: {
            backgroundColor: 'rgba(0,0,0,0.3)',
            flex: 1
        },
        h1: {
            color: '#eee',
            fontFamily: 'Roboto-Bold',
            fontSize: windowWidht / 20
        },
        h2: {
            fontFamily: 'Roboto-Regular',
            fontSize: windowWidht / 30
        },

        /* Right Side Button Style */
        rightSideButtonStyle: {
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: '#009741',
            position: 'absolute',
            bottom: windowHeith / 15,
            right: windowWidht / 7,
            width: windowWidht / 7,
            height: windowWidht / 7
        },

        /* Modal Header Styles */
        modalHeader: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
            flexDirection: 'row',
            elevation: 7,
            height: windowHeith / 13
        },
        modalHeaderh1: {
            textAlign: 'center',
            color: '#000',
            fontFamily: 'Roboto-Bold',
            fontSize: windowWidht / 20
        }
    })

    function changeTheme(value) {
        setTheme(value)
    }

    const theme = themeDark == false ? greenTheme : darkTheme
    return (
        <StyleContext.Provider value={{ theme, changeTheme, themeDark }}>
            {props.children}
        </StyleContext.Provider>
    )
}
