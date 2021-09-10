import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 formField:{
   width: '100%',
   backgroundColor: '#fff',
   borderRadius: 30,
   border: 'none',
   color:'#494763',
   margin: '10px 0px!important'
 },
 button: {
  margin: theme.spacing(1),
  padding: 10,
  borderRadius: 30
},
 
}))

export default useStyles