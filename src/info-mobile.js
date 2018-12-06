import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Divider,
  Typography,
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
  map: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    width: '90%'
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

const PhoneNumber = withStyles({
  root: {
    width: 'fit-content',
    display: 'inline-block'
  }
})(Typography)

const WhiteDivider = withStyles({
  root: {
    backgroundColor: '#fff'
  }
})(Divider)

const DeskPhone = withStyles({
  root: {
    position: 'relative',
    top: '0.5rem',
    right: '0.5rem'
  }
})(Phone)

export default function InfoMobile(props) {
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