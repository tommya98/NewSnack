import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import NewsItem from "./NewsItem";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Divider from '@mui/material/Divider';

const HomePage = () => {
  return (
    <Container>
      <Title date="Today" />
      <Divider />
      <NewsItemContainer>
      <SubTitle label="News" />

      {mockData.map((news) => {
        return (
          <NewsItem
            key={news.newsTitle}
            thumbnailSrc={news.imgSrc}
            title={news.newsTitle}
            summary={news.newsSummary}
            author={news.author}
          />
        );
      })}
      </NewsItemContainer>

      <NewsItemContainer>
      <SubTitle label="Youtube" />

      {mockData.map((news) => {
        return (
          <NewsItem
            key={news.newsTitle}
            thumbnailSrc={news.imgSrc}
            title={news.newsTitle}
            summary={news.newsSummary}
            author={news.author}
          />
        );
      })}
      </NewsItemContainer>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  max-width: 60%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 2rem auto 5rem auto;
  gap: 30px;
`;

const NewsItemContainer = styled(Box)`
  gap: 15px;
`;

export default HomePage;

const mockData = [
  {
    imgSrc: "https://picsum.photos/seed/news1/200/300",
    newsTitle: "NewsTitle 1",
    newsSummary:
      "NewsSummary 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
    author: "author 1",
  },
  {
    imgSrc: "https://picsum.photos/seed/news2/200/300",
    newsTitle: "NewsTitle 2",
    newsSummary:
      "NewsSummary 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
    author: "author 2",
  },
  {
    imgSrc: "https://picsum.photos/seed/news3/200/300",
    newsTitle: "NewsTitle 3",
    newsSummary:
      "NewsSummary 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
    author: "author 3",
  },
];
