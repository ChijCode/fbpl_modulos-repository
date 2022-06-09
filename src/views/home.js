import React, { useContext } from 'react'
import { Text, View, Button} from 'react-native'
import { StyleContext } from '../contexts/styleContext'
import Button2 from '../components/buttons/buttonHome'

export default props => {
    const style = useContext(StyleContext)
    return (
        <View style={style.theme.screenStyles}>
            <Button2 {...props} screen={'acompanhamentos'}>dsadsads</Button2>
            <Button 
            title='trocar'
                onPress={() => {
                    style.changeTheme(!style.themeDark) 
                }}
            />
        </View>
    )
}