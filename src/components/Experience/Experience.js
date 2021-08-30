import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core'
import useStyles from './Style'
import {Data1, Data2} from './Timeline/Data'
import CustomizedTimeline from './Timeline/CustomizedTimeline'
import './style.css'

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='experience'>
      <Grid container spacing={3} >
      <Grid item xs={12} sm={12}>
            <Typography variant="h3" align='left' style={{ color:'#fff', margin:'80px 0px 50px 50px ' }} >
                        Experience
            </Typography>
            </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>
              {
                  Data1.map( n =>(
                    <CustomizedTimeline key={n.id} year={n.year} work={n.work} desc={n.desc} icon={n.icon}/>
                  ))
              }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>
          {
                  Data2.map( n =>(
                    <CustomizedTimeline key={n.id} year={n.year} work={n.work} desc={n.desc} icon={n.icon}/>
                  ))
              }
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
