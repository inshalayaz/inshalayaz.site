import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import useStyles from './Style'
import Img from '../../assets/avatar-2.svg'
import Chart from './Chart/Chart'
import File from '../../assets/INSHAL CV UPDATED.pdf'
import StatsCounter from './Counter/Counter'


function About() {
    const classes = useStyles()
    return (
        <div className={classes.root} id="about" >
          <Grid container spacing={2} >
            
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper} >
                    <Typography variant="h3">
                        About Me
                    </Typography>
                  <img src={Img} alt="avatar" className={classes.img} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
                {/* Internal Grid For two sections within it */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Typography variant='p' >
                            I am Inshal Ayaz, web developer from Karachi, Pakistan. I have rich experience in web site design and building and customization, also I am good at WordPress and Web Penetration Testing.
                            </Typography>
                            <br />
                            <a href={File}>
                                <Button color="primary" variant="contained" className={classes.btn}>Download CV</Button>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Chart />
                        </Paper>
                    </Grid>
                </Grid>
                {/* Internal Grids end */}
                {/* <Counter /> */}
                </Grid>
            </Grid>
            <StatsCounter />
        </div>
      );
}

export default About
