import React from 'react'
import { Typography,Button } from '@material-ui/core'

const Thanks = ({status, setStatus}) => {

    const handleClick = () => {
        setStatus(!status)
    }

    return (
        <div>
            <Typography variant="h6" style={{color:'#fff'}}>Thanks For Your Message!!!</Typography>
            <Typography variant="body1"style={{color:'#fff'}} >I Will Contact You Soon.</Typography>
            <Button type="submit" onClick={handleClick} variant="contained" style={{marginTop:'20px', background:'#cc3954'}} >  
                <Typography variant="body1"style={{color:'#fff'}} >Want to send another message?</Typography>
            </Button>
        </div>
    )
}

export default Thanks
