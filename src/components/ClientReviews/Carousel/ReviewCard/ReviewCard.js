import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from '../Style';
import './style.css'
const ReviewCard = ({Description}) => {
    const classes = useStyles()
    return (
          <Card className={classes.root} id="cardRoot" style={{backgroundColor: '#302f4e', borderRadius:'30px' ,margin:'20px 450px', padding:'20px 0px'}} >
            <CardContent>
              <Typography className={classes.title} style={{color:'#fff'}} gutterBottom>
                {Description}
              </Typography>
             </CardContent>
          </Card>
    )
}

export default ReviewCard
