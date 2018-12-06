import React from 'react'
import {
  CssBaseline
} from '@material-ui/core'
import { 
  createMuiTheme,
} from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Navi from './navi'
import Info from './info-container'

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

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false
    }
  }
  componentDidMount() {
    const mql = window.matchMedia('(max-width: 600px)')
    if(mql.matches) {
      this.setState({
        mobile: true
      })
    }
    mql.addListener(event => {
      if(event.matches) {
        this.setState({
          mobile: true
        })
      }
      else {
        this.setState({
          mobile: false
        })
      }
    })
  }
  render() {
    return (
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <React.Fragment>
            <Navi />
            <Info
              mobile={this.state.mobile}
            />
          </React.Fragment>
        </MuiThemeProvider>
      </CssBaseline>
    )
  }
}