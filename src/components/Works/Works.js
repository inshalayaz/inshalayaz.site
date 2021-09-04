import React from 'react'
import Grid from '@material-ui/core/Grid';

import useStyles from './Style'
import WorkCard from './WorkCard/WorkCard'

const Works = () => {
    const classes = useStyles()
    return (
        <div id="work">
            <Grid container className={classes.root} spacing={2} align='center'>
                <Grid item xs={12} md={4}>
                    <WorkCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <WorkCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <WorkCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default Works
