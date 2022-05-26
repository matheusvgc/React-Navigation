import React from 'react'
import {
    View,
    Button,
} from 'react-native'

export default props => (
    <View style={{flex:1}}>
        <View style={{justifyContent: 'space-around',flexDirection: 'row'}}>
            {props.voltar
                ?   <Button
                        title='Voltar'
                        onPress={() => {
                            props.navigation.goBack(props.voltar)
                        }}
                    />
                : false
            }
            {props.avancar
                ?   <Button
                        title='Avançar'
                        onPress={() => {
                            props.navigation.navigate(
                                props.avancar,
                                props.avancarParams || 0
                            )
                        }}
                    />
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)
