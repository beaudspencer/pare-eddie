import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  withStyles
} from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

const styles = {
  mapCont: {
    margin: '0 auto',
    marginTop: '1rem',
    width: "90%",
    height: "25vh",
    frameBorder: "0"
  },
  map: {
    height: '100%',
    width: '100%'
  }
}

const InfoCard = withStyles({
  root: {
    position: 'relative',
    width: '88%',
    top: '3rem',
    margin: '0 auto',
    maxWidth: '40rem',
    backgroundColor: '#484848'
  }
})(Card)

const WhiteDivider = withStyles({
  root: {
    backgroundColor: '#fff'
  }
})(Divider)

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.center = {
      lat: 33.7349368,
      lng: -117.8260378
    }
    this.zoom = 15
  }
  render() {
    return (
      <div>
      <InfoCard>
        <CardContent>
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
          <Typography
            color='secondary'
            gutterBottom
          >
            Phone:
          </Typography>
          <Typography
            color="secondary"
          >
            (714) - 603 - 8753
          </Typography>
          <WhiteDivider
            variant="fullWidth"
          />
          <div
          style={styles.mapCont}
          >
            <iframe
              style={styles.map}
              src="https://www.google.com/maps/embed/v1/place?q=14181%20Newport%20ave%20ste%20e&key=AIzaSyBsMgVI1Rrlw_Z2FnpCzme4epDsyyDNfHc"
              allowFullScreen
            >
            </iframe>
          </div>
        </CardContent>
      </InfoCard>
      </div>
    )
  }
}