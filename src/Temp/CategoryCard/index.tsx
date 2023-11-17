import styled from '@emotion/styled';

interface Props {
  readonly imgSrc: string;
  readonly category: string;
}

function CategoryCard({ imgSrc, category }: Props) {
  return (
    <Container>
      <Img src={imgSrc} />
      <Category>{category}</Category>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  padding: 0px 12px 12px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 6px;
`;

const Category = styled.h3`
  font-size: 20px;
  font-weight: 600;
  padding-top: 12px;
`;

export default CategoryCard;
