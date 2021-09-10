import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        padding: '20px 0px',
        backgroundColor: '#ffd15c'
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}))

export default useStyles