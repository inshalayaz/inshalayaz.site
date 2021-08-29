import React from 'react'
import {Grid} from '@material-ui/core'
import useStyles from './Style'
// import WebDev from '../../assets/service-2.svg'
// import SEO from '../../assets/seo.svg'
// import PenTesting from '../../assets/penetration-testing-2010805-1693936.png'
import ServiceCard from './ServiceCard/ServiceCard'
import Data  from './Data'

function Services() {
    const classes = useStyles();
    console.log(Data[1].bg)
    
  

    return (
        <div className={classes.root} id='services' >
          <Grid container spacing={2}>
            {
              Data.map( n =>(
                <ServiceCard key={n.key} Img={n.Img.default} Alt={n.Alt} Title={n.Title} Description={n.Description} BgColor={n.BgColor} textColor={n.textColor} />
              ))
            }
          </Grid>
        </div>
      );
}

export default Services
