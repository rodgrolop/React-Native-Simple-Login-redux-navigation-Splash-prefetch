import { DefaultTheme, configureFonts } from 'react-native-paper'

const fontConfig = {
  default: {
    black: {
      fontFamily: 'Roboto',
      fontWeight: '900',
    },
    bold: {
      fontFamily: 'Roboto',
      fontWeight: '700',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: '500',
    },
    regular: {
      fontFamily: 'Roboto',
      fontWeight: '400',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: '100',
    },
  },
}

export default theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      text: '#000000DE',
      background: '#FFF',
      surface: '#FFF', 
      primary: '#63257F',
      accent: '#63257F',
      blurInput: '#CCC',
      selectionColor: '#63257F55',
      transparent: '#00000000',
    },
    fonts: configureFonts(fontConfig),
  };