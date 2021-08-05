import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './Style'
import {Data1, Data2} from './Timeline/Data'
import CustomizedTimeline from './Timeline/CustomizedTimeline'
import './style.css'

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='experience'>
      <Grid container spacing={3} alignItems="center" alignContent="center" >
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              {
                  Data1.map( n =>(
                    <CustomizedTimeline key={n.id} year={n.year} work={n.work} desc={n.desc} icon={n.icon}/>
                  ))
              }
          </Paper>
        </Grid>
        <Grid item xs={6}>
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
