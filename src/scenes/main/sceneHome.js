import React, { useEffect } from 'react'

import { withTheme, Text } from 'react-native-paper'

import Header from './../../components/Header'
import DefaultPage from '../../components/DefaultPage'

const SceneHome = props => {    
    
    useEffect(() => {
        
    }, [])
    
    return (
        <>
            <Header/>
            <DefaultPage>
                <Text>Home Scene</Text>
            </DefaultPage>
        </>
    )
}

export default withTheme(SceneHome)