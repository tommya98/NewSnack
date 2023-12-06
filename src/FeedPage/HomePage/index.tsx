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

      <NewsItemContainer>
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
  margin: 4rem auto 5rem auto;
  gap: 30px;
`;

const NewsItemContainer = styled(Box)`
  gap: 15px;
`;

export default HomePage;

// const mockData = Array.from({ length: 3 }, (_, i) => ({
//   imgSrc: `https://picsum.photos/seed/${Math.random()}/200/300`,
//   newsTitle: `NewsTitle ${i + 1}`,
//   newsSummary:
//     `NewsSummary ${i + 1} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vero repudiandae deleniti vitae nam nihil officia omnis porro modi nulla laboriosam, dolorem, vel commodi nostrum, ea asperiores consequatur optio at.`,
//   author: `author ${i + 1}`,
// }));

const NewsMockData = [
  {
    imgSrc: `http://newsimg.hankookilbo.com/2019/01/29/201901291725397929_1.jpg`,
    newsTitle: `문 대통령, ICT 혁신·제조업 미래 콘서트 참석`,
    newsSummary: `29일 오전 서울 동대문 디자인플라자에서 열린 'ICT 혁신과 제조업 미래 콘서트'에 문재인 대통령이 참석하여 삼성전자와 LG전자 등 CES 2019에 참가한 기업들의 혁신제품을 체험했다. 이 행사는 'ICT 혁신과 융합으로 산업을 튼튼하게, 삶을 스마트하게'라는 주제로 열렸으며, 국내 대기업과 중견·중소기업 관계자들이 참석했다. 문 대통령은 기업 관계자들과 세계 ICT 혁신의 흐름과 한국 제조업의 발전을 논의한 후 혁신제품을 체험했다. 이번 행사는 CES에서 선보인 기술을 확산시키기 위해 준비되었으며, 비용은 주관 기관들이 지원했다.`,
    author: `헤럴드경제`
  },
  {
    imgSrc: `https://file.mk.co.kr/meet/yonhap/2019/06/13/image_readtop_2019_413448_0_094209.jpg`,
    newsTitle: `bhc치킨, 1분기 가맹점 매출 32%↑...“가맹점과 상생할 것”`,
    newsSummary: `bhc치킨은 전국 가맹점과의 간담회를 개최하여 가맹점과의 소통 강화에 나섰다. 이를 통해 매장 현장의 의견을 청취하고 가맹점과의 신뢰를 높이기 위해 노력하고 있다. 간담회에는 임 대표가 직접 참여하며, 본사와 가맹점 본연의 역할과 책임을 강조했다. bhc치킨은 고객 서비스의 중요성을 강조하며, 매출 신장과 상생을 위해 투명경영을 추구할 것이라고 밝혔다. 실제로 지난 1분기에는 가맹점 매출이 전년 대비 32% 증가한 것으로 나타났다. 이번 간담회는 본사와 가맹점이 서로 공감하며 앞으로의 방향성을 공유하는 좋은 기회였다고 평가되었다.`,
    author: `연합뉴스`
  },
  {
    imgSrc: `https://img.khan.co.kr/news/2019/11/29/l_2019112901003598300285811.webp`,
    newsTitle: `코스피, 기관 ‘팔자’에 하락...장중 2080선까지 내려`,
    newsSummary: `코스피는 기관과 외국인의 매도세로 하락하고 있다. 현재 코스피는 전 거래일보다 9.96포인트(0.47%) 내린 2098.08을 기록하고 있다. 이는 지난 1월 15일 이후 약 4개월 만의 최저치이다. 외국인은 236억원, 기관은 739억원어치를 순매도했다. SK하이닉스와 현대차만 상승하고 있다. 코스닥지수는 전장보다 1.76포인트(0.24%) 오른 724.38을 기록하고 있다. 원·달러 환율은 1180원에 개장했다.`,
    author: `헤럴드경제`
  },


];
const YoutubeMockData = [
  {
    imgSrc: `http://newsimg.hankookilbo.com/2019/01/29/201901291725397929_1.jpg`,
    newsTitle: `문 대통령, ICT 혁신·제조업 미래 콘서트 참석`,
    newsSummary: `29일 오전 서울 동대문 디자인플라자에서 열린 'ICT 혁신과 제조업 미래 콘서트'에 문재인 대통령이 참석하여 삼성전자와 LG전자 등 CES 2019에 참가한 기업들의 혁신제품을 체험했다. 이 행사는 'ICT 혁신과 융합으로 산업을 튼튼하게, 삶을 스마트하게'라는 주제로 열렸으며, 국내 대기업과 중견·중소기업 관계자들이 참석했다. 문 대통령은 기업 관계자들과 세계 ICT 혁신의 흐름과 한국 제조업의 발전을 논의한 후 혁신제품을 체험했다. 이번 행사는 CES에서 선보인 기술을 확산시키기 위해 준비되었으며, 비용은 주관 기관들이 지원했다.`,
    author: `헤럴드경제`
  },
  {
    imgSrc: `https://www.mk.co.kr/economy/view.php?sc=50000001&year=2019&no=413448`,
    newsTitle: `bhc치킨, 1분기 가맹점 매출 32%↑...“가맹점과 상생할 것”`,
    newsSummary: `bhc치킨은 전국 가맹점과의 간담회를 개최하여 가맹점과의 소통 강화에 나섰다. 이를 통해 매장 현장의 의견을 청취하고 가맹점과의 신뢰를 높이기 위해 노력하고 있다. 간담회에는 임 대표가 직접 참여하며, 본사와 가맹점 본연의 역할과 책임을 강조했다. bhc치킨은 고객 서비스의 중요성을 강조하며, 매출 신장과 상생을 위해 투명경영을 추구할 것이라고 밝혔다. 실제로 지난 1분기에는 가맹점 매출이 전년 대비 32% 증가한 것으로 나타났다. 이번 간담회는 본사와 가맹점이 서로 공감하며 앞으로의 방향성을 공유하는 좋은 기회였다고 평가되었다.`,
    author: `연합뉴스`
  },
  {
    imgSrc: `http://newsimg.hankookilbo.com/2019/01/29/201901291725397929_1.jpg`,
    newsTitle: `코스피, 기관 ‘팔자’에 하락...장중 2080선까지 내려`,
    newsSummary: `코스피는 기관과 외국인의 매도세로 하락하고 있다. 현재 코스피는 전 거래일보다 9.96포인트(0.47%) 내린 2098.08을 기록하고 있다. 이는 지난 1월 15일 이후 약 4개월 만의 최저치이다. 외국인은 236억원, 기관은 739억원어치를 순매도했다. SK하이닉스와 현대차만 상승하고 있다. 코스닥지수는 전장보다 1.76포인트(0.24%) 오른 724.38을 기록하고 있다. 원·달러 환율은 1180원에 개장했다.`,
    author: `헤럴드경제`
  },

];
