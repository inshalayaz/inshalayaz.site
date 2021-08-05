import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "100px",
      marginBottom: "100px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      backgroundColor: "#353353",
      
    },
    btn: {
        marginTop: '20px'
    },


    
  }));

  export default useStyles