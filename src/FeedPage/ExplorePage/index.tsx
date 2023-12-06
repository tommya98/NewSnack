import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import NewsItem from "../HomePage/NewsItem";
import Title from "../HomePage/Title";
import Divider from "@mui/material/Divider";
import { usePublicFeed } from "../../apiHook";

const ExplorePage = () => {
  const news = usePublicFeed("sports");

  return news ? (
    <Container>
      <Title text="Today" />
      <Divider />
      {news.publicFeeds.map((item) => {
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
    </Container>
  ) : (
    <></>
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

export default ExplorePage;