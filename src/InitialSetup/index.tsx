import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import store from "../localStorage";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function InitialSetup() {
  const [freq, setFreq] = React.useState(1);
  const [interest, setInterest] = React.useState<string[]>([]);
  const interestList = [
    "정치",
    "사회",
    "국제",
    "과학",
    "경제",
    "스포츠",
    "트렌드",
  ];
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:8000/api/user/initialize", {
      method: "POST",
      body: JSON.stringify({
        nickname: data.get("nickname"),
        birthYear: data.get("birthYear"),
        interest: interest,
        kakaoIsLinked: true,
        emailIsLinked: true,
        kakaoAddress: data.get("kakaoAddress"),
        emailAddress: store.get("email"),
        frequency: freq,
        receptTime: 12,
      }),
    });
    if (response.ok) {
      navigate("/feed");
    }
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
          <Typography component="h1" variant="h5">
            Setup
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="nickname"
              label="닉네임"
              id="nickname"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="birthYear"
              label="태어난 년도"
              id="birthYear"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="kakaoAddress"
              label="카카오톡 주소"
              id="kakaoAddress"
              autoFocus
            />
            <Typography variant="h5">하루 수신 횟수</Typography>
            <Slider
              aria-label="Temperature"
              defaultValue={1}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              value={freq}
              onChange={(e) => {
                if (e && e.target) {
                  setFreq(e.target.value);
                }
              }}
            />
            <Typography variant="h5">관심사</Typography>
            <FormGroup row>
              {interestList.map((inte) => {
                return (
                  <FormControlLabel
                    key={inte}
                    onChange={(e) => {
                      if (e.target.checked == true) {
                        setInterest([...interest, inte]);
                      } else {
                        setInterest(interest.filter((item) => item !== inte));
                      }
                    }}
                    control={<Checkbox />}
                    label={inte}
                  />
                );
              })}
            </FormGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
