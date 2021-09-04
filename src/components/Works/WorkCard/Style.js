import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: '60px 0px',
        margin: '50px 70px',
        position: 'relative',
        borderRadius: '30px'
    },
    media: {
      height: 140,
    },
    overlay: {
        background: 'rgba(112,30,186,0.6)',
        position: 'absolute',
        top: '  0',
        left: ' 0',
        height: '100%',
        width:'100%',
        transition:'linear all 0.2s',
        padding: '10px',
        
        '&:hover':{
            transition:'linear all 0.2s',
        }
    },
    overlayHeading:{
        color: '#fff',
        fontSize:'24px',
        margin: '50px 30px',
        zIndex: -1,
    },
    noHover:{
        pointerEvents: 'none'
    }

  });

  export default useStyles