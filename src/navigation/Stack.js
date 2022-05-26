import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='TelaA'>
        <Stack.Screen name='TelaA' options={{title: 'Sobre'}}>
            {props => (
                <PassoStack {...props} avancar='TelaB'>
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name='TelaB' options={{title: 'Integrantes'}}>
            {props => (
                <PassoStack {...props} voltar avancar='TelaC' avancarParams={{ numero: 1007 }}>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name='TelaC' options={{title: 'Cadastre-se'}}>
            {props => (
                <PassoStack {...props} voltar avancar='TelaC'>
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)