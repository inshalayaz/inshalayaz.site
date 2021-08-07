import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      backgroundColor: "#353353",
      boxShadow:'none'
      
    },
    btn: {
        marginTop: '20px'
    }

    
  }));

  export default useStyles