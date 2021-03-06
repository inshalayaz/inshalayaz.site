import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: '300px',
        width: '500px',
        backgroundSize:"cover",
        backgroundRepeat:'no-repeat'
      },
      image:{
          zIndex: 1,
          height: '300px',
          width: '500px'
      }

}));

export default useStyles