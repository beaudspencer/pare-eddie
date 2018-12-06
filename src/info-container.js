import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  withStyles
} from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Phone from '@material-ui/icons/Phone'

const styles = {
  mapContMob: {
    margin: '0 auto',
    marginTop: '1rem',
    width: "100%",
    height: "25vh",
    frameBorder: "0"
  },
  mapContDesk: {
    display: 'inline-block',
    margin: '0 auto',
    paddingRight: '1rem',
    width: "50%",
    height: "100%",
    frameBorder: "0"
  },
  deskInfo: {
    position: 'absolute',
    height: '30rem',
    display: 'inline-block',
    width: '50%',
    paddingLeft: '1rem',
    borderLeftStyle: 'solid',
    borderLeftColor: '#E3242B'
  },
  hours: {
    position: 'absoulte',
    top: '50%',
    transform: 'translateY(50%)',
    textAlign: 'center',
    height: 'fit-content',
    width: '100%',
    margin: '0 auto'
  },
  map: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    width: '90%'
  },
  cardCont: {
    height: '30rem'
  },
  tel: {
    textDecoration: 'none'
  },
  call: {
    textAlign: 'center',
    marginTop: '1rem'
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
    width: '92%',
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

const PhoneNumber = withStyles({
  root: {
    width: 'fit-content',
    display: 'inline-block'
  }
})(Typography)

const DeskPhone = withStyles({
  root: {
    position: 'relative',
    top: '0.5rem',
    right: '0.5rem'
  }
})(Phone)

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.renderMobile = this.renderMobile.bind(this)
    this.renderDesktop = this.renderDesktop.bind(this)
  }
  renderMobile() {
    return (
      <React.Fragment>
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
            <div
              style={styles.map}
            >
              <a
                href="tel:+1-714-603-8753"
                style={styles.tel}
                >
                <DeskPhone
                  color="secondary"
                />
                <PhoneNumber
                  color="secondary"
                  >
                  (714) - 603 - 8753
                </PhoneNumber>
              </a>
            </div>
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
        style={styles.mapContMob}
        >
          <iframe
            style={styles.map}
            src={`https://www.google.com/maps/embed/v1/place?q=14181%20Newport%20ave%20ste%20e&key=${process.env.GOOGLE_API_KEY}`}
            allowFullScreen
            >
          </iframe>
        </div>
      </React.Fragment>
    )
  }
  renderDesktop() {
    return (
      <div
        style={styles.cardCont}
      >
        <div
          style={styles.mapContDesk}
        >
          <iframe
            style={styles.map}
            src={`https://www.google.com/maps/embed/v1/place?q=14181%20Newport%20ave%20ste%20e&key=${process.env.GOOGLE_API_KEY}`}
            allowFullScreen
          >
          </iframe>
        </div>
        <div
          style={styles.deskInfo}
        >
          <div
            style={styles.hours}
          >
            <Typography
              color="secondary"
            >
              Hours:
              <br/>
              <br/>
            </Typography>
            <Typography
              color="secondary"
            >
              Sunday - Friday: 5:00 PM - 2:00AM
              <br/>
              <br/>
              {'Friday & Saturday: 5:00 PM - 4:00AM'}
              <br/>
              <br/>
            </Typography>
            <Typography
              color="secondary"
            >
              Pricing:
              <br/>
              <br/>
              {'Tattoo:  $80 Minimum,  $160/hr'}
            </Typography>
            <div
              style={styles.call}
            >
              <a
                href="tel:+1-714-603-8753"
                style={styles.tel}
              >
                <DeskPhone
                  color="secondary"
                />
                <PhoneNumber
                  color="secondary"
                >
                (714) - 603 - 8753
                </PhoneNumber>
              </a>
            </div>
            </div>
          </div>
      </div>
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
      <InfoCard>
        <CardContent>
          {
            this.props.mobile
            ? this.renderMobile()
            : this.renderDesktop()
          }
        </CardContent>
    </InfoCard>
      </div>
    )
  }
}