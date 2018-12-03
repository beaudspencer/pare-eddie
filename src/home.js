import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  withStyles
} from '@material-ui/core'

const styles = {
  background: {
      height: '60vh',
      width: '100%',
      backgroundImage: 'url("https://cdn5.vectorstock.com/i/1000x1000/53/34/tribal-tattoo-background-vector-1085334.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'    }
}

const InfoCard = withStyles({
  root: {
    position: 'relative',
    width: '66%',
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

export default function Home(props) {
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
      </CardContent>
    </InfoCard>
    </div>
  )
}