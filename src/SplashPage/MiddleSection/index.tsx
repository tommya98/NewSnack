import styled from "@emotion/styled";
import Heading from "./Heading";
import AppDescription from "./Description";
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";

const MiddleSection = () => {
  return (
    <Container>
      <Heading message="Recommendations for You" />
      <AppDescription message="Discover new content based on your interests"></AppDescription>
      <NewsBox>
        <NewsCard
          imgSrc={mockData[0].imgSrc}
          newsTitle={mockData[0].newsTitle}
          newsSummary={mockData[0].newsSummary}
        />
        <NewsCard
          imgSrc={mockData[1].imgSrc}
          newsTitle={mockData[1].newsTitle}
          newsSummary={mockData[1].newsSummary}
        />
        <NewsCard
          imgSrc={mockData[2].imgSrc}
          newsTitle={mockData[2].newsTitle}
          newsSummary={mockData[2].newsSummary}
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

const mockData = [
  {
    imgSrc: "https://picsum.photos/200/300",
    newsTitle: "뉴스 제목 1",
    newsSummary:
      "뉴스 기사 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    newsTitle: "뉴스 제목 2",
    newsSummary:
      "뉴스 기사 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
  },
  {
    imgSrc: "https://picsum.photos/200/300",
    newsTitle: "뉴스 제목 3",
    newsSummary:
      "뉴스 기사 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.",
  },
];
