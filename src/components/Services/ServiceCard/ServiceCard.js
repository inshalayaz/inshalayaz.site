import React from 'react'

import { Paper, Typography, Grid } from '@material-ui/core'
import useStyles from './Style'

const ServiceCard = ({Img,Alt,Title,Description,BgColor,textColor}) => {
    const classes = useStyles();
//     const [bg, setBg] = useState(true)
    
//    const checkColor = () => {
//         if(BgColor === true)
//             setBg(true)
//         else
//             setBg(false)
//  }
   
    return (
        <Grid item xs={12} sm={4}>
            <Paper className={[ classes.paper,classes.cardbg ]} style={{background: BgColor  , color: textColor}}>
                <img src={Img} alt={Alt} height="100px" />
                <Typography variant='h4' className={classes.title}>
                    {Title}
                </Typography>
                <Typography variant='p' className={classes.txt} >
                  {Description}
                </Typography>
              </Paper>
        </Grid>
    )
}

export default ServiceCard
