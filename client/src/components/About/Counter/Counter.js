import React from 'react'
import { Grid, Paper,Typography } from '@material-ui/core';
import useStyles from './Style'
import CountUp from 'react-countup';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';

function StatsCounter() {
    const classes = useStyles()
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <Typography variant='h6'> 
                                <WhatshotOutlinedIcon  fontSize='large' /> <CountUp prefix="Projects Completed " delay={1} duration={5} end={14} />
                            </Typography>
                        </Paper>
                    </Grid>
            <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <Typography variant='h6'>
                                <FileCopyOutlinedIcon  fontSize='large' /> <CountUp prefix="Self Projects " delay={1} duration={5} end={68} />
                            </Typography>
                        </Paper>
                    </Grid>
            <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <Typography variant='h6'> 
                                <GroupOutlinedIcon  fontSize='large' /> <CountUp prefix="Satisfied Clients " delay={1} duration={5} end={11} />
                            </Typography>
                        </Paper>
                    </Grid>
            </Grid>
    )
}

export default StatsCounter
