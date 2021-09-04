import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Work1 from '../../../assets/work-1.svg'
import useStyles from './Style';

const WorkCard = () => {
  const [hover,isHovered] = useState(false)
  
    const classes = useStyles()
    return (
        <Card className={classes.root} onMouseOver={()=> isHovered(!hover)} onMouseOut={()=> isHovered(!hover)} >
        {/* <CardActionArea> */}
          <CardMedia
            className={classes.media}
            image={Work1}
            title="Contemplative Reptile"
          />
        {/* </CardActionArea> */}
        <div className={hover? classes.overlay : ''}>
          {
            hover?
            <Typography variant='h3' align='left' className={[classes.overlayHeading, classes.noHover]} >Project Name</Typography>
            : ''
          }
        </div>
      </Card>
    );
  }
 

export default WorkCard
