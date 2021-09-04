import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    // modal: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    //   paper: {
    //     backgroundColor: theme.palette.background.paper,
    //     border: '2px solid #000',
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing(2, 4, 3),
    //   },
    overlay: {
        background: 'rgba(112,30,186,0.6)',
        position: 'absolute',
        top: '  0',
        left: ' 0',
        height: '100%',
        width:'100%',
        transition:'linear all 0.2s',
        padding: '10px',
        cursor: 'pointer',
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

}));

export default useStyles