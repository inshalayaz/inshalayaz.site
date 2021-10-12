import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      transition: "all 0.3s ease-in-out",
      borderRadius:"20px",
      '&:hover': {
        transition: "all 0.3s ease-in-out",
        transform: "translateY(-10px)"
      }
    },
    // cardbg:{
    //   padding: '30px 40px',
    //   margin: '30px 40px' ,
    //   color: "white",
    //   // height: '200px',
    //   marginBottom: '30px',
    //   "@media screen and (max-width: 1000px)": {
    //     margin: '0px 0px',
    //     padding: '40px 30px',
    //   }
    

    // },
    title: {
      marginTop: '10px',
      fontSize:"30px",
      marginBottom: '10px',
      textAlign: 'center',
      "@media screen and (max-width: 1000px)": {
        fontSize: '18px'
      }
    },
    txt: {
      marginTop: '30px'
    },
   
    
  }));
  

export default useStyles