import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      techIcons:{
        marginBottom: '30px'
      },
      techDiv: {
        marginTop: 50
      }
}))

export default useStyles