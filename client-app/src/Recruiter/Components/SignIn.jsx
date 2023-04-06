import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import Logo from '../../Candidate/Components/Logo/Logo';
import { signIn } from '../../utils/Constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { changeRecruiterProfile } from '../../Redux/recruiterProfileReducer';
import GoogleAuth from './GoogleAuth';


const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/recruiter";
  const [error, setError] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    setError(null); // clear any previous errors


    axios.post(signIn, { email, password }).then(res => {
      // dispatch(changeRecruiterProfile(res.data))
      navigate(from, { replace: true }); // Navigate to home page or prv
      // navigate('/recruiter'); // Navigate to home page
    }).catch(err => {
      console.log(err.response.data.errors[0].msg);
      setError(err.response.data.errors[0].msg); // Set the error state
      setTimeout(() => {
        setError(null);
      }, 8000);
    })


  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Logo />
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
              <Grid item xs style={{ cursor: 'pointer' }} onClick={() => navigate('#')} >
                <Link variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item style={{ cursor: 'pointer' }} onClick={() => navigate('/recruiter/signup')}>
                <Link variant="body2">
                  {"Don't have an account? Sign Up"}
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
        <div className="flex flex-col m-auto max-w-xs gap-y-5">
          <GoogleAuth />
        </div>

      </Container>
    </ThemeProvider>
  );
}