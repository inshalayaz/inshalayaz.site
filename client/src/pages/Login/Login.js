import React, { useEffect, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link as LinkR} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Axios from 'axios'
import { AppContext } from '../../context/AppContext';


function Copyright(props) {
  return (
    <Typography variant="body2" color="secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://inshalsite.netlify.app/">
        inshalayaz.site
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const { loginStatus, setLoginStatus } = useContext(AppContext)
  Axios.defaults.withCredentials =  true


console.log(loginStatus)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    Axios.post('http://localhost:3001/login',{
      email: data.get('email'),
      password: data.get('password')
    },{
      headers:{
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials':true
      }
    }).then((response)=>{
        console.log(response)
      if(response.data.message){
        setLoginStatus(response.data.message)
        toast.error( `${response.data.message}`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }else{
        setLoginStatus(response.data[0].username)
        toast.success('Logged In Successfully!', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }


    })
  };


  useEffect(()=>{
    Axios.get('http://localhost:3001/login').then((res)=>{
      if(res.data.loggedIn === true)
        setLoginStatus(res.data.user[0].username)
    })
// eslint-disable-next-line
  },[])

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1}}style={{background:'#cc3954'}}  >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid item xs={6} md={6} style={{margin:'10px 0'}} > 
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='primary'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {loginStatus}
            <Grid container style={{margin:'10px 0'}} >
              <Grid item xs md={6}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs md={6} >
                <LinkR to="/register" >
                  <Link variant="body2">
                    Don't have an account?
                  </Link>
                </LinkR>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}