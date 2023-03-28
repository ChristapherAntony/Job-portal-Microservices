
import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import './OtpVerify.scss';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { otpVerify, emailVerify } from '../../../utils/Constants';
import axios from 'axios';

const theme = createTheme();

function OtpVerify() {
    const navigate = useNavigate();
    const { email } = useParams();
    const [error, setError] = useState(null);
    const [timer, setTimer] = useState(60); // 2 minutes timer
    const [disableResend, setDisableResend] = useState(true); // enable the resend button

    useEffect(() => {
        let intervalId = null;
        if (timer > 0 && disableResend) {
            intervalId = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
        } else {
            setDisableResend(false);
            setTimer(60);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timer, disableResend]);

    const handleResendOTP = () => {
        axios.post(emailVerify, { email })
            .then((res) => {
                console.log(res);
                setDisableResend(true); // disable the resend button
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const otp = data.get('otp');
        setError(null); // clear any previous errors

        axios .post(otpVerify, { email, otp }).then((res) => {
                console.log(res);
                if(res.role==='candidate'){
                    navigate('/candidate/home'); // Navigate to home page
                }else if(res.role==='recruiter'){
                    navigate('/recruiter/home'); // Navigate to home page
                }else{
                    navigate('/'); // Navigate to home page
                }
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data.errors[0].msg); // Set the error state
                setTimeout(() => {
                    setError(null);
                }, 8000);
            });
    };


    return (
        <div className='signup' >
            <NavBar />
            <div className='outerbox m-auto'>
                <div className=''>
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    marginBottom: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <Typography component="h1" variant="h5">
                                    Enter OTP received on Your Registered email address
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="otp"
                                        label="OTP Number"
                                        name="otp"
                                        autoFocus

                                    />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Verify Otp
                                    </Button>
                                    <Grid container>

                                        <Grid item style={{ cursor: 'pointer' }}>
                                            {disableResend ? (
                                                <p variant="">
                                                    Resend OTP ({timer}s)
                                                </p>
                                            ) : (
                                                <Link variant="body2" onClick={handleResendOTP}>
                                                    Resend OTP
                                                </Link>
                                            )}
                                        </Grid>

                                    </Grid>
                                    <Grid container>
                                        <Grid item style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signup')}>
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

                        </Container>
                    </ThemeProvider>


                </div>



            </div>


            {/* <Footer /> */}

        </div>
    )
}

export default OtpVerify




