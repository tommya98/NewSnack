import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import Header from "./Header";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import { Link } from "react-router-dom";
import { usePublicFeed } from "../apiHook";

const SplashPage = () => {
  const news = usePublicFeed("sports");

  return news ? (
    <Container>
      <Link to={"feed"}>임시 피드 이동</Link>
      <Header />
      <TopSection img={news.publicFeeds[0].imgURL} />
      <MiddleSection news={news.publicFeeds} />
      <BottomSection news={news.publicFeeds} />
      <Footer />
    </Container>
  ) : (
    <></>
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
