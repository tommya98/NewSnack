import styled from "@emotion/styled";
import Heading from "./Heading";
import AppDescription from "./Description";
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";

interface NewsProps {
  title: string;
  imageURL: string;
  detail: string;
}

const MiddleSection = ({ news }: { news: NewsProps[] }) => {
  return (
    <Container>
      <Heading message="Recommendations for You" />
      <AppDescription message="Discover new content based on your interests"></AppDescription>
      <NewsBox>
        <NewsCard
          imgSrc={news[0].imageURL}
          newsTitle={news[0].title}
          newsSummary=""
        />
        <NewsCard
          imgSrc={news[1].imageURL}
          newsTitle={news[1].title}
          newsSummary=""
        />
        <NewsCard
          imgSrc={news[2].imageURL}
          newsTitle={news[2].title}
          newsSummary=""
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
