import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: "100px",
      color: "white"
    },
    text: {
        color: "white",
    },
    img: {
        height: "300px",
        borderRadius: "50%"
    },
    social: {
      paddingTop: "20px",
    }
  }));

  export default useStyles