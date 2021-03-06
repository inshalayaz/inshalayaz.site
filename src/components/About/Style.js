import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "100px",
      marginBottom: "100px",
      paddingTop:30
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      backgroundColor: "#353353",
      boxShadow:'none',
      height:'100%'
      
    },
    btn: {
      marginTop: '20px'
    },
    aboutBg:{
      backgroundColor: "#302f4e",      
      overflow: 'none',
      borderRadius: 30
    },
   
   

    
  }));

  export default useStyles