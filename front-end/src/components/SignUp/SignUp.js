import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Immo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [adresse, setAdresse] = useState("");

  const handelPhoneChange = (value) => {
    if (value) {
      setPhone(value);
    }
  };

  const register = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      phone,
      adresse,
    };

    dispatch(SignUp(newUser));

    // setEmail("");
    // setFirstName("");
    // setlastName("");
    // setAdresse("");
    // setPassword("");
    // setPhone("");
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e)=> setFirstName(e.target.value)}
                  value={firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={(e=> setlastName(e.target.value))}
                  value = {lastName}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=> setAdresse(e.target.value)}
                  value={adresse}
                  id="email"
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=> setPhone(e.target.value)}
                  value={phone}
                  id="email"
                  label="Phone"
                  name="Phone"
                  autoComplete="Phone"
                />
                </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => register(e)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}