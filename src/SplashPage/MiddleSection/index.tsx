import styled from "@emotion/styled";
import Heading from "./Heading";
import AppDescription from "./Description";
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";
import { PublicNewsResponse } from "../../apiHook";

const MiddleSection = ({ news }: { news: PublicNewsResponse[] }) => {
  return (
    <Container>
      <Heading message="Recommendations for You" />
      <AppDescription message="Discover new content based on your interests"></AppDescription>
      <NewsBox>
        <NewsCard
          imgSrc={news[0].imgURL}
          newsTitle={news[0].title}
          newsSummary={news[0].content}
        />
        <NewsCard
          imgSrc={news[1].imgURL}
          newsTitle={news[1].title}
          newsSummary={news[1].content}
        />
        <NewsCard
          imgSrc={news[2].imgURL}
          newsTitle={news[2].title}
          newsSummary={news[2].content}
        />
      </NewsBox>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 20px;
`;

const NewsBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default MiddleSection;
