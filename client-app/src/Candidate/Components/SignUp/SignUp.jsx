import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
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
import Logo from '../Logo/Logo';
import validationSchema from './validation'; // import validationSchema from another file
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '../../../utils/Constants';

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSchema, // use the imported validationSchema
        onSubmit: (values) => {

            const body = {
                user_name: values.fullName,
                email: values.email,
                phone_number: values.phone,
                password: values.password,
                confirm_password: values.confirmPassword,
                role: 'candidate'
            }
            Axios.post(signUp, body).then(res => {
                console.log(res); // Handle successful response
                navigate('/candidate/signin');

            }).catch((err) => {
                console.log(err.response.data.errors[0].msg);
                setError(err.response.data.errors[0].msg); // Set the error state
                setTimeout(() => {
                    setError(null);
                }, 8000);
            })

        },
    });

    return (
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Logo />
                   
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    autoFocus
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Mobile Number"
                                    name="phone"
                                    autoComplete="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="termsAndConditions"
                                            color="primary"
                                            checked={formik.values.termsAndConditions}
                                            onChange={formik.handleChange}
                                        />
                                    }
                                    label="I accept the terms and conditions"
                                />
                                {formik.touched.termsAndConditions && Boolean(formik.errors.termsAndConditions) && (
                                    <Typography variant="caption" color="error" sx={{ display: 'block', mt: 1 }}>
                                        {formik.errors.termsAndConditions}
                                    </Typography>
                                )}
                            </Grid> */}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signin')}>
                                <Link variant="body2">
                                    Already have an account? Sign in
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
    );
}

export default SignUp;
