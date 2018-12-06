import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  withStyles
} from '@material-ui/core'
import InfoDesktop from './info-desktop'
import InfoMobile from './info-mobile'

const InfoCard = withStyles({
  root: {
    position: 'relative',
    width: '92%',
    top: '2rem',
    margin: '0 auto',
    backgroundColor: '#484848'
  }
})(Card)

const Title = withStyles({
  root: {
    width: '88%',
    margin: '0 auto',
    marginTop: '1.5rem'
  }
})(Typography)

export default function Info(props) {
  return (
  <div>
    <Title
      color="primary"
      variant="h4"
    >
      Shop Info:
    </Title>
    <InfoCard>
      <CardContent>
        {
          props.mobile
          ? <InfoMobile/>
          : <InfoDesktop/>
        }
      </CardContent>
    </InfoCard>
  </div>
  )
}