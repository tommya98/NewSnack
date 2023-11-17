import styled from "@emotion/styled";
import Heading from "./Heading";
import TrendingNews from "./TrendingNews";
import Box from "@mui/material/Box";

const BottomSection = () => {
  return (
    <Container>
      <Heading message="Trending Articles" />
      <NewsBox>
        <TrendingNews
          imgSrc={mockData[0].imgSrc}
          newsTitle={mockData[0].newsTitle}
          newsSummary={mockData[0].newsSummary}
        />
        <TrendingNews
          imgSrc={mockData[1].imgSrc}
          newsTitle={mockData[1].newsTitle}
          newsSummary={mockData[1].newsSummary}
        />
        <TrendingNews
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
