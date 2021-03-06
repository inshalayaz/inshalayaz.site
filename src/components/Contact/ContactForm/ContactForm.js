import React, { useContext, useState } from 'react';
import {Grid, TextField,Button} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import emailjs from 'emailjs-com';
import { AppContext } from '../../../context/AppContext';

import useStyles from './Style';
import './style.css'


const ContactForm = () => {

    const {status,setStatus} = useContext(AppContext)

    const classes = useStyles()
    const [contactValue, setContactValue] = useState({
        username: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setContactValue({ ...contactValue, [name] : value })
    }

    const handleSubmit = (e) => {
         e.preventDefault();
        emailjs.sendForm('service_g9sb9o1', 'template_e3vhl43', e.target, 'user_cPbPw4vP1zDW3ZF5FAERU')
        .then((result) => {
            setStatus(!status)
            console.log(status)
            console.log(result);
            
        }, (error) => {
            console.log(error.text);
        });
        
    }

    return (
        <div className={classes.root}>
                
                    <form  autoComplete="off" onSubmit={handleSubmit} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField className={classes.formField} type="text" required onChange={handleChange} name="user_name" id="outlined-basic" placeholder="Your Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField className={classes.formField} type="email" required onChange={handleChange} name="user_email" id="outlined-basic" placeholder="Email address" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField className={classes.formField} required type="text" onChange={handleChange} name="subject" id="outlined-basic" placeholder="Subject" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField multiline={true} minRows={8} type="text" required onChange={handleChange} name="message" className={classes.formField} id="outlined-basic" placeholder="Message" variant="outlined" />
                            </Grid>
                            <Grid item xs={6} md={3} >
                            <Button
                                type="submit"
                                fullWidth={true}
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                                >
                                Send
                            </Button>                               
                            </Grid>
                            
                        </Grid>
                    </form>
        </div>
    )
}

export default ContactForm
