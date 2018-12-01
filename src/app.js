import React from 'react'
import {
  Button,
  withStyles,
  CssBaseline
} from '@material-ui/core'
import { 
  createMuiTheme,
} from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import grey from '@material-ui/core/colors/grey'
import Navi from './navi'
import Home from './home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    }
  },
  background: {
    default: '#E0E0E0'
  },
  typography: {
    useNextVariants: true
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