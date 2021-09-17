import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Data from './Data'
import useStyles from '../Style'
import {Typography,Grid} from '@material-ui/core';
import './style.css'
import ReviewCard from './ReviewCard/ReviewCard'


const RatingCarousel = () => {
    // eslint-disable-next-line
const classes = useStyles()
    
    return (
        <>
        
            <Carousel animation="slide">
               {
                Data.map( i => (
                    
                    <Grid key={i.id}>
                    <img className="img-responsive clientImg" src={i.Img.default} alt={i.name} />
                    <Typography variant="h6" style={{color:"#fff"}} >{i.name}</Typography>
                    <Typography variant="caption" style={{color:"#757298"}} >{i.designation}</Typography>
                    <ReviewCard Description={i.description} />
                    </Grid>
                ))
                }
            </Carousel>
           
    </>
    )
}

export default RatingCarousel
