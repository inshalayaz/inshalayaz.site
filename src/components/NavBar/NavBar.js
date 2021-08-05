import React from 'react';
import { Link } from 'react-scroll'
import "./Style.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './Style'
import Logo from '../../assets/My Picture.JPG'

export default function NavBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src={Logo}  style={{height: "70px", borderRadius:"50%" }} alt="Inshal"/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Hire Me As A Developer Or A H@cker
                </Typography>
                <Link to="home" spy={true} smooth={true} offset={50} duration={800}><Button color="inherit" >Home</Button></Link>
                <Link to="about" spy={true} smooth={true} offset={50} duration={800}><Button color="inherit">About</Button></Link>
                <Link to="services" spy={true} smooth={true} offset={50} duration={800}><Button color="inherit">Services</Button></Link>
                <Link to="experience" spy={true} smooth={true} offset={50} duration={800}><Button color="inherit">Experience</Button></Link>
                <Link to="work" spy={true} smooth={true} offset={50} duration={800}><Button color="inherit">Work</Button></Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={800}><Button color="inherit">Contact</Button></Link>
            </Toolbar>
        </AppBar>
      </div>
    );
  }