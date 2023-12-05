import styled from "@emotion/styled";
import Heading from "./Heading";
import TrendingNews from "./TrendingNews";
import Box from "@mui/material/Box";

interface NewsProps {
  title: string;
  imageURL: string;
  detail: string;
}

const BottomSection = ({ news }: { news: NewsProps[] }) => {
  return (
    <Container>
      <Heading message="Trending Articles" />
      <NewsBox>
        <TrendingNews
          imgSrc={news[0].imageURL}
          newsTitle={news[0].title}
          newsSummary={news[0].detail}
        />
        <TrendingNews
          imgSrc={news[1].imageURL}
          newsTitle={news[1].title}
          newsSummary={news[1].detail}
        />
        <TrendingNews
          imgSrc={news[2].imageURL}
          newsTitle={news[2].title}
          newsSummary={news[2].detail}
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
