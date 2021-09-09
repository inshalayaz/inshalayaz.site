import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Data from './Data'
import useStyles from '../Style'
import {Typography} from '@material-ui/core';
import './style.css'
import ReviewCard from './ReviewCard/ReviewCard'


const RatingCarousel = () => {
    // eslint-disable-next-line
const classes = useStyles()
    console.log(Data[0].Img.default)
    return (
        <>
        
            <Carousel animation="slide">
               {
                Data.map( i => (
                    
                    <>
                    <img className="img-responsive clientImg" src={i.Img.default} alt={i.name} />
                    <Typography variant="h6" style={{color:"#fff"}} >{i.name}</Typography>
                    <Typography variant="caption" style={{color:"#757298"}} >{i.designation}</Typography>
                    <ReviewCard Description={i.description} />
                    </>
                ))
                }
            </Carousel>
           
    </>
    )
}

export default RatingCarousel
