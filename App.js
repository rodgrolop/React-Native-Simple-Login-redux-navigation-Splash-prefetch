import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { enableScreens } from 'react-native-screens'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import theme from './src/theme'

// Redux imports
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'

// Assets prefetching
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
import { Asset } from 'expo-asset'

// Components imports
import Navigation from './src/navigation'

enableScreens()

// Redux declarations
store.dispatch(initialiseApplication())

const App = () => {
  
  const [isReady, setReady] = useState(false)
  
  const loadAssetsAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/icon.png'),
    ]),
    Font.loadAsync({
      ...Icon.MaterialCommunityIcons.font,
    }),
  ])
  
  return isReady ? 
    (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar style='auto' />
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </Provider>
    )
  :
  (
    <AppLoading
      startAsync={loadAssetsAsync}
      onFinish={() => setReady(true)}
      onError={console.warn}
    />
  )  
}

export default App