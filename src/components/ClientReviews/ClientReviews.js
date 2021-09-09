import React from 'react'
import RatingCarousel from './Carousel/Carousel'
import { Grid, Typography} from '@material-ui/core';
import useStyles from './Style'
import './Style.css'
import TechnologyIcons from './TechnologyIcons/TechnologyIcons';


function ClientReviews() {
    const classes = useStyles()
    return (
        <div className={classes.root} id="about" >
                
            <Grid container spacing={3} >   
                <Grid item xs={12} sm={12}>
                    <Typography variant="h3" align='left' style={{ color:'#fff', margin:'80px 0px 50px 50px ' }} >
                                Client Reviews
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <RatingCarousel />
                </Grid>
                <Grid item xs={12}>
                   <TechnologyIcons />
                </Grid>
            </Grid>
      
            
        </div>
      );
}

export default ClientReviews
