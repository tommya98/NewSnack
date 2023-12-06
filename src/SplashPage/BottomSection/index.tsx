import styled from "@emotion/styled";
import Heading from "./Heading";
import TrendingNews from "./TrendingNews";
import Box from "@mui/material/Box";

interface NewsProps {
  id: number;
  title: string;
  content: string;
  comment: string;
  originalURL: string;
  date: string;
  interest: string;
  imgURL: string;
}

const BottomSection = ({ news }: { news: NewsProps[] }) => {
  return (
    <Container>
      <Heading message="Trending Articles" />
      <NewsBox>
        <TrendingNews
          imgSrc={news[0].imgURL}
          newsTitle={news[0].title}
          newsSummary={news[0].content}
        />
        <TrendingNews
          imgSrc={news[1].imgURL}
          newsTitle={news[1].title}
          newsSummary={news[1].content}
        />
        <TrendingNews
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
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 20px;
  gap: 120px;
`;

const NewsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default BottomSection;
