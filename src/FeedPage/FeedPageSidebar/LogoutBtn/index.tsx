import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const LogoutBtn = () => {
  return (
    <Container>
      <Link to={"/"}>Logout</Link>
    </Container>
  );
};

const Container = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;

export default LogoutBtn;
