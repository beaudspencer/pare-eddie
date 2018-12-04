import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  withStyles
} from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'

const styles = {
  mapCont: {
    margin: '0 auto',
    marginTop: '1rem',
    width: "100%",
    height: "25vh",
    frameBorder: "0"
  },
  map: {
    height: '100%',
    width: '100%'
  },
  tel: {
    textDecoration: 'none'
  }
}

const InfoPanel = withStyles({
  root: {
    margin: '1rem 0',
    backgroundColor: '#E3242B'
  }
})(ExpansionPanel)

const InfoCard = withStyles({
  root: {
    position: 'relative',
    width: '88%',
    top: '2rem',
    margin: '0 auto',
    backgroundColor: '#484848'
  }
})(Card)

const WhiteDivider = withStyles({
  root: {
    backgroundColor: '#fff'
  }
})(Divider)

const Title = withStyles({
  root: {
    width: '88%',
    margin: '0 auto',
    marginTop: '1.5rem'
  }
})(Typography)

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.center = {
      lat: 33.7349368,
      lng: -117.8260378
    }
    this.zoom = 13
    this.renderMobile = this.renderMobile.bind(this)
  }
  renderMobile() {
    return (
      <InfoCard>
      <CardContent>
        <InfoPanel>
          <ExpansionPanelSummary
          expandIcon={<ExpandMore color="secondary"/>}>
            <Typography
              color="secondary"
            >
              Hours:
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              color="secondary"
            >
              M: 5:00 PM - 2:00AM
              <br/>
              <br/>
              T: 5:00 PM - 2:00AM
              <br/>
              <br/>
              W: 5:00 PM - 2:00AM
              <br/>
              <br/>
              Th: 5:00 PM - 2:00AM
              <br/>
              <br/>
              F: 5:00 PM - 4:00AM
              <br/>
              <br/>
              Sat: 5:00 PM - 4:00AM
              <br/>
              <br/>
              Sun: 5:00 PM - 2:00AM
            </Typography>
          </ExpansionPanelDetails>
        </InfoPanel>
        <InfoPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore color="secondary"/>}
          >
            <Typography
              color='secondary'
              gutterBottom
            >
              Phone:
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <a
              href="tel:+1-714-603-8753"
              style={styles.tel}
            >
              <Typography
                color="secondary"
              >
                (714) - 603 - 8753
              </Typography>
            </a>
          </ExpansionPanelDetails>
        </InfoPanel>
        <Typography
          color="secondary"
          gutterBottom
        >
          Location:
        </Typography>
        <Typography
          color="secondary"
        >
          14181 Newport Ave STE E
        </Typography>
        <Typography
          color="secondary"
          gutterBottom
        >
          Tustin, CA 92780
        </Typography>
        <WhiteDivider
          variant="fullWidth"
        />
        <div
        style={styles.mapCont}
        >
          <iframe
            style={styles.map}
            src={`https://www.google.com/maps/embed/v1/place?q=14181%20Newport%20ave%20ste%20e&key=${process.env.GOOGLE_API_KEY}`}
            allowFullScreen
          >
          </iframe>
        </div>
      </CardContent>
    </InfoCard>
    )
  }
  render() {
    return (
      <div>
      <Title
        color="primary"
        variant="h4"
      >
        Shop Info:
      </Title>
      {this.renderMobile()}
      </div>
    )
  }
}