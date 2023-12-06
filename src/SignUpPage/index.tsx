import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import store from "../localStorage";
import { Divider } from "@mui/material";
import { FormHelperText } from '@mui/material';

interface signUpResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: number;
    username: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        NewSnack
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [nameError, setNameError] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await fetch(
      "http://localhost:8000/api/user/dj-rest-auth/registration/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.get("name"),
          password1: data.get("password1"),
          password2: data.get("password2"),
        }),
      }
    );
    if (response.status == 201) {
      const jsonData: signUpResponse = await response.json();
      store.set("user", jsonData.user);
      store.set("email", data.get("email"));
      store.set("access_token", jsonData.access_token);
      store.set("refresh_token", jsonData.refresh_token);
      console.log(jsonData)
      navigate("/initialsetup");
    } else {
      const errorData = await response.json();
      setNameError(errorData.username);
      setEmailError(errorData.email);
      setPasswordError(errorData.password1);    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
                {nameError && <FormHelperText error>{nameError}</FormHelperText>}

              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
                {emailError && <FormHelperText error>{emailError}</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password1"
                  label="Password"
                  name="password1"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password2"
                  label="Password confirm"
                  name="password2"
                  type="password"
                />
                {passwordError && <FormHelperText error>{passwordError}</FormHelperText>}

              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Divider sx={{ mt: 0, mb: 2 }}> OR </Divider>
            <Button
              startIcon={<img src="/kakao_button.png" alt="kakao" style={{ width: '1.5rem', position: 'absolute', left: '0.5rem', top: '0.5rem' }}/>}
              style={{ 
                backgroundColor: '#FEE500', 
                marginBottom: '2rem', 
                color: 'rgba(0, 0, 0, 0.85)', 
                display: 'flex', 
                justifyContent: 'center', 
                position: 'relative',
                textTransform: 'none'

              }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Login with Kakao
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
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
