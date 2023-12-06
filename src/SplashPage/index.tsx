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
    id: number;
    title: string;
    content: string;
    comment: string;
    originalURL: string;
    date: string;
    interest: string;
    imgURL: string;
  }[];
}

const SplashPage = () => {
  const [news, setNews] = useState<NewsResponse>({
    publicFeeds: [
      {
        id: 1,
        title: "제목1",
        content:
          "뉴스 기사 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
        comment: "코멘트1",
        originalURL: "aaa.com",
        date: "2023-12-04",
        interest: "sports",
        imgURL: "https://picsum.photos/id/1/200/300",
      },
      {
        id: 1,
        title: "제목2",
        content:
          "뉴스 기사 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
        comment: "코멘트2",
        originalURL: "aaa.com",
        date: "2023-12-04",
        interest: "sports",
        imgURL: "https://picsum.photos/id/2/200/300",
      },
      {
        id: 1,
        title: "제목2",
        content:
          "뉴스 기사 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
        comment: "코멘트2",
        originalURL: "aaa.com",
        date: "2023-12-04",
        interest: "sports",
        imgURL: "https://picsum.photos/id/3/200/300",
      },
    ],
  });
  useEffect(() => {
    // fetch("http://localhost:8000/api/feed/public/list?interest=sports", {})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setNews(data);
    //   });
  }, []);

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
