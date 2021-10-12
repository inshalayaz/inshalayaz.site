import React from 'react'
import useStyles from './Style';
import {Grid,Typography} from '@material-ui/core';


const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="body1" style={{color:'#605f7b'}}>
                    © 2021 Copyright Inshal Ayaz.
                </Typography>
            </Grid>
        </Grid>
        </div>
    )
}

export default Footer
