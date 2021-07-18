import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import useStyles from './Style'
import WebDev from '../../assets/service-2.svg'
import SEO from '../../assets/seo.svg'
import PenTesting from '../../assets/penetration-testing-2010805-1693936.png'


function Services() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper className={[ classes.paper,classes.cardbg ]} style={{background:'#6c6ce5'}}>
                <img src={WebDev} alt='web development' />
                <Typography variant='h4'>
                    Web Development
                </Typography>
                <Typography variant='p' >
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Paper className={[ classes.paper,classes.cardbg ]} style={{background:'#fcbf0d', color:'#454360'}}>
                <img src={PenTesting} alt='Penetrating Testing' height='100px' />
                <Typography variant='h4'>
                    Penetrating Testing
                </Typography>
                <Typography variant='p' >
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Paper className={[ classes.paper,classes.cardbg ]} style={{background:'#ff4c60'}}>
                <img src={SEO} alt='SEO' height='100px' />
                <Typography variant='h4'>
                    SEO
                </Typography>
                <Typography variant='p' >
                  Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
}

export default Services
