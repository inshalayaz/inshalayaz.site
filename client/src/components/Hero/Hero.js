import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import Img from "../../assets/My Picture.JPG"
import GitHubIcon from '@material-ui/icons/GitHub';
import Typical from 'react-typical'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-scroll'


import useStyles from './Style';
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import "./Styles.css"

function Hero() {
    const classes = useStyles();

  return (
    <div className={classes.root} id="home">
        <Grid container spacing={2} >
            <Grid item xs={12}  >
                <img src={Img} alt="Inshal" className={classes.img} />
                <Typography variant="h4" className={classes.text}> Inshal Ayaz  </Typography>
                {/* <Typography variant="subtitle" className={classes.text}>  </Typography> */}
                <Typical steps={['Hello',3000,'I\'m a Front End Developer',1000,'I\'m an Ethical Hacker', 300]} loop={Infinity} wrapper="p" />
            </Grid>
                
                <Grid item xs={12} className={classes.social}>
                    <a href="https://github.com/inshalayaz"><GitHubIcon  fontSize="medium" /></a>
                    <a href="https://twitter.com/ayaz_inshal"><Twitter fontSize="medium"/></a>
                    <a href="https://www.facebook.com/inshal.ayaz"><Facebook fontSize="medium" /></a>
                    <a href="https://pk.linkedin.com/in/inshal-ayaz-a2908b1a0"><LinkedIn fontSize="medium" /></a>
                </Grid>

                <Grid item xs={12}>
                    <Button color="secondary" variant="contained" style={{marginBottom: '6px'}}> Hire Me </Button>
                    <br />
                    {/* Scroll Down button to be implemented */}
                    <Typography variant='caption' >
                        Scroll Down
                    </Typography>
                    <br />
                    <Button>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}><ArrowDropDownIcon style={{color: "white"}} variant="contained" /> </Link>
                    </Button>
                    
                </Grid>
        </Grid>
    </div>
    )
}

export default Hero
