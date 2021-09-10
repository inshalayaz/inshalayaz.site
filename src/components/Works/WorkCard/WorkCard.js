import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style';
import ImageModal from './ImageModal/ImageModal';
import './style.css'


const WorkCard = ({ key, Img, Title }) => {
  const [hover,isHovered] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles()
    return (
      <>
        <Card className={classes.root} onMouseOver={()=> isHovered(!hover)} onMouseOut={()=> isHovered(!hover)} >
        {/* <CardActionArea> */}
          <CardMedia
            className={classes.media}
            image={Img}
            title={Title}
          />
        {/* </CardActionArea> */}
        {/* <div className={hover? classes.overlay : ''} onClick={handleOpen}> */}
        <div className={hover? classes.overlay : ''} onClick={handleOpen}>
          {
            hover?
            <Typography variant='h3' align='left' className={[classes.overlayHeading, classes.noHover]} >{Title}</Typography>
            : ''
          }
        </div>
      </Card>
      <ImageModal open={open} handleClose={handleClose} Img={Img} />
    </>
    );
  }
 

export default WorkCard
