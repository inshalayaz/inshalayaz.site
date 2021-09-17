import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import useStyles from './Style'
import ServiceCard from './ServiceCard/ServiceCard'
import Data  from './Data'
import './style.css'

function Services() {
    const classes = useStyles();
   
    
  

    return (
        <div className={classes.root} id='services' >
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h3" id="services-heading" align='left' style={{ color:'#fff', margin:'80px 0px 50px 50px ' }} >
                        Services
            </Typography>
            </Grid>
            {
              Data.map( n =>(
                <ServiceCard key={n.key} Img={n.Img.default} Alt={n.Alt} Title={n.Title} Description={n.Description} BgColor={n.BgColor} textColor={n.textColor} />
              ))
            }
          </Grid>
        </div>
      );
}

export default Services
