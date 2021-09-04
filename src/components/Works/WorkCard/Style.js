import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: '60px 0px',
        margin: '50px 100px',
        position: 'relative'
    },
    media: {
      height: 140,
    },
    overlay: {
        background: 'rgba(112,30,186,0.6)',
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        padding:'60px',
        transition:'linear all 0.2s',
        '&:hover':{
            transition:'linear all 0.2s',
        }
    },
    overlayHeading:{
        color: '#fff',
        fontSize:'24px',

    }

  });

  export default useStyles