import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      transition: "all 0.3s ease-in-out",
      
      '&:hover': {
        padding:"100px 80px",
        transition: "all 0.3s ease-in-out",
      }
    },
    cardbg:{
      padding: '80px 60px',
      margin: '60px 30px' ,
      color: "white",
      height: '300px',
      marginBottom: '30px',
      "@media screen and (max-width: 1000px)": {
        margin: '0px 0px',
        padding: '40px 30px'
      }
    

    },
    title: {
      marginTop: '30px',
      marginBottom: '30px',
      textAlign: 'center',
      "@media screen and (max-width: 1000px)": {
        fontSize: '23px'
      }
    },
    txt: {
      marginTop: '30px'
    },
   
    
  }));
  

export default useStyles