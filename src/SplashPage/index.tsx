import styled from "@emotion/styled";
import Footer from "./Footer";
import Header from "./Header";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import Box from "@mui/material/Box";

const SplashPage = () => {
  return (
    <Container>
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
