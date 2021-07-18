import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './Style'


function Services() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>Web Development</Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>Pen Testing</Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>SEO</Paper>
            </Grid>
          </Grid>
        </div>
      );
}

export default Services
