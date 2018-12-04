import React from 'react'
import {
  CssBaseline
} from '@material-ui/core'
import { 
  createMuiTheme,
} from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Navi from './navi'
import Home from './home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#484848'
    },
    secondary: {
      main: '#fff'
    }
  },
  background: {
    default: '#E0E0E0'
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Libre Baskerville', serif"
  }
})

export default function App(props) {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Navi />
          <Home />
        </React.Fragment>
      </MuiThemeProvider>
    </CssBaseline>
  )
}