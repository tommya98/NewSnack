import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import Header from "./Header";
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface NewsResponse {
  publicFeeds: {
    publicFeedId: number;
    title: string;
    imageURL: string;
    detail: string;
  }[];
}

const SplashPage = () => {
  const [news, setNews] = useState<NewsResponse>({
    publicFeeds: [
      {
        publicFeedId: 1,
        title: "손흥민, 베트남전 출전할까",
        imageURL: "https://picsum.photos/200/300",
        detail: "http://localhost:8080/api/feed/public/1",
      },
      {
        publicFeedId: 2,
        title: "쇼트트랙 대표팀, 월드컵 출전 위해 캐나다로 출국",
        imageURL: "https://picsum.photos/200/300",
        detail: "http://localhost:8080/api/feed/public/2",
      },
      {
        publicFeedId: 3,
        title: "손흥민, 베트남전 출전할까",
        imageURL: "https://picsum.photos/200/300",
        detail: "http://localhost:8080/api/feed/public/1",
      },
      // ... (다른 피드)
    ],
  });
  useEffect(() => {
    fetch("http://localhost:8080/api/feed/public/list", {
      // body: JSON.stringify({
      //   interest: "스포츠",
      //   date: 20231201,
      // }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return news ? (
    <Container>
      <Link to={"feed"}>임시 피드 이동</Link>
      <Header />
      <TopSection img={news.publicFeeds[0].imageURL} />
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
