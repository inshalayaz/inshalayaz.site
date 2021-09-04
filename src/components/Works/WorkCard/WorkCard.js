import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Work1 from '../../../assets/work-1.svg'
import useStyles from './Style';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const WorkCard = () => {
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
            image={Work1}
            title="Contemplative Reptile"
          />
        {/* </CardActionArea> */}
        <div className={hover? classes.overlay : ''} onClick={handleOpen}>
          {
            hover?
            <Typography variant='h3' align='left' className={[classes.overlayHeading, classes.noHover]} >Project Name</Typography>
            : ''
          }
        </div>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </>
    );
  }
 

export default WorkCard
