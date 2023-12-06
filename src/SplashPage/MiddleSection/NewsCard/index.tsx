import styled from "@emotion/styled";

interface Props {
  readonly imgSrc: string;
  readonly newsTitle: string;
  readonly newsSummary: string;
}

function NewsCard({ imgSrc, newsTitle, newsSummary }: Props) {
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
  flex-direction: column;
  align-items: center;
  width: 340px;
  border-radius: 6px;
  padding: 0px 12px 12px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 6px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 12px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

export default NewsCard;
