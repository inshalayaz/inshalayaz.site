import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import useStyles from './Style'
import Img from '../../assets/avatar-2.svg'
import Chart from './Chart/Chart'
import File from '../../assets/INSHAL CV UPDATED.pdf'
import StatsCounter from './Counter/Counter'
import './style.css'


function About() {
    const classes = useStyles()
    return (
        <div className={classes.root} id="about" >
        <Grid container spacing={2} >
            <Grid item xs={12} sm={12}>
            <Typography variant="h3" align='left' style={{ color:'#fff', margin:'80px 0px 50px 50px ' }} >
                        About Me
            </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper} >
                    
                  <img src={Img} alt="avatar" className={classes.img} />
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={9} className={classes.aboutBg}>
                {/* Internal Grid For two sections within it */}
                <Grid container spacing={2} className={classes.aboutBg} >
                    <Grid item xs={12} sm={6}>
                        <Paper className={[classes.paper,classes.aboutBg]}>
                                <Typography variant='body1' align="left" >
                                I am Inshal Ayaz, web developer from Karachi, Pakistan. I have rich experience in web site design and building and customization, also I am good at WordPress and Web Penetration Testing.
                                </Typography>
                                <br />

                                <Grid item xs={12} sm={6} md={4}>
                                    <a href={File}>
                                        <Button color="primary" variant="contained" className={classes.btn}>Download CV</Button>
                                    </a>
                                </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Paper className={[classes.paper,classes.aboutBg]}>
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
