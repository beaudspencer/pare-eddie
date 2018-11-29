import React from 'react'
import {
  Typography
} from '@material-ui/core'

const styles = {
  background: {
      height: '40vh',
      width: '100%',
      backgroundImage: 'url("https://s3.amazonaws.com/pare-eddie/IMG_20181127_183213.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'    }
}  

export default function Home(props) {
  return (
    <div>
      <Typography
        color="inherit"
        variant="h2"
        component="h2"
      >
        Pare Eddie
      </Typography>
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