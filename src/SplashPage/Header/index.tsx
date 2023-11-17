import styled from "@emotion/styled";
import AppLogo from "./AppLogo";
import AppTitle from "./AppTitle";
import LoginLabel from "./LoginLabel";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <TitleBox>
        <AppLogo />
        <AppTitle />
      </TitleBox>
      <LoginBox>
        <Link to="signin">
          <LoginLabel text="SignIn" />
        </Link>
        <Link to="signup">
          <LoginLabel text="SignUp" />
        </Link>
      </LoginBox>
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 6px 6px -6px rgba(0, 0, 0, 0.12);
`;

const TitleBox = styled(Box)`
  display: flex;
  gap: 10px;
  align-content: center;
  justify-content: center;
`;

const LoginBox = styled(Box)`
  display: flex;
  gap: 20px;
  margin: atuo;
  a {
    text-decoration: none;
    color: black;
  }
`;
