import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  CssBaseline
} from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

const NavBar = withStyles({
  root: {
    width: '100%'
  }
})(AppBar)

const Title = withStyles({
  root: {
    marginTop: '0.5rem'
  }
})(Typography)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#484848'
    }
  },
  typography: {
    fontFamily: "'Kumar One Outline', cursive",
    useNextVariants: true
  }
})

export default function Navi(props) {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <NavBar
          color="primary"
          position="static"
        >
          <Toolbar>
            <Title
            className="fancy"
            color="inherit"
            variant="h4"
            component="h6"
            >
              Pare Eddie
            </Title>
          </Toolbar>
        </NavBar>
      </MuiThemeProvider>
    </CssBaseline>
  )
}