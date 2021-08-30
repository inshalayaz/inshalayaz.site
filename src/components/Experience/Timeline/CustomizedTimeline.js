import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WorkIcon from '@material-ui/icons/Work';import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style'


export default function CustomizedTimeline({year,work,desc,icon}) {
  console.log(icon)
  const classes = useStyles();

  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff'}}>
            {year}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined'>
            {icon ? <SchoolIcon color="secondary" /> : <WorkIcon color="secondary" />}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {work}
            </Typography>
            <Typography>{desc}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
          </Timeline>
  );
}
