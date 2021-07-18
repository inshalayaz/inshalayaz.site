import React from 'react'
import { Grid, Paper,Typography } from '@material-ui/core';
import useStyles from './Style'
import CountUp from 'react-countup';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GroupIcon from '@material-ui/icons/Group';
 


function StatsCounter() {
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <Typography variant='h4'> 
                                <WhatshotIcon color='secondary' fontSize='large' /> <CountUp prefix="Projects Completed " delay={1} duration={5} end={14} />
                            </Typography>
                        </Paper>
                    </Grid>
            <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <Typography variant='h4'>
                                <FileCopyIcon color='secondary' fontSize='large' /> <CountUp prefix="Self Projects " delay={1} duration={5} end={68} />
                            </Typography>
                        </Paper>
                    </Grid>
            <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <Typography variant='h4'> 
                                <GroupIcon color='secondary' fontSize='large' /> <CountUp prefix="Satisfied Clients " delay={1} duration={5} end={11} />
                            </Typography>
                        </Paper>
                    </Grid>
            </Grid>
    )
}

export default StatsCounter
