import React from 'react'

import { Paper, Typography, Grid } from '@material-ui/core'
import useStyles from './Style'
import './style.css'

const ServiceCard = ({Img,Alt,Title,Description,BgColor,textColor}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={4} id="service-card">
            <Paper className={classes.paper} id="card-bg" style={{background: BgColor  , color: textColor}}>
                <img src={Img} alt={Alt} height="100px" />
                <Typography variant='h4' className={classes.title}>
                    {Title}
                </Typography>
                <Typography variant='body1' className={classes.txt} >
                  {Description}
                </Typography>
              </Paper>
        </Grid>
    )
}

export default ServiceCard
