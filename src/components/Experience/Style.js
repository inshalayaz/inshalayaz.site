import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     root: {
    flexGrow: 1,
    marginBottom: '100px',
    paddingTop: 30,
    marginTop: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight:"600px",
    backgroundColor: '#353353',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  }));

  export default useStyles