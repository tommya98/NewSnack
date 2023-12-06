import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import NewsItem from "./NewsItem";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Divider from "@mui/material/Divider";
import { usePrivateFeed } from "../../apiHook";

const HomePage = () => {
  const news = usePrivateFeed();

  return (
    <Container>
      <Title date="Today" />
      <Divider />
      <NewsItemContainer>
        <SubTitle label="News" />

        {news.map((item) => {
          return (
            <NewsItem
              key={item.id}
              thumbnailSrc={item.imgURL}
              title={item.title}
              summary={item.content}
              author={item.date}
            />
          );
        })}
      </NewsItemContainer>

      {/* <NewsItemContainer>
        <SubTitle label="Youtube" />

      {YoutubeMockData.map((news) => {
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
      </NewsItemContainer> */}
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  max-width: 60%;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 4rem auto 5rem auto;
  gap: 30px;
`;

const NewsItemContainer = styled(Box)`
  gap: 15px;
`;

export default HomePage;