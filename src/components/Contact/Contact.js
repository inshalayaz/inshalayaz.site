import React from 'react'
import './style.css'
import useStyles from './Style';
import { Grid,Typography } from '@material-ui/core'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="contact">
            <Grid item xs={12} sm={12}>
                <Typography variant="h3" id="contact-heading" align='left' style={{ color:'#fff'}} >
                    Get in Touch
                </Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4} style={{color:"#fff"}}>
                    <Typography variant="h5">
                        Let's talk about everything!
                    </Typography>
                    <Typography variant="body1">
                        Don't like forms? Send me an <a id="email" href="mailto:inshal.ayaz14@gmail.com">email</a>. 👋
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                        <ContactForm />
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact