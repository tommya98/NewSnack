import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import store from "../localStorage";
import { useNavigate } from "react-router-dom";
import { Divider, FormHelperText } from '@mui/material';
import Kakaologin from "../SignUpPage/KakaoLogin";

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

function InputField(props: any) {
  return (
    <TextField
      required
      fullWidth
      id={props.id}
      label={props.label}
      name={props.name}
      autoComplete={props.autoComplete}
      error={props.error ? true : false}
      helperText={props.error ? props.error : null}
      InputProps={{
        style: {
          borderRadius: "10px",
        }
      }}
      type={props.type ? props.type : "text"}
      variant="outlined"
      margin="dense"
    />
  )
}


interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: number;
    username: string;
  };
}

export default function SignIn() {
  const navigate = useNavigate();
  const [nameError, setNameError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);
  const [nonFieldError, setNonFieldError] = React.useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await fetch(
      "http://localhost:8000/api/user/dj-rest-auth/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.get("name"),
          password: data.get("password"),
        }),
      }
    );
    if (response.ok) {
      const loginResult: LoginResponse = await response.json();
      store.set("accessToken", loginResult.access_token);
      store.set("refreshToken", loginResult.refresh_token);
      store.set("user", loginResult.user);
      navigate("/feed");
    } else {
      const errorData = await response.json();
      setNameError(errorData.username);
      setPasswordError(errorData.password);    
      setNonFieldError(errorData.non_field_errors);
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 4,
            boxShadow: 10,
            padding: 4
          }}
        >
          <Box sx={{ display: 'flex-column', width: "100%", marginBottom:"1rem"}}>
            <Typography component="h1" variant="h4" style={{ fontWeight: 'bold' }}>
              로그인
            </Typography>
            <Typography variant="subtitle1"   
            sx={{
              fontSize: '0.8rem',
              color: 'gray',
              lineHeight: '1.5'
            }}>
              안녕하세요, 가벼운 한조각! 뉴스낵입니다.
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField id="name" label="아이디" name="name" autoComplete="name" error={nameError} />
              </Grid>
              <Grid item xs={12}>
                <InputField id="password" label="비밀번호" name="password" autoComplete="password" error={passwordError} type="password"/>
              </Grid>
            </Grid>
            <FormHelperText error={nonFieldError ? true : false}>{nonFieldError ? nonFieldError : null}</FormHelperText>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Divider sx={{ mt: 0, mb: 2 }}> OR </Divider>
            <Kakaologin type="signin"/>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  비밀번호를 잊으셨나요?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />

        </Box>
      </Container>
  );
}
