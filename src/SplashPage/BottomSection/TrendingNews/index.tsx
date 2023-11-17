import styled from "@emotion/styled";

interface Props {
  readonly imgSrc: string;
  readonly newsTitle: string;
  readonly newsSummary: string;
}

function TrendingNews({ imgSrc, newsTitle, newsSummary }: Props) {
  return (
    <Container>
      <Img src={imgSrc} />
      <Text>
        <Title>{newsTitle}</Title>
        <Summary>{newsSummary}</Summary>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  width: 630px;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 5px;
`;

const Summary = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default TrendingNews;
