import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:'100%'
     
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:"center"
    },
    appbar: {
      backgroundColor: "#353353" 
    }
    
  }));

  export default useStyles

  