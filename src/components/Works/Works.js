import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './Style'
import WorkCard from './WorkCard/WorkCard'
import Data from './Data'
import './style.css'

const Works = () => {
    const classes = useStyles()
    return (
        <div id="work">
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} >
                <Typography variant="h3" id="work-text" align='left' style={{ color:'#fff', margin:'150px 0px 50px 50px ' }} >
                            Work
                </Typography>
                </Grid>
                <Grid container className={classes.root} spacing={2} align='center'>
                {
                    Data.map( n => (
                        <Grid item xs={12} md={4}>
                            <WorkCard key={n.key} Img={n.Img.default} Title={n.Title}  />
                        </Grid>
                    ))
                }
                </Grid>
            </Grid>
        </div>
    )
}

export default Works
