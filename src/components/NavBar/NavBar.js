import React from 'react';

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
                <a href="#home"><Button color="inherit" >Home</Button></a>
                <a href="#about"><Button color="inherit">About</Button></a>
                <a href="#services"><Button color="inherit">Services</Button></a>
                <a href="work"><Button color="inherit">Work</Button></a>
                <a href="contact"><Button color="inherit">Contact</Button></a>
            </Toolbar>
        </AppBar>
      </div>
    );
  }