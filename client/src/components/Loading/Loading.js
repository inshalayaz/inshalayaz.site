import React from 'react';
import './style.css'
import { Grid} from '@material-ui/core'
import LoadingGif from '../../assets/loading.gif'

export default function CircularUnderLoad() {
  return  (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img src={LoadingGif} alt="Loading" style={{marginTop:'200px'}}/>
      </Grid>
    </Grid>
  )

}