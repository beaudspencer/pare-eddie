import React from 'react'
import {
  withStyles,
  Typography
} from '@material-ui/core'
import Phone from '@material-ui/icons/Phone'

const styles = {
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

export default function InfoDesktop() {
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