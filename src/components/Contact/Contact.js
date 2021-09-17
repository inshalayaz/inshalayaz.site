import React, {useContext} from 'react'
import './style.css'
import useStyles from './Style';
import { Grid,Typography } from '@material-ui/core'
import ContactForm from './ContactForm/ContactForm'
import Thanks from './Thanks/Thanks'
import { AppContext } from '../../context/AppContext';

const Contact = () => {
    const classes = useStyles();
    // const [status,setStatus] = useState(false)
    const {status,setStatus} = useContext(AppContext)
    return (
        <div className={classes.root} id="contact">
            <Grid item xs={12} sm={12}>
                <Typography variant="h3" id="contact-heading" align='left' style={{ color:'#fff'}} >
                    Get in Touch
                </Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} style={{color:"#fff"}} id="text-container" >
                    <Typography variant="h5" >
                        Let's talk about everything!
                    </Typography>
                    <Typography variant="body1">
                        Don't like forms? Send me an <a id="email" href="mailto:inshal.ayaz14@gmail.com">email</a>. 👋
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8} id="contact-form">
                {status? <Thanks status={status} setStatus={setStatus} /> 
                    : 
                        <ContactForm status={status} setStatus={setStatus} />
                 }
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
