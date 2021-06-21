import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Img from "../../assets/My Picture.JPG"
import GitHubIcon from '@material-ui/icons/GitHub';
import Typical from 'react-typical'

import useStyles from './Style';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import "./Styles.css"

function Hero() {
    const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor: "#353353"}}>
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <img src={Img} alt="Inshal" className={classes.img} />
                <Typography variant="h4" className={classes.text}> Inshal Ayaz  </Typography>
                {/* <Typography variant="subtitle" className={classes.text}>  </Typography> */}
                <Typical steps={['Hello',1000,'I\'m a Front End Developer',1000,'I\'m an Ethical Hacker', 1000]} loop={Infinity} wrapper="p" />
                
                <Grid item xs={12} className={classes.social}>
                    <a href="https://github.com/inshalayaz"><GitHubIcon  fontSize="large" /></a>
                    <a href="https://twitter.com/ayaz_inshal"><Twitter fontSize="large"/></a>
                    <a href="https://www.facebook.com/inshal.ayaz"><Facebook fontSize="large" /></a>
                    <a href="https://pk.linkedin.com/in/inshal-ayaz-a2908b1a0"><LinkedIn fontSize="large" /></a>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}

export default Hero
