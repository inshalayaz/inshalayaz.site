import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    backgroundColor: "#302f4e",
    borderRadius:'30px',
    color:'#fff',
    boxShadow:'none'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  }));
  export default useStyles