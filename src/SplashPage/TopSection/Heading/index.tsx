import styled from '@emotion/styled';

interface Props {
  readonly message: string;
}

function Heading({ message }: Props) {
  return <Title>{message}</Title>;
}

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
`;

export default Heading;
