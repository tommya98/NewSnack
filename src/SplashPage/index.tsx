import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import Header from "./Header";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <Container>
      <Link to={"feed"}>임시 피드 이동</Link>
      <Header />
      <TopSection />
      <MiddleSection />
      <BottomSection />
      <Footer />
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 30px;
`;

export default SplashPage;
