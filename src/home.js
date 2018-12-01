import React from 'react'
import {
  Typography
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

export default function Home(props) {
  return (
    <div
    style={styles.background}>
      <Typography>
        14181 Newport Ave STE E
      </Typography>
      <Typography>
        Tustin, CA 92780
      </Typography>
      <Typography>
        (714) - 603 - 8753
      </Typography>
    </div>
  )
}