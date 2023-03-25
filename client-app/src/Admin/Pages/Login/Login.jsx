import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './login.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import { signIn } from '../../../utils/Constants';
import { useState } from 'react';
const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "home";

  const [error, setError] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    setError(null); // clear any previous errors


    Axios.post(signIn, { email, password }).then(res => {
      console.log(res); // Handle successful response
      navigate(from, { replace: true }); // Navigate to home page or prv
      
    }).catch(err => {
      console.log(err.response.data.errors[0].msg);
      setError(err.response.data.errors[0].msg); // Set the error state
      setTimeout(() => {
        setError(null);
      }, 8000);
    })


  };

  return (

    <div className="outer">
      <div className="left">
        <img src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1509.jpg?w=740&t=st=1678446035~exp=1678446635~hmac=21bc193950f72e7d306c803a196b4728231083a0213b503dd5c3d54b788fd458" alt="" />
      </div>

      <div className="right">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>

                </Grid>
                {error && (
                <Typography component="p" variant="subtitle1" color="error">
                  {error}
                </Typography>
              )}
              </Box>
            </Box>

          </Container>
        </ThemeProvider>
      </div>


    </div>



  );
}