import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
     
      '&:hover': {
        padding:"100px 80px"
      }
    },
    cardbg:{
      padding: '80px 60px',
      margin: '60px 30px' ,
      color: "white",
    

    }
    
  }));

export default useStyles